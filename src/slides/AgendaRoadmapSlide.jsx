import { motion } from 'framer-motion'
import { GridLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { ChevronRight } from 'lucide-react'
import './SlideStyles.css'
import { pxToRem, TYPOGRAPHY } from '../utils/responsive'

export default function AgendaRoadmapSlide() {
  const roadmapSteps = [
    {
      number: '1',
      title: 'THE PROBLEM',
      subtitle: 'Why Now?',
      details: ['AI disruption', '46% switching', 'Alpha gap'],
      color: '#ef4444',
      gradient: 'from-red-400 to-orange-400'
    },
    {
      number: '2',
      title: 'THE SOLUTION',
      subtitle: 'Our AI Family Office',
      details: ['Agentic AI', 'Three alpha agents', 'Live platform'],
      color: '#14b8a6',
      gradient: 'from-teal-400 to-green-400'
    },
    {
      number: '3',
      title: 'THE PROOF',
      subtitle: 'Validation & Traction',
      details: ['Real clients', '100% operational', 'Competitive moats'],
      color: '#3b82f6',
      gradient: 'from-blue-400 to-cyan-400'
    },
    {
      number: '4',
      title: 'THE BUSINESS',
      subtitle: 'Path to $1B',
      details: ['$112T TAM', 'Unit economics', 'Expert team'],
      color: '#a78bfa',
      gradient: 'from-purple-400 to-pink-400'
    },
    {
      number: '5',
      title: 'THE ASK',
      subtitle: '$5M Seed Round',
      details: ['18-month runway', 'Scale to 1B AUM', 'Market window'],
      color: '#fbbf24',
      gradient: 'from-yellow-400 to-orange-400'
    }
  ]

  const cards = roadmapSteps.map((step, index) => (
    <div key={step.number} style={{ position: 'relative' }}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 + index * 0.15, type: 'spring', stiffness: 200 }}
        style={{
          width: pxToRem(80),
          height: pxToRem(80),
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${step.color}33, ${step.color}11)`,
          border: `${pxToRem(3)} solid ${step.color}`,
          margin: `0 auto ${pxToRem(16)}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: TYPOGRAPHY.subheadline,
          fontWeight: 'bold',
          color: step.color
        }}
      >
        {step.number}
      </motion.div>

      <h3 style={{ 
        fontSize: pxToRem(16), 
        fontWeight: 'bold',
        marginBottom: pxToRem(4.8),
        textAlign: 'center',
        background: `linear-gradient(135deg, ${step.gradient.split(' ')[1]}, ${step.gradient.split(' ')[3]})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
        {step.title}
      </h3>

      <p style={{ 
        fontSize: pxToRem(14.4), 
        color: '#94a3b8',
        marginBottom: pxToRem(8),
        textAlign: 'center'
      }}>
        {step.subtitle}
      </p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 + index * 0.1 }}
        style={{ fontSize: pxToRem(12.8), color: '#64748b', textAlign: 'center' }}
      >
        {step.details.map((detail, i) => (
          <div key={i} style={{ marginBottom: pxToRem(3.2) }}>
            • {detail}
          </div>
        ))}
      </motion.div>

      {index < roadmapSteps.length - 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            position: 'absolute',
            top: pxToRem(30),
            right: pxToRem(-20),
            color: '#64748b'
          }}
        >
          <ChevronRight size={20} />
        </motion.div>
      )}
    </div>
  ))

  const summary = (
    <motion.div
      initial={{ opacity: 0, y: pxToRem(20) }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2 }}
      style={{ 
        textAlign: 'center',
        padding: pxToRem(24),
        background: 'rgba(20, 184, 166, 0.1)',
        borderRadius: pxToRem(12),
        marginTop: pxToRem(32)
      }}
    >
      <p style={{ fontSize: pxToRem(17.6), color: '#14b8a6' }}>
        <strong>28 slides</strong> • <strong>15-minute core story</strong> • <strong>Modular deep dives available</strong>
      </p>
      <p style={{ fontSize: pxToRem(14.4), color: '#94a3b8', marginTop: pxToRem(8) }}>
        We'll focus on the areas most relevant to your interests
      </p>
    </motion.div>
  )

  return (
    <GridLayout 
      title={<GradientText gradient="from-teal-400 to-cyan-400">Your Journey Through This Deck</GradientText>}
      subtitle="A structured narrative from problem to opportunity"
      cards={cards}
      columns={5}
      summary={summary}
    />
  )
}
