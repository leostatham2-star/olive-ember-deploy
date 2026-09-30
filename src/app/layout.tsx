import type { Metadata } from "next";
import "@fontsource-variable/playfair-display";
import "@fontsource-variable/jost";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Olive & Ember | Wood Fired Kitchen, Chicago",
  description:
    "Olive & Ember is a wood fired Mediterranean kitchen and bar in Chicago's West Loop. Oak cooked plates, pasta rolled daily and a wine list of small growers. Dinner Tuesday to Sunday from 5 PM.",
  keywords: [
    "Olive & Ember",
    "restaurant Chicago",
    "wood fired",
    "Mediterranean",
    "West Loop restaurant",
    "reservations",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Olive & Ember | Wood Fired Kitchen",
    description:
      "An evening built around the fire in Chicago's West Loop. Book a table.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-espresso text-cream" suppressHydrationWarning>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
