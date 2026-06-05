"use client";

import React, { useEffect, useRef, useState } from "react";
import { Users, Heart, Calendar, Home, Star, Smile } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 5000,
    suffix: "+",
    label: "Lives Touched",
    description: "Beneficiaries across our programs",
    color: "saffron",
  },
  {
    icon: Heart,
    value: 200,
    suffix: "+",
    label: "Events Organized",
    description: "From health camps to Diwali celebrations",
    color: "teal",
  },
  {
    icon: Home,
    value: 50,
    suffix: "+",
    label: "Orphanages Supported",
    description: "Regular supply of essentials",
    color: "gold",
  },
  {
    icon: Calendar,
    value: 6,
    suffix: "+",
    label: "Years of Service",
    description: "Consistent community-driven work",
    color: "saffron",
  },
  {
    icon: Star,
    value: 300,
    suffix: "+",
    label: "Women Honored",
    description: "On Mother's Day & special occasions",
    color: "teal",
  },
  {
    icon: Smile,
    value: 1000,
    suffix: "+",
    label: "Children Nourished",
    description: "Fighting malnutrition every day",
    color: "gold",
  },
];

function AnimatedNumber({
  target,
  suffix,
  active,
}: {
  target: number;
  suffix: string;
  active: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 2000;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const colorMap = {
    saffron: {
      bg: "bg-saffron-50",
      icon: "bg-saffron-100 text-saffron-600",
      value: "text-saffron-700",
      border: "border-saffron-200",
      glow: "hover:shadow-saffron-100",
    },
    teal: {
      bg: "bg-teal-50",
      icon: "bg-teal-100 text-teal-600",
      value: "text-teal-700",
      border: "border-teal-200",
      glow: "hover:shadow-teal-100",
    },
    gold: {
      bg: "bg-gold-50",
      icon: "bg-gold-100 text-gold-600",
      value: "text-gold-700",
      border: "border-gold-200",
      glow: "hover:shadow-gold-100",
    },
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path
            d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z"
            fill="#fff7ed"
          />
        </svg>
      </div>

      <div className="container-custom" ref={ref}>
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-saffron-100 text-saffron-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Our Impact
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-warm-950 mb-4">
            Numbers That{" "}
            <span className="text-saffron-600">Speak for Us</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Every number represents a life made a little brighter, a family
            supported, a future preserved.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {stats.map(({ icon: Icon, value, suffix, label, description, color }, i) => {
            const c = colorMap[color as keyof typeof colorMap];
            return (
              <div
                key={label}
                className={`relative rounded-2xl border ${c.border} ${c.bg} p-6 md:p-8 hover:shadow-xl ${c.glow} transition-all duration-300 hover:-translate-y-1 group`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl ${c.icon} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={22} />
                </div>

                {/* Value */}
                <p
                  className={`font-display text-3xl md:text-4xl font-bold ${c.value} mb-1`}
                >
                  <AnimatedNumber
                    target={value}
                    suffix={suffix}
                    active={active}
                  />
                </p>

                {/* Label */}
                <p className="font-semibold text-gray-800 mb-1 text-sm md:text-base">
                  {label}
                </p>
                <p className="text-gray-400 text-xs md:text-sm">{description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path
            d="M0,30 C360,0 1080,60 1440,30 L1440,60 L0,60 Z"
            fill="#f0fdfa"
          />
        </svg>
      </div>
    </section>
  );
}
