import { motion } from 'framer-motion'
import { TableLayout } from '../components/StandardLayouts'
import AnimatedText from '../components/AnimatedText'
import GradientText from '../components/GradientText'
import CircularProgress from '../components/CircularProgress'
import { Calculator, TrendingUp, Users, DollarSign, Repeat, Target } from 'lucide-react'
import './SlideStyles.css'

export default function FinancialProjections2Slide() {
  const unitEconomics = {
    cac: 3200,
    ltv: 57000,
    ratio: 17.8,
    payback: 3.5,
    churn: 6,
    arpu: 20000
  }

  const revenueStreams = [
    { name: 'Management Fees', percentage: 65, amount: 8.1, color: '#60a5fa' },
    { name: 'Performance Fees', percentage: 20, amount: 2.5, color: '#4ade80' },
    { name: 'Platform Fees', percentage: 10, amount: 1.25, color: '#fbbf24' },
    { name: 'Data & Analytics', percentage: 5, amount: 0.65, color: '#c084fc' }
  ]

  const cohortRetention = [
    { month: 'M1', retention: 100 },
    { month: 'M3', retention: 96 },
    { month: 'M6', retention: 94 },
    { month: 'M12', retention: 94 },
    { month: 'M24', retention: 92 },
    { month: 'M36', retention: 91 }
  ]

  // Title
  const title = (
    <GradientText gradient="from-blue-400 to-purple-400">
      Unit Economics & Revenue Model
    </GradientText>
  )

  // Subtitle
  const subtitle = "Best-in-class metrics driving sustainable growth"

  // Table content - Unit Economics and Revenue Streams
  const tableContent = (
    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
      {/* Unit Economics */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        style={{
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
          borderRadius: '12px',
          padding: '1.5rem'
        }}
      >
        <h3 style={{ color: '#60a5fa', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
          Unit Economics
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          <div style={{
            textAlign: 'center',
            padding: '1rem',
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '8px'
          }}>
            <DollarSign size={20} style={{ color: '#4ade80', margin: '0 auto 0.5rem' }} />
            <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.25rem' }}>CAC</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#e2e8f0' }}>
              ${unitEconomics.cac.toLocaleString()}
            </div>
          </div>
          
          <div style={{
            textAlign: 'center',
            padding: '1rem',
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '8px'
          }}>
            <TrendingUp size={20} style={{ color: '#fbbf24', margin: '0 auto 0.5rem' }} />
            <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.25rem' }}>LTV</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#e2e8f0' }}>
              ${unitEconomics.ltv.toLocaleString()}
            </div>
          </div>
          
          <div style={{
            textAlign: 'center',
            padding: '1rem',
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '8px'
          }}>
            <Calculator size={20} style={{ color: '#c084fc', margin: '0 auto 0.5rem' }} />
            <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.25rem' }}>LTV/CAC</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4ade80' }}>
              {unitEconomics.ratio}:1
            </div>
          </div>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '1rem',
          marginTop: '1rem'
        }}>
          <div style={{
            padding: '0.75rem',
            background: 'rgba(34, 197, 94, 0.1)',
            borderRadius: '6px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '0.75rem', color: '#4ade80' }}>Payback</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#e2e8f0' }}>
              {unitEconomics.payback} months
            </div>
          </div>
          
          <div style={{
            padding: '0.75rem',
            background: 'rgba(251, 191, 36, 0.1)',
            borderRadius: '6px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '0.75rem', color: '#fbbf24' }}>Churn</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#e2e8f0' }}>
              {unitEconomics.churn}%
            </div>
          </div>
          
          <div style={{
            padding: '0.75rem',
            background: 'rgba(236, 72, 153, 0.1)',
            borderRadius: '6px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '0.75rem', color: '#ec4899' }}>ARPU</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#e2e8f0' }}>
              ${unitEconomics.arpu.toLocaleString()}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Revenue Breakdown & Retention */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {/* Revenue Streams */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1))',
            borderRadius: '12px',
            padding: '1rem'
          }}
        >
          <h4 style={{ color: '#4ade80', marginBottom: '1rem', fontSize: '1rem' }}>
            Revenue Streams (Y5)
          </h4>
          {revenueStreams.map((stream, index) => (
            <div key={stream.name} style={{ marginBottom: '0.75rem' }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                marginBottom: '0.25rem',
                fontSize: '0.85rem'
              }}>
                <span style={{ color: '#e2e8f0' }}>{stream.name}</span>
                <span style={{ color: stream.color }}>${stream.amount}M</span>
              </div>
              <div style={{
                height: '4px',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '2px',
                overflow: 'hidden'
              }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${stream.percentage}%` }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  style={{
                    height: '100%',
                    background: stream.color
                  }}
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Cohort Retention */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{
            background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(168, 85, 247, 0.1))',
            borderRadius: '12px',
            padding: '1rem'
          }}
        >
          <h4 style={{ color: '#a78bfa', marginBottom: '1rem', fontSize: '1rem' }}>
            Cohort Retention
          </h4>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem' }}>
            {cohortRetention.map((data, index) => (
              <div key={data.month} style={{ textAlign: 'center' }}>
                <div style={{ position: 'relative', marginBottom: '0.5rem' }}>
                  <CircularProgress 
                    value={data.retention} 
                    size={40} 
                    strokeWidth={3}
                    color="#a78bfa"
                    delay={0.8 + index * 0.1}
                  />
                </div>
                <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>{data.month}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )

  // Metrics
  const metrics = [
    <div key="ltv-cac" className="glass-card" style={{ 
      padding: '1rem', 
      background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(16, 185, 129, 0.1))',
      textAlign: 'center'
    }}>
      <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4ade80' }}>17.8:1</div>
      <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>LTV/CAC Ratio</div>
    </div>,
    
    <div key="payback" className="glass-card" style={{ 
      padding: '1rem', 
      background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.15), rgba(249, 115, 22, 0.1))',
      textAlign: 'center'
    }}>
      <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fbbf24' }}>3.5mo</div>
      <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Payback Period</div>
    </div>,
    
    <div key="retention" className="glass-card" style={{ 
      padding: '1rem', 
      background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.15), rgba(168, 85, 247, 0.1))',
      textAlign: 'center'
    }}>
      <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#a78bfa' }}>94%</div>
      <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>12M Retention</div>
    </div>
  ]

  return (
    <TableLayout
      title={title}
      subtitle={subtitle}
      tableContent={tableContent}
      metrics={metrics}
    />
  )
}