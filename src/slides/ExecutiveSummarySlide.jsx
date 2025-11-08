import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import AnimatedCounter from '../components/AnimatedCounter'
import GradientText from '../components/GradientText'
import Icon from '../components/Icon'
import './SlideStyles.css'

export default function ExecutiveSummarySlide() {
  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card"
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <AnimatedText delay={0.2}>
          <h2 className="slide-title" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
            <GradientText gradient="from-teal-400 to-cyan-400">
              Executive Summary
            </GradientText>
          </h2>
        </AnimatedText>
        
        {/* Investment Thesis */}
        <AnimatedText delay={0.4}>
          <div style={{ 
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(6, 182, 212, 0.15))', 
            padding: '1.5rem', 
            borderRadius: '12px', 
            marginBottom: '2rem',
            border: '1px solid rgba(20, 184, 166, 0.3)'
          }}>
            <h3 style={{ color: '#14b8a6', fontSize: '1.3rem', marginBottom: '0.5rem' }}>The Opportunity</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              <strong style={{ color: '#5eead4' }}>AI-powered wealth management</strong> capturing the 
              <strong style={{ color: '#fbbf24' }}> $124T wealth transfer</strong> as 
              <strong style={{ color: '#f97316' }}> 46% of HNWIs</strong> switch advisors
            </p>
          </div>
        </AnimatedText>

        {/* Key Metrics Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
          <motion.div 
            className="metric-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '12px' }}
          >
            <Icon type="trophy" size={30} gradient="from-blue-400 to-cyan-400" />
            <AnimatedCounter end={93} duration={2} delay={0.8} suffix="%" />
            <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginTop: '0.5rem' }}>AI Outperformance</p>
            <p style={{ fontSize: '0.8rem', color: '#60a5fa' }}>Stanford Study</p>
          </motion.div>
          
          <motion.div 
            className="metric-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '12px' }}
          >
            <Icon type="trending" size={30} gradient="from-green-400 to-emerald-400" />
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4ade80' }}>$5T</p>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginTop: '0.5rem' }}>India Gateway TAM</p>
            <p style={{ fontSize: '0.8rem', color: '#86efac' }}>GIFT City Access</p>
          </motion.div>
          
          <motion.div 
            className="metric-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(20, 184, 166, 0.1)', borderRadius: '12px' }}
          >
            <Icon type="users" size={30} gradient="from-teal-400 to-green-400" />
            <AnimatedCounter end={46} duration={2} delay={1} suffix="%" />
            <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginTop: '0.5rem' }}>Switching Advisors</p>
            <p style={{ fontSize: '0.8rem', color: '#5eead4' }}>Next 24 months</p>
          </motion.div>
          
          <motion.div 
            className="metric-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
            style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(251, 191, 36, 0.1)', borderRadius: '12px' }}
          >
            <Icon type="barChart" size={30} gradient="from-yellow-400 to-orange-400" />
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fbbf24' }}>+1.8%</p>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginTop: '0.5rem' }}>Tax Alpha Daily</p>
            <p style={{ fontSize: '0.8rem', color: '#fde047' }}>vs Annual TLH</p>
          </motion.div>
        </div>

        {/* Our Solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          style={{ marginBottom: '2rem' }}
        >
          <h3 style={{ color: '#22c55e', fontSize: '1.3rem', marginBottom: '1rem' }}>Our Solution</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            <div style={{ padding: '1rem', background: 'rgba(147, 51, 234, 0.1)', borderRadius: '8px' }}>
              <strong style={{ color: '#c084fc' }}>Agentic AI</strong>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginTop: '0.5rem' }}>20+ specialized agents working 24/7</p>
            </div>
            <div style={{ padding: '1rem', background: 'rgba(236, 72, 153, 0.1)', borderRadius: '8px' }}>
              <strong style={{ color: '#f9a8d4' }}>Triple Lock Moat</strong>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginTop: '0.5rem' }}>Technical + Regulatory + Trust</p>
            </div>
            <div style={{ padding: '1rem', background: 'rgba(251, 146, 60, 0.1)', borderRadius: '8px' }}>
              <strong style={{ color: '#fdba74' }}>100% Live</strong>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginTop: '0.5rem' }}>Operational with real portfolios</p>
            </div>
          </div>
        </motion.div>

        {/* The Ask */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4 }}
          style={{ 
            background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2))', 
            padding: '1.5rem', 
            borderRadius: '12px',
            border: '2px solid rgba(147, 51, 234, 0.3)',
            textAlign: 'center'
          }}
        >
          <h3 style={{ color: '#c084fc', fontSize: '1.5rem', marginBottom: '0.5rem' }}>The Ask</h3>
          <p style={{ fontSize: '1.3rem', color: '#e2e8f0' }}>
            <strong>$5M Seed</strong> to scale to <strong>$1B AUM</strong> in 36 months
          </p>
          <p style={{ fontSize: '1rem', color: '#94a3b8', marginTop: '0.5rem' }}>
            18-month runway • US market entry • GIFT City gateway operational
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}