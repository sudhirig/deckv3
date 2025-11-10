import { motion } from 'framer-motion'
import { GridLayout } from '../components/StandardLayouts'
import { AlertTriangle, Shield, CheckCircle, Activity } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
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
        borderRadius: pxToRem(12),
        padding: pxToRem(24),
        border: `${pxToRem(1)} solid ${risk.color}33`,
        height: '100%'
      }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: pxToRem(16)
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: pxToRem(8) }}>
          <AlertTriangle size={20} style={{ color: risk.color }} />
          <h3 style={{ color: risk.color, fontSize: pxToRem(17.6), margin: 0 }}>
            {risk.category}
          </h3>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: pxToRem(4),
          padding: `${pxToRem(4)} ${pxToRem(12)}`,
          background: `${risk.color}22`,
          borderRadius: pxToRem(12)
        }}>
          {getRiskIcon(risk.level)}
          <span style={{ fontSize: pxToRem(12.8), color: risk.color }}>
            {risk.level}
          </span>
        </div>
      </div>

      <div style={{ marginBottom: pxToRem(16) }}>
        <div style={{ fontSize: pxToRem(12.8), color: '#64748b', marginBottom: pxToRem(8) }}>
          KEY RISKS
        </div>
        {risk.risks.map((item, i) => (
          <div
            key={i}
            style={{
              fontSize: pxToRem(13.6),
              color: '#94a3b8',
              marginBottom: pxToRem(4),
              paddingLeft: pxToRem(16),
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
        <div style={{ fontSize: pxToRem(12.8), color: '#64748b', marginBottom: pxToRem(8) }}>
          MITIGATION STRATEGIES
        </div>
        {risk.mitigations.map((item, i) => (
          <div
            key={i}
            style={{
              fontSize: pxToRem(13.6),
              color: '#e2e8f0',
              marginBottom: pxToRem(4),
              paddingLeft: pxToRem(16),
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
      initial={{ opacity: 0, y: pxToRem(20) }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      style={{
        background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(20, 184, 166, 0.1))',
        borderRadius: pxToRem(12),
        padding: pxToRem(24),
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: pxToRem(24)
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <Shield size={30} style={{ color: '#4ade80', margin: `0 auto ${pxToRem(8)}` }} />
        <div style={{ fontSize: pxToRem(24), fontWeight: 'bold', color: '#4ade80' }}>
          Low
        </div>
        <div style={{ fontSize: pxToRem(13.6), color: '#94a3b8' }}>
          Overall Risk Rating
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Activity size={30} style={{ color: '#60a5fa', margin: `0 auto ${pxToRem(8)}` }} />
        <div style={{ fontSize: pxToRem(24), fontWeight: 'bold', color: '#60a5fa' }}>
          16
        </div>
        <div style={{ fontSize: pxToRem(13.6), color: '#94a3b8' }}>
          Mitigation Strategies
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <CheckCircle size={30} style={{ color: '#14b8a6', margin: `0 auto ${pxToRem(8)}` }} />
        <div style={{ fontSize: pxToRem(24), fontWeight: 'bold', color: '#14b8a6' }}>
          95%
        </div>
        <div style={{ fontSize: pxToRem(13.6), color: '#94a3b8' }}>
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
