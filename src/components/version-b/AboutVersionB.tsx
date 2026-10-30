"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, HeartHandshake, Truck, Compass, Award, Quote } from "lucide-react";
import { siteContent } from "@/data/content";

export const AboutVersionB: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bold Header & Mission Statement */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            {siteContent.about.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 leading-tight">
            More Than Transport - Personal Accountability For Every Load.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Raised in the mountains, proven on motorcycle racing circuits, and dedicated to delivering complete peace of mind.
          </p>
        </div>

        {/* Featured Quote Highlight Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm mb-16 relative overflow-hidden">
          <Quote className="w-24 h-24 text-orange-100 absolute -top-4 -right-4 -z-0" />
          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="text-xs font-bold uppercase text-orange-600 tracking-wider">
              Founder Philosophy
            </div>
            <p className="text-xl sm:text-2xl font-bold text-slate-900 leading-relaxed italic">
              &ldquo;{siteContent.about.quote}&rdquo;
            </p>
            <div className="text-sm font-semibold text-slate-500">
              - Andrew C., Dedicated Driver &amp; Founder
            </div>
          </div>
        </div>

        {/* 3-Step Milestone Storyline Layout (Unique to Version B) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column (5-col): Setup Showcase Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
            <div className="space-y-4">
              <div className="relative aspect-16/11 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                <Image
                  src="/images/trailer.jpg"
                  alt="C Five Enclosed Rig"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-950">
                Commercial Enclosed Rig
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Clean, climate-buffered interior equipped with soft-strap wheel ties, non-marring chocks, and low-incline ramps.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-mono font-bold text-orange-600 bg-orange-50 px-3 py-1.5 rounded-lg border border-orange-200">
                100% Weather Sealed
              </span>
              <span className="font-semibold text-slate-700">
                Zero Stone Chips
              </span>
            </div>
          </div>

          {/* Right Column (7-col): 3 Narrative Heritage Milestones */}
          <div className="lg:col-span-7 space-y-6">
            {/* Story Card 1 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-orange-500 transition-all flex items-start gap-4">
              <div className="p-3 rounded-xl bg-orange-50 text-orange-600 shrink-0 font-mono font-black text-sm">
                01
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-slate-950">
                  Rocky Mountain Origins
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {siteContent.about.storyP1}
                </p>
              </div>
            </div>

            {/* Story Card 2 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-orange-500 transition-all flex items-start gap-4">
              <div className="p-3 rounded-xl bg-orange-50 text-orange-600 shrink-0 font-mono font-black text-sm">
                02
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-slate-950">
                  Washington Road Racing Experience
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {siteContent.about.storyP2}
                </p>
              </div>
            </div>

            {/* Story Card 3 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-orange-500 transition-all flex items-start gap-4">
              <div className="p-3 rounded-xl bg-orange-50 text-orange-600 shrink-0 font-mono font-black text-sm">
                03
              </div>
              <div className="space-y-2">
                <h4 className="text-base font-bold text-slate-950">
                  Direct Driver Guarantee
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-800">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>Talk Directly to Andrew</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>Photo Checkpoint Texts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>Air-Ride Trailer Suspension</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>Comprehensive Cargo Insurance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
