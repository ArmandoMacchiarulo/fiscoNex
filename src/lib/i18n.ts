export type Lang = "it" | "en";

type Dict = Record<string, string>;

const it: Dict = {
  brand: "FiscoNex",
  missionTitle: "FiscoNex",
  missionBody:
    "Ripensiamo il rapporto tra contribuente e Fisco: più semplice, chiaro e consapevole. Consulenza tailor-made, fondata su ascolto, competenza e continuità.",
  scrollHint: "Scorri per scegliere la tua area",
  chooseTitle: "Seleziona la tua area di interesse",
  professional: "FiscoNex Professional",
  business: "FiscoNex Business",
  whoTitle: "Chi siamo",
  whoBody:
    "FiscoNex unisce oltre quarant’anni di attività professionale con un percorso maturato in contesti multinazionali. Un progetto di famiglia che integra tradizione e visione internazionale per una consulenza solida e moderna.",
  navPlans: "I nostri piani",
  navContact: "Contattaci",
  navWho: "Chi siamo",
  heroProfessional: "Il tuo nuovo punto di collegamento con il Fisco",
  heroBusiness: "Soluzioni fiscali e amministrative per imprese in crescita",
  methodTitle: "Come lavoriamo",
  contactTitle: "Parla con noi",
  name: "Nome",
  email: "Email",
  message: "Messaggio",
  privacyLabel: "Ho letto e accetto la Privacy Policy",
  privacyPrefix: "Ho letto e accetto la",
  privacyPolicy: "Privacy Policy",
  send: "Invia",
  formSuccess: "Messaggio inviato (stub). TODO: invio reale email.",
  plansTitle: "I nostri piani",
  todo: "TODO: contenuto in lavorazione.",
  footerEmail: "info.placeholder@nomedominio.it",
  footerPhone: "+39 000 000 0000",
  footerVat: "P.IVA: IT00000000000",
};

const en: Dict = {
  brand: "FiscoNex",
  missionTitle: "FiscoNex",
  missionBody:
    "We rethink the relationship between taxpayers and the tax system: simpler, clearer, and more conscious. Tailor-made advisory built on listening, expertise, and continuity.",
  scrollHint: "Scroll to choose your area",
  chooseTitle: "Choose your area of interest",
  professional: "FiscoNex Professional",
  business: "FiscoNex Business",
  whoTitle: "About us",
  whoBody:
    "FiscoNex combines over forty years of professional practice with experience in multinational environments. A family project blending tradition and an international mindset for modern, solid advisory.",
  navPlans: "Our plans",
  navContact: "Contact",
  navWho: "About us",
  heroProfessional: "Your new bridge to the Tax Authority",
  heroBusiness: "Tax and admin solutions for growing companies",
  methodTitle: "How we work",
  contactTitle: "Talk to us",
  name: "Name",
  email: "Email",
  message: "Message",
  privacyLabel: "I have read and accept the Privacy Policy",
  privacyPrefix: "I have read and accept the",
  privacyPolicy: "Privacy Policy",
  send: "Send",
  formSuccess: "Message sent (stub). TODO: real email sending.",
  plansTitle: "Our plans",
  todo: "TODO: content in progress.",
  footerEmail: "info.placeholder@yourdomain.tld",
  footerPhone: "+39 000 000 0000",
  footerVat: "VAT: IT00000000000",
};

export function getDict(lang: Lang) {
  return lang === "en" ? en : it;
}
