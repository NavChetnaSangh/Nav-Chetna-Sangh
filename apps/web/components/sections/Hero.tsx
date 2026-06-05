"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDown, Heart, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "5000+", label: "Lives Touched" },
  { value: "200+", label: "Events Held" },
  { value: "3", label: "Focus Areas" },
];

export default function Hero() {
  const floatingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!floatingRef.current) return;
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      floatingRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const el = document.querySelector("#about");
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 72,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden bg-warm-50"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 lotus-bg opacity-60" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-saffron-100/60 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gold-100/30 rounded-full blur-2xl" />

      {/* Floating ornamental circles — logo */}
      <div
        ref={floatingRef}
        className="absolute right-[8%] top-[10%] transition-transform duration-700 ease-out hidden xl:block"
      >
        {/* Outer rings */}
        <div className="w-96 h-96 rounded-full border-2 border-saffron-200/50 flex items-center justify-center">
          <div className="w-80 h-80 rounded-full border-2 border-saffron-300/40 flex items-center justify-center">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-saffron-100 to-saffron-200/80 flex items-center justify-center shadow-inner">
              <div className="relative w-64 h-64">
                <Image
                  src="/images/logo.jpeg"
                  alt="Nav Chetna Sangh Logo"
                  fill
                  className="object-contain rounded-full"
                  sizes="256px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Est. 2018 mini spiral — bottom right of the main orb */}
        <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full border-2 border-saffron-400/60 flex items-center justify-center bg-white shadow-lg">
          <div className="w-20 h-20 rounded-full border-2 border-saffron-300/50 flex items-center justify-center bg-gradient-to-br from-saffron-50 to-saffron-100">
            <div className="text-center leading-tight">
              <p className="text-saffron-600 font-display font-bold text-xs">Est.</p>
              <p className="text-saffron-700 font-display font-bold text-base leading-none">2018</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center pt-20 pb-12 relative z-10 pl-10 sm:pl-16 lg:pl-[200px] pr-4">
        <div className="max-w-2xl">
          {/* Label */}
          <div className="inline-flex items-center gap-2 bg-saffron-100 border border-saffron-200 text-saffron-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 animate-fade-in">
            <Sparkles size={14} className="text-saffron-500" />
            Empowering Lives Since 2018
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-warm-950 leading-[1.1] mb-6 animate-fade-up">
            Together We{" "}
            <span className="relative inline-block">
              <span className="text-saffron-600">Build</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
              >
                <path
                  d="M2 9 C50 2, 150 2, 198 9"
                  stroke="#f97316"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>{" "}
            <br />a Better{" "}
            <span className="text-teal-600">Tomorrow</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mb-8 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Nav Chetna Sangh Charitable Trust works tirelessly for women&apos;s
            empowerment, child nutrition, education, and the dignity of every
            person — including transgender individuals often left behind.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            <Button
              variant="donate"
              size="lg"
              onClick={() => {
                const el = document.querySelector("#donate");
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
              }}
            >
              <Heart size={20} className="fill-white" />
              Donate & Make a Difference
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToAbout}
            >
              Learn Our Story
            </Button>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap items-center gap-6 animate-fade-up" style={{ animationDelay: "0.35s" }}>
            {stats.map(({ value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-1 h-10 bg-gradient-to-b from-saffron-400 to-saffron-600 rounded-full" />
                <div>
                  <p className="font-display text-2xl font-bold text-saffron-700">
                    {value}
                  </p>
                  <p className="text-sm text-gray-500">{label}</p>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-2 bg-saffron-50 border border-saffron-200 px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-saffron-500 animate-pulse" />
              <span className="text-saffron-700 font-bold text-sm font-display">Est. 2018</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero image strip */}
      <div className="relative z-10 w-full h-56 md:h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-warm-50 to-transparent z-10 h-24" />
        <div className="flex gap-3 px-4 h-full items-stretch">
          {[
            {
              src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80",
              alt: "Children education",
              label: "Child Education",
            },
            {
              src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=400&q=80",
              alt: "Women empowerment",
              label: "Women Empowerment",
            },
            {
              src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&q=80",
              alt: "Health camp",
              label: "Health Camps",
            },
            {
              src: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=400&q=80",
              alt: "Community work",
              label: "Community Support",
            },
            {
              src: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=400&q=80",
              alt: "Food distribution",
              label: "Nutrition Drive",
            },
          ].map(({ src, alt, label }, i) => (
            <div
              key={i}
              className="relative flex-1 rounded-2xl overflow-hidden group min-w-[160px]"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 160px, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-white text-xs font-semibold">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-saffron-500 hover:text-saffron-600 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium">Explore</span>
        <ArrowDown size={18} />
      </button>
    </section>
  );
}
