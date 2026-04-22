"use client";

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

const DOT_COUNT = 8000;
const BASE_DOT_COUNT = 4600;
const RADIUS = 2.25;

function uvFromNormal(x: number, y: number, z: number): [number, number] {
  const u = 0.5 + Math.atan2(z, x) / (Math.PI * 2);
  const v = 0.5 - Math.asin(y) / Math.PI;
  return [u, v];
}

export function GlobeMesh({ dimmed }: { dimmed: boolean }) {
  const landPointsRef = useRef<THREE.Points>(null);
  const landMaterialRef = useRef<THREE.PointsMaterial>(null);
  const basePointsRef = useRef<THREE.Points>(null);
  const baseMaterialRef = useRef<THREE.PointsMaterial>(null);
  const mask = useTexture("/land-mask.png");

  const basePositions = useMemo(() => {
    const data: number[] = [];
    for (let i = 0; i < BASE_DOT_COUNT; i += 1) {
      const t = i + 0.5;
      const y = 1 - (2 * t) / BASE_DOT_COUNT;
      const r = Math.sqrt(1 - y * y);
      const theta = Math.PI * (1 + Math.sqrt(5)) * t;
      const x = Math.cos(theta) * r;
      const z = Math.sin(theta) * r;
      data.push(x * RADIUS, y * RADIUS, z * RADIUS);
    }
    return new Float32Array(data);
  }, []);

  const landPositions = useMemo(() => {
    const image = mask.image as HTMLImageElement | undefined;
    if (!image) return new Float32Array();

    const canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return new Float32Array();

    ctx.drawImage(image, 0, 0);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

    const sample = (u: number, v: number): number => {
      const x = Math.max(0, Math.min(canvas.width - 1, Math.floor(u * (canvas.width - 1))));
      const y = Math.max(0, Math.min(canvas.height - 1, Math.floor(v * (canvas.height - 1))));
      const idx = (y * canvas.width + x) * 4;
      return imageData[idx];
    };

    const europe = sample(0.53, 0.32);
    const pacific = sample(0.16, 0.52);
    const landIsBright = europe > pacific;

    const data: number[] = [];
    let i = 0;
    let attempts = 0;
    while (i < DOT_COUNT && attempts < DOT_COUNT * 8) {
      attempts += 1;
      const t = attempts + 0.5;
      const y = 1 - (2 * t) / DOT_COUNT;
      const r = Math.sqrt(1 - y * y);
      const theta = Math.PI * (1 + Math.sqrt(5)) * t;
      const x = Math.cos(theta) * r;
      const z = Math.sin(theta) * r;
      const [u, v] = uvFromNormal(x, y, z);
      const brightness = sample(u, v);
      const isLand = landIsBright ? brightness > 120 : brightness < 120;

      if (isLand) {
        data.push(x * RADIUS, y * RADIUS, z * RADIUS);
        i += 1;
      }
    }

    return new Float32Array(data);
  }, [mask.image]);

  useFrame((_, delta) => {
    if (!landMaterialRef.current || !baseMaterialRef.current) return;
    const landTarget = dimmed ? 0.38 : 0.92;
    const baseTarget = dimmed ? 0.07 : 0.14;
    landMaterialRef.current.opacity = THREE.MathUtils.damp(
      landMaterialRef.current.opacity,
      landTarget,
      5,
      delta
    );
    baseMaterialRef.current.opacity = THREE.MathUtils.damp(
      baseMaterialRef.current.opacity,
      baseTarget,
      5,
      delta
    );
    if (landPointsRef.current) {
      landPointsRef.current.rotation.y += delta * 0.0035;
    }
    if (basePointsRef.current) {
      basePointsRef.current.rotation.y += delta * 0.0018;
    }
  });

  return (
    <group>
      <points ref={basePointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[basePositions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          ref={baseMaterialRef}
          color="#ededed"
          size={0.011}
          sizeAttenuation
          transparent
          opacity={0.14}
          depthWrite={false}
        />
      </points>
      <points ref={landPointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[landPositions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          ref={landMaterialRef}
          color="#ededed"
          size={0.015}
          sizeAttenuation
          transparent
          opacity={0.95}
          depthWrite={false}
        />
      </points>
    </group>
  );
}
