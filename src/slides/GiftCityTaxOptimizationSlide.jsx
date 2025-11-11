import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import GradientText from '../components/GradientText'
import AnimatedCounter from '../components/AnimatedCounter'
import Icon from '../components/Icon'
import { Calculator, TrendingUp, PiggyBank, Award, Sparkles } from 'lucide-react'
import { DataSlideLayout } from '../components/StandardLayouts'
import { pxToRem } from '../utils/responsive'
import { toFiniteNumber } from '../utils/number'
import './SlideStyles.css'

export default function GiftCityTaxOptimizationSlide() {
  const [hoveredInvestment, setHoveredInvestment] = useState(null)
  const [pulseAnimation, setPulseAnimation] = useState(true)
  
  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setPulseAnimation(prev => !prev)
    }, 2000)
    
    return () => {
      clearInterval(pulseInterval)
    }
  }, [])
  
  const taxComparison = [
    { type: 'Direct Equity', mainland: 30, giftCity: 10, color: '#ef4444' },
    { type: 'Mutual Funds', mainland: 20, giftCity: 10, color: '#f59e0b' },
    { type: 'GST on Services', mainland: 18, giftCity: 0, color: '#8b5cf6' },
    { type: 'Capital Gains', mainland: 20, giftCity: 0, color: '#06b6d4' }
  ]
  
  const investmentOptions = [
    { 
      type: 'Traditional Equity',
      tax: 30,
      postTax: 70,
      fiveYearReturn: 350,
      color: '#ef4444',
      iconType: 'trending',
      iconGradient: 'from-red-400 to-pink-400'
    },
    { 
      type: 'Mutual Funds',
      tax: 20,
      postTax: 80,
      fiveYearReturn: 400,
      color: '#f59e0b',
      iconType: 'barChart',
      iconGradient: 'from-orange-400 to-amber-400'
    },
    { 
      type: 'GIFT City AIF',
      tax: 10,
      postTax: 90,
      fiveYearReturn: 450,
      color: '#10b981',
      iconType: 'rocket',
      iconGradient: 'from-orange-400 to-amber-400'
    }
  ]

  const mainVisual = (
    <>
      {/* Hero Savings Display */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, type: 'spring' }}
        style={{
          textAlign: 'center',
          marginBottom: '2rem',
          padding: '2rem',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%)',
          borderRadius: '1.5rem',
          position: 'relative',
          overflow: 'visible'
        }}
      >
        {/* Sparkle Effects */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              rotate: [0, 180]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3
            }}
            style={{
              position: 'absolute',
              top: `${20 + i * 15}%`,
              left: `${10 + i * 15}%`,
              color: '#fbbf24'
            }}
          >
            <Sparkles size={20} />
          </motion.div>
        ))}
        
        <motion.div
          animate={{ 
            scale: pulseAnimation ? [1, 1.05, 1] : 1,
            rotate: pulseAnimation ? [0, 2, -2, 0] : 0
          }}
          transition={{ duration: 2 }}
        >
          <h3 style={{ 
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '0.5rem'
          }}>
            <GradientText gradient="from-green-400 to-yellow-400">
              ₹<AnimatedCounter end={10 || 0} duration={2000} /> Lakh
            </GradientText>
          </h3>
          <p style={{ color: '#10b981', fontSize: '1.2rem', fontWeight: 'bold' }}>
            5-Year Tax Savings
          </p>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            Through GIFT City optimization
          </p>
        </motion.div>
      </motion.div>

      {/* Visual Tax Comparison */}
      <div style={{
        padding: '1.5rem',
        background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(255, 255, 255, 0.02))',
        backdropFilter: 'blur(1.25rem)',
        borderRadius: '1.25rem',
        border: '2px solid rgba(6, 182, 212, 0.3)'
      }}>
        <h3 style={{ 
          fontSize: '1.2rem',
          color: '#06b6d4',
          marginBottom: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <Calculator size={24} />
          Tax Rate Comparison
        </h3>
        
        {taxComparison.map((item, index) => (
          <motion.div
            key={item.type}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            style={{ marginBottom: '1rem' }}
          >
            <div style={{ 
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '0.5rem'
            }}>
              <span style={{ color: '#e2e8f0', fontSize: '0.9rem' }}>
                {item.type}
              </span>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <motion.span
                  animate={{ opacity: pulseAnimation ? 0.5 : 1 }}
                  style={{ color: '#ef4444' }}
                >
                  {item.mainland}%
                </motion.span>
                <span style={{ color: '#64748b' }}>→</span>
                <motion.span
                  animate={{ 
                    scale: pulseAnimation ? 1.1 : 1,
                    color: pulseAnimation ? '#10b981' : '#22c55e'
                  }}
                  style={{ fontWeight: 'bold' }}
                >
                  {item.giftCity}%
                </motion.span>
              </div>
            </div>
            
            {/* Animated Comparison Bar */}
            <div style={{ 
              height: '0.5rem',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '0.25rem',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${item.mainland}%` }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
                style={{
                  position: 'absolute',
                  height: '100%',
                  background: '#ef4444',
                  opacity: 0.7
                }}
              />
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${item.giftCity}%` }}
                transition={{ delay: 1.0 + index * 0.1, duration: 0.6 }}
                style={{
                  position: 'absolute',
                  height: '100%',
                  background: `linear-gradient(90deg, ${item.color}, #10b981)`,
                  boxShadow: `0 0 1.25rem ${item.color}50`
                }}
              />
            </div>
          </motion.div>
        ))}
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          style={{
            marginTop: '1.5rem',
            padding: '1rem',
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(251, 191, 36, 0.1))',
            borderRadius: '0.75rem',
            textAlign: 'center'
          }}
        >
          <motion.p
            animate={{ 
              scale: [1, 1.02, 1],
              color: ['#10b981', '#fbbf24', '#10b981']
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
          >
            66% Lower Taxes
          </motion.p>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
            vs Mainland Funds
          </p>
        </motion.div>
      </div>
    </>
  )

  const keyInsights = (
    <div style={{
      padding: '1.5rem',
      background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(255, 255, 255, 0.02))',
      backdropFilter: 'blur(1.25rem)',
      borderRadius: '1.25rem',
      border: '2px solid rgba(168, 85, 247, 0.3)'
    }}>
      <h3 style={{ 
        fontSize: '1.2rem',
        color: '#a855f7',
        marginBottom: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        <TrendingUp size={24} />
        ₹1 Crore Investment (5 Years)
      </h3>
      
      {investmentOptions.map((option, index) => (
        <motion.div
          key={option.type}
          initial={{ opacity: 0, y: pxToRem(20) }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 + index * 0.15 }}
          whileHover={{ scale: 1.02, x: pxToRem(5) }}
          onHoverStart={() => setHoveredInvestment(option.type)}
          onHoverEnd={() => setHoveredInvestment(null)}
          style={{
            marginBottom: '1rem',
            padding: '1rem',
            background: `linear-gradient(135deg, ${option.color}20, rgba(0, 0, 0, 0.3))`,
            borderRadius: '0.75rem',
            border: `1px solid ${option.color}40`,
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Hover Glow */}
          {hoveredInvestment === option.type && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `radial-gradient(circle at center, ${option.color}20, transparent)`,
                zIndex: 0
              }}
            />
          )}
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ 
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '0.5rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <motion.div
                  animate={{ 
                    rotate: hoveredInvestment === option.type ? [0, 10, -10, 0] : 0
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon type={option.iconType} size={24} variant="inline" gradient={option.iconGradient} />
                </motion.div>
                <span style={{ color: '#e2e8f0', fontWeight: 'bold' }}>
                  {option.type}
                </span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ color: option.color, fontWeight: 'bold' }}>
                  {option.tax}% Tax
                </p>
              </div>
            </div>
            
            {/* Returns Visualization */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <div style={{ 
                  height: '0.375rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '0.1875rem',
                  overflow: 'hidden'
                }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${option.postTax}%` }}
                    transition={{ delay: 1.1 + index * 0.15, duration: 0.8 }}
                    style={{
                      height: '100%',
                      background: `linear-gradient(90deg, ${option.color}, ${option.color}80)`,
                      boxShadow: `0 0 0.625rem ${option.color}50`
                    }}
                  />
                </div>
                <p style={{ 
                  fontSize: '0.75rem',
                  color: '#64748b',
                  marginTop: '0.25rem'
                }}>
                  {option.postTax}% Post-Tax Returns
                </p>
              </div>
              
              <motion.div
                animate={{ 
                  scale: hoveredInvestment === option.type ? 1.1 : 1,
                  y: hoveredInvestment === option.type ? pxToRem(-2) : 0
                }}
                style={{ 
                  padding: '0.5rem',
                  background: `${option.color}20`,
                  borderRadius: '0.5rem'
                }}
              >
                <p style={{ 
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  color: option.color
                }}>
                  ₹<AnimatedCounter end={toFiniteNumber(option.fiveYearReturn)} duration={2} />L
                </p>
                <p style={{ fontSize: '0.65rem', color: '#64748b' }}>
                  5Y Returns
                </p>
              </motion.div>
            </div>
            
            {option.type === 'GIFT City AIF' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                style={{
                  marginTop: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <Award size={16} color="#10b981" />
                <span style={{ 
                  fontSize: '0.8rem',
                  color: '#10b981',
                  fontWeight: 'bold'
                }}>
                  Best Tax Efficiency
                </span>
              </motion.div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  )

  const supportingData = (
    <motion.div
      initial={{ opacity: 0, y: pxToRem(30) }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.6 }}
      style={{
        marginTop: '2rem',
        padding: '1.5rem 2rem',
        background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.15), rgba(16, 185, 129, 0.1))',
        borderRadius: '1.25rem',
        border: '2px solid rgba(251, 191, 36, 0.3)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <div>
        <h4 style={{ 
          fontSize: '1.3rem',
          color: '#fbbf24',
          marginBottom: '0.5rem'
        }}>
          Your Total Savings Over 5 Years
        </h4>
        <p style={{ color: '#94a3b8' }}>
          Through GIFT City tax optimization structure
        </p>
      </div>
      
      <motion.div
        animate={{ 
          scale: [1, 1.05, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          padding: '1rem 1.5rem',
          background: 'linear-gradient(135deg, #10b981, #fbbf24)',
          borderRadius: '1rem'
        }}
      >
        <PiggyBank size={40} color="#fff" />
        <div>
          <p style={{ 
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#fff'
          }}>
            ₹10L+
          </p>
          <p style={{ 
            fontSize: '0.8rem',
            color: 'rgba(255, 255, 255, 0.9)'
          }}>
            Tax Saved
          </p>
        </div>
      </motion.div>
    </motion.div>
  )

  const particles = (
    <>
      
      {/* Money Particle Rain Effect */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: ['-10vh', '110vh'],
            x: [Math.random() * 20 - 10, Math.random() * 20 - 10],
            rotate: [0, 360],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 0.3,
            ease: 'linear'
          }}
          style={{
            position: 'absolute',
            left: `${5 + i * 5}%`,
            top: 0,
            fontSize: '1.5rem',
            color: i % 3 === 0 ? '#10b981' : i % 3 === 1 ? '#fbbf24' : '#8b5cf6',
            zIndex: 1,
            pointerEvents: 'none'
          }}
        >
          ₹
        </motion.div>
      ))}
      
      {/* Animated Gradient Background */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 30% 30%, rgba(16, 185, 129, 0.15) 0%, transparent 60%)',
            'radial-gradient(circle at 70% 60%, rgba(251, 191, 36, 0.15) 0%, transparent 60%)',
            'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 60%)',
            'radial-gradient(circle at 30% 30%, rgba(16, 185, 129, 0.15) 0%, transparent 60%)'
          ]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 2
        }}
      />
    </>
  )

  return (
    <DataSlideLayout
      title={
        <>
          <GradientText gradient="from-green-400 via-emerald-400 to-yellow-400">
            Tax Optimization Showcase
          </GradientText>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ 
              textAlign: 'center', 
              color: '#94a3b8', 
              fontSize: '1.2rem',
              marginTop: '0.5rem'
            }}
          >
            Real Savings for Real Investors
          </motion.p>
        </>
      }
      mainVisual={mainVisual}
      keyInsights={keyInsights}
      supportingData={supportingData}
      particles={particles}
    />
  )
}
