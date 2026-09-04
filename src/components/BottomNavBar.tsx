import { AnimatePresence, motion } from "framer-motion";
import {
  Info,
  FolderKanban,
  ContactRound,
  Briefcase,
  Wrench,
} from "lucide-react";
import {
  NAV_ITEMS,
  useActiveSection,
  scrollToSection as scrollToSectionShared,
  type SectionId,
} from "../hooks/useActiveSection";

// Icons mapped onto the shared section list so the bottom nav renders with the
// same visuals while the source of truth lives in one module.
const SECTION_ICONS: Record<SectionId, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  home: Info,
  projects: FolderKanban,
  experience: Briefcase,
  skills: Wrench,
  "engineering-notes": Wrench,
  about: Info,
  contact: ContactRound,
};

const navItems = NAV_ITEMS.map((item) => ({
  ...item,
  icon: SECTION_ICONS[item.id],
}));

type Props = {
  forcedTab?: string;
  setForcedTab?: (tab: string) => void;
};

const BottomNavBar = ({ forcedTab, setForcedTab }: Props) => {
  // Single shared observer (via the hook) instead of a second scroll listener.
  // forcedTab drives the state externally in modular/tab mode.
  const activeSection = useActiveSection({ forcedId: forcedTab ?? null });

  const handleClick = (e: React.MouseEvent, id: string) => {
    if (setForcedTab) {
      e.preventDefault();
      setForcedTab(id);
      return;
    }
    scrollToSectionShared(id);
  };

  return (
    <div
      className="fixed left-0 right-0 z-50 flex justify-center px-4 pointer-events-none lg:hidden bottom-nav-shell"
      // 16px base + the device's own bottom inset so the pill clears the
      // iPhone home indicator and Safari's floating bottom bar in PWA mode.
      // Falls back to 16px on browsers without env() support.
      style={{ bottom: "calc(1rem + env(safe-area-inset-bottom, 0px))" }}
    >
      <nav
        aria-label="Section navigation"
        className="bg-[var(--bottom-nav-bg)] backdrop-blur-xl border border-[var(--bottom-nav-border)] rounded-2xl px-2 py-2 shadow-2xl pointer-events-auto"
      >
        <div className="flex items-center gap-1 sm:gap-2 px-1">
          {navItems.map((item) => {
            const isActive = item.id === activeSection;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={(e) => handleClick(e, item.id)}
                aria-current={isActive ? "true" : undefined}
                aria-label={item.name}
                className={`relative flex items-center justify-center p-3.5 sm:p-4 rounded-2xl transition-all duration-300 group ${isActive
                  ? "text-blue-500 bg-[var(--accent)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text-secondary)] hover:bg-[var(--accent)]"
                  }`}
              >
                <div className="flex items-center gap-2">
                  <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.span
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "auto", opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        className="text-[12px] sm:text-[10px] font-black uppercase tracking-widest whitespace-nowrap overflow-hidden"
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

                {/* Tooltip */}
                {!isActive && (
                  <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-[var(--glass-bg)] backdrop-blur-xl text-[var(--foreground)] text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-[var(--glass-border)] whitespace-nowrap">
                    {item.name}
                  </span>
                )}

                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="active-dot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"
                  />
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default BottomNavBar;
