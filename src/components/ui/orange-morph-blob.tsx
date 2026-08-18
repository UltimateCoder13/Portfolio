'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { shaderMaterial, OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

// 4D Simplex Noise from Ashima Arts
const glslNoise = `
vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

float mod289(float x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
  return mod289(((x*34.0)+10.0)*x);
}

float permute(float x) {
  return mod289(((x*34.0)+10.0)*x);
}

vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

float taylorInvSqrt(float r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec4 grad4(float j, vec4 ip) {
  const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);
  vec4 p,s;

  p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
  s = vec4(lessThan(p, vec4(0.0)));
  p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;

  return p;
}

#define F4 0.309016994374947451

float snoise(vec4 v) {
  const vec4 C = vec4( 0.138196601125011,
                        0.276393202250021,
                        0.414589803375032,
                       -0.447213595499958);

  vec4 i  = floor(v + dot(v, vec4(F4)) );
  vec4 x0 = v -   i + dot(i, C.xxxx);

  vec4 i0;
  vec3 isX = step( x0.yzw, x0.xxx );
  vec3 isYZ = step( x0.zww, x0.yyz );
  i0.x = isX.x + isX.y + isX.z;
  i0.yzw = 1.0 - isX;
  i0.y += isYZ.x + isYZ.y;
  i0.zw += 1.0 - isYZ.xy;
  i0.z += isYZ.z;
  i0.w += 1.0 - isYZ.z;

  vec4 i3 = clamp( i0, 0.0, 1.0 );
  vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );
  vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );

  vec4 x1 = x0 - i1 + C.xxxx;
  vec4 x2 = x0 - i2 + C.yyyy;
  vec4 x3 = x0 - i3 + C.zzzz;
  vec4 x4 = x0 + C.wwww;

  i = mod289(i);
  float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);
  vec4 j1 = permute( permute( permute( permute (
             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))
           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))
           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))
           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));

  vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;

  vec4 p0 = grad4(j0,   ip);
  vec4 p1 = grad4(j1.x, ip);
  vec4 p2 = grad4(j1.y, ip);
  vec4 p3 = grad4(j1.z, ip);
  vec4 p4 = grad4(j1.w, ip);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;
  p4 *= taylorInvSqrt(dot(p4,p4));

  vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);
  vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)), 0.0);
  m0 = m0 * m0;
  m1 = m1 * m1;
  return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))
               + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;
}
`;

const LiquidBlobMaterial = shaderMaterial(
  {
    uTime: 0,
    uNoiseScale: 0.9,
    uAmplitude: 0.48,
    uBaseRadius: 1.15,
    // Brand aesthetic colors (Obsidian dark base -> Brand #FF4D00 -> Molten Amber highlight -> Crimson accent)
    uDeepBaseColor: new THREE.Color('#140500'),
    uMidAccentColor: new THREE.Color('#FF4D00'),
    uBrightAmberColor: new THREE.Color('#FFAA33'),
    uDarkCrimsonRim: new THREE.Color('#880A00'),
  },
  // Vertex Shader
  `
  ${glslNoise}

  uniform float uTime;
  uniform float uNoiseScale;
  uniform float uAmplitude;
  uniform float uBaseRadius;

  varying vec3 vNormal;
  varying vec3 vPosition;
  varying vec3 vViewDir;
  varying float vDisplacement;

  // Multi-frequency smooth organic fluid displacement
  float getDisplacement(vec3 p, float t) {
    vec3 np = normalize(p);
    
    // Low frequency, large undulating lobes
    float n1 = snoise(vec4(np * uNoiseScale, t * 0.45));
    
    // Secondary organic folds
    float n2 = snoise(vec4(np * (uNoiseScale * 2.2) + vec3(n1 * 0.5), t * 0.65));
    
    // Subtle fluid surface tension
    float n3 = snoise(vec4(np * (uNoiseScale * 4.0), t * 0.85)) * 0.25;
    
    float raw = n1 * 0.7 + n2 * 0.35 + n3;
    return sign(raw) * pow(abs(raw), 1.25) * uAmplitude;
  }

  void main() {
    vec3 normPos = normalize(position);
    float disp = getDisplacement(normPos, uTime);
    vDisplacement = disp;
    
    vec3 newPosition = normPos * (uBaseRadius + disp);
    
    // Compute accurate surface normals via finite differences
    float eps = 0.015;
    vec3 tangent1 = normalize(cross(normPos, vec3(0.0, 1.0, 0.001)));
    vec3 tangent2 = normalize(cross(normPos, tangent1));
    
    vec3 p1 = normalize(normPos + tangent1 * eps);
    vec3 p2 = normalize(normPos + tangent2 * eps);
    
    vec3 p1Displaced = p1 * (uBaseRadius + getDisplacement(p1, uTime));
    vec3 p2Displaced = p2 * (uBaseRadius + getDisplacement(p2, uTime));
    
    vec3 computedNormal = normalize(cross(p1Displaced - newPosition, p2Displaced - newPosition));
    
    // Transform normal and position to view space
    vNormal = normalize(normalMatrix * computedNormal);
    vec4 mvPosition = modelViewMatrix * vec4(newPosition, 1.0);
    vPosition = mvPosition.xyz;
    vViewDir = normalize(-mvPosition.xyz);
    
    gl_Position = projectionMatrix * mvPosition;
  }
  `,
  // Fragment Shader
  `
  uniform vec3 uDeepBaseColor;
  uniform vec3 uMidAccentColor;
  uniform vec3 uBrightAmberColor;
  uniform vec3 uDarkCrimsonRim;

  varying vec3 vNormal;
  varying vec3 vPosition;
  varying vec3 vViewDir;
  varying float vDisplacement;

  void main() {
    vec3 N = normalize(vNormal);
    vec3 V = normalize(vViewDir);

    // Primary Key Light (Top-Right Front warm energetic key light)
    vec3 keyLightDir = normalize(vec3(0.65, 0.85, 1.1));
    float diffKey = max(dot(N, keyLightDir), 0.0);
    
    // Blinn-Phong Specular Highlighting (Liquid metallic shine)
    vec3 halfKey = normalize(keyLightDir + V);
    float specTight = pow(max(dot(N, halfKey), 0.0), 48.0);
    float specBroad = pow(max(dot(N, halfKey), 0.0), 12.0) * 0.35;
    float totalSpec = specTight * 1.8 + specBroad;

    // Fill Light (Top-Left subtle warm fill)
    vec3 fillLightDir = normalize(vec3(-0.7, 0.6, 0.5));
    float diffFill = max(dot(N, fillLightDir), 0.0) * 0.4;

    // Underbelly & Crevice Accent Light (Deep crimson-orange rim in shadows)
    vec3 rimLightDir = normalize(vec3(-0.55, -0.85, -0.2));
    float diffRim = max(dot(N, rimLightDir), 0.0);
    
    float rimFactor = pow(1.0 - max(dot(N, V), 0.0), 2.8);
    float undersideFacing = max(-N.y * 0.8 - N.x * 0.45, 0.0);
    float creviceAccent = rimFactor * undersideFacing * 2.5 + diffRim * 1.1;

    // Color gradient mapping: Deep obsidian bronze -> Brand Orange (#FF4D00) -> Molten Golden Amber
    vec3 baseGradient = mix(uDeepBaseColor, uMidAccentColor, smoothstep(-0.15, 0.75, diffKey + diffFill));
    baseGradient = mix(baseGradient, uBrightAmberColor, smoothstep(0.4, 1.1, diffKey + vDisplacement * 0.5));

    // Brand Orange edge fresnel rim along silhouette
    float orangeRim = rimFactor * max(N.y * 0.6 + N.z * 0.4, 0.0) * 1.6;
    vec3 orangeRimGlow = uMidAccentColor * orangeRim * 1.8;

    // Dark crimson crevice tone in lower folds
    vec3 creviceGlow = uDarkCrimsonRim * creviceAccent;

    // Specular highlight: Crisp warm ivory to golden sheen
    vec3 specColor = mix(vec3(1.0, 0.8, 0.5), vec3(1.0, 0.98, 0.95), specTight) * totalSpec;

    // Subtle ambient base
    float ambient = 0.15;

    // Composite final surface
    vec3 finalColor = baseGradient * (diffKey * 0.9 + diffFill + ambient) + creviceGlow + orangeRimGlow + specColor;

    gl_FragColor = vec4(finalColor, 1.0);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
  `
);

extend({ LiquidBlobMaterial });

// React 19 / Three Fiber intrinsic types
declare module "@react-three/fiber" {
  interface ThreeElements {
    liquidBlobMaterial: any;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      liquidBlobMaterial: any;
    }
  }
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        liquidBlobMaterial: any;
      }
    }
  }
}

const BlobMesh = () => {
  const materialRef = useRef<any>(null);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (materialRef.current) {
      // Fluid time speed matching the reference animation tempo
      materialRef.current.uTime = state.clock.elapsedTime * 0.55;
    }
    if (meshRef.current) {
      // Subtle continuous organic rotation
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.08;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.08;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.3}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.0, 160, 160]} />
        <liquidBlobMaterial
          ref={materialRef}
          uNoiseScale={1.1}
          uAmplitude={0.42}
          uBaseRadius={1.1}
        />
      </mesh>
    </Float>
  );
};

export default function FluidMorphBlob() {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing z-0">
      <Canvas
        camera={{ position: [0, 0, 4.0], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <BlobMesh />

        {/* Interactive OrbitControls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.8}
          dampingFactor={0.05}
        />

        {/* Luminous bloom tuned to highlight the brand orange sheen and crests */}
        <EffectComposer>
          <Bloom
            luminanceThreshold={0.82}
            mipmapBlur
            intensity={0.6}
            radius={0.4}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
