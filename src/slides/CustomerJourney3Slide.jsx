import { motion } from 'framer-motion'
import { GridLayout } from '../components/StandardLayouts'
import { Heart, Star, MessageSquare, Gift, TrendingUp, Users } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function CustomerJourney3Slide() {
  const loyaltyLevels = [
    {
      level: 'Bronze',
      aum: '$1M-5M',
      benefits: ['Daily tax harvesting', 'AI portfolio management', 'Monthly reports'],
      retention: '89%',
      color: '#cd7f32'
    },
    {
      level: 'Silver', 
      aum: '$5M-25M',
      benefits: ['Priority AI support', 'Alternative investments', 'Family accounts'],
      retention: '93%',
      color: '#c0c0c0'
    },
    {
      level: 'Gold',
      aum: '$25M-100M',
      benefits: ['Dedicated AI agent', 'Private deals access', 'Estate planning'],
      retention: '96%',
      color: '#ffd700'
    },
    {
      level: 'Platinum',
      aum: '$100M+',
      benefits: ['White glove service', 'Co-investment opportunities', 'Board access'],
      retention: '99%',
      color: '#e5e4e2'
    }
  ]

  const referralStats = [
    { metric: 'Referral Rate', value: '47%', icon: Users },
    { metric: 'Avg Referrals/Client', value: '3.2', icon: Heart },
    { metric: 'Referral Conversion', value: '68%', icon: TrendingUp },
    { metric: 'Referral Bonus Paid', value: '$2.1M', icon: Gift }
  ]

  const tierCards = loyaltyLevels.map((tier, index) => (
    <div
      key={tier.level}
      style={{
        background: `linear-gradient(135deg, ${tier.color}22, transparent)`,
        border: `${pxToRem(2)} solid ${tier.color}66`,
        borderRadius: pxToRem(12),
        padding: pxToRem(24),
        position: 'relative',
        overflow: 'hidden',
        height: '100%'
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: pxToRem(8),
        marginBottom: pxToRem(16)
      }}>
        <div style={{
          width: pxToRem(40),
          height: pxToRem(40),
          borderRadius: pxToRem(8),
          background: tier.color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Star size={20} style={{ color: '#0f172a' }} />
        </div>
        <div>
          <div style={{ fontSize: pxToRem(17.6), fontWeight: 'bold', color: tier.color }}>
            {tier.level}
          </div>
          <div style={{ fontSize: pxToRem(12), color: '#64748b' }}>
            {tier.aum}
          </div>
        </div>
      </div>

      <div style={{ marginBottom: pxToRem(16) }}>
        {tier.benefits.map((benefit, i) => (
          <div
            key={i}
            style={{
              fontSize: pxToRem(12.8),
              color: '#94a3b8',
              marginBottom: pxToRem(4),
              paddingLeft: pxToRem(16),
              position: 'relative'
            }}
          >
            <span style={{ 
              position: 'absolute', 
              left: 0,
              color: tier.color
            }}>✓</span>
            {benefit}
          </div>
        ))}
      </div>

      <div style={{
        borderTop: `${pxToRem(1)} solid rgba(255, 255, 255, 0.1)`,
        paddingTop: pxToRem(12),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <span style={{ fontSize: pxToRem(12.8), color: '#64748b' }}>Retention</span>
        <span style={{ fontSize: pxToRem(17.6), fontWeight: 'bold', color: '#4ade80' }}>
          {tier.retention}
        </span>
      </div>
    </div>
  ))

  const summary = (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9 }}
        style={{
          background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(236, 72, 153, 0.1))',
          borderRadius: pxToRem(12),
          padding: pxToRem(24),
          marginBottom: pxToRem(32)
        }}
      >
        <h3 style={{ color: '#fbbf24', fontSize: pxToRem(19.2), marginBottom: pxToRem(16) }}>
          Viral Growth Engine
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: pxToRem(16) }}>
          {referralStats.map((stat, index) => (
            <motion.div
              key={stat.metric}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
              style={{
                textAlign: 'center',
                padding: pxToRem(16),
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: pxToRem(8)
              }}
            >
              <stat.icon size={24} style={{ 
                color: '#fbbf24', 
                margin: `0 auto ${pxToRem(8)}` 
              }} />
              <div style={{ fontSize: pxToRem(24), fontWeight: 'bold', color: '#fbbf24' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: pxToRem(12.8), color: '#94a3b8' }}>
                {stat.metric}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3 }}
        style={{
          background: 'rgba(20, 184, 166, 0.05)',
          borderRadius: pxToRem(12),
          padding: pxToRem(24),
          borderLeft: `${pxToRem(4)} solid #14b8a6`,
          position: 'relative',
          marginBottom: pxToRem(16)
        }}
      >
        <MessageSquare size={30} style={{ 
          position: 'absolute',
          top: pxToRem(16),
          right: pxToRem(16),
          color: '#14b8a6',
          opacity: 0.3
        }} />
        <p style={{ 
          fontSize: pxToRem(17.6), 
          fontStyle: 'italic',
          color: '#e2e8f0',
          marginBottom: pxToRem(16)
        }}>
          "In 12 months, they've saved me $340K in taxes, grown my portfolio 23%, and given me back 10 hours a week. 
          I've already referred 5 friends."
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: pxToRem(16) }}>
          <div style={{
            width: pxToRem(50),
            height: pxToRem(50),
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #14b8a6, #06b6d4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: pxToRem(19.2),
            fontWeight: 'bold',
            color: '#0f172a'
          }}>
            RK
          </div>
          <div>
            <div style={{ fontSize: pxToRem(16), color: '#e2e8f0', fontWeight: '600' }}>
              Raj Kapoor
            </div>
            <div style={{ fontSize: pxToRem(13.6), color: '#94a3b8' }}>
              Tech Founder, Platinum Tier • $127M AUM
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          textAlign: 'center',
          padding: pxToRem(16),
          background: 'linear-gradient(90deg, rgba(34, 197, 94, 0.1), rgba(20, 184, 166, 0.1))',
          borderRadius: pxToRem(8)
        }}
      >
        <p style={{ fontSize: pxToRem(19.2), color: '#4ade80' }}>
          <strong>LTV/CAC: 17.8:1</strong> • Industry best-in-class unit economics
        </p>
      </motion.div>
    </>
  )

  return (
    <GridLayout
      title="Customer Journey: Loyalty & Advocacy"
      subtitle="Turning satisfied clients into lifetime advocates"
      cards={tierCards}
      columns={4}
      summary={summary}
    />
  )
}
