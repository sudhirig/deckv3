import React from 'react'
import { motion } from 'framer-motion'
import { AspectFrame } from '../../components/StandardLayouts'
import { Check, X } from 'lucide-react'

/**
 * SlideWhyARIAWinsV2 - World-Class UI/UX
 * "Competitive Advantage"
 * Layout: 3-Column Comparison Table
 */
const SlideWhyARIAWinsV2 = () => {
  const features = [
    { label: 'GIFT City Access', arta: false, banks: false, aria: true },
    { label: 'B2B2C Distribution', arta: false, banks: true, aria: true },
    { label: 'AI-First ROI', arta: true, banks: false, aria: true },
    { label: 'CAC < $500', arta: false, banks: false, aria: true }
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
        padding: '3rem 4rem',
        fontFamily: 'Inter, -apple-system, sans-serif',
        overflow: 'hidden'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 4vw, 3rem)',
            fontWeight: '800',
            color: '#FFFFFF',
            marginBottom: '0.5rem'
          }}>
            WHY ARIA WINS
          </h1>
        </div>

        {/* Comparison Table */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
          gap: '1rem',
          alignItems: 'center'
        }}>
          {/* Headers */}
          <div />
          <div style={{ textAlign: 'center', color: '#94A3B8', fontWeight: '700', letterSpacing: '0.1em' }}>ARTA</div>
          <div style={{ textAlign: 'center', color: '#94A3B8', fontWeight: '700', letterSpacing: '0.1em' }}>BANKS</div>
          <div style={{ textAlign: 'center', color: '#14B8A6', fontWeight: '800', letterSpacing: '0.1em' }}>ARIA</div>

          {/* Rows */}
          {features.map((row, i) => (
            <React.Fragment key={row.label}>
              <div style={{ padding: '1.5rem', color: '#E2E8F0', fontWeight: '600', fontSize: '1.1rem' }}>
                {row.label}
              </div>
              
              {/* ARTA */}
              <div style={{ display: 'flex', justifyContent: 'center', padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
                {row.arta ? <Check size={24} color="#14B8A6" /> : <X size={24} color="#64748B" />}
              </div>

              {/* Banks */}
              <div style={{ display: 'flex', justifyContent: 'center', padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
                {row.banks ? <Check size={24} color="#14B8A6" /> : <X size={24} color="#64748B" />}
              </div>

              {/* ARIA (Hero Column) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  padding: '1.5rem',
                  background: 'rgba(20, 184, 166, 0.15)',
                  border: '1px solid rgba(20, 184, 166, 0.3)',
                  borderRadius: '12px',
                  boxShadow: '0 0 20px rgba(20, 184, 166, 0.1)'
                }}
              >
                <Check size={28} color="#14B8A6" strokeWidth={3} />
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </AspectFrame>
  )
}

export default SlideWhyARIAWinsV2
