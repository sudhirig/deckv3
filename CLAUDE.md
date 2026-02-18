# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

React-based investor presentation deck for ARIA, an AI-powered digital family office platform targeting the $107T EMILLI (Emerging Mass Intellectuals Leading Liquidity and Investments) market. Features investment-grade UI/UX with animated gradients, particle effects, glassmorphism, and cinematic transitions. Built with React 18, Vite, and Framer Motion for both browser presentation and PDF export.

**Key Business Context:**
- ARIA positions as an "AI Family Office CEO" with 68+ AI agents
- Three core modules: ARIA AI (advisory), ARIA Wealth (alternatives), ARIA Trade (execution)
- Targets HNIs ($1M-$50M), NRIs, Post-exit Founders, and CPAs/Advisors
- Uses B2B2C distribution through CPA channels
- Leverages GIFT City for India market access ($5T opportunity)

## Commands

```bash
# Development
npm install          # Install dependencies  
npm run dev          # Start dev server on port 5173
npm run build        # Production build
npm run preview      # Preview production build

# Testing
npm run test         # Run Vitest tests
npm run test:ui      # Run tests with UI
```

## Architecture

### Core Structure

The deck is a single-page React application with hash-based navigation managed in `src/App.jsx`:
- **Navigation**: Hash-based routing (`#/slide/N`) with browser history support
- **Slide Management**: Slide array (lines 107+) with 40-90+ slides depending on deck variant
- **Act-based Organization**: 5 primary acts + opening/appendix sections
- **Preloading**: Adjacent slides (previous/next) preloaded for smooth transitions
- **Keyboard Support**: Arrow keys, Space, Home/End, T for thumbnails

### Slide Component Pattern

All slides in `src/slides/` follow a consistent pattern:
```jsx
// Standard slide component structure
const SlideNameSlide = () => {
  return (
    <motion.div className="slide-content">
      {/* Slide content */}
    </motion.div>
  );
};
```

### Key Component Libraries

**Core Components** (`src/components/`):
- `ParticleBackground.jsx` - Animated particle system (45-60 particles, mobile-optimized)
- `StandardLayouts.jsx` - Pre-built responsive layouts with AspectFrame
- `GradientText.jsx` - Animated gradient text for titles
- `AnimatedCounter.jsx` - Smooth number animations
- `CircularProgress.jsx` - SVG progress indicators
- `CinematicSlideFrame.jsx` - Slide transition wrapper

**Design System Components** (`src/components/design-system/`):
- `StandardSlideLayout.jsx` - Base layout for consistent slides
- `SlideHeader.jsx` - Standard slide headers
- `FeatureGrid.jsx` - Feature card grids
- `ComparisonTable.jsx` - Before/after comparisons
- `MetricsBar.jsx` - Metric visualization

### Responsive Design

All components use the responsive utility system (`src/utils/responsive.js`):
- **SPACING**: Rem-based spacing scale (xs/sm/md/lg/xl/2xl)
- **TYPOGRAPHY**: Fluid typography with CSS clamp()
- **pxToRem()**: Convert pixels to responsive rem units
- Mobile breakpoints: 768px (tablet), 480px (mobile)

### Animation Strategy

Framer Motion is used exclusively for animations:
- **Slide Transitions**: fade, slide, zoom variants
- **Spring Physics**: Interactive hover/tap animations
- **Stagger Effects**: 0.1s delays for list items
- **Background Animations**: 20s gradient loops, 15-35s particle motion

### Act Configuration

Acts are centrally configured in `src/config/acts.js`:
- Defines navigation sections, colors, and progress tracking
- Each act has: id, name, shortName, startSlide, color, gradient
- Used by ActDropdown, progress bars, and navigation helpers

## Development Guidelines

### Adding New Slides

1. Create component in `src/slides/NewSlide.jsx`
2. Import in `src/App.jsx`
3. Add to slides array with proper act placement
4. Use StandardLayouts for consistency

### Component Best Practices

- Use existing design system components when possible
- Apply responsive utilities instead of hardcoded pixels
- Maintain glassmorphism effects with backdrop-filter
- Keep particle counts mobile-optimized (50% reduction)

### Testing

Tests are in `src/__tests__/` and `src/tests/`:
- Component tests use Vitest + React Testing Library
- Slide UI tests verify rendering and interactions
- Run `npm test` before committing changes

### Performance Considerations

- Slides are lazy-loaded with adjacent preloading
- Particle systems reduce on mobile automatically
- Static mode available via `?static=1` for screenshots
- Images should be optimized and in `src/assets/`

## Environment Notes

- Dev server configured for cloud environments (Replit)
- Vite config includes special host settings for .repl.co domains
- Asset alias: `@assets` maps to `./attached_assets` directory
- Port 5173 for local development (changed from 5000)

## PDF Export

Browser-native PDF export (Ctrl/Cmd+P):
- Print styles in `src/styles/print.css`
- Automatically hides navigation controls
- Maintains full styling and gradients
- Set margins to "None" and enable "Background graphics"

## Deck Variants

The application supports multiple deck configurations via URL parameters:
- **Main Deck**: Default 40+ slide presentation
- **Compressed Deck**: `?deck=compressed` - 25-slide condensed version
- **Tuesday Deck**: `?deck=tuesday-deck` - 48-slide variant
- **Static Mode**: `?static=1` - Disables animations for screenshots

## Key Metrics & Validation Points

When working on slides, ensure these key metrics remain consistent:
- **68+ AI agents** orchestrating wealth management
- **18 legendary investor personas** in AI Investment Committee
- **$107T** stranded wealth opportunity (EMILLI market)
- **$25M** liquidity event case study
- **11ms** voice trading execution
- **600%** AI outperformance (Stanford study)
- **46%** advisors switching (PwC 2024)
- **50x** LTV/CAC ratio

## Content & Story Arc Considerations

The deck follows a 5-act narrative structure:
1. **Act 1: The Disruption** - Problem identification, market gaps
2. **Act 2: The ARIA Strategy** - Solution introduction, wedge & expand
3. **Act 3: Product Suite** - Features, comparisons, use cases
4. **Act 4: Validation** - Proof points, partnerships, traction
5. **Act 5: The Business** - Market, team, financials, ask

### Known Issues & Improvement Areas

Based on recent reviews:
- **Story Arc**: Needs stronger emotional hook in opening
- **Complexity**: Simplify "68+ agents" messaging - overwhelming for investors
- **Navigation**: Confusing as website vs presentation - needs clarity
- **Mobile**: Slide format not optimized for mobile viewing
- **CTAs**: Missing clear next actions throughout deck
- **Human Element**: Lacks personal stories and testimonials

### When Making Changes

1. **Maintain Visual Consistency**: Use existing color palette (Teal #14B8A6 primary)
2. **Preserve Animations**: Keep Framer Motion patterns consistent
3. **Test Multiple Variants**: Check main, compressed, and tuesday-deck versions
4. **Verify Metrics**: Ensure key numbers remain accurate across slides
5. **Consider Story Flow**: Changes should enhance, not disrupt, the narrative arc