"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Points, PointMaterial, Sparkles } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Blob() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = t * 0.15;
    ref.current.rotation.y = t * 0.2;
  });
  return (
    <Float speed={1.4} rotationIntensity={1.2} floatIntensity={2}>
      <mesh ref={ref} scale={2.4}>
        <icosahedronGeometry args={[1, 24]} />
        <MeshDistortMaterial
          color="#FFD60A"
          roughness={0.15}
          metalness={0.8}
          distort={0.45}
          speed={2}
          emissive="#F5B301"
          emissiveIntensity={0.4}
        />
      </mesh>
    </Float>
  );
}

function Stars() {
  const positions = useMemo(() => {
    const arr = new Float32Array(1500 * 3);
    for (let i = 0; i < 1500; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, []);
  const ref = useRef<THREE.Points>(null!);
  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.getElapsedTime() * 0.04;
  });
  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#FFD60A"
        size={0.025}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      className="!absolute inset-0"
      camera={{ position: [0, 0, 6], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.6} color="#FFD60A" />
      <pointLight position={[-5, -5, -5]} intensity={1} color="#F5B301" />
      <pointLight position={[5, -3, 2]} intensity={0.6} color="#ffffff" />
      <Blob />
      <Stars />
      <Sparkles count={80} scale={10} size={2} speed={0.4} color="#FFD60A" />
    </Canvas>
  );
}
