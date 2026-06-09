import { Locale } from "@/lib/i18n";

export const environmentContent: Record<
  Locale,
  {
    title: string;
    intro: string[];
    reportLabel: string;
    reportHref: string;
    policy: {
      title: string;
      sections: {
        title: string;
        text?: string;
        items?: string[];
      }[];
    };
  }
> = {
  no: {
    title: "Sertifisert Miljøfyrtårnsbedrift",
    intro: [
      "Innovatec har siden 2008 hatt et ekstra fokus på samfunnsansvar, miljø og bærekraft. En rekke miljøbevisste retningslinjer ble innført i bedriften, blant annet vedrørende sortering og avfallshåndtering, oppfordring til bruk av offentlig transport, begrensning av energiforbruk og kontinuerlig forbedring av arbeidsmiljø.",
      "Våren 2023 startet vi arbeidet med å bli sertifisert som Miljøfyrtårn, og vi ble sertifisert i juni samme år.",
      "En del av Miljøfyrtårn-sertifiseringen handler om samspillet mellom virksomhet og samfunnet. Derfor inviteres kunder, samarbeidspartnere og andre interessenter til å gi innspill om hvordan klima- og miljøpåvirkningen av våre varer og tjenester kan forbedres.",
    ],
    reportLabel: "Les vår Miljøfyrtårnrapport 2025",
    reportHref:
      "https://portal.miljofyrtarn.no/organizations/34759/data/publicStatistics",
    policy: {
      title: "Miljøpolicy for Innovatec – Innovative Technologies AS",
      sections: [
        {
          title: "Introduksjon",
          text: "Som IT-konsulentselskap forplikter Innovatec seg til å drive sin virksomhet på en bærekraftig måte og være en pådriver for klima- og miljøvennlige løsninger, både på lokalt og globalt nivå. Samtidig skal vi bidra ved å ha kunnskap om, foreslå og levere bærekraftige digitale løsninger til våre kunder og samfunnet ellers.",
        },
        {
          title: "Hensikt og omfang",
          items: [
            "Vår miljøpolicy skal være synlig og preget av åpenhet.",
            "Våre ansatte skal kjenne til og identifisere seg med miljøpolicyen.",
            "Våre leverandører, kunder og samarbeidspartnere skal ha tilgang til den.",
          ],
        },
        {
          title: "Mål",
          items: [
            "Reise mest mulig klimavennlig i våre tjenestereiser og ta hensyn til klima og miljø ved alle aspekter av vår virksomhet.",
            "Redusere stress for våre ansatte og vektlegge en sosialt bærekraftig hverdag.",
            "Legge til rette for en optimal arbeidssituasjon ved å konstant evaluere HMS-tiltak og innkjøp av arbeidsutstyr som minimerer arbeidsrelaterte helseplager.",
            "Være en pådriver for energieffektiv kode i prosjekter vi utfører for våre kunder.",
            "Bidra til å utvikle løsninger som effektiviserer arbeidshverdagen til våre kunder, og som er til det gode for hele samfunnet.",
            "Gi opplæring og utvikle våre ansatte, kunder og andre samarbeidspartnere innen klima og miljø.",
          ],
        },
        {
          title: "Ansvar og oppfølging",
          text: "Ledelsen har hovedansvaret for miljøarbeidet, men alle ansatte skal bidra gjennom bevisstgjøring og opplæring. Miljøpolicyen gjennomgås årlig for kontinuerlig forbedring.",
        },
      ],
    },
  },

  en: {
    title: "Certified Eco-Lighthouse company",
    intro: [
      "Innovatec has had a strong focus on social responsibility, environment and sustainability since 2008.",
      "In spring 2023, we started the process of becoming certified as an Eco-Lighthouse company, and we were certified in June the same year.",
      "As part of the certification, customers, partners and other stakeholders are invited to provide input on how the climate and environmental impact of our services can be improved.",
    ],
    reportLabel: "Read our Eco-Lighthouse report 2025",
    reportHref:
      "https://portal.miljofyrtarn.no/organizations/34759/data/publicStatistics",
    policy: {
      title: "Environmental policy for Innovatec – Innovative Technologies AS",
      sections: [
        {
          title: "Introduction",
          text: "As an IT consulting company, Innovatec is committed to running its business sustainably and contributing to climate- and environmentally friendly solutions.",
        },
        {
          title: "Purpose and scope",
          items: [
            "Our environmental policy shall be visible and transparent.",
            "Our employees shall know and identify with the policy.",
            "Our suppliers, customers and partners shall have access to it.",
          ],
        },
        {
          title: "Goals",
          items: [
            "Travel as climate-friendly as possible on business trips.",
            "Reduce stress for our employees and promote a socially sustainable workday.",
            "Facilitate a good working environment through continuous evaluation of HSE measures.",
            "Promote energy-efficient code in customer projects.",
            "Develop solutions that improve our customers’ workday and benefit society.",
            "Provide training and development within climate and environment.",
          ],
        },
        {
          title: "Responsibility and follow-up",
          text: "Management has the main responsibility for environmental work, but all employees shall contribute through awareness and training. The policy is reviewed annually.",
        },
      ],
    },
  },
};
