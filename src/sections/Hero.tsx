"use client";
import { Send, FileText, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo, contactItems, proofRail } from "../data/userData";

type HeroProps = {
  onTabChange?: (tab: string) => void;
  uiType?: "landing" | "modular";
};

const Hero = ({ onTabChange, uiType }: HeroProps) => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-[90vh] w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-8 gap-12 lg:gap-16 relative z-10 pt-24 pb-20 overflow-x-clip"
    >
      {/* Background Branding */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 opacity-70">
        <span className="text-[18rem] md:text-[28rem] font-black text-white/[0.09] select-none tracking-[-0.07em]">
          {personalInfo.shortAlias}
        </span>
      </div>

      {/* Left Content — no max-width cap so the Actions buttons aren't squeezed.
          Text elements below keep their own max-w-* for readability. */}
      <div className="flex-1 text-left space-y-4 relative z-10">
        <div className="space-y-4">
          {/* Status */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--badge-text)] text-sm font-bold uppercase tracking-widest"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            {personalInfo.status}
          </motion.div>

          {/* Name & Role */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "circOut" }}
            className="text-[2rem] leading-[1.08] sm:text-6xl sm:leading-[1.05] lg:text-8xl lg:leading-[1.05] font-black tracking-tighter text-[var(--text-primary)]"
          >
            <span className="block">{personalInfo.name}</span>
            <span className="block text-[var(--text-muted)] text-3xl sm:text-5xl lg:text-7xl">
              {personalInfo.role}
            </span>
          </motion.h1>

          {/* Value Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-xl md:text-2xl lg:text-3xl text-[var(--text-primary)] leading-snug max-w-2xl font-bold tracking-tight"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* Focus areas */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="text-sm md:text-base text-[var(--text-muted)] leading-relaxed max-w-lg font-semibold uppercase tracking-widest"
          >
            {personalInfo.focus}
          </motion.p>
        </div>

        {/* Proof Rail */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-2 py-1"
        >
          {proofRail.map((proof, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--glass-tag-bg)] border border-[var(--glass-tag-border)] text-xs font-bold text-[var(--text-secondary)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
              {proof}
            </span>
          ))}
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-4 pt-4"
        >
          <div className="flex flex-col md:flex-row md:flex-wrap items-stretch md:items-center gap-3 w-full md:w-auto">
            <a
              href="#projects"
              onClick={(e) => {
                if (uiType === "modular" && onTabChange) {
                  e.preventDefault();
                  onTabChange("projects");
                } else {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="w-full md:w-auto md:flex-3 px-5 md:px-6 py-3.5 rounded-full bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] font-black text-base hover:bg-[var(--btn-primary-hover)] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group shadow-xl shadow-white/10 whitespace-nowrap"
            >
              View Case Studies
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </a>

            <a
              href="/assets/Omar-Saeed-Senior-Flutter-Engineer-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto md:flex-2 px-5 md:px-6 py-3.5 rounded-full bg-[var(--btn-secondary-bg)] hover:bg-[var(--btn-secondary-hover)] text-[var(--btn-secondary-text)] font-black text-base transition-all duration-300 flex items-center justify-center gap-2 group shadow-xl shadow-blue-500/20 whitespace-nowrap"
            >
              <FileText size={18} />
              Resume
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                if (uiType === "modular" && onTabChange) {
                  e.preventDefault();
                  onTabChange("contact");
                } else {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="w-full md:w-auto md:flex2 px-5 md:px-6 py-3.5 rounded-full border border-[var(--glass-border)] text-[var(--text-primary)] font-black text-base transition-all duration-300 flex items-center justify-center gap-2 group hover:bg-[var(--glass-bg-hover)] whitespace-nowrap"
            >
              Contact
              <Send className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-6 sm:gap-5 pt-2 md:pt-0">
            <div className="h-5 w-px bg-white/10 hidden md:block" />
            {contactItems
              .filter((i) => ["GitHub", "LinkedIn", "Email"].includes(i.label))
              .map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-safe text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all hover:scale-110 active:scale-95"
                  title={item.label}
                >
                  <item.icon size={26} strokeWidth={2.2} />
                </a>
              ))}
          </div>
        </motion.div>
      </div>

      {/* Right: Avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="relative flex-shrink-0"
      >
        <div className="relative group">
          {/* Corner Accents */}
          <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-blue-500/60 z-20 transition-transform group-hover:rotate-12 dark:border-blue-500/60" />
          <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-blue-500/60 z-20 transition-transform group-hover:-rotate-12 dark:border-blue-500/60" />

          {/* Avatar Container */}
          <div className="relative w-[300px] md:w-[340px] lg:w-[380px] aspect-square rounded-3xl overflow-hidden border border-[var(--glass-border)] shadow-2xl bg-[var(--glass-bg)]">
            <img
              src={personalInfo.avatarUrl}
              alt={personalInfo.name}
              className="w-full h-full object-cover scale-105 group-hover:scale-100 grayscale group-hover:grayscale-0 transition-all duration-700"
            />

            {/* Overlay Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-black/30 group-hover:via-transparent transition-all duration-700" />

            {/* Scan Line */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent h-[3px] w-full -translate-y-full group-hover:animate-[scan_3.5s_linear_infinite] pointer-events-none" />
          </div>

          {/* Glow */}
          <div className="absolute -inset-4 sm:-inset-12 bg-[var(--avatar-glow)] blur-[60px] sm:blur-[90px] rounded-full -z-10 opacity-0 group-hover:opacity-80 transition-opacity duration-700" />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;