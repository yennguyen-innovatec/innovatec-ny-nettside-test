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
            style={{ transform: "scaleX(-1)" }}
            priority
          />

          <div
            className="
          mt-8
          text-[var(--foreground)]
          
          md:absolute md:bottom-8 md:right-8 md:z-10 md:w-[60%]
          md:text-white
          md:p-8 
        "
          >
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
                      scroll={true}
                      className="
                      flex  min-w-[320px] md:min-w-[420px] items-center gap-4 rounded-4xl px-5 py-2 md:px-10 md:py-3
          text-xs md:text-base text-white shadow-md transition
          bg-[linear-gradient(90deg,#07182d_0%,#2f67a0_100%)]
          hover:translate-x-1
        "
                    >
                      <span className="flex h-5 w-5 md:h-7 md:w-7 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10">
                      <Icon className="h-3 w-3 md:h-4 md:w-4" strokeWidth={2} />
                      </span>

                      <span>{item.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
