"use client";

import React from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, ShieldCheck, ArrowUp } from "lucide-react";
import { siteContent } from "@/data/content";

export const FooterVersionB: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="relative h-12 w-48 bg-slate-950 p-2 rounded-xl flex items-center">
              <Image
                src="/images/logo.png"
                alt="C Five Transport"
                fill
                className="object-contain p-1"
              />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Specialized enclosed carrier transport for automobiles, motorcycles, boats, and high-value cargo. Delivering you peace of mind across all 50 states.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>{siteContent.brand.dotNumber}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-orange-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
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

          {/* Direct Driver Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-orange-400">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-slate-500 block text-[10px] uppercase font-semibold">
                  Call or Text Andrew
                </span>
                <a
                  href={`tel:${siteContent.brand.phone}`}
                  className="text-base font-bold text-white hover:text-orange-400"
                >
                  {siteContent.brand.displayPhone}
                </a>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px] uppercase font-semibold">
                  Dispatch Email
                </span>
                <a
                  href={`mailto:${siteContent.brand.email}`}
                  className="text-slate-300 hover:text-orange-400"
                >
                  {siteContent.brand.email}
                </a>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px] uppercase font-semibold">
                  Coverage
                </span>
                <span className="text-slate-300">
                  Pacific Northwest to All 50 US States
                </span>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-orange-400">
              Operating Hours
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              We operate on dedicated routes 7 days a week. Phone lines and direct driver text updates are monitored continuously while loads are active en route.
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
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
