"use client";

import { Canvas } from "@react-three/fiber";
import { IcosahedronMesh } from "./IcosahedronMesh";

export function SceneCanvas() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[3, 3, 3]} intensity={0.8} />
      <IcosahedronMesh />
    </Canvas>
  );
}
