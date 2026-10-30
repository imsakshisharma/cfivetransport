"use client";

import React from "react";
import {
  UserCheck,
  ShieldCheck,
  Navigation,
  Clock,
  Check,
  X,
  PhoneCall,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { siteContent } from "@/data/content";

const iconMap: Record<string, React.ReactNode> = {
  UserCheck: <UserCheck className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  Navigation: <Navigation className="w-6 h-6" />,
  Clock: <Clock className="w-6 h-6" />,
};

export const WhyChooseUs: React.FC = () => {
  const comparison = [
    {
      feature: "Who Drives Your Load?",
      cFive: "Andrew directly - dedicated owner-operator",
      brokers: "Unknown lowest-bid subcontractor",
    },
    {
      feature: "Enclosure Protection",
      cFive: "100% weather-tight enclosed rig & air-ride",
      brokers: "Usually exposed open car-haulers with rock chips",
    },
    {
      feature: "Driver Communication",
      cFive: "Direct cell phone text, calls & photo updates",
      brokers: "Call center hold times & automated emails",
    },
    {
      feature: "Intermediate Yard Transfers",
      cFive: "Zero - loaded once, delivered directly to destination",
      brokers: "Often swapped between 2-3 regional transfer depots",
    },
    {
      feature: "Flexible Pickup Windows",
      cFive: "Coordinated around your exact personal schedule",
      brokers: "Vague 5-day windows with last-minute cancellations",
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-[var(--surface)] text-[var(--foreground)] border-b border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="glow" className="uppercase tracking-wider">
            Why Choose C Five Transport
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
            Built On Transparency, Trust &amp; White-Glove Care
          </h2>
          <p className="text-base sm:text-lg text-[var(--muted-foreground)]">
            Most people dread shipping vehicles or heirlooms because standard freight brokers treat them like numbers. We built C Five Transport to deliver complete peace of mind.
          </p>
        </div>

        {/* 4 Feature Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {siteContent.whyChooseUs.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] hover:border-[var(--accent)] hover:shadow-lg transition-all duration-300 space-y-4"
            >
              <div className="p-3 w-fit rounded-xl bg-[var(--primary)] text-white">
                {iconMap[pillar.icon]}
              </div>
              <h3 className="text-lg font-bold text-[var(--foreground)]">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--muted-foreground)] leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Table Box */}
        <div className="rounded-2xl border border-[var(--border-color)] overflow-hidden shadow-md bg-[var(--card-bg)] w-full max-w-full">
          <div className="p-4 sm:p-8 bg-[var(--surface-muted)] border-b border-[var(--border-color)]">
            <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] text-center">
              The C Five Difference vs. Freight Brokers
            </h3>
            <p className="text-xs sm:text-sm text-[var(--muted-foreground)] text-center mt-1">
              Why car enthusiasts, antique collectors, and families trust us over impersonal brokerage boards.
            </p>
          </div>

          <div className="overflow-x-auto w-full max-w-full scrollbar-thin">
            <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
              <thead className="bg-[var(--surface-subtle)] text-[var(--foreground)] font-bold uppercase text-[11px] tracking-wider border-b border-[var(--border-color)]">
                <tr>
                  <th className="py-4 px-6 w-1/3">Feature</th>
                  <th className="py-4 px-6 w-1/3 bg-[var(--primary)] text-white">
                    C Five Transport (Direct)
                  </th>
                  <th className="py-4 px-6 w-1/3 text-slate-500">
                    Typical Freight Broker
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-color)]">
                {comparison.map((item, idx) => (
                  <tr key={idx} className="hover:bg-[var(--surface-muted)]/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-[var(--foreground)]">
                      {item.feature}
                    </td>
                    <td className="py-4 px-6 bg-[var(--primary)]/5 font-medium text-[var(--foreground)]">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{item.cFive}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-[var(--muted-foreground)]">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-rose-500 shrink-0" />
                        <span>{item.brokers}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
