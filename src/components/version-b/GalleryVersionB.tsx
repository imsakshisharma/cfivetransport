"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, X, Camera } from "lucide-react";
import { siteContent, GalleryItem } from "@/data/content";

export const GalleryVersionB: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const heroItem = siteContent.gallery[0];
  const sideItems = [siteContent.gallery[1], siteContent.gallery[2]];
  const bottomItems = [
    siteContent.gallery[3],
    siteContent.gallery[4],
    siteContent.gallery[5],
  ];

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
              Fleet &amp; Equipment
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950">
              On The Road With C Five
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md">
            Real photos of our commercial hauler, weather-tight trailer, and customer vehicles delivered in showroom condition.
          </p>
        </div>

        {/* Asymmetrical Editorial Photo Grid (Unique to Version B) */}
        <div className="space-y-6">
          {/* Top Row: 1 Large Featured Photo + 2 Stacked Side Photos */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Featured 8-Col Hauler Image */}
            <div
              onClick={() => setSelectedImage(heroItem)}
              className="lg:col-span-8 relative rounded-3xl overflow-hidden aspect-16/10 bg-slate-200 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <Image
                src={heroItem.image}
                alt={heroItem.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                <div>
                  <span className="px-3 py-1 rounded-md bg-orange-600 text-white font-mono text-[11px] font-bold uppercase">
                    Featured Rig
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold mt-2">
                    {heroItem.title}
                  </h3>
                  <p className="text-xs text-slate-300 max-w-md mt-0.5">
                    {heroItem.description}
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-white/20 backdrop-blur-md text-white">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Stacked 4-Col Side Images */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {sideItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedImage(item)}
                  className="relative flex-1 rounded-3xl overflow-hidden aspect-16/10 sm:aspect-auto min-h-[180px] bg-slate-200 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <div>
                      <h4 className="text-sm font-bold">{item.title}</h4>
                      <p className="text-[11px] text-slate-300 line-clamp-1">{item.description}</p>
                    </div>
                    <Maximize2 className="w-4 h-4 opacity-75 group-hover:opacity-100" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row: 3 Equal Photo Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {bottomItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="relative rounded-3xl overflow-hidden aspect-4/3 bg-slate-200 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div>
                    <h4 className="text-sm font-bold">{item.title}</h4>
                    <p className="text-[11px] text-slate-300 line-clamp-1">{item.description}</p>
                  </div>
                  <Maximize2 className="w-4 h-4 opacity-75 group-hover:opacity-100" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 cursor-pointer"
                aria-label="Close"
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

              <div className="p-6 bg-slate-900 border-t border-slate-800 flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {selectedImage.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {selectedImage.description}
                  </p>
                </div>
                <a href="#quote" onClick={() => setSelectedImage(null)}>
                  <button className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase cursor-pointer">
                    Book Like This
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
