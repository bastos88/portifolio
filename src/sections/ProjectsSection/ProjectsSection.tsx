import {
  useEffect,
  type PointerEvent,
  useRef,
  useState,
  type TransitionEvent,
} from "react";
import PixelPanel from "../../components/portfolio/PixelPanel/PixelPanel";
import PixelSectionTitle from "../../components/portfolio/PixelSectionTitle/PixelSectionTitle";
import ProjectStageCard from "../../components/portfolio/ProjectStageCard/ProjectStageCard";
import IconButton from "../../components/ui/buttons/IconButton/IconButton";
import { projects } from "../../data/projects";
import { cn } from "../../lib/cn";
import styles from "./ProjectsSection.module.css";

type Direction = "previous" | "next";

const loopedProjects = [...projects, ...projects, ...projects];
const firstRealProjectIndex = projects.length;
const lastProjectBeforeReset = projects.length * 2 - 1;
const firstProjectBeforeReset = projects.length * 2;

export default function ProjectsSection() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const pointerStartRef = useRef<{ x: number; y: number } | null>(null);

  const [currentIndex, setCurrentIndex] = useState(firstRealProjectIndex);
  const [slideStep, setSlideStep] = useState(0);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const viewport = viewportRef.current;

    if (viewport === null) return;

    const viewportElement = viewport;

    function updateSlideStep() {
      const track = viewportElement.querySelector<HTMLElement>(
        "[data-carousel-track]",
      );

      const firstSlide = viewportElement.querySelector<HTMLElement>(
        "[data-carousel-slide]",
      );

      if (!track || !firstSlide) return;

      const gap = Number.parseFloat(window.getComputedStyle(track).gap) || 24;
      const width = firstSlide.getBoundingClientRect().width;

      setSlideStep(width + gap);
    }

    const resizeObserver = new ResizeObserver(updateSlideStep);

    resizeObserver.observe(viewportElement);
    updateSlideStep();

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  function moveCarousel(direction: Direction) {
    if (isMoving || slideStep === 0) return;

    setIsMoving(true);
    setIsTransitionEnabled(true);

    setCurrentIndex((current) =>
      direction === "next" ? current + 1 : current - 1,
    );
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse") return;

    pointerStartRef.current = {
      x: event.clientX,
      y: event.clientY,
    };
  }

  function handlePointerUp(event: PointerEvent<HTMLDivElement>) {
    const start = pointerStartRef.current;
    pointerStartRef.current = null;

    if (start === null) return;

    const deltaX = event.clientX - start.x;
    const deltaY = event.clientY - start.y;

    if (Math.abs(deltaX) < 40 || Math.abs(deltaX) < Math.abs(deltaY)) {
      return;
    }

    moveCarousel(deltaX < 0 ? "next" : "previous");
  }

  function handleTransitionEnd(event: TransitionEvent<HTMLDivElement>) {
    if (
      event.target !== event.currentTarget ||
      event.propertyName !== "transform"
    ) {
      return;
    }

    let resetIndex: number | null = null;

    // Reached the first card of the third copy: 01 -> 02 -> 03...
    if (currentIndex === firstProjectBeforeReset) {
      resetIndex = firstRealProjectIndex;
    }

    // Reached the last card of the first copy: 04 <- 03 <- 02...
    if (currentIndex === projects.length - 1) {
      resetIndex = lastProjectBeforeReset;
    }

    if (resetIndex === null) {
      setIsMoving(false);
      return;
    }

    // Reposition without animation to the matching center copy.
    setIsTransitionEnabled(false);
    setCurrentIndex(resetIndex);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsTransitionEnabled(true);
        setIsMoving(false);
      });
    });
  }

  return (
    <PixelPanel id="projects">
      <PixelSectionTitle
        number="03"
        title="Select Project"
        aside="Choose your next adventure"
      />

      <div className="relative">
        <IconButton
          onClick={() => moveCarousel("previous")}
          aria-label="Ver projeto anterior"
          disabled={isMoving || slideStep === 0}
          className="absolute left-1 top-24 z-10 h-10 w-10 -translate-y-1/2 text-xl xl:left-[-42px] xl:top-1/2 xl:h-auto xl:w-auto xl:px-3 xl:py-2 xl:text-2xl"
        >
          &lsaquo;
        </IconButton>

        <div
          ref={viewportRef}
          className={cn(styles.viewport, "mx-auto max-w-[285px] overflow-hidden sm:max-w-none")}
          style={{ touchAction: "pan-y" }}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={() => {
            pointerStartRef.current = null;
          }}
        >
          <div
            data-carousel-track
            onTransitionEnd={handleTransitionEnd}
            className="flex gap-6"
            style={{
              transform: `translateX(-${currentIndex * slideStep}px)`,
              transition: isTransitionEnabled
                ? "transform 450ms ease-in-out"
                : "none",
            }}
          >
            {loopedProjects.map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                data-carousel-slide
                className="w-full flex-none sm:w-[calc((100%_-_1.5rem)/2)] lg:w-[calc((100%_-_3rem)/3)]"
              >
                <ProjectStageCard project={project} />
              </div>
            ))}
          </div>
        </div>

        <IconButton
          onClick={() => moveCarousel("next")}
          aria-label="Ver próximo projeto"
          disabled={isMoving || slideStep === 0}
          className="absolute right-1 top-24 z-10 h-10 w-10 -translate-y-1/2 text-xl xl:right-[-42px] xl:top-1/2 xl:h-auto xl:w-auto xl:px-3 xl:py-2 xl:text-2xl"
        >
          &rsaquo;
        </IconButton>
      </div>
    </PixelPanel>
  );
}
