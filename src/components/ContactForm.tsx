"use client";

import type { Lang } from "@/lib/i18n";
import { getDict } from "@/lib/i18n";
import Link from "next/link";
import { useId, useState } from "react";

export default function ContactForm({
  emailPlaceholder,
  lang,
}: {
  emailPlaceholder: string;
  lang?: Lang;
}) {
  const safeLang: Lang = lang === "en" ? "en" : "it";
  const t = getDict(safeLang);

  const [status, setStatus] = useState<"idle" | "ok">("idle");

  const rid = useId();
  const safeId = rid.replace(/[^a-zA-Z0-9]/g, "");
  const hpName = `company_${safeId}`;

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    if (String(form.get(hpName) || "").trim().length > 0) {
      setStatus("ok");
      e.currentTarget.reset();
      return;
    }

    setStatus("ok");
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 grid gap-4">
      <div className="hidden" aria-hidden="true">
        <label>
          Company
          <input name={hpName} tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className=" gap-2 text-sm">
        <div className="fn-text-80">{t.name}</div>
        <input
          name="name"
          required
          className="h-11 rounded-2xl border border-black/10 bg-white px-4 outline-none focus:ring-2 focus:ring-black/20 w-100"
          placeholder={t.name}
        />
      </label>

      <label className="gap-2 text-sm">
        <div className="fn-text-80">{t.email}</div>
        <input
          name="email"
          type="email"
          required
          className="h-11 rounded-2xl border border-black/10 bg-white px-4 outline-none focus:ring-2 focus:ring-black/20 w-100"
          placeholder={emailPlaceholder}
        />
      </label>

      <label className="gap-2 text-sm">
        <div className="fn-text-80">{t.message}</div>
        <textarea
          name="message"
          required
          rows={5}
          className="rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-black/20 w-100"
          placeholder={t.message}
        />
      </label>

      <label className="flex items-start gap-3 text-sm fn-text-80">
        <input
          name="privacy"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 rounded border-black/20"
        />
        <span>
          {t.privacyPrefix}{" "}
          <Link
            href={`/${safeLang}/privacy`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline fn-text"
          >
            {t.privacyPolicy}
          </Link>
          .
        </span>
      </label>

      <button
        type="submit"
        className="rounded-2xl bg-black px-5 py-3 text-white hover:opacity-90 transition"
      >
        {t.send}
      </button>

      {status === "ok" && (
        <div className="rounded-2xl border border-black/10 bg-black/5 px-4 py-3 text-sm">
          {t.formSuccess}
        </div>
      )}
    </form>
  );
}
