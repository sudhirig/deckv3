import { motion } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { Eye, CheckCircle, TrendingUp, Shield, AlertCircle } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function GlassBoxAISlide() {
  const title = (
    <GradientText gradient="from-cyan-400 to-blue-400">
      Glass Box AI - Full Transparency
    </GradientText>
  )

  const decisions = [
    {
      time: '10:32 AM',
      agent: 'TAX AGENT',
      message: 'Detected ₹10L loss in NVDA',
      detail: 'Harvesting to offset gains',
      confidence: 92,
      icon: TrendingUp,
      color: '#10b981',
      status: 'approved'
    },
    {
      time: '10:33 AM',
      agent: 'RISK AGENT',
      message: 'Portfolio drift: 2.3%',
      detail: 'Rebalancing recommended',
      confidence: 87,
      icon: Shield,
      color: '#ef4444',
      status: 'pending'
    },
    {
      time: '10:34 AM',
      agent: 'MARKET AGENT',
      message: 'Bullish signal on AAPL',
      detail: 'Based on 1,247 data points',
      confidence: 78,
      icon: TrendingUp,
      color: '#3b82f6',
      status: 'review'
    }
  ]

  const trustMetrics = [
    { label: '100% Explainable', icon: Eye },
    { label: 'Full Audit Trail', icon: CheckCircle },
    { label: 'SEC/SEBI Compliant', icon: Shield },
    { label: 'No Black Box', icon: AlertCircle }
  ]

  const mainVisual = (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Subtitle */}
      <div style={{ textAlign: 'center', marginBottom: '-0.5rem' }}>
        <p style={{ fontSize: '1rem', color: '#94a3b8' }}>
          See Every Decision, Understand Every Move
        </p>
      </div>

      {/* Decision Feed Dashboard */}
      <div style={{
        flex: 1,
        background: 'rgba(0, 0, 0, 0.3)',
        border: '1px solid rgba(20, 184, 166, 0.2)',
        borderRadius: pxToRem(12),
        padding: '1rem',
        overflow: 'hidden'
      }}>
        <div style={{
          marginBottom: '1rem',
          paddingBottom: '0.75rem',
          borderBottom: '1px solid rgba(20, 184, 166, 0.2)'
        }}>
          <div style={{ 
            fontSize: '0.9rem', 
            color: '#5eead4',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              background: '#22c55e',
              borderRadius: '50%',
              animation: 'pulse 2s infinite'
            }} />
            REAL-TIME DECISION FEED
          </div>
        </div>

        {/* Decision Cards */}
        {decisions.map((decision, index) => {
          const Icon = decision.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.2 }}
              style={{
                marginBottom: '0.75rem',
                padding: '0.75rem',
                background: `linear-gradient(135deg, ${decision.color}10, transparent)`,
                border: `1px solid ${decision.color}30`,
                borderRadius: pxToRem(8),
                position: 'relative'
              }}
            >
              {/* Header */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '0.5rem'
              }}>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    background: `${decision.color}20`,
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon size={20} color={decision.color} />
                  </div>
                  <div>
                    <div style={{ 
                      fontSize: '0.7rem', 
                      color: '#64748b',
                      marginBottom: '0.2rem'
                    }}>
                      {decision.time} - {decision.agent}
                    </div>
                    <div style={{ 
                      fontSize: '0.9rem', 
                      color: '#e2e8f0',
                      fontWeight: '600'
                    }}>
                      {decision.message}
                    </div>
                    <div style={{ 
                      fontSize: '0.8rem', 
                      color: '#94a3b8',
                      marginTop: '0.2rem'
                    }}>
                      {decision.detail}
                    </div>
                  </div>
                </div>

                {/* Confidence Badge */}
                <div style={{
                  padding: '0.25rem 0.5rem',
                  background: 'rgba(251, 191, 36, 0.1)',
                  border: '1px solid rgba(251, 191, 36, 0.3)',
                  borderRadius: pxToRem(4),
                  fontSize: '0.7rem',
                  color: '#fbbf24',
                  fontWeight: 'bold'
                }}>
                  {decision.confidence}%
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ 
                display: 'flex', 
                gap: '0.5rem',
                marginTop: '0.5rem'
              }}>
                <button style={{
                  padding: '0.3rem 0.75rem',
                  background: 'rgba(20, 184, 166, 0.1)',
                  border: '1px solid rgba(20, 184, 166, 0.3)',
                  borderRadius: pxToRem(4),
                  color: '#5eead4',
                  fontSize: '0.7rem',
                  cursor: 'pointer'
                }}>
                  View Reasoning
                </button>
                <button style={{
                  padding: '0.3rem 0.75rem',
                  background: decision.status === 'approved' 
                    ? 'rgba(34, 197, 94, 0.1)' 
                    : 'rgba(59, 130, 246, 0.1)',
                  border: `1px solid ${
                    decision.status === 'approved' 
                      ? 'rgba(34, 197, 94, 0.3)' 
                      : 'rgba(59, 130, 246, 0.3)'
                  }`,
                  borderRadius: pxToRem(4),
                  color: decision.status === 'approved' ? '#22c55e' : '#60a5fa',
                  fontSize: '0.7rem',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}>
                  {decision.status === 'approved' ? '✓ Approved' : 
                   decision.status === 'pending' ? 'Execute' : 'Trade'}
                </button>
              </div>
            </motion.div>
          )
        })}

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            textAlign: 'center',
            paddingTop: '0.5rem',
            borderTop: '1px solid rgba(20, 184, 166, 0.1)'
          }}
        >
          <span style={{ 
            fontSize: '0.75rem', 
            color: '#5eead4',
            cursor: 'pointer'
          }}>
            View 47 more decisions →
          </span>
        </motion.div>
      </div>

      {/* Trust Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '0.75rem'
        }}
      >
        {trustMetrics.map((metric, index) => {
          const Icon = metric.icon
          return (
            <div
              key={metric.label}
              style={{
                padding: '0.75rem',
                background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(20, 184, 166, 0.05))',
                border: '1px solid rgba(20, 184, 166, 0.2)',
                borderRadius: pxToRem(8),
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Icon size={24} color="#14b8a6" />
              <div style={{ 
                fontSize: '0.7rem', 
                color: '#5eead4',
                fontWeight: '600',
                textAlign: 'center'
              }}>
                {metric.label}
              </div>
            </div>
          )
        })}
      </motion.div>

      {/* Key Differentiator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        style={{
          textAlign: 'center',
          padding: '0.75rem',
          background: 'linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.1), transparent)',
          borderRadius: pxToRem(8)
        }}
      >
        <p style={{ 
          fontSize: '1rem', 
          color: '#22d3ee',
          fontWeight: '600',
          fontStyle: 'italic'
        }}>
          "Every decision traceable, every action auditable"
        </p>
      </motion.div>
    </div>
  )

  return <DataSlideLayout title={title} mainVisual={mainVisual} />
}
