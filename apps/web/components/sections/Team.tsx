"use client";

import React from "react";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";

const members = [
  {
    name: "Sweta Singh",
    role: "Founder & President",
    image: "/images/founder-sweta-singh.jpeg",
    highlight: true,
  },
  {
    name: "Ditiya Ghosh",
    role: "Secretary",
    image: "/images/secretary-ditiya-ghosh.jpeg",
  },
  {
    name: "Sandeep Gupta",
    role: "Treasurer",
    image: "/images/treasurer-sandeep-gupta.jpeg",
  },
  {
    name: "Ananya Amb",
    role: "Executive Member",
    image: "/images/executive-ananya-amb.jpeg",
  },
  {
    name: "Chanda Singh",
    role: "Executive Member",
    image: "/images/executive-chanda-singh.jpeg",
  },
  {
    name: "Piyush Kumar Pandey",
    role: "Executive Member",
    image: "/images/executive-piyush-kumar-pandey.jpeg",
  },
  {
    name: "Puja Devi",
    role: "Executive Member",
    image: "/images/executive-puja-devi.jpeg",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20 md:py-28 bg-warm-50 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-saffron-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-100/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-teal-100 text-teal-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Our Team
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-warm-950 mb-4">
            The People Behind{" "}
            <span className="text-teal-600">Nav Chetna</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            A dedicated team united by one mission — to serve, uplift, and
            create lasting change in our community.
          </p>
        </div>

        {/* Founder — full-width featured card */}
        <div className="flex justify-center mb-10">
          <div className="group relative bg-white rounded-3xl shadow-xl border border-saffron-100 overflow-hidden flex flex-col sm:flex-row items-center gap-6 p-6 sm:p-8 max-w-2xl w-full hover:shadow-2xl transition-all duration-300">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-saffron-50 to-white opacity-60" />

            {/* Photo */}
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 z-10">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-saffron-300 to-saffron-500 blur-md opacity-40 scale-110" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-saffron-200 shadow-lg">
                <Image
                  src={members[0].image}
                  alt={members[0].name}
                  fill
                  className="object-cover object-top"
                  sizes="160px"
                />
              </div>
            </div>

            {/* Info */}
            <div className="z-10 text-center sm:text-left">
              <span className="inline-block bg-saffron-100 text-saffron-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2">
                Founder & President
              </span>
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-1">
                {members[0].name}
              </h3>
              <p className="text-gray-500 text-sm max-w-sm">
                Founded Nav Chetna Sangh Charitable Trust with a vision to
                empower women, nourish children, and build an inclusive society.
              </p>
            </div>
          </div>
        </div>

        {/* Rest of the team — 2-col then 4-col grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {members.slice(1).map((member, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden text-center p-6"
            >
              {/* Photo */}
              <div className="relative w-36 h-36 mx-auto mb-4 rounded-xl overflow-hidden border-2 border-gray-100 group-hover:border-teal-200 transition-colors">
                {/* Fallback initials — behind the image */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
                  <span className="text-teal-600 font-bold text-3xl font-display">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top relative z-10"
                  sizes="144px"
                />
              </div>

              {/* Role badge */}
              <span
                className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-2 ${
                  member.role === "Secretary"
                    ? "bg-gold-100 text-gold-700"
                    : member.role === "Treasurer"
                    ? "bg-teal-100 text-teal-700"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {member.role}
              </span>

              <h4 className="font-display font-bold text-gray-900 text-base leading-tight">
                {member.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
