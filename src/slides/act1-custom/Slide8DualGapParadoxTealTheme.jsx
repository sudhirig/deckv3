import React, { useState, useEffect } from 'react';
import { AspectFrame } from '../../components/StandardLayouts';
import { Globe, Brain, TrendingUp, Lock, Unlock, ChevronRight, AlertTriangle, DollarSign } from 'lucide-react';

const Slide8DualGapParadoxTealTheme = () => {
  const [accessGapWidth, setAccessGapWidth] = useState(0);
  const [intelligenceGapWidth, setIntelligenceGapWidth] = useState(0);
  const [animateComparison, setAnimateComparison] = useState(false);

  useEffect(() => {
    // Animate gaps growing
    setTimeout(() => {
      setAccessGapWidth(60);
      setIntelligenceGapWidth(64);
    }, 500);
    
    // Trigger comparison animation
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
    { item: 'Real-time tax harvesting', icon: '📊', highlight: false },
    { item: '87 market access', icon: '🌍', highlight: false }
  ];

  const yourAccess = [
    { item: '3 markets (US-heavy)', icon: '📍', bad: true },
    { item: '50 mutual funds', icon: '💼', bad: true },
    { item: 'Blocked by 35% tax', icon: '🇮🇳', bad: true },
    { item: 'Zero AI tools', icon: '🤖', bad: true },
    { item: "Can't access any", icon: '💰', bad: true },
    { item: 'Quarterly PDFs', icon: '📊', bad: true },
    { item: 'Your 3 markets', icon: '🌍', bad: true }
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
        padding: '48px',
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
            
            <rect x="0" y="20%" width={`${accessGapWidth}%`} height="20%" fill="url(#gap-gradient-teal)" 
                  style={{ transition: 'width 2s ease-out' }} />
            <rect x="0" y="60%" width={`${intelligenceGapWidth}%`} height="20%" fill="url(#gap-gradient-cyan)" 
                  style={{ transition: 'width 2s ease-out' }} />
          </svg>

          {/* Floating particles - Subtle teal */}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                borderRadius: '50%',
                background: `radial-gradient(circle, rgba(20, 184, 166, 0.08), transparent)`,
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
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
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '12px', letterSpacing: '-0.02em' }}>
            <span style={{ color: 'white' }}>THE </span>
            <span style={{ 
              background: 'linear-gradient(to right, #ef4444, #fb923c)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>$124T</span>
            <span style={{ color: 'white' }}> DUAL GAP PARADOX</span>
          </h1>
          <p style={{ fontSize: '20px', color: '#94a3b8' }}>
            Opportunities Exploding While Your Access Shrinks
          </p>
        </div>

        {/* Split Screen Comparison */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '24px',
          marginBottom: '32px',
          maxWidth: '1100px',
          width: '100%',
          zIndex: 10
        }}>
          {/* Left: What's Available */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, rgba(20, 184, 166, 0.05) 100%)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            padding: '24px',
            border: '1px solid rgba(20, 184, 166, 0.3)',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            transform: animateComparison ? 'translateX(0)' : 'translateX(-20px)',
            opacity: animateComparison ? 1 : 0,
            transition: 'all 1s ease-out'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <Unlock style={{ width: 36, height: 36, color: '#14b8a6', marginRight: 12 }} />
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#14b8a6', margin: 0 }}>
                  WHAT'S AVAILABLE
                </h2>
                <p style={{ color: '#86efac', fontSize: '14px', margin: 0 }}>To Institutions</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {institutionalAccess.map((item, idx) => (
                <div 
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px',
                    borderRadius: '8px',
                    background: item.highlight ? 'rgba(20, 184, 166, 0.15)' : 'rgba(10, 22, 40, 0.3)',
                    border: item.highlight ? '1px solid rgba(20, 184, 166, 0.2)' : 'none',
                    animation: `slideIn 0.5s ease-out ${idx * 100 + 1200}ms both`
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ fontSize: '20px', marginRight: '10px' }}>{item.icon}</span>
                    <span style={{ color: 'white', fontWeight: '500', fontSize: '14px' }}>{item.item}</span>
                  </div>
                  {item.highlight && (
                    <ChevronRight style={{ width: 18, height: 18, color: '#14b8a6' }} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: What You Access */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.05) 100%)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            padding: '24px',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            transform: animateComparison ? 'translateX(0)' : 'translateX(20px)',
            opacity: animateComparison ? 1 : 0,
            transition: 'all 1s ease-out'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <Lock style={{ width: 36, height: 36, color: '#ef4444', marginRight: 12 }} />
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#ef4444', margin: 0 }}>
                  WHAT YOU ACCESS
                </h2>
                <p style={{ color: '#fca5a5', fontSize: '14px', margin: 0 }}>Your Reality</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {yourAccess.map((item, idx) => (
                <div 
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px',
                    borderRadius: '8px',
                    background: item.bad ? 'rgba(239, 68, 68, 0.15)' : 'rgba(10, 22, 40, 0.3)',
                    border: item.bad ? '1px solid rgba(239, 68, 68, 0.2)' : 'none',
                    animation: `slideIn 0.5s ease-out ${idx * 100 + 1200}ms both`
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ fontSize: '20px', marginRight: '10px', opacity: 0.5 }}>{item.icon}</span>
                    <span style={{ color: '#94a3b8', textDecoration: 'line-through', fontSize: '14px' }}>
                      {item.item}
                    </span>
                  </div>
                  {item.bad && (
                    <AlertTriangle style={{ width: 18, height: 18, color: '#ef4444' }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gap Visualization */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(20, 184, 166, 0.05))',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          padding: '32px',
          border: '1px solid rgba(20, 184, 166, 0.3)',
          maxWidth: '1000px',
          width: '100%',
          zIndex: 10,
          boxShadow: '0 4px 20px rgba(20, 184, 166, 0.15)'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            {/* Access Gap */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '16px' }}>
                <Globe style={{ width: 40, height: 40, color: '#14b8a6', margin: '0 auto 8px' }} />
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white' }}>ACCESS GAP</h3>
              </div>
              <div style={{
                position: 'relative',
                height: '8px',
                background: 'rgba(10, 22, 40, 0.5)',
                borderRadius: '999px',
                overflow: 'hidden',
                marginBottom: '12px'
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
              <div style={{ fontSize: '42px', fontWeight: 'bold', color: '#14b8a6', marginBottom: '8px' }}>$60T</div>
              <p style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '16px' }}>unreachable and growing</p>
              <div style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.5' }}>
                <p style={{ margin: '4px 0' }}>• India/GIFT locked</p>
                <p style={{ margin: '4px 0' }}>• Alternatives blocked</p>
                <p style={{ margin: '4px 0' }}>• Global markets closed</p>
              </div>
            </div>

            {/* Intelligence Gap */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '16px' }}>
                <Brain style={{ width: 40, height: 40, color: '#06b6d4', margin: '0 auto 8px' }} />
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white' }}>INTELLIGENCE GAP</h3>
              </div>
              <div style={{
                position: 'relative',
                height: '8px',
                background: 'rgba(10, 22, 40, 0.5)',
                borderRadius: '999px',
                overflow: 'hidden',
                marginBottom: '12px'
              }}>
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  height: '100%',
                  background: 'linear-gradient(to right, #06b6d4, #0891b2)',
                  borderRadius: '999px',
                  width: `${intelligenceGapWidth}%`,
                  transition: 'width 2s ease-out'
                }} />
              </div>
              <div style={{ fontSize: '42px', fontWeight: 'bold', color: '#06b6d4', marginBottom: '8px' }}>$64T</div>
              <p style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '16px' }}>unoptimized and accelerating</p>
              <div style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.5' }}>
                <p style={{ margin: '4px 0' }}>• No AI optimization</p>
                <p style={{ margin: '4px 0' }}>• Manual processes</p>
                <p style={{ margin: '4px 0' }}>• Quarterly reviews only</p>
              </div>
            </div>
          </div>

          {/* Total Impact */}
          <div style={{
            marginTop: '24px',
            paddingTop: '24px',
            borderTop: '1px solid rgba(20, 184, 166, 0.2)',
            textAlign: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '12px' }}>
              <DollarSign style={{ width: 32, height: 32, color: '#fbbf24' }} />
              <span style={{
                fontSize: '48px',
                fontWeight: 'bold',
                background: 'linear-gradient(to right, #fbbf24, #fb923c, #ef4444)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                $124 TRILLION
              </span>
              <DollarSign style={{ width: 32, height: 32, color: '#fbbf24' }} />
            </div>
            <p style={{ fontSize: '18px', color: 'white', fontWeight: '500' }}>
              "The rich get tools that make them richer. <span style={{ color: '#ef4444', fontWeight: 'bold' }}>
                You get left behind.
              </span>"
            </p>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) translateX(0); }
            33% { transform: translateY(-20px) translateX(10px); }
            66% { transform: translateY(10px) translateX(-10px); }
          }
          @keyframes slideIn {
            from { opacity: 0; transform: translateX(-10px); }
            to { opacity: 1; transform: translateX(0); }
          }
        `}</style>
      </div>
    </AspectFrame>
  );
};

export default Slide8DualGapParadoxTealTheme;
