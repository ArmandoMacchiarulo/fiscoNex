'use client';

import { useEffect } from "react";

export default function IndexPage() {
  useEffect(() => {
    const repo = "/fiscoNex";
    const base = window.location.pathname.startsWith(repo) ? repo : "";
    // default locale
    window.location.replace(`${base}/it`);
  }, []);

  return null;
}
