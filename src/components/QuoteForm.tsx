"use client";

import React, { useState } from "react";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Truck,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteContent } from "@/data/content";

export const QuoteForm: React.FC = () => {
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
    <section id="quote" className="py-20 lg:py-28 bg-[var(--surface)] text-[var(--foreground)] scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact & Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <Badge variant="glow" className="uppercase tracking-wider">
                Get an Instant Quote
              </Badge>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)] leading-tight">
                Let&apos;s Get Your Cargo Safely Moving.
              </h2>
              <p className="text-base text-[var(--muted-foreground)] leading-relaxed">
                Fill out the quick route details below or contact Andrew directly. Because there are zero broker middlemen, you get transparent pricing and direct driver answers immediately.
              </p>
            </div>

            {/* Direct Connect Cards */}
            <div className="space-y-4">
              <a
                href={`tel:${siteContent.brand.phone}`}
                className="flex items-center gap-4 p-5 rounded-2xl bg-[var(--surface-muted)] border border-[var(--border-color)] hover:border-[var(--accent)] hover:shadow-md transition-all group"
              >
                <div className="p-3 rounded-xl bg-[var(--primary)] text-white group-hover:bg-[var(--accent)] transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                    Direct Call / Text Andrew
                  </div>
                  <div className="text-lg font-bold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                    {siteContent.brand.displayPhone}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${siteContent.brand.email}`}
                className="flex items-center gap-4 p-5 rounded-2xl bg-[var(--surface-muted)] border border-[var(--border-color)] hover:border-[var(--accent)] hover:shadow-md transition-all group"
              >
                <div className="p-3 rounded-xl bg-[var(--primary)] text-white group-hover:bg-[var(--accent)] transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                    Email Dispatch
                  </div>
                  <div className="text-base font-bold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                    {siteContent.brand.email}
                  </div>
                </div>
              </a>
            </div>

            {/* Reassurance list */}
            <div className="p-6 rounded-2xl bg-[var(--nav-bg)] text-white space-y-3 shadow-lg">
              <div className="text-sm font-bold flex items-center gap-2 text-[var(--accent)]">
                <ShieldCheck className="w-5 h-5" />
                <span>C Five Service Guarantee:</span>
              </div>
              <ul className="text-xs space-y-2 text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Transparent flat rates - no hidden fuel surcharges</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Comprehensive cargo insurance included on every run</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Direct phone updates with photos at key rest stops</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Interactive Quote Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-xl relative overflow-hidden">
              {submitted ? (
                <div className="py-12 text-center space-y-6 animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-[var(--foreground)]">
                      Quote Request Received!
                    </h3>
                    <p className="text-sm text-[var(--muted-foreground)] max-w-md mx-auto">
                      Thank you, <strong className="text-[var(--foreground)]">{formData.name || "friend"}</strong>! Andrew will review your route from <strong className="text-[var(--foreground)]">{formData.origin || "Origin"}</strong> to <strong className="text-[var(--foreground)]">{formData.destination || "Destination"}</strong> and contact you directly via phone/email shortly.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[var(--surface-muted)] max-w-sm mx-auto text-xs text-left space-y-1">
                    <div><strong>Cargo:</strong> {formData.cargoDetails || formData.cargoType}</div>
                    <div><strong>Contact:</strong> {formData.phone} | {formData.email}</div>
                  </div>

                  <Button
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                    className="text-xs"
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-[var(--foreground)]">
                      Calculate Your Transport Rate
                    </h3>
                    <p className="text-xs text-[var(--muted-foreground)] mt-1">
                      No commitment required. We respond quickly with exact scheduling.
                    </p>
                  </div>

                  {/* Route inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[var(--foreground)] flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
                        <span>Pickup Location (Zip or City) *</span>
                      </label>
                      <Input
                        required
                        placeholder="e.g. Seattle, WA 98101"
                        value={formData.origin}
                        onChange={(e) =>
                          setFormData({ ...formData, origin: e.target.value })
                        }
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[var(--foreground)] flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
                        <span>Delivery Destination (Zip or City) *</span>
                      </label>
                      <Input
                        required
                        placeholder="e.g. Phoenix, AZ 85001"
                        value={formData.destination}
                        onChange={(e) =>
                          setFormData({ ...formData, destination: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  {/* Cargo type select */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[var(--foreground)] flex items-center gap-1">
                        <Truck className="w-3.5 h-3.5 text-[var(--accent)]" />
                        <span>Cargo Classification *</span>
                      </label>
                      <select
                        value={formData.cargoType}
                        onChange={(e) =>
                          setFormData({ ...formData, cargoType: e.target.value })
                        }
                        className="flex h-12 w-full rounded-xl border border-[var(--border-color)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]"
                      >
                        <option value="classic-car">Classic &amp; Vintage Automobile</option>
                        <option value="exotic-car">Exotic / Luxury Supercar</option>
                        <option value="motorcycle">Motorcycle / Race Bike / Dirt Bike</option>
                        <option value="powersports">3-Wheeler / Slingshot / ATV</option>
                        <option value="watercraft">Boat / Sea Doo / Jet Ski</option>
                        <option value="furniture">Antique Heirloom / China Hutch / Fine Art</option>
                        <option value="other">Specialty Commercial Freight</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[var(--foreground)] flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[var(--accent)]" />
                        <span>Target Ready Date *</span>
                      </label>
                      <Input
                        type="date"
                        required
                        value={formData.targetDate}
                        onChange={(e) =>
                          setFormData({ ...formData, targetDate: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  {/* Cargo Description */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[var(--foreground)]">
                      Vehicle Year, Make, Model or Cargo Dimensions *
                    </label>
                    <Input
                      required
                      placeholder="e.g. 1968 Chevrolet Camaro SS (Runs & Drives) or 8ft Dining Table"
                      value={formData.cargoDetails}
                      onChange={(e) =>
                        setFormData({ ...formData, cargoDetails: e.target.value })
                      }
                    />
                  </div>

                  {/* Contact details */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[var(--foreground)]">
                        Your Name *
                      </label>
                      <Input
                        required
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[var(--foreground)]">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        required
                        placeholder="(555) 000-0000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[var(--foreground)]">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  {/* Special Notes */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[var(--foreground)]">
                      Special Handling or Timing Requirements (Optional)
                    </label>
                    <Textarea
                      placeholder="e.g. Needs winch loading, residential cul-de-sac delivery, ground clearance note, etc."
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      rows={3}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="accent"
                    size="lg"
                    className="w-full font-bold text-base py-6 shadow-xl hover:shadow-2xl gap-2 cursor-pointer"
                  >
                    <Send className="w-5 h-5" />
                    <span>Submit Free Quote Request to Andrew</span>
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
