/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 public/administrative/scene.glb -o src/components/models/administrative.jsx 
Author: reginald7 (https://sketchfab.com/reginald7)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/low-poly-shop-e41e8060496a4693a9f62f5a4dd5b252
Title: Low-Poly Shop
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function AdministrativeModel(props) {
  const { nodes, materials } = useGLTF("/administrative/scene.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[0, 3.966, 0]} scale={[16.429, 6.907, 12.85]}>
          <mesh
            geometry={nodes.pCube1_lambert6_0.geometry}
            material={materials.lambert6}
          />
          <mesh
            geometry={nodes.pCube1_lambert8_0.geometry}
            material={materials.lambert8}
          />
          <mesh
            geometry={nodes.pCube1_lambert1_0.geometry}
            material={materials.lambert1}
          />
          <mesh
            geometry={nodes.pCube1_lambert7_0.geometry}
            material={materials.lambert7}
          />
          <mesh
            geometry={nodes.pCube1_lambert13_0.geometry}
            material={materials.lambert13}
          />
          <mesh
            geometry={nodes.pCube1_lambert11_0.geometry}
            material={materials.lambert11}
          />
          <mesh
            geometry={nodes.pCube1_lambert12_0.geometry}
            material={materials.lambert12}
          />
          <mesh
            geometry={nodes.pCube1_lambert10_0.geometry}
            material={materials.lambert10}
          />
          <mesh
            geometry={nodes.pCube1_lambert9_0.geometry}
            material={materials.lambert9}
          />
        </group>
        <group position={[-4.645, 1.196, 7.033]} scale={[4.718, 1.13, 1.13]}>
          <mesh
            geometry={nodes.pCube3_lambert5_0.geometry}
            material={materials.lambert5}
          />
          <mesh
            geometry={nodes.pCube3_lambert4_0.geometry}
            material={materials.lambert4}
          />
          <mesh
            geometry={nodes.pCube3_lambert3_0.geometry}
            material={materials.lambert3}
          />
        </group>
        <group position={[0, 0.046, 0]}>
          <mesh
            geometry={nodes.pCube5_lambert8_0.geometry}
            material={materials.lambert8}
          />
          <mesh
            geometry={nodes.pCube5_lambert6_0.geometry}
            material={materials.lambert6}
          />
          <mesh
            geometry={nodes.pCube5_lambert1_0.geometry}
            material={materials.lambert1}
          />
        </group>
        <mesh
          geometry={nodes.pPlatonic1_lambert2_0.geometry}
          material={materials.lambert2}
          position={[-2.555, -0.135, 7.005]}
          scale={[0.622, 0.527, 0.753]}
        />
        <mesh
          geometry={nodes.pPlatonic2_lambert2_0.geometry}
          material={materials.lambert2}
          position={[-3.192, -0.048, 7.877]}
          rotation={[0, -0.933, 0.493]}
          scale={[0.622, 0.527, 0.753]}
        />
        <mesh
          geometry={nodes.pPlatonic3_lambert2_0.geometry}
          material={materials.lambert2}
          position={[-5.969, -0.229, 7.877]}
          rotation={[0, -0.933, 0.493]}
          scale={[0.659, 0.558, 0.798]}
        />
        <mesh
          geometry={nodes.pPlatonic4_lambert2_0.geometry}
          material={materials.lambert2}
          position={[-6.787, 1.013, 6.188]}
          rotation={[1.271, 0.367, -1.056]}
          scale={[0.622, 0.527, 0.753]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/administrative/scene.glb");