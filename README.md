# AI-Powered Digital Family Office - Premium Presentation Deck

A world-class Slidev presentation showcasing an AI-powered digital family office platform for high-net-worth investors, featuring ultra-modern graphics, custom Vue components, and professional animations.

## 🎨 Features

- ✨ **Ultra-Modern UI**: Glassmorphism effects, gradient backgrounds, smooth animations
- 📊 **Interactive Visualizations**: Custom Vue components for data presentation
- 🎬 **Professional Animations**: Floating elements, pulse effects, smooth transitions
- 🌙 **Optimized Dark Theme**: Premium color palette with teal/green gradients
- ⌨️ **Keyboard Navigation**: Arrow keys, spacebar for slide navigation
- 📱 **Responsive Design**: Optimized for 16:9 presentation format
- 🎯 **PDF Export Ready**: Multiple export options available

## 🚀 Getting Started

The presentation is already running! You can view it in the webview panel.

### Navigation

- **Arrow Keys** or **Spacebar**: Navigate between slides
- **F**: Toggle fullscreen mode
- **O**: Toggle overview mode
- **D**: Toggle dark mode
- **G**: Toggle drawing mode

### Presenter Mode

Access presenter mode with notes and timer:
```
http://localhost:5000/presenter/
```

## 📄 PDF Export Options

### Option 1: Browser Print (Recommended for Replit)
1. Open the presentation
2. Press `Ctrl+P` (or `Cmd+P` on Mac)
3. Select "Save as PDF" as destination
4. Choose "Landscape" orientation
5. Click "Save"

### Option 2: Slidev Export (Requires additional setup)
```bash
npm run export -- --output presentation.pdf
```
Note: This requires system dependencies that may not be available in all environments.

### Option 3: Online Conversion
1. Use the built-in export: `npm run build`
2. Upload the generated SPA to any PDF conversion service

## 🎯 Slide Overview

1. **Cover**: AI-Powered Digital Family Office
2. **Act 1 Intro**: The Hook & The Problem
3. **AI Alpha**: Stanford study visualization
4. **Market Switching**: Statistics and trends
5. **Three Failures**: Alpha Gap comparison
6. **Act 2 Intro**: The Solution
7. **AI Committee**: Old vs New model comparison
8. **Three Alpha Agents**: Tax, Alternative, India Gateway
9. **Act 3 Intro**: The Deep Dive
10. **India Market**: Problem visualization
11. **GIFT City Solution**: Gateway benefits
12. **Tax Alpha Agent**: Daily vs Annual TLH
13. **Alternative Asset Agent**: AI due diligence
14. **Agent Architecture**: Full system overview
15. **Act 4 Intro**: The Proof
16. **Live Platform**: Production validation
17. **Thank You**: Closing slide

## 🛠️ Technical Stack

- **Slidev**: Modern presentation framework
- **Vue 3**: Component framework with TypeScript
- **UnoCSS**: Utility-first CSS engine
- **Custom Components**: 5 specialized Vue components
- **Animations**: CSS keyframes and transitions

## 📝 Customization

### Editing Content
Edit `slides.md` to modify slide content. The file uses Markdown with Vue components.

### Modifying Components
Custom components are in the `components/` directory:
- `StanfordChart.vue` - AI performance comparison
- `StatCard.vue` - Animated statistics
- `AlphaGapComparison.vue` - Problem/solution grid
- `FlowDiagram.vue` - Process flow visualization
- `AgentCard.vue` - Feature cards with icons

### Changing Theme
Modify the frontmatter in `slides.md`:
```yaml
theme: default
colorSchema: 'dark'
background: [your-image-url]
```

## 🎨 Design System

- **Primary Colors**: Teal (#14b8a6), Green (#10b981)
- **Accent Colors**: Orange, Purple, Blue
- **Typography**: System fonts, optimized for readability
- **Effects**: Glassmorphism, gradients, shadows

## 📦 Commands

```bash
npm run dev        # Start development server on port 5000
npm run build      # Build for production
npm run export     # Export to PDF (requires dependencies)
```

## 🌟 Highlights

This presentation deck showcases:
- **Agentic AI**: Multi-agent investment committee
- **Tax Alpha**: Daily tax-loss harvesting (+1.8% annual alpha)
- **Alternative Access**: 16,000+ funds with AI due diligence
- **GIFT City Gateway**: 0% tax India access (+300bps returns)
- **Live Platform**: 100% operational with real broker integration

---

Built with ❤️ using Slidev, Vue 3, and modern web technologies
