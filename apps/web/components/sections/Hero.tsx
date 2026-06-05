"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDown, Heart, Sparkles } from "lucide-react";
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
      const x = (e.clientX / window.innerWidth - 0.5) * 15;
      const y = (e.clientY / window.innerHeight - 0.5) * 15;
      floatingRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const el = document.querySelector("#about");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden bg-warm-50"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 lotus-bg opacity-60" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-saffron-100/60 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-100/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      {/* Main content — two column grid */}
      <div className="container-custom flex-1 flex items-center py-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">

          {/* LEFT — text */}
          <div>
            {/* Label */}
            <div className="inline-flex items-center gap-2 bg-saffron-100 border border-saffron-200 text-saffron-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
              <Sparkles size={13} className="text-saffron-500" />
              Empowering Lives Since 2018
            </div>

            {/* Headline */}
            <h1 className="font-display text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-warm-950 leading-[1.1] mb-4">
              Together We{" "}
              <span className="relative inline-block">
                <span className="text-saffron-600">Build</span>
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 10" fill="none">
                  <path d="M2 7 C50 2, 150 2, 198 7" stroke="#f97316" strokeWidth="3" strokeLinecap="round" fill="none" />
                </svg>
              </span>{" "}
              <br />a Better{" "}
              <span className="text-teal-600">Tomorrow</span>
            </h1>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-lg mb-6">
              Nav Chetna Sangh Charitable Trust works tirelessly for women&apos;s
              empowerment, child nutrition, education, and the dignity of every
              person — including transgender individuals often left behind.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <Button
                variant="donate"
                size="md"
                onClick={() => {
                  const el = document.querySelector("#donate");
                  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
                }}
              >
                <Heart size={16} className="fill-white" />
                Donate & Make a Difference
              </Button>
              <Button variant="outline" size="md" onClick={scrollToAbout}>
                Learn Our Story
              </Button>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap items-center gap-5">
              {stats.map(({ value, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="w-1 h-8 bg-gradient-to-b from-saffron-400 to-saffron-600 rounded-full" />
                  <div>
                    <p className="font-display text-xl font-bold text-saffron-700">{value}</p>
                    <p className="text-xs text-gray-500">{label}</p>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-2 bg-saffron-50 border border-saffron-200 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-saffron-500 animate-pulse" />
                <span className="text-saffron-700 font-bold text-xs font-display">Est. 2018</span>
              </div>
            </div>
          </div>

          {/* RIGHT — logo orb */}
          <div className="flex justify-center items-center">
            <div ref={floatingRef} className="transition-transform duration-700 ease-out">
              {/* Outer rings */}
              <div className="w-52 h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full border-2 border-saffron-200/50 flex items-center justify-center">
                <div className="w-44 h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full border-2 border-saffron-300/40 flex items-center justify-center">
                  <div className="w-36 h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-saffron-100 to-saffron-200/80 flex items-center justify-center shadow-inner relative">
                    <div className="relative w-32 h-32 md:w-36 md:h-36 lg:w-44 lg:h-44">
                      <Image
                        src="/images/logo.jpeg"
                        alt="Nav Chetna Sangh Logo"
                        fill
                        className="object-contain rounded-full"
                        sizes="(max-width: 768px) 176px, (max-width: 1024px) 208px, 240px"
                        priority
                      />
                    </div>

                    {/* Est. 2018 badge */}
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full border-2 border-saffron-400/60 flex items-center justify-center bg-white shadow-lg">
                      <div className="w-13 h-13 rounded-full flex items-center justify-center bg-gradient-to-br from-saffron-50 to-saffron-100 text-center leading-tight p-1">
                        <div>
                          <p className="text-saffron-600 font-display font-bold text-[9px]">Est.</p>
                          <p className="text-saffron-700 font-display font-bold text-xs leading-none">2018</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slim image strip */}
      <div className="relative z-10 w-full h-36 md:h-48 overflow-hidden flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-b from-warm-50 to-transparent z-10 h-16" />
        <div className="flex gap-2 px-4 h-full items-stretch">
          {[
            { src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80", alt: "Children education", label: "Child Education" },
            { src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=400&q=80", alt: "Women empowerment", label: "Women Empowerment" },
            { src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&q=80", alt: "Health camp", label: "Health Camps" },
            { src: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=400&q=80", alt: "Community work", label: "Community Support" },
            { src: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=400&q=80", alt: "Food distribution", label: "Nutrition Drive" },
          ].map(({ src, alt, label }, i) => (
            <div key={i} className="relative flex-1 rounded-xl overflow-hidden group min-w-[120px]">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-2 right-2">
                <p className="text-white text-xs font-semibold">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-saffron-500 hover:text-saffron-600 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium">Explore</span>
        <ArrowDown size={16} />
      </button>
    </section>
  );
}
