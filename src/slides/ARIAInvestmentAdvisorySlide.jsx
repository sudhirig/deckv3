import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { AspectFrame } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import ARIAIconBadge from '../components/ARIAIconBadge'
import ARIAAvatar from '../components/ARIAAvatar'
import { Brain, TrendingUp, Shield, Target, Users, DollarSign, ChevronRight, Sparkles } from 'lucide-react'
import './SlideStyles.css'

export default function ARIAInvestmentAdvisorySlide() {
  const [activeTab, setActiveTab] = useState('personalization')
  
  // Jarvis-inspired investment advisory features elevated by ARIA
  const advisoryPillars = {
    personalization: {
      title: 'Hyper-Personalized Advisory',
      icon: Brain,
      color: '#14b8a6',
      features: [
        { title: 'AI Risk Profiling', value: '360°', detail: 'Behavioral + Financial + Life Stage' },
        { title: 'Goal Mapping', value: '15+', detail: 'Life goals with AI prioritization' },
        { title: 'Dynamic Strategy', value: 'Real-time', detail: 'Adapts to market & life changes' },
        { title: 'Family Office View', value: 'Multi-gen', detail: '3 generation wealth planning' }
      ]
    },
    intelligence: {
      title: 'Investment Intelligence',
      icon: TrendingUp,
      color: '#06b6d4',
      features: [
        { title: 'Market Analysis', value: '24/7', detail: '182+ data sources analyzed' },
        { title: 'Asset Selection', value: '50,000+', detail: 'Securities evaluated daily' },
        { title: 'Alpha Discovery', value: '+4.2%', detail: 'Consistent outperformance' },
        { title: 'Opportunity Alerts', value: '<11ms', detail: 'Instant notification & execution' }
      ]
    },
    protection: {
      title: 'Wealth Protection',
      icon: Shield,
      color: '#60a5fa',
      features: [
        { title: 'Risk Prevention', value: 'Predictive', detail: 'AI forecasts 30 days ahead' },
        { title: 'Drawdown Control', value: '-65%', detail: 'Reduced vs market crashes' },
        { title: 'Tax Shield', value: '₹92L', detail: 'Average annual tax saved' },
        { title: 'Compliance', value: '100%', detail: 'Automated regulatory adherence' }
      ]
    },
    execution: {
      title: 'Seamless Execution',
      icon: Target,
      color: '#fbbf24',
      features: [
        { title: 'Voice Trading', value: '3 langs', detail: 'Hindi, English, Gujarati' },
        { title: 'Auto-Rebalancing', value: 'Daily', detail: 'Optimal allocation maintained' },
        { title: 'Multi-Asset', value: '12+', detail: 'Asset classes integrated' },
        { title: 'Settlement', value: 'T+0', detail: 'Same-day execution' }
      ]
    }
  }
  
  const currentPillar = advisoryPillars[activeTab]
  const Icon = currentPillar.icon
  
  return (
    <AspectFrame>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #0a0f1b 0%, #0f172a 50%, #1e293b 100%)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            padding: '2rem 3rem 1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.3rem' }}>
              <h1 style={{
                fontSize: 'clamp(2rem, 3vw, 2.5rem)',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #14b8a6, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Your AI CEO at Work
              </h1>
              <ARIAIconBadge size={45} animated={true} />
            </div>
            <p style={{ fontSize: '0.95rem', color: '#94a3b8' }}>
              Solving the product access gap - alternatives, personalization, and 24/7 optimization
            </p>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <ARIAAvatar size="small" variant="gradient" animated={false} />
            <div>
              <p style={{ fontSize: '0.9rem', color: '#e2e8f0', fontWeight: '600' }}>
                Your AI Investment Advisor
              </p>
              <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                68+ specialists at your service
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <div style={{
          padding: '0 3rem',
          marginBottom: '1.5rem'
        }}>
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            background: 'rgba(30, 41, 59, 0.3)',
            padding: '0.5rem',
            borderRadius: '0.75rem',
            border: '1px solid rgba(148, 163, 184, 0.1)'
          }}>
            {Object.entries(advisoryPillars).map(([key, pillar]) => {
              const PillarIcon = pillar.icon
              return (
                <motion.button
                  key={key}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(key)}
                  style={{
                    flex: 1,
                    padding: '0.75rem',
                    background: activeTab === key 
                      ? `linear-gradient(135deg, ${pillar.color}20, ${pillar.color}10)`
                      : 'transparent',
                    border: activeTab === key 
                      ? `1px solid ${pillar.color}40`
                      : '1px solid transparent',
                    borderRadius: '0.5rem',
                    color: activeTab === key ? pillar.color : '#64748b',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <PillarIcon size={18} />
                  {pillar.title}
                </motion.button>
              )
            })}
          </div>
        </div>

        {/* Main Content */}
        <div style={{
          flex: 1,
          padding: '0 3rem 2rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          alignItems: 'stretch'
        }}>
          
          {/* Left: Feature Details */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            <div style={{
              background: `linear-gradient(135deg, ${currentPillar.color}15, ${currentPillar.color}05)`,
              borderRadius: '1rem',
              padding: '1.5rem',
              border: `1px solid ${currentPillar.color}30`,
              marginBottom: '1rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <div style={{
                  padding: '0.75rem',
                  background: `${currentPillar.color}20`,
                  borderRadius: '0.75rem'
                }}>
                  <Icon size={24} color={currentPillar.color} />
                </div>
                <h2 style={{
                  fontSize: '1.5rem',
                  color: '#e2e8f0',
                  fontWeight: '600'
                }}>
                  {currentPillar.title}
                </h2>
              </div>
              
              <p style={{
                fontSize: '0.95rem',
                color: '#94a3b8',
                lineHeight: '1.6'
              }}>
                {activeTab === 'personalization' && 
                  'ARIA understands you better than any human advisor, analyzing thousands of data points to create a truly personalized wealth strategy.'}
                {activeTab === 'intelligence' && 
                  'Leveraging advanced AI models, ARIA processes vast amounts of market data to identify opportunities invisible to traditional advisors.'}
                {activeTab === 'protection' && 
                  'Proactive risk management powered by predictive AI ensures your wealth is protected before threats materialize.'}
                {activeTab === 'execution' && 
                  'From voice commands to automated rebalancing, ARIA executes your investment strategy with unprecedented speed and precision.'}
              </p>
            </div>
            
            {/* Feature Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem'
            }}>
              {currentPillar.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  whileHover={{ scale: 1.02 }}
                  style={{
                    background: 'rgba(30, 41, 59, 0.3)',
                    borderRadius: '0.75rem',
                    padding: '1rem',
                    border: '1px solid rgba(148, 163, 184, 0.1)',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '0.5rem',
                    marginBottom: '0.5rem'
                  }}>
                    <span style={{
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      color: currentPillar.color
                    }}>
                      {feature.value}
                    </span>
                    <span style={{
                      fontSize: '0.75rem',
                      color: '#64748b'
                    }}>
                      {feature.title}
                    </span>
                  </div>
                  <p style={{
                    fontSize: '0.8rem',
                    color: '#94a3b8',
                    lineHeight: '1.4'
                  }}>
                    {feature.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Visual Comparison */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              background: 'rgba(30, 41, 59, 0.3)',
              borderRadius: '1rem',
              padding: '1.5rem',
              border: '1px solid rgba(148, 163, 184, 0.1)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <h3 style={{
              fontSize: '1.1rem',
              color: '#e2e8f0',
              marginBottom: '1.5rem'
            }}>
              ARIA vs Traditional Robo-Advisors
            </h3>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              flex: 1
            }}>
              {[
                { 
                  aspect: 'Personalization',
                  traditional: 'Rule-based questionnaires',
                  aria: '360° AI behavioral analysis',
                  advantage: '10x deeper'
                },
                {
                  aspect: 'Decision Speed',
                  traditional: 'Daily batch processing',
                  aria: '11ms real-time execution',
                  advantage: '8,640x faster'
                },
                {
                  aspect: 'Asset Coverage',
                  traditional: '5-10 ETFs/MFs',
                  aria: '50,000+ securities',
                  advantage: '5,000x wider'
                },
                {
                  aspect: 'Tax Optimization',
                  traditional: 'Annual harvesting',
                  aria: 'Continuous daily optimization',
                  advantage: '365x frequent'
                },
                {
                  aspect: 'Human Touch',
                  traditional: 'Call center support',
                  aria: 'AI CEO + 50 CPAs',
                  advantage: 'Best of both'
                },
                {
                  aspect: 'Global Access',
                  traditional: 'Domestic only',
                  aria: 'GIFT City + International',
                  advantage: '$5T TAM'
                }
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 2fr 2fr 1fr',
                    gap: '0.75rem',
                    alignItems: 'center',
                    padding: '0.75rem',
                    background: i % 2 === 0 ? 'rgba(20, 184, 166, 0.05)' : 'transparent',
                    borderRadius: '0.5rem'
                  }}
                >
                  <span style={{
                    fontSize: '0.8rem',
                    color: '#e2e8f0',
                    fontWeight: '500'
                  }}>
                    {item.aspect}
                  </span>
                  <span style={{
                    fontSize: '0.75rem',
                    color: '#64748b'
                  }}>
                    {item.traditional}
                  </span>
                  <span style={{
                    fontSize: '0.75rem',
                    color: '#14b8a6'
                  }}>
                    {item.aria}
                  </span>
                  <span style={{
                    fontSize: '0.7rem',
                    color: '#fbbf24',
                    fontWeight: '600',
                    textAlign: 'right'
                  }}>
                    {item.advantage}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              style={{
                marginTop: '1.5rem',
                padding: '1rem',
                background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(6, 182, 212, 0.05))',
                borderRadius: '0.75rem',
                border: '1px solid rgba(20, 184, 166, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <p style={{
                  fontSize: '0.9rem',
                  color: '#e2e8f0',
                  marginBottom: '0.3rem',
                  fontWeight: '500'
                }}>
                  Ready for AI-Powered Advisory?
                </p>
                <p style={{
                  fontSize: '0.75rem',
                  color: '#94a3b8'
                }}>
                  Join 1,000+ HNWIs already benefiting
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '0.5rem 1rem',
                  background: 'linear-gradient(135deg, #14b8a6, #06b6d4)',
                  border: 'none',
                  borderRadius: '0.5rem',
                  color: '#fff',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                Start Now <ChevronRight size={14} />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            padding: '1rem 3rem',
            background: 'rgba(30, 41, 59, 0.3)',
            borderTop: '1px solid rgba(148, 163, 184, 0.1)',
            display: 'flex',
            justifyContent: 'center',
            gap: '4rem'
          }}
        >
          {[
            { icon: Users, label: 'Active Users', value: '1,250+', color: '#14b8a6' },
            { icon: DollarSign, label: 'AUM', value: '₹850Cr', color: '#4ade80' },
            { icon: TrendingUp, label: 'Avg Returns', value: '+24.6%', color: '#fbbf24' },
            { icon: Shield, label: 'Risk Reduction', value: '-35%', color: '#60a5fa' },
            { icon: Sparkles, label: 'Satisfaction', value: '98%', color: '#ec4899' }
          ].map((metric, i) => (
            <div key={i} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <metric.icon size={18} color={metric.color} />
              <span style={{
                fontSize: '1.2rem',
                fontWeight: 'bold',
                color: metric.color,
                marginTop: '0.3rem'
              }}>
                {metric.value}
              </span>
              <span style={{
                fontSize: '0.7rem',
                color: '#64748b',
                marginTop: '0.2rem'
              }}>
                {metric.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </AspectFrame>
  )
}
