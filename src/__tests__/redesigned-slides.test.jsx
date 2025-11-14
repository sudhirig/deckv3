import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Import all redesigned slides
import ExecutiveHookSlide from '../slides/redesigned/ExecutiveHookSlide'
import PerfectStormSlide from '../slides/redesigned/PerfectStormSlide'
import AdvisorCrisisSlide from '../slides/redesigned/AdvisorCrisisSlide'
import ARIAatWorkSlide from '../slides/redesigned/ARIAatWorkSlide'
import ZerodhaIntelligence from '../slides/redesigned/ZerodhaIntelligence'
import CGMFAdvisory from '../slides/redesigned/CGMFAdvisory'
import AgenticAICore from '../slides/redesigned/AgenticAICore'
import AlgoTradingLab from '../slides/redesigned/AlgoTradingLab'
import TradingExecution from '../slides/redesigned/TradingExecution'
import SentimentAnalysis from '../slides/redesigned/SentimentAnalysis'
import FutureVision from '../slides/redesigned/FutureVision'
import ProofPointsGrid from '../slides/redesigned/ProofPointsGrid'
import CompetitiveMoats from '../slides/redesigned/CompetitiveMoats'
import BusinessModelComplete from '../slides/redesigned/BusinessModelComplete'
import PartnershipEcosystem from '../slides/redesigned/PartnershipEcosystem'
import FundingAsk from '../slides/redesigned/FundingAsk'

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    button: ({ children, ...props }) => <button {...props}>{children}</button>,
    span: ({ children, ...props }) => <span {...props}>{children}</span>,
    p: ({ children, ...props }) => <p {...props}>{children}</p>,
    h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
    h2: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
    h3: ({ children, ...props }) => <h3 {...props}>{children}</h3>,
    svg: ({ children, ...props }) => <svg {...props}>{children}</svg>,
    path: ({ ...props }) => <path {...props} />,
    circle: ({ ...props }) => <circle {...props} />,
    rect: ({ ...props }) => <rect {...props} />,
    line: ({ ...props }) => <line {...props} />,
    g: ({ children, ...props }) => <g {...props}>{children}</g>,
    text: ({ children, ...props }) => <text {...props}>{children}</text>,
    polygon: ({ children, ...props }) => <polygon {...props}>{children}</polygon>,
    foreignObject: ({ children, ...props }) => <foreignObject {...props}>{children}</foreignObject>,
  },
  AnimatePresence: ({ children }) => children,
}))

describe('Redesigned Slides Comprehensive Audit', () => {
  describe('Problem Section Slides', () => {
    test('ExecutiveHookSlide renders with all required content', () => {
      render(<ExecutiveHookSlide />)
      
      // Check for key metrics
      expect(screen.getByText(/AI Revolution/i)).toBeInTheDocument()
      expect(screen.getByText(/600%/)).toBeInTheDocument()
      expect(screen.getByText(/46%/)).toBeInTheDocument()
      expect(screen.getByText(/wealth managers/i)).toBeInTheDocument()
    })

    test('PerfectStormSlide renders crisis dashboard correctly', () => {
      render(<PerfectStormSlide />)
      
      // Check for Stanford study and key metrics
      expect(screen.getByText(/Perfect Storm/i)).toBeInTheDocument()
      expect(screen.getByText(/600%/)).toBeInTheDocument()
      expect(screen.getByText(/Stanford/i)).toBeInTheDocument()
      expect(screen.getByText(/\$124T/i)).toBeInTheDocument()
    })

    test('AdvisorCrisisSlide shows advisor shortage data', () => {
      render(<AdvisorCrisisSlide />)
      
      // Check for advisor metrics
      expect(screen.getByText(/Advisor/i)).toBeInTheDocument()
      expect(screen.getByText(/1:500/)).toBeInTheDocument()
      expect(screen.getByText(/HNW/i)).toBeInTheDocument()
    })
  })

  describe('Solution Section Slides', () => {
    test('ARIAatWorkSlide demonstrates $25M example', () => {
      render(<ARIAatWorkSlide />)
      
      // Check for workflow steps
      expect(screen.getByText(/ARIA at Work/i)).toBeInTheDocument()
      expect(screen.getByText(/\$25M/)).toBeInTheDocument()
      expect(screen.getByText(/liquidity event/i)).toBeInTheDocument()
    })
  })

  describe('Product Showcase Slides (TabInterface)', () => {
    test('ZerodhaIntelligence shows trading metrics', () => {
      render(<ZerodhaIntelligence />)
      
      // Check for key performance metrics
      expect(screen.getByText(/Zerodha/i)).toBeInTheDocument()
      expect(screen.getByText(/₹15.7L/)).toBeInTheDocument()
      expect(screen.getByText(/73%/)).toBeInTheDocument()
    })

    test('CGMFAdvisory displays fund advisory features', () => {
      render(<CGMFAdvisory />)
      
      // Check for CGMF features
      expect(screen.getByText(/CGMF/i)).toBeInTheDocument()
      expect(screen.getByText(/5,000/)).toBeInTheDocument()
      expect(screen.getByText(/mutual fund/i)).toBeInTheDocument()
    })

    test('AgenticAICore shows 68+ agents', () => {
      render(<AgenticAICore />)
      
      // Check for agent orchestration
      expect(screen.getByText(/Agentic AI/i)).toBeInTheDocument()
      expect(screen.getByText(/68\+/)).toBeInTheDocument()
      expect(screen.getByText(/agents/i)).toBeInTheDocument()
    })

    test('AlgoTradingLab has strategy development', () => {
      render(<AlgoTradingLab />)
      
      // Check for algo trading features
      expect(screen.getByText(/Algo/i)).toBeInTheDocument()
      expect(screen.getByText(/Trading/i)).toBeInTheDocument()
      expect(screen.getByText(/backtesting/i)).toBeInTheDocument()
    })

    test('TradingExecution shows 11ms speed', () => {
      render(<TradingExecution />)
      
      // Check for execution metrics
      expect(screen.getByText(/Trading Execution/i)).toBeInTheDocument()
      expect(screen.getByText(/11ms/)).toBeInTheDocument()
    })

    test('SentimentAnalysis processes 100K articles', () => {
      render(<SentimentAnalysis />)
      
      // Check for sentiment analysis capacity
      expect(screen.getByText(/Sentiment/i)).toBeInTheDocument()
      expect(screen.getByText(/100K/)).toBeInTheDocument()
    })

    test('FutureVision displays roadmap', () => {
      render(<FutureVision />)
      
      // Check for future vision elements
      expect(screen.getByText(/Future/i)).toBeInTheDocument()
      expect(screen.getByText(/Roadmap/i)).toBeInTheDocument()
    })
  })

  describe('Validation Section Slides', () => {
    test('ProofPointsGrid shows 3-column evidence', () => {
      render(<ProofPointsGrid />)
      
      // Check for proof points
      expect(screen.getByText(/Proof Points/i)).toBeInTheDocument()
      expect(screen.getByText(/Stanford/i)).toBeInTheDocument()
      expect(screen.getByText(/1,250\+/)).toBeInTheDocument()
    })

    test('CompetitiveMoats displays 3 defensive layers', () => {
      render(<CompetitiveMoats />)
      
      // Check for moats
      expect(screen.getByText(/Defensive Moats/i)).toBeInTheDocument()
      expect(screen.getByText(/India Gateway/i)).toBeInTheDocument()
      expect(screen.getByText(/18-month/i)).toBeInTheDocument()
    })
  })

  describe('Business Section Slides', () => {
    test('BusinessModelComplete shows path to $100M ARR', () => {
      render(<BusinessModelComplete />)
      
      // Check for financial projections
      expect(screen.getByText(/\$100M ARR/i)).toBeInTheDocument()
      expect(screen.getByText(/50x/)).toBeInTheDocument()
      expect(screen.getByText(/Month 18/i)).toBeInTheDocument()
    })

    test('PartnershipEcosystem displays network', () => {
      render(<PartnershipEcosystem />)
      
      // Check for partnerships
      expect(screen.getByText(/Partnership Ecosystem/i)).toBeInTheDocument()
      expect(screen.getByText(/Vora/i)).toBeInTheDocument()
      expect(screen.getByText(/Ascendum/i)).toBeInTheDocument()
    })

    test('FundingAsk shows $5M seed round', () => {
      render(<FundingAsk />)
      
      // Check for funding details
      expect(screen.getByText(/\$5M/)).toBeInTheDocument()
      expect(screen.getByText(/Seed Round/i)).toBeInTheDocument()
      expect(screen.getByText(/Use of Funds/i)).toBeInTheDocument()
    })
  })

  describe('Content Preservation Verification', () => {
    test('All critical metrics are preserved', () => {
      // Test key metrics across slides
      render(<PerfectStormSlide />)
      expect(screen.getByText(/600%/)).toBeInTheDocument() // Stanford study
      
      render(<ZerodhaIntelligence />)
      expect(screen.getByText(/₹15.7L/)).toBeInTheDocument() // Annual alpha
      
      render(<BusinessModelComplete />)
      expect(screen.getByText(/50x/)).toBeInTheDocument() // LTV/CAC
      
      render(<ProofPointsGrid />)
      expect(screen.getByText(/₹850Cr/)).toBeInTheDocument() // AUM
    })
  })

  describe('Design System Consistency', () => {
    test('All slides use StandardSlideLayout', () => {
      const slides = [
        ExecutiveHookSlide,
        PerfectStormSlide,
        AdvisorCrisisSlide,
        ARIAatWorkSlide,
        ProofPointsGrid,
        CompetitiveMoats,
        BusinessModelComplete,
        PartnershipEcosystem,
        FundingAsk
      ]
      
      slides.forEach(Slide => {
        const { container } = render(<Slide />)
        // Check for standard layout structure
        expect(container.querySelector('.h-full')).toBeInTheDocument()
      })
    })

    test('Product slides use TabInterface', () => {
      const productSlides = [
        ZerodhaIntelligence,
        CGMFAdvisory,
        AgenticAICore,
        AlgoTradingLab,
        TradingExecution,
        SentimentAnalysis,
        FutureVision
      ]
      
      productSlides.forEach(Slide => {
        render(<Slide />)
        // Check for tab buttons
        expect(screen.getByText(/Concept/i)).toBeInTheDocument()
        expect(screen.getByText(/Features/i)).toBeInTheDocument()
        expect(screen.getByText(/Live/i)).toBeInTheDocument()
      })
    })
  })
})
