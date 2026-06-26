# Components

Design components for **Virtually Built** live in [`designs.pen`](../designs.pen). The React app (`src/`) is still a Next.js starter — UI is defined in Pencil first, then implemented in code.

## Pencil links

Links use the file path plus a **node ID fragment** (`#nodeId`). Open the link in Cursor with the Pencil extension to jump to that component on the canvas. If selection does not follow automatically, search the Layers panel for the component name or node ID.

Component library frames:

| Library | Node | Purpose |
| --- | --- | --- |
| Virtually Built Components | [`BHvYC`](../designs.pen#BHvYC) | Site-specific podcast UI |
| shadcn design system | [`f:MzSDs`](../designs.pen#f:MzSDs) | Shared primitives (buttons, inputs, tables, etc.) |

---

## Page screens

Full-page compositions that assemble the components below. Useful when tracing where a component is used.

| Screen | Desktop | Tablet | Mobile |
| --- | --- | --- | --- |
| Home | [`G3JPia`](../designs.pen#G3JPia) | [`h2ecjA`](../designs.pen#h2ecjA) | [`JUVGP`](../designs.pen#JUVGP) |
| Episodes archive | [`MlTyb`](../designs.pen#MlTyb) | [`paRFs`](../designs.pen#paRFs) | [`kGQ2r`](../designs.pen#kGQ2r) |
| Episode detail | [`AUnpD`](../designs.pen#AUnpD) | [`CvC8Y`](../designs.pen#CvC8Y) | [`rISCf`](../designs.pen#rISCf) |

---

## Site chrome

Global header, footer, and branding used across pages.

### Site Logo

Mark + “Virtually Built” wordmark. Variants differ by placement (header vs footer), theme, and breakpoint.

| Variant | Node | Intended use |
| --- | --- | --- |
| Header Desktop | [`HmQBB`](../designs.pen#HmQBB) | Light header, desktop nav |
| Header Tablet | [`WkjF2`](../designs.pen#WkjF2) | Light header, tablet |
| Header Mobile | [`l9EvvS`](../designs.pen#l9EvvS) | Light header, mobile |
| Header Dark | [`E0fZf0`](../designs.pen#E0fZf0) | Dark episode header (all breakpoints) |
| Footer Desktop | [`MHOBw`](../designs.pen#MHOBw) | Light footer, desktop |
| Footer Tablet | [`i5VR8`](../designs.pen#i5VR8) | Light footer, tablet |
| Footer Mobile | [`Io7jd`](../designs.pen#Io7jd) | Light footer, mobile |

**Planned React:** `SiteLogo` — props for `variant` (`header` | `footer`), `theme` (`light` | `dark`), responsive sizing.

### Header

Top navigation bar: logo, ghost nav links (Episodes, About, Guests), primary Subscribe CTA. Dark variants hide nav on smaller breakpoints and show a menu icon on mobile.

| Variant | Node | Theme / context |
| --- | --- | --- |
| Light Desktop | [`TxJlm`](../designs.pen#TxJlm) | Home, episodes archive — full nav |
| Light Tablet | [`X7j7V`](../designs.pen#X7j7V) | Nav hidden; Subscribe only |
| Light Mobile | [`OML1p`](../designs.pen#OML1p) | Logo + hamburger menu |
| Dark Desktop | [`MyeOZ`](../designs.pen#MyeOZ) | Episode page — full nav on dark stage |
| Dark Tablet | [`mknmP`](../designs.pen#mknmP) | Episode — nav hidden |
| Dark Mobile | [`yMmAp`](../designs.pen#yMmAp) | Episode — menu icon; Subscribe hidden |

**Planned React:** `SiteHeader` — `theme`, responsive layout, mobile drawer (not yet designed).

### Footer

Logo, utility links (Contact, Privacy), copyright. Solid white (`#ffffff`) background on all breakpoints — including on dark episode pages.

| Variant | Node | Context |
| --- | --- | --- |
| Light Desktop | [`S1C2z`](../designs.pen#S1C2z) | All pages, horizontal layout |
| Light Tablet | [`bQmKB`](../designs.pen#bQmKB) | Stacked layout |
| Light Mobile | [`KXd6O`](../designs.pen#KXd6O) | Stacked, compact |

**Planned React:** `SiteFooter` — responsive layout only; no episode-specific variant.

---

## Home & marketing sections

### Hero

Homepage hero: season badge, headline, description, platform CTAs, meta stats, and featured episode card. Layout shifts from two-column (desktop) to stacked (mobile).

| Breakpoint | Node |
| --- | --- |
| Desktop | [`SND5p`](../designs.pen#SND5p) |
| Tablet | [`c446D`](../designs.pen#c446D) |
| Mobile | [`v8N9T4`](../designs.pen#v8N9T4) |

**Planned React:** `HomeHero` — composes `FeaturedEpisode`, `PlatformLinks`, shadcn `Badge`, buttons.

### Page Hero

Title block for the episodes archive (eyebrow, title, subtitle). Not used on the home hero.

| Breakpoint | Node |
| --- | --- |
| Desktop | [`bOu9J`](../designs.pen#bOu9J) |
| Tablet | [`V7yCVX`](../designs.pen#V7yCVX) |
| Mobile | [`Dh4wR`](../designs.pen#Dh4wR) |

**Planned React:** `PageHero` — generic eyebrow + title + subtitle for list pages.

### Subscribe Section

Full-width CTA band: “Never miss an episode”, supporting copy, platform subscribe buttons.

| Breakpoint | Node |
| --- | --- |
| Desktop | [`QpR0K`](../designs.pen#QpR0K) |
| Tablet | [`bWkjy`](../designs.pen#bWkjy) |
| Mobile | [`PhUAu`](../designs.pen#PhUAu) |

Used on Home, Episodes archive, and Episode detail (above footer).

**Planned React:** `SubscribeSection` — composes `PlatformLinks`.

### Platform Links

Row (or stacked list on mobile) of subscribe destinations: Apple Podcasts (primary), Spotify, YouTube, RSS.

| Breakpoint | Node |
| --- | --- |
| Desktop | [`LoWMN`](../designs.pen#LoWMN) |
| Tablet | [`hNwPX`](../designs.pen#hNwPX) |
| Mobile | [`tycK4`](../designs.pen#tycK4) |

**Planned React:** `PlatformLinks` — external links with consistent button variants.

### About Section

About copy plus host cards. Desktop uses side-by-side copy and host grid; mobile stacks hosts vertically.

| Breakpoint | Node |
| --- | --- |
| Desktop | [`U5yff`](../designs.pen#U5yff) |
| Tablet | [`Dd3UF`](../designs.pen#Dd3UF) |
| Mobile | [`x0feiK`](../designs.pen#x0feiK) |

Composes `Section Intro` + `Host Card`.

**Planned React:** `AboutSection`.

### Topics Section

Muted band listing topic pills with intro copy.

| Breakpoint | Node |
| --- | --- |
| Desktop | [`emACO`](../designs.pen#emACO) |
| Tablet | [`PgmyW`](../designs.pen#PgmyW) |
| Mobile | [`tgmTn`](../designs.pen#tgmTn) |

Composes `Section Intro/Topics` + `Topic Pill` instances.

**Planned React:** `TopicsSection`.

---

## Episode content

### Episode Card

Card for grid/list views: thumbnail (with optional video badge), title, guest, duration, topic tags, and bottom actions.

| Breakpoint | Node | Width |
| --- | --- | --- |
| Desktop | [`ZUek2`](../designs.pen#ZUek2) | 320px |
| Tablet | [`jQfDw`](../designs.pen#jQfDw) | 320px |
| Mobile | [`J8hf9l`](../designs.pen#J8hf9l) | 320px |

**Planned React:** `EpisodeCard` — link to `/episodes/[slug]`, responsive density.

### Featured Episode

Larger promotional card for the home hero: episode art, episode number, title, guest, duration, Listen CTA.

| Breakpoint | Node |
| --- | --- |
| Desktop | [`uHkAC`](../designs.pen#uHkAC) |
| Tablet | [`z0aPF`](../designs.pen#z0aPF) |
| Mobile | [`kqZUk`](../designs.pen#kqZUk) |

**Planned React:** `FeaturedEpisode`.

### Episodes Section

Dark section on the home page: section header + grid of episode cards.

| Breakpoint | Node |
| --- | --- |
| Desktop | [`GZhJ7`](../designs.pen#GZhJ7) |
| Tablet | [`Xn6uw`](../designs.pen#Xn6uw) |
| Mobile | [`J2Y7I`](../designs.pen#J2Y7I) |

Mobile adds a full-width “Browse archive” outline button below the list.

**Planned React:** `EpisodesSection` — recent episodes on home.

### Related Episodes

“Up next” band on episode pages with header + episode card grid (same card component, dark surface).

| Breakpoint | Node |
| --- | --- |
| Desktop | [`KNbe5`](../designs.pen#KNbe5) |
| Tablet | [`QA7SD`](../designs.pen#QA7SD) |
| Mobile | [`bHWvR`](../designs.pen#bHWvR) |

**Planned React:** `RelatedEpisodes`.

### Pagination

Numbered page controls for the episodes archive (dark theme on `#0a0a0a` grid).

| Breakpoint | Node |
| --- | --- |
| Desktop | [`MLOo8`](../designs.pen#MLOo8) |
| Tablet | [`KUujL`](../designs.pen#KUujL) |
| Mobile | [`XrHFg`](../designs.pen#XrHFg) |

**Planned React:** `EpisodePagination` — may also use shadcn [`f:U5noB`](../designs.pen#f:U5noB) for light contexts.

---

## Episode detail

### Theatre Stage

Wraps the video player with a subtle top trim line — cinematic “stage” above episode metadata.

| Breakpoint | Node |
| --- | --- |
| Desktop | [`RWVJS`](../designs.pen#RWVJS) |
| Tablet | [`WTMY7`](../designs.pen#WTMY7) |
| Mobile | [`MOaKS`](../designs.pen#MOaKS) |

Composes `Video Player`.

### Video Player

YouTube-style embed: thumbnail, play overlay, YouTube badge, progress bar strip. Sized for full-bleed theatre on desktop.

| Breakpoint | Node | Height |
| --- | --- | --- |
| Desktop | [`uHLko`](../designs.pen#uHLko) | 756px |
| Tablet | [`BuDAv`](../designs.pen#BuDAv) | 400px |
| Mobile | [`Gy2Yv`](../designs.pen#Gy2Yv) | 200px |

**Planned React:** `EpisodeVideoPlayer` — YouTube iframe + poster; sync with transcript timestamps.

### Episode Meta

Centered episode number eyebrow + episode title below the stage.

| Breakpoint | Node |
| --- | --- |
| Desktop | [`w7fp2j`](../designs.pen#w7fp2j) |
| Tablet | [`q9kxlt`](../designs.pen#q9kxlt) |
| Mobile | [`QTdzq`](../designs.pen#QTdzq) |

**Planned React:** `EpisodeMeta`.

### Back Link

“All episodes” navigation with arrow icon.

| Breakpoint | Node |
| --- | --- |
| Desktop | [`OUq1v`](../designs.pen#OUq1v) |
| Tablet | [`Rk0pz`](../designs.pen#Rk0pz) |
| Mobile | [`gbDZ5`](../designs.pen#gbDZ5) |

**Planned React:** `BackLink` or inline `Link` in episode layout.

### Stat Item / Stats Row

Episode metadata: published date, running time, guest. Row composes three stat items; mobile stacks vertically.

| Component | Desktop | Tablet | Mobile |
| --- | --- | --- | --- |
| Stat Item | [`STUtw`](../designs.pen#STUtw) | [`KdBdN`](../designs.pen#KdBdN) | [`EgG29`](../designs.pen#EgG29) |
| Stats Row | [`dG24d`](../designs.pen#dG24d) | [`G8Jtw`](../designs.pen#G8Jtw) | [`E4W00`](../designs.pen#E4W00) |

**Planned React:** `EpisodeStats`.

### Transcript Section

Light (`#fafafa`) full-width section wrapping the transcript list. Includes an implementation note node describing the `{ start, text }[]` schema and click-to-seek behavior.

| Breakpoint | Node |
| --- | --- |
| Desktop | [`V21tzs`](../designs.pen#V21tzs) |
| Tablet | [`rB62q`](../designs.pen#rB62q) |
| Mobile | [`d4n9mz`](../designs.pen#d4n9mz) |

### Transcript Paragraph

Single timestamped paragraph. **Active** state highlights the paragraph playing in the video (left border + playing indicator).

| Variant | Node |
| --- | --- |
| Default | [`kFZkz`](../designs.pen#kFZkz) |
| Active | [`syMmF`](../designs.pen#syMmF) |

### Transcript List

Vertical list of paragraph instances (sample content for episode 047).

| Node | [`mCGHj`](../designs.pen#mCGHj) |

**Planned React:** `Transcript` + `TranscriptParagraph` — `data-start` in seconds, `timeupdate` sync with player.

---

## Shared section patterns

Reusable typography blocks and headers used inside multiple sections.

### Section Header

Eyebrow + section title with optional trailing CTA (e.g. “Browse archive” outline button). Mobile variant omits the trailing action.

| Breakpoint | Node |
| --- | --- |
| Desktop | [`NaJcT`](../designs.pen#NaJcT) |
| Tablet | [`LBLPI`](../designs.pen#LBLPI) |
| Mobile | [`pPxiW`](../designs.pen#pPxiW) |

**Planned React:** `SectionHeader` — `eyebrow`, `title`, optional `action`.

### Section Intro

Three-part text block: mono eyebrow, display title, body paragraph. Base component with breakpoint-specific copies.

| Variant | Node | Notes |
| --- | --- | --- |
| Desktop (base) | [`i9xqhK`](../designs.pen#i9xqhK) | “About the show” default copy |
| Tablet | [`H0xeAr`](../designs.pen#H0xeAr) | Ref override of base |
| Mobile | [`mweZS`](../designs.pen#mweZS) | Ref override of base |
| Topics Desktop | [`o3TW28`](../designs.pen#o3TW28) | “Topics We Discuss” copy |
| Topics Tablet | [`B14x9`](../designs.pen#B14x9) | Ref override |
| Topics Mobile | [`lJMgy`](../designs.pen#lJMgy) | Ref override |

**Planned React:** `SectionIntro` — content props or CMS-driven strings.

### Topic Pill

Outlined chip for a show topic (e.g. “Building with AI”).

| Breakpoint | Node |
| --- | --- |
| Desktop | [`cMM4M`](../designs.pen#cMM4M) |
| Tablet | [`LD220`](../designs.pen#LD220) |
| Mobile | [`Lp7Kc`](../designs.pen#Lp7Kc) |

**Planned React:** `TopicPill` — optional link to filtered archive.

### Host Card

Avatar placeholder, host name, role line.

| Breakpoint | Node |
| --- | --- |
| Desktop | [`Z1bvm`](../designs.pen#Z1bvm) |
| Tablet | [`aq87T`](../designs.pen#aq87T) |
| Mobile | [`Q6ewgk`](../designs.pen#Q6ewgk) |

**Planned React:** `HostCard`.

---

## shadcn design system

Imported shadcn/ui primitives in [`f:MzSDs`](../designs.pen#f:MzSDs). Site components reference these via `ref` nodes (prefix `f:`). Use these when implementing React — likely via shadcn/ui + Tailwind tokens aligned to Pencil variables.

### Actions

| Component | Node |
| --- | --- |
| Button/Default | [`f:VSnC2`](../designs.pen#f:VSnC2) |
| Button/Secondary | [`f:e8v1X`](../designs.pen#f:e8v1X) |
| Button/Outline | [`f:C10zH`](../designs.pen#f:C10zH) |
| Button/Ghost | [`f:3f2VW`](../designs.pen#f:3f2VW) |
| Button/Destructive | [`f:YKnjc`](../designs.pen#f:YKnjc) |
| Button/Large/* | [`f:C3KOZ`](../designs.pen#f:C3KOZ), [`f:gou6u`](../designs.pen#f:gou6u), etc. |
| Icon Button variants | [`f:urnwK`](../designs.pen#f:urnwK), [`f:ZIV1t`](../designs.pen#f:ZIV1t), etc. |

### Display & feedback

| Component | Node |
| --- | --- |
| Badge/Default | [`f:UjXug`](../designs.pen#f:UjXug) |
| Badge/Secondary | [`f:WuUMk`](../designs.pen#f:WuUMk) |
| Badge/Destructive | [`f:YvyLD`](../designs.pen#f:YvyLD) |
| Badge/Outline | [`f:3IiAS`](../designs.pen#f:3IiAS) |
| Avatar/Text | [`f:DpPVg`](../designs.pen#f:DpPVg) |
| Avatar/Image | [`f:HWTb9`](../designs.pen#f:HWTb9) |
| Alert/Default | [`f:QyzNg`](../designs.pen#f:QyzNg) |
| Tooltip | [`f:lxrnE`](../designs.pen#f:lxrnE) |
| Progress | [`f:hahxH`](../designs.pen#f:hahxH) |

### Forms

| Component | Node |
| --- | --- |
| Input Group/Default | [`f:1415a`](../designs.pen#f:1415a) |
| Select Group/Default | [`f:w5c1O`](../designs.pen#f:w5c1O) |
| Textarea Group/Default | [`f:BjRan`](../designs.pen#f:BjRan) |
| Checkbox/Checked | [`f:ovuDP`](../designs.pen#f:ovuDP) |
| Radio/Selected | [`f:LbK20`](../designs.pen#f:LbK20) |
| Switch/Checked | [`f:c8fiq`](../designs.pen#f:c8fiq) |
| Combobox/Default | [`f:cCfrk`](../designs.pen#f:cCfrk) |

### Layout & overlays

| Component | Node |
| --- | --- |
| Card | [`f:pcGlv`](../designs.pen#f:pcGlv) |
| Dialog | [`f:OtykB`](../designs.pen#f:OtykB) |
| Modal/Left | [`f:oVUJY`](../designs.pen#f:oVUJY) |
| Dropdown | [`f:cTN8T`](../designs.pen#f:cTN8T) |
| Tabs | [`f:PbofX`](../designs.pen#f:PbofX) |
| Accordion/Open | [`f:pfIN1`](../designs.pen#f:pfIN1) |
| Sidebar | [`f:PV1ln`](../designs.pen#f:PV1ln) |
| Pagination | [`f:U5noB`](../designs.pen#f:U5noB) |
| Data Table | [`f:shadcnDataTable`](../designs.pen#f:shadcnDataTable) |

---

## React implementation status

| Planned component | Pencil source | Code status |
| --- | --- | --- |
| `SiteLogo` | Site Logo/* | Not implemented |
| `SiteHeader` | Header/* | Not implemented (prototype removed) |
| `SiteFooter` | Footer/* | Not implemented (prototype removed) |
| `HomeHero` | Hero/* | Not implemented |
| `EpisodeCard` | Episode Card/* | Not implemented |
| `SubscribeSection` | Subscribe Section/* | Not implemented |
| `Transcript` | Transcript Section/* | Not implemented |

Implementation should follow responsive breakpoints (desktop ≥1440, tablet 768, mobile 390) and design tokens from Pencil variables (`--background`, `--foreground`, `--muted-foreground`, `--border`, `--primary`, etc.).

---

## Composition map

How major sections assemble child components:

```
Home (G3JPia)
├── Header/Light (TxJlm)
├── Hero (SND5p)
│   ├── Badge/Default (f:UjXug)
│   ├── Platform Links (LoWMN)
│   └── Featured Episode (uHkAC)
├── Episodes Section (GZhJ7)
│   ├── Section Header (NaJcT)
│   └── Episode Card × n (ZUek2)
├── Topics Section (emACO)
│   ├── Section Intro/Topics (o3TW28)
│   └── Topic Pill × n (cMM4M)
├── About Section (U5yff)
│   ├── Section Intro (i9xqhK)
│   └── Host Card × n (Z1bvm)
├── Subscribe Section (QpR0K)
│   └── Platform Links (LoWMN)
└── Footer/Light (S1C2z)

Episode (AUnpD)
├── Header/Dark (MyeOZ)
├── Theatre Stage (RWVJS) → Video Player (uHLko)
├── Episode Meta (w7fp2j)
├── Stats Row (dG24d)
├── Transcript Section (V21tzs) → Transcript List (mCGHj)
├── Related Episodes (KNbe5)
├── Subscribe Section (QpR0K)
└── Footer/Light (S1C2z)
```
