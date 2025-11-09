import { motion } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import AnimatedCounter from '../components/AnimatedCounter'
import AnimatedText from '../components/AnimatedText'
import GradientText from '../components/GradientText'
import PulsingBadge from '../components/PulsingBadge'
import CircularProgress from '../components/CircularProgress'
import { TrendingUp } from 'lucide-react'
import { SPACING, TYPOGRAPHY, pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function MarketSwitchingSlide() {
  // Title
  const title = (
    <GradientText gradient="from-orange-400 to-amber-400">
      The Wealth Management Market is Switching Now
    </GradientText>
  )

  // Main visual - Circular progress and stats
  const mainVisual = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: SPACING.lg, height: '100%', justifyContent: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
        >
          <CircularProgress 
            value={46} 
            size={180} 
            strokeWidth={12} 
            color="#fb923c"
            label="Planning to Switch"
            delay={0.3}
          />
        </motion.div>
        
        <AnimatedText delay={1.5}>
          <div style={{ maxWidth: pxToRem(400) }}>
            <p style={{ fontSize: pxToRem(22.4), color: '#e2e8f0', fontWeight: '500', lineHeight: '1.6' }}>
              Planning to switch advisors in next <strong style={{ color: '#fb923c' }}>1-2 years</strong>
            </p>
            <p style={{ fontSize: pxToRem(17.6), color: '#94a3b8', marginTop: SPACING.sm }}>
              The largest wealth transfer in history is creating unprecedented opportunity
            </p>
          </div>
        </AnimatedText>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: SPACING.md }}>
        <motion.div 
          className="stat-card glass-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2 }}
          style={{ borderLeft: `${pxToRem(4)} solid #f97316`, padding: SPACING.md, textAlign: 'center' }}
        >
          <div style={{ fontSize: TYPOGRAPHY.subheadline, fontWeight: 'bold', color: '#fb923c', marginBottom: SPACING.xs }}>
            <AnimatedCounter end={39} suffix="%" duration={1.5} decimals={0} />
          </div>
          <div style={{ fontSize: pxToRem(16), color: '#e2e8f0' }}>Already switched (last 3 years)</div>
        </motion.div>
        
        <motion.div 
          className="stat-card glass-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4 }}
          style={{ borderLeft: `${pxToRem(4)} solid #fbbf24`, padding: SPACING.md, textAlign: 'center' }}
        >
          <div style={{ fontSize: TYPOGRAPHY.subheadline, fontWeight: 'bold', color: '#fbbf24', marginBottom: SPACING.xs }}>
            2x
          </div>
          <div style={{ fontSize: pxToRem(16), color: '#e2e8f0' }}>Under 55 switch rate</div>
        </motion.div>
        
        <motion.div 
          className="stat-card glass-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6 }}
          style={{ borderLeft: `${pxToRem(4)} solid #14b8a6`, padding: SPACING.md, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
        >
          <PulsingBadge color="teal">
            <div style={{ fontSize: pxToRem(24), fontWeight: 'bold' }}>NOW</div>
          </PulsingBadge>
          <div style={{ fontSize: pxToRem(16), color: '#e2e8f0', marginTop: SPACING.sm }}>Window to capture share</div>
        </motion.div>
      </div>
    </div>
  )

  // Key insights
  const keyInsights = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: SPACING.lg, justifyContent: 'center', height: '100%' }}>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
        className="glass-card"
        style={{ padding: SPACING.lg, borderLeft: `${pxToRem(4)} solid #fb923c` }}
      >
        <TrendingUp size={32} color="#fb923c" style={{ marginBottom: SPACING.sm }} />
        <h3 style={{ color: '#fb923c', fontSize: pxToRem(22.4), marginBottom: SPACING.sm }}>Perfect Timing</h3>
        <p style={{ fontSize: pxToRem(17.6), color: '#e2e8f0', lineHeight: '1.6' }}>
          46% planning to switch in next 24 months creates a once-in-generation opportunity
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="glass-card"
        style={{ padding: SPACING.lg, borderLeft: `${pxToRem(4)} solid #14b8a6` }}
      >
        <h3 style={{ color: '#14b8a6', fontSize: pxToRem(22.4), marginBottom: SPACING.sm }}>Market Size</h3>
        <div style={{ fontSize: pxToRem(17.6), color: '#e2e8f0' }}>
          <p><strong style={{ color: '#14b8a6' }}>$107T</strong> in US HNW wealth</p>
          <p style={{ marginTop: SPACING.xs }}><strong style={{ color: '#22c55e' }}>$124T</strong> wealth transfer in motion</p>
        </div>
      </motion.div>
    </div>
  )

  // Supporting data
  const supportingData = (
    <AnimatedText delay={2.8}>
      <p style={{ fontSize: pxToRem(14.4), color: '#94a3b8', textAlign: 'center', fontStyle: 'italic' }}>
        <strong style={{ color: '#60a5fa' }}>Source:</strong> PwC HNW Investor Survey, 2022
      </p>
    </AnimatedText>
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