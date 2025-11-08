import { motion } from 'framer-motion'
import { User, Briefcase, Target, TrendingUp, DollarSign, Globe, Award, Users } from 'lucide-react'
import GradientText from './GradientText'

const PersonaCard = ({ 
  persona,
  index = 0,
  variant = 'default', // default, compact, detailed
  animated = true
}) => {
  const getIconForAttribute = (attribute) => {
    const iconMap = {
      age: User,
      occupation: Briefcase,
      goal: Target,
      portfolio: DollarSign,
      experience: Award,
      location: Globe,
      network: Users,
      growth: TrendingUp
    }
    return iconMap[attribute] || Target
  }

  const getGradientForType = (type) => {
    const gradients = {
      'tech-founder': 'from-purple-400 to-pink-400',
      'traditional': 'from-blue-400 to-cyan-400',
      'young-professional': 'from-green-400 to-emerald-400',
      'family-office': 'from-yellow-400 to-orange-400',
      'crypto-native': 'from-red-400 to-pink-400',
      'default': 'from-teal-400 to-cyan-400'
    }
    return gradients[type] || gradients.default
  }

  if (variant === 'compact') {
    return (
      <motion.div
        initial={{ opacity: 0, x: animated ? -20 : 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.15 }}
        whileHover={{ scale: 1.02 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '1rem',
          background: 'rgba(20, 184, 166, 0.1)',
          borderRadius: '12px',
          border: '1px solid rgba(20, 184, 166, 0.2)',
          gap: '1rem'
        }}
      >
        {/* Avatar */}
        <div style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${getGradientForType(persona.type).split(' ')[1]}, ${getGradientForType(persona.type).split(' ')[3]})`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#0f172a'
        }}>
          {persona.initials || persona.name?.split(' ').map(n => n[0]).join('') || 'U'}
        </div>
        
        {/* Info */}
        <div style={{ flex: 1 }}>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem', color: '#e2e8f0' }}>
            {persona.name}
          </h4>
          <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '0.25rem' }}>
            {persona.title}
          </p>
          <p style={{ fontSize: '0.85rem', color: '#64748b' }}>
            {persona.shortDescription}
          </p>
        </div>
      </motion.div>
    )
  }

  if (variant === 'detailed') {
    return (
      <motion.div
        initial={{ opacity: 0, y: animated ? 30 : 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2 }}
        style={{
          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(6, 182, 212, 0.15))',
          borderRadius: '16px',
          padding: '2rem',
          border: '1px solid rgba(20, 184, 166, 0.3)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${getGradientForType(persona.type).split(' ')[1]}22, transparent)`,
          filter: 'blur(40px)'
        }} />

        {/* Header */}
        <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem', position: 'relative' }}>
          {/* Large Avatar */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '16px',
              background: `linear-gradient(135deg, ${getGradientForType(persona.type).split(' ')[1]}, ${getGradientForType(persona.type).split(' ')[3]})`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#0f172a',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
            }}
          >
            {persona.initials || persona.name?.split(' ').map(n => n[0]).join('') || 'U'}
          </motion.div>

          {/* Name and Title */}
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>
              <GradientText gradient={getGradientForType(persona.type)}>
                {persona.name}
              </GradientText>
            </h3>
            <p style={{ fontSize: '1.1rem', color: '#94a3b8', marginBottom: '0.5rem' }}>
              {persona.title}
            </p>
            <p style={{ fontSize: '0.95rem', color: '#64748b' }}>
              {persona.location} • {persona.age} years old
            </p>
          </div>
        </div>

        {/* Story/Quote */}
        {persona.quote && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2 + 0.3 }}
            style={{
              padding: '1.5rem',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              marginBottom: '1.5rem',
              borderLeft: `3px solid ${getGradientForType(persona.type).split(' ')[1]}`
            }}
          >
            <p style={{ 
              fontSize: '1.1rem', 
              fontStyle: 'italic', 
              color: '#e2e8f0',
              lineHeight: '1.6'
            }}>
              "{persona.quote}"
            </p>
          </motion.div>
        )}

        {/* Key Stats Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(2, 1fr)', 
          gap: '1rem',
          marginBottom: '1.5rem'
        }}>
          {persona.stats?.map((stat, i) => {
            const Icon = getIconForAttribute(stat.type)
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 + 0.4 + i * 0.1 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '8px'
                }}
              >
                <Icon size={20} style={{ color: '#14b8a6' }} />
                <div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
                    {stat.label}
                  </div>
                  <div style={{ fontSize: '1rem', color: '#e2e8f0', fontWeight: '600' }}>
                    {stat.value}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Pain Points & Goals */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
          {/* Pain Points */}
          {persona.painPoints && (
            <div>
              <h4 style={{ 
                color: '#f87171', 
                fontSize: '1rem', 
                marginBottom: '0.75rem',
                fontWeight: '600'
              }}>
                Pain Points
              </h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {persona.painPoints.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 + 0.5 + i * 0.05 }}
                    style={{ 
                      marginBottom: '0.5rem',
                      fontSize: '0.9rem',
                      color: '#94a3b8',
                      display: 'flex',
                      alignItems: 'flex-start'
                    }}
                  >
                    <span style={{ color: '#f87171', marginRight: '0.5rem' }}>•</span>
                    {point}
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          {/* Goals */}
          {persona.goals && (
            <div>
              <h4 style={{ 
                color: '#4ade80', 
                fontSize: '1rem', 
                marginBottom: '0.75rem',
                fontWeight: '600'
              }}>
                Goals
              </h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {persona.goals.map((goal, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 + 0.5 + i * 0.05 }}
                    style={{ 
                      marginBottom: '0.5rem',
                      fontSize: '0.9rem',
                      color: '#94a3b8',
                      display: 'flex',
                      alignItems: 'flex-start'
                    }}
                  >
                    <span style={{ color: '#4ade80', marginRight: '0.5rem' }}>✓</span>
                    {goal}
                  </motion.li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Value Proposition */}
        {persona.valueProposition && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 + 0.6 }}
            style={{
              marginTop: '1.5rem',
              padding: '1rem',
              background: `linear-gradient(135deg, ${getGradientForType(persona.type).split(' ')[1]}22, transparent)`,
              borderRadius: '8px',
              textAlign: 'center'
            }}
          >
            <p style={{ 
              fontSize: '1rem', 
              color: '#14b8a6',
              fontWeight: '600'
            }}>
              How We Help: {persona.valueProposition}
            </p>
          </motion.div>
        )}
      </motion.div>
    )
  }

  // Default variant
  return (
    <motion.div
      initial={{ opacity: 0, y: animated ? 20 : 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 }}
      whileHover={{ scale: 1.02 }}
      style={{
        padding: '1.5rem',
        background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(6, 182, 212, 0.05))',
        borderRadius: '12px',
        border: '1px solid rgba(20, 184, 166, 0.2)',
        position: 'relative'
      }}
    >
      {/* Header with Avatar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <div style={{
          width: '80px',
          height: '80px',
          borderRadius: '12px',
          background: `linear-gradient(135deg, ${getGradientForType(persona.type).split(' ')[1]}, ${getGradientForType(persona.type).split(' ')[3]})`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#0f172a'
        }}>
          {persona.initials || persona.name?.split(' ').map(n => n[0]).join('') || 'U'}
        </div>
        
        <div style={{ flex: 1 }}>
          <h4 style={{ fontSize: '1.3rem', marginBottom: '0.25rem' }}>
            <GradientText gradient={getGradientForType(persona.type)}>
              {persona.name}
            </GradientText>
          </h4>
          <p style={{ fontSize: '1rem', color: '#94a3b8', marginBottom: '0.25rem' }}>
            {persona.title}
          </p>
          {persona.tags && (
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {persona.tags.map(tag => (
                <span
                  key={tag}
                  style={{
                    fontSize: '0.75rem',
                    padding: '0.25rem 0.5rem',
                    background: 'rgba(20, 184, 166, 0.2)',
                    borderRadius: '4px',
                    color: '#5eead4'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Description */}
      <p style={{ fontSize: '0.95rem', color: '#e2e8f0', lineHeight: '1.6', marginBottom: '1rem' }}>
        {persona.description}
      </p>

      {/* Key Metrics */}
      {persona.metrics && (
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'space-around' }}>
          {persona.metrics.map(metric => (
            <div key={metric.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#14b8a6' }}>
                {metric.value}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  )
}

export default PersonaCard