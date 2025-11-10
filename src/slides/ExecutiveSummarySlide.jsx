import { motion } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import AnimatedText from '../components/AnimatedText'
import AnimatedCounter from '../components/AnimatedCounter'
import GradientText from '../components/GradientText'
import Icon from '../components/Icon'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function ExecutiveSummarySlide() {
  // Title
  const title = (
    <GradientText gradient="from-teal-400 to-cyan-400">
      Executive Summary
    </GradientText>
  )

  // Main visual - Investment thesis
  const mainVisual = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      style={{ 
        background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(6, 182, 212, 0.15))', 
        padding: '2rem', 
        borderRadius: pxToRem(12),
        border: `${pxToRem(1)} solid rgba(20, 184, 166, 0.3)`,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <h3 style={{ color: '#14b8a6', fontSize: '1.5rem', marginBottom: '1.5rem' }}>The Opportunity</h3>
      <p style={{ fontSize: '1.3rem', lineHeight: '2' }}>
        <strong style={{ color: '#5eead4' }}>AI-powered wealth management</strong> capturing the 
        <strong style={{ color: '#fbbf24' }}> $124T wealth transfer</strong> as 
        <strong style={{ color: '#f97316' }}> 46% of HNWIs</strong> switch advisors
      </p>
      
      {/* Key metrics in 2x2 grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '2rem' }}>
        <motion.div 
          className="metric-card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(59, 130, 246, 0.2)', borderRadius: pxToRem(12) }}
        >
          <Icon type="trophy" size={30} gradient="from-blue-400 to-cyan-400" />
          <AnimatedCounter end={93} duration={2} delay={0.8} suffix="%" style={{ fontSize: '2rem' }} />
          <p style={{ fontSize: '1rem', color: '#94a3b8', marginTop: '0.5rem' }}>AI Outperformance</p>
          <p style={{ fontSize: '0.9rem', color: '#60a5fa' }}>Stanford Study</p>
        </motion.div>
        
        <motion.div 
          className="metric-card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(34, 197, 94, 0.2)', borderRadius: pxToRem(12) }}
        >
          <Icon type="trending" size={30} gradient="from-green-400 to-emerald-400" />
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#4ade80' }}>$5T</p>
          <p style={{ fontSize: '1rem', color: '#94a3b8', marginTop: '0.5rem' }}>India Gateway TAM</p>
          <p style={{ fontSize: '0.9rem', color: '#86efac' }}>GIFT City Access</p>
        </motion.div>
        
        <motion.div 
          className="metric-card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(20, 184, 166, 0.2)', borderRadius: pxToRem(12) }}
        >
          <Icon type="users" size={30} gradient="from-teal-400 to-green-400" />
          <AnimatedCounter end={46} duration={2} delay={1} suffix="%" style={{ fontSize: '2rem' }} />
          <p style={{ fontSize: '1rem', color: '#94a3b8', marginTop: '0.5rem' }}>Switching Advisors</p>
          <p style={{ fontSize: '0.9rem', color: '#5eead4' }}>Next 24 months</p>
        </motion.div>
        
        <motion.div 
          className="metric-card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
          style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(251, 191, 36, 0.2)', borderRadius: pxToRem(12) }}
        >
          <Icon type="barChart" size={30} gradient="from-yellow-400 to-orange-400" />
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fbbf24' }}>+1.8%</p>
          <p style={{ fontSize: '1rem', color: '#94a3b8', marginTop: '0.5rem' }}>Tax Alpha Daily</p>
          <p style={{ fontSize: '0.9rem', color: '#fde047' }}>vs Annual TLH</p>
        </motion.div>
      </div>
    </motion.div>
  )

  // Key insights - Our Solution
  const keyInsights = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
    >
      <h3 style={{ color: '#22c55e', fontSize: '1.4rem', marginBottom: '1.5rem' }}>Our Solution</h3>
      <div style={{ display: 'grid', gap: '1.2rem' }}>
        <div style={{ padding: '1.5rem', background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(124, 58, 237, 0.1))', borderRadius: pxToRem(12), borderLeft: `${pxToRem(3)} solid #9333ea` }}>
          <strong style={{ color: '#c084fc', fontSize: '1.2rem' }}>🤖 Agentic AI</strong>
          <p style={{ fontSize: '1.1rem', color: '#e2e8f0', marginTop: '0.5rem' }}>68+ specialized agents working 24/7 across investment, tax, and operations</p>
        </div>
        <div style={{ padding: '1.5rem', background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(219, 39, 119, 0.1))', borderRadius: pxToRem(12), borderLeft: `${pxToRem(3)} solid #ec4899` }}>
          <strong style={{ color: '#f9a8d4', fontSize: '1.2rem' }}>🔐 Triple Lock Moat</strong>
          <p style={{ fontSize: '1.1rem', color: '#e2e8f0', marginTop: '0.5rem' }}>Technical superiority + GIFT City exclusive + Trust via real performance</p>
        </div>
        <div style={{ padding: '1.5rem', background: 'linear-gradient(135deg, rgba(251, 146, 60, 0.1), rgba(249, 115, 22, 0.1))', borderRadius: pxToRem(12), borderLeft: `${pxToRem(3)} solid #fb923c` }}>
          <strong style={{ color: '#fdba74', fontSize: '1.2rem' }}>🚀 100% Live</strong>
          <p style={{ fontSize: '1.1rem', color: '#e2e8f0', marginTop: '0.5rem' }}>Operational with real portfolios, $42M AUM, 27 HNW clients</p>
        </div>
      </div>
    </motion.div>
  )

  // Supporting data - The Ask
  const supportingData = (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.4 }}
      style={{
        background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(249, 115, 22, 0.15))',
        padding: '2rem',
        borderRadius: pxToRem(12),
        marginTop: '2rem'
      }}
    >
      <h3 style={{ color: '#fbbf24', fontSize: '1.4rem', marginBottom: '1.5rem' }}>💎 The Ask</h3>
      <div style={{ fontSize: '1.3rem', color: '#e2e8f0', fontWeight: 'bold', marginBottom: '1rem' }}>
        $10M Series A
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '1.1rem' }}>
        <div>
          <strong style={{ color: '#fbbf24' }}>Use of Funds:</strong>
          <ul style={{ color: '#e2e8f0', marginTop: '0.5rem' }}>
            <li>• Technology scaling</li>
            <li>• US market entry</li>
            <li>• Team expansion</li>
          </ul>
        </div>
        <div>
          <strong style={{ color: '#fbbf24' }}>Returns:</strong>
          <ul style={{ color: '#e2e8f0', marginTop: '0.5rem' }}>
            <li>• $5B AUM by Year 5</li>
            <li>• 70% EBITDA margins</li>
            <li>• 100x potential exit</li>
          </ul>
        </div>
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