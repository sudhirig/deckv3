import { motion } from 'framer-motion'
import { AspectFrame } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { DollarSign, FileText, Globe } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function ThreeAlphaAgentsMoatSlide() {
  const agents = [
    {
      icon: DollarSign,
      emoji: '💰',
      title: 'Tax Alpha Agent',
      color: '#f97316',
      borderColor: 'rgba(249, 115, 22, 0.4)',
      bgColor: 'rgba(249, 115, 22, 0.1)',
      problem: 'HNWIs lose millions to inefficient tax management. Advisors harvest quarterly at best.',
      competitiveEdge: 'Wealthfront does monthly. We do daily.',
      solution: 'Daily tax-loss harvesting captures 2-4x more opportunities, generating +1.8% annual alpha'
    },
    {
      icon: FileText,
      emoji: '📊',
      title: 'Alternative Asset Agent',
      color: '#3b82f6',
      borderColor: 'rgba(59, 130, 246, 0.4)',
      bgColor: 'rgba(59, 130, 246, 0.1)',
      problem: 'HNWIs demand private markets (15% allocation), but 80% of data trapped in 100-page docs.',
      competitiveEdge: '16,000+ funds analyzed. +300-500bps potential alpha.',
      solution: 'AI reads PDFs, generates 1-page memos, tracks performance. Institutional DD without analyst team.'
    },
    {
      icon: Globe,
      emoji: '🌏',
      title: 'India Gateway Agent',
      color: '#14b8a6',
      borderColor: 'rgba(20, 184, 166, 0.4)',
      bgColor: 'rgba(20, 184, 166, 0.1)',
      problem: 'Accessing India = nightmare of FPI regulations, tax drag, currency risk.',
      competitiveEdge: 'Only AI platform with automated GIFT City access.',
      solution: 'GIFT City route eliminates tax (0% CGT), eliminates currency risk (USD), unrestricted repatriation'
    }
  ]

  return (
    <AspectFrame>
      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem',
        gap: '1.5rem'
      }}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center' }}
        >
          <h1 style={{ fontSize: '2.6rem', fontWeight: 900, marginBottom: '0.25rem' }}>
            <GradientText gradient="from-orange-400 to-cyan-400">
              Our Moat: Three "Alpha Agents" Solving The Three Failures
            </GradientText>
          </h1>
          <p style={{ fontSize: '0.95rem', color: '#94a3b8' }}>
            Each agent directly answers one pain point from Slide 4
          </p>
        </motion.div>

        {/* Three Agent Cards */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.25rem'
        }}>
          {agents.map((agent, index) => {
            const Icon = agent.icon
            return (
              <motion.div
                key={agent.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.15 }}
                style={{
                  background: agent.bgColor,
                  border: `2px solid ${agent.borderColor}`,
                  borderRadius: pxToRem(16),
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.75rem'
                }}>
                  <span style={{ fontSize: '1.5rem' }}>{agent.emoji}</span>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    color: '#e2e8f0'
                  }}>
                    {agent.title}
                  </h3>
                </div>

                {/* Problem */}
                <div style={{ marginBottom: '0.75rem' }}>
                  <div style={{
                    fontSize: '0.8rem',
                    color: agent.color,
                    fontWeight: 'bold',
                    marginBottom: '0.3rem'
                  }}>
                    Problem:
                  </div>
                  <div style={{
                    fontSize: '0.8rem',
                    color: '#e2e8f0',
                    lineHeight: '1.3'
                  }}>
                    {agent.problem}
                  </div>
                </div>

                {/* Competitive Edge Box */}
                <div style={{
                  padding: '0.5rem',
                  background: 'rgba(0, 0, 0, 0.3)',
                  borderRadius: pxToRem(6),
                  marginBottom: '0.75rem'
                }}>
                  <div style={{
                    fontSize: '0.75rem',
                    color: '#94a3b8',
                    fontStyle: 'italic',
                    lineHeight: '1.3'
                  }}>
                    <span style={{ color: agent.color, fontWeight: 'bold' }}>
                      Competitive Edge:
                    </span> {agent.competitiveEdge}
                  </div>
                </div>

                {/* Solution */}
                <div style={{
                  marginTop: 'auto',
                  paddingTop: '0.75rem',
                  borderTop: `1px solid ${agent.borderColor}`
                }}>
                  <div style={{
                    fontSize: '0.8rem',
                    color: agent.color,
                    fontWeight: 'bold',
                    marginBottom: '0.3rem'
                  }}>
                    Solution:
                  </div>
                  <div style={{
                    fontSize: '0.8rem',
                    color: '#e2e8f0',
                    lineHeight: '1.3'
                  }}>
                    {agent.solution}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{
            padding: '1rem',
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(139, 92, 246, 0.1))',
            borderRadius: pxToRem(12),
            textAlign: 'center',
            border: '1px solid rgba(139, 92, 246, 0.3)'
          }}
        >
          <p style={{
            fontSize: '1.15rem',
            color: '#e9d5ff',
            fontWeight: '600'
          }}>
            Each agent creates measurable alpha. Together, they're unstoppable.
          </p>
        </motion.div>
      </div>
    </AspectFrame>
  )
}
