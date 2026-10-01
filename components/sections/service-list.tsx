import Image from "next/image";
import { Code2 } from "lucide-react";

import { Container } from "@/components/layout/container";
import expertiseBg from "@/public/expertise-bg.jpg";

import { expertiseIconMap, type ExpertiseItem } from "@/content/expertise";

type ExpertiseListProps = {
  title: string;
  expertise: ExpertiseItem[];
};

export function ExpertiseList({ title, expertise }: ExpertiseListProps) {
  return (
    <section className="pb-16 md:pb-24">
      <Container>
        <div className="mb-8 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--primary)] md:text-3xl">
            {title}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {expertise.map((service) => {
            /*
             * Shared icon based on expertise id.
             *
             * Code2 fallback prevents React from trying
             * to render an undefined component.
             */
            const Icon = expertiseIconMap[service.id] ?? Code2;

            return (
              <article
                key={service.id}
                id={service.id}
                className="
                  scroll-mt-30
                  overflow-hidden
                  rounded-2xl
                  border
                  border-black/10
                  bg-white
                  shadow-sm
                  transition
                  hover:-translate-y-0.5
                  hover:shadow-md
                "
              >
                <div className="relative h-48">
                  <Image
                    src={service.image?.src ?? expertiseBg}
                    alt={service.image?.alt ?? service.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-6 md:p-7">
                  <div className="mb-4 flex items-start gap-4">
                    <span
                      className="
                        mt-0.5
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#002B55]
                        shadow-sm
                      "
                    >
                      <Icon
                        className="h-5 w-5 text-[#F7941D]"
                        strokeWidth={2}
                      />
                    </span>

                    <h3 className="self-center text-xl font-semibold leading-snug text-[var(--primary)]">
                      {service.title}
                    </h3>
                  </div>

                  {Array.isArray(service.description) ? (
                    <div className="space-y-4">
                      {service.description.map((paragraph, index) => (
                        <p key={`${service.id}-${index}`}>{paragraph}</p>
                      ))}
                    </div>
                  ) : (
                    <p>{service.description}</p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
