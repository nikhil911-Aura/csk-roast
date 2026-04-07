"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Trophy() {
  const ref = useRef<THREE.Group>(null!);
  useFrame((s) => {
    ref.current.rotation.y = s.clock.getElapsedTime() * 0.6;
  });
  return (
    <Float speed={2} floatIntensity={1.4}>
      <group ref={ref} scale={1.1}>
        {/* Cup body */}
        <mesh position={[0, 0.6, 0]}>
          <cylinderGeometry args={[0.7, 0.4, 1.2, 32]} />
          <meshStandardMaterial color="#FFD60A" metalness={1} roughness={0.15} emissive="#F5B301" emissiveIntensity={0.3} />
        </mesh>
        {/* Stem */}
        <mesh position={[0, -0.25, 0]}>
          <cylinderGeometry args={[0.12, 0.12, 0.5, 16]} />
          <meshStandardMaterial color="#F5B301" metalness={1} roughness={0.2} />
        </mesh>
        {/* Base */}
        <mesh position={[0, -0.6, 0]}>
          <cylinderGeometry args={[0.55, 0.55, 0.2, 32]} />
          <meshStandardMaterial color="#F5B301" metalness={1} roughness={0.25} />
        </mesh>
        {/* Handles */}
        <mesh position={[0.85, 0.6, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.3, 0.06, 12, 24, Math.PI]} />
          <meshStandardMaterial color="#FFD60A" metalness={1} roughness={0.15} />
        </mesh>
        <mesh position={[-0.85, 0.6, 0]} rotation={[0, 0, -Math.PI / 2]}>
          <torusGeometry args={[0.3, 0.06, 12, 24, Math.PI]} />
          <meshStandardMaterial color="#FFD60A" metalness={1} roughness={0.15} />
        </mesh>
      </group>
    </Float>
  );
}

export default function TrophyScene() {
  return (
    <Canvas
      className="!absolute inset-0"
      camera={{ position: [0, 0, 4], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.6} />
      <spotLight position={[3, 5, 3]} intensity={3} color="#FFD60A" angle={0.6} penumbra={1} />
      <pointLight position={[-3, -3, -3]} intensity={1.2} color="#F5B301" />
      <pointLight position={[3, -2, 2]} intensity={0.8} color="#ffffff" />
      <Trophy />
    </Canvas>
  );
}
