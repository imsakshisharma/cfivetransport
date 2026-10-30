"use client";

import React from "react";
import { FileText, KeyRound, Radio, CheckCircle, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/content";

const stepIcons = [
  <FileText key="1" className="w-6 h-6" />,
  <KeyRound key="2" className="w-6 h-6" />,
  <Radio key="3" className="w-6 h-6" />,
  <CheckCircle key="4" className="w-6 h-6" />,
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[var(--surface-muted)] text-[var(--foreground)] border-b border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="glow" className="uppercase tracking-wider">
            Simple 4-Step Process
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
            How Your Transport Journey Works
          </h2>
          <p className="text-base sm:text-lg text-[var(--muted-foreground)]">
            From the initial conversation to the moment your vehicle or shipment rolls off the trailer, here is our straightforward, stress-free process.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {siteContent.howItWorks.map((step, idx) => (
            <div
              key={step.step}
              className="relative p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              {/* Step indicator header */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-[var(--primary)] text-white group-hover:bg-[var(--accent)] transition-colors duration-300">
                    {stepIcons[idx]}
                  </div>
                  <span className="text-3xl font-black text-[var(--accent)] font-mono opacity-80">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--muted-foreground)] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Step completion pill */}
              <div className="mt-6 pt-4 border-t border-[var(--border-color)] flex items-center gap-2 text-xs font-semibold text-[var(--accent)]">
                <span>Phase {step.step}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></span>
                <span className="text-[var(--muted-foreground)] font-normal">Guaranteed</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <a href="#quote">
            <Button variant="accent" size="lg" className="gap-2 shadow-lg hover:shadow-xl font-bold cursor-pointer">
              <span>Ready To Book? Start Step 1 Now</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
