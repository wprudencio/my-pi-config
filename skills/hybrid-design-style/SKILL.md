---
name: hybrid-design-style
description: >
  Apply a specific brand design system that fuses two visual styles: (1) the clean, structured,
  typographic boldness of "Text Labs" — light backgrounds, heavy black type, orange accents,
  monospaced metadata, institutional labels — with (2) the dark industrial grit of "Droid Ready"
  — deep black/charcoal backgrounds, vivid burnt orange fills, grid overlays, pixel-style elements,
  retro-tech terminal energy. Use this skill whenever the user asks to build or style any website,
  app, UI component, poster, dashboard, landing page, or digital product. Trigger on phrases like
  "use our style", "use the brand", "follow the design guide", "apply our design system", or any
  new project creation request. This is the user's personal design system and should always be
  applied unless they explicitly say otherwise.
---

# Hybrid Design Style Guide

This skill defines the visual identity for all projects. It blends two reference styles into one unified system.

## Core Philosophy

Two moods, one system:

- **Light mode / editorial** → Inspired by *Text Labs NYC*: institutional, authoritative, structured typographic hierarchy with sharp orange punctuation.
- **Dark mode / industrial** → Inspired by *Droid Ready State*: terminal energy, grid overlays, vivid orange fills, pixel/dot matrix aesthetics, mechanical density.

Both share the same color DNA. The context determines which mood dominates.

---

## Color Palette

```css
:root {
  /* Primary */
  --color-orange:       #F04E23;  /* Main accent — vivid burnt orange */
  --color-orange-dark:  #C93D18;  /* Pressed / deep orange */
  --color-orange-light: #FF6B3D;  /* Hover / highlight orange */

  /* Neutrals — Light Mode */
  --color-bg-light:     #EBEBEB;  /* Page background (warm off-white) */
  --color-surface:      #F5F5F3;  /* Card / elevated surface */
  --color-text-primary: #111111;  /* Heavy black type */
  --color-text-muted:   #666666;  /* Metadata / secondary labels */
  --color-border-light: #CCCCCC;

  /* Neutrals — Dark Mode */
  --color-bg-dark:      #111111;  /* Near-black base */
  --color-bg-dark-alt:  #1A1A1A;  /* Slightly lighter panel */
  --color-orange-fill:  #F04E23;  /* Dark mode: orange IS the surface */
  --color-text-on-orange: #111111; /* Dark text on orange fills */
  --color-grid-line:    rgba(0,0,0,0.25); /* Grid overlay on orange */
}
```

**Rules:**
- Orange is never decorative — it marks the most important element on the page (CTA, badge, hero accent, status indicator).
- No gradients. Flat, solid fills only.
- No pastels, no purples, no teal. The palette is: black, white/off-white, orange. Period.

---

## Typography

### Typeface Pairings

**Display / Headlines:**
- `Space Grotesk` (bold, 700–800) — for editorial/light contexts
- `IBM Plex Mono` or `Courier Prime` — for terminal/dark/industrial contexts
- Fallback: `'Arial Black', Impact, sans-serif`

**Body / UI:**
- `Space Grotesk` Regular/Medium for readable prose
- `IBM Plex Mono` Regular for metadata, labels, code-like data

**Metadata / Labels (the "stamp" aesthetic):**
- ALL CAPS, letter-spacing: 0.12–0.2em
- Small size (10–12px), monospaced
- Used for: version numbers, archive refs, department labels, status strings

### Type Scale

```
Display:   clamp(48px, 8vw, 96px) — Black/ExtraBold, tight leading (0.9)
H1:        clamp(32px, 5vw, 64px) — Bold
H2:        clamp(22px, 3vw, 40px) — Bold
Label:     11–13px — Mono, ALL CAPS, tracked
Body:      15–17px — Regular
```

### Type Rules
- Headings are HEAVY. 700–900 weight. No medium-weight headlines.
- Mix serif-free grotesque with mono for tension.
- Orange text is rare — only for the single most critical label/callout per section.

---

## Visual Language

### Grid & Structure
- Hard edges, no rounded corners (0–4px max, only for small chips/badges).
- Visible structural lines: thin 1px `#CCCCCC` borders in light mode, subtle grid overlays in dark mode.
- Layouts use strict column grids with intentional asymmetry (large text block + dense info panel side-by-side).
- Dark mode: add a repeating grid background pattern (CSS `background-image: repeating-linear-gradient`) to orange surfaces.

```css
/* Grid overlay for orange panels */
.orange-panel {
  background-color: var(--color-orange);
  background-image:
    repeating-linear-gradient(0deg, rgba(0,0,0,0.12) 0px, transparent 1px, transparent 28px),
    repeating-linear-gradient(90deg, rgba(0,0,0,0.12) 0px, transparent 1px, transparent 28px);
}
```

### Badges & Labels
- Institutional "stamp" labels: solid orange rectangle, black uppercase mono text inside.
- Archive-style reference codes: `T-LAB-23421-U8-FWD` format for project IDs/metadata.
- Version tags: `V.01`, `GEN-01` — mono, top-right corner or adjacent to logo.
- Status indicators: `STATUS: ACTIVE — DEPLOYED >>>` style trailing arrows.

### Icons & Marks
- Flat geometric snowflake/rosette mark (like the orange flower icon in references) — use as a secondary brand mark.
- Barcode-style decorative elements for dense information sections.
- Slash `/` and `////` as section dividers.
- Dot matrix / pixel grid patterns for large graphic elements in dark mode.

### Texture
- Light mode: clean, minimal texture. Slight paper-grain (`filter: url(#grain)`) optional.
- Dark mode: subtle noise overlay on orange fills (5–8% opacity) to mimic print/screen grit.

---

## Component Patterns

### Hero / Banner
```
Light:  Off-white bg → massive black headline (left-aligned) → orange accent label → right info panel with metadata
Dark:   Black bg → orange-filled panel (with grid overlay) → black bold text → status strips at bottom
```

### CTA Button
```css
.btn-primary {
  background: var(--color-orange);
  color: #111;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 12px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 12px 24px;
  border: none;
  border-radius: 0;
  cursor: pointer;
}
.btn-primary:hover {
  background: var(--color-orange-dark);
}
```

### Cards / Panels
- Light: white/off-white surface, 1px border, bold label header, mono metadata footer.
- Dark: black surface OR orange-fill surface (for featured cards), hard borders, no shadows.

### Navigation
- Minimal. Uppercase mono labels. No hamburger menus where avoidable.
- Top bar: left = logo/wordmark, right = metadata labels + CTA.
- Active state: orange underline (2–3px) or orange background fill on label.

### Status / Data Displays
- Long-running data: `LONG RUNNING AGENTS — 2341429` format.
- Use monospaced tabular numbers.
- Progress or activity: dashes and arrows `— — — >>>` not progress bars.

---

## Motion

- Minimal and purposeful. No playful bounces.
- Transitions: `150–200ms ease` for hover states.
- Page reveals: stagger typographic elements with `animation-delay` increments of 80ms.
- No parallax, no scroll-jitter, no elastic spring animations.

---

## Mode Selection Guide

| Context | Use |
|---|---|
| Marketing site, portfolio, editorial | Light mode — Text Labs style |
| Dashboard, data app, status board | Dark mode — Droid Ready style |
| Mixed-use app | Light base with dark hero/header panels |
| Print-style poster or cert | Light mode, maximum typography density |
| Terminal, CLI tool UI | Full dark, orange fills, monospace throughout |

---

## Anti-Patterns (Never Do)

- ❌ Purple, teal, blue, or green accents
- ❌ Gradient backgrounds or glassy/frosted effects
- ❌ Rounded cards with drop shadows (web-default look)
- ❌ Inter, Roboto, or system-ui as primary font
- ❌ Centered hero with a centered paragraph below it (generic SaaS layout)
- ❌ Emoji in UI
- ❌ Soft/pastel orange — keep it vivid and saturated (`#F04E23`)
- ❌ More than 3 font weights on a single page
