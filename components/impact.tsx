/** ROI framing: time and money, without fake precision. */

export function Impact() {
  return (
    <section
      id="why"
      className="border-y border-ink/10 bg-paper-deep/80 py-16 md:py-24"
      aria-labelledby="impact-heading"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-12 max-w-2xl">
          <h2
            id="impact-heading"
            className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl"
          >
            The existing testing playbook wasn&apos;t built for this.
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            AI agents fail differently than APIs. A 200 response doesn&apos;t mean the
            agent did the right thing. It might have called the wrong tool twelve
            times, burned five dollars in tokens, and still returned something
            that looks correct. Zolks is built to catch that — in staging, not in
            production.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <article className="relative border-l-4 border-accent pl-6">
            <h3 className="font-display text-xl font-semibold text-ink">Catch failures that unit tests miss</h3>
            <ul className="mt-4 space-y-3 text-ink-soft">
              <li>
                <strong className="font-medium text-ink">Trajectory assertions.</strong> Define
                what a valid sequence of steps looks like. Flag agents that reach
                the goal the wrong way — too many retries, wrong tool order,
                unexpected branching.
              </li>
              <li>
                <strong className="font-medium text-ink">Prod-shape replay.</strong> Bring
                redacted production traces into staging and replay them against a
                mirrored environment. The failure mode your agent hit in prod is
                reproducible now.
              </li>
              <li>
                <strong className="font-medium text-ink">Scope enforcement.</strong> Know
                immediately when an agent attempts a tool call outside its declared
                permissions — before it matters.
              </li>
            </ul>
          </article>

          <article className="relative border-l-4 border-sage pl-6">
            <h3 className="font-display text-xl font-semibold text-ink">Ship with confidence, not hope</h3>
            <ul className="mt-4 space-y-3 text-ink-soft">
              <li>
                <strong className="font-medium text-ink">Cost gates in CI.</strong>{" "}
                Block merges when p99 token cost regresses or the agent takes
                more steps than baseline. Catch spend blowouts before they hit
                production.
              </li>
              <li>
                <strong className="font-medium text-ink">Environment parity.</strong> Same
                tool schemas, IAM bindings, and config snapshots as production.
                Staging stops being a parallel universe.
              </li>
              <li>
                <strong className="font-medium text-ink">No vanity metrics.</strong> We care
                about goal completion rate, step efficiency, and cost per task —
                numbers you can defend in a postmortem.
              </li>
            </ul>
          </article>
        </div>

        <p className="mt-12 max-w-2xl border-t border-ink/10 pt-8 text-sm leading-relaxed text-muted">
          Every team&apos;s failure modes differ. The point isn&apos;t to promise a
          specific number. It&apos;s to give you an environment honest enough that
          you can find the real ones before your customers do.
        </p>
      </div>
    </section>
  );
}
