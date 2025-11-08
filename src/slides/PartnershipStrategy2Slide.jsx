import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import GradientText from '../components/GradientText'
import { MapPin, Globe, TrendingUp, Shield, Building, Users } from 'lucide-react'
import './SlideStyles.css'

export default function PartnershipStrategy2Slide() {
  const giftCityAdvantages = [
    {
      category: 'Tax Benefits',
      icon: TrendingUp,
      color: '#4ade80',
      benefits: [
        '0% capital gains tax',
        'No STT on transactions',
        '10-year tax holiday',
        'No GST on services'
      ]
    },
    {
      category: 'Regulatory',
      icon: Shield,
      color: '#60a5fa',
      benefits: [
        'IFSCA unified regulation',
        'Fast-track licensing',
        'Sandbox environment',
        'English common law'
      ]
    },
    {
      category: 'Market Access',
      icon: Globe,
      color: '#fbbf24',
      benefits: [
        'Direct US market access',
        '24-hour trading',
        'Multi-currency operations',
        'International arbitration'
      ]
    },
    {
      category: 'Infrastructure',
      icon: Building,
      color: '#c084fc',
      benefits: [
        'World-class facilities',
        'Direct connectivity',
        'Talent availability',
        'Government support'
      ]
    }
  ]

  const globalExpansion = [
    { region: 'India', status: 'Live', clients: '2,500+', aum: '$5B' },
    { region: 'Singapore', status: 'Q2 2025', clients: '500 (projected)', aum: '$2B' },
    { region: 'Dubai', status: 'Q3 2025', clients: '300 (projected)', aum: '$1.5B' },
    { region: 'London', status: 'Q4 2025', clients: '200 (projected)', aum: '$1B' },
    { region: 'New York', status: '2026', clients: '1000 (projected)', aum: '$10B' }
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
            <GradientText gradient="from-green-400 to-emerald-400">
              GIFT City: Our Global Gateway
            </GradientText>
          </h2>
          <p style={{ fontSize: '1rem', color: '#94a3b8', textAlign: 'center', marginBottom: '2rem' }}>
            India's international financial hub as our strategic advantage
          </p>
        </AnimatedText>

        {/* GIFT City Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.05), rgba(20, 184, 166, 0.05))',
            borderRadius: '12px',
            padding: '1.5rem',
            marginBottom: '2rem'
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1.5rem'
          }}>
            <MapPin size={24} style={{ color: '#4ade80' }} />
            <h3 style={{ color: '#4ade80', fontSize: '1.1rem' }}>
              GIFT City Strategic Advantages
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
            {giftCityAdvantages.map((advantage, index) => (
              <motion.div
                key={advantage.category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                style={{
                  background: `linear-gradient(135deg, ${advantage.color}15, transparent)`,
                  borderRadius: '8px',
                  padding: '1rem',
                  border: `1px solid ${advantage.color}33`
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.75rem'
                }}>
                  <advantage.icon size={18} style={{ color: advantage.color }} />
                  <h4 style={{ color: advantage.color, fontSize: '0.9rem' }}>
                    {advantage.category}
                  </h4>
                </div>
                {advantage.benefits.map((benefit, i) => (
                  <div
                    key={i}
                    style={{
                      fontSize: '0.75rem',
                      color: '#e2e8f0',
                      marginBottom: '0.25rem',
                      paddingLeft: '1rem',
                      position: 'relative'
                    }}
                  >
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      color: advantage.color
                    }}>•</span>
                    {benefit}
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Global Expansion Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{
            background: 'rgba(59, 130, 246, 0.05)',
            borderRadius: '12px',
            padding: '1.5rem',
            marginBottom: '2rem'
          }}
        >
          <h3 style={{ color: '#60a5fa', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
            Global Expansion Roadmap
          </h3>
          
          <div style={{ position: 'relative' }}>
            {/* Timeline Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
              style={{
                position: 'absolute',
                top: '35px',
                left: '5%',
                right: '5%',
                height: '3px',
                background: 'linear-gradient(90deg, #4ade80, #60a5fa, #fbbf24, #c084fc)',
                transformOrigin: 'left'
              }}
            />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.5rem' }}>
              {globalExpansion.map((location, index) => (
                <motion.div
                  key={location.region}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  style={{ textAlign: 'center' }}
                >
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: location.status === 'Live' ? '#4ade80' :
                               location.status.includes('2025') ? '#60a5fa' : '#c084fc',
                    margin: '0 auto 0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Globe size={24} style={{ color: '#0f172a' }} />
                  </div>
                  <div style={{ fontSize: '0.9rem', color: '#e2e8f0', fontWeight: '600' }}>
                    {location.region}
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: location.status === 'Live' ? '#4ade80' : '#60a5fa',
                    marginBottom: '0.25rem'
                  }}>
                    {location.status}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>
                    {location.clients}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#fbbf24', fontWeight: '600' }}>
                    {location.aum}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* India Opportunity */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{
            background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(236, 72, 153, 0.1))',
            borderRadius: '12px',
            padding: '1.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem'
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <Users size={24} style={{ color: '#fbbf24', margin: '0 auto 0.5rem' }} />
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fbbf24' }}>810K</div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>HNW Individuals in India</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <TrendingUp size={24} style={{ color: '#ec4899', margin: '0 auto 0.5rem' }} />
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ec4899' }}>16%</div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Annual Growth Rate</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Building size={24} style={{ color: '#c084fc', margin: '0 auto 0.5rem' }} />
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#c084fc' }}>$5.6T</div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Total Wealth by 2027</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Shield size={24} style={{ color: '#4ade80', margin: '0 auto 0.5rem' }} />
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4ade80' }}>1st</div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Mover Advantage</div>
          </div>
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
          style={{
            marginTop: '1.5rem',
            textAlign: 'center',
            padding: '1rem',
            background: 'linear-gradient(90deg, rgba(34, 197, 94, 0.1), rgba(20, 184, 166, 0.1))',
            borderRadius: '8px'
          }}
        >
          <p style={{ fontSize: '1.1rem', color: '#4ade80' }}>
            <strong>GIFT City headquarters</strong> enables us to serve <strong>global clients</strong> with 
            <strong> zero tax leakage</strong> and <strong>seamless cross-border operations</strong>
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}