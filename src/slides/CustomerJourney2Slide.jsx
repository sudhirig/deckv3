import { motion } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import { MessageCircle, Bot, FileCheck, TrendingUp, Award, Users } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
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
    <div style={{ position: 'relative', paddingBottom: pxToRem(32) }}>
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        style={{
          position: 'absolute',
          left: pxToRem(50),
          top: pxToRem(20),
          bottom: pxToRem(20),
          width: pxToRem(3),
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
            gridTemplateColumns: `${pxToRem(100)} 1fr`,
            gap: pxToRem(32),
            marginBottom: pxToRem(32)
          }}
        >
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute',
              left: pxToRem(35),
              top: pxToRem(8),
              width: pxToRem(30),
              height: pxToRem(30),
              borderRadius: '50%',
              background: '#0f172a',
              border: `${pxToRem(3)} solid #60a5fa`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: pxToRem(12.8),
              fontWeight: 'bold',
              color: '#60a5fa'
            }}>
              {index + 1}
            </div>
            <div style={{
              marginTop: pxToRem(40),
              textAlign: 'center',
              fontSize: pxToRem(14.4),
              color: '#94a3b8'
            }}>
              {point.month}
            </div>
          </div>

          <div style={{
            background: 'rgba(59, 130, 246, 0.05)',
            borderRadius: pxToRem(12),
            padding: pxToRem(24),
            border: `${pxToRem(1)} solid rgba(59, 130, 246, 0.2)`
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: pxToRem(16), marginBottom: pxToRem(16) }}>
              {point.interactions.map((interaction, i) => (
                <div
                  key={i}
                  style={{
                    padding: pxToRem(12),
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: pxToRem(8)
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: pxToRem(8), marginBottom: pxToRem(8) }}>
                    {i === 0 && <MessageCircle size={16} style={{ color: '#60a5fa' }} />}
                    {i === 1 && <Bot size={16} style={{ color: '#c084fc' }} />}
                    {i === 2 && <FileCheck size={16} style={{ color: '#4ade80' }} />}
                    <span style={{ fontSize: pxToRem(13.6), color: '#e2e8f0' }}>{interaction.type}</span>
                  </div>
                  <div style={{ fontSize: pxToRem(12), color: '#64748b', marginBottom: pxToRem(4) }}>
                    {interaction.frequency}
                  </div>
                  <div style={{ 
                    fontSize: pxToRem(12.8), 
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
              padding: pxToRem(12),
              background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))',
              borderRadius: pxToRem(8)
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: pxToRem(8) }}>
                <Award size={20} style={{ color: '#fbbf24' }} />
                <div>
                  <div style={{ fontSize: pxToRem(14.4), color: '#e2e8f0' }}>{point.milestone}</div>
                  <div style={{ fontSize: pxToRem(12.8), color: '#94a3b8' }}>Key Achievement</div>
                </div>
              </div>
              <div style={{
                fontSize: pxToRem(17.6),
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
        borderRadius: pxToRem(12),
        padding: pxToRem(24),
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: pxToRem(24),
        textAlign: 'center'
      }}
    >
      <div>
        <TrendingUp size={24} style={{ color: '#4ade80', margin: `0 auto ${pxToRem(8)}` }} />
        <div style={{ fontSize: pxToRem(28.8), fontWeight: 'bold', color: '#4ade80' }}>94%</div>
        <div style={{ fontSize: pxToRem(13.6), color: '#94a3b8' }}>12-Month Retention</div>
      </div>
      <div>
        <Users size={24} style={{ color: '#60a5fa', margin: `0 auto ${pxToRem(8)}` }} />
        <div style={{ fontSize: pxToRem(28.8), fontWeight: 'bold', color: '#60a5fa' }}>2.7x</div>
        <div style={{ fontSize: pxToRem(13.6), color: '#94a3b8' }}>Account Growth</div>
      </div>
      <div>
        <Award size={24} style={{ color: '#fbbf24', margin: `0 auto ${pxToRem(8)}` }} />
        <div style={{ fontSize: pxToRem(28.8), fontWeight: 'bold', color: '#fbbf24' }}>$3.2M</div>
        <div style={{ fontSize: pxToRem(13.6), color: '#94a3b8' }}>Avg Client LTV</div>
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
