import { motion } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { Target, Terminal, Briefcase } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function AIEquityAgentSlide() {
  const title = (
    <GradientText gradient="from-cyan-400 to-purple-400">
      Roadmap: The AI Equity Agent
    </GradientText>
  )

  const painPoints = [
    'Executives with $5M+ in company stock',
    'Founders post-IPO lockup',
    'Inherited concentrated positions',
    'Fear of "market timing" mistake',
    'Tax implications paralyze decisions'
  ]

  const useCaseExample = {
    query: '"Analyze my $5M position in AAPL. Recommend a tax-efficient diversification plan and income generation strategy."',
    analysis: {
      'Stock Analysis': {
        'Current Price': '$182.50',
        'Your Position': '27,397 shares ($5M)',
        'Cost Basis': '$95/share',
        'Unrealized Gain': '$2.4M (92% gain)'
      },
      'Scores': {
        'Fundamental Score': '8.5/10 (Strong)',
        'Technical Score': '7.2/10 (Bullish)',
        'Sentiment Score': '8.1/10 (Positive)'
      }
    },
    recommendation: 'PHASED DIVERSIFICATION'
  }

  const mainVisual = (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '1rem' }}>
      {/* Header with Target Icon */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}
      >
        <div style={{
          width: '48px',
          height: '48px',
          background: 'linear-gradient(135deg, #ef4444, #dc2626)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Target size={28} color="white" />
        </div>
        <div>
          <h2 style={{ fontSize: '1.4rem', color: '#ef4444', fontWeight: 'bold' }}>
            Solving "Concentrated Stock"
          </h2>
          <p style={{ fontSize: '1rem', color: '#94a3b8' }}>
            The Massive HNW Pain Point
          </p>
        </div>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '1.5rem', flex: 1 }}>
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Pain Points */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.05))',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              borderRadius: pxToRem(12),
              padding: '1rem',
              flex: 1
            }}
          >
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {painPoints.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.5rem',
                    marginBottom: '0.6rem',
                    fontSize: '0.9rem',
                    color: '#e2e8f0'
                  }}
                >
                  <span style={{ color: '#ef4444', marginTop: '2px' }}>▪</span>
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Our AI Equity Agent */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.1))',
              border: '2px solid rgba(59, 130, 246, 0.5)',
              borderRadius: pxToRem(12),
              padding: '1rem'
            }}
          >
            <h3 style={{ fontSize: '1.1rem', color: '#3b82f6', marginBottom: '0.75rem', fontWeight: 'bold' }}>
              Our AI Equity Agent
            </h3>
            
            <div style={{
              padding: '0.75rem',
              background: 'rgba(0, 0, 0, 0.3)',
              borderRadius: pxToRem(8),
              borderLeft: '3px solid #3b82f6'
            }}>
              <h4 style={{ color: '#60a5fa', fontSize: '0.95rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Fundamental Agent
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: '1.4' }}>
                Analyzes balance sheets, cash flows, competitive moats, management quality
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Use Case Example */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(20, 184, 166, 0.05))',
            border: '2px solid rgba(20, 184, 166, 0.3)',
            borderRadius: pxToRem(16),
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {/* Terminal Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '0.75rem',
            paddingBottom: '0.5rem',
            borderBottom: '1px solid rgba(20, 184, 166, 0.2)'
          }}>
            <Briefcase size={20} color="#14b8a6" />
            <h3 style={{ fontSize: '1.1rem', color: '#14b8a6', fontWeight: 'bold' }}>
              Use Case Example
            </h3>
          </div>

          {/* Terminal-like Display */}
          <div style={{
            background: 'rgba(0, 0, 0, 0.5)',
            borderRadius: pxToRem(8),
            padding: '1rem',
            fontFamily: 'monospace',
            fontSize: '0.85rem',
            flex: 1,
            overflow: 'auto'
          }}>
            {/* Query */}
            <div style={{ marginBottom: '1rem' }}>
              <span style={{ color: '#64748b' }}>Query:</span>
              <div style={{ color: '#22d3ee', marginTop: '0.25rem' }}>
                {useCaseExample.query}
              </div>
            </div>

            {/* AI Response */}
            <div>
              <span style={{ color: '#64748b' }}>AI Response:</span>
              <div style={{ marginTop: '0.5rem' }}>
                {/* Stock Analysis */}
                <div style={{ marginBottom: '0.75rem' }}>
                  <div style={{ color: '#fbbf24', marginBottom: '0.25rem' }}>Stock Analysis: AAPL</div>
                  {Object.entries(useCaseExample.analysis['Stock Analysis']).map(([key, value]) => (
                    <div key={key} style={{ color: '#94a3b8', paddingLeft: '1rem', fontSize: '0.8rem' }}>
                      {key}: <span style={{ color: '#e2e8f0' }}>{value}</span>
                    </div>
                  ))}
                </div>

                {/* Scores */}
                <div style={{ marginBottom: '0.75rem' }}>
                  {Object.entries(useCaseExample.analysis.Scores).map(([key, value]) => (
                    <div key={key} style={{ color: '#94a3b8', paddingLeft: '1rem', fontSize: '0.8rem' }}>
                      {key}: <span style={{ color: '#e2e8f0' }}>{value}</span>
                    </div>
                  ))}
                </div>

                {/* Recommendation */}
                <div style={{
                  marginTop: '1rem',
                  padding: '0.5rem',
                  background: 'rgba(34, 197, 94, 0.2)',
                  border: '1px solid rgba(34, 197, 94, 0.5)',
                  borderRadius: pxToRem(4)
                }}>
                  <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>Recommendation</div>
                  <div style={{ color: '#22c55e', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span>✅</span> {useCaseExample.recommendation}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )

  return <DataSlideLayout title={title} mainVisual={mainVisual} />
}
