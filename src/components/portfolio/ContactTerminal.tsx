import { Send } from "lucide-react";
import crtTerminalPlant from "../../assets/portfolio/retro_monitor_plant_transparent_no_halo.png";
import { socialCommands } from "../../constants/socialCommands";

export default function ContactTerminal() {
  return (
    <div className="relative mt-8 grid items-end gap-8 lg:mt-12 lg:grid-cols-[minmax(0,1fr)_300px_250px] xl:grid-cols-[minmax(0,1fr)_340px_320px] xl:gap-9">
      <form className="flex h-full min-h-[360px] flex-col space-y-6" aria-label="Contact form">
        <p className="font-pixel text-[12px] leading-6 text-arcade-text">&gt; Quer iniciar uma nova missão?</p>
        <div className="grid gap-5 md:grid-cols-2">
          <label className="sr-only" htmlFor="name">
            Nome
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="> name_"
            className="min-h-[66px] border-[3px] border-arcade-border bg-[#f1dfaf] px-7 py-5 text-lg font-semibold text-arcade-text placeholder:text-arcade-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-arcade-green"
          />
          <label className="sr-only" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="> email_"
            className="min-h-[66px] border-[3px] border-arcade-border bg-[#f1dfaf] px-7 py-5 text-lg font-semibold text-arcade-text placeholder:text-arcade-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-arcade-green"
          />
        </div>
        <label className="sr-only" htmlFor="message">
          Mensagem
        </label>
        <textarea
          id="message"
          placeholder="> message_"
          rows={5}
          className="min-h-[170px] w-full flex-1 resize-none border-[3px] border-arcade-border bg-[#f1dfaf] px-7 py-6 text-lg font-semibold text-arcade-text placeholder:text-arcade-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-arcade-green"
        />
        <button
          type="button"
          className="inline-flex min-h-[62px] items-center gap-3 self-start border-[3px] border-arcade-greenDark bg-arcade-green px-9 py-5 font-pixel text-[12px] uppercase text-arcade-hero shadow-[6px_6px_0_rgba(37,38,28,0.38)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-arcade-green"
        >
          <Send size={18} aria-hidden="true" />
          Send Message
        </button>
      </form>

      <aside className="flex min-h-[260px] flex-col self-start border-[3px] border-arcade-border bg-[#f1dfaf] p-6 text-arcade-text shadow-[6px_6px_0_rgba(37,38,28,0.34)] lg:mt-12 lg:min-h-[312px] xl:min-h-[380px]">
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

      <div className="relative z-10 flex h-full min-h-[320px] items-end justify-center pt-6 lg:absolute lg:bottom-0 lg:right-0 lg:min-h-0 lg:w-[250px] lg:justify-end xl:w-[320px]">
        <img
          src={crtTerminalPlant}
          alt="Computador CRT pixelado com planta e mensagem motivacional"
          decoding="async"
          className="pixelated w-full max-w-[260px] object-contain drop-shadow-[4px_4px_0_rgba(37,38,28,0.4)] md:max-w-[320px] lg:max-w-[300px] xl:max-w-[300px]"
        />
      </div>
    </div>
  );
}
