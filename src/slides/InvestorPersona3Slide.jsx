import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import GradientText from '../components/GradientText'
import PersonaCard from '../components/PersonaCard'
import './SlideStyles.css'

export default function InvestorPersona3Slide() {
  const persona = {
    name: 'David Richardson',
    initials: 'DR',
    title: 'Corporate Executive & Board Member',
    type: 'traditional',
    age: 55,
    location: 'New York, USA',
    quote: 'I\'ve outgrown my private bank. I need sophisticated strategies that adapt to market conditions in real-time, not quarterly reviews.',
    
    shortDescription: 'C-suite executive with complex compensation structure seeking institutional-grade wealth management',
    
    stats: [
      { label: 'Net Worth', value: '$45M', type: 'portfolio' },
      { label: 'Annual Income', value: '$5M+', type: 'trending' },
      { label: 'Holdings', value: '3 Companies', type: 'briefcase' },
      { label: 'Experience', value: '30+ Years', type: 'experience' }
    ],
    
    painPoints: [
      'Private bank charges 1.5% for basic portfolio management',
      'Quarterly reviews are outdated by the time they happen',
      'No proactive tax strategies for RSUs and options',
      'Limited access to alternative investments',
      'Wealth manager doesn\'t understand executive compensation'
    ],
    
    goals: [
      'Reduce fees while improving returns',
      'Real-time portfolio optimization',
      'Sophisticated tax planning for equity compensation',
      'Access to private equity and hedge funds',
      'Seamless integration with corporate benefits'
    ],
    
    valueProposition: 'Goldman Sachs-level strategies at 1/10th the cost with 24/7 AI execution'
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
            <GradientText gradient="from-blue-400 to-cyan-400">
              Investor Persona: The Executive
            </GradientText>
          </h2>
          <p style={{ fontSize: '1rem', color: '#94a3b8', textAlign: 'center', marginBottom: '2rem' }}>
            Corporate leaders seeking institutional sophistication
          </p>
        </AnimatedText>

        {/* Persona Card */}
        <PersonaCard 
          persona={persona}
          variant="detailed"
          animated={true}
          index={0}
        />

        {/* Key Insight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          style={{
            marginTop: '2rem',
            padding: '1.5rem',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(6, 182, 212, 0.15))',
            borderRadius: '12px',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            textAlign: 'center'
          }}
        >
          <p style={{ fontSize: '1.2rem', color: '#60a5fa', marginBottom: '0.5rem' }}>
            Market Opportunity
          </p>
          <p style={{ fontSize: '1rem', color: '#e2e8f0' }}>
            <strong>2.8 million executives</strong> in the US alone with <strong>$10M+ net worth</strong>
          </p>
          <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginTop: '0.5rem' }}>
            Average fees saved: <strong>$450K/year</strong> | Better returns: <strong>+3.2% annually</strong>
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}