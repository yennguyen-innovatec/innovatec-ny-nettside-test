import { Locale } from "@/lib/i18n";

export const privacyContent: Record<
  Locale,
  {
    title: string;
    sections: {
      title: string;
      text: string;
    }[];
  }
> = {
  no: {
    title: "Personvernerklæring",
    sections: [
      {
        title: "Hvilke opplysninger vi samler inn",
        text: "Når du bruker kontaktskjemaet, samler vi inn navn, e-post og meldingen din. Ikke send sensitive personopplysninger.",
      },
      {
        title: "Formål",
        text: "Opplysningene brukes kun til å besvare henvendelser.",
      },
      {
        title: "Lagring",
        text: "Opplysningene lagres kun så lenge det er nødvendig.",
      },
      {
        title: "Dine rettigheter",
        text: "Du har rett til innsyn, retting og sletting. Kontakt oss på info@innovatec.net.",
      },
    ],
  },

  en: {
    title: "Privacy Policy",
    sections: [
      {
        title: "Information we collect",
        text: "We collect your name, email, and message when you use the contact form. Please do not send sensitive data.",
      },
      {
        title: "Purpose",
        text: "We use the data only to respond to your inquiry.",
      },
      {
        title: "Retention",
        text: "Data is stored only as long as necessary.",
      },
      {
        title: "Your rights",
        text: "You can request access, correction, or deletion at info@innovatec.net.",
      },
    ],
  },
};
