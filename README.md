# FiscoNex — Next.js SEO-first starter (IT/EN)

## Requisiti
- Node.js 18+ (consigliato 20+)
- npm / pnpm / yarn

## Installazione
```bash
npm install
npm run dev
```

Apri `http://localhost:3000` — verrai reindirizzato a `/it`.

## Struttura i18n (SEO-friendly)
- `/it` e `/en` (route dedicate)
- Dizionari centralizzati:
  - `src/i18n/it.ts`
  - `src/i18n/en.ts`

## Pagine
- `/{locale}`: home con 3 section (sfondi per section)
- `/{locale}/professional`: Coming soon
- `/{locale}/business`: Coming soon

## Immagini di sfondo
Metti i JPG in:
- `public/image/section1.jpg`
- `public/image/section2.jpg`
- `public/image/section3.jpg`

## SEO
- Metadata per pagina (title/description/canonical + alternates languages)
- `hreflang` tramite `alternates.languages`
- `sitemap.xml` generata da `app/sitemap.ts`
- `robots.txt` generato da `app/robots.ts`
- JSON-LD base in homepage: `src/seo/jsonld.tsx`

### Impostare l'URL del sito (importante per sitemap/OG/canonical assoluti)
Crea un file `.env.local`:
```bash
NEXT_PUBLIC_SITE_URL=https://www.tuodominio.it
```

## Placeholder “brand info”
File: `src/config/brand.ts` (vuoto come richiesto). Compilalo quando sei pronto.
