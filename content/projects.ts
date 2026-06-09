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
  detail: string;
};

export const projects: Record<Locale, Project[]> = {
  no: [
    {
      slug: "kuhr",
      client: "helsedirektoratet",
      title: "Digitalt kontroll- og utbetalingssystem for helserefusjon",
      description:
        "Løsningen automatiserer kontroll og utbetaling av refusjonskrav i helsesektoren, og bidrar til raskere oppgjør, høy kvalitet og korrekt forvaltning av offentlige midler. Innovatec står i samarbeid med kunden for design, utvikling og forvaltning av systemet.",
      image: projectMainImage,
      sector: "Offentlig sektor",
      year: "Langsiktig samarbeid",
      expertise: [
        "Systemutvikling",
        "Integrasjoner",
        "Arkitektur",
        "Sikkerhet",
        "Automatisering",
      ],
      detail: `
      KUHR er et nasjonalt kontroll- og utbetalingssystem for helserefusjoner, utviklet for NAV IT
      og Helsedirektoratet. Løsningen automatiserer kontroll og utbetaling av refusjonskrav i
      helsesektoren, og bidrar til raskere oppgjør, høy kvalitet og korrekt forvaltning av offentlige
      midler.
      
      Systemet behandler over 90 millioner regninger årlig og står for utbetaling av nær 30
      milliarder kroner hvert år. Løsningen håndterer store transaksjonsvolumer på tvers av en
      rekke fagområder, blant annet lege, poliklinikk, privat lab/radiologi, helsestasjon,
      pasientreiser, fysioterapi, psykolog, kiropraktor, tannhelse, logoped, jordmor, ortoptist,
      audiopedagog, tannpleier og rehabiliteringsinstitusjoner.
      
      Hele 97–98 % av alle refusjonskrav behandles automatisk gjennom en avansert regelmotor.
      Samtidig støtter løsningen manuell saksbehandling, oppfølging og rapportering der det er
      behov, og legger til rette for effektiv samhandling gjennom moderne API-er og integrasjoner.
      
      Innovatec har ansvar for design, utvikling, videreutvikling og forvaltning av løsningen i tett samarbeid med kunden. KUHR er bygget som en skalerbar og robust plattform, tilpasset kontinuerlige endringer i regelverk, integrasjoner og brukerbehov.
      `,
    },
    {
      slug: "digital-samhandling",
      client: "Privat virksomhet",
      title: "Utvikling av KI tjeneste fra prototype til ferdig løsning",
      description:
        "Innovatec bidrar med rådgivning og utvikling innen regelteknologi, og er en del av et tverrfaglig team som bygger fremtidens løsning for håndtering av vitnemål og kompetansebevis.",
      image: projectSideTopImage,
      sector: "Offentlig sektor",
      year: "Prosjektbasert leveranse",
      expertise: [
        "API-utvikling",
        "Frontend",
        "Integrasjoner",
        "Rådgivning",
        "Automatisering",
      ],
      detail: `
Nasjonal vitnemålsdatabase (NVB) sikrer at vitnemål og kompetansebevis fra videregående
opplæring er korrekt registrert, validert og tilgjengelig for videre bruk. Løsningen brukes både
av skoler for kvalitetssikring og av aktører som trenger pålitelig dokumentasjon, som for
eksempel Samordna opptak.

Som en del av infrastrukturen levert av Sikt, bidrar NVB til trygg og effektiv deling av
utdanningsdata på tvers av sektoren.

Dagens løsning moderniseres for å møte nye krav til fleksibilitet, vedlikehold og
samhandling. Den nye plattformen legger til rette for enklere forvaltning av komplekst
regelverk, blant annet gjennom et mer tilgjengelig regelspråk som også kan brukes av
fagpersoner uten teknisk bakgrunn.

Løsningen utvikles med moderne API-er, støtte for internasjonale standarder og en avansert
regelmotor, og gjør det enklere å integrere, validere og dele vitnemålsdata på en sikker og
effektiv måte.


`,
    },
    {
      slug: "modernisering-av-fagsystem",
      client: "Norsk helsenett",
      title: "Digital samhandling i legemiddelkjeden",
      description:
        "Løsningen er et godt eksempel på hvordan standardisering og digital samhandling kan styrke kvalitet, effektivitet og pasientsikkerhet i moderne helsetjenester.",
      image: projectSideBottomImage,
      sector: "Offentlig sektor",
      year: "Prosjektoppdrag",
      expertise: [
        "Teknisk rådgivning",
        "Arkitektur",
        "Integrasjoner",
        "Standardisering",
        "Datamodeling",
        "Kvalitetssikring",
      ],
      detail: `
E-resept er en nasjonal løsning som muliggjør sikker og effektiv elektronisk formidling av
resept- og legemiddelinformasjon. Løsningen knytter sammen hele verdikjeden – fra
forskrivning til utlevering og økonomisk oppgjør – i ett helhetlig, digitalt forløp.

Som en del av den nasjonale e-helseinfrastrukturen utviklet og forvaltet av Norsk Helsenett,
bidrar e-resept til bedre samhandling, økt kvalitet og mer effektive helsetjenester.

Innovatec bistår med rådgivning innen teknisk arkitektur og virksomhetsarkitektur, samt
forvaltning av krav og meldingsstandarder i e-reseptens verdikjede. Arbeidet sikrer robuste
løsninger som støtter kontinuerlig utvikling og samhandling på tvers av aktører i
helsesektoren.


`,
    },
  ],

  en: [
    {
      slug: "kuhr",
      client: "The Norwegian Directorate of Health",
      title: "Digital control and payment system for healthcare reimbursements",
      description:
        "The solution automates the control and payment of reimbursement claims in the healthcare sector and contributes to faster settlements, high quality and proper management of public funds. In collaboration with the client, Innovatec is responsible for the design, development and maintenance of the system.",
      image: projectMainImage,
      sector: "Public sector / education",
      year: "Long-term collaboration",
      expertise: [
        "System development",
        "Integrations",
        "Architecture",
        "Maintenance",
      ],
      detail: `
  KUHR is a national control and payment system for healthcare reimbursements, developed for NAV IT
  and the Norwegian Directorate of Health. The solution automates the control and payment of reimbursement claims in
  the healthcare sector and contributes to faster settlements, high quality and proper management of public
  funds.
  
  The system processes more than 90 million claims annually and is responsible for payments of nearly
  30 billion NOK every year. The solution handles large transaction volumes across a
  range of professional areas, including general practitioners, outpatient clinics, private laboratories/radiology,
  healthcare centres, patient travel, physiotherapy, psychology, chiropractic care, dental care,
  speech therapy, midwifery, orthoptics, audiopedagogy, dental hygienists and rehabilitation institutions.
  
  As much as 97–98% of all reimbursement claims are processed automatically through an advanced rules engine.
  At the same time, the solution supports manual case handling, follow-up and reporting where
  needed, while enabling efficient collaboration through modern APIs and integrations.
  
  Innovatec has been responsible for the design, development, further development and maintenance of the solution
  since 2002, in close collaboration with the client. KUHR is built as a scalable and robust
  platform, adapted to continuous changes in regulations, integrations and user needs.
  `,
    },

    {
      slug: "digital-samhandling",
      client: "Large private enterprise",
      title: "Development of an AI service from prototype to finished solution",
      description:
        "Innovatec contributes consulting and development within rule technology and is part of a multidisciplinary team building the future solution for handling diplomas and certificates of competence.",
      image: projectSideTopImage,
      sector: "Public sector",
      year: "Project-based delivery",
      expertise: ["API development", "Frontend", "Integrations", "Consulting"],
      detail: `
  The National Diploma Registry (NVB) ensures that diplomas and certificates of competence from upper secondary
  education are correctly registered, validated and made available for further use. The solution is used both
  by schools for quality assurance and by organizations that require reliable documentation, such as
  the Norwegian Universities and Colleges Admission Service.
  
  As part of the infrastructure delivered by Sikt, NVB contributes to secure and efficient sharing of
  educational data across the sector.
  
  The current solution is being modernized to meet new requirements for flexibility, maintenance and
  collaboration. The new platform enables simpler management of complex
  regulations, including through a more accessible rules language that can also be used by
  domain experts without a technical background.
  
  The solution is being developed with modern APIs, support for international standards and an advanced
  rules engine, making it easier to integrate, validate and share diploma data in a secure and
  efficient way.
  `,
    },

    {
      slug: "modernisering-av-fagsystem",
      client: "Norwegian Health Network",
      title: "Digital collaboration in the medication value chain",
      description:
        "The solution is a good example of how standardization and digital collaboration can strengthen quality, efficiency and patient safety in modern healthcare services.",
      image: projectSideBottomImage,
      sector: "Industry / services",
      year: "Modernization project",
      expertise: [
        "Technical consulting",
        "Frontend",
        "Backend",
        "Quality assurance",
      ],
      detail: `
  E-prescription is a national solution that enables secure and efficient electronic communication of
  prescription and medication information. The solution connects the entire value chain – from
  prescribing to dispensing and financial settlement – in one complete digital process.
  
  As part of the national e-health infrastructure developed and managed by the Norwegian Health Network,
  e-prescription contributes to better collaboration, increased quality and more efficient healthcare services.
  
  Innovatec provides consulting within technical architecture and enterprise architecture, as well as
  management of requirements and messaging standards in the e-prescription value chain. The work ensures robust
  solutions that support continuous development and collaboration across stakeholders in
  the healthcare sector.
  `,
    },
  ],
};
