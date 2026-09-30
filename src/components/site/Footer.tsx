"use client";

import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Clock } from "lucide-react";
import { Logo } from "./Logo";
import { Divider } from "./Decor";
import { BRAND, NAV, HOURS, type PageKey } from "@/lib/site";

export function Footer({ navigate }: { navigate: (p: PageKey) => void }) {
  const today = new Date();
  // Chicago day index to highlight today's hours
  const chiDay = new Date(
    today.toLocaleString("en-US", { timeZone: "America/Chicago" })
  ).getDay();
  const todayLabel = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][chiDay];

  return (
    <footer className="mt-auto border-t border-gold/15 bg-[#12100c]">
      {/* big brand band */}
      <div className="border-b border-gold/10 py-14">
        <div className="mx-auto max-w-6xl px-5 text-center sm:px-6">
          <Logo />
          <p className="mx-auto mt-6 max-w-xl text-[0.98rem] leading-relaxed text-sand">
            An evening built around the fire. Wood cooked plates, honest wine and
            a room that hums until late in Chicago&apos;s West Loop.
          </p>
          <Divider className="mt-8" />
        </div>
      </div>

      {/* columns */}
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-xs uppercase tracking-[0.3em] text-gold">Explore</h3>
          <ul className="mt-6 space-y-3.5">
            {NAV.map((item) => (
              <li key={item.key}>
                <button
                  onClick={() => navigate(item.key)}
                  className="text-[0.95rem] text-cream/75 transition-colors hover:text-gold-soft"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.3em] text-gold">Visit</h3>
          <ul className="mt-6 space-y-4 text-[0.95rem] text-cream/75">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>
                {BRAND.address1}
                <br />
                {BRAND.address2}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>
                {BRAND.hoursShort}
                <br />
                Closed {BRAND.closedDay}s
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.3em] text-gold">Hours</h3>
          <ul className="mt-6 space-y-2.5 text-[0.88rem]">
            {HOURS.map((h) => (
              <li
                key={h.day}
                className={
                  h.day === todayLabel
                    ? "flex justify-between gap-3 text-gold-soft"
                    : "flex justify-between gap-3 text-cream/60"
                }
              >
                <span>{h.day}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.3em] text-gold">Get in Touch</h3>
          <ul className="mt-6 space-y-4 text-[0.95rem] text-cream/75">
            <li>
              <a
                href={BRAND.phoneHref}
                className="inline-flex items-center gap-3 transition-colors hover:text-gold-soft"
              >
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                {BRAND.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${BRAND.email}`}
                className="inline-flex items-center gap-3 transition-colors hover:text-gold-soft"
              >
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                {BRAND.email}
              </a>
            </li>
          </ul>
          <div className="mt-7 flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center border border-gold/30 text-sand transition-all hover:border-gold hover:text-gold"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center border border-gold/30 text-sand transition-all hover:border-gold hover:text-gold"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              className="flex h-10 w-10 items-center justify-center border border-gold/30 text-sand transition-all hover:border-gold hover:text-gold"
            >
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-gold/10 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 text-center sm:px-6 md:flex-row md:text-left">
          <p className="text-xs tracking-[0.14em] text-sand">
            © {today.getFullYear()} Olive &amp; Ember. All rights reserved.
          </p>
          <p className="text-xs tracking-[0.14em] text-sand">
            <a
              href="https://m-webcraftstudio.space-z.ai/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-gold-soft"
            >
              Designed By M-Webcraft Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
