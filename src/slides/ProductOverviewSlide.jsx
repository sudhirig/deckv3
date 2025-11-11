import { motion } from 'framer-motion'
import GradientText from '../components/GradientText'
import Icon from '../components/Icon'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function ProductOverviewSlide() {
  return (
    <div style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(135deg, #0f1629 0%, #1a1c3d 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          textAlign: 'center',
          padding: `${pxToRem(20)} ${pxToRem(32)} ${pxToRem(16)}`,
          position: 'relative',
          zIndex: 1
        }}
      >
        <h1 style={{ 
          fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
          marginBottom: pxToRem(8)
        }}>
          <GradientText gradient="from-purple-400 via-blue-400 to-cyan-400">
            The Complete AI Family Office Suite
          </GradientText>
        </h1>
        <p style={{ 
          fontSize: 'clamp(1rem, 1.5vw, 1.3rem)',
          color: '#94a3b8'
        }}>
          7 Operational Modules • 68+ AI Agents • 100% Live Today
        </p>
      </motion.div>

      {/* Main Content Area */}
      <div style={{
        flex: 1,
        padding: `0 ${pxToRem(32)} ${pxToRem(24)}`,
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(1.5rem, 2.5vh, 2rem)'
      }}>
        {/* Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 'clamp(1rem, 1.5vw, 1.5rem)',
          flex: 1,
          alignContent: 'stretch'
        }}>
          {/* 30-Agent Command Center (spanning 2 columns) */}
          <motion.div
            style={{ gridColumn: 'span 2' }}
            whileHover={{ scale: 1.02 }}
          >
            <div style={{ 
              padding: 'clamp(1.5rem, 2vw, 2rem)',
              background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.15), rgba(59, 130, 246, 0.1))',
              border: `${pxToRem(2)} solid rgba(147, 51, 234, 0.3)`,
              borderRadius: pxToRem(16),
              boxShadow: '0 4px 16px rgba(147, 51, 234, 0.2)',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Icon type="bot" size={32} variant="inline" gradient="from-purple-400 to-blue-400" />
              <h3 style={{ 
                fontSize: 'clamp(1.2rem, 1.8vw, 1.6rem)',
                color: '#a78bfa',
                margin: '1rem 0 0.6rem',
                fontWeight: 700,
                textAlign: 'center'
              }}>
                30-Agent Command Center
              </h3>
              <p style={{ 
                fontSize: 'clamp(0.9rem, 1.2vw, 1.15rem)',
                color: 'rgba(255, 255, 255, 0.8)',
                textAlign: 'center',
                margin: 0,
                lineHeight: '1.6'
              }}>
                12 Investment Committee<br/>
                18 Hedge Fund Team
              </p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                marginTop: '1rem'
              }}>
                <div style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: '#4ade80',
                  animation: 'pulse 2s infinite'
                }} />
                <span style={{ color: '#4ade80', fontSize: 'clamp(0.9rem, 1.1vw, 1.05rem)', fontWeight: 600 }}>LIVE</span>
              </div>
            </div>
          </motion.div>
          
          {/* Module 1: Voice Trading */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <div style={{ 
              padding: 'clamp(1.2rem, 1.8vw, 2rem)',
              background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.12), rgba(251, 191, 36, 0.08))',
              border: `${pxToRem(1.5)} solid rgba(249, 115, 22, 0.25)`,
              borderRadius: pxToRem(12),
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <Icon type="zap" size={32} variant="inline" gradient="from-orange-400 to-amber-400" />
              <h4 style={{ fontSize: 'clamp(1.2rem, 1.5vw, 1.5rem)', color: '#fb923c', margin: '1rem 0 0.8rem', fontWeight: 700 }}>
                Voice Trading
              </h4>
              <div style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.1rem)', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.7' }}>
                • 11ms latency<br/>
                • 3 languages<br/>
                • Zerodha API
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '1rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80' }} />
                <span style={{ color: '#4ade80', fontSize: 'clamp(0.85rem, 1vw, 1rem)' }}>LIVE</span>
              </div>
            </div>
          </motion.div>
          
          {/* Module 2: CGMF Mutual Funds */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <div style={{ 
              padding: 'clamp(1.2rem, 1.8vw, 2rem)',
              background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.12), rgba(20, 184, 166, 0.08))',
              border: `${pxToRem(1.5)} solid rgba(34, 197, 94, 0.25)`,
              borderRadius: pxToRem(12),
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <Icon type="trending" size={32} variant="inline" gradient="from-green-400 to-emerald-400" />
              <h4 style={{ fontSize: 'clamp(1.2rem, 1.5vw, 1.5rem)', color: '#4ade80', margin: '1rem 0 0.8rem', fontWeight: 700 }}>
                CGMF Advisory
              </h4>
              <div style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.1rem)', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.7' }}>
                • 16,766 funds<br/>
                • 43 AMCs<br/>
                • AI picks
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '1rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80' }} />
                <span style={{ color: '#4ade80', fontSize: 'clamp(0.85rem, 1vw, 1rem)' }}>LIVE</span>
              </div>
            </div>
          </motion.div>
          
          {/* Module 3: GIFT City Gateway */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <div style={{ 
              padding: 'clamp(1.2rem, 1.8vw, 2rem)',
              background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.12), rgba(219, 39, 119, 0.08))',
              border: `${pxToRem(1.5)} solid rgba(236, 72, 153, 0.25)`,
              borderRadius: pxToRem(12),
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <Icon type="globe" size={32} variant="inline" gradient="from-pink-400 to-rose-400" />
              <h4 style={{ fontSize: 'clamp(1.2rem, 1.5vw, 1.5rem)', color: '#ec4899', margin: '1rem 0 0.8rem', fontWeight: 700 }}>
                GIFT City
              </h4>
              <div style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.1rem)', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.7' }}>
                • $5T TAM<br/>
                • Tax-free<br/>
                • Moat
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '1rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fbbf24' }} />
                <span style={{ color: '#fbbf24', fontSize: 'clamp(0.85rem, 1vw, 1rem)' }}>Q1'25</span>
              </div>
            </div>
          </motion.div>
          
          {/* Module 4: Algo Trading */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <div style={{ 
              padding: 'clamp(1.2rem, 1.8vw, 2rem)',
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.12), rgba(96, 165, 250, 0.08))',
              border: `${pxToRem(1.5)} solid rgba(59, 130, 246, 0.25)`,
              borderRadius: pxToRem(12),
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <Icon type="barChart" size={32} variant="inline" gradient="from-blue-400 to-cyan-400" />
              <h4 style={{ fontSize: 'clamp(1.2rem, 1.5vw, 1.5rem)', color: '#60a5fa', margin: '1rem 0 0.8rem', fontWeight: 700 }}>
                Algo Lab
              </h4>
              <div style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.1rem)', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.7' }}>
                • 122 signals<br/>
                • Backtest<br/>
                • Risk mgmt
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '1rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80' }} />
                <span style={{ color: '#4ade80', fontSize: 'clamp(0.85rem, 1vw, 1rem)' }}>LIVE</span>
              </div>
            </div>
          </motion.div>
          
          {/* Module 5: Sentiment Intelligence */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <div style={{ 
              padding: 'clamp(1.2rem, 1.8vw, 2rem)',
              background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.12), rgba(139, 92, 246, 0.08))',
              border: `${pxToRem(1.5)} solid rgba(168, 85, 247, 0.25)`,
              borderRadius: pxToRem(12),
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <Icon type="search" size={32} variant="inline" gradient="from-purple-400 to-pink-400" />
              <h4 style={{ fontSize: 'clamp(1.2rem, 1.5vw, 1.5rem)', color: '#a78bfa', margin: '1rem 0 0.8rem', fontWeight: 700 }}>
                Sentiment Intel
              </h4>
              <div style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.1rem)', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.7' }}>
                • Real-time<br/>
                • 5 sources<br/>
                • Predictive
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '1rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80' }} />
                <span style={{ color: '#4ade80', fontSize: 'clamp(0.85rem, 1vw, 1rem)' }}>LIVE</span>
              </div>
            </div>
          </motion.div>
          
          {/* Module 6: AI DD & Research */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <div style={{ 
              padding: 'clamp(1.2rem, 1.8vw, 2rem)',
              background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.12), rgba(34, 197, 94, 0.08))',
              border: `${pxToRem(1.5)} solid rgba(20, 184, 166, 0.25)`,
              borderRadius: pxToRem(12),
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <Icon type="fileText" size={32} variant="inline" gradient="from-teal-400 to-green-400" />
              <h4 style={{ fontSize: 'clamp(1.2rem, 1.5vw, 1.5rem)', color: '#5eead4', margin: '1rem 0 0.8rem', fontWeight: 700 }}>
                AI Research
              </h4>
              <div style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.1rem)', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.7' }}>
                • Deep DD<br/>
                • Auto reports<br/>
                • Insights
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '1rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80' }} />
                <span style={{ color: '#4ade80', fontSize: 'clamp(0.85rem, 1vw, 1rem)' }}>LIVE</span>
              </div>
            </div>
          </motion.div>
          
          {/* Module 7: Tax Optimization */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <div style={{ 
              padding: 'clamp(1.2rem, 1.8vw, 2rem)',
              background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.12), rgba(249, 115, 22, 0.08))',
              border: `${pxToRem(1.5)} solid rgba(251, 191, 36, 0.25)`,
              borderRadius: pxToRem(12),
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <Icon type="wallet" size={32} variant="inline" gradient="from-yellow-400 to-orange-400" />
              <h4 style={{ fontSize: 'clamp(1.2rem, 1.5vw, 1.5rem)', color: '#fbbf24', margin: '1rem 0 0.8rem', fontWeight: 700 }}>
                Tax Alpha
              </h4>
              <div style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.1rem)', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.7' }}>
                • 3.2% alpha<br/>
                • Daily harvest<br/>
                • Auto-switch
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '1rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fbbf24' }} />
                <span style={{ color: '#fbbf24', fontSize: 'clamp(0.85rem, 1vw, 1rem)' }}>Q2'25</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(1rem, 1.5vh, 1.5rem)'
          }}
        >
          {/* Metrics Bar */}
          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            gap: 'clamp(2rem, 3vw, 3rem)',
            padding: 'clamp(1rem, 1.5vh, 1.5rem) clamp(1.5rem, 2vw, 2rem)',
            background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.15))',
            borderRadius: pxToRem(12),
            border: `${pxToRem(1)} solid rgba(59, 130, 246, 0.3)`
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(1.4rem, 1.8vw, 1.8rem)', fontWeight: 'bold', color: '#60a5fa' }}>$10M</div>
              <div style={{ fontSize: 'clamp(0.9rem, 1.1vw, 1.1rem)', color: 'rgba(255, 255, 255, 0.7)' }}>AUM</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(1.4rem, 1.8vw, 1.8rem)', fontWeight: 'bold', color: '#4ade80' }}>5+</div>
              <div style={{ fontSize: 'clamp(0.9rem, 1.1vw, 1.1rem)', color: 'rgba(255, 255, 255, 0.7)' }}>Clients</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(1.4rem, 1.8vw, 1.8rem)', fontWeight: 'bold', color: '#fbbf24' }}>25%</div>
              <div style={{ fontSize: 'clamp(0.9rem, 1.1vw, 1.1rem)', color: 'rgba(255, 255, 255, 0.7)' }}>Outperformance</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(1.4rem, 1.8vw, 1.8rem)', fontWeight: 'bold', color: '#4ade80' }}>100%</div>
              <div style={{ fontSize: 'clamp(0.9rem, 1.1vw, 1.1rem)', color: 'rgba(255, 255, 255, 0.7)' }}>Live</div>
            </div>
          </div>

          {/* Bottom Row: Moats and Tech Stack */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 'clamp(1rem, 1.5vw, 1.5rem)' }}>
            {/* Moat Badges */}
            <div style={{ display: 'flex', gap: 'clamp(0.8rem, 1vw, 1rem)' }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                style={{
                  padding: 'clamp(0.5rem, 0.7vw, 0.7rem) clamp(1rem, 1.3vw, 1.3rem)',
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.1))',
                  border: `${pxToRem(1)} solid rgba(59, 130, 246, 0.3)`,
                  borderRadius: pxToRem(8),
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'clamp(0.5rem, 0.6vw, 0.6rem)'
                }}
              >
                <Icon type="lock" size={20} variant="inline" gradient="from-blue-400 to-cyan-400" />
                <span style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.05rem)', color: '#60a5fa', fontWeight: 600 }}>Tech Moat</span>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                style={{
                  padding: 'clamp(0.5rem, 0.7vw, 0.7rem) clamp(1rem, 1.3vw, 1.3rem)',
                  background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(34, 197, 94, 0.1))',
                  border: `${pxToRem(1)} solid rgba(34, 197, 94, 0.3)`,
                  borderRadius: pxToRem(8),
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'clamp(0.5rem, 0.6vw, 0.6rem)'
                }}
              >
                <Icon type="scale" size={20} variant="inline" gradient="from-green-400 to-emerald-400" />
                <span style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.05rem)', color: '#4ade80', fontWeight: 600 }}>Regulatory</span>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                style={{
                  padding: 'clamp(0.5rem, 0.7vw, 0.7rem) clamp(1rem, 1.3vw, 1.3rem)',
                  background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.2), rgba(20, 184, 166, 0.1))',
                  border: `${pxToRem(1)} solid rgba(20, 184, 166, 0.3)`,
                  borderRadius: pxToRem(8),
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'clamp(0.5rem, 0.6vw, 0.6rem)'
                }}
              >
                <Icon type="shield" size={20} variant="inline" gradient="from-teal-400 to-green-400" />
                <span style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1.05rem)', color: '#5eead4', fontWeight: 600 }}>Trust</span>
              </motion.div>
            </div>
            
            {/* Tech Stack */}
            <div style={{ 
              fontSize: 'clamp(0.85rem, 1.05vw, 1.05rem)',
              color: 'rgba(255, 255, 255, 0.6)',
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(0.5rem, 0.7vw, 0.7rem)'
            }}>
              <span>Powered by:</span>
              <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                NextJS • Python • AWS • MongoDB • Claude AI • OpenAI
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}