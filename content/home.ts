import { Locale } from "@/lib/i18n";

type Project = {
  client: string;
  title: string;
  description: string;
};

type HomeContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  intro: {
    title: string;
    description: string;
  };
  projects: {
    title: string;
    ctaLabel: string;
    items: Project[];
  };
  careers: {
    title: string;
    description: string;
    cta: {
      label: string;
      href: string;
    };
  };
};

export const homeContent: Record<Locale, HomeContent> = {
  no: {
    hero: {
      eyebrow: "Innovative Technologies",
      title: "Eksperter på sikker digitalisering",
      description:
        "Innovatec er et konsulenthus med engasjerte spesialister som moderniserer komplekse softwaresystemer i samfunnskritiske virksomheter. Dette gjør vi ved hjelp av en kombinasjon av lang erfaring og moderne teknologi.",
      primaryCta: {
        label: "Om oss",
        href: "/no/om-oss",
      },
      secondaryCta: {
        label: "Våre prosjekter",
        href: "/no/prosjekter",
      },
    },

    projects: {
      title: "Våre prosjekter",
      ctaLabel: "Flere prosjekter",
    },
    careers: {
      title: "Jobb hos oss",
      description:
        "Vi er alltid på utkikk etter gode kandidater. Dersom du føler deg hjemme i beskrivelsen vi gir av oss selv og våre konsulenter, er vi veldig interessert i å komme i kontakt med deg.",
      cta: {
        label: "Kontakt oss",
        href: "/no/kontakt-oss",
      },
    },
  },

  en: {
    hero: {
      eyebrow: "Innovative Technologies",
      title: "Experts in secure digitalization",
      description:
        "Innovatec is a consulting firm with dedicated specialists who modernize complex software systems in socially critical businesses. We do this by combining long experience and modern technology.",
      primaryCta: {
        label: "About us",
        href: "/en/om-oss",
      },
      secondaryCta: {
        label: "Our projects",
        href: "/en/prosjekter",
      },
    },
    intro: {
      title: "What we do",
      description:
        "We combine expertise in technology, design, and strategic business development to deliver digital products and services that help clients achieve their ambitions.",
    },
    projects: {
      title: "Our projects",
      ctaLabel: "More projects",
    },
    careers: {
      title: "Careers",
      description:
        "We are always looking for strong candidates. If you feel at home in the way we describe ourselves and our consultants, we would love to hear from you.",
      cta: {
        label: "Contact us",
        href: "/en/kontakt-oss",
      },
    },
  },
};
export const expertiseHomeContent = {
  no: {
    title: "Vår ekspertise",
    intro:
      "Vi er et team av senior konsulenter med ekspertise innen teknologi, rammeverk, utvikling, test og dokumentasjon av løsninger for våre kunder.",
    cta: {
      label: "Hva vi gjør",
      href: "/no/hva-vi-gjor",
    },
    items: [
      {
        id: "arkitektur-og-systemutvikling",
        title: "Arkitektur og systemutvikling",
      },
      {
        id: "kunstig-intelligens-og-data",
        title: "Kunstig intelligens og data",
      },
      {
        id: "automatisering-av-forretningsprosesser",
        title: "Automatisering av forretningsprosesser",
      },
      {
        id: "kvalitetssikring-og-test",
        title: "Kvalitetssikring og test",
      },
      {
        id: "teknisk-due-diligence",
        title: "Teknisk due diligence",
      },
    ],
  },

  en: {
    title: "Our expertise",
    intro:
      "We are a team of senior consultants with expertise in technology, frameworks, development, testing, and documentation of solutions for our clients.",
    cta: {
      label: "What we do",
      href: "/en/what-we-do",
    },
    items: [
      {
        id: "architecture-and-system-development",
        title: "Architecture and system development",
      },
      {
        id: "ai-and-data",
        title: "Artificial intelligence and data",
      },
      {
        id: "business-process-automation",
        title: "Business process automation",
      },
      {
        id: "quality-assurance-and-testing",
        title: "Quality assurance and testing",
      },
      {
        id: "technical-due-diligence",
        title: "Technical due diligence",
      },
    ],
  },
} satisfies Record<Locale, any>;
