import React from 'react'
import { AspectFrame } from '../../components/StandardLayouts'
import { Clock, TrendingUp, Globe, AlertTriangle, Users, ArrowRight } from 'lucide-react'

const Slide4WindowCPAV4 = () => {
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
          background: 'radial-gradient(ellipse at 30% 20%, rgba(20, 184, 166, 0.15) 0%, transparent 40%), radial-gradient(ellipse at 70% 80%, rgba(251, 191, 36, 0.1) 0%, transparent 40%)',
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
            THE 18-MONTH WINDOW
          </h1>
          
          <p style={{
            fontSize: '18px',
            color: '#14B8A6',
            fontWeight: '600'
          }}>
            + Our Unfair CPA Distribution Advantage
          </p>
        </div>

        {/* Big Visual Timeline */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(30, 41, 59, 0.2) 100%)',
          borderRadius: '20px',
          padding: '32px',
          marginBottom: '24px',
          position: 'relative',
          border: '1px solid rgba(148, 163, 184, 0.2)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)'
        }}>
          {/* Timeline Progress Bar */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '40px',
            right: '40px',
            height: '4px',
            background: 'rgba(148, 163, 184, 0.2)',
            borderRadius: '2px',
            transform: 'translateY(-50%)'
          }}>
            {/* Gradient progress */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, #14B8A6 0%, #14B8A6 33%, #FBBF24 33%, #FBBF24 66%, #FB7185 66%, #FB7185 100%)',
              borderRadius: '2px'
            }} />
          </div>
          
          {/* Timeline Points */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            position: 'relative',
            paddingBottom: '20px'
          }}>
            {[
              { time: 'NOW', color: '#14B8A6', event: '46% switching', detail: 'Largest exodus ever' },
              { time: '6MO', color: '#FBBF24', event: 'India $6T', detail: 'Critical mass' },
              { time: '12MO', color: '#FB7185', event: 'GIFT tightens', detail: 'Regulations close' },
              { time: '18MO', color: '#FB7185', event: 'Window closes', detail: 'Market captured' }
            ].map((point, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                {/* Circle indicator */}
                <div style={{
                  width: '24px',
                  height: '24px',
                  background: point.color,
                  borderRadius: '50%',
                  margin: '0 auto 16px',
                  border: '3px solid #0A1628',
                  boxShadow: `0 0 20px ${point.color}40`,
                  position: 'relative',
                  zIndex: 2
                }} />
                
                {/* Time label */}
                <p style={{ 
                  fontSize: '16px', 
                  color: point.color, 
                  fontWeight: '700',
                  margin: '0 0 8px 0'
                }}>
                  {point.time}
                </p>
                
                {/* Event */}
                <p style={{ 
                  fontSize: '14px', 
                  color: '#FFFFFF', 
                  fontWeight: '600',
                  margin: '0 0 4px 0'
                }}>
                  {point.event}
                </p>
                
                {/* Detail */}
                <p style={{ 
                  fontSize: '12px', 
                  color: '#64748B',
                  margin: 0
                }}>
                  {point.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Three Catalysts */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
          marginBottom: '24px'
        }}>
          {[
            { icon: Clock, color: '#FBBF24', title: 'CPA Crisis NOW', detail: '100+ K-1s due March\nThey need our help' },
            { icon: Globe, color: '#14B8A6', title: 'India Access Opens', detail: 'GIFT City live\nOnly 3 players' },
            { icon: TrendingUp, color: '#FB7185', title: 'AI Breakthrough', detail: '600% outperformance\nGame over for manual' }
          ].map((catalyst, i) => {
            const Icon = catalyst.icon
            return (
              <div key={i} style={{
                background: `linear-gradient(135deg, ${catalyst.color}10 0%, ${catalyst.color}05 100%)`,
                border: `1px solid ${catalyst.color}30`,
                borderRadius: '12px',
                padding: '16px',
                display: 'flex',
                gap: '12px',
                backdropFilter: 'blur(5px)'
              }}>
                <Icon size={20} color={catalyst.color} style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ 
                    fontSize: '14px', 
                    color: catalyst.color, 
                    fontWeight: '600', 
                    margin: '0 0 4px 0' 
                  }}>
                    {catalyst.title}
                  </h4>
                  <p style={{ 
                    fontSize: '12px', 
                    color: '#94A3B8',
                    margin: 0,
                    whiteSpace: 'pre-line'
                  }}>
                    {catalyst.detail}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* CPA Distribution Advantage - BIG & EXPLICIT */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.15) 0%, rgba(20, 184, 166, 0.05) 100%)',
          border: '2px solid rgba(20, 184, 166, 0.3)',
          borderRadius: '16px',
          padding: '28px',
          marginBottom: '24px',
          boxShadow: '0 20px 40px rgba(20, 184, 166, 0.1)',
          backdropFilter: 'blur(10px)'
        }}>
          <h3 style={{
            fontSize: '18px',
            color: '#14B8A6',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '20px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            OUR UNFAIR DISTRIBUTION ADVANTAGE
          </h3>
          
          {/* Visual equation */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '20px'
          }}>
            {/* CPAs */}
            <div style={{
              background: 'rgba(10, 22, 40, 0.8)',
              borderRadius: '12px',
              padding: '16px 24px',
              border: '1px solid rgba(20, 184, 166, 0.3)',
              textAlign: 'center'
            }}>
              <Users size={24} color="#14B8A6" style={{ marginBottom: '8px' }} />
              <p style={{ fontSize: '28px', color: '#14B8A6', fontWeight: '700', margin: '0 0 4px 0' }}>
                1,000
              </p>
              <p style={{ fontSize: '11px', color: '#94A3B8', margin: 0 }}>CPAs</p>
            </div>
            
            <span style={{ fontSize: '24px', color: '#14B8A6' }}>×</span>
            
            {/* Clients */}
            <div style={{
              background: 'rgba(10, 22, 40, 0.8)',
              borderRadius: '12px',
              padding: '16px 24px',
              border: '1px solid rgba(20, 184, 166, 0.3)',
              textAlign: 'center'
            }}>
              <p style={{ fontSize: '28px', color: '#14B8A6', fontWeight: '700', margin: '0 0 4px 0' }}>
                100
              </p>
              <p style={{ fontSize: '11px', color: '#94A3B8', margin: 0 }}>Clients each</p>
            </div>
            
            <ArrowRight size={24} color="#14B8A6" />
            
            {/* Result */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.3) 0%, rgba(20, 184, 166, 0.2) 100%)',
              borderRadius: '12px',
              padding: '16px 24px',
              border: '2px solid #14B8A6',
              textAlign: 'center',
              boxShadow: '0 8px 20px rgba(20, 184, 166, 0.3)'
            }}>
              <p style={{ fontSize: '28px', color: '#14B8A6', fontWeight: '700', margin: '0 0 4px 0' }}>
                100,000
              </p>
              <p style={{ fontSize: '11px', color: '#FFFFFF', margin: 0, fontWeight: '600' }}>
                Families instantly
              </p>
            </div>
          </div>
          
          <p style={{
            fontSize: '14px',
            color: '#94A3B8',
            textAlign: 'center',
            fontStyle: 'italic',
            margin: 0
          }}>
            While competitors fight expensive B2C wars, we partner with trusted CPAs
          </p>
        </div>

        {/* Bottom Urgency */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          padding: '16px 24px',
          background: 'linear-gradient(135deg, rgba(251, 113, 133, 0.1) 0%, rgba(251, 113, 133, 0.05) 100%)',
          borderRadius: '12px',
          border: '1px solid rgba(251, 113, 133, 0.2)',
          backdropFilter: 'blur(5px)'
        }}>
          <AlertTriangle size={20} color="#FB7185" />
          <p style={{ fontSize: '15px', color: '#FFFFFF', margin: 0 }}>
            Every month you wait = <strong style={{ color: '#FB7185' }}>$60B</strong> India growth missed + 
            <strong style={{ color: '#FB7185' }}> 3,800 families</strong> captured by others
          </p>
        </div>
      </div>
    </AspectFrame>
  )
}

export default Slide4WindowCPAV4
