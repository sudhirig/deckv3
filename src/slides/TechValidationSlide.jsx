import { motion } from 'framer-motion'
import { AspectFrame } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { Server, Shield, Zap, CheckCircle, Database, Lock } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function TechValidationSlide() {
  return (
    <AspectFrame>
      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem',
        overflow: 'hidden'
      }}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '1.5rem' }}
        >
          <h1 style={{ fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 900, marginBottom: '0.5rem' }}>
            <GradientText gradient="from-blue-400 via-purple-400 to-pink-400">
              Proven Technology Architecture
            </GradientText>
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.3vw, 1.3rem)', color: '#94a3b8' }}>
            Built, Tested, and Ready to Scale
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '2rem'
        }}>
          
          {/* Left: Architecture Overview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(99, 102, 241, 0.05))',
              borderRadius: pxToRem(12),
              padding: '1.5rem',
              border: '2px solid rgba(59, 130, 246, 0.3)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <h3 style={{ color: '#3b82f6', fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              <Server size={28} color="#3b82f6" style={{ display: 'inline', marginRight: '0.5rem' }} />
              System Architecture
            </h3>
            
            {/* Architecture Diagram Simplified */}
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              {/* Input Layer */}
              <div style={{
                background: 'rgba(0,0,0,0.3)',
                borderRadius: pxToRem(8),
                padding: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <Database size={24} color="#14b8a6" />
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '0.9rem', color: '#14b8a6', fontWeight: 'bold' }}>
                    Data Sources
                  </p>
                  <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                    NSE • BSE • Zerodha • IBKR • News APIs
                  </p>
                </div>
              </div>

              {/* Processing Layer */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.2), rgba(34, 197, 94, 0.1))',
                borderRadius: pxToRem(8),
                padding: '1rem',
                border: '1px solid rgba(20, 184, 166, 0.3)',
                textAlign: 'center'
              }}>
                <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#14b8a6', marginBottom: '0.5rem' }}>
                  ARIA CORE
                </p>
                <p style={{ fontSize: '0.9rem', color: '#e2e8f0', marginBottom: '0.5rem' }}>
                  68+ Specialized AI Agents
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.5rem', marginTop: '0.5rem' }}>
                  <div style={{ fontSize: '0.7rem', color: '#5eead4' }}>Tax</div>
                  <div style={{ fontSize: '0.7rem', color: '#5eead4' }}>Market</div>
                  <div style={{ fontSize: '0.7rem', color: '#5eead4' }}>Risk</div>
                  <div style={{ fontSize: '0.7rem', color: '#5eead4' }}>Alt Assets</div>
                  <div style={{ fontSize: '0.7rem', color: '#5eead4' }}>Compliance</div>
                </div>
              </div>

              {/* Output Layer */}
              <div style={{
                background: 'rgba(0,0,0,0.3)',
                borderRadius: pxToRem(8),
                padding: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <Zap size={24} color="#fbbf24" />
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '0.9rem', color: '#fbbf24', fontWeight: 'bold' }}>
                    Execution Layer
                  </p>
                  <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                    Trades • Rebalancing • Tax Harvesting • Reporting
                  </p>
                </div>
              </div>

              {/* Tech Stack */}
              <div style={{
                marginTop: 'auto',
                padding: '0.75rem',
                background: 'rgba(99, 102, 241, 0.1)',
                borderRadius: pxToRem(8),
                border: '1px solid rgba(99, 102, 241, 0.2)'
              }}>
                <p style={{ fontSize: '0.8rem', color: '#a78bfa', textAlign: 'center', fontWeight: 'bold' }}>
                  Tech Stack
                </p>
                <p style={{ fontSize: '0.75rem', color: '#94a3b8', textAlign: 'center', marginTop: '0.25rem' }}>
                  Python • FastAPI • React • PostgreSQL • Redis • AWS • Docker
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Performance & Security */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            
            {/* Performance Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              style={{
                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(16, 185, 129, 0.08))',
                borderRadius: pxToRem(12),
                padding: '1.25rem',
                border: '2px solid rgba(34, 197, 94, 0.3)'
              }}
            >
              <h3 style={{ color: '#22c55e', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                <Zap size={24} color="#22c55e" style={{ display: 'inline', marginRight: '0.5rem' }} />
                Performance
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle size={16} color="#5eead4" />
                  <p style={{ fontSize: '0.85rem', color: '#e2e8f0' }}>
                    <strong style={{ color: '#5eead4' }}>{'<100ms'}</strong> response time
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle size={16} color="#5eead4" />
                  <p style={{ fontSize: '0.85rem', color: '#e2e8f0' }}>
                    <strong style={{ color: '#5eead4' }}>99.99%</strong> uptime SLA
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle size={16} color="#5eead4" />
                  <p style={{ fontSize: '0.85rem', color: '#e2e8f0' }}>
                    <strong style={{ color: '#5eead4' }}>1M+</strong> decisions/day
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle size={16} color="#5eead4" />
                  <p style={{ fontSize: '0.85rem', color: '#e2e8f0' }}>
                    <strong style={{ color: '#5eead4' }}>10,000x</strong> faster than humans
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Security */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              style={{
                background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(220, 38, 38, 0.08))',
                borderRadius: pxToRem(12),
                padding: '1.25rem',
                border: '2px solid rgba(239, 68, 68, 0.3)'
              }}
            >
              <h3 style={{ color: '#ef4444', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                <Shield size={24} color="#ef4444" style={{ display: 'inline', marginRight: '0.5rem' }} />
                Security
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Lock size={16} color="#f87171" />
                  <p style={{ fontSize: '0.85rem', color: '#e2e8f0' }}>
                    Bank-grade encryption
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Lock size={16} color="#f87171" />
                  <p style={{ fontSize: '0.85rem', color: '#e2e8f0' }}>
                    SOC 2 compliant
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Lock size={16} color="#f87171" />
                  <p style={{ fontSize: '0.85rem', color: '#e2e8f0' }}>
                    Zero data breaches
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Lock size={16} color="#f87171" />
                  <p style={{ fontSize: '0.85rem', color: '#e2e8f0' }}>
                    Multi-factor auth
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Integrations */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              style={{
                background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.15), rgba(245, 158, 11, 0.08))',
                borderRadius: pxToRem(12),
                padding: '1rem',
                border: '2px solid rgba(251, 191, 36, 0.3)'
              }}
            >
              <p style={{ fontSize: '1rem', color: '#fbbf24', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                Live Integrations
              </p>
              <p style={{ fontSize: '0.8rem', color: '#e2e8f0' }}>
                ✓ NSE & BSE Direct
              </p>
              <p style={{ fontSize: '0.8rem', color: '#e2e8f0' }}>
                ✓ Zerodha Kite API
              </p>
              <p style={{ fontSize: '0.8rem', color: '#e2e8f0' }}>
                ✓ IBKR Gateway
              </p>
              <p style={{ fontSize: '0.8rem', color: '#e2e8f0' }}>
                ✓ Alpaca Markets
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          style={{
            marginTop: '1rem',
            padding: '1rem',
            background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.1), rgba(34, 197, 94, 0.1))',
            borderRadius: pxToRem(12),
            border: '1px solid rgba(59, 130, 246, 0.3)',
            textAlign: 'center'
          }}
        >
          <p style={{ fontSize: '1.2rem', color: '#3b82f6', fontWeight: '600' }}>
            Not a POC. Not a Demo. This is Production-Ready Technology.
          </p>
        </motion.div>
      </div>
    </AspectFrame>
  )
}
