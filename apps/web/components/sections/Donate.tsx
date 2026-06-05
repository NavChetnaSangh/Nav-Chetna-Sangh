"use client";

import React, { useState } from "react";
import { Heart, Gift, Users, Baby, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const amounts = [100, 500, 1000, 2500, 5000];

const impactMap: Record<number, { icon: React.ElementType; desc: string }> = {
  100: { icon: Gift, desc: "Provides hygiene essentials to one child" },
  500: { icon: Baby, desc: "Nourishes a child with proper food for a month" },
  1000: { icon: Users, desc: "Funds health awareness for a family" },
  2500: { icon: Heart, desc: "Supports a woman's skill-training session" },
  5000: { icon: Heart, desc: "Runs a community health camp for 30+ people" },
};

const reasons = [
  "100% of donations go directly to beneficiaries",
  "Registered Charitable Trust with full accountability",
  "Regular impact reports shared with donors",
  "Tax exemption under Section 80G (India)",
];

export default function Donate() {
  const [selected, setSelected] = useState<number>(500);
  const [custom, setCustom] = useState("");
  const activeAmount = custom ? parseInt(custom) || 0 : selected;
  const impact = impactMap[selected as keyof typeof impactMap];

  return (
    <section id="donate" className="py-20 md:py-28 relative overflow-hidden">
      {/* Vibrant gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-saffron-600 via-saffron-700 to-orange-800" />
      <div className="absolute inset-0 lotus-bg opacity-20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-2xl" />

      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,0 L0,0 Z" fill="#fff" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — messaging */}
          <div className="text-white">
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              <Heart size={12} className="fill-white" />
              Make a Difference
            </span>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your Kindness
              <br />
              Changes
              <br />
              <span className="text-gold-300">Lives</span>
            </h2>

            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-lg">
              Every rupee you donate directly supports a woman learning to be
              self-reliant, a child getting proper nutrition, or an elderly
              person staying warm this winter.
            </p>

            {/* Why donate */}
            <ul className="space-y-3">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-center gap-3 text-sm text-white/90">
                  <CheckCircle2 size={16} className="text-gold-300 flex-shrink-0" />
                  {reason}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — donation card */}
          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8">
            <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">
              Choose Your Contribution
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Select an amount or enter a custom value
            </p>

            {/* Amount selector */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {amounts.map((amt) => (
                <button
                  key={amt}
                  onClick={() => {
                    setSelected(amt);
                    setCustom("");
                  }}
                  className={`py-3 rounded-xl text-sm font-bold border-2 transition-all duration-200 ${
                    selected === amt && !custom
                      ? "bg-saffron-500 border-saffron-500 text-white shadow-lg shadow-saffron-200"
                      : "border-gray-200 text-gray-600 hover:border-saffron-300 hover:text-saffron-600"
                  }`}
                >
                  ₹{amt.toLocaleString()}
                </button>
              ))}
              <button
                onClick={() => {
                  setSelected(0);
                  setCustom("");
                }}
                className={`py-3 rounded-xl text-sm font-bold border-2 transition-all col-span-1 ${
                  custom
                    ? "bg-saffron-500 border-saffron-500 text-white"
                    : "border-gray-200 text-gray-600 hover:border-saffron-300"
                }`}
              >
                Custom
              </button>
            </div>

            {/* Custom input */}
            <div className="relative mb-5">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">
                ₹
              </span>
              <input
                type="number"
                placeholder="Enter custom amount"
                value={custom}
                onChange={(e) => {
                  setCustom(e.target.value);
                  setSelected(0);
                }}
                className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-saffron-400 transition-colors"
              />
            </div>

            {/* Impact preview */}
            {impact && !custom && (
              <div className="bg-saffron-50 border border-saffron-100 rounded-xl p-3 mb-5 flex items-center gap-3">
                <div className="w-9 h-9 bg-saffron-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <impact.icon size={18} className="text-saffron-600" />
                </div>
                <p className="text-saffron-700 text-sm font-medium">
                  ₹{selected.toLocaleString()} — {impact.desc}
                </p>
              </div>
            )}

            {/* Donate button */}
            <Button
              variant="donate"
              size="lg"
              className="w-full text-base mb-4"
              onClick={() => {
                alert(
                  `Thank you for your generous donation of ₹${activeAmount.toLocaleString()}! Payment gateway integration coming soon.`
                );
              }}
            >
              <Heart size={18} className="fill-white" />
              Donate ₹
              {activeAmount > 0
                ? activeAmount.toLocaleString()
                : "—"}{" "}
              Now
            </Button>

            <p className="text-center text-xs text-gray-400">
              Secured donation · 80G Tax exemption · No account needed
            </p>

            {/* Divider */}
            <div className="border-t border-gray-100 my-5" />

            {/* Bank transfer info */}
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-xs font-bold text-gray-600 mb-2 uppercase tracking-wide">
                Direct Bank Transfer
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-gray-500">
                <span className="font-medium text-gray-700">Account Name</span>
                <span>Nav Chetna Sangh Trust</span>
                <span className="font-medium text-gray-700">Account No.</span>
                <span>XXXX XXXX XXXX</span>
                <span className="font-medium text-gray-700">IFSC Code</span>
                <span>XXXXXXXXXX</span>
                <span className="font-medium text-gray-700">Bank</span>
                <span>State Bank of India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full">
          <path d="M0,40 C360,0 1080,80 1440,40 L1440,80 L0,80 Z" fill="#1c0a00" />
        </svg>
      </div>
    </section>
  );
}
