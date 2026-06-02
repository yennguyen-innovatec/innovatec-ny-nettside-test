import { Locale } from "@/lib/i18n";

export function getNavigation(locale: Locale) {
  if (locale === "en") {
    return [
      { label: "About us", href: "/en/om-oss" },
      { label: "What we do", href: "/en/hva-vi-gjor" },
      { label: "Projects", href: "/en/prosjekter" },
      { label: "Careers", href: "/en/jobb-hos-oss" },
      { label: "Contact", href: "/en/kontakt-oss" },
    ];
  }

  return [
    { label: "Om oss", href: "/no/om-oss" },
    { label: "Hva vi gjør", href: "/no/hva-vi-gjor" },
    { label: "Prosjekter", href: "/no/prosjekter" },
    { label: "Jobb hos oss", href: "/no/jobb-hos-oss" },
    { label: "Kontakt", href: "/no/kontakt-oss" },
  ];
}
