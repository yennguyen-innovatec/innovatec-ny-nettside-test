import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/sections/page-hero";
import { Locale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

export const metadata: Metadata = {
  title: "EuroSTAR 2026 | Innovatec",
  description:
    "Møt Innovatec på EuroSTAR 2026 i Oslo for en prat om automatisert testing og test data management.",
};

export default async function Eurostar2026Page({ params }: PageProps) {
  const { locale } = await params;

  return (
    <>
      <PageHero
        title="EuroSTAR 2026"
        description="Møt Innovatec på Europas største konferanse for software testing."
      />

      <section className="pb-16 md:pb-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6 text-lg leading-8 text-slate-700">
              <p>
                Kom og møt oss på EuroSTAR-konferansen i Oslo 15–18 juni 2026.
                Vi tar gjerne en hyggelig prat om automatisert testing, test
                data management (TDM), kvalitetssikring og hvordan gode
                testprosesser kan bidra til mer robuste digitale løsninger.
              </p>

              <p>
                Innovatec jobber med moderne systemutvikling, integrasjoner,
                data og automatisering. På EuroSTAR ønsker vi å møte både
                kunder, samarbeidspartnere og fagpersoner som er opptatt av
                kvalitet i programvareutvikling.
              </p>

              <Link
                href={`/${locale}`}
                className="inline-flex rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Tilbake til forsiden
              </Link>
            </div>

            <aside className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold text-[var(--primary)]">
                Event details
              </h2>

              <dl className="space-y-4 text-slate-700">
                <div>
                  <dt className="font-semibold text-[var(--primary)]">Event</dt>
                  <dd>EuroSTAR 2026</dd>
                </div>

                <div>
                  <dt className="font-semibold text-[var(--primary)]">Dato</dt>
                  <dd>15–18 juni 2026</dd>
                </div>

                <div>
                  <dt className="font-semibold text-[var(--primary)]">Sted</dt>
                  <dd>Oslo</dd>
                </div>

                <div>
                  <dt className="font-semibold text-[var(--primary)]">Tema</dt>
                  <dd>Automatisert testing og test data management</dd>
                </div>
              </dl>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
