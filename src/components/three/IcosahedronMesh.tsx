"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group, Mesh } from "three";

export function IcosahedronMesh() {
  const groupRef = useRef<Group>(null);
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
    }

    if (groupRef.current) {
      const targetX = state.pointer.y * 0.2;
      const targetY = state.pointer.x * 0.2;
      groupRef.current.rotation.x +=
        (targetX - groupRef.current.rotation.x) * 0.03;
      groupRef.current.rotation.y +=
        (targetY - groupRef.current.rotation.y) * 0.03;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.6, 0]} />
        <meshStandardMaterial
          color="#2dd4bf"
          emissive="#2dd4bf"
          emissiveIntensity={0.15}
          wireframe
        />
      </mesh>
    </group>
  );
}
