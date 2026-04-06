/** Slightly imperfect terminal card — monospace, not a glass dashboard. */

export function TerminalDemo() {
  return (
    <div className="mx-auto max-w-6xl px-5 md:px-8">
      <div className="ml-auto max-w-lg rotate-[0.5deg] border border-ink/20 bg-ink p-1 shadow-[6px_8px_0_0_rgba(28,25,23,0.12)] md:mr-8">
        <div className="flex items-center gap-2 border-b border-white/10 bg-stone-900 px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-[10px] uppercase tracking-wider text-stone-500">
            zolks — trajectory check
          </span>
        </div>
        <pre className="overflow-x-auto p-4 font-mono text-[11px] leading-relaxed text-stone-200 md:text-xs">
          <code>
            <span className="text-rose-300">$</span> zolks run --env staging{"\n"}
            <span className="text-stone-500">→ tool.schema parity … ok</span>
            {"\n"}
            <span className="text-stone-500">→ iam.bindings … ok</span>
            {"\n"}
            <span className="text-stone-500">→ config snapshot … ok (pinned to prod@a3f9c)</span>
            {"\n"}
            <span className="text-emerald-400/90">✓ trajectory trace_9c4 · 14/14 steps valid</span>
            {"\n"}
            <span className="text-stone-500">→ tool calls: 6 · retries: 0 · goal reached: yes</span>
            {"\n"}
            <span className="text-stone-500">p95 latency 1.1s · est. cost $0.02/run · Δcost vs baseline +0%</span>
          </code>
        </pre>
      </div>
    </div>
  );
}
