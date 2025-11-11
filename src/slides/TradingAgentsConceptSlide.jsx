import React from 'react'
import { motion } from 'framer-motion'
import GradientText from '../components/GradientText'
import AnimatedCounter from '../components/AnimatedCounter'
import Icon from '../components/Icon'
import { Users, Brain, Award, TrendingUp, DollarSign, BarChart2, Star, Sparkles } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import { toFiniteNumber } from '../utils/number'
import './SlideStyles.css'

const TradingAgentsConceptSlide = () => {
  const backgroundVisual = (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.1) 0%, transparent 60%), radial-gradient(circle at 20% 30%, rgba(168, 85, 247, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(236, 72, 153, 0.06) 0%, transparent 50%)',
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
          <GradientText gradient="from-yellow-400 via-amber-400 to-orange-400">
            Chapter 5: Trading Agents + Hedge Fund
          </GradientText>
        </h1>
        <p style={{ 
          fontSize: 'clamp(0.8rem, 1.2vw, 1rem)',
          color: '#94a3b8'
        }}>
          30 Legendary Investors in Your Pocket
        </p>
      </motion.div>
      
      {/* Main Content */}
      <div style={{
        flex: 1,
        padding: `0 ${pxToRem(32)} ${pxToRem(24)}`,
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Top Stats Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            textAlign: 'center',
            marginBottom: pxToRem(16),
            padding: 'clamp(0.5rem, 1vw, 0.75rem)',
            background: 'radial-gradient(circle, rgba(251, 191, 36, 0.1) 0%, transparent 70%)',
            borderRadius: pxToRem(12)
          }}
        >
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [-2, 2, -2]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'clamp(1rem, 2vw, 1.5rem)'
            }}
          >
            <div>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ 
                  fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', 
                  fontWeight: 'bold', 
                  color: '#fbbf24' 
                }}
              >
                <AnimatedCounter end={toFiniteNumber(12)} duration={2} />
              </motion.div>
              <p style={{ 
                fontSize: 'clamp(0.6rem, 0.9vw, 0.75rem)', 
                color: '#94a3b8' 
              }}>Investment Committee</p>
            </div>
            <Star className="w-6 h-6 text-yellow-400" />
            <div>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                style={{ 
                  fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', 
                  fontWeight: 'bold', 
                  color: '#a855f7' 
                }}
              >
                <AnimatedCounter end={toFiniteNumber(18)} duration={2} />
              </motion.div>
              <p style={{ 
                fontSize: 'clamp(0.6rem, 0.9vw, 0.75rem)', 
                color: '#94a3b8' 
              }}>Hedge Fund Team</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Two Column Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: 'clamp(0.75rem, 1.5vw, 1.25rem)',
          flex: 1
        }}>
          {/* Investment Committee Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="glass-card"
            style={{
              background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(245, 158, 11, 0.05) 100%)',
              border: `${pxToRem(1)} solid rgba(251, 191, 36, 0.3)`,
              position: 'relative',
              overflow: 'hidden',
              padding: 'clamp(0.75rem, 1.5vw, 1.25rem)',
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                position: 'absolute',
                top: '-50%',
                right: '-50%',
                width: '200%',
                height: '200%',
                background: 'radial-gradient(circle, rgba(251, 191, 36, 0.2) 0%, transparent 60%)',
                zIndex: 0
              }}
            />
            
            <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: 'clamp(0.75rem, 1.2vw, 1rem)' 
              }}>
                <Award className="w-5 h-5 text-yellow-400 mr-2" />
                <h3 style={{ 
                  fontSize: 'clamp(0.9rem, 1.3vw, 1.1rem)', 
                  fontWeight: 'bold' 
                }}>
                  <GradientText gradient="from-yellow-400 to-amber-400">Investment Committee (12)</GradientText>
                </h3>
              </div>
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr', 
                gap: 'clamp(0.4rem, 0.8vw, 0.6rem)',
                overflow: 'auto',
                flex: 1
              }}>
                {[
                  { name: 'Warren Buffett AI', style: 'Value investing', color: '#3b82f6' },
                  { name: 'Peter Lynch AI', style: 'Growth stocks', color: '#10b981' },
                  { name: 'Ray Dalio AI', style: 'Risk parity', color: '#a855f7' },
                  { name: 'George Soros AI', style: 'Macro trends', color: '#f97316' },
                  { name: 'Benjamin Graham AI', style: 'Deep value', color: '#14b8a6' },
                  { name: 'Carl Icahn AI', style: 'Activist', color: '#ef4444' }
                ].map((investor, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.05, type: 'spring' }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    style={{
                      padding: 'clamp(0.3rem, 0.6vw, 0.4rem)',
                      background: `${investor.color}10`,
                      borderRadius: pxToRem(4),
                      border: `${pxToRem(1)} solid ${investor.color}30`
                    }}
                  >
                    <p style={{ 
                      fontSize: 'clamp(0.6rem, 0.9vw, 0.7rem)', 
                      fontWeight: '600', 
                      color: investor.color 
                    }}>
                      {investor.name}
                    </p>
                    <p style={{ 
                      fontSize: 'clamp(0.5rem, 0.75vw, 0.6rem)', 
                      color: '#94a3b8' 
                    }}>{investor.style}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Hedge Fund Team Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="glass-card"
            style={{
              background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.05) 100%)',
              border: `${pxToRem(1)} solid rgba(168, 85, 247, 0.3)`,
              position: 'relative',
              overflow: 'hidden',
              padding: 'clamp(0.75rem, 1.5vw, 1.25rem)',
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}
          >
            <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: 'clamp(0.75rem, 1.2vw, 1rem)' 
              }}>
                <Brain className="w-5 h-5 text-purple-400 mr-2" />
                <h3 style={{ 
                  fontSize: 'clamp(0.9rem, 1.3vw, 1.1rem)', 
                  fontWeight: 'bold' 
                }}>
                  <GradientText gradient="from-purple-400 to-pink-400">Hedge Fund Team (18)</GradientText>
                </h3>
              </div>
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr', 
                gap: 'clamp(0.4rem, 0.8vw, 0.6rem)',
                overflow: 'auto',
                flex: 1
              }}>
                {[
                  { name: 'Jim Simons AI', style: 'Quantitative', icon: BarChart2 },
                  { name: 'Bill Ackman AI', style: 'Event-driven', icon: TrendingUp },
                  { name: 'David Tepper AI', style: 'Distressed', icon: DollarSign },
                  { name: 'John Paulson AI', style: 'Merger arb', icon: Users },
                  { name: 'Ken Griffin AI', style: 'Multi-strategy', icon: Brain },
                  { name: 'Steve Cohen AI', style: 'Momentum', icon: Award }
                ].map((trader, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.05, type: 'spring' }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    style={{
                      padding: 'clamp(0.3rem, 0.6vw, 0.4rem)',
                      background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.05))',
                      borderRadius: pxToRem(4),
                      border: `${pxToRem(1)} solid rgba(168, 85, 247, 0.3)`,
                      display: 'flex',
                      alignItems: 'center',
                      gap: pxToRem(4)
                    }}
                  >
                    <trader.icon className="w-3 h-3 text-purple-400" />
                    <div style={{ flex: 1 }}>
                      <p style={{ 
                        fontSize: 'clamp(0.6rem, 0.9vw, 0.7rem)', 
                        fontWeight: '600', 
                        color: '#a855f7' 
                      }}>
                        {trader.name}
                      </p>
                      <p style={{ 
                        fontSize: 'clamp(0.5rem, 0.75vw, 0.6rem)', 
                        color: '#94a3b8' 
                      }}>{trader.style}</p>
                    </div>
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

export default TradingAgentsConceptSlide