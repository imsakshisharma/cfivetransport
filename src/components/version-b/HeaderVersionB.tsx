"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/content";

export const HeaderVersionB: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="relative z-40 w-full bg-white text-slate-900 border-b border-slate-200 shadow-sm transition-colors duration-200 max-w-full">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-3">
          {/* Logo with clean dark backing (Bigger & Clearer) */}
          <Link href="#hero" className="flex items-center gap-2 group shrink min-w-0">
            <div className="relative h-11 sm:h-14 w-40 sm:w-60 bg-slate-900 px-3 py-1.5 rounded-xl flex items-center shadow-xs shrink-0">
              <Image
                src="/images/logo.png"
                alt="C Five Transport"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-orange-600 transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${siteContent.brand.phone}`}
              className="flex items-center gap-2 text-xs md:text-sm font-bold text-slate-800 hover:text-orange-600 px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors"
            >
              <Phone className="w-4 h-4 text-orange-600" />
              <span>{siteContent.brand.displayPhone}</span>
            </a>

            <a href="#quote">
              <Button
                variant="accent"
                size="default"
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold gap-2 shadow-md hover:shadow-lg px-5 py-2.5 rounded-xl"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex items-center gap-2 lg:hidden shrink-0">
            <a
              href={`tel:${siteContent.brand.phone}`}
              className="p-2 rounded-xl bg-orange-600 text-white"
              aria-label="Call Andrew"
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-4 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-100 hover:text-orange-600"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200 space-y-2">
            <a
              href={`tel:${siteContent.brand.phone}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-slate-300 font-bold text-slate-800 text-xs"
            >
              <Phone className="w-4 h-4 text-orange-600" />
              <span>Call: {siteContent.brand.displayPhone}</span>
            </a>

            <a
              href="#quote"
              onClick={() => setMobileMenuOpen(false)}
              className="block"
            >
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs py-3 rounded-xl">
                Request Free Quote &rarr;
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
