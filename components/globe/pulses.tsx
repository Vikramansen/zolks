"use client";

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import {
  cityPulseWeight,
  DATA_CENTER_CITIES,
  latLngToVector3,
} from "@/lib/data-center-coords";

type PulseState = {
  active: boolean;
  bornAt: number;
  duration: number;
  position: THREE.Vector3;
};

const MAX_PULSES = 220;
const RADIUS = 2.25;

export function Pulses({ spawnRate }: { spawnRate: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const statesRef = useRef<PulseState[]>(
    Array.from({ length: MAX_PULSES }, () => ({
      active: false,
      bornAt: 0,
      duration: 1.5,
      position: new THREE.Vector3(),
    }))
  );
  const spawnCarryRef = useRef(0);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const color = useMemo(() => new THREE.Color(), []);

  const cityVectors = useMemo(() => {
    return DATA_CENTER_CITIES.map((city) => ({
      vector: new THREE.Vector3(...latLngToVector3(city.lat, city.lng, RADIUS)),
      weight: cityPulseWeight(city),
    }));
  }, []);

  const totalWeight = useMemo(
    () => cityVectors.reduce((sum, item) => sum + item.weight, 0),
    [cityVectors]
  );

  const randomCity = (): THREE.Vector3 => {
    let ticket = Math.random() * totalWeight;
    for (const item of cityVectors) {
      ticket -= item.weight;
      if (ticket <= 0) return item.vector;
    }
    return cityVectors[0].vector;
  };

  useFrame((state, delta) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const elapsed = state.clock.elapsedTime;

    spawnCarryRef.current += spawnRate * delta;
    while (spawnCarryRef.current >= 1) {
      spawnCarryRef.current -= 1;
      const slot = statesRef.current.find((p) => !p.active);
      if (!slot) break;

      slot.active = true;
      slot.bornAt = elapsed;
      slot.duration = 1.2 + Math.random() * 0.45;
      slot.position.copy(randomCity());
    }

    for (let i = 0; i < statesRef.current.length; i += 1) {
      const pulse = statesRef.current[i];
      if (!pulse.active) {
        dummy.position.set(999, 999, 999);
        dummy.scale.setScalar(0);
        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
        continue;
      }

      const life = (elapsed - pulse.bornAt) / pulse.duration;
      if (life >= 1) {
        pulse.active = false;
        dummy.position.set(999, 999, 999);
        dummy.scale.setScalar(0);
        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
        continue;
      }

      const scale = 0.028 + life * 0.11;
      dummy.position.copy(pulse.position).multiplyScalar(1 + scale * 0.15);
      dummy.scale.setScalar(scale);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);

      const intensity = 1 - life;
      color.setRGB(1.0 * intensity, 0.54 * intensity, 0.24 * intensity);
      mesh.setColorAt(i, color);
    }

    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, MAX_PULSES]} frustumCulled={false}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial toneMapped={false} vertexColors transparent opacity={0.95} />
    </instancedMesh>
  );
}
