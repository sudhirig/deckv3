import React from 'react'
import { AspectFrame } from '../../components/StandardLayouts'
import { Clock, TrendingUp, Globe, AlertTriangle } from 'lucide-react'

const Slide4WindowCPAV3 = () => {
  return (
    <AspectFrame>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: '#0A1628',
        display: 'flex',
        flexDirection: 'column',
        padding: '48px 64px',
        fontFamily: 'Inter, -apple-system, sans-serif'
      }}>
        {/* Title */}
        <h1 style={{
          fontSize: '36px',
          fontWeight: '700',
          color: '#FFFFFF',
          textAlign: 'center',
          marginBottom: '8px'
        }}>
          THE 18-MONTH WINDOW
        </h1>
        
        <p style={{
          fontSize: '18px',
          color: '#14B8A6',
          textAlign: 'center',
          marginBottom: '32px',
          fontWeight: '600'
        }}>
          + Our Unfair CPA Distribution Advantage
        </p>

        {/* Big Visual Timeline */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(251, 191, 36, 0.05), rgba(251, 113, 133, 0.1))',
          borderRadius: '16px',
          padding: '32px',
          marginBottom: '32px',
          position: 'relative',
          border: '2px solid rgba(20, 184, 166, 0.3)'
        }}>
          {/* Timeline Bar */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '10%',
            right: '10%',
            height: '4px',
            background: 'linear-gradient(90deg, #14B8A6 0%, #14B8A6 33%, #FBBF24 33%, #FBBF24 66%, #FB7185 66%, #FB7185 100%)',
            transform: 'translateY(-50%)',
            borderRadius: '2px'
          }} />
          
          {/* Timeline Points */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            position: 'relative',
            paddingBottom: '60px'
          }}>
            {/* NOW */}
            <div style={{ textAlign: 'center', width: '20%' }}>
              <div style={{
                width: '20px',
                height: '20px',
                background: '#14B8A6',
                borderRadius: '50%',
                margin: '0 auto 12px',
                border: '3px solid #0A1628',
                boxShadow: '0 0 0 2px #14B8A6'
              }} />
              <p style={{ fontSize: '18px', color: '#14B8A6', fontWeight: '700' }}>NOW</p>
              <p style={{ fontSize: '14px', color: '#FFFFFF', marginTop: '8px', fontWeight: '600' }}>
                46% switching
              </p>
              <p style={{ fontSize: '12px', color: '#94A3B8', marginTop: '4px' }}>
                Largest exodus ever
              </p>
            </div>
            
            {/* 6 MONTHS */}
            <div style={{ textAlign: 'center', width: '20%' }}>
              <div style={{
                width: '20px',
                height: '20px',
                background: '#FBBF24',
                borderRadius: '50%',
                margin: '0 auto 12px',
                border: '3px solid #0A1628'
              }} />
              <p style={{ fontSize: '18px', color: '#FBBF24', fontWeight: '700' }}>6MO</p>
              <p style={{ fontSize: '14px', color: '#FFFFFF', marginTop: '8px', fontWeight: '600' }}>
                India $6T
              </p>
              <p style={{ fontSize: '12px', color: '#94A3B8', marginTop: '4px' }}>
                Critical mass
              </p>
            </div>
            
            {/* 12 MONTHS */}
            <div style={{ textAlign: 'center', width: '20%' }}>
              <div style={{
                width: '20px',
                height: '20px',
                background: '#FB7185',
                borderRadius: '50%',
                margin: '0 auto 12px',
                border: '3px solid #0A1628'
              }} />
              <p style={{ fontSize: '18px', color: '#FB7185', fontWeight: '700' }}>12MO</p>
              <p style={{ fontSize: '14px', color: '#FFFFFF', marginTop: '8px', fontWeight: '600' }}>
                GIFT tightens
              </p>
              <p style={{ fontSize: '12px', color: '#94A3B8', marginTop: '4px' }}>
                Regulations close
              </p>
            </div>
            
            {/* 18 MONTHS */}
            <div style={{ textAlign: 'center', width: '20%' }}>
              <div style={{
                width: '20px',
                height: '20px',
                background: '#FB7185',
                borderRadius: '50%',
                margin: '0 auto 12px',
                border: '3px solid #0A1628',
                boxShadow: '0 0 0 2px #FB7185'
              }} />
              <p style={{ fontSize: '18px', color: '#FB7185', fontWeight: '700' }}>18MO</p>
              <p style={{ fontSize: '14px', color: '#FFFFFF', marginTop: '8px', fontWeight: '600' }}>
                Window closes
              </p>
              <p style={{ fontSize: '12px', color: '#94A3B8', marginTop: '4px' }}>
                Market captured
              </p>
            </div>
          </div>
        </div>

        {/* Three Catalysts Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          marginBottom: '32px'
        }}>
          <div style={{
            background: 'rgba(251, 191, 36, 0.05)',
            border: '1px solid rgba(251, 191, 36, 0.2)',
            borderRadius: '8px',
            padding: '16px'
          }}>
            <Clock size={20} color="#FBBF24" style={{ marginBottom: '8px' }} />
            <h4 style={{ fontSize: '14px', color: '#FBBF24', fontWeight: '600', marginBottom: '4px' }}>
              CPA Crisis NOW
            </h4>
            <p style={{ fontSize: '12px', color: '#94A3B8' }}>
              100+ K-1s due March
              <br />
              They need our help
            </p>
          </div>

          <div style={{
            background: 'rgba(20, 184, 166, 0.05)',
            border: '1px solid rgba(20, 184, 166, 0.2)',
            borderRadius: '8px',
            padding: '16px'
          }}>
            <Globe size={20} color="#14B8A6" style={{ marginBottom: '8px' }} />
            <h4 style={{ fontSize: '14px', color: '#14B8A6', fontWeight: '600', marginBottom: '4px' }}>
              India Access Opens
            </h4>
            <p style={{ fontSize: '12px', color: '#94A3B8' }}>
              GIFT City live
              <br />
              Only 3 players
            </p>
          </div>

          <div style={{
            background: 'rgba(251, 113, 133, 0.05)',
            border: '1px solid rgba(251, 113, 133, 0.2)',
            borderRadius: '8px',
            padding: '16px'
          }}>
            <TrendingUp size={20} color="#FB7185" style={{ marginBottom: '8px' }} />
            <h4 style={{ fontSize: '14px', color: '#FB7185', fontWeight: '600', marginBottom: '4px' }}>
              AI Breakthrough
            </h4>
            <p style={{ fontSize: '12px', color: '#94A3B8' }}>
              600% outperformance
              <br />
              Game over for manual
            </p>
          </div>
        </div>

        {/* CPA Distribution Advantage - BIG & EXPLICIT */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(20, 184, 166, 0.05))',
          border: '2px solid #14B8A6',
          borderRadius: '12px',
          padding: '24px',
          marginBottom: '24px'
        }}>
          <h3 style={{
            fontSize: '20px',
            color: '#14B8A6',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '16px'
          }}>
            OUR UNFAIR DISTRIBUTION ADVANTAGE
          </h3>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '16px'
          }}>
            <div style={{
              background: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '8px',
              padding: '12px 20px'
            }}>
              <p style={{ fontSize: '24px', color: '#14B8A6', fontWeight: '700' }}>1,000</p>
              <p style={{ fontSize: '12px', color: '#94A3B8' }}>CPAs</p>
            </div>
            
            <span style={{ fontSize: '24px', color: '#14B8A6' }}>×</span>
            
            <div style={{
              background: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '8px',
              padding: '12px 20px'
            }}>
              <p style={{ fontSize: '24px', color: '#14B8A6', fontWeight: '700' }}>100</p>
              <p style={{ fontSize: '12px', color: '#94A3B8' }}>Clients each</p>
            </div>
            
            <span style={{ fontSize: '24px', color: '#14B8A6' }}>=</span>
            
            <div style={{
              background: 'rgba(20, 184, 166, 0.2)',
              borderRadius: '8px',
              padding: '12px 20px',
              border: '2px solid #14B8A6'
            }}>
              <p style={{ fontSize: '24px', color: '#14B8A6', fontWeight: '700' }}>100,000</p>
              <p style={{ fontSize: '12px', color: '#FFFFFF' }}>Families instantly</p>
            </div>
          </div>
          
          <p style={{
            fontSize: '14px',
            color: '#94A3B8',
            textAlign: 'center',
            fontStyle: 'italic'
          }}>
            While competitors fight expensive B2C wars, we partner with trusted CPAs
          </p>
        </div>

        {/* Bottom Urgency */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          padding: '16px',
          background: 'rgba(251, 113, 133, 0.05)',
          borderRadius: '8px'
        }}>
          <AlertTriangle size={20} color="#FB7185" />
          <p style={{ fontSize: '16px', color: '#FFFFFF' }}>
            Every month you wait = <strong style={{ color: '#FB7185' }}>$60B</strong> India growth missed + 
            <strong style={{ color: '#FB7185' }}> 3,800 families</strong> captured by others
          </p>
        </div>
      </div>
    </AspectFrame>
  )
}

export default Slide4WindowCPAV3
