import { Locale } from "@/lib/i18n";

export const siteConfig = {
  name: "Innovatec",
  legalName: "Innovatec - Innovative Technologies AS",
  url: "https://innovatec.net",
  email: "jobb@innovatec.net",
  phone: "+47 22 42 71 00",
  organizationNumber: "986 346 716",
  address: {
    street: "Øvre Slottsgate 5",
    postalCode: "0157",
    city: "Oslo",
    country: "Norway",
  },
};

export const siteCopy: Record<
  Locale,
  {
    footerContactTitle: string;
    privacyLabel: string;
    transparencyLabel: string;
    contactLabel: string;
    rights: string;
  }
> = {
  no: {
    footerContactTitle: "Kontakt Oss",
    privacyLabel: "Personvernerklæring",
    transparencyLabel: "Åpenhetsloven",
    contactLabel: "Kontakt oss",
    rights: "All rights reserved.",
    transparencyPage: {
      title: "Åpenhetsloven",
      description:
        "Informasjon om hvordan Innovatec jobber med grunnleggende menneskerettigheter og anstendige arbeidsforhold.",
      body: "I Innovatec jobber vi aktivt for å sikre at vi respekterer grunnleggende menneskerettigheter og anstendige arbeidsforhold i både egen virksomhet og leverandørkjeden vår.",
      readMorePrefix: "Les mer om Åpenhetsloven hos",
      lovdataLabel: "Lovdata",
    },
  },
  en: {
    footerContactTitle: "Contact Us",
    privacyLabel: "Privacy Policy",
    transparencyLabel: "Transparency Act",
    contactLabel: "Contact us",
    rights: "All rights reserved.",
    transparencyPage: {
      title: "Transparency Act",
      description:
        "Information about how Innovatec works with fundamental human rights and decent working conditions.",
      body: "At Innovatec, we actively work to ensure that we respect fundamental human rights and decent working conditions in both our own operations and our supply chain.",
      readMorePrefix: "Read more about the Norwegian Transparency Act at",
      lovdataLabel: "Lovdata",
    },
  },
};
