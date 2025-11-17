import React from 'react'
import { AspectFrame } from '../../components/StandardLayouts'
import { TrendingUp, TrendingDown, Globe, Lock, Brain, AlertCircle } from 'lucide-react'

const Slide3WealthParadoxV7 = () => {
  return (
    <AspectFrame>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #0A1628 0%, #0f172a 50%, #1e293b 100%)',
        display: 'flex',
        flexDirection: 'column',
        padding: '48px 64px',
        fontFamily: 'Inter, -apple-system, sans-serif'
      }}>
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{
            fontSize: '42px',
            fontWeight: '700',
            color: '#FFFFFF',
            marginBottom: '8px',
            letterSpacing: '-0.02em'
          }}>
            THE PARADOX OF MODERN WEALTH
          </h1>
          
          <p style={{
            fontSize: '18px',
            color: '#94A3B8',
            fontWeight: '400'
          }}>
            Opportunities are exploding while your access is shrinking
          </p>
        </div>

        {/* Two Column Comparison */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '32px',
          flex: 1,
          marginBottom: '32px'
        }}>
          {/* More Opportunities Than Ever */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.15) 0%, rgba(20, 184, 166, 0.05) 100%)',
            borderRadius: '20px',
            border: '2px solid rgba(20, 184, 166, 0.3)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
            backdropFilter: 'blur(10px)'
          }}>
            {/* Header */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.3) 0%, rgba(20, 184, 166, 0.1) 100%)',
              padding: '24px',
              borderBottom: '1px solid rgba(20, 184, 166, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px'
            }}>
              <TrendingUp size={24} color="#14B8A6" />
              <h2 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#14B8A6',
                margin: 0
              }}>
                More Opportunities Than Ever
              </h2>
            </div>

            {/* Content */}
            <div style={{
              padding: '32px',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              {[
                { number: '50', label: 'global markets', detail: 'vs 10 in 2000' },
                { number: '10,000+', label: 'investable assets', detail: 'vs 500 in 2000' },
                { number: '8.2%', label: 'India growth rate', detail: '3rd largest economy' },
                { number: '600%', label: 'AI outperformance', detail: 'Stanford research' }
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px',
                  background: 'rgba(0, 0, 0, 0.2)',
                  borderRadius: '12px',
                  marginBottom: i < 3 ? '16px' : 0
                }}>
                  <div>
                    <p style={{
                      fontSize: '32px',
                      fontWeight: '700',
                      color: '#14B8A6',
                      margin: 0,
                      lineHeight: 1
                    }}>
                      {item.number}
                    </p>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{
                      fontSize: '16px',
                      color: '#FFFFFF',
                      fontWeight: '600',
                      margin: '0 0 2px 0'
                    }}>
                      {item.label}
                    </p>
                    <p style={{
                      fontSize: '13px',
                      color: '#94A3B8',
                      margin: 0
                    }}>
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Less Access Than Ever */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(251, 113, 133, 0.15) 0%, rgba(251, 113, 133, 0.05) 100%)',
            borderRadius: '20px',
            border: '2px solid rgba(251, 113, 133, 0.3)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
            backdropFilter: 'blur(10px)'
          }}>
            {/* Header */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(251, 113, 133, 0.3) 0%, rgba(251, 113, 133, 0.1) 100%)',
              padding: '24px',
              borderBottom: '1px solid rgba(251, 113, 133, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px'
            }}>
              <TrendingDown size={24} color="#FB7185" />
              <h2 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#FB7185',
                margin: 0
              }}>
                Less Access Than Ever
              </h2>
            </div>

            {/* Content */}
            <div style={{
              padding: '32px',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              {[
                { number: '3', label: 'markets you can access', detail: 'vs 50 available' },
                { number: '50', label: 'assets you can track', detail: 'vs 10,000+ exist' },
                { number: '35%', label: 'tax on India', detail: 'vs Goldman 0%' },
                { number: '0', label: 'AI tools available', detail: 'vs Goldman 50+' }
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px',
                  background: 'rgba(0, 0, 0, 0.2)',
                  borderRadius: '12px',
                  marginBottom: i < 3 ? '16px' : 0
                }}>
                  <div>
                    <p style={{
                      fontSize: '32px',
                      fontWeight: '700',
                      color: '#FB7185',
                      margin: 0,
                      lineHeight: 1
                    }}>
                      {item.number}
                    </p>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{
                      fontSize: '16px',
                      color: '#FFFFFF',
                      fontWeight: '600',
                      margin: '0 0 2px 0'
                    }}>
                      {item.label}
                    </p>
                    <p style={{
                      fontSize: '13px',
                      color: '#94A3B8',
                      margin: 0
                    }}>
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The Problem Statement */}
        <div style={{
          background: 'linear-gradient(90deg, rgba(251, 113, 133, 0.1) 0%, rgba(251, 113, 133, 0.05) 50%, rgba(251, 113, 133, 0.1) 100%)',
          border: '2px solid rgba(251, 113, 133, 0.3)',
          borderRadius: '16px',
          padding: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          boxShadow: '0 10px 30px rgba(251, 113, 133, 0.1)'
        }}>
          <AlertCircle size={24} color="#FB7185" />
          <p style={{
            fontSize: '20px',
            color: '#FFFFFF',
            margin: 0,
            fontWeight: '600'
          }}>
            The Problem: <strong style={{ color: '#FB7185' }}>Opportunities are exploding</strong> while 
            <strong style={{ color: '#FB7185' }}> your access is shrinking</strong>
          </p>
        </div>
      </div>
    </AspectFrame>
  )
}

export default Slide3WealthParadoxV7
