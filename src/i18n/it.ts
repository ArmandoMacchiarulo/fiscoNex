export const it = {
  common: {
    brand: "FiscoNex",
    language: "Lingua",
    italian: "Italiano",
    english: "Inglese",
    cta: "CTA",
  },
  home: {
    seo: {
      title: "FiscoNex — Consulenza fiscale e contabile su misura",
      description:
        "Ripensiamo il tuo rapporto con il fisco: più semplice, chiaro e consapevole. Consulenza tailor-made per professionisti e imprese.",
    },

    nav: {
      about: "Chi siamo",
      solutions: "Soluzioni",
      contact: "Contatti",
    },

    hero: {
      tagline: "tax and accounting firm",

      title: "Ripensiamo\nil tuo rapporto\ncon Fisco:",
      subtitle: "più semplice, chiaro\ne consapevole.",
      description:
        "Consulenza tailor-made fondata su ascolto, competenza e continuità.",
      ctaPrimary: "Inizia ora",
      ctaSecondary: "Chi siamo",
      visualAlt: "Illustrazione FiscoNex",
    },

    solutions: {
      titlePrefix: "Soluzioni su misura",
      titleAccent: "per te",
      subtitle:
        "Che tu sia un libero professionista o un’azienda strutturata, abbiamo il supporto perfetto per le tue esigenze fiscali.",

      cardCta: "Inizia ora",

      card1: {
        title: "Privati &\nProfessionisti",
        text: "Supporto mirato per freelance, partite IVA e privati. Dichiarazioni, detrazioni e consulenze personalizzate.",
        cta: "Inizia ora",
      },
      card2: {
        title: "Aziende &\nImprese",
        text: "Soluzioni complete per PMI, startup e grandi imprese. Contabilità, bilanci, consulenza strategica e compliance.",
        cta: "Inizia ora",
      },
    },

    about: {
      title: "Chi Siamo",

      // riga “FiscoNex …” nel mock
      leadRest:
        "unisce oltre quarant’anni di attività professionale con un percorso maturato in contesti multinazionali.",

      // parola/evidenza arancione nella frase sotto
      highlight: "Un progetto di famiglia",

      text: "che integra tradizione e visione internazionale per una consulenza solida e moderna.",

      boxTitle: "Un progetto di famiglia",
      boxText:
        "Tradizione e visione internazionale per una consulenza solida e moderna.",

      feature1: {
        title: "Umanità",
        text: "Dietro ogni pratica c’è una persona.",
      },
      feature2: {
        title: "Affidabilità",
        text: "Competenza certificata e aggiornamento continuo.",
      },
    },

    footer: {
      tagline: "tax and accounting firm",
      rights: "Tutti i diritti riservati.",

      contactsTitle: "Contatti",
      termsTitle: "Termini e condizioni",
      followTitle: "Seguici",

      phone: "333 666000666",
      contactLink: "Contattaci",

      cookies: "Cookie",
      privacy: "Privacy policy",
    },

    // (Legacy placeholders — kept to avoid breaking older references)
    section1: {
      title: "Titolo (Sezione 1)",
      paragraph: "Paragrafo (Sezione 1) — placeholder.",
    },
    section2: {
      title: "Titolo (Sezione 2)",
      paragraph: "Paragrafo (Sezione 2) — placeholder.",
      professional: {
        title: "Professional",
        paragraph: "Paragrafo — placeholder.",
        cta: "Vai a Professional",
      },
      business: {
        title: "Business",
        paragraph: "Paragrafo — placeholder.",
        cta: "Vai a Business",
      },
    },
    section3: {
      title: "Titolo (Sezione 3 — Chi siamo)",
      paragraph: "Paragrafo (Sezione 3) — placeholder.",
    },
  },

  professional: {
    seo: {
      title: "Professional — Coming soon",
      description: "Pagina Professional (placeholder).",
    },
    title: "Titolo — Professional",
    comingSoon: "Coming soon",
    paragraph: "Paragrafo — placeholder.",
  },

  business: {
    seo: {
      title: "Business — Coming soon",
      description: "Pagina Business (placeholder).",
    },
    title: "Titolo — Business",
    comingSoon: "Coming soon",
    paragraph: "Paragrafo — placeholder.",
  },
} as const;
