export default function StylesPage() {
  return (
    <main className="mx-auto max-w-5xl space-y-12 px-6 py-16 text-text">
      <section className="space-y-4 border-b border-border pb-10">
        <p className="eyebrow-label">Eyebrow label sample</p>
        <h1 className="font-display text-5xl font-medium">Fraunces display test</h1>
        <p className="max-w-2xl text-lg leading-relaxed text-text-muted">
          IBM Plex Sans body text at 18px with muted color. This page exists to verify
          typographic scale and contrast before shipping visual changes.
        </p>
      </section>
      <section className="space-y-3">
        <p className="font-mono text-sm text-text">$7M  88%  40x</p>
        <div className="terminal-card">
          <pre>
            <code className="font-mono text-sm">
              {`$ zolks top --group-by agent\nrefund-bot  2,847  18.4M  $146.20  ↑ 312%`}
            </code>
          </pre>
        </div>
      </section>
    </main>
  );
}
