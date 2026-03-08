import { Check, Plus } from "lucide-react";
import AnimateIn from "./AnimateIn";

const included = [
  "Custom design built around your brand",
  "Mobile-friendly on every device",
  "Contact form so customers can reach you",
  "Google Maps integration",
  "Social media links",
  "Live within 48–72 hours",
  "Ongoing hosting, security & support",
];

const addOns = [
  "Photo galleries",
  "Full menu or services pages",
  "Online booking or ordering",
  "SEO setup for Google",
  "Monthly updates & changes",
  "Custom domain name",
];

const WhatIBuildSection = () => {
  return (
    <section id="services" className="py-[72px] md:py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <AnimateIn>
          <p className="font-body text-[11px] font-semibold tracking-[0.18em] uppercase text-accent-blue text-center mb-6">
            — WHAT YOU GET —
          </p>
        </AnimateIn>
        <AnimateIn>
          <h2
            className="text-center leading-[1.1] tracking-[-0.02em] mb-16"
            style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
          >
            Everything your business needs.
            <br className="hidden sm:block" /> Nothing you don't.
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <AnimateIn delay={0}>
            <div className="bg-bg-surface border border-border-custom rounded-2xl p-10 h-full">
              <span className="inline-block bg-[#142814] text-accent-green font-body text-xs font-semibold px-3 py-1.5 rounded-full mb-8">
                Included in Every Site
              </span>
              <ul className="space-y-4">
                {included.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={16} className="text-accent-green mt-1 shrink-0" />
                    <span className="font-body text-[15px] text-text-primary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <div className="bg-bg-surface border border-border-custom rounded-2xl p-10 h-full">
              <span className="inline-block bg-[#141428] text-accent-blue font-body text-xs font-semibold px-3 py-1.5 rounded-full mb-8">
                Add-Ons Available
              </span>
              <ul className="space-y-4">
                {addOns.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Plus size={16} className="text-accent-blue mt-1 shrink-0" />
                    <span className="font-body text-[15px] text-text-primary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>
        </div>

        <AnimateIn delay={0.2}>
          <div className="rounded-2xl p-[1px] bg-gradient-to-br from-accent-blue to-accent-green">
            <div className="bg-bg-surface rounded-2xl p-12 text-center">
              <p className="font-body text-sm text-text-muted mb-2">Websites starting at</p>
              <p className="font-heading font-bold text-[72px] text-text-primary leading-none mb-2">$500</p>
              <p className="font-body text-base text-text-muted mb-8">with a plan that fits your budget</p>
              <a
                href="#contact"
                className="inline-block bg-accent-green text-bg-primary font-body font-semibold text-[15px] px-7 py-3.5 rounded-[10px] hover:brightness-90 transition-all"
              >
                Lock In Your Free Hosting →
              </a>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};

export default WhatIBuildSection;
