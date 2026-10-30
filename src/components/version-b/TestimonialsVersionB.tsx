"use client";

import React from "react";
import { Star, CheckCircle, MapPin, Truck, Quote } from "lucide-react";
import { siteContent } from "@/data/content";

export const TestimonialsVersionB: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Verified Reviews
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-950">
            What People Say After Riding With Andrew
          </h2>
          <p className="text-sm text-slate-600">
            Real feedback from classic vehicle owners, furniture shippers, and powersports enthusiasts nationwide.
          </p>
        </div>

        {/* Compact 3-Column Grid matching Version A structure with Version B Light & Orange Hover Feel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteContent.testimonials.map((review) => (
            <div
              key={review.id}
              className="group relative rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-orange-500 overflow-hidden"
            >
              {/* Unique Version B Hover Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-orange-600 transition-colors duration-300" />

              <div className="space-y-3.5">
                {/* Header: Stars & Route */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified</span>
                  </span>
                </div>

                {/* Cargo & Route Pill */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-orange-50/50 group-hover:border-orange-200 transition-colors space-y-1">
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-orange-600" />
                    <span>{review.cargo}</span>
                  </div>
                  <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{review.route}</span>
                  </div>
                </div>

                {/* Review Quote */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              {/* Footer: Client Attribution */}
              <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-xs sm:text-sm text-slate-950">
                    {review.client}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Direct Client
                  </div>
                </div>
                <span className="font-mono text-[11px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                  5.0 ★
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Compact Bottom Rating Box */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-slate-200 max-w-xl mx-auto flex items-center justify-center gap-5 text-center shadow-xs">
          <div className="text-3xl font-black text-orange-600">5.0</div>
          <div className="h-6 w-px bg-slate-200" />
          <div className="text-xs text-slate-600 text-left">
            <strong className="text-slate-900 block font-semibold">100% Five-Star Track Record</strong>
            Every run personally handled by Andrew with direct cell &amp; photo communication.
          </div>
        </div>
      </div>
    </section>
  );
};
