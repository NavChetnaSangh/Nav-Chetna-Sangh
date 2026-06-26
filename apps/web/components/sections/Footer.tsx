"use client";

import React from "react";
import Image from "next/image";
import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Youtube, ArrowUp } from "lucide-react";

const programs = [
  "Women Empowerment",
  "Child Nutrition & Education",
  "Transgender Support",
  "Elderly & Orphan Care",
  "Health Awareness Camps",
  "Community Relief Drives",
];

const socials = [
  { icon: Facebook, href: "https://www.facebook.com/share/18zfcCar39/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/nav_chetna_sangh_trust?igsh=em9ycWliazg3enh1", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/@navchetnasanghcharitabletrust?si=okfc_YzyUQ3THN9R", label: "YouTube" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 72,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer id="contact" className="bg-warm-950 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-saffron-900/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-teal-900/20 rounded-full blur-3xl" />

      <div className="container-custom relative z-10 pt-16 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand col */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-11 h-11 flex-shrink-0">
                <Image
                  src="/images/logo.jpeg"
                  alt="Nav Chetna Sangh Charitable Trust"
                  fill
                  className="object-contain rounded-full"
                  sizes="44px"
                />
              </div>
              <div>
                <p className="font-display font-bold text-white text-sm leading-tight">
                  Nav Chetna Sangh
                </p>
                <p className="text-white/50 text-xs">Charitable Trust</p>
              </div>
            </div>

            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Empowering communities through women&apos;s welfare, child
              nutrition, healthcare, and inclusive social development since 2025.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-saffron-500 flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display font-bold text-white text-base mb-4 pb-2 border-b border-white/10">
              Our Programs
            </h4>
            <ul className="space-y-2">
              {programs.map((p) => (
                <li key={p} className="text-white/60 text-sm flex items-start gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-teal-400 flex-shrink-0 mt-1.5" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white text-base mb-4 pb-2 border-b border-white/10">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+919693813190"
                  className="flex items-start gap-3 text-white/60 hover:text-saffron-400 transition-colors text-sm"
                >
                  <Phone size={15} className="flex-shrink-0 mt-0.5" />
                  +91 96938 13190
                </a>
              </li>
              <li>
                <a
                  href="mailto:navchetnasanghcharitabletrust@gmail.com"
                  className="flex items-start gap-3 text-white/60 hover:text-saffron-400 transition-colors text-sm break-all"
                >
                  <Mail size={15} className="flex-shrink-0 mt-0.5" />
                  navchetnasanghcharitabletrust@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin size={15} className="flex-shrink-0 mt-0.5 text-saffron-400" />
                <span>Leela Kutir, Shukla Colony,<br />Near Anand Lok, Hinoo,<br />Ranchi, Jharkhand</span>
              </li>
            </ul>

          </div>

          {/* CTA col */}
          <div>
            <div className="bg-saffron-600/20 border border-saffron-500/30 rounded-xl p-4">
              <p className="text-white/80 text-sm mb-3 font-medium">
                Want to volunteer or partner with us?
              </p>
              <a
                href="mailto:navchetnasanghcharitabletrust@gmail.com"
                className="inline-flex items-center gap-1.5 bg-saffron-500 hover:bg-saffron-600 text-white text-xs font-bold px-4 py-2 rounded-full transition-colors"
              >
                <Heart size={11} className="fill-white" />
                Reach Out
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Nav Chetna Sangh Charitable Trust. All rights reserved.
          </p>
          <p className="text-white/40 text-xs flex items-center gap-1">
            Made with <Heart size={11} className="text-saffron-500 fill-saffron-500" /> for a better society
          </p>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 z-40 w-11 h-11 bg-saffron-500 hover:bg-saffron-600 text-white rounded-full shadow-lg shadow-saffron-900/30 flex items-center justify-center transition-all hover:-translate-y-1"
        aria-label="Scroll to top"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
}
