// Slide Audit Tool - Navigate and analyze slides for layout issues

// List of key slides to audit (sampling from all 94)
const auditSlides = [
  // Opening
  { index: 0, name: "TitleSlide", category: "title" },
  { index: 1, name: "ExecutiveSummary", category: "content" },
  { index: 2, name: "AgendaRoadmap", category: "list" },
  
  // Act 1
  { index: 3, name: "Act1Slide", category: "act" },
  { index: 4, name: "StanfordSlide", category: "data" },
  { index: 5, name: "MarketSwitching", category: "data" },
  { index: 6, name: "AlphaGap", category: "comparison" },
  
  // Act 2
  { index: 8, name: "Act2Slide", category: "act" },
  { index: 10, name: "AICommitteeSlide", category: "comparison" },
  { index: 11, name: "ThreeAlphaAgents", category: "grid" },
  
  // Act 3
  { index: 13, name: "Act3Slide", category: "act" },
  { index: 15, name: "IndiaProblem", category: "data" },
  { index: 18, name: "TaxAlphaDaily", category: "comparison" },
  { index: 20, name: "AgentArchitecture", category: "technical" },
  
  // Act 4
  { index: 28, name: "Act4Slide", category: "act" },
  { index: 30, name: "LivePlatform", category: "demo" },
  { index: 31, name: "TractionDashboard", category: "data" },
  
  // Act 5
  { index: 37, name: "Act5Slide", category: "act" },
  { index: 42, name: "TeamSlide", category: "grid" },
  { index: 46, name: "FinancialProjections", category: "data" },
  
  // Transitions
  { index: 7, name: "Act1to2Transition", category: "transition" },
  { index: 27, name: "Act3to4Transition", category: "transition" },
  
  // Product Modules
  { index: 76, name: "ZerodhaFeatures", category: "features" },
  { index: 82, name: "CGMFFeatures", category: "features" },
  { index: 85, name: "AgenticAIFeatures", category: "features" },
  { index: 88, name: "FutureModulesFeatures", category: "features" }
];

// Function to analyze slide layout
function analyzeSlideLayout(slideElement) {
  const slideContent = slideElement.querySelector('.slide-content, .slide');
  if (!slideContent) return null;
  
  const rect = slideContent.getBoundingClientRect();
  const computedStyle = window.getComputedStyle(slideContent);
  
  // Find main content container
  const contentContainers = slideContent.querySelectorAll('div[style*="max-width"], .glass-card, [class*="container"]');
  let mainContentWidth = rect.width;
  
  if (contentContainers.length > 0) {
    const mainContainer = contentContainers[0];
    const containerRect = mainContainer.getBoundingClientRect();
    mainContentWidth = containerRect.width;
  }
  
  // Calculate content utilization
  const viewportWidth = window.innerWidth;
  const contentUtilization = (mainContentWidth / viewportWidth) * 100;
  
  // Check for overflow
  const hasHorizontalOverflow = slideContent.scrollWidth > slideContent.clientWidth;
  const hasVerticalOverflow = slideContent.scrollHeight > slideContent.clientHeight;
  
  // Check for narrow column layout
  const isNarrowLayout = contentUtilization < 60;
  
  // Check text sizes
  const textElements = slideContent.querySelectorAll('h1, h2, h3, p, span');
  const fontSizes = Array.from(textElements).map(el => {
    const style = window.getComputedStyle(el);
    return parseFloat(style.fontSize);
  });
  
  return {
    width: rect.width,
    height: rect.height,
    contentWidth: mainContentWidth,
    contentUtilization: contentUtilization.toFixed(1),
    hasHorizontalOverflow,
    hasVerticalOverflow,
    isNarrowLayout,
    padding: computedStyle.padding,
    minFontSize: Math.min(...fontSizes),
    maxFontSize: Math.max(...fontSizes),
    aspectRatio: (rect.width / rect.height).toFixed(2)
  };
}

// Export for use
window.slideAudit = {
  slides: auditSlides,
  analyze: analyzeSlideLayout
};