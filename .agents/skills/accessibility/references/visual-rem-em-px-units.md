---
title: rem, em, and px — typography that scales, layout that holds
impact: HIGH
wcag: 1.4.4, 1.4.10, 1.4.12
tags: css, typography, zoom, text-spacing, responsive
---

# rem, em, and px — typography that scales, layout that holds

**Impact:** HIGH — wrong units lock text to a fixed size, so users who enlarge text in the browser or OS see clipped, overlapping, or unreadable content (WCAG 1.4.4 Resize Text).

Choosing CSS units is an accessibility decision, not just a styling preference. Split units by **what must scale with the user** vs **what is presentational chrome**.

## Convention

| Unit | Use for |
|------|---------|
| **`rem`** | Typography: `font-size`, `line-height`, `letter-spacing`, spacing between text |
| **`em`** | Media query breakpoints only (divide px by 16: `768px` → `48em`) |
| **`px`** | Presentational layout: padding, margins, `border-radius`, borders, outlines |

Do not use `px` or `rem` in `@media` width/height conditions.

**Quick check:** text reads → `rem`; layout reflow → `em`; box looks → `px`.

## WCAG context

| Criterion | What users need | How units help |
|-----------|-----------------|----------------|
| **1.4.4 Resize text** | Text enlargeable to 200% without assistive technology | `rem` typography follows the root font size, which respects browser default font size and many OS “large text” settings |
| **1.4.10 Reflow** | No horizontal scroll at 320 CSS px width when zoomed to 400% | Breakpoints in `em` track the user’s zoom level; fixed `px` breakpoints can trigger layout changes at the wrong effective size |
| **1.4.12 Text spacing** | User agents can adjust line height, letter spacing, etc. | Relative `line-height` and `letter-spacing` in `rem`/`em` compound correctly when text scales |

`px` font sizes do **not** grow when a user sets a larger default font size in browser settings — only zoom affects them. That fails the spirit of 1.4.4 even when a page “looks fine” at 100% zoom.

## Why three units

```text
User changes default font size or zooms
        │
        ▼
   rem typography scales ──► readable body copy, headings, line-height
        │
   em breakpoints reflow ──► layout adapts at the user’s effective viewport
        │
   px box chrome stays stable ──► borders, radii, fixed padding stay crisp
```

- **`rem`** — relative to root (`html`) font size. One place to inherit user preference.
- **`em` in `@media`** — for width/height media features, `1em` equals the browser’s default font size (typically 16px), so breakpoints respond to zoom. See [MDN: em in media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries#units_in_media_queries).
- **`px`** — absolute CSS pixels for non-text box drawing. Fine for hairline borders and fixed corner radii; avoid for anything the user must scale to read.

## Incorrect

**Fixed typography — ignores user font-size preference:**

```css
.card__title {
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.3px;
}
```

At 200% browser text size, this title stays 18px while surrounding user-agent text grows → uneven hierarchy and possible overlap.

**Breakpoints in px — reflow at wrong effective width when zoomed:**

```css
@media (max-width: 768px) {
  .header__nav {
    display: none;
  }
}
```

A user zoomed to 200% on a 1024px window has an effective layout width closer to 512px, but the `768px` query may not fire → horizontal scroll or cramped desktop nav.

**Typography spacing in px between text blocks:**

```css
.card__meta {
  margin-top: 8px;
  font-size: 0.875rem;
}
```

Meta text scales; fixed `8px` gap does not — tight spacing when text is large (1.4.12).

## Correct

**Typography and text rhythm in rem:**

```css
.card__title {
  font-size: 1.125rem;
  line-height: 1.4;
  letter-spacing: -0.01875rem;
}

.card__meta {
  margin-top: 0.5rem;
  font-size: 0.875rem;
}
```

When root font size increases, title, line-height, and gaps grow together.

**Breakpoints in em (÷ 16):**

```css
/* 768px → 48em, 1024px → 64em */
@media (min-width: 48em) and (max-width: 64em) {
  :root {
    --content-padding-inline: 24px;
  }
}

@media (max-width: 47.9375em) {
  :root {
    --content-padding-inline: 16px;
  }
}
```

Layout reflow tracks zoom because breakpoints use `em`, not fixed `px`.

**Presentational chrome in px:**

```css
.card {
  padding: 24px;
  border: 1px solid var(--border);
  border-radius: 8px;
  outline-offset: 2px;
}
```

Borders and radii stay visually consistent at any zoom level. Prefer `rem` for gaps **between text** (e.g. `gap` in a vertical stack of labels) when that gap must grow with text.

## Decision checklist

When writing a new declaration, ask:

1. **Will a user need this to grow to read comfortably?** → `rem` (or unitless `line-height`)
2. **Is this a viewport breakpoint?** → `em`, never `px` or `rem`
3. **Is this non-text decoration (border, radius, outline width)?** → `px`

## Common mistakes in reviews

| Mistake | Fix |
|---------|-----|
| `font-size: 14px` | `font-size: 0.875rem` |
| `@media (min-width: 640px)` | `@media (min-width: 40em)` |
| `line-height: 22px` | `line-height: 1.375` or `1.375rem` |
| Icon **width/height** next to text | Size the icon in `rem` if it must scale with adjacent text; use `px` only for fixed decorative assets |

## References

- [WCAG 2.2 — 1.4.4 Resize text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)
- [WCAG 2.2 — 1.4.10 Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html)
- [WCAG 2.2 — 1.4.12 Text spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html)
- [MDN — Using media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
