import React, { useState } from 'react'
import { motion } from 'framer-motion'
import GradientText from '../components/GradientText'
import AnimatedCounter from '../components/AnimatedCounter'
import Icon from '../components/Icon'
import CircularProgress from '../components/CircularProgress'
import { 
  Camera, 
  Users, 
  TrendingUp, 
  Award,
  CheckCircle,
  AlertCircle,
  Timer,
  Brain,
  DollarSign,
  Activity
} from 'lucide-react'
import { DataSlideLayout } from '../components/StandardLayouts'
import { pxToRem } from '../utils/responsive'

export default function TradingAgentsLiveSnapshotSlide() {
  const [activeInvestor, setActiveInvestor] = useState(null)
  
  const mainVisual = (
    <div style={{ maxHeight: '80vh', overflow: 'hidden' }}>
      {/* Live indicator */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: pxToRem(12),
          marginBottom: pxToRem(20),
          padding: pxToRem(12),
          background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(0, 0, 0, 0.3))',
          borderRadius: pxToRem(12)
        }}
      >
        <motion.div
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1]
          }}
          transition={{ duration: 1, repeat: Infinity }}
          style={{
            width: pxToRem(10),
            height: pxToRem(10),
            background: '#ef4444',
            borderRadius: '50%'
          }}
        />
        <Camera size={20} color="#ef4444" />
        <span style={{ color: '#ef4444', fontWeight: 'bold', fontSize: pxToRem(14) }}>
          LIVE ANALYSIS
        </span>
        <span style={{ color: '#94a3b8', fontSize: pxToRem(12) }}>
          Reliance Industries - Real-time
        </span>
      </motion.div>
      
      {/* Stock info header */}
      <motion.div
        initial={{ opacity: 0, y: pxToRem(-20) }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        style={{
          padding: pxToRem(16),
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.05))',
          borderRadius: pxToRem(12),
          marginBottom: pxToRem(20),
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <div>
          <h4 style={{ fontSize: pxToRem(20), color: '#3b82f6', margin: 0 }}>RELIANCE</h4>
          <p style={{ fontSize: pxToRem(12), color: '#94a3b8', margin: 0 }}>NSE: RELIANCE</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ fontSize: pxToRem(24), fontWeight: 'bold', color: '#10b981', margin: 0 }}>
            ₹<AnimatedCounter end={2456.75 || 0} decimals={2} duration={1000} />
          </p>
          <p style={{ fontSize: pxToRem(12), color: '#10b981' }}>
            +<AnimatedCounter end={1.2 || 0} decimals={1} duration={1000} />%
          </p>
        </div>
      </motion.div>
      
      {/* Two teams analysis */}
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: pxToRem(16),
        marginBottom: pxToRem(20)
      }}>
        {/* Investment Committee */}
        <motion.div
          initial={{ opacity: 0, x: pxToRem(-30) }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          style={{
            padding: pxToRem(16),
            background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(245, 158, 11, 0.05))',
            borderRadius: pxToRem(12),
            border: '1px solid rgba(251, 191, 36, 0.3)'
          }}
        >
          <h4 style={{ 
            fontSize: pxToRem(16),
            color: '#fbbf24',
            marginBottom: pxToRem(12),
            display: 'flex',
            alignItems: 'center',
            gap: pxToRem(8)
          }}>
            <Users size={18} />
            Investment Committee
          </h4>
          
          {[
            { name: 'Warren Buffett', decision: 'BUY', reason: 'Strong moat' },
            { name: 'Peter Lynch', decision: 'BUY', reason: 'PEG 1.2' },
            { name: 'Ray Dalio', decision: 'HOLD', reason: 'Macro concerns' }
          ].map((investor, index) => (
            <motion.div
              key={investor.name}
              initial={{ opacity: 0, y: pxToRem(10) }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              onHoverStart={() => setActiveInvestor(investor.name)}
              onHoverEnd={() => setActiveInvestor(null)}
              style={{
                marginBottom: pxToRem(8),
                padding: pxToRem(8),
                background: activeInvestor === investor.name ? 'rgba(0, 0, 0, 0.3)' : 'transparent',
                borderRadius: pxToRem(8),
                cursor: 'pointer'
              }}
            >
              <div style={{ 
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{ fontSize: pxToRem(12), color: '#e2e8f0' }}>
                  {investor.name}
                </span>
                <span style={{ 
                  fontSize: pxToRem(11),
                  fontWeight: 'bold',
                  color: investor.decision === 'BUY' ? '#10b981' : '#fbbf24',
                  padding: `${pxToRem(2)} ${pxToRem(6)}`,
                  background: investor.decision === 'BUY' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(251, 191, 36, 0.2)',
                  borderRadius: pxToRem(4)
                }}>
                  {investor.decision}
                </span>
              </div>
              <p style={{ fontSize: pxToRem(10), color: '#94a3b8', margin: 0 }}>
                {investor.reason}
              </p>
            </motion.div>
          ))}
          
          <div style={{
            marginTop: pxToRem(12),
            paddingTop: pxToRem(12),
            borderTop: '1px solid rgba(251, 191, 36, 0.2)'
          }}>
            <p style={{ fontSize: pxToRem(12), color: '#94a3b8' }}>
              Committee: <span style={{ color: '#10b981', fontWeight: 'bold' }}>75% BUY</span>
            </p>
          </div>
        </motion.div>
        
        {/* Hedge Fund Team */}
        <motion.div
          initial={{ opacity: 0, x: pxToRem(30) }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          style={{
            padding: pxToRem(16),
            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(139, 92, 246, 0.05))',
            borderRadius: pxToRem(12),
            border: '1px solid rgba(168, 85, 247, 0.3)'
          }}
        >
          <h4 style={{ 
            fontSize: pxToRem(16),
            color: '#a855f7',
            marginBottom: pxToRem(12),
            display: 'flex',
            alignItems: 'center',
            gap: pxToRem(8)
          }}>
            <Brain size={18} />
            Hedge Fund Team
          </h4>
          
          {[
            { name: 'Cathie Wood', decision: 'BUY', reason: 'Digital play' },
            { name: 'Jim Simons', decision: 'BUY', reason: 'Momentum +ve' },
            { name: 'Bill Ackman', decision: 'HOLD', reason: 'Debt levels' }
          ].map((investor, index) => (
            <motion.div
              key={investor.name}
              initial={{ opacity: 0, y: pxToRem(10) }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              style={{
                marginBottom: pxToRem(8),
                padding: pxToRem(8),
                background: 'transparent',
                borderRadius: pxToRem(8)
              }}
            >
              <div style={{ 
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{ fontSize: pxToRem(12), color: '#e2e8f0' }}>
                  {investor.name}
                </span>
                <span style={{ 
                  fontSize: pxToRem(11),
                  fontWeight: 'bold',
                  color: investor.decision === 'BUY' ? '#10b981' : '#fbbf24',
                  padding: `${pxToRem(2)} ${pxToRem(6)}`,
                  background: investor.decision === 'BUY' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(251, 191, 36, 0.2)',
                  borderRadius: pxToRem(4)
                }}>
                  {investor.decision}
                </span>
              </div>
              <p style={{ fontSize: pxToRem(10), color: '#94a3b8', margin: 0 }}>
                {investor.reason}
              </p>
            </motion.div>
          ))}
          
          <div style={{
            marginTop: pxToRem(12),
            paddingTop: pxToRem(12),
            borderTop: '1px solid rgba(168, 85, 247, 0.2)'
          }}>
            <p style={{ fontSize: pxToRem(12), color: '#94a3b8' }}>
              Hedge Fund: <span style={{ color: '#10b981', fontWeight: 'bold' }}>83% BUY</span>
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Consensus decision */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.3 }}
        style={{
          padding: pxToRem(20),
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(20, 184, 166, 0.15))',
          borderRadius: pxToRem(12),
          border: '2px solid rgba(16, 185, 129, 0.4)',
          textAlign: 'center'
        }}
      >
        <motion.h3
          animate={{ 
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ 
            fontSize: pxToRem(28),
            margin: 0,
            marginBottom: pxToRem(8)
          }}
        >
          <GradientText gradient="from-green-400 to-emerald-400">
            STRONG BUY
          </GradientText>
        </motion.h3>
        <div style={{ 
          display: 'flex',
          justifyContent: 'center',
          gap: pxToRem(32),
          marginTop: pxToRem(12)
        }}>
          <div>
            <p style={{ fontSize: pxToRem(20), fontWeight: 'bold', color: '#10b981', margin: 0 }}>
              <AnimatedCounter end={79 || 0} duration={1500} />%
            </p>
            <p style={{ fontSize: pxToRem(11), color: '#94a3b8' }}>Confidence</p>
          </div>
          <div>
            <p style={{ fontSize: pxToRem(20), fontWeight: 'bold', color: '#3b82f6', margin: 0 }}>
              ₹<AnimatedCounter end={2850 || 0} duration={1500} />
            </p>
            <p style={{ fontSize: pxToRem(11), color: '#94a3b8' }}>Target</p>
          </div>
          <div>
            <p style={{ fontSize: pxToRem(20), fontWeight: 'bold', color: '#14b8a6', margin: 0 }}>
              +<AnimatedCounter end={16 || 0} duration={1500} />%
            </p>
            <p style={{ fontSize: pxToRem(11), color: '#94a3b8' }}>Upside</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
  
  const keyInsights = (
    <div style={{
      padding: pxToRem(20),
      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.05))',
      borderRadius: pxToRem(16),
      border: '2px solid rgba(59, 130, 246, 0.3)',
      maxHeight: '80vh',
      overflow: 'hidden'
    }}>
      <h3 style={{ 
        fontSize: pxToRem(20),
        color: '#3b82f6',
        marginBottom: pxToRem(16),
        display: 'flex',
        alignItems: 'center',
        gap: pxToRem(8)
      }}>
        <Activity size={20} />
        Live Metrics
      </h3>
      
      {/* Voting breakdown */}
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: pxToRem(12),
        marginBottom: pxToRem(16)
      }}>
        <div style={{
          padding: pxToRem(12),
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(0, 0, 0, 0.3))',
          borderRadius: pxToRem(8),
          textAlign: 'center'
        }}>
          <p style={{ fontSize: pxToRem(24), fontWeight: 'bold', color: '#10b981', margin: 0 }}>
            <AnimatedCounter end={22 || 0} duration={1000} />
          </p>
          <p style={{ fontSize: pxToRem(10), color: '#94a3b8' }}>Buy Votes</p>
        </div>
        <div style={{
          padding: pxToRem(12),
          background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(0, 0, 0, 0.3))',
          borderRadius: pxToRem(8),
          textAlign: 'center'
        }}>
          <p style={{ fontSize: pxToRem(24), fontWeight: 'bold', color: '#fbbf24', margin: 0 }}>
            <AnimatedCounter end={8 || 0} duration={1000} />
          </p>
          <p style={{ fontSize: pxToRem(10), color: '#94a3b8' }}>Hold Votes</p>
        </div>
        <div style={{
          padding: pxToRem(12),
          background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(0, 0, 0, 0.3))',
          borderRadius: pxToRem(8),
          textAlign: 'center'
        }}>
          <p style={{ fontSize: pxToRem(24), fontWeight: 'bold', color: '#ef4444', margin: 0 }}>
            <AnimatedCounter end={0 || 0} duration={1000} />
          </p>
          <p style={{ fontSize: pxToRem(10), color: '#94a3b8' }}>Sell Votes</p>
        </div>
      </div>
      
      {/* Processing time */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          padding: pxToRem(12),
          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.2), rgba(0, 0, 0, 0.3))',
          borderRadius: pxToRem(8),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: pxToRem(8)
        }}
      >
        <Timer size={18} color="#14b8a6" />
        <span style={{ fontSize: pxToRem(14), color: '#e2e8f0' }}>
          Total Analysis Time:{' '}
          <span style={{ color: '#14b8a6', fontWeight: 'bold' }}>
            <AnimatedCounter end={35 || 0} duration={1500} />s
          </span>
        </span>
      </motion.div>
      
      {/* Accuracy badge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7 }}
        style={{
          marginTop: pxToRem(16),
          padding: pxToRem(12),
          background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(0, 0, 0, 0.3))',
          borderRadius: pxToRem(8),
          textAlign: 'center'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: pxToRem(8) }}>
          <Award size={18} color="#a855f7" />
          <span style={{ fontSize: pxToRem(14), color: '#e2e8f0' }}>
            Historical Accuracy:{' '}
            <span style={{ color: '#a855f7', fontWeight: 'bold' }}>
              <AnimatedCounter end={87 || 0} duration={1500} />%
            </span>
          </span>
        </div>
      </motion.div>
    </div>
  )
  
  const supportingData = (
    <motion.div
      initial={{ opacity: 0, y: pxToRem(30) }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.9 }}
      style={{
        marginTop: pxToRem(20),
        padding: pxToRem(16),
        background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(59, 130, 246, 0.1))',
        borderRadius: pxToRem(16),
        border: '2px solid rgba(20, 184, 166, 0.3)',
        textAlign: 'center'
      }}
    >
      <p style={{ fontSize: pxToRem(14), color: '#94a3b8', marginBottom: pxToRem(4) }}>
        Live Platform
      </p>
      <p style={{ fontSize: pxToRem(16), color: '#14b8a6', fontWeight: 'bold' }}>
        app.voraventures.ai/trading-agents
      </p>
    </motion.div>
  )
  
  return (
    <DataSlideLayout
      title={
        <>
          <GradientText gradient="from-amber-400 via-orange-400 to-red-400">
            Trading Agents Live Analysis
          </GradientText>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ 
              textAlign: 'center', 
              color: '#94a3b8', 
              fontSize: pxToRem(16),
              marginTop: pxToRem(8)
            }}
          >
            Real-time 30-Expert Consensus Engine
          </motion.p>
        </>
      }
      mainVisual={mainVisual}
      keyInsights={keyInsights}
      supportingData={supportingData}
      particles={
        <>
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 0.3, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.3
              }}
              style={{
                position: 'absolute',
                left: `${10 + i * 9}%`,
                top: `${30 + (i % 2) * 30}%`,
                fontSize: pxToRem(16),
                color: i % 2 === 0 ? '#fbbf24' : '#10b981'
              }}
            >
              <Users size={12} />
            </motion.div>
          ))}
        </>
      }
    />
  )
}