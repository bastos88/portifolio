import { Code2 } from "lucide-react";
import PixelPanel from "../components/portfolio/PixelPanel/index";
import PixelSectionTitle from "../components/portfolio/PixelSectionTitle/index";
import TerminalCodeBlock from "../components/portfolio/TerminalCodeBlock/index";

export default function SourceCodeSection() {
  return (
    <PixelPanel>
      <PixelSectionTitle number="04" title="Source Code" />
      <div className="grid gap-8 lg:grid-cols-[1.45fr_0.55fr]">
        <TerminalCodeBlock />
        <aside className="flex min-h-64 flex-col border-2 border-arcade-border bg-[#f1dfaf] p-7 text-arcade-text shadow-pixel">
          <h3 className="mb-5 border-b border-dashed border-arcade-border pb-4 font-pixel text-[11px] uppercase">About this code</h3>
          <p className="text-lg font-semibold leading-8">
            Transformo ideias em interfaces funcionais, organizadas e acessíveis.
          </p>
          <Code2 className="mt-auto self-end text-arcade-greenDark" size={34} aria-hidden="true" />
        </aside>
      </div>
    </PixelPanel>
  );
}
