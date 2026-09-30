"use client";

import { cn } from "@/lib/utils";

export function Monogram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1" opacity="0.85" />
      <circle cx="32" cy="32" r="25.5" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
      {/* olive sprig */}
      <path
        d="M32 44 C 30 36, 30 28, 32 20"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <ellipse cx="28.4" cy="30" rx="3.1" ry="1.7" transform="rotate(-38 28.4 30)" stroke="currentColor" strokeWidth="0.9" />
      <ellipse cx="35.8" cy="34.6" rx="3.1" ry="1.7" transform="rotate(38 35.8 34.6)" stroke="currentColor" strokeWidth="0.9" />
      <ellipse cx="28.6" cy="23.8" rx="2.7" ry="1.5" transform="rotate(-38 28.6 23.8)" stroke="currentColor" strokeWidth="0.9" />
      {/* ember flame */}
      <path
        d="M32 19.5 C 30.6 17.6, 30.8 15.6, 32 13.6 C 33.2 15.6, 33.4 17.6, 32 19.5 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Logo({
  compact = false,
  className,
}: {
  compact?: boolean;
  className?: string;
}) {
  if (compact) {
    return (
      <span className={cn("inline-flex items-center gap-2.5", className)}>
        <Monogram className="h-8 w-8 text-gold" />
        <span className="flex flex-col leading-none">
          <span className="font-display text-lg tracking-[0.18em] text-cream">
            OLIVE &amp; EMBER
          </span>
          <span className="mt-1 text-[0.55rem] uppercase tracking-[0.4em] text-gold">
            Wood Fired Kitchen
          </span>
        </span>
      </span>
    );
  }
  return (
    <span className={cn("flex flex-col items-center leading-none", className)}>
      <Monogram className="mb-2 h-10 w-10 text-gold" />
      <span className="font-display text-2xl tracking-[0.2em] text-cream sm:text-3xl">
        OLIVE &amp; EMBER
      </span>
      <span className="mt-2 text-[0.6rem] uppercase tracking-[0.55em] text-gold">
        Wood Fired Kitchen
      </span>
    </span>
  );
}
