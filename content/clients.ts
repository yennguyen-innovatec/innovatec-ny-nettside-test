import { Locale } from "@/lib/i18n";

import helfoLogo from "@/public/clients-logo/helfo-logo.png";
import navLogo from "@/public/clients-logo/nav-logo.jpg";
import siktLogo from "@/public/clients-logo/sikt-logo.png";
import hdirLogo from "@/public/clients-logo/hdir-logo.png";
import nhnLogo from "@/public/clients-logo/nhn.png";

export const clientsSectionContent: Record<
  Locale,
  {
    title: string;
    logos: {
      id: string;
      name: string;
      src: any;
    }[];
  }
> = {
  no: {
    title: "Noen av våre kunder",
    logos: [
      { id: "helfo", name: "Helfo", src: helfoLogo },
      { id: "nav", name: "NAV", src: navLogo },
      { id: "sikt", name: "Sikt", src: siktLogo },
      {
        id: "hdir",
        name: "Helsedirektoratet",
        src: hdirLogo,
      },
      {
        id: "nhn",
        name: "Norsk helsenett",
        src: nhnLogo,
      },
    ],
  },
  en: {
    title: "Some of our clients",
    logos: [
      { id: "helfo", name: "Helfo", src: helfoLogo },
      { id: "nav", name: "NAV", src: navLogo },
      { id: "sikt", name: "Sikt", src: siktLogo },
      {
        id: "hdir",
        name: "Helsedirektoratet",
        src: hdirLogo,
      },
      {
        id: "nhn",
        name: "Norsk helsenett",
        src: nhnLogo,
      },
    ],
  },
};
