import React from 'react'
import { motion } from 'framer-motion'
import ParticleBackground from '../components/ParticleBackground'
import GradientText from '../components/GradientText'
import AnimatedText from '../components/AnimatedText'
import AnimatedCounter from '../components/AnimatedCounter'
import CircularProgress from '../components/CircularProgress'
import { Rocket, Globe, Cpu, TrendingUp, Bitcoin, BarChart2, Building, Sparkles } from 'lucide-react'
import './SlideStyles.css'

const FutureModulesConceptSlide = () => {
  return (
    <div className="slide-content" style={{ position: 'relative' }}>
      <ParticleBackground count={50} color="#8b5cf6" />
      
      {/* Deep Space Gradient Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.12) 0%, transparent 60%), radial-gradient(circle at 70% 60%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 50% 90%, rgba(20, 184, 166, 0.06) 0%, transparent 50%)',
        zIndex: 0
      }} />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="glass-card"
        style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto' }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="slide-title">
            <GradientText gradient="from-violet-400 via-purple-400 to-indigo-400">
              Chapter 4: Future Modules
            </GradientText>
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#94a3b8', textAlign: 'center', marginBottom: '2rem' }}>
            Expansion Roadmap 2025-2027
          </p>
        </motion.div>

        {/* Rocket Launch Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            textAlign: 'center',
            marginBottom: '2rem',
            position: 'relative',
            height: '80px'
          }}
        >
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              x: [0, 100, 200, 300, 400]
            }}
            transition={{ 
              y: { duration: 2, repeat: Infinity },
              x: { duration: 10, repeat: Infinity }
            }}
            style={{
              position: 'absolute',
              left: '10%',
              top: '50%',
              transform: 'translateY(-50%)'
            }}
          >
            <Rocket className="w-10 h-10 text-violet-400" style={{ transform: 'rotate(45deg)' }} />
          </motion.div>
          
          {/* Rocket Trail */}
          <motion.div
            animate={{ opacity: [0, 1, 0], scaleX: [0, 1, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            style={{
              position: 'absolute',
              left: '10%',
              top: '50%',
              height: '2px',
              width: '400px',
              background: 'linear-gradient(90deg, transparent, #8b5cf6, transparent)',
              transform: 'translateY(-50%)'
            }}
          />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {/* Global Markets */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="glass-card"
            style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(99, 102, 241, 0.05) 100%)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Rotating Globe Background */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                opacity: 0.1
              }}
            >
              <Globe className="w-32 h-32 text-blue-400" />
            </motion.div>
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                <Globe className="w-7 h-7 text-blue-400 mr-3" />
                <h3 style={{ fontSize: '1.2rem', color: '#3b82f6' }}>Global Markets</h3>
                <Sparkles className="w-5 h-5 text-blue-400 ml-auto" />
              </div>
              
              <div style={{ space: 'y-3' }}>
                {[
                  { market: 'US Markets (NYSE, NASDAQ)', icon: DollarSign, color: '#3b82f6' },
                  { market: 'European Exchanges', icon: Globe, color: '#10b981' },
                  { market: 'Asian Markets', icon: TrendingUp, color: '#f59e0b' },
                  { market: '24/7 Trading Coverage', icon: BarChart2, color: '#a855f7' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0.75rem',
                      marginBottom: '0.75rem',
                      background: `${item.color}10`,
                      borderRadius: '8px',
                      border: `1px solid ${item.color}30`
                    }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      style={{ marginRight: '0.75rem' }}
                    >
                      <item.icon className="w-5 h-5" style={{ color: item.color }} />
                    </motion.div>
                    <span style={{ fontSize: '0.9rem', color: '#e2e8f0' }}>{item.market}</span>
                    <motion.span
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      style={{ marginLeft: 'auto', color: item.color }}
                    >
                      →
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Alternative Assets */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="glass-card"
            style={{
              background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Bitcoin Animation */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                scale: { duration: 3, repeat: Infinity }
              }}
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '-20px',
                opacity: 0.1
              }}
            >
              <Bitcoin className="w-32 h-32 text-purple-400" />
            </motion.div>
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                <Cpu className="w-7 h-7 text-purple-400 mr-3" />
                <h3 style={{ fontSize: '1.2rem', color: '#a855f7' }}>Alternative Assets</h3>
              </div>
              
              <div style={{ space: 'y-3' }}>
                {[
                  { asset: 'Cryptocurrency Trading', icon: Bitcoin, color: '#a855f7' },
                  { asset: 'Commodities & Gold', icon: TrendingUp, color: '#fbbf24' },
                  { asset: 'REITs & Real Estate', icon: Building, color: '#14b8a6' },
                  { asset: 'Private Equity Access', icon: Award, color: '#ef4444' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ x: -5, scale: 1.02 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0.75rem',
                      marginBottom: '0.75rem',
                      background: `${item.color}10`,
                      borderRadius: '8px',
                      border: `1px solid ${item.color}30`
                    }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      style={{ marginRight: '0.75rem' }}
                    >
                      <item.icon className="w-5 h-5" style={{ color: item.color }} />
                    </motion.div>
                    <span style={{ fontSize: '0.9rem', color: '#e2e8f0' }}>{item.asset}</span>
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      style={{ marginLeft: 'auto', color: item.color }}
                    >
                      →
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Development Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="glass-card"
          style={{
            marginTop: '2rem',
            padding: '2rem',
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(20, 184, 166, 0.05) 100%)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            position: 'relative'
          }}
        >
          {/* Animated Timeline Progress */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 1.4, duration: 3 }}
            style={{
              position: 'absolute',
              top: '50%',
              left: 0,
              height: '2px',
              background: 'linear-gradient(90deg, #10b981, #3b82f6, #a855f7, #f59e0b, #14b8a6)',
              zIndex: 0
            }}
          />
          
          <h3 style={{ fontSize: '1.3rem', color: '#8b5cf6', textAlign: 'center', marginBottom: '2rem' }}>
            Development Timeline
          </h3>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
            {[
              { quarter: 'Q1', year: '2025', feature: 'US Markets', color: '#10b981' },
              { quarter: 'Q2', year: '2025', feature: 'Crypto', color: '#3b82f6' },
              { quarter: 'Q3', year: '2025', feature: 'Commodities', color: '#a855f7' },
              { quarter: 'Q4', year: '2025', feature: 'REITs', color: '#f59e0b' },
              { quarter: '2026', year: 'Beyond', feature: 'PE Access', color: '#14b8a6' }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.1, type: 'spring' }}
                style={{ textAlign: 'center' }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 180 }}
                  animate={{ 
                    boxShadow: [`0 0 20px ${milestone.color}40`, `0 0 40px ${milestone.color}60`, `0 0 20px ${milestone.color}40`]
                  }}
                  transition={{ 
                    boxShadow: { duration: 2, repeat: Infinity }
                  }}
                  style={{
                    width: '60px',
                    height: '60px',
                    background: `linear-gradient(135deg, ${milestone.color}30, ${milestone.color}10)`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 0.75rem',
                    border: `2px solid ${milestone.color}`,
                    position: 'relative'
                  }}
                >
                  <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: milestone.color }}>
                    {milestone.quarter}
                  </span>
                  
                  {/* Pulse Ring */}
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      border: `2px solid ${milestone.color}`
                    }}
                  />
                </motion.div>
                
                <p style={{ fontSize: '0.8rem', fontWeight: '600', color: '#e2e8f0' }}>{milestone.year}</p>
                <p style={{ fontSize: '0.7rem', color: '#94a3b8' }}>{milestone.feature}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default FutureModulesConceptSlide