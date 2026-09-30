"use client";

import { useEffect, useState } from "react";
import { MapPin, Phone, Menu as MenuIcon, X, Instagram, Facebook, Twitter } from "lucide-react";
import { Logo } from "./Logo";
import { BRAND, NAV, type PageKey } from "@/lib/site";
import { cn } from "@/lib/utils";

function OpenBadge() {
  const [label, setLabel] = useState<string>("");

  useEffect(() => {
    const compute = () => {
      // Chicago time
      const now = new Date();
      const chi = new Date(
        now.toLocaleString("en-US", { timeZone: "America/Chicago" })
      );
      const day = chi.getDay(); // 0 Sun .. 6 Sat
      const hour = chi.getHours() + chi.getMinutes() / 60;
      const openHour = day === 5 || day === 6 ? 17 : day === 0 ? 17 : day === 1 ? -1 : 17;
      const closeHour = day === 5 || day === 6 ? 24 : day === 0 ? 22 : 23;

      if (day === 1) {
        setLabel("Closed today, back Tuesday");
        return;
      }
      if (hour >= openHour && hour < closeHour) {
        const left = Math.max(0, Math.round(closeHour - hour));
        setLabel(`Open now, ${left === 0 ? "closing soon" : `kitchen for ${left}h`}`);
      } else if (hour < openHour) {
        setLabel("Opens today at 5 PM");
      } else {
        setLabel("Opens tomorrow at 5 PM");
      }
    };
    compute();
    const t = setInterval(compute, 60000);
    return () => clearInterval(t);
  }, []);

  if (!label) return null;
  return (
    <span className="hidden items-center gap-2 border border-gold/40 px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.22em] text-gold-soft lg:inline-flex">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
      {label}
    </span>
  );
}

export function Header({
  page,
  navigate,
}: {
  page: PageKey;
  navigate: (p: PageKey) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (key: PageKey) => {
    setOpen(false);
    navigate(key);
  };

  return (
    <>
      {/* top info bar */}
      <div
        className={cn(
          "fixed inset-x-0 top-0 z-50 hidden border-b border-gold/15 bg-espresso/95 backdrop-blur transition-all duration-500 lg:block",
          scrolled && "-translate-y-full opacity-0"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5">
          <div className="flex items-center gap-6 text-[0.7rem] tracking-[0.12em] text-sand">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-gold" />
              {BRAND.address1}, {BRAND.address2.split(",")[0]}
            </span>
            <a
              href={BRAND.phoneHref}
              className="inline-flex items-center gap-2 transition-colors hover:text-gold-soft"
            >
              <Phone className="h-3.5 w-3.5 text-gold" />
              {BRAND.phone}
            </a>
          </div>
          <div className="flex items-center gap-5">
            <OpenBadge />
            <div className="flex items-center gap-4 text-sand">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="transition-colors hover:text-gold">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="transition-colors hover:text-gold">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X" className="transition-colors hover:text-gold">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* main nav */}
      <header
        className={cn(
          "fixed inset-x-0 z-40 transition-all duration-500",
          scrolled
            ? "top-0 border-b border-gold/15 bg-espresso/95 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.45)] backdrop-blur"
            : "top-0 bg-transparent py-4 lg:top-[41px]"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-6">
          {/* left nav (desktop) */}
          <nav className="hidden flex-1 items-center justify-end gap-7 lg:flex" aria-label="Primary">
            {NAV.slice(0, 3).map((item) => (
              <button
                key={item.key}
                onClick={() => go(item.key)}
                data-active={page === item.key}
                className="nav-link"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* center logo */}
          <button
            onClick={() => go("home")}
            className="shrink-0 transition-transform duration-300 hover:scale-[1.03]"
            aria-label="Olive and Ember, home"
          >
            <Logo compact className={scrolled ? "scale-90" : ""} />
          </button>

          {/* right nav (desktop) */}
          <nav className="hidden flex-1 items-center gap-7 lg:flex" aria-label="Secondary">
            {NAV.slice(3).map((item) => (
              <button
                key={item.key}
                onClick={() => go(item.key)}
                data-active={page === item.key}
                className="nav-link"
              >
                {item.label}
              </button>
            ))}
            <button onClick={() => go("reservations")} className="btn-gold ml-2 !px-5 !py-2.5 !text-[0.62rem]">
              Book a Table
            </button>
          </nav>

          {/* mobile toggle */}
          <button
            className="text-cream transition-colors hover:text-gold lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
          </button>
        </div>
      </header>

      {/* mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] flex flex-col bg-espresso/98 backdrop-blur transition-all duration-500 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <div className="flex items-center justify-between px-5 py-4">
          <Logo compact />
          <button
            className="text-cream transition-colors hover:text-gold"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-7 w-7" />
          </button>
        </div>
        <nav className="flex flex-1 flex-col items-center justify-center gap-7" aria-label="Mobile">
          {NAV.map((item, i) => (
            <button
              key={item.key}
              onClick={() => go(item.key)}
              data-active={page === item.key}
              className={cn(
                "nav-link text-base tracking-[0.3em]",
                open && "animate-fadeup"
              )}
              style={{ animationDelay: `${0.08 * i}s` }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => go("reservations")}
            className={cn("btn-gold mt-4", open && "animate-fadeup delay-4")}
          >
            Book a Table
          </button>
        </nav>
        <div className="pb-8 text-center text-xs tracking-[0.15em] text-sand">
          {BRAND.phone} · {BRAND.address1}
        </div>
      </div>
    </>
  );
}
