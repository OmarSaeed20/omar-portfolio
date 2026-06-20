import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  HomeIcon,
  Info,
  FolderKanban,
  ContactRound,
  Target,
} from "lucide-react";

const navItems = [
  { name: "Home", id: "home", icon: HomeIcon },
  { name: "About", id: "about", icon: Info },
  { name: "Projects", id: "projects", icon: FolderKanban },
  { name: "Skills", id: "skills", icon: Target },
  { name: "Contact", id: "contact", icon: ContactRound },
];

type Props = {
  forcedTab?: string;
  setForcedTab?: (tab: string) => void;
};

const BottomNavBar = ({ forcedTab, setForcedTab }: Props) => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (forcedTab) {
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
  }, [forcedTab]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl px-2 py-2 shadow-2xl pointer-events-auto">
        <div className="flex items-center gap-1 sm:gap-2 px-1">
          {navItems.map((item) => {
            const isActive = item.id === activeSection;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={(e) => {
                  if (setForcedTab) {
                    e.preventDefault();
                    setForcedTab(item.id);
                    setActiveSection(item.id);
                  } else {
                    scrollToSection(item.id);
                  }
                }}
                className={`relative flex items-center justify-center p-3 sm:p-4 rounded-2xl transition-all duration-300 group ${isActive
                  ? "text-blue-500 bg-white/10"
                  : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5"
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
                        className="text-[10px] font-black uppercase tracking-widest whitespace-nowrap overflow-hidden"
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

                {/* Tooltip */}
                {!isActive && (
                  <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-zinc-800 text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/5 whitespace-nowrap">
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
