import { motion } from 'framer-motion'
import GradientText from '../components/GradientText'
import ParticleBackground from '../components/ParticleBackground'
import { DollarSign, TrendingUp, Clock, Users } from 'lucide-react'
import './SlideStyles.css'

export default function Act5Slide() {
  return (
    <div className="slide-content" style={{ position: 'relative', padding: '3rem 4rem' }}>
      <ParticleBackground count={50} color="#fbbf24" />
      
      {/* Full-width landscape layout */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '200px 1fr 250px',
        gap: '3rem',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        
        {/* Left Column - Act Number & Progress */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center' }}
        >
          <div style={{ fontSize: '4rem', fontWeight: 900 }}>
            <GradientText gradient="from-amber-400 to-orange-400">
              ACT 5
            </GradientText>
          </div>
          <div style={{
            width: '100%',
            height: '200px',
            marginTop: '2rem',
            background: 'linear-gradient(180deg, rgba(251, 191, 36, 0.2), rgba(249, 115, 22, 0.1))',
            borderRadius: '10px'
          }}></div>
        </motion.div>
        
        {/* Center Column - Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ textAlign: 'center' }}
        >
          <h1 style={{ 
            fontSize: '3.5rem', 
            fontWeight: 800, 
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #fbbf24 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            The Business & The Ask
          </h1>
          
          <p style={{ 
            fontSize: '2rem', 
            marginBottom: '2rem',
            color: 'rgba(255, 255, 255, 0.8)'
          }}>
            The Investment Opportunity
          </p>
          
          <p style={{
            fontSize: '1.2rem',
            lineHeight: '1.8',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            We're raising $5M to capture a $5.4T serviceable market within a $112T TAM. 
            With proven unit economics (17.8:1 LTV/CAC), rapid payback (3.5 months), 
            and a clear path to $1B AUM in 36 months. Our expert team has the 
            execution experience to deliver this generational opportunity.
          </p>
        </motion.div>
        
        {/* Right Column - Metrics */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          <div className="metric-item">
            <DollarSign size={24} color="#fbbf24" />
            <div className="metric-value">$112T</div>
            <div className="metric-label">Total TAM</div>
          </div>
          
          <div className="metric-item">
            <TrendingUp size={24} color="#fbbf24" />
            <div className="metric-value">17.8:1</div>
            <div className="metric-label">LTV/CAC</div>
          </div>
          
          <div className="metric-item">
            <Clock size={24} color="#fbbf24" />
            <div className="metric-value">3.5mo</div>
            <div className="metric-label">Payback</div>
          </div>
        </motion.div>
      </div>
      
      {/* Bottom Opportunity Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem',
          marginTop: '3rem',
          width: '100%'
        }}
      >
        <motion.div 
          className="discovery-card glass-card"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h4 style={{ color: '#fbbf24', marginBottom: '0.5rem' }}>Market Size</h4>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff' }}>$5.4T</p>
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>Serviceable</p>
        </motion.div>
        
        <motion.div 
          className="discovery-card glass-card"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h4 style={{ color: '#fbbf24', marginBottom: '0.5rem' }}>Target AUM</h4>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff' }}>$1B</p>
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>36 months</p>
        </motion.div>
        
        <motion.div 
          className="discovery-card glass-card"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h4 style={{ color: '#fbbf24', marginBottom: '0.5rem' }}>Seed Round</h4>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff' }}>$5M</p>
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>Raising now</p>
        </motion.div>
        
        <motion.div 
          className="discovery-card glass-card"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h4 style={{ color: '#fbbf24', marginBottom: '0.5rem' }}>Team</h4>
          <Users size={28} color="#fff" style={{ margin: '0.5rem 0' }} />
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>Proven experts</p>
        </motion.div>
      </motion.div>
    </div>
  )
}
