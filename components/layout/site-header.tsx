"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/layout/container";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { getNavigation } from "@/content/navigation";
import { Locale } from "@/lib/i18n";

type SiteHeaderProps = {
  locale: Locale;
};

export function SiteHeader({ locale }: SiteHeaderProps) {
  const navigation = getNavigation(locale);
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActiveLink = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === href;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-black/10 bg-white/88 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl"
            : "border-transparent bg-white/60 backdrop-blur-md"
        }`}
      >
        <Container
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "py-3" : "py-5"
          }`}
        >
          <Link
            href={`/${locale}`}
            className="logo-text relative z-[60] shrink-0"
            aria-label="Innovatec home"
          >
            Innovatec
          </Link>

          <nav
            className="hidden items-center gap-2 md:flex"
            aria-label="Primary navigation"
          >
            {navigation.map((item) => {
              const active = isActiveLink(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-lg font-heading transition ${
                    active
                      ? "underline"
                      : "text-[var(--primary)] hover:bg-black/5 hover:text-black"
                  } focus:outline-none focus:ring-2 focus:ring-black/15`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <LanguageSwitcher locale={locale} />
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((prev) => !prev)}
            className="relative z-[60] inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/80 backdrop-blur md:hidden focus:outline-none focus:ring-2 focus:ring-black/15"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>

            <span className="relative h-5 w-6">
              <span
                className={`absolute left-0 top-0 h-0.5 w-6 origin-center bg-black transition-all duration-300 ${
                  open ? "translate-y-[9px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[9px] h-0.5 w-6 bg-black transition-all duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[18px] h-0.5 w-6 origin-center bg-black transition-all duration-300 ${
                  open ? "-translate-y-[9px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </Container>

        <div
          className={`md:hidden transition-opacity duration-300 ${
            open
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          <div
            className="fixed inset-0 top-[72px] bg-black/30 backdrop-blur-[2px]"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          <div
            id="mobile-menu"
            className={`absolute left-0 right-0 top-full border-t border-black/10 bg-white shadow-2xl transition-all duration-300 ${
              open ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
            }`}
          >
            <Container className="flex min-h-[calc(100vh-72px)] flex-col py-6">
              <nav
                className="flex flex-col gap-2"
                aria-label="Mobile navigation"
              >
                {navigation.map((item) => {
                  const active = isActiveLink(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`rounded-2xl px-4 py-4 text-2xl font-heading transition ${
                        active
                          ? "underline"
                          : "text-[var(--primary)] hover:bg-black/5 hover:text-black"
                      }`}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-8 rounded-2xl border border-black/10 bg-black/[0.02] p-4">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.12em] text-black/50">
                  Language
                </p>
                <LanguageSwitcher locale={locale} />
              </div>
            </Container>
          </div>
        </div>
      </header>

      <div
        className={`transition-all duration-300 ${
          scrolled ? "h-[73px]" : "h-[89px]"
        }`}
      />
    </>
  );
}
