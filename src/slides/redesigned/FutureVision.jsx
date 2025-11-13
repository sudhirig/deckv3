import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  StandardSlideLayout,
  TabInterface,
  MetricsBar
} from '../../components/design-system'
import { 
  Rocket, Sparkles, Globe, Building2, Coins, 
  CreditCard, Home, Shield, TrendingUp, Calendar
} from 'lucide-react'
import styles from '../../utils/styleConstants'

/**
 * FutureVision - Product roadmap and upcoming features
 * Tab 1: Concept - 12-month roadmap vision
 * Tab 2: Features - Upcoming capabilities preview
 * Tab 3: Beta Access - Early access program
 */
const FutureVision = () => {
  const [selectedQuarter, setSelectedQuarter] = useState('Q1')

  const metrics = [
    { icon: 'Rocket', value: '15+', label: 'New Features', color: 'purple' },
    { icon: 'Globe', value: '7', label: 'New Markets', color: 'blue' },
    { icon: 'Building2', value: '3', label: 'Asset Classes', color: 'teal' },
    { icon: 'Calendar', value: '2025', label: 'Launch Year', color: 'emerald' }
  ]

  // Tab 1: Concept - Roadmap
  const ConceptTab = () => {
    const roadmap = {
      Q1: {
        title: 'Q1 2025: Alternative Assets',
        features: [
          { name: 'Private Equity Access', icon: Building2, status: 'development' },
          { name: 'Real Estate Integration', icon: Home, status: 'development' },
          { name: 'Startup Investments', icon: Rocket, status: 'planning' }
        ],
        highlight: 'Democratizing alternatives'
      },
      Q2: {
        title: 'Q2 2025: Global Expansion',
        features: [
          { name: 'US Market Access', icon: Globe, status: 'planning' },
          { name: 'Multi-currency Support', icon: Coins, status: 'planning' },
          { name: 'International Tax Engine', icon: Shield, status: 'research' }
        ],
        highlight: 'Going global'
      },
      Q3: {
        title: 'Q3 2025: Credit & Lending',
        features: [
          { name: 'Portfolio-backed Loans', icon: CreditCard, status: 'research' },
          { name: 'P2P Lending Platform', icon: Users, status: 'research' },
          { name: 'Credit Optimization AI', icon: Brain, status: 'research' }
        ],
        highlight: 'Complete financial services'
      },
      Q4: {
        title: 'Q4 2025: Next-Gen AI',
        features: [
          { name: 'Voice Interface', icon: Mic, status: 'research' },
          { name: 'Predictive Life Planning', icon: Sparkles, status: 'research' },
          { name: 'Family Office OS', icon: Users, status: 'research' }
        ],
        highlight: 'The future of wealth'
      }
    }

    return (
      <div className="space-y-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
              <Rocket size={32} className="text-white" />
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white">The Road Ahead</h3>
              <p className="text-gray-400">Transforming wealth management, one innovation at a time</p>
            </div>
          </div>
        </motion.div>

        {/* Roadmap Timeline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/30 p-6"
        >
          {/* Quarter Selector */}
          <div className="flex gap-2 mb-6">
            {Object.keys(roadmap).map((quarter) => (
              <motion.button
                key={quarter}
                onClick={() => setSelectedQuarter(quarter)}
                className={`flex-1 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  selectedQuarter === quarter
                    ? 'bg-purple-500 text-white'
                    : 'bg-black/30 text-gray-400 hover:bg-black/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {quarter} 2025
              </motion.button>
            ))}
          </div>

          {/* Selected Quarter Details */}
          <motion.div
            key={selectedQuarter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h4 className="text-lg font-semibold text-purple-400 mb-4">
              {roadmap[selectedQuarter].title}
            </h4>

            <div className="space-y-3 mb-6">
              {roadmap[selectedQuarter].features.map((feature, i) => {
                const Icon = feature.icon || Sparkles
                const statusColors = {
                  development: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
                  planning: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
                  research: 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                }

                return (
                  <motion.div
                    key={feature.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-center justify-between p-3 bg-black/30 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <Icon size={20} className="text-purple-400" />
                      </div>
                      <span className="text-sm font-semibold text-white">{feature.name}</span>
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full border ${statusColors[feature.status]}`}>
                      {feature.status.toUpperCase()}
                    </span>
                  </motion.div>
                )
              })}
            </div>

            <div className="p-4 bg-purple-500/20 rounded-xl border border-purple-500/30 text-center">
              <Sparkles className="mx-auto mb-2 text-purple-400" size={24} />
              <div className="text-lg font-semibold text-purple-400">
                {roadmap[selectedQuarter].highlight}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Innovation Pipeline */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: 'Features in Dev', value: '8', icon: '🔨' },
            { label: 'Beta Testers', value: '500+', icon: '🧪' },
            { label: 'Launch Ready', value: '3', icon: '🚀' }
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="bg-gray-900/50 rounded-xl p-4 text-center"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-purple-400">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  // Tab 2: Features Preview
  const FeaturesTab = () => {
    const upcomingFeatures = [
      {
        category: 'Alternative Investments',
        description: 'Access to previously exclusive asset classes',
        features: [
          'Private equity funds with $100K minimum',
          'Fractional real estate ownership',
          'Pre-IPO startup investments',
          'Art & collectibles portfolio'
        ],
        readiness: 75,
        color: 'purple'
      },
      {
        category: 'Global Markets',
        description: 'Seamless international investing',
        features: [
          'US stock market direct access',
          'European bonds & ETFs',
          'Emerging market opportunities',
          'Crypto integration'
        ],
        readiness: 60,
        color: 'blue'
      },
      {
        category: 'Advanced AI Features',
        description: 'Next-generation intelligence',
        features: [
          'Predictive market timing',
          'Natural language commands',
          'Automated estate planning',
          'Family member sub-accounts'
        ],
        readiness: 40,
        color: 'teal'
      },
      {
        category: 'Financial Services',
        description: 'Complete wealth ecosystem',
        features: [
          'Portfolio-backed credit lines',
          'Insurance optimization',
          'Business account integration',
          'Tax filing automation'
        ],
        readiness: 30,
        color: 'emerald'
      }
    ]

    return (
      <div className="grid grid-cols-2 gap-4">
        {upcomingFeatures.map((category, index) => {
          const colorMap = {
            purple: 'from-purple-500/10 to-pink-500/10',
            blue: 'from-blue-500/10 to-cyan-500/10',
            teal: 'from-teal-500/10 to-emerald-500/10',
            emerald: 'from-emerald-500/10 to-green-500/10'
          }
          const borderMap = {
            purple: 'border-purple-500/30',
            blue: 'border-blue-500/30',
            teal: 'border-teal-500/30',
            emerald: 'border-emerald-500/30'
          }
          const textMap = {
            purple: 'text-purple-400',
            blue: 'text-blue-400',
            teal: 'text-teal-400',
            emerald: 'text-emerald-400'
          }

          return (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15 }}
              className={`bg-gradient-to-br ${colorMap[category.color]} rounded-xl border ${borderMap[category.color]} p-4`}
            >
              <h4 className={`text-md font-semibold ${textMap[category.color]} mb-1`}>
                {category.category}
              </h4>
              <p className="text-xs text-gray-500 mb-3">{category.description}</p>
              
              <div className="space-y-2 mb-3">
                {category.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.15 + i * 0.05 }}
                    className="flex items-start gap-2"
                  >
                    <Sparkles size={10} className={textMap[category.color]} style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span className="text-xs text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Readiness Indicator */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-500">Development Progress</span>
                  <span className={`text-xs font-semibold ${textMap[category.color]}`}>
                    {category.readiness}%
                  </span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${colorMap[category.color].replace('/10', '')}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${category.readiness}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.15 }}
                  />
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    )
  }

  // Tab 3: Beta Access
  const BetaTab = () => (
    <div className="space-y-6">
      {/* Beta Program Overview */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/30 p-6"
      >
        <div className="text-center mb-6">
          <Sparkles className="mx-auto mb-3 text-purple-400" size={32} />
          <h4 className="text-xl font-bold text-purple-400 mb-2">Early Access Program</h4>
          <p className="text-sm text-gray-400">Be the first to experience the future of wealth management</p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-black/30 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-purple-400">500</div>
            <div className="text-sm text-gray-400">Beta Seats</div>
          </div>
          <div className="bg-black/30 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-emerald-400">127</div>
            <div className="text-sm text-gray-400">Available</div>
          </div>
          <div className="bg-black/30 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-yellow-400">Feb</div>
            <div className="text-sm text-gray-400">Launch</div>
          </div>
        </div>

        {/* Benefits */}
        <div className="space-y-3">
          <h5 className="text-sm font-semibold text-gray-300">Beta Benefits</h5>
          {[
            { benefit: 'Early access to new features', icon: Rocket },
            { benefit: 'Direct feedback channel to product team', icon: MessageSquare },
            { benefit: '50% lifetime discount on fees', icon: TrendingUp },
            { benefit: 'Exclusive beta community access', icon: Users }
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-3 p-3 bg-black/20 rounded-lg"
              >
                <Icon className="text-purple-400" size={20} />
                <span className="text-sm text-white">{item.benefit}</span>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Current Beta Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gray-900/50 rounded-xl border border-gray-800 p-4"
      >
        <h5 className="text-sm font-semibold text-gray-300 mb-3">Currently in Beta</h5>
        <div className="space-y-2">
          {[
            { feature: 'Voice Commands', users: 89, satisfaction: 94 },
            { feature: 'Real Estate Module', users: 156, satisfaction: 91 },
            { feature: 'Family Accounts', users: 234, satisfaction: 96 }
          ].map((item, i) => (
            <motion.div
              key={item.feature}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="flex items-center justify-between p-2 bg-black/30 rounded-lg"
            >
              <span className="text-sm font-semibold text-white">{item.feature}</span>
              <div className="flex items-center gap-4">
                <span className="text-xs text-gray-400">{item.users} testers</span>
                <span className="text-xs text-emerald-400">{item.satisfaction}% satisfaction</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )

  const tabs = [
    {
      id: 'roadmap',
      label: 'Roadmap',
      icon: Calendar,
      content: <ConceptTab />
    },
    {
      id: 'features',
      label: 'Features',
      icon: Sparkles,
      content: <FeaturesTab />
    },
    {
      id: 'beta',
      label: 'Beta Access',
      icon: Rocket,
      content: <BetaTab />
    }
  ]

  return (
    <StandardSlideLayout
      title="Future Vision & Roadmap"
      subtitle="Building the complete AI-powered wealth ecosystem"
      badges={[]}
      metrics={metrics}
      showFooter={true}
    >
      <TabInterface
        tabs={tabs}
        defaultTab="roadmap"
        variant="pills"
        position="top"
      />
    </StandardSlideLayout>
  )
}

export default FutureVision
