import { PageHero } from "@/components/sections/page-hero";
import { ExpertiseList } from "@/components/sections/service-list";
import { ExpertisePageContent } from "@/content/expertise";
import { Locale } from "@/lib/i18n";

export default async function ExpertisePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const content = ExpertisePageContent[locale];

  return (
    <>
      <PageHero title={content.title} description={content.description} />
      <ExpertiseList
        title={content.expertiseTitle}
        expertise={content.expertise}
      />
    </>
  );
}
