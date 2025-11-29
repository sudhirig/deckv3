import React from 'react'
import { motion } from 'framer-motion'
import { AspectFrame } from '../../components/StandardLayouts'
import { 
  TrendingUp, 
  Globe,
  Rocket,
  DollarSign,
  Wallet,
  Check
} from 'lucide-react'

/**
 * SlideAlternativesShowcase - GIFT City Alternative Investments
 * Clean, impactful design with 4 key opportunities
 */
const SlideAlternativesShowcase = () => {
  const funds = [
    {
      icon: TrendingUp,
      category: 'PRIVATE EQUITY',
      name: 'India Growth PE Fund',
      irr: '25%+',
      tenor: '5-7 years',
      color: '#14B8A6',
      highlight: 'Via Vora Ventures'
    },
    {
      icon: Globe,
      category: 'FEEDER FUND',
      name: 'HDFC India Equity',
      irr: '18-22%',
      tenor: '3-5 years',
      color: '#8B5CF6',
      highlight: 'Blue-chip exposure'
    },
    {
      icon: Rocket,
      category: 'VENTURE CAPITAL',
      name: 'India Startup Fund',
      irr: '40%+',
      tenor: '7-10 years',
      color: '#F59E0B',
      highlight: 'Early-stage tech'
    },
    {
      icon: DollarSign,
      category: 'PRIVATE CREDIT',
      name: 'Performing Credit',
      irr: '14-16%',
      tenor: '2-4 years',
      color: '#EC4899',
      highlight: 'Senior secured'
    }
  ]

  return (
    <AspectFrame>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #0a0f1b 0%, #0f172a 50%, #1e293b 100%)',
        display: 'flex',
        flexDirection: 'column',
        padding: '2.5rem 3.5rem',
        fontFamily: 'Inter, -apple-system, sans-serif',
        overflow: 'hidden'
      }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '2rem' }}
        >
          <div style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(139, 92, 246, 0.15)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            borderRadius: '20px',
            padding: '0.4rem 1rem',
            marginBottom: '1rem'
          }}>
            <Wallet size={16} color="#8B5CF6" />
            <span style={{ color: '#8B5CF6', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.05em' }}>
              ARIA WEALTH • GIFT CITY
            </span>
          </div>
          
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            color: '#FFFFFF',
            marginBottom: '0.5rem',
            letterSpacing: '-0.02em'
          }}>
            CURATED ALTERNATIVES
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#94A3B8' }}>
            AI-screened opportunities delivering <span style={{ color: '#10B981', fontWeight: '700' }}>15-40% IRR</span> in USD
          </p>
        </motion.div>

        {/* Fund Cards - 4 cards in a row */}
        <div style={{ 
          flex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem',
          alignItems: 'stretch'
        }}>
          {funds.map((fund, i) => {
            const Icon = fund.icon
            return (
              <motion.div
                key={fund.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                style={{
                  background: 'rgba(30, 41, 59, 0.6)',
                  borderRadius: '16px',
                  padding: '1.75rem',
                  border: `2px solid ${fund.color}30`,
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Icon */}
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  background: `${fund.color}20`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}>
                  <Icon size={28} color={fund.color} />
                </div>

                {/* Category */}
                <p style={{ 
                  fontSize: '0.8rem', 
                  color: fund.color, 
                  fontWeight: '700', 
                  margin: '0 0 0.5rem 0', 
                  letterSpacing: '0.1em' 
                }}>
                  {fund.category}
                </p>

                {/* Name */}
                <h3 style={{ 
                  fontSize: '1.35rem', 
                  fontWeight: '700', 
                  color: '#FFFFFF', 
                  margin: '0 0 0.75rem 0',
                  lineHeight: '1.2'
                }}>
                  {fund.name}
                </h3>

                {/* Highlight */}
                <p style={{ 
                  fontSize: '0.95rem', 
                  color: '#94A3B8', 
                  margin: '0 0 1.5rem 0',
                  flex: 1
                }}>
                  {fund.highlight}
                </p>

                {/* IRR - Big number */}
                <div style={{ 
                  padding: '1rem',
                  background: `${fund.color}15`,
                  borderRadius: '12px',
                  marginBottom: '1rem'
                }}>
                  <p style={{ 
                    fontSize: '2.25rem', 
                    fontWeight: '800', 
                    color: '#10B981', 
                    margin: 0,
                    lineHeight: 1
                  }}>
                    {fund.irr}
                  </p>
                  <p style={{ fontSize: '0.85rem', color: '#64748B', margin: '0.25rem 0 0 0' }}>
                    Target IRR (USD)
                  </p>
                </div>

                {/* Tenor & Minimum */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#64748B' }}>Tenor</span>
                    <p style={{ fontSize: '1rem', fontWeight: '600', color: '#E2E8F0', margin: 0 }}>{fund.tenor}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '0.75rem', color: '#64748B' }}>Minimum</span>
                    <p style={{ fontSize: '1rem', fontWeight: '700', color: '#E2E8F0', margin: 0 }}>$75K</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Bar - Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: '2rem',
            padding: '1.25rem 2rem',
            background: 'linear-gradient(90deg, rgba(20, 184, 166, 0.15), rgba(139, 92, 246, 0.1))',
            borderRadius: '14px',
            border: '1px solid rgba(20, 184, 166, 0.3)',
            display: 'flex',
            justifyContent: 'center',
            gap: '4rem'
          }}
        >
          {[
            { title: '0% Capital Gains', sub: 'No CGT on GIFT City' },
            { title: 'USD Returns', sub: 'No currency risk' },
            { title: 'Free Repatriation', sub: 'Instant movement' },
            { title: '+300bps Alpha', sub: 'Tax advantage' }
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Check size={20} color="#14B8A6" strokeWidth={3} />
              <div>
                <p style={{ fontSize: '1rem', fontWeight: '700', color: '#FFFFFF', margin: 0 }}>{item.title}</p>
                <p style={{ fontSize: '0.8rem', color: '#94A3B8', margin: 0 }}>{item.sub}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </AspectFrame>
  )
}

export default SlideAlternativesShowcase
