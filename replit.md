# AI-Powered Digital Family Office - React Presentation

## Overview
A complete **28-slide** React presentation showcasing an AI-powered digital family office platform for high-net-worth investors. Features ultra-modern graphics, smooth animations, and professional design with reliable Replit configuration. Content exactly matches the original GitHub repository (sudhirig/deckv1/slides.md) - only UI/UX has been enhanced.

## Project Structure
```
├── src/
│   ├── main.jsx                 # React app entry point
│   ├── App.jsx                  # Main app with navigation
│   ├── App.css                  # App-level styles
│   ├── index.css                # Global styles & print CSS
│   └── slides/                  # Individual slide components
│       ├── TitleSlide.jsx       # Cover slide
│       ├── ProblemSlide.jsx     # Problem overview
│       ├── StanfordSlide.jsx    # AI research data
│       ├── AlphaGapSlide.jsx    # Comparison slide
│       ├── SolutionSlide.jsx    # Solution overview
│       ├── [... 12 more slides]
│       └── SlideStyles.css      # Shared slide styles
├── index.html                   # HTML entry point
├── vite.config.js              # Vite configuration
└── package.json                # Dependencies
```

## Features
- 🎨 Ultra-modern UI with glassmorphism effects
- 🎬 Smooth animations and transitions
- 📊 Interactive data visualizations
- 🎯 Responsive design optimized for 16:9 presentations
- 📄 PDF export capability built-in
- ⌨️ Keyboard navigation support
- 🌙 Optimized dark theme

## Key Technologies
- **React 18**: Modern UI framework
- **Vite 5**: Lightning-fast build tool
- **Framer Motion**: Professional animations
- **CSS3**: Glassmorphism & gradients
- **Print CSS**: PDF export optimization

## Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- **PDF Export**: Use browser print (Ctrl/Cmd + P) to export as PDF

## Recent Changes
- **November 5, 2025**: Complete rebuild matching GitHub repo content exactly
  - All 28 slides now match sudhirig/deckv1/slides.md content precisely (including Act dividers)
  - **Phase 1 Enhancements Completed** - Professional-grade animations and visual polish:
    - Created reusable animated components (AnimatedCounter, AnimatedText, GradientText, PulsingBadge)
    - Added animated counters for key statistics (93%, 46%, $1B, etc.)
    - Implemented gradient text effects on all slide titles
    - Added staggered reveal animations for content
    - Enhanced Act divider slides with cinematic transitions
    - Improved color system with consistent gradient usage
    - Added pulsing effects and microinteractions throughout
  - Migrated from Slidev to React for Replit compatibility
  - Resolved Vite host blocking issues with allowedHosts configuration
  - Created custom React slide components with glassmorphism UI
  - Implemented Framer Motion animations and transitions
  - Added keyboard navigation and PDF export capability
  - Proper Vite configuration for Replit (0.0.0.0:5000 with host allowlisting)
  - UI/UX significantly improved while preserving exact source content

## Architecture Decisions
- **React over Slidev**: Better reliability in Replit environment, no host blocking issues
- **Component-based slides**: Each slide is an independent React component
- **Framer Motion**: Smooth page transitions and animations
- **Print CSS**: Browser-native PDF export without external dependencies
- **Dark theme**: Teal/green gradient accent colors with glassmorphism
- **Vite configuration**: Proper host settings (0.0.0.0:5000) for cloud environments

## User Preferences
- Ultra-modern graphics and world-class design
- PDF exportable presentation
- Professional animations and transitions
- Clean, readable typography
- Data-driven visualizations
