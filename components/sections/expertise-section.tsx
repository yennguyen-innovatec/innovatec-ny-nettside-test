import Image from "next/image";
import Link from "next/link";
import { Code2 } from "lucide-react";

import { Container } from "@/components/layout/container";
import expertiseBg from "@/public/expertise-bg.jpg";
import { expertiseIconMap } from "@/content/expertise";

type ExpertiseSectionProps = {
  title: string;
  intro: string;

  items?: {
    id: string;
    title: string;
  }[];

  cta: {
    label: string;
    href: string;
  };
};

export function ExpertiseSection({
  title,
  intro,
  items = [],
  cta,
}: ExpertiseSectionProps) {
  return (
    <section className="py-10">
      <Container>
        <h2 className="mb-8 text-center text-3xl font-medium tracking-tight text-[var(--primary)] md:mb-12 md:text-5xl">
          {title}
        </h2>

        <div className="relative overflow-hidden">
          <Image
            src={expertiseBg}
            alt="Expertise background"
            className="h-auto w-full"
            priority
          />

          <div
            className="
              mt-2
              text-[var(--foreground)]

              lg:absolute
              lg:bottom-2
              lg:right-2
              lg:z-10
              lg:w-[60%]
              lg:p-2
              lg:text-white
            "
          >
            <div
              className="
                rounded-2xl
                border
                border-white/40
                bg-gradient-to-b
                from-white/60
                to-white/30
                p-3
                text-left
                text-sm
                font-light
                leading-6
                text-black/70
                shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                backdrop-blur-lg
                md:text-base
                xl:text-xl
              "
            >
              {intro}
            </div>

            <div className="my-4 flex flex-col items-end gap-4">
              {items.map((item) => {
                /*
                 * Get shared icon by expertise id.
                 *
                 * Code2 is used as fallback so Icon can never be undefined.
                 */
                const Icon = expertiseIconMap[item.id] ?? Code2;

                return (
                  <Link
                    key={item.id}
                    href={`${cta.href}#${item.id}`}
                    scroll
                    className="
                      flex
                      min-w-[320px]
                      items-center
                      gap-4
                      rounded-4xl
                      bg-[linear-gradient(90deg,#07182d_0%,#2f67a0_100%)]
                      px-5
                      py-2
                      text-xs
                      text-white
                      shadow-md
                      transition
                      hover:translate-x-1
                      md:min-w-[420px]
                      md:px-10
                      md:py-3
                      md:text-base
                    "
                  >
                    <span
                      className="
                        flex
                        h-5
                        w-5
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
    border
    border-[#F7941D]
    p-0.5
     md:h-7
     md:p-1
                          md:w-7
                      "
                    >
                      <Icon
                        className="
                          h-3
                          w-3
                          text-[#F7941D]
                          md:h-7
                          md:w-7
                        "
                        strokeWidth={2}
                      />
                    </span>

                    <span>{item.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
