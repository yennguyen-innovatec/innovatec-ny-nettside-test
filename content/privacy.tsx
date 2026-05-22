import React from "react";
import { Locale } from "@/lib/i18n";

export const privacyContent: Record<
  Locale,
  {
    title: string;
    sections: {
      title: string;
      text: React.ReactNode;
    }[];
  }
> = {
  no: {
    title: "Personvernerklæring",
    sections: [
      {
        title: "Behandlingsansvarlig",
        text: (
          <>
            Innovatec AS er behandlingsansvarlig for behandlingen av
            personopplysninger som samles inn via våre nettsider. Dersom du har
            spørsmål om hvordan vi behandler personopplysninger, kan du kontakte
            oss på{" "}
            <a
              href="mailto:info@innovatec.net"
              className="underline hover:opacity-80"
            >
              info@innovatec.net
            </a>
            .
          </>
        ),
      },
      {
        title: "Hvilke opplysninger vi samler inn",
        text: (
          <>
            Når du bruker kontaktskjemaet på våre nettsider, samler vi inn
            informasjon som navn, e-postadresse og innholdet i meldingen du
            sender oss. Vi ber om at sensitive personopplysninger ikke sendes
            gjennom kontaktskjemaet. Nettsiden kan også samle inn teknisk
            informasjon som IP-adresse, nettlesertype og besøksstatistikk
            gjennom bruk av informasjonskapsler (cookies).
          </>
        ),
      },
      {
        title: "Formål med behandlingen",
        text: (
          <>
            Opplysningene brukes for å kunne besvare henvendelser, følge opp
            dialog og yte relevant kundeservice. Informasjon som samles inn via
            cookies brukes for å analysere bruk av nettsiden og forbedre
            funksjonalitet og brukeropplevelse. Vi bruker ikke
            personopplysninger til markedsføring uten samtykke.
          </>
        ),
      },
      {
        title: "Informasjonskapsler (cookies)",
        text: (
          <>
            Våre nettsider kan benytte informasjonskapsler for å sikre
            grunnleggende funksjonalitet, analysere trafikk og forbedre
            brukeropplevelsen. En informasjonskapsel er en liten tekstfil som
            lagres på enheten din når du besøker nettsiden. Du kan selv
            administrere eller slette cookies gjennom innstillingene i
            nettleseren din.
          </>
        ),
      },
      {
        title: "Lagring og sikkerhet",
        text: (
          <>
            Personopplysninger lagres kun så lenge det er nødvendig for å
            behandle henvendelsen din eller oppfylle lovpålagte krav. Vi
            behandler opplysningene på en sikker og ansvarlig måte og benytter
            nødvendige tekniske og organisatoriske tiltak for å beskytte
            informasjonen.
          </>
        ),
      },
      {
        title: "Deling av opplysninger",
        text: (
          <>
            Vi deler ikke personopplysninger med tredjeparter med mindre det er
            nødvendig for drift av våre tjenester, eller dersom vi er lovpålagt
            å gjøre det.
          </>
        ),
      },
      {
        title: "Dine rettigheter",
        text: (
          <>
            Du har rett til innsyn i hvilke personopplysninger vi har om deg,
            samt rett til å be om retting eller sletting av opplysninger. Du kan
            også protestere mot behandlingen eller be om begrensning av
            behandlingen i henhold til gjeldende personvernlovgivning. Dersom du
            mener at behandlingen av personopplysninger ikke er i samsvar med
            regelverket, har du også rett til å klage til Datatilsynet. Kontakt
            oss på{" "}
            <a
              href="mailto:info@innovatec.net"
              className="underline hover:opacity-80"
            >
              info@innovatec.net
            </a>{" "}
            dersom du har spørsmål om personvern eller ønsker å benytte dine
            rettigheter.
          </>
        ),
      },
    ],
  },

  en: {
    title: "Privacy Policy",
    sections: [
      {
        title: "Data Controller",
        text: (
          <>
            Innovatec AS is the data controller for the processing of personal
            data collected through our website. If you have questions regarding
            how we process personal data, you can contact us at{" "}
            <a
              href="mailto:info@innovatec.net"
              className="underline hover:opacity-80"
            >
              info@innovatec.net
            </a>
            .
          </>
        ),
      },
      {
        title: "Information We Collect",
        text: (
          <>
            When you use the contact form on our website, we collect information
            such as your name, email address, and the content of your message.
            Please do not send sensitive personal data through the contact form.
            The website may also collect technical information such as IP
            address, browser type, and visitor statistics through the use of
            cookies.
          </>
        ),
      },
      {
        title: "Purpose of Processing",
        text: (
          <>
            The information is used to respond to inquiries, follow up on
            communication, and provide relevant customer service. Information
            collected through cookies is used to analyze website usage and
            improve functionality and user experience. We do not use personal
            data for marketing purposes without consent.
          </>
        ),
      },
      {
        title: "Cookies",
        text: (
          <>
            Our website may use cookies to ensure basic functionality, analyze
            traffic, and improve user experience. A cookie is a small text file
            stored on your device when you visit the website. You can manage or
            delete cookies through your browser settings.
          </>
        ),
      },
      {
        title: "Storage and Security",
        text: (
          <>
            Personal data is stored only as long as necessary to process your
            inquiry or fulfill legal obligations. We process information
            securely and responsibly and implement necessary technical and
            organizational measures to protect the data.
          </>
        ),
      },
      {
        title: "Sharing of Information",
        text: (
          <>
            We do not share personal data with third parties unless necessary
            for operating our services or required by law.
          </>
        ),
      },
      {
        title: "Your Rights",
        text: (
          <>
            You have the right to access the personal data we hold about you, as
            well as request correction or deletion of your data. You may also
            object to processing or request restriction of processing in
            accordance with applicable privacy legislation. If you believe that
            the processing of personal data does not comply with regulations,
            you also have the right to file a complaint with the Norwegian Data
            Protection Authority (Datatilsynet). Contact us at{" "}
            <a
              href="mailto:info@innovatec.net"
              className="underline hover:opacity-80"
            >
              info@innovatec.net
            </a>{" "}
            if you have questions regarding privacy or wish to exercise your
            rights.
          </>
        ),
      },
    ],
  },
};
