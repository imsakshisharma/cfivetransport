"use client";

import React from "react";
import { FileText, KeyRound, Radio, CheckCircle, ArrowRight } from "lucide-react";
import { siteContent } from "@/data/content";

const stepIcons = [
  <FileText key="1" className="w-5 h-5" />,
  <KeyRound key="2" className="w-5 h-5" />,
  <Radio key="3" className="w-5 h-5" />,
  <CheckCircle key="4" className="w-5 h-5" />,
];

const milestoneTags = [
  "Route audit & flat-rate quote",
  "Nylon basket straps & winch prep",
  "Daily SMS & rest-stop photos",
  "Doorstep walk-around inspection",
];

export const HowItWorksVersionB: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Clear Workflow
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950">
            The 4-Stage Transport Journey
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Simple, transparent, and coordinated directly with the driver who handles your load.
          </p>
        </div>

        {/* Connected Highway Stepper Cards Layout (Unique to Version B) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {siteContent.howItWorks.map((step, idx) => (
            <div
              key={step.step}
              className="p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-orange-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
            >
              <div className="space-y-4">
                {/* Number & Icon Pill */}
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-2xl bg-orange-600 text-white font-mono font-black text-sm flex items-center justify-center shadow-sm">
                    {step.step}
                  </span>
                  <div className="p-2.5 rounded-xl bg-white text-orange-600 border border-slate-200 shadow-xs">
                    {stepIcons[idx]}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-950 group-hover:text-orange-600 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>

              {/* Milestone Tag */}
              <div className="mt-6 pt-4 border-t border-slate-200">
                <div className="text-[11px] font-bold text-orange-700 bg-orange-50 px-3 py-1 rounded-lg border border-orange-200 text-center">
                  {milestoneTags[idx]}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-14 text-center">
          <a href="#quote">
            <button className="px-8 py-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-lg shadow-orange-600/20 inline-flex items-center gap-2">
              <span>Schedule Step 1: Request Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
