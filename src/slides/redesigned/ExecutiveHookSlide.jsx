import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  StandardSlideLayout,
  MetricsBar,
  StanfordBadge,
  OperationalBadge
} from '../../components/design-system'
import { TrendingUp, Users, Globe, Zap, ArrowDown, Brain } from 'lucide-react'
import styles from '../../utils/styleConstants'

/**
 * ExecutiveHookSlide - The compelling opening hook
 * Merges Executive Summary + Agenda into single "Why Now" narrative
 * Shows the AI revolution momentum with animated flow
 */
const ExecutiveHookSlide = () => {
  const [currentStat, setCurrentStat] = useState(0)
  const [animateFlow, setAnimateFlow] = useState(false)
  const [counterValue, setCounterValue] = useState(0)

  // Animate through stats
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % 3)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Animate counter to 600
  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCounterValue(prev => {
          if (prev >= 600) {
            clearInterval(interval)
            return 600
          }
          return prev + 20
        })
      }, 50)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  // Trigger flow animation
  useEffect(() => {
    const timer = setTimeout(() => setAnimateFlow(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  const stats = [
    {
      icon: Brain,
      value: `${counterValue}%`,
      label: 'AI Outperformance',
      description: 'Stanford Study 2024',
      color: styles.colors.primary.teal
    },
    {
      icon: Users,
      value: '46%',
      label: 'Switching NOW',
      description: 'Advisors being replaced',
      color: styles.colors.accent.orange
    },
    {
      icon: Globe,
      value: '$124T',
      label: 'In Motion',
      description: 'Wealth transfer opportunity',
      color: styles.colors.primary.emerald
    }
  ]

  const metrics = [
    { icon: 'TrendingUp', value: '600%', label: 'AI Advantage', color: 'teal' },
    { icon: 'Users', value: '1,250+', label: 'Active Users', color: 'cyan' },
    { icon: 'Globe', value: '$5T', label: 'India Opportunity', color: 'emerald' },
    { icon: 'Zap', value: '100%', label: 'Operational', color: 'green' }
  ]

  return (
    <StandardSlideLayout
      title="The AI Revolution is Here"
      subtitle="And traditional wealth management is already obsolete"
      badges={['stanford', 'operational']}
      metrics={metrics}
      showFooter={true}
      variant="default"
    >
      <div className="flex flex-col h-full">
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col items-center justify-center relative">
          
          {/* Animated Background Gradient */}
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(20, 184, 166, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(20, 184, 166, 0.3) 0%, transparent 50%)'
              ]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />

          {/* Three-Stage Flow */}
          <div className="relative w-full max-w-5xl">
            
            {/* Stage 1: AI Supremacy */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-8 border border-teal-500/30 relative overflow-hidden">
                {/* Animated Counter */}
                <motion.div
                  className="absolute top-4 right-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: 'spring' }}
                >
                  <StanfordBadge variant="mini" />
                </motion.div>

                <div className="flex items-center gap-8">
                  <motion.div
                    className="w-32 h-32 relative"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl opacity-20" />
                    <div className="absolute inset-2 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <Brain size={48} className="text-white" />
                    </div>
                  </motion.div>

                  <div className="flex-1">
                    <motion.div
                      className="text-6xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {counterValue}%
                    </motion.div>
                    <div className="text-2xl text-white mt-2">AI beats 93% of fund managers</div>
                    <div className="text-gray-400 mt-1">Stanford Research, 2024</div>
                  </div>
                </div>

                {/* Animated particles */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-teal-400 rounded-full"
                    animate={{
                      x: [0, Math.random() * 200 - 100],
                      y: [0, Math.random() * 100 - 50],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 3,
                      delay: i * 0.5,
                      repeat: Infinity
                    }}
                    style={{
                      left: `${20 + i * 15}%`,
                      top: '50%'
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Flow Arrow */}
            <motion.div
              className="flex justify-center my-4"
              initial={{ opacity: 0, scale: 0 }}
              animate={animateFlow ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowDown size={32} className="text-teal-400" />
              </motion.div>
            </motion.div>

            {/* Stage 2: Market Exodus */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={animateFlow ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="mb-8"
            >
              <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/30 relative overflow-hidden">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-5xl font-bold text-orange-400 mb-2">46%</div>
                    <div className="text-xl text-white">Actively switching advisors</div>
                    <div className="text-gray-400 mt-2">The exodus has begun</div>
                    
                    {/* Mini flow visualization */}
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-red-500/30 rounded" />
                        <span className="text-sm text-gray-400">→ Robo-advisors (15%)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-orange-500/30 rounded" />
                        <span className="text-sm text-gray-400">→ DIY investing (20%)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-yellow-500/30 rounded" />
                        <span className="text-sm text-gray-400">→ AI platforms (11%)</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    {/* Animated exodus visualization */}
                    <svg className="w-full h-40" viewBox="0 0 200 150">
                      <defs>
                        <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#f97316" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#ef4444" stopOpacity="0.3" />
                        </linearGradient>
                      </defs>
                      
                      {/* Animated flow lines */}
                      {[...Array(5)].map((_, i) => (
                        <motion.path
                          key={i}
                          d={`M 20 ${30 + i * 20} Q 100 ${40 + i * 15} 180 ${20 + i * 25}`}
                          stroke="url(#flowGradient)"
                          strokeWidth="2"
                          fill="none"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{
                            duration: 2,
                            delay: 1 + i * 0.2,
                            repeat: Infinity,
                            repeatDelay: 1
                          }}
                        />
                      ))}
                      
                      {/* Moving dots */}
                      {[...Array(8)].map((_, i) => (
                        <motion.circle
                          key={`dot-${i}`}
                          r="3"
                          fill="#f97316"
                          initial={{ cx: 20, cy: 30 + i * 15 }}
                          animate={{ 
                            cx: [20, 100, 180],
                            cy: [30 + i * 15, 50 + i * 10, 20 + i * 20]
                          }}
                          transition={{
                            duration: 3,
                            delay: 1.5 + i * 0.3,
                            repeat: Infinity,
                            ease: 'easeInOut'
                          }}
                        />
                      ))}
                    </svg>
                    
                    <div className="absolute bottom-0 right-0 text-sm text-orange-400 font-semibold">
                      Market in Motion
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Final Arrow */}
            <motion.div
              className="flex justify-center my-4"
              initial={{ opacity: 0, scale: 0 }}
              animate={animateFlow ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.5 }}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowDown size={32} className="text-emerald-400" />
              </motion.div>
            </motion.div>

            {/* Stage 3: The Solution */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={animateFlow ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 2 }}
            >
              <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/30 relative overflow-hidden">
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 2.5, type: 'spring' }}
                    className="inline-flex items-center gap-3 mb-4"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center">
                      <Zap size={32} className="text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white">
                      Meet ARIA
                    </div>
                  </motion.div>
                  
                  <div className="text-xl text-emerald-400 mb-2">
                    The AI Family Office CEO
                  </div>
                  <div className="text-gray-400">
                    Not a tool. Not an assistant. She's the replacement.
                  </div>
                  
                  <motion.div
                    className="mt-6 inline-block"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3 }}
                  >
                    <OperationalBadge variant="large" />
                  </motion.div>
                </div>

                {/* Success particles */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                >
                  {[...Array(10)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-emerald-400 rounded-full"
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        delay: 3 + i * 0.1,
                        repeat: Infinity,
                        repeatDelay: 2
                      }}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </StandardSlideLayout>
  )
}

export default ExecutiveHookSlide
