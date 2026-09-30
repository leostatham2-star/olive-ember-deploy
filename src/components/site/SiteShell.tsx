"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { HomePage } from "./pages/Home";
import { MenuPage } from "./pages/MenuPage";
import { StoryPage } from "./pages/StoryPage";
import { GalleryPage } from "./pages/GalleryPage";
import { ReservationsPage } from "./pages/ReservationsPage";
import { ContactPage } from "./pages/ContactPage";
import { NAV, PAGE_TITLES, type PageKey } from "@/lib/site";

const VALID = new Set<string>(NAV.map((n) => n.key));

function subscribe(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}

function getSnapshot(): PageKey {
  const raw = window.location.hash.replace(/^#\/?/, "").toLowerCase();
  return (VALID.has(raw) ? raw : "home") as PageKey;
}

function getServerSnapshot(): PageKey {
  return "home";
}

export function SiteShell() {
  const page = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.title = PAGE_TITLES[page];
  }, [page]);

  const navigate = useCallback((p: PageKey) => {
    const current = getSnapshot();
    if (current === p) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    window.location.hash = p === "home" ? "/" : `/${p}`;
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-espresso">
      <Header page={page} navigate={navigate} />
      <div className="flex-1">
        {page === "home" ? <HomePage navigate={navigate} /> : null}
        {page === "menu" ? <MenuPage /> : null}
        {page === "story" ? <StoryPage navigate={navigate} /> : null}
        {page === "gallery" ? <GalleryPage /> : null}
        {page === "reservations" ? <ReservationsPage /> : null}
        {page === "contact" ? <ContactPage /> : null}
      </div>
      <Footer navigate={navigate} />
    </div>
  );
}
