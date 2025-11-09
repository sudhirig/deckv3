import { motion } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import { MessageCircle, Bot, FileCheck, TrendingUp, Award, Users } from 'lucide-react'
import './SlideStyles.css'

export default function CustomerJourney2Slide() {
  const touchpoints = [
    {
      month: 'Month 1',
      interactions: [
        { type: 'AI Chat', frequency: 'Daily', satisfaction: 95 },
        { type: 'Portfolio Updates', frequency: 'Real-time', satisfaction: 98 },
        { type: 'Tax Harvesting', frequency: 'Daily', satisfaction: 97 }
      ],
      milestone: 'First tax savings realized',
      value: '+$12K saved'
    },
    {
      month: 'Month 3',
      interactions: [
        { type: 'Strategy Review', frequency: 'Monthly', satisfaction: 94 },
        { type: 'Alternative Investments', frequency: 'Weekly', satisfaction: 92 },
        { type: 'Market Insights', frequency: 'Daily', satisfaction: 96 }
      ],
      milestone: 'First alternative investment',
      value: '+4.2% portfolio return'
    },
    {
      month: 'Month 6',
      interactions: [
        { type: 'Estate Planning', frequency: 'Quarterly', satisfaction: 93 },
        { type: 'Family Access', frequency: 'On-demand', satisfaction: 95 },
        { type: 'Comprehensive Reports', frequency: 'Monthly', satisfaction: 97 }
      ],
      milestone: 'Full family onboarded',
      value: '+$2.3M AUM growth'
    },
    {
      month: 'Month 12',
      interactions: [
        { type: 'Annual Review', frequency: 'Yearly', satisfaction: 98 },
        { type: 'Referral Program', frequency: 'Ongoing', satisfaction: 96 },
        { type: 'VIP Benefits', frequency: 'Continuous', satisfaction: 99 }
      ],
      milestone: 'Becomes brand advocate',
      value: '3 referrals generated'
    }
  ]

  const mainVisual = (
    <div style={{ position: 'relative', paddingBottom: '2rem' }}>
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        style={{
          position: 'absolute',
          left: '3.125rem',
          top: '1.25rem',
          bottom: '1.25rem',
          width: '0.1875rem',
          background: 'linear-gradient(180deg, #60a5fa, #c084fc, #4ade80, #fbbf24)',
          transformOrigin: 'top'
        }}
      />

      {touchpoints.map((point, index) => (
        <motion.div
          key={point.month}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + index * 0.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '6.25rem 1fr',
            gap: '2rem',
            marginBottom: '2rem'
          }}
        >
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute',
              left: '2.1875rem',
              top: '0.5rem',
              width: '1.875rem',
              height: '1.875rem',
              borderRadius: '50%',
              background: '#0f172a',
              border: '0.1875rem solid #60a5fa',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.8rem',
              fontWeight: 'bold',
              color: '#60a5fa'
            }}>
              {index + 1}
            </div>
            <div style={{
              marginTop: '2.5rem',
              textAlign: 'center',
              fontSize: '0.9rem',
              color: '#94a3b8'
            }}>
              {point.month}
            </div>
          </div>

          <div style={{
            background: 'rgba(59, 130, 246, 0.05)',
            borderRadius: '0.75rem',
            padding: '1.5rem',
            border: '0.0625rem solid rgba(59, 130, 246, 0.2)'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1rem' }}>
              {point.interactions.map((interaction, i) => (
                <div
                  key={i}
                  style={{
                    padding: '0.75rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '0.5rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    {i === 0 && <MessageCircle size={16} style={{ color: '#60a5fa' }} />}
                    {i === 1 && <Bot size={16} style={{ color: '#c084fc' }} />}
                    {i === 2 && <FileCheck size={16} style={{ color: '#4ade80' }} />}
                    <span style={{ fontSize: '0.85rem', color: '#e2e8f0' }}>{interaction.type}</span>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.25rem' }}>
                    {interaction.frequency}
                  </div>
                  <div style={{ 
                    fontSize: '0.8rem', 
                    color: '#4ade80',
                    fontWeight: '600'
                  }}>
                    {interaction.satisfaction}% satisfied
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0.75rem',
              background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))',
              borderRadius: '0.5rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Award size={20} style={{ color: '#fbbf24' }} />
                <div>
                  <div style={{ fontSize: '0.9rem', color: '#e2e8f0' }}>{point.milestone}</div>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Key Achievement</div>
                </div>
              </div>
              <div style={{
                fontSize: '1.1rem',
                fontWeight: 'bold',
                color: '#4ade80'
              }}>
                {point.value}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )

  const keyInsights = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5 }}
      style={{
        background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(20, 184, 166, 0.1))',
        borderRadius: '0.75rem',
        padding: '1.5rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1.5rem',
        textAlign: 'center'
      }}
    >
      <div>
        <TrendingUp size={24} style={{ color: '#4ade80', margin: '0 auto 0.5rem' }} />
        <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#4ade80' }}>94%</div>
        <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>12-Month Retention</div>
      </div>
      <div>
        <Users size={24} style={{ color: '#60a5fa', margin: '0 auto 0.5rem' }} />
        <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#60a5fa' }}>2.7x</div>
        <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Account Growth</div>
      </div>
      <div>
        <Award size={24} style={{ color: '#fbbf24', margin: '0 auto 0.5rem' }} />
        <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#fbbf24' }}>$3.2M</div>
        <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Avg Client LTV</div>
      </div>
    </motion.div>
  )

  return (
    <DataSlideLayout
      title="Customer Journey: Year One Touchpoints"
      mainVisual={mainVisual}
      keyInsights={keyInsights}
    />
  )
}
