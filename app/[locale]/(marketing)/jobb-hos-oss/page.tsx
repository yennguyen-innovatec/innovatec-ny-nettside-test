import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/layout/container";
import { careersContent } from "@/content/careers";
import { Locale } from "@/lib/i18n";

import careersImg from "@/public/careers-team.jpg";
import teamImg from "@/public/team.jpg";

export default async function CareersPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const content = careersContent[locale];

  return (
    <>
      <PageHero title={content.title} description={content.description} />

      <section className="py-16">
        <Container className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">
              {content.intro.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-black/70">
              {content.intro.description}
            </p>
          </div>

          <div className="relative h-[280px] overflow-hidden rounded-[10px] bg-neutral-200 md:h-[360px]">
            <Image
              src={careersImg}
              alt={content.title}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </Container>
      </section>

      <section className="bg-neutral-50 py-16">
        <Container>
          <h2 className="mb-8 text-2xl font-semibold md:text-3xl">
            {content.valuesTitle}
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {content.values.map((value) => (
              <article
                key={value.title}
                className="rounded-[10px] bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold">{value.title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/65">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="ledige-stillinger" className="py-16">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold md:text-3xl">
              {content.positionsTitle}
            </h2>
            <p className="mt-4 text-base leading-7 text-black/70">
              {content.positionsIntro}
            </p>
          </div>

          <div className="mt-10 grid gap-6">
            {content.positions.map((position) => (
              <article
                key={position.title}
                className="rounded-[10px] border border-black/10 p-6 transition hover:border-[var(--primary)]"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{position.title}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-black/65">
                      {position.description}
                    </p>
                  </div>

                  <div className="flex shrink-0 gap-2 text-sm text-black/60">
                    <span className="rounded-full bg-neutral-100 px-3 py-1">
                      {position.location}
                    </span>
                    <span className="rounded-full bg-neutral-100 px-3 py-1">
                      {position.type}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <div className="relative h-[260px] overflow-hidden rounded-[10px] bg-neutral-200 md:h-[420px]">
            <Image
              src={teamImg}
              alt="Innovatec team"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
