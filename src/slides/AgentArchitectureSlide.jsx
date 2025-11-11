import { motion } from 'framer-motion'
import { GridLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import Icon from '../components/Icon'
import { Brain, BarChart, PieChart, Sparkles, Shield, Zap, Network, Code } from 'lucide-react'
import { pxToRem, SPACING, TYPOGRAPHY } from '../utils/responsive'
import './SlideStyles.css'

export default function AgentArchitectureSlide() {
  const cards = [
    // Left Column: Platform Stack
    <div key="platform-stack" style={{ 
      gridColumn: 'span 1',
      display: 'flex',
      flexDirection: 'column',
      gap: pxToRem(12),
      overflow: 'hidden'
    }}>
      {/* Broker-Agnostic Header */}
      <motion.div
        className="glass-card"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          padding: pxToRem(12),
          background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.15), rgba(249, 115, 22, 0.1))',
          border: `${pxToRem(2)} solid rgba(251, 191, 36, 0.3)`,
          borderRadius: pxToRem(16),
          boxShadow: '0 8px 32px rgba(251, 191, 36, 0.15)',
          minHeight: 'auto'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: pxToRem(8), marginBottom: pxToRem(8), flexWrap: 'wrap' }}>
          <Icon type="unlock" size={24} variant="inline" gradient="from-yellow-400 to-orange-400" />
          <h3 style={{ 
            fontSize: pxToRem(15), 
            color: '#fbbf24',
            margin: 0,
            fontWeight: 700,
            letterSpacing: '0.3px',
            whiteSpace: 'nowrap'
          }}>
            NOT A BROKERAGE
          </h3>
        </div>
        <div style={{ 
          fontSize: pxToRem(11),
          color: 'rgba(255, 255, 255, 0.8)',
          lineHeight: '1.5'
        }}>
          <p style={{ margin: `${pxToRem(2)} 0` }}>• Pure AI intelligence layer</p>
          <p style={{ margin: `${pxToRem(2)} 0` }}>• Broker-agnostic architecture</p>
        </div>
      </motion.div>

      {/* AI Platform Core */}
      <motion.div
        className="glass-card"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{
          padding: pxToRem(16),
          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.2), rgba(13, 148, 136, 0.15))',
          border: `${pxToRem(2)} solid rgba(20, 184, 166, 0.4)`,
          borderRadius: pxToRem(16),
          boxShadow: '0 0 40px rgba(20, 184, 166, 0.25)',
          textAlign: 'center',
          position: 'relative',
          minHeight: 'auto'
        }}
      >
        <motion.div
          animate={{ 
            boxShadow: [
              '0 0 20px rgba(20, 184, 166, 0.3)',
              '0 0 40px rgba(20, 184, 166, 0.5)',
              '0 0 20px rgba(20, 184, 166, 0.3)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: pxToRem(16),
            pointerEvents: 'none',
            opacity: 1
          }}
        />
        <Network size={36} color="#14b8a6" style={{ margin: '0 auto', marginBottom: pxToRem(8) }} />
        <h3 style={{ 
          fontSize: pxToRem(14),
          color: '#14b8a6',
          fontWeight: 700,
          marginBottom: pxToRem(4)
        }}>
          AI PLATFORM CORE
        </h3>
        <p style={{ 
          fontSize: pxToRem(11),
          color: 'rgba(255, 255, 255, 0.7)'
        }}>
          Multi-Agent Orchestration
        </p>
      </motion.div>

      {/* Broker Integrations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        style={{
          display: 'grid',
          gap: SPACING.sm
        }}
      >
        <h4 style={{ 
          fontSize: TYPOGRAPHY.caption, 
          color: '#94a3b8',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          marginBottom: SPACING.xs
        }}>
          Broker APIs
        </h4>
        {['Zerodha', 'Interactive Brokers', 'Alpaca', 'Schwab'].map((broker, index) => (
          <motion.div
            key={broker}
            className="glass-card"
            whileHover={{ scale: 1.03, x: 5 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
            style={{
              padding: `${SPACING.sm} ${SPACING.md}`,
              background: 'rgba(71, 85, 105, 0.15)',
              borderLeft: `${pxToRem(3)} solid #64748b`,
              borderRadius: pxToRem(8),
              fontSize: TYPOGRAPHY.caption,
              color: '#cbd5e1'
            }}
          >
            {broker}
          </motion.div>
        ))}
      </motion.div>
    </div>,
    
    // Right Column: Agent Grid (2x2)
    <div key="agent-grid" style={{ 
      gridColumn: 'span 2',
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridTemplateRows: 'repeat(2, auto)',
      gap: pxToRem(10),
      alignContent: 'start'
    }}>
      {/* Strategist Agents */}
      <motion.div
        className="glass-card"
        whileHover={{ scale: 1.03, y: -3 }}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{
          padding: pxToRem(10),
          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(13, 148, 136, 0.1))',
          border: `${pxToRem(2)} solid rgba(20, 184, 166, 0.3)`,
          borderRadius: pxToRem(16),
          boxShadow: '0 8px 24px rgba(20, 184, 166, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          gap: pxToRem(4),
          minHeight: 'fit-content'
        }}
      >
        <div>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: pxToRem(6),
            marginBottom: pxToRem(4)
          }}>
            <Icon type="users" size={24} variant="badge" gradient="from-teal-400 to-cyan-400" />
            <h3 style={{ 
              fontSize: pxToRem(12),
              color: '#14b8a6',
              margin: 0,
              fontWeight: 700
            }}>
              Strategist Agents
            </h3>
          </div>
          <p style={{ 
            fontSize: pxToRem(9),
            color: 'rgba(255, 255, 255, 0.75)',
            lineHeight: '1.3',
            margin: 0
          }}>
            Legendary investor philosophies
          </p>
        </div>
        <div style={{ 
          fontSize: pxToRem(8),
          color: '#5eead4',
          fontWeight: 600,
          marginTop: 'auto'
        }}>
          Buffett • Graham • Lynch
        </div>
      </motion.div>

      {/* Analyst Agents */}
      <motion.div
        className="glass-card"
        whileHover={{ scale: 1.03, y: -3 }}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{
          padding: pxToRem(10),
          background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.15), rgba(126, 34, 206, 0.1))',
          border: `${pxToRem(2)} solid rgba(147, 51, 234, 0.3)`,
          borderRadius: pxToRem(16),
          boxShadow: '0 8px 24px rgba(147, 51, 234, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          gap: pxToRem(4),
          minHeight: 'fit-content'
        }}
      >
        <div>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: pxToRem(6),
            marginBottom: pxToRem(4)
          }}>
            <Icon type="bar-chart" size={24} variant="badge" gradient="from-purple-400 to-violet-400" />
            <h3 style={{ 
              fontSize: pxToRem(12),
              color: '#a78bfa',
              margin: 0,
              fontWeight: 700
            }}>
              Analyst Agents
            </h3>
          </div>
          <p style={{ 
            fontSize: pxToRem(9),
            color: 'rgba(255, 255, 255, 0.75)',
            lineHeight: '1.3',
            margin: 0
          }}>
            Real-time market intelligence
          </p>
        </div>
        <div style={{ 
          fontSize: pxToRem(8),
          color: '#c4b5fd',
          fontWeight: 600,
          marginTop: 'auto'
        }}>
          News • Sentiment • Technical
        </div>
      </motion.div>

      {/* Portfolio Agents */}
      <motion.div
        className="glass-card"
        whileHover={{ scale: 1.03, y: -3 }}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{
          padding: pxToRem(10),
          background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.15), rgba(245, 158, 11, 0.1))',
          border: `${pxToRem(2)} solid rgba(251, 191, 36, 0.3)`,
          borderRadius: pxToRem(16),
          boxShadow: '0 8px 24px rgba(251, 191, 36, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          gap: pxToRem(4),
          minHeight: 'fit-content'
        }}
      >
        <div>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: pxToRem(6),
            marginBottom: pxToRem(4)
          }}>
            <Icon type="pie-chart" size={24} variant="badge" gradient="from-amber-400 to-yellow-400" />
            <h3 style={{ 
              fontSize: pxToRem(12),
              color: '#fbbf24',
              margin: 0,
              fontWeight: 700
            }}>
              Portfolio Agents
            </h3>
          </div>
          <p style={{ 
            fontSize: pxToRem(9),
            color: 'rgba(255, 255, 255, 0.75)',
            lineHeight: '1.3',
            margin: 0
          }}>
            Continuous optimization engine
          </p>
        </div>
        <div style={{ 
          fontSize: pxToRem(8),
          color: '#fde047',
          fontWeight: 600,
          marginTop: 'auto'
        }}>
          Risk • Rebalancing • Execution
        </div>
      </motion.div>

      {/* Specialized Agents */}
      <motion.div
        className="glass-card"
        whileHover={{ scale: 1.03, y: -3 }}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        style={{
          padding: pxToRem(10),
          background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(219, 39, 119, 0.1))',
          border: `${pxToRem(2)} solid rgba(236, 72, 153, 0.3)`,
          borderRadius: pxToRem(16),
          boxShadow: '0 8px 24px rgba(236, 72, 153, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          gap: pxToRem(4),
          minHeight: 'fit-content'
        }}
      >
        <div>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: pxToRem(6),
            marginBottom: pxToRem(4)
          }}>
            <Icon type="sparkles" size={24} variant="badge" gradient="from-pink-400 to-rose-400" />
            <h3 style={{ 
              fontSize: pxToRem(12),
              color: '#ec4899',
              margin: 0,
              fontWeight: 700
            }}>
              Specialized Agents
            </h3>
          </div>
          <p style={{ 
            fontSize: pxToRem(9),
            color: 'rgba(255, 255, 255, 0.75)',
            lineHeight: '1.3',
            margin: 0
          }}>
            Domain-specific intelligence
          </p>
        </div>
        <div style={{ 
          fontSize: pxToRem(8),
          color: '#f9a8d4',
          fontWeight: 600,
          marginTop: 'auto'
        }}>
          Tax • Alternatives • India
        </div>
      </motion.div>
    </div>
  ]

  // Tech Stack as glassmorphic chip row
  const summary = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="glass-card"
      style={{
        padding: SPACING.lg,
        background: 'linear-gradient(135deg, rgba(100, 116, 139, 0.2), rgba(71, 85, 105, 0.15))',
        border: `${pxToRem(1)} solid rgba(148, 163, 184, 0.2)`,
        borderRadius: pxToRem(12),
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: SPACING.md
      }}
    >
      <span style={{ 
        fontSize: TYPOGRAPHY.caption,
        color: '#94a3b8',
        fontWeight: 600,
        letterSpacing: '0.5px'
      }}>
        TECH STACK:
      </span>
      {[
        { label: 'LangGraph', icon: Network, color: '#14b8a6' },
        { label: 'GPT-4', icon: Zap, color: '#a78bfa' },
        { label: 'Claude', icon: Brain, color: '#fbbf24' },
        { label: 'Gemini', icon: Sparkles, color: '#ec4899' }
      ].map((tech, index) => (
        <motion.div
          key={tech.label}
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: SPACING.xs,
            padding: `${SPACING.xs} ${SPACING.md}`,
            background: 'rgba(255, 255, 255, 0.05)',
            border: `${pxToRem(1)} solid rgba(255, 255, 255, 0.1)`,
            borderRadius: pxToRem(20),
            fontSize: TYPOGRAPHY.caption,
            color: tech.color,
            fontWeight: 600
          }}
        >
          <tech.icon size={16} color={tech.color} />
          {tech.label}
        </motion.div>
      ))}
    </motion.div>
  )

  return (
    <div style={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column'
    }}>
      <style>{`
        .agent-architecture-slide .grid-cards {
          align-content: center !important;
          max-height: 60vh;
        }
        .agent-architecture-slide .grid-layout {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
        }
      `}</style>
      <div className="agent-architecture-slide" style={{ height: '100%' }}>
        <GridLayout
          title={
            <GradientText gradient="from-teal-400 to-cyan-400">
              Our "Brain": A Swarm of 20+ Specialized Agents
            </GradientText>
          }
          subtitle="Multi-Agent Investment Intelligence System"
          cards={cards}
          columns={3}
          summary={summary}
        />
      </div>
    </div>
  )
}
