# AI-Powered Digital Family Office - React Presentation

## Overview
This project is a 94-slide React presentation showcasing an AI-powered digital family office platform designed for high-net-worth investors. The platform features a comprehensive Product Appendix with 7 operational modules containing 68+ AI agents including dual-team analysis (30 experts: 12-agent Investment Committee + 18-agent Hedge Fund with legendary investor AIs), sentiment intelligence from 182+ news sources with FinBERT processing, Zerodha voice trading in 3 languages (11ms latency), CGMF mutual fund advisory managing 16,766 authentic funds with ₹1.55L annual tax savings examples, algo trading laboratory with 122+ indicators, and real-time market mood tracking via heat maps. Every chapter includes complete step-by-step workflows with exact timing (seconds vs hours), "What You Get" sections, visual aids, and 100% real data demonstrations.

## User Preferences
- Ultra-modern graphics and world-class design
- PDF exportable presentation  
- Professional animations and transitions
- Clean, readable typography
- Data-driven visualizations
- **IMPORTANT: From now on, make only local changes to individual slides. Ask for permission before making any global changes to the presentation framework.**

## System Architecture

### Core Stack
- **React 18**: Frontend UI library
- **Vite 5**: Build tool for fast development
- **Framer Motion**: Professional animations and transitions
- **Lucide React**: Icon library

### Viewport Solution (FROZEN - Do Not Modify)
As of November 2024, the presentation uses a **SlideViewport** component that ensures proper display:
- **16:9 Aspect Ratio**: Enforced with CSS-based letterboxing
- **No Scrolling**: Each slide fits completely within viewport (true presentation deck behavior)
- **Responsive Scaling**: Uses CSS custom property `--slide-scale` for proportional sizing
- **StandardLayouts**: Uses relative positioning to respect viewport boundaries

**Key Files (DO NOT MODIFY WITHOUT PERMISSION):**
- `src/components/SlideViewport.jsx` - Viewport wrapper with letterboxing
- `src/components/SlideViewport.css` - 16:9 aspect ratio enforcement
- `src/components/StandardLayouts.jsx` - Layout templates respecting viewport
- `src/components/StandardLayouts.css` - Responsive units with clamp() functions

### Design System
- **Glassmorphism**: Glass-card styling with blur effects
- **Color Palette**: Teal/green gradients (`#14b8a6`, `#3b82f6`, `#a855f7`)
- **Dark Theme**: Optimized for presentation on dark backgrounds
- **Responsive Units**: All spacing uses clamp() for viewport scaling
- **Typography**: System uses calc() with --slide-scale for proportional text

### Slide Organization
- **Total Slides**: 94 slides organized by Acts
- **Navigation**: Arrow keys, keyboard shortcuts, and on-screen buttons
- **Transitions**: Zoom effect with Framer Motion (0.4s ease)
- **Progress Bar**: Visual indicator with gradient styling

### Recent Optimizations (November 2024)
1. Removed problematic ScalingWrapper component
2. Implemented SlideViewport with CSS aspect-ratio
3. Updated all layouts to use responsive units
4. Fixed Executive Summary slide overflow issues
5. Achieved zero console errors/warnings
6. Production build: 882KB bundle size

## Development Guidelines

### Making Changes
1. **Local Slide Changes Only**: Modifications should be limited to individual slide components
2. **Global Changes Require Approval**: Any changes to the following require explicit permission:
   - SlideViewport component
   - StandardLayouts templates
   - App.jsx navigation logic
   - Global CSS styles
   - Build configuration

### Protected Components
These components form the core presentation framework and should not be modified:
- `SlideViewport.jsx/css` - Maintains 16:9 aspect ratio
- `StandardLayouts.jsx/css` - Ensures consistent layout patterns
- `App.jsx` - Navigation and transition logic
- `responsive.js` - pxToRem utility system

## External Dependencies
- **React 18.3**: Frontend UI library
- **Vite 5.4**: Build tool with HMR support
- **Framer Motion 11.0**: Animation library
- **Lucide React 0.344**: Icon library

## Project Status
- **Presentation Ready**: All 94 slides display correctly
- **Console Clean**: Zero errors or warnings
- **Responsive Design**: Works across all viewport sizes
- **Navigation**: Arrow keys and on-screen buttons functional
- **PDF Export**: Ctrl+P for high-quality PDF generation
- **Production Build**: Optimized at 882KB