import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'
import TitleSlide from './slides/TitleSlide'
import ProblemSlide from './slides/ProblemSlide'
import StanfordSlide from './slides/StanfordSlide'
import AlphaGapSlide from './slides/AlphaGapSlide'
import SolutionSlide from './slides/SolutionSlide'
import OldModelSlide from './slides/OldModelSlide'
import NewModelSlide from './slides/NewModelSlide'
import TaxAlphaSlide from './slides/TaxAlphaSlide'
import TaxStrategiesSlide from './slides/TaxStrategiesSlide'
import AlternativesSlide from './slides/AlternativesSlide'
import AlternativesAccessSlide from './slides/AlternativesAccessSlide'
import GIFTCitySlide from './slides/GIFTCitySlide'
import GIFTBenefitsSlide from './slides/GIFTBenefitsSlide'
import AgentsSlide from './slides/AgentsSlide'
import AgentFeaturesSlide from './slides/AgentFeaturesSlide'
import UseCasesSlide from './slides/UseCasesSlide'
import FinalSlide from './slides/FinalSlide'

const slides = [
  { component: TitleSlide, title: 'Title' },
  { component: ProblemSlide, title: 'Problem' },
  { component: StanfordSlide, title: 'Stanford Research' },
  { component: AlphaGapSlide, title: 'Alpha Gap' },
  { component: SolutionSlide, title: 'Solution' },
  { component: OldModelSlide, title: 'Old Model' },
  { component: NewModelSlide, title: 'New Model' },
  { component: TaxAlphaSlide, title: 'Tax Alpha' },
  { component: TaxStrategiesSlide, title: 'Tax Strategies' },
  { component: AlternativesSlide, title: 'Alternative Assets' },
  { component: AlternativesAccessSlide, title: 'Alternatives Access' },
  { component: GIFTCitySlide, title: 'GIFT City' },
  { component: GIFTBenefitsSlide, title: 'GIFT Benefits' },
  { component: AgentsSlide, title: 'AI Agents' },
  { component: AgentFeaturesSlide, title: 'Agent Features' },
  { component: UseCasesSlide, title: 'Use Cases' },
  { component: FinalSlide, title: 'Thank You' }
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
