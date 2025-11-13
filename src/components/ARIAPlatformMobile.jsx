import React from 'react'
import { motion } from 'framer-motion'
import { Mic, Brain, Shield, Globe, TrendingUp } from 'lucide-react'
import ARIAIconBadge from './ARIAIconBadge'

export default function ARIAPlatformMobile({ selectedFeature }) {
  return (
    <motion.div
      key="mobile"
      initial={{ opacity: 0, rotateY: -180 }}
      animate={{ opacity: 1, rotateY: 0 }}
      exit={{ opacity: 0, rotateY: 180 }}
      transition={{ duration: 0.6 }}
      style={{
        width: '320px',
        height: '640px',
        background: 'linear-gradient(135deg, #1e293b, #0f172a)',
        borderRadius: '2.5rem',
        border: '8px solid #334155',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Phone Notch */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '150px',
        height: '25px',
        background: '#334155',
        borderRadius: '0 0 1rem 1rem',
        zIndex: 10
      }} />
      
      {/* Mobile Interface */}
      <div style={{
        padding: '3rem 1.5rem 1.5rem',
        height: '100%',
        overflow: 'auto',
        overflowX: 'hidden'
      }}>
        {/* Status Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1.5rem'
        }}>
          <span style={{ fontSize: '1.2rem', color: '#e2e8f0', fontWeight: '600' }}>
            Portfolio
          </span>
          <ARIAIconBadge size={35} animated={false} />
        </div>
        
        {/* Balance Card */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.2), rgba(6, 182, 212, 0.1))',
            borderRadius: '1rem',
            padding: '1.5rem',
            marginBottom: '1.5rem',
            border: '1px solid rgba(20, 184, 166, 0.2)'
          }}
        >
          <p style={{ color: '#94a3b8', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
            Total Portfolio Value
          </p>
          <h2 style={{ color: '#14b8a6', fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
            ₹45.7Cr
          </h2>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <TrendingUp size={14} color="#4ade80" />
            <span style={{ color: '#4ade80', fontSize: '0.85rem' }}>+18.4%</span>
            <span style={{ color: '#64748b', fontSize: '0.75rem' }}>YTD</span>
          </div>
        </motion.div>
        
        {/* Quick Actions */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '0.75rem',
          marginBottom: '1.5rem'
        }}>
          {[
            { icon: Mic, label: 'Voice Trade', color: '#fb923c' },
            { icon: Brain, label: 'AI Advisor', color: '#14b8a6' },
            { icon: Shield, label: 'Risk Alert', color: '#ec4899' },
            { icon: Globe, label: 'GIFT City', color: '#60a5fa' }
          ].map((action, i) => {
            const ActionIcon = action.icon
            const isActive = selectedFeature && 
              ((selectedFeature.title === 'Voice Command' && i === 0) ||
               (selectedFeature.title === 'AI Portfolio' && i === 1) ||
               (selectedFeature.title === 'GIFT Gateway' && i === 3))
            
            return (
              <motion.div
                key={i}
                whileTap={{ scale: 0.95 }}
                animate={isActive ? { 
                  scale: [1, 1.05, 1],
                  borderColor: ['rgba(148, 163, 184, 0.1)', action.color, 'rgba(148, 163, 184, 0.1)']
                } : {}}
                transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
                style={{
                  padding: '1rem',
                  background: isActive 
                    ? `linear-gradient(135deg, ${action.color}20, ${action.color}10)`
                    : 'rgba(30, 41, 59, 0.5)',
                  borderRadius: '0.75rem',
                  border: `1px solid ${isActive ? action.color + '40' : 'rgba(148, 163, 184, 0.1)'}`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer'
                }}
              >
                <ActionIcon size={20} color={action.color} />
                <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>{action.label}</span>
              </motion.div>
            )
          })}
        </div>
        
        {/* ARIA Activity Feed */}
        <div>
          <h3 style={{ fontSize: '0.9rem', color: '#e2e8f0', marginBottom: '0.75rem' }}>
            ARIA Activity
          </h3>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            {[
              { time: '2 min ago', action: 'Tax loss harvested', value: '+₹12,500', color: '#4ade80' },
              { time: '1 hr ago', action: 'Rebalanced portfolio', value: 'Risk -15%', color: '#14b8a6' },
              { time: '3 hrs ago', action: 'GIFT opportunity', value: 'New alert', color: '#fbbf24' },
              { time: '5 hrs ago', action: 'Voice trade executed', value: 'HDFC Bank', color: '#fb923c' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                style={{
                  padding: '0.75rem',
                  background: 'rgba(30, 41, 59, 0.3)',
                  borderRadius: '0.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>
                  <p style={{ fontSize: '0.8rem', color: '#e2e8f0', marginBottom: '0.2rem' }}>
                    {item.action}
                  </p>
                  <p style={{ fontSize: '0.7rem', color: '#64748b' }}>{item.time}</p>
                </div>
                <span style={{ fontSize: '0.75rem', color: item.color, fontWeight: '600' }}>
                  {item.value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Voice Assistant Bar */}
        {selectedFeature && selectedFeature.title === 'Voice Command' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              position: 'absolute',
              bottom: '1rem',
              left: '1rem',
              right: '1rem',
              background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.2), rgba(251, 191, 36, 0.1))',
              borderRadius: '1rem',
              padding: '1rem',
              border: '1px solid rgba(249, 115, 22, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity
              }}
              style={{
                padding: '0.5rem',
                background: 'rgba(249, 115, 22, 0.3)',
                borderRadius: '50%'
              }}
            >
              <Mic size={16} color="#fb923c" />
            </motion.div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: '0.75rem', color: '#e2e8f0' }}>Voice Active</p>
              <p style={{ fontSize: '0.65rem', color: '#fb923c' }}>"{selectedFeature.demo}"</p>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
