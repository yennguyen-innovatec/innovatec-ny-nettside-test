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
    title: "Certified Eco-Lighthouse Company",
    intro: [
      "Since 2008, Innovatec has placed an extra focus on social responsibility, the environment and sustainability. A number of environmentally conscious guidelines were introduced within the company, including waste sorting and waste management, encouraging the use of public transportation, reducing energy consumption, and continuously improving the working environment.",
      "In spring 2023, we started the process of becoming certified as an Eco-Lighthouse company, and we were certified in June the same year.",
      "Part of the Eco-Lighthouse certification concerns the interaction between the company and society. Therefore, customers, partners and other stakeholders are invited to provide input on how the climate and environmental impact of our products and services can be improved.",
    ],
    reportLabel: "Read our Eco-Lighthouse Report 2025",
    reportHref:
      "https://portal.miljofyrtarn.no/organizations/34759/data/publicStatistics",
    policy: {
      title: "Environmental Policy for Innovatec – Innovative Technologies AS",
      sections: [
        {
          title: "Introduction",
          text: "As an IT consulting company, Innovatec is committed to operating its business in a sustainable manner and being a driving force for climate- and environmentally friendly solutions, both locally and globally. At the same time, we shall contribute by having expertise in, proposing and delivering sustainable digital solutions to our customers and society at large.",
        },
        {
          title: "Purpose and Scope",
          items: [
            "Our environmental policy shall be visible and characterized by openness.",
            "Our employees shall be familiar with and identify with the environmental policy.",
            "Our suppliers, customers and partners shall have access to it.",
          ],
        },
        {
          title: "Goals",
          items: [
            "Travel as climate-friendly as possible on business trips and take climate and environmental considerations into account in all aspects of our operations.",
            "Reduce stress for our employees and emphasize a socially sustainable everyday work life.",
            "Facilitate an optimal working situation by continuously evaluating HSE measures and purchasing work equipment that minimizes work-related health issues.",
            "Be a driving force for energy-efficient code in projects we carry out for our customers.",
            "Contribute to developing solutions that make our customers’ workday more efficient and benefit society as a whole.",
            "Provide training and develop our employees, customers and other partners in climate and environmental matters.",
          ],
        },
        {
          title: "Responsibility and Follow-up",
          text: "Management has the primary responsibility for environmental work, but all employees shall contribute through awareness and training. The environmental policy is reviewed annually for continuous improvement.",
        },
      ],
    },
  },
};
