---
title: Focus states — dual ring contrast without per-background math
impact: CRITICAL
wcag: 2.4.7, 2.4.11
tags: focus, keyboard, contrast, box-shadow, forced-colors, outline
---

# Focus states — dual ring contrast without per-background math

**Impact:** CRITICAL — missing or low-contrast focus indicators block keyboard and switch-control users from knowing where they are on the page (WCAG 2.4.7 Focus Visible, 2.4.11 Focus Appearance).

Every interactive element must have a visible focus state. WCAG 2.2 requires the indicator to be at least **2 CSS pixels** thick and to meet **3:1 contrast** against adjacent colors. Calculating that contrast for every button variant and background is fragile. Use a **dual box-shadow ring** (light inner, dark outer) so at least one ring always contrasts with the surface behind it.

## Convention

1. Style **`:focus-visible`** on all interactive elements (buttons, links, inputs, tabs, menu items, custom controls).
2. In normal rendering, show focus with **two stacked `box-shadow` rings** — typically **2px light** inside **2px dark** (4px total spread).
3. Always set **`outline: 2px solid transparent`** with a **matching `outline-offset`** (usually `2px`). Invisible in normal mode; in **forced colors** mode the UA paints the outline with system colors when `box-shadow` is suppressed.
4. Never use `outline: none` / `outline: 0` without a replacement that works in forced colors.

**Quick check:** keyboard focus → dual ring via `box-shadow` + transparent `outline` backup.

## WCAG context

| Criterion | Requirement | How this pattern helps |
|-----------|-------------|------------------------|
| **2.4.7 Focus visible** | Keyboard focus must be visible | `:focus-visible` + visible ring |
| **2.4.11 Focus appearance** | Indicator ≥ 2px; ≥ 3:1 contrast with adjacent colors | Two contrasting rings — one always wins against light or dark backgrounds |

`box-shadow` alone fails in **forced colors** mode (Windows High Contrast, etc.) because UAs disable decorative shadows. The transparent `outline` reserves the same geometry so the system focus color can appear there instead.

## The dual ring

Two **2px** spread shadows: inner light, outer dark. Either the white ring contrasts on a dark surface, or the black ring contrasts on a light surface — no per-component contrast audit.

```css
/* 2px white inner ring + 2px black outer ring */
box-shadow:
  0 0 0 2px #fff,
  0 0 0 4px #000;
```

Adjust spread to satisfy the 2px minimum. A single `2px` shadow is allowed by WCAG but may disappear on half of your backgrounds; the dual ring avoids that gamble.

## Forced colors fallback

Pair the shadow with a transparent outline at the same offset. Do **not** remove the outline — set its color to `transparent` so it does not show in normal mode:

```css
.interactive:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
  box-shadow:
    0 0 0 2px #fff,
    0 0 0 4px #000;
}
```

In forced colors, the UA disables `box-shadow` and paints the transparent `outline` with system focus colors. The outline occupies the same visual position as the box-shadow stack in normal mode.

## Incorrect

**No focus style — keyboard users lose position:**

```css
.button {
  background: #2563eb;
  color: #fff;
}

.button:focus {
  outline: none;
}
```

**Single-color ring — fails 3:1 on matching backgrounds:**

```css
.card__link:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}
```

A blue ring on a blue hero, or a dark ring on a dark footer, can drop below 3:1.

**`:focus` on every click — noisy for mouse users:**

```css
.button:focus {
  box-shadow: 0 0 0 2px #fff, 0 0 0 4px #000;
}
```

Mouse clicks leave a persistent ring; prefer `:focus-visible`.

**Box-shadow only — invisible in forced colors:**

```css
.button:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px #fff, 0 0 0 4px #000;
}
```

High contrast mode may remove the shadow entirely with no fallback.

## Correct

**Reusable focus ring (normal + forced colors):**

```css
.interactive:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
  box-shadow:
    0 0 0 2px #fff,
    0 0 0 4px #000;
}
```

Apply `.interactive` (or a shared `:where()` block) to buttons, links, inputs, and other tabbable controls.

**Button with variant backgrounds — same ring everywhere:**

```css
.button {
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  cursor: pointer;
}

.button--primary {
  background: #171717;
  color: #fafafa;
}

.button--secondary {
  background: #e5e5e5;
  color: #171717;
}

.button:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
  box-shadow:
    0 0 0 2px #fff,
    0 0 0 4px #000;
}
```

One focus treatment works on light, dark, and tinted buttons without recalculating contrast per variant.

**Custom control (icon button):**

```css
.icon-button {
  display: inline-flex;
  padding: 8px;
  border: none;
  background: transparent;
  border-radius: 4px;
}

.icon-button:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
  box-shadow:
    0 0 0 2px #fff,
    0 0 0 4px #000;
}
```

## Checklist

- [ ] Every interactive element has a `:focus-visible` rule
- [ ] Indicator is at least 2px thick (dual 2px rings qualify)
- [ ] Dual light/dark `box-shadow` OR verified 3:1 contrast per surface
- [ ] `outline: 2px solid transparent` + matching `outline-offset` present
- [ ] No bare `outline: none` without forced-colors-safe replacement
- [ ] Test with keyboard Tab — ring visible on all themes and surfaces
- [ ] Test in forced colors / Windows High Contrast — outline still visible

## References

- [WCAG 2.2 — 2.4.7 Focus visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html)
- [WCAG 2.2 — 2.4.11 Focus appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html)
- [MDN — `:focus-visible`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)
- [MDN — `forced-colors`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors)
