import React from 'react'
import { motion } from 'framer-motion'
import GradientText from '../components/GradientText'
import AnimatedCounter from '../components/AnimatedCounter'
import { Rocket, Globe, Cpu, TrendingUp, Bitcoin, BarChart2, Building, Sparkles, DollarSign, Award } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

const FutureModulesConceptSlide = () => {
  const backgroundVisual = (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.12) 0%, transparent 60%), radial-gradient(circle at 70% 60%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 50% 90%, rgba(20, 184, 166, 0.06) 0%, transparent 50%)',
      zIndex: 0
    }} />
  )

  return (
    <div style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(135deg, #1a1c3d 0%, #0f1629 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {backgroundVisual}
      
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          textAlign: 'center',
          padding: `${pxToRem(16)} ${pxToRem(32)}`,
          position: 'relative',
          zIndex: 1
        }}
      >
        <h1 style={{ 
          fontSize: 'clamp(1.5rem, 3vw, 2.4rem)',
          marginBottom: pxToRem(6)
        }}>
          <GradientText gradient="from-violet-400 via-purple-400 to-blue-400">
            Chapter 10: Future Expansion Modules
          </GradientText>
        </h1>
        <p style={{ 
          fontSize: 'clamp(0.8rem, 1.2vw, 1rem)',
          color: '#94a3b8'
        }}>
          International Markets, Commodities, Real Estate
        </p>
      </motion.div>
      
      {/* Main Content */}
      <div style={{
        flex: 1,
        padding: `0 ${pxToRem(32)}`,
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: pxToRem(16)
      }}>
        {/* Rocket animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            textAlign: 'center',
            position: 'relative',
            height: pxToRem(60),
            marginBottom: pxToRem(8)
          }}
        >
          <motion.div
            animate={{ 
              y: [0, -5, 0],
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
            <Rocket className="w-8 h-8 text-violet-400" style={{ transform: 'rotate(45deg)' }} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: [0, 1, 0], scaleX: [0, 1, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            style={{
              position: 'absolute',
              left: '10%',
              top: '50%',
              height: pxToRem(2),
              width: '80%',
              background: 'linear-gradient(90deg, transparent, #8b5cf6, transparent)',
              transform: 'translateY(-50%)'
            }}
          />
        </motion.div>

        {/* Two column grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: 'clamp(0.75rem, 1.5vw, 1.25rem)',
          flex: 1
        }}>
          {/* Global Markets Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="glass-card"
            style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(99, 102, 241, 0.05) 100%)',
              border: `${pxToRem(1)} solid rgba(59, 130, 246, 0.3)`,
              position: 'relative',
              overflow: 'hidden',
              padding: 'clamp(0.75rem, 1.5vw, 1.25rem)',
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute',
                top: pxToRem(-20),
                right: pxToRem(-20),
                opacity: 0.1
              }}
            >
              <Globe className="w-24 h-24 text-blue-400" />
            </motion.div>
            
            <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: 'clamp(0.75rem, 1.2vw, 1rem)' 
              }}>
                <Globe className="w-6 h-6 text-blue-400 mr-2" />
                <h3 style={{ 
                  fontSize: 'clamp(0.95rem, 1.4vw, 1.15rem)', 
                  color: '#3b82f6' 
                }}>Global Markets</h3>
                <Sparkles className="w-4 h-4 text-blue-400 ml-auto" />
              </div>
              
              <div style={{ flex: 1, overflow: 'auto' }}>
                {[
                  { market: 'US Markets (NYSE, NASDAQ)', icon: DollarSign, color: '#3b82f6' },
                  { market: 'European Exchanges', icon: Globe, color: '#10b981' },
                  { market: 'Asian Markets', icon: TrendingUp, color: '#f59e0b' },
                  { market: '24/7 Trading Coverage', icon: BarChart2, color: '#a855f7' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ x: 3, scale: 1.02 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: 'clamp(0.4rem, 0.8vw, 0.6rem)',
                      marginBottom: 'clamp(0.4rem, 0.8vw, 0.6rem)',
                      background: `${item.color}10`,
                      borderRadius: pxToRem(6),
                      border: `${pxToRem(1)} solid ${item.color}30`
                    }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      style={{ marginRight: pxToRem(8) }}
                    >
                      <item.icon className="w-4 h-4" style={{ color: item.color }} />
                    </motion.div>
                    <span style={{ 
                      fontSize: 'clamp(0.7rem, 1vw, 0.85rem)', 
                      color: '#e2e8f0' 
                    }}>{item.market}</span>
                    <motion.span
                      initial={{ opacity: 0.5 }}
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

          {/* Alternative Assets Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="glass-card"
            style={{
              background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)',
              border: `${pxToRem(1)} solid rgba(168, 85, 247, 0.3)`,
              position: 'relative',
              overflow: 'hidden',
              padding: 'clamp(0.75rem, 1.5vw, 1.25rem)',
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
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
                bottom: pxToRem(-20),
                left: pxToRem(-20),
                opacity: 0.1
              }}
            >
              <Bitcoin className="w-24 h-24 text-purple-400" />
            </motion.div>
            
            <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: 'clamp(0.75rem, 1.2vw, 1rem)' 
              }}>
                <Cpu className="w-6 h-6 text-purple-400 mr-2" />
                <h3 style={{ 
                  fontSize: 'clamp(0.95rem, 1.4vw, 1.15rem)', 
                  color: '#a855f7' 
                }}>Alternative Assets</h3>
                <Award className="w-4 h-4 text-purple-400 ml-auto" />
              </div>
              
              <div style={{ flex: 1, overflow: 'auto' }}>
                {[
                  { asset: 'Crypto Trading (BTC, ETH)', icon: Bitcoin, color: '#f97316' },
                  { asset: 'Commodities (Gold, Oil)', icon: TrendingUp, color: '#fbbf24' },
                  { asset: 'Real Estate REITs', icon: Building, color: '#14b8a6' },
                  { asset: 'Private Equity Access', icon: Award, color: '#ec4899' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ x: -3, scale: 1.02 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: 'clamp(0.4rem, 0.8vw, 0.6rem)',
                      marginBottom: 'clamp(0.4rem, 0.8vw, 0.6rem)',
                      background: `${item.color}10`,
                      borderRadius: pxToRem(6),
                      border: `${pxToRem(1)} solid ${item.color}30`
                    }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                      style={{ marginRight: pxToRem(8) }}
                    >
                      <item.icon className="w-4 h-4" style={{ color: item.color }} />
                    </motion.div>
                    <span style={{ 
                      fontSize: 'clamp(0.7rem, 1vw, 0.85rem)', 
                      color: '#e2e8f0' 
                    }}>{item.asset}</span>
                    <motion.span
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      style={{ 
                        marginLeft: 'auto', 
                        color: item.color,
                        fontSize: 'clamp(0.7rem, 1vw, 0.85rem)'
                      }}
                    >
                      ✨
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default FutureModulesConceptSlide