import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { AspectFrame } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import ARIAIconBadge from '../components/ARIAIconBadge'
import StanfordBadge from '../components/StanfordBadge'
import { TrendingUp, Brain, BarChart3, Shield, Users, Zap, Award, ChevronRight } from 'lucide-react'
import './SlideStyles.css'

export default function ARIATechMFSlide() {
  const [hoveredCard, setHoveredCard] = useState(null)
  
  // Inspired by Dezerv - Tech-Enabled MF Platform
  const techAdvantages = [
    {
      icon: Brain,
      title: 'AI Fund Selection',
      value: '16,766',
      metric: 'Funds Analyzed',
      description: 'ARIA analyzes every mutual fund in real-time',
      color: '#14b8a6',
      improvement: '500x faster than Dezerv'
    },
    {
      icon: Zap,
      title: 'Instant Rebalancing',
      value: '11ms',
      metric: 'Decision Time',
      description: 'Voice-triggered portfolio optimization',
      color: '#fb923c',
      improvement: 'Real-time vs Daily'
    },
    {
      icon: TrendingUp,
      title: 'Alpha Generation',
      value: '+4.2%',
      metric: 'Above Category',
      description: 'Consistent outperformance through AI',
      color: '#4ade80',
      improvement: '2x industry alpha'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      value: '24/7',
      metric: 'Monitoring',
      description: 'Proactive risk detection & mitigation',
      color: '#60a5fa',
      improvement: 'Predictive vs Reactive'
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
        
        {/* Animated Background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.3
        }}>
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0]
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: 'linear'
              }}
              style={{
                position: 'absolute',
                left: `${20 * i}%`,
                top: `${20 + i * 10}%`,
                width: '300px',
                height: '300px',
                background: `radial-gradient(circle, ${i % 2 === 0 ? '#14b8a620' : '#06b6d420'}, transparent)`,
                borderRadius: '50%',
                filter: 'blur(40px)'
              }}
            />
          ))}
        </div>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            padding: '2rem 3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: 10
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
                Why Tech Alone Isn't Enough
              </h1>
              <ARIAIconBadge size={45} animated={true} />
            </div>
            <p style={{
              fontSize: '1rem',
              color: '#94a3b8',
              maxWidth: '600px'
            }}>
              Platforms like Dezerv digitize the old model. ARIA's AI CEO creates a new one - solving all three failures.
            </p>
          </div>
          
          <div style={{
            padding: '0.75rem 1.5rem',
            background: 'rgba(20, 184, 166, 0.1)',
            border: '1px solid rgba(20, 184, 166, 0.3)',
            borderRadius: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <Award size={20} color="#14b8a6" />
            <span style={{ color: '#14b8a6', fontWeight: '600' }}>Next-Gen Platform</span>
          </div>
        </motion.div>

        {/* Main Comparison Grid */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          padding: '0 3rem 2rem',
          alignItems: 'stretch'
        }}>
          
          {/* Left: Traditional Tech-MF (Dezerv-like) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              background: 'rgba(30, 41, 59, 0.3)',
              borderRadius: '1rem',
              padding: '2rem',
              border: '1px solid rgba(148, 163, 184, 0.1)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <h3 style={{
              fontSize: '1.3rem',
              color: '#64748b',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              Traditional Tech-MF Platforms
              <span style={{
                padding: '0.25rem 0.75rem',
                background: 'rgba(148, 163, 184, 0.1)',
                borderRadius: '1rem',
                fontSize: '0.75rem',
                color: '#94a3b8'
              }}>
                Current State
              </span>
            </h3>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              flex: 1
            }}>
              {[
                { feature: 'Fund Discovery', limitation: 'Basic filters & sorting', icon: '🔍' },
                { feature: 'Portfolio Management', limitation: 'Manual rebalancing', icon: '📊' },
                { feature: 'Advisory', limitation: 'Generic recommendations', icon: '💭' },
                { feature: 'Execution', limitation: 'Standard NAV processing', icon: '⏱️' },
                { feature: 'Tax Optimization', limitation: 'Year-end planning only', icon: '📋' },
                { feature: 'Risk Assessment', limitation: 'Historical metrics only', icon: '⚠️' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  style={{
                    padding: '0.75rem',
                    background: 'rgba(30, 41, 59, 0.5)',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}
                >
                  <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                  <div style={{ flex: 1 }}>
                    <p style={{
                      fontSize: '0.9rem',
                      color: '#e2e8f0',
                      marginBottom: '0.2rem',
                      fontWeight: '500'
                    }}>
                      {item.feature}
                    </p>
                    <p style={{
                      fontSize: '0.75rem',
                      color: '#64748b'
                    }}>
                      {item.limitation}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: ARIA AI-Powered Platform */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(6, 182, 212, 0.05))',
              borderRadius: '1rem',
              padding: '2rem',
              border: '1px solid rgba(20, 184, 166, 0.3)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <h3 style={{
              fontSize: '1.3rem',
              color: '#14b8a6',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              ARIA AI-Orchestrated Platform
              <motion.span
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  padding: '0.25rem 0.75rem',
                  background: 'linear-gradient(135deg, #14b8a6, #06b6d4)',
                  borderRadius: '1rem',
                  fontSize: '0.75rem',
                  color: '#fff',
                  fontWeight: '600'
                }}
              >
                LIVE NOW
              </motion.span>
            </h3>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              flex: 1
            }}>
              {[
                { 
                  feature: 'AI Fund Intelligence', 
                  capability: '16,766 funds analyzed in real-time', 
                  icon: Brain,
                  color: '#14b8a6',
                  metric: '+4.2% alpha'
                },
                { 
                  feature: 'Voice Trading', 
                  capability: '11ms execution, natural language', 
                  icon: Zap,
                  color: '#fb923c',
                  metric: '3 languages'
                },
                { 
                  feature: 'Personalized AI CEO', 
                  capability: '68+ specialists per portfolio', 
                  icon: Users,
                  color: '#06b6d4',
                  metric: '24/7 active'
                },
                { 
                  feature: 'Predictive Optimization', 
                  capability: 'Continuous rebalancing & harvesting', 
                  icon: TrendingUp,
                  color: '#4ade80',
                  metric: '+1.8% daily'
                },
                { 
                  feature: 'Tax Intelligence', 
                  capability: 'Real-time harvesting across assets', 
                  icon: BarChart3,
                  color: '#fbbf24',
                  metric: '₹48L saved'
                },
                { 
                  feature: 'Quantum Risk Shield', 
                  capability: 'Predictive risk prevention', 
                  icon: Shield,
                  color: '#60a5fa',
                  metric: '-35% risk'
                }
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    onHoverStart={() => setHoveredCard(i)}
                    onHoverEnd={() => setHoveredCard(null)}
                    style={{
                      padding: '0.75rem',
                      background: hoveredCard === i 
                        ? `linear-gradient(135deg, ${item.color}20, ${item.color}10)`
                        : 'rgba(20, 184, 166, 0.05)',
                      borderRadius: '0.5rem',
                      border: `1px solid ${hoveredCard === i ? item.color + '40' : 'rgba(20, 184, 166, 0.1)'}`,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <Icon size={20} color={item.color} />
                    <div style={{ flex: 1 }}>
                      <p style={{
                        fontSize: '0.9rem',
                        color: '#e2e8f0',
                        marginBottom: '0.2rem',
                        fontWeight: '500'
                      }}>
                        {item.feature}
                      </p>
                      <p style={{
                        fontSize: '0.75rem',
                        color: '#94a3b8'
                      }}>
                        {item.capability}
                      </p>
                    </div>
                    <motion.span
                      animate={hoveredCard === i ? { scale: [1, 1.1, 1] } : {}}
                      style={{
                        padding: '0.25rem 0.5rem',
                        background: `${item.color}20`,
                        borderRadius: '0.5rem',
                        fontSize: '0.7rem',
                        color: item.color,
                        fontWeight: '600'
                      }}
                    >
                      {item.metric}
                    </motion.span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats Bar */}
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
          <div style={{ display: 'flex', gap: '3rem' }}>
            {techAdvantages.map((adv, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -2 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.3rem'
                }}>
                  <adv.icon size={16} color={adv.color} />
                  <span style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    color: adv.color
                  }}>
                    {adv.value}
                  </span>
                </div>
                <span style={{
                  fontSize: '0.75rem',
                  color: '#94a3b8'
                }}>
                  {adv.metric}
                </span>
                <span style={{
                  fontSize: '0.65rem',
                  color: '#64748b',
                  marginTop: '0.2rem'
                }}>
                  {adv.improvement}
                </span>
              </motion.div>
            ))}
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <StanfordBadge variant="compact" />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '0.75rem 1.5rem',
                background: 'linear-gradient(135deg, #14b8a6, #06b6d4)',
                border: 'none',
                borderRadius: '0.5rem',
                color: '#fff',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              Experience ARIA <ChevronRight size={16} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </AspectFrame>
  )
}
