import { motion } from 'framer-motion'
import { GridLayout } from '../components/StandardLayouts'
import { Shield, Lock, Eye, Server, AlertCircle, CheckCircle2 } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function RiskMitigation2Slide() {
  const contingencyPlans = [
    {
      scenario: 'Major Market Crash',
      probability: 'Low',
      impact: 'High',
      plan: [
        'Activate defensive portfolio strategies',
        'Increase cash positions automatically',
        'Enhanced client communication protocols',
        'Fee waivers for affected clients'
      ],
      recovery: '2-4 weeks'
    },
    {
      scenario: 'Regulatory Change',
      probability: 'Medium',
      impact: 'Medium',
      plan: [
        'Rapid compliance adaptation team',
        'Pre-built regulatory frameworks',
        'Legal advisory board activation',
        'Client notification system'
      ],
      recovery: '1-2 weeks'
    },
    {
      scenario: 'Data Breach Attempt',
      probability: 'Low',
      impact: 'High',
      plan: [
        'Immediate system isolation',
        'Forensic investigation team',
        'Client asset protection protocols',
        'Transparent communication plan'
      ],
      recovery: '24-48 hours'
    },
    {
      scenario: 'Key Personnel Loss',
      probability: 'Medium',
      impact: 'Low',
      plan: [
        'Succession planning in place',
        'Cross-trained leadership team',
        'Automated decision systems',
        'Advisory board involvement'
      ],
      recovery: 'Immediate'
    }
  ]

  const insurance = [
    { type: 'Cyber Insurance', coverage: '$50M', provider: 'Lloyd\'s of London' },
    { type: 'E&O Insurance', coverage: '$25M', provider: 'Chubb' },
    { type: 'D&O Insurance', coverage: '$10M', provider: 'AIG' },
    { type: 'General Liability', coverage: '$5M', provider: 'Zurich' }
  ]

  const cards = insurance.map((item, index) => (
    <motion.div
      key={item.type}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 + index * 0.1 }}
      style={{
        textAlign: 'center',
        padding: pxToRem(16),
        background: 'rgba(255, 255, 255, 0.03)',
        borderRadius: pxToRem(8),
        height: '100%'
      }}
    >
      <Shield size={24} style={{ color: '#4ade80', margin: `0 auto ${pxToRem(8)}` }} />
      <div style={{ fontSize: pxToRem(13.6), color: '#e2e8f0', marginBottom: pxToRem(4) }}>
        {item.type}
      </div>
      <div style={{ fontSize: pxToRem(20.8), fontWeight: 'bold', color: '#4ade80' }}>
        {item.coverage}
      </div>
      <div style={{ fontSize: pxToRem(11.2), color: '#64748b' }}>
        {item.provider}
      </div>
    </motion.div>
  ))

  const summary = (
    <>
      <div style={{ marginBottom: pxToRem(32) }}>
        <h3 style={{ color: '#60a5fa', marginBottom: pxToRem(16), fontSize: pxToRem(17.6), marginTop: 0 }}>
          Contingency Plans
        </h3>
        {contingencyPlans.map((plan, index) => (
          <motion.div
            key={plan.scenario}
            initial={{ opacity: 0, x: index % 2 === 0 ? pxToRem(-30) : pxToRem(30) }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.15 }}
            style={{
              background: 'rgba(59, 130, 246, 0.05)',
              borderRadius: pxToRem(12),
              padding: pxToRem(20),
              marginBottom: pxToRem(16),
              border: `${pxToRem(1)} solid rgba(59, 130, 246, 0.2)`
            }}
          >
            <div style={{
              display: 'grid',
              gridTemplateColumns: '2fr 3fr 1fr',
              gap: pxToRem(24),
              alignItems: 'start'
            }}>
              <div>
                <h4 style={{ color: '#60a5fa', marginBottom: pxToRem(8), marginTop: 0 }}>
                  {plan.scenario}
                </h4>
                <div style={{ display: 'flex', gap: pxToRem(12), marginBottom: pxToRem(8) }}>
                  <div style={{
                    padding: `${pxToRem(4)} ${pxToRem(8)}`,
                    background: plan.probability === 'Low' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(251, 191, 36, 0.2)',
                    borderRadius: pxToRem(4),
                    fontSize: pxToRem(11.2),
                    color: plan.probability === 'Low' ? '#4ade80' : '#fbbf24'
                  }}>
                    P: {plan.probability}
                  </div>
                  <div style={{
                    padding: `${pxToRem(4)} ${pxToRem(8)}`,
                    background: plan.impact === 'High' ? 'rgba(239, 68, 68, 0.2)' : plan.impact === 'Medium' ? 'rgba(251, 191, 36, 0.2)' : 'rgba(34, 197, 94, 0.2)',
                    borderRadius: pxToRem(4),
                    fontSize: pxToRem(11.2),
                    color: plan.impact === 'High' ? '#ef4444' : plan.impact === 'Medium' ? '#fbbf24' : '#4ade80'
                  }}>
                    I: {plan.impact}
                  </div>
                </div>
                <div style={{ fontSize: pxToRem(12.8), color: '#64748b' }}>
                  Recovery: <span style={{ color: '#4ade80', fontWeight: '600' }}>{plan.recovery}</span>
                </div>
              </div>

              <div>
                <div style={{ fontSize: pxToRem(12), color: '#64748b', marginBottom: pxToRem(8) }}>
                  ACTION PLAN
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: pxToRem(8) }}>
                  {plan.plan.map((action, i) => (
                    <div
                      key={i}
                      style={{
                        fontSize: pxToRem(12),
                        color: '#e2e8f0',
                        padding: `${pxToRem(4)} ${pxToRem(8)}`,
                        background: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: pxToRem(4)
                      }}
                    >
                      {action}
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ textAlign: 'center' }}>
                <CheckCircle2 size={24} style={{ color: '#4ade80', margin: `0 auto ${pxToRem(4)}` }} />
                <div style={{ fontSize: pxToRem(12), color: '#4ade80' }}>
                  Plan Ready
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: pxToRem(16)
        }}
      >
        <div style={{
          textAlign: 'center',
          padding: pxToRem(16),
          background: 'rgba(147, 51, 234, 0.1)',
          borderRadius: pxToRem(8)
        }}>
          <Lock size={20} style={{ color: '#c084fc', margin: `0 auto ${pxToRem(8)}` }} />
          <div style={{ fontSize: pxToRem(20.8), fontWeight: 'bold', color: '#c084fc' }}>100%</div>
          <div style={{ fontSize: pxToRem(12), color: '#94a3b8' }}>Scenarios Covered</div>
        </div>
        <div style={{
          textAlign: 'center',
          padding: pxToRem(16),
          background: 'rgba(251, 191, 36, 0.1)',
          borderRadius: pxToRem(8)
        }}>
          <Eye size={20} style={{ color: '#fbbf24', margin: `0 auto ${pxToRem(8)}` }} />
          <div style={{ fontSize: pxToRem(20.8), fontWeight: 'bold', color: '#fbbf24' }}>24/7</div>
          <div style={{ fontSize: pxToRem(12), color: '#94a3b8' }}>Monitoring</div>
        </div>
        <div style={{
          textAlign: 'center',
          padding: pxToRem(16),
          background: 'rgba(59, 130, 246, 0.1)',
          borderRadius: pxToRem(8)
        }}>
          <Server size={20} style={{ color: '#60a5fa', margin: `0 auto ${pxToRem(8)}` }} />
          <div style={{ fontSize: pxToRem(20.8), fontWeight: 'bold', color: '#60a5fa' }}>3</div>
          <div style={{ fontSize: pxToRem(12), color: '#94a3b8' }}>Backup Sites</div>
        </div>
        <div style={{
          textAlign: 'center',
          padding: pxToRem(16),
          background: 'rgba(34, 197, 94, 0.1)',
          borderRadius: pxToRem(8)
        }}>
          <AlertCircle size={20} style={{ color: '#4ade80', margin: `0 auto ${pxToRem(8)}` }} />
          <div style={{ fontSize: pxToRem(20.8), fontWeight: 'bold', color: '#4ade80' }}>$90M</div>
          <div style={{ fontSize: pxToRem(12), color: '#94a3b8' }}>Total Coverage</div>
        </div>
      </motion.div>
    </>
  )

  return (
    <GridLayout
      title="Contingency Plans & Business Continuity"
      subtitle="Prepared for any scenario with robust recovery plans"
      cards={cards}
      columns={4}
      summary={summary}
    />
  )
}
