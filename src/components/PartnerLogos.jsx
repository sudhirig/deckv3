import React from 'react'
import { motion } from 'framer-motion'

// Premium partner logo components with authentic styling

export const ZerodhaLogo = ({ size = 100 }) => (
  <svg viewBox="0 0 120 30" width={size} height={size * 0.25}>
    <defs>
      <linearGradient id="zerodhaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#387ED1" />
        <stop offset="100%" stopColor="#2563eb" />
      </linearGradient>
    </defs>
    <text x="0" y="22" fill="url(#zerodhaGrad)" fontSize="20" fontWeight="700" fontFamily="Inter, system-ui">
      zerodha
    </text>
  </svg>
)

export const SparkCapitalLogo = ({ size = 120 }) => (
  <svg viewBox="0 0 140 35" width={size} height={size * 0.25}>
    <defs>
      <linearGradient id="sparkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF6B35" />
        <stop offset="100%" stopColor="#F7931E" />
      </linearGradient>
    </defs>
    {/* Spark icon */}
    <polygon points="8,28 16,4 20,16 28,12 18,32 14,20" fill="url(#sparkGrad)" />
    <text x="35" y="24" fill="#ffffff" fontSize="18" fontWeight="600" fontFamily="Inter, system-ui">
      SPARK
    </text>
    <text x="35" y="32" fill="#94a3b8" fontSize="8" fontWeight="500" fontFamily="Inter, system-ui" letterSpacing="0.5">
      CAPITAL
    </text>
  </svg>
)

export const AmbitCapitalLogo = ({ size = 120 }) => (
  <svg viewBox="0 0 140 35" width={size} height={size * 0.25}>
    <defs>
      <linearGradient id="ambitGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#1E3A5F" />
        <stop offset="100%" stopColor="#2D5A87" />
      </linearGradient>
    </defs>
    {/* Ambit "A" mark */}
    <path d="M6,30 L18,5 L30,30 M10,22 L26,22" stroke="#3B82F6" strokeWidth="3" fill="none" />
    <text x="38" y="24" fill="#ffffff" fontSize="18" fontWeight="600" fontFamily="Inter, system-ui">
      AMBIT
    </text>
    <text x="38" y="32" fill="#94a3b8" fontSize="8" fontWeight="500" fontFamily="Inter, system-ui" letterSpacing="0.5">
      CAPITAL
    </text>
  </svg>
)

export const AscendumLogo = ({ size = 110 }) => (
  <svg viewBox="0 0 130 35" width={size} height={size * 0.27}>
    <defs>
      <linearGradient id="ascendumGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
    </defs>
    {/* Rising arrow mark */}
    <path d="M5,28 L15,8 L25,28 M10,20 L20,20" stroke="url(#ascendumGrad)" strokeWidth="2.5" fill="none" />
    <circle cx="15" cy="6" r="3" fill="url(#ascendumGrad)" />
    <text x="32" y="22" fill="#ffffff" fontSize="14" fontWeight="600" fontFamily="Inter, system-ui">
      ASCENDUM
    </text>
    <text x="32" y="30" fill="#94a3b8" fontSize="7" fontWeight="500" fontFamily="Inter, system-ui" letterSpacing="0.3">
      KPS PARTNERS
    </text>
  </svg>
)

export const ShareDealLogo = ({ size = 100 }) => (
  <svg viewBox="0 0 120 35" width={size} height={size * 0.29}>
    <defs>
      <linearGradient id="sharedealGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#A78BFA" />
      </linearGradient>
    </defs>
    {/* Handshake icon */}
    <path d="M4,18 Q10,10 20,18 Q30,10 36,18" stroke="url(#sharedealGrad)" strokeWidth="2.5" fill="none" />
    <text x="44" y="22" fill="#ffffff" fontSize="13" fontWeight="600" fontFamily="Inter, system-ui">
      SHAKEDEAL
    </text>
  </svg>
)

export const MahaREITLogo = ({ size = 120 }) => (
  <svg viewBox="0 0 150 40" width={size} height={size * 0.27}>
    <defs>
      <linearGradient id="mahareitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EF4444" />
        <stop offset="100%" stopColor="#DC2626" />
      </linearGradient>
    </defs>
    {/* Government building icon */}
    <rect x="8" y="20" width="24" height="15" fill="url(#mahareitGrad)" rx="1" />
    <polygon points="20,8 8,20 32,20" fill="url(#mahareitGrad)" />
    <rect x="12" y="24" width="4" height="8" fill="#0f172a" />
    <rect x="18" y="24" width="4" height="8" fill="#0f172a" />
    <rect x="24" y="24" width="4" height="8" fill="#0f172a" />
    <text x="42" y="24" fill="#ffffff" fontSize="15" fontWeight="700" fontFamily="Inter, system-ui">
      MahaREIT
    </text>
    <text x="42" y="34" fill="#fca5a5" fontSize="7" fontWeight="500" fontFamily="Inter, system-ui" letterSpacing="0.3">
      GOVT. OF MAHARASHTRA
    </text>
  </svg>
)

export const VoraVenturesLogo = ({ size = 110 }) => (
  <svg viewBox="0 0 130 35" width={size} height={size * 0.27}>
    <defs>
      <linearGradient id="voraGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FBBF24" />
        <stop offset="100%" stopColor="#F59E0B" />
      </linearGradient>
    </defs>
    {/* V mark */}
    <path d="M5,8 L18,28 L31,8" stroke="url(#voraGrad)" strokeWidth="4" fill="none" strokeLinecap="round" />
    <text x="40" y="22" fill="#ffffff" fontSize="13" fontWeight="600" fontFamily="Inter, system-ui">
      VORA
    </text>
    <text x="40" y="30" fill="#94a3b8" fontSize="7" fontWeight="500" fontFamily="Inter, system-ui" letterSpacing="0.3">
      VENTURES
    </text>
  </svg>
)

// Partner logo with hover effect wrapper
export const PartnerLogoCard = ({ children, name, description, color, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ scale: 1.05, y: -5 }}
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.25rem 1rem',
      background: 'rgba(255, 255, 255, 0.03)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      borderRadius: '12px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      minHeight: '90px'
    }}
  >
    <div style={{ marginBottom: '0.5rem' }}>
      {children}
    </div>
    {description && (
      <div style={{ 
        fontSize: '0.65rem', 
        color: '#64748b',
        textAlign: 'center',
        marginTop: '0.25rem'
      }}>
        {description}
      </div>
    )}
  </motion.div>
)

export default {
  ZerodhaLogo,
  SparkCapitalLogo,
  AmbitCapitalLogo,
  AscendumLogo,
  ShareDealLogo,
  MahaREITLogo,
  VoraVenturesLogo,
  PartnerLogoCard
}
