import { Container } from "@/components/layout/container";

type ExpertiseListProps = {
  title: string;
  expertise: {
    id: string;
    title: string;
    description: string;
  }[];
};

export function ExpertiseList({ title, expertise }: ExpertiseListProps) {
  return (
    <section className="pb-16 md:pb-24">
      <Container>
        <div className="max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold tracking-tight text-[var(--primary)] md:text-3xl">
            {title}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {expertise.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="scroll-mt-30 rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-[var(--primary)]">
                {service.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-black/70 md:text-base">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
