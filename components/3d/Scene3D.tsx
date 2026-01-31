'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float, Text3D, Center } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

function NeuralNetworkNode({ position, delay = 0 }: { position: [number, number, number]; delay?: number }) {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position}>
        <sphereGeometry args={[0.1, 32, 32]} />
        <meshStandardMaterial
          color="#00ff88"
          emissive="#00ff88"
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
}

function Connection({ start, end }: { start: [number, number, number]; end: [number, number, number] }) {
  const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)];
  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <primitive object={new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: '#00ff88', opacity: 0.3, transparent: true }))} />
  );
}

function NeuralNetwork() {
  const nodes: [number, number, number][] = [
    [-2, 1, 0], [-1, 1, 0], [0, 1, 0], [1, 1, 0], [2, 1, 0],
    [-1.5, 0, 0], [-0.5, 0, 0], [0.5, 0, 0], [1.5, 0, 0],
    [-1, -1, 0], [0, -1, 0], [1, -1, 0],
  ];

  return (
    <>
      {nodes.map((node, i) => (
        <NeuralNetworkNode key={i} position={node} delay={i * 0.1} />
      ))}
      {/* Create connections between layers */}
      {nodes.slice(0, 5).map((start, i) => 
        nodes.slice(5, 9).map((end, j) => (
          <Connection key={`${i}-${j}`} start={start} end={end} />
        ))
      )}
      {nodes.slice(5, 9).map((start, i) => 
        nodes.slice(9).map((end, j) => (
          <Connection key={`${i}-${j}`} start={start} end={end} />
        ))
      )}
    </>
  );
}

export default function Scene3D() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Simplified version for mobile - just stars, no neural network
  if (isMobile) {
    return (
      <div className="w-full h-screen absolute inset-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <Stars radius={100} depth={50} count={2000} factor={4} fade speed={1} />
        </Canvas>
      </div>
    );
  }

  return (
    <div className="w-full h-screen absolute inset-0 hidden md:block">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#00d9ff" intensity={0.5} />
        
        <NeuralNetwork />
        
        <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
