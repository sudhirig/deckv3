import React, { useState } from 'react'
import { motion } from 'framer-motion'
import GradientText from '../components/GradientText'
import AnimatedCounter from '../components/AnimatedCounter'
import Icon from '../components/Icon'
import CircularProgress from '../components/CircularProgress'
import { 
  Zap, 
  Shield, 
  BarChart3, 
  Code2,
  Activity,
  TrendingUp,
  Target,
  Brain,
  Cpu,
  Settings,
  DollarSign,
  Clock
} from 'lucide-react'
import { GridLayout } from '../components/StandardLayouts'
import { pxToRem } from '../utils/responsive'

export default function AlgoTradingFeaturesSlide() {
  const [hoveredFeature, setHoveredFeature] = useState(null)
  const [activeStrategy, setActiveStrategy] = useState(0)
  
  const strategyBuilderCard = (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, type: 'spring' }}
      style={{
        padding: pxToRem(24),
        background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(139, 92, 246, 0.1))',
        backdropFilter: 'blur(20px)',
        borderRadius: pxToRem(20),
        border: '2px solid rgba(168, 85, 247, 0.3)',
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
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Code2 style={{ width: '2rem', height: '2rem' }} color="#a855f7" />
        </motion.div>
        <h3 style={{ fontSize: pxToRem(28), margin: 0 }}>
          <GradientText gradient="from-purple-400 to-pink-400">
            No-Code Strategy Builder
          </GradientText>
        </h3>
      </div>
      
      {/* Natural language example */}
      <motion.div
        initial={{ opacity: 0, y: pxToRem(20) }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        style={{
          marginBottom: pxToRem(20),
          padding: pxToRem(16),
          background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(0, 0, 0, 0.3))',
          borderRadius: pxToRem(12)
        }}
      >
        <p style={{ 
          fontSize: pxToRem(12),
          color: '#a855f7',
          marginBottom: pxToRem(8)
        }}>
          Natural Language Input:
        </p>
        <p style={{ 
          fontSize: pxToRem(14),
          color: '#e2e8f0',
          fontFamily: 'monospace',
          margin: 0
        }}>
          "Buy when RSI &lt; 30 and price above 200-day MA"
        </p>
      </motion.div>
      
      {/* Features list */}
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: pxToRem(12)
      }}>
        {[
          { label: 'Visual Designer', icon: Settings, color: '#a855f7' },
          { label: 'Pre-built Templates', icon: Brain, color: '#ec4899' },
          { label: 'Custom Indicators', icon: Activity, color: '#8b5cf6' },
          { label: 'Multi-timeframe', icon: Clock, color: '#a855f7' }
        ].map((feature, index) => (
          <motion.div
            key={feature.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setHoveredFeature(feature.label)}
            onHoverEnd={() => setHoveredFeature(null)}
            style={{
              padding: pxToRem(12),
              background: hoveredFeature === feature.label
                ? `linear-gradient(135deg, ${feature.color}30, ${feature.color}10)`
                : 'rgba(0, 0, 0, 0.3)',
              borderRadius: pxToRem(8),
              display: 'flex',
              alignItems: 'center',
              gap: pxToRem(8),
              cursor: 'pointer'
            }}
          >
            <motion.div
              animate={{ 
                rotate: hoveredFeature === feature.label ? 360 : 0
              }}
              transition={{ duration: 0.5 }}
            >
              <feature.icon style={{ width: '1rem', height: '1rem' }} color={feature.color} />
            </motion.div>
            <span style={{ 
              fontSize: pxToRem(13),
              color: '#e2e8f0'
            }}>
              {feature.label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )

  const backtestingCard = (
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
          <BarChart3 size={28} color="#10b981" />
        </motion.div>
        <h3 style={{ fontSize: pxToRem(28), margin: 0 }}>
          <GradientText gradient="from-green-400 to-emerald-400">
            Backtesting Suite
          </GradientText>
        </h3>
      </div>
      
      {/* Performance metrics */}
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: pxToRem(12),
        marginBottom: pxToRem(16)
      }}>
        <div style={{
          padding: pxToRem(12),
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(0, 0, 0, 0.3))',
          borderRadius: pxToRem(8),
          textAlign: 'center'
        }}>
          <p style={{ 
            fontSize: pxToRem(24),
            fontWeight: 'bold',
            color: '#10b981',
            margin: 0
          }}>
            <AnimatedCounter end={10 || 0} duration={1500} /> Years
          </p>
          <p style={{ fontSize: pxToRem(11), color: '#94a3b8', margin: 0 }}>
            Historical Data
          </p>
        </div>
        
        <div style={{
          padding: pxToRem(12),
          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.2), rgba(0, 0, 0, 0.3))',
          borderRadius: pxToRem(8),
          textAlign: 'center'
        }}>
          <p style={{ 
            fontSize: pxToRem(24),
            fontWeight: 'bold',
            color: '#14b8a6',
            margin: 0
          }}>
            <AnimatedCounter end={98 || 0} duration={1500} />%
          </p>
          <p style={{ fontSize: pxToRem(11), color: '#94a3b8', margin: 0 }}>
            Accuracy
          </p>
        </div>
      </div>
      
      {/* Features */}
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        gap: pxToRem(8)
      }}>
        {['Tick-by-tick simulation', 'Transaction costs included', 'Slippage modeling', 'Performance analytics'].map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: pxToRem(-20) }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            whileHover={{ x: pxToRem(5) }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: pxToRem(8),
              padding: pxToRem(8),
              background: 'rgba(0, 0, 0, 0.3)',
              borderRadius: pxToRem(8),
              borderLeft: `2px solid #10b981`
            }}
          >
            <motion.div
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 2,
                delay: index * 0.2,
                repeat: Infinity
              }}
              style={{
                width: pxToRem(6),
                height: pxToRem(6),
                background: '#10b981',
                borderRadius: '50%'
              }}
            />
            <span style={{ 
              fontSize: pxToRem(13),
              color: '#e2e8f0'
            }}>
              {item}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )

  const riskControlsCard = (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, type: 'spring' }}
      style={{
        padding: pxToRem(24),
        background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(248, 113, 113, 0.1))',
        backdropFilter: 'blur(20px)',
        borderRadius: pxToRem(20),
        border: '2px solid rgba(239, 68, 68, 0.3)',
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
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Shield size={28} color="#ef4444" />
        </motion.div>
        <h3 style={{ fontSize: pxToRem(24), margin: 0 }}>
          <GradientText gradient="from-red-400 to-orange-400">
            Risk Controls
          </GradientText>
        </h3>
      </div>
      
      {/* Risk metrics visualization */}
      <div style={{ textAlign: 'center', marginBottom: pxToRem(16) }}>
        <CircularProgress value={85} size={80} strokeWidth={6} />
        <p style={{ 
          fontSize: pxToRem(14),
          color: '#94a3b8',
          marginTop: pxToRem(8)
        }}>
          Risk Score: <span style={{ color: '#10b981', fontWeight: 'bold' }}>Low</span>
        </p>
      </div>
      
      {/* Risk features */}
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        gap: pxToRem(8)
      }}>
        {[
          { label: 'Position Sizing AI', value: 'Active', color: '#10b981' },
          { label: 'Stop-loss Auto', value: 'Enabled', color: '#10b981' },
          { label: 'Drawdown Limit', value: '15%', color: '#fbbf24' },
          { label: 'Circuit Breaker', value: 'Ready', color: '#3b82f6' }
        ].map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 + index * 0.1 }}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: pxToRem(8),
              background: 'rgba(0, 0, 0, 0.3)',
              borderRadius: pxToRem(8)
            }}
          >
            <span style={{ fontSize: pxToRem(12), color: '#94a3b8' }}>
              {item.label}
            </span>
            <span style={{ 
              fontSize: pxToRem(12),
              fontWeight: 'bold',
              color: item.color
            }}>
              {item.value}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )

  const liveTradingCard = (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.7, type: 'spring' }}
      style={{
        padding: pxToRem(24),
        background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.15), rgba(245, 158, 11, 0.1))',
        backdropFilter: 'blur(20px)',
        borderRadius: pxToRem(20),
        border: '2px solid rgba(251, 191, 36, 0.3)',
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
          <Zap size={28} color="#fbbf24" />
        </motion.div>
        <h3 style={{ fontSize: pxToRem(24), margin: 0 }}>
          <GradientText gradient="from-yellow-400 to-orange-400">
            Live Trading
          </GradientText>
        </h3>
      </div>
      
      {/* Live status */}
      <motion.div
        animate={{ 
          scale: [1, 1.05, 1]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          textAlign: 'center',
          marginBottom: pxToRem(16),
          padding: pxToRem(12),
          background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(0, 0, 0, 0.3))',
          borderRadius: pxToRem(12)
        }}
      >
        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: pxToRem(8),
          marginBottom: pxToRem(8)
        }}>
          <motion.div
            initial={{ scale: 1, opacity: 1 }}
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1]
            }}
            transition={{ duration: 1, repeat: Infinity }}
            style={{
              width: pxToRem(8),
              height: pxToRem(8),
              background: '#10b981',
              borderRadius: '50%'
            }}
          />
          <span style={{ color: '#10b981', fontWeight: 'bold', fontSize: pxToRem(14) }}>
            LIVE
          </span>
        </div>
        <p style={{ 
          fontSize: pxToRem(20),
          fontWeight: 'bold',
          color: '#fbbf24',
          margin: 0
        }}>
          <AnimatedCounter end={24 || 0} duration={1500} />ms
        </p>
        <p style={{ fontSize: pxToRem(11), color: '#94a3b8', margin: 0 }}>
          Execution Speed
        </p>
      </motion.div>
      
      {/* Features */}
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        gap: pxToRem(8)
      }}>
        {['One-click deploy', 'Paper trading', 'Real-time monitoring', 'Auto-rebalancing'].map((feature, index) => (
          <motion.div
            key={feature}
            initial={{ opacity: 0, y: pxToRem(10) }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 + index * 0.1 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: pxToRem(8),
              padding: pxToRem(8),
              background: 'rgba(0, 0, 0, 0.3)',
              borderRadius: pxToRem(8)
            }}
          >
            <Zap size={14} color="#fbbf24" />
            <span style={{ fontSize: pxToRem(13), color: '#e2e8f0' }}>
              {feature}
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
        background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(251, 191, 36, 0.15))',
        borderRadius: pxToRem(20),
        border: '2px solid rgba(168, 85, 247, 0.4)',
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
          <GradientText gradient="from-purple-400 via-blue-400 to-yellow-400">
            What You Get
          </GradientText>
        </h4>
        <p style={{ 
          fontSize: pxToRem(18),
          color: '#94a3b8',
          margin: 0
        }}>
          <span style={{ color: '#a855f7', fontWeight: 'bold' }}>No-code algo trading</span> 
          {' '}with{' '}
          <span style={{ color: '#fbbf24', fontWeight: 'bold' }}>institutional-grade performance</span>
          {' '}and{' '}
          <span style={{ color: '#10b981', fontWeight: 'bold' }}>enterprise risk controls</span>
        </p>
      </motion.div>
    </motion.div>
  )

  return (
    <GridLayout
      title={
        <>
          <GradientText gradient="from-purple-400 via-blue-400 to-yellow-400">
            Algo Trading Features
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
            Professional Quant Trading Made Simple
          </motion.p>
        </>
      }
      cards={[
        strategyBuilderCard,
        backtestingCard,
        riskControlsCard,
        liveTradingCard,
        summaryCard
      ]}
      columns={4}
      particles={
        <>
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: 0, y: 0, opacity: 0 }}
              animate={{
                x: [0, Math.cos(i * 30) * 30, 0],
                y: [0, Math.sin(i * 30) * 30, 0],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.4
              }}
              style={{
                position: 'absolute',
                left: `${15 + (i % 4) * 25}%`,
                top: `${20 + Math.floor(i / 4) * 30}%`,
                fontSize: pxToRem(20),
                color: i % 3 === 0 ? '#a855f7' : i % 3 === 1 ? '#fbbf24' : '#10b981'
              }}
            >
              <Cpu size={14} />
            </motion.div>
          ))}
          
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 30% 20%, rgba(168, 85, 247, 0.12) 0%, transparent 50%)',
                'radial-gradient(circle at 70% 60%, rgba(251, 191, 36, 0.12) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 80%, rgba(16, 185, 129, 0.12) 0%, transparent 50%)',
                'radial-gradient(circle at 30% 20%, rgba(168, 85, 247, 0.12) 0%, transparent 50%)'
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