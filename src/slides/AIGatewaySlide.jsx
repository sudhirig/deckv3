import { motion } from 'framer-motion'
import { GridLayout } from '../components/StandardLayouts'
import './SlideStyles.css'
import { pxToRem } from '../utils/responsive'

export default function AIGatewaySlide() {
  const cards = [
    <div key="experience">
      <h3 style={{ color: '#14b8a6', marginBottom: pxToRem(24) }}>The AI Experience</h3>
      <motion.div 
        style={{ background: 'rgba(20, 184, 166, 0.05)', padding: pxToRem(24), borderRadius: pxToRem(12), marginBottom: pxToRem(24) }}
        initial={{ opacity: 0, y: pxToRem(20) }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <p style={{ fontWeight: 'bold', marginBottom: pxToRem(8) }}>User:</p>
        <p style={{ color: '#94a3b8', fontStyle: 'italic' }}>"I want 5% India exposure but worried about tax and currency. What's best?"</p>
      </motion.div>
      <motion.div 
        style={{ background: 'rgba(20, 184, 166, 0.1)', padding: pxToRem(24), borderRadius: pxToRem(12), marginBottom: pxToRem(24) }}
        initial={{ opacity: 0, y: pxToRem(20) }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <p style={{ fontWeight: 'bold', color: '#14b8a6', marginBottom: pxToRem(8) }}>AI Gateway Agent:</p>
        <p style={{ color: '#94a3b8' }}>"Use GIFT City gateway - USD-denominated Indian equity funds with 0% Indian capital gains tax."</p>
      </motion.div>
      <motion.div 
        style={{ background: 'rgba(20, 184, 166, 0.1)', padding: pxToRem(24), borderRadius: pxToRem(12) }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
      >
        <p style={{ fontWeight: 'bold', color: '#14b8a6', marginBottom: pxToRem(16) }}>Recommendation</p>
        <p style={{ marginBottom: pxToRem(8) }}><strong>Action:</strong> 5% to Indian Equities</p>
        <p style={{ marginBottom: pxToRem(8) }}><strong>Vehicle:</strong> ABC India Flexi Cap (USD)</p>
        <p style={{ marginBottom: pxToRem(8) }}><strong>Route:</strong> GIFT City (NSE IX)</p>
        <p><strong>Tax:</strong> 0% | <strong>Repatriation:</strong> Unrestricted</p>
      </motion.div>
    </div>,
    
    <div key="capabilities">
      <h3 style={{ color: '#14b8a6', marginBottom: pxToRem(24) }}>What This Agent Does</h3>
      <div style={{ fontSize: pxToRem(17.6), lineHeight: '1.8' }}>
        <motion.div 
          style={{ marginBottom: pxToRem(24), background: 'rgba(20, 184, 166, 0.05)', padding: pxToRem(24), borderRadius: pxToRem(12) }}
          initial={{ opacity: 0, x: pxToRem(30) }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <p style={{ fontWeight: 'bold', color: '#14b8a6', marginBottom: pxToRem(8) }}>Automated Compliance</p>
          <p style={{ color: '#94a3b8' }}>Manages cross-border AML/KYC checks, regulatory filings</p>
        </motion.div>
        <motion.div 
          style={{ marginBottom: pxToRem(24), background: 'rgba(20, 184, 166, 0.05)', padding: pxToRem(24), borderRadius: pxToRem(12) }}
          initial={{ opacity: 0, x: pxToRem(30) }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
        >
          <p style={{ fontWeight: 'bold', color: '#14b8a6', marginBottom: pxToRem(8) }}>Tax & Route Optimization</p>
          <p style={{ color: '#94a3b8' }}>Analyzes FPI vs GIFT City for best after-tax path</p>
        </motion.div>
        <motion.div 
          style={{ background: 'rgba(20, 184, 166, 0.05)', padding: pxToRem(24), borderRadius: pxToRem(12) }}
          initial={{ opacity: 0, x: pxToRem(30) }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
        >
          <p style={{ fontWeight: 'bold', color: '#14b8a6', marginBottom: pxToRem(8) }}>Seamless Execution</p>
          <p style={{ color: '#94a3b8' }}>End-to-end investment, monitoring, rebalancing</p>
        </motion.div>
      </div>
      <motion.p 
        style={{ textAlign: 'center', fontSize: pxToRem(17.6), color: '#fbbf24', marginTop: pxToRem(32), fontWeight: 'bold' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Only AI platform with automated GIFT City access
      </motion.p>
    </div>
  ]

  return (
    <GridLayout
      title="Our AI Agent Makes It Simple"
      cards={cards}
      columns={2}
    />
  )
}
