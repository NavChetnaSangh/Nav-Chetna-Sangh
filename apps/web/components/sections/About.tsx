"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CheckCircle2, Target, Eye } from "lucide-react";

const pillars = [
  "Women's health, education & economic empowerment",
  "Child nutrition, learning & holistic development",
  "Support for transgender community dignity",
  "Relief for elderly, orphans & the underprivileged",
  "Awareness camps & preventive healthcare",
  "Festive giving — Diwali, Labour Day & more",
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 md:py-28 bg-teal-50/50 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-saffron-100/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-100/40 rounded-full blur-3xl" />

      <div className="container-custom" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — images collage */}
          <div
            className={`relative transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div className="relative grid grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0">
              {/* Main large image */}
              <div className="col-span-2 relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=700&q=80"
                  alt="Nav Chetna community work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent" />
                {/* Floating badge */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                  <p className="text-teal-700 font-bold text-sm">Since 2018</p>
                  <p className="text-gray-500 text-xs">Serving Communities</p>
                </div>
              </div>

              {/* Two smaller images */}
              <div className="relative h-40 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80"
                  alt="Children"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
              <div className="relative h-40 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&q=80"
                  alt="Health camp"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
            </div>

            {/* Ornamental ring */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full border-4 border-saffron-200/60 -z-10" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-gold-100/60 -z-10" />
          </div>

          {/* Right — text */}
          <div
            className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <span className="inline-block bg-teal-100 text-teal-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              About the Trust
            </span>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-warm-950 leading-tight mb-6">
              Working for{" "}
              <span className="text-teal-600">Social Welfare</span>{" "}
              & Human Dignity
            </h2>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              <strong className="text-gray-800">Nav Chetna Sangh Charitable Trust</strong>{" "}
              is a grassroots organization dedicated to the holistic development
              of those most often overlooked — women, children, the elderly, and
              the transgender community.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              From distributing blankets in winter to conducting health
              awareness camps, from celebrating mothers who built themselves
              through hardship to nourishing malnourished children on the
              streets — the Trust is present in every corner of the community.
            </p>

            {/* Pillars list */}
            <ul className="grid grid-cols-1 gap-2.5 mb-8">
              {pillars.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <CheckCircle2
                    size={17}
                    className="text-teal-500 flex-shrink-0 mt-0.5"
                  />
                  {p}
                </li>
              ))}
            </ul>

            {/* Mission + Vision cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-saffron-50 border border-saffron-100 rounded-xl p-4">
                <Target size={18} className="text-saffron-600 mb-2" />
                <p className="font-semibold text-gray-800 text-sm mb-1">
                  Our Mission
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  To empower, uplift, and restore dignity to every person
                  regardless of gender, age, or background.
                </p>
              </div>
              <div className="bg-teal-50 border border-teal-100 rounded-xl p-4">
                <Eye size={18} className="text-teal-600 mb-2" />
                <p className="font-semibold text-gray-800 text-sm mb-1">
                  Our Vision
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  A society where every individual has equal access to health,
                  education, and opportunity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
