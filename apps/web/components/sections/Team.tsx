import React from "react";
import Image from "next/image";
import { client, urlFor } from "@/sanity/client";

type Member = {
  _id: string;
  name: string;
  role: string;
  tier: string;
  photo: any;
};

const badgeColor = (tier: string) => {
  if (tier === "founder") return "bg-saffron-100 text-saffron-700";
  if (tier === "leadership") return "bg-teal-100 text-teal-700";
  return "bg-gray-100 text-gray-500";
};

async function getMembers(): Promise<Member[]> {
  return client.fetch(`*[_type == "teamMember"] | order(_createdAt asc)`, {}, { cache: "no-store" });
}

function MemberCard({ member, photoSize = "w-20 h-20", compact = false }: { member: Member; photoSize?: string; compact?: boolean }) {
  const photoUrl = member.photo ? urlFor(member.photo).width(200).url() : null;

  return (
    <div className={`group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 overflow-hidden text-center ${compact ? "p-2 sm:p-3" : "p-3"}`}>
      <div className={`relative ${photoSize} mx-auto ${compact ? "mb-1.5" : "mb-2"} rounded-lg overflow-hidden border-2 border-gray-100 group-hover:border-teal-200 transition-colors`}>
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-teal-100 to-teal-200">
          <span className="text-teal-600 font-bold text-lg font-display">
            {member.name.split(" ").map((n) => n[0]).join("")}
          </span>
        </div>
        {photoUrl && (
          <Image
            src={photoUrl}
            alt={member.name}
            fill
            className="relative z-10 object-cover object-top"
            sizes="96px"
          />
        )}
      </div>
      <span className={`${compact ? "hidden sm:inline-block" : "inline-block"} text-[10px] font-semibold px-2 py-0.5 rounded-full mb-1 ${badgeColor(member.tier)}`}>
        {member.role}
      </span>
      <h4 className={`font-display font-bold text-gray-900 leading-tight ${compact ? "text-[10px] sm:text-xs" : "text-xs"}`}>{member.name}</h4>
    </div>
  );
}

export default async function Team() {
  const members = await getMembers();

  const founder = members.find((m) => m.tier === "founder");
  const leadership = members.filter((m) => m.tier === "leadership");
  const executives = members.filter((m) => m.tier === "executive");

  return (
    <section id="team" className="min-h-screen flex flex-col justify-center py-8 bg-warm-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-saffron-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-100/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="container-custom relative z-10">
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

        {/* Founder */}
        {founder && (
          <div className="flex justify-center mb-5">
            <div className="group relative bg-white rounded-2xl shadow-lg border border-saffron-100 overflow-hidden flex items-center gap-5 p-4 max-w-lg w-full hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-saffron-50 to-white opacity-60" />
              <div className="relative w-20 h-20 flex-shrink-0 z-10">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-saffron-300 to-saffron-500 blur-md opacity-40 scale-110" />
                <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-saffron-200 shadow-md">
                  {founder.photo && (
                    <Image
                      src={urlFor(founder.photo).width(160).url()}
                      alt={founder.name}
                      fill
                      className="object-cover object-top"
                      sizes="80px"
                    />
                  )}
                </div>
              </div>
              <div className="z-10">
                <span className="inline-block bg-saffron-100 text-saffron-700 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-1">
                  {founder.role}
                </span>
                <h3 className="font-display text-lg font-bold text-gray-900 leading-tight">
                  {founder.name}
                </h3>
                <p className="text-gray-400 text-xs mt-0.5">
                  Empowering women, nourishing children & building an inclusive society.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Leadership row */}
        {leadership.length > 0 && (
          <div className="grid grid-cols-3 gap-4 mb-4">
            {leadership.map((member) => (
              <MemberCard key={member._id} member={member} photoSize="w-24 h-24" />
            ))}
          </div>
        )}

        {/* Executive members */}
        {executives.length > 0 && (
          <div className="grid grid-cols-4 gap-1.5 sm:gap-4">
            {executives.map((member) => (
              <MemberCard key={member._id} member={member} photoSize="w-16 h-16 sm:w-20 sm:h-20" compact />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
