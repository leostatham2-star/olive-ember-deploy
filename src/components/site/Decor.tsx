"use client";

import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

/* Section heading kicker: small gold uppercase text with side lines */
export function Kicker({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={cn("kicker", className)}>{children}</span>;
}

/* Decorative divider: line, diamond, line */
export function Divider({ className }: { className?: string }) {
  return (
    <div className={cn("divider-diamond", className)} aria-hidden="true">
      <span className="diamond" />
    </div>
  );
}

/* Reveal on scroll wrapper */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "span" | "figure";
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      node.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const style: CSSProperties = delay
    ? { transitionDelay: `${delay}ms` }
    : {};

  return (
    <Tag ref={ref as any} style={style} className={cn("reveal", className)}>
      {children}
    </Tag>
  );
}

/* Section title block used across pages */
export function SectionTitle({
  kicker,
  title,
  subtitle,
  align = "center",
  className,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-12 sm:mb-16",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      <Reveal>
        <Kicker className={align === "center" ? "justify-center" : ""}>
          {kicker}
        </Kicker>
      </Reveal>
      <Reveal delay={120}>
        <h2 className="font-display mt-5 text-3xl leading-tight text-cream sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h2>
      </Reveal>
      {subtitle ? (
        <Reveal delay={220}>
          <p
            className={cn(
              "mt-5 max-w-2xl text-[1.02rem] leading-relaxed text-sand",
              align === "center" && "mx-auto"
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

/* Thin page banner used on inner pages */
export function PageBanner({
  kicker,
  title,
  text,
  image,
}: {
  kicker: string;
  title: string;
  text?: string;
  image: string;
}) {
  return (
    <header className="relative flex min-h-[46vh] items-end overflow-hidden pt-32 sm:min-h-[54vh]">
      <div
        className="animate-kenburns absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/85 via-espresso/60 to-espresso" />
      <div className="relative mx-auto w-full max-w-6xl px-5 pb-14 sm:pb-20">
        <div className="animate-fadeup">
          <Kicker>{kicker}</Kicker>
        </div>
        <h1 className="animate-fadeup delay-1 font-display mt-4 text-4xl leading-tight text-cream sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {text ? (
          <p className="animate-fadeup delay-2 mt-5 max-w-2xl text-[1.02rem] leading-relaxed text-cream/80">
            {text}
          </p>
        ) : null}
      </div>
    </header>
  );
}
