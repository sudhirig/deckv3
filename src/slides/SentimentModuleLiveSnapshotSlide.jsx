import React, { useState } from 'react'
import { motion } from 'framer-motion'
import GradientText from '../components/GradientText'
import AnimatedCounter from '../components/AnimatedCounter'
import Icon from '../components/Icon'
import { 
  Camera, 
  Activity, 
  TrendingUp, 
  MessageSquare,
  Hash,
  BarChart3,
  AlertCircle,
  CheckCircle,
  XCircle,
  Clock
} from 'lucide-react'
import { DataSlideLayout } from '../components/StandardLayouts'
import { pxToRem } from '../utils/responsive'

export default function SentimentModuleLiveSnapshotSlide() {
  const [hoveredStock, setHoveredStock] = useState(null)
  const [selectedSector, setSelectedSector] = useState(null)
  
  // Stock data for heat map
  const stockData = [
    { symbol: 'TCS', sentiment: 67, sector: 'IT', color: '#10b981' },
    { symbol: 'INFY', sentiment: 45, sector: 'IT', color: '#10b981' },
    { symbol: 'WIPRO', sentiment: 52, sector: 'IT', color: '#10b981' },
    { symbol: 'HCL', sentiment: 12, sector: 'IT', color: '#fbbf24' },
    { symbol: 'HDFC', sentiment: 23, sector: 'Banking', color: '#3b82f6' },
    { symbol: 'ICICI', sentiment: 18, sector: 'Banking', color: '#3b82f6' },
    { symbol: 'AXIS', sentiment: 5, sector: 'Banking', color: '#fbbf24' },
    { symbol: 'KOTAK', sentiment: 31, sector: 'Banking', color: '#3b82f6' },
    { symbol: 'SBI', sentiment: -8, sector: 'Banking', color: '#ef4444' },
    { symbol: 'RIL', sentiment: 72, sector: 'Energy', color: '#10b981' },
    { symbol: 'TATA', sentiment: -24, sector: 'Conglomerate', color: '#ef4444' },
    { symbol: 'BHARTI', sentiment: 15, sector: 'Telecom', color: '#fbbf24' },
    { symbol: 'MARUTI', sentiment: -35, sector: 'Auto', color: '#ef4444' },
    { symbol: 'ITC', sentiment: 0, sector: 'FMCG', color: '#fbbf24' },
    { symbol: 'L&T', sentiment: 58, sector: 'Construction', color: '#10b981' },
    { symbol: 'COAL', sentiment: -18, sector: 'Mining', color: '#ef4444' },
    { symbol: 'SUNPHRM', sentiment: 42, sector: 'Pharma', color: '#10b981' },
    { symbol: 'HINDUL', sentiment: 8, sector: 'FMCG', color: '#fbbf24' },
    { symbol: 'ASIAN', sentiment: 28, sector: 'Paints', color: '#3b82f6' },
    { symbol: 'TITAN', sentiment: 65, sector: 'Retail', color: '#10b981' }
  ]
  
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
          marginBottom: pxToRem(16),
          padding: pxToRem(10),
          background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(0, 0, 0, 0.3))',
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
            background: '#a855f7',
            borderRadius: '50%'
          }}
        />
        <Camera size={20} color="#a855f7" />
        <span style={{ color: '#a855f7', fontWeight: 'bold', fontSize: pxToRem(14) }}>
          SENTIMENT HEAT MAP
        </span>
        <span style={{ color: '#94a3b8', fontSize: pxToRem(11) }}>
          Last Update: <AnimatedCounter end={2 || 0} duration={1000} />s ago
        </span>
      </motion.div>
      
      {/* Heat Map Grid */}
      <motion.div
        initial={{ opacity: 0, y: pxToRem(20) }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        style={{
          padding: pxToRem(16),
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4))',
          borderRadius: pxToRem(12),
          marginBottom: pxToRem(16)
        }}
      >
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: pxToRem(8)
        }}>
          {stockData.map((stock, index) => (
            <motion.div
              key={stock.symbol}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.02 }}
              whileHover={{ scale: 1.1, zIndex: 10 }}
              onHoverStart={() => setHoveredStock(stock.symbol)}
              onHoverEnd={() => setHoveredStock(null)}
              style={{
                padding: pxToRem(8),
                background: `linear-gradient(135deg, ${stock.color}60, ${stock.color}30)`,
                border: `1px solid ${stock.color}80`,
                borderRadius: pxToRem(6),
                textAlign: 'center',
                cursor: 'pointer',
                position: 'relative'
              }}
            >
              <p style={{ 
                fontSize: pxToRem(10),
                fontWeight: 'bold',
                color: '#e2e8f0',
                margin: 0
              }}>
                {stock.symbol}
              </p>
              <p style={{ 
                fontSize: pxToRem(12),
                fontWeight: 'bold',
                color: stock.color,
                margin: 0
              }}>
                {stock.sentiment > 0 ? '+' : ''}{stock.sentiment}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Legend */}
        <div style={{ 
          display: 'flex',
          justifyContent: 'center',
          gap: pxToRem(16),
          marginTop: pxToRem(12)
        }}>
          {[
            { label: 'Bullish', color: '#10b981', range: '+50 to +100' },
            { label: 'Neutral', color: '#fbbf24', range: '-20 to +20' },
            { label: 'Bearish', color: '#ef4444', range: '-100 to -50' }
          ].map((item) => (
            <div key={item.label} style={{ 
              display: 'flex',
              alignItems: 'center',
              gap: pxToRem(6)
            }}>
              <div style={{
                width: pxToRem(12),
                height: pxToRem(12),
                background: item.color,
                borderRadius: pxToRem(2)
              }} />
              <span style={{ fontSize: pxToRem(10), color: '#94a3b8' }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
      
      {/* Conversational Interface */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1 }}
        style={{
          padding: pxToRem(16),
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(0, 0, 0, 0.3))',
          borderRadius: pxToRem(12),
          border: '1px solid rgba(59, 130, 246, 0.3)'
        }}
      >
        <h4 style={{ 
          fontSize: pxToRem(14),
          color: '#3b82f6',
          marginBottom: pxToRem(12),
          display: 'flex',
          alignItems: 'center',
          gap: pxToRem(8)
        }}>
          <MessageSquare size={16} />
          Conversational Interface
        </h4>
        
        <div style={{
          padding: pxToRem(10),
          background: 'rgba(0, 0, 0, 0.5)',
          borderRadius: pxToRem(8)
        }}>
          <p style={{ fontSize: pxToRem(12), color: '#f59e0b', margin: 0 }}>
            User: "What's driving TCS sentiment?"
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <p style={{ fontSize: pxToRem(12), color: '#a855f7', marginTop: pxToRem(8) }}>
              AI: TCS sentiment +67 driven by:
            </p>
            <ul style={{ 
              fontSize: pxToRem(11),
              color: '#e2e8f0',
              margin: 0,
              paddingLeft: pxToRem(20)
            }}>
              <li>Q3 earnings beat estimates by 12%</li>
              <li>$2B deal win announcement</li>
              <li>84% positive mentions across 42 articles</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
  
  const keyInsights = (
    <div style={{
      padding: pxToRem(20),
      background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(248, 113, 113, 0.05))',
      borderRadius: pxToRem(16),
      border: '2px solid rgba(239, 68, 68, 0.3)',
      maxHeight: '80vh',
      overflow: 'hidden'
    }}>
      <h3 style={{ 
        fontSize: pxToRem(20),
        color: '#ef4444',
        marginBottom: pxToRem(16),
        display: 'flex',
        alignItems: 'center',
        gap: pxToRem(8)
      }}>
        <Activity size={20} />
        Market Statistics
      </h3>
      
      {/* Overall sentiment breakdown */}
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
          <CheckCircle size={16} color="#10b981" style={{ marginBottom: pxToRem(4) }} />
          <p style={{ fontSize: pxToRem(22), fontWeight: 'bold', color: '#10b981', margin: 0 }}>
            <AnimatedCounter end={62 || 0} duration={1000} />%
          </p>
          <p style={{ fontSize: pxToRem(10), color: '#94a3b8' }}>Bullish</p>
        </div>
        
        <div style={{
          padding: pxToRem(12),
          background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(0, 0, 0, 0.3))',
          borderRadius: pxToRem(8),
          textAlign: 'center'
        }}>
          <AlertCircle size={16} color="#fbbf24" style={{ marginBottom: pxToRem(4) }} />
          <p style={{ fontSize: pxToRem(22), fontWeight: 'bold', color: '#fbbf24', margin: 0 }}>
            <AnimatedCounter end={15 || 0} duration={1000} />%
          </p>
          <p style={{ fontSize: pxToRem(10), color: '#94a3b8' }}>Neutral</p>
        </div>
        
        <div style={{
          padding: pxToRem(12),
          background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(0, 0, 0, 0.3))',
          borderRadius: pxToRem(8),
          textAlign: 'center'
        }}>
          <XCircle size={16} color="#ef4444" style={{ marginBottom: pxToRem(4) }} />
          <p style={{ fontSize: pxToRem(22), fontWeight: 'bold', color: '#ef4444', margin: 0 }}>
            <AnimatedCounter end={23 || 0} duration={1000} />%
          </p>
          <p style={{ fontSize: pxToRem(10), color: '#94a3b8' }}>Bearish</p>
        </div>
      </div>
      
      {/* Data sources */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          padding: pxToRem(12),
          background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(0, 0, 0, 0.3))',
          borderRadius: pxToRem(8),
          marginBottom: pxToRem(12)
        }}
      >
        <div style={{ 
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: pxToRem(8)
        }}>
          <span style={{ fontSize: pxToRem(12), color: '#e2e8f0' }}>
            Articles/Day
          </span>
          <span style={{ fontSize: pxToRem(14), fontWeight: 'bold', color: '#a855f7' }}>
            <AnimatedCounter end={50 || 0} duration={1500} />K
          </span>
        </div>
        <div style={{ 
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span style={{ fontSize: pxToRem(12), color: '#e2e8f0' }}>
            Sources Analyzed
          </span>
          <span style={{ fontSize: pxToRem(14), fontWeight: 'bold', color: '#a855f7' }}>
            <AnimatedCounter end={182 || 0} duration={1500} />
          </span>
        </div>
      </motion.div>
      
      {/* Refresh rate */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7 }}
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
        <Clock size={16} color="#14b8a6" />
        <span style={{ fontSize: pxToRem(12), color: '#e2e8f0' }}>
          Refresh Rate:{' '}
          <span style={{ color: '#14b8a6', fontWeight: 'bold' }}>
            <AnimatedCounter end={2 || 0} duration={1000} /> sec
          </span>
        </span>
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
        background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(168, 85, 247, 0.1))',
        borderRadius: pxToRem(16),
        border: '2px solid rgba(239, 68, 68, 0.3)',
        textAlign: 'center'
      }}
    >
      <div style={{ 
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}>
        <div>
          <p style={{ fontSize: pxToRem(14), color: '#94a3b8', marginBottom: pxToRem(4) }}>
            Live Platform
          </p>
          <p style={{ fontSize: pxToRem(16), color: '#ef4444', fontWeight: 'bold' }}>
            app.voraventures.ai/sentiment
          </p>
        </div>
        <div style={{
          padding: `${pxToRem(8)} ${pxToRem(12)}`,
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(0, 0, 0, 0.3))',
          borderRadius: pxToRem(8)
        }}>
          <p style={{ fontSize: pxToRem(12), color: '#e2e8f0' }}>
            Real-time market mood
          </p>
        </div>
      </div>
    </motion.div>
  )
  
  return (
    <DataSlideLayout
      title={
        <>
          <GradientText gradient="from-red-400 via-purple-400 to-blue-400">
            Sentiment Module Live Snapshot
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
            Interactive Nifty 500 Heat Map - Real-time Analysis
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
                x: [0, Math.random() * 40 - 20, 0],
                y: [0, Math.random() * 40 - 20, 0],
                opacity: [0, 0.3, 0]
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.4
              }}
              style={{
                position: 'absolute',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: pxToRem(16),
                color: ['#ef4444', '#3b82f6', '#10b981'][i % 3]
              }}
            >
              <Hash size={12} />
            </motion.div>
          ))}
        </>
      }
    />
  )
}