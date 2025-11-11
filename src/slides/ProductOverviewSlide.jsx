import React from 'react'
import { motion } from 'framer-motion'
import Icon from '../components/Icon'
import GradientText from '../components/GradientText'

const ProductOverviewSlide = () => {
  return (
    <div style={{
      height: '100%',
      width: '100%',
      padding: '0.8rem',
      background: 'radial-gradient(ellipse at center, rgba(147, 51, 234, 0.03), transparent)',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }}>
      {/* Animated background particles */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 20% 50%, rgba(249, 115, 22, 0.05) 0%, transparent 40%), radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.05) 0%, transparent 40%), radial-gradient(circle at 50% 80%, rgba(20, 184, 166, 0.05) 0%, transparent 40%)',
        zIndex: 0
      }} />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          textAlign: 'center',
          marginBottom: '0.3rem',
          position: 'relative',
          zIndex: 1
        }}
      >
        <h1 style={{ 
          fontSize: '1.4rem',
          fontWeight: 900,
          marginBottom: '0.1rem'
        }}>
          <GradientText gradient="from-purple-400 via-blue-400 to-cyan-400">
            The Complete AI Family Office Suite
          </GradientText>
        </h1>
        <p style={{ 
          fontSize: '0.7rem',
          color: 'rgba(255, 255, 255, 0.8)',
          letterSpacing: '0.3px'
        }}>
          7 Operational Modules • 68+ AI Agents • 100% Live Today
        </p>
      </motion.div>

      {/* Central AI Brain Hub */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '0.3rem',
          position: 'relative',
          zIndex: 1
        }}
      >
        <div
          className="glass-card"
          style={{
            padding: '0.4rem 1rem',
            background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.15), rgba(59, 130, 246, 0.1))',
            border: '1.5px solid rgba(147, 51, 234, 0.3)',
            borderRadius: '15px',
            boxShadow: '0 4px 16px rgba(147, 51, 234, 0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.8rem'
          }}
        >
          <Icon type="bot" size={24} variant="badge" gradient="from-purple-400 to-blue-400" />
          <div>
            <h3 style={{ 
              fontSize: '0.8rem',
              color: '#a78bfa',
              margin: 0,
              fontWeight: 700
            }}>
              30-Agent Command Center
            </h3>
            <p style={{ 
              fontSize: '0.6rem',
              color: 'rgba(255, 255, 255, 0.7)',
              margin: 0
            }}>
              12 Investment Committee • 18 Hedge Fund Team
            </p>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.2rem'
          }}>
            <div style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#4ade80',
              animation: 'pulse 2s infinite'
            }} />
            <span style={{ color: '#4ade80', fontSize: '0.6rem' }}>LIVE</span>
          </div>
        </div>
      </motion.div>

      {/* 7 Product Modules Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: 'repeat(2, auto)',
        gap: '0.3rem',
        marginBottom: '0.3rem',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Module 1: Voice Trading */}
        <motion.div
          className="glass-card"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          style={{
            padding: '0.4rem',
            background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.12), rgba(251, 191, 36, 0.08))',
            border: '1px solid rgba(249, 115, 22, 0.25)',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.2rem' }}>
            <Icon type="zap" size={16} variant="badge" gradient="from-orange-400 to-amber-400" />
            <h4 style={{ fontSize: '0.65rem', color: '#fb923c', margin: 0, fontWeight: 700 }}>
              Voice Trading
            </h4>
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.1rem' }}>
              <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#4ade80' }} />
              <span style={{ color: '#4ade80', fontSize: '0.5rem' }}>LIVE</span>
            </div>
          </div>
          <div style={{ fontSize: '0.5rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.1' }}>
            • 11ms latency<br/>
            • 3 languages<br/>
            • Zerodha API
          </div>
        </motion.div>

        {/* Module 2: CGMF Mutual Funds */}
        <motion.div
          className="glass-card"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          style={{
            padding: '0.4rem',
            background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.12), rgba(20, 184, 166, 0.08))',
            border: '1px solid rgba(34, 197, 94, 0.25)',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.2rem' }}>
            <Icon type="trending" size={16} variant="badge" gradient="from-green-400 to-emerald-400" />
            <h4 style={{ fontSize: '0.65rem', color: '#4ade80', margin: 0, fontWeight: 700 }}>
              CGMF Advisory
            </h4>
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.1rem' }}>
              <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#4ade80' }} />
              <span style={{ color: '#4ade80', fontSize: '0.5rem' }}>LIVE</span>
            </div>
          </div>
          <div style={{ fontSize: '0.5rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.1' }}>
            • 16,766 funds<br/>
            • 43 AMCs<br/>
            • AI picks
          </div>
        </motion.div>

        {/* Module 3: GIFT City Gateway */}
        <motion.div
          className="glass-card"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          style={{
            padding: '0.4rem',
            background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.12), rgba(219, 39, 119, 0.08))',
            border: '1px solid rgba(236, 72, 153, 0.25)',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.2rem' }}>
            <Icon type="globe" size={16} variant="badge" gradient="from-pink-400 to-rose-400" />
            <h4 style={{ fontSize: '0.65rem', color: '#ec4899', margin: 0, fontWeight: 700 }}>
              GIFT City
            </h4>
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.1rem' }}>
              <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#fbbf24' }} />
              <span style={{ color: '#fbbf24', fontSize: '0.5rem' }}>Q1'25</span>
            </div>
          </div>
          <div style={{ fontSize: '0.5rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.1' }}>
            • $5T TAM<br/>
            • Tax-free<br/>
            • Moat
          </div>
        </motion.div>

        {/* Module 4: Algo Trading */}
        <motion.div
          className="glass-card"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          style={{
            padding: '0.4rem',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.12), rgba(96, 165, 250, 0.08))',
            border: '1px solid rgba(59, 130, 246, 0.25)',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.2rem' }}>
            <Icon type="bar-chart" size={16} variant="badge" gradient="from-blue-400 to-cyan-400" />
            <h4 style={{ fontSize: '0.65rem', color: '#60a5fa', margin: 0, fontWeight: 700 }}>
              Algo Lab
            </h4>
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.1rem' }}>
              <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#4ade80' }} />
              <span style={{ color: '#4ade80', fontSize: '0.5rem' }}>LIVE</span>
            </div>
          </div>
          <div style={{ fontSize: '0.5rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.1' }}>
            • 122 signals<br/>
            • Backtest<br/>
            • Risk mgmt
          </div>
        </motion.div>

        {/* Module 5: Sentiment Intelligence */}
        <motion.div
          className="glass-card"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          style={{
            padding: '0.4rem',
            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.12), rgba(139, 92, 246, 0.08))',
            border: '1px solid rgba(168, 85, 247, 0.25)',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.2rem' }}>
            <Icon type="sparkles" size={16} variant="badge" gradient="from-purple-400 to-violet-400" />
            <h4 style={{ fontSize: '0.65rem', color: '#a78bfa', margin: 0, fontWeight: 700 }}>
              Sentiment AI
            </h4>
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.1rem' }}>
              <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#4ade80' }} />
              <span style={{ color: '#4ade80', fontSize: '0.5rem' }}>LIVE</span>
            </div>
          </div>
          <div style={{ fontSize: '0.5rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.1' }}>
            • 182 sources<br/>
            • FinBERT<br/>
            • Heat map
          </div>
        </motion.div>

        {/* Module 6: Tax Alpha */}
        <motion.div
          className="glass-card"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          style={{
            padding: '0.4rem',
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.12), rgba(13, 148, 136, 0.08))',
            border: '1px solid rgba(20, 184, 166, 0.25)',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.2rem' }}>
            <Icon type="dollar-sign" size={16} variant="badge" gradient="from-teal-400 to-cyan-400" />
            <h4 style={{ fontSize: '0.65rem', color: '#14b8a6', margin: 0, fontWeight: 700 }}>
              Tax Optimizer
            </h4>
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.1rem' }}>
              <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#4ade80' }} />
              <span style={{ color: '#4ade80', fontSize: '0.5rem' }}>LIVE</span>
            </div>
          </div>
          <div style={{ fontSize: '0.5rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.1' }}>
            • Daily harvest<br/>
            • +1.8% alpha<br/>
            • Compliance
          </div>
        </motion.div>

        {/* Module 7: Alternative Assets */}
        <motion.div
          className="glass-card"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.55 }}
          style={{
            padding: '0.4rem',
            background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.12), rgba(245, 158, 11, 0.08))',
            border: '1px solid rgba(251, 191, 36, 0.25)',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.2rem' }}>
            <Icon type="building" size={16} variant="badge" gradient="from-amber-400 to-yellow-400" />
            <h4 style={{ fontSize: '0.65rem', color: '#fbbf24', margin: 0, fontWeight: 700 }}>
              Alt Assets
            </h4>
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.1rem' }}>
              <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#4ade80' }} />
              <span style={{ color: '#4ade80', fontSize: '0.5rem' }}>LIVE</span>
            </div>
          </div>
          <div style={{ fontSize: '0.5rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.1' }}>
            • InvIT/REITs<br/>
            • AI memo<br/>
            • +300bps
          </div>
        </motion.div>
      </div>

      {/* Moat Indicators - Three badges */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '0.8rem',
        marginBottom: '0.3rem',
        position: 'relative',
        zIndex: 1
      }}>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
            padding: '0.2rem 0.5rem',
            background: 'rgba(59, 130, 246, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            borderRadius: '15px'
          }}
        >
          <Icon type="lock" size={12} variant="inline" gradient="from-blue-400 to-cyan-400" />
          <span style={{ fontSize: '0.55rem', color: '#60a5fa', fontWeight: 600 }}>
            2-Year Head Start
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
            padding: '0.2rem 0.5rem',
            background: 'rgba(34, 197, 94, 0.1)',
            border: '1px solid rgba(34, 197, 94, 0.3)',
            borderRadius: '15px'
          }}
        >
          <Icon type="scale" size={12} variant="inline" gradient="from-green-400 to-emerald-400" />
          <span style={{ fontSize: '0.55rem', color: '#4ade80', fontWeight: 600 }}>
            GIFT City Exclusive
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
            padding: '0.2rem 0.5rem',
            background: 'rgba(20, 184, 166, 0.1)',
            border: '1px solid rgba(20, 184, 166, 0.3)',
            borderRadius: '15px'
          }}
        >
          <Icon type="shield" size={12} variant="inline" gradient="from-teal-400 to-cyan-400" />
          <span style={{ fontSize: '0.55rem', color: '#14b8a6', fontWeight: 600 }}>
            Zero Custody Risk
          </span>
        </motion.div>
      </div>

      {/* Performance Bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85 }}
        className="glass-card"
        style={{
          padding: '0.4rem',
          background: 'linear-gradient(90deg, rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1), rgba(20, 184, 166, 0.1))',
          border: '1px solid rgba(148, 163, 184, 0.2)',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          position: 'relative',
          zIndex: 1
        }}
      >
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#4ade80' }}>$10M</div>
            <div style={{ fontSize: '0.45rem', color: '#94a3b8' }}>AUM</div>
          </div>
          <div style={{ width: '1px', height: '18px', background: 'rgba(148, 163, 184, 0.3)' }} />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#60a5fa' }}>5+</div>
            <div style={{ fontSize: '0.45rem', color: '#94a3b8' }}>Clients</div>
          </div>
          <div style={{ width: '1px', height: '18px', background: 'rgba(148, 163, 184, 0.3)' }} />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#fbbf24' }}>25%</div>
            <div style={{ fontSize: '0.45rem', color: '#94a3b8' }}>Outperform</div>
          </div>
          <div style={{ width: '1px', height: '18px', background: 'rgba(148, 163, 184, 0.3)' }} />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#4ade80' }}>100%</div>
            <div style={{ fontSize: '0.45rem', color: '#94a3b8' }}>Live</div>
          </div>
        </div>
      </motion.div>

      {/* Tech Stack Foundation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.5rem',
          fontSize: '0.45rem',
          color: '#64748b',
          marginTop: '0.2rem',
          position: 'relative',
          zIndex: 1
        }}
      >
        <span>LangGraph • GPT-4 • Claude • Gemini • PostgreSQL • React • FastAPI</span>
      </motion.div>
    </div>
  )
}

export default ProductOverviewSlide