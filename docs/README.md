# ARIA Strategy Deck

**AI-Powered Wealth Management Platform**

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:5173/?deck=tuesday-deck`

## Deck Versions

| Deck | URL | Slides | Use Case |
|------|-----|--------|----------|
| **Tuesday Deck** | `?deck=tuesday-deck` | 48 | Primary investor presentation |
| Strategy Deck | `?deck=strategy-deck` | 56 | Extended version |
| Compact | `?deck=strategy-compact` | 35 | Quick pitch |

## Key Commands

- **Arrow keys** - Navigate slides
- **F** - Fullscreen
- **T** - Thumbnail view
- **P** - Presentation mode
- **E** - Export dashboard

## Tuesday Deck Structure (48 slides)

### Opening (3 slides)
1. Title - "Meet ARIA"
2. Executive Summary
3. Agenda Roadmap

### Act 1: The Disruption (7 slides)
4-10. Problem slides (Inequality, Window, Geographic, Walls, Scale, Dual Gap, Solutions Fail)

### Act 2: The Strategy (14 slides)
11-24. ARIA solution (Meet ARIA, OS, Wedge, India Gateway, GIFT Execution, Data Engine, Products, Symphony, Distribution, Why Wins, Matrix)

### Act 3: Unfair Advantages (13 slides)
25-37. Product deep-dive (Overview, Demo, Liquidity, Zerodha, Platform, Architecture, AI Core, Tech+Human, CEO at Work, Personalization, Live, Switching)

### Act 4: Validation (6 slides)
38-43. Proof points (Prototype, Client Journey, Traction, Partnerships, Trust Model, Tech)

### Act 5: Business (10 slides)
44-53. Business case (Market, GTM, Moats, Financials, Model, Roadmap, Team, Vora, Ask)

### Closing (1 slide)
54. Join Us

## Files

- `src/slides/` - All slide components
- `src/components/` - Shared layouts & components
- `docs/SPEAKER_NOTES.md` - Presentation notes
- `docs/DECK_STRUCTURE.md` - Detailed slide reference

## Brand Colors

- **Primary Teal:** `#14b8a6`
- **Background:** `#0a0f1b` → `#1e293b`
- **Text:** `#e2e8f0` (primary), `#94a3b8` (secondary)
