"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import { client, urlFor } from "@/sanity/client";

type Celebration = {
  _id: string;
  title: string;
  description: string;
  photo: any;
};

export default function Celebrations() {
  const [celebrations, setCelebrations] = useState<Celebration[]>([]);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "celebration"] | order(_createdAt asc)`)
      .then(setCelebrations);
  }, []);

  const prev = () =>
    setLightbox((i) => (i === null ? null : i === 0 ? celebrations.length - 1 : i - 1));
  const next = () =>
    setLightbox((i) => (i === null ? null : i === celebrations.length - 1 ? 0 : i + 1));

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
    if (e.key === "Escape") setLightbox(null);
  };

  return (
    <section id="celebrations" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill="#fff7ed" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-saffron-100 text-saffron-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <ImageIcon size={13} />
            Gallery
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-warm-950 mb-4">
            Moments of <span className="text-saffron-600">Celebration</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            A glimpse into our events, festivities, and the joy we share with our community.
          </p>
        </div>

        {celebrations.length === 0 ? (
          <p className="text-center text-gray-400 text-sm">No celebrations added yet.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {celebrations.map((item, i) => (
              <div
                key={item._id}
                onClick={() => setLightbox(i)}
                className={`relative overflow-hidden rounded-2xl cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  i === 0 ? "col-span-2 row-span-2 h-56 md:h-[360px]" : "h-44 md:h-48"
                }`}
              >
                {item.photo && (
                  <Image
                    src={urlFor(item.photo).width(800).url()}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes={i === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                  />
                )}
                <div className="absolute inset-0 bg-saffron-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-1.5 text-saffron-700 text-xs font-bold shadow">
                    View Photo
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox !== null && celebrations[lightbox] && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          onKeyDown={handleKey}
          tabIndex={0}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
          >
            <X size={20} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronLeft size={22} />
          </button>

          <div
            className="relative w-full max-w-4xl max-h-[85vh] aspect-video rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {celebrations[lightbox].photo && (
              <Image
                src={urlFor(celebrations[lightbox].photo).width(1200).url()}
                alt={celebrations[lightbox].title}
                fill
                className="object-contain"
                sizes="90vw"
              />
            )}
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronRight size={22} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
            <p className="text-white font-medium text-sm">{celebrations[lightbox].title}</p>
            <p className="text-white/60 text-xs mt-0.5">{lightbox + 1} / {celebrations.length}</p>
          </div>
        </div>
      )}
    </section>
  );
}
