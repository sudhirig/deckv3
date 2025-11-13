/**
 * Style Constants - Single source of truth for all design tokens
 * Ensures consistency across all slides and components
 */

// Color Palette
export const colors = {
  // Primary Brand Colors
  primary: {
    teal: '#14b8a6',
    cyan: '#06b6d4',
    emerald: '#10b981',
  },
  
  // Gradients
  gradients: {
    primary: 'linear-gradient(135deg, #14b8a6, #06b6d4)',
    secondary: 'linear-gradient(135deg, #06b6d4, #10b981)',
    tertiary: 'linear-gradient(135deg, #14b8a6, #10b981)',
    full: 'linear-gradient(135deg, #14b8a6, #06b6d4, #10b981)',
    text: 'linear-gradient(135deg, #14b8a6 0%, #06b6d4 50%, #10b981 100%)',
    dark: 'linear-gradient(135deg, #0a0f1b 0%, #0f172a 50%, #1e293b 100%)',
  },
  
  // Background Colors
  backgrounds: {
    primary: '#0a0f1b',
    secondary: '#0f172a',
    tertiary: '#1e293b',
    card: 'rgba(15, 23, 42, 0.6)',
    overlay: 'rgba(0, 0, 0, 0.5)',
  },
  
  // Text Colors
  text: {
    primary: '#e2e8f0',
    secondary: '#94a3b8',
    muted: '#64748b',
    inverse: '#0f172a',
  },
  
  // Status Colors
  status: {
    success: '#10b981',
    warning: '#fbbf24',
    error: '#ef4444',
    info: '#06b6d4',
  },
  
  // Accent Colors
  accent: {
    purple: '#8b5cf6',
    pink: '#ec4899',
    yellow: '#fbbf24',
    blue: '#3b82f6',
    red: '#ef4444',
    orange: '#f59e0b',
  },
}

// Typography Scale
export const typography = {
  // Font Families
  fonts: {
    primary: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace',
  },
  
  // Font Sizes with Responsive Clamp
  sizes: {
    display: 'clamp(3rem, 5vw, 4rem)',
    h1: 'clamp(2rem, 3vw, 2.5rem)',
    h2: 'clamp(1.5rem, 2vw, 2rem)',
    h3: 'clamp(1.25rem, 1.5vw, 1.5rem)',
    body: 'clamp(1rem, 1.2vw, 1.25rem)',
    small: '0.875rem',
    xs: '0.75rem',
  },
  
  // Font Weights
  weights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  
  // Line Heights
  lineHeights: {
    tight: 1.2,
    normal: 1.6,
    relaxed: 1.8,
  },
}

// Spacing System (8px base)
export const spacing = {
  xs: '0.5rem',   // 8px
  sm: '1rem',     // 16px
  md: '1.5rem',   // 24px
  lg: '2rem',     // 32px
  xl: '3rem',     // 48px
  '2xl': '4rem',  // 64px
  '3xl': '6rem',  // 96px
}

// Border Radius
export const borderRadius = {
  sm: '0.5rem',    // 8px
  md: '0.75rem',   // 12px
  lg: '1rem',      // 16px
  xl: '1.5rem',    // 24px
  '2xl': '2rem',   // 32px
  full: '9999px',
}

// Shadows
export const shadows = {
  sm: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  md: '0 4px 6px rgba(0,0,0,0.16), 0 2px 4px rgba(0,0,0,0.12)',
  lg: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  xl: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
  glow: {
    teal: '0 0 30px rgba(20, 184, 166, 0.3)',
    cyan: '0 0 30px rgba(6, 182, 212, 0.3)',
    emerald: '0 0 30px rgba(16, 185, 129, 0.3)',
  },
}

// Animation Configurations
export const animations = {
  // Durations
  durations: {
    fast: '0.2s',
    normal: '0.3s',
    slow: '0.5s',
    slower: '0.8s',
  },
  
  // Easings
  easings: {
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    spring: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
  
  // Common Transitions
  transitions: {
    default: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    fast: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    slow: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  },
}

// Breakpoints (for responsive design)
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  'presentation': '1366px',
}

// Z-Index Scale
export const zIndex = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  overlay: 30,
  modal: 40,
  popover: 50,
  tooltip: 60,
}

// Icon Sizes
export const iconSizes = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
  '2xl': 40,
  '3xl': 48,
}

// Glassmorphism Effects
export const glassmorphism = {
  light: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
  dark: {
    background: 'rgba(15, 23, 42, 0.6)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(148, 163, 184, 0.1)',
  },
  teal: {
    background: 'rgba(20, 184, 166, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(20, 184, 166, 0.3)',
  },
}

// Common Component Styles
export const componentStyles = {
  // Card Styles
  card: {
    default: {
      background: glassmorphism.dark.background,
      backdropFilter: glassmorphism.dark.backdropFilter,
      border: glassmorphism.dark.border,
      borderRadius: borderRadius.lg,
      padding: spacing.lg,
    },
    hover: {
      transform: 'translateY(-2px)',
      boxShadow: shadows.lg,
    },
  },
  
  // Button Styles
  button: {
    primary: {
      background: colors.gradients.primary,
      color: colors.text.primary,
      padding: `${spacing.sm} ${spacing.lg}`,
      borderRadius: borderRadius.md,
      fontWeight: typography.weights.semibold,
    },
    secondary: {
      background: 'transparent',
      border: `2px solid ${colors.primary.teal}`,
      color: colors.primary.teal,
      padding: `${spacing.sm} ${spacing.lg}`,
      borderRadius: borderRadius.md,
    },
  },
  
  // Badge Styles
  badge: {
    default: {
      padding: `${spacing.xs} ${spacing.sm}`,
      borderRadius: borderRadius.full,
      fontSize: typography.sizes.xs,
      fontWeight: typography.weights.medium,
    },
    colors: {
      teal: {
        background: 'rgba(20, 184, 166, 0.2)',
        color: colors.primary.teal,
      },
      cyan: {
        background: 'rgba(6, 182, 212, 0.2)',
        color: colors.primary.cyan,
      },
    },
  },
}

// Export all constants as a single object for convenience
export default {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  animations,
  breakpoints,
  zIndex,
  iconSizes,
  glassmorphism,
  componentStyles,
}
