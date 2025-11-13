# QA Test Checklist - ARIA Deck

## 🧪 Automated Test Results

### Unit Tests
```bash
npm test src/__tests__/slides.test.jsx
npm test src/__tests__/ui-audit.test.jsx
```

### Browser Audit
```javascript
// Run in browser console on each slide:
import('./src/utils/slideAudit.js').then(m => m.runSlideAudit())
```

## ✅ Manual Test Checklist

### 1. ARIAPlatformExperienceSlide (`/slide/10`)

#### Visual Tests
- [ ] Title "The ARIA CEO Experience" is visible and gradient works
- [ ] Subtitle references "24/7 dashboards, not quarterly PDFs"
- [ ] OperationalBadge shows "100% OPERATIONAL - Live Today"
- [ ] ARIAIconBadge animates correctly
- [ ] Mobile/Desktop switcher works smoothly
- [ ] Mobile view shows phone mockup without overflow
- [ ] Desktop view shows dashboard mockup without overflow
- [ ] Features list (left side) is scrollable if needed
- [ ] Selected feature highlights correctly
- [ ] Bottom metrics bar shows all 5 stats clearly
- [ ] Stanford badge displays "600%" properly
- [ ] No text cutoff at any viewport size

#### Interaction Tests
- [ ] Click "Mobile" button - view switches
- [ ] Click "Desktop" button - view switches
- [ ] Click each feature card - highlights and shows demo text
- [ ] Hover effects work on all interactive elements
- [ ] All animations are smooth (no jank)

#### Responsive Tests (resize window)
- [ ] 1920x1080 - Full HD
- [ ] 1440x900 - Standard desktop
- [ ] 1366x768 - Laptop
- [ ] 1024x768 - Tablet

### 2. ARIAClientJourneySlide (`/slide/11`)

#### Visual Tests
- [ ] Title "The 46% Who Switched to ARIA" is visible
- [ ] Subtitle about "solving three failures" shows
- [ ] Stats summary (Avg Returns, Tax Saved, Risk) display correctly
- [ ] 3 client cards show in left panel
- [ ] Selected client highlights with teal border
- [ ] Client details show without overflow
- [ ] Progress bars animate correctly
- [ ] Results grid (4 metrics) displays properly
- [ ] Key highlight box is readable
- [ ] ARIA Avatar shows in right panel
- [ ] Testimonial text is fully visible
- [ ] Trust indicators grid shows 4 items
- [ ] Bottom CTA bar displays properly

#### Interaction Tests
- [ ] Click "Rajesh Mehta" - details update
- [ ] Click "Priya Sharma" - details update  
- [ ] Click "Amit Agarwal" - details update
- [ ] Progress bars animate on selection change
- [ ] Hover effects on metric cards
- [ ] CTA buttons have hover states

### 3. ARIATechMFSlide (`/slide/12`)

#### Visual Tests
- [ ] Title "Why Tech Alone Isn't Enough" displays
- [ ] Subtitle mentions "solving all three failures"
- [ ] "Next-Gen Platform" badge shows with Award icon
- [ ] Left column "Traditional Tech-MF" displays 6 limitations
- [ ] Right column "ARIA AI-Orchestrated" shows 6 capabilities
- [ ] Each capability has icon, text, and metric badge
- [ ] LIVE NOW badge pulses
- [ ] Bottom stats bar shows 4 tech advantages
- [ ] Stanford badge appears next to CTA
- [ ] "Experience ARIA" button is visible

#### Interaction Tests
- [ ] Hover over traditional platform items
- [ ] Hover over ARIA platform items - highlight effect
- [ ] Selected card shows different background
- [ ] Bottom metric cards have hover lift effect
- [ ] CTA button hover animation works

### 4. ARIAInvestmentAdvisorySlide (`/slide/13`)

#### Visual Tests
- [ ] Title "Your AI CEO at Work" is clear
- [ ] Subtitle about "product access gap" shows
- [ ] ARIA Avatar with "68+ specialists" displays
- [ ] 4 tab buttons show (Personalization, Intelligence, Protection, Execution)
- [ ] Active tab has teal background
- [ ] Tab content area shows icon and description
- [ ] 4 feature cards display in 2x2 grid
- [ ] Each card shows value, title, and detail
- [ ] Comparison table "vs Traditional Robo-Advisors" is readable
- [ ] 6 comparison rows show clearly
- [ ] "Ready for AI-Powered Advisory?" CTA box displays
- [ ] Bottom metrics bar with 5 stats is visible

#### Interaction Tests
- [ ] Click each tab - content updates
- [ ] Tab highlighting changes correctly
- [ ] Feature cards have hover effect
- [ ] Comparison table rows alternate background
- [ ] CTA button animates on hover
- [ ] Metrics animate on load

### 5. ARIAGoalBasedInvestingSlide (`/slide/14`)

#### Visual Tests
- [ ] Title "Personalization at Scale" shows
- [ ] Subtitle mentions "the 93% can't do"
- [ ] "15+ Life Goals" badge displays
- [ ] 4 goal cards in left panel (Dream Home, Education, Retirement, Travel)
- [ ] Selected goal has teal border
- [ ] Progress bars show for each goal
- [ ] Goal details panel shows icon and metrics
- [ ] Large progress bar animates
- [ ] Current vs Target amounts display
- [ ] Timeline and Monthly SIP cards show
- [ ] Asset allocation visualization works
- [ ] AI optimization metrics display
- [ ] All percentages and amounts are readable

#### Interaction Tests
- [ ] Click each goal - details update smoothly
- [ ] Progress bars animate on selection
- [ ] Asset allocation bars show correct proportions
- [ ] Hover effects on goal cards
- [ ] Smooth transitions between goals

### 6. ARIAAIFSlide (`/slide/15`)

#### Visual Tests
- [ ] Title "Solving the Alternative Access Gap" displays
- [ ] Subtitle mentions "+300-500bps alpha"
- [ ] Total AUM (₹850 Cr) and Investors (665) show
- [ ] 3 AIF tier cards display (Elite, Prime, Sovereign)
- [ ] "MOST POPULAR" badge on Prime tier
- [ ] Each tier shows min investment, returns, fees
- [ ] Features list readable in each tier
- [ ] Strategy list shows 3 strategies
- [ ] Selected strategy highlights
- [ ] Performance metrics display
- [ ] ARIA Advantage box shows avatar
- [ ] Compliance checklist is visible
- [ ] Bottom CTA with "Schedule Meeting" button

#### Interaction Tests
- [ ] Hover over tier cards - lift effect
- [ ] Click strategies - selection changes
- [ ] Asset allocation bars appear for selected strategy
- [ ] CTA buttons have hover states
- [ ] Badge animations work

## 🐛 Known Issues to Check

### Text Overflow
- [ ] Long client names don't overflow cards
- [ ] Testimonials wrap properly
- [ ] Feature descriptions stay within bounds
- [ ] Metric labels don't overlap

### Color Contrast
- [ ] Text on dark backgrounds is readable
- [ ] Gradient text is visible
- [ ] Small text has sufficient contrast
- [ ] Disabled states are distinguishable

### Animation Performance
- [ ] No stuttering during transitions
- [ ] Mobile/Desktop switch is smooth
- [ ] Progress bars animate without jank
- [ ] Hover effects are responsive

### Badge Positioning
- [ ] Stanford badge doesn't overlap content
- [ ] Operational badge stays in viewport
- [ ] Badges scale properly on smaller screens

## 📱 Responsive Breakpoints

Test at these specific widths:
- [ ] 1920px - Full HD
- [ ] 1440px - Desktop
- [ ] 1366px - Common laptop
- [ ] 1280px - Small laptop
- [ ] 1024px - Tablet landscape

## 🎨 Visual Consistency

### Colors
- [ ] Teal (#14b8a6) used consistently
- [ ] Gradient directions match
- [ ] Dark backgrounds uniform
- [ ] Text colors follow hierarchy

### Typography
- [ ] Headers use clamp() for scaling
- [ ] Body text readable at all sizes
- [ ] Line heights provide breathing room
- [ ] Font weights create hierarchy

### Spacing
- [ ] Consistent padding around edges
- [ ] Uniform gaps between elements
- [ ] Proper margins between sections
- [ ] No cramped text blocks

## 🔍 Browser Testing

Test in:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (if on Mac)
- [ ] Edge (latest)

## 📊 Performance Metrics

Target metrics:
- [ ] First paint < 1s
- [ ] Interactive < 2s
- [ ] No layout shifts
- [ ] Smooth 60fps animations

## ✍️ Content Validation

### Narrative Consistency
- [ ] Stanford 600% mentioned appropriately
- [ ] 46% switching stat used correctly
- [ ] Three failures referenced consistently
- [ ] ARIA as CEO, not assistant
- [ ] 100% operational messaging clear

### Data Accuracy
- [ ] All numbers formatted correctly (₹, %, etc.)
- [ ] Metrics align with pitch narrative
- [ ] No contradicting statistics
- [ ] Client data realistic

## 🚀 Final Checks

- [ ] All slides load without errors
- [ ] Navigation between slides works
- [ ] No console errors in browser
- [ ] Build completes successfully
- [ ] All tests pass

---

## Sign-off

- **QA Tester:** ________________
- **Date:** ________________
- **Build Version:** ________________
- **Browser:** ________________
- **Status:** [ ] PASS [ ] FAIL

### Notes:
_____________________________________
_____________________________________
_____________________________________
