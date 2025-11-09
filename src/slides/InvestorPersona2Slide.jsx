import { motion } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import PersonaCard from '../components/PersonaCard'
import './SlideStyles.css'

export default function InvestorPersona2Slide() {
  const persona = {
    name: 'Sarah Chen-Williams',
    initials: 'SC',
    title: 'Family Office Principal',
    type: 'family-office',
    age: 38,
    location: 'Singapore',
    quote: 'We manage $180M across three generations. I need AI to handle complexity while maintaining the human touch for family dynamics.',
    
    shortDescription: 'Third-generation wealth steward managing multi-generational family office with global assets',
    
    stats: [
      { label: 'AUM', value: '$180M', type: 'portfolio' },
      { label: 'Family Members', value: '12 Beneficiaries', type: 'network' },
      { label: 'Jurisdictions', value: '5 Countries', type: 'location' },
      { label: 'Asset Types', value: '15+ Classes', type: 'briefcase' }
    ],
    
    painPoints: [
      'Managing different risk profiles for 3 generations',
      'Complex international tax reporting across 5 jurisdictions',
      'Lack of transparency in alternative investment performance',
      'Difficulty accessing quality deal flow in private markets',
      'Time-consuming quarterly reporting for family members'
    ],
    
    goals: [
      'Automated multi-currency portfolio optimization',
      'AI-powered alternative investment due diligence',
      'Personalized dashboards for each family member',
      'Seamless estate planning and wealth transfer',
      'Access to institutional-grade investments'
    ],
    
    valueProposition: 'Institutional-grade AI platform that scales personalized wealth management across generations'
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
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem'
      }}
    >
      <div style={{
        padding: '1rem',
        background: 'rgba(251, 191, 36, 0.1)',
        borderRadius: '0.5rem',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fbbf24' }}>$10.2T</div>
        <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Family Office AUM Globally</div>
      </div>
      <div style={{
        padding: '1rem',
        background: 'rgba(34, 197, 94, 0.1)',
        borderRadius: '0.5rem',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4ade80' }}>7,300+</div>
        <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Family Offices Worldwide</div>
      </div>
      <div style={{
        padding: '1rem',
        background: 'rgba(59, 130, 246, 0.1)',
        borderRadius: '0.5rem',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#60a5fa' }}>68%</div>
        <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Seeking AI Solutions</div>
      </div>
    </motion.div>
  )

  return (
    <DataSlideLayout
      title="Investor Persona: The Family Office"
      mainVisual={mainVisual}
      keyInsights={keyInsights}
    />
  )
}
