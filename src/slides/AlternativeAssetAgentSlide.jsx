import { motion } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { FileText, BarChart3, TrendingUp } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function AlternativeAssetAgentSlide() {
  const title = (
    <GradientText gradient="from-cyan-400 to-purple-400">
      Our "Alternative Asset" Agent: AI Due Diligence
    </GradientText>
  )

  const solutions = [
    {
      icon: FileText,
      title: 'Reads & Synthesizes',
      detail: 'Ingests 100+ page offering docs, extracts key data'
    },
    {
      icon: BarChart3,
      title: 'Generates 1-Page Memos',
      detail: 'Overview, terms, risks, suitability in digestible format'
    },
    {
      icon: TrendingUp,
      title: 'Tracks Performance',
      detail: 'Ongoing monitoring and portfolio integration'
    }
  ]

  const mainVisual = (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '1rem', padding: '0.5rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: '1.3rem', color: '#e2e8f0', marginBottom: '0.5rem' }}>
            Unlocking Private Markets
          </h2>
          
          {/* The Problem */}
          <div style={{
            padding: '0.75rem',
            background: 'linear-gradient(135deg, rgba(127, 29, 29, 0.2), rgba(127, 29, 29, 0.1))',
            borderRadius: pxToRem(8),
            marginBottom: '0.75rem'
          }}>
            <h3 style={{ fontSize: '0.95rem', color: '#ef4444', marginBottom: '0.3rem', fontWeight: 'bold' }}>
              The Problem
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#fca5a5', lineHeight: '1.4' }}>
              80% of alternative investment data is trapped in 100-page PDFs. Traditional due diligence requires expensive analyst teams.
            </p>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '1.5rem', flex: 1 }}>
        {/* Left Side - Our Solution */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 style={{ fontSize: '1.1rem', color: '#e2e8f0', marginBottom: '1rem', fontWeight: 'bold' }}>
            Our AI Solution
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {solutions.map((solution, i) => {
              const Icon = solution.icon
              return (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  style={{
                    display: 'flex',
                    gap: '0.75rem',
                    padding: '0.75rem',
                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.05))',
                    borderRadius: pxToRem(8),
                    borderLeft: '3px solid #8b5cf6'
                  }}
                >
                  <Icon size={24} color="#8b5cf6" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.9rem', color: '#e2e8f0', fontWeight: 'bold', marginBottom: '0.2rem' }}>
                      {solution.title}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                      {solution.detail}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Right Side - AI Deal Memo Example */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          style={{
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(139, 92, 246, 0.1))',
            border: '2px solid rgba(139, 92, 246, 0.4)',
            borderRadius: pxToRem(16),
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <h3 style={{
            fontSize: '1rem',
            color: '#e2e8f0',
            marginBottom: '0.75rem',
            fontWeight: 'bold'
          }}>
            AI Deal Memo Example
          </h3>
          
          {/* Terminal-style Memo */}
          <div style={{
            background: 'rgba(0, 0, 0, 0.6)',
            borderRadius: pxToRem(8),
            padding: '1rem',
            fontFamily: 'monospace',
            fontSize: '0.85rem',
            flex: 1
          }}>
            <div style={{ color: '#e2e8f0', marginBottom: '0.75rem', fontSize: '1.1rem', fontWeight: 'bold' }}>
              Acme Private Credit Fund IV
            </div>
            
            <div style={{ marginBottom: '0.5rem' }}>
              <span style={{ color: '#94a3b8' }}>Overview</span>
            </div>
            <div style={{ color: '#e2e8f0', marginBottom: '0.3rem' }}>
              Direct Lending Strategy
            </div>
            <div style={{ color: '#94a3b8', fontSize: '0.8rem', marginBottom: '0.75rem' }}>
              Target IRR: 12-14% | Term: 7 years | Min: $250K
            </div>
            
            <div style={{ marginBottom: '0.5rem' }}>
              <span style={{ color: '#94a3b8' }}>Terms</span>
            </div>
            <div style={{ color: '#e2e8f0', fontSize: '0.8rem', marginBottom: '0.3rem' }}>
              Management Fee: 1.5% | Performance: 20%
            </div>
            <div style={{ color: '#e2e8f0', fontSize: '0.8rem', marginBottom: '0.75rem' }}>
              Quarterly distributions
            </div>
            
            <div style={{ marginBottom: '0.5rem' }}>
              <span style={{ color: '#94a3b8' }}>Risk Assessment</span>
            </div>
            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem' }}>
              <div>
                <span style={{ color: '#94a3b8' }}>Credit Risk: </span>
                <span style={{ color: '#fbbf24' }}>▲ Medium</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem' }}>
              <div>
                <span style={{ color: '#94a3b8' }}>Market Risk: </span>
                <span style={{ color: '#22c55e' }}>✓ Low</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
              <div>
                <span style={{ color: '#94a3b8' }}>Liquidity: </span>
                <span style={{ color: '#fbbf24' }}>▲ High</span>
              </div>
            </div>

            {/* Decision Bar */}
            <div style={{
              padding: '0.5rem',
              background: 'rgba(34, 197, 94, 0.2)',
              border: '1px solid rgba(34, 197, 94, 0.5)',
              borderRadius: pxToRem(4),
              textAlign: 'center',
              marginTop: '0.5rem'
            }}>
              <span style={{ color: '#22c55e', fontWeight: 'bold' }}>✓ SUITABLE</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Stat */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        style={{
          padding: '0.75rem',
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(139, 92, 246, 0.1))',
          borderRadius: pxToRem(12),
          border: '1px solid rgba(139, 92, 246, 0.3)',
          textAlign: 'center'
        }}
      >
        <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#a78bfa' }}>16,000+ funds analyzed</span>
        <span style={{ fontSize: '0.9rem', color: '#94a3b8', marginLeft: '1rem' }}>
          • +300-500bps potential alpha
        </span>
      </motion.div>
    </div>
  )

  return <DataSlideLayout title={title} mainVisual={mainVisual} />
}
