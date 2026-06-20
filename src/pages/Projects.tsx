"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ArrowUpRight, ExternalLink, Smartphone, Globe } from "lucide-react";
import clsx from "clsx";
import { projectData } from "../data/userData";

const categories = Array.from(new Set(projectData.map((p) => p.category)));

const platformIcons: Record<string, React.ReactNode> = {
  "Google Play": <Smartphone size={12} />,
  "App Store": <Smartphone size={12} />,
  "Web App": <Globe size={12} />,
  "Driver - Google Play": <Smartphone size={12} />,
  "Driver - App Store": <Smartphone size={12} />,
  "Passenger - Google Play": <Smartphone size={12} />,
};

const Projects = ({ limit }: { limit?: number }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = projectData.filter(
    (p) => activeCategory === "all" || p.category === activeCategory
  );

  const displayProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <section id="projects" className="w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-24 min-h-screen text-foreground relative z-10 scroll-mt-32">
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
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base md:text-lg lg:text-xl text-[var(--text-muted)] max-w-2xl mx-auto font-medium"
          >
            16+ production apps across Android, iOS, and Web — from GPS tracking to workforce management.
          </motion.p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <button
            onClick={() => setActiveCategory("all")}
            className={clsx(
              "px-4 py-2 rounded-full text-sm font-black transition-all duration-300 uppercase tracking-widest border",
              activeCategory === "all"
                ? "bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] border-[var(--btn-primary-bg)]"
                : "text-[var(--text-muted)] border-[var(--glass-border)] hover:border-[var(--glass-border-hover)] hover:text-[var(--text-primary)]"
            )}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={clsx(
                "px-6 py-2 rounded-full text-sm font-black transition-all duration-300 uppercase tracking-widest border",
                activeCategory === cat
                  ? "bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] border-[var(--btn-primary-bg)]"
                  : "text-[var(--text-muted)] border-[var(--glass-border)] hover:border-[var(--glass-border-hover)] hover:text-[var(--text-primary)]"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-4 md:grid-cols-2 max-w-6xl mx-auto sm:px-0">
          {displayProjects.map((project) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="rounded-3xl p-4 border border-[var(--glass-border)] bg-[var(--glass-bg)] hover:border-blue-500/30 hover:bg-[var(--glass-bg-hover)] transition-all duration-500 text-left flex flex-col h-full group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-bold text-[var(--text-primary)] group-hover:text-blue-500 transition-colors">{project.name}</h3>
                {project.rating && project.rating !== "—" && (
                  <span className="text-xs font-bold text-[var(--text-muted)] whitespace-nowrap ml-2">{project.rating}</span>
                )}
              </div>
              <p className="text-base text-[var(--text-secondary)] mb-4 flex-grow leading-relaxed">
                {project.description || "Building the future of digital experiences."}
              </p>
              <div className="flex flex-wrap gap-1 text-xs mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-[var(--glass-tag-bg)] border border-[var(--glass-tag-border)] px-3 py-1 rounded-lg text-[var(--text-secondary)] font-semibold tracking-tight"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Platform Links */}
              {project.platforms && project.platforms.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.platforms.map((platform) => (
                    <a
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--glass-tag-bg)] border border-[var(--glass-tag-border)] text-xs font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300"
                    >
                      {platformIcons[platform.name] || <ExternalLink size={12} />}
                      {platform.name}
                    </a>
                  ))}
                </div>
              )}

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--glass-border)]">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors font-bold"
                  >
                    <Github size={18} /> Source
                  </a>
                ) : (
                  <span />
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-black text-blue-500 hover:text-blue-400 transition-colors uppercase tracking-widest"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {limit && filteredProjects.length > limit && (
          <div className="mt-16 flex justify-center">
            <a
              href="/projects"
              className="px-8 py-3.5 rounded-full border border-[var(--border)] text-[var(--text-primary)] font-black text-base transition-all duration-300 hover:bg-[var(--accent)] hover:border-[var(--text-muted)] flex items-center gap-2 group"
            >
              View More Projects
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Projects;
