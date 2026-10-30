"use client";

import React from "react";
import {
  Car,
  ShieldAlert,
  Zap,
  Anchor,
  PackageCheck,
  Truck,
  ArrowRight,
  Check,
} from "lucide-react";
import { siteContent } from "@/data/content";

const serviceSpecs: Record<string, string[]> = {
  "enclosed-auto": [
    "Gentle-incline race ramps (no ground scrape)",
    "Non-marring over-the-tire basket straps",
    "Full weather-sealed climate buffer",
  ],
  "classic-antiques": [
    "High-capacity electric recovery winch",
    "Non-running & rolling chassis accommodation",
    "Detailed condition photos prior to loading",
  ],
  "motorcycles-powersports": [
    "Condor wheel chocks & soft tie ratchets",
    "Suspension-friendly secure fastening",
    "Trikes, Slingshots & dirt bikes welcomed",
  ],
  watercraft: [
    "Trailer hitch & safety chain inspection",
    "Bearing & tire safety checks before transit",
    "Dual-strapped hull fastening",
  ],
  "specialty-freight": [
    "Quilted moving blankets & shrink wrap",
    "Interior e-track wall lock fastening",
    "Climate protection for rare antique woods",
  ],
  "expedited-crosscountry": [
    "Direct point-to-point dedicated route",
    "Zero intermediate depot shuffles",
    "Daily SMS checkpoint updates with photos",
  ],
};

const iconMap: Record<string, React.ReactNode> = {
  Car: <Car className="w-6 h-6" />,
  ShieldAlert: <ShieldAlert className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Anchor: <Anchor className="w-6 h-6" />,
  PackageCheck: <PackageCheck className="w-6 h-6" />,
  Truck: <Truck className="w-6 h-6" />,
};

export const ServicesVersionB: React.FC = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
              Enclosed Freight Solutions
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950">
              Specialized Transport Offerings
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md">
            Every shipment is transported in our clean, weather-tight enclosed rig with personal updates from pickup to hand-off.
          </p>
        </div>

        {/* 2-Column Wide Split Cards Layout (Unique to Version B) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {siteContent.services.map((service, idx) => (
            <div
              key={service.id}
              className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 hover:border-orange-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                {/* Top Badge & Number */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-black text-orange-600 bg-orange-50 px-3 py-1 rounded-md border border-orange-200">
                    SERVICE 0{idx + 1}
                  </span>
                  <span className="text-xs font-bold text-slate-600 bg-white px-3 py-1 rounded-md border border-slate-200">
                    {service.badge}
                  </span>
                </div>

                {/* Title & Icon Header */}
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-white text-orange-600 shadow-xs border border-slate-200 shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    {iconMap[service.icon]}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-950 group-hover:text-orange-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.fullDesc}
                </p>

                {/* Technical Handling Bullet Points */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Handling Protocol:
                  </div>
                  {(serviceSpecs[service.id] || []).map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                      <Check className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Ready to transport this?
                </span>
                <a
                  href="#quote"
                  className="inline-flex items-center gap-2 text-xs font-bold text-orange-600 hover:text-orange-700 group-hover:translate-x-1 transition-transform"
                >
                  <span>Request Custom Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
