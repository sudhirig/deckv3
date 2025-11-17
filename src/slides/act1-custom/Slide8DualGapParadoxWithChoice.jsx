import React, { useState, useEffect } from 'react';
import { AspectFrame } from '../../components/StandardLayouts';
import { Globe, Brain, Lock, Unlock, ChevronRight, AlertTriangle, XCircle, DollarSign } from 'lucide-react';

const Slide8DualGapParadoxWithChoice = () => {
  const [accessGapWidth, setAccessGapWidth] = useState(0);
  const [intelligenceGapWidth, setIntelligenceGapWidth] = useState(0);
  const [animateComparison, setAnimateComparison] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAccessGapWidth(60);
      setIntelligenceGapWidth(64);
    }, 500);
    
    setTimeout(() => {
      setAnimateComparison(true);
    }, 1000);
  }, []);

  const institutionalAccess = [
    { item: '50 global markets', icon: '📍', highlight: true },
    { item: '10,000+ alternative funds', icon: '💼', highlight: true },
    { item: 'India 8.2% growth via GIFT', icon: '🇮🇳', highlight: true },
    { item: 'AI achieving 600% alpha', icon: '🤖', highlight: true },
    { item: '$30T in alternatives', icon: '💰', highlight: false },
    { item: 'Real-time tax harvesting', icon: '📊', highlight: false }
  ];

  const yourAccess = [
    { item: '3 markets (US-heavy)', icon: '📍', bad: true },
    { item: '50 mutual funds', icon: '💼', bad: true },
    { item: 'Blocked by 35% tax', icon: '🇮🇳', bad: true },
    { item: 'Zero AI tools', icon: '🤖', bad: true },
    { item: "Can't access any", icon: '💰', bad: true },
    { item: 'Quarterly PDFs', icon: '📊', bad: true }
  ];

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
        padding: '40px',
        fontFamily: 'Inter, -apple-system, sans-serif',
        overflow: 'hidden'
      }}>
        {/* Animated Background - Subtle teal */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
            <defs>
              <linearGradient id="gap-gradient-teal" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="gap-gradient-cyan" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
              </linearGradient>
            </defs>
            
            <rect x="0" y="20%" width={`${accessGapWidth}%`} height="15%" fill="url(#gap-gradient-teal)" 
                  style={{ transition: 'width 2s ease-out' }} />
            <rect x="0" y="65%" width={`${intelligenceGapWidth}%`} height="15%" fill="url(#gap-gradient-cyan)" 
                  style={{ transition: 'width 2s ease-out' }} />
          </svg>

          {/* Floating particles - Subtle teal */}
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                borderRadius: '50%',
                background: `radial-gradient(circle, rgba(20, 184, 166, 0.08), transparent)`,
                width: `${Math.random() * 80 + 40}px`,
                height: `${Math.random() * 80 + 40}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${20 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '24px', zIndex: 10 }}>
          <h1 style={{ fontSize: '42px', fontWeight: 'bold', marginBottom: '8px', letterSpacing: '-0.02em' }}>
            <span style={{ color: 'white' }}>THE </span>
            <span style={{ 
              background: 'linear-gradient(to right, #ef4444, #fb923c)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>$124T</span>
            <span style={{ color: 'white' }}> DUAL GAP PARADOX</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#94a3b8' }}>
            Opportunities Exploding While Your Access Shrinks
          </p>
        </div>

        {/* Split Screen Comparison */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px',
          marginBottom: '24px',
          maxWidth: '1000px',
          width: '100%',
          zIndex: 10
        }}>
          {/* Left: What's Available */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, rgba(20, 184, 166, 0.05) 100%)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            padding: '20px',
            border: '1px solid rgba(20, 184, 166, 0.3)',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            transform: animateComparison ? 'translateX(0)' : 'translateX(-20px)',
            opacity: animateComparison ? 1 : 0,
            transition: 'all 1s ease-out'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              <Unlock style={{ width: 32, height: 32, color: '#14b8a6', marginRight: 10 }} />
              <div>
                <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#14b8a6', margin: 0 }}>
                  WHAT'S AVAILABLE
                </h2>
                <p style={{ color: '#86efac', fontSize: '12px', margin: 0 }}>To Institutions</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {institutionalAccess.map((item, idx) => (
                <div 
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px',
                    borderRadius: '6px',
                    background: item.highlight ? 'rgba(20, 184, 166, 0.15)' : 'rgba(10, 22, 40, 0.3)',
                    border: item.highlight ? '1px solid rgba(20, 184, 166, 0.2)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ fontSize: '18px', marginRight: '8px' }}>{item.icon}</span>
                    <span style={{ color: 'white', fontWeight: '500', fontSize: '13px' }}>{item.item}</span>
                  </div>
                  {item.highlight && (
                    <ChevronRight style={{ width: 16, height: 16, color: '#14b8a6' }} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: What You Access */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.05) 100%)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            padding: '20px',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            transform: animateComparison ? 'translateX(0)' : 'translateX(20px)',
            opacity: animateComparison ? 1 : 0,
            transition: 'all 1s ease-out'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              <Lock style={{ width: 32, height: 32, color: '#ef4444', marginRight: 10 }} />
              <div>
                <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#ef4444', margin: 0 }}>
                  WHAT YOU ACCESS
                </h2>
                <p style={{ color: '#fca5a5', fontSize: '12px', margin: 0 }}>Your Reality</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {yourAccess.map((item, idx) => (
                <div 
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px',
                    borderRadius: '6px',
                    background: item.bad ? 'rgba(239, 68, 68, 0.15)' : 'rgba(10, 22, 40, 0.3)',
                    border: item.bad ? '1px solid rgba(239, 68, 68, 0.2)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ fontSize: '18px', marginRight: '8px', opacity: 0.5 }}>{item.icon}</span>
                    <span style={{ color: '#94a3b8', textDecoration: 'line-through', fontSize: '13px' }}>
                      {item.item}
                    </span>
                  </div>
                  {item.bad && (
                    <AlertTriangle style={{ width: 16, height: 16, color: '#ef4444' }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* THE IMPOSSIBLE CHOICE - Prominent Section */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(251, 146, 60, 0.1))',
          backdropFilter: 'blur(10px)',
          borderRadius: '12px',
          padding: '20px',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          maxWidth: '900px',
          width: '100%',
          zIndex: 10,
          marginBottom: '20px',
          boxShadow: '0 4px 20px rgba(239, 68, 68, 0.15)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
            <XCircle style={{ width: 24, height: 24, color: '#ef4444' }} />
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#ef4444', margin: 0 }}>
              THE IMPOSSIBLE CHOICE
            </h2>
            <XCircle style={{ width: 24, height: 24, color: '#ef4444' }} />
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '16px' }}>
            <div style={{
              background: 'rgba(10, 22, 40, 0.5)',
              borderRadius: '8px',
              padding: '14px',
              border: '1px solid rgba(20, 184, 166, 0.2)'
            }}>
              <h3 style={{ color: '#10b981', fontWeight: 'bold', fontSize: '16px', marginBottom: '8px' }}>
                WANT ACCESS?
              </h3>
              <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' }}>
                <li>Pay Goldman $10M minimum</li>
                <li>Accept no AI/intelligence</li>
                <li>Stuck with 1990s tech</li>
              </ul>
            </div>
            
            <div style={{
              background: 'rgba(10, 22, 40, 0.5)',
              borderRadius: '8px',
              padding: '14px',
              border: '1px solid rgba(168, 85, 247, 0.2)'
            }}>
              <h3 style={{ color: '#a855f7', fontWeight: 'bold', fontSize: '16px', marginBottom: '8px' }}>
                WANT INTELLIGENCE?
              </h3>
              <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' }}>
                <li>Accept US-only portfolios</li>
                <li>No alternatives/PE</li>
                <li>Miss global opportunities</li>
              </ul>
            </div>
          </div>
          
          <div style={{
            background: 'rgba(251, 191, 36, 0.1)',
            borderRadius: '8px',
            padding: '12px',
            textAlign: 'center',
            border: '1px solid rgba(251, 191, 36, 0.3)'
          }}>
            <p style={{ fontSize: '18px', color: 'white', margin: 0, fontWeight: '600' }}>
              You need <span style={{ color: '#10b981' }}>HIGH ACCESS</span> + 
              <span style={{ color: '#a855f7' }}> HIGH INTELLIGENCE</span>
            </p>
            <p style={{ fontSize: '16px', color: '#fbbf24', marginTop: '6px', margin: 0 }}>
              But no one gives you both at your level
            </p>
          </div>
        </div>

        {/* Gap Visualization - Compact */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '24px',
          maxWidth: '900px',
          width: '100%',
          zIndex: 10
        }}>
          {/* Access Gap */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(20, 184, 166, 0.05))',
            borderRadius: '12px',
            padding: '20px',
            border: '1px solid rgba(20, 184, 166, 0.2)',
            textAlign: 'center'
          }}>
            <Globe style={{ width: 32, height: 32, color: '#14b8a6', margin: '0 auto 8px' }} />
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: 'white', margin: '0 0 8px' }}>ACCESS GAP</h3>
            <div style={{
              position: 'relative',
              height: '6px',
              background: 'rgba(10, 22, 40, 0.5)',
              borderRadius: '999px',
              overflow: 'hidden',
              marginBottom: '8px'
            }}>
              <div style={{
                position: 'absolute',
                left: 0,
                top: 0,
                height: '100%',
                background: 'linear-gradient(to right, #14b8a6, #06b6d4)',
                borderRadius: '999px',
                width: `${accessGapWidth}%`,
                transition: 'width 2s ease-out'
              }} />
            </div>
            <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#14b8a6' }}>$60T</div>
            <p style={{ color: '#94a3b8', fontSize: '12px', margin: '4px 0 0' }}>unreachable</p>
          </div>

          {/* Intelligence Gap */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(168, 85, 247, 0.05))',
            borderRadius: '12px',
            padding: '20px',
            border: '1px solid rgba(168, 85, 247, 0.2)',
            textAlign: 'center'
          }}>
            <Brain style={{ width: 32, height: 32, color: '#a855f7', margin: '0 auto 8px' }} />
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: 'white', margin: '0 0 8px' }}>INTELLIGENCE GAP</h3>
            <div style={{
              position: 'relative',
              height: '6px',
              background: 'rgba(10, 22, 40, 0.5)',
              borderRadius: '999px',
              overflow: 'hidden',
              marginBottom: '8px'
            }}>
              <div style={{
                position: 'absolute',
                left: 0,
                top: 0,
                height: '100%',
                background: 'linear-gradient(to right, #a855f7, #ec4899)',
                borderRadius: '999px',
                width: `${intelligenceGapWidth}%`,
                transition: 'width 2s ease-out'
              }} />
            </div>
            <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#a855f7' }}>$64T</div>
            <p style={{ color: '#94a3b8', fontSize: '12px', margin: '4px 0 0' }}>unoptimized</p>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) translateX(0); }
            33% { transform: translateY(-20px) translateX(10px); }
            66% { transform: translateY(10px) translateX(-10px); }
          }
        `}</style>
      </div>
    </AspectFrame>
  );
};

export default Slide8DualGapParadoxWithChoice;
