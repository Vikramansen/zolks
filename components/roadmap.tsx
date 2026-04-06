const phases = [
  {
    n: "01",
    title: "Environment parity",
    body: "Mirror production exactly — tool schemas, IAM bindings, API shapes, and config snapshots pinned per release. Staging stops being a guessing game.",
  },
  {
    n: "02",
    title: "Trajectory testing",
    body: "Assert on sequences, not just outputs. Define what valid step patterns look like, set cost and latency budgets per task, and replay redacted prod traces in staging.",
  },
  {
    n: "03",
    title: "CI/CD gates",
    body: "Block merges when goal completion rate drops, cost regresses, or the agent touches tools outside its declared scope. Quality enforcement without the manual review.",
  },
  {
    n: "04",
    title: "Integrations",
    body: "Native adapters for the orchestration frameworks and observability stacks you already run. Extend without forking the core.",
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
