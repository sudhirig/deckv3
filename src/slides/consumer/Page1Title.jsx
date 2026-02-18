import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ConsumerLayout } from './ConsumerLayout';
import ARIAAvatar from '../../components/ARIAAvatar';
import ARIAIconBadge from '../../components/ARIAIconBadge';
import GradientText from '../../components/GradientText';
import { Globe, Sparkles, Brain, TrendingUp, Shield } from 'lucide-react';

const Page1Title = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 15;
      const y = (e.clientY / window.innerHeight - 0.5) * 15;
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    { icon: Brain, title: '68+ AI Specialists', subtitle: '5 Orchestrated Teams', color: '#14B8A6' },
    { icon: Globe, title: '0% Capital Gains', subtitle: 'Tax-Free India Gateway', color: '#C4A052' },
    { icon: Shield, title: '18 Legendary AIs', subtitle: 'Buffett, Dalio & More', color: '#8B5CF6' }
  ];

  return (
    <ConsumerLayout>
      {/* Subtle animated background */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(ellipse at 20% 30%, rgba(20, 184, 166, 0.06) 0%, transparent 50%)',
            'radial-gradient(ellipse at 80% 70%, rgba(139, 92, 246, 0.06) 0%, transparent 50%)',
            'radial-gradient(ellipse at 20% 30%, rgba(20, 184, 166, 0.06) 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      />

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.1fr 0.9fr',
        height: '100%',
        padding: '2.5rem 4rem',
        gap: '2rem',
        position: 'relative'
      }}>
        {/* Left Content */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '1.25rem',
          zIndex: 1
        }}>
          {/* Brand Logo - Large & Prominent */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '0.875rem 1.25rem',
              background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)',
              border: '2px solid rgba(20, 184, 166, 0.25)',
              borderRadius: '16px',
              width: 'fit-content',
              boxShadow: '0 4px 20px rgba(20, 184, 166, 0.1)'
            }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 200 }}
            >
              <ARIAIconBadge size={52} animated={true} />
            </motion.div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ 
                fontSize: '1.6rem',
                fontWeight: '700',
                letterSpacing: '-0.02em',
                lineHeight: 1.1
              }}>
                <span style={{ color: '#1A1A1A' }}>ARIA</span>
                <span style={{ color: '#3A3A3A', fontWeight: '400' }}>wealth</span>
                <span style={{ color: '#1A1A1A' }}>.ai</span>
              </span>
              <span style={{ 
                fontSize: '0.7rem', 
                color: '#6B6B6B',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                fontWeight: 500
              }}>
                AI-Powered Wealth Management
              </span>
            </div>
          </motion.div>

          {/* Main Title with Icon */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
              <h1 style={{
                fontSize: 'clamp(2.8rem, 6vw, 4rem)',
                fontWeight: 600,
                margin: 0,
                letterSpacing: '-0.03em',
                lineHeight: 1
              }}>
                <span style={{ color: '#1A1A1A' }}>Meet </span>
                <span style={{ 
                  background: 'linear-gradient(135deg, #14b8a6, #06b6d4, #8B5CF6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>ARIA</span>
              </h1>
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Sparkles size={32} color="#14B8A6" />
              </motion.div>
            </div>
            <h2 style={{
              fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
              fontWeight: 400,
              fontFamily: "'Playfair Display', Georgia, serif",
              color: '#4A4A4A',
              margin: 0,
              letterSpacing: '-0.01em'
            }}>
              Your AI Family Office CEO
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              fontSize: '1.05rem',
              color: '#5A5A5A',
              maxWidth: '480px',
              lineHeight: 1.7,
              margin: 0
            }}
          >
            She orchestrates wealth like no human can — combining <strong style={{ color: '#14B8A6' }}>68+ AI specialists</strong> with 
            exclusive <strong style={{ color: '#C4A052' }}>India market access</strong> to deliver institutional-grade wealth management.
          </motion.p>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{
              display: 'flex',
              gap: '1rem',
              marginTop: '0.25rem'
            }}
          >
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                whileHover={{ y: -4, boxShadow: '0 8px 25px rgba(0,0,0,0.08)' }}
                style={{
                  padding: '0.875rem 1rem',
                  background: '#FFFFFF',
                  borderRadius: '12px',
                  boxShadow: '0 2px 15px rgba(0, 0, 0, 0.04)',
                  border: '1px solid #F0EDE6',
                  minWidth: '130px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <feature.icon size={20} color={feature.color} style={{ marginBottom: '0.5rem' }} />
                <p style={{
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: '#1A1A1A',
                  margin: 0,
                  marginBottom: '0.15rem'
                }}>
                  {feature.title}
                </p>
                <p style={{
                  fontSize: '0.7rem',
                  color: '#6B6B6B',
                  margin: 0
                }}>
                  {feature.subtitle}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right - ARIA Avatar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ 
              position: 'relative',
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
            }}
          >
            {/* Outer glow */}
            <motion.div
              animate={{
                opacity: [0.4, 0.7, 0.4],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '450px',
                height: '450px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(20, 184, 166, 0.15) 0%, rgba(139, 92, 246, 0.08) 40%, transparent 70%)',
                pointerEvents: 'none',
                filter: 'blur(20px)'
              }}
            />
            
            {/* Avatar container with floating animation */}
            <motion.div
              animate={{ 
                y: [0, -12, 0],
                boxShadow: [
                  '0 0 60px rgba(20, 184, 166, 0.2)',
                  '0 0 100px rgba(20, 184, 166, 0.35)',
                  '0 0 60px rgba(20, 184, 166, 0.2)'
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                width: '340px',
                height: '340px',
                borderRadius: '50%',
                padding: '6px',
                background: 'linear-gradient(135deg, #14B8A6, #06B6D4, #8B5CF6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: '#FDFBF7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '25px'
              }}>
                <ARIAAvatar 
                  size="hero" 
                  variant="gradient" 
                  animated={true} 
                  showPulse={true} 
                  showTitle={false}
                />
              </div>
            </motion.div>

            {/* Floating badge below avatar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              style={{
                position: 'absolute',
                bottom: '-25px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'white',
                padding: '0.6rem 1.25rem',
                borderRadius: '25px',
                boxShadow: '0 4px 25px rgba(0,0,0,0.12)',
                border: '1px solid #F0EDE6',
                whiteSpace: 'nowrap'
              }}
            >
              <span style={{ 
                fontSize: '0.85rem', 
                color: '#14B8A6',
                fontWeight: 600
              }}>
                Autonomous Risk & Investment Advisor
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Info Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          style={{
            position: 'absolute',
            bottom: '1.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '1.5rem',
            alignItems: 'center',
            padding: '0.6rem 1.5rem',
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            border: '1px solid #E5E0D5',
            borderRadius: '2rem',
            boxShadow: '0 2px 15px rgba(0,0,0,0.05)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ARIAIconBadge size={24} animated={false} />
            <span style={{ 
              fontSize: '0.85rem',
              fontWeight: '600'
            }}>
              <span style={{ 
                background: 'linear-gradient(135deg, #14b8a6, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>ARIA</span>
              <span style={{ color: '#6B6B6B', fontWeight: '400' }}>wealth</span>
              <span style={{ 
                background: 'linear-gradient(135deg, #06b6d4, #10b981)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>.ai</span>
            </span>
          </div>
          <span style={{ color: '#D4CFC4' }}>•</span>
          <span style={{ color: '#6B6B6B', fontSize: '0.8rem' }}>
            SEBI Registered
          </span>
          <span style={{ color: '#D4CFC4' }}>•</span>
          <span style={{ color: '#6B6B6B', fontSize: '0.8rem' }}>
            Vora Ventures Backed
          </span>
        </motion.div>
      </div>
    </ConsumerLayout>
  );
};

export default Page1Title;
