import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/portfolio/logo-leonardo-8bit.jpg";
import { navItems } from "../../constants/navigation";

export default function RetroNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#2d2f23] bg-[#0b0c09]/96 backdrop-blur-sm">
      <nav className="mx-auto flex min-h-[68px] max-w-7xl items-center justify-between gap-6 px-5 py-2 lg:px-10" aria-label="Navegação principal">
        <a
          href="#home"
          className="flex shrink-0 items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-arcade-green"
          aria-label="Leonardo - voltar ao início"
        >
          <img
            src={logo}
            alt="Leonardo - 8 Bits Dev Portfolio"
            decoding="async"
            className="h-12 w-auto max-w-[180px] object-contain transition-transform duration-200 hover:scale-[1.03] md:max-w-[230px] lg:h-14 lg:max-w-[280px]"
          />
        </a>

        <button
          type="button"
          className="border border-arcade-yellow p-2 text-arcade-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-arcade-green md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-controls="main-navigation"
        >
          {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        </button>

        <div
          id="main-navigation"
          className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col border-b border-arcade-border bg-[#0b0c09] p-4 md:static md:flex md:flex-row md:border-0 md:bg-transparent md:p-0 lg:items-center lg:gap-5`}
        >
          {navItems.map(({ href, label, Icon }, index) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-2 px-3 py-3 font-pixel text-[9px] uppercase tracking-normal transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-arcade-green md:py-2 ${
                index === 0
                  ? "bg-arcade-panel text-arcade-text shadow-[2px_2px_0_rgba(0,0,0,0.35)]"
                  : "text-arcade-light hover:text-arcade-green"
              }`}
            >
              <Icon size={12} aria-hidden="true" />
              {String(index + 1).padStart(2, "0")} {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
