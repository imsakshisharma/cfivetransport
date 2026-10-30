"use client";

import React from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Phone,
  ArrowRight,
  CheckCircle2,
  Truck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteContent } from "@/data/content";

export const HeroVersionB: React.FC = () => {
  return (
    <section id="hero" className="relative bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 overflow-hidden py-16 lg:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full max-w-full overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column: Authentic Copy & Actions */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            {/* Simple text above title */}
            <p className="text-xs sm:text-sm font-bold tracking-wider text-orange-600 uppercase">
              {siteContent.brand.tagline}
            </p>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-black tracking-tight text-slate-950 leading-tight break-words">
              Specialized Enclosed Vehicle &amp;{" "}
              <span className="text-orange-600">High-Value Cargo</span>{" "}
              Transport.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
              Door-to-door nationwide enclosed relocation for classic automobiles, exotic sports cars, race bikes, and precious family heirlooms. Managed and driven personally by Andrew with zero middlemen.
            </p>

            {/* Key benefits list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-sm font-semibold text-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="p-1 rounded-full bg-orange-100 text-orange-600 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Direct Owner-Operator Care</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="p-1 rounded-full bg-orange-100 text-orange-600 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>100% Enclosed Air-Ride Rig</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="p-1 rounded-full bg-orange-100 text-orange-600 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Milestone Photo &amp; SMS Check-ins</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="p-1 rounded-full bg-orange-100 text-orange-600 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Zero Depot Shuffles (Single Truck)</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a href="#quote" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-bold text-base py-6 px-8 rounded-xl shadow-lg shadow-orange-600/20 hover:shadow-xl gap-2 cursor-pointer"
                >
                  <span>Request a Free Quote</span>
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
                  className="w-full sm:w-auto border-2 border-slate-300 hover:border-slate-400 bg-white text-slate-900 font-bold text-base py-6 px-6 rounded-xl gap-2 cursor-pointer"
                >
                  <Phone className="w-5 h-5 text-orange-600" />
                  <span>Call {siteContent.brand.displayPhone}</span>
                </Button>
              </a>
            </div>

            {/* Trust note */}
            <div className="pt-2 flex items-center gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-1 font-semibold text-slate-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Fully Licensed &amp; Insured</span>
              </span>
              <span>&bull;</span>
              <span>{siteContent.brand.dotNumber}</span>
              <span>&bull;</span>
              <span>5.0 ★ Rated Shipper</span>
            </div>
          </div>

          {/* Right Column: Clean Framed Photo Showcase (NO FORM IN BANNER!) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-4/3 sm:aspect-16/11 bg-slate-100">
              <Image
                src="/images/hero-truck.jpg"
                alt="C Five Transport Heavy Duty Truck and Enclosed Trailer"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

              {/* Top floating pill */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md text-xs font-bold text-slate-900 flex items-center gap-2 border border-slate-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Active Routes Nationwide</span>
              </div>

              {/* Bottom caption overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg text-slate-900">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-orange-600">
                      Our Setup
                    </div>
                    <div className="text-sm font-bold text-slate-950">
                      Heavy-Duty Hauler &amp; Enclosed Trailer
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg">
                    100% Enclosed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clean Stats Ribbon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-slate-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
          {siteContent.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-orange-600 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 hidden sm:block">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
