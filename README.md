# AI-Powered Digital Family Office - Investor Presentation

A world-class **94-slide** investor presentation showcasing an AI-powered digital family office platform for high-net-worth investors. Features investment-grade "god slide" UI/UX with particle effects, animated gradients, and cinematic transitions.

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

## 🎯 Presentation Structure (94 Slides)

### Core Narrative Arc
- **Opening (1-3)**: Title, Executive Summary, Agenda
- **Act 1: Problem (4-7)**: Market failures driving 39% investor switching
- **Act 2: Solution (8-12)**: AI Investment Committee with 3 alpha moats
- **Act 3: Deep Dive (13-27)**: Technology architecture & competitive advantages
- **Act 4: Proof (28-36)**: Traction with 127+ users, 18.5% alpha
- **Act 5: Business (37-58)**: Team, financials, $20M Series A ask
- **Opportunity (59-75)**: Exit paths, Gift City moat, market analysis
- **Appendix (76-94)**: 7 product modules with live demonstrations

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

- **Primary Colors**: Teal (#14b8a6), Green (#10b981)
- **Accent Colors**: Orange, Purple, Blue
- **Typography**: System fonts, optimized for readability
- **Effects**: Glassmorphism, gradients, shadows

## 📦 Commands

```bash
npm install        # Install dependencies
npm run dev        # Start development server on port 5000
npm run build      # Build for production
npm run preview    # Preview production build
```

## 🌟 Highlights

This presentation deck showcases:
- **Agentic AI**: Multi-agent investment committee
- **Tax Alpha**: Daily tax-loss harvesting (+1.8% annual alpha)
- **Alternative Access**: 16,000+ funds with AI due diligence
- **GIFT City Gateway**: 0% tax India access (+300bps returns)
- **Live Platform**: 100% operational with real broker integration

---

Built with React, Vite, and Framer Motion
