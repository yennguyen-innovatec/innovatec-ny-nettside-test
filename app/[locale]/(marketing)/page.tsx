import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsPreview } from "@/components/sections/projects-preview";
import { ExpertiseSection } from "@/components/sections/expertise-section";
import { CareersCta } from "@/components/sections/careers-cta";
import { ClientsLogoSection } from "@/components/sections/clients-logo-section";

import { homeContent, expertiseHomeContent } from "@/content/home";
import { clientsSectionContent } from "@/content/clients";
import { careersContent } from "@/content/careers";
import { projects } from "@/content/projects";
import { projectsPageContent } from "@/content/pages";

import { Locale } from "@/lib/i18n";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  const home = homeContent[locale];
  const expertise = expertiseHomeContent[locale];
  const clientsContent = clientsSectionContent[locale];
  const careers = careersContent[locale];
  const localeProjects = projects[locale];
  const projectsContent = projectsPageContent[locale];

  return (
    <>
      <HeroSection {...home.hero} />

      <ProjectsPreview
        title={projectsContent.title}
        intro={projectsContent.intro}
        ctaLabel={projectsContent.ctaLabel}
        ctaHref={`/${locale}/prosjekter`}
        projects={localeProjects.slice(0, 3)}
        locale={locale}
      />

      <ExpertiseSection
        title={expertise.title}
        intro={expertise.intro}
        items={expertise.items}
        cta={expertise.cta}
      />

      <ClientsLogoSection
        title={clientsContent.title}
        logos={clientsContent.logos}
      />

      <CareersCta
        title={careers.block.title}
        description={careers.block.description}
        buttonLabel={careers.block.buttonLabel}
        buttonHref={`/${locale}${careers.block.buttonHref}`}
      />
    </>
  );
}
