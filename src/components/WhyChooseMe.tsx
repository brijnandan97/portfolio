"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Status = "tick" | "cross" | "meh";

const TickIcon = () => (
  <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

const CrossIcon = () => (
  <svg className="w-4 h-4 text-red-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const MehIcon = () => (
  <svg className="w-4 h-4 text-yellow-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14" />
  </svg>
);

const StatusIcon = ({ status }: { status: Status }) => {
  if (status === "tick") return <TickIcon />;
  if (status === "cross") return <CrossIcon />;
  return <MehIcon />;
};

const comparisonFactors = [
  {
    factor: "Pricing",
    me: "Competitive rates, no hidden fees",
    meStatus: "tick" as Status,
    freelancers: "Varies wildly, often with hidden costs",
    freelancerStatus: "meh" as Status,
    agencies: "2x–5x higher with overhead charges",
    agencyStatus: "cross" as Status,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    factor: "Code Quality",
    me: "Clean, scalable, well-documented code",
    meStatus: "tick" as Status,
    freelancers: "Inconsistent, often no standards",
    freelancerStatus: "cross" as Status,
    agencies: "Good but bloated with boilerplate",
    agencyStatus: "meh" as Status,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    factor: "Delivery Speed",
    me: "Fast turnaround, strict deadlines",
    meStatus: "tick" as Status,
    freelancers: "Often delayed, unpredictable",
    freelancerStatus: "cross" as Status,
    agencies: "Slow due to multi-layer approvals",
    agencyStatus: "cross" as Status,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    factor: "Communication",
    me: "Direct access, daily updates",
    meStatus: "tick" as Status,
    freelancers: "Inconsistent availability",
    freelancerStatus: "cross" as Status,
    agencies: "Through project managers only",
    agencyStatus: "meh" as Status,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    factor: "Page Speed",
    me: "95+ Lighthouse score guaranteed",
    meStatus: "tick" as Status,
    freelancers: "Rarely optimized",
    freelancerStatus: "cross" as Status,
    agencies: "Average, 60–80 range",
    agencyStatus: "meh" as Status,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    factor: "SEO",
    me: "Built-in from day one, technical SEO included",
    meStatus: "tick" as Status,
    freelancers: "Basic or none",
    freelancerStatus: "cross" as Status,
    agencies: "Charged as an add-on",
    agencyStatus: "meh" as Status,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    factor: "Post-Launch Support",
    me: "Free 30-day support + affordable retainers",
    meStatus: "tick" as Status,
    freelancers: "Disappears after payment",
    freelancerStatus: "cross" as Status,
    agencies: "Expensive maintenance contracts",
    agencyStatus: "meh" as Status,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    factor: "Revisions",
    me: "Generous revision rounds included",
    meStatus: "tick" as Status,
    freelancers: "Limited or extra charges",
    freelancerStatus: "meh" as Status,
    agencies: "Strict scope, change requests billed",
    agencyStatus: "cross" as Status,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    factor: "Tech Stack",
    me: "Modern, industry-standard tools (React, Next.js, Node)",
    meStatus: "tick" as Status,
    freelancers: "Outdated or niche frameworks",
    freelancerStatus: "cross" as Status,
    agencies: "Whatever their team knows",
    agencyStatus: "meh" as Status,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    factor: "Ownership",
    me: "100% code ownership, full handover",
    meStatus: "tick" as Status,
    freelancers: "Sometimes unclear IP rights",
    freelancerStatus: "meh" as Status,
    agencies: "Locked into their ecosystem",
    agencyStatus: "cross" as Status,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function WhyChooseMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-neon-green text-sm font-mono tracking-wider uppercase">
            Why Choose Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-6" style={{ color: "var(--text-heading)" }}>
            Me vs Freelancers vs{" "}
            <span className="text-gradient">Agencies</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg" style={{ color: "var(--text-secondary)" }}>
            See how working with me compares to hiring random freelancers or expensive agencies.
            Quality, speed, and value — all in one place.
          </p>
        </motion.div>

        {/* Desktop Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden lg:block glass-card rounded-2xl overflow-hidden"
        >
          <div className="grid grid-cols-4 gap-0">
            {/* Header Row */}
            <div className="p-5 border-b" style={{ borderColor: "var(--border-color)", background: "var(--bg-secondary)" }}>
              <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>
                Factor
              </span>
            </div>
            <div className="p-5 border-b bg-neon-blue/[0.03]" style={{ borderColor: "var(--border-color)" }}>
              <span className="text-sm font-bold text-neon-blue uppercase tracking-wider">
                Brij Singla
              </span>
            </div>
            <div className="p-5 border-b" style={{ borderColor: "var(--border-color)", background: "var(--bg-secondary)" }}>
              <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>
                Other Freelancers
              </span>
            </div>
            <div className="p-5 border-b" style={{ borderColor: "var(--border-color)", background: "var(--bg-secondary)" }}>
              <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>
                Agencies
              </span>
            </div>

            {/* Data Rows */}
            {comparisonFactors.map((item, index) => (
              <motion.div
                key={item.factor}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                className="contents"
              >
                <div className="p-5 border-b flex items-center gap-3" style={{ borderColor: "var(--border-color)" }}>
                  <span className="text-neon-blue">{item.icon}</span>
                  <span className="text-sm font-semibold" style={{ color: "var(--text-heading)" }}>{item.factor}</span>
                </div>
                <div className="p-5 border-b bg-neon-blue/[0.03] flex items-center gap-2.5" style={{ borderColor: "var(--border-color)" }}>
                  <StatusIcon status={item.meStatus} />
                  <span className="text-sm" style={{ color: "var(--text-primary)" }}>{item.me}</span>
                </div>
                <div className="p-5 border-b flex items-center gap-2.5" style={{ borderColor: "var(--border-color)" }}>
                  <StatusIcon status={item.freelancerStatus} />
                  <span className="text-sm" style={{ color: "var(--text-muted)" }}>{item.freelancers}</span>
                </div>
                <div className="p-5 border-b flex items-center gap-2.5" style={{ borderColor: "var(--border-color)" }}>
                  <StatusIcon status={item.agencyStatus} />
                  <span className="text-sm" style={{ color: "var(--text-muted)" }}>{item.agencies}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-4">
          {comparisonFactors.map((item, index) => (
            <motion.div
              key={item.factor}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
              className="glass-card rounded-xl p-5"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-neon-blue">{item.icon}</span>
                <h3 className="text-sm font-bold" style={{ color: "var(--text-heading)" }}>{item.factor}</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <StatusIcon status={item.meStatus} />
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-semibold text-neon-blue bg-neon-blue/10 px-2 py-0.5 rounded-full shrink-0 mt-0.5">
                      Me
                    </span>
                    <span className="text-sm" style={{ color: "var(--text-primary)" }}>{item.me}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <StatusIcon status={item.freelancerStatus} />
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full shrink-0 mt-0.5" style={{ color: "var(--text-muted)", background: "var(--bg-secondary)" }}>
                      Freelancers
                    </span>
                    <span className="text-sm" style={{ color: "var(--text-muted)" }}>{item.freelancers}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <StatusIcon status={item.agencyStatus} />
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full shrink-0 mt-0.5" style={{ color: "var(--text-muted)", background: "var(--bg-secondary)" }}>
                      Agencies
                    </span>
                    <span className="text-sm" style={{ color: "var(--text-muted)" }}>{item.agencies}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
            Get agency-level quality at freelancer prices — with better communication and faster delivery.
          </p>
          <motion.a
            href="#contact"
            className="btn-primary inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
