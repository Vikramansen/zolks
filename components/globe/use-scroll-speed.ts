"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Returns a damped scroll velocity for coupling globe rotation to user scroll.
 */
export function useScrollSpeed(enabled: boolean): number {
  const [velocity, setVelocity] = useState(0);
  const rawRef = useRef(0);
  const prevRef = useRef({ y: 0, t: 0 });

  useEffect(() => {
    if (!enabled) return;

    prevRef.current = { y: window.scrollY, t: performance.now() };
    let raf = 0;

    const onScroll = () => {
      const now = performance.now();
      const dy = window.scrollY - prevRef.current.y;
      const dt = Math.max(16, now - prevRef.current.t);
      rawRef.current = dy / dt;
      prevRef.current = { y: window.scrollY, t: now };
    };

    const tick = () => {
      setVelocity((old) => old * 0.86 + rawRef.current * 0.14);
      rawRef.current *= 0.92;
      raf = window.requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    raf = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(raf);
    };
  }, [enabled]);

  return enabled ? velocity : 0;
}
