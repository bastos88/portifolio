import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../../assets/portfolio/logo-leonardo-8bit-transparent.png";
import { navItems } from "../../constants/navigation";
import type { SectionId } from "../../types/portfolio";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function RetroNavbar() {
  const [open, setOpen] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  function handleNavClick(sectionId: SectionId) {
    setOpen(false);
    setActiveSection(sectionId);

    const section = document.getElementById(sectionId);

    if (!section) return;

    const navbar = document.querySelector<HTMLElement>(".navbar");
    const heading = sectionId === "home" ? section : section.querySelector<HTMLElement>("h1, h2");
    const target = heading ?? section;
    const navbarHeight = navbar?.getBoundingClientRect().height ?? 0;
    const targetTop = target.getBoundingClientRect().top + window.scrollY;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.scrollTo({
      top: Math.max(targetTop - navbarHeight, 0),
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });

    window.history.pushState(null, "", `#${sectionId}`);
  }

  useEffect(() => {
    const hero = document.getElementById("home");

    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPastHero(!entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "-72px 0px 0px 0px",
        threshold: 0.01,
      },
    );

    observer.observe(hero);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const sections = navItems
      .map(({ href }) => document.getElementById(href.slice(1)))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id as SectionId);
        }
      },
      {
        root: null,
        rootMargin: "-34% 0px -52% 0px",
        threshold: [0.05, 0.2, 0.45, 0.7],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header className={cn("navbar", isPastHero && "navbar-scrolled")}>
      <nav
        className="mx-auto flex min-h-[68px] max-w-7xl items-center justify-between gap-6 px-5 py-2 lg:px-10"
        aria-label="Navegacao principal"
      >
        <a
          href="#home"
          className="navbar-logo-link flex shrink-0 items-center px-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-arcade-green"
          aria-label="Leonardo - voltar ao inicio"
        >
          <img
            src={logo}
            alt="Leonardo - 8 Bits Dev Portfolio"
            decoding="async"
            className="navbar-logo h-12 w-auto max-w-[180px] object-contain md:max-w-[230px] lg:h-14 lg:max-w-[280px]"
          />
        </a>

        <button
          type="button"
          className="navbar-menu-button border p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-arcade-green md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-controls="main-navigation"
        >
          {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        </button>

        <div
          id="main-navigation"
          className={cn(
            "navbar-nav-panel absolute left-0 right-0 top-full flex-col p-4 md:static md:flex md:flex-row md:border-0 md:bg-transparent md:p-0 lg:items-center lg:gap-5",
            open ? "flex" : "hidden",
          )}
        >
          {navItems.map(({ href, label, Icon }, index) => {
            const sectionId = href.slice(1) as SectionId;

            return (
              <a
                key={href}
                href={href}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavClick(sectionId);
                }}
                aria-current={activeSection === sectionId ? "page" : undefined}
                className={cn(
                  "navbar-link flex items-center gap-2 px-3 py-3 font-pixel text-[9px] uppercase tracking-normal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-arcade-green md:py-2",
                  activeSection === sectionId && "navbar-link-active",
                  index === navItems.length - 1 && "navbar-link-cta",
                )}
              >
                <Icon size={12} aria-hidden="true" />
                {String(index + 1).padStart(2, "0")} {label}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
