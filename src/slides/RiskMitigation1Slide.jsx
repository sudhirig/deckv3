import { motion } from 'framer-motion'
import { GridLayout } from '../components/StandardLayouts'
import { AlertTriangle, Shield, CheckCircle, Activity } from 'lucide-react'
import './SlideStyles.css'

export default function RiskMitigation1Slide() {
  const risks = [
    {
      category: 'Regulatory Risk',
      level: 'Medium',
      color: '#fbbf24',
      risks: [
        'Changing financial regulations',
        'Cross-border compliance',
        'Data privacy laws'
      ],
      mitigations: [
        'Proactive regulatory engagement',
        'Built-in compliance automation',
        'Legal team with fintech expertise',
        'Multiple jurisdiction licenses'
      ]
    },
    {
      category: 'Technology Risk',
      level: 'Low',
      color: '#4ade80',
      risks: [
        'AI model errors',
        'System downtime',
        'Cybersecurity threats'
      ],
      mitigations: [
        'Human-in-the-loop safeguards',
        '99.99% uptime SLA',
        'Bank-grade security infrastructure',
        'Regular third-party audits'
      ]
    },
    {
      category: 'Market Risk',
      level: 'Medium',
      color: '#fbbf24',
      risks: [
        'Market volatility',
        'Competition from incumbents',
        'Economic downturn'
      ],
      mitigations: [
        'Diversified revenue streams',
        'Strong network effects',
        'Countercyclical business model',
        'Deep technical moat'
      ]
    },
    {
      category: 'Operational Risk',
      level: 'Low',
      color: '#4ade80',
      risks: [
        'Key person dependency',
        'Scaling challenges',
        'Customer acquisition costs'
      ],
      mitigations: [
        'Strong leadership bench',
        'Automated scaling infrastructure',
        'Viral referral program',
        'Unit economics discipline'
      ]
    }
  ]

  const getRiskIcon = (level) => {
    if (level === 'Low') return <CheckCircle size={16} style={{ color: '#4ade80' }} />
    if (level === 'Medium') return <AlertTriangle size={16} style={{ color: '#fbbf24' }} />
    return <AlertTriangle size={16} style={{ color: '#ef4444' }} />
  }

  const cards = risks.map((risk, index) => (
    <motion.div
      key={risk.category}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 + index * 0.15 }}
      style={{
        background: `linear-gradient(135deg, ${risk.color}15, transparent)`,
        borderRadius: '0.75rem',
        padding: '1.5rem',
        border: `1px solid ${risk.color}33`,
        height: '100%'
      }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <AlertTriangle size={20} style={{ color: risk.color }} />
          <h3 style={{ color: risk.color, fontSize: '1.1rem', margin: 0 }}>
            {risk.category}
          </h3>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.25rem',
          padding: '0.25rem 0.75rem',
          background: `${risk.color}22`,
          borderRadius: '0.75rem'
        }}>
          {getRiskIcon(risk.level)}
          <span style={{ fontSize: '0.8rem', color: risk.color }}>
            {risk.level}
          </span>
        </div>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.5rem' }}>
          KEY RISKS
        </div>
        {risk.risks.map((item, i) => (
          <div
            key={i}
            style={{
              fontSize: '0.85rem',
              color: '#94a3b8',
              marginBottom: '0.25rem',
              paddingLeft: '1rem',
              position: 'relative'
            }}
          >
            <span style={{
              position: 'absolute',
              left: 0,
              color: '#ef4444'
            }}>•</span>
            {item}
          </div>
        ))}
      </div>

      <div>
        <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.5rem' }}>
          MITIGATION STRATEGIES
        </div>
        {risk.mitigations.map((item, i) => (
          <div
            key={i}
            style={{
              fontSize: '0.85rem',
              color: '#e2e8f0',
              marginBottom: '0.25rem',
              paddingLeft: '1rem',
              position: 'relative'
            }}
          >
            <span style={{
              position: 'absolute',
              left: 0,
              color: '#4ade80'
            }}>✓</span>
            {item}
          </div>
        ))}
      </div>
    </motion.div>
  ))

  const summary = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      style={{
        background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(20, 184, 166, 0.1))',
        borderRadius: '0.75rem',
        padding: '1.5rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1.5rem'
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <Shield size={30} style={{ color: '#4ade80', margin: '0 auto 0.5rem' }} />
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4ade80' }}>
          Low
        </div>
        <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
          Overall Risk Rating
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Activity size={30} style={{ color: '#60a5fa', margin: '0 auto 0.5rem' }} />
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#60a5fa' }}>
          16
        </div>
        <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
          Mitigation Strategies
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <CheckCircle size={30} style={{ color: '#14b8a6', margin: '0 auto 0.5rem' }} />
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#14b8a6' }}>
          95%
        </div>
        <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
          Risk Coverage
        </div>
      </div>
    </motion.div>
  )

  return (
    <GridLayout
      title="Risk Analysis & Mitigation Strategy"
      subtitle="Proactive risk management for sustainable growth"
      cards={cards}
      columns={2}
      summary={summary}
    />
  )
}
