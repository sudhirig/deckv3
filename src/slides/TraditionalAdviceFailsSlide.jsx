import { motion } from 'framer-motion'
import { AspectFrame } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { X, Check } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function TraditionalAdviceFailsSlide() {
  return (
    <AspectFrame>
      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '2.5rem',
        gap: '2rem'
      }}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center' }}
        >
          <h1 style={{ fontSize: '2.8rem', fontWeight: 900, marginBottom: '0' }}>
            <GradientText gradient="from-red-400 to-purple-400">
              Traditional Advice Fails HNWIs
            </GradientText>
          </h1>
        </motion.div>

        {/* Main Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            textAlign: 'center',
            padding: '1.5rem',
            background: 'linear-gradient(135deg, rgba(30, 30, 30, 0.5), rgba(30, 30, 30, 0.3))',
            borderRadius: pxToRem(16),
            border: '1px solid rgba(148, 163, 184, 0.2)'
          }}
        >
          <p style={{
            fontSize: '1.6rem',
            color: '#e2e8f0',
            lineHeight: '1.5',
            fontWeight: '500'
          }}>
            The "cookie-cutter" approach of traditional advice—
            <br />
            stocks, bonds, and mutual funds—is fundamentally broken
            <br />
            for HNWIs
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem'
        }}>
          {/* Traditional Portfolio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            style={{
              background: 'linear-gradient(135deg, rgba(127, 29, 29, 0.2), rgba(127, 29, 29, 0.1))',
              border: '2px solid rgba(239, 68, 68, 0.4)',
              borderRadius: pxToRem(20),
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7, type: 'spring' }}
              style={{
                width: '80px',
                height: '80px',
                background: '#ef4444',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}
            >
              <X size={48} color="white" strokeWidth={3} />
            </motion.div>

            <h3 style={{
              fontSize: '1.5rem',
              color: '#e2e8f0',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>
              Traditional Portfolio
            </h3>

            <div style={{
              fontSize: '1.2rem',
              color: '#94a3b8',
              textAlign: 'center',
              marginBottom: '1rem'
            }}>
              60% Stocks, 40% Bonds
            </div>

            <div style={{
              fontSize: '1.1rem',
              color: '#ef4444',
              fontWeight: '600',
              textAlign: 'center'
            }}>
              Focus: Growth
            </div>
          </motion.div>

          {/* HNW Needs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            style={{
              background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(34, 197, 94, 0.1))',
              border: '2px solid rgba(34, 197, 94, 0.4)',
              borderRadius: pxToRem(20),
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: 'spring' }}
              style={{
                width: '80px',
                height: '80px',
                background: '#22c55e',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}
            >
              <Check size={48} color="white" strokeWidth={3} />
            </motion.div>

            <h3 style={{
              fontSize: '1.5rem',
              color: '#e2e8f0',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>
              HNW Needs
            </h3>

            <div style={{
              fontSize: '1.2rem',
              color: '#94a3b8',
              textAlign: 'center',
              marginBottom: '1rem'
            }}>
              Preservation, Tax Efficiency, Complexity
            </div>

            <div style={{
              fontSize: '1.1rem',
              color: '#22c55e',
              fontWeight: '600',
              textAlign: 'center'
            }}>
              Focus: After-Tax Wealth
            </div>
          </motion.div>
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{
            textAlign: 'center',
            padding: '1rem',
            background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.1), transparent)',
            borderRadius: pxToRem(12)
          }}
        >
          <p style={{
            fontSize: '1.3rem',
            color: '#a78bfa',
            fontWeight: '600'
          }}>
            Their primary challenges are no longer just 'growth'
          </p>
        </motion.div>
      </div>
    </AspectFrame>
  )
}
