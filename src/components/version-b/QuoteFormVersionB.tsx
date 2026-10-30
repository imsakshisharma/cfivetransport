"use client";

import React, { useState } from "react";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Truck,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteContent } from "@/data/content";

export const QuoteFormVersionB: React.FC = () => {
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    cargoType: "classic-car",
    cargoDetails: "",
    targetDate: "",
    name: "",
    phone: "",
    email: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="quote" className="py-16 lg:py-24 bg-white text-slate-900 scroll-mt-10 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column (5-col): Compact Direct Contact Cards (like Version A with Version B Orange Feel) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
                Instant Estimate
              </div>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-950 leading-tight">
                Let&apos;s Get Your Cargo Safely Moving.
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Fill out the quick route details or contact Andrew directly. Because there are zero broker middlemen, you get transparent pricing and direct driver answers.
              </p>
            </div>

            {/* Direct Connect Interactive Cards with Version B Hover Effects */}
            <div className="space-y-3.5">
              <a
                href={`tel:${siteContent.brand.phone}`}
                className="group flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-orange-500 hover:bg-orange-50/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="p-3 rounded-xl bg-white text-orange-600 border border-slate-200 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-200 shadow-xs shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Direct Call / Text Andrew
                  </div>
                  <div className="text-base font-bold text-slate-950 group-hover:text-orange-600 transition-colors">
                    {siteContent.brand.displayPhone}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${siteContent.brand.email}`}
                className="group flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-orange-500 hover:bg-orange-50/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="p-3 rounded-xl bg-white text-slate-900 border border-slate-200 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-200 shadow-xs shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Dispatch Email
                  </div>
                  <div className="text-sm font-bold text-slate-950 group-hover:text-orange-600 transition-colors">
                    {siteContent.brand.email}
                  </div>
                </div>
              </a>
            </div>

            {/* Compact Reassurance Box */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
              <div className="text-xs font-bold flex items-center gap-2 text-slate-950">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>The C Five Service Guarantee:</span>
              </div>
              <ul className="text-xs space-y-1.5 text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Transparent flat rates - no hidden fuel surcharges</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Comprehensive cargo insurance included on every run</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Direct phone updates with photos at key rest stops</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column (7-col): Compact, Clean Light Quote Form (like Version A structure) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-md">
              {submitted ? (
                <div className="py-10 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-slate-950">
                      Quote Request Received!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                      Thank you, <strong className="text-slate-900">{formData.name || "friend"}</strong>! Andrew will review your route from <strong className="text-slate-900">{formData.origin || "Origin"}</strong> to <strong className="text-slate-900">{formData.destination || "Destination"}</strong> and contact you directly.
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                    className="text-xs bg-white"
                  >
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-200 pb-3">
                    <h3 className="text-lg font-bold text-slate-950">
                      Calculate Your Transport Rate
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Fast response &bull; No automated phone trees.
                    </p>
                  </div>

                  {/* Route inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-800 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-orange-600" />
                        <span>Pickup Location (Zip or City) *</span>
                      </label>
                      <Input
                        required
                        placeholder="e.g. Seattle, WA 98101"
                        value={formData.origin}
                        onChange={(e) =>
                          setFormData({ ...formData, origin: e.target.value })
                        }
                        className="bg-white border-slate-200 text-slate-900 text-xs h-11 focus-visible:ring-orange-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-800 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-orange-600" />
                        <span>Delivery Destination (Zip or City) *</span>
                      </label>
                      <Input
                        required
                        placeholder="e.g. Phoenix, AZ 85001"
                        value={formData.destination}
                        onChange={(e) =>
                          setFormData({ ...formData, destination: e.target.value })
                        }
                        className="bg-white border-slate-200 text-slate-900 text-xs h-11 focus-visible:ring-orange-500"
                      />
                    </div>
                  </div>

                  {/* Cargo type select */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-800 flex items-center gap-1">
                        <Truck className="w-3.5 h-3.5 text-orange-600" />
                        <span>Cargo Classification *</span>
                      </label>
                      <select
                        value={formData.cargoType}
                        onChange={(e) =>
                          setFormData({ ...formData, cargoType: e.target.value })
                        }
                        className="flex h-11 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      >
                        <option value="classic-car">Classic &amp; Vintage Automobile</option>
                        <option value="exotic-car">Exotic / Luxury Supercar</option>
                        <option value="motorcycle">Motorcycle / Race Bike / Dirt Bike</option>
                        <option value="powersports">3-Wheeler / Slingshot / ATV</option>
                        <option value="watercraft">Boat / Sea Doo / Jet Ski</option>
                        <option value="furniture">Antique Heirloom / China Hutch</option>
                        <option value="other">Specialty Commercial Freight</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-800 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-orange-600" />
                        <span>Target Ready Date *</span>
                      </label>
                      <Input
                        type="date"
                        required
                        value={formData.targetDate}
                        onChange={(e) =>
                          setFormData({ ...formData, targetDate: e.target.value })
                        }
                        className="bg-white border-slate-200 text-slate-900 text-xs h-11 focus-visible:ring-orange-500"
                      />
                    </div>
                  </div>

                  {/* Cargo description */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-800">
                      Vehicle Year, Make, Model or Dimensions *
                    </label>
                    <Input
                      required
                      placeholder="e.g. 1964 Ford Falcon Futura or Harley-Davidson Road Glide"
                      value={formData.cargoDetails}
                      onChange={(e) =>
                        setFormData({ ...formData, cargoDetails: e.target.value })
                      }
                      className="bg-white border-slate-200 text-slate-900 text-xs h-11 focus-visible:ring-orange-500"
                    />
                  </div>

                  {/* Contact details */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-800">
                        Your Name *
                      </label>
                      <Input
                        required
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="bg-white border-slate-200 text-slate-900 text-xs h-11 focus-visible:ring-orange-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-800">
                        Phone *
                      </label>
                      <Input
                        type="tel"
                        required
                        placeholder="(555) 000-0000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="bg-white border-slate-200 text-slate-900 text-xs h-11 focus-visible:ring-orange-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-800">
                        Email *
                      </label>
                      <Input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="bg-white border-slate-200 text-slate-900 text-xs h-11 focus-visible:ring-orange-500"
                      />
                    </div>
                  </div>

                  {/* Special notes */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-800">
                      Special Handling or Timing Requirements (Optional)
                    </label>
                    <Textarea
                      placeholder="e.g. Needs winch loading, residential driveway access, specific delivery date window..."
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      className="bg-white border-slate-200 text-slate-900 text-xs focus-visible:ring-orange-500"
                      rows={2}
                    />
                  </div>

                  {/* Submit CTA with smooth hover animation */}
                  <button
                    type="submit"
                    className="group w-full py-3.5 px-6 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 mt-2"
                  >
                    <span>Submit Free Quote Request to Andrew</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
