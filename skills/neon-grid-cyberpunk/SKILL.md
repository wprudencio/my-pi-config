---
name: neon-grid-cyberpunk
description: "Apply the Neon Grid Cyberpunk design system. Use this skill when creating dark-themed web apps, dashboards, music tools, terminals, or any interface that needs: charcoal dark backgrounds, a 7-color neon accent palette (acid green, hot pink, electric blue, toxic yellow, neon orange, electric purple, cyan), grid-line backgrounds, CRT scanlines, corner bracket decorations, cycling neon card states, and bold monospaced typography."
---

# Neon Grid Cyberpunk — Design System

This skill codifies the complete visual language from the Chord.Gen project — a charcoal-dark interface with a 7-color neon accent palette, grid backgrounds, and cyberpunk terminal aesthetics. Use every element of this system when building projects in this style.

## Design Philosophy

**Neon-lit terminal in a darkened data center.** Charcoal backgrounds with warm off-white text. Seven distinct neon accent colors used strategically across different UI sections. Grid-line backgrounds for atmosphere. CRT scanlines on display areas. Corner bracket decorations on panels. Each functional area gets its own neon color identity. The interface should feel like a high-end hardware synth or a hacker's workstation — precise, colorful, functional.

## Core Characteristics

- **Charcoal Dark**: Near-black backgrounds (#0D1117) with warm dark panels (#161B22)
- **7-Color Neon Palette**: Each UI section gets a dedicated neon accent
- **Grid Atmosphere**: Subtle grid-line backgrounds on panels and page
- **Terminal Typography**: Chakra Petch for display, Share Tech Mono for data
- **Corner Brackets**: CSS pseudo-element corner decorations on panels
- **CRT Scanlines**: Repeating linear gradient overlays on display areas
- **Neon Glow**: Text shadows, box shadows, and focus states in accent colors
- **Color-Cycled Cards**: Multi-card layouts cycle through different neon colors

## Color Palette

### Base Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Background | `#0D1117` | Page background |
| Panel | `#161B22` | Cards, panels, sections |
| Card | `#1C1F26` | Input backgrounds, inner cards |
| Input | `#21262D` | Form control backgrounds |
| Border | `#2A2F38` | Default borders |
| Border Bright | `#3A4050` | Hover/active borders |

### Text Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Text Primary | `#F0F6E8` | Headlines, main text |
| Text Secondary | `#D4DFC8` | Body text |
| Text Muted | `#9AAF88` | Labels, descriptions |
| Text Dim | `#6A7A5A` | Placeholder, disabled |
| Text Faint | `#4A5A3A` | Dividers, separators |

### Neon Accent Colors (7 colors)

| Name | Hex | Dim (12%) | Glow (45%) | Usage |
|------|-----|-----------|------------|-------|
| Acid Green | `#C0FC14` | `rgba(192,252,20,0.12)` | `rgba(192,252,20,0.45)` | Primary, Chord Config, Play button |
| Hot Pink | `#FF2D7C` | `rgba(255,45,124,0.12)` | `rgba(255,45,124,0.45)` | Stop button, Drum Config |
| Electric Blue | `#2B7FFF` | `rgba(43,127,255,0.12)` | `rgba(43,127,255,0.45)` | Generate button, Synth Config |
| Toxic Yellow | `#FCEB14` | `rgba(252,235,20,0.12)` | `rgba(252,235,20,0.45)` | Card 4, accents |
| Neon Orange | `#FF6B2B` | `rgba(255,107,43,0.12)` | `rgba(255,107,43,0.45)` | Badges, CTAs |
| Electric Purple | `#B829FF` | `rgba(184,41,255,0.12)` | `rgba(184,41,255,0.45)` | Saved items, lists |
| Cyan | `#14FCEB` | `rgba(20,252,235,0.12)` | `rgba(20,252,235,0.45)` | Secondary accents |

### CSS Custom Properties

```css
:root {
  --base-bg: #0D1117;
  --base-panel: #161B22;
  --base-card: #1C1F26;
  --base-input: #21262D;
  --base-border: #2A2F38;
  --base-border-bright: #3A4050;

  --text-primary: #F0F6E8;
  --text-secondary: #D4DFC8;
  --text-muted: #9AAF88;
  --text-dim: #6A7A5A;
  --text-faint: #4A5A3A;

  --neon-green: #C0FC14;
  --green-dim: rgba(192, 252, 20, 0.12);
  --green-glow: rgba(192, 252, 20, 0.45);

  --neon-pink: #FF2D7C;
  --pink-dim: rgba(255, 45, 124, 0.12);
  --pink-glow: rgba(255, 45, 124, 0.45);

  --neon-blue: #2B7FFF;
  --blue-dim: rgba(43, 127, 255, 0.12);
  --blue-glow: rgba(43, 127, 255, 0.45);

  --neon-yellow: #FCEB14;
  --yellow-dim: rgba(252, 235, 20, 0.12);
  --yellow-glow: rgba(252, 235, 20, 0.45);

  --neon-orange: #FF6B2B;
  --orange-dim: rgba(255, 107, 43, 0.12);
  --orange-glow: rgba(255, 107, 43, 0.45);

  --neon-purple: #B829FF;
  --purple-dim: rgba(184, 41, 255, 0.12);
  --purple-glow: rgba(184, 41, 255, 0.45);

  --neon-cyan: #14FCEB;
  --cyan-dim: rgba(20, 252, 235, 0.12);
  --cyan-glow: rgba(20, 252, 235, 0.45);
}
```

## Typography

### Fonts

| Role | Font | Weight | Fallback |
|------|------|--------|----------|
| Display | Chakra Petch | 600–900 | sans-serif |
| Mono / Data | Share Tech Mono | 400 | monospace |

Import via next/font/google or Google Fonts:
```js
import { Chakra_Petch, Share_Tech_Mono } from 'next/font/google'
```

### Type Scale

| Element | Size | Weight | Transform | Letter Spacing |
|---------|------|--------|-----------|----------------|
| Display title | `text-xl md:text-2xl` | 900 | uppercase | -0.02em |
| Panel header | `text-[13px]` | 800 | uppercase | 0.06em |
| Column labels | `text-[12px]` | bolder | uppercase | 0.15em |
| Mobile labels | `text-[11px]` | bolder | uppercase | 0.15em |
| Data / buttons | `text-[13px]` | 700 | uppercase | 0.12em |
| Badge | `text-[11px]` | 700 | uppercase | 0.12em |
| Footer | `text-[12px]` | bolder | uppercase | 0.15em |

## Background Effects

### Grid Background

```css
.cyber-grid-bg {
  background-color: var(--base-bg);
  background-image:
    linear-gradient(rgba(192, 252, 20, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(43, 127, 255, 0.02) 1px, transparent 1px);
  background-size: 40px 40px;
}
```

### Panel Grid

```css
.cyber-panel {
  background-color: var(--base-panel);
  background-image:
    linear-gradient(rgba(192, 252, 20, 0.015) 1px, transparent 1px),
    linear-gradient(90deg, rgba(43, 127, 255, 0.015) 1px, transparent 1px);
  background-size: 28px 28px;
}
```

### CRT Scanlines

```css
.scanlines { position: relative; }
.scanlines::before {
  content: '';
  position: absolute; inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(192, 252, 20, 0.035) 2px,
    rgba(255, 45, 124, 0.02) 4px
  );
  pointer-events: none; z-index: 1;
}
```

## Component Patterns

### Corner Brackets

Multi-colored corner decorations on panels:

```css
.cyber-corner { position: relative; }
.cyber-corner::before, .cyber-corner::after {
  content: ''; position: absolute; width: 12px; height: 12px;
  border-style: solid; pointer-events: none; transition: all 200ms ease;
}
.cyber-corner::before { top: -1px; left: -1px; border-width: 2px 0 0 2px; }
.cyber-corner::after  { bottom: -1px; right: -1px; border-width: 0 2px 2px 0; }
.cyber-corner:hover::before,
.cyber-corner:hover::after { width: 20px; height: 20px; }
```

Color variants:
- Default: green top-left, pink bottom-right
- Blue: blue top-left, cyan bottom-right (`.cyber-corner-blue`)
- Pink: pink top-left, yellow bottom-right (`.cyber-corner-pink`)

### Neon Panels

Each functional panel gets a dedicated neon accent:

| Panel | Dot Color | Header Text | Slash Divider | Corner Brackets |
|-------|-----------|-------------|---------------|-----------------|
| Chord Config | Acid Green | Green glow | Green | Green/Pink |
| Synth Config | Electric Blue | Blue glow | Blue | Blue/Cyan |
| Drum Config | Hot Pink | Pink glow | Pink | Pink/Yellow |
| Saved Items | Electric Purple | Purple glow | — | — |

### Color-Cycled Cards

For 4-up card layouts, cycle neon colors per card:

```jsx
const cardColors = [
  { bg: '#C0FC14', glow: 'rgba(192,252,20,0.3)', pulse: 'chord-active-green' },
  { bg: '#FF2D7C', glow: 'rgba(255,45,124,0.3)', pulse: 'chord-active-pink' },
  { bg: '#2B7FFF', glow: 'rgba(43,127,255,0.3)', pulse: 'chord-active-blue' },
  { bg: '#FCEB14', glow: 'rgba(252,235,20,0.3)', pulse: 'chord-active-yellow' },
];
```

Active state: fill with neon color, dark text, matching glow shadow, pulse animation.

### Transport Buttons

Each button has its own neon color and matching hover shadow:

| Button | Background | Border | Text | Hover Shadow |
|--------|------------|--------|------|--------------|
| Play | `#C0FC14` | `#C0FC14` | `#0D1117` | `0 0 24px rgba(192,252,20,0.4)` |
| Stop | `#FF2D7C` | `#FF2D7C` | `#0D1117` | `0 0 24px rgba(255,45,124,0.4)` |
| Generate | `#2B7FFF` | `#2B7FFF` | `#0D1117` | `0 0 24px rgba(43,127,255,0.4)` |

NO generic CSS hover shadow on `.transport-btn` — each button defines its own.

### Form Controls

Dark inputs with neon focus:

```css
.ctrl-wrapper {
  background: var(--base-card);
  border: 1px solid var(--base-border);
}
.ctrl-wrapper:focus-within {
  border-color: var(--neon-green);
  box-shadow: 0 0 8px var(--green-dim), inset 0 0 8px var(--green-dim);
}
```

Range slider thumb in neon green with glow. Select dropdowns have custom arrow.

### Toggle Buttons

```css
.ctrl-toggle.active {
  background: var(--neon-green);
  color: var(--base-bg);
  border-color: var(--neon-green);
  box-shadow: 0 0 12px var(--green-glow), 0 0 24px var(--green-dim);
}
```

### Neon Glow Text

```css
.glow-green  { text-shadow: 0 0 10px var(--green-glow), 0 0 20px var(--green-dim); }
.glow-pink   { text-shadow: 0 0 10px var(--pink-glow), 0 0 20px var(--pink-dim); }
.glow-blue   { text-shadow: 0 0 10px var(--blue-glow), 0 0 20px var(--blue-dim); }
.glow-yellow { text-shadow: 0 0 10px var(--yellow-glow), 0 0 20px var(--yellow-dim); }
.glow-orange { text-shadow: 0 0 10px var(--orange-glow), 0 0 20px var(--orange-dim); }
.glow-purple { text-shadow: 0 0 10px var(--purple-glow), 0 0 20px var(--purple-dim); }
.glow-cyan   { text-shadow: 0 0 10px var(--cyan-glow), 0 0 20px var(--cyan-dim); }
```

### Pulse Animations

Each neon color has its own pulse keyframe for active states:

```css
@keyframes chord-pulse-green {
  0%, 100% { box-shadow: 0 0 0 0 rgba(192, 252, 20, 0.4), 0 0 20px rgba(192, 252, 20, 0.1); }
  50% { box-shadow: 0 0 0 4px rgba(192, 252, 20, 0.1), 0 0 30px rgba(192, 252, 20, 0.2); }
}
```

Repeat for each color: pink, blue, yellow, orange, purple, cyan.

## Layout Patterns

### Device Frame

A bordered container that holds the entire app:

```jsx
<div className="bg-[#161B22] border border-[#2A2F38] overflow-hidden">
```

### Top Bar

Dark panel with title, status dot, and action buttons:

```jsx
<div className="bg-[#161B22] cyber-panel px-3 md:px-5 py-2.5 flex items-center justify-between gap-3 border border-[#2A2F38]">
```

- Status dot: green when active (with shadow), dim when stopped
- Action buttons: hover to neon green with green shadow

### Main Display Area

The primary interaction surface with scanlines:

```jsx
<div className="cyber-panel m-2 md:m-4 p-3 md:p-6 border border-[#2A2F38] scanlines scanlines-strong">
```

### Footer Bar

Terminal-style shortcuts readout:

```jsx
<div className="bg-[#161B22] cyber-panel px-3 md:px-6 py-2.5 md:py-3 flex items-center justify-center gap-3 cyber-mono text-[12px] text-[#7A8A6A] border border-[#2A2F38] font-[bolder]">
```

Color-coded shortcut keys (SPACE=green, R=blue, S=pink).

## Dialog / Modal

Dark overlay with blur, neon border:

```jsx
<DialogContent className="bg-[#161B22] border-[#00F0FF]/30 text-[#F0F6E8] max-w-[90vw] md:max-w-lg">
```

## Anti-Patterns

- ❌ Do NOT use a generic hover shadow on `.transport-btn` — each button must define its own color
- ❌ Do NOT use the same neon color for everything — distribute the 7 colors across sections
- ❌ Do NOT use bright white backgrounds or light themes
- ❌ Do NOT use rounded corners — keep everything at `border-radius: 0`
- ❌ Do NOT use generic gradients on white backgrounds
- ❌ Do NOT use purple gradients on white — this is the classic "AI slop" look

## When to Use This Skill

- Music/audio production tools and synth interfaces
- Dark-themed dashboards with data-dense layouts
- Terminal-style or hacker-themed web apps
- Cyberpunk aesthetic landing pages or product pages
- Any interface that needs multiple distinct accent colors on dark backgrounds
