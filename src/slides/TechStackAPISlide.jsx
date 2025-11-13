import { motion } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { Code, Link, Server, Layers } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function TechStackAPISlide() {
  const title = (
    <GradientText gradient="from-cyan-400 to-blue-400">
      Our Tech Stack & API-First Design
    </GradientText>
  )

  const frontendStack = [
    'React 18 + TypeScript',
    'Tailwind CSS + Shadcn UI',
    'Recharts for data viz',
    'Mobile-first responsive',
    'Dark mode optimized'
  ]

  const backendStack = [
    'Node.js + Express.js',
    'FastAPI for ML services',
    'LangGraph agent orchestration',
    'Multi-LLM integration (GPT-4, Claude, Gemini)',
    'WebSockets for real-time'
  ]

  const brokers = [
    { name: 'Interactive Brokers', color: '#3b82f6' },
    { name: 'Alpaca Markets', color: '#10b981' },
    { name: 'TD Ameritrade', color: '#8b5cf6' }
  ]

  const mainVisual = (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '1rem' }}>
      
      {/* Header Row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        {/* Production-Grade Stack */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}
        >
          <Code size={28} color="#14b8a6" />
          <div>
            <h3 style={{ fontSize: '1.2rem', color: '#e2e8f0', fontWeight: 'bold' }}>
              Production-Grade Stack
            </h3>
          </div>
        </motion.div>

        {/* Built for Integration */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}
        >
          <Link size={28} color="#3b82f6" />
          <div>
            <h3 style={{ fontSize: '1.2rem', color: '#e2e8f0', fontWeight: 'bold' }}>
              Built for Integration
            </h3>
          </div>
        </motion.div>
      </div>

      {/* Tech Stack Details */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', flex: 1 }}>
        {/* Frontend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(20, 184, 166, 0.05))',
            border: '1px solid rgba(20, 184, 166, 0.3)',
            borderRadius: pxToRem(12),
            padding: '1rem'
          }}
        >
          <h4 style={{ color: '#14b8a6', fontSize: '1rem', marginBottom: '0.75rem', fontWeight: 'bold' }}>
            Frontend
          </h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {frontendStack.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.5rem',
                  fontSize: '0.9rem',
                  color: '#e2e8f0'
                }}
              >
                <span style={{ color: '#14b8a6' }}>▪</span>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Backend & AI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05))',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            borderRadius: pxToRem(12),
            padding: '1rem'
          }}
        >
          <h4 style={{ color: '#3b82f6', fontSize: '1rem', marginBottom: '0.75rem', fontWeight: 'bold' }}>
            Backend & AI
          </h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {backendStack.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.5rem',
                  fontSize: '0.9rem',
                  color: '#e2e8f0'
                }}
              >
                <span style={{ color: '#3b82f6' }}>▪</span>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Integration Diagram */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        style={{
          background: 'linear-gradient(135deg, rgba(30, 30, 30, 0.5), rgba(30, 30, 30, 0.3))',
          borderRadius: pxToRem(12),
          padding: '1.5rem',
          position: 'relative'
        }}
      >
        {/* Connection Lines */}
        <svg style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none'
        }}>
          {brokers.map((broker, i) => (
            <motion.line
              key={broker.name}
              x1="15%"
              y1="50%"
              x2={`${55 + i * 15}%`}
              y2="50%"
              stroke={broker.color}
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1 + i * 0.2, duration: 1 }}
            />
          ))}
        </svg>

        {/* ARIA Core */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.9 }}
            style={{
              width: '140px',
              padding: '1rem',
              background: 'linear-gradient(135deg, #14b8a6, #22d3ee)',
              borderRadius: pxToRem(8),
              textAlign: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.1rem'
            }}
          >
            ARIA
          </motion.div>

          {/* Broker Integrations */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            {brokers.map((broker, i) => (
              <motion.div
                key={broker.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + i * 0.1 }}
                style={{
                  padding: '0.75rem 1rem',
                  background: `${broker.color}20`,
                  border: `1px solid ${broker.color}`,
                  borderRadius: pxToRem(8),
                  color: '#e2e8f0',
                  fontSize: '0.85rem'
                }}
              >
                {broker.name}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Messages */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{
            marginTop: '1.5rem',
            padding: '1rem',
            background: 'rgba(0, 0, 0, 0.3)',
            borderRadius: pxToRem(8),
            textAlign: 'center'
          }}
        >
          <h4 style={{ color: '#fbbf24', fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            We Are Not a Brokerage
          </h4>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
            <p style={{ fontSize: '0.9rem', color: '#e2e8f0' }}>
              ▪ Pure-play AI intelligence layer
            </p>
            <p style={{ fontSize: '0.9rem', color: '#e2e8f0' }}>
              ▪ Plug into existing infrastructure
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )

  return <DataSlideLayout title={title} mainVisual={mainVisual} />
}
