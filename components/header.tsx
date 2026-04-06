import Link from "next/link";

const nav = [
  { href: "#why", label: "Why it matters" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#plugins", label: "Plugins" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link
          href="/"
          className="font-display text-2xl font-semibold tracking-tight text-ink md:text-[1.65rem]"
        >
          Zolks
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Page">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#join"
          className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-cream transition hover:bg-accent"
        >
          Get updates
        </Link>
      </div>
    </header>
  );
}
