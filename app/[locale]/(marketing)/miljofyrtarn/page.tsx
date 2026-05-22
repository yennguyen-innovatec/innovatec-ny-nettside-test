import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { environmentContent } from "@/content/environment";
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
  const copy = environmentContent[locale];

  return {
    title: `${copy.title} | Innovatec`,
    description:
      "Innovatec er sertifisert Miljøfyrtårnsbedrift og jobber aktivt med miljø, bærekraft og samfunnsansvar.",
  };
}

export default async function EnvironmentPage({ params }: PageProps) {
  const { locale } = await params;
  const copy = environmentContent[locale];

  return (
    <main className="py-24">
      <Container>
        <section className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold text-[var(--primary)] [font-family:var(--font-heading)] md:text-5xl">
            {copy.title}
          </h1>

          <div className="space-y-6 text-lg leading-8 text-[var(--primary)]">
            {copy.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <Link
              href={copy.reportHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-md bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              {copy.reportLabel}
            </Link>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-4xl rounded-3xl bg-slate-50 p-6 md:p-10">
          <h2 className="mb-8 text-3xl font-semibold text-[var(--primary)]">
            {copy.policy.title}
          </h2>

          <div className="space-y-10 text-[var(--primary)]">
            {copy.policy.sections.map((section) => (
              <div key={section.title}>
                <h3 className="mb-3 text-xl font-semibold">{section.title}</h3>

                {section.text && (
                  <p className="text-lg leading-8">{section.text}</p>
                )}

                {section.items && (
                  <ul className="list-disc space-y-3 pl-6 text-lg leading-8">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
