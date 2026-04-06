import { SquiggleRule, StampWip, BlobAccent } from "./decorative";

export function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 pb-16 pt-10 md:px-8 md:pb-24 md:pt-14">
      <BlobAccent className="right-0 top-20 h-64 w-64 md:h-80 md:w-80" />
      <div className="relative max-w-3xl">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Environments for agent teams
        </p>
        <h1 className="font-display text-[2.1rem] font-semibold leading-[1.12] tracking-[-0.02em] text-ink md:text-5xl md:leading-[1.08]">
          Your agents deserve a rehearsal room that feels like opening night.
        </h1>
        <SquiggleRule className="my-8 w-48 text-accent" />
        <p className="max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl">
          Zolks mirrors how production really behaves: the same tools, permissions, and config.
          Break things in staging. Keep customers out of the loop.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <StampWip />
          <p className="max-w-xs text-sm italic leading-snug text-muted">
            We&apos;re building this in the open. Early shapes, honest tradeoffs.
          </p>
        </div>
      </div>
    </section>
  );
}
