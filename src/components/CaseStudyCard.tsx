"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Crosshair,
  Layers,
  Lightbulb,
  ShieldCheck,
  Target,
  Zap,
  ChevronRight,
} from "lucide-react";
import type { Project } from "../data/userData";

const tabs = [
  { id: "context", label: "Context", icon: Crosshair },
  { id: "ownership", label: "Ownership", icon: Target },
  { id: "decisions", label: "Decisions", icon: Lightbulb },
  { id: "architecture", label: "Architecture", icon: Layers },
  { id: "impact", label: "Impact", icon: Zap },
] as const;

type TabId = (typeof tabs)[number]["id"];

const CaseStudyCard = ({ project }: { project: Project }) => {
  const [activeTab, setActiveTab] = useState<TabId>("context");
  const [archNode, setArchNode] = useState<number | null>(null);
  const cs = project.caseStudy;

  if (!cs) return null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-80px" }}
      className="rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] hover:border-blue-500/30 transition-all duration-500 text-left overflow-hidden group"
    >
      {/* Header */}
      <div className="p-6 md:p-8 border-b border-[var(--glass-border)]">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-black uppercase tracking-widest">
                <ShieldCheck size={11} /> Case Study
              </span>
              {project.flagship && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-black uppercase tracking-widest">
                  Flagship
                </span>
              )}
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-[var(--text-primary)] group-hover:text-blue-500 transition-colors">
              {project.name}
            </h3>
            {project.tagline && (
              <p className="text-base md:text-lg text-[var(--text-muted)] font-semibold mt-1">
                {project.tagline}
              </p>
            )}
          </div>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] text-xs font-black uppercase tracking-widest hover:opacity-90 transition-all"
            >
              Explore <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="px-6 md:px-8 pt-5">
        <div className="flex flex-wrap gap-1.5">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 border ${
                  active
                    ? "bg-blue-500/15 text-blue-400 border-blue-500/40"
                    : "text-[var(--text-muted)] border-transparent hover:text-[var(--text-primary)] hover:bg-[var(--glass-bg-hover)]"
                }`}
              >
                <Icon size={12} /> {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      <div className="px-6 md:px-8 py-6 min-h-[180px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === "context" && (
              <div className="space-y-4">
                <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
                  {cs.context}
                </p>
                <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.04] p-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Crosshair size={14} className="text-amber-400" />
                    <span className="text-[11px] font-black uppercase tracking-widest text-amber-400">
                      Engineering Challenge
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {cs.challenge}
                  </p>
                </div>
              </div>
            )}

            {activeTab === "ownership" && (
              <ul className="space-y-2.5">
                {cs.ownership.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
                    <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-blue-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {activeTab === "decisions" && (
              <div className="space-y-3">
                {cs.decisions.map((d, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-[var(--glass-border)] bg-[var(--glass-bg-hover)] p-4"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <Lightbulb size={14} className="text-blue-400" />
                      <h4 className="text-sm font-bold text-[var(--text-primary)]">{d.title}</h4>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{d.detail}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "architecture" && (
              <div>
                <p className="text-xs text-[var(--text-muted)] mb-4 font-semibold uppercase tracking-widest">
                  Interactive flow — click a node to see what was owned
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {cs.architecture.map((node, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <button
                        onClick={() => setArchNode(archNode === i ? null : i)}
                        className={`px-3 py-2 rounded-lg text-xs font-bold border transition-all duration-300 ${
                          archNode === i
                            ? "bg-blue-500/20 text-blue-400 border-blue-500/50"
                            : "bg-[var(--glass-bg-hover)] text-[var(--text-secondary)] border-[var(--glass-border)] hover:border-blue-500/30"
                        }`}
                      >
                        {node}
                      </button>
                      {i < cs.architecture.length - 1 && (
                        <ChevronRight size={14} className="text-[var(--text-muted)] flex-shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
                <AnimatePresence>
                  {archNode !== null && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 overflow-hidden"
                    >
                      <div className="rounded-xl border border-blue-500/20 bg-blue-500/[0.04] p-4">
                        <div className="flex items-center gap-2 mb-1.5">
                          <Layers size={14} className="text-blue-400" />
                          <span className="text-sm font-bold text-blue-400">
                            {cs.architecture[archNode]}
                          </span>
                        </div>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                          {cs.ownership[Math.min(archNode, cs.ownership.length - 1)]}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {activeTab === "impact" && (
              <ul className="space-y-2.5">
                {cs.impact.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
                    <Zap size={16} className="mt-0.5 flex-shrink-0 text-green-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer: tech + production proof */}
      <div className="px-6 md:px-8 py-5 border-t border-[var(--glass-border)] space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="bg-[var(--glass-tag-bg)] border border-[var(--glass-tag-border)] px-2.5 py-0.5 rounded-md text-[11px] text-[var(--text-secondary)] font-semibold"
            >
              {t}
            </span>
          ))}
        </div>
        {project.platforms && project.platforms.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)]">
              Production Proof
            </span>
            {project.platforms.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[var(--glass-tag-bg)] border border-[var(--glass-tag-border)] text-[11px] font-bold text-[var(--text-secondary)] hover:text-blue-400 hover:border-blue-500/30 transition-all"
              >
                {p.name} <ArrowUpRight size={10} />
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
};

export default CaseStudyCard;