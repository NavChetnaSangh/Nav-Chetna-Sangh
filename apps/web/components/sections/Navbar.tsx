"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Heart, Phone, Mail } from "lucide-react";
import { cn } from "@/components/ui/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Work", href: "#programs" },
  { label: "Events", href: "#events" },
  { label: "Founder", href: "#founder" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const offset = 72;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-saffron-950 text-saffron-100 text-sm py-2">
        <div className="container-custom flex justify-between items-center">
          <p className="font-medium">Spreading hope, one life at a time ❤</p>
          <div className="flex items-center gap-6">
            <a
              href="tel:+919693813190"
              className="flex items-center gap-1.5 hover:text-saffron-300 transition-colors"
            >
              <Phone size={13} />
              +91 96938 13190
            </a>
            <a
              href="mailto:navchetnasanghcharitabletrust@gmail.com"
              className="flex items-center gap-1.5 hover:text-saffron-300 transition-colors"
            >
              <Mail size={13} />
              navchetnasanghcharitabletrust@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg shadow-saffron-100/30"
            : "bg-white"
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => scrollTo("#home")}
              className="flex items-center gap-3 group"
            >
              <div className="relative w-10 h-10 md:w-12 md:h-12 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/images/logo.jpeg"
                  alt="Nav Chetna Sangh Charitable Trust"
                  fill
                  className="object-contain rounded-full"
                  sizes="48px"
                />
              </div>
              <div className="text-left leading-tight">
                <p className="font-display font-bold text-saffron-700 text-sm md:text-base leading-none">
                  Nav Chetna Sangh
                </p>
                <p className="text-warm-950 text-xs md:text-sm opacity-70">
                  Charitable Trust
                </p>
              </div>
            </button>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => scrollTo(href)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200",
                    activeSection === href.slice(1)
                      ? "text-saffron-600 bg-saffron-50"
                      : "text-gray-600 hover:text-saffron-600 hover:bg-saffron-50/60"
                  )}
                >
                  {label}
                  {activeSection === href.slice(1) && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-saffron-500" />
                  )}
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant="donate"
                size="sm"
                onClick={() => scrollTo("#donate")}
                className="gap-2"
              >
                <Heart size={15} className="fill-white" />
                Donate Now
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-saffron-50 hover:text-saffron-600 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 border-t border-saffron-100",
            mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="container-custom py-4 flex flex-col gap-1">
            {navLinks.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className={cn(
                  "text-left px-4 py-3 rounded-xl text-sm font-medium transition-all",
                  activeSection === href.slice(1)
                    ? "bg-saffron-50 text-saffron-600"
                    : "text-gray-600 hover:bg-gray-50"
                )}
              >
                {label}
              </button>
            ))}
            <div className="pt-3 border-t border-saffron-100 mt-2">
              <Button
                variant="donate"
                size="md"
                onClick={() => scrollTo("#donate")}
                className="w-full"
              >
                <Heart size={16} className="fill-white" />
                Donate Now
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
