# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a 94-slide React-based investor presentation deck for an AI-powered digital family office platform. The presentation features investment-grade "god slide" UI/UX with advanced animations, particle effects, glassmorphism, and cinematic transitions. It's built for viewing in browsers and exporting to PDF.

## Commands

### Development
```bash
npm install                                    # Install dependencies
npm run dev                                    # Start dev server on port 5000
npm run build                                  # Production build
npm run preview                                # Preview production build
```

### Environment Notes
- Development server runs on `0.0.0.0:5000` (configured for Replit cloud environment)
- The `vite.config.js` includes special host configuration for `.repl.co`, `.replit.dev`, `.replit.app` domains
- Asset alias: `@assets` maps to `./attached_assets` directory

## Architecture

### Core Application Structure

**App.jsx** (src/App.jsx)
- Central orchestrator managing 94 slides in a `slides` array (lines 107-220)
- Hash-based navigation system (`#/slide/N` URL pattern) with browser back/forward support
- Preloads adjacent slides for smooth transitions (current, previous, next)
- Act-based progress tracking with 6 major sections: Opening, Act 1-5, Opportunity, Appendix
- Keyboard navigation (Arrow keys, Space, Home/End, T for thumbnails)
- Static mode via `?static=1` query param for clean screenshots
- Mobile responsive detection and optimization

### Slide Organization

The deck follows a narrative arc structure:
1. **Opening (slides 1-3)**: Title, Executive Summary, Agenda
2. **Act 1: Problem (4-7)**: Market failures and pain points
3. **Act 2: Solution (8-12)**: AI Investment Committee introduction
4. **Act 3: Deep Dive (13-27)**: Technical architecture and competitive advantages
5. **Act 4: Proof (28-36)**: Traction, metrics, unfair advantages
6. **Act 5: Business (37-58)**: Team, financials, investor personas, projections
7. **GIFT City Act 6 (59-68)**: Regulatory advantage and entity structure
8. **Appendix (69-94)**: 7 product module chapters with concept/features/live snapshots

Each slide is a React component in `src/slides/` following the pattern: `[Name]Slide.jsx`

### Component Library

**Core Components** (src/components/)
- `ParticleBackground.jsx`: Animated particle system (45-60 particles per slide, reduced 50% on mobile)
- `GradientText.jsx`: Animated gradient text for titles
- `AnimatedCounter.jsx`: Smooth number counting animations
- `CircularProgress.jsx`: SVG-based circular progress indicators
- `BarChart.jsx` / `LineChart.jsx`: Data visualization components
- `CinematicSlideFrame.jsx`: Wrapper with cinematic slide transitions
- `StandardLayouts.jsx`: Pre-built layout templates with AspectFrame
- `MetricsDashboard.jsx`: Comprehensive metrics display grid
- `PersonaCard.jsx`: Investor persona cards with rich styling
- `InteractiveCard.jsx`: Hover-enabled cards with spring animations
- `Icon.jsx`: Lucide icon wrapper with consistent sizing

### Utilities

**Responsive System** (src/utils/responsive.js)
- `SPACING`: Rem-based spacing scale (xs/sm/md/lg/xl/2xl)
- `TYPOGRAPHY`: CSS clamp() presets for fluid typography (hero/subheadline/body)
- `pxToRem()`: Convert pixel values to responsive rem units
- Use these utilities instead of hardcoded pixel values to maintain responsive consistency

### Styling Architecture

**Global Styles**
- `src/index.css`: Base reset and global CSS variables
- `src/App.css`: Application-level styles, navigation controls, thumbnail grid
- `src/components/StandardLayouts.css`: Layout component styles
- `src/slides/SlideStyles.css`: Shared slide styling (glassmorphism, gradients, animations)

**Design System**
- Primary colors: Teal (#14b8a6), Green (#10b981)
- Accent colors: Orange, Purple, Blue
- Effects: Glassmorphism with `backdrop-filter: blur(20px)`, multi-layer animated gradients (20s loops)
- Animations: Framer Motion with spring physics and custom easing curves

### Animation Strategy

- **Framer Motion** is used exclusively for all animations
- Slides use three transition types: `fade`, `slide`, `zoom`
- Particle animations run continuously with random durations (15-35s)
- Gradient backgrounds animate in 20-second loops
- Use spring animations for interactive elements (hover, tap)
- Stagger delays for list items (typically 0.1s intervals)

## Key Implementation Patterns

### Adding a New Slide

1. Create component in `src/slides/[Name]Slide.jsx`
2. Import standard components: `ParticleBackground`, `GradientText`, `AspectFrame`
3. Use `SPACING` and `TYPOGRAPHY` from `src/utils/responsive.js`
4. Import the slide component in `src/App.jsx`
5. Add to `slides` array with `{ component: [Name]Slide, title: 'Title' }`
6. Update act boundaries in `getSlideSection()` and `getActProgress()` if needed

### Slide Component Structure Pattern

```jsx
import { motion } from 'framer-motion'
import ParticleBackground from '../components/ParticleBackground'
import GradientText from '../components/GradientText'
import { AspectFrame } from '../components/StandardLayouts'
import { SPACING, TYPOGRAPHY } from '../utils/responsive'

export default function MySlide() {
  return (
    <AspectFrame>
      <ParticleBackground count={50} color="#14b8a6" />
      <div className="slide-content">
        <GradientText>Title</GradientText>
        {/* Content */}
      </div>
    </AspectFrame>
  )
}
```

### Responsive Design Approach

- Use `SPACING` constants for margins/padding instead of fixed pixels
- Use `TYPOGRAPHY` clamp presets for font sizes
- Use `pxToRem()` utility when conversion is needed
- ParticleBackground automatically reduces count 50% on mobile
- Media queries break at 768px for mobile detection
- All slides are wrapped in `AspectFrame` for consistent sizing

## PDF Export

The presentation includes print-optimized CSS:
- Navigation controls hidden in print mode
- Page breaks between slides enabled
- Background graphics preserved
- Export via browser print (Ctrl+P) → "Save as PDF"

## Performance Considerations

- Adjacent slide preloading minimizes transition lag
- Particle count auto-adjusts based on mobile detection
- Framer Motion animations use GPU-accelerated transforms
- Static mode (`?static=1`) disables animations for clean screenshots
- Hash-based navigation prevents full page reloads

## Navigation System

The app uses hash-based routing:
- URL pattern: `#/slide/0` through `#/slide/93`
- Browser back/forward buttons navigate slides
- Keyboard shortcuts: ← → Space T Home End
- Thumbnail grid (press T) shows all slides in a grid view
- Progress bar displays current act and completion percentage

## UI/UX Audit Snapshot

**⚠️ PRIORITY**: Layout fixes MUST be completed first before accessibility work
**Critical Issue**: Text getting cut off due to overflow problems - **FIX THIS FIRST!**

**Single Source of Truth**:
- **UI_UX_AUDIT_REPORT.md** ⭐ **Complete implementation guide**
  - Phase 1: Layout fixes (3-4 hours) - START HERE
  - Phase 2: Accessibility (9.5 hours) - Do after Phase 1
- **STATUS.md** - Quick navigation and current priorities

**Date**: November 10, 2025
**Total Time**: ~13 hours (layout 3-4h + accessibility 9.5h)

### Phase 1: Layout & Overflow Fixes (3-4 hours) ⭐ **DO THIS FIRST**

**Critical**: Text getting cut off, slides don't fit 16:9 aspect ratio

- **BUG-L01**: Text getting cut off (App.css:26) - Allow vertical scroll (30 min)
- **BUG-L02**: Reduce padding/gaps (StandardLayouts.css) - More content space (30 min)
- **BUG-L03**: Font sizes too large (StandardLayouts.css:439-456) - Scale down 20% (45 min)
- **BUG-L04**: Grid overflows (StandardLayouts.css) - Fix grid constraints (30 min)
- **BUG-L05**: Content reduction on dense slides (1 hour)

### Phase 2: Accessibility & Performance (9.5 hours) - Do AFTER Phase 1

- BUG-004: Color contrast fixes (15 min)
- BUG-002: ARIA labels on navigation (30 min)
- BUG-003: Keyboard accessible thumbnails (1h)
- BUG-005: prefers-reduced-motion support (2h)
- BUG-001: ParticleBackground memory leak (2h)
- BUG-006: Charts blank in PDF exports (1h)
- BUG-007: Hash navigation race condition (1.5h)
- BUG-008: Error boundaries (1h)
- BUG-009: Progress bar ARIA attributes (20 min)

### Quick Reference

**For complete details on all bugs, implementation steps, code examples, and testing procedures:**
→ See `UI_UX_AUDIT_REPORT.md`

**For current status and quick start guide:**
→ See `STATUS.md`

### Audit Summary

**Overall UX Score**: 7.8/10

**Strengths**:
- Modern glassmorphism aesthetic with consistent design system
- Well-structured component architecture
- Excellent responsive utility system (SPACING, TYPOGRAPHY, pxToRem)
- Adjacent slide preloading for smooth UX
- Strong keyboard navigation foundation
- Mobile particle optimization (50% reduction)
- Print/PDF export implementation

**Critical Issues**: 9 bugs identified (BUG-L01 through BUG-L05 for layout, BUG-001 through BUG-009 for accessibility)
**Audit Date**: November 10, 2025
**Next Steps**: Start with UI_UX_AUDIT_REPORT.md Phase 1
