import { Download, Gamepad2, Play } from "lucide-react";
import cvPdf from "../assets/leonardo-bastos-cv.pdf";
import heroBg from "../assets/portfolio/hero-arcade-bg.jpg";
import HudCard from "../components/portfolio/HudCard";
import RetroButton from "../components/portfolio/RetroButton";

export default function HeroSection() {
  return (
    <section id="home" className="relative isolate mx-auto max-w-[1360px] overflow-hidden bg-[#0E0F0B] px-3 py-3 md:px-4 md:py-4">
      <div className="hero-crt-frame relative min-h-[620px] overflow-hidden bg-[#11120E] md:min-h-[650px] lg:min-h-[700px]">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          className="pointer-events-none absolute inset-0 h-full w-full select-none object-[center_bottom]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bg-[linear-gradient(90deg,rgba(14,15,11,0.68)_0%,rgba(14,15,11,0.46)_34%,rgba(14,15,11,0.14)_58%,rgba(14,15,11,0.02)_82%,transparent_100%)]"
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0E0F0B]/18 via-[#0E0F0B]/5 to-transparent" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1] opacity-[0.13] bg-[repeating-linear-gradient(to_bottom,transparent_0px,transparent_3px,rgba(0,0,0,0.46)_4px,rgba(0,0,0,0.46)_5px)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-10 border-t border-[#2E301F] bg-[linear-gradient(to_bottom,rgba(8,9,7,0.16),rgba(5,6,4,0.58))]"
        />
        <span aria-hidden="true" className="pointer-events-none absolute left-5 top-5 z-[3] h-3 w-3 border-l-2 border-t-2 border-[#777744]" />
        <span aria-hidden="true" className="pointer-events-none absolute right-5 top-5 z-[3] h-3 w-3 border-r-2 border-t-2 border-[#777744]" />
        <span aria-hidden="true" className="pointer-events-none absolute bottom-5 left-5 z-[3] h-3 w-3 border-b-2 border-l-2 border-[#777744]" />
        <span aria-hidden="true" className="pointer-events-none absolute bottom-5 right-5 z-[3] h-3 w-3 border-b-2 border-r-2 border-[#777744]" />

        <div className="relative z-10 grid min-h-[620px] grid-cols-1 gap-8 px-7 pb-16 pt-16 sm:px-10 md:min-h-[650px] md:px-12 lg:min-h-[700px] lg:px-20 lg:pb-20 lg:pt-20 xl:grid-cols-[minmax(0,1fr)_minmax(380px,440px)] xl:gap-14 xl:px-24">
          <div className="relative z-10 flex max-w-[610px] flex-col justify-center lg:pl-10 xl:pl-14">
            <h1 className="mb-8 font-pixel text-[2.8rem] uppercase leading-[0.90] tracking-normal text-[#FFF5D6] drop-shadow-[5px_5px_0_rgba(0,0,0,0.62)] sm:text-[4.3rem] md:text-[5.2rem] lg:text-[5.65rem] xl:text-[6.1rem]">
              Insert
              <br />
              Coin
            </h1>
            <p className="mb-3 font-pixel text-xl uppercase text-arcade-green md:text-2xl xl:text-[1.65rem]">Leonardo Bastos</p>
            <p className="mb-7 font-pixel text-sm uppercase text-arcade-light md:text-lg xl:text-[1.08rem]">Front-End Developer</p>
            <p className="mb-9 max-w-xl text-lg font-semibold leading-8 text-arcade-light md:text-xl md:leading-9 xl:max-w-[580px] xl:text-[1.24rem] xl:leading-10">
              Construindo experiências digitais com código, criatividade e lógica.
            </p>
            <div className="flex flex-wrap items-start gap-5 xl:gap-6">
              <RetroButton href="#about" className="xl:min-h-12 xl:px-6 xl:text-[11px]">
                <Play size={14} aria-hidden="true" />
                Start Game
              </RetroButton>
              <RetroButton href="#projects" variant="outline" className="xl:min-h-12 xl:px-6 xl:text-[11px]">
                <Gamepad2 size={14} aria-hidden="true" />
                View Projects
              </RetroButton>
              <div className="flex flex-col items-start gap-2">
                <RetroButton
                  href={cvPdf}
                  download="leonardo-bastos-cv.pdf"
                  variant="download"
                  title="CV.PDF AVAILABLE"
                  className="xl:min-h-12 xl:px-6 xl:text-[11px]"
                >
                  <Download size={14} aria-hidden="true" />
                  Download CV
                </RetroButton>
                <span className="font-pixel text-[8px] uppercase leading-none text-arcade-yellow/85">
                  CV.PDF Available
                </span>
              </div>
            </div>
            <p className="press-start-blink mt-14 font-pixel text-[10px] uppercase text-arcade-light xl:mt-14 xl:text-[10px]">
              <span className="text-xl text-arcade-yellow">→</span> Press <span className="text-arcade-green">Start</span> to continue
            </p>
          </div>

          <div className="relative z-10 hidden self-start justify-self-stretch pt-4 md:block md:justify-self-start lg:pt-0 xl:justify-self-end">
            <HudCard />
          </div>
        </div>
      </div>
    </section>
  );
}
