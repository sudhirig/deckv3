import React from 'react'
import { AspectFrame } from '../../components/StandardLayouts'
import { DollarSign, Globe, Users, Brain, Calculator, Zap } from 'lucide-react'

const Slide5ScaleForAIV5Compact = () => {
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
        padding: '40px 48px',
        fontFamily: 'Inter, -apple-system, sans-serif',
        overflow: 'hidden'
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
          fontSize: '42px',
          fontWeight: '700',
          color: '#FFFFFF',
          marginBottom: '6px',
          textAlign: 'center',
          letterSpacing: '-0.02em'
        }}>
          THE SCALE ONLY AI CAN HANDLE
        </h1>
        
        <p style={{
          fontSize: '16px',
          color: '#94A3B8',
          marginBottom: '28px',
          textAlign: 'center'
        }}>
          $45T opportunity • 2.4M families • Infinite complexity
        </p>

        {/* The Scale Grid - Compact */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          maxWidth: '1000px',
          width: '100%',
          marginBottom: '24px'
        }}>
          {[
            {
              icon: DollarSign,
              value: '$30T',
              title: 'Alternative Assets',
              color: '#FBBF24',
              complexity: [
                '16,000+ funds globally',
                '100+ data points per fund'
              ]
            },
            {
              icon: Globe,
              value: '87',
              title: 'Global Markets',
              color: '#14B8A6',
              complexity: [
                '1,000+ tax codes',
                'Real-time monitoring'
              ]
            },
            {
              icon: Users,
              value: '2.4M',
              title: 'HNW Families',
              color: '#FB7185',
              complexity: [
                'Unique needs',
                'Personalization at scale'
              ]
            }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} style={{
                background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 100%)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${item.color}20, transparent)`,
                  filter: 'blur(20px)'
                }} />
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '10px'
                }}>
                  <Icon size={24} color={item.color} />
                  <h3 style={{
                    fontSize: '14px',
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
                  fontSize: '36px',
                  fontWeight: '700',
                  color: item.color,
                  margin: '8px 0'
                }}>
                  {item.value}
                </p>
                
                <div style={{
                  fontSize: '12px',
                  color: '#64748B',
                  lineHeight: '1.4'
                }}>
                  {item.complexity.map((line, idx) => (
                    <p key={idx} style={{ margin: '4px 0' }}>
                      • {line}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Section - Compact */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          gap: '24px',
          width: '100%',
          maxWidth: '900px',
          alignItems: 'center'
        }}>
          {/* Human Advisor */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(251, 113, 133, 0.1) 0%, rgba(251, 113, 133, 0.05) 100%)',
            borderRadius: '12px',
            border: '1px solid rgba(251, 113, 133, 0.3)',
            padding: '20px'
          }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#FB7185',
              marginBottom: '12px'
            }}>
              Human Advisor
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <Calculator size={32} color="#FB7185" />
              <div>
                <p style={{ fontSize: '28px', fontWeight: '700', color: '#FFFFFF', margin: 0 }}>
                  10-20
                </p>
                <p style={{ fontSize: '12px', color: '#94A3B8', margin: 0 }}>
                  data points
                </p>
              </div>
            </div>
            <div style={{ fontSize: '12px', color: '#64748B', lineHeight: '1.4' }}>
              <p style={{ margin: '4px 0' }}>• Excel models</p>
              <p style={{ margin: '4px 0' }}>• Quarterly reviews</p>
              <p style={{ margin: '4px 0' }}>• Human errors</p>
            </div>
          </div>

          {/* VS */}
          <div style={{
            padding: '0 12px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px'
          }}>
            <Zap size={32} color="#FBBF24" />
            <p style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#FBBF24',
              margin: 0
            }}>
              10,000x
            </p>
            <p style={{
              fontSize: '12px',
              color: '#94A3B8',
              margin: 0
            }}>
              MORE DATA
            </p>
          </div>

          {/* AI System */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, rgba(20, 184, 166, 0.05) 100%)',
            borderRadius: '12px',
            border: '1px solid rgba(20, 184, 166, 0.3)',
            padding: '20px'
          }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#14B8A6',
              marginBottom: '12px'
            }}>
              AI System
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <Brain size={32} color="#14B8A6" />
              <div>
                <p style={{ fontSize: '28px', fontWeight: '700', color: '#FFFFFF', margin: 0 }}>
                  1M+
                </p>
                <p style={{ fontSize: '12px', color: '#94A3B8', margin: 0 }}>
                  data points/day
                </p>
              </div>
            </div>
            <div style={{ fontSize: '12px', color: '#64748B', lineHeight: '1.4' }}>
              <p style={{ margin: '4px 0' }}>• Real-time analysis</p>
              <p style={{ margin: '4px 0' }}>• Pattern recognition</p>
              <p style={{ margin: '4px 0' }}>• 24/7 monitoring</p>
            </div>
          </div>
        </div>

        {/* Bottom Message - Compact */}
        <div style={{
          marginTop: '20px',
          padding: '16px 24px',
          background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(251, 191, 36, 0.05))',
          borderRadius: '12px',
          border: '1px solid rgba(251, 191, 36, 0.3)',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '18px',
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

export default Slide5ScaleForAIV5Compact
