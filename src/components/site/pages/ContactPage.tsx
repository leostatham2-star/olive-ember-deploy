"use client";

import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { PageBanner, Reveal } from "../Decor";
import { IMG, BRAND } from "@/lib/site";
import { useToast } from "@/hooks/use-toast";

export function ContactPage() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "General question", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const set = (key: keyof typeof form, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: "" }));
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (form.name.trim().length < 2) next.name = "Your name, so we know who we are writing to";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = "A working email address, or we cannot reply";
    if (form.message.trim().length < 10) next.message = "A few more words, at least ten characters";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSending(true);
    setTimeout(() => {
      setSending(false);
      setForm({ name: "", email: "", subject: "General question", message: "" });
      toast({
        title: "Message sent",
        description: "Thanks for writing. We read everything and reply within a day.",
      });
    }, 900);
  };

  return (
    <main>
      <PageBanner
        kicker="Say Hello"
        title="Contact"
        text="Questions, private events, press or a lost scarf from last Friday, this is the way in."
        image={IMG.terrace}
      />

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* info cards */}
          <div className="space-y-8">
            <Reveal>
              <div className="border border-gold/20 bg-coal p-8">
                <MapPin className="h-6 w-6 text-gold" aria-hidden="true" />
                <h3 className="font-display mt-4 text-xl text-cream">Where We Are</h3>
                <p className="mt-3 leading-relaxed text-sand">
                  {BRAND.address1}
                  <br />
                  {BRAND.address2}
                </p>
                <p className="mt-3 text-sm text-cream/60">
                  Two blocks from the Ogilvie tracks, between the flower shop and
                  the record store. Street parking after six and a garage on the
                  corner of Monroe.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="border border-gold/20 bg-coal p-8">
                <Phone className="h-6 w-6 text-gold" aria-hidden="true" />
                <h3 className="font-display mt-4 text-xl text-cream">Ring Us</h3>
                <a
                  href={BRAND.phoneHref}
                  className="font-display mt-3 inline-block text-2xl text-gold hover:text-gold-soft"
                >
                  {BRAND.phone}
                </a>
                <p className="mt-2 text-sm text-cream/60">
                  Host desk from 4 PM daily. Voicemail is checked all day.
                </p>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div className="border border-gold/20 bg-coal p-8">
                <Mail className="h-6 w-6 text-gold" aria-hidden="true" />
                <h3 className="font-display mt-4 text-xl text-cream">Write To Us</h3>
                <p className="mt-3 text-sm leading-relaxed text-sand">
                  Dinner questions ·{" "}
                  <a href={`mailto:${BRAND.email}`} className="text-gold-soft hover:underline">
                    {BRAND.email}
                  </a>
                  <br />
                  Events and buyouts ·{" "}
                  <a href={`mailto:events@oliveandember.com`} className="text-gold-soft hover:underline">
                    events@oliveandember.com
                  </a>
                  <br />
                  Press ·{" "}
                  <a href={`mailto:press@oliveandember.com`} className="text-gold-soft hover:underline">
                    press@oliveandember.com
                  </a>
                </p>
              </div>
            </Reveal>
            <Reveal delay={360}>
              <div className="border border-gold/20 bg-coal p-8">
                <Clock className="h-6 w-6 text-gold" aria-hidden="true" />
                <h3 className="font-display mt-4 text-xl text-cream">Hours</h3>
                <p className="mt-3 leading-relaxed text-sand">
                  Dinner, Tuesday to Sunday from 5 PM
                  <br />
                  Bar stays open until midnight on Fridays and Saturdays
                  <br />
                  Closed Mondays
                </p>
              </div>
            </Reveal>
          </div>

          {/* form + events image */}
          <div>
            <Reveal>
              <form onSubmit={submit} noValidate className="border border-gold/20 bg-coal p-8 sm:p-10">
                <h2 className="font-display text-2xl text-cream">Drop us a line</h2>
                <p className="mt-2 text-sm text-sand">
                  We read everything ourselves and answer within a day.
                </p>
                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="c-name" className="mb-2 block text-xs uppercase tracking-[0.25em] text-sand">
                      Name <span className="text-gold">*</span>
                    </label>
                    <input
                      id="c-name"
                      className="field"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                    />
                    {errors.name ? (
                      <p className="mt-2 text-xs text-[#e08a7d]">{errors.name}</p>
                    ) : null}
                  </div>
                  <div>
                    <label htmlFor="c-email" className="mb-2 block text-xs uppercase tracking-[0.25em] text-sand">
                      Email <span className="text-gold">*</span>
                    </label>
                    <input
                      id="c-email"
                      type="email"
                      className="field"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                    />
                    {errors.email ? (
                      <p className="mt-2 text-xs text-[#e08a7d]">{errors.email}</p>
                    ) : null}
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="c-subject" className="mb-2 block text-xs uppercase tracking-[0.25em] text-sand">
                      Subject
                    </label>
                    <select
                      id="c-subject"
                      className="field"
                      value={form.subject}
                      onChange={(e) => set("subject", e.target.value)}
                    >
                      {[
                        "General question",
                        "Private event",
                        "Large party",
                        "Press",
                        "Careers",
                        "Feedback",
                      ].map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="c-message" className="mb-2 block text-xs uppercase tracking-[0.25em] text-sand">
                      Message <span className="text-gold">*</span>
                    </label>
                    <textarea
                      id="c-message"
                      rows={6}
                      className="field resize-none"
                      placeholder="Tell us what you need and when"
                      value={form.message}
                      onChange={(e) => set("message", e.target.value)}
                    />
                    {errors.message ? (
                      <p className="mt-2 text-xs text-[#e08a7d]">{errors.message}</p>
                    ) : null}
                  </div>
                </div>
                <button type="submit" className="btn-gold-solid mt-8" disabled={sending}>
                  {sending ? (
                    "Sending"
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Send Message
                    </>
                  )}
                </button>
              </form>
            </Reveal>

            <Reveal delay={160} className="mt-10">
              <div className="img-zoom relative aspect-[16/9] overflow-hidden">
                <img
                  src={IMG.eventTable}
                  alt="A long celebration table set with candles in the garden room"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-espresso/90 via-espresso/20 to-transparent">
                  <div className="p-6 sm:p-8">
                    <h3 className="font-display text-xl text-cream sm:text-2xl">
                      The garden room, for the big nights
                    </h3>
                    <p className="mt-2 max-w-md text-sm text-cream/80">
                      Twelve under the string lights, forty for a full buyout.
                      Tell us the occasion and we will build the menu around it.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
