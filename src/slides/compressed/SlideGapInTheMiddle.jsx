import React from 'react'
import { AspectFrame } from '../../components/StandardLayouts'
import { TrendingUp, TrendingDown, AlertTriangle, DollarSign, FileText, Globe } from 'lucide-react'

const SlideGapInTheMiddle = () => {
  return (
    <AspectFrame>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #0A1628 0%, #0f172a 50%, #1e293b 100%)',
        display: 'flex',
        flexDirection: 'column',
        padding: '40px 48px',
        fontFamily: 'Inter, -apple-system, sans-serif',
        overflow: 'hidden'
      }}>
        {/* Background gradient mesh */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.3,
          background: 'radial-gradient(ellipse at top left, rgba(20, 184, 166, 0.1) 0%, transparent 40%), radial-gradient(ellipse at bottom right, rgba(251, 113, 133, 0.1) 0%, transparent 40%)',
          pointerEvents: 'none'
        }} />

        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h1 style={{
            fontSize: '44px',
            fontWeight: '700',
            color: '#FFFFFF',
            marginBottom: '8px',
            letterSpacing: '-0.02em'
          }}>
            THE GAP IN THE MIDDLE
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#94A3B8',
            fontWeight: '400'
          }}>
            7.9M families stuck between two worlds
          </p>
        </div>

        {/* Three Column Comparison */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr 1fr',
          gap: '16px',
          marginBottom: '20px',
          flex: 1
        }}>
          {/* ROBINHOOD Column */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(148, 163, 184, 0.1) 0%, rgba(148, 163, 184, 0.05) 100%)',
            borderRadius: '16px',
            border: '1px solid rgba(148, 163, 184, 0.2)',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              background: 'rgba(148, 163, 184, 0.1)',
              borderRadius: '8px',
              padding: '12px',
              marginBottom: '16px',
              textAlign: 'center'
            }}>
              <p style={{ fontSize: '14px', color: '#64748B', margin: 0, fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                ROBINHOOD
              </p>
              <p style={{ fontSize: '20px', color: '#94A3B8', margin: '4px 0 0 0', fontWeight: '700' }}>
                {'<$500K'}
              </p>
            </div>

            <div style={{ flex: 1 }}>
              {[
                { label: 'US Only', icon: '🇺🇸' },
                { label: 'Stocks Only', icon: '📈' },
                { label: 'Self-Serve', icon: '🤖' },
                { label: 'No India', icon: '🚫' }
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 0',
                  borderBottom: i < 3 ? '1px solid rgba(148, 163, 184, 0.1)' : 'none'
                }}>
                  <span style={{ fontSize: '16px' }}>{item.icon}</span>
                  <p style={{ fontSize: '14px', color: '#94A3B8', margin: 0 }}>{item.label}</p>
                </div>
              ))}
            </div>

            <div style={{
              background: 'rgba(148, 163, 184, 0.1)',
              borderRadius: '8px',
              padding: '12px',
              textAlign: 'center',
              marginTop: '12px'
            }}>
              <p style={{ fontSize: '11px', color: '#64748B', margin: 0 }}>Annual Alpha</p>
              <p style={{ fontSize: '24px', color: '#94A3B8', margin: 0, fontWeight: '700' }}>+1.5%</p>
            </div>
          </div>

          {/* THE GAP Column - Center */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(251, 113, 133, 0.15) 0%, rgba(251, 113, 133, 0.05) 100%)',
            borderRadius: '16px',
            border: '2px solid rgba(251, 113, 133, 0.4)',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 10px 40px rgba(251, 113, 133, 0.2)'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(251, 113, 133, 0.2) 0%, rgba(251, 113, 133, 0.1) 100%)',
              borderRadius: '8px',
              padding: '12px',
              marginBottom: '16px',
              textAlign: 'center'
            }}>
              <p style={{ fontSize: '14px', color: '#FB7185', margin: 0, fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                THE GAP
              </p>
              <p style={{ fontSize: '20px', color: '#FFFFFF', margin: '4px 0 0 0', fontWeight: '700' }}>
                $1M - $25M
              </p>
            </div>

            {/* STUCK indicator */}
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center'
            }}>
              <AlertTriangle size={40} color="#FB7185" style={{ marginBottom: '12px' }} />
              <p style={{ fontSize: '28px', color: '#FFFFFF', fontWeight: '700', margin: '0 0 8px 0' }}>
                STUCK
              </p>
              <p style={{ fontSize: '14px', color: '#94A3B8', margin: 0 }}>
                Too small for Goldman
              </p>
              <p style={{ fontSize: '14px', color: '#94A3B8', margin: '4px 0 0 0' }}>
                Outgrown Robinhood
              </p>
            </div>

            {/* Annual Loss */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(251, 113, 133, 0.3) 0%, rgba(251, 113, 133, 0.2) 100%)',
              borderRadius: '8px',
              padding: '16px',
              textAlign: 'center',
              marginTop: '12px',
              border: '1px solid rgba(251, 113, 133, 0.4)'
            }}>
              <p style={{ fontSize: '11px', color: '#FB7185', margin: 0, fontWeight: '600' }}>ANNUAL LOSS</p>
              <p style={{ fontSize: '32px', color: '#FFFFFF', margin: '4px 0 0 0', fontWeight: '700' }}>
                -$190K
              </p>
            </div>
          </div>

          {/* GOLDMAN Column */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, rgba(20, 184, 166, 0.05) 100%)',
            borderRadius: '16px',
            border: '1px solid rgba(20, 184, 166, 0.2)',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              background: 'rgba(20, 184, 166, 0.1)',
              borderRadius: '8px',
              padding: '12px',
              marginBottom: '16px',
              textAlign: 'center'
            }}>
              <p style={{ fontSize: '14px', color: '#14B8A6', margin: 0, fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                GOLDMAN
              </p>
              <p style={{ fontSize: '20px', color: '#14B8A6', margin: '4px 0 0 0', fontWeight: '700' }}>
                $25M+
              </p>
            </div>

            <div style={{ flex: 1 }}>
              {[
                { label: 'Global', icon: '🌍' },
                { label: '+ Alts', icon: '💎' },
                { label: 'Advised', icon: '👔' },
                { label: '0% India Tax', icon: '🇮🇳' }
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 0',
                  borderBottom: i < 3 ? '1px solid rgba(20, 184, 166, 0.1)' : 'none'
                }}>
                  <span style={{ fontSize: '16px' }}>{item.icon}</span>
                  <p style={{ fontSize: '14px', color: '#14B8A6', margin: 0, fontWeight: '500' }}>{item.label}</p>
                </div>
              ))}
            </div>

            <div style={{
              background: 'rgba(20, 184, 166, 0.15)',
              borderRadius: '8px',
              padding: '12px',
              textAlign: 'center',
              marginTop: '12px'
            }}>
              <p style={{ fontSize: '11px', color: '#14B8A6', margin: 0 }}>Annual Alpha</p>
              <p style={{ fontSize: '24px', color: '#14B8A6', margin: 0, fontWeight: '700' }}>+8.2%</p>
            </div>
          </div>
        </div>

        {/* The Three Failures Box */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(251, 191, 36, 0.05) 100%)',
          borderRadius: '12px',
          border: '1px solid rgba(251, 191, 36, 0.3)',
          padding: '16px 24px',
          marginBottom: '16px'
        }}>
          <p style={{
            fontSize: '13px',
            color: '#FBBF24',
            fontWeight: '700',
            margin: '0 0 12px 0',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            THE THREE FAILURES
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <DollarSign size={20} color="#FBBF24" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <p style={{ fontSize: '14px', color: '#FFFFFF', margin: 0, fontWeight: '600' }}>Tax</p>
                <p style={{ fontSize: '12px', color: '#94A3B8', margin: '2px 0 0 0' }}>Yearly TLH → miss 2% alpha</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <FileText size={20} color="#FBBF24" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <p style={{ fontSize: '14px', color: '#FFFFFF', margin: 0, fontWeight: '600' }}>Alts</p>
                <p style={{ fontSize: '12px', color: '#94A3B8', margin: '2px 0 0 0' }}>80% data in PDFs → no access</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <Globe size={20} color="#FBBF24" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <p style={{ fontSize: '14px', color: '#FFFFFF', margin: 0, fontWeight: '600' }}>India</p>
                <p style={{ fontSize: '12px', color: '#94A3B8', margin: '2px 0 0 0' }}>35% tax, 6mo setup, $5M mins</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '32px',
          padding: '14px 24px',
          background: 'rgba(20, 184, 166, 0.05)',
          borderRadius: '10px',
          border: '1px solid rgba(20, 184, 166, 0.2)'
        }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '22px', color: '#14B8A6', fontWeight: '700', margin: 0 }}>$107T</p>
            <p style={{ fontSize: '11px', color: '#94A3B8', margin: '2px 0 0 0' }}>wealth</p>
          </div>
          <div style={{ width: '1px', background: 'rgba(148, 163, 184, 0.2)' }} />
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '22px', color: '#14B8A6', fontWeight: '700', margin: 0 }}>46%</p>
            <p style={{ fontSize: '11px', color: '#94A3B8', margin: '2px 0 0 0' }}>switching</p>
          </div>
          <div style={{ width: '1px', background: 'rgba(148, 163, 184, 0.2)' }} />
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '22px', color: '#14B8A6', fontWeight: '700', margin: 0 }}>$124T</p>
            <p style={{ fontSize: '11px', color: '#94A3B8', margin: '2px 0 0 0' }}>transferring NOW</p>
          </div>
        </div>
      </div>
    </AspectFrame>
  )
}

export default SlideGapInTheMiddle
