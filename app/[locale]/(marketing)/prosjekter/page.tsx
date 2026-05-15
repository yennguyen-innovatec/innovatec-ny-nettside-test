import { PageHero } from "@/components/sections/page-hero";
import { ProjectsGrid } from "@/components/sections/projects-grid";
import { projectsPageContent } from "@/content/pages";
import { projects } from "@/content/projects";
import { Locale } from "@/lib/i18n";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const content = projectsPageContent[locale];

  return (
    <>
      <PageHero title={content.title} description={content.longText} />
      <ProjectsGrid locale={locale} projects={projects[locale]} />
    </>
  );
}
