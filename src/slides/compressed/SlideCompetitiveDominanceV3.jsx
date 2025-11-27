import React from 'react'
import { motion } from 'framer-motion'
import { AspectFrame } from '../../components/StandardLayouts'
import { Check, X, Minus, Users, Building, Briefcase, TrendingUp, ArrowDown } from 'lucide-react'

/**
 * SlideCompetitiveDominanceV3 - World-Class UI/UX
 * Merges "Competitive Matrix" (Product) with "B2B2C Flywheel" (Business Moat)
 * + "Better Economics" (Metrics)
 */
const SlideCompetitiveDominanceV3 = () => {
  const features = [
    { name: 'AI-Powered Portfolio', arta: true, banks: false, aria: true },
    { name: 'India / GIFT City Access', arta: false, banks: false, aria: true },
    { name: 'Daily Tax Harvesting', arta: true, banks: false, aria: true },
    { name: 'B2B2C Distribution', arta: false, banks: true, aria: true },
    { name: '< $500 CAC', arta: false, banks: false, aria: true },
  ]

  const flywheel = [
    { name: 'Vora Ventures', detail: 'Strategic Partner', icon: Building, color: '#8b5cf6' },
    { name: 'Ascendum KPS', detail: 'Distribution Partner', icon: Briefcase, color: '#3b82f6' },
    { name: '1,000+ CPAs', detail: 'Channel Partners', icon: Users, color: '#10b981' },
    { name: '100k Clients', detail: 'HNW Access', icon: TrendingUp, color: '#f59e0b' }
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
        padding: '2rem 3rem',
        fontFamily: 'Inter, -apple-system, sans-serif',
        overflow: 'hidden'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            fontWeight: '800',
            color: '#FFFFFF',
            marginBottom: '0.5rem',
            letterSpacing: '-0.02em'
          }}>
            WHY ARIA WINS
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#94A3B8' }}>
            Product Superiority + Distribution Moat
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '3rem', flex: 1 }}>
          
          {/* Left: Product Matrix */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              background: 'rgba(30, 41, 59, 0.4)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              border: '1px solid rgba(100, 116, 139, 0.2)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <h3 style={{ color: '#14B8A6', fontSize: '1.1rem', fontWeight: '700', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Product Dominance
            </h3>
            
            {/* Table Header */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
              <div style={{ fontSize: '0.8rem', color: '#94A3B8', fontWeight: '700' }}>FEATURE</div>
              <div style={{ fontSize: '0.8rem', textAlign: 'center', color: '#94A3B8', fontWeight: '700' }}>ARTA</div>
              <div style={{ fontSize: '0.8rem', textAlign: 'center', color: '#94A3B8', fontWeight: '700' }}>BANKS</div>
              <div style={{ fontSize: '0.8rem', textAlign: 'center', color: '#14B8A6', fontWeight: '800' }}>ARIA</div>
            </div>

            {/* Rows */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', flex: 1 }}>
              {features.map((row, i) => (
                <div key={row.name} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', alignItems: 'center' }}>
                  <div style={{ color: '#E2E8F0', fontWeight: '600', fontSize: '0.9rem' }}>{row.name}</div>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>{row.arta ? <Check size={16} color="#14B8A6" /> : <Minus size={16} color="#64748B" />}</div>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>{row.banks ? <Check size={16} color="#14B8A6" /> : <Minus size={16} color="#64748B" />}</div>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ background: 'rgba(20, 184, 166, 0.2)', borderRadius: '50%', padding: '2px' }}>
                      <Check size={18} color="#14B8A6" strokeWidth={3} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Business Moat (Flywheel) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            style={{
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.05))',
              borderRadius: '20px',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <h3 style={{ color: '#8B5CF6', fontSize: '1.1rem', fontWeight: '700', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Distribution Moat
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', flex: 1, justifyContent: 'center' }}>
              {flywheel.map((item, i) => {
                const Icon = item.icon
                return (
                  <React.Fragment key={item.name}>
                    <div style={{
                      width: '100%',
                      background: 'rgba(15, 23, 42, 0.6)',
                      border: `1px solid ${item.color}40`,
                      borderRadius: '12px',
                      padding: '0.75rem 1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      boxShadow: `0 4px 12px ${item.color}10`
                    }}>
                      <div style={{ background: `${item.color}20`, padding: '8px', borderRadius: '8px' }}>
                        <Icon size={20} color={item.color} />
                      </div>
                      <div>
                        <p style={{ color: '#fff', fontWeight: '700', fontSize: '0.9rem', margin: 0 }}>{item.name}</p>
                        <p style={{ color: '#94A3B8', fontSize: '0.75rem', margin: 0 }}>{item.detail}</p>
                      </div>
                    </div>
                    {i < flywheel.length - 1 && (
                      <ArrowDown size={16} color="#64748B" />
                    )}
                  </React.Fragment>
                )
              })}
            </div>
          </motion.div>

        </div>

        {/* Bottom Metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', marginTop: '2rem' }}>
          {[
            { label: 'Lower CAC', val: '70%', sub: 'vs ARTA' },
            { label: 'ROI / Agent', val: '473x', sub: 'vs Human' },
            { label: 'India Access', val: 'Excl.', sub: 'GIFT City' }
          ].map((m, i) => (
            <div key={i} style={{ 
              textAlign: 'center', 
              background: 'rgba(255,255,255,0.03)', 
              borderRadius: '12px', 
              padding: '0.75rem',
              border: '1px solid rgba(255,255,255,0.05)'
            }}>
              <p style={{ color: '#94A3B8', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: '700' }}>{m.label}</p>
              <p style={{ color: '#F59E0B', fontSize: '1.2rem', fontWeight: '800' }}>{m.val}</p>
              <p style={{ color: '#64748B', fontSize: '0.7rem' }}>{m.sub}</p>
            </div>
          ))}
        </div>

      </div>
    </AspectFrame>
  )
}

export default SlideCompetitiveDominanceV3
