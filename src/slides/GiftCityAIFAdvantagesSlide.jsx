import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ParticleBackground from '../components/ParticleBackground'
import GradientText from '../components/GradientText'
import AnimatedCounter from '../components/AnimatedCounter'
import { DollarSign, Shield, Globe, Zap, TrendingUp, Award, Percent, CheckCircle2, AlertCircle } from 'lucide-react'
import './SlideStyles.css'

export default function GiftCityAIFAdvantagesSlide() {
  const [hoveredCard, setHoveredCard] = useState(null)
  const [comparisonAnimation, setComparisonAnimation] = useState(true)
  const [pulseAnimation, setPulseAnimation] = useState(true)
  
  useEffect(() => {
    const comparisonInterval = setInterval(() => {
      setComparisonAnimation(prev => !prev)
    }, 3000)
    
    const pulseInterval = setInterval(() => {
      setPulseAnimation(prev => !prev)
    }, 2000)
    
    return () => {
      clearInterval(comparisonInterval)
      clearInterval(pulseInterval)
    }
  }, [])
  
  const advantages = [
    {
      id: 'tax',
      title: 'Tax Efficiency',
      icon: DollarSign,
      color: '#10b981',
      metrics: [
        { label: 'Corporate Tax', mainland: 30, giftCity: 10, unit: '%' },
        { label: 'GST on Services', mainland: 18, giftCity: 0, unit: '%' },
        { label: 'Capital Gains', mainland: 20, giftCity: 0, unit: '%' },
        { label: 'Withholding Tax', mainland: 'Yes', giftCity: 'Exempt', unit: '' }
      ]
    },
    {
      id: 'regulatory',
      title: 'Regulatory Edge',
      icon: Shield,
      color: '#3b82f6',
      features: [
        { title: 'IFSCA Oversight', desc: 'World-class regulatory framework' },
        { title: '100% Foreign Ownership', desc: 'No restrictions on LP nationality' },
        { title: 'USD Denominated', desc: 'Natural hedge against INR volatility' },
        { title: 'Single Window Clearance', desc: 'Fast-track approvals' }
      ]
    },
    {
      id: 'market',
      title: 'Market Access',
      icon: Globe,
      color: '#8b5cf6',
      access: [
        { market: 'Indian Markets', exchanges: ['NSE', 'BSE', 'MCX'], direct: true },
        { market: 'Global Markets', exchanges: ['NYSE', 'NASDAQ', 'LSE'], direct: true },
        { market: 'Alternative Assets', exchanges: ['Crypto', 'Commodities'], direct: true }
      ]
    },
    {
      id: 'performance',
      title: 'Performance Edge',
      icon: Zap,
      color: '#f59e0b',
      capabilities: [
        { feature: 'Low Latency Trading', spec: 'Direct exchange connectivity' },
        { feature: '24/7 Operations', spec: 'Trade global markets round the clock' },
        { feature: 'Leverage Allowed', spec: 'Up to 10x for sophisticated strategies' },
        { feature: 'Multi-Asset Support', spec: 'Equities, derivatives, forex, crypto' }
      ]
    }
  ]
  
  return (
    <div className="slide-content" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Premium Particle Animation */}
      <ParticleBackground count={48} color="#10b981" />
      
      {/* Animated Gradient Background */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 60%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1
        }}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ position: 'relative', zIndex: 3 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="slide-title"
          style={{ textAlign: 'center', marginBottom: '0.5rem' }}
        >
          <GradientText gradient="from-green-400 via-blue-400 to-purple-400">
            Category III AIF Advantages
          </GradientText>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ 
            textAlign: 'center', 
            color: '#94a3b8', 
            fontSize: '1.2rem',
            marginBottom: '2rem'
          }}
        >
          Why GIFT City Makes Our Fund Superior
        </motion.p>
        
        {/* Four Advantages Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(2, 1fr)', 
          gap: '1.5rem',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {/* Tax Efficiency Card */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ delay: 0.4, type: 'spring' }}
            whileHover={{ scale: 1.03, y: -5 }}
            onHoverStart={() => setHoveredCard('tax')}
            onHoverEnd={() => setHoveredCard(null)}
            style={{
              padding: '1.5rem',
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(255, 255, 255, 0.02))',
              backdropFilter: 'blur(20px)',
              borderRadius: '20px',
              border: '2px solid rgba(16, 185, 129, 0.3)',
              position: 'relative',
              overflow: 'visible'
            }}
          >
            {hoveredCard === 'tax' && (
              <motion.div
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '-20px',
                  right: '-20px',
                  bottom: '-20px',
                  background: 'radial-gradient(circle, rgba(16, 185, 129, 0.3), transparent)',
                  borderRadius: '24px',
                  filter: 'blur(20px)',
                  zIndex: -1
                }}
              />
            )}
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <motion.div
                animate={{ rotate: pulseAnimation ? 0 : 360 }}
                transition={{ duration: 2 }}
              >
                <DollarSign size={28} color="#10b981" />
              </motion.div>
              <h3 style={{ fontSize: '1.3rem', color: '#10b981' }}>Tax Efficiency</h3>
            </div>
            
            {advantages[0].metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.75rem',
                  padding: '0.5rem',
                  background: 'rgba(0, 0, 0, 0.2)',
                  borderRadius: '8px'
                }}
              >
                <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{metric.label}</span>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  {typeof metric.mainland === 'number' ? (
                    <>
                      <motion.span
                        animate={{ 
                          opacity: comparisonAnimation ? 0.5 : 1,
                          scale: comparisonAnimation ? 0.95 : 1
                        }}
                        style={{ color: '#ef4444' }}
                      >
                        {metric.mainland}{metric.unit}
                      </motion.span>
                      <span style={{ color: '#64748b' }}>→</span>
                      <motion.span
                        animate={{ 
                          scale: comparisonAnimation ? 1.1 : 1,
                          color: comparisonAnimation ? '#10b981' : '#22c55e'
                        }}
                        style={{ fontWeight: 'bold' }}
                      >
                        {metric.giftCity}{metric.unit}
                      </motion.span>
                    </>
                  ) : (
                    <motion.span
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{ color: '#10b981', fontWeight: 'bold' }}
                    >
                      {metric.giftCity}
                    </motion.span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Regulatory Edge Card */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotateY: 15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ delay: 0.5, type: 'spring' }}
            whileHover={{ scale: 1.03, y: -5 }}
            onHoverStart={() => setHoveredCard('regulatory')}
            onHoverEnd={() => setHoveredCard(null)}
            style={{
              padding: '1.5rem',
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(255, 255, 255, 0.02))',
              backdropFilter: 'blur(20px)',
              borderRadius: '20px',
              border: '2px solid rgba(59, 130, 246, 0.3)',
              position: 'relative',
              overflow: 'visible'
            }}
          >
            {hoveredCard === 'regulatory' && (
              <motion.div
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '-20px',
                  right: '-20px',
                  bottom: '-20px',
                  background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent)',
                  borderRadius: '24px',
                  filter: 'blur(20px)',
                  zIndex: -1
                }}
              />
            )}
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <motion.div
                animate={{ y: pulseAnimation ? 0 : -5 }}
                transition={{ duration: 0.5 }}
              >
                <Shield size={28} color="#3b82f6" />
              </motion.div>
              <h3 style={{ fontSize: '1.3rem', color: '#3b82f6' }}>Regulatory Edge</h3>
            </div>
            
            {advantages[1].features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                style={{
                  marginBottom: '0.75rem',
                  display: 'flex',
                  alignItems: 'start',
                  gap: '0.5rem'
                }}
              >
                <motion.div
                  animate={{ 
                    scale: hoveredCard === 'regulatory' ? [1, 1.2, 1] : 1
                  }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CheckCircle2 size={18} color="#3b82f6" style={{ marginTop: '2px' }} />
                </motion.div>
                <div>
                  <p style={{ color: '#e2e8f0', fontWeight: 'bold', fontSize: '0.9rem' }}>
                    {feature.title}
                  </p>
                  <p style={{ color: '#64748b', fontSize: '0.8rem' }}>
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Market Access Card */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ delay: 0.6, type: 'spring' }}
            whileHover={{ scale: 1.03, y: -5 }}
            onHoverStart={() => setHoveredCard('market')}
            onHoverEnd={() => setHoveredCard(null)}
            style={{
              padding: '1.5rem',
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(255, 255, 255, 0.02))',
              backdropFilter: 'blur(20px)',
              borderRadius: '20px',
              border: '2px solid rgba(139, 92, 246, 0.3)',
              position: 'relative',
              overflow: 'visible'
            }}
          >
            {hoveredCard === 'market' && (
              <motion.div
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '-20px',
                  right: '-20px',
                  bottom: '-20px',
                  background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent)',
                  borderRadius: '24px',
                  filter: 'blur(20px)',
                  zIndex: -1
                }}
              />
            )}
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <motion.div
                animate={{ rotate: pulseAnimation ? 0 : 360 }}
                transition={{ duration: 3 }}
              >
                <Globe size={28} color="#8b5cf6" />
              </motion.div>
              <h3 style={{ fontSize: '1.3rem', color: '#8b5cf6' }}>Market Access</h3>
            </div>
            
            {advantages[2].access.map((access, index) => (
              <motion.div
                key={access.market}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                style={{
                  marginBottom: '0.75rem',
                  padding: '0.5rem',
                  background: 'rgba(139, 92, 246, 0.1)',
                  borderRadius: '8px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#e2e8f0', fontWeight: 'bold', fontSize: '0.9rem' }}>
                    {access.market}
                  </span>
                  <motion.span
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    style={{ color: '#10b981', fontSize: '0.8rem' }}
                  >
                    Direct Access
                  </motion.span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.25rem' }}>
                  {access.exchanges.map((exchange) => (
                    <span
                      key={exchange}
                      style={{
                        padding: '0.2rem 0.5rem',
                        background: 'rgba(139, 92, 246, 0.2)',
                        borderRadius: '4px',
                        fontSize: '0.7rem',
                        color: '#a78bfa'
                      }}
                    >
                      {exchange}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Performance Edge Card */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotateY: 15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ delay: 0.7, type: 'spring' }}
            whileHover={{ scale: 1.03, y: -5 }}
            onHoverStart={() => setHoveredCard('performance')}
            onHoverEnd={() => setHoveredCard(null)}
            style={{
              padding: '1.5rem',
              background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(255, 255, 255, 0.02))',
              backdropFilter: 'blur(20px)',
              borderRadius: '20px',
              border: '2px solid rgba(245, 158, 11, 0.3)',
              position: 'relative',
              overflow: 'visible'
            }}
          >
            {hoveredCard === 'performance' && (
              <motion.div
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '-20px',
                  right: '-20px',
                  bottom: '-20px',
                  background: 'radial-gradient(circle, rgba(245, 158, 11, 0.3), transparent)',
                  borderRadius: '24px',
                  filter: 'blur(20px)',
                  zIndex: -1
                }}
              />
            )}
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: pulseAnimation ? 1.1 : 1
                }}
                transition={{ duration: 0.5 }}
              >
                <Zap size={28} color="#f59e0b" />
              </motion.div>
              <h3 style={{ fontSize: '1.3rem', color: '#f59e0b' }}>Performance Edge</h3>
            </div>
            
            {advantages[3].capabilities.map((capability, index) => (
              <motion.div
                key={capability.feature}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                style={{
                  marginBottom: '0.75rem',
                  display: 'flex',
                  alignItems: 'start',
                  gap: '0.5rem'
                }}
              >
                <motion.span
                  animate={{ 
                    rotate: hoveredCard === 'performance' ? [0, 180, 360] : 0
                  }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  style={{ color: '#f59e0b' }}
                >
                  ⚡
                </motion.span>
                <div>
                  <p style={{ color: '#e2e8f0', fontWeight: 'bold', fontSize: '0.9rem' }}>
                    {capability.feature}
                  </p>
                  <p style={{ color: '#64748b', fontSize: '0.8rem' }}>
                    {capability.spec}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Bottom Comparison Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          style={{
            marginTop: '2rem',
            padding: '1.5rem',
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(59, 130, 246, 0.1))',
            borderRadius: '20px',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            textAlign: 'center'
          }}
        >
          <motion.div
            animate={{ scale: comparisonAnimation ? [1, 1.02, 1] : 1 }}
            transition={{ duration: 2 }}
          >
            <p style={{ fontSize: '1.1rem', color: '#94a3b8', marginBottom: '0.5rem' }}>
              Mainland India Fund: 
              <span style={{ color: '#ef4444', fontWeight: 'bold' }}> 30% tax + 18% GST</span>
              <span style={{ color: '#64748b' }}> vs </span>
              GIFT City AIF: 
              <span style={{ color: '#10b981', fontWeight: 'bold' }}> 10% tax + 0% GST</span>
            </p>
            
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.4, type: 'spring' }}
            >
              <p style={{ 
                fontSize: '2rem',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #10b981, #06b6d4)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                38% Cost Advantage
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}