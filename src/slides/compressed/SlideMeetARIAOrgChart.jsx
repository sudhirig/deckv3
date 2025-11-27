import React from 'react'
import { motion } from 'framer-motion'
import { AspectFrame } from '../../components/StandardLayouts'
import ARIAAvatar from '../../components/ARIAAvatar'
import { Brain, Globe, TrendingUp, Shield, Calculator, BarChart3, Users, Briefcase, Target, Scale, Zap } from 'lucide-react'

/**
 * SlideMeetARIAOrgChart - World-Class UI/UX
 * "Your AI Family Office CEO"
 * Layout: ARIA CEO at top → 3 Divisions → Agent Teams
 */
const SlideMeetARIAOrgChart = () => {
  const divisions = [
    { 
      id: 'ai', 
      label: 'ARIA AI', 
      subtitle: '68+ Agents',
      color: '#14B8A6',
      icon: Brain
    },
    { 
      id: 'wealth', 
      label: 'ARIA Wealth', 
      subtitle: 'India Gateway',
      color: '#8B5CF6',
      icon: Globe
    },
    { 
      id: 'trade', 
      label: 'ARIA Trade', 
      subtitle: 'Broker Integration',
      color: '#F59E0B',
      icon: TrendingUp
    }
  ]

  const agentTeams = [
    {
      division: 'ai',
      teams: [
        {
          name: 'Investment Strategists',
          icon: Briefcase,
          color: '#14B8A6',
          agents: ['Warren Buffett', 'Ben Graham', 'Phil Fisher', 'Charlie Munger']
        },
        {
          name: 'Market Analysts',
          icon: BarChart3,
          color: '#3B82F6',
          agents: ['Fundamental', 'Valuation', 'Sentiment', 'Technical']
        },
        {
          name: 'Risk & Portfolio',
          icon: Shield,
          color: '#EF4444',
          agents: ['Risk Manager', 'Portfolio Manager', 'Execution']
        }
      ]
    },
    {
      division: 'wealth',
      teams: [
        {
          name: 'Tax Intelligence',
          icon: Calculator,
          color: '#FBBF24',
          agents: ['Tax Harvester', 'LTCG Optimizer', 'Wash Sale Monitor']
        },
        {
          name: 'India Access',
          icon: Globe,
          color: '#8B5CF6',
          agents: ['GIFT City', 'NRI Specialist', 'FX Manager']
        }
      ]
    },
    {
      division: 'trade',
      teams: [
        {
          name: 'Execution',
          icon: Zap,
          color: '#F59E0B',
          agents: ['Zerodha', 'IBKR', 'Alpaca', 'Schwab']
        }
      ]
    }
  ]

  return (
    <AspectFrame>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #0a0f1b 0%, #0f172a 50%, #1e293b 100%)',
        display: 'flex',
        flexDirection: 'column',
        padding: '1.5rem 2.5rem',
        fontFamily: 'Inter, -apple-system, sans-serif',
        overflow: 'hidden'
      }}>
        {/* Background Glow */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '300px',
          background: 'radial-gradient(ellipse, rgba(20, 184, 166, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        {/* CEO Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '1rem',
            position: 'relative',
            zIndex: 10
          }}
        >
          {/* Avatar with Gradient Ring */}
          <div style={{
            padding: '3px',
            background: 'linear-gradient(135deg, #14B8A6, #06B6D4, #8B5CF6)',
            borderRadius: '50%',
            boxShadow: '0 0 30px rgba(20, 184, 166, 0.4)',
            marginBottom: '0.75rem'
          }}>
            <div style={{
              background: '#0f172a',
              borderRadius: '50%',
              padding: '4px',
              width: '80px',
              height: '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <ARIAAvatar size="medium" variant="gradient" animated={true} showPulse={true} showTitle={false} />
            </div>
          </div>
          
          <h1 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #FFFFFF 0%, #94A3B8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '0.25rem',
            letterSpacing: '-0.02em'
          }}>
            YOUR AI FAMILY OFFICE CEO
          </h1>
          <p style={{ fontSize: '0.9rem', color: '#94A3B8' }}>
            ARIA — <span style={{ color: '#14B8A6' }}>Autonomous Risk & Investment Advisor</span>
          </p>
        </motion.div>

        {/* Connector Line from CEO to Divisions */}
        <svg style={{ position: 'absolute', top: '180px', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '60px', zIndex: 1 }}>
          <motion.path
            d="M300,0 L300,30 M100,30 L500,30 M100,30 L100,60 M300,30 L300,60 M500,30 L500,60"
            stroke="rgba(148, 163, 184, 0.3)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </svg>

        {/* 3 Divisions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            marginBottom: '1rem',
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
                transition={{ delay: 0.5 + i * 0.1 }}
                style={{
                  background: `linear-gradient(135deg, ${div.color}15, ${div.color}08)`,
                  border: `2px solid ${div.color}40`,
                  borderRadius: '16px',
                  padding: '1rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  boxShadow: `0 4px 20px ${div.color}15`
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: `${div.color}20`,
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Icon size={24} color={div.color} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#FFFFFF', margin: 0 }}>{div.label}</h3>
                  <p style={{ fontSize: '0.8rem', color: div.color, margin: 0, fontWeight: '600' }}>{div.subtitle}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Agent Teams Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
            flex: 1,
            position: 'relative',
            zIndex: 5
          }}
        >
          {/* AI Division Teams */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {agentTeams.find(t => t.division === 'ai')?.teams.map((team, i) => {
              const Icon = team.icon
              return (
                <motion.div
                  key={team.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  style={{
                    background: 'rgba(30, 41, 59, 0.6)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(100, 116, 139, 0.3)',
                    borderLeft: `3px solid ${team.color}`,
                    borderRadius: '12px',
                    padding: '0.75rem 1rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <Icon size={16} color={team.color} />
                    <span style={{ fontSize: '0.8rem', fontWeight: '700', color: team.color }}>{team.name}</span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                    {team.agents.map(agent => (
                      <span key={agent} style={{
                        fontSize: '0.65rem',
                        background: 'rgba(255,255,255,0.05)',
                        color: '#CBD5E1',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px',
                        border: '1px solid rgba(255,255,255,0.1)'
                      }}>
                        {agent}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Wealth Division Teams */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {agentTeams.find(t => t.division === 'wealth')?.teams.map((team, i) => {
              const Icon = team.icon
              return (
                <motion.div
                  key={team.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                  style={{
                    background: 'rgba(30, 41, 59, 0.6)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(100, 116, 139, 0.3)',
                    borderLeft: `3px solid ${team.color}`,
                    borderRadius: '12px',
                    padding: '0.75rem 1rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <Icon size={16} color={team.color} />
                    <span style={{ fontSize: '0.8rem', fontWeight: '700', color: team.color }}>{team.name}</span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                    {team.agents.map(agent => (
                      <span key={agent} style={{
                        fontSize: '0.65rem',
                        background: 'rgba(255,255,255,0.05)',
                        color: '#CBD5E1',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px',
                        border: '1px solid rgba(255,255,255,0.1)'
                      }}>
                        {agent}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Trade Division Teams */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {agentTeams.find(t => t.division === 'trade')?.teams.map((team, i) => {
              const Icon = team.icon
              return (
                <motion.div
                  key={team.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0 + i * 0.1 }}
                  style={{
                    background: 'rgba(30, 41, 59, 0.6)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(100, 116, 139, 0.3)',
                    borderLeft: `3px solid ${team.color}`,
                    borderRadius: '12px',
                    padding: '0.75rem 1rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <Icon size={16} color={team.color} />
                    <span style={{ fontSize: '0.8rem', fontWeight: '700', color: team.color }}>{team.name}</span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                    {team.agents.map(agent => (
                      <span key={agent} style={{
                        fontSize: '0.65rem',
                        background: 'rgba(255,255,255,0.05)',
                        color: '#CBD5E1',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px',
                        border: '1px solid rgba(255,255,255,0.1)'
                      }}>
                        {agent}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          style={{
            marginTop: '1rem',
            padding: '0.75rem 2rem',
            background: 'rgba(15, 23, 42, 0.6)',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.05)',
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem'
          }}
        >
          {[
            { value: '68+', label: 'AI Specialists', color: '#14B8A6' },
            { value: '24/7', label: 'Active Management', color: '#FBBF24' },
            { value: '11ms', label: 'Execution Latency', color: '#8B5CF6' },
            { value: '$1M→$10K', label: 'Cost Reduction', color: '#10B981' }
          ].map((stat, i) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '1.25rem', fontWeight: '800', color: stat.color, margin: 0 }}>{stat.value}</p>
              <p style={{ fontSize: '0.65rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '2px 0 0 0' }}>{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </AspectFrame>
  )
}

export default SlideMeetARIAOrgChart
