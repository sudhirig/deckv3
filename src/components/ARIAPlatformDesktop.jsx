import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Mic } from 'lucide-react'
import ARIAIconBadge from './ARIAIconBadge'

export default function ARIAPlatformDesktop({ selectedFeature }) {
  return (
    <motion.div
      key="desktop"
      initial={{ opacity: 0, rotateY: 180 }}
      animate={{ opacity: 1, rotateY: 0 }}
      exit={{ opacity: 0, rotateY: -180 }}
      transition={{ duration: 0.6 }}
      style={{
        width: '90%',
        height: '480px',
        background: 'linear-gradient(135deg, #1e293b, #0f172a)',
        borderRadius: '1rem',
        border: '1px solid #334155',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Desktop Header */}
      <div style={{
        background: 'rgba(30, 41, 59, 0.5)',
        padding: '1rem 1.5rem',
        borderBottom: '1px solid rgba(148, 163, 184, 0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <ARIAIconBadge size={30} animated={false} />
          <span style={{ color: '#e2e8f0', fontWeight: '600' }}>ARIAwealth.ai</span>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          {['Dashboard', 'Portfolio', 'Trading', 'GIFT City', 'Reports'].map((item, i) => (
            <span
              key={i}
              style={{
                color: i === 1 ? '#14b8a6' : '#94a3b8',
                fontSize: '0.9rem',
                cursor: 'pointer',
                borderBottom: i === 1 ? '2px solid #14b8a6' : 'none',
                paddingBottom: '2px'
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      
      {/* Desktop Content */}
      <div style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: '250px 1fr 300px',
        gap: '1.5rem',
        padding: '1.5rem'
      }}>
        {/* Sidebar - AI Teams */}
        <div style={{
          background: 'rgba(30, 41, 59, 0.3)',
          borderRadius: '0.75rem',
          padding: '1rem'
        }}>
          <h3 style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '1rem' }}>
            AI Teams Active
          </h3>
          {[
            { name: 'Tax Intelligence', status: 'Active', color: '#4ade80' },
            { name: 'Risk Management', status: 'Monitoring', color: '#fbbf24' },
            { name: 'Market Analysis', status: 'Active', color: '#4ade80' },
            { name: 'Alternative Assets', status: 'Analyzing', color: '#14b8a6' },
            { name: 'Compliance', status: 'Clear', color: '#60a5fa' }
          ].map((team, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              style={{
                padding: '0.75rem',
                marginBottom: '0.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: i === 0 && selectedFeature?.title === 'Real-time Alpha' 
                  ? 'rgba(20, 184, 166, 0.1)' 
                  : 'transparent',
                borderRadius: '0.5rem',
                border: i === 0 && selectedFeature?.title === 'Real-time Alpha'
                  ? '1px solid rgba(20, 184, 166, 0.2)'
                  : 'none'
              }}
            >
              <span style={{ fontSize: '0.8rem', color: '#e2e8f0' }}>{team.name}</span>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem'
              }}>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: team.color
                  }}
                />
                <span style={{ fontSize: '0.7rem', color: team.color }}>{team.status}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Main Chart Area */}
        <div style={{
          background: 'rgba(30, 41, 59, 0.3)',
          borderRadius: '0.75rem',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '1.5rem'
          }}>
            <div>
              <motion.h2 
                animate={{ opacity: [1, 0.8, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ 
                  color: '#14b8a6', 
                  fontSize: '2.5rem', 
                  fontWeight: 'bold' 
                }}
              >
                ₹45.7Cr
              </motion.h2>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginTop: '0.5rem'
              }}>
                <TrendingUp size={16} color="#4ade80" />
                <span style={{ color: '#4ade80', fontSize: '1rem' }}>+18.4%</span>
                <span style={{ color: '#64748b', fontSize: '0.9rem' }}>YTD Performance</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {['1D', '1W', '1M', '1Y', 'ALL'].map((period, i) => (
                <button
                  key={i}
                  style={{
                    padding: '0.4rem 0.8rem',
                    background: i === 3 ? 'rgba(20, 184, 166, 0.2)' : 'transparent',
                    border: i === 3 ? '1px solid rgba(20, 184, 166, 0.3)' : 'none',
                    borderRadius: '0.5rem',
                    color: i === 3 ? '#14b8a6' : '#64748b',
                    fontSize: '0.8rem',
                    cursor: 'pointer'
                  }}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>
          
          {/* Chart Visualization */}
          <div style={{
            flex: 1,
            background: 'rgba(20, 184, 166, 0.05)',
            borderRadius: '0.5rem',
            border: '1px solid rgba(20, 184, 166, 0.1)',
            display: 'flex',
            alignItems: 'flex-end',
            padding: '1rem',
            gap: '0.5rem',
            position: 'relative'
          }}>
            {/* Feature Highlight */}
            {selectedFeature && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: `linear-gradient(135deg, ${selectedFeature.color}20, ${selectedFeature.color}10)`,
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  border: `1px solid ${selectedFeature.color}40`
                }}
              >
                <p style={{ fontSize: '0.7rem', color: selectedFeature.color, fontWeight: '600' }}>
                  {selectedFeature.title} Active
                </p>
                <p style={{ fontSize: '0.65rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                  {selectedFeature.demo}
                </p>
              </motion.div>
            )}
            
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${30 + Math.random() * 70}%` }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                style={{
                  flex: 1,
                  background: `linear-gradient(to top, #14b8a6, #06b6d4)`,
                  borderRadius: '0.25rem 0.25rem 0 0',
                  opacity: 0.6 + (i / 20) * 0.4
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Right Panel */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {/* AI Recommendations */}
          <div style={{
            background: 'rgba(30, 41, 59, 0.3)',
            borderRadius: '0.75rem',
            padding: '1rem'
          }}>
            <h3 style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '0.75rem' }}>
              ARIA Recommendations
            </h3>
            {[
              { action: 'Tax harvest HDFC Bank', impact: 'Save ₹45K', priority: 'High' },
              { action: 'Add GIFT City bonds', impact: '+2.4% yield', priority: 'Medium' },
              { action: 'Rebalance tech exposure', impact: 'Risk -12%', priority: 'Low' }
            ].map((rec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                style={{
                  padding: '0.75rem',
                  background: 'rgba(20, 184, 166, 0.05)',
                  borderRadius: '0.5rem',
                  marginBottom: '0.5rem',
                  border: '1px solid rgba(20, 184, 166, 0.1)',
                  cursor: 'pointer'
                }}
              >
                <p style={{ fontSize: '0.8rem', color: '#e2e8f0', marginBottom: '0.3rem' }}>
                  {rec.action}
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{ fontSize: '0.75rem', color: '#14b8a6', fontWeight: '600' }}>
                    {rec.impact}
                  </span>
                  <span style={{
                    fontSize: '0.7rem',
                    padding: '0.2rem 0.5rem',
                    background: rec.priority === 'High' 
                      ? 'rgba(249, 115, 22, 0.2)'
                      : rec.priority === 'Medium'
                      ? 'rgba(251, 191, 36, 0.2)'
                      : 'rgba(96, 165, 250, 0.2)',
                    color: rec.priority === 'High'
                      ? '#fb923c'
                      : rec.priority === 'Medium'
                      ? '#fbbf24'
                      : '#60a5fa',
                    borderRadius: '0.3rem'
                  }}>
                    {rec.priority}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Voice Assistant */}
          {selectedFeature?.title === 'Voice Command' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1), rgba(251, 191, 36, 0.05))',
                borderRadius: '0.75rem',
                padding: '1rem',
                border: '1px solid rgba(249, 115, 22, 0.2)'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    padding: '0.75rem',
                    background: 'rgba(249, 115, 22, 0.2)',
                    borderRadius: '50%'
                  }}
                >
                  <Mic size={20} color="#fb923c" />
                </motion.div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '0.8rem', color: '#e2e8f0', marginBottom: '0.2rem' }}>
                    Voice Trading Active
                  </p>
                  <p style={{ fontSize: '0.7rem', color: '#fb923c' }}>
                    "{selectedFeature.demo}"
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
