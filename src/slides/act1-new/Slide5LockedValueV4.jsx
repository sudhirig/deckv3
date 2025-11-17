import React from 'react'
import { AspectFrame } from '../../components/StandardLayouts'
import { DollarSign, Globe, Users, TrendingUp, Lock, BarChart } from 'lucide-react'

const Slide5LockedValueV4 = () => {
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
        padding: '64px',
        fontFamily: 'Inter, -apple-system, sans-serif'
      }}>
        {/* Background gradient mesh */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.3,
          background: 'radial-gradient(ellipse at 20% 20%, rgba(251, 191, 36, 0.1) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(20, 184, 166, 0.1) 0%, transparent 50%)',
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
          THE $45T OPPORTUNITY SCALE
        </h1>
        
        <p style={{
          fontSize: '18px',
          color: '#94A3B8',
          marginBottom: '48px',
          textAlign: 'center'
        }}>
          Massive Wealth Trapped Behind Institutional Walls
        </p>

        {/* Three Value Buckets */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '32px',
          maxWidth: '1200px',
          width: '100%',
          marginBottom: '40px'
        }}>
          {[
            {
              icon: DollarSign,
              value: '$30T',
              title: 'Alternative Assets',
              color: '#FBBF24',
              stats: [
                { value: '72%', label: 'want access' },
                { value: '5%', label: 'have it' }
              ],
              detail: 'PE/VC • Hedge Funds • Private Credit',
              highlight: '16,000+ funds exist'
            },
            {
              icon: Globe,
              value: '$15T',
              title: 'Emerging Markets',
              color: '#14B8A6',
              stats: [
                { value: '87%', label: 'of growth' },
                { value: '3%', label: 'allocated' }
              ],
              detail: 'India $5T • Indonesia • Vietnam',
              highlight: 'Zero institutional access'
            },
            {
              icon: Users,
              value: '2.4M',
              title: 'Underserved Families',
              color: '#FB7185',
              stats: [
                { value: '87%', label: 'no FO access' },
                { value: '100K', label: 'advisor gap' }
              ],
              detail: '$1M-$25M segment • Like Priya',
              highlight: 'EMILLI segment'
            }
          ].map((bucket, index) => {
            const Icon = bucket.icon
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
                  background: bucket.color
                }} />

                {/* Glow effect */}
                <div style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '150px',
                  height: '150px',
                  background: `radial-gradient(circle, ${bucket.color}20 0%, transparent 70%)`,
                  pointerEvents: 'none'
                }} />
                
                {/* Header */}
                <div style={{
                  padding: '28px 28px 24px',
                  borderBottom: '1px solid rgba(148, 163, 184, 0.1)'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px'
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      background: `linear-gradient(135deg, ${bucket.color}20 0%, ${bucket.color}10 100%)`,
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 8px 20px ${bucket.color}20`
                    }}>
                      <Icon size={24} color={bucket.color} />
                    </div>
                  </div>
                  
                  <h2 style={{
                    fontSize: '48px',
                    fontWeight: '700',
                    color: bucket.color,
                    margin: '0 0 8px 0',
                    textAlign: 'center',
                    textShadow: `0 4px 20px ${bucket.color}40`
                  }}>
                    {bucket.value}
                  </h2>
                  
                  <h3 style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#FFFFFF',
                    margin: 0,
                    textAlign: 'center'
                  }}>
                    {bucket.title}
                  </h3>
                </div>
                
                {/* Stats */}
                <div style={{
                  padding: '24px 28px',
                  flex: 1
                }}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '16px',
                    marginBottom: '20px'
                  }}>
                    {bucket.stats.map((stat, i) => (
                      <div key={i} style={{
                        textAlign: 'center',
                        padding: '12px',
                        background: 'rgba(0, 0, 0, 0.2)',
                        borderRadius: '8px',
                        border: '1px solid rgba(148, 163, 184, 0.1)'
                      }}>
                        <p style={{ 
                          fontSize: '24px', 
                          color: bucket.color, 
                          fontWeight: '700',
                          margin: '0 0 4px 0'
                        }}>
                          {stat.value}
                        </p>
                        <p style={{ 
                          fontSize: '11px', 
                          color: '#94A3B8',
                          margin: 0
                        }}>
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  <p style={{
                    fontSize: '12px',
                    color: '#94A3B8',
                    textAlign: 'center',
                    margin: '0 0 12px 0'
                  }}>
                    {bucket.detail}
                  </p>
                  
                  <p style={{
                    fontSize: '13px',
                    color: bucket.color,
                    textAlign: 'center',
                    fontWeight: '600',
                    margin: 0
                  }}>
                    {bucket.highlight}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* EMILLI Expansion */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.3) 0%, rgba(30, 41, 59, 0.2) 100%)',
          borderRadius: '16px',
          padding: '20px 48px',
          marginBottom: '32px',
          maxWidth: '900px',
          border: '1px solid rgba(148, 163, 184, 0.15)',
          backdropFilter: 'blur(10px)'
        }}>
          <p style={{
            fontSize: '14px',
            color: '#94A3B8',
            textAlign: 'center',
            margin: 0
          }}>
            <strong style={{ color: '#FFFFFF' }}>E</strong>merging
            <span style={{ color: '#14B8A6' }}> • </span>
            <strong style={{ color: '#FFFFFF' }}>M</strong>illionaires
            <span style={{ color: '#14B8A6' }}> • </span>
            <strong style={{ color: '#FFFFFF' }}>I</strong>nheriting
            <span style={{ color: '#14B8A6' }}> • </span>
            <strong style={{ color: '#FFFFFF' }}>L</strong>iquidity
            <span style={{ color: '#14B8A6' }}> • </span>
            <strong style={{ color: '#FFFFFF' }}>L</strong>ocked-out
            <span style={{ color: '#14B8A6' }}> • </span>
            <strong style={{ color: '#FFFFFF' }}>I</strong>nstitutionally-underserved
          </p>
        </div>

        {/* Bottom Line */}
        <div style={{
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '28px',
            fontWeight: '600',
            color: '#FFFFFF',
            marginBottom: '12px'
          }}>
            $45T locked from 2.4M families like Priya
          </p>
          <p style={{
            fontSize: '18px',
            color: '#94A3B8'
          }}>
            Humans can't scale. <strong style={{ color: '#14B8A6' }}>AI + CPA distribution is the only way.</strong>
          </p>
        </div>
      </div>
    </AspectFrame>
  )
}

export default Slide5LockedValueV4
