"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ProviderStrip } from "@/components/provider-strip";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const shouldAnimate = !reduceMotion;

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center border-b border-border/80"
    >
      <div className="content-shell mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 md:grid-cols-[minmax(0,600px)_1fr] md:px-10">
        <motion.div
          className="reveal-root max-w-xl space-y-6"
          initial={shouldAnimate ? { opacity: 0, y: 20 } : undefined}
          whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
          viewport={shouldAnimate ? { once: true, amount: 0.45 } : undefined}
          transition={shouldAnimate ? { duration: 0.45, ease: [0.22, 1, 0.36, 1] } : undefined}
        >
          <p className="eyebrow-label">Cost observability for agents · Made in San Francisco</p>
          <h1 className="font-display text-[2.5rem] font-medium leading-[1.06] text-text md:text-[3.5rem]">
            Your agents are burning tokens right now.
          </h1>
          <p className="max-w-lg text-[1.125rem] leading-relaxed text-text-muted">
            Zolks shows you which ones. In real time, with the context to actually fix it.
          </p>
          <div className="flex flex-wrap gap-3 pt-3">
            <Link
              href="#join"
              className="rounded-none border border-accent bg-accent px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-black transition hover:bg-accent-dim"
            >
              Get on the waitlist
            </Link>
            <Link
              href="/docs"
              className="rounded-none border border-border px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-text transition hover:border-accent hover:text-accent"
            >
              Read the docs →
            </Link>
          </div>
          <ProviderStrip />
          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              href="https://github.com/Vikramansen/zolks-python.git"
              target="_blank"
              rel="noreferrer"
              className="rounded-none border border-border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-text-muted transition hover:border-accent hover:text-accent"
            >
              GitHub repo ↗
            </Link>
            <Link
              href="https://github.com/Vikramansen/zolks-python#readme"
              target="_blank"
              rel="noreferrer"
              className="rounded-none border border-border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-text-muted transition hover:border-accent hover:text-accent"
            >
              SDK docs ↗
            </Link>
          </div>
        </motion.div>
        <div className="hidden md:block" aria-hidden />
      </div>
    </section>
  );
}

export default Hero;
