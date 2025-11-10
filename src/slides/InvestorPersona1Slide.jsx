import { motion } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import PersonaCard from '../components/PersonaCard'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function InvestorPersona1Slide() {
  const persona = {
    name: 'Arjun Mehta',
    initials: 'AM',
    title: 'Tech Founder & Serial Entrepreneur',
    type: 'tech-founder',
    age: 42,
    location: 'Mumbai, India',
    quote: 'My traditional wealth manager doesn\'t understand crypto, my startup equity, or international tax optimization. I need an AI that works as fast as I do.',
    
    shortDescription: 'Sold two startups, managing $25M+ in diversified assets across equity, crypto, and alternatives',
    
    stats: [
      { label: 'Net Worth', value: '$25M+', type: 'portfolio' },
      { label: 'Asset Classes', value: '7 Types', type: 'briefcase' },
      { label: 'Time Available', value: '<2 hrs/month', type: 'time' },
      { label: 'Risk Appetite', value: 'High Growth', type: 'growth' }
    ],
    
    painPoints: [
      'Traditional advisors don\'t understand startup equity or vesting schedules',
      'Manually tracking crypto across 5+ wallets and exchanges',
      'Missing tax optimization between India and US holdings',
      'No unified view of liquid vs illiquid assets',
      'Advisors push products, not personalized strategies'
    ],
    
    goals: [
      'Automated crypto portfolio rebalancing',
      'Tax-optimized exit planning for RSUs',
      'Access to pre-IPO and alternative investments',
      'Real-time consolidated portfolio view',
      '24/7 AI advisor that understands tech wealth'
    ],
    
    valueProposition: 'AI that understands complex tech wealth, optimizes across jurisdictions, and executes 24/7'
  }

  const mainVisual = (
    <PersonaCard 
      persona={persona}
      variant="detailed"
      animated={true}
      index={0}
    />
  )

  const keyInsights = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      style={{
        padding: pxToRem(16),
        background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))',
        borderRadius: pxToRem(12),
        textAlign: 'center'
      }}
    >
      <p style={{ fontSize: pxToRem(17.6), color: '#c084fc' }}>
        <strong>46% of tech founders</strong> are actively looking for new wealth management solutions
      </p>
    </motion.div>
  )

  return (
    <DataSlideLayout
      title="Investor Persona: The Tech Founder"
      mainVisual={mainVisual}
      keyInsights={keyInsights}
    />
  )
}
