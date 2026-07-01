import PixelProgressBar from "../PixelProgressBar/PixelProgressBar";
import { cn } from "../../../lib/cn";
import styles from "./HudCard.module.css";
import paperTextureStyles from "../_shared/paperTexture.module.css";

export default function HudCard() {
  return (
    <aside className={cn(styles.frame, paperTextureStyles.paperTexture, "p-6 text-arcade-text md:min-w-[360px] lg:min-w-[390px] xl:min-w-[430px]")}>
      <div className="relative z-10">
        <h2 className="mb-3 font-pixel text-base uppercase xl:mb-4 xl:text-lg">Player HUD</h2>
        <div className="mb-5 grid grid-cols-[5rem_minmax(0,1fr)] gap-x-4 gap-y-3 border-t-2 border-dashed border-arcade-border pt-4 font-pixel text-[13px] uppercase xl:mb-6 xl:pt-5 xl:text-[14px]">
          <span>Player:</span>
          <span className="min-w-0 font-mono text-[15px] font-bold leading-[1.2rem] normal-case xl:text-base xl:leading-[1.2rem]">Leonardo</span>
          <span>Class:</span>
          <span className="min-w-0 font-mono text-[15px] font-bold leading-[1.2rem] normal-case xl:text-base xl:leading-[1.2rem]">Front-End Dev</span>
          <span>Level:</span>
          <span className="min-w-0 font-mono text-[15px] font-bold leading-[1.2rem] normal-case xl:text-base xl:leading-[1.2rem]">Junior+</span>
        </div>
        <PixelProgressBar value={82} label="XP:" size="hud" />
        <p className="mt-6 font-pixel text-[11px] uppercase xl:mt-7 xl:text-[12px]">
          Status: <span className="text-arcade-greenDark">Online</span>
        </p>
      </div>
    </aside>
  );
}
