import { motion } from 'framer-motion'
import { AspectFrame } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function AIInvestmentCommitteeSlide() {
  return (
    <AspectFrame>
      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem',
        gap: '1.5rem'
      }}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center' }}
        >
          <h1 style={{ fontSize: '2.8rem', fontWeight: 900, marginBottom: '0.25rem' }}>
            <GradientText gradient="from-cyan-400 to-purple-400">
              Not a Chatbot. An AI Investment Committee.
            </GradientText>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8' }}>
            How Agentic AI Changes Everything
          </p>
        </motion.div>

        {/* Models Comparison */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem'
        }}>
          {/* Old Model */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              background: 'linear-gradient(135deg, rgba(127, 29, 29, 0.2), rgba(127, 29, 29, 0.1))',
              border: '2px solid rgba(239, 68, 68, 0.4)',
              borderRadius: pxToRem(16),
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <h3 style={{
              fontSize: '1.3rem',
              color: '#ef4444',
              fontWeight: 'bold',
              marginBottom: '1.5rem'
            }}>
              The Old Model
            </h3>

            {/* Hierarchy Diagram */}
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem'
            }}>
              {/* Investor Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                style={{
                  padding: '0.75rem 2rem',
                  background: '#3b82f6',
                  borderRadius: pxToRem(8),
                  color: 'white',
                  fontWeight: 'bold'
                }}
              >
                Investor
              </motion.div>

              {/* Arrow */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                style={{ fontSize: '1.5rem', color: '#ef4444' }}
              >
                ↓
              </motion.div>

              {/* Single Advisor */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: '#dc2626',
                  borderRadius: pxToRem(8),
                  color: 'white',
                  fontWeight: 'bold'
                }}
              >
                Single Advisor
              </motion.div>

              {/* Limited Capabilities */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                style={{
                  display: 'flex',
                  gap: '0.75rem',
                  marginTop: '0.5rem'
                }}
              >
                {['Limited Analysis', 'Slow Response', 'Conflicts'].map((item, i) => (
                  <div
                    key={item}
                    style={{
                      padding: '0.5rem',
                      background: 'rgba(127, 29, 29, 0.3)',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      borderRadius: pxToRem(6),
                      fontSize: '0.75rem',
                      color: '#fca5a5'
                    }}
                  >
                    {item}
                  </div>
                ))}
              </motion.div>

              {/* Bottleneck Message */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                style={{
                  marginTop: '1rem',
                  padding: '0.75rem',
                  background: 'rgba(127, 29, 29, 0.3)',
                  borderRadius: pxToRem(8),
                  textAlign: 'center',
                  fontSize: '0.85rem',
                  color: '#fca5a5',
                  fontWeight: '600'
                }}
              >
                Bottleneck: One person, business hours, commission-driven
              </motion.div>
            </div>
          </motion.div>

          {/* Our Model */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            style={{
              background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(34, 197, 94, 0.05))',
              border: '2px solid rgba(34, 197, 94, 0.3)',
              borderRadius: pxToRem(16),
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <h3 style={{
              fontSize: '1.3rem',
              color: '#22c55e',
              fontWeight: 'bold',
              marginBottom: '1.5rem'
            }}>
              Our Model
            </h3>

            {/* Agentic Architecture */}
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem'
            }}>
              {/* Investor Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 }}
                style={{
                  padding: '0.75rem 2rem',
                  background: '#3b82f6',
                  borderRadius: pxToRem(8),
                  color: 'white',
                  fontWeight: 'bold'
                }}
              >
                Investor
              </motion.div>

              {/* Arrow */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                style={{ fontSize: '1.5rem', color: '#22c55e' }}
              >
                ↓
              </motion.div>

              {/* Orchestrator */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 }}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: '#8b5cf6',
                  borderRadius: pxToRem(8),
                  color: 'white',
                  fontWeight: 'bold'
                }}
              >
                Orchestrator
              </motion.div>

              {/* Connection Lines */}
              <svg style={{
                width: '250px',
                height: '60px',
                marginTop: '-0.5rem',
                marginBottom: '-0.5rem'
              }}>
                {[0, 1, 2, 3, 4].map((i) => (
                  <motion.line
                    key={i}
                    x1="125"
                    y1="10"
                    x2={50 + i * 40}
                    y2="50"
                    stroke="#22c55e"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
                  />
                ))}
              </svg>

              {/* Specialized Agents */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                style={{
                  display: 'flex',
                  gap: '0.5rem'
                }}
              >
                {[
                  { name: 'Risk', color: '#3b82f6' },
                  { name: 'Tax', color: '#f97316' },
                  { name: 'Portfolio', color: '#10b981' },
                  { name: 'Alts', color: '#8b5cf6' },
                  { name: 'Research', color: '#ec4899' }
                ].map((agent, i) => (
                  <motion.div
                    key={agent.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4 + i * 0.05 }}
                    style={{
                      padding: '0.5rem',
                      background: agent.color,
                      borderRadius: pxToRem(6),
                      fontSize: '0.7rem',
                      color: 'white',
                      fontWeight: 'bold'
                    }}
                  >
                    {agent.name}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          style={{
            padding: '1rem',
            background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent)',
            borderRadius: pxToRem(12),
            textAlign: 'center'
          }}
        >
          <p style={{
            fontSize: '1.2rem',
            color: '#60a5fa',
            fontWeight: '600'
          }}>
            5 Specialized Agents Working Together vs 1 Generalist Working Alone
          </p>
        </motion.div>
      </div>
    </AspectFrame>
  )
}
