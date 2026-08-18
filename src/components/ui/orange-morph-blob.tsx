'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { shaderMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

// 4D Simplex Noise from Ashima Arts
const glslNoise = `
//
// Description : Array and textureless GLSL 2D/3D/4D simplex
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : stegu
//     Lastmod : 20201014 (stegu)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//               https://github.com/stegu/webgl-noise
//

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0; }

float mod289(float x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0; }

vec4 permute(vec4 x) {
     return mod289(((x*34.0)+10.0)*x);
}

float permute(float x) {
     return mod289(((x*34.0)+10.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float taylorInvSqrt(float r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec4 grad4(float j, vec4 ip)
{
  const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);
  vec4 p,s;

  p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
  s = vec4(lessThan(p, vec4(0.0)));
  p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;

  return p;
}

#define F4 0.309016994374947451

float snoise(vec4 v)
{
  const vec4  C = vec4( 0.138196601125011,  // (5 - sqrt(5))/20  G4
                        0.276393202250021,  // 2 * G4
                        0.414589803375032,  // 3 * G4
                       -0.447213595499958); // -1 + 4 * G4

// First corner
  vec4 i  = floor(v + dot(v, vec4(F4)) );
  vec4 x0 = v -   i + dot(i, C.xxxx);

// Other corners

// Rank sorting originally contributed by Bill Licea-Kane, AMD (formerly ATI)
  vec4 i0;
  vec3 isX = step( x0.yzw, x0.xxx );
  vec3 isYZ = step( x0.zww, x0.yyz );
//  i0.x = dot( isX, vec3( 1.0 ) );
  i0.x = isX.x + isX.y + isX.z;
  i0.yzw = 1.0 - isX;
//  i0.y += dot( isYZ.xy, vec2( 1.0 ) );
  i0.y += isYZ.x + isYZ.y;
  i0.zw += 1.0 - isYZ.xy;
  i0.z += isYZ.z;
  i0.w += 1.0 - isYZ.z;

  // i0 now contains the unique values 0,1,2,3 in each channel
  vec4 i3 = clamp( i0, 0.0, 1.0 );
  vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );
  vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );

  //  x0 = x0 - 0.0 + 0.0 * C.xxxx
  //  x1 = x0 - i1  + 1.0 * C.xxxx
  //  x2 = x0 - i2  + 2.0 * C.xxxx
  //  x3 = x0 - i3  + 3.0 * C.xxxx
  //  x4 = x0 - 1.0 + 4.0 * C.xxxx
  vec4 x1 = x0 - i1 + C.xxxx;
  vec4 x2 = x0 - i2 + C.yyyy;
  vec4 x3 = x0 - i3 + C.zzzz;
  vec4 x4 = x0 + C.wwww;

// Permutations
  i = mod289(i);
  float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);
  vec4 j1 = permute( permute( permute( permute (
             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))
           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))
           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))
           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));

// Gradients: 7x7x6 points over a cube, mapped onto a 4-cross polytope
// 7*7*6 = 294, which is close to the ring size 17*17 = 289.
  vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;

  vec4 p0 = grad4(j0,   ip);
  vec4 p1 = grad4(j1.x, ip);
  vec4 p2 = grad4(j1.y, ip);
  vec4 p3 = grad4(j1.z, ip);
  vec4 p4 = grad4(j1.w, ip);

// Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;
  p4 *= taylorInvSqrt(dot(p4,p4));

// Mix contributions from the five corners
  vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);
  vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)), 0.0);
  m0 = m0 * m0;
  m1 = m1 * m1;
  return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))
               + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;
}
`;

const BlobMaterial = shaderMaterial(
  {
    uTime: 0,
    uNoiseScale: 1.8,
    uAmplitude: 0.55,
    uBaseRadius: 1.0,
    uContourFreq: 6.0,
    uContourWidth: 0.08,
  },
  // Vertex Shader
  `
  ${glslNoise}

  uniform float uTime;
  uniform float uNoiseScale;
  uniform float uAmplitude;
  uniform float uBaseRadius;
  
  varying float vNoise;
  varying vec2 vUv;
  varying vec3 vNormal;
  
  float sampleNoise(vec3 p, float t) {
    float base = snoise(vec4(p * uNoiseScale, t));
    float detail = snoise(vec4(p * uNoiseScale * 2.0, t * 2.0));
    return 0.75 * base + 0.25 * detail;
  }
  
  void main() {
    vUv = uv;
    vNormal = normal;
    
    vec3 pos = normalize(position) * uBaseRadius;
    float noiseVal = sampleNoise(pos, uTime);
    vNoise = noiseVal;
    
    // Displacement
    float disp = noiseVal * uAmplitude;
    pos += normalize(position) * disp;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
  `,
  // Fragment Shader
  `
  uniform float uContourFreq;
  uniform float uContourWidth;
  
  varying float vNoise;
  varying vec2 vUv;
  varying vec3 vNormal;
  
  void main() {
    // Base Color (deep dark gray/pure black to blend with #0a0a0a background)
    vec3 baseColor = vec3(0.04, 0.04, 0.04);
    
    // Contour (Topographical) Lines
    float band = fract(vNoise * uContourFreq);
    
    // Slightly smoother step for elegant lines
    float lineSharp = 1.0 - smoothstep(uContourWidth - 0.015, uContourWidth, band);
    
    // Emissive brand orange (#FF4D00)
    vec3 brandOrange = vec3(1.0, 0.302, 0.0) * 2.5; 
    
    vec3 finalColor = mix(baseColor, brandOrange, lineSharp);
    
    // Translucency for holographic energy field effect
    float alpha = mix(0.15, 1.0, lineSharp);
    
    gl_FragColor = vec4(finalColor, alpha);
    
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
  `
);

extend({ BlobMaterial });

// Add types for custom material in React 19 / Three Fiber
declare module "@react-three/fiber" {
  interface ThreeElements {
    blobMaterial: any;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      blobMaterial: any;
    }
  }
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        blobMaterial: any;
      }
    }
  }
}

const BlobMesh = () => {
  const materialRef = useRef<any>(null);

  useFrame((state) => {
    if (materialRef.current) {
      // Matching TIME_SPEED = 0.18 from Python script
      materialRef.current.uTime = state.clock.elapsedTime * 0.18;
    }
  });

  return (
    <mesh>
      {/* 
        Higher segment count for smoother displacement.
        Matches the intent of GRID_RES = 60 in python, but WebGL 
        can handle more for a cleaner surface.
      */}
      <sphereGeometry args={[1.0, 256, 256]} />
      <blobMaterial
        ref={materialRef}
        uNoiseScale={1.6}
        uAmplitude={0.25}
        uBaseRadius={1.0}
        uContourFreq={6.0}
        uContourWidth={0.06}
        transparent={true}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
};

export default function OrangeMorphBlob() {
  return (
    <div className="w-full h-full relative cursor-move z-0">
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <BlobMesh />

        {/* Subtle cinematic rotation */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1.0}
        />

        {/* Add subtle bloom for the white emissive contours */}
        <EffectComposer>
          <Bloom
            luminanceThreshold={0.8}
            mipmapBlur
            intensity={1.0}
            radius={0.4}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
