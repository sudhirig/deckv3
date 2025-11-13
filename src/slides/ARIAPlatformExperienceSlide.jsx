import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { AspectFrame } from '../components/StandardLayouts'
import ARIAIconBadge from '../components/ARIAIconBadge'
import StanfordBadge from '../components/StanfordBadge'
import OperationalBadge from '../components/OperationalBadge'
import { Smartphone, Monitor, Mic, Brain, TrendingUp, Globe } from 'lucide-react'
import ARIAPlatformMobile from '../components/ARIAPlatformMobile'
import ARIAPlatformDesktop from '../components/ARIAPlatformDesktop'
import './SlideStyles.css'

export default function ARIAPlatformExperienceSlide() {
  const [activeView, setActiveView] = useState('mobile')
  const [selectedFeature, setSelectedFeature] = useState(0)

  const features = [
    {
      icon: Mic,
      title: 'Voice Command',
      description: 'Trade in 11ms with natural language',
      demo: 'Buy 100 shares of Reliance',
      color: '#fb923c'
    },
    {
      icon: Brain,
      title: 'AI Portfolio',
      description: '68+ specialists optimize 24/7',
      demo: 'Rebalancing for tax efficiency',
      color: '#14b8a6'
    },
    {
      icon: Globe,
      title: 'GIFT Gateway',
      description: 'Access $5T tax-free investments',
      demo: 'International diversification active',
      color: '#ec4899'
    },
    {
      icon: TrendingUp,
      title: 'Real-time Alpha',
      description: '+1.8% daily tax harvesting',
      demo: 'Saved ₹2.3L this month',
      color: '#fbbf24'
    }
  ]

  return (
    <AspectFrame>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #0a0f1b 0%, #0f172a 50%, #1e293b 100%)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            padding: '2rem 3rem 1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
              <h1 style={{
                fontSize: 'clamp(2rem, 3vw, 2.5rem)',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #14b8a6, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                The ARIA CEO Experience
              </h1>
              <ARIAIconBadge size={45} animated={true} />
              <OperationalBadge variant="default" />
            </div>
            <p style={{ fontSize: '0.95rem', color: '#94a3b8' }}>
              Your AI CEO solving the digital experience gap - 24/7 dashboards, not quarterly PDFs
            </p>
          </div>
          
          {/* Device Switcher */}
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            background: 'rgba(30, 41, 59, 0.5)',
            padding: '0.4rem',
            borderRadius: '2rem',
            border: '1px solid rgba(148, 163, 184, 0.1)'
          }}>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveView('mobile')}
              style={{
                padding: '0.6rem 1.2rem',
                background: activeView === 'mobile' ? 'rgba(20, 184, 166, 0.2)' : 'transparent',
                border: activeView === 'mobile' ? '1px solid rgba(20, 184, 166, 0.3)' : 'none',
                borderRadius: '1.5rem',
                color: activeView === 'mobile' ? '#14b8a6' : '#64748b',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.9rem',
                fontWeight: '500'
              }}
            >
              <Smartphone size={16} />
              Mobile
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveView('desktop')}
              style={{
                padding: '0.6rem 1.2rem',
                background: activeView === 'desktop' ? 'rgba(20, 184, 166, 0.2)' : 'transparent',
                border: activeView === 'desktop' ? '1px solid rgba(20, 184, 166, 0.3)' : 'none',
                borderRadius: '1.5rem',
                color: activeView === 'desktop' ? '#14b8a6' : '#64748b',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.9rem',
                fontWeight: '500'
              }}
            >
              <Monitor size={16} />
              Desktop
            </motion.button>
          </div>
        </motion.div>

        {/* Main Content */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '2rem',
          padding: '0 3rem 2rem',
          alignItems: 'center'
        }}>
          
          {/* Left: Features List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            <h3 style={{
              fontSize: '1.2rem',
              color: '#94a3b8',
              marginBottom: '0.5rem'
            }}>
              Seamless Across Devices
            </h3>
            
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  onClick={() => setSelectedFeature(index)}
                  style={{
                    padding: '1.2rem',
                    background: selectedFeature === index 
                      ? `linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(6, 182, 212, 0.1))`
                      : 'rgba(30, 41, 59, 0.3)',
                    border: selectedFeature === index
                      ? '1px solid rgba(20, 184, 166, 0.3)'
                      : '1px solid rgba(148, 163, 184, 0.1)',
                    borderRadius: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem'
                  }}>
                    <div style={{
                      padding: '0.5rem',
                      background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}10)`,
                      borderRadius: '0.5rem'
                    }}>
                      <Icon size={20} color={feature.color} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{
                        fontSize: '1rem',
                        color: '#e2e8f0',
                        marginBottom: '0.3rem',
                        fontWeight: '600'
                      }}>
                        {feature.title}
                      </h4>
                      <p style={{
                        fontSize: '0.85rem',
                        color: '#94a3b8',
                        lineHeight: '1.4'
                      }}>
                        {feature.description}
                      </p>
                      {selectedFeature === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          style={{
                            marginTop: '0.75rem',
                            padding: '0.5rem',
                            background: 'rgba(20, 184, 166, 0.1)',
                            borderRadius: '0.5rem',
                            fontSize: '0.8rem',
                            color: '#14b8a6',
                            fontFamily: 'monospace'
                          }}
                        >
                          "{feature.demo}"
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Right: Device Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            style={{
              position: 'relative',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {activeView === 'mobile' ? (
              <ARIAPlatformMobile selectedFeature={features[selectedFeature]} />
            ) : (
              <ARIAPlatformDesktop selectedFeature={features[selectedFeature]} />
            )}
          </motion.div>
        </div>

        {/* Bottom Features Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{
            padding: '1.5rem 3rem',
            background: 'rgba(30, 41, 59, 0.3)',
            borderTop: '1px solid rgba(148, 163, 184, 0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <StanfordBadge variant="compact" />
          <div style={{
            display: 'flex',
            gap: '3rem'
          }}>
            {[
              { label: 'Response Time', value: '11ms', icon: '⚡', detail: 'vs Hours' },
              { label: 'AI Specialists', value: '68+', icon: '🤖', detail: 'Working 24/7' },
              { label: 'Tax Alpha Daily', value: '+1.8%', icon: '📈', detail: 'vs Annual' },
              { label: 'Switching Now', value: '46%', icon: '📊', detail: 'HNWIs' },
              { label: 'Wealth Transfer', value: '$124T', icon: '💰', detail: 'In Motion' }
            ].map((stat, i) => (
            <div key={i} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <span style={{ fontSize: '1.5rem' }}>{stat.icon}</span>
              <span style={{
                fontSize: '1.2rem',
                fontWeight: 'bold',
                color: '#14b8a6',
                marginTop: '0.3rem'
              }}>
                {stat.value}
              </span>
              <span style={{
                fontSize: '0.75rem',
                color: '#64748b',
                marginTop: '0.2rem'
              }}>
                {stat.label}
              </span>
              <span style={{
                fontSize: '0.65rem',
                color: '#475569',
                marginTop: '0.1rem'
              }}>
                {stat.detail}
              </span>
            </div>
            ))}
          </div>
        </motion.div>
      </div>
    </AspectFrame>
  )
}
