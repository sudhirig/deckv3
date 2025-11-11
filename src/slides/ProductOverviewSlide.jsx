import React from 'react'
import { motion } from 'framer-motion'
import Icon from '../components/Icon'
import GradientText from '../components/GradientText'

const ProductOverviewSlide = () => {
  return (
    <div style={{
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: '2rem',
      background: 'radial-gradient(ellipse at center, rgba(147, 51, 234, 0.03), transparent)',
      position: 'relative',
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
          marginBottom: '0.75rem',
          position: 'relative',
          zIndex: 1
        }}
      >
        <h1 style={{ 
          fontSize: '2.2rem',
          fontWeight: 900,
          marginBottom: '0.3rem'
        }}>
          <GradientText gradient="from-purple-400 via-blue-400 to-cyan-400">
            The Complete AI Family Office Suite
          </GradientText>
        </h1>
        <p style={{ 
          fontSize: '1rem',
          color: 'rgba(255, 255, 255, 0.8)',
          letterSpacing: '0.5px'
        }}>
          7 Operational Modules • 68+ AI Agents • 100% Live Today
        </p>
      </motion.div>

      {/* Main Content Area */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.8rem',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Central AI Brain Hub */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '0.5rem'
          }}
        >
          <div
            className="glass-card"
            style={{
              padding: '1rem 2rem',
              background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.15), rgba(59, 130, 246, 0.1))',
              border: '2px solid rgba(147, 51, 234, 0.3)',
              borderRadius: '20px',
              boxShadow: '0 8px 32px rgba(147, 51, 234, 0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem'
            }}
          >
            <Icon type="bot" size={40} variant="badge" gradient="from-purple-400 to-blue-400" />
            <div>
              <h3 style={{ 
                fontSize: '1.1rem',
                color: '#a78bfa',
                margin: 0,
                fontWeight: 700
              }}>
                30-Agent Command Center
              </h3>
              <p style={{ 
                fontSize: '0.8rem',
                color: 'rgba(255, 255, 255, 0.7)',
                margin: 0
              }}>
                12 Investment Committee • 18 Hedge Fund Team
              </p>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#4ade80',
                animation: 'pulse 2s infinite'
              }} />
              <span style={{ color: '#4ade80', fontSize: '0.75rem' }}>LIVE</span>
            </div>
          </div>
        </motion.div>

        {/* 7 Product Modules Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '0.8rem',
          flex: 1
        }}>
          {/* Module 1: Voice Trading */}
          <motion.div
            className="glass-card"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              padding: '0.9rem',
              background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.12), rgba(251, 191, 36, 0.08))',
              border: '1.5px solid rgba(249, 115, 22, 0.25)',
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <Icon type="zap" size={24} variant="badge" gradient="from-orange-400 to-amber-400" />
              <h4 style={{ fontSize: '0.9rem', color: '#fb923c', margin: 0, fontWeight: 700 }}>
                Voice Trading
              </h4>
              <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80' }} />
                <span style={{ color: '#4ade80', fontSize: '0.6rem' }}>LIVE</span>
              </div>
            </div>
            <div style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.3' }}>
              • 11ms execution latency<br/>
              • 3 languages support<br/>
              • Zerodha integrated
            </div>
          </motion.div>

          {/* Module 2: CGMF Mutual Funds */}
          <motion.div
            className="glass-card"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            style={{
              padding: '0.9rem',
              background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.12), rgba(20, 184, 166, 0.08))',
              border: '1.5px solid rgba(34, 197, 94, 0.25)',
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <Icon type="trending" size={24} variant="badge" gradient="from-green-400 to-emerald-400" />
              <h4 style={{ fontSize: '0.9rem', color: '#4ade80', margin: 0, fontWeight: 700 }}>
                CGMF Advisory
              </h4>
              <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80' }} />
                <span style={{ color: '#4ade80', fontSize: '0.6rem' }}>LIVE</span>
              </div>
            </div>
            <div style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.3' }}>
              • 16,766 funds analyzed<br/>
              • 43 AMCs covered<br/>
              • AI recommendations
            </div>
          </motion.div>

          {/* Module 3: GIFT City Gateway */}
          <motion.div
            className="glass-card"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              padding: '0.9rem',
              background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.12), rgba(219, 39, 119, 0.08))',
              border: '1.5px solid rgba(236, 72, 153, 0.25)',
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <Icon type="globe" size={24} variant="badge" gradient="from-pink-400 to-rose-400" />
              <h4 style={{ fontSize: '0.9rem', color: '#ec4899', margin: 0, fontWeight: 700 }}>
                GIFT City Gateway
              </h4>
              <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fbbf24' }} />
                <span style={{ color: '#fbbf24', fontSize: '0.6rem' }}>Q1'25</span>
              </div>
            </div>
            <div style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.3' }}>
              • $5T TAM access<br/>
              • Tax-free investments<br/>
              • Regulatory moat
            </div>
          </motion.div>

          {/* Module 4: Algo Trading */}
          <motion.div
            className="glass-card"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            style={{
              padding: '0.9rem',
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.12), rgba(96, 165, 250, 0.08))',
              border: '1.5px solid rgba(59, 130, 246, 0.25)',
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <Icon type="bar-chart" size={24} variant="badge" gradient="from-blue-400 to-cyan-400" />
              <h4 style={{ fontSize: '0.9rem', color: '#60a5fa', margin: 0, fontWeight: 700 }}>
                Algo Trading Lab
              </h4>
              <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80' }} />
                <span style={{ color: '#4ade80', fontSize: '0.6rem' }}>LIVE</span>
              </div>
            </div>
            <div style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.3' }}>
              • 122+ indicators<br/>
              • Backtesting engine<br/>
              • Risk protocols
            </div>
          </motion.div>

          {/* Module 5: Sentiment Intelligence */}
          <motion.div
            className="glass-card"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{
              padding: '0.9rem',
              background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.12), rgba(139, 92, 246, 0.08))',
              border: '1.5px solid rgba(168, 85, 247, 0.25)',
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <Icon type="sparkles" size={24} variant="badge" gradient="from-purple-400 to-violet-400" />
              <h4 style={{ fontSize: '0.9rem', color: '#a78bfa', margin: 0, fontWeight: 700 }}>
                Sentiment AI
              </h4>
              <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80' }} />
                <span style={{ color: '#4ade80', fontSize: '0.6rem' }}>LIVE</span>
              </div>
            </div>
            <div style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.3' }}>
              • 182+ news sources<br/>
              • FinBERT processing<br/>
              • Heat map visual
            </div>
          </motion.div>

          {/* Module 6: Tax Alpha */}
          <motion.div
            className="glass-card"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            style={{
              padding: '0.9rem',
              background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.12), rgba(13, 148, 136, 0.08))',
              border: '1.5px solid rgba(20, 184, 166, 0.25)',
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <Icon type="dollar-sign" size={24} variant="badge" gradient="from-teal-400 to-cyan-400" />
              <h4 style={{ fontSize: '0.9rem', color: '#14b8a6', margin: 0, fontWeight: 700 }}>
                Tax Optimizer
              </h4>
              <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80' }} />
                <span style={{ color: '#4ade80', fontSize: '0.6rem' }}>LIVE</span>
              </div>
            </div>
            <div style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.3' }}>
              • Daily harvesting<br/>
              • +1.8% alpha gain<br/>
              • Auto compliance
            </div>
          </motion.div>

          {/* Module 7: Alternative Assets */}
          <motion.div
            className="glass-card"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{
              padding: '0.9rem',
              background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.12), rgba(245, 158, 11, 0.08))',
              border: '1.5px solid rgba(251, 191, 36, 0.25)',
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <Icon type="building" size={24} variant="badge" gradient="from-amber-400 to-yellow-400" />
              <h4 style={{ fontSize: '0.9rem', color: '#fbbf24', margin: 0, fontWeight: 700 }}>
                Alternative Assets
              </h4>
              <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80' }} />
                <span style={{ color: '#4ade80', fontSize: '0.6rem' }}>LIVE</span>
              </div>
            </div>
            <div style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.3' }}>
              • InvITs/REITs analysis<br/>
              • PDF to 1-page memo<br/>
              • +300bps alpha
            </div>
          </motion.div>
        </div>

        {/* Moat Indicators - Three badges */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
          marginTop: '0.5rem',
          marginBottom: '0.5rem'
        }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 0.8rem',
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '20px'
            }}
          >
            <Icon type="lock" size={16} variant="inline" gradient="from-blue-400 to-cyan-400" />
            <span style={{ fontSize: '0.75rem', color: '#60a5fa', fontWeight: 600 }}>
              2-Year Head Start
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 0.8rem',
              background: 'rgba(34, 197, 94, 0.1)',
              border: '1px solid rgba(34, 197, 94, 0.3)',
              borderRadius: '20px'
            }}
          >
            <Icon type="scale" size={16} variant="inline" gradient="from-green-400 to-emerald-400" />
            <span style={{ fontSize: '0.75rem', color: '#4ade80', fontWeight: 600 }}>
              GIFT City Exclusive
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 0.8rem',
              background: 'rgba(20, 184, 166, 0.1)',
              border: '1px solid rgba(20, 184, 166, 0.3)',
              borderRadius: '20px'
            }}
          >
            <Icon type="shield" size={16} variant="inline" gradient="from-teal-400 to-cyan-400" />
            <span style={{ fontSize: '0.75rem', color: '#14b8a6', fontWeight: 600 }}>
              Zero Custody Risk
            </span>
          </motion.div>
        </div>

        {/* Performance Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95 }}
          className="glass-card"
          style={{
            padding: '0.8rem',
            background: 'linear-gradient(90deg, rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1), rgba(20, 184, 166, 0.1))',
            border: '1px solid rgba(148, 163, 184, 0.2)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem'
          }}
        >
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#4ade80' }}>$10M</div>
              <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>AUM</div>
            </div>
            <div style={{ width: '1px', height: '25px', background: 'rgba(148, 163, 184, 0.3)' }} />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#60a5fa' }}>5+</div>
              <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>Clients</div>
            </div>
            <div style={{ width: '1px', height: '25px', background: 'rgba(148, 163, 184, 0.3)' }} />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#fbbf24' }}>25%</div>
              <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>Outperformance</div>
            </div>
            <div style={{ width: '1px', height: '25px', background: 'rgba(148, 163, 184, 0.3)' }} />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#4ade80' }}>100%</div>
              <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>Live</div>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Foundation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            fontSize: '0.7rem',
            color: '#64748b'
          }}
        >
          <span>LangGraph</span>
          <span>•</span>
          <span>GPT-4</span>
          <span>•</span>
          <span>Claude</span>
          <span>•</span>
          <span>Gemini</span>
          <span>•</span>
          <span>PostgreSQL</span>
          <span>•</span>
          <span>React</span>
          <span>•</span>
          <span>FastAPI</span>
        </motion.div>
      </div>
    </div>
  )
}

export default ProductOverviewSlide