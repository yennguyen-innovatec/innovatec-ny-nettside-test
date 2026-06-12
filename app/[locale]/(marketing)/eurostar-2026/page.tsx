import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/sections/page-hero";
import { eurostarPageContent } from "@/content/eurostar";
import { Locale } from "@/lib/i18n";
import Image from "next/image";
import eurostarImg from "@/public/eurostar-event.png";
type PageProps = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const content = eurostarPageContent[locale];

  return {
    title: content.metaTitle,
    description: content.metaDescription,
  };
}

export default async function Eurostar2026Page({ params }: PageProps) {
  const { locale } = await params;
  const content = eurostarPageContent[locale];

  return (
    <>
      <PageHero title={content.title} description={content.description} />

      <section className="pb-16 md:pb-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6 text-lg leading-8 text-slate-700">
              {content.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <div className="flex flex-wrap gap-4 pt-2 justify-center">
                <Link
                  href={content.buttonHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  {content.buttonLabel}
                </Link>

                <Link
                  href={`/${locale}/icaria`}
                  className="inline-flex rounded-full border border-[var(--primary)] px-6 py-3 text-sm font-semibold text-[var(--primary)] transition hover:bg-[var(--primary)] hover:text-white"
                >
                  {locale === "no" ? "Om Icaria TDM" : "About Icaria TDM"}
                </Link>
              </div>
            </div>

            <aside className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="mb-6 border-b border-slate-200">
                <div className="relative mx-auto h-20 w-56 md:h-24 md:w-64">
                  <Image
                    src={eurostarImg}
                    alt="EuroSTAR 2026"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
              {/* <h2 className="mb-4 text-xl font-semibold text-[var(--primary)]">
                {content.detailsTitle}
              </h2> */}

              <dl className="space-y-4 text-slate-700">
                {content.details.map((item) => (
                  <div key={item.label}>
                    <dt className="font-semibold text-[var(--primary)]">
                      {item.label}
                    </dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
