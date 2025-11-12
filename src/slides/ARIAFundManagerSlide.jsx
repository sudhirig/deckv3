import { motion } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { Brain, Eye, IndianRupee } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function ARIAFundManagerSlide() {
  const title = (
    <GradientText gradient="from-green-400 to-emerald-400">
      ARIA Powers the India Gateway Fund
    </GradientText>
  )

  const mainVisual = (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        style={{
          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(34, 197, 94, 0.1))',
          borderRadius: pxToRem(12),
          padding: '1.25rem',
          border: `2px solid rgba(20, 184, 166, 0.3)`
        }}
      >
        <h3 style={{ color: '#14b8a6', fontSize: '1.3rem', marginBottom: '0.75rem' }}>
          <Brain size={28} color="#14b8a6" style={{ display: 'inline', marginRight: '0.5rem' }} />
          How ARIA Manages the Vora AIF
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
          <div style={{
            textAlign: 'center',
            padding: '0.75rem',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: pxToRem(8)
          }}>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#14b8a6' }}>24/7</p>
            <p style={{ fontSize: '0.85rem', color: '#e2e8f0' }}>Market Analysis</p>
          </div>
          <div style={{
            textAlign: 'center',
            padding: '0.75rem',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: pxToRem(8)
          }}>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fbbf24' }}>500+</p>
            <p style={{ fontSize: '0.85rem', color: '#e2e8f0' }}>Stocks Tracked</p>
          </div>
          <div style={{
            textAlign: 'center',
            padding: '0.75rem',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: pxToRem(8)
          }}>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#60a5fa' }}>11ms</p>
            <p style={{ fontSize: '0.85rem', color: '#e2e8f0' }}>Decision Speed</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        style={{
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.05))',
          borderRadius: pxToRem(12),
          padding: '1.25rem'
        }}
      >
        <h3 style={{ color: '#60a5fa', fontSize: '1.15rem', marginBottom: '0.75rem' }}>
          <Eye size={24} color="#60a5fa" style={{ display: 'inline', marginRight: '0.5rem' }} />
          Transparency Dashboard
        </h3>
        <div style={{
          background: 'rgba(0, 0, 0, 0.3)',
          borderRadius: pxToRem(8),
          padding: '0.75rem',
          fontFamily: 'monospace'
        }}>
          <p style={{ color: '#4ade80', fontSize: '0.85rem' }}>
            [2025-11-13 10:32:15] ARIA DECISION LOG
          </p>
          <p style={{ color: '#e2e8f0', fontSize: '0.85rem', marginTop: '0.4rem' }}>
            → Sold: HDFC Bank (500 shares @ ₹1,612)
          </p>
          <p style={{ color: '#fbbf24', fontSize: '0.85rem' }}>
            → Reason: RSI overbought, sector rotation detected
          </p>
          <p style={{ color: '#e2e8f0', fontSize: '0.85rem', marginTop: '0.4rem' }}>
            → Bought: ICICI Bank (800 shares @ ₹982)
          </p>
          <p style={{ color: '#14b8a6', fontSize: '0.85rem' }}>
            → Reason: Better value, momentum shift positive
          </p>
        </div>
      </motion.div>
    </div>
  )

  const keyInsights = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
      style={{
        background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1), rgba(251, 191, 36, 0.05))',
        borderRadius: pxToRem(12),
        padding: '1.25rem',
        textAlign: 'center'
      }}
    >
      <IndianRupee size={40} color="#f97316" style={{ marginBottom: '1rem' }} />
      <p style={{ fontSize: '1.2rem', color: '#f97316', fontWeight: 'bold' }}>
        This is NOT a B2C Tool
      </p>
      <p style={{ fontSize: '0.95rem', color: '#e2e8f0', marginTop: '0.75rem' }}>
        ARIA is the in-house AI Fund Manager for the Vora AIF.
      </p>
      <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginTop: '0.5rem' }}>
        Clients get transparency, not control.
      </p>
    </motion.div>
  )

  return (
    <DataSlideLayout
      title={title}
      mainVisual={mainVisual}
      keyInsights={keyInsights}
    />
  )
}
