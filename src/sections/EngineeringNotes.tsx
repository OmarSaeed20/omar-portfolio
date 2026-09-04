"use client";

import { motion } from "framer-motion";
import { engineeringNotes } from "../data/userData";
import { PenTool, Clock } from "lucide-react";

const EngineeringNotes = () => {
  return (
    <section id="engineering-notes" className="w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-24 min-h-screen text-foreground relative z-10">
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
            Engineering Notes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base md:text-lg lg:text-xl text-[var(--text-muted)] max-w-2xl mx-auto font-medium"
          >
            Short technical notes that show how I think — before the interview.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {engineeringNotes.map((note, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group p-6 rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] hover:border-blue-500/30 hover:bg-[var(--glass-bg-hover)] transition-all duration-500 cursor-default"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <PenTool size={16} className="text-blue-400" />
                  <span className="inline-flex items-center gap-1 text-[13px] sm:text-[11px] font-bold text-[var(--text-muted)]">
                    <Clock size={11} /> {note.readTime}
                  </span>
                </div>
              </div>

              <h3 className="text-lg md:text-xl font-black text-[var(--text-primary)] group-hover:text-blue-500 transition-colors leading-tight mb-3">
                {note.title}
              </h3>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                {note.summary}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {note.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-md bg-[var(--glass-tag-bg)] border border-[var(--glass-tag-border)] text-[13px] sm:text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default EngineeringNotes;