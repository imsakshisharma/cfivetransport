"use client";

import React from "react";
import { Star, Quote, CheckCircle, MapPin, Truck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { siteContent } from "@/data/content";

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[var(--surface-muted)] text-[var(--foreground)] border-b border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="glow" className="uppercase tracking-wider">
            Verified Shipper Reviews
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
            What People Say After Riding With Andrew
          </h2>
          <p className="text-base sm:text-lg text-[var(--muted-foreground)]">
            Real feedback from classic vehicle owners, furniture shippers, and powersports enthusiasts who trusted C Five Transport across the United States.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteContent.testimonials.map((review) => (
            <Card
              key={review.id}
              className="flex flex-col justify-between p-6 bg-[var(--card-bg)] border-[var(--border-color)] hover:border-[var(--accent)] hover:shadow-xl transition-all duration-300 relative group"
            >
              <div>
                {/* Header: Stars & Route */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified</span>
                  </span>
                </div>

                {/* Cargo & Route Tag */}
                <div className="mb-4 space-y-1 p-3 rounded-xl bg-[var(--surface-muted)] border border-[var(--border-color)]">
                  <div className="text-xs font-bold text-[var(--foreground)] flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-[var(--accent)]" />
                    <span>{review.cargo}</span>
                  </div>
                  <div className="text-[11px] text-[var(--muted-foreground)] flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[var(--muted-foreground)]" />
                    <span>{review.route}</span>
                  </div>
                </div>

                {/* Review Quote */}
                <div className="relative">
                  <Quote className="w-8 h-8 text-[var(--accent)]/15 absolute -top-3 -left-2 -z-0" />
                  <p className="text-xs sm:text-sm text-[var(--foreground)] leading-relaxed italic relative z-10">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Client Name */}
              <div className="mt-6 pt-4 border-t border-[var(--border-color)] flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-[var(--foreground)]">
                    {review.client}
                  </div>
                  <div className="text-[11px] text-[var(--muted-foreground)]">
                    Direct Client
                  </div>
                </div>
                <Badge variant="outline" className="text-[10px]">
                  5.0 ★
                </Badge>
              </div>
            </Card>
          ))}
        </div>

        {/* 5-Star Average Rating Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-around gap-6 text-center sm:text-left shadow-sm">
          <div className="flex items-center gap-3">
            <div className="text-4xl font-extrabold text-[var(--accent)]">5.0</div>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-xs text-[var(--muted-foreground)] mt-0.5">
                100% Positive Client Track Record
              </div>
            </div>
          </div>
          <div className="h-8 w-px bg-[var(--border-color)] hidden sm:block" />
          <div className="text-xs text-[var(--foreground)] font-medium">
            Every shipment personally overseen by Andrew with real-time text &amp; photo communication.
          </div>
        </div>
      </div>
    </section>
  );
};
