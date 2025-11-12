import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'
import SlideViewport from './components/SlideViewport'
import ActDropdown from './components/ActDropdown'
import ExportDashboard from './components/ExportDashboard'
import { EditModeProvider, useEditMode } from './contexts/EditModeContext'
import EditModeBar from './components/EditModeBar'
import TitleSlide from './slides/TitleSlide'
import ExecutiveSummarySlide from './slides/ExecutiveSummarySlide'
import AgendaRoadmapSlide from './slides/AgendaRoadmapSlide'
import Act1Slide from './slides/Act1Slide'
import StanfordSlide from './slides/StanfordSlide'
import MarketSwitchingSlide from './slides/MarketSwitchingSlide'
import AlphaGapSlide from './slides/AlphaGapSlide'
import Act2Slide from './slides/Act2Slide'
import ThreeAlphaAgentsSlide from './slides/ThreeAlphaAgentsSlide'
import Act3Slide from './slides/Act3Slide'
import IndiaProblemSlide from './slides/IndiaProblemSlide'
import GIFTSolutionSlide from './slides/GIFTSolutionSlide'
import AlternativeAIDDSlide from './slides/AlternativeAIDDSlide'
import AgentArchitectureSlideNew from './slides/AgentArchitectureSlideNew'
import Act4Slide from './slides/Act4Slide'
import LivePlatformSlide from './slides/LivePlatformSlide'
import TractionDashboardSlide from './slides/TractionDashboardSlide'
import WhyWeWinSlide from './slides/WhyWeWinSlide'
import Act5Slide from './slides/Act5Slide'
import OpportunitySlide from './slides/OpportunitySlide'
import ValueCreationSlide from './slides/ValueCreationSlide'
import GrowthPathSlide from './slides/GrowthPathSlide'
import TeamSlide from './slides/TeamSlide'
import FundingSlide from './slides/FundingSlide'
import AppendixSlide from './slides/AppendixSlide'
// New ARIA transformation slides
import IntroducingARIASlide from './slides/IntroducingARIASlide'
import WedgeExpandSlide from './slides/WedgeExpandSlide'
import B2B2CDistributionSlide from './slides/B2B2CDistributionSlide'
import ARIAFundManagerSlide from './slides/ARIAFundManagerSlide'
import DigitalFamilyOfficeOSSlide from './slides/DigitalFamilyOfficeOSSlide'
import USTechStrategySlide from './slides/USTechStrategySlide'
import GoToMarketSlide from './slides/GoToMarketSlide'
import TechArchitecture1Slide from './slides/TechArchitecture1Slide'
import TechArchitecture2Slide from './slides/TechArchitecture2Slide'
import TechArchitecture3Slide from './slides/TechArchitecture3Slide'
import CompetitiveMatrixSlide from './slides/CompetitiveMatrixSlide'
import FinancialProjections1Slide from './slides/FinancialProjections1Slide'
import FinancialProjections2Slide from './slides/FinancialProjections2Slide'
import FinancialProjections3Slide from './slides/FinancialProjections3Slide'
import RiskMitigation1Slide from './slides/RiskMitigation1Slide'
import RiskMitigation2Slide from './slides/RiskMitigation2Slide'
import ExitStrategySlide from './slides/ExitStrategySlide'
import PartnershipStrategy1Slide from './slides/PartnershipStrategy1Slide'
import PartnershipStrategy2Slide from './slides/PartnershipStrategy2Slide'
import ClosingCommitmentSlide from './slides/ClosingCommitmentSlide'
// Product Appendix Slides - Chapter 1: Zerodha
import ZerodhaConceptSlide from './slides/ZerodhaConceptSlide'
import ZerodhaFeaturesSlide from './slides/ZerodhaFeaturesSlide'
import ZerodhaLiveSnapshotSlide from './slides/ZerodhaLiveSnapshotSlide'
// Product Appendix Slides - Chapter 2: CGMF
import CGMFConceptSlide from './slides/CGMFConceptSlide'
import CGMFFeaturesSlide from './slides/CGMFFeaturesSlide'
import CGMFLiveSnapshotSlide from './slides/CGMFLiveSnapshotSlide'
// Product Appendix Slides - Chapter 3: Agentic AI
import AgenticAIConceptSlide from './slides/AgenticAIConceptSlide'
import AgenticAIFeaturesSlide from './slides/AgenticAIFeaturesSlide'
import AgenticAILiveSnapshotSlide from './slides/AgenticAILiveSnapshotSlide'
// Product Appendix Slides - Chapter 4: Future Modules
import FutureModulesConceptSlide from './slides/FutureModulesConceptSlide'
import FutureModulesFeaturesSlide from './slides/FutureModulesFeaturesSlide'
import FutureModulesLiveSnapshotSlide from './slides/FutureModulesLiveSnapshotSlide'
// Product Appendix Slides - Chapter 5: Trading Agents
import TradingAgentsConceptSlide from './slides/TradingAgentsConceptSlide'
import TradingAgentsFeaturesSlide from './slides/TradingAgentsFeaturesSlide'
import TradingAgentsLiveSnapshotSlide from './slides/TradingAgentsLiveSnapshotSlide'
// Product Appendix Slides - Chapter 6: Algo Trading
import AlgoTradingConceptSlide from './slides/AlgoTradingConceptSlide'
import AlgoTradingFeaturesSlide from './slides/AlgoTradingFeaturesSlide'
import AlgoTradingLiveSnapshotSlide from './slides/AlgoTradingLiveSnapshotSlide'
// Product Appendix Slides - Chapter 7: Sentiment Module
import SentimentModuleConceptSlide from './slides/SentimentModuleConceptSlide'
import SentimentModuleFeaturesSlide from './slides/SentimentModuleFeaturesSlide'
import SentimentModuleLiveSnapshotSlide from './slides/SentimentModuleLiveSnapshotSlide'
// Supporting Enhancement Slides
import LiveMetricsDashboardSlide from './slides/LiveMetricsDashboardSlide'
import ProductOverviewSlide from './slides/ProductOverviewSlide'

const slides = [
  // OPENING
  { component: TitleSlide, title: 'ARIA - The Virtuoso Intelligence' },
  { component: ExecutiveSummarySlide, title: 'Executive Summary' },
  { component: AgendaRoadmapSlide, title: 'Agenda: The 5-Act Journey' },
  
  // ACT 1: THE DISRUPTION
  { component: Act1Slide, title: 'Act 1: The Disruption' },
  { component: StanfordSlide, title: 'AI is the New Alpha' },
  { component: MarketSwitchingSlide, title: 'Market Switching Now' },
  { component: AlphaGapSlide, title: 'The Three Failures' },
  
  // ACT 2: THE ARIA STRATEGY
  { component: Act2Slide, title: 'Act 2: The ARIA Strategy' },
  { component: IntroducingARIASlide, title: 'Introducing ARIA' },
  { component: WedgeExpandSlide, title: 'The Wedge & Expand Strategy' },
  { component: B2B2CDistributionSlide, title: 'Our B2B2C Distribution Moat' },
  { component: ProductOverviewSlide, title: 'ARIA Orchestration Platform' },
  { component: ThreeAlphaAgentsSlide, title: 'Three Core Products' },
  
  // ACT 3: THE UNFAIR ADVANTAGES
  { component: Act3Slide, title: 'Act 3: The Unfair Advantages' },
  { component: IndiaProblemSlide, title: 'India: $5T Market Locked' },
  { component: GIFTSolutionSlide, title: 'The India Gateway Fund' },
  { component: ARIAFundManagerSlide, title: 'ARIA as AI Fund Manager' },
  { component: AlternativeAIDDSlide, title: 'The ARIA Data Engine' },
  { component: USTechStrategySlide, title: 'US Tech Strategy: Read vs Execute' },
  { component: DigitalFamilyOfficeOSSlide, title: 'Digital Family Office OS' },
  { component: AgentArchitectureSlideNew, title: 'Multi-Agent Architecture' },
  
  // ACT 4: VALIDATION
  { component: Act4Slide, title: 'Act 4: Validation' },
  { component: LivePlatformSlide, title: 'Prototype Validated' },
  { component: TractionDashboardSlide, title: 'Validation Metrics' },
  { component: TechArchitecture1Slide, title: 'Tech Architecture: System' },
  { component: TechArchitecture2Slide, title: 'Tech Architecture: Agents' },
  { component: TechArchitecture3Slide, title: 'Tech Architecture: Security' },
  
  // ACT 5: THE BUSINESS
  { component: Act5Slide, title: 'Act 5: The Business' },
  { component: OpportunitySlide, title: 'Market Opportunity' },
  { component: GoToMarketSlide, title: 'Go-to-Market Strategy' },
  { component: CompetitiveMatrixSlide, title: 'Competitive Analysis' },
  { component: WhyWeWinSlide, title: 'Why We Win' },
  { component: FinancialProjections1Slide, title: 'Financial Projections' },
  { component: FinancialProjections2Slide, title: 'Unit Economics' },
  { component: FinancialProjections3Slide, title: 'Use of Funds' },
  { component: GrowthPathSlide, title: 'Path to $1B AUM' },
  { component: PartnershipStrategy1Slide, title: 'Partnership Ecosystem' },
  { component: PartnershipStrategy2Slide, title: 'Vora Partnership Details' },
  { component: TeamSlide, title: 'Team' },
  { component: FundingSlide, title: '$5M Seed Round' },
  
  // CLOSING
  { component: ClosingCommitmentSlide, title: 'Join Us' },
  
  // Product Appendix - Chapter 1: Zerodha
  { component: ZerodhaConceptSlide, title: 'Chapter 1: Zerodha Trading Intelligence' },
  { component: ZerodhaFeaturesSlide, title: 'Zerodha Features & Capabilities' },
  { component: ZerodhaLiveSnapshotSlide, title: 'Zerodha Live Platform Snapshot' },
  
  // Product Appendix - Chapter 2: CGMF
  { component: CGMFConceptSlide, title: 'Chapter 2: CGMF Mutual Fund Advisory' },
  { component: CGMFFeaturesSlide, title: 'CGMF Features & Capabilities' },
  { component: CGMFLiveSnapshotSlide, title: 'CGMF Live Platform Snapshot' },
  
  // Product Appendix - Chapter 3: Agentic AI
  { component: AgenticAIConceptSlide, title: 'Chapter 3: Agentic AI System' },
  { component: AgenticAIFeaturesSlide, title: 'Agentic AI Features' },
  { component: AgenticAILiveSnapshotSlide, title: 'Agentic AI Live Snapshot' },
  
  // Product Appendix - Chapter 4: Future Modules
  { component: FutureModulesConceptSlide, title: 'Chapter 4: Future Modules' },
  { component: FutureModulesFeaturesSlide, title: 'Future Modules Features' },
  { component: FutureModulesLiveSnapshotSlide, title: 'Future Modules Development Pipeline' },
  
  // Product Appendix - Chapter 5: Trading Agents
  { component: TradingAgentsConceptSlide, title: 'Chapter 5: Trading Agents + Hedge Fund' },
  { component: TradingAgentsFeaturesSlide, title: 'Trading Agents Features' },
  { component: TradingAgentsLiveSnapshotSlide, title: 'Trading Agents Live Analysis' },
  
  // Product Appendix - Chapter 6: Algo Trading
  { component: AlgoTradingConceptSlide, title: 'Chapter 6: Algo Trading Laboratory' },
  { component: AlgoTradingFeaturesSlide, title: 'Algo Trading Features' },
  { component: AlgoTradingLiveSnapshotSlide, title: 'Algo Trading Live Snapshot' },
  
  // Product Appendix - Chapter 7: Sentiment Module
  { component: SentimentModuleConceptSlide, title: 'Chapter 7: Sentiment Intelligence Module' },
  { component: SentimentModuleFeaturesSlide, title: 'Sentiment Module Features' },
  { component: SentimentModuleLiveSnapshotSlide, title: 'Sentiment Module Live Snapshot' },
  
  // Supporting Enhancement Slides
  { component: LiveMetricsDashboardSlide, title: 'Live Platform Metrics' },
  
  { component: AppendixSlide, title: 'Appendix' }
]

function AppContent() {
  // Helper function to get current slide from hash (moved up to use in initial state)
  const getCurrentSlideFromHash = () => {
    const hash = window.location.hash
    const match = hash.match(/^#\/slide\/(\d+)$/)
    const slideIndex = match ? parseInt(match[1], 10) : 0
    // Validate slide index is within range
    return slideIndex >= 0 && slideIndex < slides.length ? slideIndex : 0
  }
  
  // Initialize currentSlide from hash to respect direct navigation
  const [currentSlide, setCurrentSlide] = useState(getCurrentSlideFromHash())
  const [isMobile, setIsMobile] = useState(false)
  const [showThumbnails, setShowThumbnails] = useState(false)
  const [preloadedSlides, setPreloadedSlides] = useState(new Set([getCurrentSlideFromHash()]))
  const [showExportDashboard, setShowExportDashboard] = useState(false)
  
  // Use EditModeContext
  const { isEditMode, setIsEditMode } = useEditMode()

  // Debug logging for Edit Mode state
  useEffect(() => {
    console.log('Edit Mode State:', isEditMode)
  }, [isEditMode])

  // Debug logging for Export Dashboard state
  useEffect(() => {
    console.log('Export Dashboard State:', showExportDashboard)
  }, [showExportDashboard])

  // Named button handlers for better debugging
  const handleEditModeClick = () => {
    console.log('Edit Mode button clicked! Current state:', isEditMode)
    setIsEditMode(!isEditMode)
    console.log('Setting Edit Mode to:', !isEditMode)
  }

  const handleExportPDFClick = () => {
    console.log('Export PDF button clicked!')
    window.print()
  }

  const handleExportOptionsClick = () => {
    console.log('Export Options button clicked! Current state:', showExportDashboard)
    setShowExportDashboard(true)
    console.log('Setting Export Dashboard to: true')
  }

  // Check if static mode is enabled (for crisp screenshots)
  const isStaticMode = new URLSearchParams(window.location.search).get('static') === '1'

  // Helper function to navigate to a slide by updating hash
  const navigateToSlide = (slideIndex) => {
    const validIndex = Math.max(0, Math.min(slideIndex, slides.length - 1))
    window.location.hash = `/slide/${validIndex}`
  }

  // Hash-based navigation: sync URL hash with slide state
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      console.log('Current hash:', hash) // Debug log
      
      // Handle both #/slide/N and #slide/N formats
      const match = hash.match(/#\/?slide\/(\d+)/)
      
      if (match) {
        const slideNum = parseInt(match[1], 10)
        // Validate slide number is within range
        if (slideNum >= 0 && slideNum < slides.length) {
          console.log('Setting slide to:', slideNum) // Debug log
          setCurrentSlide(slideNum)
          return
        }
      }
      
      // If no hash or invalid hash, only set default if we're on the root
      if (!hash || hash === '#' || hash === '#/') {
        console.log('No hash, setting to slide 0') // Debug log
        setCurrentSlide(0)
        window.location.hash = '/slide/0'
      }
      // Otherwise keep current slide
    }
    
    // Handle initial load
    handleHashChange()
    
    // Listen for hash changes (browser back/forward)
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Preload adjacent slides for smoother transitions
  useEffect(() => {
    const slidesToPreload = new Set([currentSlide])
    if (currentSlide > 0) slidesToPreload.add(currentSlide - 1)
    if (currentSlide < slides.length - 1) slidesToPreload.add(currentSlide + 1)
    setPreloadedSlides(slidesToPreload)
  }, [currentSlide])

  // Get current section/act based on slide number
  const getSlideSection = (slideIndex) => {
    if (slideIndex <= 2) return 'Opening'
    if (slideIndex >= 3 && slideIndex <= 6) return 'Act 1: Problem'
    if (slideIndex >= 7 && slideIndex <= 10) return 'Act 2: Solution'
    if (slideIndex >= 11 && slideIndex <= 17) return 'Act 3: Deep Dive'
    if (slideIndex >= 18 && slideIndex <= 24) return 'Act 4: Proof'
    if (slideIndex >= 25 && slideIndex <= 52) return 'Act 5: Business'
    if (slideIndex >= 53 && slideIndex <= 62) return 'Act 6: GIFT City'
    if (slideIndex >= 63 && slideIndex <= 84) return 'Product Appendix'
    if (slideIndex >= 85) return 'Final Appendix'
    return ''
  }

  // Get act progress percentage
  const getActProgress = (slideIndex) => {
    if (slideIndex <= 6) return 20   // End of Act 1
    if (slideIndex <= 10) return 40  // End of Act 2
    if (slideIndex <= 17) return 60  // End of Act 3
    if (slideIndex <= 24) return 80  // End of Act 4
    if (slideIndex <= 62) return 90  // End of Act 6 (GIFT City)
    if (slideIndex <= 84) return 95  // End of Product Appendix
    return 100                       // Final Appendix
  }

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        navigateToSlide(getCurrentSlideFromHash() + 1)
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        navigateToSlide(getCurrentSlideFromHash() - 1)
      } else if (e.key === 'Home') {
        navigateToSlide(0)
      } else if (e.key === 'End') {
        navigateToSlide(slides.length - 1)
      } else if (e.key === 't' || e.key === 'T') {
        setShowThumbnails(prev => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  const slideTransitions = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.4 }
    },
    slide: {
      initial: { opacity: 0, x: 100 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -100 },
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    },
    zoom: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 1.05 },
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    }
  }

  // Use static transition (no animation) if static mode is enabled
  const currentTransition = isStaticMode 
    ? { initial: {}, animate: {}, exit: {}, transition: { duration: 0 } }
    : slideTransitions.zoom

  // Get the current slide component dynamically
  const CurrentSlideComponent = slides[currentSlide]?.component || slides[0].component
  
  // Props to pass to slides that need navigation
  const slideProps = {
    onNavigate: navigateToSlide
  }

  return (
      <div className="presentation">
      {/* Print view: All slides rendered */}
      <div className="print-only-slides">
        {slides.map((slide, index) => {
          const SlideComponent = slide.component
          return (
            <div key={index} className="slide print-slide">
              <SlideComponent {...slideProps} />
            </div>
          )
        })}
      </div>

      {/* Screen view: Current slide only */}
      <div className="screen-only-slides">
        <SlideViewport>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              {...currentTransition}
              className="slide"
            >
              <CurrentSlideComponent {...slideProps} />
            </motion.div>
          </AnimatePresence>
        </SlideViewport>
      </div>

      {/* Progress Bar */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'rgba(255, 255, 255, 0.1)',
        zIndex: 10000,
        pointerEvents: 'none'
      }}>
        <motion.div
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, #14b8a6, #3b82f6, #a855f7)',
            transformOrigin: 'left'
          }}
          animate={{ scaleX: (currentSlide + 1) / slides.length }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Progress Label and Act Navigation - Left side */}
        <div style={{
          position: 'absolute',
          top: '8px',
          left: '20px',
          display: 'flex',
          gap: '12px',
          alignItems: 'center',
          pointerEvents: 'auto',
          zIndex: 10001
        }}>
          <div style={{
            fontSize: '0.8rem',
            color: '#94a3b8',
            background: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(8px)',
            padding: '4px 12px',
            borderRadius: '6px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            {getSlideSection(currentSlide)} • {getActProgress(currentSlide)}% Complete
          </div>

          <ActDropdown 
            currentSlide={currentSlide}
            onNavigate={navigateToSlide}
          />
        </div>

        {/* Navigation Controls - Right side (translucent) */}
        <div style={{
          position: 'absolute',
          top: '8px',
          right: '20px',
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
          background: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(12px)',
          padding: '6px 10px',
          borderRadius: '8px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          pointerEvents: 'auto',
          zIndex: 10001
        }}>
          <button 
            onClick={() => navigateToSlide(currentSlide - 1)}
            disabled={currentSlide === 0}
            style={{
              background: 'transparent',
              border: 'none',
              color: currentSlide === 0 ? '#4b5563' : '#14b8a6',
              cursor: currentSlide === 0 ? 'not-allowed' : 'pointer',
              fontSize: '1.2rem',
              padding: '4px 8px',
              transition: 'all 0.2s'
            }}
          >
            ←
          </button>
          
          <div style={{ 
            fontSize: '0.75rem', 
            color: '#94a3b8',
            minWidth: '50px',
            textAlign: 'center'
          }}>
            {currentSlide + 1} / {slides.length}
          </div>
          
          <button 
            onClick={() => navigateToSlide(currentSlide + 1)}
            disabled={currentSlide === slides.length - 1}
            style={{
              background: 'transparent',
              border: 'none',
              color: currentSlide === slides.length - 1 ? '#4b5563' : '#14b8a6',
              cursor: currentSlide === slides.length - 1 ? 'not-allowed' : 'pointer',
              fontSize: '1.2rem',
              padding: '4px 8px',
              transition: 'all 0.2s'
            }}
          >
            →
          </button>
          
          <div style={{ 
            width: '1px', 
            height: '20px', 
            background: 'rgba(255, 255, 255, 0.2)',
            margin: '0 4px'
          }}></div>
          
          <button
            onClick={handleEditModeClick}
            style={{
              position: 'relative',
              background: isEditMode ? 'rgba(34, 197, 94, 0.2)' : 'rgba(59, 130, 246, 0.15)',
              border: `1px solid ${isEditMode ? 'rgba(34, 197, 94, 0.4)' : 'rgba(59, 130, 246, 0.3)'}`,
              color: isEditMode ? '#86efac' : '#93c5fd',
              cursor: 'pointer',
              fontSize: '0.7rem',
              padding: '4px 10px',
              borderRadius: '4px',
              fontWeight: '500',
              transition: 'all 0.2s',
              whiteSpace: 'nowrap',
              zIndex: 10002,
              pointerEvents: 'auto'
            }}
          >
            ✏️ {isEditMode ? 'Exit Edit' : 'Edit Mode'}
          </button>
          
          <button
            onClick={handleExportPDFClick}
            style={{
              position: 'relative',
              background: 'rgba(20, 184, 166, 0.15)',
              border: '1px solid rgba(20, 184, 166, 0.3)',
              color: '#5eead4',
              cursor: 'pointer',
              fontSize: '0.7rem',
              padding: '4px 10px',
              borderRadius: '4px',
              fontWeight: '500',
              transition: 'all 0.2s',
              whiteSpace: 'nowrap',
              zIndex: 10002,
              pointerEvents: 'auto'
            }}
          >
            📄 Export PDF
          </button>
          
          <button
            onClick={handleExportOptionsClick}
            style={{
              position: 'relative',
              background: 'rgba(168, 85, 247, 0.15)',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              color: '#c4b5fd',
              cursor: 'pointer',
              fontSize: '0.7rem',
              padding: '4px 10px',
              borderRadius: '4px',
              fontWeight: '500',
              transition: 'all 0.2s',
              whiteSpace: 'nowrap',
              zIndex: 10002,
              pointerEvents: 'auto'
            }}
          >
            ⚡ Export Options
          </button>
        </div>
      </div>

      {/* Thumbnail Preview (Press T to toggle) */}
      {showThumbnails && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          style={{
            position: 'fixed',
            top: '50px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(0, 0, 0, 0.95)',
            borderRadius: '12px',
            padding: '20px',
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 150px)',
            gap: '10px',
            maxHeight: '70vh',
            overflowY: 'auto',
            zIndex: 999,
            backdropFilter: 'blur(20px)'
          }}
        >
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                navigateToSlide(index)
                setShowThumbnails(false)
              }}
              style={{
                cursor: 'pointer',
                borderRadius: '8px',
                border: index === currentSlide ? '2px solid #14b8a6' : '1px solid rgba(255, 255, 255, 0.1)',
                padding: '8px',
                background: index === currentSlide ? 'rgba(20, 184, 166, 0.1)' : 'rgba(255, 255, 255, 0.02)'
              }}
            >
              <div style={{ fontSize: '0.7rem', color: '#94a3b8', marginBottom: '4px' }}>
                Slide {index + 1}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#fff', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {slide.title}
              </div>
              <div style={{ fontSize: '0.6rem', color: '#64748b', marginTop: '4px' }}>
                {getSlideSection(index)}
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
      
      {/* Export Dashboard Modal */}
      <ExportDashboard
        isOpen={showExportDashboard}
        onClose={() => setShowExportDashboard(false)}
        slides={slides}
        currentSlide={currentSlide}
        navigateToSlide={navigateToSlide}
      />
      
      {/* Edit Mode Bar - Show when Edit Mode is active */}
      {isEditMode && <EditModeBar />}
    </div>
  )
}

// Main App component that provides EditModeContext
function App() {
  return (
    <EditModeProvider>
      <AppContent />
    </EditModeProvider>
  )
}

export default App
