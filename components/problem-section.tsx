"use client";

import type { RefObject } from "react";
import { motion, useReducedMotion } from "framer-motion";

const stats = [
  {
    value: "$7M",
    label: "average enterprise AI budget in 2026, up 6x from 2024",
  },
  {
    value: "88%",
    label: "of teams hit surprise inference bills last quarter",
  },
  {
    value: "40x",
    label: "cost difference between an efficient agent and a leaky one",
  },
];

type ProblemSectionProps = {
  sectionRef?: RefObject<HTMLElement | null>;
};

export function ProblemSection({ sectionRef }: ProblemSectionProps) {
  const reduceMotion = useReducedMotion();
  const shouldAnimate = !reduceMotion;

  return (
    <section id="why" ref={sectionRef} className="relative border-b border-border py-28 md:py-36">
      <div className="content-shell mx-auto max-w-6xl px-6 md:px-10">
        <motion.div
          className="max-w-3xl space-y-6"
          initial={shouldAnimate ? { opacity: 0, y: 20 } : undefined}
          whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
          viewport={shouldAnimate ? { once: true, amount: 0.2 } : undefined}
          transition={shouldAnimate ? { duration: 0.45, ease: [0.22, 1, 0.36, 1] } : undefined}
        >
          <h2 className="font-display text-[2rem] font-medium leading-[1.1] text-text md:text-[2.25rem]">
            By 2030, agents will outnumber human workers online.
          </h2>
          <p className="max-w-2xl text-base leading-[1.65] text-text-muted">
            Every pulse on this globe is an agent making a request somewhere in the world.
            Right now, teams are spending hundreds of thousands of dollars a month on tokens
            they can&apos;t attribute, retries they can&apos;t see, and loops they can&apos;t stop.
          </p>
        </motion.div>

        <motion.ul
          className="mt-12 grid gap-6 border-t border-border pt-8 md:grid-cols-3"
          initial={shouldAnimate ? { opacity: 0, y: 20 } : undefined}
          whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
          viewport={shouldAnimate ? { once: true, amount: 0.2 } : undefined}
          transition={
            shouldAnimate
              ? { duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.12 }
              : undefined
          }
        >
          {stats.map((stat) => (
            <li key={stat.value} className="space-y-2">
              <p className="font-mono text-[2rem] text-text">{stat.value}</p>
              <p className="font-display text-[1rem] text-text-muted">{stat.label}</p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
