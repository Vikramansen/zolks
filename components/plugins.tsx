const plugins = [
  {
    name: "LangGraph / LangChain",
    note: "Trajectory tracing and tool gateway mirroring for graph-based agent workflows.",
  },
  {
    name: "Any OpenAI-compatible API",
    note: "Schema parity and recorded modes for any runtime using the chat completions or responses API.",
  },
  {
    name: "HTTP & OpenAPI",
    note: "Contract tests for the REST tools your agents depend on — mock only where determinism matters.",
  },
  {
    name: "OpenTelemetry",
    note: "One span per model step and tool call, piped into your existing APM without custom instrumentation.",
  },
  {
    name: "GitHub Actions",
    note: "Trajectory assertions and cost gates on every PR. Failed runs surface as artifacts, not incidents.",
  },
  {
    name: "Slack / PagerDuty",
    note: "Alert humans when drift, cost regression, or scope violations trip in staging — not in prod.",
  },
];

export function Plugins() {
  return (
    <section
      id="plugins"
      className="border-t border-ink/10 bg-cream/60 py-16 md:py-24"
      aria-labelledby="plugins-heading"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <h2
          id="plugins-heading"
          className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl"
        >
          Integrations
        </h2>
        <p className="mt-3 max-w-xl text-lg text-ink-soft">
          Plugs into the stack you already run. Nothing ships until it earns its keep.
        </p>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {plugins.map((p) => (
            <li
              key={p.name}
              className="rounded-lg border border-ink/10 bg-paper p-5 shadow-[2px_3px_0_0_rgba(28,25,23,0.06)] transition hover:-translate-y-0.5 hover:shadow-[3px_4px_0_0_rgba(28,25,23,0.08)]"
            >
              <h3 className="font-display text-lg font-semibold text-ink">{p.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
