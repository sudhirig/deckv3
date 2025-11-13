import { motion } from 'framer-motion'
import { AspectFrame } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { Monitor, Building, Calculator } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function ThreeFailuresComparisonSlide() {
  const comparisons = [
    {
      icon: Monitor,
      title: 'Digital Experience',
      color: '#3b82f6',
      want: [
        '24/7 Real-time Dashboards',
        'Live portfolio tracking, instant insights'
      ],
      get: [
        'Quarterly PDFs',
        'Static reports, outdated data'
      ]
    },
    {
      icon: Building,
      title: 'Product Access',
      color: '#e2e8f0',
      want: [
        'Access to PE, Credit, RE',
        '+300-500bps potential alpha'
      ],
      get: [
        'Stocks & Bonds Only',
        'Limited to public markets'
      ]
    },
    {
      icon: Calculator,
      title: 'Tax & Optimization',
      color: '#e2e8f0',
      want: [
        'Proactive Tax Alpha',
        'Daily TLH, +1.8% annual alpha'
      ],
      get: [
        'Basic Asset Allocation',
        'Yearly TLH, missed opportunities'
      ]
    }
  ]

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
            <GradientText gradient="from-cyan-400 to-blue-400">
              Why They're Switching: The Three Failures
            </GradientText>
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#e2e8f0' }}>
            The "Alpha Gap" - What HNWIs Want vs What They Get
          </p>
        </motion.div>

        {/* Three Comparison Cards */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem'
        }}>
          {comparisons.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.15 }}
                style={{
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05))',
                  border: '2px solid rgba(59, 130, 246, 0.3)',
                  borderRadius: pxToRem(16),
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  marginBottom: '1.5rem'
                }}>
                  <Icon size={32} color={item.color} />
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    color: '#e2e8f0'
                  }}>
                    {item.title}
                  </h3>
                </div>

                {/* WANT Section */}
                <div style={{
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.75rem'
                  }}>
                    <span style={{ color: '#10b981', fontSize: '1rem' }}>✓</span>
                    <span style={{ fontSize: '0.9rem', color: '#10b981', fontWeight: 'bold' }}>WANT</span>
                  </div>
                  {item.want.map((point, i) => (
                    <div key={i} style={{
                      fontSize: '0.85rem',
                      color: '#e2e8f0',
                      marginBottom: '0.3rem',
                      lineHeight: '1.4'
                    }}>
                      {point}
                    </div>
                  ))}
                </div>

                {/* GET Section */}
                <div style={{
                  padding: '1rem',
                  background: 'rgba(127, 29, 29, 0.2)',
                  borderRadius: pxToRem(8),
                  borderLeft: '3px solid #ef4444'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.5rem'
                  }}>
                    <span style={{ color: '#ef4444', fontSize: '1rem' }}>✕</span>
                    <span style={{ fontSize: '0.9rem', color: '#ef4444', fontWeight: 'bold' }}>GET</span>
                  </div>
                  {item.get.map((point, i) => (
                    <div key={i} style={{
                      fontSize: '0.85rem',
                      color: '#fca5a5',
                      marginBottom: '0.3rem',
                      lineHeight: '1.4'
                    }}>
                      {point}
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{
            padding: '1rem',
            background: 'linear-gradient(135deg, rgba(127, 29, 29, 0.3), rgba(127, 29, 29, 0.1))',
            borderRadius: pxToRem(12),
            textAlign: 'center'
          }}
        >
          <p style={{
            fontSize: '1.1rem',
            color: '#fed7aa',
            fontWeight: '600'
          }}>
            Traditional advisors can't scale these solutions. AI can.
          </p>
        </motion.div>
      </div>
    </AspectFrame>
  )
}
