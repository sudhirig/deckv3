import React from 'react'
import { AspectFrame } from '../../components/StandardLayouts'
import { DollarSign, Globe, Users, Brain, Calculator, Zap } from 'lucide-react'

const Slide5ScaleForAIV5 = () => {
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
          marginBottom: '8px',
          textAlign: 'center',
          letterSpacing: '-0.02em'
        }}>
          THE SCALE ONLY AI CAN HANDLE
        </h1>
        
        <p style={{
          fontSize: '18px',
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
              ],
              humanProblem: 'Would take 50 years to analyze',
              aiSolution: 'AI analyzes all in real-time'
            },
            {
              icon: Globe,
              value: '$15T',
              title: 'Emerging Markets',
              color: '#14B8A6',
              complexity: [
                '87 global markets',
                '1,000+ regulations',
                '24/7 trading zones',
                'Currency fluctuations'
              ],
              humanProblem: 'Impossible to track manually',
              aiSolution: 'AI monitors continuously'
            },
            {
              icon: Users,
              value: '2.4M',
              title: 'Underserved Families',
              color: '#FB7185',
              complexity: [
                'Each needs personalization',
                '100K advisor shortage',
                'Complex tax situations',
                'Multi-generational planning'
              ],
              humanProblem: 'Not enough humans to serve',
              aiSolution: 'AI scales infinitely'
            }
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} style={{
                position: 'relative',
                background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(30, 41, 59, 0.2) 100%)',
                borderRadius: '20px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(148, 163, 184, 0.15)'
              }}>
                {/* Color accent */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: item.color
                }} />
                
                {/* Header */}
                <div style={{
                  padding: '24px',
                  borderBottom: '1px solid rgba(148, 163, 184, 0.1)',
                  textAlign: 'center'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: `linear-gradient(135deg, ${item.color}20 0%, ${item.color}10 100%)`,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 12px',
                    boxShadow: `0 8px 20px ${item.color}20`
                  }}>
                    <Icon size={24} color={item.color} />
                  </div>
                  
                  <h2 style={{
                    fontSize: '42px',
                    fontWeight: '700',
                    color: item.color,
                    margin: '0 0 4px 0',
                    textShadow: `0 4px 20px ${item.color}40`
                  }}>
                    {item.value}
                  </h2>
                  
                  <h3 style={{
                    fontSize: '15px',
                    fontWeight: '600',
                    color: '#FFFFFF',
                    margin: 0
                  }}>
                    {item.title}
                  </h3>
                </div>
                
                {/* Complexity Details */}
                <div style={{ padding: '20px', flex: 1 }}>
                  <div style={{ marginBottom: '16px' }}>
                    {item.complexity.map((point, i) => (
                      <p key={i} style={{
                        fontSize: '12px',
                        color: '#94A3B8',
                        margin: '0 0 8px 0',
                        paddingLeft: '16px',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: 0,
                          color: item.color
                        }}>•</span>
                        {point}
                      </p>
                    ))}
                  </div>
                  
                  {/* Human vs AI */}
                  <div style={{
                    background: 'rgba(0, 0, 0, 0.2)',
                    borderRadius: '8px',
                    padding: '12px',
                    border: '1px solid rgba(148, 163, 184, 0.1)'
                  }}>
                    <p style={{
                      fontSize: '11px',
                      color: '#FB7185',
                      margin: '0 0 6px 0',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      <Calculator size={12} />
                      <strong>Human:</strong> {item.humanProblem}
                    </p>
                    <p style={{
                      fontSize: '11px',
                      color: '#14B8A6',
                      margin: 0,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      <Brain size={12} />
                      <strong>AI:</strong> {item.aiSolution}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* The Math That Proves It */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.15) 0%, rgba(20, 184, 166, 0.05) 100%)',
          borderRadius: '16px',
          padding: '24px 48px',
          marginBottom: '24px',
          maxWidth: '900px',
          border: '1px solid rgba(20, 184, 166, 0.3)',
          backdropFilter: 'blur(10px)'
        }}>
          <h3 style={{
            fontSize: '16px',
            color: '#14B8A6',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '16px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            THE IMPOSSIBLE MATH FOR HUMANS
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
            textAlign: 'center'
          }}>
            <div>
              <p style={{ fontSize: '24px', color: '#FBBF24', fontWeight: '700', margin: '0 0 4px 0' }}>
                16,000
              </p>
              <p style={{ fontSize: '10px', color: '#94A3B8', margin: 0 }}>funds to analyze</p>
            </div>
            <div>
              <p style={{ fontSize: '24px', color: '#14B8A6', fontWeight: '700', margin: '0 0 4px 0' }}>
                87
              </p>
              <p style={{ fontSize: '10px', color: '#94A3B8', margin: 0 }}>markets to track</p>
            </div>
            <div>
              <p style={{ fontSize: '24px', color: '#FB7185', fontWeight: '700', margin: '0 0 4px 0' }}>
                2.4M
              </p>
              <p style={{ fontSize: '10px', color: '#94A3B8', margin: 0 }}>families to serve</p>
            </div>
            <div>
              <p style={{ fontSize: '24px', color: '#FFFFFF', fontWeight: '700', margin: '0 0 4px 0' }}>
                24/7
              </p>
              <p style={{ fontSize: '10px', color: '#94A3B8', margin: 0 }}>monitoring needed</p>
            </div>
          </div>
          
          <div style={{
            marginTop: '20px',
            paddingTop: '20px',
            borderTop: '1px solid rgba(20, 184, 166, 0.2)',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '14px', color: '#FFFFFF', margin: 0 }}>
              = <strong style={{ fontSize: '18px', color: '#14B8A6' }}>33.4 billion</strong> data points to process daily
            </p>
            <p style={{ fontSize: '12px', color: '#94A3B8', marginTop: '8px' }}>
              A team of 1,000 analysts would need 50 years. AI does it in milliseconds.
            </p>
          </div>
        </div>

        {/* Bottom Line - Perfect Setup for ARIA */}
        <div style={{
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          justifyContent: 'center'
        }}>
          <Zap size={24} color="#14B8A6" />
          <p style={{
            fontSize: '20px',
            fontWeight: '600',
            color: '#FFFFFF',
            margin: 0
          }}>
            The solution must be AI-powered. The scale demands it.
          </p>
        </div>
        
        <p style={{
          fontSize: '16px',
          color: '#94A3B8',
          marginTop: '12px',
          textAlign: 'center'
        }}>
          Next: How <strong style={{ color: '#14B8A6' }}>ARIA's AI</strong> breaks through all three walls simultaneously
        </p>
      </div>
    </AspectFrame>
  )
}

export default Slide5ScaleForAIV5
