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
      {/* <PageHero title={content.title} description={content.description} /> */}

      <section className="py-16">
        <Container className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-semibold md:text-5xl">
              {content.storyTitle}
            </h1>
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
      <section className="py-16 mx-auto">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl text-center">
              {content.historyTitle}
            </h2>

            <p className="mt-6 text-base leading-7 text-black/70 md:text-lg md:leading-8">
              {content.historyText}
            </p>
          </div>
        </Container>
      </section>
      <section className="bg-neutral-50 py-16">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl text-center">
              {expertiseContent.expertiseTitle}
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {expertiseContent.expertise.map((service) => (
              <Link
                key={service.id}
                href={`/${locale}/hva-vi-gjor#${service.id}`}
                scroll
                className="
        flex min-w-[320px] md:min-w-[420px]
        items-center
        rounded-4xl
        px-5 py-2 md:px-10 md:py-3
        text-xs md:text-base text-white
        shadow-md transition
        bg-[linear-gradient(90deg,#07182d_0%,#2f67a0_100%)]
        hover:translate-x-1
        justify-center
        justify-self-center
      "
              >
                <span>{service.title}</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl text-center">
              {content.deliveryTitle}
            </h2>

            <p className="mt-6 text-base leading-7 text-black/70">
              {content.deliveryText}
            </p>

            <div className="mt-8 space-y-4">
              {content.deliveryModels.map((item) => (
                <div
                  key={item}
                  className="rounded-[10px] border border-black/10 bg-white p-5 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>

            <p className="mt-8 text-base leading-7 text-black/70">
              {content.deliveryFooter}
            </p>

            <div className="mt-8 text-center">
              <p className="font-medium">{content.deliveryCta}</p>

              <Link
                href={`/${locale}/kontakt-oss`}
                className="mt-4 inline-flex rounded-md bg-[var(--primary)] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                {locale === "no" ? "Kontakt" : "Contact"}
              </Link>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-neutral-50 py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl text-center">
              {content.sustainabilityTitle}
            </h2>

            <p className="mt-6 text-base leading-7 text-black/70 md:text-lg md:leading-8">
              {content.sustainabilityText}
            </p>
          </div>
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl text-center">
              {content.partnersTitle}
            </h2>

            <p className="mt-6 text-base leading-7 text-black/70 md:text-lg md:leading-8">
              {content.partnersIntro}
            </p>

            <div className="mt-10 space-y-6">
              {content.partners.map((partner) => (
                <article
                  key={partner.image.alt}
                  className="rounded-[10px] border border-black/10 bg-white p-6 shadow-sm"
                >
                  <Image
                    src={partner.image.src}
                    alt={partner.image.alt}
                    className="mb-6 h-12 w-auto max-w-[200px] object-contain"
                  />

                  <p className="text-base leading-7 text-black/70">
                    {partner.description}
                  </p>

                  {partner.areas && (
                    <div className="mt-6 grid gap-4 md:grid-cols-3">
                      {partner.areas.map((area) => (
                        <div
                          key={area.title}
                          className="rounded-[10px] bg-neutral-50 p-4"
                        >
                          <h3 className="text-sm font-semibold">
                            {area.title}
                          </h3>
                          <p className="mt-2 text-sm leading-6 text-black/70">
                            {area.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
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
