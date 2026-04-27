import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/container";
import { projects } from "@/content/projects";
import { Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return Object.entries(projects).flatMap(([locale, localeProjects]) =>
    localeProjects.map((project) => ({
      locale,
      slug: project.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const project = projects[locale].find((item) => item.slug === slug);

  if (!project) return {};

  return {
    title: `${project.title} | Innovatec`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const project = projects[locale].find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <section className="py-10 md:py-16">
        <Container>
          <div className="mx-auto max-w-6xl">
            <Link
              href={`/${locale}/prosjekter`}
              className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-neutral-600 transition hover:text-[var(--primary)]"
            >
              <ArrowLeft size={16} />
              {locale === "no" ? "Tilbake til prosjekter" : "Back to projects"}
            </Link>

            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[var(--primary)]">
                  {project.client}
                </p>

                <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-neutral-950 md:text-6xl">
                  {project.title}
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
                  {project.description}
                </p>
              </div>

              <div className="rounded-[18px] border border-neutral-200 bg-neutral-50 p-6">
                <dl className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                  <div>
                    <dt className="text-sm text-neutral-500">
                      {locale === "no" ? "Sektor" : "Sector"}
                    </dt>
                    <dd className="mt-1 font-medium text-neutral-950">
                      {project.sector}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-sm text-neutral-500">
                      {locale === "no" ? "Periode" : "Period"}
                    </dt>
                    <dd className="mt-1 font-medium text-neutral-950">
                      {project.year}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-sm text-neutral-500">
                      {locale === "no" ? "Tjenester" : "Services"}
                    </dt>
                    <dd className="mt-3 flex flex-wrap gap-2">
                      {project.expertise.map((service) => (
                        <span
                          key={service}
                          className="rounded-full bg-white px-3 py-1 text-sm text-neutral-700 ring-1 ring-neutral-200"
                        >
                          {service}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="relative mt-12 aspect-[16/8] overflow-hidden rounded-[20px] bg-neutral-200">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16 md:pb-24">
        <Container>
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-3xl font-semibold text-[var(--primary)]">
                {locale === "no" ? "Om prosjektet" : "About the project"}
              </h2>
            </div>

            <div className="space-y-10">
              <ProjectTextBlock
                title={locale === "no" ? "Utfordring" : "Challenge"}
                text={project.challenge}
              />

              <ProjectTextBlock
                title={locale === "no" ? "Løsning" : "Solution"}
                text={project.solution}
              />

              <ProjectTextBlock
                title={locale === "no" ? "Resultat" : "Result"}
                text={project.result}
              />

              <div className="rounded-[18px] bg-neutral-50 p-6 md:p-8">
                <h3 className="text-xl font-semibold text-neutral-950">
                  {locale === "no" ? "Nøkkelpunkter" : "Key highlights"}
                </h3>

                <ul className="mt-5 space-y-4">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex gap-3 text-neutral-700">
                      <CheckCircle2
                        size={20}
                        className="mt-0.5 shrink-0 text-[var(--primary)]"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

function ProjectTextBlock({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-neutral-950">{title}</h3>
      <p className="mt-3 leading-8 text-neutral-700">{text}</p>
    </div>
  );
}
