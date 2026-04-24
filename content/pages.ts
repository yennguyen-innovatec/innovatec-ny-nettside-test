import { Locale } from "@/lib/i18n";

type SimplePage = {
  title: string;
  description: string;
};

type ExpertisePage = SimplePage & {
  servicesTitle: string;
  services: {
    title: string;
    description: string;
  }[];
};

type ProjectsPage = SimplePage & {
  sectionTitle: string;
  sectionCta?: string;
  projects: {
    client: string;
    title: string;
    description: string;
  }[];
};

type CareersPage = SimplePage & {
  blocks: string[];
};

type ContactPage = SimplePage & {
  companyLabel: string;
  phoneLabel: string;
  emailLabel: string;
};
type AboutPage = {
  title: string;
  description: string;

  storyTitle: string;
  storyText: string;

  servicesTitle: string;
  services: string[];

  ctaTitle: string;
  ctaText: string;
  ctaLabel: string;
  ctaHref: string;
};
export const aboutPageContent: Record<Locale, AboutPage> = {
  no: {
    title: "Om oss",
    description:
      "Innovatec er et teknologiselskap som hjelper virksomheter med digitale løsninger, rådgivning og utvikling av moderne systemer.",

    storyTitle: "Hvem vi er",
    storyText:
      "Innovatec kombinerer ekspertise innen teknologi, design og strategisk forretningsutvikling for å levere løsninger som skaper verdi. Vi jobber tett med kundene våre for å forstå behov og bygge løsninger som varer over tid.",

    ctaTitle: "Vil du jobbe med oss?",
    ctaText: "Vi er alltid på utkikk etter dyktige folk.",
    ctaLabel: "Se stillinger",
    ctaHref: "/jobb-hos-oss",
  },

  en: {
    title: "About us",
    description:
      "Innovatec is a technology company that helps organizations with digital solutions, consulting, and development of modern systems.",

    storyTitle: "Who we are",
    storyText:
      "Innovatec combines expertise in technology, design, and strategic business development to deliver solutions that create value. We work closely with our clients to understand their needs and build solutions that last.",

    ctaTitle: "Want to work with us?",
    ctaText: "We are always looking for talented people.",
    ctaLabel: "Open positions",
    ctaHref: "/jobb-hos-oss",
  },
};

export const ExpertisePageContent: Record<Locale, ExpertisePage> = {
  no: {
    title: "Hva vi gjør",
    description:
      "Vi kombinerer vår ekspertise innen teknologi, design og strategisk forretningsutvikling for å levere digitale produkter og tjenester som hjelper kundene med å nå ambisjonene sine, både nå og i fremtiden.",
    servicesTitle: "Tjenester",
  },
  en: {
    title: "What we do",
    description:
      "We combine expertise in technology, design, and strategic business development to deliver digital products and services that help our clients achieve their ambitions, both now and in the future.",
    servicesTitle: "Services",
  },
};

export const projectsPageContent: Record<Locale, ProjectsPage> = {
  no: {
    title: "Våre prosjekter",
    description:
      "Vi er engasjert i oppdrag for en rekke nordiske og internasjonale organisasjoner. Løsningene og tjenestene vi leverer bidrar til bærekraftig utvikling i sektorer som energi, industri, bank, forsikring, helse og offentlig sektor.",
    sectionTitle: "Prosjekter",
    sectionCta: "Flere prosjekter",
  },
  en: {
    title: "Our projects",
    description:
      "We are engaged in assignments for a range of Nordic and international organizations. The solutions and services we deliver contribute to sustainable development in sectors such as energy, industry, banking, insurance, healthcare, and the public sector.",
    sectionTitle: "Projects",
    sectionCta: "More projects",
  },
};

export const careersPageContent: Record<Locale, CareersPage> = {
  no: {
    title: "Jobb hos oss",
    description: "Ønsker du nye utfordringer i et proaktivt konsulentmiljø?",
    blocks: ["Ledige stillinger", "Våre verdier", "Møt folka våre"],
  },
  en: {
    title: "Careers",
    description:
      "Are you looking for new challenges in a proactive consulting environment?",
    blocks: ["Open positions", "Our values", "Meet our people"],
  },
};

export const contactPageContent: Record<Locale, ContactPage> = {
  no: {
    title: "Kontakt oss",
    description:
      "Ta gjerne kontakt dersom du ønsker å vite mer om Innovatec og hvordan vi kan bidra.",
    companyLabel: "Selskap",
    phoneLabel: "Telefon",
    emailLabel: "E-post",
  },
  en: {
    title: "Contact us",
    description:
      "Feel free to get in touch if you want to learn more about Innovatec and how we can help.",
    companyLabel: "Company",
    phoneLabel: "Phone",
    emailLabel: "Email",
  },
};
