# STORYBOARD — CLYCK Photobooths

## Film meta
- **Product:** verhuur van photobooths op feesten en evenementen. Onbeperkt printen, gepersonaliseerde fotostrips
  (eigen design, logo's, thema's), foto's na afloop online in originele kwaliteit, optioneel boomerang/GIF.
- **Audience:** studentenverenigingen en -feesten (galaprojecten, jaarfeesten), bruiloften, bedrijfsfeesten.
  Beslisser = feestcommissie / bruidspaar / office manager of HR. Gasten = 18–60, telefoon in de hand, jasje aan.
- **The one feeling:** *dit feest wordt één waar ze het nog maanden over hebben — en ik heb iets tastbaars in mijn hand.*
  (tastbaar plezier + het vertrouwen dat het geregeld is.)
- **Peak scene:** scene 4 — de print. Gepinde donkere kamer: een fotostrip komt uit de printer en de kaders
  ontwikkelen zich één voor één terwijl je scrollt. Intensiteit 9.
- **Assets available up front:** echte foto's uit het PDF-materiaal (lage resolutie: 360–1229 px breed), het
  logo (zwart-wit, filmstrip-motief), een 3D-render van de gesloten booth, 4 sfeerbeelden gegenereerd
  (darkroom, bokeh, gordijn).
- **Sourced-asset findings:** geen. De strip in het logo heeft *vierkante* kaders — dat is het ontwerpjuk voor
  de hele site: elk fotokader is 1:1, ook in de peak-scene. De echte foto's zijn telefoonfoto's van een
  tuinfeest: overwegend groen daglicht. Ze worden gecorrigeerd naar één grade (iets meer contrast, warme
  midden­tonen) zodat zes verschillende telefoons niet als zes verschillende films lezen.
- **Assumptions made (autonoom afgeleid):** site is één statische pagina, Nederlands, geen backend; het
  offerteformulier opent een `mailto:` (er is nog geen mailkoppeling). Contactgegevens en prijzen komen
  letterlijk uit het PDF-materiaal; telefoon/e-mail zijn placeholders die vervangen moeten worden.
- **References taken:** geen live recon gedraaid (geen awwwards-run in deze sessie) — de reflex-tabel uit
  taste.md §2 is de bron. Twee mechanieken wel bewust geleend uit de scroll-cinema bibliotheek:
  (1) *pinned stage met scroll-scrub* (de print), (2) *depth-parallax op een fotoband* (de galerij).
- **Moodboard read:** geen moodboard-run. Lichtkarakter komt uit het eigen materiaal: koud groen daglicht
  buiten, warm rood kunstlicht in de donkere kamer. Palet-relatie: papierwit als grond, inkt als teken,
  donkerrood als het enige licht. Te vermijden: het roze/confetti-palet dat de categorie standaard kiest.
- **Style gate verdict:** approved with carried notes. Carried notes: (1) de herofoto is 1229 px breed en
  wordt full-bleed gebruikt — op een 2560 px-scherm is hij zacht; hij ligt onder een zware scrim, filmgrain
  en letterbox, wat de zachtheid als *grain* laat lezen maar het blijft een beperking van het bronmateriaal;
  (2) het offerteformulier heeft geen backend en valt terug op `mailto:`.

## Arc

| # | Scene | Beat | Intensity | layout family | motion family |
|---|-------|------|-----------|---------------|---------------|
| 1 | De avond (hero) | hook | 7 | full-bleed-media | entrance-reveal |
| 2 | Wat er in de tas zit | rising | 4 | editorial-columns | parallax-depth |
| 3 | Drie opties, één prijslijst | rising | 6 | split-asymmetric | entrance-reveal |
| 4 | **De print** | **peak** | **9** | pinned-canvas | scroll-scrub |
| 5 | De volgende ochtend | proof | 5 | full-bleed-media | parallax-depth |
| 6 | Gala's, privacy en vragen | proof | 3 | marginal-notes | entrance-reveal |
| 7 | Vraag een datum aan | door | 5 | centred-type | none |

Motion families page-wide: **entrance-reveal, parallax-depth, scroll-scrub** (3). Geen twee buren delen er één.

---

### Scene 1 — De avond (hero)   | beat: hook | intensity: 7
- **purpose:** feel: *dit is een echt feest, niet een stockfoto* — learn: CLYCK zet een booth neer, je gasten
  krijgen een print mee.
- **subject:** het tuinfeest (echte foto, graded naar dusk) + de fotostrip die van boven in beeld hangt.
- **layout_family / motion_family:** full-bleed-media / entrance-reveal
- **camera:** eye-level breed, gasten van achteren, booth rechts in het kader.
- **lighting:** dusk — de foto is onderbelicht en koel; de scrim duwt hem verder naar blauwgroen, zodat de
  witte overhemden als licht bronnen gaan werken.
- **motion:** letterbox-balken komen in bij binnenkomst; de foto zet 1.05 → 1.0; de kopregel komt per regel
  vanachter een masker; de stripkaders vullen na met 60 ms stagger.
- **transition_in / out:** cut in, out: de strip loopt dóór over de sectiegrens heen (wipe op de volgende band).
- **scroll_len:** content (100vh hero).
- **copy:** H: "Jouw gasten gaan naar huis met een print in hun hand." / sub: "CLYCK zet een photobooth op je
  feest. Onbeperkt printen, strips in jouw eigen stijl, en na afloop alle foto's in originele kwaliteit."
  caption: "Studentenfeesten · bruiloften · bedrijfsfeesten — vanaf €325,- excl. btw, in heel Nederland."
- **media:** type: still (echte foto) · route: bestaand materiaal · frame prompt: n.v.t. —
  grade: `-modulate 96,110,97 -sigmoidal-contrast 4.5,50% -brightness-contrast -6x8`
- **fallback:** zonder JS staan alle elementen gewoon in hun eindstand (geen opacity-masker in CSS, alleen in JS).

### Scene 2 — Wat er in de tas zit   | beat: rising | intensity: 4
- **purpose:** feel: *dit is geregeld* — learn: onbeperkt printen, eigen design, foto's online, geen installatie.
- **subject:** de prints in de hand (staande foto) naast vier concrete regels.
- **layout_family / motion_family:** editorial-columns / parallax-depth
- **camera:** macro op handen en papier.
- **lighting:** paper-flat, daglicht.
- **motion:** de staande foto drijft langzamer dan de tekst (depth-parallax, 4 lagen: band, foto, tekst, hairline).
- **transition_in / out:** cut in / wipe-mask out naar scene 3.
- **scroll_len:** content.
- **copy:** H: "Geen installatie, geen gedoe. Wij regelen het." Regels: "Onbeperkt printen, de hele avond",
  "Strips in jouw stijl: eigen logo, thema of sponsoring", "Alle foto's na afloop online, in originele
  kwaliteit", "Optioneel een boomerang of GIF van elk fotomoment".
- **media:** still, bestaand materiaal (`prints-in-hand.webp`).
- **fallback:** parallax uit → statische kolommen, alles leesbaar.

### Scene 3 — Drie opties, één prijslijst   | beat: rising | intensity: 6
- **purpose:** feel: *er is voor mijn feest een passende maat* — learn: welke uitvoering, wat het kost.
- **subject:** de drie uitvoeringen naast elkaar als één doorlopende spec-lijst (geen identieke kaartjes).
- **layout_family / motion_family:** split-asymmetric (5/7, wisselend) / entrance-reveal
- **camera:** eye-level op de booth, staand.
- **lighting:** bewolkt daglicht + studiogrijs (de render).
- **motion:** elke rij schuift 40 px omhoog met een 80 ms stagger; de foto onthult met een wipe van links.
- **transition_in / out:** wipe-mask in (vanuit scene 2) / harde cut naar de donkere kamer (scene 4).
- **scroll_len:** content.
- **copy:** rij 1 "Photobooth in een kast — vanaf €450" / rij 2 "Volledig gesloten booth — vanaf €550,
  coming soon" / rij 3 "Photobooth op statief — vanaf €325, budgetvriendelijk". Plus de minpunten van optie 3
  (printer staat los; niet voor drukke events) — eerlijkheid is hier het bewijs.
- **media:** still, bestaand materiaal (kast, render, statief).
- **fallback:** rijen zonder wipe, foto's direct zichtbaar.

### Scene 4 — De print   | beat: **peak** | intensity: 9
- **purpose:** feel: *wow, en het is ook nog echt* — learn: de strip komt er direct uit, in jouw stijl.
- **subject:** de fotostrip die uit een printersleuf komt en zich kader voor kader ontwikkelt.
- **layout_family / motion_family:** pinned-canvas / scroll-scrub
- **camera:** macro, laag, van onderaf op de sleuf; het papier vult het kader.
- **lighting:** donkere kamer — donkerrood veiligheidslicht, het enige witte licht is het papier zelf.
- **motion:** de strip zakt met de scroll uit de sleuf (translateY), elk kader ontwikkelt doordat een
  papierkleurig deksel omhoog schuift; het rood ademt mee met de voortgang.
- **transition_in / out:** cut in (het licht valt uit) / out: naar het volle daglicht (letterbox open).
- **scroll_len:** 320vh, gepind.
- **copy:** H: "De print komt eraan." / sub: "Direct uitgeprint, nog voordat ze terug zijn bij hun glas.
  Vijf kaders die je zelf ontwerpt — met je logo, je thema, je namen."
- **media:** type: still-reeks (5 echte foto's) op een gegenereerde achtergrond (`gen/darkroom.webp`).
- **fallback:** geen JS of reduced motion → één statische strip die al uit de sleuf hangt, met alle 5 kaders
  zichtbaar, op de darkroom-achtergrond.

### Scene 5 — De volgende ochtend   | beat: proof | intensity: 5
- **purpose:** feel: *het houdt niet op bij het feest* — learn: online galerij, per event apart, originele kwaliteit.
- **subject:** de fotoband — vier echte foto's die langsdrijven.
- **layout_family / motion_family:** full-bleed-media / parallax-depth
- **camera:** reportage, wijd.
- **lighting:** daglicht, vol contrast.
- **motion:** de band drijft horizontaal mee met de scroll (≤ 8% van de breedte), elke foto met eigen snelheid.
- **transition_in / out:** letterbox open (in) / cut (out).
- **copy:** H: "Alle foto's de volgende dag online." / sub: "Per evenement apart opgeslagen, in originele
  kwaliteit, digitaal naar je toegestuurd. Optioneel als boomerang of GIF."
- **media:** still, bestaand materiaal + gegenereerde bokeh (`gen/bokeh.webp`) als achtergrond onder de band.
- **fallback:** zonder JS staat de band stil en toont hij dezelfde foto's.

### Scene 6 — Gala's, privacy en vragen   | beat: proof | intensity: 3
- **purpose:** feel: *ze snappen hoe een gala werkt* — learn: optie 2 komt eraan, en de praktische antwoorden.
- **subject:** het gordijn (gegenereerd) + de FAQ.
- **layout_family / motion_family:** marginal-notes / entrance-reveal
- **camera:** statisch, frontaal op het doek.
- **lighting:** donkerrood doek, licht van links.
- **motion:** de veelgestelde vragen openen met een hoogte-overgang (grid-template-rows), geen scroll-effecten.
- **transition_in / out:** cut in / cut out.
- **scroll_len:** content.
- **copy:** H: "Voor gala's waar privacy telt." / sub: "Optie 2 — de volledige booth met bankje en gordijn —
  is in de maak. Tot die tijd zetten we de kast of de statiefbooth neer, ook op hoge etages."
  FAQ: ruimte, opbouwtijd, stroom, eigen design aanleveren, betaling, hoge etages.
- **media:** still, gegenereerd (`gen/curtain.webp`) als bandachtergrond; de kastfoto als klein bijbeeld.
- **fallback:** FAQ werkt ook zonder JS (`<details>`-gedrag is niet nodig: het is een JS-accordion met
  zichtbare tekst als JS uit staat).

### Scene 7 — Vraag een datum aan   | beat: door | intensity: 5
- **purpose:** feel: *dit kan ik regelen* — learn: hoe je een datum aanvraagt en wat er dan gebeurt.
- **subject:** het formulier en de contactgegevens, op een dicht rood vlak.
- **layout_family / motion_family:** centred-type / none
- **camera:** n.v.t. (typografisch).
- **lighting:** het doek uit scene 6, nu bijna dicht.
- **motion:** uitsluitend hover- en focusstates, geen scroll-animatie — de deur landt rustig.
- **transition_in / out:** cut.
- **scroll_len:** content.
- **copy:** H: "Vraag een datum aan." / sub: "Vertel ons de datum, de locatie en het soort feest. Je hoort
  binnen één werkdag of die datum nog vrij is." Formulier: naam, e-mail, datum, locatie, soort feest,
  gewenste optie, bericht.
- **media:** none (type-led) + ingehouden gordijn-achtergrond.
- **fallback:** het formulier opent `mailto:` met alle velden voorgevuld; zonder JS staat het e-mailadres
  gewoon als tekst op de pagina.

## Gate 0 checklist
- [x] precies één scène met intensity ≥8 (scene 4)
- [x] geen twee buren delen layout- of motion-family
- [x] ≤3 motion families (entrance-reveal, parallax-depth, scroll-scrub)
- [x] elke scène heeft echte copy en een fallback
- [x] elke `media:`-blok is ingevuld (route + prompt of bron)
- [x] autonoom zelfgereviewd tegen *the one feeling*; verdict = approved with carried notes
