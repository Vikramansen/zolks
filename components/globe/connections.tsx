"use client";

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { latLngToVector3 } from "@/lib/data-center-coords";

const ROUTES: Array<[[number, number], [number, number]]> = [
  [[39.0437, -77.4875], [53.3498, -6.2603]], // Ashburn -> Dublin
  [[39.0437, -77.4875], [1.3521, 103.8198]], // Ashburn -> Singapore
  [[53.3498, -6.2603], [50.1109, 8.6821]], // Dublin -> Frankfurt
  [[50.1109, 8.6821], [19.076, 72.8777]], // Frankfurt -> Mumbai
  [[19.076, 72.8777], [1.3521, 103.8198]], // Mumbai -> Singapore
  [[1.3521, 103.8198], [35.6762, 139.6503]], // Singapore -> Tokyo
  [[35.6762, 139.6503], [37.5665, 126.978]], // Tokyo -> Seoul
  [[35.6762, 139.6503], [-33.8688, 151.2093]], // Tokyo -> Sydney
  [[40.7128, -74.006], [40.4168, -3.7038]], // New York -> Madrid
  [[40.7128, -74.006], [-23.5505, -46.6333]], // New York -> Sao Paulo
  [[-23.5505, -46.6333], [40.4168, -3.7038]], // Sao Paulo -> Madrid
  [[25.2048, 55.2708], [1.3521, 103.8198]], // Dubai -> Singapore
];

function buildGreatCircle(
  start: [number, number],
  end: [number, number],
  radius: number
): Float32Array {
  const a = new THREE.Vector3(...latLngToVector3(start[0], start[1], 1)).normalize();
  const b = new THREE.Vector3(...latLngToVector3(end[0], end[1], 1)).normalize();
  const angle = a.angleTo(b);
  const points: number[] = [];
  const segments = 46;

  for (let i = 0; i <= segments; i += 1) {
    const t = i / segments;
    const sinTotal = Math.sin(angle);
    const w1 = sinTotal === 0 ? 1 - t : Math.sin((1 - t) * angle) / sinTotal;
    const w2 = sinTotal === 0 ? t : Math.sin(t * angle) / sinTotal;
    const point = a.clone().multiplyScalar(w1).add(b.clone().multiplyScalar(w2)).normalize();
    const arcLift = 1 + Math.sin(Math.PI * t) * 0.08;
    point.multiplyScalar(radius * arcLift);
    points.push(point.x, point.y, point.z);
  }

  return new Float32Array(points);
}

export function Connections({
  radius = 2.25,
  dimmed = false,
}: {
  radius?: number;
  dimmed?: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const materialRefs = useRef<THREE.LineBasicMaterial[]>([]);

  const geometries = useMemo(
    () => ROUTES.map((route) => buildGreatCircle(route[0], route[1], radius)),
    [radius]
  );

  useFrame((_, delta) => {
    const target = dimmed ? 0.08 : 0.16;
    for (const material of materialRefs.current) {
      material.opacity = THREE.MathUtils.damp(material.opacity, target, 6, delta);
    }
  });

  return (
    <group ref={groupRef}>
      {geometries.map((positions, idx) => (
        <line key={`route-${idx}`}>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          </bufferGeometry>
          <lineBasicMaterial
            ref={(el) => {
              if (!el) return;
              materialRefs.current[idx] = el;
            }}
            color="#ff8a3d"
            transparent
            opacity={0.16}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </line>
      ))}
    </group>
  );
}
