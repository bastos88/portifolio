import styles from "./PixelSectionTitle.module.css";

type PixelSectionTitleProps = {
  number: string;
  title: string;
  aside?: string;
};

export default function PixelSectionTitle({ number, title, aside }: PixelSectionTitleProps) {
  return (
    <div className="mb-9 flex items-center gap-4 text-arcade-text">
      <span className="border-2 border-arcade-greenDark bg-[#ecf5a6] px-2.5 py-1.5 font-pixel text-sm leading-none shadow-[2px_2px_0_rgba(0,0,0,0.25)]">
        {number}
      </span>
      <h2 className="font-pixel text-xl uppercase leading-tight md:text-[1.7rem]">{title}</h2>
      <div className={`${styles.divider} h-[2px] min-w-8 flex-1 opacity-60`} />
      {aside ? <span className="hidden font-pixel text-[11px] uppercase md:block">{aside}</span> : null}
    </div>
  );
}
