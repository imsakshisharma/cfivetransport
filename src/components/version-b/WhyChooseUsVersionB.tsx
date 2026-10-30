"use client";

import React from "react";
import {
  ShieldCheck,
  UserCheck,
  Navigation,
  Clock,
  Check,
  X,
  Phone,
  Truck,
  Lock,
} from "lucide-react";
import { siteContent } from "@/data/content";

export const WhyChooseUsVersionB: React.FC = () => {
  const comparisonItems = [
    {
      title: "Who Actually Drives Your Truck?",
      cFive: "Andrew directly - dedicated owner-operator who quotes, loads, and delivers.",
      broker: "Unknown lowest-bid stranger hired off an internet load board.",
    },
    {
      title: "Cargo Enclosure & Protection",
      cFive: "100% weather-tight commercial enclosed rig with air-ride suspension.",
      broker: "Usually exposed open 9-car hauler exposed to rock chips and oil leaks.",
    },
    {
      title: "In-Transit Communication",
      cFive: "Direct cell phone text, milestone photos, and advance arrival notices.",
      broker: "Overseas call center tickets with no direct driver contact.",
    },
    {
      title: "Depot Swaps & Terminal Transfers",
      cFive: "Zero - your vehicle stays locked in the same trailer from pickup to doorstep.",
      broker: "Often unloaded and reloaded across 2 to 3 intermediate freight yards.",
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Direct Advantage
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950">
            Why High-Value Shippers Choose Andrew
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Compare the reality of shipping with a dedicated owner-operator versus impersonal brokerage boards.
          </p>
        </div>

        {/* Unique Split Architecture for Version B */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column (5-col): The C Five Direct Promise Card */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="p-4 w-fit rounded-2xl bg-orange-50 text-orange-600 border border-orange-100">
                <ShieldCheck className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-black text-slate-950">
                  The C Five Direct Standard
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We built our reputation on doing the heavy lifting with white-glove respect for classic cars, race bikes, and family heirlooms.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs font-bold text-slate-800">
                  <div className="p-1.5 rounded-full bg-emerald-100 text-emerald-700">
                    <Check className="w-4 h-4" />
                  </div>
                  <span>100% Chain-of-Custody (One Driver)</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-slate-800">
                  <div className="p-1.5 rounded-full bg-emerald-100 text-emerald-700">
                    <Check className="w-4 h-4" />
                  </div>
                  <span>Commercial Enclosed Air-Ride Protection</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-slate-800">
                  <div className="p-1.5 rounded-full bg-emerald-100 text-emerald-700">
                    <Check className="w-4 h-4" />
                  </div>
                  <span>Proactive SMS Photos at Key Rest Stops</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-slate-800">
                  <div className="p-1.5 rounded-full bg-emerald-100 text-emerald-700">
                    <Check className="w-4 h-4" />
                  </div>
                  <span>DOT Certified &bull; Fully Insured</span>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="text-xs font-bold text-slate-900">
                Direct Driver Contact:
              </div>
              <a
                href={`tel:${siteContent.brand.phone}`}
                className="text-lg font-black text-orange-600 hover:text-orange-700 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>{siteContent.brand.displayPhone}</span>
              </a>
            </div>
          </div>

          {/* Right Column (7-col): Visual Comparison Cards Stack */}
          <div className="lg:col-span-7 space-y-4">
            {comparisonItems.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-shadow space-y-3"
              >
                <h4 className="text-base font-bold text-slate-950 flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded">
                    0{idx + 1}
                  </span>
                  <span>{item.title}</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {/* C Five Standard */}
                  <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-xs text-emerald-950 space-y-1">
                    <div className="font-bold flex items-center gap-1.5 text-emerald-800">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>C Five Transport Direct</span>
                    </div>
                    <p className="text-[11px] text-slate-700 leading-relaxed font-medium">
                      {item.cFive}
                    </p>
                  </div>

                  {/* Typical Broker Risk */}
                  <div className="p-3.5 rounded-2xl bg-rose-50/60 border border-rose-200 text-xs text-rose-950 space-y-1">
                    <div className="font-bold flex items-center gap-1.5 text-rose-700">
                      <X className="w-4 h-4 text-rose-500" />
                      <span>Typical Freight Broker</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      {item.broker}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
