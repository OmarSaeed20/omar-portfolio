"use client";

import { motion } from "framer-motion";
import { engineeringCapabilities, aiEngineering } from "../data/userData";
import { Wrench, Brain, ArrowUpRight } from "lucide-react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-24 min-h-screen text-foreground relative z-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-6xl"
      >
        {/* Heading */}
        <div className="flex flex-col items-center mb-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 text-[var(--text-primary)] tracking-tighter"
          >
            Engineering Strengths
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base md:text-lg lg:text-xl text-[var(--text-muted)] max-w-2xl mx-auto font-medium"
          >
            Capabilities backed by evidence from actual projects — not a wall of logos.
          </motion.p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-16">
          {engineeringCapabilities.map((cap, i) => (
            <motion.div
              key={cap.capability}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              className="p-5 sm:p-6 rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="flex items-center gap-2 mb-3">
                <Wrench size={18} className="text-blue-400" />
                <h3 className="text-lg font-black text-[var(--text-primary)] tracking-tight">
                  {cap.capability}
                </h3>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                {cap.description}
              </p>
              <div>
                <p className="text-[12px] sm:text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)] mb-2">
                  Used in
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {cap.evidence.map((proj, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[var(--glass-tag-bg)] border border-[var(--glass-tag-border)] text-xs font-bold text-[var(--text-secondary)]"
                    >
                      {proj}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI-Augmented Engineering */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Brain size={18} className="text-blue-400" />
            <h3 className="text-sm font-black uppercase tracking-widest text-[var(--text-muted)]">
              AI-Augmented Engineering
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {aiEngineering.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="p-5 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] hover:border-blue-500/30 transition-all duration-500"
              >
                <h4 className="text-base font-bold text-[var(--text-primary)] mb-2">
                  {item.question}
                </h4>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {item.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
