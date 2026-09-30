"use client";

import { useState } from "react";
import { ArrowRight, Flame, Leaf, Wheat } from "lucide-react";
import { Kicker, Divider, Reveal, SectionTitle } from "../Decor";
import { IMG, MENU, TESTIMONIALS, GALLERY, BRAND, type PageKey } from "@/lib/site";
import { cn } from "@/lib/utils";

const PREVIEW_TABS = ["starters", "mains", "desserts", "drinks"] as const;
type PreviewTab = (typeof PREVIEW_TABS)[number];

export function HomePage({ navigate }: { navigate: (p: PageKey) => void }) {
  const [tab, setTab] = useState<PreviewTab>("starters");
  const items = MENU[tab].items.slice(0, 3);

  return (
    <main>
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
        <div
          className="animate-kenburns absolute inset-0 scale-105 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMG.hero})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/80 via-espresso/45 to-espresso" />

        <div className="relative mx-auto max-w-4xl px-5 pt-28 pb-20 text-center sm:px-6">
          <p className="animate-fadeup kicker justify-center !text-[0.78rem] sm:!text-[0.85rem]">
            {BRAND.address1} · West Loop, Chicago
          </p>
          <h1 className="animate-fadeup delay-1 font-display mt-7 text-[2.9rem] leading-[1.05] text-cream sm:text-6xl lg:text-7xl">
            Olive &amp; Ember
          </h1>
          <p className="animate-fadeup delay-2 mx-auto mt-8 max-w-2xl text-[1.02rem] leading-relaxed text-cream/85 sm:text-[1.12rem]">
            Welcome to our table. Every dish here passes through the fire, from the
            first loaf of bread at four in the afternoon to the last chop of the
            night. Browse the menu, find a seat you like, and let us take care of
            the rest. Buon appetito.
          </p>
          <div className="animate-fadeup delay-3 mt-11 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
            <button onClick={() => navigate("menu")} className="link-underline">
              Explore the Menu
            </button>
            <button onClick={() => navigate("reservations")} className="btn-gold">
              Book a Table
            </button>
          </div>
        </div>

        <div
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gold/80 sm:flex"
          aria-hidden="true"
        >
          <span className="text-[0.6rem] uppercase tracking-[0.3em]">Scroll</span>
          <span className="block h-9 w-px bg-gradient-to-b from-gold/80 to-transparent" />
        </div>
      </section>

      {/* ============ WELCOME / STORY INTRO ============ */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="img-zoom relative order-2 lg:order-1">
            <div
              className="aspect-[4/5] w-full bg-cover bg-center sm:aspect-[5/5]"
              style={{ backgroundImage: `url(${IMG.interior})` }}
              role="img"
              aria-label="The dining room at Olive and Ember glowing in the evening"
            />
            <div className="absolute -bottom-6 -right-4 hidden bg-coal px-7 py-5 shadow-[0_18px_50px_rgba(0,0,0,0.5)] sm:block lg:-right-8">
              <p className="font-display text-3xl text-gold">6</p>
              <p className="mt-1 text-[0.62rem] uppercase tracking-[0.25em] text-sand">
                Years by the fire
              </p>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <Kicker>Our Story</Kicker>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="font-display mt-5 text-3xl leading-tight text-cream sm:text-4xl">
                A neighborhood table built around the fire
              </h2>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-6 leading-relaxed text-sand">
                Olive and Ember started with a simple idea. Good food does not need
                tricks, it needs time and a steady flame. Chef Elena Marsh spent
                ten years cooking along the Mediterranean coast before she came
                home to Chicago, and the room she built here keeps that rhythm.
              </p>
              <p className="mt-4 leading-relaxed text-sand">
                The oak and olive wood in the hearth flavor everything, the pasta
                is rolled each morning, and the wine list leans toward small
                growers you can actually call by name. Come early for a drink at
                the marble bar or settle in for the evening. Either way, you are
                looked after.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-9 flex flex-wrap items-center gap-6">
                <button onClick={() => navigate("story")} className="link-underline">
                  More About Us
                </button>
                <span className="text-xs uppercase tracking-[0.25em] text-gold">
                  Established 2020
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ MENU PREVIEW ============ */}
      <section className="border-y border-gold/10 bg-coal/60 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <SectionTitle
            kicker="From the Kitchen"
            title="Plates worth the trip"
            subtitle="A small menu that changes with the seasons and the market. These are a few of the regulars, the plates people come back for week after week."
          />

          {/* tabs */}
          <Reveal className="mb-12 flex flex-wrap items-center justify-center gap-3 sm:gap-5">
            {PREVIEW_TABS.map((key) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={cn(
                  "border px-5 py-2.5 text-[0.68rem] uppercase tracking-[0.28em] transition-all duration-300",
                  tab === key
                    ? "border-gold bg-gold text-[#241b10]"
                    : "border-gold/30 text-sand hover:border-gold/70 hover:text-gold-soft"
                )}
              >
                {MENU[key].label}
              </button>
            ))}
          </Reveal>

          {/* items */}
          <div key={tab} className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, i) => (
              <Reveal key={item.name} delay={i * 120}>
                <article className="group text-center">
                  <div className="img-zoom relative mx-auto mb-6 aspect-[4/3] w-full">
                    {item.img ? (
                      <img
                        src={item.img}
                        alt={item.name}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center border border-gold/20 bg-espresso">
                        <Flame className="h-8 w-8 text-gold/50" />
                      </div>
                    )}
                    <span className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-espresso/90 px-4 py-1.5 font-display text-lg text-gold">
                      ${item.price}
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-cream transition-colors group-hover:text-gold-soft">
                    {item.name}
                  </h3>
                  <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-sand">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 text-center">
            <button onClick={() => navigate("menu")} className="btn-gold">
              View the Full Menu
              <ArrowRight className="h-4 w-4" />
            </button>
          </Reveal>
        </div>
      </section>

      {/* ============ CRAFT BAND ============ */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMG.flames})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-espresso/82" />
        <div className="relative mx-auto max-w-6xl px-5 text-center sm:px-6">
          <Reveal>
            <Kicker className="justify-center">How We Cook</Kicker>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-display mx-auto mt-5 max-w-3xl text-3xl leading-snug text-cream sm:text-4xl">
              Everything here meets the fire in one way or another
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            {[
              {
                icon: Flame,
                title: "Oak and Olive Wood",
                text: "The hearth burns from two in the afternoon until close. It seasons the meat, kisses the fish and chars the vegetables.",
              },
              {
                icon: Wheat,
                title: "Pasta Rolled Daily",
                text: "Flour, egg and a pinch of patience. The tagliatelle goes from the board to the pan the same morning it is cut.",
              },
              {
                icon: Leaf,
                title: "Growers We Know",
                text: "Most of the produce travels less than a hundred miles, from farms around Harrison and the Green City market crew.",
              },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 140}>
                <div className="flex flex-col items-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 text-gold">
                    <f.icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-display mt-6 text-xl text-cream">{f.title}</h3>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/70">
                    {f.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ RESERVATION CTA ============ */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMG.reserveBg})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-espresso/78" />
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-6">
          <Reveal>
            <Kicker className="justify-center">Reservations</Kicker>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-display mt-5 text-3xl leading-tight text-cream sm:text-5xl">
              Save your seat by the fire
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <p className="mx-auto mt-6 max-w-xl leading-relaxed text-cream/85">
              The room fills quickly from Thursday through Saturday, so a little
              planning goes a long way. Book online in under a minute, or call the
              host desk and we will find you a table. Walk ins are always welcome
              at the bar.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
              <button onClick={() => navigate("reservations")} className="btn-gold-solid">
                Book a Table
              </button>
              <a href={BRAND.phoneHref} className="link-underline">
                Call {BRAND.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ GALLERY STRIP ============ */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28">
        <SectionTitle
          kicker="The Room and the Plate"
          title="A look inside the evening"
        />
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {[
            { img: IMG.oven, alt: "Wood oven flames" },
            { img: IMG.oysters, alt: "Oysters on ice" },
            { img: IMG.wineHand, alt: "Pouring red wine" },
            { img: IMG.terrace, alt: "Terrace with string lights" },
          ].map((g, i) => (
            <Reveal key={i} delay={i * 100} className="img-zoom">
              <button
                onClick={() => navigate("gallery")}
                className="block aspect-square w-full"
                aria-label={`Open the gallery, photo: ${g.alt}`}
              >
                <img
                  src={g.img}
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </button>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <button onClick={() => navigate("gallery")} className="link-underline">
            View Full Gallery
          </button>
        </Reveal>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="border-y border-gold/10 bg-coal/60 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <SectionTitle
            kicker="Kind Words"
            title="What guests keep telling us"
          />
          <div className="grid gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 140}>
                <figure className="flex h-full flex-col border border-gold/15 bg-espresso/70 p-8 transition-colors duration-300 hover:border-gold/40">
                  <span className="font-display text-5xl leading-none text-gold/70" aria-hidden="true">
                    &ldquo;
                  </span>
                  <blockquote className="mt-4 flex-1 leading-relaxed text-cream/85">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-7 flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 font-display text-sm text-gold">
                      {t.name.charAt(0)}
                    </span>
                    <span>
                      <span className="block text-sm tracking-wide text-cream">
                        {t.name}
                      </span>
                      <span className="block text-xs uppercase tracking-[0.2em] text-gold/80">
                        {t.detail}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HOURS STRIP ============ */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24">
        <div className="grid items-center gap-10 text-center sm:grid-cols-3">
          <Reveal>
            <div>
              <Kicker className="justify-center">Find Us</Kicker>
              <p className="mt-4 leading-relaxed text-sand">
                {BRAND.address1}
                <br />
                {BRAND.address2}
              </p>
              <button
                onClick={() => navigate("contact")}
                className="mt-4 text-xs uppercase tracking-[0.25em] text-gold underline-offset-4 hover:underline"
              >
                Directions
              </button>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <Divider className="sm:my-4" />
            <p className="font-display text-2xl text-cream">
              Dinner, Tuesday to Sunday
            </p>
            <p className="mt-3 text-sm uppercase tracking-[0.2em] text-gold">
              {BRAND.hoursShort}
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-sand">
              Closed Mondays · Bar till late
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div>
              <Kicker className="justify-center">Reserve</Kicker>
              <p className="mt-4 leading-relaxed text-sand">
                Tables release thirty days ahead. For parties of nine or more,
                email us and we will set the long table.
              </p>
              <a
                href={BRAND.phoneHref}
                className="mt-4 inline-block text-xs uppercase tracking-[0.25em] text-gold underline-offset-4 hover:underline"
              >
                {BRAND.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
