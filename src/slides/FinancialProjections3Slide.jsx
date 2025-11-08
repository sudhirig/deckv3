import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import GradientText from '../components/GradientText'
import { PieChart, BarChart, TrendingUp, Users, DollarSign, Target } from 'lucide-react'
import './SlideStyles.css'

export default function FinancialProjections3Slide() {
  const fundingUse = [
    { category: 'Product & Engineering', amount: 2.0, percentage: 40, color: '#60a5fa' },
    { category: 'Sales & Marketing', amount: 1.5, percentage: 30, color: '#4ade80' },
    { category: 'Operations & Compliance', amount: 0.75, percentage: 15, color: '#fbbf24' },
    { category: 'Working Capital', amount: 0.75, percentage: 15, color: '#c084fc' }
  ]

  const milestones = [
    { quarter: 'Q1 2025', milestone: 'Launch V2 Platform', metric: '$100M AUM' },
    { quarter: 'Q2 2025', milestone: 'US Market Entry', metric: '100 Clients' },
    { quarter: 'Q3 2025', milestone: 'Series A Ready', metric: '$250M AUM' },
    { quarter: 'Q4 2025', milestone: 'Profitability', metric: '$350M AUM' }
  ]

  const burnRate = [
    { month: 'Current', burn: 150, runway: 36 },
    { month: 'Post-Funding', burn: 280, runway: 18 },
    { month: 'Break-Even', burn: 0, runway: '∞' }
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
            <GradientText gradient="from-yellow-400 to-orange-400">
              Use of Funds & Milestones
            </GradientText>
          </h2>
          <p style={{ fontSize: '1rem', color: '#94a3b8', textAlign: 'center', marginBottom: '2rem' }}>
            Strategic deployment for maximum impact
          </p>
        </AnimatedText>

        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '2rem', marginBottom: '2rem' }}>
          {/* Use of Funds */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            style={{
              background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(236, 72, 153, 0.1))',
              borderRadius: '12px',
              padding: '1.5rem'
            }}
          >
            <h3 style={{ color: '#fbbf24', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              $5M Seed Round Allocation
            </h3>
            
            {fundingUse.map((item, index) => (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                style={{ marginBottom: '1rem' }}
              >
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  marginBottom: '0.5rem'
                }}>
                  <span style={{ fontSize: '0.9rem', color: '#e2e8f0' }}>
                    {item.category}
                  </span>
                  <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: item.color }}>
                    ${item.amount}M ({item.percentage}%)
                  </span>
                </div>
                <div style={{
                  height: '8px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.percentage}%` }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                    style={{
                      height: '100%',
                      background: item.color,
                      borderRadius: '4px'
                    }}
                  />
                </div>
              </motion.div>
            ))}

            {/* Total */}
            <div style={{
              marginTop: '1.5rem',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{ fontSize: '1rem', color: '#e2e8f0', fontWeight: 'bold' }}>
                Total Raise
              </span>
              <span style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#fbbf24' }}>
                $5.0M
              </span>
            </div>
          </motion.div>

          {/* Burn Rate & Runway */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            style={{
              background: 'rgba(239, 68, 68, 0.05)',
              borderRadius: '12px',
              padding: '1.5rem'
            }}
          >
            <h3 style={{ color: '#ef4444', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Burn Rate & Runway
            </h3>
            
            {burnRate.map((item, index) => (
              <motion.div
                key={item.month}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                style={{
                  padding: '0.75rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '8px',
                  marginBottom: '0.75rem'
                }}
              >
                <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.25rem' }}>
                  {item.month}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Burn: </span>
                    <span style={{ 
                      fontSize: '1.1rem', 
                      fontWeight: 'bold',
                      color: item.burn === 0 ? '#4ade80' : '#ef4444'
                    }}>
                      {item.burn === 0 ? 'Profitable' : `$${item.burn}K/mo`}
                    </span>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Runway: </span>
                    <span style={{ 
                      fontSize: '1.1rem', 
                      fontWeight: 'bold',
                      color: '#60a5fa'
                    }}>
                      {item.runway === '∞' ? item.runway : `${item.runway} mo`}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Key Milestones Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{
            background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.05), rgba(59, 130, 246, 0.05))',
            borderRadius: '12px',
            padding: '1.5rem'
          }}
        >
          <h3 style={{ color: '#c084fc', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
            2025 Execution Milestones
          </h3>
          
          <div style={{ position: 'relative' }}>
            {/* Timeline Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              style={{
                position: 'absolute',
                top: '30px',
                left: '10%',
                right: '10%',
                height: '2px',
                background: 'linear-gradient(90deg, #c084fc, #60a5fa, #4ade80, #fbbf24)',
                transformOrigin: 'left'
              }}
            />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.quarter}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + index * 0.1 }}
                  style={{ textAlign: 'center' }}
                >
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: '#0f172a',
                    border: '3px solid #c084fc',
                    margin: '0 auto 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {index === 0 && <Target size={24} style={{ color: '#c084fc' }} />}
                    {index === 1 && <Users size={24} style={{ color: '#60a5fa' }} />}
                    {index === 2 && <TrendingUp size={24} style={{ color: '#4ade80' }} />}
                    {index === 3 && <DollarSign size={24} style={{ color: '#fbbf24' }} />}
                  </div>
                  <div style={{ fontSize: '0.9rem', color: '#c084fc', marginBottom: '0.25rem' }}>
                    {milestone.quarter}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#e2e8f0', marginBottom: '0.25rem' }}>
                    {milestone.milestone}
                  </div>
                  <div style={{ 
                    fontSize: '0.9rem', 
                    fontWeight: 'bold',
                    color: '#4ade80'
                  }}>
                    {milestone.metric}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          style={{
            marginTop: '1.5rem',
            textAlign: 'center',
            padding: '1rem',
            background: 'linear-gradient(90deg, rgba(34, 197, 94, 0.1), rgba(20, 184, 166, 0.1))',
            borderRadius: '8px'
          }}
        >
          <p style={{ fontSize: '1.1rem', color: '#4ade80' }}>
            <strong>100x return potential</strong> with exit valuation of <strong>$500M+</strong> in 5 years
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}