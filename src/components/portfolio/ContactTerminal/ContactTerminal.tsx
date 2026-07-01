import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import crtTerminalPlant260 from "../../../assets/portfolio/optimized/retro-monitor-plant-260.webp";
import crtTerminalPlant360 from "../../../assets/portfolio/optimized/retro-monitor-plant-360.webp";
import crtTerminalPlant520 from "../../../assets/portfolio/optimized/retro-monitor-plant-520.webp";
import { socialCommands } from "../../../constants/socialCommands";
import SubmitButton from "../../ui/buttons/SubmitButton";
import RetroTextField from "../../ui/inputs/RetroTextField";
import RetroTextarea from "../../ui/inputs/RetroTextarea";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xvzjbjow";

export default function ContactTerminal() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Formspree request failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="relative mt-8 grid items-end gap-8 lg:mt-12 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] xl:grid-cols-[minmax(0,420px)_minmax(0,1fr)] xl:gap-9">
      <form className="flex h-full min-h-[360px] flex-col space-y-6" aria-label="Contact form" onSubmit={handleSubmit}>
        <p className="font-pixel text-[12px] leading-6 text-arcade-text">&gt; Quer iniciar uma nova missão?</p>
        <div className="grid gap-5 md:grid-cols-2">
          <label className="sr-only" htmlFor="name">
            Nome
          </label>
          <RetroTextField
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="> name_"
            required
          />
          <label className="sr-only" htmlFor="email">
            Email
          </label>
          <RetroTextField
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="> email_"
            required
          />
        </div>
        <label className="sr-only" htmlFor="message">
          Mensagem
        </label>
        <RetroTextarea
          id="message"
          name="message"
          placeholder="> message_"
          rows={5}
          required
        />
        <input type="hidden" name="_subject" value="Nova mensagem do portfolio" />
        <SubmitButton loading={status === "sending"} icon={<Send size={18} aria-hidden="true" />}>
          Send Message
        </SubmitButton>
      </form>

      <div className="grid gap-8 lg:grid-cols-[300px_minmax(0,260px)] lg:items-end xl:grid-cols-[320px_minmax(0,260px)] xl:gap-9">
        <aside className="flex min-h-[260px] flex-col self-start border-[3px] border-arcade-border bg-[#f1dfaf] p-6 text-arcade-text shadow-[6px_6px_0_rgba(37,38,28,0.34)] lg:mt-12 lg:min-h-[312px] xl:min-h-[375px]">
          <h3 className="mb-6 border-b border-dashed border-arcade-border pb-5 font-pixel text-[12px] uppercase">
            Social Commands
          </h3>
          <div className="space-y-6">
            {socialCommands.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                className="flex items-center justify-between font-mono text-lg font-bold uppercase hover:text-arcade-greenDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-arcade-green"
              >
                <span>&gt; {label}</span>
                <Icon size={20} strokeWidth={2.2} aria-hidden="true" />
              </a>
            ))}
          </div>
        </aside>

        <div className="relative z-10 flex min-h-[260px] items-end justify-center pt-6 lg:min-h-[312px] lg:justify-end lg:pt-0 xl:min-h-[380px]">
          <img
            src={crtTerminalPlant360}
            srcSet={`${crtTerminalPlant260} 260w, ${crtTerminalPlant360} 360w, ${crtTerminalPlant520} 520w`}
            sizes="(min-width: 1024px) 260px, 260px"
            alt="Computador CRT pixelado com planta e mensagem motivacional"
            width={360}
            height={215}
            loading="eager"
            decoding="async"
            className="pixelated w-full max-w-[260px] object-contain drop-shadow-[4px_4px_0_rgba(37,38,28,0.4)] md:max-w-[320px] lg:max-w-[260px]"
          />
        </div>
      </div>
    </div>
  );
}
