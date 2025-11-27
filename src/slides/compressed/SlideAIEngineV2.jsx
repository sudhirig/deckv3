import React from 'react'
import { motion } from 'framer-motion'
import { AspectFrame } from '../../components/StandardLayouts'
import { FileText, ArrowRight, Zap, CheckCircle, AlertTriangle } from 'lucide-react'

/**
 * SlideAIEngineV2 - World-Class UI/UX
 * "The AI Data Engine"
 * Visualization: PDF -> AI -> Deal Memo
 */
const SlideAIEngineV2 = () => {
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
            THE AI DATA ENGINE
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#94A3B8' }}>
            Unlocking the 80% of alpha trapped in unstructured PDFs
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1.5fr',
          gap: '3rem',
          alignItems: 'center',
          flex: 1
        }}>
          
          {/* Left: Unstructured Data */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            style={{ position: 'relative', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
             {/* Stack of PDFs */}
             {[0, 1, 2].map((i) => (
               <div key={i} style={{
                 position: 'absolute',
                 width: '180px',
                 height: '240px',
                 background: '#F1F5F9',
                 border: '1px solid #CBD5E1',
                 borderRadius: '4px',
                 transform: `translate(${i * 10}px, ${i * -10}px) rotate(${i * 5 - 5}deg)`,
                 boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                 display: 'flex',
                 flexDirection: 'column',
                 alignItems: 'center',
                 justifyContent: 'center',
                 zIndex: 3 - i
               }}>
                 <FileText size={48} color="#94A3B8" strokeWidth={1} />
                 <div style={{ width: '60%', height: '4px', background: '#CBD5E1', marginTop: '1rem' }} />
                 <div style={{ width: '80%', height: '4px', background: '#E2E8F0', marginTop: '0.5rem' }} />
                 <div style={{ width: '80%', height: '4px', background: '#E2E8F0', marginTop: '0.5rem' }} />
                 {i === 2 && (
                   <div style={{ position: 'absolute', top: '10px', right: '10px', background: '#EF4444', color: '#fff', fontSize: '0.6rem', padding: '2px 6px', borderRadius: '4px' }}>
                     PDF
                   </div>
                 )}
               </div>
             ))}
             <div style={{ position: 'absolute', bottom: '-40px', textAlign: 'center', width: '100%' }}>
               <p style={{ color: '#94A3B8', fontWeight: '600', fontSize: '0.9rem' }}>100+ Page Docs</p>
             </div>
          </motion.div>

          {/* Center: AI Process */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #14B8A6, #06B6D4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 30px rgba(20, 184, 166, 0.5)'
              }}
            >
              <Zap size={32} color="#fff" fill="#fff" />
            </motion.div>
            <div style={{ height: '2px', width: '60px', background: 'linear-gradient(90deg, transparent, #14B8A6, transparent)' }} />
            <p style={{ color: '#14B8A6', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.1em' }}>PROCESSING</p>
          </div>

          {/* Right: Structured Deal Memo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            style={{
              background: '#FFFFFF',
              borderRadius: '12px',
              padding: '2rem',
              boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
              position: 'relative',
              color: '#1e293b'
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#0F172A', margin: 0 }}>Acme Private Credit IV</h3>
                <p style={{ fontSize: '0.8rem', color: '#64748B', margin: '4px 0 0 0' }}>Direct Lending Strategy</p>
              </div>
              <div style={{ background: '#DCFCE7', padding: '4px 12px', borderRadius: '20px', color: '#166534', fontSize: '0.75rem', fontWeight: '700' }}>
                SUITABLE
              </div>
            </div>

            {/* Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
              <div>
                <p style={{ fontSize: '0.7rem', color: '#64748B', textTransform: 'uppercase', fontWeight: '600' }}>Target IRR</p>
                <p style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0F172A' }}>12-14%</p>
              </div>
              <div>
                <p style={{ fontSize: '0.7rem', color: '#64748B', textTransform: 'uppercase', fontWeight: '600' }}>Term</p>
                <p style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0F172A' }}>7 Years</p>
              </div>
            </div>

            {/* Risk Assessment */}
            <div style={{ background: '#F8FAFC', borderRadius: '8px', padding: '1rem' }}>
              <p style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: '700', marginBottom: '0.75rem' }}>RISK ASSESSMENT</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle size={14} color="#10B981" />
                  <span style={{ fontSize: '0.8rem', color: '#334155' }}>Market Risk: <span style={{ fontWeight: '600' }}>Low</span></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <AlertTriangle size={14} color="#F59E0B" />
                  <span style={{ fontSize: '0.8rem', color: '#334155' }}>Liquidity: <span style={{ fontWeight: '600' }}>Medium</span></span>
                </div>
              </div>
            </div>

            {/* Citation */}
            <div style={{ position: 'absolute', bottom: '-40px', right: 0, textAlign: 'right' }}>
              <p style={{ color: '#94A3B8', fontSize: '0.8rem', fontStyle: 'italic' }}>Generated in 500ms</p>
            </div>
          </motion.div>
        </div>
      </div>
    </AspectFrame>
  )
}

export default SlideAIEngineV2
