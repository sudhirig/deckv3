import React from 'react'
import { AspectFrame } from '../../components/StandardLayouts'
import { Lock, Brain, TrendingUp, DollarSign, AlertTriangle } from 'lucide-react'

const Slide2DualGapV7Compact = () => {
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
          opacity: 0.2,
          background: 'radial-gradient(ellipse at 30% 20%, rgba(20, 184, 166, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(251, 113, 133, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />

        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h1 style={{
            fontSize: '38px',
            fontWeight: '700',
            color: '#FFFFFF',
            marginBottom: '6px',
            letterSpacing: '-0.02em'
          }}>
            THE DUAL GAP CREATING A $124T OPPORTUNITY
          </h1>
          
          <p style={{
            fontSize: '20px',
            color: '#94A3B8',
            fontWeight: '400'
          }}>
            Two massive failures converging into one historic opportunity
          </p>
        </div>

        {/* Two Main Gaps - Compact */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '24px',
          flex: 1,
          marginBottom: '20px'
        }}>
          {/* The Access Gap */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(251, 113, 133, 0.15) 0%, rgba(251, 113, 133, 0.05) 100%)',
            borderRadius: '16px',
            border: '1px solid rgba(251, 113, 133, 0.3)',
            padding: '24px',
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '16px',
              paddingBottom: '12px',
              borderBottom: '1px solid rgba(251, 113, 133, 0.2)'
            }}>
              <Lock size={20} color="#FB7185" />
              <h2 style={{
                fontSize: '18px',
                fontWeight: '700',
                color: '#FB7185',
                margin: 0
              }}>
                The Access Gap
              </h2>
            </div>

            {/* Content - Compact */}
            <div style={{ flex: 1 }}>
              {[
                { 
                  metric: 'India: $5T locked',
                  detail: '35% tax walls',
                  impact: 'vs Goldman 0%'
                },
                { 
                  metric: 'PE: $5M minimums',
                  detail: 'Too small',
                  impact: '95% excluded'
                },
                { 
                  metric: 'GIFT: 3 have access',
                  detail: 'Complex barriers',
                  impact: "We're one"
                },
                {
                  metric: '87 markets',
                  detail: 'You reach 3',
                  impact: '97% locked'
                }
              ].map((item, i) => (
                <div key={i} style={{
                  marginBottom: i < 3 ? '12px' : 0,
                  padding: '8px',
                  background: 'rgba(0, 0, 0, 0.2)',
                  borderRadius: '6px',
                  borderLeft: '2px solid rgba(251, 113, 133, 0.5)'
                }}>
                  <p style={{
                    fontSize: '13px',
                    color: '#FFFFFF',
                    fontWeight: '600',
                    margin: '0 0 2px 0'
                  }}>
                    {item.metric}
                  </p>
                  <p style={{
                    fontSize: '11px',
                    color: '#94A3B8',
                    margin: '0 0 2px 0'
                  }}>
                    {item.detail} → <span style={{ color: '#FB7185', fontStyle: 'italic' }}>{item.impact}</span>
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Impact */}
            <div style={{
              marginTop: '12px',
              padding: '12px',
              background: 'linear-gradient(135deg, rgba(251, 113, 133, 0.2) 0%, rgba(251, 113, 133, 0.1) 100%)',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <p style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#FB7185',
                margin: 0
              }}>
                $60T unreachable
              </p>
            </div>
          </div>

          {/* The Intelligence Gap */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.15) 0%, rgba(251, 191, 36, 0.05) 100%)',
            borderRadius: '16px',
            border: '1px solid rgba(251, 191, 36, 0.3)',
            padding: '24px',
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '16px',
              paddingBottom: '12px',
              borderBottom: '1px solid rgba(251, 191, 36, 0.2)'
            }}>
              <Brain size={20} color="#FBBF24" />
              <h2 style={{
                fontSize: '18px',
                fontWeight: '700',
                color: '#FBBF24',
                margin: 0
              }}>
                The Intelligence Gap
              </h2>
            </div>

            {/* Content - Compact */}
            <div style={{ flex: 1 }}>
              {[
                { 
                  metric: 'Humans: 10 data points',
                  detail: 'Manual analysis',
                  impact: 'Quarterly only'
                },
                { 
                  metric: 'K-1s: 40 hrs each',
                  detail: 'Paper process',
                  impact: '3 months late'
                },
                {
                  metric: '50+ tax codes',
                  detail: 'Can\'t optimize',
                  impact: '2% alpha lost'
                },
                { 
                  metric: 'Real-time impossible',
                  detail: 'Human limits',
                  impact: 'Miss opportunities'
                }
              ].map((item, i) => (
                <div key={i} style={{
                  marginBottom: i < 3 ? '12px' : 0,
                  padding: '8px',
                  background: 'rgba(0, 0, 0, 0.2)',
                  borderRadius: '6px',
                  borderLeft: '2px solid rgba(251, 191, 36, 0.5)'
                }}>
                  <p style={{
                    fontSize: '13px',
                    color: '#FFFFFF',
                    fontWeight: '600',
                    margin: '0 0 2px 0'
                  }}>
                    {item.metric}
                  </p>
                  <p style={{
                    fontSize: '11px',
                    color: '#94A3B8',
                    margin: '0 0 2px 0'
                  }}>
                    {item.detail} → <span style={{ color: '#FBBF24', fontStyle: 'italic' }}>{item.impact}</span>
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Impact */}
            <div style={{
              marginTop: '12px',
              padding: '12px',
              background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.2) 0%, rgba(251, 191, 36, 0.1) 100%)',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <p style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#FBBF24',
                margin: 0
              }}>
                $64T unoptimized
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Summary - Compact */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          gap: '16px',
          alignItems: 'center',
          padding: '16px',
          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(20, 184, 166, 0.05))',
          borderRadius: '12px',
          border: '1px solid rgba(20, 184, 166, 0.3)'
        }}>
          {/* Access Impact */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            justifyContent: 'flex-end'
          }}>
            <div style={{ textAlign: 'right' }}>
              <p style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#FB7185',
                margin: 0
              }}>
                $60T
              </p>
              <p style={{
                fontSize: '11px',
                color: '#94A3B8',
                margin: 0,
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Access Gap
              </p>
            </div>
            <Lock size={28} color="#FB7185" />
          </div>

          {/* Plus Sign */}
          <div style={{
            padding: '8px',
            background: 'rgba(251, 191, 36, 0.2)',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#FBBF24'
            }}>
              +
            </span>
          </div>

          {/* Intelligence Impact */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <Brain size={28} color="#FBBF24" />
            <div>
              <p style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#FBBF24',
                margin: 0
              }}>
                $64T
              </p>
              <p style={{
                fontSize: '11px',
                color: '#94A3B8',
                margin: 0,
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Intelligence Gap
              </p>
            </div>
          </div>
        </div>

        {/* Total Opportunity - Compact */}
        <div style={{
          marginTop: '16px',
          textAlign: 'center',
          padding: '12px',
          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.2), rgba(20, 184, 166, 0.1))',
          borderRadius: '8px',
          border: '1px solid rgba(20, 184, 166, 0.3)'
        }}>
          <DollarSign size={24} color="#14B8A6" style={{ marginBottom: '4px' }} />
          <p style={{
            fontSize: '32px',
            fontWeight: '700',
            color: '#14B8A6',
            margin: '0 0 4px 0'
          }}>
            $124 TRILLION
          </p>
          <p style={{
            fontSize: '14px',
            color: '#94A3B8',
            margin: 0
          }}>
            Total opportunity from solving both gaps
          </p>
        </div>
      </div>
    </AspectFrame>
  )
}

export default Slide2DualGapV7Compact
