"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, X, Camera, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteContent, GalleryItem } from "@/data/content";

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filters = [
    { id: "all", label: "All Showcase" },
    { id: "trucks", label: "Fleet & Setup" },
    { id: "vehicles", label: "Vehicles & Classics" },
    { id: "equipment", label: "Bikes & Equipment" },
    { id: "operations", label: "Highway & Operations" },
  ];

  const filteredItems =
    activeFilter === "all"
      ? siteContent.gallery
      : siteContent.gallery.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[var(--surface)] text-[var(--foreground)] border-b border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <Badge variant="glow" className="uppercase tracking-wider">
            Fleet &amp; Transport Gallery
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
            Real Cargo. Real Highways. Real Results.
          </h2>
          <p className="text-base sm:text-lg text-[var(--muted-foreground)]">
            Explore our dedicated hauler, clean interior setups, and high-value shipments safely delivered across the country.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeFilter === filter.id
                  ? "bg-[var(--primary)] text-white shadow-md"
                  : "bg-[var(--surface-muted)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--surface-subtle)]"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl overflow-hidden aspect-4/3 bg-slate-900 border border-[var(--border-color)] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Hover overlay details */}
              <div className="absolute inset-0 p-4 flex flex-col justify-between text-white">
                <div className="self-end p-2 rounded-lg bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-white" />
                </div>
                <div>
                  <Badge variant="accent" className="text-[10px] uppercase font-bold mb-1">
                    {item.category}
                  </Badge>
                  <h4 className="text-sm font-bold text-white group-hover:text-[var(--accent)] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative aspect-16/10 w-full bg-black">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-6 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <Badge variant="accent" className="text-xs uppercase mb-1">
                    {selectedImage.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-white">
                    {selectedImage.title}
                  </h3>
                  <p className="text-sm text-slate-300 mt-1">
                    {selectedImage.description}
                  </p>
                </div>

                <a href="#quote" onClick={() => setSelectedImage(null)}>
                  <Button variant="accent" size="default" className="font-bold">
                    Request Transport Like This
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
