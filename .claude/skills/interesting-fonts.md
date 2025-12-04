# Interesting Fonts Skill

Apply high-impact, distinctive typography to the project.

## Core Principles

Typography instantly signals quality. Avoid using boring, generic fonts.

**Never use:** Inter, Roboto, Open Sans, Lato, default system fonts

## Font Categories & Examples

### Code Aesthetic
- JetBrains Mono
- Fira Code
- Space Grotesk

### Editorial
- Playfair Display
- Crimson Pro

### Technical
- IBM Plex family (IBM Plex Sans, IBM Plex Serif, IBM Plex Mono)
- Source Sans 3

### Distinctive
- Bricolage Grotesque
- Newsreader

## Pairing Strategy

**High contrast = interesting**

Effective combinations:
- Display + monospace
- Serif + geometric sans
- Variable font across weights

## Typography Rules

1. **Use extremes:** 100/200 weight vs 800/900, not 400 vs 600
2. **Size jumps:** 3x+ difference, not 1.5x
3. **Decisive choice:** Pick one distinctive font, use it decisively
4. **Load from Google Fonts** for easy implementation

## Implementation Steps

When applying this skill:

1. Analyze current typography
2. Identify the project's aesthetic (code/editorial/technical/distinctive)
3. Select 1-2 fonts that fit the aesthetic
4. Implement with Google Fonts
5. Apply extreme weight and size contrasts
6. Ensure high contrast pairings if using multiple fonts

## Example Implementation

```html
<!-- Google Fonts import -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;700&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet">
```

```css
:root {
  --font-display: 'Space Grotesk', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}

h1 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 4rem; /* 3x+ larger than body */
}

body {
  font-family: var(--font-display);
  font-weight: 300;
  font-size: 1.125rem;
}

code {
  font-family: var(--font-mono);
}
```
