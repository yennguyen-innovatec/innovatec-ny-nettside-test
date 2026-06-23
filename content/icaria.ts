import { Locale } from "@/lib/i18n";

export const eurostarEventContent: Record<
  Locale,
  {
    title: string;
    description: string;
    intro: string;
    cards: {
      title: string;
      text: string[];
    }[];
    moreTitle: string;
    moreText: string;
    moreButtonLabel: string;
    stepsTitle: string;
    steps: {
      title: string;
      text: string;
    }[];
  }
> = {
  no: {
    title: "icaria TDM",
    description:
      "Vi er partner med Icaria Technology, en ledende leverandør innen sine fagområder. Vi bistår med behovskartlegging, design og implementering av automatiserte løsninger innen:",
    intro:
      "icaria TDM leverer dataene testere og automatiserte tester trenger, når de trenger dem, så ofte som nødvendig, samtidig som sensitiv informasjon beskyttes.",
    cards: [
      {
        title: "Datamaskering",
        text: [
          "Kartlegging av sensitive data automatiserer identifiseringen av hvor sensitive data finnes i databasen. Maskeringspolicyen gjør det mulig å knytte maskeringsalgoritmer til tabellfelt og filer som inneholder sensitiv informasjon.",
          "Plattformen anvender deretter policyen på databaser eller ved flytting av data mellom miljøer.",
          "Maskerte data bevarer realisme, konsistens og referanseintegritet, også mellom tabeller i ulike applikasjoner og teknologier.",
        ],
      },
      {
        title: "Datasegmentering",
        text: [
          "Segmentering gjør det mulig å hente ut komplekse og sammenhengende datastrukturer, som en kunde med tilhørende kontoer, tjenester, saker og bestillinger, fra et kildemiljø. Sensitiv informasjon maskeres, nødvendige koder konverteres, og dataene leveres til et målmiljø for testformål.",
          "Data Dynamics Prospecting gjør det mulig å identifisere relasjoner mellom tabeller i datamodeller der relasjonene ikke er direkte definert.",
        ],
      },
      {
        title: "Syntetiske data",
        text: [
          "icaria TDM genererer syntetiske data ved hjelp av maler for ønsket datastruktur, modeller som beskriver ønskede egenskaper og definerte regler for datagenerering.",
          "Syntetiske data kan genereres i et internt icaria TDM-lager og leveres til applikasjonsmiljøer så ofte som nødvendig.",
        ],
      },
      {
        title: "Testcasedata",
        text: [
          "icaria TDM gjør det mulig å definere og tildele dataene et testtilfelle krever, forventede resultater og regler for kontroll av gjennomføringen.",
          "Ved kjøring av testtilfellet leveres nødvendige data automatisk til testmiljøet, og resultatet kontrolleres automatisk.",
          "icaria TDMs webtjenester muliggjør integrasjon med orkestrerings- og testadministrasjonsløsninger.",
        ],
      },
      {
        title: "Selvbetjening av data",
        text: [
          "Brukere av icaria TDM kan bestille testdata til målmiljøer ved behov.",
          "Tilgangsregler bestemmer hvilke dataoverføringer som er tilgjengelige for hver brukergruppe.",
          "Planleggingsfunksjonen koordinerer kjøringer mot produksjonsmiljøer og hindrer at forespørsler utføres i perioder med høy belastning.",
        ],
      },
      {
        title: "Datasøk",
        text: [
          "icaria TDM gjør det mulig å definere en ønsket dataprofil for hver test basert på utvalgte egenskaper.",
          "Søkefunksjonen bruker disse egenskapene til å utforske databasen og finne eksisterende data som samsvarer med profilen.",
          "Prosessen kan håndtere brukstilfeller på tvers av databaser og teknologier.",
        ],
      },
    ],
    moreTitle: "Vil du vite mer?",
    moreText:
      "Vil du vite hvordan Innovatec kan hjelpe deg med å implementere en strategi for testdatahåndtering?",
    moreButtonLabel: "Kontakt",
    stepsTitle: "Hvordan komme i gang",
    steps: [
      {
        title: "Kartleggingsmøte",
        text: "Vi kartlegger organisasjonens behov og analyserer de viktigste bruksområdene.",
      },
      {
        title: "Demo",
        text: "Vi gjennomfører en demonstrasjon for organisasjonen og relevante interessenter for å bekrefte krav og bruksområder.",
      },
      {
        title: "Pilot",
        text: "Start implementeringen av TDM-strategien med støtte fra icaria TDM. Våre eksperter veileder deg gjennom hele prosessen.",
      },
      {
        title: "Implementering",
        text: "Våre eksperter og sertifiserte partnere gjennomfører implementeringen og integrasjonen av TDM-strategien.",
      },
      {
        title: "Suksess",
        text: "Vi stiller med nødvendige ressurser for å sikre at prosjektet lykkes.",
      },
    ],
  },

  en: {
    title: "icaria TDM",
    description:
      "We are partners with Icaria Technology, a leading provider in its fields. We assist with needs assessment, design and implementation of automated solutions within:",
    intro:
      "icaria TDM delivers the data testers and automated tests need, when they need it, as often as necessary, while protecting sensitive information.",
    cards: [
      {
        title: "Data masking",
        text: [
          "Sensitive data discovery automates the identification of where sensitive data exists in the database. The masking policy makes it possible to link masking algorithms to table fields and files that contain sensitive information.",
          "The platform then applies the policy to databases or when moving data between environments.",
          "Masked data preserves realism, consistency and referential integrity, also between tables across different applications and technologies.",
        ],
      },
      {
        title: "Data segmentation",
        text: [
          "Segmentation makes it possible to extract complex and connected data structures, such as a customer with associated accounts, services, cases and orders, from a source environment. Sensitive information is masked, necessary codes are converted, and the data is delivered to a target environment for testing purposes.",
          "Data Dynamics Prospecting makes it possible to identify relationships between tables in data models where the relationships are not directly defined.",
        ],
      },
      {
        title: "Synthetic data",
        text: [
          "icaria TDM generates synthetic data using templates for the desired data structure, models that describe desired properties and defined rules for data generation.",
          "Synthetic data can be generated in an internal icaria TDM repository and delivered to application environments as often as necessary.",
        ],
      },
      {
        title: "Test case data",
        text: [
          "icaria TDM makes it possible to define and assign the data a test case requires, expected results and rules for checking the execution.",
          "When running the test case, the necessary data is automatically delivered to the test environment, and the result is checked automatically.",
          "icaria TDM's web services enable integration with orchestration and test management solutions.",
        ],
      },
      {
        title: "Self-service data",
        text: [
          "Users of icaria TDM can order test data for target environments when needed.",
          "Access rules determine which data transfers are available to each user group.",
          "The scheduling function coordinates runs against production environments and prevents requests from being executed during periods of high load.",
        ],
      },
      {
        title: "Data search",
        text: [
          "icaria TDM makes it possible to define a desired data profile for each test based on selected properties.",
          "The search function uses these properties to explore the database and find existing data that matches the profile.",
          "The process can handle use cases across databases and technologies.",
        ],
      },
    ],
    moreTitle: "Want to know more?",
    moreText:
      "Want to know how Innovatec can help you implement a test data management strategy?",
    moreButtonLabel: "Contact",
    stepsTitle: "How to get started",
    steps: [
      {
        title: "Discovery meeting",
        text: "We map the organisation's needs and analyse the most important use cases.",
      },
      {
        title: "Demo",
        text: "We conduct a demonstration for the organisation and relevant stakeholders to confirm requirements and use cases.",
      },
      {
        title: "Pilot",
        text: "Start implementing the TDM strategy with support from icaria TDM. Our experts guide you through the entire process.",
      },
      {
        title: "Implementation",
        text: "Our experts and certified partners carry out the implementation and integration of the TDM strategy.",
      },
      {
        title: "Success",
        text: "We provide the necessary resources to ensure the project succeeds.",
      },
    ],
  },
};
export const eurostarBannerContent: Record<
  Locale,
  {
    description: string;
    ctaLabel: string;
  }
> = {
  no: {
    description:
      "Vi var på EuroSTAR-konferansen med fokus på automatisert testing og test data management (TDM). Les mer og ta gjerne kontakt med oss for en demo.",
    ctaLabel: "Les mer →",
  },

  en: {
    description:
      "We were at the EuroSTAR conference with a focus on automated testing and test data management (TDM). Read more and feel free to contact us for a demo.",
    ctaLabel: "Learn more →",
  },
};
