# ARIA - The Virtuoso Intelligence for Global Wealth

A world-class **42-slide** investor presentation for ARIA, the AI Risk & Investment Advisor targeting the $5 Trillion US-India investment corridor. Features professional UI/UX with animated gradients, glassmorphism effects, and smooth transitions.

## 🎨 Features

- ✨ **World-Class UI/UX**: 
  - 45-50 particles (normal slides) / 55-60 particles (transitions)
  - Multi-layer animated gradients with 20s loops
  - Glassmorphism with backdrop blur(20px)
  - Spring animations and hover halos
  - Mobile-responsive particle optimization
- 🎬 **Advanced Navigation**:
  - Progress bar with act progression tracking  
  - Thumbnail preview grid (Press T)
  - Section indicators ("Act 1: Problem • 20% Complete")
  - Adjacent slide preloading
- 🎨 **Professional Components**:
  - GradientText for all titles
  - AnimatedCounter with smooth counting
  - CircularProgress indicators
  - Domain animations (money rain, voice waves, neural networks)
- ⌨️ **Keyboard Shortcuts**: Arrow keys, Space, T (thumbnails), Home/End
- 📄 **PDF Export**: High-quality browser-native export (Ctrl+P)
- ⚡ **Performance**: React + Vite with optimized rendering

## 🚀 Getting Started

The presentation is already running! You can view it in the webview panel.

### Navigation

- **Arrow Keys (← →)**: Navigate between slides
- **Spacebar**: Next slide
- **Home**: Jump to first slide
- **End**: Jump to last slide
- **Click Navigation**: Use the bottom-right navigation buttons

## 📄 PDF Export

To export as PDF:
1. Press `Ctrl+P` (Windows/Linux) or `Cmd+P` (Mac)
2. Select "Save as PDF" as destination
3. Set margins to "None" for best results
4. Ensure "Background graphics" is enabled
5. Click "Save"

The presentation includes print-optimized CSS that automatically:
- Hides navigation controls
- Enables page breaks between slides
- Maintains full styling and gradients

## 🎯 Presentation Structure (42 Slides)

### Core Narrative Arc - 5 Acts
- **Act 1: The Opening (1-8)**: Title, Executive Summary, Problem, Market Opportunity
- **Act 2: The ARIA Strategy (9-14)**: Introducing ARIA, Wedge & Expand, B2B2C Distribution
- **Act 3: Unfair Advantages (15-22)**: India Gateway Fund, ARIA Fund Manager, Digital Family Office OS
- **Act 4: Validation (23-29)**: Live Platform, Traction Metrics, Tech Architecture
- **Act 5: The Business (30-42)**: Go-to-Market, Financials, Team, $5M Seed Round Ask

## 🛠️ Technical Stack

- **React 18**: Modern UI framework
- **Vite 5**: Lightning-fast build tool
- **Framer Motion**: Smooth animations and transitions
- **CSS3**: Glassmorphism and gradient effects

### Configuration Notes
The project includes a `vite.config.js` configured for the Replit environment with proper host settings (`0.0.0.0:5000`). This ensures the presentation works reliably in cloud development environments.

## 📝 Customization

### Editing Content
All slide components are in the `src/slides/` directory. Each slide is a React component with:
- Full control over layout and styling
- Framer Motion animations
- Responsive design

### Modifying Slides
1. Edit existing slide components in `src/slides/`
2. Update `src/App.jsx` to add/remove slides from the navigation
3. Customize styling in `src/slides/SlideStyles.css`

## 🎨 Design System

- **Primary Brand Color**: Electric Teal (#14b8a6) - ARIA signature
- **Backgrounds**: Midnight Blue/Black (#0D163A)
- **Accent Colors**: Purple, Blue, Orange, Green
- **Typography**: Inter font, bold caps headers
- **Effects**: Glassmorphism, gradients, subtle animations

## 📦 Commands

```bash
npm install        # Install dependencies
npm run dev        # Start development server on port 5000
npm run build      # Build for production
npm run preview    # Preview production build
```

## 🌟 Key Highlights

This presentation showcases ARIA's unique positioning:
- **Wedge & Expand Strategy**: 3-phase growth from India Gateway to Global AI Advisor
- **B2B2C Distribution**: Low-CAC launch via 1,000+ CPAs through Ascendum KPS
- **Vora Partnership**: Exclusive backing and GIFT City AIF access
- **Digital Family Office OS**: $1M/year functions for $10K/year
- **Live Prototype**: Working platform integrated with Zerodha Kite API

## 📚 Documentation

Complete documentation is available in the `docs/` folder:
- [Quick Start Guide](./docs/QUICK_START_GUIDE.md)
- [Final Audit Report](./docs/FINAL_DECK_AUDIT_COMPLETE.md)
- [All Documentation](./docs/index.md)

---

**ARIA - The Virtuoso Intelligence for Global Wealth**

Built with React, Vite, and Framer Motion
