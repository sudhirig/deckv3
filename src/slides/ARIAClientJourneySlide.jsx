import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AspectFrame } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import ARIAIconBadge from '../components/ARIAIconBadge'
import ARIAAvatar from '../components/ARIAAvatar'
import StanfordBadge from '../components/StanfordBadge'
import { TrendingUp, Shield, Globe, Brain, Star, Award, Users, ChevronRight, Check, Clock, DollarSign } from 'lucide-react'
import './SlideStyles.css'

export default function ARIAClientJourneySlide() {
  const [selectedClient, setSelectedClient] = useState(0)
  
  const clients = [
    {
      name: 'Rajesh Mehta',
      role: 'Tech Entrepreneur',
      location: 'Mumbai',
      portfolio: '₹12.3 Cr',
      joinDate: 'March 2024',
      avatar: '👨‍💼',
      story: 'Sold his startup and needed sophisticated wealth management',
      results: {
        returns: '+24.6%',
        taxSaved: '₹48L',
        riskReduced: '35%',
        timeframe: '8 months'
      },
      highlight: 'GIFT City investments yielded 2.8% additional tax-free returns',
      testimonial: 'ARIA transformed how I manage wealth. The voice trading saves me hours daily, and the tax harvesting alone paid for the service 10x over.'
    },
    {
      name: 'Priya Sharma',
      role: 'Senior Doctor',
      location: 'Delhi',
      portfolio: '₹8.5 Cr',
      joinDate: 'June 2024',
      avatar: '👩‍⚕️',
      story: 'Busy professional with no time for active portfolio management',
      results: {
        returns: '+19.2%',
        taxSaved: '₹31L',
        riskReduced: '42%',
        timeframe: '5 months'
      },
      highlight: 'AI rebalancing prevented ₹1.2Cr loss during market volatility',
      testimonial: 'As a doctor, I have zero time for markets. ARIA manages everything while I focus on patients. The results speak for themselves.'
    },
    {
      name: 'Amit Agarwal',
      role: 'Family Business Owner',
      location: 'Kolkata',
      portfolio: '₹25.7 Cr',
      joinDate: 'January 2024',
      avatar: '👨‍💼',
      story: 'Multi-generational wealth seeking modernization and growth',
      results: {
        returns: '+31.4%',
        taxSaved: '₹92L',
        riskReduced: '28%',
        timeframe: '10 months'
      },
      highlight: 'Alternative investments via GIFT City diversified portfolio globally',
      testimonial: 'Three generations of wealth, but ARIA brought strategies we never imagined. The AI caught opportunities our traditional advisors missed.'
    }
  ]
  
  const currentClient = clients[selectedClient]
  
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
                The 46% Who Switched to ARIA
              </h1>
              <ARIAIconBadge size={45} animated={true} />
            </div>
            <p style={{ fontSize: '0.95rem', color: '#94a3b8' }}>
              Real HNWIs solving the three failures with their AI CEO
            </p>
          </div>
          
          {/* Stats Summary */}
          <div style={{
            display: 'flex',
            gap: '2rem',
            padding: '0.75rem 1.5rem',
            background: 'rgba(30, 41, 59, 0.5)',
            borderRadius: '1rem',
            border: '1px solid rgba(148, 163, 184, 0.1)'
          }}>
            {[
              { label: 'Avg Returns', value: '+25.1%', icon: TrendingUp, color: '#4ade80' },
              { label: 'Tax Saved', value: '₹57L', icon: DollarSign, color: '#14b8a6' },
              { label: 'Risk Reduced', value: '35%', icon: Shield, color: '#60a5fa' }
            ].map((stat, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <stat.icon size={16} color={stat.color} />
                <div>
                  <p style={{ fontSize: '0.7rem', color: '#94a3b8' }}>{stat.label}</p>
                  <p style={{ fontSize: '0.95rem', color: stat.color, fontWeight: '600' }}>{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Main Content */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '300px 1fr 380px',
          gap: '2rem',
          padding: '0 3rem 2rem'
        }}>
          
          {/* Left: Client Selector */}
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
              fontSize: '1rem',
              color: '#94a3b8',
              marginBottom: '0.5rem'
            }}>
              Select Client Story
            </h3>
            
            {clients.map((client, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 5 }}
                onClick={() => setSelectedClient(index)}
                style={{
                  padding: '1rem',
                  background: selectedClient === index 
                    ? `linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(6, 182, 212, 0.1))`
                    : 'rgba(30, 41, 59, 0.3)',
                  border: selectedClient === index
                    ? '1px solid rgba(20, 184, 166, 0.3)'
                    : '1px solid rgba(148, 163, 184, 0.1)',
                  borderRadius: '0.75rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>{client.avatar}</span>
                  <div style={{ flex: 1 }}>
                    <h4 style={{
                      fontSize: '0.95rem',
                      color: '#e2e8f0',
                      marginBottom: '0.2rem',
                      fontWeight: '600'
                    }}>
                      {client.name}
                    </h4>
                    <p style={{
                      fontSize: '0.75rem',
                      color: '#94a3b8'
                    }}>
                      {client.role}
                    </p>
                    <p style={{
                      fontSize: '0.7rem',
                      color: '#64748b'
                    }}>
                      {client.location} • {client.portfolio}
                    </p>
                  </div>
                  <ChevronRight 
                    size={16} 
                    color={selectedClient === index ? '#14b8a6' : '#64748b'} 
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Center: Journey Timeline */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedClient}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}
            >
              {/* Client Header */}
              <div style={{
                background: 'rgba(30, 41, 59, 0.3)',
                borderRadius: '1rem',
                padding: '1.5rem',
                border: '1px solid rgba(148, 163, 184, 0.1)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                      <span style={{ fontSize: '3rem' }}>{currentClient.avatar}</span>
                      <div>
                        <h2 style={{
                          fontSize: '1.5rem',
                          color: '#e2e8f0',
                          fontWeight: '600'
                        }}>
                          {currentClient.name}
                        </h2>
                        <p style={{
                          fontSize: '0.9rem',
                          color: '#94a3b8'
                        }}>
                          {currentClient.role}, {currentClient.location}
                        </p>
                      </div>
                    </div>
                    <p style={{
                      fontSize: '0.95rem',
                      color: '#cbd5e1',
                      lineHeight: '1.5',
                      marginTop: '0.5rem'
                    }}>
                      {currentClient.story}
                    </p>
                  </div>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    gap: '0.3rem'
                  }}>
                    <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Joined</span>
                    <span style={{ fontSize: '0.9rem', color: '#14b8a6', fontWeight: '600' }}>
                      {currentClient.joinDate}
                    </span>
                  </div>
                </div>
              </div>

              {/* Results Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem'
              }}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  style={{
                    background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.1), rgba(34, 197, 94, 0.05))',
                    borderRadius: '0.75rem',
                    padding: '1.25rem',
                    border: '1px solid rgba(74, 222, 128, 0.2)'
                  }}
                >
                  <TrendingUp size={20} color="#4ade80" />
                  <h3 style={{
                    fontSize: '1.8rem',
                    color: '#4ade80',
                    fontWeight: 'bold',
                    marginTop: '0.5rem'
                  }}>
                    {currentClient.results.returns}
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Portfolio Returns</p>
                  <p style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '0.3rem' }}>
                    in {currentClient.results.timeframe}
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  style={{
                    background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(6, 182, 212, 0.05))',
                    borderRadius: '0.75rem',
                    padding: '1.25rem',
                    border: '1px solid rgba(20, 184, 166, 0.2)'
                  }}
                >
                  <DollarSign size={20} color="#14b8a6" />
                  <h3 style={{
                    fontSize: '1.8rem',
                    color: '#14b8a6',
                    fontWeight: 'bold',
                    marginTop: '0.5rem'
                  }}>
                    {currentClient.results.taxSaved}
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Tax Saved</p>
                  <p style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '0.3rem' }}>
                    via AI harvesting
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  style={{
                    background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.1), rgba(59, 130, 246, 0.05))',
                    borderRadius: '0.75rem',
                    padding: '1.25rem',
                    border: '1px solid rgba(96, 165, 250, 0.2)'
                  }}
                >
                  <Shield size={20} color="#60a5fa" />
                  <h3 style={{
                    fontSize: '1.8rem',
                    color: '#60a5fa',
                    fontWeight: 'bold',
                    marginTop: '0.5rem'
                  }}>
                    -{currentClient.results.riskReduced}
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Risk Reduced</p>
                  <p style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '0.3rem' }}>
                    better Sharpe ratio
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  style={{
                    background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(219, 39, 119, 0.05))',
                    borderRadius: '0.75rem',
                    padding: '1.25rem',
                    border: '1px solid rgba(236, 72, 153, 0.2)'
                  }}
                >
                  <Globe size={20} color="#ec4899" />
                  <h3 style={{
                    fontSize: '1.8rem',
                    color: '#ec4899',
                    fontWeight: 'bold',
                    marginTop: '0.5rem'
                  }}>
                    GIFT
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>City Access</p>
                  <p style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '0.3rem' }}>
                    tax-free gains
                  </p>
                </motion.div>
              </div>

              {/* Key Highlight */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                style={{
                  background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(249, 115, 22, 0.05))',
                  borderRadius: '0.75rem',
                  padding: '1.25rem',
                  border: '1px solid rgba(251, 191, 36, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <Award size={24} color="#fbbf24" />
                <div>
                  <p style={{ fontSize: '0.85rem', color: '#fbbf24', fontWeight: '600', marginBottom: '0.3rem' }}>
                    Key Achievement
                  </p>
                  <p style={{ fontSize: '0.95rem', color: '#e2e8f0' }}>
                    {currentClient.highlight}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Right: Testimonial & ARIA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}
          >
            {/* ARIA Avatar */}
            <div style={{
              background: 'radial-gradient(circle at center, rgba(20, 184, 166, 0.1), transparent)',
              borderRadius: '1rem',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <ARIAAvatar size="medium" variant="gradient" animated={true} showPulse={false} />
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ color: '#14b8a6', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                  Powered by ARIA
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: '1.4' }}>
                  68+ AI specialists working 24/7 to optimize wealth
                </p>
              </div>
            </div>

            {/* Client Testimonial */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedClient}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                style={{
                  background: 'rgba(30, 41, 59, 0.3)',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  border: '1px solid rgba(148, 163, 184, 0.1)',
                  position: 'relative'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  display: 'flex',
                  gap: '0.2rem'
                }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#fbbf24" color="#fbbf24" />
                  ))}
                </div>
                
                <p style={{
                  fontSize: '1.05rem',
                  color: '#e2e8f0',
                  lineHeight: '1.6',
                  fontStyle: 'italic',
                  marginTop: '0.5rem'
                }}>
                  "{currentClient.testimonial}"
                </p>
                
                <div style={{
                  marginTop: '1rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(148, 163, 184, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <span style={{ fontSize: '1.5rem' }}>{currentClient.avatar}</span>
                  <div>
                    <p style={{ fontSize: '0.9rem', color: '#e2e8f0', fontWeight: '600' }}>
                      {currentClient.name}
                    </p>
                    <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                      {currentClient.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Trust Indicators */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0.75rem'
            }}>
              {[
                { icon: Users, label: '50+ CPAs', value: 'Partners' },
                { icon: Shield, label: 'SEBI', value: 'Registered' },
                { icon: Award, label: 'Patent', value: 'Pending' },
                { icon: Clock, label: '24/7', value: 'Support' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    background: 'rgba(30, 41, 59, 0.3)',
                    borderRadius: '0.5rem',
                    padding: '0.75rem',
                    border: '1px solid rgba(148, 163, 184, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <item.icon size={16} color="#14b8a6" />
                  <div>
                    <p style={{ fontSize: '0.7rem', color: '#64748b' }}>{item.label}</p>
                    <p style={{ fontSize: '0.75rem', color: '#e2e8f0', fontWeight: '600' }}>
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{
            padding: '1.5rem 3rem',
            background: 'linear-gradient(90deg, rgba(20, 184, 166, 0.1), rgba(6, 182, 212, 0.1))',
            borderTop: '1px solid rgba(20, 184, 166, 0.2)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <p style={{
              fontSize: '1.1rem',
              color: '#e2e8f0',
              fontWeight: '500'
            }}>
              Join 1,000+ HNWIs transforming their wealth with ARIA
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
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
                Start Your Journey <ChevronRight size={16} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: 'transparent',
                  border: '1px solid rgba(20, 184, 166, 0.3)',
                  borderRadius: '0.5rem',
                  color: '#14b8a6',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                View Demo
              </motion.button>
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <Check size={16} color="#4ade80" />
            <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
              Results verified by independent auditors
            </span>
          </div>
        </motion.div>
      </div>
    </AspectFrame>
  )
}
