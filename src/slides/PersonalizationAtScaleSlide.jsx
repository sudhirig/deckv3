import { motion } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import AnimatedCounter from '../components/AnimatedCounter'
import { Users, Brain, Target, Sparkles } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function PersonalizationAtScaleSlide() {
  const title = (
    <GradientText gradient="from-teal-400 to-cyan-400">
      Personalization at Scale
    </GradientText>
  )

  const metrics = [
    {
      icon: Users,
      value: 10000,
      suffix: '',
      label: 'Unique Client Strategies',
      color: '#14b8a6',
      description: '10,000 clients get 10,000 completely unique strategies - not segments, but true 1-to-1 personalization'
    },
    {
      icon: Brain,
      value: 5,
      suffix: ' vs ∞',
      label: 'Model Portfolios',
      color: '#06b6d4',
      description: 'Human advisors: 5 model portfolios. ARIA: Infinite variations based on exact situations'
    },
    {
      icon: Sparkles,
      value: 100,
      suffix: '%',
      label: 'Customization Depth',
      color: '#10b981',
      description: 'Each client\'s tax situation, risk tolerance, time horizon generates completely customized approach'
    }
  ]

  const mainVisual = (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Main Statement */}
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <h2 style={{ 
          fontSize: '1.8rem', 
          fontWeight: '700',
          background: 'linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '0.5rem'
        }}>
          10,000 Clients = 10,000 Unique Strategies
        </h2>
        <p style={{ fontSize: '1rem', color: '#94a3b8', fontWeight: '600' }}>
          This level of personalization is impossible without AI
        </p>
      </div>

      {/* Comparison Visual */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '1.5rem',
        flex: 1 
      }}>
        {/* Traditional Approach */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
            borderRadius: '12px',
            padding: '1.5rem',
            border: '1px solid #475569',
            position: 'relative'
          }}
        >
          <h3 style={{ 
            fontSize: '1.1rem', 
            fontWeight: '600',
            color: '#f87171',
            marginBottom: '1rem'
          }}>
            Traditional Advisors
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#ef4444', fontSize: '1.2rem' }}>×</span>
              <span style={{ color: '#94a3b8' }}>5 Model Portfolios</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#ef4444', fontSize: '1.2rem' }}>×</span>
              <span style={{ color: '#94a3b8' }}>Quarterly Reviews</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#ef4444', fontSize: '1.2rem' }}>×</span>
              <span style={{ color: '#94a3b8' }}>Generic Allocations</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#ef4444', fontSize: '1.2rem' }}>×</span>
              <span style={{ color: '#94a3b8' }}>Manual Adjustments</span>
            </div>
          </div>
          <div style={{ 
            position: 'absolute',
            bottom: '1rem',
            left: '1rem',
            right: '1rem',
            fontSize: '0.9rem',
            color: '#64748b',
            fontStyle: 'italic'
          }}>
            "Best fit" approach
          </div>
        </motion.div>

        {/* ARIA Approach */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            background: 'linear-gradient(135deg, #0f766e 0%, #0891b2 100%)',
            borderRadius: '12px',
            padding: '1.5rem',
            border: '1px solid #14b8a6',
            position: 'relative'
          }}
        >
          <h3 style={{ 
            fontSize: '1.1rem', 
            fontWeight: '600',
            color: '#5eead4',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            ARIA AI CEO
            <Sparkles size={16} color="#5eead4" />
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#5eead4', fontSize: '1.2rem' }}>✓</span>
              <span style={{ color: '#e2e8f0' }}>Infinite Variations</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#5eead4', fontSize: '1.2rem' }}>✓</span>
              <span style={{ color: '#e2e8f0' }}>Real-Time Optimization</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#5eead4', fontSize: '1.2rem' }}>✓</span>
              <span style={{ color: '#e2e8f0' }}>Exact Goal Mapping</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#5eead4', fontSize: '1.2rem' }}>✓</span>
              <span style={{ color: '#e2e8f0' }}>AI-Driven Precision</span>
            </div>
          </div>
          <div style={{ 
            position: 'absolute',
            bottom: '1rem',
            left: '1rem',
            right: '1rem',
            fontSize: '0.9rem',
            color: '#a7f3d0',
            fontStyle: 'italic'
          }}>
            True 1-to-1 at scale
          </div>
        </motion.div>
      </div>

      {/* Personalization Factors */}
      <div style={{ marginTop: '1rem' }}>
        <h4 style={{ 
          fontSize: '0.9rem', 
          color: '#64748b',
          marginBottom: '0.5rem',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          Personalization Factors
        </h4>
        <div style={{ 
          display: 'flex', 
          gap: '0.5rem',
          flexWrap: 'wrap'
        }}>
          {['Tax Situation', 'Risk Profile', 'Time Horizon', 'Life Goals', 'Cash Flow', 'Estate Plans', 'Geographic Exposure', 'Alternative Access'].map((factor, idx) => (
            <motion.div
              key={factor}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + idx * 0.05 }}
              style={{
                background: 'rgba(20, 184, 166, 0.1)',
                border: '1px solid rgba(20, 184, 166, 0.3)',
                borderRadius: '6px',
                padding: '0.25rem 0.75rem',
                fontSize: '0.85rem',
                color: '#5eead4'
              }}
            >
              {factor}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Statement */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        style={{ 
          textAlign: 'center',
          padding: '1rem',
          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)',
          borderRadius: '8px',
          border: '1px solid rgba(20, 184, 166, 0.3)'
        }}
      >
        <p style={{ 
          fontSize: '1.1rem', 
          fontWeight: '600',
          color: '#e2e8f0' 
        }}>
          Every portfolio as unique as its owner
        </p>
      </motion.div>
    </div>
  )

  return (
    <DataSlideLayout
      title={title}
      mainVisual={mainVisual}
      metrics={metrics}
    />
  )
}
