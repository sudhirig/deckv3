import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import GradientText from '../components/GradientText'
import { Lock, Shield, Key, Eye, Server, AlertTriangle, CheckCircle, FileText } from 'lucide-react'
import './SlideStyles.css'

export default function TechArchitecture3Slide() {
  const securityLayers = [
    {
      layer: 'Data Security',
      icon: Lock,
      measures: [
        'AES-256 encryption at rest',
        'TLS 1.3 in transit',
        'Hardware Security Modules (HSM)',
        'Zero-knowledge architecture'
      ],
      status: 'active'
    },
    {
      layer: 'Access Control',
      icon: Key,
      measures: [
        'Multi-factor authentication',
        'Biometric verification',
        'Role-based access control',
        'Zero Trust Network Access'
      ],
      status: 'active'
    },
    {
      layer: 'Monitoring',
      icon: Eye,
      measures: [
        '24/7 SOC monitoring',
        'AI anomaly detection',
        'Real-time threat intelligence',
        'Automated incident response'
      ],
      status: 'active'
    },
    {
      layer: 'Compliance',
      icon: FileText,
      measures: [
        'SOC 2 Type II certified',
        'ISO 27001 compliant',
        'GDPR/CCPA ready',
        'PCI DSS Level 1'
      ],
      status: 'certified'
    }
  ]

  const disasterRecovery = [
    { metric: 'RPO', value: '< 1 hour', description: 'Recovery Point Objective' },
    { metric: 'RTO', value: '< 4 hours', description: 'Recovery Time Objective' },
    { metric: 'Backups', value: '3 Regions', description: 'Geographic redundancy' },
    { metric: 'Testing', value: 'Monthly', description: 'DR drill frequency' }
  ]

  const privacyFeatures = [
    { feature: 'Data Minimization', description: 'Only collect necessary data' },
    { feature: 'Right to Deletion', description: 'Complete data purge on request' },
    { feature: 'Data Portability', description: 'Export all data in standard formats' },
    { feature: 'Consent Management', description: 'Granular privacy controls' }
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
            <GradientText gradient="from-red-400 to-orange-400">
              Technical Architecture: Security & Compliance
            </GradientText>
          </h2>
          <p style={{ fontSize: '1rem', color: '#94a3b8', textAlign: 'center', marginBottom: '2rem' }}>
            Bank-grade security with startup agility
          </p>
        </AnimatedText>

        {/* Security Layers */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
          {securityLayers.map((layer, index) => (
            <motion.div
              key={layer.layer}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.15 }}
              style={{
                background: layer.status === 'certified' ? 
                  'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(20, 184, 166, 0.1))' :
                  'linear-gradient(135deg, rgba(239, 68, 68, 0.05), rgba(251, 191, 36, 0.05))',
                borderRadius: '12px',
                padding: '1.5rem',
                border: layer.status === 'certified' ? 
                  '1px solid rgba(34, 197, 94, 0.3)' :
                  '1px solid rgba(239, 68, 68, 0.2)'
              }}
            >
              {/* Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1rem'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  background: layer.status === 'certified' ? '#4ade80' : '#ef4444',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <layer.icon size={20} style={{ color: '#0f172a' }} />
                </div>
                <div>
                  <h3 style={{ 
                    fontSize: '1rem', 
                    color: layer.status === 'certified' ? '#4ade80' : '#ef4444'
                  }}>
                    {layer.layer}
                  </h3>
                  <div style={{
                    fontSize: '0.7rem',
                    color: '#64748b',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}>
                    {layer.status === 'certified' ? (
                      <>
                        <CheckCircle size={12} style={{ color: '#4ade80' }} />
                        Certified
                      </>
                    ) : (
                      <>
                        <Shield size={12} style={{ color: '#fbbf24' }} />
                        Active
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Measures */}
              {layer.measures.map((measure, i) => (
                <div
                  key={i}
                  style={{
                    fontSize: '0.8rem',
                    color: '#94a3b8',
                    marginBottom: '0.5rem',
                    paddingLeft: '1.25rem',
                    position: 'relative'
                  }}
                >
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    color: layer.status === 'certified' ? '#4ade80' : '#fbbf24'
                  }}>✓</span>
                  {measure}
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Disaster Recovery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          style={{
            background: 'rgba(147, 51, 234, 0.05)',
            borderRadius: '12px',
            padding: '1.5rem',
            marginBottom: '1.5rem'
          }}
        >
          <h3 style={{ color: '#c084fc', marginBottom: '1rem', fontSize: '1.1rem' }}>
            Disaster Recovery & Business Continuity
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
            {disasterRecovery.map((item, index) => (
              <motion.div
                key={item.metric}
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
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#c084fc' }}>
                  {item.value}
                </div>
                <div style={{ fontSize: '0.9rem', color: '#e2e8f0', marginBottom: '0.25rem' }}>
                  {item.metric}
                </div>
                <div style={{ fontSize: '0.7rem', color: '#64748b' }}>
                  {item.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Privacy Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(6, 182, 212, 0.05))',
            borderRadius: '12px',
            padding: '1.5rem'
          }}
        >
          <h3 style={{ color: '#60a5fa', marginBottom: '1rem', fontSize: '1.1rem' }}>
            Privacy by Design
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
            {privacyFeatures.map((item, index) => (
              <div
                key={item.feature}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem'
                }}
              >
                <Eye size={16} style={{ color: '#60a5fa', marginTop: '0.125rem' }} />
                <div>
                  <div style={{ fontSize: '0.85rem', color: '#e2e8f0', marginBottom: '0.25rem' }}>
                    {item.feature}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{
            marginTop: '1.5rem',
            padding: '1rem',
            background: 'linear-gradient(90deg, rgba(34, 197, 94, 0.1), rgba(20, 184, 166, 0.1))',
            borderRadius: '8px',
            textAlign: 'center'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Shield size={24} style={{ color: '#4ade80' }} />
              <span style={{ fontSize: '1rem', color: '#4ade80', fontWeight: '600' }}>
                Zero Breaches
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Lock size={24} style={{ color: '#14b8a6' }} />
              <span style={{ fontSize: '1rem', color: '#14b8a6', fontWeight: '600' }}>
                100% Encrypted
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle size={24} style={{ color: '#60a5fa' }} />
              <span style={{ fontSize: '1rem', color: '#60a5fa', fontWeight: '600' }}>
                Audit Ready
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}