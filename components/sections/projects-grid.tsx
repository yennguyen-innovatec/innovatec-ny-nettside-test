import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";

type Project = {
  slug: string;
  client: string;
  title: string;
  description?: string | string[];
  image: StaticImageData;
};

type ProjectsGridProps = {
  title?: string;
  projects: Project[];
  locale: string;
};

export function ProjectsGrid({ title, projects, locale }: ProjectsGridProps) {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="mx-auto max-w-6xl">
          {title ? (
            <h2 className="mb-10 text-2xl font-semibold text-[var(--primary)] md:text-3xl">
              {title}
            </h2>
          ) : null}

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article key={project.slug} className="group">
                <Link
                  href={`/${locale}/prosjekter/${project.slug}`}
                  className="block rounded-[14px] transition hover:-translate-y-1"
                >
                  <div className="relative aspect-[1.45/1] overflow-hidden rounded-[14px] bg-neutral-200">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.04]"
                      sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>

                  <div className="pt-5">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-sm font-semibold uppercase tracking-[0.08em] text-neutral-600">
                        {project.client}
                      </p>

                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 transition group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white">
                        <ArrowUpRight size={17} />
                      </span>
                    </div>

                    <h3 className="mt-3 text-2xl font-semibold leading-tight text-neutral-900">
                      {project.title}
                    </h3>

                    {project.description ? (
                      <p className="mt-4 text-sm leading-7 text-neutral-700">
                        {project.description}
                      </p>
                    ) : null}
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
