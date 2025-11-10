import { motion } from 'framer-motion'
import { GridLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import './SlideStyles.css'
import { pxToRem, TYPOGRAPHY } from '../utils/responsive'

export default function AppendixSlide() {
  const appendixItems = [
    'Additional Personas & Detailed Case Studies',
    'Technical Architecture Deep Dive',
    'Competitive Analysis Matrix',
    'Financial Model & Projections',
    'Regulatory Compliance Documentation',
    'GIFT City Integration Roadmap',
    'AI Agent Training Methodology'
  ]

  const cards = appendixItems.map((item, index) => (
    <div key={index} style={{ textAlign: 'center', padding: pxToRem(24) }}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 + index * 0.1, type: 'spring' }}
        style={{
          width: pxToRem(48),
          height: pxToRem(48),
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.2), rgba(20, 184, 166, 0.1))',
          border: `${pxToRem(2)} solid rgba(20, 184, 166, 0.3)`,
          margin: `0 auto ${pxToRem(16)}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: pxToRem(24),
          fontWeight: 'bold',
          color: '#14b8a6'
        }}
      >
        {index + 1}
      </motion.div>
      <p style={{ fontSize: pxToRem(17.6), color: '#94a3b8', lineHeight: '1.6' }}>
        {item}
      </p>
    </div>
  ))

  const summary = (
    <div style={{ marginTop: pxToRem(40), padding: pxToRem(32), background: 'rgba(20, 184, 166, 0.1)', borderRadius: pxToRem(16), border: `${pxToRem(2)} solid rgba(20, 184, 166, 0.3)` }}>
      <p style={{ fontSize: TYPOGRAPHY.subheadline, fontWeight: 'bold', color: '#14b8a6', marginBottom: pxToRem(16) }}>Thank You</p>
      <p style={{ fontSize: pxToRem(20.8), color: '#e2e8f0' }}>Questions & Discussion</p>
    </div>
  )

  return (
    <GridLayout 
      title={<GradientText gradient="from-teal-400 to-cyan-400">Appendix</GradientText>}
      cards={cards}
      columns={3}
      summary={summary}
    />
  )
}
