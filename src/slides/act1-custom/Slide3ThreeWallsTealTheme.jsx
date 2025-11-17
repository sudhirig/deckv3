import React from 'react';
import { AspectFrame } from '../../components/StandardLayouts';
import { Lock, Brain, AlertTriangle, Globe, FileText, Clock, TrendingUp } from 'lucide-react';

const Slide3ThreeWallsTealTheme = () => {
  return (
    <AspectFrame>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'radial-gradient(ellipse at center, rgba(20, 184, 166, 0.05), transparent), #0A1628',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '48px',
        fontFamily: 'Inter, -apple-system, sans-serif',
        overflow: 'hidden'
      }}>
        {/* Animated Background Pattern */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                borderRadius: '50%',
                background: `radial-gradient(circle, rgba(20, 184, 166, 0.08), transparent)`,
                width: `${Math.random() * 250 + 100}px`,
                height: `${Math.random() * 250 + 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${20 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '32px', zIndex: 10 }}>
          <h1 style={{ 
            fontSize: '48px', 
            fontWeight: '700',
            color: '#FFFFFF',
            marginBottom: '8px',
            letterSpacing: '-0.02em'
          }}>
            THREE WALLS BETWEEN YOU AND ALPHA
          </h1>
          <p style={{ fontSize: '20px', color: '#94A3B8' }}>
            Each wall costs you real money. Every single year.
          </p>
        </div>

        {/* Three Walls Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '24px',
          marginBottom: '32px',
          maxWidth: '1200px',
          width: '100%',
          zIndex: 10
        }}>
          {/* Access Wall */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.05) 100%)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            padding: '24px',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.02)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(239, 68, 68, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
          }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <Lock style={{ width: 40, height: 40, color: '#ef4444', marginRight: 12 }} />
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#ef4444', margin: 0 }}>
                  ACCESS WALL
                </h2>
                <p style={{ color: '#f87171', margin: 0 }}>$60K Annual Loss</p>
              </div>
            </div>
            
            <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
              <div style={{ borderLeft: '3px solid #ef4444', paddingLeft: '12px', marginBottom: '12px' }}>
                <p style={{ fontWeight: '600', color: 'white', marginBottom: '8px' }}>
                  🇮🇳 India's $5T opportunity blocked by:
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '4px' }}>
                    <span style={{ color: '#ef4444', marginRight: '8px' }}>•</span>
                    <span style={{ color: '#e5e7eb' }}>
                      <strong>35% FPI tax</strong> (vs 0% in GIFT)
                    </span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '4px' }}>
                    <span style={{ color: '#ef4444', marginRight: '8px' }}>•</span>
                    <span style={{ color: '#e5e7eb' }}>
                      <strong>47 regulatory documents</strong>
                    </span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '4px' }}>
                    <span style={{ color: '#ef4444', marginRight: '8px' }}>•</span>
                    <span style={{ color: '#e5e7eb' }}>
                      <strong>6-month setup process</strong>
                    </span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '4px' }}>
                    <span style={{ color: '#ef4444', marginRight: '8px' }}>•</span>
                    <span style={{ color: '#e5e7eb' }}>
                      <strong>$5M minimum tickets</strong>
                    </span>
                  </li>
                </ul>
              </div>
              
              <div style={{ paddingTop: '12px', borderTop: '1px solid rgba(239, 68, 68, 0.2)' }}>
                <p style={{ color: '#e5e7eb', marginBottom: '4px' }}>
                  • Private Equity needs <span style={{ color: '#f87171', fontWeight: 'bold' }}>
                    $5-10M minimums
                  </span>
                </p>
                <p style={{ color: '#e5e7eb', marginBottom: '4px' }}>
                  • Alternative investments require <span style={{ color: '#f87171', fontWeight: 'bold' }}>
                    QIB status
                  </span>
                </p>
              </div>
              
              <div style={{
                background: 'rgba(239, 68, 68, 0.15)',
                borderRadius: '8px',
                padding: '10px',
                marginTop: '12px'
              }}>
                <p style={{ color: '#f87171', fontWeight: '600', margin: 0 }}>
                  → Missing 300-500 bps annually
                </p>
              </div>
            </div>
          </div>

          {/* Complexity Wall */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(251, 146, 60, 0.1) 0%, rgba(251, 146, 60, 0.05) 100%)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            padding: '24px',
            border: '1px solid rgba(251, 146, 60, 0.3)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.02)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(251, 146, 60, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
          }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <Brain style={{ width: 40, height: 40, color: '#fb923c', marginRight: 12 }} />
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#fb923c', margin: 0 }}>
                  COMPLEXITY WALL
                </h2>
                <p style={{ color: '#fed7aa', margin: 0 }}>$70K Annual Loss</p>
              </div>
            </div>
            
            <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
              <p style={{ fontWeight: '600', color: 'white', marginBottom: '12px' }}>
                What You Can't Process:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                  <FileText style={{ width: 18, height: 18, color: '#fb923c', marginRight: 10 }} />
                  <span style={{ color: '#e5e7eb' }}>
                    <strong>1M+</strong> data points daily
                  </span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                  <Globe style={{ width: 18, height: 18, color: '#fb923c', marginRight: 10 }} />
                  <span style={{ color: '#e5e7eb' }}>
                    <strong>50</strong> jurisdiction tax codes
                  </span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                  <Clock style={{ width: 18, height: 18, color: '#fb923c', marginRight: 10 }} />
                  <span style={{ color: '#e5e7eb' }}>
                    K-1s take <strong>40 hours each</strong>
                  </span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                  <TrendingUp style={{ width: 18, height: 18, color: '#fb923c', marginRight: 10 }} />
                  <span style={{ color: '#e5e7eb' }}>
                    Real-time rebalancing <strong>impossible</strong>
                  </span>
                </li>
              </ul>
              
              <div style={{
                background: 'rgba(251, 146, 60, 0.15)',
                borderRadius: '8px',
                padding: '10px',
                marginTop: '12px'
              }}>
                <p style={{ color: '#fed7aa', fontWeight: '600', margin: 0 }}>
                  → Leaving 2% tax alpha on the table
                </p>
              </div>
            </div>
          </div>

          {/* Experience Wall */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(251, 191, 36, 0.05) 100%)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            padding: '24px',
            border: '1px solid rgba(251, 191, 36, 0.3)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.02)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(251, 191, 36, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
          }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <AlertTriangle style={{ width: 40, height: 40, color: '#fbbf24', marginRight: 12 }} />
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#fbbf24', margin: 0 }}>
                  EXPERIENCE WALL
                </h2>
                <p style={{ color: '#fde047', margin: 0 }}>$60K Annual Loss</p>
              </div>
            </div>
            
            <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
              <p style={{ fontWeight: '600', color: 'white', marginBottom: '12px' }}>
                What You Can't See:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <span style={{ color: '#fbbf24', fontSize: '20px', fontWeight: 'bold', marginRight: '12px' }}>
                    7
                  </span>
                  <span style={{ color: '#e5e7eb' }}>different account logins</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <span style={{ color: '#fbbf24', fontSize: '20px', fontWeight: 'bold', marginRight: '12px' }}>
                    0
                  </span>
                  <span style={{ color: '#e5e7eb' }}>unified dashboards</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <span style={{ color: '#fbbf24', fontSize: '20px', fontWeight: 'bold', marginRight: '12px' }}>
                    90
                  </span>
                  <span style={{ color: '#e5e7eb' }}>day old statements</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <span style={{ color: '#fbbf24', fontSize: '20px', fontWeight: 'bold', marginRight: '12px' }}>
                    0
                  </span>
                  <span style={{ color: '#e5e7eb' }}>AI insights available</span>
                </li>
              </ul>
              
              <div style={{
                background: 'rgba(251, 191, 36, 0.15)',
                borderRadius: '8px',
                padding: '10px',
                marginTop: '12px'
              }}>
                <p style={{ color: '#fde047', fontWeight: '600', margin: 0 }}>
                  → Poor decisions from fragmented data
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Total Cost Banner */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(20, 184, 166, 0.05))',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          padding: '32px',
          border: '1px solid rgba(20, 184, 166, 0.3)',
          maxWidth: '900px',
          width: '100%',
          zIndex: 10,
          boxShadow: '0 4px 20px rgba(20, 184, 166, 0.2)'
        }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '20px', color: '#94a3b8', marginBottom: '12px' }}>
              Total Cost to Your $10M Portfolio:
            </p>
            <div style={{ fontSize: '64px', fontWeight: 'bold', color: 'white', marginBottom: '12px' }}>
              $190,000
              <span style={{ fontSize: '24px', color: '#64748b', marginLeft: '12px' }}>/ YEAR</span>
            </div>
            <p style={{ fontSize: '18px', color: '#94a3b8' }}>
              That's <span style={{ color: '#ef4444', fontWeight: 'bold' }}>1.9% annual drag</span> on your wealth.
              Over 10 years, you're losing <span style={{ color: '#ef4444', fontWeight: 'bold' }}>$2.3 million</span>.
            </p>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) translateX(0) scale(1); opacity: 0.08; }
            33% { transform: translateY(-30px) translateX(20px) scale(1.1); opacity: 0.12; }
            66% { transform: translateY(20px) translateX(-20px) scale(0.95); opacity: 0.08; }
          }
        `}</style>
      </div>
    </AspectFrame>
  );
};

export default Slide3ThreeWallsTealTheme;
