import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import expertiseBg from "@/public/expertise-bg.jpg";
import { Code2, Brain, Workflow, CheckCircle, ShieldCheck } from "lucide-react";

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

const iconMap = {
  "arkitektur-og-systemutvikling": Code2,
  "kunstig-intelligens-og-data": Brain,
  "automatisering-av-forretningsprosesser": Workflow,
  "kvalitetssikring-og-test": CheckCircle,
  "teknisk-due-diligence": ShieldCheck,

  "architecture-and-system-development": Code2,
  "ai-and-data": Brain,
  "business-process-automation": Workflow,
  "quality-assurance-and-testing": CheckCircle,
  "technical-due-diligence": ShieldCheck,
};

export function ExpertiseSection({
  title,
  intro,
  items = [],
  cta,
}: ExpertiseSectionProps) {
  return (
    <section className="py-12 md:py-20">
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

          <div className="mt-3 space-y-2 xl:absolute xl:right-[5%] xl:top-[8%] xl:mt-0 xl:w-[48%]">
            <div
              className="
                rounded-2xl
                bg-gradient-to-b from-white/60 to-white/30
                backdrop-blur-lg
                border border-white/40
                shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                text-left text-sm font-light leading-6 text-black/70
                md:text-base p-3
                xl:text-xl
              "
            >
              {intro}
            </div>

            <div className="my-8 flex flex-col items-start gap-4">
              {items.map((item) => {
                const Icon = iconMap[item.id as keyof typeof iconMap] ?? Code2;

                return (
                  <Link
                    key={item.id}
                    href={`${cta.href}#${item.id}`}
                    className="
                      inline-flex items-center gap-4 rounded-4xl px-10 py-3
                      text-sm text-white shadow-md transition
                      bg-[linear-gradient(90deg,#07182d_0%,#2f67a0_100%)]
                      hover:translate-x-1
                    "
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10">
                      <Icon className="h-4 w-4" strokeWidth={2} />
                    </span>

                    <span>{item.title}</span>
                  </Link>
                );
              })}
            </div>

            <div className="flex justify-end">
              <Link
                href={cta.href}
                className="
                  inline-flex rounded-xl
                  bg-[var(--primary)] px-4 py-2.5 text-sm text-white
                  sm:px-5 sm:py-3
                  lg:bg-white/90 lg:text-[var(--primary)]
                "
              >
                {cta.label}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
