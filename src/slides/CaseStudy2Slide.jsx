import { motion } from 'framer-motion'
import { DataSlideLayout } from '../components/StandardLayouts'
import { Users, Globe, Shield, Building, Heart } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
import './SlideStyles.css'

export default function CaseStudy2Slide() {
  const beforeAfter = [
    {
      metric: 'Number of Advisors',
      before: '8 Different Firms',
      after: '1 AI Platform',
      improvement: '-87.5%'
    },
    {
      metric: 'Annual Fees',
      before: '$2.7M (1.5%)',
      after: '$450K (0.25%)',
      improvement: '-83%'
    },
    {
      metric: 'Time Spent',
      before: '40 hrs/month',
      after: '2 hrs/month',
      improvement: '-95%'
    },
    {
      metric: 'Portfolio Performance',
      before: '11.2% annual',
      after: '19.8% annual',
      improvement: '+77%'
    }
  ]

  const familyMembers = [
    { name: 'Sarah Chen', role: 'Principal', age: '38', assets: '$85M' },
    { name: 'David Chen', role: 'Spouse', age: '41', assets: '$35M' },
    { name: 'Parents (2)', role: 'Gen 1', age: '65-68', assets: '$40M' },
    { name: 'Children (3)', role: 'Gen 3', age: '8-15', assets: '$20M Trust' }
  ]

  const achievements = [
    { icon: Globe, label: 'Global Consolidation', value: '5 Countries Unified' },
    { icon: Shield, label: 'Tax Optimization', value: '$1.8M Saved/Year' },
    { icon: Building, label: 'Alternative Access', value: '15% in Privates' },
    { icon: Heart, label: 'Family Harmony', value: '100% Satisfaction' }
  ]

  const mainVisual = (
    <div>
      <p style={{ fontSize: pxToRem(16), color: '#94a3b8', textAlign: 'center', marginBottom: pxToRem(32) }}>
        Simplifying complexity for a $180M global portfolio
      </p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        style={{
          background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(236, 72, 153, 0.1))',
          borderRadius: pxToRem(12),
          padding: pxToRem(24)
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: pxToRem(32) }}>
          <div>
            <h3 style={{ color: '#fbbf24', marginBottom: pxToRem(16) }}>
              The Chen Family Office
            </h3>
            <div style={{ marginBottom: pxToRem(16) }}>
              <h4 style={{ color: '#ef4444', fontSize: pxToRem(14.4), marginBottom: pxToRem(8) }}>
                THE COMPLEXITY CHALLENGE
              </h4>
              <p style={{ fontSize: pxToRem(13.6), color: '#94a3b8', lineHeight: 1.5 }}>
                Managing $180M across 3 generations, 5 countries, and 8 different advisory firms. 
                Each family member had different risk profiles, goals, and tax situations. 
                Quarterly reporting alone took 2 weeks and cost $50K.
              </p>
            </div>
            <div>
              <h4 style={{ color: '#4ade80', fontSize: pxToRem(14.4), marginBottom: pxToRem(8) }}>
                THE AI SOLUTION
              </h4>
              <p style={{ fontSize: pxToRem(13.6), color: '#e2e8f0', lineHeight: 1.5 }}>
                Unified platform with personalized AI agents for each family member, 
                automated cross-border tax optimization, and real-time consolidated reporting 
                across all entities and jurisdictions.
              </p>
            </div>
          </div>

          <div>
            <h4 style={{ color: '#fbbf24', fontSize: pxToRem(14.4), marginBottom: pxToRem(12) }}>
              Family Structure
            </h4>
            {familyMembers.map((member, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: pxToRem(8),
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: pxToRem(6),
                  marginBottom: pxToRem(8)
                }}
              >
                <div>
                  <div style={{ fontSize: pxToRem(12.8), color: '#e2e8f0' }}>{member.name}</div>
                  <div style={{ fontSize: pxToRem(11.2), color: '#64748b' }}>{member.role}</div>
                </div>
                <div style={{ fontSize: pxToRem(12.8), color: '#fbbf24', fontWeight: '600' }}>
                  {member.assets}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )

  const keyInsights = (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        style={{
          background: 'rgba(147, 51, 234, 0.05)',
          borderRadius: pxToRem(12),
          padding: pxToRem(24),
          marginBottom: pxToRem(32)
        }}
      >
        <h3 style={{ color: '#c084fc', marginBottom: pxToRem(16), fontSize: pxToRem(17.6) }}>
          Transformation Metrics
        </h3>
        <div style={{ overflow: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0' }}>
            <thead>
              <tr>
                <th style={{
                  padding: pxToRem(12),
                  textAlign: 'left',
                  fontSize: pxToRem(13.6),
                  color: '#c084fc',
                  borderBottom: `${pxToRem(2)} solid rgba(147, 51, 234, 0.2)`
                }}>
                  Metric
                </th>
                <th style={{
                  padding: pxToRem(12),
                  textAlign: 'center',
                  fontSize: pxToRem(13.6),
                  color: '#ef4444',
                  borderBottom: `${pxToRem(2)} solid rgba(147, 51, 234, 0.2)`
                }}>
                  Before
                </th>
                <th style={{
                  padding: pxToRem(12),
                  textAlign: 'center',
                  fontSize: pxToRem(13.6),
                  color: '#4ade80',
                  borderBottom: `${pxToRem(2)} solid rgba(147, 51, 234, 0.2)`
                }}>
                  After
                </th>
                <th style={{
                  padding: pxToRem(12),
                  textAlign: 'center',
                  fontSize: pxToRem(13.6),
                  color: '#60a5fa',
                  borderBottom: `${pxToRem(2)} solid rgba(147, 51, 234, 0.2)`
                }}>
                  Improvement
                </th>
              </tr>
            </thead>
            <tbody>
              {beforeAfter.map((item, index) => (
                <motion.tr
                  key={item.metric}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <td style={{
                    padding: pxToRem(12),
                    fontSize: pxToRem(13.6),
                    color: '#e2e8f0',
                    borderBottom: `${pxToRem(1)} solid rgba(255, 255, 255, 0.05)`
                  }}>
                    {item.metric}
                  </td>
                  <td style={{
                    padding: pxToRem(12),
                    textAlign: 'center',
                    fontSize: pxToRem(13.6),
                    color: '#ef4444',
                    borderBottom: `${pxToRem(1)} solid rgba(255, 255, 255, 0.05)`
                  }}>
                    {item.before}
                  </td>
                  <td style={{
                    padding: pxToRem(12),
                    textAlign: 'center',
                    fontSize: pxToRem(13.6),
                    color: '#4ade80',
                    fontWeight: 'bold',
                    borderBottom: `${pxToRem(1)} solid rgba(255, 255, 255, 0.05)`
                  }}>
                    {item.after}
                  </td>
                  <td style={{
                    padding: pxToRem(12),
                    textAlign: 'center',
                    fontSize: pxToRem(13.6),
                    color: '#60a5fa',
                    fontWeight: 'bold',
                    borderBottom: `${pxToRem(1)} solid rgba(255, 255, 255, 0.05)`
                  }}>
                    {item.improvement}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )

  const supportingData = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1 }}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: pxToRem(16),
        marginTop: pxToRem(24)
      }}
    >
      {achievements.map((achievement, index) => (
        <motion.div
          key={achievement.label}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 + index * 0.1 }}
          style={{
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(6, 182, 212, 0.1))',
            borderRadius: pxToRem(12),
            padding: pxToRem(16),
            textAlign: 'center'
          }}
        >
          <achievement.icon size={24} style={{ color: '#14b8a6', margin: `0 auto ${pxToRem(8)}` }} />
          <div style={{ fontSize: pxToRem(12.8), color: '#94a3b8', marginBottom: pxToRem(4) }}>
            {achievement.label}
          </div>
          <div style={{ fontSize: pxToRem(15.2), color: '#14b8a6', fontWeight: 'bold' }}>
            {achievement.value}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )

  const citation = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.6 }}
      style={{
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))',
        borderRadius: pxToRem(12),
        padding: pxToRem(24),
        borderLeft: `${pxToRem(4)} solid #60a5fa`
      }}
    >
      <Users size={30} style={{
        float: 'right',
        color: '#60a5fa',
        opacity: 0.3
      }} />
      <p style={{
        fontSize: pxToRem(16.8),
        fontStyle: 'italic',
        color: '#e2e8f0',
        marginBottom: pxToRem(16),
        lineHeight: 1.6
      }}>
        "We finally have one unified view of our entire family's wealth. The AI understands each 
        family member's needs while optimizing for the collective. It's eliminated conflicts and 
        given us back precious family time. This is the future of family offices."
      </p>
      <div style={{ fontSize: pxToRem(14.4), color: '#60a5fa', fontWeight: '600' }}>
        — Sarah Chen-Williams, Family Office Principal
      </div>
    </motion.div>
  )

  return (
    <DataSlideLayout
      title="Case Study: Multi-Generational Family Office"
      mainVisual={mainVisual}
      keyInsights={keyInsights}
      supportingData={supportingData}
      citation={citation}
    />
  )
}
