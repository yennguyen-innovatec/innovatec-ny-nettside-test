import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { siteCopy } from "@/content/site";
import { Locale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{
    locale: Locale;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;

  const copy = siteCopy[locale].transparencyPage;

  return {
    title: `${copy.title} | Innovatec`,
    description: copy.description,
  };
}

export default async function ApenhetslovenPage({ params }: PageProps) {
  const { locale } = await params;

  const copy = siteCopy[locale].transparencyPage;

  return (
    <main className="py-24">
      <Container>
        <section className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-semibold md:text-5xl mb-10">
            {copy.title}
          </h1>

          <div className="space-y-6 text-lg leading-8 text-[var(--primary)]">
            <p>{copy.body}</p>

            <p>
              {copy.readMorePrefix}{" "}
              <a
                href="https://lovdata.no/dokument/NL/lov/2021-06-18-99"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[var(--primary)]/80"
              >
                {copy.lovdataLabel}
              </a>
              .
            </p>
          </div>
        </section>
      </Container>
    </main>
  );
}
