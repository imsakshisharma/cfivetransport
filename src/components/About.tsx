"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, Shield, Compass, HeartHandshake, Truck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { siteContent } from "@/data/content";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[var(--surface)] text-[var(--foreground)] border-b border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50 aspect-4/3 lg:aspect-square">
              <Image
                src="/images/trailer.jpg"
                alt="C Five Transport Enclosed Trailer Setup"
                fill
                className="object-cover hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md text-white border border-white/10 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[var(--accent)] text-white">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">Dedicated Enclosed Rig</h4>
                    <p className="text-xs text-slate-300">Clean, climate-buffered &amp; soft-tie equipped</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Accent Card */}
            <div className="hidden sm:block absolute -top-6 -right-6 bg-[var(--primary)] text-[var(--primary-foreground)] p-4 rounded-xl shadow-xl border border-white/10 max-w-[200px]">
              <div className="text-3xl font-extrabold text-[var(--accent)]">500K+</div>
              <p className="text-xs font-medium text-slate-200 mt-1">
                Safe interstate highway miles logged personally.
              </p>
            </div>
          </div>

          {/* Right Column: Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="glow" className="uppercase tracking-wider">
              {siteContent.about.badge}
            </Badge>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[var(--foreground)] leading-tight">
              {siteContent.about.heading}
            </h2>

            <blockquote className="p-4 border-l-4 border-[var(--accent)] bg-[var(--surface-muted)] rounded-r-xl italic text-sm sm:text-base text-slate-700 font-medium">
              &ldquo;{siteContent.about.quote}&rdquo;
            </blockquote>

            <div className="space-y-4 text-sm sm:text-base text-[var(--muted-foreground)] leading-relaxed">
              <p>{siteContent.about.storyP1}</p>
              <p>{siteContent.about.storyP2}</p>
            </div>

            {/* Value checklist */}
            <div className="pt-2 space-y-3">
              {siteContent.about.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 p-1 rounded-full bg-[var(--accent)]/15 text-[var(--accent)] shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold text-[var(--foreground)]">
                    {bullet}
                  </span>
                </div>
              ))}
            </div>

            {/* Driver credential footer */}
            <div className="pt-4 border-t border-[var(--border-color)] flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="font-bold text-[var(--foreground)]">Andrew C.</div>
                <div className="text-xs text-[var(--muted-foreground)]">Owner, Operator &amp; Dedicated Driver</div>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg bg-[var(--surface-muted)] text-[var(--foreground)]">
                <HeartHandshake className="w-4 h-4 text-[var(--accent)]" />
                <span>Personal Care Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
