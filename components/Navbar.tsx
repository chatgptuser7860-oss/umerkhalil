"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 140;
      let currentSection = "home";

      for (const section of sections) {
        if (scrollPosition >= section.offsetTop) {
          currentSection = section.id;
        }
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [pathname]);

  const handleNavigate = (sectionId: string) => {
    setOpen(false);

    if (pathname !== "/") {
      router.push(`/#${sectionId}`);
      return;
    }

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/6 bg-[#050713]/72 backdrop-blur-xl">
      <div className="container-shell flex items-center justify-between py-4">
        <button
          type="button"
          onClick={() => handleNavigate("home")}
          className="text-left text-lg font-semibold tracking-[0.08em] text-white transition hover:text-cyan-200"
        >
          Umer Khalil
        </button>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const active = pathname === "/" && activeSection === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavigate(item.id)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  active
                    ? "bg-white/8 text-white shadow-[0_0_24px_rgba(56,189,248,0.1)]"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <Link href="/" className="sr-only">
          Home
        </Link>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-full border border-white/10 p-2 text-white md:hidden"
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="container-shell pb-4 md:hidden"
          >
            <div className="glass-panel rounded-3xl p-4">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => {
                  const active = pathname === "/" && activeSection === item.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      className={`rounded-2xl px-4 py-3 text-left transition ${
                        active
                          ? "bg-white/8 text-white"
                          : "text-slate-200 hover:bg-white/5 hover:text-white"
                      }`}
                      onClick={() => handleNavigate(item.id)}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
