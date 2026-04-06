/** Small SVG ornaments — ink on paper, not stock hero blobs. */

export function SquiggleRule({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M0 4c20-3 40 5 60 0s40-5 60 0 40 5 60 0"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.35"
      />
    </svg>
  );
}

export function StampWip({ className = "" }: { className?: string }) {
  return (
    <div
      className={`inline-flex rotate-[-8deg] border-2 border-dashed border-accent px-3 py-1 font-[family-name:var(--font-caveat)] text-2xl text-accent ${className}`}
    >
      work in progress
    </div>
  );
}

export function BlobAccent({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute -z-10 rounded-[60%_40%_50%_50%/50%_60%_40%_50%] bg-sage-light/40 blur-2xl ${className}`}
      aria-hidden
    />
  );
}
