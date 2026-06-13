"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface PricingData {
  starter: string;
  professional: string;
  enterprise: string;
  symbol: string;
}

const regions: Record<string, { label: string; flag: string; pricing: PricingData }> = {
  india: {
    label: "India",
    flag: "🇮🇳",
    pricing: { starter: "6,000", professional: "15,000", enterprise: "40,000", symbol: "₹" },
  },
  uae: {
    label: "UAE",
    flag: "🇦🇪",
    pricing: { starter: "500", professional: "1,500", enterprise: "4,000", symbol: "AED " },
  },
  usa: {
    label: "USA",
    flag: "🇺🇸",
    pricing: { starter: "150", professional: "400", enterprise: "1,000", symbol: "$" },
  },
  uk: {
    label: "UK",
    flag: "🇬🇧",
    pricing: { starter: "120", professional: "300", enterprise: "800", symbol: "£" },
  },
  europe: {
    label: "Europe",
    flag: "🇪🇺",
    pricing: { starter: "130", professional: "350", enterprise: "900", symbol: "€" },
  },
  australia: {
    label: "Australia",
    flag: "🇦🇺",
    pricing: { starter: "200", professional: "600", enterprise: "1,500", symbol: "A$" },
  },
};

const plans = [
  {
    key: "starter" as const,
    name: "Starter",
    period: "per project",
    description: "Perfect for small businesses needing a professional web presence.",
    features: [
      "Single page website",
      "Responsive design",
      "Basic SEO setup",
      "Contact form integration",
      "1 round of revisions",
      "7-day delivery",
    ],
    excluded: ["Custom animations", "CMS integration", "E-commerce"],
    color: "#00d4ff",
    popular: false,
  },
  {
    key: "professional" as const,
    name: "Professional",
    period: "per project",
    description: "For businesses needing a feature-rich, high-performance web application.",
    features: [
      "Multi-page application",
      "Custom animations & interactions",
      "Advanced SEO optimization",
      "CMS integration",
      "Performance optimization",
      "3 rounds of revisions",
      "14-day delivery",
      "30-day free support",
    ],
    excluded: [],
    color: "#b84dff",
    popular: true,
  },
  {
    key: "enterprise" as const,
    name: "Enterprise",
    period: "per project",
    description: "Complex applications with custom requirements and ongoing support.",
    features: [
      "Full-stack development",
      "Custom backend & APIs",
      "E-commerce / SaaS",
      "Database architecture",
      "CI/CD pipeline setup",
      "Unlimited revisions",
      "Priority support",
      "Dedicated communication",
    ],
    excluded: [],
    color: "#ff006e",
    popular: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedRegion, setSelectedRegion] = useState("india");

  const currentPricing = regions[selectedRegion].pricing;

  return (
    <section className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-neon-purple text-sm font-mono tracking-wider uppercase">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-6">
            Transparent{" "}
            <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-8">
            Clear pricing with no hidden fees. Every project includes clean code,
            documentation, and deployment support.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 px-2">
            {Object.entries(regions).map(([key, region]) => (
              <motion.button
                key={key}
                onClick={() => setSelectedRegion(key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  selectedRegion === key
                    ? "bg-neon-blue/20 text-neon-blue border border-neon-blue/50"
                    : "bg-white/5 text-slate-400 border border-white/10 hover:border-white/20"
                }`}
              >
                <span className="mr-1 sm:mr-1.5">{region.flag}</span>
                {region.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className={`glass-card rounded-2xl p-8 flex flex-col relative ${
                plan.popular ? "ring-1 ring-neon-purple/50" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold bg-neon-purple text-white">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-slate-500 text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <motion.span
                  key={`${selectedRegion}-${plan.key}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-4xl font-bold"
                  style={{ color: plan.color }}
                >
                  {currentPricing.symbol}{currentPricing[plan.key]}
                </motion.span>
                <span className="text-slate-500 text-sm ml-2">/{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-slate-300">
                    <svg
                      className="w-4 h-4 flex-shrink-0"
                      style={{ color: plan.color }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
                {plan.excluded.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-slate-600">
                    <svg className="w-4 h-4 flex-shrink-0 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full text-center py-3 rounded-xl font-semibold transition-all text-sm ${
                  plan.popular
                    ? "btn-primary"
                    : "border border-white/10 text-slate-300 hover:border-neon-blue/50 hover:text-neon-blue"
                }`}
                style={plan.popular ? { borderRadius: "12px" } : undefined}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
