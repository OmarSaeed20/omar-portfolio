import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  AnimatedTopDock,
  type DockItemConfig,
  type DockAction,
} from "../shaders/animated-top-dock/AnimatedTopDock";
import "../shaders/threeui.css";
import {
  NAV_ITEMS,
  useActiveSection,
  scrollToSection as scrollToSectionShared,
  type SectionId,
} from "../hooks/useActiveSection";

// SVG icons drawn on the same 16×16 viewBox the modern variant uses
const iconWork = (<><rect x="2" y="3" width="12" height="10" rx="1.5" /><path d="M2 6h12M5 4.5h.01M7 4.5h.01" /></>);
const iconExperience = (<><path d="M8 1.9 14.1 5v6L8 14.1 1.9 11V5z" /><path d="M1.9 5 8 8.1 14.1 5M8 8.1v6" /></>);
const iconEngineering = (<><path d="M8 1.9 14.4 5.6 8 9.3 1.6 5.6z" /><path d="m2.6 8 5.4 3.1L13.4 8M2.6 10.7 8 13.8l5.4-3.1" /></>);
const iconNotes = (<><path d="M3.4 2.4h5.4l3.8 3.8v7.4H3.4z" /><path d="M8.8 2.4v3.8h3.8M5.9 9h4.2M5.9 11.2h3" /></>);
const iconAbout = (<><circle cx="8" cy="5.5" r="2.4" /><path d="M3.2 14a4.8 4.8 0 0 1 9.6 0" /></>);
const iconContact = (<><rect x="2" y="4" width="12" height="8" rx="1.5" /><path d="m2.5 5 5.5 4 5.5-4" /></>);

const SECTION_ICONS: Record<string, React.ReactNode> = {
  projects: iconWork,
  experience: iconExperience,
  skills: iconEngineering,
  "engineering-notes": iconNotes,
  about: iconAbout,
  contact: iconContact,
};

// Portfolio brand mark (OS monogram on the same 24×24 viewBox)
const PORTFOLIO_MARK = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect width="24" height="24" rx="4.5" fill="#E8E8E3" />
    <path d="M8.5 6.5h7v2.2h-7zM8.5 10.9h7v2.2h-7zM8.5 15.3h4.5v2.2H8.5z" fill="#111" />
  </svg>
);

type Props = {
  terminalMode: boolean;
  setTerminalMode: (v: boolean) => void;
  uiType?: "landing" | "modular";
  setUiType?: (v: "landing" | "modular") => void;
  forcedTab?: string;
  setForcedTab?: (tab: string) => void;
};

export default function AnimatedNavbar({
  terminalMode,
  setTerminalMode,
  uiType,
  setUiType: _setUiType,
  forcedTab,
  setForcedTab,
}: Props) {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine which section should be forced as active:
  // - terminal mode: always "home"
  // - modular UI: the active tab
  // - standalone route (e.g. /experience): the section matching the path
  const pathSection = location.pathname.replace(/^\//, "");
  const forcedId = terminalMode
    ? ("home" as SectionId)
    : uiType === "modular" && forcedTab
      ? (forcedTab as SectionId)
      : pathSection && pathSection !== "" && location.pathname !== "/"
        ? (pathSection as SectionId)
        : null;
  const activeSection = useActiveSection({ forcedId });

  const dockItems: DockItemConfig[] = NAV_ITEMS.map((item) => ({
    id: item.id,
    label: item.name,
    icon: SECTION_ICONS[item.id] ?? iconAbout,
  }));

  const handleNavClick = (id: string) => {
    if (uiType === "modular" && setForcedTab) {
      setForcedTab(id);
      return;
    }
    // On the landing page, smooth-scroll to the section. On any other route
    // (standalone page like /experience), navigate to that section's page.
    if (location.pathname === "/") {
      scrollToSectionShared(id);
    } else {
      navigate(`/${id}`);
    }
  };

  const handleBrandClick = () => {
    if (uiType === "modular" && setForcedTab) {
      setForcedTab("home");
      return;
    }
    // On the landing page, scroll to top. On a standalone page, go home.
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const actions: DockAction[] = [
    {
      id: "resume",
      label: "Resume",
      variant: "cta",
      icon: <path d="M3.2 8h9.1M8.6 4.3 12.4 8l-3.8 3.7" />,
      onClick: () => {
        window.open(
          "/assets/Omar-Saeed-Senior-Flutter-Engineer-Resume.pdf",
          "_blank",
          "noopener,noreferrer"
        );
      },
    },
  ];

  // In terminal mode, don't render the dock
  if (terminalMode) return null;

  return (
    <>
      <AnimatedTopDock
        variant="modern"
        proximity={122}
        spring={0.19}
        damping={0.70}
        widthGrowth={17}
        heightGrowth={16}
        drop={3.5}
        items={dockItems}
        brandWord="OS20"
        brandMark={PORTFOLIO_MARK}
        actions={actions}
        activeId={activeSection}
        onItemClick={handleNavClick}
        onBrandClick={handleBrandClick}
        eyebrow="Senior Flutter Developer"
        headline="Omar Saeed"
        caption=""
        className="atd-portfolio-nav"
      />
      {/* Terminal toggle button — kept as a floating control */}
      <button
        onClick={() => setTerminalMode(!terminalMode)}
        className="fixed top-4 right-4 z-[60] p-2.5 rounded-xl border border-[var(--glass-border)] bg-[var(--glass-bg)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--glass-bg-hover)] transition-all duration-300"
        title="Toggle Terminal"
        aria-label="Toggle Terminal"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" y1="19" x2="20" y2="19" />
        </svg>
      </button>
    </>
  );
}