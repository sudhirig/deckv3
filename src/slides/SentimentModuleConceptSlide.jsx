import React from 'react'
import { motion } from 'framer-motion'
import GradientText from '../components/GradientText'
import AnimatedCounter from '../components/AnimatedCounter'
import { Globe, Brain, MessageSquare, Activity, TrendingUp, BarChart2, Newspaper, Sparkles } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import { toFiniteNumber } from '../utils/number'
import './SlideStyles.css'

const SentimentModuleConceptSlide = () => {
  const backgroundVisual = (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'radial-gradient(circle at 60% 20%, rgba(59, 130, 246, 0.12) 0%, transparent 60%), radial-gradient(circle at 20% 60%, rgba(168, 85, 247, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.06) 0%, transparent 50%)',
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
          <GradientText gradient="from-blue-400 via-indigo-400 to-purple-400">
            Chapter 7: Sentiment Intelligence Module
          </GradientText>
        </h1>
        <p style={{ 
          fontSize: 'clamp(0.8rem, 1.2vw, 1rem)',
          color: '#94a3b8'
        }}>
          182+ News Sources, 500+ Stocks, Real-time Analysis
        </p>
      </motion.div>
      
      {/* Main Content */}
      <div style={{
        flex: 1,
        padding: `0 ${pxToRem(32)} ${pxToRem(24)}`,
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: pxToRem(12)
      }}>
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'clamp(0.5rem, 1vw, 0.75rem)'
          }}
        >
          {[
            { value: 182, label: 'News Sources', unit: '+', color: '#3b82f6', icon: Globe },
            { value: 50000, label: 'Articles/Day', unit: '+', color: '#a855f7', icon: Newspaper },
            { value: 2, label: 'Processing', unit: 's', color: '#10b981', icon: Brain },
            { value: 94.3, label: 'Accuracy', unit: '%', color: '#f59e0b', icon: Activity }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.05 }}
              className="glass-card"
              style={{
                padding: 'clamp(0.5rem, 1vw, 0.75rem)',
                textAlign: 'center',
                background: `linear-gradient(135deg, ${stat.color}15 0%, ${stat.color}08 100%)`,
                border: `${pxToRem(1)} solid ${stat.color}30`
              }}
            >
              <stat.icon className="w-4 h-4 mx-auto mb-1" style={{ color: stat.color }} />
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                style={{ 
                  fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)', 
                  fontWeight: 'bold', 
                  color: stat.color 
                }}
              >
                <AnimatedCounter end={toFiniteNumber(stat.value)} duration={2} decimals={stat.value < 100 ? 1 : 0} />{stat.unit}
              </motion.div>
              <p style={{ 
                fontSize: 'clamp(0.5rem, 0.8vw, 0.65rem)', 
                color: '#94a3b8' 
              }}>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Pipeline Card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="glass-card"
          style={{
            flex: 1,
            padding: 'clamp(1rem, 1.5vw, 1.5rem)',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(168, 85, 247, 0.05) 100%)',
            border: `${pxToRem(1)} solid rgba(59, 130, 246, 0.3)`,
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <motion.div
            animate={{ x: [-100, 1300] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              top: '50%',
              left: 0,
              height: pxToRem(2),
              width: pxToRem(100),
              background: 'linear-gradient(90deg, transparent, #3b82f6, transparent)',
              zIndex: 0
            }}
          />
          
          <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ 
              fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)', 
              color: '#3b82f6', 
              textAlign: 'center', 
              marginBottom: 'clamp(0.75rem, 1.5vw, 1.25rem)' 
            }}>
              News to Alpha Pipeline
            </h3>
            
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              flex: 1,
              flexWrap: 'wrap'
            }}>
              {[
                { icon: Globe, title: '182+ Sources', desc: 'Global coverage', color: '#3b82f6' },
                { icon: Brain, title: 'FinBERT AI', desc: 'NLP processing', color: '#a855f7' },
                { icon: Activity, title: 'Sentiment Score', desc: '-100 to +100', color: '#10b981' },
                { emoji: '🔥', title: 'Heat Map', desc: 'Visual insights', color: '#f59e0b' }
              ].map((step, index) => (
                <React.Fragment key={index}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, type: 'spring' }}
                    style={{ textAlign: 'center', flex: '0 1 22%' }}
                  >
                    <motion.div
                      animate={{ 
                        y: [-3, 3, -3],
                        rotate: step.icon && index === 1 ? 360 : 0
                      }}
                      transition={{ 
                        y: { duration: 2, repeat: Infinity, delay: index * 0.2 },
                        rotate: { duration: 10, repeat: Infinity, ease: 'linear' }
                      }}
                      style={{
                        width: 'clamp(3rem, 5vw, 4rem)',
                        height: 'clamp(3rem, 5vw, 4rem)',
                        background: `linear-gradient(135deg, ${step.color}30, ${step.color}10)`,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto clamp(0.3rem, 0.6vw, 0.5rem)',
                        border: `${pxToRem(2)} solid ${step.color}50`
                      }}
                    >
                      {step.emoji ? (
                        <span style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)' }}>{step.emoji}</span>
                      ) : (
                        <step.icon className="w-6 h-6" style={{ color: step.color }} />
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
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      style={{ 
                        color: '#3b82f6', 
                        fontSize: 'clamp(0.8rem, 1.2vw, 1rem)',
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
      </div>
    </div>
  )
}

export default SentimentModuleConceptSlide