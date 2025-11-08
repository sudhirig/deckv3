import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import GradientText from '../components/GradientText'
import { Shield, Lock, Eye, Server, AlertCircle, CheckCircle2 } from 'lucide-react'
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

  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-card"
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <AnimatedText delay={0.2}>
          <h2 className="slide-title" style={{ marginBottom: '0.5rem' }}>
            <GradientText gradient="from-purple-400 to-pink-400">
              Contingency Plans & Business Continuity
            </GradientText>
          </h2>
          <p style={{ fontSize: '1rem', color: '#94a3b8', textAlign: 'center', marginBottom: '2rem' }}>
            Prepared for any scenario with robust recovery plans
          </p>
        </AnimatedText>

        {/* Contingency Plans Grid */}
        <div style={{ marginBottom: '2rem' }}>
          {contingencyPlans.map((plan, index) => (
            <motion.div
              key={plan.scenario}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.15 }}
              style={{
                background: 'rgba(59, 130, 246, 0.05)',
                borderRadius: '12px',
                padding: '1.25rem',
                marginBottom: '1rem',
                border: '1px solid rgba(59, 130, 246, 0.2)'
              }}
            >
              <div style={{
                display: 'grid',
                gridTemplateColumns: '2fr 3fr 1fr',
                gap: '1.5rem',
                alignItems: 'start'
              }}>
                {/* Scenario Info */}
                <div>
                  <h4 style={{ color: '#60a5fa', marginBottom: '0.5rem' }}>
                    {plan.scenario}
                  </h4>
                  <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <div style={{
                      padding: '0.25rem 0.5rem',
                      background: plan.probability === 'Low' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(251, 191, 36, 0.2)',
                      borderRadius: '4px',
                      fontSize: '0.7rem',
                      color: plan.probability === 'Low' ? '#4ade80' : '#fbbf24'
                    }}>
                      P: {plan.probability}
                    </div>
                    <div style={{
                      padding: '0.25rem 0.5rem',
                      background: plan.impact === 'High' ? 'rgba(239, 68, 68, 0.2)' : plan.impact === 'Medium' ? 'rgba(251, 191, 36, 0.2)' : 'rgba(34, 197, 94, 0.2)',
                      borderRadius: '4px',
                      fontSize: '0.7rem',
                      color: plan.impact === 'High' ? '#ef4444' : plan.impact === 'Medium' ? '#fbbf24' : '#4ade80'
                    }}>
                      I: {plan.impact}
                    </div>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                    Recovery: <span style={{ color: '#4ade80', fontWeight: '600' }}>{plan.recovery}</span>
                  </div>
                </div>

                {/* Action Plan */}
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.5rem' }}>
                    ACTION PLAN
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {plan.plan.map((action, i) => (
                      <div
                        key={i}
                        style={{
                          fontSize: '0.75rem',
                          color: '#e2e8f0',
                          padding: '0.25rem 0.5rem',
                          background: 'rgba(255, 255, 255, 0.05)',
                          borderRadius: '4px'
                        }}
                      >
                        {action}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Status */}
                <div style={{ textAlign: 'center' }}>
                  <CheckCircle2 size={24} style={{ color: '#4ade80', margin: '0 auto 0.25rem' }} />
                  <div style={{ fontSize: '0.75rem', color: '#4ade80' }}>
                    Plan Ready
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Insurance Coverage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          style={{
            background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(20, 184, 166, 0.1))',
            borderRadius: '12px',
            padding: '1.5rem',
            marginBottom: '1.5rem'
          }}
        >
          <h3 style={{ color: '#4ade80', marginBottom: '1rem', fontSize: '1.1rem' }}>
            Comprehensive Insurance Coverage
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
            {insurance.map((item, index) => (
              <motion.div
                key={item.type}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                style={{
                  textAlign: 'center',
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '8px'
                }}
              >
                <Shield size={24} style={{ color: '#4ade80', margin: '0 auto 0.5rem' }} />
                <div style={{ fontSize: '0.85rem', color: '#e2e8f0', marginBottom: '0.25rem' }}>
                  {item.type}
                </div>
                <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#4ade80' }}>
                  {item.coverage}
                </div>
                <div style={{ fontSize: '0.7rem', color: '#64748b' }}>
                  {item.provider}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Business Continuity Metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem'
          }}
        >
          <div style={{
            textAlign: 'center',
            padding: '1rem',
            background: 'rgba(147, 51, 234, 0.1)',
            borderRadius: '8px'
          }}>
            <Lock size={20} style={{ color: '#c084fc', margin: '0 auto 0.5rem' }} />
            <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#c084fc' }}>100%</div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Scenarios Covered</div>
          </div>
          <div style={{
            textAlign: 'center',
            padding: '1rem',
            background: 'rgba(251, 191, 36, 0.1)',
            borderRadius: '8px'
          }}>
            <Eye size={20} style={{ color: '#fbbf24', margin: '0 auto 0.5rem' }} />
            <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#fbbf24' }}>24/7</div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Monitoring</div>
          </div>
          <div style={{
            textAlign: 'center',
            padding: '1rem',
            background: 'rgba(59, 130, 246, 0.1)',
            borderRadius: '8px'
          }}>
            <Server size={20} style={{ color: '#60a5fa', margin: '0 auto 0.5rem' }} />
            <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#60a5fa' }}>3</div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Backup Sites</div>
          </div>
          <div style={{
            textAlign: 'center',
            padding: '1rem',
            background: 'rgba(34, 197, 94, 0.1)',
            borderRadius: '8px'
          }}>
            <AlertCircle size={20} style={{ color: '#4ade80', margin: '0 auto 0.5rem' }} />
            <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#4ade80' }}>$90M</div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Total Coverage</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}