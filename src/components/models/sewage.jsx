/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 public/sewage/tank.glb -o src/components/models/sewage.jsx 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function SewageModel(props) {
  const { nodes, materials } = useGLTF("/sewage/tank.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Fuel_tank_2_.geometry}
        material={materials.Fuel_tank_2_}
        position={[-0.028, -0.002, 2.613]}
      />
    </group>
  );
}

useGLTF.preload("/sewage/tank.glb");