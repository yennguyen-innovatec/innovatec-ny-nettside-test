import Link from "next/link";
import { Container } from "@/components/layout/container";
import heroBg from "@/public/hero-bg.jpg";
import Image from "next/image";

type HeroSectionProps = {
  eyebrow?: string;
  title: string | [string, string];
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
};

export function HeroSection({
  title,
  description,
  primaryCta,
}: HeroSectionProps) {
  return (
    <section className="py-2 sm:pb-14 md:pb-20">
      <Container>
        <div className="relative">
          {/* IMAGE */}
          <Image
            src={heroBg}
            alt="hero background"
            className="w-full h-auto"
            priority
          />

          {/* CONTENT */}
          <div
            className="
          mt-6
          text-[var(--foreground)]
          
          md:absolute md:bottom-8 md:left-8 md:z-10 md:mt-0 md:w-[60%]
          md:text-white
          md:backdrop-blur-[1px] md:bg-black/40 md:border md:border-white/20
          md:p-8 md:rounded-xl
        "
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl leading-tight tracking-tight">
              {Array.isArray(title) ? (
                <>
                  <span className="block">{title[0]}</span>
                  <span className="block sm:text-right md:text-right">
                    {title[1]}
                  </span>
                </>
              ) : (
                title
              )}
            </h1>

            <p className="font-light mt-4 sm:mt-5 md:mt-6 sm:text-base md:text-2xl leading-6 sm:leading-7 md:leading-8 md:text-white/90">
              {description}
            </p>

            <div className="mt-5 sm:mt-6 md:mt-8">
              <Link
                href={primaryCta.href}
                className="
              inline-flex rounded-xl 
              bg-[var(--primary)] text-white
              px-4 py-2.5 text-sm
              sm:px-5 sm:py-3
              
              md:bg-white/90 md:text-[var(--primary)]
            "
              >
                {primaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
