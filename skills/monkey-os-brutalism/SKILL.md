---
name: monkey-os-brutalism
description: "Apply the M.O.N.K.Y OS dark brutalist dashboard design system. Use this skill when creating admin panels, dashboards, terminal-style interfaces, or cyberpunk-themed web apps that need: purple-accented dark theme, Roboto Mono typography, bold display font, card-based layouts with subtle ring borders, TV noise overlay, marquee animations, NumberFlow counters, and shadcn/ui new-york components."
---

# M.O.N.K.Y OS — Dark Brutalist Dashboard Design System

This skill codifies the complete design language from M.O.N.K.Y OS — a dark-themed brutalist dashboard with terminal/cyberpunk aesthetics, purple primary accents, and monospaced typography. Use every element of this system when building projects in this style.

## Design Philosophy

**Rebel OS dashboard meets cyberpunk terminal.** Dark muted backgrounds with subtle purple/violet accents. Geometric custom display type for headlines. Roboto Mono for everything else. Subtle ring borders instead of heavy shadows. TV static noise overlays. Animated data with NumberFlow counters and marquee arrow patterns. The interface should feel like a hacker's OS — functional, dense, atmospheric, but clean.

## Core Characteristics
- Dark Brutalist: near-black backgrounds with subtle warmth, no bright whites
- Terminal: monospaced type throughout body, uppercase labels, bullet indicators
- Cyberpunk: purple primary accent, green success, amber warning, red destructive
- Data-Dense: card grids, chart areas, ranking lists, status panels
- Atmospheric: TV noise canvas overlay, animated GIF backgrounds, marquee effects
- Clean & Modern: subtle ring-based borders, rounded corners (0.625rem), shadcn/ui new-york style

## Color Palette

### Design Tokens (CSS Custom Properties)

```css
:root {
  --radius: 0.625rem;
  /* Light theme (fallback) */
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --border: oklch(0.922 0 0);
  --pop: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --success: oklch(0.7775 0.2447 144.9);
  --destructive: oklch(0.577 0.245 27.325);
  --warning: oklch(0.769 0.188 70.08);
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.2029 0.0037 345.62);
  --foreground: oklch(0.9851 0 0);
  --card: oklch(0.2029 0.0037 345.62);
  --card-foreground: oklch(0.9851 0 0);
  --popover: oklch(0.205 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.4703 0.2364 263.19);
  --primary-foreground: oklch(0.9851 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.2393 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.9851 0 0 / 5%);
  --accent-foreground: oklch(0.985 0 0);
  --border: oklch(1 0 0 / 10%);
  --pop: oklch(0.9851 0 0 / 2.5%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.556 0 0);
  --success: oklch(0.7775 0.2447 144.9);
  --warning: oklch(0.769 0.188 70.08);
  --destructive: oklch(0.5961 0.2006 36.48);
  --sidebar: oklch(0.2029 0.0037 345.62);
  --sidebar-foreground: oklch(0.9851 0 0);
  --sidebar-primary: oklch(0.4703 0.2364 263.19);
  --sidebar-primary-foreground: oklch(0.9851 0 0);
  --sidebar-accent: oklch(0.9851 0 0 / 5%);
  --sidebar-accent-hover: oklch(0.9851 0 0 / 10%);
  --sidebar-accent-foreground: oklch(0.9851 0 0);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.556 0 0);

  /* Chart colors */
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);

  /* Layout tokens */
  --gap: 2rem;
  --sides: 1rem;
  --header-mobile: 3.8rem;
}
```

### Color Rules
1. **Background is near-black with warmth** — `oklch(0.2029 0.0037 345.62)`, not pure black. This subtle warmth is essential.
2. **Primary is purple/violet** — `oklch(0.4703 0.2364 263.19)`. Use for active states, primary badges, sidebar highlights, icon containers.
3. **"Pop" is the key border technique** — `oklch(0.9851 0 0 / 2.5%)`. Ultra-low-opacity white used for card backgrounds and subtle ring borders. This creates a glass-like separation without heavy shadows.
4. **Borders are 10% white** — `oklch(1 0 0 / 10%)`. Thin, subtle, never heavy.
5. **Accent backgrounds are 5% white** — `oklch(0.9851 0 0 / 5%)`. Used inside card content areas to create subtle depth.
6. **Success is green, Warning is amber, Destructive is red** — These are the only additional colors. Keep the palette restrained.
7. **Charts use 5 distinct hues** — Violet, teal, amber, magenta, and red-orange. Use gradient fills with `stopOpacity` for a premium data viz look.

## Typography

### Font Stack

```css
/* In globals.css or tailwind config */
--font-display: 'Rebels', 'Geist', sans-serif;
--font-mono: 'Roboto Mono', 'Geist Mono', monospace;
```

### Font Rules
- **Display font** (`--font-display`): A bold, geometric display font (like Rebels — custom .woff2). Used for ALL large numbers (stat values), page titles, sidebar branding, and card headings. The font should be loaded from a local .woff2 file:
  ```css
  @font-face {
    font-family: "Rebels";
    src: url("/fonts/Rebels-Fett.woff2") format("woff2");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  ```
  If a custom font isn't available, fall back to Geist or Inter with `font-weight: 700` and `letter-spacing: -0.02em`.

- **Mono font** (`--font-mono`): Roboto Mono for ALL body text, labels, descriptions, UI controls. This is a mono-first interface. Every piece of text that isn't a headline or stat value uses monospace.

- **Uppercase labels**: Section titles, tab triggers, badge text, navigation items, and data labels use `uppercase` with `tracking-wide` or `tracking-widest`.

- **Font size scaling**: The entire UI scales based on viewport width:
  ```css
  @media (min-width: 1028px)  { html { font-size: 0.7em; } }
  @media (min-width: 1240px) and (max-width: 1920px) { html { font-size: 0.75em; } }
  @media (min-width: 1920px) { html { font-size: 1em; } }
  @media (min-width: 2160px) { html { font-size: 1.2em; } }
  ```

- **Stat values**: Use `text-4xl md:text-5xl font-display` for large data numbers. These are the most prominent elements on the page.

- **Page titles**: Use `text-xl lg:text-4xl font-display leading-[1]`.

- **Body text**: Use `font-mono` with `font-medium` or `font-normal`, sizes `text-xs` to `text-sm`.

## Layout System

### 12-Column Desktop Grid

```html
<div class="w-full grid grid-cols-1 lg:grid-cols-12 gap-gap lg:px-sides">
  <!-- Sidebar: 2 columns, sticky -->
  <div class="hidden lg:block col-span-2 top-0 relative">
    <DashboardSidebar />
  </div>

  <!-- Main content: 7 columns -->
  <div class="col-span-1 lg:col-span-7">
    {children}
  </div>

  <!-- Right rail: 3 columns, sticky -->
  <div class="col-span-3 hidden lg:block">
    <div class="space-y-gap py-sides min-h-screen max-h-screen sticky top-0 overflow-clip">
      <!-- Widget, Notifications, Chat -->
    </div>
  </div>
</div>
```

### Layout Rules
1. **Sidebar**: Always 2 columns wide on desktop. Sticky positioning. Contains navigation groups with icons and labels.
2. **Main Content**: 7 columns wide. Houses the dashboard cards, charts, rankings.
3. **Right Rail**: 3 columns wide. Sticky with `max-h-screen overflow-clip`. Contains Widget (clock + location), Notifications list, Chat panel.
4. **Gap**: Use `--gap` (2rem) for all spacing between major sections. Use `--sides` (1rem) for horizontal page padding.
5. **Mobile**: Stack everything vertically. Sidebar becomes a slide-out sheet. Right rail widgets collapse or move to bottom sheets.
6. **Sticky Header**: Main content has a sticky header with `top-header-mobile lg:top-0 bg-background z-10`. Wrap in `ring-2 ring-pop` for subtle separation.

### Content Area Styling

Every main content page should use this pattern:

```html
<div class="flex flex-col relative w-full gap-1 min-h-full">
  <!-- Sticky header with title -->
  <div class="flex items-center lg:items-baseline gap-2.5 md:gap-4 px-4 md:px-6 py-3 md:pb-4 lg:pt-7 ring-2 ring-pop sticky top-header-mobile lg:top-0 bg-background z-10">
    <div class="rounded bg-primary size-7 md:size-9 flex items-center justify-center my-auto">
      <PageIcon class="size-5" />
    </div>
    <h1 class="text-xl lg:text-4xl font-display leading-[1] mb-1">Page Title</h1>
    <span class="ml-auto text-xs md:text-sm text-muted-foreground block">Subtitle</span>
  </div>

  <!-- Scrollable content area -->
  <div class="min-h-full flex-1 flex flex-col gap-8 md:gap-14 px-3 lg:px-6 py-6 md:py-10 ring-2 ring-pop bg-background">
    {children}
  </div>
</div>
```

The `ring-2 ring-pop` on both the header and content sections creates a cohesive framed look. The "pop" ring is ultra-subtle (2.5% white opacity) but adds structure.

## Card Component

The Card is the fundamental building block. Every data container uses it.

### Card Structure

```tsx
// Card wrapper — subtle pop background, small gap, rounded, thin padding
<div className="text-card-foreground flex flex-col gap-2 rounded-lg p-1.5 bg-pop">
  {/* CardHeader — 36px height, auto-rows */}
  <div className="@container/card-header h-9 grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 pl-1 pr-1.5">
    <div className="leading-none font-medium text-sm flex items-center gap-2.5">
      <Bullet />
      Card Title
    </div>
  </div>

  {/* CardContent — darker card background, rounded */}
  <div className="p-3 py-2 rounded bg-card">
    {content}
  </div>
</div>
```

### Card Rules
1. **Cards use `bg-pop`** (2.5% white) as their outer shell. This creates the card boundary.
2. **CardContent uses `bg-card`** (same as background) with `rounded` corners inside the card shell.
3. **CardHeader has `h-9`** (36px) fixed height. Title uses `flex items-center gap-2.5` with a Bullet indicator.
4. **CardContent often gets `bg-accent`** (5% white) instead of `bg-card` for interior depth, especially in stat cards and notification panels.
5. **Stat cards** contain: Bullet + label in header, large NumberFlow/display-font value in content, optional badge, optional description.
6. **Cards are never pure black** — they always have at least `bg-pop` (2.5% white) to distinguish from the background.

## Bullet Indicator Component

A small colored square used before every label. This is a signature element.

```tsx
// Bullet variants: default (primary), success (green), warning (amber), destructive (red)
// Sizes: sm (8px), default (10px), lg (12px)
const bulletVariants = cva("rounded-[1.5px]", {
  variants: {
    variant: {
      default: "bg-primary",
      success: "bg-success",
      warning: "bg-warning",
      destructive: "bg-destructive",
    },
    size: {
      sm: "size-2",
      default: "size-2.5",
      lg: "size-3",
    },
  },
});
```

### Bullet Rules
1. **Every card title and section label starts with a Bullet.** No exceptions.
2. **Subtle rounding** — `rounded-[1.5px]`, nearly square but slightly softened.
3. **Match the semantic color**: use `variant="success"` for security/online status, `variant="warning"` for alerts, default (primary/purple) for everything else.
4. **Bullets can be rotated 45°** for chart legends: `<Bullet className="rotate-45" style={{ backgroundColor: color }} />`

## Badge Component

```css
/* Base badge: rounded border, small padding, 12px font, uppercase */
inline-flex items-center justify-center rounded border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0
```

### Badge Variants
- **default**: `border-transparent bg-primary text-primary-foreground` — filled purple
- **secondary**: `border-transparent bg-secondary text-secondary-foreground` — filled dark gray
- **destructive**: `border-transparent bg-destructive text-white` — filled red
- **outline**: `text-primary bg-primary/10 border-primary` — purple outline
- **outline-success**: `border-success bg-success/10 text-success` — green outline
- **outline-destructive**: `border-destructive bg-destructive/10 text-destructive` — red outline
- **outline-warning**: `border-warning bg-warning/10 text-warning` — amber outline

### Badge Rules
1. **Always uppercase text.**
2. **Use outline variants** (outline-success, outline-warning) for status indicators.
3. **Use default filled variant** for counts and labels on dark backgrounds.
4. **Pair badges with cards** — e.g., `<Badge variant="outline-success">ONLINE</Badge>` next to a section title, or `<Badge variant="outline-warning">2 NEW</Badge>` as an `addon` prop.

## Stat Cards with Marquee Animation

Stat cards show a large number, optional tag badge, description, and an animated arrow marquee on the right side indicating trend direction.

```tsx
<Card className="relative overflow-hidden">
  <CardHeader className="flex items-center justify-between">
    <CardTitle className="flex items-center gap-2.5">
      <Bullet />
      {label}
    </CardTitle>
    <Icon className="size-4 text-muted-foreground" />
  </CardHeader>
  <CardContent className="bg-accent flex-1 pt-2 md:pt-6 overflow-clip relative">
    <div className="flex items-center">
      <span className="text-4xl md:text-5xl font-display">
        <NumberFlow value={numericValue} prefix={prefix} suffix={suffix} />
      </span>
      {tag && <Badge variant="default" className="uppercase ml-3">{tag}</Badge>}
    </div>
    {description && (
      <p className="text-xs md:text-sm font-medium text-muted-foreground tracking-wide">
        {description}
      </p>
    )}
    {/* Marquee arrows */}
    {direction && (
      <div className="absolute top-0 right-0 w-14 h-full pointer-events-none overflow-hidden group">
        <div className={cn(
          "flex flex-col transition-all duration-500",
          "group-hover:scale-105 group-hover:brightness-110",
          direction === "up" ? "animate-marquee-up" : "animate-marquee-down"
        )}>
          {/* Repeated arrow elements */}
        </div>
      </div>
    )}
  </CardContent>
</Card>
```

### Marquee Animation Keyframes

```css
@keyframes marquee-up {
  0%   { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(0, -50%, 0); }
}

@keyframes marquee-down {
  0%   { transform: translate3d(0, -50%, 0); }
  100% { transform: translate3d(0, 0, 0); }
}

@keyframes marquee-pulse {
  0%, 100% { opacity: 0.15; transform: scale(1) translateY(0); }
  25%      { opacity: 0.4;  transform: scale(1.02) translateY(-1px); }
  50%      { opacity: 0.8;  transform: scale(1.05) translateY(-2px); }
  75%      { opacity: 0.6;  transform: scale(1.02) translateY(-1px); }
}
```

### Marquee Rules
1. **Arrows use `font-display`** — they are text, not SVG. `↑` for up, `↓` for down.
2. **Direction determines intent color**: positive trend = `text-success`, negative = `text-destructive`, neutral = `text-muted-foreground`.
3. **Pause on hover**: `.group:hover .animate-marquee-up, .group:hover .animate-marquee-down { animation-play-state: paused; }`
4. **The marquee is right-aligned** in the card, `w-14` wide, `pointer-events-none`, with `overflow-hidden`.
5. **Duplicate the arrow list** inside the marquee container so the loop is seamless.

## NumberFlow Component

Use `@number-flow/react` for animated number transitions. This is essential for stat values that change.

```tsx
import NumberFlow from "@number-flow/react";

<NumberFlow
  value={numericValue}
  prefix={prefix}   // e.g., "$"
  suffix={suffix}   // e.g., "%", "'", "K"
/>
```

Extract prefix, numeric value, and suffix from value strings using a regex:
```js
const match = val.match(/^([^\d.-]*)([+-]?\d*\.?\d+)([^\d]*)$/);
```

## TV Noise Overlay

A canvas-based animated noise effect. Used as a decorative overlay on cards and widgets.

```tsx
"use client";
import React, { useEffect, useRef } from "react";

interface TVNoiseProps {
  className?: string;
  opacity?: number;    // default: 0.03
  intensity?: number;  // default: 0.1 (probability a pixel gets noise)
  speed?: number;      // default: 60 (FPS)
}

export default function TVNoise({ className, opacity = 0.03, intensity = 0.1, speed = 60 }: TVNoiseProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const frameDelay = 1000 / speed;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width * window.devicePixelRatio;
      const height = rect.height * window.devicePixelRatio;
      if (width > 0 && height > 0 && Number.isFinite(width) && Number.isFinite(height)) {
        canvas.width = width;
        canvas.height = height;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      }
    };

    const animate = () => {
      const { width, height } = canvas;
      if (width <= 0 || height <= 0) return;
      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        if (Math.random() < intensity) {
          const value = Math.floor(Math.random() * 255);
          data[i] = value;
          data[i + 1] = value;
          data[i + 2] = value;
          data[i + 3] = Math.floor(Math.random() * 100 + 50);
        } else {
          data[i + 3] = 0;
        }
      }
      ctx.putImageData(imageData, 0, 0);
      setTimeout(() => requestAnimationFrame(animate), frameDelay);
    };

    resizeCanvas();
    requestAnimationFrame(animate);
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [intensity, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("pointer-events-none absolute inset-0 w-full h-full z-10", className)}
      style={{ opacity, mixBlendMode: "overlay" }}
    />
  );
}
```

### TV Noise Rules
1. **Always use `mixBlendMode: "overlay"`** so noise blends into the background.
2. **`pointer-events-none`** so it doesn't block interactions.
3. **Place inside a card** with `absolute inset-0 z-10`.
4. **Default opacity is very low** (0.03) — the noise should be barely perceptible, adding atmosphere without distraction.
5. **Use `requestAnimationFrame` with throttled `setTimeout`** for performance. Don't render every frame.

## Data Visualization (Recharts)

Charts use Recharts with Area fills and gradient definitions.

```tsx
// Chart container — rounded, accent background
<div className="bg-accent rounded-lg p-3">
  <ChartContainer className="md:aspect-[3/1] w-full" config={chartConfig}>
    <AreaChart data={data} margin={{ left: -12, right: 12, top: 12, bottom: 12 }}>
      <defs>
        <linearGradient id="fillSeries" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="var(--color-series)" stopOpacity={0.8} />
          <stop offset="95%" stopColor="var(--color-series)" stopOpacity={0.1} />
        </linearGradient>
      </defs>
      <CartesianGrid
        horizontal={false}
        strokeDasharray="8 8"
        strokeWidth={2}
        stroke="var(--muted-foreground)"
        opacity={0.3}
      />
      <XAxis dataKey="date" tickLine={false} tickMargin={12} className="uppercase text-sm fill-muted-foreground" />
      <YAxis tickLine={false} axisLine={false} tickMargin={0} tickCount={6} className="text-sm fill-muted-foreground" />
      <Area dataKey="series" type="linear" fill="url(#fillSeries)" fillOpacity={0.4} stroke="var(--color-series)" strokeWidth={2} dot={false} activeDot={{ r: 4 }} />
    </AreaChart>
  </ChartContainer>
</div>
```

### Chart Rules
1. **Gradient fills**: Linear from top (high opacity) to bottom (low opacity). Always define in `<defs>`.
2. **No horizontal grid lines** — only vertical dashed lines with low opacity.
3. **Dash pattern**: `strokeDasharray="8 8"` with `strokeWidth={2}` and 30% opacity.
4. **No dots on lines** — `dot={false}`. Only show `activeDot={{ r: 4 }}` on hover.
5. **Hide first and last grid lines**: `.recharts-cartesian-grid-vertical :first-child, .recharts-cartesian-grid-vertical :last-child { opacity: 0; }`
6. **Y-axis hides 0 value**: `tickFormatter={(value) => value === 0 ? "" : value.toString()}`
7. **Chart container**: Always wrapped in `bg-accent rounded-lg p-3` for the dark inner container look.
8. **Tab controls**: Use shadcn/ui Tabs for switching time periods (WEEK, MONTH, YEAR). Tab triggers are uppercase.

## Ranking List Component

Used for leaderboards or ranked items (e.g., "Rebels Ranking").

```tsx
<Card>
  <CardHeader className="flex items-center justify-between">
    <CardTitle className="flex items-center gap-2.5">
      <Bullet />
      RANKING TITLE
    </CardTitle>
    <Badge variant="outline-warning">2 NEW</Badge>
  </CardHeader>
  <CardContent>
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="flex items-center justify-between">
          <div className="flex items-center gap-1 w-full">
            {/* Rank number — featured items get larger, primary background */}
            <div className={cn(
              "flex items-center justify-center rounded text-sm font-bold px-1.5 mr-1 md:mr-2",
              item.featured
                ? "h-10 bg-primary text-primary-foreground"
                : "h-8 bg-secondary text-secondary-foreground"
            )}>
              {item.id}
            </div>

            {/* Avatar — rounded container with bg-muted fallback */}
            <div className={cn(
              "rounded-lg overflow-hidden bg-muted",
              item.featured ? "size-14 md:size-16" : "size-10 md:size-12"
            )}>
              {item.avatar ? (
                <Image src={item.avatar} alt={item.name} width={120} height={120} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-muted" />
              )}
            </div>

            {/* Name + handle + points badge */}
            <div className={cn(
              "flex flex-1 h-full items-center justify-between py-2 px-2.5 rounded",
              item.featured && "bg-accent"
            )}>
              <div className="flex flex-col flex-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className={cn("font-display", item.featured ? "text-xl md:text-2xl" : "text-lg md:text-xl")}>
                      {item.name}
                    </span>
                    <span className="text-muted-foreground text-xs md:text-sm">{item.handle}</span>
                  </div>
                  <Badge variant={item.featured ? "default" : "secondary"}>
                    {item.points} POINTS
                  </Badge>
                </div>
                {item.subtitle && <span className="text-sm text-muted-foreground italic">{item.subtitle}</span>}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </CardContent>
</Card>
```

### Ranking List Rules
1. **Featured items are larger** — bigger avatar, bigger rank number, primary-purple background on rank.
2. **Featured items get `bg-accent`** container background for emphasis.
3. **Names use `font-display`** — this is the only body text that breaks the mono rule.
4. **Avatars use Next.js Image** with `object-cover`, inside a rounded container with `bg-muted` fallback.
5. **Badges show points** — featured = `variant="default"` (filled), others = `variant="secondary"`.

## Security Status Panel

A card with colored status items, each with a colored ring border and icon.

```tsx
const securityStatusItemVariants = cva("border rounded-md ring-4", {
  variants: {
    variant: {
      success: "border-success bg-success/5 text-success ring-success/3",
      warning: "border-warning bg-warning/5 text-warning ring-warning/3",
      destructive: "border-destructive bg-destructive/5 text-destructive ring-destructive/3",
    },
  },
});

function SecurityStatusItem({ title, value, status, variant }) {
  return (
    <div className={securityStatusItemVariants({ variant })}>
      <div className="flex items-center gap-2 py-1 px-2 border-b border-current">
        <Bullet size="sm" variant={variant} />
        <span className="text-sm font-medium">{title}</span>
      </div>
      <div className="py-1 px-2.5">
        <div className="text-2xl font-bold mb-1">{value}</div>
        <div className="text-xs opacity-50">{status}</div>
      </div>
    </div>
  );
}
```

### Security Status Rules
1. **Colored ring borders** — `ring-4 ring-success/3` creates a subtle colored glow around each status item. The ring matches the item's semantic color.
2. **Colored borders + tinted backgrounds** — `border-success bg-success/5 text-success`.
3. **Internal border-bottom** — `border-b border-current` separates the title row from the value. Uses `border-current` to inherit the text color.
4. **Includes a decorative GIF** — `bot_greenprint.gif` positioned absolutely behind the status items as atmosphere.
5. **Status items use `text-2xl font-bold`** for values (not display font here — bold mono weight).

## Widget (Clock/Weather) Component

A card showing current time, date, and weather info with TV noise overlay and a decorative GIF background.

```tsx
<Card className="w-full aspect-[2] relative overflow-hidden">
  <TVNoise opacity={0.3} intensity={0.2} speed={40} />
  <CardContent className="bg-accent/30 flex-1 flex flex-col justify-between text-sm font-medium uppercase relative z-20">
    {/* Top row: day of week + full date */}
    <div className="flex justify-between items-center">
      <span className="opacity-50">{dayOfWeek}</span>
      <span>{fullDate}</span>
    </div>

    {/* Center: big clock */}
    <div className="text-center">
      <div className="text-5xl font-display">{time}</div>
    </div>

    {/* Bottom row: temperature + location + timezone badge */}
    <div className="flex justify-between items-center">
      <span className="opacity-50">{temperature}</span>
      <span>{location}</span>
      <Badge variant="secondary" className="bg-accent">{timezone}</Badge>
    </div>

    {/* Background decorative GIF */}
    <div className="absolute inset-0 -z-[1]">
      <Image src="/assets/pc_blueprint.gif" alt="" width={250} height={250} className="size-full object-contain" />
    </div>
  </CardContent>
</Card>
```

### Widget Rules
1. **2:1 aspect ratio** — `aspect-[2]`.
2. **TV Noise with higher opacity** — 0.3 opacity, 0.2 intensity. More visible noise than on other cards.
3. **Decorative GIF behind content** — `absolute inset-0 -z-[1]`. Use `object-contain` so the GIF scales naturally.
4. **Clock uses `font-display text-5xl`** — the most prominent element.
5. **Everything else is uppercase, mono, small**.
6. **Clock updates every second** via `setInterval`.

## Notifications Panel

A card listing notifications with AnimatePresence for enter/exit animations.

### Notification Item Structure
```tsx
<div className="flex items-start gap-3 p-2 rounded hover:bg-pop transition-colors">
  {/* Unread dot or avatar */}
  <div className="mt-0.5 shrink-0">
    {!notification.read ? (
      <Bullet size="sm" variant="default" />
    ) : (
      <div className="size-2.5 rounded-[1.5px] bg-muted-foreground/30" />
    )}
  </div>

  {/* Content */}
  <div className="flex-1 min-w-0">
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium truncate">{notification.title}</span>
      <span className="text-xs text-muted-foreground shrink-0 ml-2">{notification.time}</span>
    </div>
    <p className="text-xs text-muted-foreground mt-0.5">{notification.description}</p>
  </div>

  {/* Dismiss button */}
  <button className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
    <XIcon className="size-3.5" />
  </button>
</div>
```

### Notifications Rules
1. **Unread indicators**: Purple Bullet for unread, dim square for read.
2. **AnimatePresence** with `mode="popLayout"` for smooth list transitions.
3. **Show 3 items by default**, with a "Show All (N)" toggle button.
4. **Clear All** button in the header with `opacity-50 hover:opacity-100`.
5. **Framer Motion**: `initial={{ opacity: 0, x: 20 }}`, `animate={{ opacity: 1, x: 0 }}`, `exit={{ opacity: 0, x: -20 }}`.

## Sidebar Component

Uses shadcn/ui's Sidebar primitives with custom styling.

### Sidebar Structure
- **Header**: Logo icon (monkey/geometric shape in a `bg-sidebar-primary` container) + branding text (`font-display text-2xl` for name, `text-xs uppercase` for tagline).
- **Navigation Groups**: Each group has a `<SidebarGroupLabel>` with `<Bullet />` prefix, then `<SidebarMenuButton>` items with custom SVG icons.
- **Active items**: Use `isActive` prop on `<SidebarMenuButton>`, which applies `bg-sidebar-accent text-sidebar-accent-foreground`.
- **Locked/disabled items**: `pointer-events-none opacity-50` + a lock icon in `<SidebarMenuBadge>`.
- **Footer**: User profile with avatar image, display name (`font-display text-xl`), and email.

### Sidebar Rules
1. **Background**: `--sidebar` = `oklch(0.2029 0.0037 345.62)` — same as page background.
2. **Primary accent**: `--sidebar-primary` = purple — used for the logo container and active user card.
3. **Accent hover**: `--sidebar-accent-hover` = 10% white — distinct from normal accent (5%).
4. **Group labels**: Always uppercase, always prefixed with a Bullet, with `mr-2` spacing.
5. **Icons**: Custom SVG icon components, `size-5`, used in both the nav buttons and badges.

## Custom SVG Icons

All icons are custom React components (not Lucide or other libraries). They share a consistent style:

```tsx
// Example: Brackets icon
export default function BracketsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
      <path d="M8 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3" />
      <path d="M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3" />
    </svg>
  );
}
```

### Icon Rules
1. **`stroke="currentColor"`** — icons inherit color from parent.
2. **`strokeWidth="1.5"`** — consistent thin-but-visible stroke.
3. **`strokeLinecap="square"`** and **`strokeLinejoin="miter"`** — sharp, geometric, brutalist feel.
4. **`viewBox="0 0 24 24"`** — standard sizing.
5. **Sized via className** — typically `size-4`, `size-5`, or `size-10`.

## Animation Vocabulary

### Keyframes

```css
/* Marquee scroll animations for stat arrows */
@keyframes marquee-up {
  0%   { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(0, -50%, 0); }
}

@keyframes marquee-down {
  0%   { transform: translate3d(0, -50%, 0); }
  100% { transform: translate3d(0, 0, 0); }
}

/* Pulse glow for arrow indicators */
@keyframes marquee-pulse {
  0%, 100% { opacity: 0.15; transform: scale(1) translateY(0); }
  25%      { opacity: 0.4;  transform: scale(1.02) translateY(-1px); }
  50%      { opacity: 0.8;  transform: scale(1.05) translateY(-2px); }
  75%      { opacity: 0.6;  transform: scale(1.02) translateY(-1px); }
}
```

### Animation Rules
1. **Use `will-change-transform`** on animated elements for GPU acceleration.
2. **Pause animations on hover** — `.group:hover .animate-marquee-* { animation-play-state: paused; }`
3. **Use Framer Motion for list transitions** — `AnimatePresence` with `mode="popLayout"`, `layout` prop, and smooth spring/tween transitions.
4. **Easing**: `cubic-bezier(0.4, 0.0, 0.2, 1)` for pulse animations, `ease-out` for list items.
5. **NumberFlow handles its own animation** — no custom animation needed for number transitions.

## Responsive Behavior

### Breakpoints
- **Mobile (< 1024px)**: Everything stacks vertically. Sidebar becomes slide-out. Right rail collapses into sheets/modals.
- **Tablet (1024px - 1240px)**: Grid layout activates. Font-size at 0.7em.
- **Desktop (1240px - 1920px)**: Full layout. Font-size at 0.75em.
- **Large Desktop (1920px+)**: Font-size at 1em.
- **4K (2160px+)**: Font-size at 1.2em.

### Mobile-Specific Patterns
- **Mobile Header**: `h-header-mobile sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border` with sidebar trigger, logo, and notification sheet.
- **Chat**: Collapses to a floating CTA button with a slide-up drawer.
- **Notifications**: Opens in a Sheet component sliding from the right.
- **Main content**: Single column, no sidebar, no right rail visible.

## Tech Stack & Dependencies

When building with this design system, use:

```json
{
  "framework": "Next.js 15+ (App Router)",
  "styling": "Tailwind CSS v4 + tailwindcss-animate + tw-animate-css",
  "components": "shadcn/ui (new-york style, neutral base)",
  "typography": "next/font/google (Roboto Mono) + next/font/local (custom display font)",
  "animations": "framer-motion + @number-flow/react",
  "charts": "recharts",
  "icons": "Custom SVG components (stroke-based, currentColor)",
  "forms": "react-hook-form + zod",
  "state": "zustand",
  "utils": "clsx + tailwind-merge (cn helper)"
}
```

## Summary Checklist

When building a project in the M.O.N.K.Y OS style, ensure:

- [ ] Dark theme with warm near-black background (`oklch(0.2029 0.0037 345.62)`)
- [ ] Purple/violet primary accent (`oklch(0.4703 0.2364 263.19)`)
- [ ] "Pop" color for subtle card/ring backgrounds (2.5% white opacity)
- [ ] Accent backgrounds at 5% white, borders at 10% white
- [ ] Roboto Mono as primary body font via next/font/google
- [ ] Custom bold display font (.woff2) for headings and stat values
- [ ] Uppercase labels everywhere (tabs, badges, section titles, nav items)
- [ ] Bullet indicators before every label/title
- [ ] Cards use `bg-pop` outer shell + `bg-card` or `bg-accent` inner content
- [ ] "Ring-2 ring-pop" on page layout sections (header + content area)
- [ ] TV Noise canvas overlay on widget cards (low opacity, mix-blend-mode: overlay)
- [ ] NumberFlow for animated stat numbers
- [ ] Arrow marquee animation on stat cards (up/down with pulse)
- [ ] Recharts with gradient area fills, dashed vertical grid, no dots
- [ ] 12-column responsive grid layout (2 | 7 | 3)
- [ ] Viewport-based font scaling (0.7em → 1.2em)
- [ ] Custom stroke-based SVG icons (currentColor, strokeWidth 1.5, square caps)
- [ ] Animated GIFs as decorative background elements (blueprint, bot)
- [ ] Badges with outline variants (success, warning, destructive)
- [ ] Sticky headers with `bg-background` and `backdrop-blur-sm`
- [ ] shadcn/ui Sidebar with bullet-prefixed group labels
- [ ] Framer Motion AnimatePresence for notification/chat list transitions
- [ ] Gap spacing via CSS variable `--gap` (2rem)
- [ ] `--radius: 0.625rem` for all rounded corners (subtle, not fully sharp)
