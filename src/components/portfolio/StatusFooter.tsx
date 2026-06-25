import { Coffee } from "lucide-react";

export default function StatusFooter() {
  return (
    <footer className="border-t-2 border-[#2e3025] bg-[#090a08] px-5 py-5 font-pixel text-[10px] uppercase text-arcade-light">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p>
          <span className="mr-2 text-arcade-green" aria-hidden="true">
            ●
          </span>
          System Status: <span className="text-arcade-green">Online</span>
        </p>
        <p>© 2026 Leonardo Bastos</p>
        <p className="flex items-center gap-2">
          Built with code, coffee and persistence.
          <Coffee size={14} className="text-arcade-yellow" aria-hidden="true" />
        </p>
      </div>
    </footer>
  );
}
