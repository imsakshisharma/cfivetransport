"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/content";

export const Header: React.FC = () => {
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
    <header className="relative z-40 w-full bg-[var(--nav-bg)] text-white shadow-lg transition-colors duration-300 border-b border-white/10 max-w-full">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-3">
          {/* Logo (Bigger & Clearer) */}
          <Link href="#hero" className="flex items-center gap-2 group shrink min-w-0">
            <div className="relative h-11 sm:h-14 w-40 sm:w-60 flex items-center shrink-0">
              <Image
                src="/images/logo.png"
                alt="C Five Transport Logo"
                fill
                className="object-contain object-left transition-transform duration-200 group-hover:scale-102"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-200 hover:text-[var(--accent)] transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--accent)] transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${siteContent.brand.phone}`}
              className="flex items-center gap-2 text-xs md:text-sm font-semibold text-slate-200 hover:text-[var(--accent)] px-3.5 py-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4 text-[var(--accent)]" />
              <span>{siteContent.brand.displayPhone}</span>
            </a>

            <a href="#quote">
              <Button variant="accent" size="default" className="gap-2 font-bold px-5 py-2.5 rounded-xl cursor-pointer">
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex items-center gap-2 lg:hidden shrink-0">
            <a
              href={`tel:${siteContent.brand.phone}`}
              className="p-2 rounded-xl bg-white/10 text-[var(--accent)]"
              aria-label="Call Andrew"
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[var(--nav-bg)] border-t border-white/10 px-4 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:bg-white/10 hover:text-[var(--accent)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 space-y-2.5">
            <a
              href={`tel:${siteContent.brand.phone}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-white/20 text-white font-semibold text-xs"
            >
              <Phone className="w-4 h-4 text-[var(--accent)]" />
              <span>Call: {siteContent.brand.displayPhone}</span>
            </a>

            <a
              href="#quote"
              onClick={() => setMobileMenuOpen(false)}
              className="block"
            >
              <Button variant="accent" className="w-full gap-2 py-3 font-bold text-xs rounded-xl">
                <span>Request Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
