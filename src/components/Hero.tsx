"use client";

import React from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Phone,
  ArrowRight,
  CheckCircle2,
  Truck,
  Navigation,
  MapPin,
  Lock,
  Radio,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteContent } from "@/data/content";

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[88vh] flex flex-col justify-between overflow-hidden bg-[#07172b] text-white">
      {/* Full-Bleed Atmospheric Background with Deep Navy Radial Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-truck.jpg"
          alt="C Five Transport Heavy Duty Rig"
          fill
          className="object-cover object-center opacity-30 mix-blend-luminosity scale-102"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07172b] via-[#07172b]/95 to-[#0b2545]/70" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#07172b]/60 to-[#07172b]/95" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 w-full max-w-full overflow-hidden flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center w-full">
          
          {/* Left Column (7-col): Corporate Authority & Direct Driver Assurance */}
          <div className="lg:col-span-7 space-y-6">
            {/* Simple text above title */}
            <p className="text-xs sm:text-sm font-bold tracking-wider text-amber-400 uppercase">
              {siteContent.brand.tagline}
            </p>

            {/* Monumental Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight break-words">
              Premier Enclosed Vehicle &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-100">
                High-Value Freight
              </span>{" "}
              Relocation.
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-normal max-w-xl">
              Direct owner-operator reliability across all 50 states. From classic muscle cars and exotics to race bikes and priceless heirlooms, Andrew manages and drives your cargo personally with zero broker markups.
            </p>

            {/* 4 Feature Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2.5">
                <div className="p-1 rounded-full bg-amber-400/20 text-amber-400 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Deal Directly with Andrew (Owner-Operator)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="p-1 rounded-full bg-amber-400/20 text-amber-400 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>100% Enclosed Air-Ride Protection</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="p-1 rounded-full bg-amber-400/20 text-amber-400 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>En-Route Milestone Photos &amp; SMS Check-ins</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="p-1 rounded-full bg-amber-400/20 text-amber-400 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Single-Trailer Transit (Zero Yard Shuffles)</span>
              </div>
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a href="#quote" className="w-full sm:w-auto">
                <Button
                  variant="accent"
                  size="lg"
                  className="w-full sm:w-auto text-sm sm:text-base gap-2 py-5 sm:py-6 px-7 rounded-xl shadow-xl hover:shadow-2xl font-bold cursor-pointer"
                >
                  <span>Request Custom Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>

              <a
                href={`tel:${siteContent.brand.phone}`}
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-sm sm:text-base gap-2.5 py-5 sm:py-6 px-6 rounded-xl border-white/20 bg-white/5 hover:bg-white/10 text-white cursor-pointer"
                >
                  <Phone className="w-5 h-5 text-[var(--accent)]" />
                  <span>Call {siteContent.brand.displayPhone}</span>
                </Button>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Fully Licensed &amp; Insured</span>
              </span>
              <span>&bull;</span>
              <span>{siteContent.brand.dotNumber}</span>
              <span>&bull;</span>
              <span className="text-amber-400 font-semibold">5.0 ★ Rated Shipper</span>
            </div>
          </div>

          {/* Right Column (5-col): Clean Direct Route Overview Card */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-700/80 shadow-2xl backdrop-blur-xl space-y-6 relative overflow-hidden">
              {/* Subtle Ambient Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Clean Card Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <h3 className="text-sm font-bold text-white tracking-wide uppercase">
                  Direct Enclosed Transit
                </h3>
                <span className="text-xs font-semibold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                  100% Weather-Sealed
                </span>
              </div>

              {/* Visual Transit Corridor Node */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
                <div className="text-[10px] uppercase font-mono font-bold text-slate-400 tracking-wider">
                  Dedicated Route Corridor
                </div>

                <div className="flex items-center justify-between text-xs font-bold text-white">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    <span>Pacific Northwest</span>
                  </div>
                  <div className="flex-1 mx-3 flex items-center">
                    <div className="h-0.5 bg-slate-700 flex-1 relative">
                      <div className="absolute left-1/2 -top-1 w-2 h-2 rounded-full bg-amber-400 -translate-x-1/2 animate-pulse" />
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                    <span>Nationwide 50 States</span>
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 flex items-center justify-between pt-1">
                  <span>Direct Single-Rig Transit</span>
                  <span className="font-mono text-amber-400">Zero Transfers</span>
                </div>
              </div>

              {/* 3 Telemetry Spec Tiles */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <div className="text-[10px] uppercase font-mono text-slate-500 font-semibold flex items-center gap-1">
                    <Truck className="w-3 h-3 text-amber-400" /> Setup
                  </div>
                  <div className="font-bold text-slate-100">Air-Ride Trailer</div>
                  <div className="text-[10px] text-slate-400">Soft-Tie Winching</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <div className="text-[10px] uppercase font-mono text-slate-500 font-semibold flex items-center gap-1">
                    <Radio className="w-3 h-3 text-emerald-400" /> Updates
                  </div>
                  <div className="font-bold text-slate-100">Milestone Photos</div>
                  <div className="text-[10px] text-slate-400">Direct SMS to Driver</div>
                </div>
              </div>

              {/* Driver Assurance Snippet */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-950/40 to-slate-950/80 border border-blue-900/40 flex items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1 text-xs">
                    <span className="font-bold text-white">Andrew C.</span>
                    <span className="text-[10px] text-slate-400">&bull; Owner-Operator</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-[10px] text-slate-300 font-mono ml-1">5.0 Star Shipper</span>
                  </div>
                </div>

                <a href="#quote">
                  <button className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-md">
                    Book Space
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Bottom Stats Ribbon (Integrated Full Width) */}
      <div className="relative z-10 w-full border-t border-white/10 bg-slate-900/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center sm:text-left">
            {siteContent.stats.map((stat, idx) => (
              <div key={idx} className="space-y-0.5">
                <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[var(--accent)] tracking-tight font-mono">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-100">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 hidden sm:block">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
