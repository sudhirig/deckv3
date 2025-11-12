import { motion } from 'framer-motion'
import { AspectFrame } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { Building, Users, Briefcase, TrendingUp, ChevronDown } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function B2B2CDistributionSlide() {
  const flywheel = [
    { name: 'Vora Ventures', detail: 'Strategic Partner', icon: Building, color: '#8b5cf6' },
    { name: 'Ascendum KPS', detail: 'Distribution Partner', icon: Briefcase, color: '#3b82f6' },
    { name: '1,000+ CPAs', detail: 'Channel Partners', icon: Users, color: '#10b981' },
    { name: 'HNW Clients', detail: '$1-25M Net Worth', icon: TrendingUp, color: '#f59e0b' },
    { name: 'ARIA Platform', detail: 'AI Family Office', icon: null, color: '#14b8a6' }
  ]

  return (
    <AspectFrame>
      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '2.5rem'
      }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '2rem' }}
        >
          <h1 style={{ fontSize: '2.5rem', fontWeight: 900 }}>
            <GradientText gradient="from-blue-400 to-purple-400">
              Our B2B2C Distribution Moat
            </GradientText>
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#94a3b8' }}>
            The Vora/Ascendum KPS Flywheel
          </p>
        </motion.div>

        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            {flywheel.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={item.name}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.2 }}
                    whileHover={{ scale: 1.1 }}
                    style={{
                      width: '200px',
                      padding: '1rem',
                      background: `linear-gradient(135deg, ${item.color}20, ${item.color}10)`,
                      border: `2px solid ${item.color}`,
                      borderRadius: pxToRem(12),
                      textAlign: 'center'
                    }}
                  >
                    {Icon ? <Icon size={32} color={item.color} /> : 
                     <span style={{ fontSize: '2rem', fontWeight: 'bold', color: item.color }}>ARIA</span>}
                    <p style={{ color: '#e2e8f0', fontSize: '1rem', fontWeight: 'bold', marginTop: '0.5rem' }}>
                      {item.name}
                    </p>
                    <p style={{ color: '#64748b', fontSize: '0.8rem' }}>
                      {item.detail}
                    </p>
                  </motion.div>
                  {index < flywheel.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.2 }}
                      style={{ display: 'flex', justifyContent: 'center', margin: '0.5rem 0' }}
                    >
                      <ChevronDown size={24} color="#64748b" />
                    </motion.div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem' }}
        >
          <div style={{
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.05))',
            borderRadius: pxToRem(12),
            padding: '1rem',
            textAlign: 'center'
          }}>
            <p style={{ color: '#10b981', fontSize: '2rem', fontWeight: 'bold' }}>$1,500</p>
            <p style={{ color: '#e2e8f0' }}>CAC via B2B2C</p>
            <p style={{ color: '#64748b', fontSize: '0.8rem' }}>vs $5,000 B2C</p>
          </div>
          <div style={{
            background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1), rgba(251, 146, 60, 0.05))',
            borderRadius: pxToRem(12),
            padding: '1rem',
            textAlign: 'center'
          }}>
            <p style={{ color: '#f97316', fontSize: '2rem', fontWeight: 'bold' }}>70%</p>
            <p style={{ color: '#e2e8f0' }}>Year 1 Acquisition</p>
            <p style={{ color: '#64748b', fontSize: '0.8rem' }}>via CPA channel</p>
          </div>
        </motion.div>
      </div>
    </AspectFrame>
  )
}
