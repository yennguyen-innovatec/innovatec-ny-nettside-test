import Link from "next/link";
import { Container } from "@/components/layout/container";
import { siteConfig, siteCopy } from "@/content/site";
import { Locale } from "@/lib/i18n";
import miljoImg from "@/public/miljo-logo.webp";
import Image from "next/image";

function LinkedInLogo() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded bg-[#0A66C2]">
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white">
        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.49 6 1.12 6 0 4.88 0 3.5 0 2.12 1.12 1 2.49 1 3.86 1 4.98 2.12 4.98 3.5ZM.21 8.25H4.77V24H.21V8.25ZM7.98 8.25H12.3V10.41H12.36C12.96 9.3 14.43 8.13 16.62 8.13 21.12 8.13 22 11.01 22 14.76V24H17.44V15.63C17.44 13.65 17.4 11.13 14.7 11.13 11.94 11.13 11.52 13.2 11.52 15.48V24H7.98V8.25Z" />
      </svg>
    </div>
  );
}
export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale];

  return (
    <footer className="mt-24 border-t border-black/10 text-md">
      <Container>
        <div className="flex justify-around py-12">
          <div>
            <Link
              href={`/${locale}/kontakt-oss`}
              className="block underline hover:text-[var(--primary)]/90 text-xl text-[var(--primary)] [font-family:var(--font-heading)] font-bold mb-5"
            >
              {copy.contactLabel}
            </Link>
            <p className="text-[var(--primary)]">{siteConfig.legalName}</p>
            <p className="text-[var(--primary)]">{siteConfig.address.street}</p>
            <p className="text-[var(--primary)]">
              {siteConfig.address.postalCode} {siteConfig.address.city}
            </p>
            <p className="mt-3 text-[var(--primary)]">
              Tlf: {siteConfig.phone}
            </p>
            <p className="my-10 text-[var(--primary)]">
              Org nr {siteConfig.organizationNumber}
            </p>
            <div className="flex items-center gap-3 text-black/80 transition hover:text-black">
              <h2>{locale === "en" ? "Follow us" : "Følg oss"}</h2>

              <a
                href="https://www.linkedin.com/company/innovatec---innovative-technologies-as"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10">
                  <LinkedInLogo />
                </div>
              </a>
            </div>
          </div>

          <div className="content-center space-y-2 underline hover:text-[var(--primary)]/90 text-xl text-[var(--primary)] [font-family:var(--font-heading)] font-bold mb-5 ">
            <a
              href={`/${locale}/personvern`}
              rel="noopener noreferrer"
              className="block hover:underline"
            >
              {copy.privacyLabel}
            </a>

            <a
              href={`/${locale}/apenhetsloven`}
              className="block hover:underline"
            >
              {copy.transparencyLabel}
            </a>
            <a href={`/${locale}/miljofyrtarn`}>
              <Image
                src={miljoImg}
                alt="Miljøfyrtårn"
                className="h-auto w-auto"
              />
            </a>
          </div>
        </div>

        <div className="text-center mb-20">
          <p className="text-sm text-black/70">
            © 2026 {siteConfig.legalName}. {copy.rights}
          </p>
        </div>
      </Container>
    </footer>
  );
}
