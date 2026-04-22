"use client";

import type { RefObject } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { TerminalBlock } from "@/components/terminal-block";

const blocks = [
  {
    heading: "Know which agent, user, or feature is burning tokens.",
    lines: [
      "$ zolks top --group-by agent",
      "",
      "agent               runs   tokens    cost    trend",
      "────────────────────────────────────────────────────",
      "refund-bot          2,847  18.4M   $146.20   ↑ 312%",
      "onboarding-agent    1,203   3.1M    $24.80   ↓ 4%",
      "support-triage      8,941   7.2M    $58.10   → flat",
    ],
  },
  {
    heading: "Get paged when an agent goes off-pattern.",
    lines: [
      "$ zolks anomalies",
      "",
      "▲ refund-bot · last 1h",
      "  cost-per-run: $0.47 (baseline $0.03, 14.2σ)",
      "  root cause: 18 of 22 runs made >10 tool calls",
      "            (normal: 3 calls/run)",
      "  last normal run: 47 minutes ago",
    ],
  },
  {
    heading: "Soon: stop runaway agents before they finish the month's budget.",
    lines: [
      "$ zolks budget set refund-bot --daily $50 --hard-cap",
      "✓ policy active · enforced at proxy layer",
    ],
  },
];

type ProductSectionProps = {
  sectionRef?: RefObject<HTMLElement | null>;
};

export function ProductSection({ sectionRef }: ProductSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section id="product" ref={sectionRef} className="relative border-b border-border py-24 md:py-32">
      <div className="content-shell mx-auto max-w-6xl space-y-14 px-6 md:px-10">
        {blocks.map((block, idx) => (
          <motion.article
            key={block.heading}
            initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: idx * 0.05 }}
            className="space-y-3"
          >
            <h3 className="font-display text-[1.4rem] font-medium leading-tight text-text md:text-[1.65rem]">
              {block.heading}
            </h3>
            <TerminalBlock lines={block.lines} />
          </motion.article>
        ))}
      </div>
    </section>
  );
}
