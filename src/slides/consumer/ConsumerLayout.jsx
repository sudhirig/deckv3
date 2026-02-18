import React from 'react';
import { motion } from 'framer-motion';

// Consumer deck layout - Light mode, Arta-style elegant design
export const ConsumerLayout = ({ children, className = '' }) => {
  return (
    <div 
      className={`consumer-slide ${className}`}
      style={{
        width: '100%',
        height: '100vh',
        background: 'linear-gradient(180deg, #FDFBF7 0%, #F8F6F1 100%)',
        color: '#1A1A1A',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {children}
    </div>
  );
};

// Section container for multi-section pages
export const Section = ({ children, className = '', style = {} }) => (
  <div 
    className={`consumer-section ${className}`}
    style={{
      padding: '2rem 4rem',
      ...style
    }}
  >
    {children}
  </div>
);

// Elegant headline typography (serif style)
export const Headline = ({ children, size = 'large', className = '' }) => {
  const sizes = {
    hero: { fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1 },
    large: { fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.2 },
    medium: { fontSize: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: 1.3 },
    small: { fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)', lineHeight: 1.4 }
  };

  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={className}
      style={{
        ...sizes[size],
        fontWeight: 400,
        fontFamily: "'Playfair Display', 'Georgia', serif",
        color: '#1A1A1A',
        margin: 0,
        letterSpacing: '-0.02em'
      }}
    >
      {children}
    </motion.h1>
  );
};

// Body text
export const BodyText = ({ children, className = '', style = {} }) => (
  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className={className}
    style={{
      fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
      lineHeight: 1.7,
      color: '#4A4A4A',
      fontWeight: 400,
      margin: 0,
      ...style
    }}
  >
    {children}
  </motion.p>
);

// Italic quote text
export const QuoteText = ({ children, className = '' }) => (
  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.3 }}
    className={className}
    style={{
      fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
      lineHeight: 1.5,
      color: '#8B7355',
      fontStyle: 'italic',
      fontFamily: "'Playfair Display', 'Georgia', serif",
      margin: 0
    }}
  >
    {children}
  </motion.p>
);

// Card component with subtle shadow
export const Card = ({ children, className = '', style = {}, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className={className}
    style={{
      background: '#FFFFFF',
      borderRadius: '12px',
      padding: '1.5rem',
      boxShadow: '0 2px 20px rgba(0, 0, 0, 0.04)',
      border: '1px solid rgba(0, 0, 0, 0.04)',
      ...style
    }}
  >
    {children}
  </motion.div>
);

// Pillar card (for three pillars section)
export const PillarCard = ({ icon, title, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    style={{
      textAlign: 'center',
      padding: '2rem 1.5rem',
      flex: 1
    }}
  >
    <div style={{
      fontSize: '2.5rem',
      marginBottom: '1rem',
      color: '#C4A052'
    }}>
      {icon}
    </div>
    <h3 style={{
      fontSize: '1.25rem',
      fontWeight: 500,
      color: '#1A1A1A',
      marginBottom: '0.75rem',
      fontFamily: "'Playfair Display', 'Georgia', serif"
    }}>
      {title}
    </h3>
    <p style={{
      fontSize: '0.9rem',
      color: '#6B6B6B',
      lineHeight: 1.6
    }}>
      {description}
    </p>
  </motion.div>
);

// Feature card with icon
export const FeatureCard = ({ icon, title, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, delay }}
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '1rem'
    }}
  >
    <div style={{
      width: '48px',
      height: '48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '0.75rem',
      fontSize: '1.5rem',
      color: '#8B7355'
    }}>
      {icon}
    </div>
    <h4 style={{
      fontSize: '0.95rem',
      fontWeight: 600,
      color: '#1A1A1A',
      marginBottom: '0.5rem'
    }}>
      {title}
    </h4>
    {description && (
      <p style={{
        fontSize: '0.8rem',
        color: '#6B6B6B',
        lineHeight: 1.5
      }}>
        {description}
      </p>
    )}
  </motion.div>
);

// Pricing card
export const PricingCard = ({ 
  tier, 
  price, 
  period = '/month', 
  description, 
  features = [], 
  highlighted = false,
  delay = 0 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    style={{
      background: highlighted ? '#1A1A1A' : '#FFFFFF',
      color: highlighted ? '#FFFFFF' : '#1A1A1A',
      borderRadius: '16px',
      padding: '2rem 1.5rem',
      textAlign: 'center',
      border: highlighted ? 'none' : '1px solid #E5E5E5',
      flex: 1,
      minWidth: '200px'
    }}
  >
    <h3 style={{
      fontSize: '1.1rem',
      fontWeight: 500,
      marginBottom: '1rem',
      color: highlighted ? '#FFFFFF' : '#1A1A1A'
    }}>
      {tier}
    </h3>
    <div style={{
      fontSize: '2rem',
      fontWeight: 600,
      marginBottom: '0.5rem'
    }}>
      {price}
      <span style={{ fontSize: '0.9rem', fontWeight: 400 }}>{period}</span>
    </div>
    <p style={{
      fontSize: '0.85rem',
      color: highlighted ? 'rgba(255,255,255,0.7)' : '#6B6B6B',
      marginBottom: '1.5rem',
      lineHeight: 1.5
    }}>
      {description}
    </p>
    {features.length > 0 && (
      <ul style={{
        listStyle: 'none',
        padding: 0,
        margin: 0,
        textAlign: 'left'
      }}>
        {features.map((feature, i) => (
          <li key={i} style={{
            fontSize: '0.85rem',
            color: highlighted ? 'rgba(255,255,255,0.8)' : '#4A4A4A',
            marginBottom: '0.5rem',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.5rem'
          }}>
            <span style={{ color: '#14B8A6' }}>✓</span>
            {feature}
          </li>
        ))}
      </ul>
    )}
  </motion.div>
);

// CTA Button
export const CTAButton = ({ 
  children, 
  variant = 'primary', 
  onClick,
  style = {} 
}) => {
  const variants = {
    primary: {
      background: '#1A1A1A',
      color: '#FFFFFF',
      border: 'none'
    },
    secondary: {
      background: 'transparent',
      color: '#1A1A1A',
      border: '1px solid #1A1A1A'
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      style={{
        ...variants[variant],
        padding: '1rem 2rem',
        borderRadius: '8px',
        fontSize: '0.95rem',
        fontWeight: 500,
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        ...style
      }}
    >
      {children}
    </motion.button>
  );
};

// Badge/Tag component
export const Badge = ({ children, color = '#14B8A6' }) => (
  <span style={{
    display: 'inline-block',
    padding: '0.25rem 0.75rem',
    background: `${color}15`,
    color: color,
    borderRadius: '100px',
    fontSize: '0.75rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  }}>
    {children}
  </span>
);

// Trust badge (for regulation logos)
export const TrustBadge = ({ logo, label, sublabel }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '1rem'
  }}>
    <div style={{
      fontSize: '1.5rem',
      color: '#6B6B6B'
    }}>
      {logo}
    </div>
    <div style={{
      fontSize: '0.8rem',
      fontWeight: 600,
      color: '#1A1A1A'
    }}>
      {label}
    </div>
    {sublabel && (
      <div style={{
        fontSize: '0.7rem',
        color: '#6B6B6B'
      }}>
        {sublabel}
      </div>
    )}
  </div>
);

// Testimonial card
export const TestimonialCard = ({ quote, author, role, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    style={{
      background: '#FFFFFF',
      borderRadius: '12px',
      padding: '1.5rem',
      boxShadow: '0 2px 20px rgba(0, 0, 0, 0.04)',
      borderLeft: '3px solid #C4A052'
    }}
  >
    <p style={{
      fontSize: '0.95rem',
      color: '#4A4A4A',
      lineHeight: 1.6,
      fontStyle: 'italic',
      marginBottom: '1rem'
    }}>
      "{quote}"
    </p>
    <div>
      <div style={{
        fontSize: '0.9rem',
        fontWeight: 600,
        color: '#1A1A1A'
      }}>
        — {author}
      </div>
      {role && (
        <div style={{
          fontSize: '0.8rem',
          color: '#6B6B6B'
        }}>
          {role}
        </div>
      )}
    </div>
  </motion.div>
);

// Team member card
export const TeamCard = ({ name, role, image, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    style={{
      textAlign: 'center'
    }}
  >
    <div style={{
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      background: '#E5E5E5',
      margin: '0 auto 0.75rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '2rem',
      color: '#6B6B6B',
      overflow: 'hidden'
    }}>
      {image || '👤'}
    </div>
    <div style={{
      fontSize: '0.9rem',
      fontWeight: 600,
      color: '#1A1A1A'
    }}>
      {name}
    </div>
    <div style={{
      fontSize: '0.8rem',
      color: '#6B6B6B'
    }}>
      {role}
    </div>
  </motion.div>
);

export default ConsumerLayout;
