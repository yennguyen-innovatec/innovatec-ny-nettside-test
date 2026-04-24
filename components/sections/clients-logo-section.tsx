"use client";

import Image, { StaticImageData } from "next/image";
import { Container } from "@/components/layout/container";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type ClientLogo = {
  id: string;
  name: string;
  src?: StaticImageData | string;
  svg?: React.ReactNode;
};

type ClientsLogoSectionProps = {
  title?: string;
  logos: ClientLogo[];
};

export function ClientsLogoSection({
  title = "Noen av våre kunder",
  logos,
}: ClientsLogoSectionProps) {
  const [visibleSlides, setVisibleSlides] = useState(3);
  const [index, setIndex] = useState(0);

  // responsive
  useEffect(() => {
    const updateVisibleSlides = () => {
      if (window.innerWidth >= 1024) {
        setVisibleSlides(3);
      } else if (window.innerWidth >= 768) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(1);
      }
    };

    updateVisibleSlides();
    window.addEventListener("resize", updateVisibleSlides);
    return () => window.removeEventListener("resize", updateVisibleSlides);
  }, []);

  const maxIndex = Math.max(0, logos.length - visibleSlides);

  useEffect(() => {
    if (index > maxIndex) {
      setIndex(maxIndex);
    }
  }, [index, maxIndex]);

  const canGoPrev = index > 0;
  const canGoNext = index < maxIndex;

  const handlePrev = () => {
    if (canGoPrev) setIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (canGoNext) setIndex((prev) => prev + 1);
  };

  const slideWidth = useMemo(() => 100 / visibleSlides, [visibleSlides]);

  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="rounded-3xl bg-white px-4 py-10 md:px-8 md:py-12">
          {/* Title */}
          <h2 className="mb-8 text-center text-3xl font-medium tracking-tight text-[var(--primary)] md:mb-12 md:text-5xl">
            {title}
          </h2>

          {/* Carousel */}
          <div className="mt-10 flex items-center justify-center gap-3 md:mt-12 md:gap-6">
            {/* Prev */}
            <button
              type="button"
              onClick={handlePrev}
              disabled={!canGoPrev}
              aria-label="Previous logos"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-[var(--primary)] transition hover:bg-white/60 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            {/* Track */}
            <div className="w-full max-w-5xl overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{
                  transform: `translateX(-${index * slideWidth}%)`,
                }}
              >
                {logos.map((logo) => (
                  <div
                    key={logo.id}
                    className="shrink-0"
                    style={{ width: `${slideWidth}%` }}
                  >
                    <div className="flex h-24 w-full items-center justify-center px-6 md:h-28 md:px-10">
                      {/* Normalize logo size */}
                      <div className="relative h-12 w-full md:h-14 lg:h-16 flex items-center justify-center">
                        {logo.svg ? (
                          <div className="h-full w-auto text-black">
                            {logo.svg}
                          </div>
                        ) : (
                          <Image
                            src={logo.src!}
                            alt={logo.name}
                            fill
                            className="object-contain"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next */}
            <button
              type="button"
              onClick={handleNext}
              disabled={!canGoNext}
              aria-label="Next logos"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-[var(--primary)] transition hover:bg-white/60 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
