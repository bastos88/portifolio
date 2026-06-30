type CodeSegment = {
  text: string;
  tone?: "keyword" | "key" | "string";
};

const codeLines: CodeSegment[][] = [
  [
    { text: "const", tone: "keyword" },
    { text: " developer = {" },
  ],
  [
    { text: "  name", tone: "key" },
    { text: ": " },
    { text: '"Leonardo Bastos"', tone: "string" },
    { text: "," },
  ],
  [
    { text: "  role", tone: "key" },
    { text: ": " },
    { text: '"Front-End Developer"', tone: "string" },
    { text: "," },
  ],
  [
    { text: "  stack", tone: "key" },
    { text: ": [" },
    { text: '"React"', tone: "string" },
    { text: ", " },
    { text: '"TypeScript"', tone: "string" },
    { text: ", " },
    { text: '"Node.js"', tone: "string" },
    { text: "]," },
  ],
  [
    { text: "  mission", tone: "key" },
    { text: ": " },
    { text: '"Build useful digital experiences"', tone: "string" },
    { text: "," },
  ],
  [
    { text: "  focus", tone: "key" },
    { text: ": [" },
    { text: '"Performance"', tone: "string" },
    { text: ", " },
    { text: '"Accessibility"', tone: "string" },
    { text: ", " },
    { text: '"UX"', tone: "string" },
    { text: "]," },
  ],
  [
    { text: "  location", tone: "key" },
    { text: ": " },
    { text: '"Portugal"', tone: "string" },
    { text: "," },
  ],
  [
    { text: "  status", tone: "key" },
    { text: ": " },
    { text: '"Always learning"', tone: "string" },
  ],
  [{ text: "};" }],
];

const toneClass: Record<NonNullable<CodeSegment["tone"]>, string> = {
  keyword: "text-arcade-orange",
  key: "text-arcade-green",
  string: "text-arcade-yellow",
};

export default function TerminalCodeBlock() {
  return (
    <div className="overflow-hidden border-2 border-arcade-border bg-[#10110d] text-arcade-light shadow-pixel">
      <div className="flex items-center justify-between border-b border-[#353829] px-5 py-4">
        <span className="font-pixel text-[10px] uppercase text-arcade-yellow">source/developer.ts</span>
        <div className="flex gap-2" aria-hidden="true">
          <span className="h-2 w-2 bg-arcade-green" />
          <span className="h-2 w-2 bg-arcade-yellow" />
          <span className="h-2 w-2 bg-arcade-red" />
        </div>
      </div>
      <pre className="overflow-x-auto p-6 text-[15px] leading-8 text-[#f7ecd0]">
        {codeLines.map((line, index) => (
          <div key={index} className="grid grid-cols-[2rem_1fr] gap-4">
            <span className="select-none text-right text-[#6d6a58]">{String(index + 1).padStart(2, "0")}</span>
            <code>
              {line.map((segment, segmentIndex) => (
                <span key={`${segment.text}-${segmentIndex}`} className={segment.tone ? toneClass[segment.tone] : undefined}>
                  {segment.text}
                </span>
              ))}
            </code>
          </div>
        ))}
        <div className="grid grid-cols-[2rem_1fr] gap-4">
          <span className="select-none text-right text-[#6d6a58]">10</span>
          <span className="insert-caret-blink inline-block h-4 w-2 bg-arcade-green" />
        </div>
      </pre>
    </div>
  );
}
