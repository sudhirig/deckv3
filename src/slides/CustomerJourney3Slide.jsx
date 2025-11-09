import { motion } from 'framer-motion'
import { GridLayout } from '../components/StandardLayouts'
import { Heart, Star, MessageSquare, Gift, TrendingUp, Users } from 'lucide-react'
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
        border: `0.125rem solid ${tier.color}66`,
        borderRadius: '0.75rem',
        padding: '1.5rem',
        position: 'relative',
        overflow: 'hidden',
        height: '100%'
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        marginBottom: '1rem'
      }}>
        <div style={{
          width: '2.5rem',
          height: '2.5rem',
          borderRadius: '0.5rem',
          background: tier.color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Star size={20} style={{ color: '#0f172a' }} />
        </div>
        <div>
          <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: tier.color }}>
            {tier.level}
          </div>
          <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
            {tier.aum}
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        {tier.benefits.map((benefit, i) => (
          <div
            key={i}
            style={{
              fontSize: '0.8rem',
              color: '#94a3b8',
              marginBottom: '0.25rem',
              paddingLeft: '1rem',
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
        borderTop: '0.0625rem solid rgba(255, 255, 255, 0.1)',
        paddingTop: '0.75rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Retention</span>
        <span style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#4ade80' }}>
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
          borderRadius: '0.75rem',
          padding: '1.5rem',
          marginBottom: '2rem'
        }}
      >
        <h3 style={{ color: '#fbbf24', fontSize: '1.2rem', marginBottom: '1rem' }}>
          Viral Growth Engine
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
          {referralStats.map((stat, index) => (
            <motion.div
              key={stat.metric}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
              style={{
                textAlign: 'center',
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '0.5rem'
              }}
            >
              <stat.icon size={24} style={{ 
                color: '#fbbf24', 
                margin: '0 auto 0.5rem' 
              }} />
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fbbf24' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
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
          borderRadius: '0.75rem',
          padding: '1.5rem',
          borderLeft: '0.25rem solid #14b8a6',
          position: 'relative',
          marginBottom: '1rem'
        }}
      >
        <MessageSquare size={30} style={{ 
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          color: '#14b8a6',
          opacity: 0.3
        }} />
        <p style={{ 
          fontSize: '1.1rem', 
          fontStyle: 'italic',
          color: '#e2e8f0',
          marginBottom: '1rem'
        }}>
          "In 12 months, they've saved me $340K in taxes, grown my portfolio 23%, and given me back 10 hours a week. 
          I've already referred 5 friends."
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            width: '3.125rem',
            height: '3.125rem',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #14b8a6, #06b6d4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            color: '#0f172a'
          }}>
            RK
          </div>
          <div>
            <div style={{ fontSize: '1rem', color: '#e2e8f0', fontWeight: '600' }}>
              Raj Kapoor
            </div>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
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
          padding: '1rem',
          background: 'linear-gradient(90deg, rgba(34, 197, 94, 0.1), rgba(20, 184, 166, 0.1))',
          borderRadius: '0.5rem'
        }}
      >
        <p style={{ fontSize: '1.2rem', color: '#4ade80' }}>
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
