import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  StandardSlideLayout, 
  TabInterface,
  MetricsBar 
} from '../../components/design-system'
import * as Lucide from 'lucide-react'

/**
 * ProductShowcaseTabs - Template for consolidated product slides
 * Each product (Zerodha, CGMF, etc.) will use this template with 3 tabs
 */
const ProductShowcaseTabs = ({ 
  productName,
  productIcon = 'Zap',
  productColor = 'teal',
  conceptContent,
  featuresContent,
  liveContent,
  metrics = []
}) => {
  const [activeTab, setActiveTab] = useState(0)

  // Default metrics if none provided
  const defaultMetrics = [
    { icon: 'Users', value: '1,250+', label: 'Active Users', color: 'teal' },
    { icon: 'TrendingUp', value: '24/7', label: 'Availability', color: 'cyan' },
    { icon: 'Zap', value: '11ms', label: 'Response Time', color: 'emerald' },
    { icon: 'Shield', value: '100%', label: 'Secure', color: 'green' }
  ]

  const tabs = [
    {
      id: 'concept',
      label: 'Concept',
      icon: <Lucide.Lightbulb size={16} />,
      content: conceptContent
    },
    {
      id: 'features',
      label: 'Features',
      icon: <Lucide.List size={16} />,
      badge: 'NEW',
      content: featuresContent
    },
    {
      id: 'live',
      label: 'Live Demo',
      icon: <Lucide.Monitor size={16} />,
      content: liveContent
    }
  ]

  return (
    <StandardSlideLayout
      title={productName}
      subtitle="AI-Powered Intelligence at Your Service"
      badges={['operational']}
      metrics={metrics.length > 0 ? metrics : defaultMetrics}
      showHeader={true}
      showFooter={true}
    >
      <TabInterface
        tabs={tabs}
        defaultTab={0}
        variant="pills"
        position="top"
        animated={true}
      />
    </StandardSlideLayout>
  )
}

// Zerodha Product Showcase
export const ZerodhaShowcase = () => {
  const conceptContent = (
    <div className="grid grid-cols-2 gap-8">
      <motion.div 
        className="space-y-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Trading Intelligence Redefined
          </h3>
          <p className="text-gray-400 leading-relaxed">
            ARIA's Zerodha integration brings institutional-grade trading intelligence 
            to retail investors. Real-time analysis, pattern recognition, and automated 
            execution - all powered by 68+ AI specialists.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <Lucide.TrendingUp className="text-blue-400" size={20} />
            </div>
            <div>
              <div className="text-white font-semibold">Real-Time Analysis</div>
              <div className="text-sm text-gray-500">Sub-second market scanning</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
              <Lucide.Brain className="text-purple-400" size={20} />
            </div>
            <div>
              <div className="text-white font-semibold">Pattern Recognition</div>
              <div className="text-sm text-gray-500">AI-detected opportunities</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
              <Lucide.Zap className="text-green-400" size={20} />
            </div>
            <div>
              <div className="text-white font-semibold">Auto Execution</div>
              <div className="text-sm text-gray-500">11ms average trade time</div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-6"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <div className="text-center mb-6">
          <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            ₹15.7L
          </div>
          <div className="text-gray-400 mt-2">Average Annual Alpha</div>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between p-3 bg-gray-800/50 rounded-lg">
            <span className="text-gray-400">Win Rate</span>
            <span className="text-white font-semibold">73%</span>
          </div>
          <div className="flex justify-between p-3 bg-gray-800/50 rounded-lg">
            <span className="text-gray-400">Avg Return</span>
            <span className="text-white font-semibold">+24.5%</span>
          </div>
          <div className="flex justify-between p-3 bg-gray-800/50 rounded-lg">
            <span className="text-gray-400">Sharpe Ratio</span>
            <span className="text-white font-semibold">2.4</span>
          </div>
        </div>
      </motion.div>
    </div>
  )

  const featuresContent = (
    <div className="grid grid-cols-3 gap-6">
      {[
        {
          icon: 'LineChart',
          title: 'Technical Analysis',
          items: ['200+ Indicators', 'Pattern Recognition', 'Multi-timeframe', 'Custom Alerts']
        },
        {
          icon: 'BarChart3',
          title: 'Fundamental Analysis',
          items: ['Real-time Financials', 'Peer Comparison', 'Sector Analysis', 'News Sentiment']
        },
        {
          icon: 'Activity',
          title: 'Risk Management',
          items: ['Position Sizing', 'Stop-loss Auto', 'Portfolio Heat Map', 'Drawdown Control']
        },
        {
          icon: 'Cpu',
          title: 'Algo Trading',
          items: ['Pre-built Strategies', 'Backtesting Engine', 'Paper Trading', 'Live Deployment']
        },
        {
          icon: 'Bell',
          title: 'Smart Alerts',
          items: ['Price Movements', 'Volume Spikes', 'News Events', 'Strategy Signals']
        },
        {
          icon: 'Shield',
          title: 'Security',
          items: ['2FA Authentication', 'API Encryption', 'Audit Logs', 'SEBI Compliant']
        }
      ].map((feature, index) => {
        const Icon = Lucide[feature.icon]
        return (
          <motion.div
            key={index}
            className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
              <Icon size={20} className="text-white" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-3">{feature.title}</h4>
            <ul className="space-y-2">
              {feature.items.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                  <Lucide.Check size={14} className="text-teal-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )
      })}
    </div>
  )

  const liveContent = (
    <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-800 p-8">
      <div className="grid grid-cols-2 gap-8">
        {/* Live Dashboard Preview */}
        <div className="bg-black/50 rounded-xl p-4 border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-400">NIFTY 50</span>
            <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded">LIVE</span>
          </div>
          <div className="text-3xl font-bold text-white mb-2">21,456.50</div>
          <div className="flex items-center gap-2">
            <Lucide.TrendingUp className="text-green-400" size={16} />
            <span className="text-green-400">+156.30 (+0.73%)</span>
          </div>
          <div className="mt-6 h-32 bg-gradient-to-t from-green-500/10 to-transparent rounded" />
        </div>

        {/* Live Trades */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Recent Trades</h4>
          {[
            { symbol: 'RELIANCE', action: 'BUY', profit: '+₹12,450', status: 'success' },
            { symbol: 'TCS', action: 'SELL', profit: '+₹8,230', status: 'success' },
            { symbol: 'HDFC', action: 'BUY', profit: '+₹5,670', status: 'success' }
          ].map((trade, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-center gap-3">
                <div className={`px-2 py-1 rounded text-xs font-medium ${
                  trade.action === 'BUY' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-red-500/20 text-red-400'
                }`}>
                  {trade.action}
                </div>
                <span className="text-white font-medium">{trade.symbol}</span>
              </div>
              <span className="text-green-400 font-semibold">{trade.profit}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )

  const metrics = [
    { icon: 'Activity', value: '₹15.7L', label: 'Avg Alpha/Year', color: 'teal' },
    { icon: 'TrendingUp', value: '73%', label: 'Win Rate', color: 'cyan' },
    { icon: 'Zap', value: '11ms', label: 'Execution', color: 'emerald' },
    { icon: 'Users', value: '450+', label: 'Active Traders', color: 'blue' }
  ]

  return (
    <ProductShowcaseTabs
      productName="Zerodha Trading Intelligence"
      productIcon="TrendingUp"
      productColor="blue"
      conceptContent={conceptContent}
      featuresContent={featuresContent}
      liveContent={liveContent}
      metrics={metrics}
    />
  )
}

export default ProductShowcaseTabs
