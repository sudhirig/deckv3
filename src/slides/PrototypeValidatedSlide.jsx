import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import AnimatedCounter from '../components/AnimatedCounter'
import { 
  CheckCircle, Server, Database, Shield, Activity,
  GitBranch, Package, Award, Zap, Globe
} from 'lucide-react'
import './SlideStyles.css'

export default function PrototypeValidatedSlide() {
  const [hoveredMetric, setHoveredMetric] = useState(null)

  const title = (
    <GradientText gradient="from-green-400 to-emerald-400">
      Prototype Validated
    </GradientText>
  )

  const metrics = [
    {
      icon: Server,
      value: 10000,
      suffix: '+',
      label: 'Transactions Processed',
      color: '#10b981',
      description: 'Real transactions across multiple asset classes'
    },
    {
      icon: Activity,
      value: 6,
      suffix: ' months',
      label: 'In Production',
      color: '#14b8a6',
      description: 'Live system managing real client money'
    },
    {
      icon: Shield,
      value: 100,
      suffix: '%',
      label: 'Audit Passed',
      color: '#06b6d4',
      description: 'Security and compliance fully validated'
    }
  ]

  const validationPoints = [
    {
      category: 'Technical Validation',
      icon: GitBranch,
      color: '#3b82f6',
      items: [
        { label: 'Core Platform', status: 'Production Ready', value: '100%' },
        { label: 'Agent Framework', status: 'Fully Tested', value: '100%' },
        { label: 'Data Pipeline', status: 'Operational', value: '100%' }
      ]
    },
    {
      category: 'Market Validation',
      icon: Globe,
      color: '#10b981',
      items: [
        { label: 'US Markets', status: 'Live Trading', value: '✓' },
        { label: 'India Access', status: 'GIFT Connected', value: '✓' },
        { label: 'Alternatives', status: 'K-1 Processing', value: '✓' }
      ]
    },
    {
      category: 'Scale Validation',
      icon: Zap,
      color: '#f59e0b',
      items: [
        { label: 'Latency', status: '11ms avg', value: '99.9%' },
        { label: 'Throughput', status: '1M ops/day', value: '100x' },
        { label: 'Reliability', status: '99.97% uptime', value: 'SLA' }
      ]
    }
  ]

  const mainVisual = (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/* Subtitle */}
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '1rem', color: '#94a3b8', fontWeight: '600' }}>
          We're past prototype - production systems managing real portfolios at scale
        </p>
      </div>

      {/* Validation Grid */}
      <div style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem'
      }}>
        {validationPoints.map((point, idx) => (
          <motion.div
            key={point.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            onHoverStart={() => setHoveredMetric(idx)}
            onHoverEnd={() => setHoveredMetric(null)}
            style={{
              background: hoveredMetric === idx
                ? `linear-gradient(135deg, ${point.color}15 0%, ${point.color}25 100%)`
                : 'linear-gradient(135deg, rgba(30, 41, 59, 0.5) 0%, rgba(51, 65, 85, 0.5) 100%)',
              borderRadius: '12px',
              padding: '1.25rem',
              border: `1px solid ${hoveredMetric === idx ? point.color : 'rgba(100, 116, 139, 0.3)'}`,
              transition: 'all 0.3s ease',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1rem',
              paddingBottom: '0.75rem',
              borderBottom: `1px solid ${hoveredMetric === idx ? `${point.color}40` : 'rgba(100, 116, 139, 0.2)'}`
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: `${point.color}20`,
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {React.createElement(point.icon, { size: 20, color: point.color })}
              </div>
              <h3 style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: hoveredMetric === idx ? point.color : '#e2e8f0'
              }}>
                {point.category}
              </h3>
            </div>

            {/* Validation Items */}
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              {point.items.map((item, itemIdx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 + itemIdx * 0.05 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.5rem',
                    background: hoveredMetric === idx 
                      ? 'rgba(255, 255, 255, 0.02)' 
                      : 'transparent',
                    borderRadius: '4px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle size={14} color={point.color} />
                    <span style={{
                      fontSize: '0.85rem',
                      color: '#cbd5e1'
                    }}>
                      {item.label}
                    </span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <span style={{
                      fontSize: '0.75rem',
                      color: '#64748b'
                    }}>
                      {item.status}
                    </span>
                    <span style={{
                      padding: '0.125rem 0.375rem',
                      background: `${point.color}20`,
                      borderRadius: '4px',
                      fontSize: '0.7rem',
                      fontWeight: '600',
                      color: point.color
                    }}>
                      {item.value}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Status Indicator */}
            <div style={{
              marginTop: '0.75rem',
              paddingTop: '0.75rem',
              borderTop: `1px solid ${hoveredMetric === idx ? `${point.color}40` : 'rgba(100, 116, 139, 0.2)'}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}>
              <motion.div
                animate={{
                  scale: hoveredMetric === idx ? [1, 1.2, 1] : 1
                }}
                transition={{
                  duration: 1.5,
                  repeat: hoveredMetric === idx ? Infinity : 0
                }}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: point.color
                }}
              />
              <span style={{
                fontSize: '0.8rem',
                fontWeight: '600',
                color: point.color
              }}>
                VALIDATED
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Proof Statement */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(20, 184, 166, 0.1) 100%)',
          borderRadius: '8px',
          padding: '1rem',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Award size={24} color="#10b981" />
          <div>
            <h3 style={{
              fontSize: '1.1rem',
              fontWeight: '700',
              color: '#10b981',
              marginBottom: '0.25rem'
            }}>
              Every Component Tested Under Real Market Conditions
            </h3>
            <p style={{
              fontSize: '0.85rem',
              color: '#94a3b8'
            }}>
              This isn't theoretical - it's operational at scale with real client money today
            </p>
          </div>
        </div>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '0.25rem'
        }}>
          <div style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#10b981'
          }}>
            $12.5M
          </div>
          <div style={{
            fontSize: '0.75rem',
            color: '#64748b'
          }}>
            AUM Managing
          </div>
        </div>
      </motion.div>
    </div>
  )

  return (
    <DataSlideLayout
      title={title}
      mainVisual={mainVisual}
      metrics={metrics}
    />
  )
}
