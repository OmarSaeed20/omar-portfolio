import { useEffect, useState, useMemo } from "react";

// ---------------------------------------------------------------------------
// 1. SINGLE SOURCE OF TRUTH FOR SECTIONS
//    Previously duplicated as `navItems` in both Navbar.tsx and BottomNavBar.tsx,
//    and both were missing `home` and `engineering-notes`. This caused the
//    active-section loop to never match at the top of the page (hero) or while
//    scrolling through Engineering Notes — so the indicator froze on the
//    previous item. Keep this exported from one module and import it in both navs.
// ---------------------------------------------------------------------------

export type SectionId =
  | "home"
  | "projects"
  | "experience"
  | "skills"
  | "engineering-notes"
  | "about"
  | "contact";

export interface SectionMeta {
  id: SectionId;
  name: string;
  showInNav: boolean;
  icon?: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
}

export const SECTIONS: SectionMeta[] = [
  { id: "home", name: "Home", showInNav: false },
  { id: "projects", name: "Work", showInNav: true },
  { id: "experience", name: "Experience", showInNav: true },
  { id: "skills", name: "Engineering", showInNav: true },
  { id: "engineering-notes", name: "Notes", showInNav: true },
  { id: "about", name: "About", showInNav: true },
  { id: "contact", name: "Contact", showInNav: true },
];

// Every section is observed so the active state is always correct.
// `showInNav` controls only what renders as a button.
export const NAV_ITEMS = SECTIONS.filter((s) => s.showInNav);

// ---------------------------------------------------------------------------
// 2. THE HOOK
//    IntersectionObserver instead of a scroll handler:
//      - no getElementById + offsetTop reads on every scroll event
//      - no forced synchronous layout
//      - immune to the offsetParent problem that Framer Motion transforms
//        introduce (rootMargin works in viewport coordinates)
// ---------------------------------------------------------------------------

interface UseActiveSectionOptions {
  forcedId?: SectionId | string | null;
  headerOffset?: number;
}

export function useActiveSection({
  forcedId = null,
  headerOffset = 80,
}: UseActiveSectionOptions = {}) {
  const [activeId, setActiveId] = useState<SectionId>(SECTIONS[0].id);

  const ids = useMemo(() => SECTIONS.map((s) => s.id), []);

  useEffect(() => {
    // Modular/tab mode drives the state externally — skip observation entirely.
    if (forcedId) {
      setActiveId(forcedId as SectionId);
      return;
    }

    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (nodes.length === 0) return;

    // Tracks how much of each section is visible so we can always pick a
    // winner, even in the gaps between sections. This is what fixes the
    // "indicator freezes on the previous item" behaviour.
    const ratios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.intersectionRatio);
        }

        let bestId: SectionId | null = null;
        let bestRatio = 0;

        // Iterate SECTIONS (not the Map) so ties resolve to document order.
        for (const id of ids) {
          const r = ratios.get(id) ?? 0;
          if (r > bestRatio) {
            bestRatio = r;
            bestId = id;
          }
        }

        if (bestId) setActiveId(bestId);
      },
      {
        // Discount the area behind the fixed header so a section isn't counted
        // as "visible" while it's hidden underneath the nav bar.
        rootMargin: `-${headerOffset}px 0px -35% 0px`,
        // Granular thresholds — needed for the ratio comparison above to be
        // meaningful rather than a binary in/out.
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [ids, forcedId, headerOffset]);

  return activeId;
}

// ---------------------------------------------------------------------------
// 3. SHARED NAVIGATION HANDLER
//    Centralises the smooth-scroll so header and bottom nav can't drift apart.
// ---------------------------------------------------------------------------

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });

  // Move keyboard focus with the scroll. Without this, a keyboard user
  // activates a nav item and their focus stays behind in the nav bar.
  el.setAttribute("tabindex", "-1");
  el.focus({ preventScroll: true });
}