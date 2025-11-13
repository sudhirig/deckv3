import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AspectFrame } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import ARIAIconBadge from '../components/ARIAIconBadge'
import { Target, Home, GraduationCap, Heart, Plane, TrendingUp, Calendar, DollarSign, CheckCircle } from 'lucide-react'
import './SlideStyles.css'

export default function ARIAGoalBasedInvestingSlide() {
  const [selectedGoal, setSelectedGoal] = useState(0)
  
  const lifeGoals = [
    {
      name: 'Dream Home',
      icon: Home,
      color: '#14b8a6',
      target: '₹3.5 Cr',
      timeline: '5 years',
      current: '₹1.2 Cr',
      progress: 34,
      strategy: 'Equity-heavy growth portfolio with systematic investment',
      monthlyRequired: '₹2.8L',
      riskLevel: 'Moderate-High',
      allocation: { equity: 70, debt: 20, alternatives: 10 }
    },
    {
      name: "Child's Education",
      icon: GraduationCap,
      color: '#06b6d4',
      target: '₹2 Cr',
      timeline: '12 years',
      current: '₹45L',
      progress: 22,
      strategy: 'Balanced approach with education inflation hedging',
      monthlyRequired: '₹85K',
      riskLevel: 'Moderate',
      allocation: { equity: 60, debt: 30, alternatives: 10 }
    },
    {
      name: 'Early Retirement',
      icon: Heart,
      color: '#ec4899',
      target: '₹15 Cr',
      timeline: '15 years',
      current: '₹4.2 Cr',
      progress: 28,
      strategy: 'Aggressive growth with tax-efficient strategies',
      monthlyRequired: '₹4.5L',
      riskLevel: 'High',
      allocation: { equity: 80, debt: 15, alternatives: 5 }
    },
    {
      name: 'World Travel',
      icon: Plane,
      color: '#fbbf24',
      target: '₹50L',
      timeline: '3 years',
      current: '₹18L',
      progress: 36,
      strategy: 'Conservative growth with liquidity focus',
      monthlyRequired: '₹75K',
      riskLevel: 'Low-Moderate',
      allocation: { equity: 40, debt: 50, alternatives: 10 }
    }
  ]
  
  const currentGoal = lifeGoals[selectedGoal]
  const GoalIcon = currentGoal.icon
  
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.3rem' }}>
              <h1 style={{
                fontSize: 'clamp(2rem, 3vw, 2.5rem)',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #14b8a6, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Personalization at Scale
              </h1>
              <ARIAIconBadge size={45} animated={true} />
            </div>
            <p style={{ fontSize: '0.95rem', color: '#94a3b8' }}>
              ARIA's AI CEO creates unique strategies for each life goal - something the 93% can't do
            </p>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '0.75rem 1.5rem',
            background: 'rgba(20, 184, 166, 0.1)',
            borderRadius: '2rem',
            border: '1px solid rgba(20, 184, 166, 0.3)'
          }}>
            <Target size={20} color="#14b8a6" />
            <div>
              <p style={{ fontSize: '0.9rem', color: '#14b8a6', fontWeight: '600' }}>
                15+ Life Goals
              </p>
              <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                AI-optimized strategies
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '350px 1fr',
          gap: '2rem',
          padding: '0 3rem 2rem'
        }}>
          
          {/* Left: Goal Selector */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            <h3 style={{
              fontSize: '1rem',
              color: '#94a3b8',
              marginBottom: '0.5rem'
            }}>
              Select Your Life Goal
            </h3>
            
            {lifeGoals.map((goal, index) => {
              const Icon = goal.icon
              return (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  onClick={() => setSelectedGoal(index)}
                  style={{
                    padding: '1.25rem',
                    background: selectedGoal === index 
                      ? `linear-gradient(135deg, ${goal.color}15, ${goal.color}05)`
                      : 'rgba(30, 41, 59, 0.3)',
                    border: selectedGoal === index
                      ? `1px solid ${goal.color}40`
                      : '1px solid rgba(148, 163, 184, 0.1)',
                    borderRadius: '0.75rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}>
                    <div style={{
                      padding: '0.75rem',
                      background: `${goal.color}20`,
                      borderRadius: '0.5rem'
                    }}>
                      <Icon size={20} color={goal.color} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{
                        fontSize: '1rem',
                        color: '#e2e8f0',
                        marginBottom: '0.3rem',
                        fontWeight: '600'
                      }}>
                        {goal.name}
                      </h4>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}>
                        <span style={{
                          fontSize: '0.8rem',
                          color: '#94a3b8'
                        }}>
                          {goal.target} • {goal.timeline}
                        </span>
                        <span style={{
                          fontSize: '0.75rem',
                          color: goal.color,
                          fontWeight: '600'
                        }}>
                          {goal.progress}%
                        </span>
                      </div>
                      {/* Progress Bar */}
                      <div style={{
                        marginTop: '0.5rem',
                        height: '4px',
                        background: 'rgba(148, 163, 184, 0.1)',
                        borderRadius: '2px',
                        overflow: 'hidden'
                      }}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${goal.progress}%` }}
                          transition={{ duration: 1, delay: 0.2 * index }}
                          style={{
                            height: '100%',
                            background: `linear-gradient(90deg, ${goal.color}, ${goal.color}dd)`,
                            borderRadius: '2px'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Right: Goal Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedGoal}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.5rem',
                height: 'fit-content'
              }}
            >
              {/* Goal Overview Card */}
              <motion.div
                style={{
                  gridColumn: 'span 2',
                  background: `linear-gradient(135deg, ${currentGoal.color}10, transparent)`,
                  borderRadius: '1rem',
                  padding: '2rem',
                  border: `1px solid ${currentGoal.color}30`
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    padding: '1rem',
                    background: `${currentGoal.color}20`,
                    borderRadius: '0.75rem'
                  }}>
                    <GoalIcon size={32} color={currentGoal.color} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h2 style={{
                      fontSize: '1.8rem',
                      color: '#e2e8f0',
                      marginBottom: '0.5rem'
                    }}>
                      {currentGoal.name}
                    </h2>
                    <p style={{
                      fontSize: '1rem',
                      color: '#94a3b8'
                    }}>
                      {currentGoal.strategy}
                    </p>
                  </div>
                  <div style={{
                    textAlign: 'right'
                  }}>
                    <p style={{
                      fontSize: '2rem',
                      fontWeight: 'bold',
                      color: currentGoal.color
                    }}>
                      {currentGoal.progress}%
                    </p>
                    <p style={{
                      fontSize: '0.85rem',
                      color: '#94a3b8'
                    }}>
                      Complete
                    </p>
                  </div>
                </div>
                
                {/* Progress Visual */}
                <div style={{
                  background: 'rgba(30, 41, 59, 0.5)',
                  borderRadius: '1rem',
                  padding: '1rem',
                  height: '8px',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${currentGoal.progress}%` }}
                    transition={{ duration: 1, type: 'spring' }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      height: '100%',
                      background: `linear-gradient(90deg, ${currentGoal.color}, ${currentGoal.color}aa)`,
                      borderRadius: '1rem',
                      boxShadow: `0 0 20px ${currentGoal.color}40`
                    }}
                  />
                </div>
                
                {/* Current vs Target */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '1rem'
                }}>
                  <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                    Current: <strong style={{ color: '#e2e8f0' }}>{currentGoal.current}</strong>
                  </span>
                  <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                    Target: <strong style={{ color: currentGoal.color }}>{currentGoal.target}</strong>
                  </span>
                </div>
              </motion.div>
              
              {/* Metrics Grid */}
              <div style={{
                background: 'rgba(30, 41, 59, 0.3)',
                borderRadius: '0.75rem',
                padding: '1.25rem',
                border: '1px solid rgba(148, 163, 184, 0.1)'
              }}>
                <Calendar size={20} color="#14b8a6" />
                <h3 style={{
                  fontSize: '2rem',
                  color: '#14b8a6',
                  margin: '0.5rem 0'
                }}>
                  {currentGoal.timeline}
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Time Horizon</p>
                <p style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.5rem' }}>
                  AI adjusts strategy based on timeline
                </p>
              </div>
              
              <div style={{
                background: 'rgba(30, 41, 59, 0.3)',
                borderRadius: '0.75rem',
                padding: '1.25rem',
                border: '1px solid rgba(148, 163, 184, 0.1)'
              }}>
                <DollarSign size={20} color="#fbbf24" />
                <h3 style={{
                  fontSize: '2rem',
                  color: '#fbbf24',
                  margin: '0.5rem 0'
                }}>
                  {currentGoal.monthlyRequired}
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Monthly SIP</p>
                <p style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.5rem' }}>
                  Auto-invested across assets
                </p>
              </div>
              
              {/* Asset Allocation */}
              <div style={{
                gridColumn: 'span 2',
                background: 'rgba(30, 41, 59, 0.3)',
                borderRadius: '0.75rem',
                padding: '1.25rem',
                border: '1px solid rgba(148, 163, 184, 0.1)'
              }}>
                <h4 style={{
                  fontSize: '1rem',
                  color: '#e2e8f0',
                  marginBottom: '1rem'
                }}>
                  AI-Optimized Asset Allocation
                </h4>
                
                <div style={{
                  display: 'flex',
                  gap: '0.5rem',
                  marginBottom: '1rem'
                }}>
                  {Object.entries(currentGoal.allocation).map(([asset, percent]) => (
                    <div
                      key={asset}
                      style={{
                        flex: percent / 100,
                        background: asset === 'equity' ? '#4ade80' 
                          : asset === 'debt' ? '#60a5fa'
                          : '#fbbf24',
                        height: '40px',
                        borderRadius: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontSize: '0.85rem',
                        fontWeight: '600'
                      }}
                    >
                      {percent}%
                    </div>
                  ))}
                </div>
                
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-around'
                }}>
                  {Object.entries(currentGoal.allocation).map(([asset, percent]) => (
                    <div key={asset} style={{ textAlign: 'center' }}>
                      <div style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '2px',
                        background: asset === 'equity' ? '#4ade80' 
                          : asset === 'debt' ? '#60a5fa'
                          : '#fbbf24',
                        margin: '0 auto 0.3rem'
                      }} />
                      <p style={{
                        fontSize: '0.75rem',
                        color: '#94a3b8',
                        textTransform: 'capitalize'
                      }}>
                        {asset}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div style={{
                  marginTop: '1rem',
                  padding: '0.75rem',
                  background: 'rgba(20, 184, 166, 0.1)',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(20, 184, 166, 0.2)'
                }}>
                  <p style={{
                    fontSize: '0.8rem',
                    color: '#14b8a6',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <CheckCircle size={14} />
                    Risk Level: <strong>{currentGoal.riskLevel}</strong>
                  </p>
                </div>
              </div>
              
              {/* ARIA Intelligence */}
              <div style={{
                gridColumn: 'span 2',
                background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(6, 182, 212, 0.05))',
                borderRadius: '0.75rem',
                padding: '1.25rem',
                border: '1px solid rgba(20, 184, 166, 0.2)'
              }}>
                <h4 style={{
                  fontSize: '1rem',
                  color: '#14b8a6',
                  marginBottom: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <TrendingUp size={18} />
                  ARIA's Goal Optimization
                </h4>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  gap: '1rem'
                }}>
                  {[
                    { label: 'Tax Saved', value: '₹12.5L', desc: 'Through harvesting' },
                    { label: 'Extra Returns', value: '+3.8%', desc: 'vs traditional' },
                    { label: 'Rebalances', value: '47', desc: 'This year' }
                  ].map((metric, i) => (
                    <div key={i}>
                      <p style={{
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        color: '#14b8a6'
                      }}>
                        {metric.value}
                      </p>
                      <p style={{
                        fontSize: '0.8rem',
                        color: '#e2e8f0'
                      }}>
                        {metric.label}
                      </p>
                      <p style={{
                        fontSize: '0.7rem',
                        color: '#64748b'
                      }}>
                        {metric.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </AspectFrame>
  )
}
