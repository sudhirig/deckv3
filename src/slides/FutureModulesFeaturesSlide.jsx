import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ParticleBackground from '../components/ParticleBackground'
import GradientText from '../components/GradientText'
import { DollarSign, Link, Cloud, Shield, Bitcoin, Cpu, Globe, Rocket, Sparkles, TrendingUp } from 'lucide-react'
import { GridLayout } from '../components/StandardLayouts'
import './SlideStyles.css'

export default function FutureModulesFeaturesSlide() {
  const [hoveredCard, setHoveredCard] = useState(null)
  const [pulseAnimation, setPulseAnimation] = useState(true)
  const [floatAnimation, setFloatAnimation] = useState(true)
  
  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setPulseAnimation(prev => !prev)
    }, 2000)
    
    const floatInterval = setInterval(() => {
      setFloatAnimation(prev => !prev)
    }, 3000)
    
    return () => {
      clearInterval(pulseInterval)
      clearInterval(floatInterval)
    }
  }, [])
  
  const title = (
    <GradientText gradient="from-yellow-400 via-orange-400 to-red-400">
      Future Modules Features
    </GradientText>
  )
  
  const subtitle = "Next-Gen Capabilities Coming Soon"
  
  const particles = (
    <>
      <ParticleBackground count={50} color="#fbbf24" />
      
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 20% 40%, rgba(251, 191, 36, 0.15) 0%, transparent 60%)',
            'radial-gradient(circle at 80% 60%, rgba(245, 158, 11, 0.12) 0%, transparent 60%)',
            'radial-gradient(circle at 50% 80%, rgba(217, 119, 6, 0.12) 0%, transparent 60%)',
            'radial-gradient(circle at 20% 40%, rgba(251, 191, 36, 0.15) 0%, transparent 60%)'
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
      
      {floatAnimation && [...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -50, x: Math.random() * window.innerWidth, opacity: 0 }}
          animate={{ 
            y: window.innerHeight + 50,
            x: Math.random() * window.innerWidth,
            opacity: [0, 0.5, 0],
            rotate: 360
          }}
          transition={{ 
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 1.5,
            ease: 'linear'
          }}
          style={{
            position: 'absolute',
            fontSize: '2rem',
            color: '#fbbf24',
            filter: 'blur(0.0625rem)',
            zIndex: 2
          }}
        >
          ₿
        </motion.div>
      ))}
      
      <motion.div
        animate={{
          x: ['-100%', '200%'],
          opacity: [0, 0.3, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '12.5rem',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(251, 191, 36, 0.3), transparent)',
          filter: 'blur(1.875rem)',
          zIndex: 2
        }}
      />
    </>
  )
  
  const summary = (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, type: 'spring' }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '2rem'
        }}
      >
        <motion.div
          animate={{
            boxShadow: pulseAnimation 
              ? ['0 0 1.875rem rgba(251, 191, 36, 0.5)', '0 0 3.75rem rgba(251, 191, 36, 0.8)', '0 0 1.875rem rgba(251, 191, 36, 0.5)']
              : '0 0 1.875rem rgba(251, 191, 36, 0.5)'
          }}
          transition={{ duration: 2 }}
          style={{
            padding: '1rem 2rem',
            background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(245, 158, 11, 0.1))',
            borderRadius: '3.125rem',
            border: '0.125rem solid rgba(251, 191, 36, 0.5)',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          >
            <Rocket size={24} color="#fbbf24" />
          </motion.div>
          <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#fbbf24' }}>
            Q2-Q4 2025 Roadmap
          </span>
          <motion.div
            animate={{ scale: pulseAnimation ? [1, 1.5, 1] : 1 }}
            transition={{ duration: 1 }}
            style={{
              width: '0.625rem',
              height: '0.625rem',
              borderRadius: '50%',
              background: '#10b981',
              boxShadow: '0 0 1.25rem #10b981'
            }}
          />
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        style={{
          marginTop: '2rem',
          padding: '1.5rem',
          background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(168, 85, 247, 0.15))',
          backdropFilter: 'blur(1.25rem)',
          borderRadius: '1.25rem',
          border: '0.125rem solid rgba(251, 191, 36, 0.4)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'visible'
        }}
      >
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{
            position: 'absolute',
            inset: -2,
            background: 'linear-gradient(90deg, #fbbf24, #a855f7, #fbbf24)',
            borderRadius: '1.25rem',
            filter: 'blur(0.5rem)',
            zIndex: -1
          }}
        />
        
        <h4 style={{ fontSize: '1.2rem', color: '#14b8a6', marginBottom: '0.5rem' }}>
          What You Get:
        </h4>
        <p style={{ fontSize: '1rem', color: '#e2e8f0' }}>
          <motion.span
            animate={{ color: pulseAnimation ? '#fbbf24' : '#f59e0b' }}
            transition={{ duration: 1 }}
            style={{ fontWeight: 'bold' }}
          >
            Future-proof platform
          </motion.span>{' '}
          that{' '}
          <motion.span
            animate={{ color: pulseAnimation ? '#14b8a6' : '#10b981' }}
            transition={{ duration: 1 }}
            style={{ fontWeight: 'bold' }}
          >
            grows with your needs
          </motion.span>
        </p>
      </motion.div>
    </>
  )
  
  const cards = [
    <motion.div
      key="crypto"
      initial={{ opacity: 0, x: -30, rotateY: -15 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ delay: 0.5, type: 'spring' }}
      whileHover={{ scale: 1.03, y: -5 }}
      onHoverStart={() => setHoveredCard('crypto')}
      onHoverEnd={() => setHoveredCard(null)}
      style={{
        padding: '1.5rem',
        background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.15), rgba(255, 255, 255, 0.02))',
        backdropFilter: 'blur(1.25rem)',
        borderRadius: '1.25rem',
        border: '0.125rem solid rgba(251, 191, 36, 0.3)',
        position: 'relative',
        overflow: 'visible'
      }}
    >
      {hoveredCard === 'crypto' && (
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
            scale: { duration: 2, repeat: Infinity }
          }}
          style={{
            position: 'absolute',
            inset: -30,
            background: 'conic-gradient(from 0deg, transparent, rgba(251, 191, 36, 0.2), transparent)',
            borderRadius: '1.5rem',
            filter: 'blur(1.25rem)',
            zIndex: -1
          }}
        />
      )}
      
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
        <motion.div
          animate={{ rotate: pulseAnimation ? 360 : 0 }}
          transition={{ duration: 2 }}
        >
          <Bitcoin size={32} color="#fbbf24" />
        </motion.div>
        <h3 style={{ fontSize: '1.3rem', color: '#fbbf24', marginLeft: '1rem' }}>
          Crypto Module
        </h3>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ marginLeft: 'auto' }}
        >
          <Sparkles size={24} color="#fbbf24" />
        </motion.div>
      </div>
      
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {[
          'Bitcoin & Ethereum trading',
          'DeFi yield farming',
          'NFT portfolio tracking',
          'Cross-chain arbitrage',
          'Staking rewards optimization'
        ].map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 + index * 0.1 }}
            whileHover={{ x: 5, color: '#fbbf24' }}
            style={{
              padding: '0.5rem',
              marginBottom: '0.4rem',
              color: '#e2e8f0',
              display: 'flex',
              alignItems: 'center',
              transition: 'all 0.3s ease'
            }}
          >
            <motion.span
              animate={{ scale: floatAnimation ? [1, 1.5, 1] : 1 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              style={{ color: '#fbbf24', marginRight: '0.5rem' }}
            >
              •
            </motion.span>
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>,
    
    <motion.div
      key="cross"
      initial={{ opacity: 0, x: 30, rotateY: 15 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ delay: 0.6, type: 'spring' }}
      whileHover={{ scale: 1.03, y: -5 }}
      onHoverStart={() => setHoveredCard('cross')}
      onHoverEnd={() => setHoveredCard(null)}
      style={{
        padding: '1.5rem',
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(255, 255, 255, 0.02))',
        backdropFilter: 'blur(1.25rem)',
        borderRadius: '1.25rem',
        border: '0.125rem solid rgba(59, 130, 246, 0.3)',
        position: 'relative',
        overflow: 'visible'
      }}
    >
      {hoveredCard === 'cross' && (
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            position: 'absolute',
            inset: -20,
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent)',
            borderRadius: '1.5rem',
            filter: 'blur(1.25rem)',
            zIndex: -1
          }}
        />
      )}
      
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
        <Link size={32} color="#3b82f6" />
        <h3 style={{ fontSize: '1.3rem', color: '#3b82f6', marginLeft: '1rem' }}>
          Cross-Asset
        </h3>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          style={{ marginLeft: 'auto' }}
        >
          <Globe size={24} color="#3b82f6" />
        </motion.div>
      </div>
      
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {[
          'Multi-asset correlation',
          'Global portfolio sync',
          'Currency hedging',
          'Regulatory compliance',
          'Unified reporting'
        ].map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            whileHover={{ x: 5, color: '#3b82f6' }}
            style={{
              padding: '0.5rem',
              marginBottom: '0.4rem',
              color: '#e2e8f0',
              display: 'flex',
              alignItems: 'center',
              transition: 'all 0.3s ease'
            }}
          >
            <motion.span
              animate={{ rotate: pulseAnimation ? 360 : 0 }}
              transition={{ duration: 2 }}
              style={{ color: '#3b82f6', marginRight: '0.5rem' }}
            >
              •
            </motion.span>
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>,
    
    <motion.div
      key="ai"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.7, type: 'spring' }}
      whileHover={{ scale: 1.03, y: -5 }}
      onHoverStart={() => setHoveredCard('ai')}
      onHoverEnd={() => setHoveredCard(null)}
      style={{
        padding: '1.5rem',
        background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(255, 255, 255, 0.02))',
        backdropFilter: 'blur(1.25rem)',
        borderRadius: '1.25rem',
        border: '0.125rem solid rgba(168, 85, 247, 0.3)',
        position: 'relative',
        overflow: 'visible'
      }}
    >
      {hoveredCard === 'ai' && (
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            inset: -20,
            background: 'linear-gradient(45deg, transparent, rgba(168, 85, 247, 0.2), transparent)',
            backgroundSize: '200% 200%',
            borderRadius: '1.5rem',
            filter: 'blur(1.25rem)',
            zIndex: -1
          }}
        />
      )}
      
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
        <Cloud size={32} color="#a855f7" />
        <h3 style={{ fontSize: '1.3rem', color: '#a855f7', marginLeft: '1rem' }}>
          AI Enhancements
        </h3>
        <motion.div
          animate={{ y: floatAnimation ? [0, -5, 0] : 0 }}
          transition={{ duration: 2 }}
          style={{ marginLeft: 'auto' }}
        >
          <Cpu size={24} color="#a855f7" />
        </motion.div>
      </div>
      
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {[
          'GPT-5 integration',
          'Quantum computing ready',
          'Real-time translation',
          'Voice cloning for alerts',
          'Predictive modeling v3'
        ].map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 + index * 0.1 }}
            whileHover={{ x: 5, color: '#a855f7' }}
            style={{
              padding: '0.5rem',
              marginBottom: '0.4rem',
              color: '#e2e8f0',
              display: 'flex',
              alignItems: 'center',
              transition: 'all 0.3s ease'
            }}
          >
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, delay: index * 0.15 }}
              style={{ color: '#a855f7', marginRight: '0.5rem' }}
            >
              •
            </motion.span>
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>,
    
    <motion.div
      key="enterprise"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.8, type: 'spring' }}
      whileHover={{ scale: 1.03, y: -5 }}
      onHoverStart={() => setHoveredCard('enterprise')}
      onHoverEnd={() => setHoveredCard(null)}
      style={{
        padding: '1.5rem',
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(255, 255, 255, 0.02))',
        backdropFilter: 'blur(1.25rem)',
        borderRadius: '1.25rem',
        border: '0.125rem solid rgba(16, 185, 129, 0.3)',
        position: 'relative',
        overflow: 'visible'
      }}
    >
      {hoveredCard === 'enterprise' && (
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{
            position: 'absolute',
            inset: -20,
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.3), transparent)',
            borderRadius: '1.5rem',
            filter: 'blur(1.25rem)',
            zIndex: -1
          }}
        />
      )}
      
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
        <Shield size={32} color="#10b981" />
        <h3 style={{ fontSize: '1.3rem', color: '#10b981', marginLeft: '1rem' }}>
          Enterprise
        </h3>
        <motion.div
          animate={{ scale: pulseAnimation ? [1, 1.2, 1] : 1 }}
          transition={{ duration: 1 }}
          style={{ marginLeft: 'auto' }}
        >
          <TrendingUp size={24} color="#10b981" />
        </motion.div>
      </div>
      
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {[
          'White-label solution',
          'Multi-tenant architecture',
          'Custom AI training',
          'Dedicated infrastructure',
          'SLA guarantees'
        ].map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0 + index * 0.1 }}
            whileHover={{ x: 5, color: '#10b981' }}
            style={{
              padding: '0.5rem',
              marginBottom: '0.4rem',
              color: '#e2e8f0',
              display: 'flex',
              alignItems: 'center',
              transition: 'all 0.3s ease'
            }}
          >
            <motion.span
              animate={{ rotate: floatAnimation ? [0, 180, 0] : 0 }}
              transition={{ duration: 2, delay: index * 0.2 }}
              style={{ color: '#10b981', marginRight: '0.5rem' }}
            >
              •
            </motion.span>
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  ]
  
  return (
    <GridLayout
      title={title}
      subtitle={subtitle}
      cards={cards}
      columns={2}
      summary={summary}
      particles={particles}
    />
  )
}
