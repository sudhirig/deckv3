import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import GradientText from '../components/GradientText'
import AnimatedCounter from '../components/AnimatedCounter'
import Icon from '../components/Icon'
import CircularProgress from '../components/CircularProgress'
import LineChart from '../components/LineChart'
import BarChart from '../components/BarChart'
import { 
  Camera, 
  TrendingUp, 
  Activity, 
  BarChart3, 
  DollarSign, 
  Percent, 
  Clock, 
  CheckCircle,
  Zap,
  Code2,
  Bot
} from 'lucide-react'
import { DataSlideLayout } from '../components/StandardLayouts'
import { pxToRem } from '../utils/responsive'
import { toFiniteNumber } from '../utils/number'

export default function AlgoTradingLiveSnapshotSlide() {
  const [animateMetrics, setAnimateMetrics] = useState(false)
  const [selectedStrategy, setSelectedStrategy] = useState(0)
  
  useEffect(() => {
    const timer = setTimeout(() => setAnimateMetrics(true), 500)
    return () => clearTimeout(timer)
  }, [])
  
  const performanceData = [
    { label: 'Jan', value: 100, displayValue: '100' },
    { label: 'Feb', value: 112, displayValue: '112' },
    { label: 'Mar', value: 108, displayValue: '108' },
    { label: 'Apr', value: 125, displayValue: '125' },
    { label: 'May', value: 139, displayValue: '139' },
    { label: 'Jun', value: 147, displayValue: '147' }
  ]
  
  const strategyData = [
    { label: 'RSI', value: 68, displayValue: '68%' },
    { label: 'MA Cross', value: 72, displayValue: '72%' },
    { label: 'Bollinger', value: 65, displayValue: '65%' },
    { label: 'MACD', value: 71, displayValue: '71%' }
  ]
  
  const mainVisual = (
    <div style={{ maxHeight: '80vh', overflow: 'hidden' }}>
      {/* Live Platform Header */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: pxToRem(12),
          marginBottom: pxToRem(16),
          padding: pxToRem(12),
          background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(0, 0, 0, 0.3))',
          borderRadius: pxToRem(12)
        }}
      >
        <motion.div
          initial={{ scale: 1, opacity: 1 }}
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
          LIVE ALGO LAB
        </span>
      </motion.div>
      
      {/* Top Metrics Grid */}
      <motion.div
        initial={{ opacity: 0, y: pxToRem(-20) }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: pxToRem(12),
          marginBottom: pxToRem(16)
        }}
      >
        <div style={{
          padding: pxToRem(12),
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(0, 0, 0, 0.3))',
          borderRadius: pxToRem(8),
          textAlign: 'center'
        }}>
          <DollarSign size={18} color="#10b981" style={{ marginBottom: pxToRem(4) }} />
          <p style={{ fontSize: pxToRem(20), fontWeight: 'bold', color: '#10b981', margin: 0 }}>
            +<AnimatedCounter end={toFiniteNumber(147)} duration={1.5} />%
          </p>
          <p style={{ fontSize: pxToRem(10), color: '#94a3b8' }}>Total Return</p>
        </div>
        
        <div style={{
          padding: pxToRem(12),
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(0, 0, 0, 0.3))',
          borderRadius: pxToRem(8),
          textAlign: 'center'
        }}>
          <TrendingUp size={18} color="#3b82f6" style={{ marginBottom: pxToRem(4) }} />
          <p style={{ fontSize: pxToRem(20), fontWeight: 'bold', color: '#3b82f6', margin: 0 }}>
            <AnimatedCounter end={toFiniteNumber(1.92)} decimals={2} duration={1.5} />
          </p>
          <p style={{ fontSize: pxToRem(10), color: '#94a3b8' }}>Sharpe Ratio</p>
        </div>
        
        <div style={{
          padding: pxToRem(12),
          background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(0, 0, 0, 0.3))',
          borderRadius: pxToRem(8),
          textAlign: 'center'
        }}>
          <Percent size={18} color="#a855f7" style={{ marginBottom: pxToRem(4) }} />
          <p style={{ fontSize: pxToRem(20), fontWeight: 'bold', color: '#a855f7', margin: 0 }}>
            <AnimatedCounter end={toFiniteNumber(68)} duration={1.5} />%
          </p>
          <p style={{ fontSize: pxToRem(10), color: '#94a3b8' }}>Win Rate</p>
        </div>
      </motion.div>
      
      {/* Performance Chart */}
      <motion.div
        initial={{ opacity: 0, x: pxToRem(-20) }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
        style={{
          padding: pxToRem(16),
          background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(0, 0, 0, 0.3))',
          borderRadius: pxToRem(12),
          marginBottom: pxToRem(16)
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
          <BarChart3 size={18} />
          Portfolio Performance
        </h4>
        <div style={{ height: pxToRem(120) }}>
          <LineChart data={performanceData} height={120} animated={animateMetrics} />
        </div>
        <div style={{ 
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: pxToRem(12)
        }}>
          <div>
            <span style={{ fontSize: pxToRem(11), color: '#94a3b8' }}>Annual Return: </span>
            <span style={{ fontSize: pxToRem(12), color: '#10b981', fontWeight: 'bold' }}>19.8%</span>
          </div>
          <div>
            <span style={{ fontSize: pxToRem(11), color: '#94a3b8' }}>Max Drawdown: </span>
            <span style={{ fontSize: pxToRem(12), color: '#fbbf24', fontWeight: 'bold' }}>-12.4%</span>
          </div>
        </div>
      </motion.div>
      
      {/* Natural Language Strategy Builder */}
      <motion.div
        initial={{ opacity: 0, y: pxToRem(20) }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        style={{
          padding: pxToRem(16),
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(20, 184, 166, 0.15))',
          borderRadius: pxToRem(12),
          border: '1px solid rgba(16, 185, 129, 0.3)'
        }}
      >
        <h4 style={{ 
          fontSize: pxToRem(14),
          color: '#10b981',
          marginBottom: pxToRem(12),
          display: 'flex',
          alignItems: 'center',
          gap: pxToRem(8)
        }}>
          <Code2 size={16} />
          Natural Language Strategy Builder
        </h4>
        
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: pxToRem(12)
        }}>
          <div>
            <p style={{ fontSize: pxToRem(11), color: '#94a3b8', marginBottom: pxToRem(4) }}>
              Input:
            </p>
            <div style={{
              padding: pxToRem(8),
              background: 'rgba(0, 0, 0, 0.5)',
              borderRadius: pxToRem(6),
              fontFamily: 'monospace',
              fontSize: pxToRem(12),
              color: '#3b82f6'
            }}>
              "Buy when RSI &lt; 30 and price above 200-day MA"
            </div>
          </div>
          
          <div>
            <p style={{ fontSize: pxToRem(11), color: '#94a3b8', marginBottom: pxToRem(4) }}>
              AI Generated Code:
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              style={{
                padding: pxToRem(8),
                background: 'rgba(0, 0, 0, 0.5)',
                borderRadius: pxToRem(6),
                fontFamily: 'monospace',
                fontSize: pxToRem(11),
                color: '#10b981'
              }}
            >
              if indicators.rsi &lt; 30 and price &gt; indicators.sma_200:<br/>
              &nbsp;&nbsp;execute_trade('BUY', position_size=0.02)
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
  
  const keyInsights = (
    <div style={{
      padding: pxToRem(20),
      background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(245, 158, 11, 0.05))',
      borderRadius: pxToRem(16),
      border: '2px solid rgba(251, 191, 36, 0.3)',
      maxHeight: '80vh',
      overflow: 'hidden'
    }}>
      <h3 style={{ 
        fontSize: pxToRem(20),
        color: '#fbbf24',
        marginBottom: pxToRem(16),
        display: 'flex',
        alignItems: 'center',
        gap: pxToRem(8)
      }}>
        <Activity size={20} />
        Strategy Performance
      </h3>
      
      {/* Strategy Win Rates */}
      <div style={{ marginBottom: pxToRem(16) }}>
        <BarChart data={strategyData} height={100} colorScheme="gradient" animated={animateMetrics} />
        <p style={{ 
          fontSize: pxToRem(12),
          color: '#94a3b8',
          textAlign: 'center',
          marginTop: pxToRem(8)
        }}>
          Average Win Rate: <span style={{ color: '#fbbf24', fontWeight: 'bold' }}>69%</span>
        </p>
      </div>
      
      {/* Key metrics */}
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: pxToRem(12),
        marginBottom: pxToRem(12)
      }}>
        <div style={{
          padding: pxToRem(10),
          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.2), rgba(0, 0, 0, 0.3))',
          borderRadius: pxToRem(8),
          textAlign: 'center'
        }}>
          <Activity size={16} color="#14b8a6" style={{ marginBottom: pxToRem(4) }} />
          <p style={{ fontSize: pxToRem(18), fontWeight: 'bold', color: '#14b8a6', margin: 0 }}>
            <AnimatedCounter end={toFiniteNumber(122)} duration={1.5} />+
          </p>
          <p style={{ fontSize: pxToRem(9), color: '#94a3b8' }}>Indicators</p>
        </div>
        
        <div style={{
          padding: pxToRem(10),
          background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(0, 0, 0, 0.3))',
          borderRadius: pxToRem(8),
          textAlign: 'center'
        }}>
          <Clock size={16} color="#fbbf24" style={{ marginBottom: pxToRem(4) }} />
          <p style={{ fontSize: pxToRem(18), fontWeight: 'bold', color: '#fbbf24', margin: 0 }}>
            <AnimatedCounter end={toFiniteNumber(24)} duration={1.5} />ms
          </p>
          <p style={{ fontSize: pxToRem(9), color: '#94a3b8' }}>Execution</p>
        </div>
      </div>
      
      {/* Status indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        style={{
          padding: pxToRem(12),
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(0, 0, 0, 0.3))',
          borderRadius: pxToRem(8),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: pxToRem(8)
        }}
      >
        <CheckCircle size={16} color="#10b981" />
        <span style={{ fontSize: pxToRem(12), color: '#e2e8f0' }}>
          System Status:{' '}
          <span style={{ color: '#10b981', fontWeight: 'bold' }}>
            <AnimatedCounter end={toFiniteNumber(100)} duration={1.5} />% Uptime
          </span>
        </span>
      </motion.div>
      
      {/* Bot status */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          marginTop: pxToRem(12),
          padding: pxToRem(12),
          background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(0, 0, 0, 0.3))',
          borderRadius: pxToRem(8),
          textAlign: 'center'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: pxToRem(8) }}>
          <Bot size={16} color="#a855f7" />
          <span style={{ fontSize: pxToRem(12), color: '#e2e8f0' }}>
            No coding required
          </span>
        </div>
      </motion.div>
    </div>
  )
  
  const supportingData = (
    <motion.div
      initial={{ opacity: 0, y: pxToRem(30) }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.7 }}
      style={{
        marginTop: pxToRem(20),
        padding: pxToRem(16),
        background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(251, 191, 36, 0.1))',
        borderRadius: pxToRem(16),
        border: '2px solid rgba(168, 85, 247, 0.3)',
        textAlign: 'center'
      }}
    >
      <p style={{ fontSize: pxToRem(14), color: '#94a3b8', marginBottom: pxToRem(4) }}>
        Live Platform
      </p>
      <p style={{ fontSize: pxToRem(16), color: '#a855f7', fontWeight: 'bold' }}>
        app.voraventures.ai/algo-lab
      </p>
    </motion.div>
  )
  
  return (
    <DataSlideLayout
      title={
        <>
          <GradientText gradient="from-purple-400 via-blue-400 to-yellow-400">
            Algo Trading Laboratory
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
            Live Platform Dashboard - No Code Required
          </motion.p>
        </>
      }
      mainVisual={mainVisual}
      keyInsights={keyInsights}
      supportingData={supportingData}
      particles={
        <>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: 0, y: 0, opacity: 0 }}
              animate={{
                x: [0, Math.cos(i * 45) * 20, 0],
                y: [0, Math.sin(i * 45) * 20, 0],
                opacity: [0, 0.3, 0]
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.5
              }}
              style={{
                position: 'absolute',
                left: `${20 + (i % 4) * 20}%`,
                top: `${30 + Math.floor(i / 4) * 30}%`,
                fontSize: pxToRem(16),
                color: i % 2 === 0 ? '#a855f7' : '#fbbf24'
              }}
            >
              <Zap size={12} />
            </motion.div>
          ))}
        </>
      }
    />
  )
}