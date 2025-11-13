import { motion } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { AlertTriangle, TrendingUp, TrendingDown } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function AdvisorShortageSlide() {
  const title = (
    <GradientText gradient="from-red-400 to-orange-400">
      The Advisor Shortage Makes It Worse
    </GradientText>
  )

  const reasons = [
    'Aging advisor workforce',
    '40% of advisors are retiring',
    'Few young professionals entering',
    'Licensing requirements increasing',
    'Competition from fintech'
  ]

  const mainVisual = (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '1rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '2rem', flex: 1 }}>
        
        {/* Left Side - The Crisis */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1rem'
            }}
          >
            <AlertTriangle size={32} color="#ef4444" />
            <h2 style={{ fontSize: '1.3rem', color: '#e2e8f0', fontWeight: 'bold' }}>
              The Looming Crisis
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              background: 'linear-gradient(135deg, rgba(127, 29, 29, 0.4), rgba(127, 29, 29, 0.2))',
              border: '2px solid rgba(239, 68, 68, 0.5)',
              borderRadius: pxToRem(16),
              padding: '1.5rem',
              marginBottom: '1.5rem',
              textAlign: 'center'
            }}
          >
            <div style={{
              fontSize: '3.5rem',
              fontWeight: 'bold',
              color: '#ef4444',
              marginBottom: '0.5rem'
            }}>
              100,000
            </div>
            <div style={{
              fontSize: '1.1rem',
              color: '#e2e8f0'
            }}>
              Financial advisors shortage by 2034
            </div>
          </motion.div>

          <div>
            <h3 style={{
              fontSize: '1.1rem',
              color: '#e2e8f0',
              marginBottom: '0.75rem',
              fontWeight: '600'
            }}>
              Why This Is Happening
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {reasons.map((reason, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.5rem',
                    marginBottom: '0.4rem',
                    fontSize: '0.9rem',
                    color: '#e2e8f0'
                  }}
                >
                  <span style={{ color: '#ef4444' }}>▪</span>
                  {reason}
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            style={{
              marginTop: 'auto',
              paddingTop: '1rem'
            }}
          >
            <h3 style={{
              fontSize: '1.1rem',
              color: '#e2e8f0',
              marginBottom: '0.5rem',
              fontWeight: '600'
            }}>
              What This Means
            </h3>
            <p style={{
              fontSize: '0.9rem',
              color: '#94a3b8',
              lineHeight: '1.4'
            }}>
              Massive gap between HNW demand and advisor supply creates unprecedented opportunity for AI-powered solutions
            </p>
          </motion.div>
        </div>

        {/* Right Side - The Gap Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            background: 'linear-gradient(135deg, rgba(30, 30, 30, 0.5), rgba(30, 30, 30, 0.3))',
            borderRadius: pxToRem(16),
            padding: '2rem',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          {/* Timeline Diagram */}
          <svg style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0
          }}>
            {/* Diverging Lines */}
            <motion.path
              d="M 80 150 Q 200 140, 320 100"
              stroke="#10b981"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.8, duration: 1.5 }}
            />
            <motion.path
              d="M 80 150 Q 200 160, 320 200"
              stroke="#ef4444"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1, duration: 1.5 }}
            />
          </svg>

          {/* Labels */}
          <div style={{ position: 'relative', height: '300px' }}>
            {/* 2024 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{
                position: 'absolute',
                left: '10%',
                top: '40%',
                transform: 'translateY(-50%)',
                background: 'rgba(30, 30, 30, 0.8)',
                padding: '0.5rem 1rem',
                borderRadius: pxToRem(8),
                border: '1px solid rgba(148, 163, 184, 0.3)'
              }}
            >
              <div style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: 'bold' }}>
                2024
              </div>
            </motion.div>

            {/* HNW Demand */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5 }}
              style={{
                position: 'absolute',
                right: '10%',
                top: '20%',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <div style={{
                background: 'rgba(16, 185, 129, 0.2)',
                padding: '0.5rem 1rem',
                borderRadius: pxToRem(8),
                border: '1px solid rgba(16, 185, 129, 0.5)',
                fontSize: '0.9rem',
                color: '#e2e8f0'
              }}>
                HNW Demand
              </div>
              <div style={{
                background: '#10b981',
                padding: '0.3rem 0.6rem',
                borderRadius: pxToRem(4),
                color: 'white',
                fontSize: '0.8rem',
                fontWeight: 'bold'
              }}>
                ↑ +45%
              </div>
            </motion.div>

            {/* Advisor Supply */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.7 }}
              style={{
                position: 'absolute',
                right: '10%',
                bottom: '20%',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <div style={{
                background: 'rgba(239, 68, 68, 0.2)',
                padding: '0.5rem 1rem',
                borderRadius: pxToRem(8),
                border: '1px solid rgba(239, 68, 68, 0.5)',
                fontSize: '0.9rem',
                color: '#e2e8f0'
              }}>
                Advisor Supply
              </div>
              <div style={{
                background: '#ef4444',
                padding: '0.3rem 0.6rem',
                borderRadius: pxToRem(4),
                color: 'white',
                fontSize: '0.8rem',
                fontWeight: 'bold'
              }}>
                ↓ -15%
              </div>
            </motion.div>

            {/* 2029 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              style={{
                position: 'absolute',
                left: '40%',
                top: '40%',
                transform: 'translateY(-50%)',
                background: 'rgba(30, 30, 30, 0.8)',
                padding: '0.5rem 1rem',
                borderRadius: pxToRem(8),
                border: '1px solid rgba(148, 163, 184, 0.3)'
              }}
            >
              <div style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: 'bold' }}>
                2029
              </div>
            </motion.div>

            {/* 2034 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              style={{
                position: 'absolute',
                left: '60%',
                top: '40%',
                transform: 'translateY(-50%)',
                background: 'rgba(30, 30, 30, 0.8)',
                padding: '0.5rem 1rem',
                borderRadius: pxToRem(8),
                border: '1px solid rgba(148, 163, 184, 0.3)'
              }}
            >
              <div style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: 'bold' }}>
                2034
              </div>
            </motion.div>

            {/* Service Gap */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2, type: 'spring' }}
              style={{
                position: 'absolute',
                right: '2%',
                top: '40%',
                transform: 'translateY(-50%)',
                background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.3), rgba(251, 191, 36, 0.1))',
                padding: '0.75rem',
                borderRadius: pxToRem(8),
                border: '2px solid #fbbf24',
                fontSize: '0.9rem',
                color: '#fbbf24',
                fontWeight: 'bold',
                whiteSpace: 'nowrap'
              }}
            >
              Massive Gap
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )

  return <DataSlideLayout title={title} mainVisual={mainVisual} />
}
