import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "C Five Transport | Enclosed Vehicle & High-Value Freight Transport",
  description:
    "Specialized nationwide enclosed transport for classic cars, exotics, motorcycles, boats, and high-value family heirlooms. Direct driver accountability with Andrew. Delivering peace of mind.",
  keywords: [
    "enclosed auto transport",
    "classic car shipping",
    "motorcycle transport",
    "C Five Transport",
    "Andrew C Five",
    "white glove vehicle delivery",
  ],
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth overflow-x-hidden">
      <body className="min-h-full flex flex-col antialiased overflow-x-hidden w-full max-w-full">
        {children}
      </body>
    </html>
  );
}
