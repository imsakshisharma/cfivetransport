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
  ShieldCheck,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteContent, ServiceItem } from "@/data/content";

const iconMap: Record<string, React.ReactNode> = {
  Car: <Car className="w-6 h-6" />,
  ShieldAlert: <ShieldAlert className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Anchor: <Anchor className="w-6 h-6" />,
  PackageCheck: <PackageCheck className="w-6 h-6" />,
  Truck: <Truck className="w-6 h-6" />,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[var(--surface-muted)] text-[var(--foreground)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="glow" className="uppercase tracking-wider">
            Specialized Transport Services
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
            Engineered For What Matters Most To You
          </h2>
          <p className="text-base sm:text-lg text-[var(--muted-foreground)]">
            Every shipment is locked into our fully enclosed commercial hauler, protected from harsh highway environments, and delivered with white-glove precision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteContent.services.map((service) => (
            <Card
              key={service.id}
              className="flex flex-col justify-between group hover:border-[var(--accent)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden bg-[var(--card-bg)] shadow-sm hover:shadow-xl"
            >
              <div>
                <CardHeader className="space-y-4 pb-2">
                  <div className="flex items-center justify-between">
                    <div className="p-3.5 rounded-xl bg-[var(--primary)] text-white group-hover:bg-[var(--accent)] transition-colors duration-300">
                      {iconMap[service.icon] || <Truck className="w-6 h-6" />}
                    </div>
                    <Badge variant="outline" className="text-[11px] font-semibold border-[var(--border-color)]">
                      {service.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-[var(--accent)] transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm font-medium text-[var(--foreground)]">
                    {service.shortDesc}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-2">
                  <p className="text-xs sm:text-sm text-[var(--muted-foreground)] leading-relaxed">
                    {service.fullDesc}
                  </p>
                </CardContent>
              </div>

              <CardFooter className="pt-4 border-t border-[var(--border-color)]">
                <a href="#quote" className="w-full">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-between group-hover:bg-[var(--surface-muted)] text-xs font-bold"
                  >
                    <span>Request Quote For This</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-14 p-6 rounded-2xl bg-[var(--nav-bg)] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-[var(--accent)] text-white shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold">Have unique cargo or custom dimensional requirements?</h4>
              <p className="text-xs sm:text-sm text-slate-300">
                We handle non-running auction vehicles, oversized crates, prototypes, and movie sets.
              </p>
            </div>
          </div>
          <a href="#quote" className="shrink-0 w-full md:w-auto">
            <Button variant="accent" className="w-full md:w-auto font-bold px-6 py-2.5">
              Discuss Custom Route
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
