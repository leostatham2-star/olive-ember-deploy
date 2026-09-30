"use client";

import { Flame, Sprout, HandHeart } from "lucide-react";
import { PageBanner, Reveal, SectionTitle } from "../Decor";
import { IMG, type PageKey } from "@/lib/site";

export function StoryPage({ navigate }: { navigate: (p: PageKey) => void }) {
  return (
    <main>
      <PageBanner
        kicker="Since 2020"
        title="Our Story"
        text="Two cooks, one brick hearth, and a neighborhood that showed up for us from the very first night."
        image={IMG.hearth}
      />

      {/* founding story */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <h2 className="font-display text-3xl leading-tight text-cream sm:text-4xl">
                It started with a borrowed kitchen and a stubborn idea
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 leading-relaxed text-sand">
                Elena Marsh learned to cook from her grandmother in Bari, where
                Sunday sauce simmered for hours and the oven never seemed to cool.
                She spent the next decade in restaurant kitchens across Marseille,
                Barcelona and New York, always circling back to the same truth.
                Food touched by fire tastes honest.
              </p>
              <p className="mt-4 leading-relaxed text-sand">
                In the spring of 2020 she and her partner Sam Ortiz found a
                hundred year old brick warehouse on Monroe Street with room for
                exactly one thing, a proper hearth. Friends helped lay the
                floorboards. Neighbors brought paint. The night we opened, half
                of West Loop seemed to squeeze in to try the first loaves out of
                the oven.
              </p>
              <p className="mt-4 leading-relaxed text-sand">
                Six years on, the room has grown up a little. The wine list
                deepened, the terrace went up, and the chef&apos;s counter found
                its feet. The heart of it has not moved an inch though. Wood,
                salt, time and care.
              </p>
            </Reveal>
          </div>
          <Reveal delay={160} className="img-zoom">
            <div
              className="aspect-[4/5] w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${IMG.hearth})` }}
              role="img"
              aria-label="Chef Elena tending the open hearth before dinner service"
            />
          </Reveal>
        </div>
      </section>

      {/* values */}
      <section className="border-y border-gold/10 bg-coal/60 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <SectionTitle
            kicker="What We Believe"
            title="Three things we refuse to rush"
          />
          <div className="grid gap-10 sm:grid-cols-3">
            {[
              {
                icon: Flame,
                title: "Fire First",
                text: "The hearth is lit by two every afternoon and burns until the last plate leaves. It is the reason the room smells faintly of smoke and everything tastes like here.",
              },
              {
                icon: Sprout,
                title: "Ingredient Patience",
                text: "We buy from eleven growers within a hundred miles of the door and change the menu when they change what they pick. Good tomatoes get their week. So does good lamb.",
              },
              {
                icon: HandHeart,
                title: "Hospitality, Unhurried",
                text: "Tables are yours for the evening if you want them. No hovering, no turning. Order another glass and let the night take its time.",
              },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 140}>
                <div className="h-full border border-gold/15 bg-espresso/70 p-8 text-center transition-colors duration-300 hover:border-gold/40">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 text-gold">
                    <v.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display mt-6 text-xl text-cream">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-sand">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* craft band */}
      <section className="relative overflow-hidden py-24 sm:py-28">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMG.flames})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-espresso/82" />
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-6">
          <Reveal>
            <span className="font-display text-6xl leading-none text-gold/70" aria-hidden="true">
              &ldquo;
            </span>
          </Reveal>
          <Reveal delay={120}>
            <blockquote className="font-display text-2xl leading-snug text-cream sm:text-3xl">
              The fire decides the pace. Our job is to listen to it and set a
              plate in front of you at the right moment.
            </blockquote>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-7 text-xs uppercase tracking-[0.3em] text-gold">
              Elena Marsh · Chef and Founder
            </p>
          </Reveal>
        </div>
      </section>

      {/* cta */}
      <section className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-6 sm:py-24">
        <Reveal>
          <h2 className="font-display text-3xl leading-tight text-cream sm:text-4xl">
            Come see what the fire is doing tonight
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-sand">
            The menu shifts with the season and the room changes with the hour.
            The best way to understand the place is to sit down in it.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
            <button onClick={() => navigate("reservations")} className="btn-gold-solid">
              Book a Table
            </button>
            <button onClick={() => navigate("menu")} className="link-underline">
              See the Menu
            </button>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
