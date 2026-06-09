import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";

type Project = {
  slug: string;
  client: string;
  title: string;
  description?: string | string[];
  image: StaticImageData;
};

type ProjectsPreviewProps = {
  title: string;
  intro?: string;
  ctaLabel?: string;
  ctaHref?: string;
  projects: Project[];
  locale: string;
};

function ProjectCard({
  project,
  locale,
  featured = false,
}: {
  project: Project;
  locale: string;
  featured?: boolean;
}) {
  return (
    <article className="group">
      <Link href={`/${locale}/prosjekter/${project.slug}`} className="block">
        <div
          className={`relative overflow-hidden rounded-[10px] bg-neutral-200 ${
            featured ? "aspect-[1.35/1]" : "aspect-[1.6/1]"
          }`}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
            sizes={
              featured
                ? "(min-width: 768px) 66vw, 100vw"
                : "(min-width: 768px) 33vw, 100vw"
            }
          />
        </div>

        <div className={featured ? "pt-4" : "pt-3"}>
          <p className="text-[15px] font-semibold uppercase tracking-[0.02em] text-neutral-800">
            {project.client}
          </p>

          <h3
            className={`mt-1 font-semibold leading-[1.15] text-neutral-900 ${
              featured ? "text-[clamp(1.5rem,2vw,2rem)]" : "text-[1.75rem]"
            }`}
          >
            {project.title}
          </h3>

          {featured && project.description ? (
            <p className="mt-8 max-w-[92%] text-base font-light leading-8 text-neutral-700 md:text-xl">
              {project.description}
            </p>
          ) : null}
        </div>
      </Link>
    </article>
  );
}

export function ProjectsPreview({
  title,
  intro,
  ctaLabel,
  ctaHref = "/prosjekter",
  projects,
  locale,
}: ProjectsPreviewProps) {
  const [featuredProject, sideTopProject, sideBottomProject] = projects;

  if (!featuredProject || !sideTopProject || !sideBottomProject) {
    return null;
  }

  return (
    <section className="bg-[#f5f5f5] py-20 md:py-24">
      <Container>
        <div className="mx-auto max-w-[1160px]">
          <h2 className="mb-8 text-center text-3xl font-medium tracking-tight text-[var(--primary)] md:mb-12 md:text-5xl">
            {title}
          </h2>

          {intro ? (
            <p className="mx-auto max-w-4xl text-center text-lg leading-8 text-neutral-700">
              {intro}
            </p>
          ) : null}

          <div className="mt-14 grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)] md:items-start">
            <ProjectCard project={featuredProject} locale={locale} featured />

            <div className="grid gap-8">
              <ProjectCard project={sideTopProject} locale={locale} />
              <ProjectCard project={sideBottomProject} locale={locale} />
            </div>
          </div>

          <div className="mt-14 flex justify-center">
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center rounded-md bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
