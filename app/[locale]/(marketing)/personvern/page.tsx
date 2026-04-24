import { Container } from "@/components/layout/container";
import { Locale } from "@/lib/i18n";
import { privacyContent } from "@/content/privacy";

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const content = privacyContent[locale];

  return (
    <section className="py-20">
      <Container className="max-w-3xl space-y-8">
        <h1 className="text-4xl font-bold">{content.title}</h1>

        {content.sections.map((section, index) => (
          <div key={index} className="space-y-2">
            <h2 className="text-2xl font-semibold">{section.title}</h2>
            <p>{section.text}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
