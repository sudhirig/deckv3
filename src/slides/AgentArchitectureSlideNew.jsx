import React from 'react'
import { motion } from 'framer-motion'
import Icon from '../components/Icon'
import GradientText from '../components/GradientText'

const AgentArchitectureSlideNew = () => {
  return (
    <div style={{
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: '2.5rem',
      background: 'radial-gradient(ellipse at center, rgba(20, 184, 166, 0.05), transparent)',
      position: 'relative'
    }}>
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          textAlign: 'center',
          marginBottom: '1rem'
        }}
      >
        <h1 style={{ 
          fontSize: '2.5rem',
          fontWeight: 900,
          marginBottom: '0.5rem'
        }}>
          <GradientText gradient="from-teal-400 to-cyan-400">
            Our "Brain": A Swarm of 20+ Specialized Agents
          </GradientText>
        </h1>
        <p style={{ 
          fontSize: '1.1rem',
          color: 'rgba(255, 255, 255, 0.8)',
          letterSpacing: '0.5px'
        }}>
          Multi-Agent Investment Intelligence System
        </p>
      </motion.div>

      {/* Main Content Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: '1.5rem',
        flex: 1,
        marginBottom: '1rem',
        alignItems: 'start'
      }}>
        {/* Left Column - NOT A BROKERAGE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card"
          style={{
            padding: '1.5rem',
            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(251, 191, 36, 0.1))',
            border: '2px solid rgba(245, 158, 11, 0.3)',
            borderRadius: '16px',
            boxShadow: '0 8px 32px rgba(245, 158, 11, 0.15)',
            height: 'fit-content'
          }}
        >
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1rem'
          }}>
            <Icon type="lock" size={32} variant="badge" gradient="from-amber-400 to-yellow-400" />
            <h3 style={{
              fontSize: '1.1rem',
              color: '#fbbf24',
              fontWeight: 700,
              letterSpacing: '1px',
              margin: 0
            }}>
              NOT A BROKERAGE
            </h3>
          </div>

          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            marginBottom: '1.5rem'
          }}>
            <li style={{ 
              fontSize: '0.9rem',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '0.5rem'
            }}>
              • Pure AI intelligence layer
            </li>
            <li style={{ 
              fontSize: '0.9rem',
              color: 'rgba(255, 255, 255, 0.9)'
            }}>
              • Broker-agnostic architecture
            </li>
          </ul>

          <h4 style={{
            fontSize: '0.85rem',
            color: '#94a3b8',
            marginBottom: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.5px'
          }}>
            Broker APIs
          </h4>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {['Zerodha', 'Interactive Brokers', 'Alpaca', 'Schwab'].map((broker, index) => (
              <motion.div
                key={broker}
                whileHover={{ scale: 1.02, x: 3 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                style={{
                  padding: '0.5rem 0.75rem',
                  background: 'rgba(71, 85, 105, 0.15)',
                  borderLeft: '3px solid #64748b',
                  borderRadius: '8px',
                  fontSize: '0.85rem',
                  color: '#cbd5e1'
                }}
              >
                {broker}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column - 2x2 Agent Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridTemplateRows: 'repeat(2, 1fr)',
          gap: '1rem',
          height: '100%'
        }}>
          {/* Strategist Agents */}
          <motion.div
            className="glass-card"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              padding: '1rem',
              background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(13, 148, 136, 0.1))',
              border: '2px solid rgba(20, 184, 166, 0.3)',
              borderRadius: '16px',
              boxShadow: '0 8px 24px rgba(20, 184, 166, 0.15)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              marginBottom: '0.5rem'
            }}>
              <Icon type="users" size={28} variant="badge" gradient="from-teal-400 to-cyan-400" />
              <h3 style={{ 
                fontSize: '0.95rem',
                color: '#14b8a6',
                margin: 0,
                fontWeight: 700
              }}>
                Strategist Agents
              </h3>
            </div>
            <p style={{ 
              fontSize: '0.75rem',
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '1.4',
              marginBottom: '0.5rem',
              flex: 1
            }}>
              Legendary investor philosophies
            </p>
            <div style={{ 
              fontSize: '0.7rem',
              color: '#5eead4',
              fontWeight: 600
            }}>
              Buffett • Graham • Lynch
            </div>
          </motion.div>

          {/* Analyst Agents */}
          <motion.div
            className="glass-card"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              padding: '1rem',
              background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.15), rgba(126, 34, 206, 0.1))',
              border: '2px solid rgba(147, 51, 234, 0.3)',
              borderRadius: '16px',
              boxShadow: '0 8px 24px rgba(147, 51, 234, 0.15)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              marginBottom: '0.5rem'
            }}>
              <Icon type="bar-chart" size={28} variant="badge" gradient="from-purple-400 to-violet-400" />
              <h3 style={{ 
                fontSize: '0.95rem',
                color: '#a78bfa',
                margin: 0,
                fontWeight: 700
              }}>
                Analyst Agents
              </h3>
            </div>
            <p style={{ 
              fontSize: '0.75rem',
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '1.4',
              marginBottom: '0.5rem',
              flex: 1
            }}>
              Real-time market intelligence
            </p>
            <div style={{ 
              fontSize: '0.7rem',
              color: '#c4b5fd',
              fontWeight: 600
            }}>
              News • Sentiment • Technical
            </div>
          </motion.div>

          {/* Portfolio Agents */}
          <motion.div
            className="glass-card"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              padding: '1rem',
              background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.15), rgba(245, 158, 11, 0.1))',
              border: '2px solid rgba(251, 191, 36, 0.3)',
              borderRadius: '16px',
              boxShadow: '0 8px 24px rgba(251, 191, 36, 0.15)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              marginBottom: '0.5rem'
            }}>
              <Icon type="pie-chart" size={28} variant="badge" gradient="from-amber-400 to-yellow-400" />
              <h3 style={{ 
                fontSize: '0.95rem',
                color: '#fbbf24',
                margin: 0,
                fontWeight: 700
              }}>
                Portfolio Agents
              </h3>
            </div>
            <p style={{ 
              fontSize: '0.75rem',
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '1.4',
              marginBottom: '0.5rem',
              flex: 1
            }}>
              Continuous optimization engine
            </p>
            <div style={{ 
              fontSize: '0.7rem',
              color: '#fde047',
              fontWeight: 600
            }}>
              Risk • Rebalancing • Execution
            </div>
          </motion.div>

          {/* Specialized Agents */}
          <motion.div
            className="glass-card"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{
              padding: '1rem',
              background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(219, 39, 119, 0.1))',
              border: '2px solid rgba(236, 72, 153, 0.3)',
              borderRadius: '16px',
              boxShadow: '0 8px 24px rgba(236, 72, 153, 0.15)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              marginBottom: '0.5rem'
            }}>
              <Icon type="sparkles" size={28} variant="badge" gradient="from-pink-400 to-rose-400" />
              <h3 style={{ 
                fontSize: '0.95rem',
                color: '#ec4899',
                margin: 0,
                fontWeight: 700
              }}>
                Specialized Agents
              </h3>
            </div>
            <p style={{ 
              fontSize: '0.75rem',
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '1.4',
              marginBottom: '0.5rem',
              flex: 1
            }}>
              Domain-specific intelligence
            </p>
            <div style={{ 
              fontSize: '0.7rem',
              color: '#f9a8d4',
              fontWeight: 600
            }}>
              Tax • Alternatives • India
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Tech Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="glass-card"
        style={{
          padding: '1rem 1.5rem',
          background: 'linear-gradient(135deg, rgba(100, 116, 139, 0.2), rgba(71, 85, 105, 0.15))',
          border: '1px solid rgba(148, 163, 184, 0.2)',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.5rem'
        }}
      >
        <span style={{ 
          fontSize: '0.85rem',
          color: '#94a3b8',
          fontWeight: 600,
          letterSpacing: '0.5px'
        }}>
          TECH STACK:
        </span>
        
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          {[
            { label: 'LangGraph', icon: 'zap', color: '#14b8a6' },
            { label: 'GPT-4', icon: 'zap', color: '#a78bfa' },
            { label: 'Claude', icon: 'bot', color: '#fbbf24' },
            { label: 'Gemini', icon: 'sparkles', color: '#ec4899' }
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
                gap: '0.5rem',
                padding: '0.4rem 0.8rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px'
              }}
            >
              <Icon type={tech.icon} size={16} variant="inline" gradient={`from-${tech.color.slice(1)} to-${tech.color.slice(1)}`} />
              <span style={{
                fontSize: '0.8rem',
                color: tech.color,
                fontWeight: 600
              }}>
                {tech.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default AgentArchitectureSlideNew