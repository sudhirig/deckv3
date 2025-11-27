import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { AspectFrame } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import ARIAIconBadge from '../components/ARIAIconBadge'
import ARIAAvatar from '../components/ARIAAvatar'
import StanfordBadge from '../components/StanfordBadge'
import { Building2, TrendingUp, Shield, Award, Users, DollarSign, BarChart3, Lock, ChevronRight, Wallet } from 'lucide-react'
import './SlideStyles.css'

export default function ARIAAIFSlide() {
  const [hoveredTier, setHoveredTier] = useState(null)
  const [selectedStrategy, setSelectedStrategy] = useState(0)
  
  // Wealth Forge inspired AIF tiers with ARIA enhancement
  const aifTiers = [
    {
      name: 'ARIA Elite',
      minInvestment: '₹1 Cr',
      targetReturns: '18-22%',
      managementFee: '1.5%',
      performanceFee: '15%',
      color: '#60a5fa',
      features: [
        'Core AI strategies',
        'Quarterly rebalancing',
        'Tax harvesting',
        'Digital reporting'
      ],
      investors: 450,
      aum: '₹280 Cr'
    },
    {
      name: 'ARIA Prime',
      minInvestment: '₹5 Cr',
      targetReturns: '22-28%',
      managementFee: '1.25%',
      performanceFee: '20%',
      color: '#14b8a6',
      features: [
        'Advanced AI strategies',
        'Daily optimization',
        'GIFT City access',
        'Dedicated RM',
        'Custom reports'
      ],
      investors: 180,
      aum: '₹420 Cr',
      recommended: true
    },
    {
      name: 'ARIA Sovereign',
      minInvestment: '₹25 Cr',
      targetReturns: '28-35%',
      managementFee: '1%',
      performanceFee: '25%',
      color: '#fbbf24',
      features: [
        'Exclusive strategies',
        'Real-time execution',
        'Global opportunities',
        'Family office services',
        'Tax structuring',
        'Estate planning'
      ],
      investors: 35,
      aum: '₹150 Cr'
    }
  ]
  
  const strategies = [
    {
      name: 'AI Momentum Alpha',
      description: 'ML-driven momentum strategy across equities and derivatives',
      returns: '+32.4%',
      sharpe: '2.8',
      allocation: { equity: 60, derivatives: 25, commodities: 15 }
    },
    {
      name: 'GIFT City Arbitrage',
      description: 'Tax-efficient arbitrage between domestic and GIFT markets',
      returns: '+24.8%',
      sharpe: '3.2',
      allocation: { bonds: 40, forex: 30, equity: 30 }
    },
    {
      name: 'Alternative Asset AI',
      description: 'AI-optimized portfolio of REITs, InvITs, and alternative assets',
      returns: '+28.6%',
      sharpe: '2.5',
      allocation: { reits: 45, invits: 35, commodities: 20 }
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
        
        {/* Premium Background Effect */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.2,
          background: 'radial-gradient(circle at 30% 50%, #fbbf2420, transparent 50%), radial-gradient(circle at 70% 50%, #14b8a620, transparent 50%)',
          filter: 'blur(60px)'
        }} />
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            padding: '2rem 3rem 1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: 10
          }}
        >
          <div>
            {/* Module Badge */}
            <div style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(139, 92, 246, 0.15)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              borderRadius: '20px',
              padding: '0.4rem 1rem',
              marginBottom: '0.75rem'
            }}>
              <Wallet size={14} color="#8B5CF6" />
              <span style={{ color: '#8B5CF6', fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.05em' }}>
                ARIA WEALTH
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
              <h1 style={{
                fontSize: 'clamp(2rem, 3vw, 2.5rem)',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #8B5CF6, #A855F7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                ARIA AIF Tiers
              </h1>
              <ARIAIconBadge size={45} animated={true} />
            </div>
            <p style={{
              fontSize: '1rem',
              color: '#94a3b8'
            }}>
              GIFT City Gateway + AI strategies delivering the +300-500bps alpha you've been missing
            </p>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem'
          }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#fbbf24' }}>₹850 Cr</p>
              <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Total AUM</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#14b8a6' }}>665</p>
              <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Investors</p>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div style={{
          flex: 1,
          padding: '0 3rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}>
          
          {/* AIF Tiers */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem'
          }}>
            {aifTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                onHoverStart={() => setHoveredTier(index)}
                onHoverEnd={() => setHoveredTier(null)}
                style={{
                  background: hoveredTier === index 
                    ? `linear-gradient(135deg, ${tier.color}15, ${tier.color}05)`
                    : 'rgba(30, 41, 59, 0.3)',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  border: tier.recommended 
                    ? `2px solid ${tier.color}40`
                    : '1px solid rgba(148, 163, 184, 0.1)',
                  position: 'relative',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                {tier.recommended && (
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{
                      position: 'absolute',
                      top: '-0.5rem',
                      right: '1rem',
                      padding: '0.25rem 0.75rem',
                      background: 'linear-gradient(135deg, #14b8a6, #06b6d4)',
                      borderRadius: '1rem',
                      fontSize: '0.7rem',
                      color: '#fff',
                      fontWeight: '600'
                    }}
                  >
                    MOST POPULAR
                  </motion.div>
                )}
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1rem'
                }}>
                  <Building2 size={24} color={tier.color} />
                  <h3 style={{
                    fontSize: '1.3rem',
                    color: '#e2e8f0',
                    fontWeight: '600'
                  }}>
                    {tier.name}
                  </h3>
                </div>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <p style={{ fontSize: '2rem', fontWeight: 'bold', color: tier.color }}>
                    {tier.minInvestment}
                  </p>
                  <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Minimum Investment</p>
                </div>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.75rem',
                  marginBottom: '1rem'
                }}>
                  <div>
                    <p style={{ fontSize: '1.2rem', fontWeight: '600', color: '#4ade80' }}>
                      {tier.targetReturns}
                    </p>
                    <p style={{ fontSize: '0.7rem', color: '#64748b' }}>Target Returns</p>
                  </div>
                  <div>
                    <p style={{ fontSize: '1.2rem', fontWeight: '600', color: '#60a5fa' }}>
                      {tier.managementFee}
                    </p>
                    <p style={{ fontSize: '0.7rem', color: '#64748b' }}>Mgmt Fee</p>
                  </div>
                </div>
                
                <div style={{
                  borderTop: '1px solid rgba(148, 163, 184, 0.1)',
                  paddingTop: '1rem',
                  marginBottom: '1rem'
                }}>
                  {tier.features.map((feature, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '0.5rem'
                      }}
                    >
                      <div style={{
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        background: tier.color
                      }} />
                      <span style={{
                        fontSize: '0.85rem',
                        color: '#e2e8f0'
                      }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid rgba(148, 163, 184, 0.1)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Users size={14} color="#94a3b8" />
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                      {tier.investors} investors
                    </span>
                  </div>
                  <span style={{
                    fontSize: '0.85rem',
                    color: tier.color,
                    fontWeight: '600'
                  }}>
                    {tier.aum}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Strategy Performance */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '1.5rem'
          }}>
            {/* Strategies List */}
            <div style={{
              background: 'rgba(30, 41, 59, 0.3)',
              borderRadius: '1rem',
              padding: '1.5rem',
              border: '1px solid rgba(148, 163, 184, 0.1)'
            }}>
              <h3 style={{
                fontSize: '1.2rem',
                color: '#e2e8f0',
                marginBottom: '1rem'
              }}>
                Exclusive AI Strategies
              </h3>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                {strategies.map((strategy, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    onClick={() => setSelectedStrategy(index)}
                    style={{
                      padding: '1rem',
                      background: selectedStrategy === index
                        ? 'rgba(20, 184, 166, 0.1)'
                        : 'rgba(30, 41, 59, 0.5)',
                      borderRadius: '0.75rem',
                      border: selectedStrategy === index
                        ? '1px solid rgba(20, 184, 166, 0.3)'
                        : '1px solid rgba(148, 163, 184, 0.1)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'start',
                      marginBottom: '0.5rem'
                    }}>
                      <div>
                        <h4 style={{
                          fontSize: '1rem',
                          color: '#e2e8f0',
                          marginBottom: '0.3rem'
                        }}>
                          {strategy.name}
                        </h4>
                        <p style={{
                          fontSize: '0.8rem',
                          color: '#94a3b8',
                          lineHeight: '1.4'
                        }}>
                          {strategy.description}
                        </p>
                      </div>
                      <div style={{
                        textAlign: 'right'
                      }}>
                        <p style={{
                          fontSize: '1.3rem',
                          fontWeight: 'bold',
                          color: '#4ade80'
                        }}>
                          {strategy.returns}
                        </p>
                        <p style={{
                          fontSize: '0.7rem',
                          color: '#94a3b8'
                        }}>
                          Sharpe: {strategy.sharpe}
                        </p>
                      </div>
                    </div>
                    
                    {selectedStrategy === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        style={{
                          marginTop: '0.75rem',
                          paddingTop: '0.75rem',
                          borderTop: '1px solid rgba(148, 163, 184, 0.1)'
                        }}
                      >
                        <div style={{
                          display: 'flex',
                          gap: '0.5rem',
                          height: '6px',
                          borderRadius: '3px',
                          overflow: 'hidden'
                        }}>
                          {Object.entries(strategy.allocation).map(([asset, percent]) => (
                            <div
                              key={asset}
                              style={{
                                flex: percent,
                                background: asset === 'equity' ? '#4ade80'
                                  : asset === 'derivatives' ? '#fb923c'
                                  : asset === 'bonds' ? '#60a5fa'
                                  : asset === 'forex' ? '#ec4899'
                                  : asset === 'reits' ? '#14b8a6'
                                  : asset === 'invits' ? '#fbbf24'
                                  : '#8b5cf6'
                              }}
                            />
                          ))}
                        </div>
                        <div style={{
                          display: 'flex',
                          gap: '1rem',
                          marginTop: '0.5rem'
                        }}>
                          {Object.entries(strategy.allocation).map(([asset, percent]) => (
                            <span key={asset} style={{
                              fontSize: '0.7rem',
                              color: '#64748b',
                              textTransform: 'capitalize'
                            }}>
                              {asset}: {percent}%
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Performance Metrics */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              {/* ARIA Advantage */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(6, 182, 212, 0.05))',
                borderRadius: '0.75rem',
                padding: '1.25rem',
                border: '1px solid rgba(20, 184, 166, 0.2)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1rem'
                }}>
                  <ARIAAvatar size="small" variant="gradient" animated={false} />
                  <div>
                    <h4 style={{
                      fontSize: '1rem',
                      color: '#14b8a6',
                      marginBottom: '0.2rem'
                    }}>
                      ARIA Advantage
                    </h4>
                    <p style={{
                      fontSize: '0.75rem',
                      color: '#94a3b8'
                    }}>
                      AI-Powered Alpha
                    </p>
                  </div>
                </div>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.75rem'
                }}>
                  {[
                    { label: 'Avg Returns', value: '+28.6%' },
                    { label: 'Max DD', value: '-8.2%' },
                    { label: 'Win Rate', value: '73%' },
                    { label: 'Correlation', value: '0.42' }
                  ].map((metric, i) => (
                    <div key={i}>
                      <p style={{
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        color: '#14b8a6'
                      }}>
                        {metric.value}
                      </p>
                      <p style={{
                        fontSize: '0.7rem',
                        color: '#64748b'
                      }}>
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Compliance */}
              <div style={{
                background: 'rgba(30, 41, 59, 0.3)',
                borderRadius: '0.75rem',
                padding: '1.25rem',
                border: '1px solid rgba(148, 163, 184, 0.1)'
              }}>
                <h4 style={{
                  fontSize: '1rem',
                  color: '#e2e8f0',
                  marginBottom: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <Lock size={18} color="#60a5fa" />
                  Regulatory Compliance
                </h4>
                
                {[
                  'SEBI Registered',
                  'Category III AIF',
                  'FATCA Compliant',
                  'Daily NAV',
                  'Quarterly Audits'
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '0.4rem'
                    }}
                  >
                    <div style={{
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      background: '#60a5fa'
                    }} />
                    <span style={{
                      fontSize: '0.8rem',
                      color: '#94a3b8'
                    }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{
            padding: '1.5rem 3rem',
            background: 'linear-gradient(90deg, rgba(251, 191, 36, 0.1), rgba(20, 184, 166, 0.1))',
            borderTop: '1px solid rgba(148, 163, 184, 0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
            <div>
              <p style={{
                fontSize: '1.1rem',
                color: '#e2e8f0',
                fontWeight: '500',
                marginBottom: '0.3rem'
              }}>
                Join India's Most Advanced AIF
              </p>
              <p style={{
                fontSize: '0.85rem',
                color: '#94a3b8'
              }}>
                Minimum ₹1 Cr | Institutional strategies | AI-powered returns
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: 'linear-gradient(135deg, #fbbf24, #14b8a6)',
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
                Schedule Meeting <ChevronRight size={16} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: 'transparent',
                  border: '1px solid rgba(251, 191, 36, 0.3)',
                  borderRadius: '0.5rem',
                  color: '#fbbf24',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Download PPM
              </motion.button>
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            gap: '2rem'
          }}>
            {[
              { icon: Award, label: 'Best AIF 2024' },
              { icon: Shield, label: 'SEBI Registered' },
              { icon: BarChart3, label: 'Audited Returns' }
            ].map((badge, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <badge.icon size={16} color="#94a3b8" />
                <span style={{
                  fontSize: '0.8rem',
                  color: '#94a3b8'
                }}>
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </AspectFrame>
  )
}
