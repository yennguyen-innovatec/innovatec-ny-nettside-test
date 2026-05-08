import Image from "next/image";
import { Container } from "@/components/layout/container";

type ExpertiseListProps = {
  title: string;
  expertise: {
    id: string;
    title: string;
    description: string;
    image?: {
      src: string;
      alt: string;
    };
  }[];
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
          {expertise.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="scroll-mt-30 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative h-48">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6 md:p-7">
                <h3 className="text-xl font-semibold text-[var(--primary)]">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-black/70 md:text-base">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
