import { Locale } from "@/lib/i18n";
import imagePartner1 from "@/public/clients-logo/ibm-logo.png";
import imagePartner2 from "@/public/clients-logo/icaria-logo.svg";
import type { StaticImageData } from "next/image";

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

  historyTitle: string;
  historyText: string;

  methodologyTitle: string;
  methodologies: {
    title: string;
    description: string;
  }[];
  methodologyFooter: string;

  ctaTitle: string;
  ctaText: string;
  ctaLabel: string;
  ctaHref: string;
  deliveryTitle: string;
  deliveryText: string;
  deliveryModels: string[];
  deliveryFooter: string;
  deliveryCta: string;
  sustainabilityTitle: string;
  sustainabilityText: string;
  partnersTitle: string;
  partnersIntro: string;
  partners: {
    image: {
      src: StaticImageData;
      alt: string;
    };
    description: string;
    areas?: {
      title: string;
      description: string;
    }[];
  }[];
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
    ctaLabel: "Ledige stillinger",
    ctaHref: "/jobb-hos-oss",
    historyTitle: "Over 20 år med tillit og erfaring",

    historyText:
      "Siden selskapet ble etablert i 2003 har vi utviklet og videreutviklet samfunnskritiske digitale løsninger for virksomheter med høye krav til kvalitet, stabilitet og sikkerhet. Gjennom automatisering og moderne teknologi bidrar vi til mer effektive arbeidsprosesser, bedre samhandling og trygg forvaltning av data og tjenester. Våre prosjekter bygger på robust arkitektur, solid domeneforståelse og løsninger som skaper varig verdi.",

    methodologyTitle: "Hvordan vi jobber",

    methodologies: [
      {
        title: "Smidig utvikling (Agile)",
        description:
          "Iterativ utvikling i korte sprinter med løpende leveranser og tett kundedialog. Scrum og Kanban er de vanligste rammeverkene.",
      },
      {
        title: "DevOps",
        description:
          "Kombinerer utvikling og drift gjennom automatiserte pipelines for bygging, testing og utrulling (CI/CD).",
      },
      {
        title: "Mikrotjenester og sky",
        description:
          "Applikasjoner deles inn i små, uavhengige tjenester. Docker og Kubernetes brukes til containerisering og orkestrering.",
      },
      {
        title: "Test-drevet utvikling (TDD)",
        description:
          "Tester skrives før koden, kombinert med kodegjennomganger for å sikre kvalitet og avdekke feil tidlig.",
      },
      {
        title: "Infrastruktur som kode (IaC)",
        description:
          "Infrastruktur defineres og versjonskontrolleres som kode ved hjelp av verktøy som Terraform og Ansible.",
      },
    ],

    methodologyFooter:
      "Felles for alle metodikkene er vektleggingen av automatisering, rask tilbakemelding og kontinuerlig forbedring.",

    deliveryTitle: "Hvordan vi leverer",

    deliveryText:
      "Ingen prosjekter eller kunder er like. Derfor er vi opptatt av å finne den samarbeidsformen som passer best til både oppgaven som skal løses og organisasjonen din.",

    deliveryModels: [
      "Prosjektleveranser med konsulenter som inngår i kundens team.",
      "Komplette team med alle roller dekket.",
      "Ekspertise ved behov, for eksempel en sparringspartner med dyp ekspertise innen et fagområde som bistår med å løse konkrete utfordringer og problemstillinger.",
    ],

    deliveryFooter:
      "Vi tilbyr ulike kommersielle modeller tilpasset oppgavene som skal løses, fra tradisjonelle timebaserte modeller til fastpris for konkrete leveranser eller prosjekter. Uavhengig av om et prosjekt er kort eller langvarig, er vi opptatt av å levere kvalitet, god dokumentasjon og effektiv kompetanseoverføring både underveis og ved avsluttet oppdrag.",

    deliveryCta:
      "Har du et prosjekt du ønsker å diskutere med oss? Ta kontakt!",

    sustainabilityTitle: "Våre verdier",

    sustainabilityText:
      "Innovatec har et sterkt fokus på samfunnsansvar, miljø og bærekraft. Dette realiseres gjennom vår sertifisering som Miljøfyrtårn, kontinuerlig arbeid med arbeidsmiljøet vårt, kompetansebygging, utvikling av talenter og mangfold på arbeidsplassen.",

    partnersTitle: "Våre partnere",
    partnersIntro:
      "Vi er teknologinøytrale i møte med kunder og prosjekter. Vår filosofi er at oppgaven må defineres før de riktige teknologivalgene kan tas. For å understøtte disse valgene har vi kompetanse innen moderne utviklingsrammeverk, programmeringsspråk, plattformer og verktøy.",
    partners: [
      {
        image: {
          src: imagePartner1,
          alt: "IBM",
        },
        description:
          "Vi er partner av IBM og tilbyr spisskompetanse innen design, utvikling og implementering av deres plattform for automatisert beslutningsstøtte, IBM Operational Decision Manager.",
      },
      {
        image: {
          src: imagePartner2,
          alt: "Icaria Technology",
        },
        description:
          "Vi er partner med Icaria Technology, en ledende leverandør innen sine fagområder. Vi bistår med behovskartlegging, design og implementering av automatiserte løsninger innen:",
        areas: [
          {
            title: "Test data management",
            description:
              "Dataene som testere og automatiserte tester trenger, når de trenger dem og så ofte de trenger dem.",
          },
          {
            title: "Data governance",
            description:
              "Sikrer konsistens og integritet til forretningskritisk informasjon som er lagret i ulike databaser.",
          },
          {
            title: "Right to be forgotten",
            description:
              "Blokkering og sletting av personopplysninger i produksjonsapplikasjoner.",
          },
        ],
      },
    ],
  },

  en: {
    title: "About us",
    description:
      "Innovatec is a technology company that helps organizations with digital solutions, consulting, and development of modern systems.",

    storyTitle: "Who we are",
    storyText:
      "Innovatec is a consulting company with dedicated specialists who develop and modernize complex software systems for mission-critical organizations. We achieve this through a combination of extensive experience and modern technology.",
    ctaTitle: "Want to work with us?",
    ctaText:
      "It is our people who make the difference. At Innovatec, you will find an inclusive work environment characterized by curiosity, collaboration, and a strong passion for technology and development.",
    ctaLabel: "Open positions",
    ctaHref: "/jobb-hos-oss",
    historyTitle: "More than 20 years of trust and experience",

    historyText:
      "Since the company was established in 2003, we have developed and modernized mission-critical digital solutions for organizations with high demands for quality, stability, and security. Through automation and modern technology, we help create more efficient workflows, better collaboration, and secure management of data and services. Our projects are built on robust architecture, deep domain expertise, and solutions that deliver lasting value.",

    methodologyTitle: "How we work",

    methodologies: [
      {
        title: "Agile Development",
        description:
          "Iterative development in short sprints with continuous deliveries and close collaboration with clients. Scrum and Kanban are the most commonly used frameworks.",
      },
      {
        title: "DevOps",
        description:
          "Combining development and operations through automated pipelines for building, testing, and deployment (CI/CD).",
      },
      {
        title: "Microservices and Cloud",
        description:
          "Applications are divided into small, independent services. Docker and Kubernetes are used for containerization and orchestration.",
      },
      {
        title: "Test-Driven Development (TDD)",
        description:
          "Tests are written before code, combined with code reviews to ensure quality and identify issues early.",
      },
      {
        title: "Infrastructure as Code (IaC)",
        description:
          "Infrastructure is defined and version-controlled as code using tools such as Terraform and Ansible.",
      },
    ],

    methodologyFooter:
      "What all these methodologies have in common is a strong focus on automation, rapid feedback, and continuous improvement.",

    deliveryTitle: "How we deliver",

    deliveryText:
      "No two projects or clients are the same. That is why we focus on finding the collaboration model that best suits both the task at hand and your organization.",

    deliveryModels: [
      "Project deliveries with consultants integrated into the client's team.",
      "Complete teams with all roles covered.",
      "Expertise on demand, for example a sparring partner with deep specialist knowledge who can help solve specific challenges and issues.",
    ],

    deliveryFooter:
      "We offer a range of commercial models tailored to the work being delivered, from traditional time-based engagements to fixed-price deliveries and projects. Whether a project is short-term or long-term, we focus on delivering quality, clear documentation, and effective knowledge transfer throughout the engagement and upon completion.",

    deliveryCta:
      "Do you have a project you would like to discuss with us? Get in touch!",
    sustainabilityTitle: "Our Values",

    sustainabilityText:
      "Innovatec places a strong emphasis on social responsibility, environmental stewardship, and sustainability. This is reflected through our Eco-Lighthouse certification, our continuous efforts to maintain a positive working environment, investment in competence development, talent growth, and a diverse workplace.",
    partnersTitle: "Our partners",
    partnersIntro:
      "We take a technology-neutral approach when working with clients and projects. Our philosophy is that the task must be clearly defined before the right technology choices can be made. To support these choices, we have expertise in modern development frameworks, programming languages, platforms, and tools.",
    partners: [
      {
        image: {
          src: imagePartner1,
          alt: "IBM",
        },
        description:
          "We are an IBM partner and offer specialist expertise in the design, development, and implementation of their platform for automated decision support, IBM Operational Decision Manager.",
      },
      {
        image: {
          src: imagePartner2,
          alt: "Icaria Technology",
        },
        description:
          "We are a partner of Icaria Technology, a leading provider within its specialist fields. We assist with needs assessment, design, and implementation of automated solutions within:",
        areas: [
          {
            title: "Test data management",
            description:
              "The data that testers and automated tests need, when they need it and as often as they need it.",
          },
          {
            title: "Data governance",
            description:
              "Ensures the consistency and integrity of business-critical information stored in different databases.",
          },
          {
            title: "Right to be forgotten",
            description:
              "Blocking and deletion of personal data in production applications.",
          },
        ],
      },
    ],
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
