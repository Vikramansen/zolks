import Link from "next/link";
import { WaitlistForm } from "@/components/waitlist-form";

export function Footer() {
  return (
    <footer id="join" className="border-t border-ink/10 bg-paper-deep py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-xl">
          <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
            Want a note when there&apos;s something to try?
          </h2>
          <p className="mt-3 text-ink-soft">
            We&apos;ll only write when it&apos;s useful. No growth hacks, no daily spam.
          </p>
          <WaitlistForm />
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-ink/10 pt-10 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-lg font-semibold text-ink">Zolks</p>
            <p className="mt-0.5 text-xs text-muted">Made in San Francisco</p>
          </div>
          <p>© {new Date().getFullYear()} Zolks · Work in progress</p>
          <Link href="#why" className="text-ink-soft underline-offset-4 hover:text-accent">
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
}
