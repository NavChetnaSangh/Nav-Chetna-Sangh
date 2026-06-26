"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  HeartPulse,
  GraduationCap,
  Baby,
  Handshake,
  Leaf,
  Users,
  ChevronRight,
} from "lucide-react";

const programs = [
  {
    id: "women",
    icon: HeartPulse,
    title: "Women Empowerment",
    tagline: "Health · Education · Independence",
    color: "saffron",
    image: "/images/welfare2.jpeg",
    shortDesc:
      "Helping women become self-reliant through skill-building, health awareness, and economic opportunities.",
    points: [
      "Health & hygiene awareness camps",
      "Self-employment skill training",
      "Recognition for inspiring mothers",
      "Legal rights workshops",
    ],
  },
  {
    id: "children",
    icon: Baby,
    title: "Child Development",
    tagline: "Nutrition · Education · Protection",
    color: "teal",
    image: "/images/children2.jpeg",
    shortDesc:
      "Identifying and supporting malnourished, homeless children — giving them nutrition, learning, and hope.",
    points: [
      "Anti-malnutrition drives",
      "Stationery & books distribution",
      "Diwali celebrations for poor kids",
      "Educational guidance programs",
    ],
  },
  {
    id: "transgender",
    icon: Handshake,
    title: "Transgender Support",
    tagline: "Dignity · Inclusion · Respect",
    color: "gold",
    image: "/images/welfare6.jpeg",
    shortDesc:
      "Bringing recognition, respect, and opportunity to a community that is too often overlooked by society.",
    points: [
      "Social inclusion initiatives",
      "Livelihood support programs",
      "Mental health awareness",
      "Community integration drives",
    ],
  },
  {
    id: "elderly",
    icon: Users,
    title: "Elderly & Orphan Care",
    tagline: "Relief · Essentials · Companionship",
    color: "saffron",
    image: "/images/welfare3.jpeg",
    shortDesc:
      "Regular distribution of essential items to old age homes and orphanages, ensuring nobody is forgotten.",
    points: [
      "Blankets & sweaters in winter",
      "Soap, shampoo & hygiene kits",
      "Fruits, biscuits & food items",
      "Festival celebrations",
    ],
  },
  {
    id: "health",
    icon: GraduationCap,
    title: "Health & Awareness",
    tagline: "Prevention · Education · Wellness",
    color: "teal",
    image: "/images/children4.jpeg",
    shortDesc:
      "Running awareness camps that teach prevention over cure — empowering communities with knowledge.",
    points: [
      "Free health check-up camps",
      "Disease prevention education",
      "Hygiene & sanitation drives",
      "Maternal health programs",
    ],
  },
  {
    id: "labour",
    icon: Leaf,
    title: "Workers & Labour Day",
    tagline: "Respect · Recognition · Relief",
    color: "gold",
    image: "/images/environmentDay.jpeg",
    shortDesc:
      "Honoring the backbone of society — distributing essentials and celebrating the dignity of labor.",
    points: [
      "Labour Day umbrella distribution",
      "Refreshments for workers",
      "Appreciation programs",
      "Health awareness for laborers",
    ],
  },
];

const colorMap = {
  saffron: {
    badge: "bg-saffron-100 text-saffron-700",
    icon: "bg-saffron-500",
    topBg: "bg-gradient-to-br from-saffron-50 to-saffron-100",
    circle1: "bg-saffron-300",
    circle2: "bg-saffron-400",
    border: "border-saffron-200",
    hover: "hover:border-saffron-400",
    dot: "bg-saffron-400",
    tag: "text-saffron-600",
  },
  teal: {
    badge: "bg-teal-100 text-teal-700",
    icon: "bg-teal-500",
    topBg: "bg-gradient-to-br from-teal-50 to-teal-100",
    circle1: "bg-teal-300",
    circle2: "bg-teal-400",
    border: "border-teal-200",
    hover: "hover:border-teal-400",
    dot: "bg-teal-400",
    tag: "text-teal-600",
  },
  gold: {
    badge: "bg-gold-100 text-gold-700",
    icon: "bg-gold-500",
    topBg: "bg-gradient-to-br from-gold-50 to-gold-100",
    circle1: "bg-gold-300",
    circle2: "bg-gold-400",
    border: "border-gold-200",
    hover: "hover:border-gold-400",
    dot: "bg-gold-400",
    tag: "text-gold-600",
  },
};

export default function Programs() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="programs" className="py-20 md:py-28 bg-white relative">
      {/* Top wave from teal */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path
            d="M0,30 C480,0 960,60 1440,30 L1440,0 L0,0 Z"
            fill="#f0fdfa"
          />
        </svg>
      </div>

      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-saffron-100 text-saffron-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Our Programs
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-warm-950 mb-4">
            What We{" "}
            <span className="text-saffron-600">Work For</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Six pillars of action — each rooted in the belief that every person
            deserves dignity, health, and a chance to thrive.
          </p>
        </div>

        {/* Programs grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((prog) => {
            const c = colorMap[prog.color as keyof typeof colorMap];
            const Icon = prog.icon;
            const isActive = active === prog.id;

            return (
              <div
                key={prog.id}
                className={`group rounded-2xl border-2 ${c.border} ${c.hover} bg-white overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                onClick={() => setActive(isActive ? null : prog.id)}
              >
                {/* Image top */}
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={prog.image}
                    alt={prog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/35" />
                  <div className="absolute inset-0 flex flex-col items-end justify-end p-3">
                    <span className="text-xs font-semibold px-3 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/30">
                      {prog.tagline}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-display text-xl font-bold text-gray-900">
                      {prog.title}
                    </h3>
                    <ChevronRight
                      size={18}
                      className={`${c.tag} transition-transform duration-300 ${isActive ? "rotate-90" : ""} flex-shrink-0 mt-0.5`}
                    />
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {prog.shortDesc}
                  </p>

                  {/* Expandable points */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <ul className="space-y-1.5 pt-1 border-t border-gray-100">
                      {prog.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-2 text-xs text-gray-600"
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${c.dot} flex-shrink-0`}
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Read more toggle */}
                  <button
                    className={`text-xs font-semibold ${c.tag} flex items-center gap-1 mt-3 hover:underline`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActive(isActive ? null : prog.id);
                    }}
                  >
                    {isActive ? "Show less" : "Learn more"}
                    <ChevronRight size={12} className={isActive ? "rotate-90" : ""} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
