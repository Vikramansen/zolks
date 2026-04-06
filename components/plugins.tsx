const plugins = [
  {
    name: "LangGraph / LangChain",
    note: "Graphs and tool definitions wired through mirrored gateways.",
  },
  {
    name: "OpenAI tools",
    note: "Schema parity and recorded modes for assistants and tool loops.",
  },
  {
    name: "HTTP & OpenAPI",
    note: "Contract tests for REST your agents depend on.",
  },
  {
    name: "OpenTelemetry",
    note: "Spans per model step and tool call into your existing APM.",
  },
  {
    name: "GitHub Actions",
    note: "Parity suites on PRs, failed trajectories as artifacts.",
  },
  {
    name: "Slack / PagerDuty",
    note: "Ping humans when drift or thresholds trip in staging.",
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
          Plugins
        </h2>
        <p className="mt-3 max-w-xl text-lg text-ink-soft">
          Plugs into what you already use. Nothing here ships until it earns its keep.
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
