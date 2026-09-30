"use client";

import { useState } from "react";
import { Flame, Leaf } from "lucide-react";
import { PageBanner, Reveal, SectionTitle } from "../Decor";
import { IMG, MENU, TASTING } from "@/lib/site";
import { cn } from "@/lib/utils";

const TABS = ["starters", "mains", "desserts", "drinks"] as const;
type Tab = (typeof TABS)[number];

export function MenuPage() {
  const [tab, setTab] = useState<Tab>("starters");
  const cat = MENU[tab];

  return (
    <main>
      <PageBanner
        kicker="Seasonal and Wood Fired"
        title="The Menu"
        text="We keep the list short on purpose. Whatever the market brings on Tuesday tends to show up on the plate by Friday, so consider this a snapshot of the season."
        image={IMG.tasting}
      />

      <section className="mx-auto max-w-5xl px-5 py-20 sm:px-6 sm:py-24">
        {/* tabs */}
        <Reveal className="mb-14 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {TABS.map((key) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={cn(
                "border px-6 py-3 text-[0.7rem] uppercase tracking-[0.3em] transition-all duration-300",
                tab === key
                  ? "border-gold bg-gold text-[#241b10]"
                  : "border-gold/30 text-sand hover:border-gold/70 hover:text-gold-soft"
              )}
            >
              {MENU[key].label}
            </button>
          ))}
        </Reveal>

        <Reveal key={tab}>
          <p className="mb-12 text-center text-sm uppercase tracking-[0.3em] text-gold">
            {cat.note}
          </p>

          <div className="grid gap-x-14 gap-y-12 sm:grid-cols-2">
            {cat.items.map((item) => (
              <article key={item.name} className="group flex flex-col">
                {item.img ? (
                  <div className="img-zoom relative mb-6 aspect-[16/10] w-full">
                    <img
                      src={item.img}
                      alt={item.name}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute right-4 top-4 bg-espresso/90 px-3.5 py-1.5 font-display text-lg text-gold">
                      ${item.price}
                    </span>
                  </div>
                ) : null}
                <div className="flex items-baseline">
                  <h3 className="font-display text-[1.35rem] text-cream transition-colors group-hover:text-gold-soft">
                    {item.name}
                  </h3>
                  <span className="price-leader" aria-hidden="true" />
                  {item.img ? null : (
                    <span className="font-display text-xl text-gold">${item.price}</span>
                  )}
                </div>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-sand">
                  {item.description}
                </p>
                {item.tags?.includes("Vegetarian") ? (
                  <span className="mt-3 inline-flex w-fit items-center gap-2 border border-gold/30 px-3 py-1 text-[0.6rem] uppercase tracking-[0.22em] text-gold-soft">
                    <Leaf className="h-3 w-3" /> Vegetarian
                  </span>
                ) : null}
              </article>
            ))}
          </div>
        </Reveal>

        {/* tasting feature */}
        <Reveal className="mt-24">
          <div className="relative overflow-hidden border border-gold/25">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${IMG.hearth})` }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-espresso/85" />
            <div className="relative grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <span className="kicker !justify-start">Chef&apos;s Counter</span>
                <h3 className="font-display mt-4 text-3xl text-cream sm:text-4xl">
                  {TASTING.name}
                </h3>
                <p className="mt-5 max-w-xl leading-relaxed text-sand">
                  {TASTING.description}
                </p>
                <p className="mt-6 text-sm text-cream/70">
                  Seven courses at ${TASTING.price} per guest. Optional wine
                  pairing, five pours chosen by our sommelier, for an extra
                  ${TASTING.pairing}.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 border border-gold/30 bg-espresso/60 p-8 text-center">
                <Flame className="h-8 w-8 text-gold" aria-hidden="true" />
                <p className="text-xs uppercase tracking-[0.28em] text-gold">
                  Limited Seats
                </p>
                <p className="text-sm leading-relaxed text-cream/80">
                  Six seats a night, Tuesday through Saturday. Ask the host desk
                  when you book and we will hold one for you.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-14">
          <p className="text-center text-sm leading-relaxed text-sand">
            A twenty percent service charge is shared with the whole team. Please
            tell your server about any allergies, we cook with nuts, dairy and
            shellfish every day and are happy to work around you.
          </p>
        </Reveal>
      </section>
    </main>
  );
}
