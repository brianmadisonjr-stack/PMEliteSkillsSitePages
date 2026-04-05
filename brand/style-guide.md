# PM Elite Skills – Visual & Experience Style Guide

_Last updated: 2026-04-04_

## Brand Intent
- **Positioning:** Premium mastery hub for project leaders leveling up beyond certification checkboxes.
- **Tone:** Assured, modern, uplifting. Boutique consultancy vibe with a calm, high-trust finish.
- **Keywords:** Elite, precise, velocity, clarity, insight.

## Color System ("Verdant Apex")
| Role | Name | Hex | Usage |
| --- | --- | --- | --- |
| Primary 900 | Obsidian Canopy | `#04130C` | Headers, navigation background, footer, hero gradient anchor |
| Primary 600 | Summit Evergreen | `#0F6B4A` | Primary buttons, links, major accents |
| Accent 500 | Arcadia Lime | `#4CE281` | CTA highlights, progress indicators, charts |
| Secondary 400 | Meridian Jade | `#13A17E` | KPI cards, hover states, form focus |
| Accent Warm | Ember Brass | `#F5A524` | Deadline alerts, warm contrast details |
| Neutral 050 | Alpine Mist | `#F5F7F4` | Page background, cards, dashboards |
| Neutral 400 | Slate Fern | `#55605A` | Body copy, supporting text |
| Success 500 | Verdant Pulse | `#23C06B` | Completion states, badges |
| Warning 400 | Horizon Amber | `#E2B343` | Expiring seats, reminders |

**Gradients**
- `hero`: `linear-gradient(135deg, #04130C 0%, #0F6B4A 55%, #4CE281 100%)`
- `cta`: `linear-gradient(120deg, #13A17E 0%, #4CE281 100%)`

## Typography
- **Display / Headings:** `"Space Grotesk", sans-serif` (weights 400–600).
- **Body / UI:** `"Inter", sans-serif` (weights 400–500).
- **Monospace (data chips / code):** `"JetBrains Mono", monospace` (optional).

| Token | Font | Size | Weight | Line Height | Usage |
| --- | --- | --- | --- | --- | --- |
| `display-xl` | Space Grotesk | 56px | 600 | 64px | Hero headline |
| `display-md` | Space Grotesk | 36px | 600 | 44px | Section headers |
| `body-lg` | Inter | 20px | 400 | 30px | Intro paragraphs |
| `body` | Inter | 16px | 400 | 26px | General copy |
| `label` | Inter | 14px | 500 | 20px | Form inputs, KPI labels |
| `meta` | Inter | 12px | 500 | 18px | Tags, table captions |

## Grid & Layout
- **Grid:** 12-column responsive grid, 72px max gutter desktop, 24px mobile.
- **Max width:** 1200px content container with generous breathing room.
- **Elevation:** Use soft layered cards (box-shadow `0 20px 60px rgba(4,19,12,0.16)` for hero card, `0 12px 36px rgba(4,19,12,0.12)` for dashboards).
- **Corner radius tokens:** `xs=6px`, `sm=10px`, `md=16px`, `lg=28px` (hero stats card).

## Component Styling
### Buttons
- **Primary:** Summit Evergreen fill, white text, medium radius (10px), glow `0 0 20px rgba(76,226,129,0.35)` on hover.
- **Secondary:** Outline in Meridian Jade, white fill, text Meridian Jade.
- **Tertiary:** Ghost button using Slate Fern text on transparent background.

### Cards & Panels
- Cards float on Alpine Mist with padding 32px desktop / 20px mobile.
- Premium cards feature a 4px left accent bar in Arcadia Lime.

### Navigation
- Sticky, translucent Obsidian Canopy background (`rgba(4,19,12,0.92)`), glass blur, thin bottom border in Summit Evergreen.
- CTA button in navbar uses the `cta` gradient.

### Forms
- Inputs: filled Alpine Mist, border `#E1E5DF`, focus ring Meridian Jade.
- Multi-step wizard uses Arcadia Lime progress indicator.

### Data Visualization
- Primary series: Summit Evergreen. Secondary: Arcadia Lime. Tertiary: Ember Brass. Gridlines in Neutral 200 (`#D6DBD4`).

## Imagery & Iconography
- Blend monochrome photography with green overlays. Add subtle botanical geometry or contour maps to reinforce mastery + growth.
- Icons: thin-line, rounded caps, tinted Meridian Jade with Arcadia Lime fills for emphasis.
- Use angled accent shapes (8° skew) in translucent greens behind hero imagery for motion.

## Motion & Micro-Interactions
- Hover transitions 200ms ease-out.
- KPI cards lift 6px on hover, shadow intensifies slightly (`rgba(4,19,12,0.25)`).
- Button hover: gradient shift plus glow.
- Progress rings animate on load from 0 → target with 600ms ease-out.

## Page Structure Recommendations
1. **Hero:** Split layout with gradient background, headline, subcopy, CTAs ("Start Practice" / "View Curriculum"), stat card showing pass probability or pace delta.
2. **Value Pillars:** Three cards (Adaptive Curriculum, Mentor Pods, Elite CRM Insights) layered on Alpine Mist with Arcadia Lime accents.
3. **Interactive Timeline:** Week-by-week readiness showcased using Summit Evergreen track and Arcadia Lime nodes.
4. **Testimonial Carousel:** Glass panels with alumni photos, subtle botanical overlay.
5. **Cohort CTA:** Solid `hero` gradient block with embedded application form.
6. **Footer:** Obsidian Canopy background, resource columns, icon buttons tinted Meridian Jade.

## Dashboard Look (Portal)
- Sidebar: Obsidian Canopy with Meridian Jade icon focus.
- Main canvas: Alpine Mist background, cards in white with Arcadia Lime accent bars.
- Progress components: Arcadia Lime arcs, Ember Brass remainder track for deadlines.

## Next Steps
1. Translate tokens into CSS variables / Tailwind theme extension.
2. Apply palette + typography to starter landing components.
3. Mirror palette inside Supabase-auth & dashboard shells.
4. Iterate on imagery once copy direction is approved.
