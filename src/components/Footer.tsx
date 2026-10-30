"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ShieldCheck, Heart, ArrowUp } from "lucide-react";
import { siteContent } from "@/data/content";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="relative h-12 w-48">
              <Image
                src="/images/logo.png"
                alt="C Five Transport"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Specialized enclosed transport for luxury &amp; classic vehicles, motorcycles, watercraft, and high-value cargo. Delivering peace of mind across all 50 states.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{siteContent.brand.dotNumber}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--accent)]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Andrew &amp; Setup
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Enclosed Transport Services
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-white transition-colors">
                  Why Choose Us vs. Brokers
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  Our 4-Step Process
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Fleet &amp; Cargo Gallery
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Shipper Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--accent)]">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[var(--accent)] mt-0.5 shrink-0" />
                <div>
                  <div className="text-[11px] text-slate-500 uppercase font-semibold">Call or Text</div>
                  <a href={`tel:${siteContent.brand.phone}`} className="text-white font-bold hover:text-[var(--accent)]">
                    {siteContent.brand.displayPhone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[var(--accent)] mt-0.5 shrink-0" />
                <div>
                  <div className="text-[11px] text-slate-500 uppercase font-semibold">Email Inquiry</div>
                  <a href={`mailto:${siteContent.brand.email}`} className="text-slate-300 hover:text-[var(--accent)]">
                    {siteContent.brand.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[var(--accent)] mt-0.5 shrink-0" />
                <div>
                  <div className="text-[11px] text-slate-500 uppercase font-semibold">Service Coverage</div>
                  <span className="text-slate-300">Pacific Northwest to All 50 US States</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Operating hours */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--accent)]">
              Operating Hours
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              We operate on dedicated routes 7 days a week. Phone lines and text updates are monitored continuously while loads are active en route.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; 2026 C Five Transport. All Rights Reserved. &ldquo;Delivering You Peace of Mind.&rdquo;
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
