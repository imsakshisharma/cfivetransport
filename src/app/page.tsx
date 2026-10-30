"use client";

import React, { useState } from "react";
import { ThemeControlBar } from "@/components/ThemeControlBar";

// Version A Layout Components (Corporate Premier Logistics - Navy & Gold)
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { HowItWorks } from "@/components/HowItWorks";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { QuoteForm } from "@/components/QuoteForm";
import { Footer } from "@/components/Footer";

// Version B Layout Components (Clean Modern Light Logistics - Crisp White & Orange)
import { HeaderVersionB } from "@/components/version-b/HeaderVersionB";
import { HeroVersionB } from "@/components/version-b/HeroVersionB";
import { AboutVersionB } from "@/components/version-b/AboutVersionB";
import { ServicesVersionB } from "@/components/version-b/ServicesVersionB";
import { WhyChooseUsVersionB } from "@/components/version-b/WhyChooseUsVersionB";
import { HowItWorksVersionB } from "@/components/version-b/HowItWorksVersionB";
import { GalleryVersionB } from "@/components/version-b/GalleryVersionB";
import { TestimonialsVersionB } from "@/components/version-b/TestimonialsVersionB";
import { QuoteFormVersionB } from "@/components/version-b/QuoteFormVersionB";
import { FooterVersionB } from "@/components/version-b/FooterVersionB";

export default function Home() {
  const [theme, setTheme] = useState<"version-a" | "version-b">("version-a");

  return (
    <div data-theme={theme} className="min-h-screen flex flex-col bg-[var(--background)] transition-colors duration-200 w-full max-w-full overflow-x-hidden">
      {/* Top Sticky Wrapper for Control Bar + Header (Zero Gap) */}
      <div className="sticky top-0 z-40 w-full bg-slate-950">
        <ThemeControlBar theme={theme} setTheme={setTheme} />
        {theme === "version-a" ? <Header /> : <HeaderVersionB />}
      </div>

      {/* Main Full-Width Responsive Container */}
      <main className="w-full max-w-full flex-grow overflow-x-hidden">
        {theme === "version-a" ? (
          <div className="flex flex-col min-h-screen animate-in fade-in duration-300">
            <Hero />
            <About />
            <Services />
            <WhyChooseUs />
            <HowItWorks />
            <Gallery />
            <Testimonials />
            <QuoteForm />
            <Footer />
          </div>
        ) : (
          <div className="flex flex-col min-h-screen animate-in fade-in duration-300">
            <HeroVersionB />
            <AboutVersionB />
            <ServicesVersionB />
            <WhyChooseUsVersionB />
            <HowItWorksVersionB />
            <GalleryVersionB />
            <TestimonialsVersionB />
            <QuoteFormVersionB />
            <FooterVersionB />
          </div>
        )}
      </main>
    </div>
  );
}
