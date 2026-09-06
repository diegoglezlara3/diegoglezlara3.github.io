---
name: Diego González Lara — sitio personal
description: Variante personal del mundo Garabato; dos rieles convergentes son la columna vertebral de la página
colors:
  papel: "#F1F1ED"
  papel-tarjeta: "#FBFBF9"
  tinta: "#17181C"
  blanco: "#FFFFFF"
  azul: "#2B3FD6"
  marino: "#1E2A78"
  rojo: "#E63B2E"
  amarillo: "#FFD21F"
  esmeralda: "#1FA86B"
  morado: "#6A3FD4"
  tinta-85: "rgba(23, 24, 28, 0.85)"
  tinta-70: "rgba(23, 24, 28, 0.7)"
  tinta-15: "rgba(23, 24, 28, 0.15)"
  tinta-08: "rgba(23, 24, 28, 0.08)"
typography:
  posicion:
    fontFamily: "IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "clamp(2.35rem, 6.4vw, 5.25rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "clamp(1.75rem, 3.6vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  title:
    fontFamily: "IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "clamp(1.0625rem, 1.5vw, 1.3125rem)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  guia:
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.0625rem, 1.5vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.25em"
  label-larga:
    fontFamily: "IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.8125rem"
    fontWeight: 500
    letterSpacing: "0.01em"
  dato:
    fontFamily: "IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "clamp(1.5rem, 3vw, 2rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
  hand:
    fontFamily: "Gochi Hand, Bradley Hand, cursive"
    fontSize: "clamp(1.1875rem, 2vw, 1.625rem)"
    fontWeight: 400
    lineHeight: 1.38
rounded:
  none: "0px"
spacing:
  marco: "clamp(1.25rem, 5vw, 4.5rem)"
  paso: "clamp(3.25rem, 6.5vw, 6rem)"
  tarjeta: "clamp(1.5rem, 3vw, 2.25rem)"
  tarjeta-alta: "clamp(1.75rem, 3.5vw, 2.75rem)"
  medida: "68ch"
components:
  button-primary:
    backgroundColor: "{colors.azul}"
    textColor: "{colors.blanco}"
    rounded: "{rounded.none}"
    padding: "1rem 1.75rem"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.marino}"
    textColor: "{colors.blanco}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.tinta}"
    rounded: "{rounded.none}"
    padding: "1rem 1.75rem"
    height: "44px"
  button-ghost-hover:
    backgroundColor: "{colors.tinta}"
    textColor: "{colors.papel}"
  card-marco:
    backgroundColor: "{colors.papel-tarjeta}"
    rounded: "{rounded.none}"
    padding: "{spacing.tarjeta}"
  card-caso:
    backgroundColor: "{colors.papel-tarjeta}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.none}"
    padding: "clamp(1.5rem, 2.5vw, 1.9rem)"
  panel-sin-resolver:
    backgroundColor: "{colors.marino}"
    textColor: "{colors.papel}"
    rounded: "{rounded.none}"
    padding: "clamp(1.75rem, 4vw, 3.25rem)"
  toggle-idioma:
    backgroundColor: "{colors.papel-tarjeta}"
    textColor: "{colors.tinta-70}"
    rounded: "{rounded.none}"
    padding: "0.55rem 0.7rem"
    height: "44px"
  toggle-idioma-active:
    backgroundColor: "{colors.tinta}"
    textColor: "{colors.papel}"
---

# Design System: Diego González Lara — sitio personal

## Overview

**Creative North Star: "Los Dos Rieles"**

This site is a personal variant of the Garabato world, documented at
`Landing page/DESIGN.md`. It inherits that world's materials wholesale — the papers,
the ink, the twelve crayons, Azul Rey `#2B3FD6`, IBM Plex Mono / Inter / Gochi Hand,
the zero-blur Sello de Tinta, the crayon-filtered section kicker — and does not
re-derive or contradict them. What is this site's own is the **composition**: two
hairline rails that run the full height of every page and close into a single blue node
just above the contact block. Everything else is the parent expediente, laid out for a
one-person record instead of a product landing page.

The page reads as a document with two proof tracks running down its margins. Content
sits between them; on phones the content collapses to one column but the rails stay in
the margins and keep converging, so the metaphor survives every width. The rails are
drawn in SVG by `assets/site.js` against the live page height, not baked into markup,
and a `ResizeObserver` on `.pagina` redraws them whenever the height changes — the
language swap and late-loading images both move it.

Restraint is the register. There is exactly one animated moment on the whole site (the
rails lighting up as contact enters view), exactly one dark block per page (`.sin-resolver`
on marino), three kickers per page, and one hand annotation per section. The build ships
four static pages with no framework, no build step and no third-party runtime; the visual
system has to hold up under hand-editing.

This record is written after the build and describes the shipped artifact. The composition
choice it documents is corroborated by the direction contract's FORM block — seed key
`9594f743`, dealt indices 6, 5, 3 — and the build shipped under a `ship` verdict scoped to
eight scored fixes and two citations, not a fresh whole-surface pass.

**Key Characteristics:**
- Inherited Garabato materials: papel `#F1F1ED`, tinta `#17181C`, Azul Rey `#2B3FD6`, the crayons for hand marks only.
- Two converging SVG rails as the page's structural spine at every width.
- Zero radius, zero blur: 2px ink borders plus the 5px offset Sello de Tinta.
- One animated moment per page, coincident with the single conversion.
- Bilingual by attribute swap (`data-es` / `data-en`), Spanish default, persisted.
- One documented exception to the parent world: the portrait runs in colour.

## Colors

Inherited from Garabato unchanged. This variant uses a narrowed subset of the crayon
box — rojo, amarillo, esmeralda, morado — because the site needs the kicker rotation and
nothing else; the crayons it does not use are not deleted from the world, just unused here.

### Primary
- **Azul Rey Kune** (`#2B3FD6`): links, the primary button, the hand annotation, the rail
  remate and the convergence node. On this site it is specifically the colour of
  *convergence and contact* — it appears at the point where the two tracks become one.
- **Crayón Marino** (`#1E2A78`): primary-button hover, link hover, and the ground of the
  single dark panel per page (`.sin-resolver`).

### Neutral
- **Papel de Oficina** (`#F1F1ED`): page ground, everywhere, full bleed.
- **Papel de Tarjeta** (`#FBFBF9`): card surfaces sitting on the paper — one step lighter.
- **Tinta de Acta** (`#17181C`): body text, all 2px borders, all offset shadows, the rail
  stroke at 28% opacity, and the scrollbar thumb.
- **Tintas derivadas** (85% / 70% / 15% / 8%): paragraph text at 85%, labels and secondary
  copy at 70%, hairline rules at 15%, the sticky bar's bottom edge at 8%. 70% is the floor.

### Tertiary
- **Los crayones en uso** — Rojo (`#E63B2E`), Esmeralda (`#1FA86B`), Morado (`#6A3FD4`),
  Amarillo (`#FFD21F`). Rojo → esmeralda → morado is the parent's pinned kicker rotation;
  amarillo substitutes for the third slot only when the kicker sits on marino ground, and
  also carries the `.falta` line inside that panel.

### Named Rules
**La Regla del Crayón** (inherited, parent `DESIGN.md:118`). The crayons exist only for
hand marks — here that means the filtered kicker underline and the `.falta` line on marino.
Never a section background, never paragraph text, never an icon.

**La Regla de la Rotación.** Three kickers per page, no more, in the order rojo →
esmeralda → morado. On a marino ground, morado does not read; amarillo takes that slot.
The count is part of the rule: a fourth kicker means the page has too many sections.

**La Regla del Azul de Convergencia.** On this site Azul Rey is reserved for things that
lead to the conversation: links, the primary control, the rail remate, the node. It is not
a decorative accent and it does not appear in section furniture.

## Typography

**Display / Mono Font:** IBM Plex Mono (`ui-monospace, SFMono-Regular, Menlo, monospace`)
**Body Font:** Inter (`system-ui, -apple-system, Segoe UI, sans-serif`)
**Hand Font:** Gochi Hand (`Bradley Hand, cursive`)

**Character:** Inherited from Garabato without amendment. Mono is what gets signed,
measured or audited; Inter carries the prose and disappears; Gochi Hand is the one human
annotation in the margin. This site's only typographic addition is a non-caps label
variant for strings that tracked caps cannot carry.

### Hierarchy
- **Posición** (700, `clamp(2.35rem, 6.4vw, 5.25rem)`, line-height 1.02): the H1 position
  claim on the home page's first viewport. One per site. Deliberately smaller than the
  parent world's hero display: this is a person's claim, not a product's banner.
- **Headline** (700, `clamp(1.75rem, 3.6vw, 2.75rem)`, line-height 1.1): section H2s, always
  `text-wrap: balance`. The contact H2 runs one step larger (`clamp(1.875rem, 4.4vw, 3.25rem)`).
- **Title** (700, `clamp(1.0625rem, 1.5vw, 1.3125rem)`): card and list-item H3s.
- **Body** (400, 1.0625rem, line-height 1.65, max `68ch`): Inter paragraphs at 85% ink.
- **Guía** (400, `clamp(1.0625rem, 1.5vw, 1.25rem)`): the lead paragraph under a page title,
  capped tighter at 54–56ch so it stays a lead and not a block of body.
- **Label** (500, 0.75rem, letter-spacing 0.25em, UPPERCASE, 70% ink): metadata, list rubrics,
  data captions.
- **Label larga** (500, 0.8125rem, letter-spacing 0.01em, sentence case): the same mono voice
  for strings long enough that tracked caps become unreadable. New to this site.
- **Dato** (700, `clamp(1.5rem, 3vw, 2rem)`, letter-spacing -0.03em, tabular): the figures in
  `.tira-datos`, each sitting under a 2px ink rule.
- **Hand** (Gochi Hand, `clamp(1.1875rem, 2vw, 1.625rem)`, rotate -2.2°, max 28ch): margin
  annotations in Azul Rey, or amarillo on marino.

### Named Rules
**La Regla del Monoespacio** (inherited, parent `DESIGN.md:139`). If it is signed, measured
or audited — titles, buttons, labels, figures — it is IBM Plex Mono. Inter speaks only in
paragraphs.

**La Regla de la Mano** (inherited, parent `DESIGN.md:140–141`). One Gochi Hand annotation
per section, always slightly rotated. This build runs 1 / 1 / 3 / 1 across index,
caso-lepp, caso-minutas and caso-garabato — three on the minutas case, each in its own
section, which is the rule read literally.

**La Regla de la Cifra Tabular.** Every number that can be compared column-to-column carries
`font-variant-numeric: tabular-nums` — `.dato`, `[data-num]`, `.mono`, `th`, `td`.

## Layout

A single centred column (`max-width: 1180px`) with fluid outer padding
(`--marco: clamp(1.25rem, 5vw, 4.5rem)`) and a vertical rhythm of one step
(`--paso: clamp(3.25rem, 6.5vw, 6rem)`) between sections. Prose is capped at
`--medida: 68ch`.

The composition device is `.carriles`: a grid that runs one column below 62rem and two
equal columns at and above it, each lane headed by a `.carril-tag` — a mono uppercase label
preceded by a 1.75rem × 2px colour dash (`--carril-color`, ink for one lane and Azul Rey for
the other). The tag is the only thing that says which track a block belongs to once the
lanes collapse on a phone, so it is never hidden.

Breakpoints in use, all `min-width` and all in rem: 42rem (stage lists gain a label column),
48rem (career rows and the before/after pair split), 54rem (case cards go to three across),
62rem (the two lanes and the hero split). Two `max-width` exceptions exist: 47.99rem hides
the decorative corner crayons, and 26rem compresses the top bar so brand, language toggle
and CTA still fit on the narrowest phone.

The hero (`.portada-cuerpo`) is a 1.55fr / 0.85fr grid aligned to `end` above 62rem: the
position line and its lead paragraph at the left rail, the portrait at the right.

**Amendment, post-build (2026-09-06).** Carried verbatim from the direction contract's
"Citations and amendments": *"The FIRST VIEWPORT block above was rewritten after the build:
it originally placed the portrait on the left rail. The build puts the position line at the
left rail and the portrait at the right, because on a Persuade surface in a left-to-right
language the claim has to land before the face. This is a deliberate change of the contract
to match a better build, recorded rather than silently absorbed."* This rests on a designer's
judgement rather than a standard evidence type, and it is legitimate only while it stays
disclosed. Do not resolve it into a clean statement of intent.

### Named Rules
**La Regla del Riel Absoluto.** `.pagina > :not(.rieles)` lifts every direct child above the
rail layer. The exclusion is load-bearing: if that rule reached `.rieles`, its
`position: relative` would beat the layer's `position: absolute` and the rail canvas would
collapse to a fraction of the page height. Never simplify the selector to `.pagina > *`.

**La Regla del Vértice Alto.** The rails close *above* the contact heading
(`heading top + 44px`, clamped to `[120, H − 24]`), and the diagonal is confined to the last
stretch (`cierre = min(300, yUnion × 0.16)`). The contact block is centred; a centre vertex
placed at or below the heading draws the two diagonals straight through the text like a
strike-through.

## Elevation & Depth

The system prints, it does not float. Inherited from the parent world without change: no
blur anywhere, no gradients, no radius. Depth comes from a hard offset shadow paired with a
2px ink border, from tonal steps between papers, and from the single marino panel.

### Shadow Vocabulary
- **Sello de Tinta** (`box-shadow: 5px 5px 0 0 #17181C`): the default and only resting shadow.
  Honoured at all six call sites in this build — `.marco`, `.caso`, `.sin-resolver`,
  `.contraste-lado--despues`, `.retrato .marco-foto`, and via `--sello`. Always with the 2px
  ink border.
- **Sello Profundo** (`box-shadow: 8px 8px 0 0 #17181C`): case-card hover only, paired with a
  `translate(-2px, -2px)` lift.
- **Sello Chico** (`box-shadow: 3px 3px 0 0 #17181C`): case-card active only, paired with a
  `translate(1px, 1px)` press.

### Named Rules
**La Regla del Sello** (inherited, parent `DESIGN.md:148, 151–152`). Zero blur in box shadows.
If the element looks like it floats, it is wrong; it must look stamped. The three shadow
values above are one gesture at three depths — the card is being pressed into the paper and
released, never lifted off it.

## Shapes

Live corners everywhere: `--rounded.none` is 0px and there is no radius token above it. Two
stroke weights carry the whole system — 2px solid ink for anything that is a surface, a
control or a boundary, and 1px `tinta-15` for hairline rules inside a list. A 2px **dashed**
ink border is the system's one honest-uncertainty form: `.contraste-lado--antes` (the "before"
state) and `.estado` (the status note on an unfinished thing) both use it, with a transparent
ground. Solid means settled; dashed means not yet.

The rails themselves are the site's recurring silhouette: two vertical hairlines
(`stroke-width: 2px`, `vector-effect: non-scaling-stroke`, 28% ink) that stay in the margins
and close in a cubic curve at the very end.

## Components

Tactile and stamped: hard ink edges, offset seals, one hand mark. The register is a
government file someone drew on — inherited from the parent, applied to a personal record.

### Buttons
- **Shape:** live corners (0px), 2px border, minimum 44px tall.
- **Primary:** Azul Rey ground, white text, IBM Plex Mono 500 at 0.875rem / 0.04em tracking,
  padding `1rem 1.75rem`.
- **Ghost:** transparent with 2px ink border and ink text; hover inverts to ink ground with
  paper text.
- **Hover / Focus / Active:** primary hovers to marino; focus is the global
  `outline: 3px solid #2B3FD6, offset 3px`; active presses 1px down. All transitions are
  ≤0.14s and all are disabled under `prefers-reduced-motion`.

### Cards / Containers
- **Corner Style:** 0px, always.
- **Marco compartido:** 2px ink border + Sello de Tinta + Papel de Tarjeta ground, padding
  `clamp(1.5rem, 3vw, 2.25rem)` (the `--alto` variant goes to `clamp(1.75rem, 3.5vw, 2.75rem)`).
  This is the shared language of every card; only the ground varies.
- **Case card (`.caso`):** the marco as a full-height flex link with a mono "ir" cue pinned to
  the bottom; hover deepens the seal to 8px and lifts 2px, active presses to 3px.
- **Panel sin resolver:** the marco with a marino ground and paper text at 88%; internal rules
  at `rgba(241,241,237,0.22)`. One per page, maximum.

### Navigation
Sticky top bar, paper at 90% with `backdrop-filter: blur(8px)` and a 1px `tinta-08` bottom
edge. Brand in mono 700 (hover to Azul Rey), then the language toggle and one ghost CTA. There
is no nav menu on any page — the bar carries exactly three things, and below 26rem all three
shrink rather than any of them dropping. A skip link on ink ground precedes everything.

### Language Toggle
A two-button ink-bordered group; the active button inverts to ink ground with paper text via
`aria-pressed="true"`, the inactive one sits at 70% ink and darkens on hover. Both are 44×44px
minimum. This is the visible half of the bilingual mechanism: every translatable node carries
`data-es` / `data-en` (with `-html`, `-alt`, `-label` and `-title` variants for rich content
and attributes), `<html>` carries `data-titulo-*` and `data-desc-*` for title and meta
description, Spanish is the default, and the choice persists in `localStorage` under
`dgl-idioma`. Any new node with visible text must ship both languages or it will freeze in
Spanish on swap.

### Kicker de Sección (inherited signature)
Mono uppercase label underlined by a 5px bar run through the `#crayon-rough` SVG filter
(`feTurbulence` `baseFrequency="0.045"` `numOctaves="3"` + `feDisplacementMap` `scale="4"`),
which is the parent world's pinned implementation (`DESIGN.md:175`), not an imitation of the
raster crayon. Colour comes from `--kicker-color` per section, following the rotation rule
above. The filter `<svg>` must be present in the page for the underline to render as a stroke.

### Los Rieles Convergentes (this site's signature)
Two SVG hairlines drawn by `assets/site.js` across the full document height into a
`.rieles` layer at `z-index: 0`. They anchor to the outer edge of the readable column
(`.envoltura` left edge − 22px, floored at 8px), not to the window, so they share the
content's grid. Each is a cubic curve that holds its margin for most of the run and closes
into a shared vertex above the contact heading; a 5px Azul Rey circle with a 3px paper stroke
marks the node.

The last ~20% of each rail (capped at 460px) is a duplicate path in Azul Rey, drawn with a
dash offset and lit by an `IntersectionObserver` at 0.35 threshold on `[data-union]`; the node
scales in 0.75s later. This is the only authored motion on the site and it lands on the only
conversion. Under `prefers-reduced-motion`, or with no `IntersectionObserver`, the final state
is applied immediately with no transition. A `ResizeObserver` on `.pagina` plus `resize`,
`load` and `document.fonts.ready` all trigger a redraw, because language swap and late images
change the page height and a stale vertex misses the contact block.

### Retrato
A 4:5 crop wrapper (`.marco-foto`) carries the 2px ink border and the Sello de Tinta while the
image inside is scaled 1.18× and positioned at 52% / 24% — the frame is on the crop, not on the
image, so the scale never pushes the border out of alignment. One real crayon asset (amapola)
overlaps the lower right at -9°, tucked inside the frame below 62rem and allowed to break out
to -8% above it. **The portrait runs in colour.** This is a deliberate, user-authorized
exception to the parent world's Regla del Blanco y Negro (parent `DESIGN.md:120`), recorded as
an exception and scoped to this one image; it does not license colour photography anywhere else
in either system.

## Do's and Don'ts

### Do:
- **Do** treat `Landing page/DESIGN.md` as the source of truth for materials. This file records
  only what this site adds or narrows.
- **Do** pair every 2px ink border with the Sello de Tinta (`5px 5px 0 0 #17181C`), zero blur.
- **Do** keep the kicker rotation to three per page in the order rojo → esmeralda → morado,
  substituting amarillo when the kicker sits on marino.
- **Do** keep `.rieles` excluded from the `.pagina > :not(.rieles)` rule, and keep the vertex
  above the contact heading.
- **Do** redraw the rails on every event that can change page height — resize, font load,
  language swap, late images — via the existing `ResizeObserver`.
- **Do** give every new translatable node both `data-es` and `data-en` (and the `-html`,
  `-alt`, `-label`, `-title` variants where the content is rich or lives in an attribute).
- **Do** use `.etiqueta--larga` instead of tracked caps when a label runs long enough that
  0.25em tracking makes it unreadable.
- **Do** use the dashed 2px ink border for anything genuinely unresolved — the "before" state,
  a status note — and the solid border for everything settled.
- **Do** give interactive elements a 44px minimum target, a visible 3px Azul Rey focus outline,
  and a `prefers-reduced-motion` path.

### Don't:
- **Don't** use crayon colours on backgrounds, paragraph text or icons. The one dark ground in
  this system is marino, and it appears once per page.
- **Don't** introduce corner radius, blurred shadows or gradients. If it floats or glows, it is
  not this world.
- **Don't** add a second animated moment. The rail remate is the only motion, and it belongs to
  the conversion.
- **Don't** run more than one Gochi Hand annotation per section, or use it as a system face.
- **Don't** let small text fall below 70% ink on paper or 88% paper on marino.
- **Don't** read the colour portrait as permission for colour photography. It is one recorded
  exception, not a change to the parent rule.
- **Don't** anchor the rails to the viewport instead of `.envoltura`; they would drift off the
  content grid at wide widths.
