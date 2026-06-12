import { Locale } from "@/lib/i18n";

type CareerPosition = {
  title: string;
  deadline: string;
  location: string;
  type: string;
  function: string;
  language: string;
  description: string;
  tasks: string[];
  qualifications: string[];
  skills: string[];
};
export const careersContent: Record<
  Locale,
  {
    title: string;
    description: string;
    sections: string[];
    intro: {
      title: string;
      description: string;
    };
    valuesTitle: string;
    values: {
      title: string;
      description: string;
    }[];
    positionsTitle: string;
    positionsIntro: string;
    positions: CareerPosition[];
    block: {
      title: string;
      description: string;
      buttonLabel: string;
      buttonHref: string;
    };
    jobbIntro: string;
  }
> = {
  no: {
    title: "Jobb hos oss",
    description: "Ønsker du nye utfordringer i et proaktivt konsulentmiljø?",
    sections: ["Ledige stillinger", "Våre verdier", "Møt folka våre"],

    intro: {
      title: "Et fagmiljø for nysgjerrige teknologer",
      description:
        "Hos Innovatec jobber du tett med erfarne konsulenter, utviklere og rådgivere som brenner for teknologi, kvalitet og gode løsninger. Vi deler kunnskap, lærer av hverandre og bygger løsninger som skaper verdi for kundene våre.",
    },

    valuesTitle: "Dette er viktig for oss",
    values: [
      {
        title: "Faglig utvikling",
        description:
          "Vi legger til rette for læring, deling og utvikling gjennom prosjekter, samarbeid og faglige diskusjoner.",
      },
      {
        title: "Tillit og ansvar",
        description:
          "Du får tillit til å ta ansvar, påvirke løsninger og bidra med egne perspektiver i teamet.",
      },
      {
        title: "Kvalitet",
        description:
          "Vi er opptatt av solid håndverk, gode prosesser og løsninger som kan videreutvikles over tid.",
      },
      {
        title: "Trivsel",
        description:
          "Vi holder til midt i Oslo sentrum med kontorer i en klassisk bygård med gangavstand til alt av offentlig kommunikasjon og det byen har å tilby. I tillegg til faglige samlinger gjør vi også store og små sosiale happenings, turer og utflukter.",
      },
    ],

    positionsTitle: "Ledige stillinger",
    positionsIntro:
      "Her finner du våre ledige stillinger. Ta gjerne kontakt dersom du ønsker å vite mer om en rolle eller hvordan det er å jobbe hos oss.",
    positions: [
      {
        title: "Senior testleder",
        deadline: "31. august 2026",
        location: "Oslo",
        type: "Fast, heltid",
        function: "QA / Testing / Testledelse",
        language: "Norsk",
        description:
          "Vi søker en erfaren testleder som kan ta ansvar for hele testkjeden fra strategi og planlegging til praktisk automasjon og bygge en sterk kvalitetskultur. Du vil jobbe tett med utviklere, produkteiere og designere i smidige team, og få stor påvirkningskraft på hvordan våre kunder bygger kvalitet inn fra start.",
        tasks: [
          "Definere og videreutvikle kundens teststrategi og metodikk på tvers av alle produktteam",
          "Utarbeide testplaner, koordinere testaktiviteter og rapportere testresultater til interessenter",
          "Designe, implementere og vedlikeholde automatiserte tester med Playwright og Cypress",
          "Gjennomføre funksjonell testing, API-testing og integrasjonstesting",
          "Identifisere og kommunisere risiko, avhengigheter og flaskehalser gjennom hele utviklingsløpet",
          "Koordinere brukeraksseptansetesting (UAT) med interne og eksterne interessenter",
          "Veilede og bygge opp testerkompetansen i smidige produktteam",
          "Bidra til kontinuerlig forbedring av praksiser, verktøy og metrikker for test og monitorering",
        ],
        qualifications: [
          "Minimum 5 års erfaring med testledelse og strukturert testing i smidige utviklingsteam",
          "ISTQB Foundation Level er et krav; Advanced Level (Test Manager) er en stor fordel",
          "Solid erfaring med testautomatisering, eksempelvis Playwright, Cypress eller Selenium",
          "God forståelse av API-testing med Postman, Karate eller REST Assured",
          "Erfaring med testadministrasjonsverktøy som Jira/Zephyr, Azure DevOps eller ALM",
          "Grunnleggende skriptingkompetanse i Python, Java, Kotlin eller TypeScript",
          "Kjennskap til risikovurdering, ytelsestesting og ikke-funksjonelle krav",
          "Flytende norsk, skriftlig og muntlig, er et krav",
        ],
        skills: [
          "ISTQB Foundation",
          "ISTQB Advanced",
          "Playwright",
          "Cypress",
          "Selenium",
          "Azure DevOps",
          "Jira / Zephyr",
          "API-testing",
          "Agile / Scrum",
          "Python / Java / Kotlin",
          "CI/CD",
          "Risikostyring",
          "UAT",
        ],
      },
      {
        title: "Senior data scientist",
        deadline: "30. september 2026",
        location: "Oslo",
        type: "Fast, heltid",
        function: "Senior data scientist",
        language: "Norsk",
        description:
          "Nå styrker vi Data & AI-teamet med en senior data scientist som kan ta modeller hele veien fra rådata og eksperimentering til produksjonssetting, overvåking og kontinuerlig forbedring. Du jobber tett på forretningssiden og bidrar til at våre kunder tar bedre, raskere og mer treffsikre beslutninger.",
        tasks: [
          "Utvikle, trene og produksjonssette maskinlæringsmodeller for prediksjon, klassifisering og beslutningsstøtte",
          "Analysere store, sammensatte datasett for å avdekke mønstre, trender og forretningsmuligheter",
          "Bygge og vedlikeholde MLOps-pipelines for kontinuerlig integrasjon, utrulling og overvåking av modeller i drift",
          "Samarbeide tett med dataingeniører, produkteiere og forretningssiden i smidige tverrfaglige team",
          "Omsette komplekse analyser til tydelige anbefalinger og presentasjoner for ulike målgrupper",
          "Bidra til god datakvalitet, versjonskontroll og dokumentasjon av modeller og metoder",
          "Holde deg faglig oppdatert og dele kunnskap aktivt",
        ],
        qualifications: [
          "Mastergrad eller høyere innen statistikk, matematikk, informatikk, data science eller kvantitativ økonomi",
          "Minimum 3 års erfaring med modellutvikling og maskinlæring i produksjonsmiljøer",
          "Solid kompetanse i Python og SQL",
          "Erfaring med ML-rammeverk som scikit-learn, PyTorch og/eller TensorFlow",
          "Praktisk erfaring med MLOps, CI/CD og versjonskontroll via Git / GitHub",
          "Kjennskap til skyplattformer som GCP, Azure eller AWS",
          "God forretningsforståelse og evne til å koble modeller til konkrete forretningsmål",
          "Flytende norsk, skriftlig og muntlig",
        ],
        skills: [
          "Python",
          "SQL",
          "Maskinlæring",
          "scikit-learn / PyTorch / TensorFlow / MLOps / CI/CD",
          "Git / GitHub",
          "Statistikk / matematikk",
          "Cloud (GCP / Azure / AWS)",
          "Databricks / Spark",
          "Kubernetes / OpenShift",
          "Power BI / Plotly / R / Tidsserieanalyse",
          "LLM / generativ KI",
          "Norsk språk",
        ],
      },
    ],

    block: {
      title: "Vil du bli en del av Innovatec?",
      description:
        "Det er menneskene hos oss som gjør forskjellen. I Innovatec møter du et inkluderende arbeidsmiljø preget av nysgjerrighet, samarbeid og et sterkt engasjement for teknologi og utvikling. Vi deler kunnskap, heier på hverandre og skaper et miljø hvor det er rom for både faglig og personlig vekst. Vi er alltid på utkikk etter dyktige mennesker som ønsker å utvikle seg sammen med oss. Hos Innovatec får du muligheten til å jobbe i et inspirerende og fremoverlent miljø, sammen med kollegaer som brenner for læring, innovasjon og gode løsninger.",
      buttonLabel: "Ledige stillinger",
      buttonHref: "/jobb-hos-oss#ledige-stillinger",
    },
    jobbIntro:
      "Takk for din interesse for å se på muligheter hos Innovatec. Vi går gjennom alle søknader manuelt og vi gir alltid en tilbakemelding på mottatte søknader. Søknad med CV sendes på e-post til jobb@innovatec.net. Ikke bruk mye tid eller tokens på et langt søknadsbrev, men del gjerne om det er noe du vil vise oss, det kan være en artikkel du har skrevet, en video, et prosjekt du har gjort eller noe annet du brenner for.",
  },

  en: {
    title: "Careers",
    description:
      "Looking for new challenges in a proactive consulting environment?",
    sections: ["Open positions", "Our values", "Meet our people"],

    intro: {
      title: "A professional environment for curious technologists",
      description:
        "At Innovatec, you work closely with experienced consultants, developers and advisors who care about technology, quality and meaningful solutions.",
    },

    valuesTitle: "What matters to us",
    values: [
      {
        title: "Professional growth",
        description:
          "We support learning, knowledge sharing and development through projects, collaboration and professional discussions.",
      },
      {
        title: "Trust and responsibility",
        description:
          "You are trusted to take responsibility, influence solutions and contribute your own perspective.",
      },
      {
        title: "Quality",
        description:
          "We care about solid craftsmanship, good processes and solutions that can evolve over time.",
      },
      {
        title: "Well-being",
        description:
          "We are located in the middle of Oslo city center with offices in a classic apartment building within walking distance of all public transportation and what the city has to offer. In addition to professional gatherings, we also organize large and small social happenings, trips and excursions.",
      },
    ],

    positionsTitle: "Open positions",
    positionsIntro:
      "Here are our current open positions. Feel free to get in touch if you would like to learn more about a role or what it is like to work at Innovatec.",

    positions: [
      {
        title: "Senior Test Manager",
        deadline: "31 August 2026",
        location: "Oslo",
        type: "Permanent, Full-time",
        function: "QA / Testing / Test Management",
        language: "Norwegian",
        description:
          "We are looking for an experienced Test Manager who can take responsibility for the entire testing lifecycle, from strategy and planning to practical automation, while helping build a strong quality culture. You will work closely with developers, product owners, and designers in agile teams and have significant influence on how our clients build quality into their products from the start.",

        tasks: [
          "Define and further develop the client's testing strategy and methodology across all product teams",
          "Prepare test plans, coordinate testing activities, and report test results to stakeholders",
          "Design, implement, and maintain automated tests using Playwright and Cypress",
          "Perform functional testing, API testing, and integration testing",
          "Identify and communicate risks, dependencies, and bottlenecks throughout the development lifecycle",
          "Coordinate User Acceptance Testing (UAT) with internal and external stakeholders",
          "Mentor team members and strengthen testing capabilities within agile product teams",
          "Contribute to continuous improvement of testing practices, tools, and monitoring metrics",
        ],

        qualifications: [
          "Minimum 5 years of experience in test management and structured testing within agile development teams",
          "ISTQB Foundation Level certification is required; Advanced Level (Test Manager) is highly desirable",
          "Strong experience with test automation using Playwright, Cypress, Selenium, or similar tools",
          "Solid understanding of API testing with tools such as Postman, Karate, or REST Assured",
          "Experience with test management tools such as Jira/Zephyr, Azure DevOps, or ALM",
          "Basic scripting skills in Python, Java, Kotlin, or TypeScript",
          "Knowledge of risk assessment, performance testing, and non-functional requirements",
          "Fluent Norwegian, both written and spoken, is required",
        ],

        skills: [
          "ISTQB Foundation",
          "ISTQB Advanced",
          "Playwright",
          "Cypress",
          "Selenium",
          "Azure DevOps",
          "Jira / Zephyr",
          "API Testing",
          "Agile / Scrum",
          "Python / Java / Kotlin",
          "CI/CD",
          "Risk Management",
          "UAT",
        ],
      },

      {
        title: "Senior Data Scientist",
        deadline: "30 September 2026",
        location: "Oslo",
        type: "Permanent, Full-time",
        function: "Senior Data Scientist",
        language: "Norwegian",
        description:
          "We are expanding our Data & AI team with a Senior Data Scientist who can take models all the way from raw data and experimentation to production deployment, monitoring, and continuous improvement. You will work closely with business stakeholders and help our clients make better, faster, and more accurate decisions.",

        tasks: [
          "Develop, train, and deploy machine learning models for prediction, classification, and decision support",
          "Analyze large and complex datasets to identify patterns, trends, and business opportunities",
          "Build and maintain MLOps pipelines for continuous integration, deployment, and monitoring of production models",
          "Collaborate closely with data engineers, product owners, and business stakeholders in agile cross-functional teams",
          "Translate complex analyses into clear recommendations and presentations for different audiences",
          "Contribute to data quality, version control, and documentation of models and methodologies",
          "Stay up to date with developments in the field and actively share knowledge",
        ],

        qualifications: [
          "Master’s degree or higher in statistics, mathematics, computer science, data science, or quantitative economics",
          "Minimum 3 years of experience in machine learning and model development in production environments",
          "Strong proficiency in Python and SQL",
          "Experience with machine learning frameworks such as scikit-learn, PyTorch, and/or TensorFlow",
          "Practical experience with MLOps, CI/CD, and version control using Git / GitHub",
          "Experience with cloud platforms such as GCP, Azure, or AWS",
          "Strong business understanding and the ability to connect models to real business objectives",
          "Fluent Norwegian, both written and spoken",
        ],

        skills: [
          "Python",
          "SQL",
          "Machine Learning",
          "scikit-learn / PyTorch / TensorFlow / MLOps / CI/CD",
          "Git / GitHub",
          "Statistics / Mathematics",
          "Cloud (GCP / Azure / AWS)",
          "Databricks / Spark",
          "Kubernetes / OpenShift",
          "Power BI / Plotly / R / Time Series Analysis",
          "LLM / Generative AI",
          "Norwegian Language",
        ],
      },
    ],

    block: {
      title: "Want to become part of Innovatec?",
      description:
        "It is the people at Innovatec who make the difference. At Innovatec, you will find an inclusive work environment characterized by curiosity, collaboration and a strong commitment to technology and development. We share knowledge, support one another and create an environment where there is room for both professional and personal growth. We are always looking for talented people who want to grow together with us. At Innovatec, you will have the opportunity to work in an inspiring and forward-thinking environment alongside colleagues who are passionate about learning, innovation and great solutions.",
      buttonLabel: "Open positions",
      buttonHref: "/jobb-hos-oss#ledige-stillinger",
    },
    jobbIntro:
      "Thank you for your interest in opportunities at Innovatec. We review all applications manually and always provide feedback on received applications. Applications with a CV should be sent by email to jobb@innovatec.net. Please do not spend too much time or tokens on a long cover letter, but feel free to share something you would like us to see, such as an article you have written, a video, a project you have worked on, or anything else you are passionate about.",
  },
};
