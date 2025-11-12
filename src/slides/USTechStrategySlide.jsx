import { motion } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { Eye, Play, Database, Server } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function USTechStrategySlide() {
  const title = (
    <GradientText gradient="from-blue-400 to-cyan-400">
      US Tech Strategy: "Read vs Execute"
    </GradientText>
  )

  const mainVisual = (
    <div style={{ height: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
      {/* Phase 2: READ */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        style={{
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(96, 165, 250, 0.1))',
          borderRadius: pxToRem(12),
          padding: '1.25rem',
          border: '2px solid #3b82f6'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <Eye size={28} color="#60a5fa" />
          <h3 style={{ color: '#60a5fa', fontSize: '1.25rem' }}>Phase 2: "READ"</h3>
        </div>
        <p style={{ color: '#93c5fd', fontSize: '1rem', fontWeight: 'bold' }}>Tool: Plaid API</p>
        <p style={{ color: '#e2e8f0', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
          Read-only access to any broker
        </p>
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: pxToRem(8),
          padding: '0.75rem'
        }}>
          <p style={{ color: '#fbbf24', fontSize: '0.85rem', fontWeight: 'bold' }}>
            Powers: The ARIA Data Engine
          </p>
          <ul style={{ color: '#94a3b8', fontSize: '0.8rem', paddingLeft: '1rem', marginTop: '0.4rem' }}>
            <li>See entire net worth</li>
            <li>Analyze K-1s & portfolios</li>
            <li>No trading capability</li>
          </ul>
        </div>
        <div style={{ textAlign: 'center', marginTop: '0.75rem' }}>
          <Database size={20} color="#60a5fa" />
          <p style={{ color: '#60a5fa', fontSize: '0.9rem', fontWeight: 'bold' }}>Broker-Agnostic</p>
        </div>
      </motion.div>

      {/* Phase 3: EXECUTE */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        style={{
          background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.15), rgba(236, 72, 153, 0.1))',
          borderRadius: pxToRem(12),
          padding: '1.25rem',
          border: '2px solid #9333ea'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <Play size={28} color="#a78bfa" />
          <h3 style={{ color: '#a78bfa', fontSize: '1.25rem' }}>Phase 3: "EXECUTE"</h3>
        </div>
        <p style={{ color: '#c4b5fd', fontSize: '1rem', fontWeight: 'bold' }}>Tools: Alpaca + IBKR</p>
        <p style={{ color: '#e2e8f0', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
          Direct broker integration
        </p>
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: pxToRem(8),
          padding: '0.75rem'
        }}>
          <p style={{ color: '#fbbf24', fontSize: '0.85rem', fontWeight: 'bold' }}>
            Powers: Global AI Advisor
          </p>
          <ul style={{ color: '#94a3b8', fontSize: '0.8rem', paddingLeft: '1rem', marginTop: '0.4rem' }}>
            <li>Execute trades</li>
            <li>Tax-loss harvesting</li>
            <li>Client must open account</li>
          </ul>
        </div>
        <div style={{ textAlign: 'center', marginTop: '0.75rem' }}>
          <Server size={20} color="#a78bfa" />
          <p style={{ color: '#a78bfa', fontSize: '0.9rem', fontWeight: 'bold' }}>Broker-Selective</p>
        </div>
      </motion.div>
    </div>
  )

  const keyInsights = (
    <div style={{
      background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(249, 115, 22, 0.05))',
      borderRadius: pxToRem(12),
      padding: '1.25rem',
      textAlign: 'center'
    }}>
      <p style={{ fontSize: '1rem', color: '#f59e0b', fontWeight: 'bold' }}>No Custody Risk</p>
      <p style={{ fontSize: '0.85rem', color: '#e2e8f0', marginTop: '0.4rem' }}>
        We're not a brokerage - pure AI intelligence layer
      </p>
    </div>
  )

  return <DataSlideLayout title={title} mainVisual={mainVisual} keyInsights={keyInsights} />
}
