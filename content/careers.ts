import { Locale } from "@/lib/i18n";

type CareerPosition = {
  title: string;
  location: string;
  type: string;
  description: string;
};

export const careersContent: Record<
  Locale,
  {
    title: string;
    description: string;
    sections: string[];
    intro: {
      title: string;
      description: string;
    };
    valuesTitle: string;
    values: {
      title: string;
      description: string;
    }[];
    positionsTitle: string;
    positionsIntro: string;
    positions: CareerPosition[];
    block: {
      title: string;
      description: string;
      buttonLabel: string;
      buttonHref: string;
    };
  }
> = {
  no: {
    title: "Jobb hos oss",
    description: "Ønsker du nye utfordringer i et proaktivt konsulentmiljø?",
    sections: ["Ledige stillinger", "Våre verdier", "Møt folka våre"],

    intro: {
      title: "Et fagmiljø for nysgjerrige teknologer",
      description:
        "Hos Innovatec jobber du tett med erfarne konsulenter, utviklere og rådgivere som brenner for teknologi, kvalitet og gode løsninger. Vi deler kunnskap, lærer av hverandre og bygger løsninger som skaper verdi for kundene våre.",
    },

    valuesTitle: "Dette er viktig for oss",
    values: [
      {
        title: "Faglig utvikling",
        description:
          "Vi legger til rette for læring, deling og utvikling gjennom prosjekter, samarbeid og faglige diskusjoner.",
      },
      {
        title: "Tillit og ansvar",
        description:
          "Du får tillit til å ta ansvar, påvirke løsninger og bidra med egne perspektiver i teamet.",
      },
      {
        title: "Kvalitet",
        description:
          "Vi er opptatt av solid håndverk, gode prosesser og løsninger som kan videreutvikles over tid.",
      },
    ],

    positionsTitle: "Ledige stillinger",
    positionsIntro:
      "Her er noen eksempelroller vi ofte ser etter. Ta gjerne kontakt selv om du ikke finner en rolle som passer helt.",
    positions: [
      {
        title: "Frontend-utvikler",
        location: "Oslo / Hybrid",
        type: "Fulltid",
        description:
          "For deg som liker å bygge brukervennlige grensesnitt med React, TypeScript og moderne frontend-teknologi.",
      },
      {
        title: "Systemutvikler",
        location: "Oslo / Hybrid",
        type: "Fulltid",
        description:
          "For deg som vil jobbe med robuste løsninger, integrasjoner, API-er og moderne systemarkitektur.",
      },
      {
        title: "Data- og AI-rådgiver",
        location: "Oslo / Hybrid",
        type: "Fulltid",
        description:
          "For deg som ønsker å hjelpe virksomheter med data, innsikt, automatisering og praktisk bruk av kunstig intelligens.",
      },
    ],

    block: {
      title: "Vil du bli en del av Innovatec?",
      description:
        "Det er menneskene hos oss som gjør forskjellen. I Innovatec møter du et inkluderende arbeidsmiljø preget av nysgjerrighet, samarbeid og et sterkt engasjement for teknologi og utvikling. Vi deler kunnskap, heier på hverandre og skaper et miljø hvor det er rom for både faglig og personlig vekst. Vi er alltid på utkikk etter dyktige mennesker som ønsker å utvikle seg sammen med oss. Hos Innovatec får du muligheten til å jobbe i et inspirerende og fremoverlent miljø, sammen med kollegaer som brenner for læring, innovasjon og gode løsninger.",
      buttonLabel: "Ledige stillinger",
      buttonHref: "/jobb-hos-oss#ledige-stillinger",
    },
  },

  en: {
    title: "Careers",
    description:
      "Looking for new challenges in a proactive consulting environment?",
    sections: ["Open positions", "Our values", "Meet our people"],

    intro: {
      title: "A professional environment for curious technologists",
      description:
        "At Innovatec, you work closely with experienced consultants, developers and advisors who care about technology, quality and meaningful solutions.",
    },

    valuesTitle: "What matters to us",
    values: [
      {
        title: "Professional growth",
        description:
          "We support learning, knowledge sharing and development through projects, collaboration and professional discussions.",
      },
      {
        title: "Trust and responsibility",
        description:
          "You are trusted to take responsibility, influence solutions and contribute your own perspective.",
      },
      {
        title: "Quality",
        description:
          "We care about solid craftsmanship, good processes and solutions that can evolve over time.",
      },
    ],

    positionsTitle: "Open positions",
    positionsIntro:
      "Here are some example roles we often look for. Feel free to contact us even if you do not find an exact match.",
    positions: [
      {
        title: "Frontend Developer",
        location: "Oslo / Hybrid",
        type: "Full-time",
        description:
          "For those who enjoy building user-friendly interfaces with React, TypeScript and modern frontend technology.",
      },
      {
        title: "Software Developer",
        location: "Oslo / Hybrid",
        type: "Full-time",
        description:
          "For those who want to work with robust solutions, integrations, APIs and modern system architecture.",
      },
      {
        title: "Data and AI Advisor",
        location: "Oslo / Hybrid",
        type: "Full-time",
        description:
          "For those who want to help organizations with data, insights, automation and practical use of artificial intelligence.",
      },
    ],

    block: {
      title: "Want to become part of Innovatec?",
      description:
        "We are a community of engaged, curious and eager-to-learn technologists who gladly share knowledge, learn from one another and help each other.",
      buttonLabel: "Open positions",
      buttonHref: "/jobb-hos-oss#ledige-stillinger",
    },
  },
};
