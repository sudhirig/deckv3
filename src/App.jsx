import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'
import TitleSlide from './slides/TitleSlide'
import Act1Slide from './slides/Act1Slide'
import StanfordSlide from './slides/StanfordSlide'
import MarketSwitchingSlide from './slides/MarketSwitchingSlide'
import AlphaGapSlide from './slides/AlphaGapSlide'
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

const slides = [
  { component: TitleSlide, title: 'Title' },
  { component: Act1Slide, title: 'Act 1: The Problem' },
  { component: StanfordSlide, title: 'AI is the New Alpha' },
  { component: MarketSwitchingSlide, title: 'Market Switching' },
  { component: AlphaGapSlide, title: 'The Three Failures' },
  { component: AICommitteeSlide, title: 'AI Investment Committee' },
  { component: ThreeAlphaAgentsSlide, title: 'Three Alpha Agents' },
  { component: Act3Slide, title: 'Act 3: The Deep Dive' },
  { component: IndiaProblemSlide, title: 'India Problem' },
  { component: GIFTSolutionSlide, title: 'GIFT City Solution' },
  { component: AIGatewaySlide, title: 'AI Gateway Agent' },
  { component: TaxAlphaDailySlide, title: 'Tax Alpha Daily vs Annual' },
  { component: AlternativeAIDDSlide, title: 'Alternative Asset AI DD' },
  { component: AgentArchitectureSlide, title: 'Agent Architecture' },
  { component: Act4Slide, title: 'Act 4: The Proof' },
  { component: RealJourneysSlide, title: 'Real Journeys' },
  { component: LivePlatformSlide, title: 'Live Platform' }
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

  return (
    <div className="presentation">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className="slide"
        >
          <CurrentSlideComponent />
        </motion.div>
      </AnimatePresence>

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
      </div>

      <div className="instructions">
        Use ← → arrow keys or click to navigate • Press Ctrl/Cmd + P to export PDF
      </div>
    </div>
  )
}

export default App
