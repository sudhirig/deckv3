import React from 'react'
import { AspectFrame } from '../../components/StandardLayouts'

const Slide1InequalityV3 = () => {
  return (
    <AspectFrame>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: '#0A1628',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '64px',
        fontFamily: 'Inter, -apple-system, sans-serif'
      }}>
        {/* Title */}
        <h1 style={{
          fontSize: '40px',
          fontWeight: '700',
          color: '#FFFFFF',
          marginBottom: '48px',
          textAlign: 'center'
        }}>
          THE WEALTH INEQUALITY GAP
        </h1>

        {/* Comparison Table */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4px',
          maxWidth: '800px',
          width: '100%',
          background: 'rgba(148, 163, 184, 0.1)',
          borderRadius: '16px',
          padding: '4px',
          marginBottom: '48px'
        }}>
          {/* Header Row */}
          <div style={{
            background: 'rgba(20, 184, 166, 0.1)',
            borderRadius: '12px 0 0 0',
            padding: '24px',
            borderBottom: '2px solid rgba(20, 184, 166, 0.3)'
          }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#14B8A6',
              textAlign: 'center'
            }}>
              Goldman Client
            </h2>
          </div>
          
          <div style={{
            background: 'rgba(251, 113, 133, 0.1)',
            borderRadius: '0 12px 0 0',
            padding: '24px',
            borderBottom: '2px solid rgba(251, 113, 133, 0.3)'
          }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#FB7185',
              textAlign: 'center'
            }}>
              Your Reality
            </h2>
          </div>

          {/* Row 1: Access */}
          <div style={{
            background: 'rgba(20, 184, 166, 0.05)',
            padding: '20px 24px',
            borderRight: '1px solid rgba(148, 163, 184, 0.1)'
          }}>
            <p style={{ fontSize: '18px', color: '#14B8A6', fontWeight: '600' }}>
              Global access
            </p>
            <p style={{ fontSize: '14px', color: '#94A3B8', marginTop: '4px' }}>
              87 markets instantly
            </p>
          </div>
          
          <div style={{
            background: 'rgba(251, 113, 133, 0.05)',
            padding: '20px 24px'
          }}>
            <p style={{ fontSize: '18px', color: '#FFFFFF', fontWeight: '600' }}>
              US-only trap
            </p>
            <p style={{ fontSize: '14px', color: '#94A3B8', marginTop: '4px' }}>
              82% concentration risk
            </p>
          </div>

          {/* Row 2: India Tax */}
          <div style={{
            background: 'rgba(20, 184, 166, 0.05)',
            padding: '20px 24px',
            borderRight: '1px solid rgba(148, 163, 184, 0.1)'
          }}>
            <p style={{ fontSize: '18px', color: '#14B8A6', fontWeight: '600' }}>
              0% India tax
            </p>
            <p style={{ fontSize: '14px', color: '#94A3B8', marginTop: '4px' }}>
              Via GIFT City AIF
            </p>
          </div>
          
          <div style={{
            background: 'rgba(251, 113, 133, 0.05)',
            padding: '20px 24px'
          }}>
            <p style={{ fontSize: '18px', color: '#FFFFFF', fontWeight: '600' }}>
              35% India tax
            </p>
            <p style={{ fontSize: '14px', color: '#94A3B8', marginTop: '4px' }}>
              FPI penalty
            </p>
          </div>

          {/* Row 3: Technology */}
          <div style={{
            background: 'rgba(20, 184, 166, 0.05)',
            padding: '20px 24px',
            borderRight: '1px solid rgba(148, 163, 184, 0.1)'
          }}>
            <p style={{ fontSize: '18px', color: '#14B8A6', fontWeight: '600' }}>
              AI optimization
            </p>
            <p style={{ fontSize: '14px', color: '#94A3B8', marginTop: '4px' }}>
              600% outperformance
            </p>
          </div>
          
          <div style={{
            background: 'rgba(251, 113, 133, 0.05)',
            padding: '20px 24px'
          }}>
            <p style={{ fontSize: '18px', color: '#FFFFFF', fontWeight: '600' }}>
              Manual chaos
            </p>
            <p style={{ fontSize: '14px', color: '#94A3B8', marginTop: '4px' }}>
              Excel + emails
            </p>
          </div>

          {/* Row 4: Platform */}
          <div style={{
            background: 'rgba(20, 184, 166, 0.05)',
            padding: '20px 24px',
            borderRight: '1px solid rgba(148, 163, 184, 0.1)'
          }}>
            <p style={{ fontSize: '18px', color: '#14B8A6', fontWeight: '600' }}>
              Single platform
            </p>
            <p style={{ fontSize: '14px', color: '#94A3B8', marginTop: '4px' }}>
              Unified command center
            </p>
          </div>
          
          <div style={{
            background: 'rgba(251, 113, 133, 0.05)',
            padding: '20px 24px'
          }}>
            <p style={{ fontSize: '18px', color: '#FFFFFF', fontWeight: '600' }}>
              10+ providers
            </p>
            <p style={{ fontSize: '14px', color: '#94A3B8', marginTop: '4px' }}>
              Fragmented mess
            </p>
          </div>

          {/* Row 5: Annual Results */}
          <div style={{
            background: 'rgba(20, 184, 166, 0.15)',
            padding: '24px',
            borderRadius: '0 0 0 12px',
            borderTop: '2px solid rgba(20, 184, 166, 0.3)',
            borderRight: '1px solid rgba(148, 163, 184, 0.1)'
          }}>
            <p style={{ fontSize: '16px', color: '#94A3B8', marginBottom: '8px' }}>
              Annual Alpha
            </p>
            <p style={{ fontSize: '28px', color: '#14B8A6', fontWeight: '700' }}>
              +8.2%
            </p>
          </div>
          
          <div style={{
            background: 'rgba(251, 113, 133, 0.15)',
            padding: '24px',
            borderRadius: '0 0 12px 0',
            borderTop: '2px solid rgba(251, 113, 133, 0.3)'
          }}>
            <p style={{ fontSize: '16px', color: '#94A3B8', marginBottom: '8px' }}>
              Annual Alpha
            </p>
            <p style={{ fontSize: '28px', color: '#FB7185', fontWeight: '700' }}>
              +2.5%
            </p>
          </div>
        </div>

        {/* Annual Loss */}
        <div style={{
          background: 'rgba(251, 113, 133, 0.05)',
          border: '2px solid rgba(251, 113, 133, 0.2)',
          borderRadius: '12px',
          padding: '20px 40px',
          marginBottom: '32px'
        }}>
          <p style={{
            fontSize: '18px',
            color: '#FFFFFF'
          }}>
            Your Annual Loss: <strong style={{ color: '#FB7185', fontSize: '24px' }}>$190,000</strong> on $3M portfolio
          </p>
        </div>

        {/* Bottom Message */}
        <p style={{
          fontSize: '20px',
          color: '#94A3B8',
          textAlign: 'center'
        }}>
          The inequality ends now.
        </p>
      </div>
    </AspectFrame>
  )
}

export default Slide1InequalityV3
