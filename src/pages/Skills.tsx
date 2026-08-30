"use client";

import { motion } from "framer-motion";
import { skills, type SkillLevel } from "../data/userData";

const levelStyles: Record<
  SkillLevel,
  { ring: string }
> = {
  Expert: {
    ring: "group-hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] group-hover:border-emerald-500/40",
  },
  Advanced: {
    ring: "group-hover:shadow-[0_0_18px_rgba(59,130,246,0.30)] group-hover:border-blue-500/40",
  },
  Intermediate: {
    ring: "group-hover:shadow-[0_0_16px_rgba(245,158,11,0.25)] group-hover:border-amber-500/40",
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-24 min-h-screen text-foreground relative z-10 scroll-mt-32"
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
            My Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base md:text-lg lg:text-xl text-[var(--text-muted)] max-w-2xl mx-auto font-medium"
          >
            A curated selection of technologies I use to build high-performance mobile applications.
          </motion.p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {skills.map((categoryGroup, categoryIndex) => (
            <motion.div
              key={categoryGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.08, duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              className="p-4 sm:p-5 rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] flex flex-col hover:border-[var(--glass-border-hover)] transition-colors duration-300"
            >
              <div className="flex items-start justify-between gap-3 mb-5">
                <div className="flex flex-col">
                  <h3 className="text-sm font-black text-blue-600 uppercase tracking-widest pl-3 border-l-2 border-blue-600">
                    {categoryGroup.category}
                  </h3>
                  <span className="text-xs text-[var(--text-muted)] font-medium mt-1 pl-3">
                    {categoryGroup.description}
                  </span>
                </div>
                <span className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest px-2 py-1 rounded-full border border-[var(--glass-border)]">
                  {categoryGroup.items.length}
                </span>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3">
                {categoryGroup.items.map((item, index) => {
                  const lvl = levelStyles[item.level];
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.04, duration: 0.3 }}
                      viewport={{ once: true }}
                      className={`group relative flex flex-col items-center gap-2 p-2 sm:p-3 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] hover:bg-[var(--glass-bg-hover)] transition-all duration-300 ${lvl.ring}`}
                    >
                      <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                        <img
                          src={item.icon}
                          alt={item.name}
                          className={`w-full h-full object-contain ${item.invertDark ? "invert" : ""}`}
                        />
                      </div>
                      <span className="text-[10px] sm:text-xs font-bold text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors text-center uppercase tracking-tighter leading-tight">
                        {item.name}
                      </span>
                      {item.years ? (
                        <span className="absolute top-1.5 right-1.5 text-[8px] font-bold text-[var(--text-muted)] opacity-0 group-hover:opacity-100 transition-opacity">
                          {item.years}y
                        </span>
                      ) : null}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
