import { motion } from 'framer-motion'
import { GridLayout } from '../components/StandardLayouts'
import { Brain, Activity, MessageSquare, Target, Shield } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
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

  const agentCards = agents.map((category, catIndex) => (
    <motion.div
      key={category.category}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 + catIndex * 0.15 }}
      style={{
        background: `linear-gradient(135deg, ${category.color}15, transparent)`,
        borderRadius: pxToRem(12),
        padding: pxToRem(16),
        border: `${pxToRem(1)} solid ${category.color}33`
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: pxToRem(8),
        marginBottom: pxToRem(16)
      }}>
        <Brain size={20} style={{ color: category.color }} />
        <h3 style={{ color: category.color, fontSize: pxToRem(16) }}>
          {category.category}
        </h3>
      </div>

      {category.agents.map((agent, i) => (
        <div
          key={agent.name}
          style={{
            padding: pxToRem(12),
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: pxToRem(6),
            marginBottom: pxToRem(8)
          }}
        >
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: pxToRem(4)
          }}>
            <div style={{ fontSize: pxToRem(13.6), color: '#e2e8f0', fontWeight: '600' }}>
              {agent.name}
            </div>
            <div style={{ 
              fontSize: pxToRem(11.2), 
              color: category.color,
              padding: `${pxToRem(2)} ${pxToRem(8)}`,
              background: `${category.color}22`,
              borderRadius: pxToRem(4)
            }}>
              {agent.capability}
            </div>
          </div>
          <div style={{ fontSize: pxToRem(12), color: '#64748b' }}>
            {agent.role}
          </div>
        </div>
      ))}
    </motion.div>
  ))

  const orchestrationCard = (
    <motion.div
      key="orchestration"
      initial={{ opacity: 0, y: pxToRem(20) }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9 }}
      style={{
        background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(6, 182, 212, 0.1))',
        borderRadius: pxToRem(12),
        padding: pxToRem(24),
        gridColumn: 'span 2'
      }}
    >
      <h3 style={{ color: '#14b8a6', marginBottom: pxToRem(16), fontSize: pxToRem(17.6) }}>
        Agent Orchestration Flow
      </h3>
      <div style={{ position: 'relative' }}>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
          style={{
            position: 'absolute',
            top: pxToRem(25),
            left: '10%',
            right: '10%',
            height: pxToRem(2),
            background: 'linear-gradient(90deg, #14b8a6, #06b6d4)',
            transformOrigin: 'left'
          }}
        />
        
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
                width: pxToRem(50),
                height: pxToRem(50),
                borderRadius: '50%',
                background: '#0f172a',
                border: `${pxToRem(3)} solid #14b8a6`,
                margin: `0 auto ${pxToRem(12)}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: pxToRem(16),
                fontWeight: 'bold',
                color: '#14b8a6'
              }}>
                {index + 1}
              </div>
              <div style={{ fontSize: pxToRem(13.6), color: '#e2e8f0', marginBottom: pxToRem(4) }}>
                {flow.step}
              </div>
              <div style={{ fontSize: pxToRem(11.2), color: '#64748b' }}>
                {flow.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )

  const metricsCard = (
    <motion.div
      key="metrics"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: pxToRem(16),
        gridColumn: 'span 2'
      }}
    >
      <div style={{
        textAlign: 'center',
        padding: pxToRem(16),
        background: 'rgba(236, 72, 153, 0.1)',
        borderRadius: pxToRem(8)
      }}>
        <Activity size={20} style={{ color: '#ec4899', margin: `0 auto ${pxToRem(8)}` }} />
        <div style={{ fontSize: pxToRem(20.8), fontWeight: 'bold', color: '#ec4899' }}>24/7</div>
        <div style={{ fontSize: pxToRem(11.2), color: '#94a3b8' }}>Always Active</div>
      </div>
      <div style={{
        textAlign: 'center',
        padding: pxToRem(16),
        background: 'rgba(59, 130, 246, 0.1)',
        borderRadius: pxToRem(8)
      }}>
        <MessageSquare size={20} style={{ color: '#3b82f6', margin: `0 auto ${pxToRem(8)}` }} />
        <div style={{ fontSize: pxToRem(20.8), fontWeight: 'bold', color: '#3b82f6' }}>10K+</div>
        <div style={{ fontSize: pxToRem(11.2), color: '#94a3b8' }}>Decisions/Hour</div>
      </div>
      <div style={{
        textAlign: 'center',
        padding: pxToRem(16),
        background: 'rgba(34, 197, 94, 0.1)',
        borderRadius: pxToRem(8)
      }}>
        <Target size={20} style={{ color: '#22c55e', margin: `0 auto ${pxToRem(8)}` }} />
        <div style={{ fontSize: pxToRem(20.8), fontWeight: 'bold', color: '#22c55e' }}>97%</div>
        <div style={{ fontSize: pxToRem(11.2), color: '#94a3b8' }}>Decision Accuracy</div>
      </div>
      <div style={{
        textAlign: 'center',
        padding: pxToRem(16),
        background: 'rgba(251, 191, 36, 0.1)',
        borderRadius: pxToRem(8)
      }}>
        <Shield size={20} style={{ color: '#fbbf24', margin: `0 auto ${pxToRem(8)}` }} />
        <div style={{ fontSize: pxToRem(20.8), fontWeight: 'bold', color: '#fbbf24' }}>100%</div>
        <div style={{ fontSize: pxToRem(11.2), color: '#94a3b8' }}>Audit Trail</div>
      </div>
    </motion.div>
  )

  const cards = [...agentCards, orchestrationCard, metricsCard]

  return (
    <GridLayout
      title="Technical Architecture: Agent Swarm Intelligence"
      subtitle="20+ specialized AI agents working in concert"
      cards={cards}
      columns={2}
    />
  )
}
