import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  StandardSlideLayout,
  TabInterface,
  MetricsBar
} from '../../components/design-system'
import { 
  Brain, Users, Zap, Network, MessageSquare, 
  Vote, Activity, Shield, Sparkles, Cpu
} from 'lucide-react'
import styles from '../../utils/styleConstants'

/**
 * AgenticAICore - The 68+ agent orchestration system
 * Tab 1: Concept - Multi-agent architecture
 * Tab 2: Features - Consensus algorithms, parallel processing  
 * Tab 3: Live Demo - Real-time decision making
 */
const AgenticAICore = () => {
  const [activeAgents, setActiveAgents] = useState([])
  const [consensusProgress, setConsensusProgress] = useState(0)
  const [networkPulse, setNetworkPulse] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setNetworkPulse(prev => !prev)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setConsensusProgress(prev => {
        if (prev >= 100) return 0
        return prev + 5
      })
    }, 100)
    return () => clearInterval(timer)
  }, [])

  const metrics = [
    { icon: 'Brain', value: '68+', label: 'AI Specialists', color: 'purple' },
    { icon: 'Zap', value: '<100ms', label: 'Response Time', color: 'yellow' },
    { icon: 'Users', value: '10K+', label: 'Decisions/Hour', color: 'blue' },
    { icon: 'Shield', value: '99.97%', label: 'Accuracy', color: 'green' }
  ]

  // Tab 1: Concept
  const ConceptTab = () => (
    <div className="space-y-6">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
            <Brain size={32} className="text-white" />
          </div>
          <div className="text-left">
            <h3 className="text-2xl font-bold text-white">Agentic AI Orchestration System</h3>
            <p className="text-gray-400">68+ specialized agents working as one unified intelligence</p>
          </div>
        </div>
      </motion.div>

      {/* Agent Network Visualization */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/30 p-6"
      >
        <h4 className="text-lg font-semibold text-purple-400 mb-4">Multi-Agent Architecture</h4>
        
        {/* Network Diagram */}
        <div className="relative h-64 flex items-center justify-center">
          {/* Central Orchestrator */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center z-10"
          >
            <div className="text-white font-bold text-center">
              <div className="text-lg">ARIA</div>
              <div className="text-xs">CORE</div>
            </div>
          </motion.div>

          {/* Agent Categories in Circles */}
          {[
            { name: 'Analysis', count: 12, angle: 0, color: '#8b5cf6' },
            { name: 'Execution', count: 8, angle: 72, color: '#3b82f6' },
            { name: 'Research', count: 15, angle: 144, color: '#10b981' },
            { name: 'Risk', count: 10, angle: 216, color: '#ef4444' },
            { name: 'Compliance', count: 23, angle: 288, color: '#f59e0b' }
          ].map((category) => {
            const x = Math.cos(category.angle * Math.PI / 180) * 120
            const y = Math.sin(category.angle * Math.PI / 180) * 120

            return (
              <React.Fragment key={category.name}>
                {/* Connection Line */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  style={{ pointerEvents: 'none' }}
                >
                  <motion.line
                    x1="50%"
                    y1="50%"
                    x2={`calc(50% + ${x}px)`}
                    y2={`calc(50% + ${y}px)`}
                    stroke={category.color}
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    opacity="0.5"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      values="10;0"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  </motion.line>
                </svg>

                {/* Agent Group */}
                <motion.div
                  className="absolute w-20 h-20 rounded-xl flex flex-col items-center justify-center"
                  style={{
                    left: `calc(50% + ${x}px - 40px)`,
                    top: `calc(50% + ${y}px - 40px)`,
                    background: `${category.color}20`,
                    border: `2px solid ${category.color}`
                  }}
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + category.angle / 1000 }}
                >
                  <div className="text-2xl font-bold" style={{ color: category.color }}>
                    {category.count}
                  </div>
                  <div className="text-xs text-gray-400">{category.name}</div>
                </motion.div>

                {/* Animated Particles */}
                <motion.div
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    background: category.color,
                    left: '50%',
                    top: '50%'
                  }}
                  animate={{
                    x: [0, x],
                    y: [0, y]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: category.angle / 360
                  }}
                />
              </React.Fragment>
            )
          })}
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">Parallel</div>
            <div className="text-sm text-gray-400">Simultaneous processing</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-pink-400">Consensus</div>
            <div className="text-sm text-gray-400">Democratic decisions</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-indigo-400">Learning</div>
            <div className="text-sm text-gray-400">Self-improvement</div>
          </div>
        </div>
      </motion.div>
    </div>
  )

  // Tab 2: Features
  const FeaturesTab = () => {
    const features = [
      {
        title: 'Parallel Processing',
        icon: Network,
        description: 'Multiple agents work simultaneously',
        details: [
          'Concurrent task execution',
          'Load balancing algorithms',
          'Resource optimization',
          'Conflict resolution'
        ],
        color: 'purple'
      },
      {
        title: 'Consensus Building',
        icon: Vote,
        description: 'Democratic decision making',
        details: [
          'Weighted voting system',
          'Expert agent prioritization',
          'Confidence scoring',
          'Veto mechanisms'
        ],
        color: 'blue'
      },
      {
        title: 'Knowledge Sharing',
        icon: MessageSquare,
        description: 'Collective intelligence',
        details: [
          'Shared memory pool',
          'Experience transfer',
          'Pattern recognition',
          'Learning propagation'
        ],
        color: 'teal'
      },
      {
        title: 'Self-Improvement',
        icon: Sparkles,
        description: 'Continuous learning',
        details: [
          'Performance monitoring',
          'Feedback loops',
          'Model updates',
          'Strategy evolution'
        ],
        color: 'emerald'
      }
    ]

    return (
      <div className="grid grid-cols-2 gap-4">
        {features.map((feature, index) => {
          const Icon = feature.icon
          const colorMap = {
            purple: 'from-purple-500 to-pink-500',
            blue: 'from-blue-500 to-cyan-500',
            teal: 'from-teal-500 to-emerald-500',
            emerald: 'from-emerald-500 to-green-500'
          }

          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-4"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className={`w-10 h-10 bg-gradient-to-br ${colorMap[feature.color]} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <Icon size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">{feature.title}</h4>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              </div>

              <div className="space-y-2">
                {feature.details.map((detail, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.15 + i * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
                    <span className="text-xs text-gray-300">{detail}</span>
                  </motion.div>
                ))}
              </div>

              {/* Animated activity indicator */}
              <motion.div
                className="mt-3 h-1 bg-gray-800 rounded-full overflow-hidden"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  className={`h-full bg-gradient-to-r ${colorMap[feature.color]}`}
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    )
  }

  // Tab 3: Live Demo
  const LiveDemoTab = () => {
    const [decision, setDecision] = useState(null)
    const [votingResults, setVotingResults] = useState([])

    useEffect(() => {
      // Simulate voting process
      const timer = setTimeout(() => {
        setVotingResults([
          { agent: 'Risk Assessor', vote: 'Approve', confidence: 92 },
          { agent: 'Tax Optimizer', vote: 'Approve', confidence: 88 },
          { agent: 'Market Analyst', vote: 'Approve', confidence: 95 },
          { agent: 'Compliance', vote: 'Approve', confidence: 100 }
        ])
        
        setTimeout(() => {
          setDecision('APPROVED')
        }, 1000)
      }, 2000)

      return () => clearTimeout(timer)
    }, [])

    return (
      <div className="space-y-6">
        {/* Real-time Decision Making */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/30 p-6"
        >
          <h4 className="text-xl font-bold text-purple-400 mb-4">Live Decision Process</h4>
          
          {/* Sample Query */}
          <div className="bg-black/30 rounded-xl p-4 mb-4">
            <div className="text-sm text-gray-400 mb-2">Query Received:</div>
            <div className="text-white">
              "Should I reallocate 20% from tech stocks to emerging markets given current valuations?"
            </div>
          </div>

          {/* Agent Processing */}
          <div className="space-y-3 mb-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Agents Activated</span>
              <div className="flex items-center gap-2">
                <Activity className="text-purple-400" size={16} />
                <span className="text-purple-400 font-semibold">68 agents</span>
              </div>
            </div>

            {/* Processing Progress */}
            <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="absolute h-full bg-gradient-to-r from-purple-500 to-pink-500"
                style={{ width: `${consensusProgress}%` }}
              />
            </div>
          </div>

          {/* Voting Results */}
          {votingResults.length > 0 && (
            <div className="space-y-2 mb-4">
              <div className="text-sm text-gray-400 mb-2">Consensus Building:</div>
              {votingResults.map((result, i) => (
                <motion.div
                  key={result.agent}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="flex items-center justify-between p-2 bg-black/20 rounded-lg"
                >
                  <div className="flex items-center gap-2">
                    <Cpu className="text-purple-400" size={14} />
                    <span className="text-sm text-white">{result.agent}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-sm font-semibold ${result.vote === 'Approve' ? 'text-emerald-400' : 'text-red-400'}`}>
                      {result.vote}
                    </span>
                    <div className="text-xs text-gray-400">
                      {result.confidence}% confidence
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Final Decision */}
          {decision && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-4 bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-center"
            >
              <div className="text-2xl font-bold text-emerald-400 mb-2">
                Decision: {decision}
              </div>
              <div className="text-sm text-gray-300">
                Recommendation: Proceed with 20% reallocation to emerging markets
              </div>
              <div className="text-xs text-gray-400 mt-2">
                Consensus reached in 1.8 seconds across 68 agents
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-4 gap-4">
          {[
            { label: 'Decisions Today', value: '8,421', change: '+12%' },
            { label: 'Avg Response', value: '94ms', change: '-5ms' },
            { label: 'Accuracy Rate', value: '99.97%', change: '+0.02%' },
            { label: 'Active Agents', value: '68', change: 'Online' }
          ].map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="bg-gray-900/50 rounded-xl p-3 text-center"
            >
              <div className="text-xl font-bold text-white">{metric.value}</div>
              <div className="text-xs text-gray-400">{metric.label}</div>
              <div className="text-xs text-emerald-400 mt-1">{metric.change}</div>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  const tabs = [
    {
      id: 'concept',
      label: 'Concept',
      icon: Brain,
      content: <ConceptTab />
    },
    {
      id: 'features',
      label: 'Features',
      icon: Network,
      content: <FeaturesTab />
    },
    {
      id: 'live',
      label: 'Live Demo',
      icon: Activity,
      content: <LiveDemoTab />
    }
  ]

  return (
    <StandardSlideLayout
      title="Agentic AI Core System"
      subtitle="68+ specialized agents orchestrated as one unified intelligence"
      badges={['operational']}
      metrics={metrics}
      showFooter={true}
    >
      <TabInterface
        tabs={tabs}
        defaultTab="concept"
        variant="pills"
        position="top"
      />
    </StandardSlideLayout>
  )
}

export default AgenticAICore
