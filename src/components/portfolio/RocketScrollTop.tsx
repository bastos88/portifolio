import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import rocketImage from "../../assets/rocket.png";

type RocketScrollTopProps = {
  targetId: string;
  triggerId: string;
};

type SmokeParticle = {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
};

const smokeColors = ["#F6F1E1", "#D8B25A", "#B8B5AA", "#D98931"];

function SmokeParticles({ particles }: { particles: SmokeParticle[] }) {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center" aria-hidden="true">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute block"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            imageRendering: "pixelated",
          }}
          initial={{ opacity: 0, x: 0, y: 0, scale: 0.8 }}
          animate={{
            opacity: [0, 0.78, 0],
            x: particle.x,
            y: particle.y,
            scale: [0.8, 1, 0.62],
          }}
          transition={{
            delay: particle.delay,
            duration: particle.duration,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

export default function RocketScrollTop({ targetId, triggerId }: RocketScrollTopProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);
  const [particles, setParticles] = useState<SmokeParticle[]>([]);

  const generatedParticles = useMemo<SmokeParticle[]>(
    () =>
      Array.from({ length: 18 }, (_, index) => ({
        id: index,
        x: (index % 2 === 0 ? -1 : 1) * (10 + (index % 6) * 7),
        y: 18 + (index % 5) * 8,
        size: 5 + (index % 4) * 3,
        color: smokeColors[index % smokeColors.length],
        delay: 0.04 + (index % 6) * 0.025,
        duration: 0.42 + (index % 4) * 0.06,
      })),
    [],
  );

  useEffect(() => {
    const trigger = document.getElementById(triggerId);

    if (!trigger) return;

    const triggerElement = trigger;

    function updateVisibility(entry?: IntersectionObserverEntry) {
      if (window.scrollY < 80) {
        setIsVisible(false);
        return;
      }

      const top = entry?.boundingClientRect.top ?? triggerElement.getBoundingClientRect().top;
      const hasReachedTrigger = top <= window.innerHeight * 0.82;

      setIsVisible(hasReachedTrigger);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        updateVisibility(entry);
      },
      {
        root: null,
        rootMargin: "0px 0px -18% 0px",
        threshold: [0, 0.1],
      },
    );

    observer.observe(triggerElement);
    updateVisibility();

    return () => {
      observer.disconnect();
    };
  }, [triggerId]);

  function handleScrollTop() {
    if (isLaunching) return;

    const target = document.getElementById(targetId);
    const prefersReducedMotion = shouldReduceMotion === true;

    if (prefersReducedMotion) {
      target?.scrollIntoView({ behavior: "auto", block: "start" });
      setIsVisible(false);
      return;
    }

    setIsLaunching(true);
    setParticles(generatedParticles);

    window.setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 120);

    window.setTimeout(() => {
      setIsVisible(false);
      setIsLaunching(false);
      setParticles([]);
    }, 900);
  }

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.button
          type="button"
          title="Back to Home"
          aria-label="Voltar para o topo da página"
          className="rocket-scroll-top"
          onClick={handleScrollTop}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14, scale: 0.92 }}
          animate={
            isLaunching
              ? { opacity: [1, 1, 0], y: [0, -24, -window.innerHeight], scale: [1, 1.08, 1] }
              : { opacity: 1, y: 0, scale: 1 }
          }
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.92 }}
          whileHover={shouldReduceMotion ? undefined : { y: -7, scale: 1.08 }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
          transition={{ duration: isLaunching ? 0.7 : 0.22, ease: "easeOut" }}
        >
          {!shouldReduceMotion && particles.length > 0 ? <SmokeParticles particles={particles} /> : null}
          <img src={rocketImage} alt="" aria-hidden="true" className="rocket-scroll-top__image" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
