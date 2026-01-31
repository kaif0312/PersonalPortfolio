'use client';

import { Canvas } from '@react-three/fiber';
import { Float, Text } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const achievements = [
  { year: '2021', title: 'JEE Advanced', rank: 'AIR 6420', position: [-3, 2, 0] as [number, number, number] },
  { year: '2023', title: 'IGVC 2023', rank: '1st Place', position: [-1, 1, 0] as [number, number, number] },
  { year: '2025', title: 'POSTECH Scholar', rank: '1 of 6 Global', position: [1, 0, 0] as [number, number, number] },
  { year: '2025', title: 'MVA Publication', rank: 'Lane Detection', position: [3, -1, 0] as [number, number, number] },
];

function AchievementNode({ achievement, index }: { achievement: typeof achievements[0]; index: number }) {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group position={achievement.position}>
        <mesh>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <meshStandardMaterial
            color="#00ff88"
            emissive="#00ff88"
            emissiveIntensity={0.3}
          />
        </mesh>
        <Text
          position={[0, -0.6, 0]}
          fontSize={0.15}
          color="#00ff88"
          anchorX="center"
          anchorY="middle"
        >
          {achievement.year}
        </Text>
      </group>
    </Float>
  );
}

function TimelineLine() {
  const points = achievements.map(a => new THREE.Vector3(...a.position));
  const curve = new THREE.CatmullRomCurve3(points);
  const geometry = new THREE.TubeGeometry(curve, 100, 0.05, 8, false);

  return (
    <primitive object={new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: '#00ff88', opacity: 0.5, transparent: true }))} />
  );
}

export default function Timeline3D() {
  return (
    <div className="w-full h-[600px]">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#00d9ff" intensity={0.5} />
        
        <TimelineLine />
        
        {achievements.map((achievement, index) => (
          <AchievementNode key={index} achievement={achievement} index={index} />
        ))}
      </Canvas>
    </div>
  );
}
