import React from 'react'
import { motion } from 'framer-motion'
import { AspectFrame } from '../../components/StandardLayouts'
import { Trophy, Brain, Globe, Check, X, Minus, Users } from 'lucide-react'

/**
 * SlideCompetitiveDominanceV2 - World-Class UI/UX
 * "Competitive Analysis"
 * Merges "Why ARIA Wins" metrics with "Feature Matrix"
 */
const SlideCompetitiveDominanceV2 = () => {
  const metrics = [
    { label: 'B2B2C Scale', value: '1000+', suffix: 'CPA Partners', icon: Users, color: '#F59E0B' },
    { label: 'Unique Access', value: 'Only', suffix: 'GIFT Gateway', icon: Globe, color: '#FBBF24' },
    { label: 'AI Leverage', value: '473x', suffix: 'ROI / Agent', icon: Brain, color: '#F97316' }
  ]

  const features = [
    { name: 'AI-Powered Portfolio', arta: true, banks: false, aria: true },
    { name: 'India / GIFT City Access', arta: false, banks: false, aria: true },
    { name: 'Daily Tax Harvesting', arta: true, banks: false, aria: true },
    { name: 'B2B2C Distribution', arta: false, banks: true, aria: true },
    { name: '< $500 CAC', arta: false, banks: false, aria: true },
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
        padding: '2rem 4rem',
        fontFamily: 'Inter, -apple-system, sans-serif',
        overflow: 'hidden'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 4vw, 3rem)',
            fontWeight: '800',
            color: '#FFFFFF',
            marginBottom: '0.5rem'
          }}>
            WHY ARIA WINS
          </h1>
        </div>

        {/* Top Row: The Economic Moat */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              style={{
                background: `linear-gradient(135deg, ${m.color}10, ${m.color}05)`,
                border: `1px solid ${m.color}30`,
                borderRadius: '16px',
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              <div style={{ background: `${m.color}20`, padding: '10px', borderRadius: '10px' }}>
                <m.icon size={24} color={m.color} />
              </div>
              <div>
                <p style={{ fontSize: '1.5rem', fontWeight: '800', color: m.color, margin: 0 }}>{m.value}</p>
                <p style={{ fontSize: '0.8rem', color: '#94A3B8', textTransform: 'uppercase', fontWeight: '600' }}>{m.suffix}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Row: The Matrix */}
        <div style={{
          background: 'rgba(30, 41, 59, 0.4)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          border: '1px solid rgba(100, 116, 139, 0.2)',
          padding: '2rem',
          flex: 1,
          display: 'flex',
          flexDirection: 'column'
        }}>
          {/* Table Header */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ color: '#94A3B8', fontWeight: '700' }}>FEATURE</div>
            <div style={{ textAlign: 'center', color: '#94A3B8', fontWeight: '700' }}>ARTA</div>
            <div style={{ textAlign: 'center', color: '#94A3B8', fontWeight: '700' }}>BANKS</div>
            <div style={{ textAlign: 'center', color: '#14B8A6', fontWeight: '800', letterSpacing: '0.1em' }}>ARIA</div>
          </div>

          {/* Rows */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', flex: 1 }}>
            {features.map((row, i) => (
              <motion.div
                key={row.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', alignItems: 'center' }}
              >
                <div style={{ color: '#E2E8F0', fontWeight: '600', fontSize: '1rem' }}>{row.name}</div>
                
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  {row.arta ? <Check size={20} color="#14B8A6" /> : <Minus size={20} color="#64748B" />}
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  {row.banks ? <Check size={20} color="#14B8A6" /> : <Minus size={20} color="#64748B" />}
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div style={{ background: 'rgba(20, 184, 166, 0.2)', borderRadius: '50%', padding: '4px' }}>
                    <Check size={24} color="#14B8A6" strokeWidth={3} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </AspectFrame>
  )
}

export default SlideCompetitiveDominanceV2
