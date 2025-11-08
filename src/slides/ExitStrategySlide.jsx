import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import GradientText from '../components/GradientText'
import { TrendingUp, Building2, Users, Target, DollarSign, Calendar } from 'lucide-react'
import './SlideStyles.css'

export default function ExitStrategySlide() {
  const exitOptions = [
    {
      type: 'IPO',
      timeline: '5-7 years',
      valuation: '$1B+',
      probability: '35%',
      color: '#60a5fa',
      requirements: [
        '$100M+ revenue run rate',
        '25% EBITDA margins',
        '10,000+ clients',
        'Multi-market presence'
      ],
      comparables: ['Coinbase ($60B)', 'Robinhood ($15B)', 'SoFi ($8B)']
    },
    {
      type: 'Strategic Acquisition',
      timeline: '3-5 years',
      valuation: '$500M-1B',
      probability: '45%',
      color: '#4ade80',
      requirements: [
        'Market leadership position',
        'Proprietary AI technology',
        'Strong client retention',
        'Regulatory compliance'
      ],
      comparables: ['Plaid ($13.4B)', 'Nutmeg ($360M)', 'Personal Capital ($1B)']
    },
    {
      type: 'PE Buyout',
      timeline: '4-6 years',
      valuation: '$750M+',
      probability: '20%',
      color: '#fbbf24',
      requirements: [
        'Predictable cash flows',
        'High EBITDA margins',
        'Scalable platform',
        'Management continuity'
      ],
      comparables: ['Apex Clearing ($4.7B)', 'Envestnet ($4.5B)', 'InvestCloud ($1B)']
    }
  ]

  const acquirers = [
    { name: 'JP Morgan', rationale: 'Digital wealth expansion', logo: '🏦' },
    { name: 'BlackRock', rationale: 'Aladdin ecosystem', logo: '⚫' },
    { name: 'Charles Schwab', rationale: 'Next-gen platform', logo: '🔵' },
    { name: 'Goldman Sachs', rationale: 'Marcus enhancement', logo: '🏛️' },
    { name: 'Morgan Stanley', rationale: 'E*TRADE synergies', logo: '🏢' },
    { name: 'Fidelity', rationale: 'Digital transformation', logo: '🟢' }
  ]

  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-card"
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <AnimatedText delay={0.2}>
          <h2 className="slide-title" style={{ marginBottom: '0.5rem' }}>
            <GradientText gradient="from-purple-400 to-pink-400">
              Exit Strategy & Investor Returns
            </GradientText>
          </h2>
          <p style={{ fontSize: '1rem', color: '#94a3b8', textAlign: 'center', marginBottom: '2rem' }}>
            Multiple paths to exceptional returns
          </p>
        </AnimatedText>

        {/* Exit Options */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
          {exitOptions.map((option, index) => (
            <motion.div
              key={option.type}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.15 }}
              style={{
                background: `linear-gradient(135deg, ${option.color}15, transparent)`,
                borderRadius: '12px',
                padding: '1.5rem',
                border: `2px solid ${option.color}33`,
                position: 'relative'
              }}
            >
              {/* Probability Badge */}
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                padding: '0.25rem 0.75rem',
                background: `${option.color}22`,
                borderRadius: '12px',
                fontSize: '0.8rem',
                color: option.color,
                fontWeight: 'bold'
              }}>
                {option.probability}
              </div>

              {/* Header */}
              <div style={{ marginBottom: '1rem' }}>
                <h3 style={{ color: option.color, fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                  {option.type}
                </h3>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.5rem' }}>
                  <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                    <Calendar size={14} style={{ display: 'inline', marginRight: '0.25rem' }} />
                    {option.timeline}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#4ade80', fontWeight: 'bold' }}>
                    <DollarSign size={14} style={{ display: 'inline', marginRight: '0.25rem' }} />
                    {option.valuation}
                  </div>
                </div>
              </div>

              {/* Requirements */}
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.5rem' }}>
                  KEY REQUIREMENTS
                </div>
                {option.requirements.map((req, i) => (
                  <div
                    key={i}
                    style={{
                      fontSize: '0.8rem',
                      color: '#e2e8f0',
                      marginBottom: '0.25rem',
                      paddingLeft: '1rem',
                      position: 'relative'
                    }}
                  >
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      color: option.color
                    }}>•</span>
                    {req}
                  </div>
                ))}
              </div>

              {/* Comparables */}
              <div>
                <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.5rem' }}>
                  COMPARABLES
                </div>
                {option.comparables.map((comp, i) => (
                  <div
                    key={i}
                    style={{
                      fontSize: '0.75rem',
                      color: '#94a3b8',
                      marginBottom: '0.125rem'
                    }}
                  >
                    {comp}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Potential Acquirers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{
            background: 'rgba(59, 130, 246, 0.05)',
            borderRadius: '12px',
            padding: '1.5rem',
            marginBottom: '1.5rem'
          }}
        >
          <h3 style={{ color: '#60a5fa', marginBottom: '1rem', fontSize: '1.1rem' }}>
            Potential Strategic Acquirers
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {acquirers.map((acquirer, index) => (
              <motion.div
                key={acquirer.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '8px'
                }}
              >
                <div style={{
                  fontSize: '1.5rem',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(59, 130, 246, 0.1)',
                  borderRadius: '8px'
                }}>
                  {acquirer.logo}
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', color: '#e2e8f0', fontWeight: '600' }}>
                    {acquirer.name}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                    {acquirer.rationale}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Return Projections */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(20, 184, 166, 0.1))',
            borderRadius: '12px',
            padding: '1.5rem',
            textAlign: 'center'
          }}
        >
          <h3 style={{ color: '#4ade80', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
            Investor Return Projections
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
            <div>
              <Target size={24} style={{ color: '#c084fc', margin: '0 auto 0.5rem' }} />
              <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#c084fc' }}>100x</div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Seed Return (IPO)</div>
            </div>
            <div>
              <TrendingUp size={24} style={{ color: '#60a5fa', margin: '0 auto 0.5rem' }} />
              <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#60a5fa' }}>50x</div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Seed Return (M&A)</div>
            </div>
            <div>
              <Building2 size={24} style={{ color: '#4ade80', margin: '0 auto 0.5rem' }} />
              <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#4ade80' }}>20x</div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Series A Return</div>
            </div>
            <div>
              <Users size={24} style={{ color: '#fbbf24', margin: '0 auto 0.5rem' }} />
              <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#fbbf24' }}>5x</div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Series B Return</div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          style={{
            marginTop: '1.5rem',
            textAlign: 'center',
            fontSize: '1.1rem',
            color: '#e2e8f0'
          }}
        >
          <strong style={{ color: '#4ade80' }}>Target Exit:</strong> $1B+ valuation within 5 years
        </motion.div>
      </motion.div>
    </div>
  )
}