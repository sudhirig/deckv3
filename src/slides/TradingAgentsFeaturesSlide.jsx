import React, { useState } from 'react'
import { motion } from 'framer-motion'
import GradientText from '../components/GradientText'
import AnimatedCounter from '../components/AnimatedCounter'
import Icon from '../components/Icon'
import CircularProgress from '../components/CircularProgress'
import { 
  Award, 
  TrendingUp, 
  Clock, 
  BarChart3,
  Users,
  Brain,
  Zap,
  Target,
  Shield,
  Globe,
  DollarSign,
  Percent
} from 'lucide-react'
import { GridLayout } from '../components/StandardLayouts'
import { pxToRem } from '../utils/responsive'

export default function TradingAgentsFeaturesSlide() {
  const [activePanel, setActivePanel] = useState(null)
  
  const investmentStylesCard = (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, type: 'spring' }}
      style={{
        padding: pxToRem(24),
        background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.15), rgba(245, 158, 11, 0.1))',
        backdropFilter: 'blur(20px)',
        borderRadius: pxToRem(20),
        border: '2px solid rgba(251, 191, 36, 0.3)',
        gridColumn: 'span 2',
        maxHeight: '80vh',
        overflow: 'hidden'
      }}
    >
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: pxToRem(12),
        marginBottom: pxToRem(20)
      }}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <Users size={32} color="#fbbf24" />
        </motion.div>
        <h3 style={{ fontSize: pxToRem(28), margin: 0 }}>
          <GradientText gradient="from-amber-400 to-orange-400">
            30 Investment Legends
          </GradientText>
        </h3>
      </div>
      
      {/* Investment styles breakdown */}
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: pxToRem(12)
      }}>
        {[
          { name: 'Value Investing', count: 5, color: '#3b82f6' },
          { name: 'Growth Investing', count: 6, color: '#10b981' },
          { name: 'Quantitative', count: 4, color: '#a855f7' },
          { name: 'Macro/Technical', count: 8, color: '#f59e0b' },
          { name: 'Special Situations', count: 7, color: '#ef4444' }
        ].map((style, index) => (
          <motion.div
            key={style.name}
            initial={{ opacity: 0, x: pxToRem(-20) }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setActivePanel(style.name)}
            onHoverEnd={() => setActivePanel(null)}
            style={{
              padding: pxToRem(12),
              background: activePanel === style.name 
                ? `linear-gradient(135deg, ${style.color}30, ${style.color}10)`
                : 'rgba(0, 0, 0, 0.3)',
              borderRadius: pxToRem(12),
              border: `1px solid ${style.color}50`,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer'
            }}
          >
            <span style={{ 
              fontSize: pxToRem(14),
              color: '#e2e8f0'
            }}>
              {style.name}
            </span>
            <span style={{ 
              fontSize: pxToRem(20),
              fontWeight: 'bold',
              color: style.color
            }}>
              <AnimatedCounter end={style.count || 0} duration={1500} />
            </span>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: pxToRem(20) }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          style={{
            gridColumn: 'span 2',
            padding: pxToRem(12),
            background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(16, 185, 129, 0.15))',
            borderRadius: pxToRem(12),
            textAlign: 'center'
          }}
        >
          <p style={{ 
            fontSize: pxToRem(16),
            color: '#fbbf24',
            margin: 0
          }}>
            <strong>Combined Analysis Power</strong>
          </p>
        </motion.div>
      </div>
    </motion.div>
  )

  const performanceMetricsCard = (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, type: 'spring' }}
      style={{
        padding: pxToRem(24),
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(20, 184, 166, 0.1))',
        backdropFilter: 'blur(20px)',
        borderRadius: pxToRem(20),
        border: '2px solid rgba(16, 185, 129, 0.3)',
        gridColumn: 'span 2',
        maxHeight: '80vh',
        overflow: 'hidden'
      }}
    >
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: pxToRem(12),
        marginBottom: pxToRem(20)
      }}>
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <TrendingUp size={28} color="#10b981" />
        </motion.div>
        <h3 style={{ fontSize: pxToRem(28), margin: 0 }}>
          <GradientText gradient="from-green-400 to-emerald-400">
            Performance Metrics
          </GradientText>
        </h3>
      </div>
      
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: pxToRem(16)
      }}>
        <div style={{
          padding: pxToRem(16),
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(0, 0, 0, 0.3))',
          borderRadius: pxToRem(12),
          textAlign: 'center'
        }}>
          <DollarSign size={24} color="#10b981" style={{ marginBottom: pxToRem(8) }} />
          <p style={{ 
            fontSize: pxToRem(32),
            fontWeight: 'bold',
            color: '#10b981',
            margin: 0
          }}>
            +<AnimatedCounter end={28.5 || 0} decimals={1} duration={1500} />%
          </p>
          <p style={{ fontSize: pxToRem(12), color: '#94a3b8', margin: 0 }}>
            Avg Annual Return
          </p>
        </div>
        
        <div style={{
          padding: pxToRem(16),
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(0, 0, 0, 0.3))',
          borderRadius: pxToRem(12),
          textAlign: 'center'
        }}>
          <Shield size={24} color="#3b82f6" style={{ marginBottom: pxToRem(8) }} />
          <p style={{ 
            fontSize: pxToRem(32),
            fontWeight: 'bold',
            color: '#3b82f6',
            margin: 0
          }}>
            <AnimatedCounter end={2.1 || 0} decimals={1} duration={1500} />
          </p>
          <p style={{ fontSize: pxToRem(12), color: '#94a3b8', margin: 0 }}>
            Sharpe Ratio
          </p>
        </div>
        
        <div style={{
          padding: pxToRem(16),
          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.2), rgba(0, 0, 0, 0.3))',
          borderRadius: pxToRem(12),
          textAlign: 'center'
        }}>
          <Award size={24} color="#14b8a6" style={{ marginBottom: pxToRem(8) }} />
          <p style={{ 
            fontSize: pxToRem(32),
            fontWeight: 'bold',
            color: '#14b8a6',
            margin: 0
          }}>
            <AnimatedCounter end={87 || 0} duration={1500} />%
          </p>
          <p style={{ fontSize: pxToRem(12), color: '#94a3b8', margin: 0 }}>
            Win Rate
          </p>
        </div>
        
        <div style={{
          padding: pxToRem(16),
          background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(0, 0, 0, 0.3))',
          borderRadius: pxToRem(12),
          textAlign: 'center'
        }}>
          <Zap size={24} color="#a855f7" style={{ marginBottom: pxToRem(8) }} />
          <p style={{ 
            fontSize: pxToRem(32),
            fontWeight: 'bold',
            color: '#a855f7',
            margin: 0
          }}>
            +<AnimatedCounter end={15.2 || 0} decimals={1} duration={1500} />%
          </p>
          <p style={{ fontSize: pxToRem(12), color: '#94a3b8', margin: 0 }}>
            Alpha Generated
          </p>
        </div>
      </div>
    </motion.div>
  )

  const speedCoverageCard = (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, type: 'spring' }}
      style={{
        padding: pxToRem(24),
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(168, 85, 247, 0.1))',
        backdropFilter: 'blur(20px)',
        borderRadius: pxToRem(20),
        border: '2px solid rgba(59, 130, 246, 0.3)',
        maxHeight: '80vh',
        overflow: 'hidden'
      }}
    >
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: pxToRem(12),
        marginBottom: pxToRem(20)
      }}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        >
          <Clock size={28} color="#3b82f6" />
        </motion.div>
        <h3 style={{ fontSize: pxToRem(24), margin: 0 }}>
          <GradientText gradient="from-blue-400 to-purple-400">
            Speed & Coverage
          </GradientText>
        </h3>
      </div>
      
      <div style={{ textAlign: 'center', marginBottom: pxToRem(20) }}>
        <CircularProgress value={95} size={80} strokeWidth={6} />
        <motion.p
          animate={{ 
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ 
            fontSize: pxToRem(36),
            fontWeight: 'bold',
            color: '#3b82f6',
            margin: `${pxToRem(12)} 0 ${pxToRem(4)}`
          }}
        >
          <AnimatedCounter end={35 || 0} duration={1500} />s
        </motion.p>
        <p style={{ fontSize: pxToRem(14), color: '#94a3b8', margin: 0 }}>
          Complete Analysis
        </p>
      </div>
      
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        gap: pxToRem(8)
      }}>
        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          gap: pxToRem(8),
          padding: pxToRem(8),
          background: 'rgba(0, 0, 0, 0.3)',
          borderRadius: pxToRem(8)
        }}>
          <Globe size={16} color="#3b82f6" />
          <span style={{ fontSize: pxToRem(14), color: '#e2e8f0' }}>
            <strong>500+</strong> Stocks Covered
          </span>
        </div>
        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          gap: pxToRem(8),
          padding: pxToRem(8),
          background: 'rgba(0, 0, 0, 0.3)',
          borderRadius: pxToRem(8)
        }}>
          <Zap size={16} color="#a855f7" />
          <span style={{ fontSize: pxToRem(14), color: '#e2e8f0' }}>
            <strong>24/7</strong> Availability
          </span>
        </div>
      </div>
    </motion.div>
  )

  const decisionProcessCard = (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.7, type: 'spring' }}
      style={{
        padding: pxToRem(24),
        background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(236, 72, 153, 0.1))',
        backdropFilter: 'blur(20px)',
        borderRadius: pxToRem(20),
        border: '2px solid rgba(168, 85, 247, 0.3)',
        maxHeight: '80vh',
        overflow: 'hidden'
      }}
    >
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: pxToRem(12),
        marginBottom: pxToRem(20)
      }}>
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Brain size={28} color="#a855f7" />
        </motion.div>
        <h3 style={{ fontSize: pxToRem(24), margin: 0 }}>
          <GradientText gradient="from-purple-400 to-pink-400">
            Decision Process
          </GradientText>
        </h3>
      </div>
      
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        gap: pxToRem(10)
      }}>
        {['Fundamental Analysis', 'Technical Indicators', 'Sentiment Scoring', 'Risk Assessment', 'Consensus Building'].map((process, index) => (
          <motion.div
            key={process}
            initial={{ opacity: 0, x: pxToRem(20) }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 + index * 0.1 }}
            whileHover={{ x: pxToRem(5) }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: pxToRem(12),
              padding: pxToRem(10),
              background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(0, 0, 0, 0.3))',
              borderRadius: pxToRem(8),
              borderLeft: `3px solid #a855f7`
            }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 2,
                delay: index * 0.2,
                repeat: Infinity
              }}
              style={{
                width: pxToRem(8),
                height: pxToRem(8),
                background: '#a855f7',
                borderRadius: '50%'
              }}
            />
            <span style={{ 
              fontSize: pxToRem(14),
              color: '#e2e8f0'
            }}>
              {process}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )

  const summaryCard = (
    <motion.div
      initial={{ opacity: 0, y: pxToRem(30) }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4 }}
      style={{
        padding: pxToRem(24),
        background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.2), rgba(59, 130, 246, 0.15))',
        borderRadius: pxToRem(20),
        border: '2px solid rgba(20, 184, 166, 0.4)',
        gridColumn: 'span 4',
        textAlign: 'center'
      }}
    >
      <motion.div
        animate={{ 
          scale: [1, 1.02, 1],
          rotate: [0, 1, -1, 0]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <h4 style={{ fontSize: pxToRem(32), marginBottom: pxToRem(12) }}>
          <GradientText gradient="from-teal-400 via-blue-400 to-purple-400">
            What You Get
          </GradientText>
        </h4>
        <p style={{ 
          fontSize: pxToRem(18),
          color: '#94a3b8',
          margin: 0
        }}>
          <span style={{ color: '#fbbf24', fontWeight: 'bold' }}>30 legendary investors</span> 
          {' '}analyzing every trade in{' '}
          <span style={{ color: '#10b981', fontWeight: 'bold' }}>35 seconds</span>
          {' '}for{' '}
          <span style={{ color: '#14b8a6', fontWeight: 'bold' }}>consistent outperformance</span>
        </p>
      </motion.div>
    </motion.div>
  )

  return (
    <GridLayout
      title={
        <>
          <GradientText gradient="from-amber-400 via-orange-400 to-red-400">
            Trading Agents Features
          </GradientText>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ 
              textAlign: 'center', 
              color: '#94a3b8', 
              fontSize: pxToRem(20),
              marginTop: pxToRem(8)
            }}
          >
            World's Best Investment Minds Combined
          </motion.p>
        </>
      }
      cards={[
        investmentStylesCard,
        performanceMetricsCard,
        speedCoverageCard,
        decisionProcessCard,
        summaryCard
      ]}
      columns={4}
      particles={
        <>
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.sin(i * 30) * 20, 0],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.3
              }}
              style={{
                position: 'absolute',
                left: `${10 + (i % 5) * 20}%`,
                top: `${20 + Math.floor(i / 5) * 30}%`,
                fontSize: pxToRem(20),
                color: i % 3 === 0 ? '#fbbf24' : i % 3 === 1 ? '#10b981' : '#a855f7'
              }}
            >
              <Award size={16} />
            </motion.div>
          ))}
          
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 20% 30%, rgba(251, 191, 36, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 60%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 80%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 30%, rgba(251, 191, 36, 0.15) 0%, transparent 50%)'
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
        </>
      }
    />
  )
}