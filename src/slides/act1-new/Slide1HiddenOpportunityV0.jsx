import React from 'react'
import { AspectFrame } from '../../components/StandardLayouts'
import ARIAIconBadge from '../../components/ARIAIconBadge'

const Slide1HiddenOpportunityV0 = () => {
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
        fontFamily: 'Inter, -apple-system, sans-serif',
        opacity: 0,
        animation: 'fadeIn 0.5s forwards'
      }}>
        <style>{`
          @keyframes fadeIn {
            to { opacity: 1; }
          }
        `}</style>

        {/* ARIA Logo - 120px as specified */}
        <div style={{ marginBottom: '24px' }}>
          <ARIAIconBadge size={120} animated={false} />
        </div>

        {/* ARIA Title */}
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
          fontSize: '18px',
          color: '#94A3B8',
          marginBottom: '48px'
        }}>
          Your Institutional Edge for Global Wealth
        </p>

        {/* Divider */}
        <div style={{
          width: '60%',
          height: '1px',
          background: '#94A3B8',
          opacity: 0.3,
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

        {/* Subtitle for forces */}
        <p style={{
          fontSize: '18px',
          color: '#94A3B8',
          marginBottom: '32px'
        }}>
          Three Forces Creating Unprecedented Alpha:
        </p>

        {/* Three Forces */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          maxWidth: '700px',
          marginBottom: '48px'
        }}>
          {/* Force 1 */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
            <span style={{ fontSize: '24px' }}>📊</span>
            <div>
              <p style={{ fontSize: '16px', color: '#FFFFFF', marginBottom: '4px' }}>
                <strong>46% of HNWIs actively switching advisors NOW</strong>
              </p>
              <p style={{ fontSize: '14px', color: '#94A3B8' }}>
                (PwC 2024: Largest movement in history)
              </p>
            </div>
          </div>

          {/* Force 2 */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
            <span style={{ fontSize: '24px' }}>🌏</span>
            <div>
              <p style={{ fontSize: '16px', color: '#FFFFFF', marginBottom: '4px' }}>
                <strong>India: $5T market with 0% tax via GIFT City</strong>
              </p>
              <p style={{ fontSize: '14px', color: '#94A3B8' }}>
                (While you pay 35% FPI tax)
              </p>
            </div>
          </div>

          {/* Force 3 */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
            <span style={{ fontSize: '24px' }}>🤖</span>
            <div>
              <p style={{ fontSize: '16px', color: '#FFFFFF', marginBottom: '4px' }}>
                <strong>AI portfolios outperforming humans by 600%</strong>
              </p>
              <p style={{ fontSize: '14px', color: '#94A3B8' }}>
                (Stanford 2024: The game has changed)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div style={{
          width: '60%',
          height: '1px',
          background: '#94A3B8',
          opacity: 0.3,
          marginBottom: '32px'
        }} />

        {/* Bottom Line */}
        <p style={{
          fontSize: '18px',
          color: '#FFFFFF',
          textAlign: 'center',
          maxWidth: '600px'
        }}>
          <strong>Bottom Line:</strong> The 1% aren't smarter.
          <br />
          They just have access you don't. <strong style={{ color: '#14B8A6' }}>Until now.</strong>
        </p>
      </div>
    </AspectFrame>
  )
}

export default Slide1HiddenOpportunityV0
