import React from 'react'
import { motion } from 'framer-motion'
import { AspectFrame } from '../../components/StandardLayouts'
import ARIAAvatar from '../../components/ARIAAvatar'
import { Brain, Globe, TrendingUp, Shield, Calculator, BarChart3, Users, Briefcase, Target, Zap, Building, Landmark } from 'lucide-react'

/**
 * SlideMeetARIAOrgChartV2 - Enhanced World-Class UI/UX
 * "Your AI Family Office CEO"
 * Clean org chart with better visual hierarchy
 */
const SlideMeetARIAOrgChartV2 = () => {
  const divisions = [
    { 
      id: 'ai', 
      label: 'ARIA AI', 
      subtitle: '68+ Agents',
      color: '#14B8A6',
      icon: Brain,
      teams: [
        { name: 'Investment Strategists', icon: Briefcase, agents: ['Warren Buffett', 'Ben Graham', 'Phil Fisher', 'Charlie Munger', 'Cathie Wood'] },
        { name: 'Market Analysts', icon: BarChart3, agents: ['Fundamental', 'Valuation', 'Sentiment', 'Technical', 'News'] },
        { name: 'Risk & Portfolio', icon: Shield, agents: ['Risk Manager', 'Portfolio Manager', 'Execution Engine'] }
      ]
    },
    { 
      id: 'wealth', 
      label: 'ARIA Wealth', 
      subtitle: 'India Gateway',
      color: '#8B5CF6',
      icon: Globe,
      teams: [
        { name: 'Tax Intelligence', icon: Calculator, agents: ['Tax Harvester', 'LTCG Optimizer', 'Wash Sale Monitor'] },
        { name: 'India Access', icon: Landmark, agents: ['GIFT City', 'NRI Specialist', 'FX Manager'] },
        { name: 'Alternative Assets', icon: Building, agents: ['PE/VC Access', 'Pre-IPO', 'Real Estate'] }
      ]
    },
    { 
      id: 'trade', 
      label: 'ARIA Trade', 
      subtitle: 'Broker Integration',
      color: '#F59E0B',
      icon: TrendingUp,
      teams: [
        { name: 'US Brokers', icon: TrendingUp, agents: ['Interactive Brokers', 'Alpaca', 'Schwab'] },
        { name: 'India Brokers', icon: Zap, agents: ['Zerodha', 'ICICI Direct', 'HDFC Securities'] },
        { name: 'Execution', icon: Target, agents: ['Order Router', 'Best Execution', 'TCA'] }
      ]
    }
  ]

  return (
    <AspectFrame>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(180deg, #0a0f1b 0%, #0f172a 100%)',
        display: 'flex',
        flexDirection: 'column',
        padding: '1.25rem 2rem',
        fontFamily: 'Inter, -apple-system, sans-serif',
        overflow: 'hidden'
      }}>
        {/* Background Effects */}
        <div style={{
          position: 'absolute',
          top: '5%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '200px',
          background: 'radial-gradient(ellipse, rgba(20, 184, 166, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        {/* CEO Section - Compact */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '0.75rem',
            position: 'relative',
            zIndex: 10
          }}
        >
          <div style={{
            padding: '3px',
            background: 'linear-gradient(135deg, #14B8A6, #06B6D4, #8B5CF6)',
            borderRadius: '50%',
            boxShadow: '0 0 40px rgba(20, 184, 166, 0.5)',
            marginBottom: '0.5rem'
          }}>
            <div style={{
              background: '#0f172a',
              borderRadius: '50%',
              padding: '4px',
              width: '70px',
              height: '70px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <ARIAAvatar size="medium" variant="gradient" animated={true} showPulse={true} showTitle={false} />
            </div>
          </div>
          
          <h1 style={{
            fontSize: '1.75rem',
            fontWeight: '800',
            color: '#FFFFFF',
            marginBottom: '0.2rem',
            letterSpacing: '-0.02em'
          }}>
            YOUR AI FAMILY OFFICE CEO
          </h1>
          <p style={{ fontSize: '0.85rem', color: '#64748B' }}>
            ARIA — <span style={{ color: '#14B8A6', fontWeight: '600' }}>Autonomous Risk & Investment Advisor</span>
          </p>
        </motion.div>

        {/* Vertical Connector Line from CEO */}
        <div style={{
          width: '2px',
          height: '20px',
          background: 'linear-gradient(180deg, #14B8A6, #64748B)',
          margin: '0 auto',
          position: 'relative',
          zIndex: 5
        }} />

        {/* Horizontal Connector Bar */}
        <div style={{
          width: '80%',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #64748B 10%, #64748B 90%, transparent)',
          margin: '0 auto',
          position: 'relative',
          zIndex: 5
        }} />

        {/* 3 Divisions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            marginTop: '-1px',
            marginBottom: '0.75rem',
            position: 'relative',
            zIndex: 5
          }}
        >
          {divisions.map((div, i) => {
            const Icon = div.icon
            return (
              <motion.div
                key={div.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >
                {/* Vertical line to division */}
                <div style={{
                  width: '2px',
                  height: '15px',
                  background: div.color,
                  marginBottom: '-1px'
                }} />
                
                {/* Division Card */}
                <div style={{
                  background: `linear-gradient(135deg, ${div.color}20, ${div.color}08)`,
                  border: `2px solid ${div.color}50`,
                  borderRadius: '14px',
                  padding: '0.75rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  boxShadow: `0 4px 20px ${div.color}20`,
                  width: '100%',
                  maxWidth: '280px'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: `${div.color}25`,
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon size={22} color={div.color} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1rem', fontWeight: '700', color: '#FFFFFF', margin: 0 }}>{div.label}</h3>
                    <p style={{ fontSize: '0.75rem', color: div.color, margin: 0, fontWeight: '600' }}>{div.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Agent Teams Grid - 3 Columns */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
            flex: 1,
            position: 'relative',
            zIndex: 5
          }}
        >
          {divisions.map((div, divIndex) => (
            <div key={div.id} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {div.teams.map((team, teamIndex) => {
                const TeamIcon = team.icon
                return (
                  <motion.div
                    key={team.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + divIndex * 0.1 + teamIndex * 0.05 }}
                    style={{
                      background: 'rgba(15, 23, 42, 0.8)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(100, 116, 139, 0.2)',
                      borderLeft: `3px solid ${div.color}`,
                      borderRadius: '10px',
                      padding: '0.6rem 0.8rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.4rem' }}>
                      <TeamIcon size={14} color={div.color} />
                      <span style={{ fontSize: '0.7rem', fontWeight: '700', color: div.color, textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                        {team.name}
                      </span>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                      {team.agents.map(agent => (
                        <span key={agent} style={{
                          fontSize: '0.6rem',
                          background: `${div.color}10`,
                          color: '#E2E8F0',
                          padding: '0.15rem 0.4rem',
                          borderRadius: '4px',
                          border: `1px solid ${div.color}30`,
                          whiteSpace: 'nowrap'
                        }}>
                          {agent}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          ))}
        </motion.div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{
            marginTop: '0.75rem',
            padding: '0.6rem 1.5rem',
            background: 'linear-gradient(90deg, rgba(20, 184, 166, 0.1), rgba(139, 92, 246, 0.1), rgba(245, 158, 11, 0.1))',
            borderRadius: '10px',
            border: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            justifyContent: 'center',
            gap: '4rem'
          }}
        >
          {[
            { value: '68+', label: 'AI Specialists', color: '#14B8A6' },
            { value: '24/7', label: 'Active Management', color: '#8B5CF6' },
            { value: '11ms', label: 'Execution Latency', color: '#F59E0B' },
            { value: '$1M→$10K', label: 'Cost Reduction', color: '#10B981' }
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '1.1rem', fontWeight: '800', color: stat.color, margin: 0 }}>{stat.value}</p>
              <p style={{ fontSize: '0.55rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '2px 0 0 0' }}>{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </AspectFrame>
  )
}

export default SlideMeetARIAOrgChartV2
