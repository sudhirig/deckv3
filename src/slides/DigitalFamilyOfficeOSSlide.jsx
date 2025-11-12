import { motion } from 'framer-motion'
import { TableLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import { DollarSign, Clock, FileText } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function DigitalFamilyOfficeOSSlide() {
  const title = (
    <GradientText gradient="from-purple-400 to-pink-400">
      ARIA: The Digital Family Office OS
    </GradientText>
  )

  const subtitle = "How ARIA productizes $1M/year functions for $10K/year"

  const tableContent = (
    <div style={{ width: '100%' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid rgba(148, 163, 184, 0.2)' }}>
            <th style={{ textAlign: 'left', padding: '1rem', color: '#94a3b8' }}>Core Task</th>
            <th style={{ textAlign: 'left', padding: '1rem', color: '#ef4444' }}>Traditional Model (Pain)</th>
            <th style={{ textAlign: 'left', padding: '1rem', color: '#14b8a6' }}>ARIA Platform (Solution)</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid rgba(148, 163, 184, 0.1)' }}>
            <td style={{ padding: '1rem', color: '#e2e8f0', fontWeight: 'bold' }}>Alt Asset Reporting</td>
            <td style={{ padding: '1rem' }}>
              <p style={{ color: '#fca5a5', fontSize: '0.9rem' }}>Manual PDF review, 3-6 month lag</p>
            </td>
            <td style={{ padding: '1rem' }}>
              <p style={{ color: '#5eead4', fontSize: '0.9rem' }}>GenAI ingestion, real-time dashboard</p>
            </td>
          </tr>
          <tr style={{ borderBottom: '1px solid rgba(148, 163, 184, 0.1)' }}>
            <td style={{ padding: '1rem', color: '#e2e8f0', fontWeight: 'bold' }}>Portfolio Risk</td>
            <td style={{ padding: '1rem' }}>
              <p style={{ color: '#fca5a5', fontSize: '0.9rem' }}>Impossible look-through</p>
            </td>
            <td style={{ padding: '1rem' }}>
              <p style={{ color: '#5eead4', fontSize: '0.9rem' }}>AI-driven stress testing</p>
            </td>
          </tr>
          <tr style={{ borderBottom: '1px solid rgba(148, 163, 184, 0.1)' }}>
            <td style={{ padding: '1rem', color: '#e2e8f0', fontWeight: 'bold' }}>Succession Planning</td>
            <td style={{ padding: '1rem' }}>
              <p style={{ color: '#fca5a5', fontSize: '0.9rem' }}>Static docs, 90% fail</p>
            </td>
            <td style={{ padding: '1rem' }}>
              <p style={{ color: '#5eead4', fontSize: '0.9rem' }}>AI scenario modeling</p>
            </td>
          </tr>
          <tr>
            <td style={{ padding: '1rem', color: '#e2e8f0', fontWeight: 'bold' }}>Regulatory Compliance</td>
            <td style={{ padding: '1rem' }}>
              <p style={{ color: '#fca5a5', fontSize: '0.9rem' }}>Manual, high-cost</p>
            </td>
            <td style={{ padding: '1rem' }}>
              <p style={{ color: '#5eead4', fontSize: '0.9rem' }}>Automated, auditable</p>
            </td>
          </tr>
        </tbody>
      </table>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        style={{
          marginTop: '2rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem'
        }}
      >
        <div style={{
          background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(248, 113, 113, 0.05))',
          borderRadius: pxToRem(12),
          padding: '1.5rem',
          textAlign: 'center'
        }}>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ef4444' }}>$1M+</p>
          <p style={{ fontSize: '1rem', color: '#e2e8f0' }}>Annual Cost</p>
          <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Traditional Family Office</p>
        </div>
        <div style={{
          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(16, 185, 129, 0.05))',
          borderRadius: pxToRem(12),
          padding: '1.5rem',
          textAlign: 'center'
        }}>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#14b8a6' }}>$10K</p>
          <p style={{ fontSize: '1rem', color: '#e2e8f0' }}>Annual Subscription</p>
          <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>ARIA Digital Family Office</p>
        </div>
      </motion.div>
    </div>
  )

  return <TableLayout title={title} subtitle={subtitle} tableContent={tableContent} />
}
