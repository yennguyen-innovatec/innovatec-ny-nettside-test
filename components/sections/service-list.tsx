import Image from "next/image";
import { Container } from "@/components/layout/container";
import expertiseBg from "@/public/expertise-bg.jpg";
import { Code2, Brain, Workflow, CheckCircle, ShieldCheck } from "lucide-react";

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

const iconMap = {
  "arkitektur-og-systemutvikling": Code2,
  "kunstig-intelligens-og-data": Brain,
  "automatisering-av-forretningsprosesser": Workflow,
  "kvalitetssikring-og-test": CheckCircle,
  "teknisk-due-diligence": ShieldCheck,
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
            const Icon = iconMap[service.id as keyof typeof iconMap] ?? Code2;

            return (
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-30 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
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
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[var(--primary)] text-white shadow-sm">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </span>

                    <h3 className="text-xl font-semibold leading-snug text-[var(--primary)] self-center">
                      {service.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-black/70 md:text-base">
                    {service.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
