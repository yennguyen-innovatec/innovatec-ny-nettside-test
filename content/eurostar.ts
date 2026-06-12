import { Locale } from "@/lib/i18n";

export const eurostarPageContent: Record<
  Locale,
  {
    metaTitle: string;
    metaDescription: string;
    title: string;
    description: string;
    paragraphs: string[];
    buttonLabel: string;
    buttonHref: string;
    detailsTitle: string;
    details: {
      label: string;
      value: string;
    }[];
  }
> = {
  no: {
    metaTitle: "EuroSTAR 2026 | Innovatec",
    metaDescription:
      "Møt Innovatec på EuroSTAR 2026 i Oslo for en prat om automatisert testing og test data management.",
    title: "EuroSTAR 2026",
    description:
      "Møt Innovatec på Europas største konferanse for software testing.",
    paragraphs: [
      "Kom og møt oss på EuroSTAR-konferansen i Oslo 15–18 juni 2026. Vi tar gjerne en hyggelig prat om automatisert testing, test data management (TDM), kvalitetssikring og hvordan gode testprosesser kan bidra til mer robuste digitale løsninger.",
      "Innovatec jobber med moderne systemutvikling, integrasjoner, data og automatisering. På EuroSTAR ønsker vi å møte både kunder, samarbeidspartnere og fagpersoner som er opptatt av kvalitet i programvareutvikling.",
      "Du finner oss på standen sammen med vår samarbeidspartner Icaria Technology.",
    ],
    buttonLabel: "Les mer",
    buttonHref: "https://conference.eurostarsoftwaretesting.com/",
    detailsTitle: "Event details",
    details: [
      {
        label: "Dato",
        value: "15–18 juni 2026",
      },
      {
        label: "Sted",
        value: "Oslo",
      },
      {
        label: "Tema",
        value: "Automatisert testing og test data management",
      },
    ],
  },

  en: {
    metaTitle: "EuroSTAR 2026 | Innovatec",
    metaDescription:
      "Meet Innovatec at EuroSTAR 2026 in Oslo for a conversation about automated testing and test data management.",
    title: "EuroSTAR 2026",
    description:
      "Meet Innovatec at Europe’s largest software testing conference.",
    paragraphs: [
      "Come and meet us at the EuroSTAR conference in Oslo, 15–18 June 2026. We would be happy to have a friendly conversation about automated testing, test data management (TDM), quality assurance and how good testing processes can contribute to more robust digital solutions.",
      "Innovatec works with modern system development, integrations, data and automation. At EuroSTAR, we look forward to meeting customers, partners and professionals who care about quality in software development.",
      "You will find us at the stand together with our partner Icaria Technology.",
    ],
    buttonLabel: "Learn more",
    buttonHref: "https://conference.eurostarsoftwaretesting.com/",
    detailsTitle: "Event details",
    details: [
      {
        label: "Date",
        value: "15–18 June 2026",
      },
      {
        label: "Location",
        value: "Oslo",
      },
      {
        label: "Topic",
        value: "Automated testing and test data management",
      },
    ],
  },
};
