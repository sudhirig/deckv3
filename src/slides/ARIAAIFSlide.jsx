import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { AspectFrame } from '../components/StandardLayouts'
import { Building2, Users, Wallet } from 'lucide-react'
import './SlideStyles.css'

export default function ARIAAIFSlide() {
  const [hoveredTier, setHoveredTier] = useState(null)
  
  const aifTiers = [
    {
      name: 'ARIA Elite',
      minInvestment: '₹1 Cr',
      targetReturns: '18-22%',
      managementFee: '1.5%',
      color: '#60a5fa',
      features: [
        'Core AI strategies',
        'Quarterly rebalancing',
        'Tax harvesting',
        'Digital reporting'
      ],
      investors: 450,
      aum: '₹280 Cr'
    },
    {
      name: 'ARIA Prime',
      minInvestment: '₹5 Cr',
      targetReturns: '22-28%',
      managementFee: '1.25%',
      color: '#14b8a6',
      features: [
        'Advanced AI strategies',
        'Daily optimization',
        'GIFT City access',
        'Dedicated RM',
        'Custom reports'
      ],
      investors: 180,
      aum: '₹420 Cr',
      recommended: true
    },
    {
      name: 'ARIA Sovereign',
      minInvestment: '₹25 Cr',
      targetReturns: '28-35%',
      managementFee: '1%',
      color: '#fbbf24',
      features: [
        'Exclusive strategies',
        'Real-time execution',
        'Global opportunities',
        'Family office services',
        'Tax structuring',
        'Estate planning'
      ],
      investors: 35,
      aum: '₹150 Cr'
    }
  ]
  
  return (
    <AspectFrame>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #0a0f1b 0%, #0f172a 50%, #1e293b 100%)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem 3rem'
      }}>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '2rem'
          }}
        >
          <div>
            <div style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(139, 92, 246, 0.15)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              borderRadius: '20px',
              padding: '0.4rem 1rem',
              marginBottom: '0.75rem'
            }}>
              <Wallet size={14} color="#8B5CF6" />
              <span style={{ color: '#8B5CF6', fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.05em' }}>
                ARIA WEALTH
              </span>
            </div>
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#FFFFFF',
              marginBottom: '0.5rem'
            }}>
              ARIA AIF Tiers
            </h1>
            <p style={{
              fontSize: '1.1rem',
              color: '#94a3b8'
            }}>
              GIFT City Gateway + AI strategies delivering <span style={{ color: '#10B981', fontWeight: '600' }}>+300-500bps</span> alpha
            </p>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2.5rem'
          }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '2.25rem', fontWeight: '800', color: '#fbbf24' }}>₹850 Cr</p>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Total AUM</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '2.25rem', fontWeight: '800', color: '#14b8a6' }}>665</p>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Investors</p>
            </div>
          </div>
        </motion.div>

        {/* AIF Tiers - Full Width */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem'
        }}>
          {aifTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              onHoverStart={() => setHoveredTier(index)}
              onHoverEnd={() => setHoveredTier(null)}
              style={{
                background: hoveredTier === index 
                  ? `linear-gradient(135deg, ${tier.color}15, ${tier.color}05)`
                  : 'rgba(30, 41, 59, 0.4)',
                borderRadius: '1rem',
                padding: '1.75rem',
                border: tier.recommended 
                  ? `2px solid ${tier.color}50`
                  : '1px solid rgba(148, 163, 184, 0.15)',
                position: 'relative',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {tier.recommended && (
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    position: 'absolute',
                    top: '-0.6rem',
                    right: '1.5rem',
                    padding: '0.3rem 1rem',
                    background: 'linear-gradient(135deg, #14b8a6, #06b6d4)',
                    borderRadius: '1rem',
                    fontSize: '0.75rem',
                    color: '#fff',
                    fontWeight: '700'
                  }}
                >
                  MOST POPULAR
                </motion.div>
              )}
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.25rem'
              }}>
                <Building2 size={28} color={tier.color} />
                <h3 style={{
                  fontSize: '1.5rem',
                  color: '#e2e8f0',
                  fontWeight: '700'
                }}>
                  {tier.name}
                </h3>
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ fontSize: '2.5rem', fontWeight: '800', color: tier.color }}>
                  {tier.minInvestment}
                </p>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Minimum Investment</p>
              </div>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                marginBottom: '1.25rem'
              }}>
                <div>
                  <p style={{ fontSize: '1.5rem', fontWeight: '700', color: '#4ade80' }}>
                    {tier.targetReturns}
                  </p>
                  <p style={{ fontSize: '0.8rem', color: '#64748b' }}>Target Returns</p>
                </div>
                <div>
                  <p style={{ fontSize: '1.5rem', fontWeight: '700', color: '#60a5fa' }}>
                    {tier.managementFee}
                  </p>
                  <p style={{ fontSize: '0.8rem', color: '#64748b' }}>Mgmt Fee</p>
                </div>
              </div>
              
              <div style={{
                borderTop: '1px solid rgba(148, 163, 184, 0.15)',
                paddingTop: '1.25rem',
                flex: 1
              }}>
                {tier.features.map((feature, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      marginBottom: '0.6rem'
                    }}
                  >
                    <div style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: tier.color
                    }} />
                    <span style={{
                      fontSize: '1rem',
                      color: '#e2e8f0'
                    }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(148, 163, 184, 0.15)',
                marginTop: 'auto'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Users size={16} color="#94a3b8" />
                  <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                    {tier.investors} investors
                  </span>
                </div>
                <span style={{
                  fontSize: '1rem',
                  color: tier.color,
                  fontWeight: '700'
                }}>
                  {tier.aum}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AspectFrame>
  )
}
