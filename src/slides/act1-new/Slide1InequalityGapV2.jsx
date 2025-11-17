import React from 'react'
import { AspectFrame } from '../../components/StandardLayouts'

const Slide1InequalityGapV2 = () => {
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
          fontSize: '42px',
          fontWeight: '300',
          color: '#FFFFFF',
          letterSpacing: '2px',
          marginBottom: '16px',
          textAlign: 'center'
        }}>
          THE WEALTH INEQUALITY
        </h1>
        
        <p style={{
          fontSize: '20px',
          color: '#94A3B8',
          marginBottom: '64px',
          textAlign: 'center'
        }}>
          Same Markets. Different Rules.
        </p>

        {/* Main Comparison Table */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          marginBottom: '64px',
          maxWidth: '900px',
          width: '100%'
        }}>
          {/* Goldman Client */}
          <div>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#14B8A6',
              marginBottom: '32px',
              textAlign: 'center'
            }}>
              Goldman Client
            </h2>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingBottom: '16px',
                borderBottom: '1px solid rgba(20, 184, 166, 0.2)'
              }}>
                <span style={{ color: '#94A3B8', fontSize: '16px' }}>Global Access</span>
                <span style={{ color: '#14B8A6', fontSize: '16px', fontWeight: '600' }}>100+ Markets</span>
              </div>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingBottom: '16px',
                borderBottom: '1px solid rgba(20, 184, 166, 0.2)'
              }}>
                <span style={{ color: '#94A3B8', fontSize: '16px' }}>India Tax</span>
                <span style={{ color: '#14B8A6', fontSize: '16px', fontWeight: '600' }}>0% (GIFT)</span>
              </div>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingBottom: '16px',
                borderBottom: '1px solid rgba(20, 184, 166, 0.2)'
              }}>
                <span style={{ color: '#94A3B8', fontSize: '16px' }}>Portfolio Mgmt</span>
                <span style={{ color: '#14B8A6', fontSize: '16px', fontWeight: '600' }}>AI-Optimized</span>
              </div>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingBottom: '16px',
                borderBottom: '1px solid rgba(20, 184, 166, 0.2)'
              }}>
                <span style={{ color: '#94A3B8', fontSize: '16px' }}>Platform</span>
                <span style={{ color: '#14B8A6', fontSize: '16px', fontWeight: '600' }}>Single View</span>
              </div>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingBottom: '16px',
                borderBottom: '1px solid rgba(20, 184, 166, 0.2)'
              }}>
                <span style={{ color: '#94A3B8', fontSize: '16px' }}>Annual Alpha</span>
                <span style={{ color: '#14B8A6', fontSize: '20px', fontWeight: '700' }}>+8.2%</span>
              </div>
            </div>
          </div>

          {/* Your Reality */}
          <div>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#FB7185',
              marginBottom: '32px',
              textAlign: 'center'
            }}>
              Your Reality
            </h2>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingBottom: '16px',
                borderBottom: '1px solid rgba(251, 113, 133, 0.2)'
              }}>
                <span style={{ color: '#94A3B8', fontSize: '16px' }}>Global Access</span>
                <span style={{ color: '#FB7185', fontSize: '16px', fontWeight: '600' }}>US-Only Trap</span>
              </div>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingBottom: '16px',
                borderBottom: '1px solid rgba(251, 113, 133, 0.2)'
              }}>
                <span style={{ color: '#94A3B8', fontSize: '16px' }}>India Tax</span>
                <span style={{ color: '#FB7185', fontSize: '16px', fontWeight: '600' }}>35% (FPI)</span>
              </div>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingBottom: '16px',
                borderBottom: '1px solid rgba(251, 113, 133, 0.2)'
              }}>
                <span style={{ color: '#94A3B8', fontSize: '16px' }}>Portfolio Mgmt</span>
                <span style={{ color: '#FB7185', fontSize: '16px', fontWeight: '600' }}>Manual Chaos</span>
              </div>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingBottom: '16px',
                borderBottom: '1px solid rgba(251, 113, 133, 0.2)'
              }}>
                <span style={{ color: '#94A3B8', fontSize: '16px' }}>Platform</span>
                <span style={{ color: '#FB7185', fontSize: '16px', fontWeight: '600' }}>10+ Providers</span>
              </div>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingBottom: '16px',
                borderBottom: '1px solid rgba(251, 113, 133, 0.2)'
              }}>
                <span style={{ color: '#94A3B8', fontSize: '16px' }}>Annual Alpha</span>
                <span style={{ color: '#FB7185', fontSize: '20px', fontWeight: '700' }}>+2.5%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Annual Loss Comparison */}
        <div style={{
          background: 'rgba(251, 113, 133, 0.05)',
          border: '1px solid rgba(251, 113, 133, 0.2)',
          borderRadius: '12px',
          padding: '24px 48px',
          marginBottom: '48px',
          maxWidth: '700px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '32px',
            textAlign: 'center'
          }}>
            <div>
              <p style={{ fontSize: '14px', color: '#94A3B8', marginBottom: '8px' }}>
                On $3M Portfolio
              </p>
              <p style={{ fontSize: '28px', color: '#FB7185', fontWeight: '700' }}>
                -$180K
              </p>
              <p style={{ fontSize: '14px', color: '#94A3B8' }}>
                Your Annual Loss
              </p>
            </div>
            <div>
              <p style={{ fontSize: '14px', color: '#94A3B8', marginBottom: '8px' }}>
                On $10M Portfolio
              </p>
              <p style={{ fontSize: '28px', color: '#FB7185', fontWeight: '700' }}>
                -$570K
              </p>
              <p style={{ fontSize: '14px', color: '#94A3B8' }}>
                Your Annual Loss
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div style={{
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#FFFFFF',
            marginBottom: '8px'
          }}>
            The inequality ends now.
          </p>
          <p style={{
            fontSize: '16px',
            color: '#94A3B8'
          }}>
            Technology finally democratizes institutional advantages.
          </p>
        </div>
      </div>
    </AspectFrame>
  )
}

export default Slide1InequalityGapV2
