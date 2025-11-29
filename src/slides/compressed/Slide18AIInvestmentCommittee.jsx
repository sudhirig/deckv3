import React from 'react'
import { motion } from 'framer-motion'
import { AspectFrame } from '../../components/StandardLayouts'
import { 
  Users, 
  TrendingUp, 
  Rocket, 
  Shield, 
  BarChart3, 
  Scale,
  Target,
  Briefcase,
  ArrowRight
} from 'lucide-react'

/**
 * Slide18AIInvestmentCommittee - Your Investment Committee of 18 AI Experts
 * Shows legendary investor AI personas working together
 */
const Slide18AIInvestmentCommittee = () => {
  const investorGroups = [
    {
      title: 'VALUE MASTERS',
      color: '#14B8A6',
      icon: Scale,
      investors: [
        { name: 'Warren Buffett AI', focus: 'Moats & Compounders' },
        { name: 'Ben Graham AI', focus: 'Deep Value' },
        { name: 'Charlie Munger AI', focus: 'Quality at Fair Price' },
        { name: 'Seth Klarman AI', focus: 'Margin of Safety' }
      ]
    },
    {
      title: 'GROWTH SEEKERS',
      color: '#8B5CF6',
      icon: Rocket,
      investors: [
        { name: 'Peter Lynch AI', focus: 'Ten-Baggers' },
        { name: 'Cathie Wood AI', focus: 'Disruptive Innovation' },
        { name: 'Phil Fisher AI', focus: 'Scuttlebutt Method' },
        { name: 'T. Rowe Price AI', focus: 'Growth at Scale' }
      ]
    },
    {
      title: 'MARKET SPECIALISTS',
      color: '#F59E0B',
      icon: TrendingUp,
      investors: [
        { name: 'Rakesh Jhunjhunwala AI', focus: 'India Markets' },
        { name: 'Stanley Druckenmiller AI', focus: 'Macro Trends' },
        { name: 'Michael Burry AI', focus: 'Contrarian Bets' },
        { name: 'Ray Dalio AI', focus: 'All-Weather' }
      ]
    }
  ]

  const analysts = [
    { name: 'Technical', icon: BarChart3, color: '#3B82F6' },
    { name: 'Fundamental', icon: Briefcase, color: '#10B981' },
    { name: 'Sentiment', icon: Users, color: '#EC4899' },
    { name: 'Risk Manager', icon: Shield, color: '#EF4444' },
    { name: 'Portfolio Mgr', icon: Target, color: '#8B5CF6' }
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
        padding: '2rem 2.5rem',
        fontFamily: 'Inter, -apple-system, sans-serif',
        overflow: 'hidden'
      }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '1.5rem' }}
        >
          <div style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(20, 184, 166, 0.15)',
            border: '1px solid rgba(20, 184, 166, 0.3)',
            borderRadius: '20px',
            padding: '0.4rem 1rem',
            marginBottom: '0.75rem'
          }}>
            <Users size={16} color="#14B8A6" />
            <span style={{ color: '#14B8A6', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.05em' }}>
              YOUR AI INVESTMENT COMMITTEE
            </span>
          </div>
          
          <h1 style={{
            fontSize: '2.25rem',
            fontWeight: '800',
            color: '#FFFFFF',
            marginBottom: '0.5rem',
            letterSpacing: '-0.02em'
          }}>
            18 Legendary Investors Working For You
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#94A3B8' }}>
            Each AI embodies a proven investment philosophy • <span style={{ color: '#10B981', fontWeight: '600' }}>Debate • Analyze • Consensus</span>
          </p>
        </motion.div>

        {/* Main Content - 3 Investor Groups */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.25rem',
          flex: 1,
          marginBottom: '1rem'
        }}>
          {investorGroups.map((group, groupIndex) => {
            const GroupIcon = group.icon
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + groupIndex * 0.1 }}
                style={{
                  background: 'rgba(30, 41, 59, 0.6)',
                  borderRadius: '16px',
                  padding: '1.25rem',
                  border: `2px solid ${group.color}30`,
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Group Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: `${group.color}20`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <GroupIcon size={24} color={group.color} />
                  </div>
                  <span style={{ 
                    fontSize: '0.9rem', 
                    fontWeight: '700', 
                    color: group.color, 
                    letterSpacing: '0.08em' 
                  }}>
                    {group.title}
                  </span>
                </div>

                {/* Investors List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', flex: 1 }}>
                  {group.investors.map((investor, i) => (
                    <motion.div
                      key={investor.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + groupIndex * 0.1 + i * 0.05 }}
                      whileHover={{ x: 5, background: `${group.color}15` }}
                      style={{
                        background: 'rgba(15, 23, 42, 0.6)',
                        borderRadius: '10px',
                        padding: '0.75rem 1rem',
                        borderLeft: `3px solid ${group.color}`,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <p style={{ 
                        fontSize: '0.95rem', 
                        fontWeight: '700', 
                        color: '#FFFFFF',
                        margin: 0
                      }}>
                        {investor.name}
                      </p>
                      <p style={{ 
                        fontSize: '0.75rem', 
                        color: '#94A3B8',
                        margin: '0.2rem 0 0 0'
                      }}>
                        {investor.focus}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Section - Decision Flow + Analysts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            background: 'linear-gradient(90deg, rgba(20, 184, 166, 0.1), rgba(139, 92, 246, 0.1), rgba(245, 158, 11, 0.1))',
            borderRadius: '14px',
            padding: '1rem 1.5rem',
            border: '1px solid rgba(255,255,255,0.1)'
          }}
        >
          {/* Decision Flow */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '0.75rem'
          }}>
            <div style={{ 
              background: 'rgba(16, 185, 129, 0.2)', 
              padding: '0.4rem 0.75rem', 
              borderRadius: '8px',
              border: '1px solid rgba(16, 185, 129, 0.3)'
            }}>
              <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#10B981' }}>🐂 BULL Case</span>
            </div>
            <span style={{ color: '#64748B', fontSize: '0.8rem' }}>vs</span>
            <div style={{ 
              background: 'rgba(239, 68, 68, 0.2)', 
              padding: '0.4rem 0.75rem', 
              borderRadius: '8px',
              border: '1px solid rgba(239, 68, 68, 0.3)'
            }}>
              <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#EF4444' }}>🐻 BEAR Case</span>
            </div>
            <ArrowRight size={18} color="#64748B" />
            <div style={{ 
              background: 'rgba(139, 92, 246, 0.2)', 
              padding: '0.4rem 0.75rem', 
              borderRadius: '8px',
              border: '1px solid rgba(139, 92, 246, 0.3)'
            }}>
              <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#8B5CF6' }}>Research Manager Synthesis</span>
            </div>
            <ArrowRight size={18} color="#64748B" />
            <div style={{ 
              background: 'rgba(245, 158, 11, 0.2)', 
              padding: '0.4rem 0.75rem', 
              borderRadius: '8px',
              border: '1px solid rgba(245, 158, 11, 0.3)'
            }}>
              <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#F59E0B' }}>CONSENSUS</span>
            </div>
          </div>

          {/* Analysts Row */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '1.5rem',
            paddingTop: '0.75rem',
            borderTop: '1px solid rgba(255,255,255,0.1)'
          }}>
            <span style={{ fontSize: '0.75rem', color: '#64748B', alignSelf: 'center' }}>+ Specialist Analysts:</span>
            {analysts.map((analyst) => {
              const AnalystIcon = analyst.icon
              return (
                <div key={analyst.name} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <AnalystIcon size={14} color={analyst.color} />
                  <span style={{ fontSize: '0.75rem', color: '#E2E8F0', fontWeight: '600' }}>{analyst.name}</span>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </AspectFrame>
  )
}

export default Slide18AIInvestmentCommittee
