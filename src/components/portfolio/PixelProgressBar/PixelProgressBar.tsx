import { cn } from "../../../lib/cn";

type PixelProgressBarProps = {
  value: number;
  label?: string;
  size?: "default" | "hud";
};

export default function PixelProgressBar({ value, label, size = "default" }: PixelProgressBarProps) {
  const isHud = size === "hud";

  return (
    <div className={cn("flex items-center", isHud ? "gap-4" : "gap-3")}>
      {label ? (
        <span className={cn(isHud ? "w-20 text-[11px] xl:text-[12px]" : "w-28 text-[10px]", "shrink-0 font-pixel uppercase text-arcade-text")}>{label}</span>
      ) : null}
      <div className={cn(isHud ? "h-5 border-2 p-[3px]" : "h-4 border p-[2px]", "flex-1 border-arcade-border bg-[#d8c89a]")}>
        <div
          style={{ width: `${value}%` }}
          className="h-full bg-arcade-green shadow-[inset_-2px_-2px_0_rgba(55,109,36,0.55)]"
        />
      </div>
      <span className={cn(isHud ? "w-12 text-[11px] xl:text-[12px]" : "w-11 text-[10px]", "text-right font-pixel text-arcade-text")}>{value}%</span>
    </div>
  );
}
