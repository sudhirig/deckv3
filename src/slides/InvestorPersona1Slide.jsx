import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import GradientText from '../components/GradientText'
import PersonaCard from '../components/PersonaCard'
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

  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ maxWidth: '1100px', margin: '0 auto' }}
      >
        {/* Header */}
        <AnimatedText delay={0.2}>
          <h2 className="slide-title" style={{ marginBottom: '0.5rem' }}>
            <GradientText gradient="from-purple-400 to-pink-400">
              Investor Persona: The Tech Founder
            </GradientText>
          </h2>
          <p style={{ fontSize: '1rem', color: '#94a3b8', textAlign: 'center', marginBottom: '2rem' }}>
            Understanding our primary customer segment
          </p>
        </AnimatedText>

        {/* Persona Card */}
        <PersonaCard 
          persona={persona}
          variant="detailed"
          animated={true}
          index={0}
        />

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{
            marginTop: '2rem',
            padding: '1rem',
            background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))',
            borderRadius: '12px',
            textAlign: 'center'
          }}
        >
          <p style={{ fontSize: '1.1rem', color: '#c084fc' }}>
            <strong>46% of tech founders</strong> are actively looking for new wealth management solutions
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}