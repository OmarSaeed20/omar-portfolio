"use client";

import { motion } from "framer-motion";
import { contactItems, personalInfo } from "../data/userData";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full relative z-10 border-t border-[var(--glass-border)] bg-[var(--glass-bg)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: Name & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-black text-lg tracking-tighter text-[var(--text-primary)]">
              {personalInfo.name}
            </span>
            <span className="text-xs text-[var(--text-muted)] font-medium">
              © {new Date().getFullYear()} All rights reserved.
            </span>
          </div>

          {/* Center: Social Links */}
          <div className="flex items-center gap-4">
            {contactItems.map(({ icon: Icon, label, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all hover:scale-110 active:scale-95"
                title={label}
              >
                <Icon size={18} strokeWidth={2} />
              </a>
            ))}
          </div>

          {/* Right: Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] hover:bg-[var(--glass-bg-hover)] hover:border-blue-500/30 transition-all duration-300 text-xs font-black uppercase tracking-widest text-[var(--text-muted)] hover:text-[var(--text-primary)]"
          >
            Back to Top
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
