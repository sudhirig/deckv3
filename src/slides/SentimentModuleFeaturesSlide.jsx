import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import GradientText from '../components/GradientText'
import AnimatedCounter from '../components/AnimatedCounter'
import Icon from '../components/Icon'
import CircularProgress from '../components/CircularProgress'
import { 
  Activity, 
  MessageSquare, 
  TrendingUp, 
  Globe,
  Map,
  BarChart3,
  Bell,
  Sparkles,
  Eye,
  Mic,
  Filter,
  Hash
} from 'lucide-react'
import { GridLayout } from '../components/StandardLayouts'
import { pxToRem } from '../utils/responsive'

export default function SentimentModuleFeaturesSlide() {
  const [hoveredFeature, setHoveredFeature] = useState(null)
  const [activeHeatZone, setActiveHeatZone] = useState(null)
  
  const heatMapCard = (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, type: 'spring' }}
      style={{
        padding: pxToRem(24),
        background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(248, 113, 113, 0.1))',
        backdropFilter: 'blur(20px)',
        borderRadius: pxToRem(20),
        border: '2px solid rgba(239, 68, 68, 0.3)',
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
          <Activity size={32} color="#ef4444" />
        </motion.div>
        <h3 style={{ fontSize: pxToRem(28), margin: 0 }}>
          <GradientText gradient="from-red-400 to-orange-400">
            Heat Map Analytics
          </GradientText>
        </h3>
      </div>
      
      {/* Interactive heat map visualization */}
      <motion.div
        initial={{ opacity: 0, y: pxToRem(20) }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        style={{
          padding: pxToRem(16),
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3))',
          borderRadius: pxToRem(12),
          marginBottom: pxToRem(16)
        }}
      >
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: pxToRem(8)
        }}>
          {['Banking', 'IT', 'Pharma', 'Auto', 'Energy', 'FMCG', 'Telecom', 'Metal'].map((sector, index) => {
            const sentimentValues = [85, -45, 62, -23, 38, 71, -12, 55]
            const sentiment = sentimentValues[index]
            const color = sentiment > 50 ? '#10b981' : sentiment < -20 ? '#ef4444' : '#fbbf24'
            
            return (
              <motion.div
                key={sector}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.1, zIndex: 10 }}
                onHoverStart={() => setActiveHeatZone(sector)}
                onHoverEnd={() => setActiveHeatZone(null)}
                style={{
                  padding: pxToRem(8),
                  background: `linear-gradient(135deg, ${color}40, ${color}20)`,
                  border: `1px solid ${color}60`,
                  borderRadius: pxToRem(8),
                  textAlign: 'center',
                  cursor: 'pointer',
                  position: 'relative'
                }}
              >
                <p style={{ fontSize: pxToRem(10), color: '#e2e8f0', margin: 0 }}>
                  {sector}
                </p>
                <p style={{ 
                  fontSize: pxToRem(14),
                  fontWeight: 'bold',
                  color,
                  margin: 0
                }}>
                  {sentiment > 0 ? '+' : ''}{sentiment}
                </p>
              </motion.div>
            )
          })}
        </div>
        
        <AnimatePresence>
          {activeHeatZone && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                fontSize: pxToRem(12),
                color: '#94a3b8',
                textAlign: 'center',
                marginTop: pxToRem(12)
              }}
            >
              {activeHeatZone} sector sentiment analysis
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
      
      {/* Features */}
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: pxToRem(12)
      }}>
        {[
          { label: 'Nifty 500 Coverage', icon: Map },
          { label: 'Sector Analysis', icon: BarChart3 },
          { label: 'Real-time Updates', icon: Activity },
          { label: 'Drill-down Views', icon: Eye }
        ].map((feature, index) => (
          <motion.div
            key={feature.label}
            initial={{ opacity: 0, x: pxToRem(-20) }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 + index * 0.1 }}
            whileHover={{ x: pxToRem(5) }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: pxToRem(8),
              padding: pxToRem(10),
              background: 'rgba(0, 0, 0, 0.3)',
              borderRadius: pxToRem(8),
              borderLeft: `2px solid #ef4444`
            }}
          >
            <feature.icon size={14} color="#ef4444" />
            <span style={{ fontSize: pxToRem(12), color: '#e2e8f0' }}>
              {feature.label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )

  const conversationalAICard = (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, type: 'spring' }}
      style={{
        padding: pxToRem(24),
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(96, 165, 250, 0.1))',
        backdropFilter: 'blur(20px)',
        borderRadius: pxToRem(20),
        border: '2px solid rgba(59, 130, 246, 0.3)',
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
            y: [0, -5, 0]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <MessageSquare size={28} color="#3b82f6" />
        </motion.div>
        <h3 style={{ fontSize: pxToRem(28), margin: 0 }}>
          <GradientText gradient="from-blue-400 to-cyan-400">
            Conversational AI
          </GradientText>
        </h3>
      </div>
      
      {/* Example queries */}
      <div style={{ marginBottom: pxToRem(16) }}>
        <p style={{ fontSize: pxToRem(12), color: '#94a3b8', marginBottom: pxToRem(12) }}>
          Natural Language Queries:
        </p>
        
        {[
          { query: "What's the news on TCS?", response: "TCS sentiment +67, Q3 beat..." },
          { query: "Show bearish stocks", response: "Found 23 stocks with -ve sentiment..." },
          { query: "Sector rotation today?", response: "IT (+45%), Banking (-12%)..." }
        ].map((example, index) => (
          <motion.div
            key={example.query}
            initial={{ opacity: 0, y: pxToRem(10) }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + index * 0.15 }}
            whileHover={{ scale: 1.02 }}
            onHoverStart={() => setHoveredFeature(example.query)}
            onHoverEnd={() => setHoveredFeature(null)}
            style={{
              marginBottom: pxToRem(10),
              padding: pxToRem(12),
              background: hoveredFeature === example.query
                ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(0, 0, 0, 0.4))'
                : 'rgba(0, 0, 0, 0.3)',
              borderRadius: pxToRem(8),
              cursor: 'pointer'
            }}
          >
            <p style={{ fontSize: pxToRem(12), color: '#3b82f6', margin: 0 }}>
              "{example.query}"
            </p>
            <p style={{ fontSize: pxToRem(11), color: '#94a3b8', margin: 0, marginTop: pxToRem(4) }}>
              → {example.response}
            </p>
          </motion.div>
        ))}
      </div>
      
      {/* Voice interaction indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        style={{
          padding: pxToRem(12),
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(0, 0, 0, 0.3))',
          borderRadius: pxToRem(8),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: pxToRem(8)
        }}
      >
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Mic size={16} color="#3b82f6" />
        </motion.div>
        <span style={{ fontSize: pxToRem(12), color: '#e2e8f0' }}>
          Voice interaction enabled
        </span>
      </motion.div>
    </motion.div>
  )

  const sentimentSignalsCard = (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, type: 'spring' }}
      style={{
        padding: pxToRem(24),
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(20, 184, 166, 0.1))',
        backdropFilter: 'blur(20px)',
        borderRadius: pxToRem(20),
        border: '2px solid rgba(16, 185, 129, 0.3)',
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
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        >
          <TrendingUp size={28} color="#10b981" />
        </motion.div>
        <h3 style={{ fontSize: pxToRem(24), margin: 0 }}>
          <GradientText gradient="from-green-400 to-emerald-400">
            Sentiment Signals
          </GradientText>
        </h3>
      </div>
      
      {/* Signal types */}
      {[
        { type: 'Momentum Shifts', icon: TrendingUp, color: '#10b981', value: 12 },
        { type: 'Breakout Alerts', icon: Bell, color: '#fbbf24', value: 8 },
        { type: 'Contrarian Ops', icon: Sparkles, color: '#a855f7', value: 5 },
        { type: 'Event Spikes', icon: Activity, color: '#ef4444', value: 15 },
        { type: 'Trend Confirms', icon: CheckCircle, color: '#14b8a6', value: 22 }
      ].map((signal, index) => (
        <motion.div
          key={signal.type}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 + index * 0.1 }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: pxToRem(10),
            padding: pxToRem(10),
            background: 'rgba(0, 0, 0, 0.3)',
            borderRadius: pxToRem(8)
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: pxToRem(8) }}>
            <signal.icon size={14} color={signal.color} />
            <span style={{ fontSize: pxToRem(12), color: '#e2e8f0' }}>
              {signal.type}
            </span>
          </div>
          <span style={{ 
            fontSize: pxToRem(14),
            fontWeight: 'bold',
            color: signal.color
          }}>
            <AnimatedCounter end={signal.value || 0} duration={1500} />
          </span>
        </motion.div>
      ))}
    </motion.div>
  )

  const globalCoverageCard = (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.7, type: 'spring' }}
      style={{
        padding: pxToRem(24),
        background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(139, 92, 246, 0.1))',
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
            rotate: 360
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <Globe size={28} color="#a855f7" />
        </motion.div>
        <h3 style={{ fontSize: pxToRem(24), margin: 0 }}>
          <GradientText gradient="from-purple-400 to-pink-400">
            Global Coverage
          </GradientText>
        </h3>
      </div>
      
      <div style={{ textAlign: 'center', marginBottom: pxToRem(16) }}>
        <CircularProgress value={90} size={80} strokeWidth={6} />
        <p style={{ 
          fontSize: pxToRem(28),
          fontWeight: 'bold',
          color: '#a855f7',
          margin: `${pxToRem(8)} 0`
        }}>
          <AnimatedCounter end={182 || 0} duration={2000} />+
        </p>
        <p style={{ fontSize: pxToRem(12), color: '#94a3b8' }}>
          News Sources
        </p>
      </div>
      
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: pxToRem(8)
      }}>
        {[
          { label: '12 Languages', icon: Hash },
          { label: 'Social Media', icon: MessageSquare },
          { label: 'SEC Filings', icon: Filter },
          { label: 'Earnings Calls', icon: Mic }
        ].map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0 + index * 0.1 }}
            style={{
              padding: pxToRem(8),
              background: 'rgba(0, 0, 0, 0.3)',
              borderRadius: pxToRem(6),
              display: 'flex',
              alignItems: 'center',
              gap: pxToRem(6)
            }}
          >
            <item.icon size={12} color="#a855f7" />
            <span style={{ fontSize: pxToRem(11), color: '#e2e8f0' }}>
              {item.label}
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
        background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(16, 185, 129, 0.15))',
        borderRadius: pxToRem(20),
        border: '2px solid rgba(239, 68, 68, 0.4)',
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
          <GradientText gradient="from-red-400 via-blue-400 to-green-400">
            What You Get
          </GradientText>
        </h4>
        <p style={{ 
          fontSize: pxToRem(18),
          color: '#94a3b8',
          margin: 0
        }}>
          <span style={{ color: '#ef4444', fontWeight: 'bold' }}>Market sentiment</span> 
          {' '}+{' '}
          <span style={{ color: '#3b82f6', fontWeight: 'bold' }}>AI analysis</span>
          {' '}+{' '}
          <span style={{ color: '#10b981', fontWeight: 'bold' }}>actionable signals</span>
          {' '}={' '}
          <span style={{ color: '#14b8a6', fontWeight: 'bold' }}>Information edge</span>
        </p>
      </motion.div>
    </motion.div>
  )

  return (
    <GridLayout
      title={
        <>
          <GradientText gradient="from-red-400 via-orange-400 to-yellow-400">
            Sentiment Module Features
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
            Market Mood at Your Fingertips
          </motion.p>
        </>
      }
      cards={[
        heatMapCard,
        conversationalAICard,
        sentimentSignalsCard,
        globalCoverageCard,
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
                y: [0, Math.sin(i * 30) * 20, 0],
                x: [0, Math.cos(i * 30) * 20, 0],
                opacity: [0, 0.4, 0]
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.3
              }}
              style={{
                position: 'absolute',
                left: `${15 + (i % 4) * 25}%`,
                top: `${25 + Math.floor(i / 4) * 25}%`,
                fontSize: pxToRem(20),
                color: i % 3 === 0 ? '#ef4444' : i % 3 === 1 ? '#3b82f6' : '#10b981'
              }}
            >
              <Activity size={14} />
            </motion.div>
          ))}
          
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 25% 25%, rgba(239, 68, 68, 0.12) 0%, transparent 50%)',
                'radial-gradient(circle at 75% 50%, rgba(59, 130, 246, 0.12) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 75%, rgba(16, 185, 129, 0.12) 0%, transparent 50%)',
                'radial-gradient(circle at 25% 25%, rgba(239, 68, 68, 0.12) 0%, transparent 50%)'
              ]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
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

// Missing import for CheckCircle
import { CheckCircle } from 'lucide-react'