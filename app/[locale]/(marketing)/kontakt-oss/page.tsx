import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/content/site";
import { contactPageContent } from "@/content/contact";
import { Locale } from "@/lib/i18n";
import { ContactForm } from "@/components/sections/contact-form";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const content = contactPageContent[locale];

  return (
    <>
      <PageHero title={content.title} description={content.description} />

      <section className="pb-16">
        <Container>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-2xl border border-black/10 p-8">
              <p className="font-medium">{siteConfig.legalName}</p>

              <p className="mt-4">{siteConfig.address.street}</p>
              <p>
                {siteConfig.address.postalCode} {siteConfig.address.city}
              </p>

              <p className="mt-4">
                {content.phoneLabel}: {siteConfig.phone}
              </p>

              <p>
                {content.emailLabel}: {siteConfig.email}
              </p>
            </div>

            <ContactForm locale={locale} />
          </div>
        </Container>
      </section>
    </>
  );
}
