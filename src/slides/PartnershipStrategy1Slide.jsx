import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import GradientText from '../components/GradientText'
import { Handshake, Building2, Globe, Users, Zap, Shield } from 'lucide-react'
import './SlideStyles.css'

export default function PartnershipStrategy1Slide() {
  const partners = [
    {
      category: 'Technology Partners',
      icon: Zap,
      color: '#60a5fa',
      partners: [
        { name: 'OpenAI', role: 'AI/LLM Infrastructure', status: 'Active' },
        { name: 'Microsoft Azure', role: 'Cloud Computing', status: 'Active' },
        { name: 'Palantir', role: 'Data Analytics', status: 'In Progress' },
        { name: 'Snowflake', role: 'Data Warehouse', status: 'Active' }
      ]
    },
    {
      category: 'Financial Infrastructure',
      icon: Building2,
      color: '#4ade80',
      partners: [
        { name: 'Plaid', role: 'Account Aggregation', status: 'Active' },
        { name: 'Apex Clearing', role: 'Trade Execution', status: 'Active' },
        { name: 'Fireblocks', role: 'Crypto Custody', status: 'Active' },
        { name: 'Stripe', role: 'Payment Processing', status: 'Active' }
      ]
    },
    {
      category: 'Data Providers',
      icon: Globe,
      color: '#fbbf24',
      partners: [
        { name: 'Bloomberg', role: 'Market Data', status: 'Active' },
        { name: 'Refinitiv', role: 'Financial Data', status: 'Active' },
        { name: 'PitchBook', role: 'Private Market Data', status: 'In Progress' },
        { name: 'S&P Global', role: 'Risk Analytics', status: 'Active' }
      ]
    },
    {
      category: 'Distribution Partners',
      icon: Users,
      color: '#c084fc',
      partners: [
        { name: 'PWC', role: 'Enterprise Channel', status: 'In Progress' },
        { name: 'KPMG', role: 'Tax Advisory', status: 'Planning' },
        { name: 'WealthTech100', role: 'Industry Network', status: 'Active' },
        { name: 'YPO', role: 'Executive Network', status: 'Active' }
      ]
    }
  ]

  const partnershipValue = [
    { metric: 'Partner Network', value: '28+', label: 'Strategic Partners' },
    { metric: 'Integration Speed', value: '48hrs', label: 'Avg Onboarding' },
    { metric: 'API Coverage', value: '500+', label: 'Data Sources' },
    { metric: 'Revenue Share', value: '30%', label: 'Partner Revenue' }
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
            <GradientText gradient="from-blue-400 to-purple-400">
              Strategic Partnership Ecosystem
            </GradientText>
          </h2>
          <p style={{ fontSize: '1rem', color: '#94a3b8', textAlign: 'center', marginBottom: '2rem' }}>
            Building the infrastructure for wealth management at scale
          </p>
        </AnimatedText>

        {/* Partner Categories */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
          {partners.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + catIndex * 0.15 }}
              style={{
                background: `linear-gradient(135deg, ${category.color}15, transparent)`,
                borderRadius: '12px',
                padding: '1.25rem',
                border: `1px solid ${category.color}33`
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
                  background: `${category.color}22`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <category.icon size={20} style={{ color: category.color }} />
                </div>
                <h3 style={{ color: category.color, fontSize: '1rem' }}>
                  {category.category}
                </h3>
              </div>

              {/* Partners List */}
              {category.partners.map((partner, i) => (
                <div
                  key={partner.name}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.5rem 0.75rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '6px',
                    marginBottom: '0.5rem'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.85rem', color: '#e2e8f0', fontWeight: '500' }}>
                      {partner.name}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                      {partner.role}
                    </div>
                  </div>
                  <div style={{
                    padding: '0.125rem 0.5rem',
                    background: partner.status === 'Active' ? 'rgba(34, 197, 94, 0.2)' :
                              partner.status === 'In Progress' ? 'rgba(251, 191, 36, 0.2)' :
                              'rgba(147, 51, 234, 0.2)',
                    borderRadius: '4px',
                    fontSize: '0.7rem',
                    color: partner.status === 'Active' ? '#4ade80' :
                           partner.status === 'In Progress' ? '#fbbf24' : '#c084fc'
                  }}>
                    {partner.status}
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Partnership Metrics */}
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
          <h3 style={{ color: '#4ade80', marginBottom: '1rem', fontSize: '1.1rem', textAlign: 'center' }}>
            Partnership Impact
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
            {partnershipValue.map((item, index) => (
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
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4ade80' }}>
                  {item.value}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#e2e8f0', marginBottom: '0.25rem' }}>
                  {item.label}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                  {item.metric}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Strategic Value */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem'
          }}
        >
          <div style={{
            padding: '1rem',
            background: 'rgba(147, 51, 234, 0.1)',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <Handshake size={24} style={{ color: '#c084fc', margin: '0 auto 0.5rem' }} />
            <div style={{ fontSize: '0.85rem', color: '#e2e8f0' }}>Zero-Touch Integration</div>
            <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Seamless connectivity</div>
          </div>
          <div style={{
            padding: '1rem',
            background: 'rgba(59, 130, 246, 0.1)',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <Shield size={24} style={{ color: '#60a5fa', margin: '0 auto 0.5rem' }} />
            <div style={{ fontSize: '0.85rem', color: '#e2e8f0' }}>Enterprise Grade</div>
            <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Bank-level security</div>
          </div>
          <div style={{
            padding: '1rem',
            background: 'rgba(251, 191, 36, 0.1)',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <Globe size={24} style={{ color: '#fbbf24', margin: '0 auto 0.5rem' }} />
            <div style={{ fontSize: '0.85rem', color: '#e2e8f0' }}>Global Coverage</div>
            <div style={{ fontSize: '0.75rem', color: '#64748b' }}>150+ countries</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}