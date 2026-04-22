import Link from "next/link";
import { WaitlistForm } from "@/components/waitlist-form";

export function Footer() {
  return (
    <footer id="join" className="relative border-t border-border bg-bg py-20">
      <div className="content-shell mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-2xl">
          <p className="eyebrow-label">Section 4</p>
          <h2 className="mt-3 font-display text-[2rem] font-medium text-text md:text-[2.4rem]">
            Join the waitlist
          </h2>
          <p className="mt-4 max-w-xl text-base leading-[1.6] text-text-muted">
            We&apos;ll only write when it&apos;s useful. No growth hacks, no daily spam.
          </p>
          <WaitlistForm />
        </div>
        <div className="mt-20 flex flex-col gap-4 border-t border-border pt-8 text-sm text-text-muted md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-lg font-medium text-text">Zolks</p>
            <p className="eyebrow-label mt-1">Made in San Francisco</p>
          </div>
          <p>© {new Date().getFullYear()} Zolks · Work in progress</p>
          <Link href="#hero" className="font-mono text-xs uppercase tracking-[0.15em] hover:text-accent">
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
}
