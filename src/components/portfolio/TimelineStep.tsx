import type { TimelineItem } from "../../types/portfolio";

type TimelineStepProps = {
  item: TimelineItem;
};

export default function TimelineStep({ item }: TimelineStepProps) {
  const { Icon } = item;

  return (
    <article className="relative flex gap-5 md:block">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center text-arcade-greenDark md:mb-4">
        <Icon size={50} strokeWidth={2.4} aria-hidden="true" />
      </div>
      <span className="absolute left-[30px] top-20 h-full w-[4px] bg-arcade-greenDark md:left-0 md:top-[92px] md:h-[4px] md:w-full" aria-hidden="true" />
      <span className="absolute left-[24px] top-[70px] h-5 w-5 border-[3px] border-arcade-greenDark bg-arcade-green md:left-0 md:top-[84px]" aria-hidden="true" />
      <div className="pb-10 md:pb-0 md:pt-8">
        <h3 className="mb-3 font-pixel text-xl uppercase text-arcade-yellow">{item.year}</h3>
        <p className="mb-3 font-pixel text-[12px] uppercase leading-5 text-arcade-greenDark">{item.title}</p>
        <p className="max-w-60 text-[15px] font-semibold leading-6 text-arcade-text">{item.description}</p>
      </div>
    </article>
  );
}
