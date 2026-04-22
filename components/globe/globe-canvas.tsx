"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";
import { GlobeMesh } from "@/components/globe/globe-mesh";
import { Pulses } from "@/components/globe/pulses";
import { Connections } from "@/components/globe/connections";
import { useScrollSpeed } from "@/components/globe/use-scroll-speed";

type GlobeCanvasProps = {
  problemIntensity: number;
  dimmed: boolean;
};

function GlobeScene({
  scrollSpeed,
  spawnRate,
  dimmed,
}: {
  scrollSpeed: number;
  spawnRate: number;
  dimmed: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const baseSpeed = 0.1;
    const coupled = THREE.MathUtils.clamp(scrollSpeed * 0.005, -0.3, 0.4);
    groupRef.current.rotation.y += (baseSpeed + coupled) * delta;
  });

  return (
    <>
      <ambientLight intensity={0.16} />
      <directionalLight position={[5, 2, 4]} intensity={1.15} />
      <group ref={groupRef}>
        <GlobeMesh dimmed={dimmed} />
        <Connections dimmed={dimmed} />
        <Pulses spawnRate={spawnRate} />
      </group>
    </>
  );
}

function FallbackGlobe() {
  return (
    <div className="globe-backdrop flex items-center justify-center">
      <div className="fallback-globe">
        <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden>
          <circle cx="50" cy="50" r="49" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.4" />
          <ellipse cx="50" cy="50" rx="42" ry="17" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="0.35" />
          <ellipse cx="50" cy="50" rx="28" ry="49" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.35" />
          <path
            d="M18 44C28 34 44 30 58 32C66 33 71 35 78 38M22 58C32 66 42 69 54 67C63 65 72 62 79 56"
            fill="none"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="0.45"
            strokeLinecap="round"
          />
        </svg>
        <span className="fallback-pulse" style={{ left: "26%", top: "32%", animationDelay: "0s" }} />
        <span className="fallback-pulse" style={{ left: "63%", top: "29%", animationDelay: "0.5s" }} />
        <span className="fallback-pulse" style={{ left: "45%", top: "52%", animationDelay: "0.2s" }} />
        <span className="fallback-pulse" style={{ left: "58%", top: "66%", animationDelay: "0.9s" }} />
        <span className="fallback-pulse" style={{ left: "35%", top: "68%", animationDelay: "1.2s" }} />
      </div>
    </div>
  );
}

export function GlobeCanvas({ problemIntensity, dimmed }: GlobeCanvasProps) {
  const reduceMotion = useReducedMotion();
  const [canUseWebGL, setCanUseWebGL] = useState<boolean | null>(null);
  const scrollSpeed = useScrollSpeed(!reduceMotion);

  useEffect(() => {
    if (reduceMotion) return;

    if (typeof window === "undefined") return;
    let raf = 0;
    raf = window.requestAnimationFrame(() => {
      if (navigator.hardwareConcurrency < 4) {
        setCanUseWebGL(false);
        return;
      }
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("webgl2") || canvas.getContext("webgl");
      setCanUseWebGL(Boolean(context));
    });
    return () => window.cancelAnimationFrame(raf);
  }, [reduceMotion]);

  const spawnRate = useMemo(() => 4 + problemIntensity * 36, [problemIntensity]);

  if (reduceMotion || canUseWebGL === false) return <FallbackGlobe />;

  return (
    <div className="globe-backdrop">
      <Canvas
        camera={{ position: [0, 0, 6.1], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <GlobeScene scrollSpeed={scrollSpeed} spawnRate={spawnRate} dimmed={dimmed} />
      </Canvas>
    </div>
  );
}
