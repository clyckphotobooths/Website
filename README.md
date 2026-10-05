# CLYCK Photobooths — website

Eén statische pagina, Nederlands, geen build-stap en geen backend. Open `index.html` en het werkt; de
fonts, het script (GSAP + ScrollTrigger + Lenis) en alle beelden staan in de map, dus de site werkt ook
offline.

## Bestanden

```
index.html                  de hele pagina (alle tekst staat hier)
assets/css/style.css        het designsysteem (tokens, secties, motion, fallbacks)
assets/js/main.js           de enhancement-laag: reveals, parallax, de print-scène, het formulier
assets/fonts/               Archivo + Newsreader, zelf-gehost (OFL) — geen Google Fonts-verzoek
assets/vendor/              gsap, ScrollTrigger, lenis (lokaal, geen CDN)
assets/img/                 de foto's uit het PDF-materiaal, gecorrigeerd naar één grade
assets/gen/                 drie sfeerbeelden (doka, bokeh, gordijn)
assets/logo/                het logo, met transparante achtergrond (inkt + wit)
design/                     COMMIT-SHEET.md, STORYBOARD.md, DESIGN.md, screenshots
```

## Publiceren

Sleep de map naar Netlify Drop, of zet hem op GitHub Pages / elke webserver:

```bash
python3 -m http.server 8080     # lokaal bekijken
```

Paden zijn relatief, dus de site werkt in een submap (`/clyck/`) net zo goed als in de root.

## Nog te vervangen voor livegang

1. **Contactgegevens** — `info@clyckphotobooths.nl` en `+31 6 1234 5678` staan op drie plekken:
   in het CTA-blok (`#contact`), in de footer en in het `mailto:` in `assets/js/main.js`.
   Zoek op `clyckphotobooths.nl` en `+31612345678`.
2. **Juridische pagina's** — de links naar algemene voorwaarden en privacyverklaring wijzen nu nog naar
   `#contact`; er is nog geen KvK-/btw-regel in de footer (zie de `<!-- VERVANGEN -->`-markering).
3. **Het formulier** — heeft geen backend: bij verzenden opent het mailprogramma van de bezoeker met alle
   velden voorgevuld. Wil je een echte inzending (of een kopie in een mailbox/CRM), koppel dan een
   formulierendpoint en vervang het `window.location.href = href`-blok in `main.js`.
4. **Foto's** — het aangeleverde materiaal is 360–1229 px breed (telefoonfoto's). Op een groot scherm is de
   hero zacht; nieuwe foto's op 2560 px breed maken de site aanzienlijk scherper. De grade staat in
   `design/DESIGN.md` zodat nieuwe beelden dezelfde look krijgen.
5. **Prijzen** — €450 / €550 / €325 excl. btw komen uit het aanleverdocument. Pas ze aan in `#opties`
   (en in de keuzelijst "Gewenste uitvoering" in het formulier).

## Toegankelijkheid en gedrag

- Werkt volledig zonder JavaScript: alle secties staan er, inclusief de print-scène (statische strip).
- `prefers-reduced-motion` krijgt een eigen rustige montage: geen pinning, geen scrub, geen parallax.
- Contrast: elk tekstpaar ≥ 4.5:1 (gemeten op de gerenderde pixels, niet op de tokens).
- Toetsenbord: skip-link, zichtbare focus-stijl in de accentkleur, FAQ werkt met `<details>`.



npx --yes live-server --host=0.0.0.0 --port=5500 --no-browser