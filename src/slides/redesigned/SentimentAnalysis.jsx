import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  StandardSlideLayout,
  TabInterface,
  MetricsBar
} from '../../components/design-system'
import { 
  MessageSquare, TrendingUp, AlertCircle, Globe, 
  Newspaper, Twitter, BarChart3, Bell, Activity
} from 'lucide-react'
import styles from '../../utils/styleConstants'

/**
 * SentimentAnalysis - Market sentiment and news analysis engine
 * Tab 1: Concept - 100K articles/day processing
 * Tab 2: Features - NLP pipeline, sentiment scoring
 * Tab 3: Live Demo - Real-time sentiment dashboard
 */
const SentimentAnalysis = () => {
  const [sentimentScore, setSentimentScore] = useState(50)
  const [articleCount, setArticleCount] = useState(0)
  
  useEffect(() => {
    // Animate sentiment score
    const interval = setInterval(() => {
      setSentimentScore(prev => 50 + Math.sin(Date.now() / 1000) * 30)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Animate article counter
    const interval = setInterval(() => {
      setArticleCount(prev => {
        if (prev >= 100000) return 0
        return prev + 2500
      })
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const metrics = [
    { icon: 'Newspaper', value: '100K+', label: 'Articles/Day', color: 'blue' },
    { icon: 'Globe', value: '15', label: 'Languages', color: 'purple' },
    { icon: 'Activity', value: '<1s', label: 'Processing', color: 'teal' },
    { icon: 'Bell', value: '24/7', label: 'Monitoring', color: 'emerald' }
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
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
            <MessageSquare size={32} className="text-white" />
          </div>
          <div className="text-left">
            <h3 className="text-2xl font-bold text-white">Global Sentiment Intelligence</h3>
            <p className="text-gray-400">Processing 100,000+ articles daily across 15 languages</p>
          </div>
        </div>
      </motion.div>

      {/* Data Pipeline Visualization */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/30 p-6"
      >
        <h4 className="text-lg font-semibold text-blue-400 mb-4">Real-time Data Pipeline</h4>
        
        {/* Pipeline Flow */}
        <div className="relative">
          {/* Data Sources */}
          <div className="grid grid-cols-5 gap-3 mb-6">
            {[
              { name: 'News', icon: Newspaper, count: '45K' },
              { name: 'Social', icon: Twitter, count: '35K' },
              { name: 'Blogs', icon: Globe, count: '12K' },
              { name: 'Reports', icon: BarChart3, count: '5K' },
              { name: 'Forums', icon: MessageSquare, count: '3K' }
            ].map((source, i) => (
              <motion.div
                key={source.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="bg-black/30 rounded-xl p-3 text-center relative"
              >
                <source.icon className="mx-auto mb-2 text-blue-400" size={24} />
                <div className="text-xs font-semibold text-white">{source.name}</div>
                <div className="text-xs text-gray-500">{source.count}/day</div>
                
                {/* Animated flow line */}
                <motion.div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-blue-400 to-transparent"
                  initial={{ height: 0 }}
                  animate={{ height: 32 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Processing Engine */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-6 border border-blue-500/30 mb-6"
          >
            <div className="text-center mb-4">
              <div className="text-xl font-bold text-blue-400">NLP Processing Engine</div>
              <div className="text-sm text-gray-400">Powered by GPT-4 & Custom Models</div>
            </div>
            
            <div className="grid grid-cols-4 gap-3">
              {[
                'Language Detection',
                'Entity Recognition',
                'Sentiment Analysis',
                'Topic Extraction'
              ].map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  className="bg-black/20 rounded-lg p-2 text-center"
                >
                  <div className="text-xs text-gray-300">{step}</div>
                  <motion.div
                    className="mt-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                    animate={{ scaleX: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Output Metrics */}
          <div className="grid grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/30 text-center"
            >
              <TrendingUp className="mx-auto mb-2 text-emerald-400" size={24} />
              <div className="text-lg font-bold text-emerald-400">Bullish</div>
              <div className="text-xs text-gray-400">Market Sentiment</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="bg-yellow-500/10 rounded-xl p-4 border border-yellow-500/30 text-center"
            >
              <AlertCircle className="mx-auto mb-2 text-yellow-400" size={24} />
              <div className="text-lg font-bold text-yellow-400">3 Alerts</div>
              <div className="text-xs text-gray-400">Risk Signals</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
              className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/30 text-center"
            >
              <Bell className="mx-auto mb-2 text-purple-400" size={24} />
              <div className="text-lg font-bold text-purple-400">12 Events</div>
              <div className="text-xs text-gray-400">Key Updates</div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )

  // Tab 2: Features
  const FeaturesTab = () => {
    const features = [
      {
        title: 'Data Collection',
        items: [
          '500+ news sources globally',
          'Social media monitoring',
          'Regulatory filings tracking',
          'Research report analysis'
        ],
        icon: Globe,
        color: 'blue'
      },
      {
        title: 'NLP Processing',
        items: [
          'Multi-language support (15)',
          'Named entity recognition',
          'Contextual understanding',
          'Sarcasm detection'
        ],
        icon: MessageSquare,
        color: 'purple'
      },
      {
        title: 'Sentiment Scoring',
        items: [
          '-100 to +100 scale',
          'Weighted by source credibility',
          'Time decay factors',
          'Sector-specific models'
        ],
        icon: Activity,
        color: 'teal'
      },
      {
        title: 'Alert System',
        items: [
          'Real-time notifications',
          'Custom trigger rules',
          'Anomaly detection',
          'Trend reversal alerts'
        ],
        icon: Bell,
        color: 'emerald'
      }
    ]

    return (
      <div className="grid grid-cols-2 gap-4">
        {features.map((feature, index) => {
          const Icon = feature.icon
          const colorMap = {
            blue: 'from-blue-500 to-cyan-500',
            purple: 'from-purple-500 to-pink-500',
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
                <h4 className="text-lg font-semibold text-white">{feature.title}</h4>
              </div>

              <div className="space-y-2">
                {feature.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.15 + i * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <div className={`w-1.5 h-1.5 bg-gradient-to-r ${colorMap[feature.color]} rounded-full`} />
                    <span className="text-xs text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    )
  }

  // Tab 3: Live Demo
  const LiveDemoTab = () => {
    const [selectedStock, setSelectedStock] = useState('RELIANCE')
    
    const sentimentData = {
      RELIANCE: { score: 72, trend: 'up', articles: 234, alerts: 2 },
      TCS: { score: 65, trend: 'stable', articles: 189, alerts: 1 },
      INFY: { score: 45, trend: 'down', articles: 156, alerts: 3 }
    }

    const recentArticles = [
      {
        title: 'Reliance announces strategic partnership with Meta',
        source: 'Economic Times',
        sentiment: 85,
        impact: 'HIGH',
        time: '2 min ago'
      },
      {
        title: 'TCS wins $2.25B deal from major UK retailer',
        source: 'Reuters',
        sentiment: 78,
        impact: 'MEDIUM',
        time: '15 min ago'
      },
      {
        title: 'Market volatility concerns amid global tensions',
        source: 'Bloomberg',
        sentiment: -42,
        impact: 'HIGH',
        time: '1 hour ago'
      }
    ]

    return (
      <div className="space-y-6">
        {/* Live Sentiment Dashboard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/30 p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-xl font-bold text-blue-400">Live Sentiment Monitor</h4>
            <div className="text-sm text-gray-400">
              Processing: <span className="text-blue-400 font-mono">{articleCount.toLocaleString()}</span> articles
            </div>
          </div>
          
          {/* Stock Selector */}
          <div className="flex gap-2 mb-4">
            {Object.keys(sentimentData).map((stock) => (
              <motion.button
                key={stock}
                onClick={() => setSelectedStock(stock)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  selectedStock === stock
                    ? 'bg-blue-500 text-white'
                    : 'bg-black/30 text-gray-400 hover:bg-black/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {stock}
              </motion.button>
            ))}
          </div>

          {/* Sentiment Gauge */}
          <div className="bg-black/30 rounded-xl p-4 mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">Sentiment Score</span>
              <span className={`text-sm font-semibold ${
                sentimentData[selectedStock].trend === 'up' ? 'text-emerald-400' :
                sentimentData[selectedStock].trend === 'down' ? 'text-red-400' :
                'text-yellow-400'
              }`}>
                {sentimentData[selectedStock].trend === 'up' ? '↑' :
                 sentimentData[selectedStock].trend === 'down' ? '↓' : '→'} Trending
              </span>
            </div>
            
            {/* Gauge Visual */}
            <div className="relative h-20">
              <svg className="w-full h-full" viewBox="0 0 200 100">
                {/* Background arc */}
                <path
                  d="M 20 80 A 60 60 0 0 1 180 80"
                  stroke="#374151"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                />
                
                {/* Sentiment arc */}
                <motion.path
                  d="M 20 80 A 60 60 0 0 1 180 80"
                  stroke={sentimentData[selectedStock].score > 50 ? '#10b981' : '#ef4444'}
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: sentimentData[selectedStock].score / 100 }}
                  transition={{ duration: 1 }}
                />
                
                {/* Score text */}
                <text x="100" y="75" fill="#ffffff" fontSize="32" textAnchor="middle" fontWeight="bold">
                  {sentimentData[selectedStock].score}
                </text>
                <text x="100" y="95" fill="#9ca3af" fontSize="12" textAnchor="middle">
                  SENTIMENT SCORE
                </text>
              </svg>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-2">
              <div className="text-center">
                <div className="text-lg font-bold text-white">{sentimentData[selectedStock].articles}</div>
                <div className="text-xs text-gray-500">Articles Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-yellow-400">{sentimentData[selectedStock].alerts}</div>
                <div className="text-xs text-gray-500">Active Alerts</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Recent Articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-900/50 rounded-xl border border-gray-800 p-4"
        >
          <h5 className="text-sm font-semibold text-gray-300 mb-3">Recent High-Impact Articles</h5>
          <div className="space-y-2">
            {recentArticles.map((article, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center justify-between p-3 bg-black/30 rounded-lg"
              >
                <div className="flex-1">
                  <div className="text-sm font-semibold text-white mb-1">{article.title}</div>
                  <div className="flex items-center gap-3 text-xs">
                    <span className="text-gray-500">{article.source}</span>
                    <span className="text-gray-600">•</span>
                    <span className="text-gray-500">{article.time}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`text-sm font-bold ${
                    article.sentiment > 0 ? 'text-emerald-400' : 'text-red-400'
                  }`}>
                    {article.sentiment > 0 ? '+' : ''}{article.sentiment}
                  </div>
                  <div className={`text-xs px-2 py-1 rounded ${
                    article.impact === 'HIGH' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {article.impact}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    )
  }

  const tabs = [
    {
      id: 'concept',
      label: 'Concept',
      icon: MessageSquare,
      content: <ConceptTab />
    },
    {
      id: 'features',
      label: 'Features',
      icon: Globe,
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
      title="Sentiment Analysis Engine"
      subtitle="Real-time market sentiment from 100,000+ sources daily"
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

export default SentimentAnalysis
