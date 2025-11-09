/**
 * Responsive Design Utility Layer
 * 
 * Provides a systematic approach to converting fixed pixel dimensions to responsive units.
 * Use these utilities to ensure consistent spacing, typography, and responsive behavior
 * across the entire application.
 */

/**
 * Spacing scale constants in rem units
 * 
 * @typedef {Object} SpacingScale
 * @property {string} xs - Extra small spacing (0.5rem / 8px)
 * @property {string} sm - Small spacing (1rem / 16px)
 * @property {string} md - Medium spacing (1.5rem / 24px)
 * @property {string} lg - Large spacing (2rem / 32px)
 * @property {string} xl - Extra large spacing (3rem / 48px)
 * @property {string} 2xl - 2x Extra large spacing (4rem / 64px)
 * 
 * @example
 * // Use in inline styles
 * <div style={{ padding: SPACING.md }}>Content</div>
 * 
 * @example
 * // Use in styled components
 * const Container = styled.div`
 *   gap: ${SPACING.lg};
 * `
 */
export const SPACING = {
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '3rem',
  '2xl': '4rem'
}

/**
 * Responsive typography scale using CSS clamp()
 * 
 * These presets automatically scale between minimum and maximum sizes
 * based on viewport width, ensuring readable text at all screen sizes.
 * 
 * @typedef {Object} TypographyScale
 * @property {string} hero - Hero/display text (40-64px)
 * @property {string} subheadline - Subheading text (24-40px)
 * @property {string} body - Body/paragraph text (14.4-18px)
 * 
 * @example
 * // Use in inline styles
 * <h1 style={{ fontSize: TYPOGRAPHY.hero }}>Hero Title</h1>
 * 
 * @example
 * // Use in styled components
 * const HeroText = styled.h1`
 *   font-size: ${TYPOGRAPHY.hero};
 * `
 */
export const TYPOGRAPHY = {
  hero: 'clamp(2.5rem, 5vw, 4rem)',
  subheadline: 'clamp(1.5rem, 3vw, 2.5rem)',
  body: 'clamp(0.9rem, 1.5vw, 1.125rem)'
}

/**
 * Convert pixel values to rem units
 * 
 * Assumes base font size of 16px (browser default).
 * Use rem units for better accessibility and responsive scaling.
 * 
 * @param {number} px - Pixel value to convert
 * @returns {string} Value in rem units
 * 
 * @example
 * pxToRem(16) // Returns '1rem'
 * pxToRem(24) // Returns '1.5rem'
 * pxToRem(8) // Returns '0.5rem'
 */
export const pxToRem = (px) => `${px / 16}rem`

/**
 * Common responsive breakpoints in pixels
 * 
 * Use these for media queries to ensure consistent breakpoints across the app.
 * 
 * @typedef {Object} Breakpoints
 * @property {number} mobile - Mobile devices (up to 640px)
 * @property {number} tablet - Tablet devices (641px - 1024px)
 * @property {number} desktop - Desktop devices (1025px+)
 * @property {number} wide - Wide screens (1441px+)
 */
export const BREAKPOINTS = {
  mobile: 640,
  tablet: 1024,
  desktop: 1280,
  wide: 1440
}

/**
 * Media query helpers
 * 
 * Use these in styled-components or CSS-in-JS solutions for consistent
 * responsive behavior.
 * 
 * @example
 * const Container = styled.div`
 *   padding: ${SPACING.sm};
 *   
 *   ${MEDIA_QUERIES.tablet} {
 *     padding: ${SPACING.md};
 *   }
 *   
 *   ${MEDIA_QUERIES.desktop} {
 *     padding: ${SPACING.lg};
 *   }
 * `
 */
export const MEDIA_QUERIES = {
  mobile: `@media (max-width: ${BREAKPOINTS.mobile}px)`,
  tablet: `@media (min-width: ${BREAKPOINTS.mobile + 1}px) and (max-width: ${BREAKPOINTS.tablet}px)`,
  desktop: `@media (min-width: ${BREAKPOINTS.desktop}px)`,
  wide: `@media (min-width: ${BREAKPOINTS.wide}px)`
}

/**
 * Common responsive patterns
 * 
 * Pre-configured style objects for common responsive scenarios.
 */

/**
 * Responsive container with max-width and centering
 * 
 * @param {string} [maxWidth='1200px'] - Maximum width of container
 * @returns {Object} Style object for responsive container
 * 
 * @example
 * <div style={responsiveContainer()}>
 *   Content automatically centered with max-width
 * </div>
 */
export const responsiveContainer = (maxWidth = '1200px') => ({
  width: '100%',
  maxWidth,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: SPACING.md,
  paddingRight: SPACING.md
})

/**
 * Responsive flex container with gap
 * 
 * @param {string} [gap=SPACING.md] - Gap between flex items
 * @param {string} [direction='row'] - Flex direction
 * @returns {Object} Style object for flex container
 * 
 * @example
 * <div style={responsiveFlex(SPACING.lg, 'column')}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </div>
 */
export const responsiveFlex = (gap = SPACING.md, direction = 'row') => ({
  display: 'flex',
  flexDirection: direction,
  gap,
  flexWrap: 'wrap'
})

/**
 * Responsive grid with auto-fit columns
 * 
 * @param {string} [minColumnWidth='250px'] - Minimum width for each column
 * @param {string} [gap=SPACING.md] - Gap between grid items
 * @returns {Object} Style object for responsive grid
 * 
 * @example
 * <div style={responsiveGrid('300px', SPACING.lg)}>
 *   <div>Card 1</div>
 *   <div>Card 2</div>
 *   <div>Card 3</div>
 * </div>
 */
export const responsiveGrid = (minColumnWidth = '250px', gap = SPACING.md) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fit, minmax(${minColumnWidth}, 1fr))`,
  gap
})

/**
 * Aspect ratio box (useful for maintaining aspect ratios)
 * 
 * @param {number} [width=16] - Aspect ratio width
 * @param {number} [height=9] - Aspect ratio height
 * @returns {Object} Style object for aspect ratio container
 * 
 * @example
 * <div style={aspectRatioBox(16, 9)}>
 *   <img src="..." style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
 * </div>
 */
export const aspectRatioBox = (width = 16, height = 9) => ({
  aspectRatio: `${width} / ${height}`,
  width: '100%'
})

/**
 * Truncate text with ellipsis
 * 
 * @param {number} [lines=1] - Number of lines before truncation
 * @returns {Object} Style object for text truncation
 * 
 * @example
 * <p style={truncateText(2)}>
 *   Long text that will be truncated after 2 lines...
 * </p>
 */
export const truncateText = (lines = 1) => {
  if (lines === 1) {
    return {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }
  
  return {
    display: '-webkit-box',
    WebkitLineClamp: lines,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  }
}

/**
 * Glass morphism effect (matches design system)
 * 
 * @param {number} [opacity=0.1] - Background opacity (0-1)
 * @param {number} [blur=10] - Backdrop blur amount in pixels
 * @returns {Object} Style object for glass effect
 * 
 * @example
 * <div style={{ ...glassMorphism(0.15, 20), padding: SPACING.lg }}>
 *   Glass card content
 * </div>
 */
export const glassMorphism = (opacity = 0.1, blur = 10) => ({
  background: `rgba(255, 255, 255, ${opacity})`,
  backdropFilter: `blur(${blur}px)`,
  WebkitBackdropFilter: `blur(${blur}px)`,
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '12px'
})

/**
 * Responsive padding utility
 * 
 * @param {string} size - Size key from SPACING object
 * @returns {string} Responsive padding value using clamp
 * 
 * @example
 * <div style={{ padding: responsivePadding('lg') }}>
 *   Automatically scaled padding
 * </div>
 */
export const responsivePadding = (size) => {
  const sizeMap = {
    xs: 'clamp(0.25rem, 1vw, 0.5rem)',
    sm: 'clamp(0.5rem, 1.5vw, 1rem)',
    md: 'clamp(1rem, 2vw, 1.5rem)',
    lg: 'clamp(1.5rem, 3vw, 2rem)',
    xl: 'clamp(2rem, 4vw, 3rem)',
    '2xl': 'clamp(3rem, 5vw, 4rem)'
  }
  
  return sizeMap[size] || SPACING.md
}
