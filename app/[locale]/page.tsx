import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { getDictionary, isLocale, type Locale } from "@/i18n";
import { getSiteUrl } from "@/seo/site";
export function generateStaticParams() {
  return [{ locale: "it" }, { locale: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = isLocale(params.locale) ? (params.locale as Locale) : "it";
  const dict = await getDictionary(locale);

  const siteUrl = getSiteUrl();

  return {
    title: dict.home.seo.title,
    description: dict.home.seo.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        it: "/it",
        en: "/en",
      },
    },
    openGraph: {
      url: `${siteUrl}/${locale}`,
      title: dict.home.seo.title,
      description: dict.home.seo.description,
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = isLocale(params.locale) ? (params.locale as Locale) : "it";
  const dict = await getDictionary(locale);
  const otherLocale = locale === "it" ? "en" : "it";
  const otherLabel = otherLocale.toUpperCase();
  const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <main className="min-h-screen">
      {/* badge it/en */}
      <div className="fixed right-6 top-6 z-50">
        <Link
          href={`${BASE}/${otherLocale}`}
          className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-black backdrop-blur-md ring-1 ring-white/25 hover:bg-white/20"
          aria-label={`Switch language to ${otherLabel}`}
          title={`Switch to ${otherLabel}`}
        >
          <span className="opacity-80">{locale.toUpperCase()}</span>
          <span className="opacity-50">→</span>
          <span>{otherLabel}</span>
        </Link>
      </div>
      {/* HERO */}
      <section className="relative overflow-hidden text-white min-h-screen">
        <div className="absolute inset-0">
          <Image
            src={`${BASE}/image/Background_blue.png`}
            alt=""
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Diagonal stripes top-right */}
        <div className="absolute right-0 top-0 h-[320px] w-[420px] opacity-90 pointer-events-none">
          <Image
            src={`${BASE}/image/Linee.svg`}
            alt=""
            fill
            className="object-cover object-top-right scale-[1.08]"
          />
        </div>

        {/* Curved arrow */}
        <div className="absolute left-1/2 top-20 h-[120px] w-[120px] -translate-x-2 opacity-95 pointer-events-none">
          <Image
            src={`${BASE}/image/freccia.svg`}
            alt=""
            fill
            className="object-contain scale-[1.50]"
          />
        </div>

        <div className="relative mx-auto max-w-[1120px] px-8 pt-12 pb-28">
          <div>
            <Image
              src={`${BASE}/image/FiscoNex_logo_white.svg`}
              alt="FiscoNex"
              width={250}
              height={60}
              priority
            />
          </div>

          <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
            <div className="max-w-xl">
              <h1 className="font-[var(--font-heading)] text-5xl leading-[1.05] lg:text-6xl">
                {dict.home.hero.title}
              </h1>
              <p className="mt-6 text-2xl font-semibold leading-tight text-white/95">
                {dict.home.hero.subtitle}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-white/90">
                {dict.home.hero.description}
              </p>

              <div className="mt-8 flex gap-4">
                <Link
                  href={`${BASE}/${locale}#soluzioni`}
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-8 py-3 font-[var(--font-heading)] text-lg font-bold text-white"
                >
                  {dict.home.hero.ctaPrimary}
                </Link>
                <Link
                  href={`${BASE}/${locale}#chi-siamo`}
                  className="inline-flex items-center justify-center rounded-full border border-white/60 bg-white/5 px-8 py-3 font-[var(--font-heading)] text-lg font-bold text-white"
                >
                  {dict.home.hero.ctaSecondary}
                </Link>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="relative ml-auto h-[360px] w-[360px] lg:h-[460px] lg:w-[460px] ">
                <Image
                  src={`${BASE}/image/graphic.png`}
                  alt={dict.home.hero.visualAlt}
                  fill
                  className="object-contain scale-[1.12] -translate-x-6 lg:scale-[1.18] lg:-translate-x-10"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Torn paper transition */}
        <div className="absolute -bottom-1 left-0 h-24 w-full">
          <Image
            src={`${BASE}/image/paper 1.png`}
            alt=""
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </section>

      {/* SECTION 2: SOLUZIONI */}
      <section
        id="soluzioni"
        className="relative bg-[var(--color-light)] min-h-screen"
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(rgba(14,25,57,0.35) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />

        {/* paper corner */}
        <div className="absolute right-0 top-0 h-64 w-64 opacity-70 pointer-events-none">
          <Image
            src={`${BASE}/image/paper 1.png`}
            alt=""
            fill
            className="object-cover object-bottom-left rotate-180"
          />
        </div>
        <div className="absolute left-0 bottom-0 h-96 w-96 opacity-70 pointer-events-none">
          <Image
            src={`${BASE}/image/paper 1.png`}
            alt=""
            fill
            className="object-cover object-bottom-left "
          />
        </div>

        <div className="relative mx-auto max-w-[1120px] px-8 pt-20 pb-20">
          <h2 className="text-center font-[var(--font-heading)] text-5xl text-[var(--color-tertiary)]">
            {dict.home.solutions.titlePrefix}{" "}
            <span className="relative inline-block">
              {dict.home.solutions.titleAccent}
              <span className="absolute -bottom-1 left-0 h-2 w-full bg-[var(--color-accent)] opacity-80" />
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-center text-lg text-[var(--color-tertiary)]/80">
            {dict.home.solutions.subtitle}
          </p>

          {/* Decorative icons */}
          <div className="pointer-events-none">
            <div className="absolute left-8 top-44 h-24 w-24">
              <Image
                src={`${BASE}/image/lightbulb.webp`}
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute right-10 top-44 h-24 w-24">
              <Image
                src={`${BASE}/image/Ruote dentate.svg`}
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute left-1/2 top-[320px] h-10 w-24 -translate-x-1/2">
              <Image
                src={`${BASE}/image/Linee.png`}
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute left-1/2 bottom-14 h-16 w-16 -translate-x-1/2">
              <Image
                src={`${BASE}/image/Croce.png`}
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div className="rounded-[28px] bg-white p-10 shadow-[0_10px_30px_rgba(0,0,0,0.10)] ring-1 ring-black/5">
              <h3 className="text-center font-[var(--font-heading)] text-4xl text-[var(--color-tertiary)]">
                {dict.home.solutions.card1.title}
              </h3>
              <p className="mx-auto mt-4 max-w-sm text-center text-lg leading-relaxed text-[var(--color-tertiary)]/85">
                {dict.home.solutions.card1.text}
              </p>
              <div className="mt-8 flex justify-center">
                <Link
                  href={`${BASE}/${locale}/professional`}
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-10 py-3 font-[var(--font-heading)] text-lg font-bold text-white"
                >
                  {dict.home.solutions.cardCta}
                </Link>
              </div>
            </div>

            <div className="rounded-[28px] bg-white p-10 shadow-[0_10px_30px_rgba(0,0,0,0.10)] ring-1 ring-black/5">
              <h3 className="text-center font-[var(--font-heading)] text-4xl text-[var(--color-tertiary)]">
                {dict.home.solutions.card2.title}
              </h3>
              <p className="mx-auto mt-4 max-w-sm text-center text-lg leading-relaxed text-[var(--color-tertiary)]/85">
                {dict.home.solutions.card2.text}
              </p>
              <div className="mt-8 flex justify-center">
                <Link
                  href={`${BASE}/${locale}/business`}
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-10 py-3 font-[var(--font-heading)] text-lg font-bold text-white"
                >
                  {dict.home.solutions.cardCta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CHI SIAMO */}
      <section
        id="chi-siamo"
        className="bg-[var(--color-tertiary)] text-white min-h-screen"
      >
        <div className="mx-auto max-w-[1120px] px-8 py-24">
          <h2 className="text-center font-[var(--font-heading)] text-6xl">
            <span className="relative inline-block">
              {dict.home.about.title}
              <span className="absolute -bottom-2 left-0 h-[6px] w-full bg-[var(--color-accent)]" />
            </span>
          </h2>

          <div className="mx-auto mt-10 max-w-4xl text-center text-2xl leading-snug">
            <span className="font-bold text-[var(--color-accent)]">
              FiscoNex
            </span>{" "}
            <span className="font-bold">{dict.home.about.leadRest}</span>
          </div>

          <p className="mx-auto mt-8 max-w-4xl text-center text-xl leading-relaxed text-white/90">
            <span className="text-[var(--color-accent)] font-bold">
              {dict.home.about.highlight}
            </span>{" "}
            {dict.home.about.text}
          </p>

          <div className="mt-16 grid gap-12 md:grid-cols-2 md:justify-items-center">
            <div className="flex items-start gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#F8D7C9]">
                <Image
                  src={`${BASE}/image/cuore.svg`}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <h3 className="font-[var(--font-heading)] text-2xl text-[var(--color-accent)]">
                  {dict.home.about.feature1.title}
                </h3>
                <p className="mt-2 text-lg text-white/90">
                  {dict.home.about.feature1.text}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#F8D7C9]">
                <Image
                  src={`${BASE}/image/scudo.svg`}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <h3 className="font-[var(--font-heading)] text-2xl text-[var(--color-accent)]">
                  {dict.home.about.feature2.title}
                </h3>
                <p className="mt-2 text-lg text-white/90">
                  {dict.home.about.feature2.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="contatti"
        className="bg-[var(--color-light)] text-[var(--color-tertiary)]"
      >
        <div className="mx-auto max-w-[1120px] px-8 py-14">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div>
              <Image
                src={`${BASE}/image/FiscoNex_logo.svg`}
                alt="FiscoNex"
                width={260}
                height={60}
              />
            </div>

            <div>
              <div className="font-[var(--font-heading)] text-lg">
                {dict.home.footer.contactsTitle}
              </div>
              <ul className="mt-3 space-y-2 text-sm text-[var(--color-secondary)]">
                <li className="flex items-center gap-2">
                  <Image
                    src={`${BASE}/image/Social Icon/call.svg`}
                    alt=""
                    width={18}
                    height={18}
                  />
                  <span>{dict.home.footer.phone}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Image
                    src={`${BASE}/image/Social Icon/message.svg`}
                    alt=""
                    width={18}
                    height={18}
                  />
                  <span>{dict.home.footer.contactLink}</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="font-[var(--font-heading)] text-lg">
                {dict.home.footer.termsTitle}
              </div>
              <ul className="mt-3 space-y-2 text-sm text-[var(--color-secondary)]">
                <li className="flex items-center gap-2">
                  <Image
                    src={`${BASE}/image/Social Icon/info.svg`}
                    alt=""
                    width={18}
                    height={18}
                  />
                  <span>{dict.home.footer.cookies}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Image
                    src={`${BASE}/image/Social Icon/info.svg`}
                    alt=""
                    width={18}
                    height={18}
                  />
                  <span>{dict.home.footer.privacy}</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="font-[var(--font-heading)] text-lg">
                {dict.home.footer.followTitle}
              </div>
              <div className="mt-3 flex items-center gap-3">
                {[
                  {
                    icon: "/image/Social Icon/facebook.svg",
                    label: "Facebook",
                  },
                  {
                    icon: "/image/Social Icon/instagram.svg",
                    label: "Instagram",
                  },
                  {
                    icon: "/image/Social Icon/linkedin.svg",
                    label: "LinkedIn",
                  },
                  { icon: "/image/Social Icon/x.svg", label: "X" },
                ].map((s) => (
                  <span
                    key={s.label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-accent)]"
                    aria-label={s.label}
                    title={s.label}
                  >
                    <Image
                      src={`${BASE}${s.icon}`}
                      alt=""
                      width={16}
                      height={16}
                    />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
