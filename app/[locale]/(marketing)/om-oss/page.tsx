import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/layout/container";
import { aboutPageContent } from "@/content/pages";
import { ExpertisePageContent } from "@/content/expertise";
import { Locale } from "@/lib/i18n";

import teamImg from "@/public/om-oss.jpg";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const content = aboutPageContent[locale];
  const expertiseContent = ExpertisePageContent[locale];

  return (
    <>
      <PageHero title={content.title} description={content.description} />

      <section className="py-16">
        <Container className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">
              {content.storyTitle}
            </h2>
            <p className="mt-4 text-base leading-7 text-black/70">
              {content.storyText}
            </p>
          </div>

          <div className="relative h-[280px] overflow-hidden rounded-[10px] bg-neutral-200 md:h-[360px]">
            <Image
              src={teamImg}
              alt={content.storyTitle}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </Container>
      </section>

      <section className="bg-neutral-50 py-16">
        <Container>
          <div className="max-w-2xl">
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              {expertiseContent.expertiseTitle}
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {expertiseContent.expertise.map((service) => (
              <Link
                key={service.id}
                href={`/${locale}/hva-vi-gjor#${service.id}`}
                scroll={true}
                className="rounded-[10px] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold">{service.title}</h3>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 text-center">
        <Container>
          <h2 className="text-3xl font-semibold">{content.ctaTitle}</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-black/70">
            {content.ctaText}
          </p>

          <Link
            href={`/${locale}${content.ctaHref}`}
            className="mt-8 inline-flex rounded-md bg-[var(--primary)] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            {content.ctaLabel}
          </Link>
        </Container>
      </section>
    </>
  );
}
