# ARIA Icon Badge - Universal Logo Usage Guide

## Component Location
`/src/components/ARIAIconBadge.jsx`

## Design Philosophy
The ARIA Icon Badge is a compact, professional logo that represents ARIA across all touchpoints. It features:
- **Stylized "A"** with gradient colors
- **Dark background** with teal border for contrast
- **Hexagonal pattern** representing AI/tech
- **Tech dots** at vertices showing connectivity
- **Optional animations** for engagement

## Current Implementations

### 1. Title Slide (Main Landing)
- **Top-left header**: 45px size, paired with ARIAwealth.ai text
- **Next to "Meet ARIA"**: 60px size, spring animation with hover rotation
- Creates brand consistency from the first impression

### 2. Introducing ARIA Slide
- **Next to title**: 50px size with animation
- Reinforces brand identity when explaining ARIA

## How to Use in Any Slide

### Basic Usage
```jsx
import ARIAIconBadge from '../components/ARIAIconBadge'

// Simple static badge
<ARIAIconBadge size={60} animated={false} />

// Animated with hover effects
<ARIAIconBadge size={80} animated={true} />
```

### With Animation Wrapper
```jsx
<motion.div
  initial={{ scale: 0, rotate: -180 }}
  animate={{ scale: 1, rotate: 0 }}
  transition={{ 
    duration: 0.8,
    type: "spring"
  }}
  whileHover={{ rotate: 360 }}
>
  <ARIAIconBadge size={60} animated={true} />
</motion.div>
```

### As Header Logo
```jsx
<div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
  <ARIAIconBadge size={45} animated={false} />
  <span>ARIAwealth.ai</span>
</div>
```

## Recommended Sizes
- **Small/Header**: 40-45px
- **Medium/Title**: 50-60px
- **Large/Feature**: 70-80px
- **Hero/Splash**: 90-100px

## Animation Options
1. **Spring entrance**: Scale from 0 with rotation
2. **Hover rotation**: 360° spin on hover
3. **Pulse effect**: Built-in pulse animation when `animated={true}`
4. **Floating**: Can be wrapped in motion.div with y-axis animation

## Where to Add Next

### High Impact Locations:
1. **Call to Action slides** - Next to contact information
2. **Team slides** - As a watermark or section divider
3. **Financial slides** - Top corner for brand presence
4. **Appendix** - Footer logo on each appendix slide

### Integration Examples:

#### Section Headers
```jsx
<div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
  <ARIAIconBadge size={40} />
  <h2>Section Title</h2>
</div>
```

#### Card Badges
```jsx
<div className="feature-card">
  <ARIAIconBadge size={30} />
  <p>Feature content</p>
</div>
```

#### Loading States
```jsx
<motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity }}>
  <ARIAIconBadge size={60} />
</motion.div>
```

## Color Consistency
The badge automatically uses the brand gradient:
- Primary: #14b8a6 (Teal)
- Secondary: #06b6d4 (Cyan)
- Accent: #10b981 (Emerald)

## Best Practices
1. **Don't overuse** - One or two per slide maximum
2. **Maintain size hierarchy** - Larger for important elements
3. **Use animation sparingly** - Only for key moments
4. **Ensure contrast** - Works best on dark backgrounds
5. **Align with content** - Place near ARIA-related content

## Future Enhancements
- Export as SVG for external use
- Create favicon version
- Generate social media variants
- Build loading spinner variant

---
**Version**: 1.0
**Created**: November 2025
**Component**: ARIAIconBadge
