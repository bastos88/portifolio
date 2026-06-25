import PixelProgressBar from "./PixelProgressBar";

export default function HudCard() {
  return (
    <aside className="hud-pixel-frame paper-texture p-6 text-arcade-text md:min-w-[360px] lg:min-w-[390px] xl:min-w-[430px] xl:p-7">
      <div className="relative z-10">
        <h2 className="mb-3 font-pixel text-base uppercase xl:mb-4 xl:text-lg">Player HUD</h2>
        <div className="mb-5 border-t-2 border-dashed border-arcade-border pt-4 font-pixel text-[11px] uppercase leading-8 xl:mb-6 xl:pt-5 xl:text-[12px] xl:leading-9">
          <p>
            Player: <span className="font-mono font-bold">Leonardo</span>
          </p>
          <p>
            Class: <span className="font-mono font-bold">Front-End Dev</span>
          </p>
          <p>
            Level: <span className="font-mono font-bold">Junior+</span>
          </p>
        </div>
        <PixelProgressBar value={82} label="XP" size="hud" />
        <p className="mt-6 font-pixel text-[11px] uppercase xl:mt-7 xl:text-[12px]">
          Status: <span className="text-arcade-greenDark">Online</span>
        </p>
      </div>
    </aside>
  );
}
