const phases = [
  {
    n: "01",
    title: "Parity surface",
    body: "Same tool gateways, API shapes, and IAM as production. Config snapshots per release so staging is not a parallel universe.",
  },
  {
    n: "02",
    title: "Traces & fixtures",
    body: "Bring redacted prod traces home. Replay tool calls, add golden paths, mock only where determinism matters.",
  },
  {
    n: "03",
    title: "Plugins",
    body: "Adapters for the stacks you already run. Extend without forking the core.",
  },
  {
    n: "04",
    title: "Evals & gates",
    body: "Schema checks, trajectory assertions, cost and latency budgets. Let CI block merges that fail your bar.",
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
        Roadmap
      </h2>
      <p className="mt-3 max-w-xl text-lg text-ink-soft">
        Rough order of operations. Names will change; the intent won&apos;t.
      </p>
      <ol className="mt-12 space-y-10">
        {phases.map((p) => (
          <li key={p.n} className="flex flex-col gap-2 md:flex-row md:gap-10">
            <span className="font-mono text-sm text-accent md:w-12 md:shrink-0">{p.n}</span>
            <div>
              <h3 className="font-display text-xl font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 max-w-2xl leading-relaxed text-ink-soft">{p.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
