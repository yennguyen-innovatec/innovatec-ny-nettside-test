import { Locale } from "@/lib/i18n";

type SimplePage = {
  title: string;
  description: string;
};

type ExpertisePage = {
  title: string;
  description: string;
  expertiseTitle: string;
  expertise?: {
    title: string;
    description: string;
  }[];
};

type ProjectsPage = {
  sectionTitle: string;
  sectionCta?: string;
  projects?: {
    client: string;
    title: string;
    description: string;
  }[];
  ctaLabel?: string;
  title: string;
  description: string;
  longText: string;
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
    expertiseTitle: "Tjenester",
  },
  en: {
    title: "What we do",
    description:
      "We combine expertise in technology, design, and strategic business development to deliver digital products and services that help our clients achieve their ambitions, both now and in the future.",
    expertiseTitle: "Services",
  },
};

export const projectsPageContent: Record<Locale, ProjectsPage> = {
  no: {
    title: "Våre prosjekter",
    description:
      "Vi utvikler og videreutvikler samfunnskritiske digitale løsninger som gjennom automatisering forenkler komplekse prosesser, styrker samhandling og sikrer effektiv forvaltning av data og tjenester. Våre prosjekter kombinerer moderne teknologi, robust arkitektur og dyp domeneforståelse for å skape løsninger med varig verdi.",
    sectionTitle: "Prosjekter",
    ctaLabel: "Les mer",
    longText:
      "Våre prosjekter spenner fra nasjonale løsninger innen helse og utdanning til komplekse plattformer for automatisering, samhandling og datadeling. Vi utvikler og forvalter samfunnskritiske systemer som håndterer store datamengder, avansert regelverk og sikre integrasjoner på tvers av sektorer. Gjennom moderne arkitektur, regelteknologi og interoperabilitet bidrar vi til mer effektive tjenester, høyere kvalitet og tryggere forvaltning av offentlige data. Felles for prosjektene er fokus på robusthet, skalerbarhet og løsninger som skaper varig verdi for både brukere og samfunn.",
  },
  en: {
    title: "Our projects",
    description:
      "We are engaged in assignments for a range of Nordic and international organizations. The solutions and services we deliver contribute to sustainable development in sectors such as energy, industry, banking, insurance, healthcare, and the public sector.",
    sectionTitle: "Projects",
    ctaLabel: "Read more",
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
