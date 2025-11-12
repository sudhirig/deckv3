import { motion } from 'framer-motion'
import { TableLayout } from '../components/StandardLayouts'
import AnimatedText from '../components/AnimatedText'
import GradientText from '../components/GradientText'
import Icon from '../components/Icon'
import { TrendingUp, DollarSign, Clock, Award, ChevronRight } from 'lucide-react'
import { pxToRem, SPACING, TYPOGRAPHY } from '../utils/responsive'
import './SlideStyles.css'

export default function CaseStudy1Slide() {
  const results = [
    { metric: 'Portfolio Return', value: '+31.2%', benchmark: 'vs 18.4% S&P', color: '#4ade80' },
    { metric: 'Tax Savings', value: '$127K', benchmark: 'Annual savings', color: '#60a5fa' },
    { metric: 'Time Saved', value: '15 hrs/month', benchmark: 'Automated tasks', color: '#fbbf24' },
    { metric: 'Risk Reduction', value: '-42%', benchmark: 'Portfolio volatility', color: '#c084fc' }
  ]

  const timeline = [
    { month: 'Month 1', event: 'Onboarded $8.5M portfolio', highlight: 'Identified $47K immediate tax savings' },
    { month: 'Month 3', event: 'First alternative investment', highlight: 'Allocated 10% to private credit' },
    { month: 'Month 6', event: 'Family accounts added', highlight: 'Wife and 2 children onboarded' },
    { month: 'Month 12', event: 'Full optimization achieved', highlight: '31.2% returns with lower risk' }
  ]

  // Title
  const title = (
    <GradientText gradient="from-green-400 to-emerald-400">
      Case Study: Tech Founder Success
    </GradientText>
  )

  // Subtitle
  const subtitle = "From fragmented wealth to optimized portfolio in 12 months"

  // Table content - Client profile and journey
  const tableContent = (
    <div>
      {/* Client Profile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        style={{
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
          borderRadius: pxToRem(12),
          padding: pxToRem(16),
          marginBottom: pxToRem(20)
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: pxToRem(20) }}>
          {/* Client Info */}
          <div>
            <div style={{
              width: pxToRem(80),
              height: pxToRem(80),
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #60a5fa, #c084fc)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: TYPOGRAPHY.subheadline,
              fontWeight: 'bold',
              color: '#0f172a',
              marginBottom: SPACING.sm
            }}>
              RK
            </div>
            <h3 style={{ color: '#e2e8f0', marginBottom: SPACING.xs }}>Raj Kapoor</h3>
            <div style={{ fontSize: TYPOGRAPHY.body, color: '#94a3b8', marginBottom: pxToRem(4) }}>
              Tech Founder & Angel Investor
            </div>
            <div style={{ fontSize: TYPOGRAPHY.body, color: '#64748b' }}>
              Age: 38 | Location: San Francisco
            </div>
          </div>

          {/* Challenge & Solution */}
          <div>
            <div style={{ marginBottom: SPACING.sm }}>
              <h4 className="icon-label icon-heading" style={{ color: '#ef4444', fontSize: TYPOGRAPHY.body, marginBottom: SPACING.xs }}>
                <Icon type="circle" size={18} variant="inline" gradient="from-red-400 to-pink-400" />
                THE CHALLENGE
              </h4>
              <div style={{ fontSize: TYPOGRAPHY.body, color: '#94a3b8', lineHeight: 1.5 }}>
                After selling his second startup, Raj had $8.5M scattered across 12 accounts, 
                was paying $180K/year in unnecessary taxes, and spending 20+ hours monthly 
                managing investments with mediocre 12% returns.
              </div>
            </div>
            <div>
              <h4 className="icon-label icon-heading" style={{ color: '#4ade80', fontSize: TYPOGRAPHY.body, marginBottom: SPACING.xs }}>
                <Icon type="shield" size={18} variant="inline" gradient="from-green-400 to-emerald-400" />
                THE SOLUTION
              </h4>
              <div style={{ fontSize: TYPOGRAPHY.body, color: '#e2e8f0', lineHeight: 1.5 }}>
                Our AI consolidated his portfolio, implemented daily tax harvesting, 
                accessed pre-IPO investments, and automated rebalancing—all while 
                reducing fees by 75% and tripling his after-tax returns.
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        style={{
          background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.05), rgba(16, 185, 129, 0.05))',
          borderRadius: pxToRem(12),
          padding: SPACING.md
        }}
      >
        <h4 style={{ color: '#4ade80', marginBottom: SPACING.sm, fontSize: TYPOGRAPHY.body }}>
          12-Month Journey
        </h4>
        <div style={{ position: 'relative' }}>
          {timeline.map((item, index) => (
            <motion.div
              key={item.month}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              style={{
                display: 'grid',
                gridTemplateColumns: `${pxToRem(100)} 1fr`,
                gap: SPACING.sm,
                marginBottom: SPACING.sm,
                paddingLeft: pxToRem(20),
                position: 'relative'
              }}
            >
              {index < timeline.length - 1 && (
                <div style={{
                  position: 'absolute',
                  left: pxToRem(10),
                  top: pxToRem(20),
                  width: pxToRem(2),
                  height: `calc(100% + ${SPACING.sm})`,
                  background: 'rgba(74, 222, 128, 0.3)'
                }} />
              )}
              <div style={{
                position: 'absolute',
                left: pxToRem(5),
                top: pxToRem(8),
                width: pxToRem(12),
                height: pxToRem(12),
                borderRadius: '50%',
                background: '#4ade80',
                border: `${pxToRem(2)} solid #0f172a`
              }} />
              <span style={{ fontSize: TYPOGRAPHY.body, color: '#94a3b8' }}>{item.month}</span>
              <div>
                <div style={{ fontSize: TYPOGRAPHY.body, color: '#e2e8f0', marginBottom: pxToRem(4) }}>
                  {item.event}
                </div>
                <div style={{ fontSize: TYPOGRAPHY.body, color: '#64748b', fontStyle: 'italic' }}>
                  {item.highlight}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )

  // Metrics - Results
  const metrics = results.map((result, index) => (
    <motion.div
      key={result.metric}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6 + index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="glass-card"
      style={{
        background: `linear-gradient(135deg, ${result.color}20, ${result.color}10)`,
        borderLeft: `${pxToRem(3)} solid ${result.color}`,
        padding: SPACING.sm,
        textAlign: 'center'
      }}
    >
      <div style={{ fontSize: TYPOGRAPHY.subheadline, fontWeight: 'bold', color: result.color }}>
        {result.value}
      </div>
      <div style={{ fontSize: TYPOGRAPHY.body, color: '#e2e8f0', marginBottom: pxToRem(4) }}>
        {result.metric}
      </div>
      <div style={{ fontSize: TYPOGRAPHY.body, color: '#64748b' }}>
        {result.benchmark}
      </div>
    </motion.div>
  ))

  // Notes
  const notes = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      style={{
        background: 'linear-gradient(90deg, rgba(251, 191, 36, 0.1), rgba(249, 115, 22, 0.1))',
        padding: SPACING.sm,
        borderRadius: pxToRem(8),
        textAlign: 'center'
      }}
    >
      <div style={{ fontSize: TYPOGRAPHY.body, color: '#fbbf24' }}>
        <strong>Client Testimonial:</strong> "The AI caught tax loss opportunities I never knew existed. 
        It's like having a team of experts working 24/7 on my wealth."
      </div>
    </motion.div>
  )

  return (
    <TableLayout
      title={title}
      subtitle={subtitle}
      tableContent={tableContent}
      metrics={metrics}
      notes={notes}
    />
  )
}