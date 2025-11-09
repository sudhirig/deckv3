import { motion } from 'framer-motion'
import { GridLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { Shield, Lock, AlertTriangle, XCircle, CheckCircle, TrendingUp, Users, Brain } from 'lucide-react'
import './SlideStyles.css'

export default function WhyIncumbentsCantRespondSlide() {
  const incumbentWeaknesses = [
    {
      category: 'Traditional Banks',
      icon: '🏦',
      weaknesses: [
        { issue: 'Legacy Infrastructure', severity: 'critical', detail: '30+ year old core banking systems' },
        { issue: 'Regulatory Handcuffs', severity: 'high', detail: 'Can\'t offer crypto or alternatives' },
        { issue: 'Human Advisors', severity: 'high', detail: 'Can\'t scale 24/7 AI service' },
        { issue: 'Conflict of Interest', severity: 'critical', detail: 'Push proprietary products' }
      ],
      timeToMatch: '5+ years',
      canCatch: false
    },
    {
      category: 'Robo-Advisors',
      icon: '🤖',
      weaknesses: [
        { issue: 'Simple Algorithms', severity: 'high', detail: 'No true AI reasoning' },
        { issue: 'Limited Assets', severity: 'high', detail: 'ETFs only, no alternatives' },
        { issue: 'No Tax Optimization', severity: 'medium', detail: 'Annual harvesting only' },
        { issue: 'No Personalization', severity: 'high', detail: 'One-size-fits-all approach' }
      ],
      timeToMatch: '3+ years',
      canCatch: false
    },
    {
      category: 'Big Tech',
      icon: '💻',
      weaknesses: [
        { issue: 'Trust Deficit', severity: 'critical', detail: 'Privacy concerns with money' },
        { issue: 'No Finance DNA', severity: 'high', detail: 'Consumer tech ≠ wealth management' },
        { issue: 'Regulatory Unknown', severity: 'high', detail: 'Not licensed globally' },
        { issue: 'Distracted Focus', severity: 'medium', detail: 'Not core business priority' }
      ],
      timeToMatch: '2+ years',
      canCatch: true
    }
  ]

  const ourAdvantages = [
    { label: 'AI-First Architecture', value: '100%', color: '#4ade80' },
    { label: 'GIFT City License', value: 'Exclusive', color: '#fbbf24' },
    { label: 'Daily Tax Harvesting', value: 'Patent Pending', color: '#60a5fa' },
    { label: 'Time to Market', value: '18 months ahead', color: '#c084fc' }
  ]

  const cards = incumbentWeaknesses.map((incumbent, index) => (
    <div key={incumbent.category} style={{
      background: 'rgba(239, 68, 68, 0.05)',
      borderRadius: '0.75rem',
      padding: '1.5rem',
      border: '0.0625rem solid rgba(239, 68, 68, 0.2)',
      position: 'relative'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <span style={{ fontSize: '2rem' }}>{incumbent.icon}</span>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: '1.2rem', color: '#e2e8f0', marginBottom: '0.25rem' }}>
            {incumbent.category}
          </h3>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            {!incumbent.canCatch ? (
              <>
                <XCircle size={14} style={{ color: '#ef4444' }} />
                <span style={{ fontSize: '0.8rem', color: '#ef4444' }}>
                  Can't catch up
                </span>
              </>
            ) : (
              <>
                <AlertTriangle size={14} style={{ color: '#fbbf24' }} />
                <span style={{ fontSize: '0.8rem', color: '#fbbf24' }}>
                  Potential threat
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        {incumbent.weaknesses.map((weakness, i) => (
          <motion.div
            key={weakness.issue}
            initial={{ opacity: 0, x: -0.625 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.15 + i * 0.05 }}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.5rem',
              marginBottom: '0.75rem'
            }}
          >
            <div style={{
              width: '0.25rem',
              height: '0.25rem',
              borderRadius: '50%',
              background: weakness.severity === 'critical' ? '#ef4444' : 
                         weakness.severity === 'high' ? '#f97316' : '#fbbf24',
              marginTop: '0.5rem',
              flexShrink: 0
            }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '0.9rem', color: '#e2e8f0', marginBottom: '0.1rem' }}>
                {weakness.issue}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                {weakness.detail}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div style={{
        borderTop: '0.0625rem solid rgba(255, 255, 255, 0.1)',
        paddingTop: '0.75rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Time to match:</span>
        <span style={{ 
          fontSize: '0.9rem', 
          fontWeight: 'bold',
          color: '#ef4444'
        }}>
          {incumbent.timeToMatch}
        </span>
      </div>
    </div>
  ))

  const summary = (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        style={{
          background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(20, 184, 166, 0.1))',
          borderRadius: '1rem',
          padding: '2rem',
          border: '0.125rem solid rgba(34, 197, 94, 0.3)',
          marginBottom: '2rem'
        }}
      >
        <h3 style={{ 
          fontSize: '1.3rem', 
          color: '#4ade80',
          marginBottom: '1.5rem',
          textAlign: 'center'
        }}>
          Our Unassailable Position
        </h3>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '1rem'
        }}>
          {ourAdvantages.map((advantage, index) => (
            <motion.div
              key={advantage.label}
              initial={{ opacity: 0, y: 1.25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              style={{
                textAlign: 'center',
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '0.5rem'
              }}
            >
              <CheckCircle size={24} style={{ 
                color: advantage.color, 
                margin: '0 auto 0.5rem' 
              }} />
              <div style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold',
                color: advantage.color,
                marginBottom: '0.5rem'
              }}>
                {advantage.value}
              </div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                {advantage.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          position: 'relative',
          padding: '1.5rem',
          background: 'rgba(147, 51, 234, 0.05)',
          borderRadius: '0.75rem',
          border: '0.0625rem solid rgba(147, 51, 234, 0.2)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h4 style={{ color: '#c084fc', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
              The Window of Opportunity
            </h4>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
              We have an 18-24 month window before any incumbent could theoretically respond
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <TrendingUp size={20} style={{ color: '#4ade80' }} />
              <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4ade80' }}>
                18
              </span>
              <span style={{ fontSize: '1rem', color: '#94a3b8' }}>
                months
              </span>
            </div>
            <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.25rem' }}>
              First-mover advantage
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        style={{ 
          textAlign: 'center',
          marginTop: '2rem',
          padding: '1rem',
          background: 'linear-gradient(90deg, rgba(251, 191, 36, 0.1), rgba(236, 72, 153, 0.1))',
          borderRadius: '0.5rem'
        }}
      >
        <p style={{ fontSize: '1.1rem', color: '#fbbf24', fontWeight: '600' }}>
          "By the time they realize they need to respond, we'll own the category"
        </p>
      </motion.div>
    </>
  )

  return (
    <GridLayout 
      title={<GradientText gradient="from-red-400 to-orange-400">Why Incumbents Can't Respond</GradientText>}
      subtitle="The Innovator's Dilemma: They're structurally unable to compete"
      cards={cards}
      columns={3}
      summary={summary}
    />
  )
}
