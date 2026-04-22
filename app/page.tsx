"use client";

import { useEffect, useRef, useState } from "react";
import { Footer } from "@/components/footer";
import Hero from "@/components/hero";
import { ProblemSection } from "@/components/problem-section";
import { ProductSection } from "@/components/product-section";
import { GlobeCanvas } from "@/components/globe/globe-canvas";

export default function Home() {
  const problemRef = useRef<HTMLElement>(null);
  const productRef = useRef<HTMLElement>(null);
  const [problemIntensity, setProblemIntensity] = useState(0);
  const [productDim, setProductDim] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight;
      const problemRect = problemRef.current?.getBoundingClientRect();
      if (problemRect) {
        const start = vh * 0.95;
        const end = -problemRect.height * 0.4;
        const raw = (start - problemRect.top) / (start - end);
        setProblemIntensity(Math.max(0, Math.min(1, raw)));
      }

      const productRect = productRef.current?.getBoundingClientRect();
      if (productRect) {
        setProductDim(productRect.top < vh * 0.6 && productRect.bottom > vh * 0.25);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="page-shell bg-grid">
      <GlobeCanvas problemIntensity={problemIntensity} dimmed={productDim} />
      <main className="content-shell">
        <Hero />
        <ProblemSection sectionRef={problemRef} />
        <ProductSection sectionRef={productRef} />
        <Footer />
      </main>
    </div>
  );
}
