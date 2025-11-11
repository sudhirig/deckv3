import React from 'react'
import { motion } from 'framer-motion'
import GradientText from '../components/GradientText'
import AnimatedCounter from '../components/AnimatedCounter'
import { Code2, Cpu, BarChart3, Zap, TrendingUp, Activity, GitBranch, Sparkles, MessageSquare } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import { toFiniteNumber } from '../utils/number'
import './SlideStyles.css'

const AlgoTradingConceptSlide = () => {
  const backgroundVisual = (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'radial-gradient(circle at 30% 50%, rgba(6, 182, 212, 0.12) 0%, transparent 60%), radial-gradient(circle at 70% 30%, rgba(168, 85, 247, 0.08) 0%, transparent 50%), radial-gradient(circle at 50% 80%, rgba(249, 115, 22, 0.06) 0%, transparent 50%)',
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
      
      {/* Header Section - constrained height */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          textAlign: 'center',
          padding: `${pxToRem(16)} ${pxToRem(32)}`,
          maxHeight: '15vh',
          position: 'relative',
          zIndex: 1
        }}
      >
        <h1 style={{ 
          fontSize: 'clamp(1.5rem, 3vw, 2.4rem)',
          marginBottom: pxToRem(6)
        }}>
          <GradientText gradient="from-cyan-400 via-blue-400 to-purple-400">
            Chapter 6: Algo Trading Laboratory
          </GradientText>
        </h1>
        <p style={{ 
          fontSize: 'clamp(0.8rem, 1.2vw, 1rem)',
          color: '#94a3b8'
        }}>
          Natural Language to Trading Strategy
        </p>
      </motion.div>
      
      {/* Main Content - constrained height */}
      <div style={{
        flex: 1,
        maxHeight: '85vh',
        padding: `0 ${pxToRem(32)} ${pxToRem(24)}`,
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(0.75rem, 1.5vw, 1rem)'
      }}>
        {/* Pipeline Card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="glass-card"
          style={{
            padding: 'clamp(1rem, 1.5vw, 1.5rem)',
            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(99, 102, 241, 0.05) 100%)',
            border: `${pxToRem(1)} solid rgba(6, 182, 212, 0.3)`,
            position: 'relative',
            overflow: 'hidden',
            maxHeight: '35vh'
          }}
        >
          <motion.div
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
              opacity: [0.03, 0.06, 0.03]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: 'linear-gradient(45deg, transparent 30%, rgba(6, 182, 212, 0.1) 50%, transparent 70%)',
              backgroundSize: '200% 200%',
              zIndex: 0
            }}
          />
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h3 style={{ 
              fontSize: 'clamp(0.95rem, 1.4vw, 1.2rem)', 
              color: '#06b6d4', 
              textAlign: 'center', 
              marginBottom: 'clamp(0.75rem, 1.2vw, 1rem)'
            }}>
              <Sparkles className="w-4 h-4 inline mr-1" />
              From Words to Wealth
              <Sparkles className="w-4 h-4 inline ml-1" />
            </h3>
            
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              flexWrap: 'wrap'
            }}>
              {[
                { emoji: '💬', title: 'Natural Language', desc: '"Buy on RSI oversold"', color: '#3b82f6', icon: MessageSquare },
                { icon: Code2, title: 'AI Translation', desc: 'Strategy code', color: '#a855f7' },
                { icon: BarChart3, title: 'Backtest', desc: '5-year history', color: '#f97316' },
                { icon: Zap, title: 'Deploy', desc: 'Live trading', color: '#10b981' }
              ].map((step, index) => (
                <React.Fragment key={index}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.15, type: 'spring' }}
                    style={{ textAlign: 'center', flex: '0 1 22%' }}
                  >
                    <motion.div
                      animate={{ 
                        y: [-3, 3, -3],
                        rotate: index === 1 ? [0, 360] : 0
                      }}
                      transition={{ 
                        y: { duration: 2, repeat: Infinity, delay: index * 0.2 },
                        rotate: { duration: 10, repeat: Infinity, ease: 'linear' }
                      }}
                      style={{
                        width: 'clamp(3rem, 5vw, 3.5rem)',
                        height: 'clamp(3rem, 5vw, 3.5rem)',
                        background: `linear-gradient(135deg, ${step.color}30, ${step.color}10)`,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto clamp(0.5rem, 1vw, 0.75rem)',
                        border: `${pxToRem(2)} solid ${step.color}50`
                      }}
                    >
                      {step.emoji ? (
                        <span style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)' }}>{step.emoji}</span>
                      ) : (
                        <step.icon className="w-5 h-5" style={{ color: step.color }} />
                      )}
                    </motion.div>
                    
                    <p style={{ 
                      fontSize: 'clamp(0.7rem, 1vw, 0.85rem)', 
                      fontWeight: '600', 
                      color: step.color 
                    }}>{step.title}</p>
                    <p style={{ 
                      fontSize: 'clamp(0.6rem, 0.9vw, 0.7rem)', 
                      color: '#94a3b8' 
                    }}>{step.desc}</p>
                  </motion.div>
                  
                  {index < 3 && (
                    <motion.div
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.3 }}
                      style={{ 
                        color: '#06b6d4', 
                        fontSize: 'clamp(1rem, 1.5vw, 1.3rem)',
                        flex: '0 1 4%'
                      }}
                    >
                      →
                    </motion.div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Two Column Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: 'clamp(0.75rem, 1.5vw, 1.25rem)',
          flex: 1,
          maxHeight: '45vh',
          overflow: 'hidden'
        }}>
          {/* AI Processing Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="glass-card"
            style={{
              background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)',
              border: `${pxToRem(1)} solid rgba(168, 85, 247, 0.3)`,
              position: 'relative',
              overflow: 'hidden',
              padding: 'clamp(0.75rem, 1.5vw, 1.25rem)',
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}
          >
            <motion.div
              initial={{ opacity: 0.05 }}
              animate={{ opacity: [0.05, 0.1, 0.05] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `
                  linear-gradient(0deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: `${pxToRem(20)} ${pxToRem(20)}`,
                zIndex: 0
              }}
            />
            
            <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: 'clamp(0.75rem, 1.2vw, 1rem)' 
              }}>
                <Cpu className="w-5 h-5 text-purple-400 mr-2" />
                <h3 style={{ 
                  fontSize: 'clamp(0.85rem, 1.2vw, 1rem)', 
                  color: '#a855f7' 
                }}>AI Processing Engine</h3>
              </div>
              
              <div style={{ flex: 1, overflow: 'auto' }}>
                {[
                  { feature: 'NLP Strategy Parser', icon: MessageSquare, color: '#a855f7' },
                  { feature: 'Code Generation Engine', icon: Code2, color: '#8b5cf6' },
                  { feature: 'Risk Parameter Optimizer', icon: Activity, color: '#7c3aed' },
                  { feature: 'Performance Predictor', icon: TrendingUp, color: '#6d28d9' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    whileHover={{ x: 3, scale: 1.02 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: 'clamp(0.3rem, 0.6vw, 0.4rem)',
                      marginBottom: 'clamp(0.3rem, 0.6vw, 0.4rem)',
                      background: `${item.color}10`,
                      borderRadius: pxToRem(4),
                      border: `${pxToRem(1)} solid ${item.color}30`
                    }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                      style={{ marginRight: pxToRem(6) }}
                    >
                      <item.icon className="w-3 h-3" style={{ color: item.color }} />
                    </motion.div>
                    <span style={{ 
                      fontSize: 'clamp(0.65rem, 0.95vw, 0.8rem)', 
                      color: '#e2e8f0' 
                    }}>{item.feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Strategy Capabilities Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="glass-card"
            style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)',
              border: `${pxToRem(1)} solid rgba(16, 185, 129, 0.3)`,
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
                <GitBranch className="w-5 h-5 text-emerald-400 mr-2" />
                <h3 style={{ 
                  fontSize: 'clamp(0.85rem, 1.2vw, 1rem)', 
                  color: '#10b981' 
                }}>Strategy Capabilities</h3>
              </div>
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr', 
                gap: 'clamp(0.3rem, 0.6vw, 0.4rem)',
                flex: 1,
                overflow: 'auto'
              }}>
                {[
                  { metric: 'Strategies', value: '1000+', color: '#10b981' },
                  { metric: 'Win Rate', value: '73%', color: '#14b8a6' },
                  { metric: 'Backtest', value: '10yr', color: '#06b6d4' },
                  { metric: 'Speed', value: '<100ms', color: '#3b82f6' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.3 + index * 0.1, type: 'spring' }}
                    style={{
                      textAlign: 'center',
                      padding: 'clamp(0.3rem, 0.6vw, 0.4rem)',
                      background: `${stat.color}10`,
                      borderRadius: pxToRem(4),
                      border: `${pxToRem(1)} solid ${stat.color}30`
                    }}
                  >
                    <motion.p
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      style={{ 
                        fontSize: 'clamp(0.8rem, 1.2vw, 1rem)', 
                        fontWeight: 'bold', 
                        color: stat.color,
                        margin: 0
                      }}
                    >
                      {stat.value}
                    </motion.p>
                    <p style={{ 
                      fontSize: 'clamp(0.55rem, 0.8vw, 0.65rem)', 
                      color: '#94a3b8',
                      margin: 0
                    }}>{stat.metric}</p>
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

export default AlgoTradingConceptSlide