import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'
import TitleSlide from './slides/TitleSlide'
import ExecutiveSummarySlide from './slides/ExecutiveSummarySlide'
import AgendaRoadmapSlide from './slides/AgendaRoadmapSlide'
import Act1Slide from './slides/Act1Slide'
import StanfordSlide from './slides/StanfordSlide'
import MarketSwitchingSlide from './slides/MarketSwitchingSlide'
import AlphaGapSlide from './slides/AlphaGapSlide'
import Act2Slide from './slides/Act2Slide'
import IntroducingSlide from './slides/IntroducingSlide'
import AICommitteeSlide from './slides/AICommitteeSlide'
import ThreeAlphaAgentsSlide from './slides/ThreeAlphaAgentsSlide'
import Act3Slide from './slides/Act3Slide'
import IndiaProblemSlide from './slides/IndiaProblemSlide'
import GIFTSolutionSlide from './slides/GIFTSolutionSlide'
import AIGatewaySlide from './slides/AIGatewaySlide'
import TaxAlphaDailySlide from './slides/TaxAlphaDailySlide'
import AlternativeAIDDSlide from './slides/AlternativeAIDDSlide'
import AgentArchitectureSlide from './slides/AgentArchitectureSlide'
import Act4Slide from './slides/Act4Slide'
import RealJourneysSlide from './slides/RealJourneysSlide'
import LivePlatformSlide from './slides/LivePlatformSlide'
import TractionDashboardSlide from './slides/TractionDashboardSlide'
import WhyWeWinSlide from './slides/WhyWeWinSlide'
import WhyIncumbentsCantRespondSlide from './slides/WhyIncumbentsCantRespondSlide'
import UnfairAdvantagesSlide from './slides/UnfairAdvantagesSlide'
import Act5Slide from './slides/Act5Slide'
import OpportunitySlide from './slides/OpportunitySlide'
import ValueCreationSlide from './slides/ValueCreationSlide'
import GrowthPathSlide from './slides/GrowthPathSlide'
import TeamSlide from './slides/TeamSlide'
import FundingSlide from './slides/FundingSlide'
import AppendixSlide from './slides/AppendixSlide'

const slides = [
  { component: TitleSlide, title: 'Title' },
  { component: ExecutiveSummarySlide, title: 'Executive Summary' },
  { component: AgendaRoadmapSlide, title: 'Agenda & Roadmap' },
  { component: Act1Slide, title: 'Act 1: The Problem' },
  { component: StanfordSlide, title: 'AI is the New Alpha' },
  { component: MarketSwitchingSlide, title: 'Market Switching Now' },
  { component: AlphaGapSlide, title: 'The Three Failures' },
  { component: Act2Slide, title: 'Act 2: The Solution' },
  { component: IntroducingSlide, title: 'Introducing AI Family Office' },
  { component: AICommitteeSlide, title: 'AI Investment Committee' },
  { component: ThreeAlphaAgentsSlide, title: 'Three Alpha Agents' },
  { component: Act3Slide, title: 'Act 3: The Deep Dive' },
  { component: IndiaProblemSlide, title: 'India: $5T Market Locked' },
  { component: GIFTSolutionSlide, title: 'GIFT City AI Gateway' },
  { component: AIGatewaySlide, title: 'AI Makes It Simple' },
  { component: TaxAlphaDailySlide, title: 'Tax Alpha: Daily vs Annual' },
  { component: AlternativeAIDDSlide, title: 'Alternative Asset AI DD' },
  { component: AgentArchitectureSlide, title: 'Swarm of 20+ Agents' },
  { component: Act4Slide, title: 'Act 4: The Proof' },
  { component: RealJourneysSlide, title: 'Real Journeys, Real Alpha' },
  { component: LivePlatformSlide, title: 'Live Platform - 100% Operational' },
  { component: TractionDashboardSlide, title: 'Traction Dashboard' },
  { component: WhyWeWinSlide, title: 'Why We Win' },
  { component: WhyIncumbentsCantRespondSlide, title: 'Why Incumbents Can\'t Respond' },
  { component: UnfairAdvantagesSlide, title: 'Triple Lock Advantages' },
  { component: Act5Slide, title: 'Act 5: The Business' },
  { component: OpportunitySlide, title: 'Market Opportunity' },
  { component: ValueCreationSlide, title: '10x Value Creation' },
  { component: GrowthPathSlide, title: 'Path to $1B AUM' },
  { component: TeamSlide, title: 'Team' },
  { component: FundingSlide, title: '$5M Seed Round' },
  { component: AppendixSlide, title: 'Appendix' }
]

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1))
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        setCurrentSlide(prev => Math.max(prev - 1, 0))
      } else if (e.key === 'Home') {
        setCurrentSlide(0)
      } else if (e.key === 'End') {
        setCurrentSlide(slides.length - 1)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  const CurrentSlideComponent = slides[currentSlide].component

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

  const currentTransition = slideTransitions.zoom

  return (
    <div className="presentation">
      {/* Print view: All slides rendered */}
      <div className="print-only-slides">
        {slides.map((slide, index) => {
          const SlideComponent = slide.component
          return (
            <div key={index} className="slide print-slide">
              <SlideComponent />
            </div>
          )
        })}
      </div>

      {/* Screen view: Current slide only */}
      <div className="screen-only-slides">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            {...currentTransition}
            className="slide"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="navigation">
        <button 
          onClick={() => setCurrentSlide(prev => Math.max(prev - 1, 0))}
          disabled={currentSlide === 0}
        >
          ←
        </button>
        <span className="slide-counter">
          {currentSlide + 1} / {slides.length}
        </span>
        <button 
          onClick={() => setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1))}
          disabled={currentSlide === slides.length - 1}
        >
          →
        </button>
        <button 
          className="export-button"
          onClick={() => window.print()}
          title="Export to PDF (Ctrl/Cmd + P)"
        >
          📄 Export PDF
        </button>
      </div>

      <div className="instructions">
        Use ← → arrow keys or click to navigate • Press Ctrl/Cmd + P to export PDF
        <br />
        <span style={{ fontSize: '0.9em', opacity: 0.7 }}>
          💾 Recommended filename: AI-Digital-Family-Office-Deck_2025-11-05.pdf
        </span>
      </div>
    </div>
  )
}

export default App
