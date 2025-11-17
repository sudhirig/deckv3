import React from 'react'
import { AspectFrame } from '../../components/StandardLayouts'
import { DollarSign, Globe, Users, Brain, Calculator, Zap } from 'lucide-react'

const Slide5ScaleForAIV5Fixed = () => {
  return (
    <AspectFrame>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #0A1628 0%, #0f172a 50%, #1e293b 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '48px 64px',
        fontFamily: 'Inter, -apple-system, sans-serif'
      }}>
        {/* Background gradient mesh */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.3,
          background: 'radial-gradient(ellipse at 30% 20%, rgba(20, 184, 166, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />

        {/* Title */}
        <h1 style={{
          fontSize: '48px',
          fontWeight: '700',
          color: '#FFFFFF',
          marginBottom: '12px',
          textAlign: 'center',
          letterSpacing: '-0.02em'
        }}>
          THE SCALE ONLY AI CAN HANDLE
        </h1>
        
        <p style={{
          fontSize: '20px',
          color: '#94A3B8',
          marginBottom: '40px',
          textAlign: 'center'
        }}>
          $45T opportunity • 2.4M families • Infinite complexity
        </p>

        {/* The Scale Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '28px',
          maxWidth: '1200px',
          width: '100%',
          marginBottom: '32px'
        }}>
          {[
            {
              icon: DollarSign,
              value: '$30T',
              title: 'Alternative Assets',
              color: '#FBBF24',
              complexity: [
                '16,000+ funds globally',
                '1,000+ new funds yearly',
                '80% data in PDFs',
                '100+ data points per fund'
              ]
            },
            {
              icon: Globe,
              value: '87',
              title: 'Global Markets',
              color: '#14B8A6',
              complexity: [
                '50+ tax jurisdictions',
                '1,000+ regulatory changes/year',
                '24/7 trading windows',
                'Real-time arbitrage'
              ]
            },
            {
              icon: Users,
              value: '2.4M',
              title: 'HNW Families',
              color: '#FB7185',
              complexity: [
                'Each with unique goals',
                'Multiple account types',
                'Complex tax situations',
                'Personalization at scale'
              ]
            }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} style={{
                background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 100%)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-30px',
                  right: '-30px',
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${item.color}20, transparent)`,
                  filter: 'blur(40px)'
                }} />
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '16px'
                }}>
                  <Icon size={28} color={item.color} />
                  <h3 style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#94A3B8',
                    margin: 0,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                  }}>
                    {item.title}
                  </h3>
                </div>
                
                <p style={{
                  fontSize: '42px',
                  fontWeight: '700',
                  color: item.color,
                  margin: '0 0 16px 0'
                }}>
                  {item.value}
                </p>
                
                <div style={{
                  fontSize: '14px',
                  color: '#64748B',
                  lineHeight: '1.6'
                }}>
                  {item.complexity.map((line, idx) => (
                    <p key={idx} style={{ margin: '6px 0' }}>
                      • {line}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          gap: '32px',
          width: '100%',
          maxWidth: '1000px',
          alignItems: 'center'
        }}>
          {/* Human Advisor */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(251, 113, 133, 0.15) 0%, rgba(251, 113, 133, 0.05) 100%)',
            borderRadius: '16px',
            border: '2px solid rgba(251, 113, 133, 0.3)',
            padding: '24px'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#FB7185',
              marginBottom: '16px'
            }}>
              Human Advisor
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <Calculator size={40} color="#FB7185" />
              <div>
                <p style={{ fontSize: '36px', fontWeight: '700', color: '#FFFFFF', margin: 0 }}>
                  10-20
                </p>
                <p style={{ fontSize: '14px', color: '#94A3B8', margin: 0 }}>
                  data points
                </p>
              </div>
            </div>
            <div style={{ fontSize: '14px', color: '#64748B', lineHeight: '1.6' }}>
              <p style={{ margin: '6px 0' }}>• Excel models</p>
              <p style={{ margin: '6px 0' }}>• Quarterly reviews</p>
              <p style={{ margin: '6px 0' }}>• Manual analysis</p>
              <p style={{ margin: '6px 0' }}>• Human errors</p>
            </div>
          </div>

          {/* VS */}
          <div style={{
            padding: '0 16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px'
          }}>
            <Zap size={48} color="#FBBF24" />
            <p style={{
              fontSize: '32px',
              fontWeight: '700',
              color: '#FBBF24',
              margin: 0
            }}>
              10,000x
            </p>
            <p style={{
              fontSize: '14px',
              color: '#94A3B8',
              margin: 0
            }}>
              MORE DATA
            </p>
          </div>

          {/* AI System */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.15) 0%, rgba(20, 184, 166, 0.05) 100%)',
            borderRadius: '16px',
            border: '2px solid rgba(20, 184, 166, 0.3)',
            padding: '24px'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#14B8A6',
              marginBottom: '16px'
            }}>
              AI System
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <Brain size={40} color="#14B8A6" />
              <div>
                <p style={{ fontSize: '36px', fontWeight: '700', color: '#FFFFFF', margin: 0 }}>
                  1M+
                </p>
                <p style={{ fontSize: '14px', color: '#94A3B8', margin: 0 }}>
                  data points/day
                </p>
              </div>
            </div>
            <div style={{ fontSize: '14px', color: '#64748B', lineHeight: '1.6' }}>
              <p style={{ margin: '6px 0' }}>• Real-time analysis</p>
              <p style={{ margin: '6px 0' }}>• Pattern recognition</p>
              <p style={{ margin: '6px 0' }}>• 24/7 monitoring</p>
              <p style={{ margin: '6px 0' }}>• Zero fatigue</p>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div style={{
          marginTop: '32px',
          padding: '20px 32px',
          background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(251, 191, 36, 0.05))',
          borderRadius: '16px',
          border: '1px solid rgba(251, 191, 36, 0.3)',
          textAlign: 'center',
          maxWidth: '800px'
        }}>
          <p style={{
            fontSize: '20px',
            fontWeight: '600',
            color: '#FBBF24',
            margin: 0
          }}>
            This isn't about replacing humans. It's about problems humans can't solve.
          </p>
        </div>
      </div>
    </AspectFrame>
  )
}

export default Slide5ScaleForAIV5Fixed
