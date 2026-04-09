import React, { useRef, Suspense, useLayoutEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import glbUrl from '../assets/Karyaup-logo.glb';

function Model({ isHovered }) {
  const { scene } = useGLTF(glbUrl);
  const groupRef = useRef();
  const innerRef = useRef();

  // Clone the scene to ensure we have a fresh instance with independent transforms
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  // MANUALLY FIX THE PIVOT:
  // We calculate the bounding box and move the inner mesh by its negative center.
  // This makes the "visual center" of the logo sit exactly at 0,0,0 of its parent.
  useLayoutEffect(() => {
    if (innerRef.current) {
      const box = new THREE.Box3().setFromObject(innerRef.current);
      const center = new THREE.Vector3();
      box.getCenter(center);
      
      // Offset by negative center to true-center the object
      innerRef.current.position.set(-center.x, -center.y, -center.z);
    }
  }, [clonedScene]);

  // Rotate smoothly over time on the parent group which is now perfectly centered
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * (isHovered ? 2.0 : 0.8);
    }
  });

  return (
    <group ref={groupRef}>
      <primitive
        ref={innerRef}
        object={clonedScene}
        scale={0.5} 
      />
    </group>
  );
}

export default function SpinningLogo3D({ className, isHovered }) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 12], fov: 25 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={2.5} />
        <directionalLight position={[5, 10, 7]} intensity={3} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#a855f7" />
        <Environment preset="city" />

        <Suspense fallback={null}>
          <Model isHovered={isHovered} />
        </Suspense>
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          minPolarAngle={Math.PI / 2.5} 
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
}
