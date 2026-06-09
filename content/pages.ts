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
      "Innovatec er et konsulenthus med engasjerte spesialister som utvikler og moderniserer komplekse softwaresystemer i samfunnskritiske virksomheter. Dette gjør vi ved hjelp av en kombinasjon av lang erfaring og moderne teknologi.",
    ctaTitle: "Vil du jobbe med oss?",
    ctaText:
      "Det er menneskene hos oss som gjør forskjellen. I Innovatec møter du et inkluderende arbeidsmiljø preget av nysgjerrighet, samarbeid og et sterkt engasjement for teknologi og utvikling.",
    ctaLabel: "Ledig stillinger",
    ctaHref: "/jobb-hos-oss",
  },

  en: {
    title: "About us",
    description:
      "Innovatec is a technology company that helps organizations with digital solutions, consulting, and development of modern systems.",

    storyTitle: "Who we are",
    storyText:
      "Innovatec combines expertise in technology, design, and strategic business development to deliver solutions that create value. We work closely with our clients to understand their needs and build solutions with long-term value.",

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
    title: "Noen av våre prosjekter",
    description:
      "Vi utvikler og videreutvikler samfunnskritiske digitale løsninger som gjennom automatisering forenkler komplekse prosesser, styrker samhandling og sikrer effektiv forvaltning av data og tjenester. Våre prosjekter kombinerer moderne teknologi, robust arkitektur og dyp domeneforståelse for å skape løsninger med varig verdi.",
    sectionTitle: "Prosjekter",
    ctaLabel: "Les mer",
    longText:
      "Våre prosjekter spenner fra nasjonale løsninger innen helse og utdanning til komplekse plattformer for automatisering, samhandling og datadeling. Vi utvikler og forvalter samfunnskritiske systemer som håndterer store datamengder, avanserte regelverk og sikre integrasjoner på tvers av sektorer. Gjennom moderne arkitektur, teknologi og interoperabilitet bidrar vi til mer effektive tjenester, høyere kvalitet og tryggere forvaltning av data. Felles for prosjektene er fokus på robusthet, skalerbarhet og løsninger som skaper varig verdi for både brukere og samfunn.",
  },
  en: {
    title: "Some of our projects",
    description:
      "We develop and continuously improve mission-critical digital solutions that simplify complex processes through automation, strengthen collaboration, and ensure efficient management of data and services. Our projects combine modern technology, robust architecture, and deep domain expertise to create solutions with lasting value.",

    sectionTitle: "Projects",
    ctaLabel: "Read more",

    longText:
      "Our projects range from national solutions in the healthcare and education sectors to complex platforms for automation, collaboration, and data sharing. We develop and maintain mission-critical systems that handle large volumes of data, complex regulatory requirements, and secure integrations across sectors. Through modern architecture, technology, and interoperability, we help organizations deliver more efficient services, improve quality, and ensure the secure management of data. What all our projects have in common is a strong focus on robustness, scalability, and solutions that create lasting value for both users and society.",
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
