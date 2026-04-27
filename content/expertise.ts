import { Locale } from "@/lib/i18n";

export type ExpertiseItem = {
  id: string;
  title: string;
  description: string;
};

export const ExpertisePageContent: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    expertiseTitle: string;
    expertise: ExpertiseItem[];
  }
> = {
  no: {
    eyebrow: "Vår ekspertise",
    title: "Hva vi gjør",
    description:
      "Vi kombinerer vår ekspertise innen teknologi, design og strategisk forretningsutvikling for å levere digitale produkter og tjenester som hjelper kundene med å nå ambisjonene sine, både nå og i fremtiden.",
    expertiseTitle: "Tjenesteområder",
    expertise: [
      {
        id: "arkitektur-og-systemutvikling",
        title: "Arkitektur og systemutvikling",
        description:
          "Vi utvikler robuste og skalerbare digitale løsninger med solid teknisk arkitektur som fundament. Fra idé og analyse til implementering og videreutvikling hjelper vi virksomheter med å bygge moderne systemer som er enkle å forvalte og videreutvikle over tid.",
      },
      {
        id: "kunstig-intelligens-og-data",
        title: "Kunstig intelligens og data",
        description:
          "Vi hjelper virksomheter med å bruke data mer effektivt og utforske mulighetene innen kunstig intelligens. Det kan være alt fra datagrunnlag og innsikt til analyse, automatisering og AI-støttede arbeidsprosesser som skaper konkret verdi i organisasjonen.",
      },
      {
        id: "automatisering-av-forretningsprosesser",
        title: "Automatisering av forretningsprosesser",
        description:
          "Vi identifiserer manuelle og tidkrevende prosesser og gjør dem mer effektive gjennom smart automatisering. Målet er å redusere friksjon, øke kvaliteten og frigjøre tid slik at virksomheten kan bruke ressursene sine der de skaper mest verdi.",
      },
      {
        id: "kvalitetssikring-og-test",
        title: "Kvalitetssikring og test",
        description:
          "Vi bidrar til høyere kvalitet i digitale produkter gjennom strukturert kvalitetssikring, teststrategi og testgjennomføring. Vi jobber både med funksjonell testing, testautomatisering og kvalitet i utviklingsprosessen for å redusere risiko og sikre stabile leveranser.",
      },
      {
        id: "teknisk-due-diligence",
        title: "Teknisk due diligence",
        description:
          "Vi gjennomfører tekniske vurderinger som gir beslutningsstøtte ved investeringer, oppkjøp, modernisering eller større strategiske valg. Vi ser på arkitektur, kodebase, team, risiko og teknologiske forutsetninger for å gi et realistisk bilde av dagens situasjon og veien videre.",
      },
    ],
  },

  en: {
    eyebrow: "Our expertise",
    title: "What we do",
    description:
      "We combine our expertise in technology, design, and strategic business development to deliver digital products and services that help our clients achieve their ambitions, both now and in the future.",
    expertiseTitle: "Service areas",
    expertise: [
      {
        id: "architecture-and-system-development",
        title: "Architecture and system development",
        description:
          "We build robust and scalable digital solutions founded on strong technical architecture. From concept and analysis to implementation and further development, we help organizations create modern systems that are easier to maintain, evolve, and grow over time.",
      },
      {
        id: "artificial-intelligence-and-data",
        title: "Artificial intelligence and data",
        description:
          "We help organizations make better use of data and explore the practical value of artificial intelligence. This includes everything from data foundations and insight generation to analytics, automation, and AI-supported workflows that create measurable business value.",
      },
      {
        id: "business-process-automation",
        title: "Business process automation",
        description:
          "We identify manual and time-consuming processes and improve them through smart automation. The goal is to reduce friction, improve quality, and free up time so teams can focus on the work that creates the most value.",
      },
      {
        id: "quality-assurance-and-testing",
        title: "Quality assurance and testing",
        description:
          "We improve the quality of digital products through structured quality assurance, test strategy, and execution. We work with functional testing, test automation, and quality practices throughout the development lifecycle to reduce risk and ensure stable deliveries.",
      },
      {
        id: "technical-due-diligence",
        title: "Technical due diligence",
        description:
          "We perform technical assessments that support decision-making in investments, acquisitions, modernization efforts, and major strategic initiatives. We evaluate architecture, codebase, team capabilities, risks, and technical maturity to provide a realistic picture of the current state and the road ahead.",
      },
    ],
  },
};
