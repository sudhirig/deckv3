# AI-Powered Digital Family Office - React Presentation

## Overview
This project is an 86-slide React presentation for an AI-powered digital family office platform. It targets high-net-worth investors and showcases a comprehensive platform with 7 operational modules, including 68+ AI agents, dual-team analysis (Investment Committee & Hedge Fund), sentiment intelligence, voice trading, mutual fund advisory, algo trading, and real-time market mood tracking. The presentation emphasizes visual aids, real data, and step-by-step workflows.

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
- **Vite 5**: Build tool
- **Framer Motion**: Animations and transitions
- **Lucide React**: Icon library

### Viewport Solution
The presentation uses a `SlideViewport` component to ensure a consistent 16:9 aspect ratio with CSS-based letterboxing, no scrolling within slides, and responsive scaling. `StandardLayouts` utilize relative positioning to fit within the viewport.

### Design System
- **Glassmorphism**: Applied to cards with blur effects.
- **Color Palette**: Teal/green gradients.
- **Dark Theme**: Optimized for presentation on dark backgrounds.
- **Responsive Units**: Spacing uses `clamp()` for scaling.
- **Typography**: Uses `calc()` with `--slide-scale` for proportional text.

### Icon System
A unified `Icon.jsx` component uses Lucide React v0.344. It features two variants: `badge` (glassmorphic, padded, with gradient glow) and `inline` (bare for text integration). It covers 30 unique icon types with 7 gradient schemes. All emojis have been replaced with Lucide icons.

### Slide Organization
The presentation consists of 86 slides, organized by Acts with Act transition slides removed for a streamlined flow. Navigation is managed by arrow keys, keyboard shortcuts, and on-screen buttons, featuring a zoom effect transition. A progress bar indicates advancement. The `ProductOverviewSlide` is strategically placed at slide 10 for an early platform overview. Interactive navigation includes clickable agenda cards and an Act dropdown menu.

### Export Features
The system supports:
- **PDF Export**: Landscape, 16:9 aspect ratio, one slide per page, hidden navigation.
- **PNG Image Export**: High-resolution 1920x1080, individual or bulk ZIP, Canva-compatible.
- **JSON Data Export**: Complete slide structure and metadata for reference.

## External Dependencies
- **React 18.3**: Frontend UI
- **Vite 5.4**: Build tool
- **Framer Motion 11.0**: Animation
- **Lucide React 0.344**: Icons
- **html2canvas 1.4.1**: Screenshot generation
- **jszip 3.10.1**: ZIP file creation
- **file-saver 2.0.5**: File download