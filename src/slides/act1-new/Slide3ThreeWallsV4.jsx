import React from 'react'
import { AspectFrame } from '../../components/StandardLayouts'
import { Lock, FileText, Shuffle, DollarSign } from 'lucide-react'

const Slide3ThreeWallsV4 = () => {
  const walls = [
    {
      icon: Lock,
      title: 'ACCESS WALL',
      color: '#FB7185',
      loss: '$60K',
      items: [
        { title: 'India: Locked Out', detail: '35% FPI tax penalty' },
        { title: 'PE/VC: Too Small', detail: 'Need $5M minimum' },
        { title: 'Tax Alpha: Missed', detail: 'No daily TLH' }
      ]
    },
    {
      icon: FileText,
      title: 'COMPLEXITY WALL',
      color: '#FBBF24',
      loss: '$70K',
      items: [
        { title: 'K-1s: Nightmare', detail: '40 hours each' },
        { title: 'CPAs: Overwhelmed', detail: '$500/hour costs' },
        { title: 'GIFT: Maze', detail: '3 lawyers needed' }
      ]
    },
    {
      icon: Shuffle,
      title: 'EXPERIENCE WALL',
      color: '#94A3B8',
      loss: '$60K',
      items: [
        { title: '5-10 Accounts', detail: 'No unified view' },
        { title: 'Manual Tracking', detail: 'Excel chaos' },
        { title: 'Zero AI', detail: 'Blind decisions' }
      ]
    }
  ]

  return (
    <AspectFrame>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #0A1628 0%, #0f172a 50%, #1e293b 100%)',
        display: 'flex',
        flexDirection: 'column',
        padding: '48px 64px',
        fontFamily: 'Inter, -apple-system, sans-serif'
      }}>
        {/* Background gradient mesh */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.2,
          background: 'radial-gradient(ellipse at 20% 30%, rgba(251, 113, 133, 0.1) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />

        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{
            fontSize: '42px',
            fontWeight: '700',
            color: '#FFFFFF',
            marginBottom: '8px',
            letterSpacing: '-0.02em'
          }}>
            THREE WALLS BETWEEN YOU AND ALPHA
          </h1>
          
          <p style={{
            fontSize: '18px',
            color: '#94A3B8',
            fontWeight: '400'
          }}>
            Too Big for Robinhood, Too Small for Goldman
          </p>
        </div>

        {/* Three Walls Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          flex: 1,
          marginBottom: '24px'
        }}>
          {walls.map((wall, index) => {
            const Icon = wall.icon
            return (
              <div key={index} style={{
                position: 'relative',
                background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.5) 0%, rgba(30, 41, 59, 0.3) 100%)',
                borderRadius: '16px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(148, 163, 184, 0.1)'
              }}>
                {/* Color accent bar */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: wall.color
                }} />

                {/* Icon and Title */}
                <div style={{
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  borderBottom: '1px solid rgba(148, 163, 184, 0.1)'
                }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    background: `linear-gradient(135deg, ${wall.color}20 0%, ${wall.color}10 100%)`,
                    border: `1px solid ${wall.color}40`,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                    boxShadow: `0 8px 20px ${wall.color}20`
                  }}>
                    <Icon size={28} color={wall.color} />
                  </div>
                  <h3 style={{
                    fontSize: '16px',
                    fontWeight: '700',
                    color: wall.color,
                    margin: 0,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                  }}>
                    {wall.title}
                  </h3>
                </div>

                {/* Items */}
                <div style={{ flex: 1, padding: '24px' }}>
                  {wall.items.map((item, i) => (
                    <div key={i} style={{ marginBottom: i < 2 ? '20px' : 0 }}>
                      <p style={{ 
                        fontSize: '15px', 
                        color: '#FFFFFF', 
                        fontWeight: '600',
                        margin: '0 0 4px 0'
                      }}>
                        {item.title}
                      </p>
                      <p style={{ 
                        fontSize: '13px', 
                        color: '#64748B',
                        margin: 0
                      }}>
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Loss Amount */}
                <div style={{
                  padding: '20px',
                  background: `linear-gradient(135deg, ${wall.color}15 0%, ${wall.color}05 100%)`,
                  borderTop: `1px solid ${wall.color}30`,
                  textAlign: 'center'
                }}>
                  <p style={{
                    fontSize: '24px',
                    fontWeight: '700',
                    color: wall.color,
                    margin: 0
                  }}>
                    -{wall.loss}/year
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Total Loss Calculation */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(251, 113, 133, 0.1) 0%, rgba(251, 113, 133, 0.05) 100%)',
          borderRadius: '16px',
          padding: '24px',
          marginBottom: '20px',
          border: '1px solid rgba(251, 113, 133, 0.2)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 10px 30px rgba(251, 113, 133, 0.1)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px'
          }}>
            <p style={{ fontSize: '16px', color: '#FFFFFF', margin: 0 }}>
              <strong>Priya's Total Annual Loss:</strong>
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '20px', color: '#FB7185', fontWeight: '600' }}>$60K</span>
              <span style={{ fontSize: '20px', color: '#64748B' }}>+</span>
              <span style={{ fontSize: '20px', color: '#FBBF24', fontWeight: '600' }}>$70K</span>
              <span style={{ fontSize: '20px', color: '#64748B' }}>+</span>
              <span style={{ fontSize: '20px', color: '#94A3B8', fontWeight: '600' }}>$60K</span>
              <span style={{ fontSize: '20px', color: '#64748B' }}>=</span>
              <span style={{ 
                fontSize: '32px', 
                color: '#FB7185', 
                fontWeight: '700',
                marginLeft: '8px',
                textShadow: '0 2px 10px rgba(251, 113, 133, 0.3)'
              }}>
                $190K
              </span>
            </div>
          </div>
        </div>

        {/* CPA Connection */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.05) 0%, transparent 100%)',
          borderRadius: '12px',
          padding: '16px 24px',
          border: '1px solid rgba(251, 191, 36, 0.15)',
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
          <DollarSign size={20} color="#FBBF24" />
          <div>
            <p style={{ fontSize: '15px', color: '#FBBF24', fontWeight: '600', margin: '0 0 2px 0' }}>
              Your CPA sees these walls daily across 100+ clients like you
            </p>
            <p style={{ fontSize: '13px', color: '#94A3B8', margin: 0 }}>
              They're drowning in complexity, not equipped for wealth management
            </p>
          </div>
        </div>
      </div>
    </AspectFrame>
  )
}

export default Slide3ThreeWallsV4
