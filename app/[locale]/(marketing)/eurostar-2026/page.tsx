import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  GitBranch,
  Sparkles,
  ClipboardCheck,
  Users,
  Search,
  PhoneCall,
  MonitorPlay,
  Rocket,
  Settings,
  Trophy,
  ArrowRight,
  ArrowDown,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/sections/page-hero";
import { eurostarEventContent } from "@/content/eurostar";
import { Locale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

const cardIcons = [
  ShieldCheck,
  GitBranch,
  Sparkles,
  ClipboardCheck,
  Users,
  Search,
];

const stepIcons = [PhoneCall, MonitorPlay, Rocket, Settings, Trophy];

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const content = eurostarEventContent[locale];

  return {
    title: `${content.title} | Innovatec`,
    description: content.description,
  };
}

export default async function Eurostar2026Page({ params }: PageProps) {
  const { locale } = await params;
  const content = eurostarEventContent[locale];

  return (
    <>
      <PageHero title={content.title} description={content.description} />

      <section className="pb-16 md:pb-24">
        <Container>
          <div className="mb-12 max-w-4xl mx-auto">
            <p className="text-lg leading-8 text-slate-700 md:text-xl">
              {content.intro}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {content.cards.map((card, index) => {
              const Icon = cardIcons[index];

              return (
                <article
                  key={card.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_24px_rgba(7,24,45,0.06)] transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(7,24,45,0.12)]"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h2 className="mb-4 text-xl font-semibold text-[var(--primary)]">
                    {card.title}
                  </h2>

                  <div className="space-y-4 text-sm leading-7 text-slate-700">
                    {card.text.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          <section className="mt-16 rounded-3xl bg-[var(--primary)] p-8 text-white md:p-10">
            <h2 className="mb-4 text-2xl font-semibold">{content.moreTitle}</h2>

            <p className=" text-lg leading-8 text-white/90">
              {content.moreText}
            </p>

            <Link
              href={`/${locale}/kontakt-oss`}
              className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--primary)] transition hover:bg-white/90"
            >
              {content.moreButtonLabel}
            </Link>
          </section>

          <section className="mt-20">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-semibold text-[var(--primary)]">
                {content.stepsTitle}
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-5">
              {content.steps.map((step, index) => {
                const Icon = stepIcons[index];
                const isLast = index === content.steps.length - 1;

                return (
                  <div key={step.title} className="relative text-center">
                    {!isLast && (
                      <ArrowRight className="absolute left-[calc(100%-12px)] top-12 hidden h-6 w-6 text-slate-400 md:block" />
                    )}

                    {!isLast && (
                      <ArrowDown className="mx-auto mb-4 h-6 w-6 text-slate-400 md:hidden" />
                    )}

                    <div className="relative mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full border border-slate-300 bg-white">
                      <div className="absolute -left-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-slate-800 text-sm font-semibold text-white">
                        {index + 1}
                      </div>

                      <Icon className="h-10 w-10 text-teal-600" />
                    </div>

                    <h3 className="mb-3 text-lg font-semibold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="text-sm leading-6 text-slate-700">
                      {step.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        </Container>
      </section>
    </>
  );
}
