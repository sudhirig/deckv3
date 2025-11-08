import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import GradientText from '../components/GradientText'
import { Brain, GitBranch, Layers, Workflow, MessageSquare, Activity, Target, Shield } from 'lucide-react'
import './SlideStyles.css'

export default function TechArchitecture2Slide() {
  const agents = [
    {
      category: 'Analysis Agents',
      color: '#60a5fa',
      agents: [
        { name: 'Market Analyst', role: 'Real-time market analysis', capability: '10K signals/sec' },
        { name: 'Risk Assessor', role: 'Portfolio risk monitoring', capability: 'VaR, CVaR, Stress tests' },
        { name: 'Pattern Detector', role: 'Alpha opportunity finder', capability: 'ML pattern recognition' }
      ]
    },
    {
      category: 'Execution Agents',
      color: '#4ade80',
      agents: [
        { name: 'Trade Executor', role: 'Smart order routing', capability: 'Multi-venue execution' },
        { name: 'Tax Harvester', role: 'Daily tax optimization', capability: '$1M+ saved/year' },
        { name: 'Rebalancer', role: 'Portfolio optimization', capability: '24/7 monitoring' }
      ]
    },
    {
      category: 'Research Agents',
      color: '#c084fc',
      agents: [
        { name: 'DD Analyst', role: 'Alternative investment DD', capability: '16K funds analyzed' },
        { name: 'News Processor', role: 'Sentiment analysis', capability: '100K articles/day' },
        { name: 'Report Generator', role: 'Client communications', capability: 'Personalized insights' }
      ]
    },
    {
      category: 'Compliance Agents',
      color: '#fbbf24',
      agents: [
        { name: 'Regulatory Monitor', role: 'Compliance checking', capability: '5 jurisdictions' },
        { name: 'Audit Logger', role: 'Transaction recording', capability: 'Immutable ledger' },
        { name: 'KYC/AML', role: 'Client verification', capability: 'Real-time screening' }
      ]
    }
  ]

  const orchestrationFlow = [
    { step: 'Event Trigger', description: 'Market change, time trigger, user action' },
    { step: 'Agent Selection', description: 'AI orchestrator picks relevant agents' },
    { step: 'Parallel Execution', description: 'Multiple agents work simultaneously' },
    { step: 'Consensus Building', description: 'Agents vote on best action' },
    { step: 'Action Execution', description: 'Trade, alert, or recommendation' }
  ]

  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-card"
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <AnimatedText delay={0.2}>
          <h2 className="slide-title" style={{ marginBottom: '0.5rem' }}>
            <GradientText gradient="from-purple-400 to-pink-400">
              Technical Architecture: Agent Swarm Intelligence
            </GradientText>
          </h2>
          <p style={{ fontSize: '1rem', color: '#94a3b8', textAlign: 'center', marginBottom: '2rem' }}>
            20+ specialized AI agents working in concert
          </p>
        </AnimatedText>

        {/* Agent Categories */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
          {agents.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + catIndex * 0.15 }}
              style={{
                background: `linear-gradient(135deg, ${category.color}15, transparent)`,
                borderRadius: '12px',
                padding: '1rem',
                border: `1px solid ${category.color}33`
              }}
            >
              {/* Category Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1rem'
              }}>
                <Brain size={20} style={{ color: category.color }} />
                <h3 style={{ color: category.color, fontSize: '1rem' }}>
                  {category.category}
                </h3>
              </div>

              {/* Agents List */}
              {category.agents.map((agent, i) => (
                <div
                  key={agent.name}
                  style={{
                    padding: '0.75rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '6px',
                    marginBottom: '0.5rem'
                  }}
                >
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '0.25rem'
                  }}>
                    <div style={{ fontSize: '0.85rem', color: '#e2e8f0', fontWeight: '600' }}>
                      {agent.name}
                    </div>
                    <div style={{ 
                      fontSize: '0.7rem', 
                      color: category.color,
                      padding: '0.125rem 0.5rem',
                      background: `${category.color}22`,
                      borderRadius: '4px'
                    }}>
                      {agent.capability}
                    </div>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                    {agent.role}
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Orchestration Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          style={{
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(6, 182, 212, 0.1))',
            borderRadius: '12px',
            padding: '1.5rem',
            marginBottom: '1.5rem'
          }}
        >
          <h3 style={{ color: '#14b8a6', marginBottom: '1rem', fontSize: '1.1rem' }}>
            Agent Orchestration Flow
          </h3>
          <div style={{ position: 'relative' }}>
            {/* Flow Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.1, duration: 1 }}
              style={{
                position: 'absolute',
                top: '25px',
                left: '10%',
                right: '10%',
                height: '2px',
                background: 'linear-gradient(90deg, #14b8a6, #06b6d4)',
                transformOrigin: 'left'
              }}
            />
            
            {/* Flow Steps */}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              {orchestrationFlow.map((flow, index) => (
                <motion.div
                  key={flow.step}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    position: 'relative'
                  }}
                >
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: '#0f172a',
                    border: '3px solid #14b8a6',
                    margin: '0 auto 0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    color: '#14b8a6'
                  }}>
                    {index + 1}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#e2e8f0', marginBottom: '0.25rem' }}>
                    {flow.step}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#64748b' }}>
                    {flow.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem'
          }}
        >
          <div style={{
            textAlign: 'center',
            padding: '1rem',
            background: 'rgba(236, 72, 153, 0.1)',
            borderRadius: '8px'
          }}>
            <Activity size={20} style={{ color: '#ec4899', margin: '0 auto 0.5rem' }} />
            <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#ec4899' }}>24/7</div>
            <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Always Active</div>
          </div>
          <div style={{
            textAlign: 'center',
            padding: '1rem',
            background: 'rgba(59, 130, 246, 0.1)',
            borderRadius: '8px'
          }}>
            <MessageSquare size={20} style={{ color: '#3b82f6', margin: '0 auto 0.5rem' }} />
            <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#3b82f6' }}>10K+</div>
            <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Decisions/Hour</div>
          </div>
          <div style={{
            textAlign: 'center',
            padding: '1rem',
            background: 'rgba(34, 197, 94, 0.1)',
            borderRadius: '8px'
          }}>
            <Target size={20} style={{ color: '#22c55e', margin: '0 auto 0.5rem' }} />
            <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#22c55e' }}>97%</div>
            <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Decision Accuracy</div>
          </div>
          <div style={{
            textAlign: 'center',
            padding: '1rem',
            background: 'rgba(251, 191, 36, 0.1)',
            borderRadius: '8px'
          }}>
            <Shield size={20} style={{ color: '#fbbf24', margin: '0 auto 0.5rem' }} />
            <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#fbbf24' }}>100%</div>
            <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Audit Trail</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}