import React from 'react'
import { motion } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { Brain, Users, Award, Plus, Equal } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function HybridTrustModelSlide() {
  const title = (
    <GradientText gradient="from-cyan-400 to-blue-400">
      The "AI-Augmented" Family Office
    </GradientText>
  )

  const components = [
    {
      icon: Brain,
      label: 'ARIA (THE AI)',
      color: '#14b8a6',
      items: [
        '24/7 Analysis',
        'Administrative Automation',
        'Data-Driven Insights'
      ]
    },
    {
      icon: Users,
      label: 'YOUR CPA (THE TRUSTED ADVISOR)',
      color: '#3b82f6',
      items: [
        'B2B2C Partner',
        'Understands your personal context',
        'Final human validation'
      ]
    },
    {
      icon: Award,
      label: 'OUR TEAM (THE EXPERTS)',
      color: '#8b5cf6',
      items: [
        'Vora Ventures Partners',
        'Ex-Google/Goldman Founders',
        'Human oversight & expertise'
      ]
    }
  ]

  const mainVisual = (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/* Subtitle */}
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '1.2rem', color: '#94a3b8', fontWeight: '600' }}>
          ARIA is not a replacement. She is a force multiplier for your human team.
        </p>
      </div>

      {/* Formula Layout */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {/* Components Row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
          {components.map((comp, index) => {
            const Icon = comp.icon
            return (
              <React.Fragment key={comp.label}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.3 }}
                  style={{
                    width: '280px',
                    padding: '1.25rem',
                    background: `linear-gradient(135deg, ${comp.color}15, ${comp.color}05)`,
                    border: `2px solid ${comp.color}`,
                    borderRadius: pxToRem(12),
                    boxShadow: `0 8px 32px ${comp.color}20`
                  }}
                >
                  {/* Header */}
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginBottom: '0.75rem'
                  }}>
                    <div style={{
                      width: '56px',
                      height: '56px',
                      background: comp.color,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '0.5rem'
                    }}>
                      <Icon size={28} color="white" />
                    </div>
                    <div style={{ 
                      fontSize: '0.95rem', 
                      fontWeight: 'bold',
                      color: comp.color,
                      textAlign: 'center'
                    }}>
                      {comp.label}
                    </div>
                  </div>

                  {/* Items */}
                  <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                    {comp.items.map((item, i) => (
                      <div key={i} style={{ 
                        marginBottom: '0.25rem',
                        paddingLeft: '0.5rem',
                        borderLeft: `2px solid ${comp.color}30`
                      }}>
                        • {item}
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Plus Sign */}
                {index < components.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.3 }}
                    style={{
                      width: '48px',
                      height: '48px',
                      background: 'rgba(20, 184, 166, 0.1)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#5eead4',
                      fontSize: '1.5rem',
                      fontWeight: 'bold'
                    }}
                  >
                    +
                  </motion.div>
                )}
              </React.Fragment>
            )
          })}
        </div>

        {/* Equals Sign */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '1.5rem 0',
            fontSize: '2rem',
            color: '#5eead4'
          }}
        >
          =
        </motion.div>

        {/* Result Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, type: 'spring' }}
          style={{
            maxWidth: '700px',
            margin: '0 auto',
            padding: '1.5rem',
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.2), rgba(34, 211, 238, 0.1))',
            border: '2px solid #14b8a6',
            borderRadius: pxToRem(16),
            boxShadow: '0 10px 40px rgba(20, 184, 166, 0.3)',
            textAlign: 'center'
          }}
        >
          <h3 style={{
            fontSize: '1.4rem',
            fontWeight: 'bold',
            color: '#14b8a6',
            marginBottom: '0.5rem'
          }}>
            YOUR "AI-AUGMENTED" FAMILY OFFICE
          </h3>
          <p style={{
            fontSize: '1.1rem',
            color: '#5eead4',
            fontWeight: '600'
          }}>
            The intelligence of AI. The trust of your CPA. The expertise of Vora.
          </p>
        </motion.div>
      </div>
    </div>
  )

  return <DataSlideLayout title={title} mainVisual={mainVisual} />
}
