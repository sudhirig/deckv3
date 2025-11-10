import { motion } from 'framer-motion'
import { GridLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { Shield, Lock, AlertTriangle, XCircle, CheckCircle, TrendingUp, Users, Brain } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
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
      borderRadius: pxToRem(12),
      padding: pxToRem(24),
      border: `${pxToRem(1)} solid rgba(239, 68, 68, 0.2)`,
      position: 'relative'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: pxToRem(16), marginBottom: pxToRem(16) }}>
        <span style={{ fontSize: pxToRem(32) }}>{incumbent.icon}</span>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: pxToRem(19.2), color: '#e2e8f0', marginBottom: pxToRem(4) }}>
            {incumbent.category}
          </h3>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center',
            gap: pxToRem(8)
          }}>
            {!incumbent.canCatch ? (
              <>
                <XCircle size={14} style={{ color: '#ef4444' }} />
                <span style={{ fontSize: pxToRem(12.8), color: '#ef4444' }}>
                  Can't catch up
                </span>
              </>
            ) : (
              <>
                <AlertTriangle size={14} style={{ color: '#fbbf24' }} />
                <span style={{ fontSize: pxToRem(12.8), color: '#fbbf24' }}>
                  Potential threat
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      <div style={{ marginBottom: pxToRem(16) }}>
        {incumbent.weaknesses.map((weakness, i) => (
          <motion.div
            key={weakness.issue}
            initial={{ opacity: 0, x: pxToRem(-10) }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.15 + i * 0.05 }}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: pxToRem(8),
              marginBottom: pxToRem(12)
            }}
          >
            <div style={{
              width: pxToRem(4),
              height: pxToRem(4),
              borderRadius: '50%',
              background: weakness.severity === 'critical' ? '#ef4444' : 
                         weakness.severity === 'high' ? '#f97316' : '#fbbf24',
              marginTop: pxToRem(8),
              flexShrink: 0
            }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: pxToRem(14.4), color: '#e2e8f0', marginBottom: pxToRem(1.6) }}>
                {weakness.issue}
              </div>
              <div style={{ fontSize: pxToRem(12), color: '#64748b' }}>
                {weakness.detail}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div style={{
        borderTop: `${pxToRem(1)} solid rgba(255, 255, 255, 0.1)`,
        paddingTop: pxToRem(12),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <span style={{ fontSize: pxToRem(12.8), color: '#94a3b8' }}>Time to match:</span>
        <span style={{ 
          fontSize: pxToRem(14.4), 
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
          borderRadius: pxToRem(16),
          padding: pxToRem(32),
          border: `${pxToRem(2)} solid rgba(34, 197, 94, 0.3)`,
          marginBottom: pxToRem(32)
        }}
      >
        <h3 style={{ 
          fontSize: pxToRem(20.8), 
          color: '#4ade80',
          marginBottom: pxToRem(24),
          textAlign: 'center'
        }}>
          Our Unassailable Position
        </h3>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: pxToRem(16)
        }}>
          {ourAdvantages.map((advantage, index) => (
            <motion.div
              key={advantage.label}
              initial={{ opacity: 0, y: pxToRem(20) }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              style={{
                textAlign: 'center',
                padding: pxToRem(16),
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: pxToRem(8)
              }}
            >
              <CheckCircle size={24} style={{ 
                color: advantage.color, 
                margin: `0 auto ${pxToRem(8)}` 
              }} />
              <div style={{ 
                fontSize: pxToRem(24), 
                fontWeight: 'bold',
                color: advantage.color,
                marginBottom: pxToRem(8)
              }}>
                {advantage.value}
              </div>
              <div style={{ fontSize: pxToRem(13.6), color: '#94a3b8' }}>
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
          padding: pxToRem(24),
          background: 'rgba(147, 51, 234, 0.05)',
          borderRadius: pxToRem(12),
          border: `${pxToRem(1)} solid rgba(147, 51, 234, 0.2)`
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h4 style={{ color: '#c084fc', fontSize: pxToRem(17.6), marginBottom: pxToRem(8) }}>
              The Window of Opportunity
            </h4>
            <p style={{ fontSize: pxToRem(14.4), color: '#94a3b8' }}>
              We have an 18-24 month window before any incumbent could theoretically respond
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: pxToRem(8) }}>
              <TrendingUp size={20} style={{ color: '#4ade80' }} />
              <span style={{ fontSize: pxToRem(32), fontWeight: 'bold', color: '#4ade80' }}>
                18
              </span>
              <span style={{ fontSize: pxToRem(16), color: '#94a3b8' }}>
                months
              </span>
            </div>
            <p style={{ fontSize: pxToRem(12.8), color: '#64748b', marginTop: pxToRem(4) }}>
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
          marginTop: pxToRem(32),
          padding: pxToRem(16),
          background: 'linear-gradient(90deg, rgba(251, 191, 36, 0.1), rgba(236, 72, 153, 0.1))',
          borderRadius: pxToRem(8)
        }}
      >
        <p style={{ fontSize: pxToRem(17.6), color: '#fbbf24', fontWeight: '600' }}>
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
