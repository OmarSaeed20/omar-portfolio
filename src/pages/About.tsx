"use client";

import { motion } from "framer-motion";
import { facts, careerEvolution, engineeringPhilosophy, personalInfo } from "../data/userData";
import { Compass, Wrench } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-24 min-h-screen text-foreground relative z-10">
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
            Who Am I
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base md:text-lg lg:text-xl text-[var(--text-muted)] max-w-2xl mx-auto font-medium"
          >
            An unconventional route into engineering — built through production work, not credentials.
          </motion.p>
        </div>

        {/* Intro — Commerce → Engineering story */}
        <div className="grid lg:grid-cols-5 gap-12 items-start mb-16">
          <div className="lg:col-span-3">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-base md:text-xl lg:text-2xl text-[var(--text-secondary)] leading-relaxed font-medium"
            >
              {personalInfo.aboutText1}
              <a
                href={personalInfo.collegeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-primary)] hover:text-blue-500 underline decoration-blue-500/30 transition-colors"
              >
                {personalInfo.college}
              </a>
              {personalInfo.aboutText2}
            </motion.p>
          </div>

          <div className="lg:col-span-2 flex flex-wrap gap-2">
            {facts.map((fact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest border border-[var(--glass-fact-border)] bg-[var(--glass-fact-bg)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-blue-500/30 transition-all duration-300"
              >
                {fact}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Engineering Philosophy */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Wrench size={18} className="text-blue-400" />
            <h3 className="text-sm font-black uppercase tracking-widest text-[var(--text-muted)]">
              Engineering Philosophy
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {engineeringPhilosophy.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="p-5 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] hover:border-blue-500/30 transition-all duration-500"
              >
                <p className="text-base md:text-lg font-bold text-[var(--text-primary)] leading-snug mb-2">
                  {item.principle}
                </p>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Career Evolution */}
        <div className="flex flex-col items-center mb-10 text-center">
          <div className="flex items-center gap-2 mb-2">
            <Compass size={18} className="text-blue-400" />
            <h3 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em]">
              Engineering Evolution
            </h3>
          </div>
          <div className="h-px w-24 bg-blue-600/30" />
        </div>

        {/* Evolution Grid */}
        <div className="max-w-3xl mx-auto text-left relative border-l border-[var(--glass-border)] ml-4 md:mx-auto pl-8">
          {careerEvolution.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="mb-10 relative group last:mb-0"
            >
              {/* Node Dot */}
              <span className="absolute flex h-4 w-4 rounded-full bg-[var(--background)] border-2 border-blue-600 -left-[41px] top-1.5 transition-all duration-500 group-hover:bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.3)]" />

              <div className="flex flex-col gap-2">
                <span className="text-xs font-black text-[var(--text-muted)] uppercase tracking-widest">
                  {item.year}
                </span>

                <div className="p-4 rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] hover:bg-[var(--glass-bg-hover)] hover:border-[var(--glass-border-hover)] transition-all duration-500">
                  <p className="text-base md:text-lg font-black text-blue-500 leading-relaxed mb-1">
                    {item.milestone}
                  </p>
                  <p className="text-[var(--text-secondary)] text-sm md:text-base leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
