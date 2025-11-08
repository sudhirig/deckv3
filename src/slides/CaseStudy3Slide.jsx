import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import GradientText from '../components/GradientText'
import { Briefcase, DollarSign, Target, Clock, TrendingUp, Award } from 'lucide-react'
import CircularProgress from '../components/CircularProgress'
import './SlideStyles.css'

export default function CaseStudy3Slide() {
  const portfolio = {
    before: [
      { asset: 'Public Equity', allocation: 60, return: 12 },
      { asset: 'Bonds', allocation: 30, return: 4 },
      { asset: 'Cash', allocation: 10, return: 2 }
    ],
    after: [
      { asset: 'Public Equity', allocation: 40, return: 18 },
      { asset: 'Private Equity', allocation: 20, return: 25 },
      { asset: 'Private Credit', allocation: 15, return: 12 },
      { asset: 'Real Estate', allocation: 15, return: 14 },
      { asset: 'Hedge Funds', allocation: 10, return: 16 }
    ]
  }

  const keyMetrics = [
    { label: 'Total Return', before: '8.8%', after: '17.4%', improvement: '+98%' },
    { label: 'Sharpe Ratio', before: '0.65', after: '1.42', improvement: '+118%' },
    { label: 'Max Drawdown', before: '-22%', after: '-11%', improvement: '-50%' },
    { label: 'Annual Fees', before: '$675K', after: '$112K', improvement: '-83%' }
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
              Case Study: Corporate Executive Transformation
            </GradientText>
          </h2>
          <p style={{ fontSize: '1rem', color: '#94a3b8', textAlign: 'center', marginBottom: '2rem' }}>
            From traditional banking to AI-powered sophistication
          </p>
        </AnimatedText>

        {/* Client Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1))',
            borderRadius: '12px',
            padding: '1.5rem',
            marginBottom: '2rem'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
            {/* Client Info */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#0f172a',
                margin: '0 auto 1rem'
              }}>
                DR
              </div>
              <h3 style={{ color: '#e2e8f0', marginBottom: '0.5rem' }}>David Richardson</h3>
              <div style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '0.25rem' }}>
                Fortune 500 CFO
              </div>
              <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
                Net Worth: $45M | Age: 55
              </div>
            </div>

            {/* Story */}
            <div>
              <div style={{
                padding: '1rem',
                background: 'rgba(239, 68, 68, 0.05)',
                borderRadius: '8px',
                marginBottom: '1rem'
              }}>
                <h4 style={{ color: '#ef4444', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                  🔴 STUCK WITH TRADITIONAL WEALTH MANAGEMENT
                </h4>
                <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.5 }}>
                  JP Morgan Private Bank charging 1.5% fees for cookie-cutter 60/40 portfolio. 
                  No access to alternatives. Quarterly reviews always outdated. Complex RSU and 
                  option exercises handled poorly, resulting in $200K+ unnecessary tax bills.
                </p>
              </div>
              <div style={{
                padding: '1rem',
                background: 'rgba(34, 197, 94, 0.05)',
                borderRadius: '8px'
              }}>
                <h4 style={{ color: '#4ade80', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                  ✅ AI-POWERED TRANSFORMATION
                </h4>
                <p style={{ fontSize: '0.8rem', color: '#e2e8f0', lineHeight: 1.5 }}>
                  Migrated to our platform in 48 hours. Immediate access to institutional alternatives. 
                  AI optimizes RSU vesting and option exercises in real-time. Daily tax harvesting 
                  and rebalancing. Now outperforming private bank by 2x with 83% lower fees.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Portfolio Transformation */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
          {/* Before Portfolio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            style={{
              background: 'rgba(239, 68, 68, 0.05)',
              borderRadius: '12px',
              padding: '1.5rem'
            }}
          >
            <h4 style={{ color: '#ef4444', marginBottom: '1rem', fontSize: '1rem' }}>
              Before: Traditional 60/40
            </h4>
            {portfolio.before.map((item, index) => (
              <div key={item.asset} style={{ marginBottom: '0.75rem' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '0.25rem'
                }}>
                  <span style={{ fontSize: '0.85rem', color: '#e2e8f0' }}>{item.asset}</span>
                  <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                    {item.allocation}% | {item.return}% return
                  </span>
                </div>
                <div style={{
                  height: '6px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '3px',
                  overflow: 'hidden'
                }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.allocation}%` }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                    style={{
                      height: '100%',
                      background: '#ef4444',
                      borderRadius: '3px'
                    }}
                  />
                </div>
              </div>
            ))}
            <div style={{
              marginTop: '1rem',
              padding: '0.75rem',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '6px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ef4444' }}>8.8%</div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Annual Return</div>
            </div>
          </motion.div>

          {/* After Portfolio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            style={{
              background: 'rgba(34, 197, 94, 0.05)',
              borderRadius: '12px',
              padding: '1.5rem'
            }}
          >
            <h4 style={{ color: '#4ade80', marginBottom: '1rem', fontSize: '1rem' }}>
              After: AI-Optimized Institutional
            </h4>
            {portfolio.after.map((item, index) => (
              <div key={item.asset} style={{ marginBottom: '0.75rem' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '0.25rem'
                }}>
                  <span style={{ fontSize: '0.85rem', color: '#e2e8f0' }}>{item.asset}</span>
                  <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                    {item.allocation}% | {item.return}% return
                  </span>
                </div>
                <div style={{
                  height: '6px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '3px',
                  overflow: 'hidden'
                }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.allocation}%` }}
                    transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                    style={{
                      height: '100%',
                      background: '#4ade80',
                      borderRadius: '3px'
                    }}
                  />
                </div>
              </div>
            ))}
            <div style={{
              marginTop: '1rem',
              padding: '0.75rem',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '6px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4ade80' }}>17.4%</div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Annual Return</div>
            </div>
          </motion.div>
        </div>

        {/* Key Metrics Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          style={{
            background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.05), rgba(236, 72, 153, 0.05))',
            borderRadius: '12px',
            padding: '1.5rem',
            marginBottom: '1.5rem'
          }}
        >
          <h4 style={{ color: '#c084fc', marginBottom: '1rem', fontSize: '1rem' }}>
            Performance Transformation
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 + index * 0.1 }}
                style={{
                  textAlign: 'center',
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '8px'
                }}
              >
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.5rem' }}>
                  {metric.label}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.9rem', color: '#ef4444', textDecoration: 'line-through' }}>
                    {metric.before}
                  </span>
                  <TrendingUp size={16} style={{ color: '#4ade80' }} />
                  <span style={{ fontSize: '1.1rem', color: '#4ade80', fontWeight: 'bold' }}>
                    {metric.after}
                  </span>
                </div>
                <div style={{ fontSize: '0.85rem', color: '#60a5fa', fontWeight: 'bold' }}>
                  {metric.improvement}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9 }}
          style={{
            background: 'linear-gradient(90deg, rgba(34, 197, 94, 0.1), rgba(20, 184, 166, 0.1))',
            borderRadius: '12px',
            padding: '1.5rem',
            borderLeft: '4px solid #4ade80',
            textAlign: 'center'
          }}
        >
          <Award size={30} style={{
            color: '#4ade80',
            margin: '0 auto 0.5rem',
            opacity: 0.5
          }} />
          <p style={{
            fontSize: '1.1rem',
            fontStyle: 'italic',
            color: '#e2e8f0',
            marginBottom: '0.75rem'
          }}>
            "I'm getting institutional-quality management at a fraction of the cost. 
            My only regret is not switching sooner—I've left millions on the table with traditional advisors."
          </p>
          <div style={{ fontSize: '0.9rem', color: '#4ade80', fontWeight: '600' }}>
            — David Richardson, 14 months after switching
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}