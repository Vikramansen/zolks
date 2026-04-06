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
            Less thrash. Fewer surprises on the bill.
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Most agent pain isn&apos;t the model. It&apos;s the gap between &ldquo;works on my
            laptop&rdquo; and &ldquo;works with our real APIs and roles.&rdquo; Zolks is aimed at
            closing that gap so your team spends time shipping, not firefighting.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <article className="relative border-l-4 border-accent pl-6">
            <h3 className="font-display text-xl font-semibold text-ink">Time back for builders</h3>
            <ul className="mt-4 space-y-3 text-ink-soft">
              <li>
                <strong className="font-medium text-ink">Fewer prod-only bugs.</strong> Catch
                schema drift, IAM mistakes, and bad tool loops where logs are still readable.
              </li>
              <li>
                <strong className="font-medium text-ink">Shorter debug loops.</strong> Replay
                traces against a surface that matches prod so you&apos;re not guessing which
                variable differed.
              </li>
              <li>
                <strong className="font-medium text-ink">Confident releases.</strong> CI that
                understands agent trajectories, not only unit tests, means less manual babysitting
                before a push.
              </li>
            </ul>
          </article>

          <article className="relative border-l-4 border-sage pl-6">
            <h3 className="font-display text-xl font-semibold text-ink">Saner spend</h3>
            <ul className="mt-4 space-y-3 text-ink-soft">
              <li>
                <strong className="font-medium text-ink">Stop paying to learn in production.</strong>{" "}
                Bad retries and runaway tool calls burn tokens and GPU minutes. Fail cheap in
                staging first.
              </li>
              <li>
                <strong className="font-medium text-ink">Fewer incident hours.</strong> On-call
                time and rollback work add up fast. Reducing escaped defects is the straightest
                line to lower cost for many teams.
              </li>
              <li>
                <strong className="font-medium text-ink">No vanity benchmarks.</strong> We care
                about outcomes you can defend in a budget review, not leaderboard scores.
              </li>
            </ul>
          </article>
        </div>

        <p className="mt-12 max-w-2xl border-t border-ink/10 pt-8 text-sm leading-relaxed text-muted">
          Every org&apos;s numbers differ. The point isn&apos;t a promise of &ldquo;37% faster.&rdquo;
          It&apos;s giving you an environment honest enough that you can measure your own before
          and after.
        </p>
      </div>
    </section>
  );
}
