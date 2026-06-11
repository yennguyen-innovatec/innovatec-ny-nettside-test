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
      "Vi hører gjerne fra deg. Ta kontakt for en uforpliktende samtale om dine behov og utfordringer.",
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
      "We would love to hear from you. Contact us for a no-obligation conversation about your needs and challenges.",
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
