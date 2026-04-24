import { Locale } from "@/lib/i18n";

export const contactPageContent: Record<
  Locale,
  {
    title: string;
    description: string;
    companyLabel: string;
    phoneLabel: string;
    emailLabel: string;
    form: {
      title: string;
      name: string;
      email: string;
      message: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
      validationError: string;
      note: string;
    };
  }
> = {
  no: {
    title: "Kontakt oss",
    description:
      "Ta kontakt med oss for en uforpliktende prat om hvordan vi kan hjelpe med digitale løsninger, systemutvikling og rådgivning.",
    companyLabel: "Selskap",
    phoneLabel: "Telefon",
    emailLabel: "E-post",
    form: {
      title: "Send oss en melding",
      name: "Navn",
      email: "E-post",
      message: "Melding",
      submit: "Send melding",
      sending: "Sender...",
      success: "Meldingen er sendt. Vi tar kontakt så snart vi kan.",
      error: "Noe gikk galt. Prøv igjen senere.",
      validationError: "Vennligst fyll ut alle feltene korrekt.",
      note: "Ikke send sensitive personopplysninger i skjemaet.",
    },
  },
  en: {
    title: "Contact us",
    description:
      "Get in touch with us to discuss how we can help with digital solutions, system development, and technology consulting.",
    companyLabel: "Company",
    phoneLabel: "Phone",
    emailLabel: "Email",
    form: {
      title: "Send us a message",
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send message",
      sending: "Sending...",
      success: "Your message has been sent. We will get back to you soon.",
      error: "Something went wrong. Please try again later.",
      validationError: "Please fill in all fields correctly.",
      note: "Please do not send sensitive personal data through this form.",
    },
  },
};
