import { Locale } from "@/lib/i18n";
import projectMainImage from "@/public/projects/project-main.jpg";
import projectSideTopImage from "@/public/projects/project-side-top.jpg";
import projectSideBottomImage from "@/public/projects/project-side-bottom.jpg";
import { StaticImageData } from "next/image";

export type Project = {
  slug: string;
  client: string;
  title: string;
  description: string;
  image: StaticImageData;
  sector: string;
  year: string;
  expertise: string[];
  challenge: string;
  solution: string;
  result: string;
  highlights: string[];
};

export const projects: Record<Locale, Project[]> = {
  no: [
    {
      slug: "sikt-nvb",
      client: "helsedirektoratet",
      title: "Digitalt kontroll- og utbetalingssystem for helserefusjon",
      description:
        "Løsningen automatiserer kontroll og utbetaling av refusjonskrav i helsesektoren, og bidrar til raskere oppgjør, høy kvalitet og korrekt forvaltning av offentlige midler. Innovatec står i samarbeid med kunden for design, utvikling og forvaltning av systemet.",
      image: projectMainImage,
      sector: "Offentlig sektor / utdanning",
      year: "Langsiktig samarbeid",
      expertise: [
        "Systemutvikling",
        "Integrasjoner",
        "Arkitektur",
        "Forvaltning",
      ],
      challenge:
        "Kunnskapssektoren har behov for stabile, sikre og brukervennlige løsninger som håndterer store mengder utdanningsdata på tvers av aktører.",
      solution:
        "Innovatec bidrar med teknisk kompetanse innen utvikling, integrasjoner og arkitektur for å støtte videreutvikling av digitale tjenester knyttet til Nasjonal vitnemålsdatabase.",
      result:
        "Løsningen bidrar til mer effektiv dataflyt, bedre tilgjengelighet og tryggere håndtering av informasjon for brukere og organisasjoner i sektoren.",
      highlights: [
        "Moderne og vedlikeholdbare systemkomponenter",
        "Sikre integrasjoner mellom sentrale tjenester",
        "Fokus på stabilitet, skalerbarhet og brukervennlighet",
      ],
    },
    {
      slug: "digital-samhandling",
      client: "Større privat virksomhet",
      title: "Utvikling av KI tjeneste fra prototype til ferdig løsning",
      description:
        "Utvikling av digitale løsninger som gjør det enklere for ulike systemer og aktører å samarbeide effektivt.",
      image: projectSideTopImage,
      sector: "Offentlig sektor",
      year: "Prosjektbasert leveranse",
      expertise: ["API-utvikling", "Frontend", "Integrasjoner", "Rådgivning"],
      challenge:
        "Flere systemer måtte kommunisere bedre for å redusere manuelt arbeid og gi brukerne en mer sammenhengende digital opplevelse.",
      solution:
        "Vi utviklet robuste integrasjoner og brukergrensesnitt som forenkler arbeidsflyt og gjør informasjon lettere tilgjengelig.",
      result:
        "Kunden fikk en mer effektiv digital plattform med bedre datakvalitet og mindre behov for manuell oppfølging.",
      highlights: [
        "Bedre samhandling mellom systemer",
        "Redusert manuelt arbeid",
        "Mer helhetlig brukeropplevelse",
      ],
    },
    {
      slug: "modernisering-av-fagsystem",
      client: "Norsk helsenett",
      title: "Digital samhandling i legemiddelkjeden",
      description:
        "Teknisk modernisering av et eksisterende fagsystem med fokus på ytelse, struktur og fremtidig videreutvikling.",
      image: projectSideBottomImage,
      sector: "Industri / tjenesteyting",
      year: "Moderniseringsprosjekt",
      expertise: [
        "Teknisk rådgivning",
        "Frontend",
        "Backend",
        "Kvalitetssikring",
      ],
      challenge:
        "Et eldre system hadde blitt krevende å vedlikeholde og videreutvikle, samtidig som behovene fra brukerne økte.",
      solution:
        "Innovatec bidro med modernisering av kodebase, forbedret struktur og tydeligere teknisk arkitektur.",
      result:
        "Systemet ble enklere å forvalte, mer stabilt og bedre tilpasset videre utvikling.",
      highlights: [
        "Ryddigere teknisk arkitektur",
        "Forbedret brukeropplevelse",
        "Bedre grunnlag for videreutvikling",
      ],
    },
  ],

  en: [
    {
      slug: "sikt-nvb",
      client: "SIKT",
      title: "National Diploma Registry",
      description:
        "Development and modernization of solutions supporting secure handling of diplomas and education data in the knowledge sector.",
      image: projectMainImage,
      sector: "Public sector / education",
      year: "Long-term collaboration",
      expertise: [
        "System development",
        "Integrations",
        "Architecture",
        "Maintenance",
      ],
      challenge:
        "The knowledge sector needs stable, secure and user-friendly solutions for handling large volumes of education data across organizations.",
      solution:
        "Innovatec contributes technical expertise in development, integrations and architecture to support digital services connected to the National Diploma Registry.",
      result:
        "The solution supports more efficient data flow, better availability and safer information handling for users and organizations.",
      highlights: [
        "Modern and maintainable system components",
        "Secure integrations between key services",
        "Focus on stability, scalability and usability",
      ],
    },
    {
      slug: "digital-collaboration",
      client: "Public sector client",
      title: "Digital collaboration and integrations",
      description:
        "Development of digital solutions that help systems and organizations collaborate more efficiently.",
      image: projectSideTopImage,
      sector: "Public sector",
      year: "Project delivery",
      expertise: ["API development", "Frontend", "Integrations", "Consulting"],
      challenge:
        "Several systems needed to communicate better to reduce manual work and create a more coherent digital user experience.",
      solution:
        "We developed robust integrations and user interfaces that simplify workflows and make information more accessible.",
      result:
        "The client received a more efficient digital platform with improved data quality and less manual follow-up.",
      highlights: [
        "Improved system collaboration",
        "Reduced manual work",
        "More coherent user experience",
      ],
    },
    {
      slug: "system-modernization",
      client: "Nordic company",
      title: "Modernization of business-critical system",
      description:
        "Technical modernization of an existing system with focus on performance, structure and future development.",
      image: projectSideBottomImage,
      sector: "Industry / services",
      year: "Modernization project",
      expertise: [
        "Technical consulting",
        "Frontend",
        "Backend",
        "Quality assurance",
      ],
      challenge:
        "An older system had become difficult to maintain and extend, while user needs continued to grow.",
      solution:
        "Innovatec contributed to codebase modernization, improved structure and clearer technical architecture.",
      result:
        "The system became easier to maintain, more stable and better prepared for future development.",
      highlights: [
        "Cleaner technical architecture",
        "Improved user experience",
        "Better foundation for further development",
      ],
    },
  ],
};
