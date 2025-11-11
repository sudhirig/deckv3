import { motion } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import AnimatedText from '../components/AnimatedText'
import AnimatedCounter from '../components/AnimatedCounter'
import GradientText from '../components/GradientText'
import Icon from '../components/Icon'
import { pxToRem } from '../utils/responsive'
import { toFiniteNumber } from '../utils/number'
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
      <h3 style={{ color: '#14b8a6', fontSize: '1.3rem', marginBottom: '1rem' }}>The Opportunity</h3>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
        <strong style={{ color: '#5eead4' }}>AI-powered wealth management</strong> capturing the 
        <strong style={{ color: '#fbbf24' }}> $124T wealth transfer</strong> as 
        <strong style={{ color: '#f97316' }}> 46% of HNWIs</strong> switch advisors
      </p>
      
      {/* Key metrics in 2x2 grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem' }}>
        <motion.div 
          className="metric-card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          style={{ textAlign: 'center', padding: '1rem', background: 'rgba(59, 130, 246, 0.2)', borderRadius: pxToRem(12) }}
        >
          <Icon type="trophy" size={32} gradient="from-blue-400 to-cyan-400" variant="inline" />
          <AnimatedCounter end={toFiniteNumber(93)} duration={2} delay={0.8} suffix="%" style={{ fontSize: '1.6rem' }} />
          <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '0.3rem' }}>AI Outperformance</p>
          <p style={{ fontSize: '0.8rem', color: '#60a5fa' }}>Stanford Study</p>
        </motion.div>
        
        <motion.div 
          className="metric-card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          style={{ textAlign: 'center', padding: '1rem', background: 'rgba(34, 197, 94, 0.2)', borderRadius: pxToRem(12) }}
        >
          <Icon type="trending" size={32} gradient="from-green-400 to-emerald-400" variant="inline" />
          <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#4ade80' }}>$5T</p>
          <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '0.3rem' }}>India Gateway TAM</p>
          <p style={{ fontSize: '0.8rem', color: '#86efac' }}>GIFT City Access</p>
        </motion.div>
        
        <motion.div 
          className="metric-card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          style={{ textAlign: 'center', padding: '1rem', background: 'rgba(20, 184, 166, 0.2)', borderRadius: pxToRem(12) }}
        >
          <Icon type="users" size={32} gradient="from-teal-400 to-green-400" variant="inline" />
          <AnimatedCounter end={toFiniteNumber(46)} duration={2} delay={1} suffix="%" style={{ fontSize: '1.6rem' }} />
          <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '0.3rem' }}>Switching Advisors</p>
          <p style={{ fontSize: '0.8rem', color: '#5eead4' }}>Next 24 months</p>
        </motion.div>
        
        <motion.div 
          className="metric-card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
          style={{ textAlign: 'center', padding: '1rem', background: 'rgba(251, 191, 36, 0.2)', borderRadius: pxToRem(12) }}
        >
          <Icon type="barChart" size={32} gradient="from-yellow-400 to-orange-400" variant="inline" />
          <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#fbbf24' }}>+1.8%</p>
          <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '0.3rem' }}>Tax Alpha Daily</p>
          <p style={{ fontSize: '0.8rem', color: '#fde047' }}>vs Annual TLH</p>
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
      <h3 style={{ color: '#22c55e', fontSize: '1.2rem', marginBottom: '1rem' }}>Our Solution</h3>
      <div style={{ display: 'grid', gap: '0.8rem' }}>
        <div style={{ padding: '1rem', background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(124, 58, 237, 0.1))', borderRadius: pxToRem(12), borderLeft: `${pxToRem(3)} solid #9333ea` }}>
          <strong className="icon-label icon-heading" style={{ color: '#c084fc', fontSize: '1rem' }}>
            <Icon type="bot" size={22} variant="inline" gradient="from-purple-400 to-pink-400" />
            Agentic AI
          </strong>
          <p style={{ fontSize: '0.9rem', color: '#e2e8f0', marginTop: '0.3rem' }}>68+ specialized agents working 24/7 across investment, tax, and operations</p>
        </div>
        <div style={{ padding: '1rem', background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(219, 39, 119, 0.1))', borderRadius: pxToRem(12), borderLeft: `${pxToRem(3)} solid #ec4899` }}>
          <strong className="icon-label icon-heading" style={{ color: '#f9a8d4', fontSize: '1rem' }}>
            <Icon type="lock" size={22} variant="inline" gradient="from-red-400 to-pink-400" />
            Triple Lock Moat
          </strong>
          <p style={{ fontSize: '0.9rem', color: '#e2e8f0', marginTop: '0.3rem' }}>Technical superiority + GIFT City exclusive + Trust via real performance</p>
        </div>
        <div style={{ padding: '1rem', background: 'linear-gradient(135deg, rgba(251, 146, 60, 0.1), rgba(249, 115, 22, 0.1))', borderRadius: pxToRem(12), borderLeft: `${pxToRem(3)} solid #fb923c` }}>
          <strong className="icon-label icon-heading" style={{ color: '#fdba74', fontSize: '1rem' }}>
            <Icon type="rocket" size={22} variant="inline" gradient="from-orange-400 to-amber-400" />
            100% Live
          </strong>
          <p style={{ fontSize: '0.9rem', color: '#e2e8f0', marginTop: '0.3rem' }}>Operational with real portfolios, $42M AUM, 27 HNW clients</p>
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
        padding: '1.25rem',
        borderRadius: pxToRem(12),
        marginTop: '1rem'
      }}
    >
      <h3 className="icon-label icon-heading" style={{ color: '#fbbf24', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
        <Icon type="gem" size={22} variant="inline" gradient="from-blue-400 to-cyan-400" />
        The Ask
      </h3>
      <div style={{ fontSize: '1.1rem', color: '#e2e8f0', fontWeight: 'bold', marginBottom: '0.5rem' }}>
        $10M Series A
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.9rem' }}>
        <div>
          <strong style={{ color: '#fbbf24' }}>Use of Funds:</strong>
          <ul style={{ color: '#e2e8f0', marginTop: '0.3rem', paddingLeft: '1.2rem', margin: 0 }}>
            <li>Technology scaling</li>
            <li>US market entry</li>
            <li>Team expansion</li>
          </ul>
        </div>
        <div>
          <strong style={{ color: '#fbbf24' }}>Returns:</strong>
          <ul style={{ color: '#e2e8f0', marginTop: '0.3rem', paddingLeft: '1.2rem', margin: 0 }}>
            <li>$5B AUM by Year 5</li>
            <li>70% EBITDA margins</li>
            <li>100x potential exit</li>
          </ul>
        </div>
      </div>
    </motion.div>
  )

  return (
    <div style={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      '& .data-grid': { alignItems: 'center' }
    }}>
      <style>{`
        .executive-summary-slide .data-grid {
          align-items: center !important;
        }
        .executive-summary-slide .data-visual,
        .executive-summary-slide .data-insights {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      `}</style>
      <div className="executive-summary-slide" style={{ height: '100%' }}>
        <DataSlideLayout
          title={title}
          mainVisual={mainVisual}
          keyInsights={keyInsights}
          supportingData={supportingData}
        />
      </div>
    </div>
  )
}