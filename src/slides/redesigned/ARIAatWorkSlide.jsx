import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  StandardSlideLayout,
  MetricsBar
} from '../../components/design-system'
import { 
  User, Brain, Users, Vote, FileText, Play, CheckCircle,
  Calculator, Globe, Shield, Database, Sparkles, ArrowRight
} from 'lucide-react'
import styles from '../../utils/styleConstants'

/**
 * ARIAatWorkSlide - Shows ARIA in action with $25M liquidity event
 * Merges ARIAInActionSlide + AgenticWorkflowSlide + AgentArchitecture
 * 6-step horizontal workflow with real example and results
 */
const ARIAatWorkSlide = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [workflowComplete, setWorkflowComplete] = useState(false)
  const [agentsActive, setAgentsActive] = useState([])

  // Animate through workflow steps
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= 5) {
          setWorkflowComplete(true)
          clearInterval(timer)
          return 5
        }
        return prev + 1
      })
    }, 1500)
    return () => clearInterval(timer)
  }, [])

  // Activate agents in step 3
  useEffect(() => {
    if (currentStep === 2) {
      const agents = ['tax', 'data', 'india', 'risk']
      agents.forEach((agent, index) => {
        setTimeout(() => {
          setAgentsActive(prev => [...prev, agent])
        }, index * 200)
      })
    }
  }, [currentStep])

  const metrics = [
    { icon: 'DollarSign', value: '$25M', label: 'Liquidity Event', color: 'emerald' },
    { icon: 'Calculator', value: '$5M', label: 'Tax Saved', color: 'green' },
    { icon: 'Globe', value: '10%', label: 'India Allocation', color: 'teal' },
    { icon: 'Shield', value: '100%', label: 'Risk Managed', color: 'cyan' }
  ]

  const workflowSteps = [
    {
      id: 1,
      title: 'USER QUERY',
      icon: User,
      color: '#3b82f6',
      content: 'I just had a $25M liquidity event from my startup sale',
      detail: 'What\'s a holistic plan that minimizes my tax bill and gets me India exposure?'
    },
    {
      id: 2,
      title: 'ORCHESTRATION',
      icon: Brain,
      color: '#14b8a6',
      content: 'ARIA activates specialist teams',
      detail: 'Analyzes context and deploys relevant agents'
    },
    {
      id: 3,
      title: 'PARALLEL ANALYSIS',
      icon: Users,
      color: '#8b5cf6',
      content: '4 teams work simultaneously',
      detail: 'Each agent analyzes their domain'
    },
    {
      id: 4,
      title: 'CONSENSUS',
      icon: Vote,
      color: '#10b981',
      content: 'Agents validate and vote',
      detail: 'Cross-check assumptions, build unified plan'
    },
    {
      id: 5,
      title: 'PRESENTATION',
      icon: FileText,
      color: '#f59e0b',
      content: 'Comprehensive plan delivered',
      detail: 'Clear recommendations with reasoning'
    },
    {
      id: 6,
      title: 'EXECUTION',
      icon: Play,
      color: '#ef4444',
      content: 'One-click implementation',
      detail: 'Automated trades and monitoring'
    }
  ]

  const agents = [
    {
      id: 'tax',
      name: 'Tax Agent',
      icon: Calculator,
      color: '#f59e0b',
      analysis: 'Calculates $8M tax liability',
      recommendation: 'Harvest $10M losses, defer $5M'
    },
    {
      id: 'data',
      name: 'Data Engine',
      icon: Database,
      color: '#3b82f6',
      analysis: 'Reads sale docs & K-1s',
      recommendation: 'Maps full asset picture'
    },
    {
      id: 'india',
      name: 'India Agent',
      icon: Globe,
      color: '#10b981',
      analysis: 'Identifies GIFT opportunity',
      recommendation: '$2.5M to Gateway Fund (0% tax)'
    },
    {
      id: 'risk',
      name: 'Risk Agent',
      icon: Shield,
      color: '#ef4444',
      analysis: 'Detects tech over-exposure',
      recommendation: 'Diversify with Private Credit'
    }
  ]

  return (
    <StandardSlideLayout
      title="ARIA at Work: $25M Liquidity Event"
      subtitle="Watch how she orchestrates 68+ specialists to create optimal wealth strategies"
      badges={['operational']}
      metrics={metrics}
      showFooter={true}
    >
      <div className="h-full flex flex-col">
        
        {/* Workflow Visualization */}
        <div className="flex-1 flex flex-col justify-center">
          
          {/* Progress Bar */}
          <div className="mb-6">
            <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-teal-500 to-emerald-500"
                initial={{ width: 0 }}
                animate={{ width: `${((currentStep + 1) / 6) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Workflow Steps */}
          <div className="relative">
            <div className="flex items-center justify-between mb-8">
              {workflowSteps.map((step, index) => {
                const Icon = step.icon
                const isActive = index <= currentStep
                const isCurrent = index === currentStep

                return (
                  <React.Fragment key={step.id}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: isActive ? 1 : 0.3, 
                        scale: isActive ? 1 : 0.8 
                      }}
                      transition={{ delay: index * 0.2 }}
                      className="relative flex flex-col items-center"
                      style={{ width: '120px' }}
                    >
                      {/* Step Circle */}
                      <motion.div
                        className="relative mb-3"
                        animate={isCurrent ? { scale: [1, 1.1, 1] } : {}}
                        transition={{ duration: 1, repeat: isCurrent ? Infinity : 0 }}
                      >
                        <div
                          className="w-14 h-14 rounded-full flex items-center justify-center"
                          style={{
                            background: isActive ? `linear-gradient(135deg, ${step.color}40, ${step.color}20)` : '#1e293b',
                            border: `2px solid ${isActive ? step.color : '#374151'}`
                          }}
                        >
                          <Icon size={24} style={{ color: isActive ? step.color : '#4b5563' }} />
                        </div>
                        
                        {/* Step Number */}
                        <div
                          className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                          style={{
                            background: isActive ? step.color : '#374151',
                            color: isActive ? 'white' : '#9ca3af'
                          }}
                        >
                          {step.id}
                        </div>

                        {/* Pulse effect for current step */}
                        {isCurrent && (
                          <motion.div
                            className="absolute inset-0 rounded-full"
                            style={{ border: `2px solid ${step.color}` }}
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0.5, 0, 0.5]
                            }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                        )}
                      </motion.div>

                      {/* Step Title */}
                      <div className="text-xs font-semibold text-center" style={{ color: isActive ? '#e2e8f0' : '#4b5563' }}>
                        {step.title}
                      </div>
                    </motion.div>

                    {/* Connector Line */}
                    {index < workflowSteps.length - 1 && (
                      <motion.div
                        className="flex-1 h-0.5 relative"
                        style={{
                          background: isActive && index < currentStep ? 
                            `linear-gradient(90deg, ${step.color}, ${workflowSteps[index + 1].color})` : 
                            '#374151',
                          marginBottom: '42px'
                        }}
                      >
                        {/* Animated dot */}
                        {isActive && index < currentStep && (
                          <motion.div
                            className="absolute w-2 h-2 rounded-full top-1/2 -translate-y-1/2"
                            style={{ background: step.color }}
                            animate={{ left: ['0%', '100%'] }}
                            transition={{ duration: 1, delay: index * 0.3, repeat: Infinity }}
                          />
                        )}
                      </motion.div>
                    )}
                  </React.Fragment>
                )
              })}
            </div>

            {/* Step Details */}
            <AnimatePresence mode="wait">
              {currentStep >= 0 && (
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6"
                >
                  {/* Regular steps */}
                  {currentStep !== 2 ? (
                    <div className="text-center">
                      <div
                        className="text-2xl font-bold mb-2"
                        style={{ color: workflowSteps[currentStep].color }}
                      >
                        {workflowSteps[currentStep].content}
                      </div>
                      <div className="text-gray-400">
                        {workflowSteps[currentStep].detail}
                      </div>
                      
                      {/* Show result for final step */}
                      {currentStep === 5 && workflowComplete && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 }}
                          className="mt-6 p-4 bg-emerald-500/20 border border-emerald-500/30 rounded-xl"
                        >
                          <CheckCircle className="mx-auto mb-2 text-emerald-400" size={32} />
                          <div className="text-xl font-bold text-emerald-400 mb-1">
                            RESULT: Optimal Allocation Achieved
                          </div>
                          <div className="grid grid-cols-3 gap-4 mt-4">
                            <div>
                              <div className="text-2xl font-bold text-white">$5M</div>
                              <div className="text-sm text-gray-400">Tax Saved</div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-white">$2.5M</div>
                              <div className="text-sm text-gray-400">India Gateway</div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-white">24/7</div>
                              <div className="text-sm text-gray-400">Monitoring</div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  ) : (
                    /* Special layout for Step 3: Parallel Analysis */
                    <div>
                      <div className="text-center mb-6">
                        <div className="text-2xl font-bold text-purple-400 mb-2">
                          4 Specialist Teams Working in Parallel
                        </div>
                        <div className="text-gray-400">
                          Each agent analyzes their domain simultaneously
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        {agents.map((agent) => {
                          const Icon = agent.icon
                          const isActive = agentsActive.includes(agent.id)

                          return (
                            <motion.div
                              key={agent.id}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ 
                                opacity: isActive ? 1 : 0.3,
                                scale: isActive ? 1 : 0.8
                              }}
                              className="p-4 rounded-xl border"
                              style={{
                                background: isActive ? `${agent.color}10` : 'transparent',
                                borderColor: isActive ? agent.color : '#374151'
                              }}
                            >
                              <div className="flex items-start gap-3">
                                <div
                                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                                  style={{ background: `${agent.color}20` }}
                                >
                                  <Icon size={20} style={{ color: agent.color }} />
                                </div>
                                <div className="flex-1">
                                  <div className="font-semibold mb-1" style={{ color: agent.color }}>
                                    {agent.name}
                                  </div>
                                  <div className="text-xs text-gray-400 mb-2">
                                    {agent.analysis}
                                  </div>
                                  <div className="text-xs text-gray-300">
                                    → {agent.recommendation}
                                  </div>
                                </div>
                              </div>

                              {/* Processing indicator */}
                              {isActive && (
                                <motion.div
                                  className="mt-3 flex items-center gap-2"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                >
                                  <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                                  >
                                    <Sparkles size={12} style={{ color: agent.color }} />
                                  </motion.div>
                                  <span className="text-xs" style={{ color: agent.color }}>
                                    Processing...
                                  </span>
                                </motion.div>
                              )}
                            </motion.div>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Call to Action */}
          {workflowComplete && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-center"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full">
                <Sparkles className="text-white" size={20} />
                <span className="text-white font-semibold">
                  From query to execution in under 5 minutes
                </span>
                <ArrowRight className="text-white" size={20} />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </StandardSlideLayout>
  )
}

export default ARIAatWorkSlide
