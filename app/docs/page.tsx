import Link from "next/link";

export default function DocsPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center px-6 py-20">
      <p className="eyebrow-label">Docs</p>
      <h1 className="mt-3 font-display text-4xl font-medium text-text">Documentation is coming soon.</h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-text-muted">
        Zolks CLI docs are currently private while we stabilize the first release.
      </p>
      <Link
        href="/#join"
        className="mt-8 w-fit border border-accent bg-accent px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] text-black"
      >
        Join the waitlist
      </Link>
    </main>
  );
}
