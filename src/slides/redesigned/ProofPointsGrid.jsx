import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  StandardSlideLayout,
  MetricsBar,
  StanfordBadge,
  OperationalBadge
} from '../../components/design-system'
import { 
  Award, Building2, Cpu, Users, CheckCircle, 
  TrendingUp, Shield, Globe, BookOpen, Briefcase
} from 'lucide-react'
import styles from '../../utils/styleConstants'

/**
 * ProofPointsGrid - Three-column evidence grid
 * Merges: Traction + Partnerships + Validation
 * Shows: Academic proof, Business partnerships, Technical validation
 */
const ProofPointsGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const metrics = [
    { icon: 'Users', value: '1,250+', label: 'Active Users', color: 'emerald' },
    { icon: 'Briefcase', value: '₹850Cr', label: 'AUM', color: 'green' },
    { icon: 'Building2', value: '50+', label: 'Partners', color: 'teal' },
    { icon: 'Shield', value: '100%', label: 'Operational', color: 'cyan' }
  ]

  const proofPoints = {
    academic: {
      title: 'ACADEMIC VALIDATION',
      icon: BookOpen,
      color: 'purple',
      items: [
        {
          title: 'Stanford Research Study',
          detail: '600% AI outperformance',
          subtext: '2024 peer-reviewed study',
          badge: 'stanford',
          highlight: true
        },
        {
          title: 'MIT Collaboration',
          detail: 'Algorithm validation',
          subtext: 'Sloan School of Management',
          badge: null,
          highlight: false
        },
        {
          title: 'IIM Ahmedabad',
          detail: 'Case study published',
          subtext: 'Innovation in FinTech',
          badge: null,
          highlight: false
        },
        {
          title: 'SEBI Sandbox',
          detail: 'Regulatory approval',
          subtext: 'Approved for live trading',
          badge: null,
          highlight: true
        }
      ]
    },
    business: {
      title: 'BUSINESS PARTNERS',
      icon: Building2,
      color: 'blue',
      items: [
        {
          title: 'Vora Ventures',
          detail: 'Strategic investor',
          subtext: 'GIFT City exclusive access',
          badge: null,
          highlight: true
        },
        {
          title: 'Ascendum Capital',
          detail: '1,000+ CPAs network',
          subtext: 'B2B2C distribution',
          badge: null,
          highlight: true
        },
        {
          title: 'Zerodha',
          detail: 'Trading integration',
          subtext: 'Direct API access',
          badge: null,
          highlight: false
        },
        {
          title: 'GIFT City',
          detail: 'Regulatory partner',
          subtext: 'Zero tax jurisdiction',
          badge: null,
          highlight: false
        }
      ]
    },
    technical: {
      title: 'TECHNICAL PROOF',
      icon: Cpu,
      color: 'emerald',
      items: [
        {
          title: 'Live Platform',
          detail: '99.99% uptime',
          subtext: '1M+ decisions daily',
          badge: 'operational',
          highlight: true
        },
        {
          title: 'Performance Metrics',
          detail: '<100ms response',
          subtext: '11ms execution speed',
          badge: null,
          highlight: false
        },
        {
          title: 'AI Architecture',
          detail: '68+ agents live',
          subtext: 'Production ready',
          badge: null,
          highlight: true
        },
        {
          title: 'Security Audit',
          detail: 'SOC 2 compliant',
          subtext: 'Zero breaches',
          badge: null,
          highlight: false
        }
      ]
    }
  }

  return (
    <StandardSlideLayout
      title="Proof Points"
      subtitle="Academic validation, strategic partnerships, and technical excellence"
      badges={['stanford', 'operational']}
      metrics={metrics}
      showFooter={true}
    >
      <div className="h-full flex flex-col">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center gap-2 mb-6"
        >
          <motion.button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                : 'bg-gray-900/50 text-gray-400 hover:bg-gray-900/70'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All Evidence
          </motion.button>
          {Object.keys(proofPoints).map((category) => {
            const Icon = proofPoints[category].icon
            return (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                  selectedCategory === category
                    ? `bg-${proofPoints[category].color}-500 text-white`
                    : 'bg-gray-900/50 text-gray-400 hover:bg-gray-900/70'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={16} />
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            )
          })}
        </motion.div>

        {/* Three Column Grid */}
        <div className="flex-1 grid grid-cols-3 gap-6">
          {Object.entries(proofPoints).map(([key, category], categoryIndex) => {
            const Icon = category.icon
            const isVisible = selectedCategory === 'all' || selectedCategory === key
            const colorMap = {
              purple: 'from-purple-500/10 to-pink-500/10',
              blue: 'from-blue-500/10 to-cyan-500/10',
              emerald: 'from-emerald-500/10 to-green-500/10'
            }
            const borderMap = {
              purple: 'border-purple-500/30',
              blue: 'border-blue-500/30',
              emerald: 'border-emerald-500/30'
            }
            const iconColorMap = {
              purple: 'text-purple-400',
              blue: 'text-blue-400',
              emerald: 'text-emerald-400'
            }

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: isVisible ? 1 : 0.3,
                  y: 0,
                  scale: isVisible ? 1 : 0.95
                }}
                transition={{ delay: categoryIndex * 0.2 }}
                className={`bg-gradient-to-br ${colorMap[category.color]} rounded-2xl border ${borderMap[category.color]} p-5 flex flex-col`}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-br ${colorMap[category.color].replace('/10', '')} rounded-lg flex items-center justify-center`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className={`text-sm font-bold ${iconColorMap[category.color]} tracking-wide`}>
                    {category.title}
                  </h3>
                </div>

                {/* Items */}
                <div className="flex-1 space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + categoryIndex * 0.2 + itemIndex * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className={`p-3 rounded-xl transition-all ${
                        item.highlight 
                          ? 'bg-black/40 border border-white/10' 
                          : 'bg-black/20'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-1">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm font-semibold text-white">
                              {item.title}
                            </h4>
                            {item.highlight && (
                              <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                <CheckCircle className={iconColorMap[category.color]} size={14} />
                              </motion.div>
                            )}
                          </div>
                          <div className={`text-lg font-bold ${iconColorMap[category.color]} mt-1`}>
                            {item.detail}
                          </div>
                          <div className="text-xs text-gray-400 mt-1">
                            {item.subtext}
                          </div>
                        </div>
                        
                        {/* Badge if exists */}
                        {item.badge === 'stanford' && (
                          <StanfordBadge variant="mini" />
                        )}
                        {item.badge === 'operational' && (
                          <OperationalBadge variant="mini" />
                        )}
                      </div>

                      {/* Progress indicator for highlighted items */}
                      {item.highlight && (
                        <motion.div
                          className="mt-2 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{
                            x: ['-100%', '100%']
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'linear'
                          }}
                        />
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Category Stats */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + categoryIndex * 0.2 }}
                  className="mt-4 pt-4 border-t border-white/10"
                >
                  {key === 'academic' && (
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">Research Papers</span>
                      <span className="font-semibold text-purple-400">12 Published</span>
                    </div>
                  )}
                  {key === 'business' && (
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">Total Network</span>
                      <span className="font-semibold text-blue-400">10,000+ Reach</span>
                    </div>
                  )}
                  {key === 'technical' && (
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">System Status</span>
                      <span className="font-semibold text-emerald-400 flex items-center gap-1">
                        <motion.div
                          className="w-2 h-2 bg-emerald-400 rounded-full"
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        All Systems Go
                      </span>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-6 p-4 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-emerald-500/10 rounded-xl border border-white/10"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Award className="text-yellow-400" size={24} />
              <div>
                <div className="text-sm font-semibold text-white">
                  The only AI wealth platform with all three
                </div>
                <div className="text-xs text-gray-400">
                  Academic validation + Strategic partnerships + Live technology
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">4</div>
                <div className="text-xs text-gray-500">Studies</div>
              </div>
              <div className="text-gray-600">×</div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">50+</div>
                <div className="text-xs text-gray-500">Partners</div>
              </div>
              <div className="text-gray-600">×</div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">100%</div>
                <div className="text-xs text-gray-500">Live</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </StandardSlideLayout>
  )
}

export default ProofPointsGrid
