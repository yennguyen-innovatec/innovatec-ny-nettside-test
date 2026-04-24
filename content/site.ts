import { Locale } from "@/lib/i18n";

export const siteConfig = {
  name: "Innovatec",
  legalName: "Innovatec - Innovative Technologies As",
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
  },
  en: {
    footerContactTitle: "Contact Us",
    privacyLabel: "Privacy Policy",
    transparencyLabel: "Transparency Act",
    contactLabel: "Contact us",
    rights: "All rights reserved.",
  },
};
