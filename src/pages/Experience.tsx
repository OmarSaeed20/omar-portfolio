"use client";

import { motion } from "framer-motion";
import { experience } from "../data/userData";
import { Briefcase, Package, GitBranch, Smartphone, Layers } from "lucide-react";

const sourcyaProofStats = [
  { icon: Smartphone, label: "Apps Migrated", value: "8+" },
  { icon: Package, label: "Reusable Packages", value: "2+" },
  { icon: GitBranch, label: "Repos Touched", value: "22" },
  { icon: Layers, label: "Flavors Configured", value: "3+" },
];

const sourcyaContributions = [
  "API migration across 8+ apps (rehla-operator, madaan-operator, tmt-gps)",
  "Built sourcya_in_app_rating Flutter package — integrated into 5+ apps",
  "PlayX ecosystem enhancements (playx_network streaming, interceptors, path params)",
  "Configured Staging/Production flavors for 3+ apps",
  "Delivered Rehla Operator app from scratch (trips, routes, drivers, PDF reports)",
  "Mafrooz Hub V3.0 redesign with three-tier responsive system",
];

const Experience = () => {
  const sourcya = experience.find((e) => e.company === "Sourcya");
  const rest = experience.filter((e) => e.company !== "Sourcya");

  return (
    <section id="experience" className="w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-24 min-h-screen text-foreground relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl"
      >
        <div className="flex flex-col items-center mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 text-[var(--text-primary)] tracking-tighter"
          >
            Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base md:text-lg lg:text-xl text-[var(--text-muted)] max-w-2xl mx-auto font-medium"
          >
            What I owned, what I decided, and what changed because I was there.
          </motion.p>
        </div>

        {/* Sourcya Proof Dashboard */}
        {sourcya && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10 rounded-3xl border border-blue-500/20 bg-blue-500/[0.03] overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 md:p-8 border-b border-[var(--glass-border)]">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[12px] sm:text-[10px] font-black uppercase tracking-widest">
                  Proof Dashboard
                </span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Briefcase size={22} className="text-blue-500" />
                <h3 className="text-2xl md:text-3xl font-black text-[var(--text-primary)]">{sourcya.role}</h3>
              </div>
              <p className="text-sm font-black text-blue-600 uppercase tracking-widest mb-3">
                {sourcya.company} · {sourcya.period}
              </p>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                {sourcya.description}
              </p>
            </div>

            {/* Scale of ownership */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--glass-border)]">
              {sourcyaProofStats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="p-5 bg-[var(--glass-bg)] text-center">
                    <Icon size={20} className="mx-auto mb-2 text-blue-400" />
                    <div className="text-2xl md:text-3xl font-black text-[var(--text-primary)]">{stat.value}</div>
                    <div className="text-[12px] sm:text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)] mt-1">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Reusable engineering contributions */}
            <div className="p-6 md:p-8">
              <h4 className="text-sm font-black uppercase tracking-widest text-[var(--text-muted)] mb-4">
                What became reusable because I built it once
              </h4>
              <ul className="grid md:grid-cols-2 gap-2.5">
                {sourcyaContributions.map((c, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)] leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        {/* Rest of experience */}
        <div className="max-w-3xl mx-auto text-left relative border-l border-[var(--glass-border)] ml-4 md:mx-auto pl-8">
          {rest.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="mb-10 relative group last:mb-0"
            >
              <span className="absolute flex h-4 w-4 rounded-full bg-[var(--background)] border-2 border-blue-600 -left-[41px] top-1.5 transition-all duration-500 group-hover:bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.3)]" />

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-xs font-black text-[var(--text-muted)] uppercase tracking-widest">
                    {item.period}
                  </span>
                </div>

                <div className="p-4 rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] hover:bg-[var(--glass-bg-hover)] hover:border-[var(--glass-border-hover)] transition-all duration-500">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase size={18} className="text-blue-500" />
                    <h3 className="text-xl font-bold text-[var(--text-primary)]">{item.role}</h3>
                  </div>
                  <p className="text-sm font-black text-blue-600 uppercase tracking-widest mb-3">
                    {item.company}
                  </p>
                  <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.highlights.map((h, idx) => (
                      <span
                        key={idx}
                        className="bg-[var(--glass-tag-bg)] border border-[var(--glass-tag-border)] px-3 py-1 rounded-lg text-xs text-[var(--text-secondary)] font-semibold"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
