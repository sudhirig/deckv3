import { motion } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { PieChart, BarChart, TrendingUp, Users, DollarSign, Target } from 'lucide-react'
import { pxToRem, SPACING, TYPOGRAPHY } from '../utils/responsive'
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

  // Title
  const title = (
    <GradientText gradient="from-yellow-400 to-orange-400">
      Use of Funds & Milestones
    </GradientText>
  )

  // Main visual - Use of Funds
  const mainVisual = (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 }}
      style={{
        background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(236, 72, 153, 0.1))',
        borderRadius: pxToRem(12),
        padding: SPACING.md,
        height: '100%'
      }}
    >
      <h3 style={{ color: '#fbbf24', marginBottom: SPACING.md, fontSize: TYPOGRAPHY.subheadline }}>
        $5M Seed Round Allocation
      </h3>
      
      {fundingUse.map((item, index) => (
        <motion.div
          key={item.category}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + index * 0.1 }}
          style={{ marginBottom: SPACING.sm }}
        >
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            marginBottom: '0.5rem'
          }}>
            <span style={{ fontSize: '0.95rem', color: '#e2e8f0' }}>
              {item.category}
            </span>
            <span style={{ fontSize: '0.95rem', fontWeight: 'bold', color: item.color }}>
              ${item.amount}M ({item.percentage}%)
            </span>
          </div>
          <div style={{
            height: pxToRem(8),
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: pxToRem(4),
            overflow: 'hidden'
          }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${item.percentage}%` }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              style={{
                height: '100%',
                background: item.color,
                borderRadius: pxToRem(4)
              }}
            />
          </div>
        </motion.div>
      ))}

      {/* Total */}
      <div style={{
        marginTop: SPACING.md,
        paddingTop: SPACING.sm,
        borderTop: `${pxToRem(1)} solid rgba(255, 255, 255, 0.1)`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <span style={{ fontSize: '1rem', color: '#e2e8f0', fontWeight: 'bold' }}>
          Total Raise
        </span>
        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fbbf24' }}>
          $5.0M
        </span>
      </div>
    </motion.div>
  )

  // Key insights - Milestones and Burn Rate
  const keyInsights = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', height: '100%' }}>
      {/* Milestones */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        style={{
          background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1))',
          borderRadius: pxToRem(12),
          padding: SPACING.md,
          flex: 1
        }}
      >
        <h4 style={{ color: '#4ade80', marginBottom: SPACING.sm, fontSize: TYPOGRAPHY.body }}>
          Key Milestones
        </h4>
        {milestones.map((item, index) => (
          <motion.div
            key={item.quarter}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 + index * 0.1 }}
            style={{ 
              marginBottom: '0.8rem',
              display: 'grid',
              gridTemplateColumns: `${pxToRem(80)} 1fr auto`,
              gap: SPACING.xs,
              alignItems: 'center'
            }}
          >
            <span style={{ fontSize: '0.85rem', color: '#64748b' }}>
              {item.quarter}
            </span>
            <span style={{ fontSize: '0.9rem', color: '#e2e8f0' }}>
              {item.milestone}
            </span>
            <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#4ade80' }}>
              {item.metric}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Burn Rate & Runway */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        style={{
          background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.1), rgba(59, 130, 246, 0.1))',
          borderRadius: pxToRem(12),
          padding: SPACING.md
        }}
      >
        <h4 style={{ color: '#60a5fa', marginBottom: SPACING.sm, fontSize: TYPOGRAPHY.body }}>
          Burn Rate & Runway
        </h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.8rem' }}>
          {burnRate.map((item, index) => (
            <motion.div
              key={item.month}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              style={{
                textAlign: 'center',
                padding: '0.75rem',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: pxToRem(6)
              }}
            >
              <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.25rem' }}>
                {item.month}
              </div>
              <div style={{ fontSize: TYPOGRAPHY.subheadline, fontWeight: 'bold', color: '#60a5fa' }}>
                ${item.burn}K
              </div>
              <div style={{ fontSize: '0.7rem', color: '#64748b' }}>
                {item.runway} mo runway
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )

  // Supporting data
  const supportingData = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: SPACING.sm,
        padding: SPACING.md,
        background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(168, 85, 247, 0.1))',
        borderRadius: pxToRem(12)
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <Target size={24} color="#a78bfa" style={{ margin: '0 auto 0.5rem' }} />
        <div style={{ fontSize: TYPOGRAPHY.subheadline, fontWeight: 'bold', color: '#a78bfa' }}>Q4 2025</div>
        <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Break-even</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <DollarSign size={24} color="#4ade80" style={{ margin: '0 auto 0.5rem' }} />
        <div style={{ fontSize: TYPOGRAPHY.subheadline, fontWeight: 'bold', color: '#4ade80' }}>$1B</div>
        <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Y3 Target AUM</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Users size={24} color="#fbbf24" style={{ margin: '0 auto 0.5rem' }} />
        <div style={{ fontSize: TYPOGRAPHY.subheadline, fontWeight: 'bold', color: '#fbbf24' }}>500</div>
        <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Y3 Clients</div>
      </div>
    </motion.div>
  )

  return (
    <DataSlideLayout
      title={title}
      mainVisual={mainVisual}
      keyInsights={keyInsights}
      supportingData={supportingData}
    />
  )
}