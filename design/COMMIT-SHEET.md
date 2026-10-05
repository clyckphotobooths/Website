# COMMIT-SHEET — CLYCK Photobooths

## 1. Peak / Signature
**Scene 4, "De print":** een gepinde donkere kamer (320vh) waarin een fotostrip met de scroll uit een
printersleuf zakt en de vijf vierkante kaders zich één voor één ontwikkelen — het papierkleurige deksel
schuift omhoog, de foto komt tevoorschijn. Pure `transform`, vijf echte feestfoto's, geen video.
Het is het enige moment op de pagina dat je aan een vriend zou beschrijven: *"je ziet die strip gewoon
uit de printer komen."*

## 2. Color
- `--paper` **oklch(0.968 0.005 35)** — grond van de pagina, tier: **committed** (één merkbare zweem naar
  merk-hue, chroma blijft onder 0.01).
- `--ink` **oklch(0.19 0.012 35)** — het logo is zuiver zwart; de inkt op de pagina is dat ook, één tik warm.
- `--safelight` **oklch(0.52 0.185 27)** — het accent: het donkerrode veiligheidslicht van de doka.
- `--curtain` **oklch(0.31 0.105 22)** — het dichte doek van de gesloten booth (CTA-band, darkroom-scène).
- **Achtergrond-lichtheid als getal: target mean L ≈ 0.95** (lichte pagina, ± 88% van de pixels boven L 0.8).
  Waarom die hoogte: dit is een bedrijf dat *prints* verkoopt. De pagina is het papier, het rood is het
  licht, en de enige donkere momenten zijn de avond en de doka — contrast wordt dramaturgie in plaats van
  een thema-instelling.
- Waarom dit niet lavendel, niet crème en niet de categoriereflex: geen paarsblauw, geen crème (hue 35 met
  chroma 0.005 valt buiten de crème-band 40–100 en is geen "warmte-reflex" maar het papier zelf), en geen
  roze/confetti-pastel zoals elke andere photobooth-verhuurder. Het rood is afgeleid van het product zelf:
  het gordijn van de gesloten booth en het doka-licht.

## 3. Type
- **Display: Archivo (variabel), wght 800 / wdth 112–118.** Bewust de *breedte-as*: die echoot de zware,
  brede wordmark van CLYCK zonder zijn logo na te maken. Verhouding: `letter-spacing: -0.02em`.
- **Tekst: Newsreader (variabel serif).** Contrast-as: brede zware grotesk × humanistische serif — de
  serif is het papier, de grotesk is het licht.
- **Inter is afgewezen** als de default van 2024–2026; géén mono-servicelabels (huis-tell #2).

## 4. Grid break
**De strip loopt over de sectiegrens.** In scene 1 hangt de fotostrip vanaf de bovenrand van het beeld en
steekt ± 180 px door over de onderrand van de hero, de volgende band in (negatieve marge + `z-index`),
waar hij in scene 4 terugkomt als de strip die uit de printer komt. Die doorlopende strip is het enige
element dat de secties fysiek aan elkaar naait.

## 5. Motion budget
Drie families, verder niets scroll-getriggerd:
1. **entrance-reveal** — maskers op kopregels, kader-vulling met 60–80 ms stagger, wipe op foto's.
2. **parallax-depth** — de staande foto (scene 2) en de fotoband (scene 5) drijven ≤ 8% mee.
3. **scroll-scrub** — de gepinde print-scène (scene 4), 320vh, `scrub` 0.5.
Één wow-piek (scene 4); alle andere scènes bewegen minder hard.

## 6. Reflex check
a) *Eerste orde (wat een generieke AI voor "photobooth verhuur" maakt):* pastelroze naar lila gradient,
   confetti-snippers, scriptletter, "Capture your memories ✨", afgeronde pill-knoppen, drie identieke
   kaartjes met een camera-emoji, sterretjes en bokeh-clipart.
b) *Tweede orde (wat een AI die dát vermijdt maakt):* bijna-zwarte "cinematic" pagina met neon-glow en
   mono-labels, marquee met "PHOTOBOOTH. MOMENTS. MEMORIES.".
c) *Onze afwijking:* **doka + contactvel.** Papierwit met inktzwart (het logo bepaalt), warm donkerrood als
   het enige licht, serif voor de stem, en het product gepresenteerd als een **spec-lijst** in plaats van
   identieke kaartjes. De peak is geen effect maar het productmechanisme zelf: papier dat uit een printer komt.

## 7. House tells broken
1. **Bijna-zwart als default** → genegeerd: de pagina leeft op L ≈ 0.95 licht, met één donkere scène
   (de doka) als dramaturgische uitzondering in plaats van als mood.
2. **De statusbalk-header (logo links · status midden · actie rechts)** → genegeerd: de hero bezit de
   bovenrand, de navigatie staat klein rechts en verschijnt pas na de hero; geen live-dot, geen teller.
3. **Amber of acid als het enige accent** → genegeerd: het accent is doka-rood uit het eigen product, geen
   warme gloed-accentkleur.
