import { Locale } from "@/lib/i18n";
import image1 from "@/public/architecture.jpg";
import image2 from "@/public/aidata.jpg";
import image3 from "@/public/automation.jpg";
import image4 from "@/public/qa.jpg";
import image5 from "@/public/tech-due.jpg";
import image6 from "@/public/security.jpg";

import type { StaticImageData } from "next/image";
export type ExpertiseItem = {
  id: string;
  title: string;
  description: string;

  image?: {
    src: StaticImageData;
    alt: string;
  };
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
        image: {
          src: image1,
          alt: "Arkitektur og systemutvikling",
        },
        description:
          "Vi utvikler robuste og skalerbare digitale løsninger med solid teknisk arkitektur som fundament. Fra idé og analyse til implementering og videreutvikling hjelper vi virksomheter med å bygge moderne systemer som er enkle å forvalte og videreutvikle over tid.",
      },
      {
        id: "kunstig-intelligens-og-data",
        title: "Kunstig intelligens og data",
        image: {
          src: image2,
          alt: "Kunstig intelligens og data",
        },
        description:
          "Vi hjelper virksomheter med å bruke data mer effektivt og utforske mulighetene innen kunstig intelligens. Det kan være alt fra datagrunnlag og innsikt til analyse, automatisering og AI-støttede arbeidsprosesser som skaper konkret verdi i organisasjonen.",
      },
      {
        id: "automatisering-av-forretningsprosesser",
        title: "Automatisering av forretningsprosesser",
        image: {
          src: image3,
          alt: "Automatisering av forretningsprosesser",
        },
        description: [
          "Vi identifiserer manuelle og tidkrevende prosesser og gjør dem mer effektive gjennom smart automatisering. Dette spenner fra tradisjonelle regelbaserte systemer til moderne KI-drevne løsninger. Regelbaserte verktøy er pålitelige og forutsigbare og egner seg godt for strukturerte og repetitive oppgaver. De kan imidlertid bli utilstrekkelige når prosessene krever skjønn eller håndtering av ustrukturert informasjon.",

          "Moderne KI- og dataløsninger fyller dette gapet ved å gjenkjenne mønstre i store datamengder, tolke ustrukturert input og forutsi fremtidige hendelser. I motsetning til regelbaserte systemer kan disse modellene forbedre seg over tid.",
        ],
      },
      {
        id: "kvalitetssikring-og-test",
        title: "Kvalitetssikring og test",
        image: {
          src: image4,
          alt: "Kvalitetssikring og test",
        },
        description: [
          "Vi bidrar til høyere kvalitet i digitale produkter gjennom strukturert kvalitetssikring, teststrategi og testgjennomføring. Vi jobber både med funksjonell testing, testautomatisering og kvalitet i utviklingsprosessen for å redusere risiko og sikre stabile leveranser.",

          "Kombinasjonen av testautomatisering, strukturert data governance og automatisert test data management (TDM) gir utviklingsteam det de trenger for å levere programvare raskere, tryggere og med høyere kvalitet.",
        ],
      },
      {
        id: "teknisk-due-diligence",
        title: "Teknisk due diligence",
        image: {
          src: image5,
          alt: "Arkitektur og systemutvikling",
        },
        description:
          "Vi gjennomfører tekniske vurderinger som gir beslutningsstøtte ved investeringer, oppkjøp, modernisering eller større strategiske valg. Vi ser på arkitektur, kodebase, team, risiko og teknologiske forutsetninger for å gi et realistisk bilde av dagens situasjon og veien videre.",
      },
      {
        id: "sikkerhet",
        title: "Sikkerhet",
        image: {
          src: image6,
          alt: "Sikkerhet",
        },
        description:
          "Vi hjelper virksomheter med å bygge sikre digitale løsninger gjennom god arkitektur, risikovurdering og beste praksis for utvikling. Sikkerhet er en integrert del av prosessen, fra design og implementering til drift og videreutvikling. Et utviklerteam der alle har grunnleggende sikkerhetskompetanse er ikke bare en teknisk ressurs, det er et strategisk fortrinn.",
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
        id: "arkitektur-og-systemutvikling",
        title: "Architecture and system development",
        image: {
          src: image1,
          alt: "Arkitektur og systemutvikling",
        },
        description:
          "We build robust and scalable digital solutions founded on strong technical architecture. From concept and analysis to implementation and further development, we help organizations create modern systems that are easier to maintain, evolve, and grow over time.",
      },
      {
        id: "kunstig-intelligens-og-data",
        title: "Artificial intelligence and data",
        image: {
          src: image2,
          alt: "Arkitektur og systemutvikling",
        },
        description:
          "We help organizations make better use of data and explore the practical value of artificial intelligence. This includes everything from data foundations and insight generation to analytics, automation, and AI-supported workflows that create measurable business value.",
      },
      {
        id: "automatisering-av-forretningsprosesser",
        title: "Business process automation",
        image: {
          src: image3,
          alt: "Arkitektur og systemutvikling",
        },
        description:
          "We identify manual and time-consuming processes and improve them through smart automation. The goal is to reduce friction, improve quality, and free up time so teams can focus on the work that creates the most value.",
      },
      {
        id: "kvalitetssikring-og-test",
        title: "Quality assurance and testing",
        image: {
          src: image4,
          alt: "Arkitektur og systemutvikling",
        },
        description:
          "We improve the quality of digital products through structured quality assurance, test strategy, and execution. We work with functional testing, test automation, and quality practices throughout the development lifecycle to reduce risk and ensure stable deliveries.",
      },
      {
        id: "teknisk-due-diligence",
        title: "Technical due diligence",
        image: {
          src: image5,
          alt: "Arkitektur og systemutvikling",
        },
        description:
          "We perform technical assessments that support decision-making in investments, acquisitions, modernization efforts, and major strategic initiatives. We evaluate architecture, codebase, team capabilities, risks, and technical maturity to provide a realistic picture of the current state and the road ahead.",
      },
      {
        id: "security",
        title: "Security",
        image: {
          src: image6,
          alt: "Security",
        },
        description:
          "We help organizations build secure digital solutions through strong architecture, risk assessment, and best practices in software development. Security is integrated throughout the process, from design and implementation to operation and continuous improvement.",
      },
    ],
  },
};
