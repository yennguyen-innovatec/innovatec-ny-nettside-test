import Link from "next/link";
import Image from "next/image";

import eurostarImg from "../../public/eurostar-event.png";

type EventBannerProps = {
  href: string;
  description: string;
  ctaLabel: string;
};

export function EventBanner({ href, description, ctaLabel }: EventBannerProps) {
  return (
    <section
      className="
        mt-6 md:mt-10
        overflow-hidden
        rounded-2xl
        border border-slate-200
        bg-white
        shadow-[0_4px_20px_rgba(15,23,42,0.06)]
        transition-all duration-300
        hover:shadow-[0_12px_40px_rgba(15,23,42,0.12)]
        hover:-translate-y-0.5
      "
    >
      <Link
        href={href}
        className="block transition hover:bg-slate-50"
        aria-label="EuroSTAR 2026 event"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-4 text-center md:flex-row md:items-center md:justify-between md:gap-8 md:px-6 md:py-5 md:text-left lg:px-8">
          <div className="relative h-16 w-52 shrink-0 md:h-24 md:w-72 lg:h-28 lg:w-80">
            <Image
              src={eurostarImg}
              alt="EuroSTAR 2026"
              fill
              priority
              className="object-contain"
            />
          </div>

          <div className="max-w-2xl flex-1 text-sm leading-6 text-slate-700 md:text-base">
            {description}
          </div>

          <div className="shrink-0 rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white">
            {ctaLabel}
          </div>
        </div>
      </Link>
    </section>
  );
}
