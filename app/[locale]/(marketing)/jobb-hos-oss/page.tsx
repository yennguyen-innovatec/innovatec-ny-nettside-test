import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/layout/container";
import { careersContent } from "@/content/careers";
import { Locale } from "@/lib/i18n";

import careersImg from "@/public/careers-team.jpg";
import teamImg from "@/public/jobb-hos-oss.jpg";

export default async function CareersPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const content = careersContent[locale];

  return (
    <>
      <section className="py-16 md:py-20 scroll-mt-32">
        <Container className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="mx-auto max-w-3xl py-14">
              <h1 className="text-4xl font-semibold md:text-5xl">
                {content.title}
              </h1>
              <p className="mt-5 text-lg leading-8 text-black/75">
                {content.description}
              </p>
            </div>{" "}
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

          <div className="grid gap-6 md:grid-cols-4">
            {content.values.map((value) => (
              <article
                key={value.title}
                className="rounded-[10px] bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="mt-3 text-md leading-6 text-black/65">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="ledige-stillinger" className="scroll-mt-32 py-16">
        <Container>
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">
              {content.positionsTitle}
            </h2>
            <p className="mt-5 text-base leading-7 text-black/70 max-w-5xl mx-auto">
              {locale === "no" ? (
                <>
                  Takk for din interesse for å se på muligheter hos Innovatec.
                  Vi går gjennom alle søknader manuelt og vi gir alltid en
                  tilbakemelding på mottatte søknader. Søknad med CV sendes på
                  e-post til{" "}
                  <a
                    href="mailto:info@innovatec.net"
                    className="font-medium text-[var(--primary)] underline"
                  >
                    info@innovatec.net
                  </a>
                  . Ikke bruk mye tid eller tokens på et langt søknadsbrev, men
                  del gjerne om det er noe du vil vise oss, det kan være en
                  artikkel du har skrevet, en video, et prosjekt du har gjort
                  eller noe annet du brenner for.
                </>
              ) : (
                <>
                  Thank you for your interest in opportunities at Innovatec. We
                  review all applications manually and always provide feedback
                  on received applications. Applications with a CV should be
                  sent by email to{" "}
                  <a
                    href="mailto:jobb@innovatec.net"
                    className="font-medium text-[var(--primary)] underline"
                  >
                    jobb@innovatec.net
                  </a>
                  . Please do not spend too much time or tokens on a long cover
                  letter, but feel free to share something you would like us to
                  see, such as an article you have written, a video, a project
                  you have worked on, or anything else you are passionate about.
                </>
              )}
            </p>
          </div>

          <div className="mt-10 grid gap-6">
            {content.positions.map((position) => (
              <article
                key={position.title}
                className="rounded-[10px] border border-black/10 bg-white p-6 transition hover:border-[var(--primary)]"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{position.title}</h3>

                    <p className="mt-3 max-w-3xl text-sm leading-6 text-black/65">
                      {position.description}
                    </p>
                  </div>

                  <div className="flex shrink-0 flex-wrap gap-2 text-sm text-black/60 md:justify-end">
                    <span className="rounded-full bg-neutral-100 px-3 py-1">
                      {position.location}
                    </span>
                    <span className="rounded-full bg-neutral-100 px-3 py-1">
                      {position.type}
                    </span>
                    <span className="rounded-full bg-neutral-100 px-3 py-1">
                      {position.language}
                    </span>
                  </div>
                </div>

                <details className="group mt-6">
                  <summary className="flex cursor-pointer list-none items-center gap-2 text-sm font-medium text-[var(--primary)]">
                    <span className="group-open:hidden">
                      {locale === "no" ? "Les mer" : "Read more"}
                    </span>

                    <span className="hidden group-open:inline">
                      {locale === "no" ? "Les mindre" : "Read less"}
                    </span>

                    <span className="transition-transform duration-200 group-open:rotate-180">
                      ↓
                    </span>
                  </summary>

                  <div className="mt-6 border-t border-black/10 pt-6">
                    <div className="grid gap-3 text-sm text-black/70 md:grid-cols-4">
                      <div>
                        <span className="font-medium text-black">
                          Søknadsfrist
                        </span>
                        <p className="mt-1">{position.deadline}</p>
                      </div>

                      <div>
                        <span className="font-medium text-black">
                          {locale === "no" ? "Sted" : "Location"}
                        </span>
                        <p className="mt-1">{position.location}</p>
                      </div>

                      <div>
                        <span className="font-medium text-black">
                          {locale === "no"
                            ? "Ansettelsesform"
                            : "Employment type"}
                        </span>
                        <p className="mt-1">{position.type}</p>
                      </div>

                      <div>
                        <span className="font-medium text-black">
                          {locale === "no" ? "Stillingsfunksjon" : "Function"}
                        </span>
                        <p className="mt-1">{position.function}</p>
                      </div>
                    </div>

                    <div className="mt-8 grid gap-8 md:grid-cols-2">
                      <div>
                        <h4 className="font-semibold">
                          {locale === "no"
                            ? "Arbeidsoppgaver"
                            : "Responsibilities"}
                        </h4>

                        <ul className="mt-4 space-y-2 text-sm leading-6 text-black/70">
                          {position.tasks.map((task) => (
                            <li key={task} className="flex gap-2">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
                              <span>{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold">
                          {locale === "no"
                            ? "Kvalifikasjoner"
                            : "Qualifications"}
                        </h4>

                        <ul className="mt-4 space-y-2 text-sm leading-6 text-black/70">
                          {position.qualifications.map((qualification) => (
                            <li key={qualification} className="flex gap-2">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
                              <span>{qualification}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8">
                      <h4 className="font-semibold">
                        {locale === "no" ? "Nøkkelkompetanse" : "Key skills"}
                      </h4>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {position.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full bg-neutral-100 px-3 py-1 text-sm text-black/70"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </details>
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
