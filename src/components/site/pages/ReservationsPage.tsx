"use client";

import { useState, type FormEvent } from "react";
import { CalendarCheck, CheckCircle2, Clock, Users, Phone } from "lucide-react";
import { PageBanner, Reveal } from "../Decor";
import { IMG, BRAND, HOURS } from "@/lib/site";

const TIMES = [
  "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM",
  "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM",
];

const OCCASIONS = [
  "Just dinner",
  "Birthday",
  "Anniversary",
  "Date night",
  "Business dinner",
  "Celebration",
];

type Errors = Partial<Record<"name" | "phone" | "date" | "time" | "guests", string>>;

function makeCode() {
  const chars = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  let out = "OE";
  for (let i = 0; i < 5; i++) {
    out += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return out;
}

export function ReservationsPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    occasion: OCCASIONS[0],
    notes: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [code, setCode] = useState<string | null>(null);

  const set = (key: keyof typeof form, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (form.name.trim().length < 2) next.name = "Please tell us the name for the table";
    if (!/^[\d\s()+-]{7,}$/.test(form.phone.trim()))
      next.phone = "A phone number we can reach you on, at least 7 digits";
    if (!form.date) next.date = "Pick a date";
    if (!form.time) next.time = "Pick a time";
    if (!form.guests) next.guests = "How many of you are coming?";
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setCode(makeCode());
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const minDate = new Date().toISOString().split("T")[0];

  return (
    <main>
      <PageBanner
        kicker="Reservations"
        title="Book a Table"
        text="Thirty days of tables open at a time. Pick an evening and we will keep the candle lit."
        image={IMG.reserveBg}
      />

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24">
        {code ? (
          <Reveal>
            <div className="mx-auto max-w-2xl border border-gold/35 bg-coal p-10 text-center sm:p-14">
              <CheckCircle2 className="mx-auto h-14 w-14 text-gold" aria-hidden="true" />
              <h2 className="font-display mt-6 text-3xl text-cream sm:text-4xl">
                Consider it done, {form.name.split(" ")[0]}
              </h2>
              <p className="mt-5 leading-relaxed text-sand">
                Your table for {form.guests} is set for {form.time} on{" "}
                {new Date(form.date + "T12:00:00").toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
                . We hold tables for fifteen minutes past the hour, so if the L
                is acting up just give us a call.
              </p>
              <div className="mx-auto mt-8 w-fit border border-gold/30 px-8 py-4">
                <p className="text-[0.62rem] uppercase tracking-[0.3em] text-sand">
                  Confirmation Code
                </p>
                <p className="font-display mt-2 text-3xl tracking-[0.2em] text-gold">
                  {code}
                </p>
              </div>
              <p className="mt-8 text-sm text-cream/70">
                A text will find you the morning of your reservation. If plans
                change, call{" "}
                <a href={BRAND.phoneHref} className="text-gold-soft hover:underline">
                  {BRAND.phone}
                </a>{" "}
                and we will sort it out.
              </p>
              <button
                onClick={() => setCode(null)}
                className="btn-gold mt-10"
              >
                Book Another Table
              </button>
            </div>
          </Reveal>
        ) : (
          <div className="grid gap-14 lg:grid-cols-[1.25fr_0.75fr]">
            {/* form */}
            <Reveal>
              <form onSubmit={submit} noValidate>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="r-name" className="mb-2 block text-xs uppercase tracking-[0.25em] text-sand">
                      Name <span className="text-gold">*</span>
                    </label>
                    <input
                      id="r-name"
                      className="field"
                      placeholder="Who is the table for?"
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                    />
                    {errors.name ? (
                      <p className="mt-2 text-xs text-[#e08a7d]">{errors.name}</p>
                    ) : null}
                  </div>
                  <div>
                    <label htmlFor="r-phone" className="mb-2 block text-xs uppercase tracking-[0.25em] text-sand">
                      Phone <span className="text-gold">*</span>
                    </label>
                    <input
                      id="r-phone"
                      type="tel"
                      className="field"
                      placeholder="(312) 555 0000"
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                    />
                    {errors.phone ? (
                      <p className="mt-2 text-xs text-[#e08a7d]">{errors.phone}</p>
                    ) : null}
                  </div>
                  <div>
                    <label htmlFor="r-email" className="mb-2 block text-xs uppercase tracking-[0.25em] text-sand">
                      Email <span className="text-gold/60">optional</span>
                    </label>
                    <input
                      id="r-email"
                      type="email"
                      className="field"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="r-date" className="mb-2 block text-xs uppercase tracking-[0.25em] text-sand">
                        Date <span className="text-gold">*</span>
                      </label>
                      <input
                        id="r-date"
                        type="date"
                        min={minDate}
                        className="field"
                        value={form.date}
                        onChange={(e) => set("date", e.target.value)}
                      />
                      {errors.date ? (
                        <p className="mt-2 text-xs text-[#e08a7d]">{errors.date}</p>
                      ) : null}
                    </div>
                    <div>
                      <label htmlFor="r-time" className="mb-2 block text-xs uppercase tracking-[0.25em] text-sand">
                        Time <span className="text-gold">*</span>
                      </label>
                      <select
                        id="r-time"
                        className="field"
                        value={form.time}
                        onChange={(e) => set("time", e.target.value)}
                      >
                        <option value="">Select</option>
                        {TIMES.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                      {errors.time ? (
                        <p className="mt-2 text-xs text-[#e08a7d]">{errors.time}</p>
                      ) : null}
                    </div>
                    <div>
                      <label htmlFor="r-guests" className="mb-2 block text-xs uppercase tracking-[0.25em] text-sand">
                        Guests <span className="text-gold">*</span>
                      </label>
                      <select
                        id="r-guests"
                        className="field"
                        value={form.guests}
                        onChange={(e) => set("guests", e.target.value)}
                      >
                        <option value="">Select</option>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                          <option key={n} value={n}>
                            {n} {n === 1 ? "guest" : "guests"}
                          </option>
                        ))}
                      </select>
                      {errors.guests ? (
                        <p className="mt-2 text-xs text-[#e08a7d]">{errors.guests}</p>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="r-occasion" className="mb-2 block text-xs uppercase tracking-[0.25em] text-sand">
                      Occasion
                    </label>
                    <select
                      id="r-occasion"
                      className="field"
                      value={form.occasion}
                      onChange={(e) => set("occasion", e.target.value)}
                    >
                      {OCCASIONS.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="r-notes" className="mb-2 block text-xs uppercase tracking-[0.25em] text-sand">
                      Anything We Should Know
                    </label>
                    <input
                      id="r-notes"
                      className="field"
                      placeholder="Allergies, a corner table, a candle in the cake"
                      value={form.notes}
                      onChange={(e) => set("notes", e.target.value)}
                    />
                  </div>
                </div>

                <button type="submit" className="btn-gold-solid mt-10 w-full sm:w-auto">
                  Confirm Reservation
                </button>
                <p className="mt-4 text-xs leading-relaxed text-sand">
                  Parties of nine or more are booked by email at {BRAND.email}. We
                  hold tables for fifteen minutes and ask for a card on holiday
                  weekends.
                </p>
              </form>
            </Reveal>

            {/* side info */}
            <div className="space-y-8">
              <Reveal delay={140}>
                <div className="border border-gold/20 bg-coal p-8">
                  <Clock className="h-6 w-6 text-gold" aria-hidden="true" />
                  <h3 className="font-display mt-4 text-xl text-cream">Service Hours</h3>
                  <ul className="mt-5 space-y-2.5 text-sm">
                    {HOURS.map((h) => (
                      <li key={h.day} className="flex justify-between gap-3 text-cream/70">
                        <span>{h.day.slice(0, 3)}</span>
                        <span>{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={260}>
                <div className="border border-gold/20 bg-coal p-8">
                  <Users className="h-6 w-6 text-gold" aria-hidden="true" />
                  <h3 className="font-display mt-4 text-xl text-cream">Groups and Events</h3>
                  <p className="mt-4 text-sm leading-relaxed text-sand">
                    The long table seats twelve under the string lights of the
                    garden room. For buyouts and bigger parties, send a note to{" "}
                    <a href={`mailto:${BRAND.email}`} className="text-gold-soft hover:underline">
                      {BRAND.email}
                    </a>{" "}
                    and Sam will put a menu together with you.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={380}>
                <div className="border border-gold/20 bg-coal p-8">
                  <Phone className="h-6 w-6 text-gold" aria-hidden="true" />
                  <h3 className="font-display mt-4 text-xl text-cream">Rather Talk?</h3>
                  <p className="mt-4 text-sm leading-relaxed text-sand">
                    The host desk answers from four in the afternoon.
                  </p>
                  <a
                    href={BRAND.phoneHref}
                    className="font-display mt-3 inline-block text-2xl text-gold hover:text-gold-soft"
                  >
                    {BRAND.phone}
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        )}
      </section>

      {/* small reassurance band */}
      <section className="border-t border-gold/10 bg-coal/60 py-14">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-5 text-center sm:flex-row sm:justify-center sm:gap-16 sm:px-6">
          {[
            {
              icon: CalendarCheck,
              text: "Free cancellation up to four hours ahead",
            },
            {
              icon: Clock,
              text: "Tables held fifteen minutes past the hour",
            },
            {
              icon: Users,
              text: "Bar seats always kept for walk ins",
            },
          ].map((x) => (
            <div key={x.text} className="flex items-center gap-3 text-sm text-sand">
              <x.icon className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              {x.text}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
