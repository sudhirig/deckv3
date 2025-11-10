import { motion } from 'framer-motion'
import { 
  Lock, 
  Unlock,
  ShieldCheck, 
  Scale, 
  LineChart, 
  Building2, 
  Globe2,
  TrendingUp,
  ArrowDown,
  Zap,
  Target,
  Users,
  DollarSign,
  BarChart3,
  PieChart,
  Wallet,
  Bot,
  Rocket,
  Gem,
  Trophy,
  Circle,
  Clipboard,
  XCircle
} from 'lucide-react'

const iconMap = {
  lock: Lock,
  unlock: Unlock,
  shield: ShieldCheck,
  scale: Scale,
  chart: LineChart,
  building: Building2,
  globe: Globe2,
  trending: TrendingUp,
  arrowDown: ArrowDown,
  zap: Zap,
  target: Target,
  users: Users,
  dollar: DollarSign,
  dollarSign: DollarSign,
  barChart: BarChart3,
  pieChart: PieChart,
  wallet: Wallet,
  bot: Bot,
  robot: Bot,
  rocket: Rocket,
  gem: Gem,
  diamond: Gem,
  trophy: Trophy,
  circle: Circle,
  clipboard: Clipboard,
  xCircle: XCircle
}

export default function Icon({ 
  type, 
  size = 48, 
  gradient = 'from-teal-400 to-green-400',
  variant = 'badge',
  strokeColor = null,
  animate = true,
  delay = 0,
  className = ''
}) {
  const IconComponent = iconMap[type] || Lock

  // Gradient to SVG URL mapping
  const gradients = {
    'from-teal-400 to-green-400': 'url(#gradient-teal)',
    'from-blue-400 to-cyan-400': 'url(#gradient-blue)',
    'from-purple-400 to-pink-400': 'url(#gradient-purple)',
    'from-orange-400 to-amber-400': 'url(#gradient-orange)',
    'from-yellow-400 to-orange-400': 'url(#gradient-yellow)',
    'from-red-400 to-pink-400': 'url(#gradient-red)',
    'from-green-400 to-emerald-400': 'url(#gradient-green)'
  }

  // Gradient to color mapping (used for both inline and badge variants)
  const colors = {
    'from-teal-400 to-green-400': '#2dd4bf',
    'from-blue-400 to-cyan-400': '#60a5fa',
    'from-purple-400 to-pink-400': '#d8b4fe',
    'from-orange-400 to-amber-400': '#fb923c',
    'from-yellow-400 to-orange-400': '#fbbf24',
    'from-red-400 to-pink-400': '#fda4af',
    'from-green-400 to-emerald-400': '#4ade80'
  }

  const iconColor = strokeColor || colors[gradient] || colors['from-teal-400 to-green-400']

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: {
        delay,
        duration: 0.6,
        type: 'spring',
        stiffness: 200
      }
    }
  }

  // Inline variant - bare icon with color
  if (variant === 'inline') {
    return (
      <IconComponent 
        size={size} 
        color={iconColor}
        strokeWidth={2}
        className={className}
        style={{
          display: 'inline-block',
          verticalAlign: 'middle',
          flexShrink: 0
        }}
      />
    )
  }

  // Badge variant - gradient with padding
  return (
    <>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="gradient-teal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#2dd4bf', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#22c55e', stopOpacity: 1 }} />
          </linearGradient>
          
          <linearGradient id="gradient-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#60a5fa', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#22d3ee', stopOpacity: 1 }} />
          </linearGradient>
          
          <linearGradient id="gradient-purple" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#c084fc', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#f472b6', stopOpacity: 1 }} />
          </linearGradient>
          
          <linearGradient id="gradient-orange" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#fb923c', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#fbbf24', stopOpacity: 1 }} />
          </linearGradient>
          
          <linearGradient id="gradient-yellow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#fbbf24', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#fb923c', stopOpacity: 1 }} />
          </linearGradient>
          
          <linearGradient id="gradient-red" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#f87171', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#f472b6', stopOpacity: 1 }} />
          </linearGradient>
          
          <linearGradient id="gradient-green" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#4ade80', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>

      <motion.div
        initial={animate ? 'hidden' : 'visible'}
        animate="visible"
        variants={iconVariants}
        className={className}
        style={{
          display: 'inline-flex',
          padding: '1rem',
          borderRadius: '16px',
          background: `linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(34, 197, 94, 0.05))`,
          border: '1px solid rgba(20, 184, 166, 0.2)',
          boxShadow: '0 8px 32px rgba(20, 184, 166, 0.15)',
          backdropFilter: 'blur(4px)'
        }}
      >
        <IconComponent 
          size={size} 
          color={iconColor}
          strokeWidth={2}
          style={{
            filter: `drop-shadow(0 2px 8px ${iconColor}40)`
          }}
        />
      </motion.div>
    </>
  )
}
