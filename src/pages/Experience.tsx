"use client";

import { motion } from "framer-motion";
import { experience } from "../data/userData";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-24 min-h-screen text-foreground relative z-10 scroll-mt-32">
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
            A track record of shipping production apps across industries — from logistics to recycling to education.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto text-left relative border-l border-[var(--glass-border)] ml-4 md:mx-auto pl-8">
          {experience.map((item, i) => (
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
