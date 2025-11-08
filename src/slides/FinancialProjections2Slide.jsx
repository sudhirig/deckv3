import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import GradientText from '../components/GradientText'
import CircularProgress from '../components/CircularProgress'
import { Calculator, TrendingUp, Users, DollarSign, Repeat, Target } from 'lucide-react'
import './SlideStyles.css'

export default function FinancialProjections2Slide() {
  const unitEconomics = {
    cac: 3200,
    ltv: 57000,
    ratio: 17.8,
    payback: 3.5,
    churn: 6,
    arpu: 20000
  }

  const revenueStreams = [
    { name: 'Management Fees', percentage: 65, amount: 8.1, color: '#60a5fa' },
    { name: 'Performance Fees', percentage: 20, amount: 2.5, color: '#4ade80' },
    { name: 'Platform Fees', percentage: 10, amount: 1.25, color: '#fbbf24' },
    { name: 'Data & Analytics', percentage: 5, amount: 0.65, color: '#c084fc' }
  ]

  const cohortRetention = [
    { month: 'M1', retention: 100 },
    { month: 'M3', retention: 96 },
    { month: 'M6', retention: 94 },
    { month: 'M12', retention: 94 },
    { month: 'M24', retention: 92 },
    { month: 'M36', retention: 91 }
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
            <GradientText gradient="from-blue-400 to-purple-400">
              Unit Economics & Revenue Model
            </GradientText>
          </h2>
          <p style={{ fontSize: '1rem', color: '#94a3b8', textAlign: 'center', marginBottom: '2rem' }}>
            Best-in-class metrics driving sustainable growth
          </p>
        </AnimatedText>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
          {/* Unit Economics */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
              borderRadius: '12px',
              padding: '1.5rem'
            }}
          >
            <h3 style={{ color: '#60a5fa', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Unit Economics
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
              <div style={{
                textAlign: 'center',
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '8px'
              }}>
                <DollarSign size={20} style={{ color: '#4ade80', margin: '0 auto 0.5rem' }} />
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.25rem' }}>CAC</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#e2e8f0' }}>
                  ${unitEconomics.cac.toLocaleString()}
                </div>
              </div>
              
              <div style={{
                textAlign: 'center',
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '8px'
              }}>
                <TrendingUp size={20} style={{ color: '#fbbf24', margin: '0 auto 0.5rem' }} />
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.25rem' }}>LTV</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#e2e8f0' }}>
                  ${unitEconomics.ltv.toLocaleString()}
                </div>
              </div>
              
              <div style={{
                textAlign: 'center',
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '8px'
              }}>
                <Calculator size={20} style={{ color: '#c084fc', margin: '0 auto 0.5rem' }} />
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.25rem' }}>LTV/CAC</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4ade80' }}>
                  {unitEconomics.ratio}:1
                </div>
              </div>
            </div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '1rem',
              marginTop: '1rem'
            }}>
              <div style={{
                padding: '0.75rem',
                background: 'rgba(34, 197, 94, 0.1)',
                borderRadius: '6px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '0.75rem', color: '#4ade80' }}>Payback</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#e2e8f0' }}>
                  {unitEconomics.payback} months
                </div>
              </div>
              
              <div style={{
                padding: '0.75rem',
                background: 'rgba(239, 68, 68, 0.1)',
                borderRadius: '6px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '0.75rem', color: '#ef4444' }}>Annual Churn</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#e2e8f0' }}>
                  {unitEconomics.churn}%
                </div>
              </div>
              
              <div style={{
                padding: '0.75rem',
                background: 'rgba(251, 191, 36, 0.1)',
                borderRadius: '6px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '0.75rem', color: '#fbbf24' }}>ARPU</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#e2e8f0' }}>
                  ${unitEconomics.arpu.toLocaleString()}
                </div>
              </div>
            </div>
          </motion.div>

          {/* LTV/CAC Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            style={{
              background: 'rgba(34, 197, 94, 0.05)',
              borderRadius: '12px',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <CircularProgress 
              percentage={94} 
              size={150}
              strokeWidth={12}
              gradient="from-green-400 to-emerald-500"
            />
            <div style={{ marginTop: '1rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4ade80' }}>
                17.8:1
              </div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                Industry Best LTV/CAC
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.5rem' }}>
                (Industry avg: 3:1)
              </div>
            </div>
          </motion.div>
        </div>

        {/* Revenue Streams */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{
            background: 'rgba(251, 191, 36, 0.05)',
            borderRadius: '12px',
            padding: '1.5rem',
            marginBottom: '1.5rem'
          }}
        >
          <h3 style={{ color: '#fbbf24', marginBottom: '1rem', fontSize: '1.1rem' }}>
            Revenue Streams (Year 5: $12.5M)
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
            {revenueStreams.map((stream, index) => (
              <motion.div
                key={stream.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                style={{
                  textAlign: 'center',
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '8px',
                  borderTop: `3px solid ${stream.color}`
                }}
              >
                <div style={{ 
                  fontSize: '2rem', 
                  fontWeight: 'bold',
                  color: stream.color,
                  marginBottom: '0.5rem'
                }}>
                  {stream.percentage}%
                </div>
                <div style={{ fontSize: '0.85rem', color: '#e2e8f0', marginBottom: '0.25rem' }}>
                  {stream.name}
                </div>
                <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                  ${stream.amount}M
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cohort Retention */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          style={{
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.05), rgba(6, 182, 212, 0.05))',
            borderRadius: '12px',
            padding: '1.5rem'
          }}
        >
          <h3 style={{ color: '#14b8a6', marginBottom: '1rem', fontSize: '1.1rem' }}>
            Cohort Retention Rate
          </h3>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: '120px' }}>
            {cohortRetention.map((cohort, index) => (
              <motion.div
                key={cohort.month}
                initial={{ height: 0 }}
                animate={{ height: `${cohort.retention}%` }}
                transition={{ delay: 1.3 + index * 0.05 }}
                style={{
                  width: '15%',
                  background: cohort.retention >= 94 ? 
                    'linear-gradient(180deg, #4ade80, #22c55e)' :
                    'linear-gradient(180deg, #14b8a6, #06b6d4)',
                  borderRadius: '4px 4px 0 0',
                  position: 'relative'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-25px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                  color: cohort.retention >= 94 ? '#4ade80' : '#14b8a6'
                }}>
                  {cohort.retention}%
                </div>
                <div style={{
                  position: 'absolute',
                  bottom: '-25px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontSize: '0.8rem',
                  color: '#94a3b8'
                }}>
                  {cohort.month}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}