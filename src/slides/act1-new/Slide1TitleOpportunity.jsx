import React from 'react'
import { AspectFrame } from '../../components/StandardLayouts'
import ARIAIconBadge from '../../components/ARIAIconBadge'

const Slide1TitleOpportunity = () => {
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
        {/* ARIA Logo */}
        <div style={{ marginBottom: '24px' }}>
          <ARIAIconBadge size={120} animated={false} />
        </div>

        {/* Title */}
        <h1 style={{
          fontSize: '48px',
          fontWeight: '300',
          color: '#FFFFFF',
          letterSpacing: '8px',
          marginBottom: '16px'
        }}>
          A R I A
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: '24px',
          fontWeight: '400',
          color: '#94A3B8',
          marginBottom: '48px'
        }}>
          Your Institutional Edge for Global Wealth
        </p>

        {/* Divider */}
        <div style={{
          width: '400px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #14B8A6, transparent)',
          marginBottom: '48px'
        }} />

        {/* Main Hook */}
        <h2 style={{
          fontSize: '32px',
          fontWeight: '600',
          color: '#14B8A6',
          marginBottom: '32px'
        }}>
          THE $124T HIDDEN OPPORTUNITY
        </h2>

        {/* Three Forces */}
        <div style={{
          fontSize: '18px',
          color: '#FFFFFF',
          lineHeight: '1.8',
          textAlign: 'center',
          marginBottom: '48px',
          maxWidth: '800px'
        }}>
          <p style={{ marginBottom: '24px', color: '#94A3B8' }}>
            Three Forces Creating Unprecedented Alpha:
          </p>
          
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '20px',
            textAlign: 'left' 
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <span style={{ fontSize: '24px' }}>📊</span>
              <div>
                <strong style={{ color: '#FFFFFF' }}>46% of HNWIs actively switching advisors NOW</strong>
                <div style={{ fontSize: '14px', color: '#94A3B8', marginTop: '4px' }}>
                  (PwC 2024: Largest movement in history)
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <span style={{ fontSize: '24px' }}>🌏</span>
              <div>
                <strong style={{ color: '#FFFFFF' }}>India: $5T market with 0% tax via GIFT City</strong>
                <div style={{ fontSize: '14px', color: '#94A3B8', marginTop: '4px' }}>
                  (While you pay 35% FPI tax)
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <span style={{ fontSize: '24px' }}>🤖</span>
              <div>
                <strong style={{ color: '#FFFFFF' }}>AI portfolios outperforming humans by 600%</strong>
                <div style={{ fontSize: '14px', color: '#94A3B8', marginTop: '4px' }}>
                  (Stanford 2024: The game has changed)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div style={{
          width: '400px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #14B8A6, transparent)',
          marginBottom: '24px'
        }} />

        {/* Bottom Line */}
        <p style={{
          fontSize: '16px',
          color: '#94A3B8',
          textAlign: 'center',
          maxWidth: '600px',
          lineHeight: '1.6'
        }}>
          <strong style={{ color: '#FFFFFF' }}>Bottom Line:</strong> The 1% aren't smarter.
          <br />
          They just have access you don't. <strong style={{ color: '#14B8A6' }}>Until now.</strong>
        </p>
      </div>
    </AspectFrame>
  )
}

export default Slide1TitleOpportunity
