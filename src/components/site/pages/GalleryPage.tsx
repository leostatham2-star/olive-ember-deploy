"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { PageBanner, Reveal } from "../Decor";
import { GALLERY, IMG } from "@/lib/site";
import { cn } from "@/lib/utils";

export function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);

  const close = () => setActive(null);
  const prev = () =>
    setActive((a) => (a === null ? null : (a + GALLERY.length - 1) % GALLERY.length));
  const next = () =>
    setActive((a) => (a === null ? null : (a + 1) % GALLERY.length));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (active === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  useEffect(() => {
    document.body.style.overflow = active !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <main>
      <PageBanner
        kicker="The Room, the Fire, the Plate"
        title="Gallery"
        text="A few frames from the last few weeks. Smoke, candlelight and the people who make the room what it is."
        image={IMG.wineHand}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((g, i) => (
            <Reveal key={g.caption} delay={(i % 3) * 120}>
              <button
                onClick={() => setActive(i)}
                className={cn(
                  "img-zoom group relative block w-full",
                  i % 5 === 0 ? "aspect-[4/5] sm:aspect-[4/4.6]" : "aspect-[4/3]"
                )}
                aria-label={`Open photo: ${g.caption}`}
              >
                <img
                  src={g.img}
                  alt={g.caption}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <span className="absolute inset-0 flex items-end bg-gradient-to-t from-espresso/85 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="p-5 text-left text-sm tracking-wide text-cream">
                    {g.caption}
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 text-center">
          <p className="text-sm leading-relaxed text-sand">
            Tag us at{" "}
            <span className="text-gold-soft">@oliveandember</span> when the evening
            treats you well. We keep a running album of the best ones.
          </p>
        </Reveal>
      </section>

      {/* lightbox */}
      {active !== null ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-espresso/96 p-4 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
        >
          <button
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center border border-gold/40 text-cream transition-colors hover:border-gold hover:text-gold"
            onClick={close}
            aria-label="Close viewer"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-gold/40 text-cream transition-colors hover:border-gold hover:text-gold sm:left-8"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <figure
            className="max-h-[86vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={GALLERY[active].img}
              alt={GALLERY[active].caption}
              className="max-h-[74vh] w-full object-contain"
            />
            <figcaption className="mt-4 text-center text-sm tracking-wide text-sand">
              {GALLERY[active].caption}
              <span className="ml-3 text-gold/70">
                {active + 1} / {GALLERY.length}
              </span>
            </figcaption>
          </figure>
          <button
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-gold/40 text-cream transition-colors hover:border-gold hover:text-gold sm:right-8"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next photo"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      ) : null}
    </main>
  );
}
