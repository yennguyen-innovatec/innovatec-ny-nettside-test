"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale } from "@/lib/i18n";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const segments = pathname.split("/");

  const switchTo = (next: Locale) => {
    const nextSegments = [...segments];
    nextSegments[1] = next;
    return nextSegments.join("/") || `/${next}`;
  };

  return (
    <div className="flex items-center gap-2 text-xl text-[var(--primary)] [font-family:var(--font-heading)]">
      <Link
        href={switchTo("no")}
        className={locale === "no" ? "font-semibold" : "text-black/60"}
      >
        NO
      </Link>
      <span className="text-black/30">/</span>
      <Link
        href={switchTo("en")}
        className={locale === "en" ? "font-semibold" : "text-black/60"}
      >
        EN
      </Link>
    </div>
  );
}
