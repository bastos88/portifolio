import { useEffect, useState } from "react";
import { Coffee } from "lucide-react";
import avatarGif from "../assets/portfolio/optimized/gif_Leo-cafe3.gif";
import miniGameboyHeart220 from "../assets/portfolio/optimized/mini-gameboy-heart-220.webp";
import miniGameboyHeart340 from "../assets/portfolio/optimized/mini-gameboy-heart-340.webp";
import miniGameboyHeart480 from "../assets/portfolio/optimized/mini-gameboy-heart-480.webp";
import PixelPanel from "../components/portfolio/PixelPanel";
import PixelProgressBar from "../components/portfolio/PixelProgressBar";
import PixelSectionTitle from "../components/portfolio/PixelSectionTitle";
import { profileBars } from "../data/profile";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export default function AboutSection() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [visibleEnergySegments, setVisibleEnergySegments] = useState(1);

  useEffect(() => {
    if (prefersReducedMotion) {
      setVisibleEnergySegments(10);
      return;
    }

    const intervalId = window.setInterval(() => {
      setVisibleEnergySegments((current) => (current === 10 ? 1 : current + 1));
    }, 420);

    return () => window.clearInterval(intervalId);
  }, [prefersReducedMotion]);

  return (
    <PixelPanel id="about" className="rounded-t-sm">
      <PixelSectionTitle number="01" title="Player Profile" />
      <div className="grid gap-8 lg:grid-cols-[280px_180px_minmax(420px,1fr)_300px] lg:items-center">
        <div className="flex min-h-[250px] items-center justify-center border-2 border-[#4A4028] bg-[#E8D8AE] shadow-[3px_3px_0_#25261C]">
          <img
            src={avatarGif}
            alt="Avatar pixelado de Leonardo Bastos"
            width={560}
            height={625}
            loading="lazy"
            decoding="async"
            className="pixelated h-full max-h-[290px] w-auto object-contain"
          />
        </div>
        <div className="arcade-code border-2 border-arcade-border bg-[#f1dfaf] text-arcade-text shadow-pixel">
          <div className="border-b-2 border-arcade-border p-5">
            <p className="mb-1 font-pixel text-[10px] uppercase leading-5">Status:</p>
            <p className="font-pixel text-[12px] uppercase text-arcade-greenDark">Coding</p>
          </div>
          <div className="border-b-2 border-arcade-border p-5">
            <p className="mb-4 font-pixel text-[10px] uppercase">Energy:</p>
            <div className="energy-bar flex flex-wrap gap-1.5" aria-hidden="true">
              {Array.from({ length: 10 }, (_, index) => (
                <span
                  key={`energy-${index}`}
                  className={`energy-bar__segment h-3 w-5 border border-arcade-greenDark bg-arcade-green ${
                    index < visibleEnergySegments ? "energy-bar__segment--active" : ""
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="p-5">
            <p className="mb-1 font-pixel text-[10px] uppercase leading-5">Coffee:</p>
            <p className="flex items-center gap-2 font-pixel text-[10px] uppercase">
              Required <Coffee size={18} aria-hidden="true" />
            </p>
          </div>
        </div>
        <div className="text-arcade-text">
          <div className="mb-7 space-y-4">
            <p className="max-w-3xl text-md font-semibold leading-8">
              Sou desenvolvedor Front-End em formação, focado em criar interfaces modernas, responsivas e funcionais.
            </p>
            <p className="max-w-3xl text-md font-semibold leading-8">
              Trabalho com React, TypeScript, JavaScript, HTML, CSS e integração com APIs.
            </p>
          </div>
          <div className="space-y-3">
            {profileBars.map((bar) => (
              <PixelProgressBar key={bar.label} label={bar.label} value={bar.value} />
            ))}
          </div>
        </div>
        <div className="flex h-[220px] items-center justify-center overflow-hidden md:h-[260px] lg:h-[335px]">
          <img
            src={miniGameboyHeart340}
            srcSet={`${miniGameboyHeart220} 220w, ${miniGameboyHeart340} 340w, ${miniGameboyHeart480} 480w`}
            sizes="(min-width: 1024px) 300px, (min-width: 768px) 260px, 220px"
            alt="Console portátil pixelado com coração"
            width={340}
            height={474}
            loading="lazy"
            decoding="async"
            className="pixelated h-full w-auto max-w-none object-contain drop-shadow-[3px_3px_0_rgba(37,38,28,0.45)]"
          />
        </div>
      </div>
    </PixelPanel>
  );
}
