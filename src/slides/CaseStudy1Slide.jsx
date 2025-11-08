import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import GradientText from '../components/GradientText'
import { TrendingUp, DollarSign, Clock, Award, ChevronRight } from 'lucide-react'
import './SlideStyles.css'

export default function CaseStudy1Slide() {
  const results = [
    { metric: 'Portfolio Return', value: '+31.2%', benchmark: 'vs 18.4% S&P', color: '#4ade80' },
    { metric: 'Tax Savings', value: '$127K', benchmark: 'Annual savings', color: '#60a5fa' },
    { metric: 'Time Saved', value: '15 hrs/month', benchmark: 'Automated tasks', color: '#fbbf24' },
    { metric: 'Risk Reduction', value: '-42%', benchmark: 'Portfolio volatility', color: '#c084fc' }
  ]

  const timeline = [
    { month: 'Month 1', event: 'Onboarded $8.5M portfolio', highlight: 'Identified $47K immediate tax savings' },
    { month: 'Month 3', event: 'First alternative investment', highlight: 'Allocated 10% to private credit' },
    { month: 'Month 6', event: 'Family accounts added', highlight: 'Wife and 2 children onboarded' },
    { month: 'Month 12', event: 'Full optimization achieved', highlight: '31.2% returns with lower risk' }
  ]

  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-card"
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <AnimatedText delay={0.2}>
          <h2 className="slide-title" style={{ marginBottom: '0.5rem' }}>
            <GradientText gradient="from-green-400 to-emerald-400">
              Case Study: Tech Founder Success
            </GradientText>
          </h2>
          <p style={{ fontSize: '1rem', color: '#94a3b8', textAlign: 'center', marginBottom: '2rem' }}>
            From fragmented wealth to optimized portfolio in 12 months
          </p>
        </AnimatedText>

        {/* Client Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
            borderRadius: '12px',
            padding: '1.5rem',
            marginBottom: '2rem'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
            {/* Client Info */}
            <div>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #60a5fa, #c084fc)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#0f172a',
                marginBottom: '1rem'
              }}>
                RK
              </div>
              <h3 style={{ color: '#e2e8f0', marginBottom: '0.5rem' }}>Raj Kapoor</h3>
              <div style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '0.25rem' }}>
                Tech Founder & Angel Investor
              </div>
              <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
                Age: 38 | Location: San Francisco
              </div>
            </div>

            {/* Challenge & Solution */}
            <div>
              <div style={{ marginBottom: '1rem' }}>
                <h4 style={{ color: '#ef4444', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                  🔴 THE CHALLENGE
                </h4>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.5 }}>
                  After selling his second startup, Raj had $8.5M scattered across 12 accounts, 
                  was paying $180K/year in unnecessary taxes, and spending 20+ hours monthly 
                  managing investments with mediocre 12% returns.
                </p>
              </div>
              <div>
                <h4 style={{ color: '#4ade80', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                  ✅ THE SOLUTION
                </h4>
                <p style={{ fontSize: '0.85rem', color: '#e2e8f0', lineHeight: 1.5 }}>
                  Our AI consolidated his portfolio, implemented daily tax harvesting, 
                  accessed pre-IPO investments, and automated rebalancing—all while 
                  reducing fees by 75% and tripling his after-tax returns.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Results Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem',
            marginBottom: '2rem'
          }}
        >
          {results.map((result, index) => (
            <motion.div
              key={result.metric}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              style={{
                background: `linear-gradient(135deg, ${result.color}15, transparent)`,
                borderRadius: '12px',
                padding: '1.25rem',
                border: `1px solid ${result.color}33`,
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: result.color }}>
                {result.value}
              </div>
              <div style={{ fontSize: '0.85rem', color: '#e2e8f0', marginBottom: '0.25rem' }}>
                {result.metric}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                {result.benchmark}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{
            background: 'rgba(34, 197, 94, 0.05)',
            borderRadius: '12px',
            padding: '1.5rem',
            marginBottom: '1.5rem'
          }}
        >
          <h3 style={{ color: '#4ade80', marginBottom: '1rem', fontSize: '1.1rem' }}>
            Success Timeline
          </h3>
          <div style={{ position: 'relative' }}>
            {/* Timeline Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              style={{
                position: 'absolute',
                top: '25px',
                left: '5%',
                right: '5%',
                height: '2px',
                background: 'linear-gradient(90deg, #60a5fa, #4ade80)',
                transformOrigin: 'left'
              }}
            />
            
            {/* Timeline Events */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
              {timeline.map((item, index) => (
                <motion.div
                  key={item.month}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 + index * 0.1 }}
                  style={{ textAlign: 'center' }}
                >
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: '#0f172a',
                    border: '3px solid #4ade80',
                    margin: '0 auto 0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                    color: '#4ade80'
                  }}>
                    {index + 1}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#4ade80', marginBottom: '0.25rem' }}>
                    {item.month}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#e2e8f0', marginBottom: '0.25rem' }}>
                    {item.event}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', fontStyle: 'italic' }}>
                    {item.highlight}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(6, 182, 212, 0.1))',
            borderRadius: '12px',
            padding: '1.5rem',
            borderLeft: '4px solid #14b8a6',
            position: 'relative'
          }}
        >
          <Award size={30} style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            color: '#14b8a6',
            opacity: 0.3
          }} />
          <p style={{
            fontSize: '1.1rem',
            fontStyle: 'italic',
            color: '#e2e8f0',
            marginBottom: '1rem',
            lineHeight: 1.6
          }}>
            "In one year, they've transformed my financial life. Better returns, massive tax savings, 
            and I actually have time to focus on my next venture. It's like having a team of Goldman 
            Sachs advisors powered by AI, available 24/7."
          </p>
          <div style={{ fontSize: '0.9rem', color: '#14b8a6', fontWeight: '600' }}>
            — Raj Kapoor, Client since 2024
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}