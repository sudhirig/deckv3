import { motion } from 'framer-motion'
import Icon from '../components/Icon'
import './SlideStyles.css'

export default function GIFTSolutionSlide() {
  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-card"
      >
        <h2 className="slide-title">Our Solution: The GIFT City "AI Gateway"</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginTop: '2rem' }}>
          <div>
            <h3 style={{ color: '#14b8a6', marginBottom: '1.5rem', fontSize: '1.5rem' }}>The GIFT City Solution</h3>
            <div style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ fontWeight: 'bold', color: '#14b8a6' }}>Direct Access via IFSC</p>
                <p style={{ color: '#94a3b8' }}>Streamlined setup for foreign investors</p>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ fontWeight: 'bold', color: '#14b8a6' }}>0% Capital Gains Tax</p>
                <p style={{ color: '#94a3b8' }}>No CGT, no STT - keep all your gains</p>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ fontWeight: 'bold', color: '#14b8a6' }}>USD-Based Trading</p>
                <p style={{ color: '#94a3b8' }}>Eliminate currency risk entirely</p>
              </div>
              <div>
                <p style={{ fontWeight: 'bold', color: '#14b8a6' }}>Free Capital Movement</p>
                <p style={{ color: '#94a3b8' }}>Instant repatriation, no restrictions</p>
              </div>
            </div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <Icon type="unlock" size={56} gradient="from-green-400 to-emerald-400" delay={0.3} />
            </div>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#14b8a6', marginBottom: '0.5rem' }}>+300bps</p>
              <p style={{ fontSize: '1.1rem', color: '#94a3b8', marginBottom: '0.5rem' }}>in returns</p>
              <p style={{ fontSize: '0.9rem', color: '#64748b' }}>(JPMorgan Research)</p>
            </div>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <p style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>NSE IFSC Volume Up 400% YoY</p>
              <p style={{ fontSize: '1rem', color: '#94a3b8' }}>Market validation of GIFT City route</p>
            </div>
            <div style={{ background: 'rgba(20, 184, 166, 0.1)', padding: '1rem 2rem', borderRadius: '8px' }}>
              <p style={{ fontSize: '1rem', fontWeight: 'bold', color: '#fbbf24' }}>EXCLUSIVE: One of only 3 platforms with this capability</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
