"use client";

import React from "react";
import Image from "next/image";

const members = [
  {
    name: "Sweta Singh",
    role: "Founder & President",
    image: "/images/founder-sweta-singh.jpeg",
  },
  {
    name: "Anita Pal",
    role: "Vice President",
    image: "/images/VP.jpeg",
    imgClass: "object-contain object-center",
    bgClass: "bg-gray-100",
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

type Member = { name: string; role: string; image: string; imgClass?: string; bgClass?: string };

const badgeColor = (role: string) => {
  if (role === "Founder & President") return "bg-saffron-100 text-saffron-700";
  if (role === "Vice President")      return "bg-saffron-100 text-saffron-700";
  if (role === "Secretary")           return "bg-gold-100 text-gold-700";
  if (role === "Treasurer")           return "bg-teal-100 text-teal-700";
  return "bg-gray-100 text-gray-500";
};

function MemberCard({ member, photoSize = "w-20 h-20", compact = false }: { member: Member; photoSize?: string; compact?: boolean }) {
  return (
    <div className={`group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 overflow-hidden text-center ${compact ? "p-2 sm:p-3" : "p-3"}`}>
      <div className={`relative ${photoSize} mx-auto ${compact ? "mb-1.5" : "mb-2"} rounded-lg overflow-hidden border-2 border-gray-100 group-hover:border-teal-200 transition-colors`}>
        <div className={`absolute inset-0 flex items-center justify-center ${member.bgClass ?? "bg-gradient-to-br from-teal-100 to-teal-200"}`}>
          <span className="text-teal-600 font-bold text-lg font-display">
            {member.name.split(" ").map((n) => n[0]).join("")}
          </span>
        </div>
        <Image
          src={member.image}
          alt={member.name}
          fill
          className={`relative z-10 ${member.imgClass ?? "object-cover object-top"}`}
          sizes="96px"
        />
      </div>
      <span className={`${compact ? "hidden sm:inline-block" : "inline-block"} text-[10px] font-semibold px-2 py-0.5 rounded-full mb-1 ${badgeColor(member.role)}`}>
        {member.role}
      </span>
      <h4 className={`font-display font-bold text-gray-900 leading-tight ${compact ? "text-[10px] sm:text-xs" : "text-xs"}`}>{member.name}</h4>
    </div>
  );
}

export default function Team() {
  return (
    <section id="team" className="min-h-screen flex flex-col justify-center py-8 bg-warm-50 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-saffron-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-100/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-6">
          <span className="inline-block bg-teal-100 text-teal-700 text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full mb-2">
            Our Team
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-warm-950 mb-1">
            The People Behind{" "}
            <span className="text-teal-600">Nav Chetna</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            A dedicated team united by one mission — to serve, uplift, and create lasting change.
          </p>
        </div>

        {/* Founder — compact horizontal card */}
        <div className="flex justify-center mb-5">
          <div className="group relative bg-white rounded-2xl shadow-lg border border-saffron-100 overflow-hidden flex items-center gap-5 p-4 max-w-lg w-full hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-saffron-50 to-white opacity-60" />
            <div className="relative w-20 h-20 flex-shrink-0 z-10">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-saffron-300 to-saffron-500 blur-md opacity-40 scale-110" />
              <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-saffron-200 shadow-md">
                <Image
                  src={members[0].image}
                  alt={members[0].name}
                  fill
                  className="object-cover object-top"
                  sizes="80px"
                />
              </div>
            </div>
            <div className="z-10">
              <span className="inline-block bg-saffron-100 text-saffron-700 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-1">
                Founder & President
              </span>
              <h3 className="font-display text-lg font-bold text-gray-900 leading-tight">
                {members[0].name}
              </h3>
              <p className="text-gray-400 text-xs mt-0.5">
                Empowering women, nourishing children & building an inclusive society.
              </p>
            </div>
          </div>
        </div>

        {/* Row 1 — VP, Secretary, Treasurer */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          {members.slice(1, 4).map((member, i) => (
            <MemberCard key={i} member={member} photoSize="w-24 h-24" />
          ))}
        </div>

        {/* Row 2 — Executive Members */}
        <div className="grid grid-cols-4 gap-1.5 sm:gap-4">
          {members.slice(4).map((member, i) => (
            <MemberCard key={i} member={member} photoSize="w-16 h-16 sm:w-20 sm:h-20" compact />
          ))}
        </div>
      </div>
    </section>
  );
}
