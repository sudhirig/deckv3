import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import AnimatedCounter from '../components/AnimatedCounter'
import GradientText from '../components/GradientText'
import { Rocket, Target, Clock, HandshakeIcon, ChevronRight, Star } from 'lucide-react'
import './SlideStyles.css'

export default function ClosingCommitmentSlide() {
  const askDetails = {
    raise: '$5M',
    valuation: '$50M',
    type: 'Seed Round',
    lead: 'Looking for Lead Investor',
    minimum: '$500K'
  }

  const useOfFunds = [
    { category: 'Product & AI Development', percentage: 40 },
    { category: 'Customer Acquisition', percentage: 30 },
    { category: 'Compliance & Operations', percentage: 15 },
    { category: 'Working Capital', percentage: 15 }
  ]

  const investorBenefits = [
    { icon: Target, text: '100x return potential in 5 years' },
    { icon: Clock, text: 'Early entry at $50M valuation' },
    { icon: HandshakeIcon, text: 'Board seat for lead investor' },
    { icon: Star, text: 'Pro-rata rights in future rounds' }
  ]

  const nextSteps = [
    'Deep dive session with founders',
    'Technical due diligence',
    'Customer reference calls',
    'Term sheet negotiation'
  ]

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
            <GradientText gradient="from-purple-400 via-pink-400 to-red-400">
              Join Us in Revolutionizing Wealth Management
            </GradientText>
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8', textAlign: 'center', marginBottom: '2rem' }}>
            The opportunity to define the future of AI-powered finance
          </p>
        </AnimatedText>

        {/* The Ask */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2))',
            borderRadius: '16px',
            padding: '2rem',
            marginBottom: '2rem',
            border: '2px solid rgba(147, 51, 234, 0.3)',
            textAlign: 'center'
          }}
        >
          <h3 style={{ color: '#c084fc', marginBottom: '1.5rem', fontSize: '1.3rem' }}>
            THE ASK
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ec4899' }}>
                {askDetails.raise}
              </div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Raise Amount</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#60a5fa' }}>
                {askDetails.valuation}
              </div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Pre-Money Val</div>
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4ade80', paddingTop: '0.25rem' }}>
                {askDetails.type}
              </div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Round Type</div>
            </div>
            <div>
              <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#fbbf24', paddingTop: '0.5rem' }}>
                {askDetails.lead}
              </div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Status</div>
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#14b8a6', paddingTop: '0.25rem' }}>
                {askDetails.minimum}
              </div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Minimum Check</div>
            </div>
          </div>

          {/* Use of Funds Bar */}
          <div style={{ background: 'rgba(0, 0, 0, 0.3)', borderRadius: '8px', padding: '1rem' }}>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.75rem' }}>
              USE OF FUNDS
            </div>
            <div style={{ display: 'flex', height: '30px', borderRadius: '6px', overflow: 'hidden', marginBottom: '0.75rem' }}>
              {useOfFunds.map((item, index) => (
                <motion.div
                  key={item.category}
                  initial={{ width: 0 }}
                  animate={{ width: `${item.percentage}%` }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  style={{
                    background: index === 0 ? '#60a5fa' :
                               index === 1 ? '#4ade80' :
                               index === 2 ? '#fbbf24' : '#c084fc',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <span style={{ fontSize: '0.75rem', color: '#0f172a', fontWeight: 'bold' }}>
                    {item.percentage}%
                  </span>
                </motion.div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '0.5rem' }}>
              {useOfFunds.map((item, index) => (
                <div key={item.category} style={{ fontSize: '0.75rem' }}>
                  <span style={{
                    display: 'inline-block',
                    width: '10px',
                    height: '10px',
                    borderRadius: '2px',
                    background: index === 0 ? '#60a5fa' :
                               index === 1 ? '#4ade80' :
                               index === 2 ? '#fbbf24' : '#c084fc',
                    marginRight: '0.25rem'
                  }} />
                  <span style={{ color: '#e2e8f0' }}>{item.category}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
          {/* Why Now */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            style={{
              background: 'rgba(34, 197, 94, 0.05)',
              borderRadius: '12px',
              padding: '1.5rem'
            }}
          >
            <Rocket size={24} style={{ color: '#4ade80', marginBottom: '0.75rem' }} />
            <h4 style={{ color: '#4ade80', marginBottom: '0.75rem' }}>Why Now?</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ fontSize: '0.85rem', color: '#e2e8f0', marginBottom: '0.5rem' }}>
                ✓ AI inflection point reached
              </li>
              <li style={{ fontSize: '0.85rem', color: '#e2e8f0', marginBottom: '0.5rem' }}>
                ✓ $112T wealth transfer starting
              </li>
              <li style={{ fontSize: '0.85rem', color: '#e2e8f0', marginBottom: '0.5rem' }}>
                ✓ Regulatory clarity emerging
              </li>
              <li style={{ fontSize: '0.85rem', color: '#e2e8f0' }}>
                ✓ First-mover advantage critical
              </li>
            </ul>
          </motion.div>

          {/* Investor Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1 }}
            style={{
              background: 'rgba(59, 130, 246, 0.05)',
              borderRadius: '12px',
              padding: '1.5rem'
            }}
          >
            <Star size={24} style={{ color: '#60a5fa', marginBottom: '0.75rem' }} />
            <h4 style={{ color: '#60a5fa', marginBottom: '0.75rem' }}>Investor Benefits</h4>
            {investorBenefits.map((benefit, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '0.5rem'
                }}
              >
                <benefit.icon size={16} style={{ color: '#60a5fa' }} />
                <span style={{ fontSize: '0.85rem', color: '#e2e8f0' }}>
                  {benefit.text}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          style={{
            background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(236, 72, 153, 0.1))',
            borderRadius: '12px',
            padding: '1.5rem',
            marginBottom: '2rem'
          }}
        >
          <h4 style={{ color: '#fbbf24', marginBottom: '1rem', fontSize: '1.1rem' }}>
            Next Steps
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
            {nextSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 + index * 0.1 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <div style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  background: '#fbbf24',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                  color: '#0f172a'
                }}>
                  {index + 1}
                </div>
                <span style={{ fontSize: '0.85rem', color: '#e2e8f0' }}>{step}</span>
                {index < nextSteps.length - 1 && (
                  <ChevronRight size={16} style={{ color: '#64748b', marginLeft: 'auto' }} />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8 }}
          style={{
            background: 'linear-gradient(135deg, #4ade80, #22c55e)',
            borderRadius: '12px',
            padding: '2rem',
            textAlign: 'center',
            boxShadow: '0 10px 40px rgba(34, 197, 94, 0.3)'
          }}
        >
          <h3 style={{ 
            fontSize: '1.8rem', 
            color: '#0f172a',
            marginBottom: '0.75rem',
            fontWeight: 'bold'
          }}>
            Let's Build the Future Together
          </h3>
          <p style={{ fontSize: '1rem', color: '#0f172a', marginBottom: '1.5rem' }}>
            Join us in creating the AI-powered wealth management platform that will serve 
            millions of investors globally
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap'
          }}>
            <div style={{
              padding: '0.75rem 2rem',
              background: '#0f172a',
              borderRadius: '8px',
              color: '#4ade80',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>
              Schedule Deep Dive →
            </div>
            <div style={{
              padding: '0.75rem 2rem',
              background: 'rgba(15, 23, 42, 0.5)',
              borderRadius: '8px',
              color: '#e2e8f0',
              fontSize: '1.1rem',
              cursor: 'pointer'
            }}>
              Request Data Room
            </div>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          style={{
            marginTop: '2rem',
            textAlign: 'center',
            fontSize: '0.9rem',
            color: '#94a3b8'
          }}
        >
          <p>
            Contact: founders@aifamilyoffice.ai | +1 (555) 123-4567 | www.aifamilyoffice.ai
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}