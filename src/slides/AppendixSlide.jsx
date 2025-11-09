import { motion } from 'framer-motion'
import { GridLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import './SlideStyles.css'

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
    <div key={index} style={{ textAlign: 'center', padding: '1.5rem' }}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 + index * 0.1, type: 'spring' }}
        style={{
          width: '3rem',
          height: '3rem',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.2), rgba(20, 184, 166, 0.1))',
          border: '0.125rem solid rgba(20, 184, 166, 0.3)',
          margin: '0 auto 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#14b8a6'
        }}
      >
        {index + 1}
      </motion.div>
      <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: '1.6' }}>
        {item}
      </p>
    </div>
  ))

  const summary = (
    <div style={{ marginTop: '2.5rem', padding: '2rem', background: 'rgba(20, 184, 166, 0.1)', borderRadius: '1rem', border: '0.125rem solid rgba(20, 184, 166, 0.3)' }}>
      <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#14b8a6', marginBottom: '1rem' }}>Thank You</p>
      <p style={{ fontSize: '1.3rem', color: '#e2e8f0' }}>Questions & Discussion</p>
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
