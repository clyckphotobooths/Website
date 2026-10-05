# DESIGN.md — CLYCK Photobooths

Style contract for this site. Read this before changing anything: every later edit (add a section, swap
the pricing, change the hero copy) starts here, so the page keeps being the same film instead of drifting
back to the average. Built with the `auteur` skill, cinematic (direct) register.

## 1. Tokens (the shipped values, not the plan)

```
--paper        oklch(0.968 0.005 35)   the page ground ("the print")
--paper-2      oklch(0.938 0.007 35)   banded section ground
--ink          oklch(0.19 0.012 35)    type, borders, the logo's black — one tick warm
--ink-2        oklch(0.42 0.012 35)    secondary text (7.1:1 on paper)
--hairline     oklch(0.19 0.012 35 / 0.14)
--safelight    oklch(0.52 0.185 27)    THE accent: the darkroom's red light
--safelight-ink oklch(0.44 0.17 27)    accent for text on paper (7.1:1 on paper-2)
--curtain      oklch(0.31 0.105 22)    the closed booth's velvet (the CTA band)
--curtain-deep oklch(0.22 0.075 22)    the gala/FAQ section
--night        oklch(0.17 0.035 25)    the darkroom (print scene, footer)
--print        oklch(0.97 0.004 30)    paper under safelight / type on dark surfaces
```

Commitment tier: **committed**, on a light page. Mean background lightness target **L ≈ 0.95** — this is a
company that sells prints, so the page is the paper and red is the only light. The single dark passage
(the darkroom, scene 4) is dramaturgy; a dark page would be the house reflex.

Type: **Archivo** (variable, `wght 800 / font-stretch 114%`, echoing the breadth of the CLYCK wordmark)
for display, **Newsreader** (variable serif) for prose. Both self-hosted, OFL, `assets/fonts/`.
Contrast axis: wide heavy grotesque × humanist serif. Never add a third family.

Space scale `--s-1 … --s-8` (0.5rem → 12rem) is deliberately unequal: section padding changes with the
weight of the section. Do not normalise it to one `padding-block`.

## 2. Motion vocabulary (three families — adding a fourth means removing one)

1. **entrance-reveal** — `[data-reveal]` (26px rise, `power3.out`), `[data-reveal-mask] > *` (105% masked
   rise, 90ms stagger), `[data-reveal-img]` (scale 1.045 → 1), `[data-reveal-wipe]` (clip-path left→right),
   `[data-stagger] > *` (60ms stagger).
2. **parallax-depth** — `[data-parallax-layer][data-speed]` moves `yPercent` 4→−9 × speed; items inside
   `.band__row` move `xPercent` instead. Travel stays small (≤ 8%); bigger reads as a gimmick.
3. **scroll-scrub** — the print scene only: a GSAP timeline on `.print`, `start: 'top top'`,
   `end: 'bottom bottom'`, `scrub: 0.5`, 320vh (260vh under 900px).

Timing: buttons 140ms, the nav 380ms (a panel slide), FAQ 280ms. Easing `--ease-out-quart`, never
`ease-in`. Only `transform` / `opacity` (plus clip-path wipes) are animated.

The paper's travel in the peak is **pixel-based** (`y: () => -paper.offsetHeight * 1.01`), not `yPercent`:
GSAP composes its transform on top of what CSS left there, so a percentage double-applies the offset.

## 3. Section-opening patterns (rotate them; never open two sections the same way)

| Scene | Opening |
|---|---|
| 1 hero | full-bleed photo, letterbox bars, the type sits on the scrim |
| 2 "wat er in de tas zit" | centred-type heading with an italic word, list below, hairline rows |
| 3 options | hairline rule + heading, then asymmetric 5/7 rows alternating side |
| 4 print (peak) | no heading chrome: the scene *is* the opening |
| 5 gallery | full-bleed photo band with the heading above it |
| 6 gala + FAQ | marginal note in a 0.5fr column, body in the 1fr column |
| 7 CTA | centred type on the curtain red |

There are no eyebrow kickers, no `01 / 02 / 03` scaffolding and no mono service labels anywhere.

## 4. Signature element (do not dilute it)

The **photostrip**: square frames, 1.5px ink border, exactly as the CLYCK mark. It appears three times and
each appearance means something different: hanging over the hero's bottom edge (the evening), the three
frames on the print paper in scene 4 (the product), and as the horizontal band on mobile. The strip
crossing a section boundary is the page's one deliberate grid break.

## 5. Adding to this project

- New copy: Dutch, concrete, plain. No "revolutionair / naadloos / moeiteloos"; a claim must be checkable.
  Prices live in `#opties` only — never repeat them in another section.
- New photo: run it through the same grade (`-modulate 100,104,100 -sigmoidal-contrast 3,52%`) and use the
  1:1 crop for strip frames, 4:5 for option figures, 3:5 for editorial stills.
- New section: give it a layout family and a motion family that differ from both neighbours, and reserve
  the image's aspect ratio in CSS (CLS).
- Anything animated must survive `prefers-reduced-motion` **and** JavaScript being off: the page is a
  complete document with both. `.no-js` and the reduced-motion block are the static cut of the same film.
- Two things never to reintroduce: `mix-blend-mode` on a full-viewport overlay (costs ~half the frame
  rate) and `ch`-based max-widths on wrapper elements (they measure the *wrapper's* font size, not the
  heading's).

## 6. Verification (what was actually run)

- `slopscan` clean on `index.html`, `assets/css/style.css`, `assets/js/main.js` (0 fails, 0 warns). The one
  hit on a full-tree scan is `addEventListener('scroll')` inside vendored `lenis.min.js` — not our code.
- 72 screenshots (`design/shots/`) at 390 / 768 / 1440, plus a `prefers-reduced-motion` journey; every
  frame looked at.
- Contrast: every text pair ≥ 4.5:1 measured through rendered pixels; type over photography measured by
  sampling the pixels behind it (hero headline 6.9:1, print copy 12.9:1).
- Perf: `motionqa --dpr 2 --throttle 4` → **minFps 60**, scroll long-task 0ms, 0 console errors.
- No-JS: full-page screenshot with JavaScript disabled — every section complete, including the print.
