"use client";

import { useState, useEffect } from "react";
import { Terminal, Github, Star, Info, FolderKanban, ContactRound, Briefcase, Wrench, FileText } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export const navItems = [
  { name: "Work", id: "projects", icon: FolderKanban },
  { name: "Experience", id: "experience", icon: Briefcase },
  { name: "Engineering", id: "skills", icon: Wrench },
  { name: "About", id: "about", icon: Info },
  { name: "Contact", id: "contact", icon: ContactRound },
];

type Props = {
  terminalMode: boolean;
  setTerminalMode: (v: boolean) => void;
  uiType?: "landing" | "modular";
  setUiType?: (v: "landing" | "modular") => void;
  forcedTab?: string;
  setForcedTab?: (tab: string) => void;
};

const Navbar = ({ terminalMode, setTerminalMode, uiType, setUiType, forcedTab, setForcedTab }: Props) => {
  const [stars, setStars] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section for desktop nav highlighting
  useEffect(() => {
    if (terminalMode) return;
    if (uiType === "modular" && forcedTab) {
      setActiveSection(forcedTab);
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [terminalMode, forcedTab, uiType]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (id: string) => {
    if (uiType === "modular" && setForcedTab) {
      setForcedTab(id);
      setActiveSection(id);
    } else {
      scrollToSection(id);
    }
  };

  useEffect(() => {
    fetch("https://api.github.com/repos/OmarSaeed20/OmarSaeed20")
      .then((res) => res.json())
      .then((data) => {
        if (typeof data.stargazers_count === "number") {
          setStars(data.stargazers_count);
        }
      })
      .catch((err) => console.error("Failed to fetch repo stars", err));
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${terminalMode ? "py-0" : scrolled ? "py-3" : "py-4"
        }`}
    >
      <div className={`mx-auto transition-all duration-500 ${terminalMode ? "max-w-full px-0 mt-2" : "max-w-7xl px-2 sm:px-4 lg:px-6"
        }`}>
        <div
          className={`relative flex items-center justify-between px-2 sm:px-4 transition-all duration-500 ${terminalMode
            ? "bg-[var(--terminal-bg)] text-[var(--terminal-text)] border-b border-[var(--terminal-border)] rounded-none py-2"
            : `py-3 rounded-2xl border ${scrolled
              ? "bg-[var(--nav-bg)] backdrop-blur-xl border-[var(--nav-border)] shadow-2xl"
              : "bg-transparent border-transparent"
            }`
            }`}
        >
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              if (terminalMode) {
                e.preventDefault();
              }
            }}
            className="flex items-center gap-2 group"
          >
            <div className={`rounded-xl overflow-hidden transition-all duration-300 ${terminalMode ? "ring-2 ring-green-500/50" : "ring-2 ring-[var(--avatar-border)] group-hover:ring-blue-500/50"
              }`}>
              <img src="/assets/icon-192.png" alt="OS Logo" className="w-10 h-10 object-contain" />
            </div>
            <div className="relative">
              <span className="font-black text-2xl tracking-tighter uppercase text-[var(--text-primary)] flex items-baseline">
                OS<span className={`text-[17px] ml-0.5 transition-colors ${terminalMode ? "text-zinc-500 group-hover:text-green-500" : "text-[var(--text-muted)] group-hover:text-blue-500"}`}>20</span>
              </span>
              <div className={`absolute -bottom-0.5 left-0 h-1 rounded-full transition-all duration-300 w-0 group-hover:w-full ${terminalMode ? "bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" : "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"}`} />
            </div>
          </a>

          {/* Desktop Nav — visible on lg+ screens, hidden in terminal mode */}
          {!terminalMode && (
            <div className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-1 bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] rounded-2xl px-1 py-1">
                {navItems.map((item) => {
                  const isActive = item.id === activeSection;
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`relative flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${isActive
                        ? "text-blue-500 bg-[var(--accent)]"
                        : "text-[var(--text-muted)] hover:text-[var(--text-secondary)] hover:bg-[var(--accent)]"
                        }`}
                    >
                      <Icon size={16} strokeWidth={isActive ? 2.5 : 2} />
                      <span className="text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                        {item.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* UI Toggle (Mini) */}
            {/* {setUiType && (
              <button
                onClick={() => setUiType(uiType === "landing" ? "modular" : "landing")}
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-white"
                title={`Switch to ${uiType === "landing" ? "Modular" : "Landing"} UI`}
              >
                {uiType === "landing" ? (
                  <><LayoutGrid size={12} /> Modular</>
                ) : (
                  <><ScrollText size={12} /> Landing</>
                )}
              </button>
            )}

            <div className="h-4 w-px bg-white/10 mx-1 hidden sm:block" /> */}

            <a
              href="https://github.com/OmarSaeed20"
              target="_blank"
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[var(--glass-border)] bg-[var(--glass-bg)] hover:bg-[var(--glass-bg-hover)] transition-all group"
            >
              <Github size={22} className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors" />
              {stars !== null && (
                <span className="flex items-center text-base font-black text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">
                  <Star size={18} className="text-yellow-500 fill-yellow-500 mr-1" />
                  {stars}
                </span>
              )}
            </a>

            {/* Resume CTA */}
            {!terminalMode && (
              <a
                href="/assets/Omar-Saeed-Senior-Flutter-Engineer-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] hover:opacity-90 transition-all font-black text-xs uppercase tracking-widest"
                title="View Resume"
              >
                <FileText size={14} />
                Resume
              </a>
            )}

            <ThemeToggle />

            <button
              onClick={() => setTerminalMode(!terminalMode)}
              className={`p-2 rounded-xl border transition-all duration-300 ${terminalMode
                ? "border-[var(--terminal-border)] bg-green-500/20 text-green-400"
                : "border-[var(--glass-border)] bg-[var(--glass-bg)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--glass-bg-hover)]"
                }`}
              title="Toggle Terminal"
            >
              <Terminal size={22} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
