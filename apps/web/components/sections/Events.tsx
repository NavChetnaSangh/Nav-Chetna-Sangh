"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Calendar, MapPin, X, ChevronLeft, ChevronRight } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Diwali Celebrations for Underprivileged Children",
    date: "November 2024",
    location: "Multiple Locations",
    category: "Festive",
    image:
      "https://images.unsplash.com/photo-1604933762023-7213af7ff7a7?w=600&q=80",
    desc: "The Trust organized a heartwarming Diwali celebration where sweets and firecrackers were distributed among poor children, bringing light and joy into their lives.",
    color: "saffron",
  },
  {
    id: 2,
    title: "Winter Relief Drive — Blankets & Warm Clothing",
    date: "December 2023",
    location: "Community Centers",
    category: "Relief",
    image:
      "https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=600&q=80",
    desc: "During the biting winter, the Trust distributed blankets and sweaters to needy elderly people, women, and small children, ensuring warmth for the most vulnerable.",
    color: "teal",
  },
  {
    id: 3,
    title: "Mother's Day Honor Ceremony",
    date: "May 2024",
    location: "City Hall",
    category: "Recognition",
    image:
      "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&q=80",
    desc: "Mothers who built a dignified life while raising their children were honored. The event celebrated resilience, sacrifice, and the quiet strength of women.",
    color: "gold",
  },
  {
    id: 4,
    title: "Labour Day — Umbrellas & Refreshments for Workers",
    date: "May 1, 2024",
    location: "Industrial Areas",
    category: "Workers",
    image:
      "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=600&q=80",
    desc: "On Labour Day, the Trust distributed umbrellas and refreshing lassi to workers and laborers, honoring their contribution with dignity and gratitude.",
    color: "saffron",
  },
  {
    id: 5,
    title: "Health & Nutrition Awareness Camp",
    date: "March 2024",
    location: "Village Outreach",
    category: "Health",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&q=80",
    desc: "A comprehensive health camp educating women and children on disease prevention, nutrition, hygiene, and maternal health — because prevention is always better than cure.",
    color: "teal",
  },
  {
    id: 6,
    title: "Essentials Drive at Orphanages & Old Age Homes",
    date: "Quarterly",
    location: "City-wide",
    category: "Care",
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&q=80",
    desc: "Regular distribution of soap, shampoo, toothpaste, oil, biscuits, fruits, and stationery to residents of orphanages and old age homes who depend on community support.",
    color: "gold",
  },
];

const categoryColors: Record<string, string> = {
  Festive: "bg-saffron-100 text-saffron-700",
  Relief: "bg-teal-100 text-teal-700",
  Recognition: "bg-gold-100 text-gold-700",
  Workers: "bg-saffron-100 text-saffron-700",
  Health: "bg-teal-100 text-teal-700",
  Care: "bg-gold-100 text-gold-700",
};

export default function Events() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (id: number) => setLightbox(id);
  const closeLightbox = () => setLightbox(null);
  const prev = () =>
    setLightbox((prev) =>
      prev === null ? null : prev === 1 ? events.length : prev - 1
    );
  const next = () =>
    setLightbox((prev) =>
      prev === null ? null : prev === events.length ? 1 : prev + 1
    );

  const activeEvent = events.find((e) => e.id === lightbox);

  return (
    <section id="events" className="py-20 md:py-28 bg-warm-50 relative">
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill="#fff" />
        </svg>
      </div>

      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-gold-100 text-gold-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Our Activities
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-warm-950 mb-4">
            Events &{" "}
            <span className="text-gold-600">Celebrations</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Every event is a story of hope — moments where compassion meets
            action and communities come together.
          </p>
        </div>

        {/* Events bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {events.map((event, i) => (
            <div
              key={event.id}
              className={`group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer ${i === 0 ? "md:col-span-2" : ""}`}
              onClick={() => openLightbox(event.id)}
            >
              <div className={`relative ${i === 0 ? "h-64" : "h-52"} overflow-hidden`}>
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes={i === 0 ? "66vw" : "33vw"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[event.category]}`}
                  >
                    {event.category}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-saffron-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white text-saffron-600 text-xs font-bold px-3 py-1.5 rounded-full shadow">
                    View Details
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-display font-bold text-gray-900 text-base md:text-lg leading-tight mb-2">
                  {event.title}
                </h3>
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} />
                    {event.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to see more */}
        <div className="text-center mt-10">
          <p className="text-gray-400 text-sm">
            These are just a few highlights — the Trust organizes dozens more
            events throughout the year.
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && activeEvent && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-72">
              <Image
                src={activeEvent.image}
                alt={activeEvent.title}
                fill
                className="object-cover"
                sizes="672px"
              />
              <button
                onClick={closeLightbox}
                className="absolute top-3 right-3 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <X size={16} />
              </button>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/40 text-white rounded-full flex items-center justify-center hover:bg-black/60 transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/40 text-white rounded-full flex items-center justify-center hover:bg-black/60 transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
            <div className="p-6">
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[activeEvent.category]} mb-3 inline-block`}
              >
                {activeEvent.category}
              </span>
              <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                {activeEvent.title}
              </h3>
              <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {activeEvent.date}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={12} />
                  {activeEvent.location}
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {activeEvent.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
