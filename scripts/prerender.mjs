/**
 * Vite plugin: prerender-meta
 *
 * Injects real, crawlable HTML content (name, bio, skills, projects) into the
 * built index.html so that the initial HTML response contains actual text —
 * not just meta tags and an empty #root div. This makes the SPA crawlable by
 * search engines, link-preview scrapers, and any client that doesn't run JS.
 *
 * Data comes from src/data/crawlable.js (plain JS, no TS types, no JSX) which
 * is also imported by userData.ts so there's a single source of truth.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * @param {Record<string, any>} opts
 * @returns {import("vite").Plugin}
 */
export function prerenderMeta(opts = {}) {
  return {
    name: "prerender-meta",
    apply: "build",
    async closeBundle() {
      const dataUrl = new URL("../src/data/crawlable.js", import.meta.url);
      const data = await import(dataUrl.href);

      const indexHtmlPath = resolve(__dirname, "../dist/index.html");
      let html = readFileSync(indexHtmlPath, "utf-8");

      const crawlable = buildCrawlableHtml(data);
      html = html.replace(
        '<div id="root"></div>',
        `<div id="root">\n${crawlable}\n</div>`
      );

      writeFileSync(indexHtmlPath, html);
      console.log("[prerender-meta] Injected crawlable content into dist/index.html");
    },
  };
}

function buildCrawlableHtml(d) {
  const info = d.personalInfo;
  const stats = d.skillStats || [];
  const facts = d.facts || [];
  const projects = (d.projectData || []).slice(0, 8);

  const skillsText = facts.map((f) => `<li>${f}</li>`).join("");
  const statsText = stats
    .map((s) => `<li><strong>${s.value}</strong> ${s.label}</li>`)
    .join("");

  const projectsHtml = projects
    .map((p) => {
      const platforms = (p.platforms || [])
        .map((pl) => `<a href="${pl.url}">${pl.name}</a>`)
        .join(" · ");
      const tech = (p.tech || []).join(", ");
      const live = p.live ? `<a href="${p.live}">Live</a>` : "";
      const github = p.github ? `<a href="${p.github}">GitHub</a>` : "";
      return [
        '<article class="prerender-project">',
        `<h3>${p.name}</h3>`,
        `<p>${p.description}</p>`,
        tech ? `<p><small>Tech: ${tech}</small></p>` : "",
        platforms ? `<p><small>${platforms}</small></p>` : "",
        live || github ? `<p>${live} ${github}</p>` : "",
        "</article>",
      ].join("");
    })
    .join("");

  // Build a visible static fallback (NOT display:none) so non-JS crawlers
  // (LinkedIn bot, ATS parsers, AI screeners) see real content in the raw
  // HTML response. noscript content only renders when JS is disabled, so
  // normal JS-enabled users never see this block.
  return [
    '<noscript class="prerender-content" aria-hidden="false">',
    '<main style="font-family:system-ui,sans-serif;max-width:800px;margin:0 auto;padding:2rem;color:#fff;background:#000;">',
    `<h1>${info.name} — ${info.role}</h1>`,
    `<p><strong>${info.status}</strong> · ${info.location}</p>`,
    `<p>${info.aboutText} ${info.aboutText1}<a href="${info.collegeUrl}">${info.college}</a>${info.aboutText2}</p>`,
    stats.length ? `<ul>${statsText}</ul>` : "",
    facts.length ? `<ul>${skillsText}</ul>` : "",
    "<h2>Projects</h2>",
    projectsHtml,
    "</main>",
    "</noscript>",
    '<style>.prerender-project{margin:1rem 0;padding:1rem 0;border-top:1px solid #333;}</style>',
  ].join("");
}