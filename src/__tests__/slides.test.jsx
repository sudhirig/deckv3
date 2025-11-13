import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, it, expect, beforeEach } from 'vitest'

// Import all new slides
import ARIAPlatformExperienceSlide from '../slides/ARIAPlatformExperienceSlide'
import ARIAClientJourneySlide from '../slides/ARIAClientJourneySlide'
import ARIATechMFSlide from '../slides/ARIATechMFSlide'
import ARIAInvestmentAdvisorySlide from '../slides/ARIAInvestmentAdvisorySlide'
import ARIAGoalBasedInvestingSlide from '../slides/ARIAGoalBasedInvestingSlide'
import ARIAAIFSlide from '../slides/ARIAAIFSlide'

// Import new components
import StanfordBadge from '../components/StanfordBadge'
import OperationalBadge from '../components/OperationalBadge'

describe('ARIA Slides Test Suite', () => {
  
  describe('StanfordBadge Component', () => {
    it('renders with correct text', () => {
      render(<StanfordBadge variant="full" />)
      expect(screen.getByText('600%')).toBeInTheDocument()
      expect(screen.getByText('AI Outperformance')).toBeInTheDocument()
      expect(screen.getByText(/Stanford Study 2024/i)).toBeInTheDocument()
    })
    
    it('renders compact variant correctly', () => {
      render(<StanfordBadge variant="compact" />)
      expect(screen.getByText('600%')).toBeInTheDocument()
      expect(screen.queryByText(/Stanford Study 2024/i)).not.toBeInTheDocument()
    })
    
    it('renders mini variant correctly', () => {
      render(<StanfordBadge variant="mini" />)
      expect(screen.getByText('600%')).toBeInTheDocument()
      expect(screen.queryByText(/Stanford Study 2024/i)).not.toBeInTheDocument()
    })
  })
  
  describe('OperationalBadge Component', () => {
    it('renders with correct text', () => {
      render(<OperationalBadge variant="default" />)
      expect(screen.getByText('100% OPERATIONAL')).toBeInTheDocument()
      expect(screen.getByText('Live Today')).toBeInTheDocument()
    })
    
    it('renders different variants correctly', () => {
      const { rerender } = render(<OperationalBadge variant="compact" />)
      expect(screen.getByText('100% OPERATIONAL')).toBeInTheDocument()
      
      rerender(<OperationalBadge variant="large" />)
      expect(screen.getByText('100% OPERATIONAL')).toBeInTheDocument()
    })
  })
  
  describe('ARIAPlatformExperienceSlide', () => {
    it('renders without crashing', () => {
      render(<ARIAPlatformExperienceSlide />)
      expect(screen.getByText('The ARIA CEO Experience')).toBeInTheDocument()
    })
    
    it('contains key narrative elements', () => {
      render(<ARIAPlatformExperienceSlide />)
      expect(screen.getByText(/24\/7 dashboards, not quarterly PDFs/i)).toBeInTheDocument()
    })
    
    it('switches between mobile and desktop views', () => {
      render(<ARIAPlatformExperienceSlide />)
      const desktopButton = screen.getByText('Desktop')
      fireEvent.click(desktopButton)
      // Should switch view without errors
      expect(desktopButton).toBeInTheDocument()
    })
    
    it('displays feature cards correctly', () => {
      render(<ARIAPlatformExperienceSlide />)
      expect(screen.getByText('Voice Command')).toBeInTheDocument()
      expect(screen.getByText('AI Portfolio')).toBeInTheDocument()
      expect(screen.getByText('GIFT Gateway')).toBeInTheDocument()
      expect(screen.getByText('Real-time Alpha')).toBeInTheDocument()
    })
  })
  
  describe('ARIAClientJourneySlide', () => {
    it('renders without crashing', () => {
      render(<ARIAClientJourneySlide />)
      expect(screen.getByText('The 46% Who Switched to ARIA')).toBeInTheDocument()
    })
    
    it('contains three client personas', () => {
      render(<ARIAClientJourneySlide />)
      expect(screen.getByText('Rajesh Mehta')).toBeInTheDocument()
      expect(screen.getByText('Priya Sharma')).toBeInTheDocument()
      expect(screen.getByText('Amit Agarwal')).toBeInTheDocument()
    })
    
    it('switches between clients on click', async () => {
      render(<ARIAClientJourneySlide />)
      const priyaCard = screen.getByText('Priya Sharma')
      fireEvent.click(priyaCard)
      
      await waitFor(() => {
        expect(screen.getByText(/Senior Doctor/)).toBeInTheDocument()
      })
    })
    
    it('displays metrics correctly', () => {
      render(<ARIAClientJourneySlide />)
      expect(screen.getByText('Avg Returns')).toBeInTheDocument()
      expect(screen.getByText('+25.1%')).toBeInTheDocument()
    })
  })
  
  describe('ARIATechMFSlide', () => {
    it('renders without crashing', () => {
      render(<ARIATechMFSlide />)
      expect(screen.getByText('Why Tech Alone Isn\'t Enough')).toBeInTheDocument()
    })
    
    it('contains narrative messaging', () => {
      render(<ARIATechMFSlide />)
      expect(screen.getByText(/solving all three failures/i)).toBeInTheDocument()
    })
    
    it('displays comparison columns', () => {
      render(<ARIATechMFSlide />)
      expect(screen.getByText('Traditional Tech-MF Platforms')).toBeInTheDocument()
      expect(screen.getByText('ARIA AI-Orchestrated Platform')).toBeInTheDocument()
    })
    
    it('shows tech advantages metrics', () => {
      render(<ARIATechMFSlide />)
      expect(screen.getByText('16,766')).toBeInTheDocument()
      expect(screen.getByText('11ms')).toBeInTheDocument()
      expect(screen.getByText('+4.2%')).toBeInTheDocument()
    })
  })
  
  describe('ARIAInvestmentAdvisorySlide', () => {
    it('renders without crashing', () => {
      render(<ARIAInvestmentAdvisorySlide />)
      expect(screen.getByText('Your AI CEO at Work')).toBeInTheDocument()
    })
    
    it('contains product access gap messaging', () => {
      render(<ARIAInvestmentAdvisorySlide />)
      expect(screen.getByText(/product access gap/i)).toBeInTheDocument()
    })
    
    it('displays tab navigation', () => {
      render(<ARIAInvestmentAdvisorySlide />)
      expect(screen.getByText('Personalization')).toBeInTheDocument()
      expect(screen.getByText('Intelligence')).toBeInTheDocument()
      expect(screen.getByText('Protection')).toBeInTheDocument()
      expect(screen.getByText('Execution')).toBeInTheDocument()
    })
    
    it('switches tabs correctly', () => {
      render(<ARIAInvestmentAdvisorySlide />)
      const intelligenceTab = screen.getByText('Intelligence')
      fireEvent.click(intelligenceTab)
      // Tab should be active without errors
      expect(intelligenceTab).toBeInTheDocument()
    })
  })
  
  describe('ARIAGoalBasedInvestingSlide', () => {
    it('renders without crashing', () => {
      render(<ARIAGoalBasedInvestingSlide />)
      expect(screen.getByText('Personalization at Scale')).toBeInTheDocument()
    })
    
    it('contains 93% reference', () => {
      render(<ARIAGoalBasedInvestingSlide />)
      expect(screen.getByText(/the 93% can't do/i)).toBeInTheDocument()
    })
    
    it('displays life goals', () => {
      render(<ARIAGoalBasedInvestingSlide />)
      expect(screen.getByText('Dream Home')).toBeInTheDocument()
      expect(screen.getByText('Child\'s Education')).toBeInTheDocument()
      expect(screen.getByText('Early Retirement')).toBeInTheDocument()
      expect(screen.getByText('World Travel')).toBeInTheDocument()
    })
    
    it('switches between goals on click', async () => {
      render(<ARIAGoalBasedInvestingSlide />)
      const retirementGoal = screen.getByText('Early Retirement')
      fireEvent.click(retirementGoal)
      
      await waitFor(() => {
        expect(screen.getByText(/₹15 Cr/)).toBeInTheDocument()
      })
    })
  })
  
  describe('ARIAAIFSlide', () => {
    it('renders without crashing', () => {
      render(<ARIAAIFSlide />)
      expect(screen.getByText('Solving the Alternative Access Gap')).toBeInTheDocument()
    })
    
    it('contains +300-500bps messaging', () => {
      render(<ARIAAIFSlide />)
      expect(screen.getByText(/\+300-500bps alpha/i)).toBeInTheDocument()
    })
    
    it('displays three AIF tiers', () => {
      render(<ARIAAIFSlide />)
      expect(screen.getByText('ARIA Elite')).toBeInTheDocument()
      expect(screen.getByText('ARIA Prime')).toBeInTheDocument()
      expect(screen.getByText('ARIA Sovereign')).toBeInTheDocument()
    })
    
    it('shows investment minimums', () => {
      render(<ARIAAIFSlide />)
      expect(screen.getByText('₹1 Cr')).toBeInTheDocument()
      expect(screen.getByText('₹5 Cr')).toBeInTheDocument()
      expect(screen.getByText('₹25 Cr')).toBeInTheDocument()
    })
  })
})
