# Neo-Tech Industrial UI — Reference

## Color System

### Primary palette

| Variable | Hex | Role |
|---|---|---|
| `--tech-lime` | `#D7FF00` | Primary accent, buttons, highlights, active states |
| `--graphite` | `#2B2B2B` | Secondary backgrounds, muted panels |
| `--soft-gray` | `#BDBDBD` | Secondary text, inactive borders |
| `--deep-black` | `#050505` | Page background, maximum contrast |
| `--off-white` | `#F5F5F5` | Primary text, high-emphasis content |

### Accent colors (use sparingly)

| Variable | Hex | Role |
|---|---|---|
| `--signal-red` | `#FF4D4D` | Errors, critical alerts, recording indicators |
| `--electric-cyan` | `#00E5FF` | Info highlights, link accents, system messages |
| `--warning-orange` | `#FF9900` | Warnings, pending states, attention flags |

### Panel & card colors

| Token | Hex | Role |
|---|---|---|
| Panel background | `#1A1A1A` | Module containers |
| Card background | `#3A3A3A` | Nested content blocks |
| Light border | `#555` | Panel/card borders |
| Strong border | `#000` | Button borders, high-contrast edges |
| Dim text | `#777` | Metadata, secondary labels |

## Typography

### Primary: Space Grotesk

```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Use for:
- Headings and titles
- Buttons and interactive elements
- Navigation labels
- Large numeric displays
- Panel titles

Style rules:
- `text-transform: uppercase` for titles
- `letter-spacing: 0.06em–0.1em` for buttons and labels
- `font-weight: 700` for emphasis
- `letter-spacing: -0.02em` for oversized display text
- `line-height: 0.85` for large headings

### Secondary: IBM Plex Mono

```html
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Use for:
- Metadata and technical annotations
- Coordinates and serial numbers
- Size labels and unit indicators
- Footer information
- Timer displays and status readouts
- Tiny interface text (< 12px)

Style rules:
- `letter-spacing: 0.08em–0.15em`
- `font-size: 9px–12px` typical
- `text-transform: uppercase`

## Layout Rules

### Panel system

Every content region should feel like a machine label, industrial sticker, or system module.

```css
.panel {
  border: 1px solid #555;
  background: #1A1A1A;
  padding: 20px;
  position: relative;
}

.panel::before {
  content: '';
  position: absolute;
  top: -1px;
  left: 20px;
  right: 20px;
  height: 2px;
  background: #D7FF00;
  opacity: 0.6;
}
```

### Asymmetry

- Prefer offset blocks over centered ones
- Use floating panels with uneven spacing
- Avoid grid systems that enforce symmetry
- Layer elements at unexpected offsets
- Use `grid-template-columns` with uneven fractions (e.g., `1.2fr 0.8fr`)

### Density

Mix oversized numbers with tiny metadata in the same viewport. Combine:
- 96px display headings
- 42px price numbers
- 10px technical labels
- Compact information blocks separated by 1px lines
- Barcode-like graphic strips

## Component Recipes

### Button

```css
.btn {
  background: #D7FF00;
  color: #050505;
  border: 1px solid #000;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 8px 24px;
  cursor: pointer;
  transition: all 0.12s ease;
}

.btn:hover {
  background: #050505;
  color: #D7FF00;
  border-color: #D7FF00;
}
```

### Card

```css
.card {
  background: #3A3A3A;
  border: 1px solid #555;
  padding: 16px;
}
```

Card contents should include:
- Technical ID label (e.g., `PZ-001 // CLASSIC`)
- Large title (28px+, uppercase)
- Spec list in IBM Plex Mono (ingredients, origin, metadata)
- Oversized price/number
- Thin separator line
- Action row with size selectors and add button

### Size selector (toggle group)

```css
.size-btn {
  background: transparent;
  border: 1px solid #555;
  color: #BDBDBD;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 6px 16px;
  cursor: pointer;
}

.size-btn.active {
  background: #D7FF00;
  color: #050505;
  border-color: #D7FF00;
}
```

### Order item row

```css
.order-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px;
  background: #3A3A3A;
  border: 1px solid #555;
  font-size: 13px;
  letter-spacing: 0.04em;
}
```

## Decorative Elements

### Barcode strip

Create a flex row of thin bars with varying widths (2px–10px) and random heights. Use white bars on dark background. Animate opacity with staggered delays for a scanning effect.

```html
<div class="barcode-strip">
  <!-- JS-generated .bar elements, w:2-10px, h:10-40px -->
</div>
```

```css
.barcode-strip {
  display: flex;
  align-items: flex-end;
  gap: 3px;
  padding: 8px 16px;
  background: #1A1A1A;
  border: 1px solid #555;
}

.barcode-strip .bar {
  background: #F5F5F5;
  animation: barPulse 3s ease-in-out infinite;
}
```

### CRT scanlines

```css
body::before {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0,0,0,0.03) 2px,
    rgba(0,0,0,0.03) 4px
  );
}
```

### Grid overlay

```css
.grid-bg {
  background-image:
    linear-gradient(rgba(215,255,0,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(215,255,0,0.03) 1px, transparent 1px);
  background-size: 40px 40px;
}
```

### Scanning line

```css
.scanline-decor {
  position: relative;
  height: 1px;
  background: rgba(215,255,0,0.2);
  overflow: hidden;
}

.scanline-decor::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 60px;
  height: 100%;
  background: #D7FF00;
  animation: scan 3s linear infinite;
}

@keyframes scan {
  0% { left: -60px; }
  100% { left: 100%; }
}
```

### Wireframe circles

```css
.wire-circle {
  width: 48px;
  height: 48px;
  border: 1px solid #555;
  border-radius: 50%;
  position: relative;
}

.wire-circle::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 24px;
  height: 24px;
  border: 1px solid rgba(215,255,0,0.3);
  border-radius: 50%;
  transform: translate(-50%, -50%);
}
```

### Blinking indicator

```css
.blink-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #FF4D4D;
  animation: blink 1.2s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.15; }
}
```

## Texture & Atmosphere

Add minimal texture using:
- CRT noise (repeating-linear-gradient at 2px intervals)
- Vignette (radial-gradient darkening edges)
- Grid overlays at 0.03 opacity in lime
- Monochrome-only — never use color noise

## Animation Guidelines

| Do | Don't |
|---|---|
| `step-end` blinking | `ease-in-out` bouncing |
| Linear scanning (`3s linear infinite`) | Elastic/spring easing |
| 0.12s–0.15s transitions | 0.3s+ transitions |
| Opacity pulses on bars/indicators | Transform scales on hover |
| Staggered delays for barcode bars | Staggered entrance animations |

## Layout Template

```
┌──────────────────────────────────────────────┐
│ [■] SYS.ONLINE    ▐███ █ ██▌    NODE:ACTIVE │  ← header bar
├──────────────────────────────────────────────┤
│ // SECTOR 7G . TERMINAL v2.4.1              │
│                                              │
│  PIZZA CONTROL SYSTEM                       │  ← oversized title
│                                              │
│  ORD-2781-A  ·  MODE: OPERATIONAL           │  ← metadata row
├──────────────────────────────────────────────┤
│ ═══════════ scanline ═══════════════════════ │
├──────────────────────┬───────────────────────┤
│ MODULE // MENU      │ MODULE // ORDER       │
│                      │                       │
│ ┌──────────────────┐ │ ┌───────────────────┐ │
│ │ PZ-001 // CLASSIC│ │ │ // NO ITEMS       │ │
│ │ Margherita       │ │ │                   │ │
│ │ INGREDIENTS: ... │ │ │                   │ │
│ │             24 ██│ │ │                   │ │
│ │ [M] [L] [XL] [+]}│ │ │                   │ │
│ └──────────────────┘ │ └───────────────────┘ │
│ ┌──────────────────┐ │ TOTAL: 0             │
│ │ PZ-002 // SIG.   │ │ [■ EXECUTE ORDER]    │
│ │ Pepperoni        │ │                       │
│ │ ...              │ │  ○ + ✛  COORDS       │
│ └──────────────────┘ │                       │
├──────────────────────┴───────────────────────┤
│ OVEN:485°C  QUEUE:0  WAIT:--  STATUS:READY  │  ← status bar
└──────────────────────────────────────────────┘
```

## Anti-patterns

- **Never** use `border-radius` above 2px (except wireframe circles)
- **Never** use `box-shadow` for depth — use borders only
- **Never** use `linear-gradient()` for backgrounds (except CRT noise)
- **Never** use pastel, warm, or saturated color palettes
- **Never** center content with `text-align: center` on blocks
- **Never** use `font-family` other than Space Grotesk or IBM Plex Mono
- **Never** animate with `ease-in-out`, `ease-out`, or `cubic-bezier` curves
- **Never** use images, illustrations, or icons beyond wireframe graphics
