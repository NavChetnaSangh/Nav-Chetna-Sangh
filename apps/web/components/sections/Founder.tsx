"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Quote, Sparkles } from "lucide-react";

const timeline = [
  {
    year: "2018",
    event: "Trust Founded",
    desc: "Sweta Singh founded Nav Chetna Sangh Charitable Trust with a vision of dignified, inclusive community upliftment.",
  },
  {
    year: "2019",
    event: "First Health Camp",
    desc: "Organized the first women's health awareness camp, reaching 200+ women with vital health knowledge.",
  },
  {
    year: "2020",
    event: "Child Nutrition Drive",
    desc: "Launched an initiative to identify and support malnourished children in the community.",
  },
  {
    year: "2022",
    event: "Transgender Inclusion",
    desc: "Expanded the Trust's mission to actively support and include transgender individuals in social programs.",
  },
  {
    year: "2024",
    event: "5000+ Lives Touched",
    desc: "Reached a milestone of positively impacting over 5,000 individuals through various programs.",
  },
];

export default function Founder() {
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
    <section id="founder" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-saffron-50/60 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-50/60 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path d="M0,30 C480,60 960,0 1440,30 L1440,0 L0,0 Z" fill="#fff7ed" />
        </svg>
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-saffron-100 text-saffron-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Our Founder
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-warm-950">
            The Vision Behind{" "}
            <span className="text-saffron-600">Nav Chetna</span>
          </h2>
        </div>

        {/* Founder card */}
        <div
          className={`grid lg:grid-cols-5 gap-10 items-start mb-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Photo + quote col */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start gap-6">
            {/* Portrait */}
            <div className="relative">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-2xl border-4 border-saffron-100 relative">
                <Image
                  src="/images/founder-sweta-singh.jpeg"
                  alt="Sweta Singh - Founder"
                  fill
                  className="object-cover object-top"
                  sizes="288px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-saffron-900/30 to-transparent" />
              </div>

              {/* Name plate */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-xl px-5 py-2.5 text-center border border-saffron-100 whitespace-nowrap">
                <p className="font-display font-bold text-gray-900 text-base">
                  Sweta Singh
                </p>
                <p className="text-saffron-600 text-xs font-semibold">
                  Founder & President
                </p>
              </div>

              {/* Sparkle decoration */}
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-saffron-100 rounded-full flex items-center justify-center">
                <Sparkles size={18} className="text-saffron-500" />
              </div>
            </div>

            {/* Quote card */}
            <div className="mt-8 bg-gradient-to-br from-saffron-50 to-saffron-100/60 rounded-2xl p-5 border border-saffron-200 max-w-sm">
              <Quote size={24} className="text-saffron-400 mb-3" />
              <p className="font-display text-base italic text-gray-700 leading-relaxed">
                &ldquo;When women become educated, healthy, and financially
                independent, they can transform not only their own lives but
                also the future of their children and society.&rdquo;
              </p>
              <p className="text-saffron-600 text-sm font-semibold mt-3">
                — Sweta Singh
              </p>
            </div>
          </div>

          {/* Story col */}
          <div className="lg:col-span-3 space-y-5 text-gray-600 leading-relaxed">
            <p className="text-lg font-medium text-gray-800">
              Nav Chetna Sangh Charitable Trust was founded by{" "}
              <span className="text-saffron-700 font-bold">Sweta Singh</span>{" "}
              with a vision to bring positive change to the lives of women and
              underprivileged children.
            </p>

            <p>
              The inspiration came from witnessing the harsh realities faced by
              many families — women living with little awareness about their
              health and well-being, denied education, financial independence,
              and proper healthcare. They ignored their own health issues,
              struggling to build a secure future.
            </p>

            <p>
              At the same time, the condition of poor children was equally
              heartbreaking. Many suffered from malnutrition without access to
              proper education. Poverty forced them to live without basic
              nutrition, healthcare, and learning opportunities, which impacted
              their physical and mental development.
            </p>

            <p>
              Seeing these challenges up close inspired Sweta Singh to step
              forward. With the mission of empowering women and supporting needy
              children, Nav Chetna Sangh Charitable Trust began its work in
              women&apos;s health, education, economic empowerment, child
              nutrition, and holistic community development.
            </p>

            <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 mt-2">
              <p className="text-teal-800 text-sm font-medium">
                The organization believes:{" "}
                <span className="italic">
                  &ldquo;Through continuous social work and community support,
                  the trust aims to create awareness, provide opportunities,
                  and bring hope to those who need it the most.&rdquo;
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div
          className={`transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h3 className="font-display text-2xl font-bold text-center text-warm-950 mb-10">
            Our Journey
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-saffron-200 -translate-x-1/2" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Text side */}
                  <div
                    className={`md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                  >
                    <div
                      className={`inline-block bg-white border border-saffron-100 rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow`}
                    >
                      <p className="font-display font-bold text-lg text-saffron-700 mb-0.5">
                        {item.event}
                      </p>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Year bubble */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-saffron-400 to-saffron-600 flex items-center justify-center shadow-lg shadow-saffron-200">
                      <span className="text-white text-xs font-bold text-center leading-tight">
                        {item.year}
                      </span>
                    </div>
                  </div>

                  {/* Empty side */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
