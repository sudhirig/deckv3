import React from 'react';
import { motion } from 'framer-motion';
import { ConsumerLayout } from './ConsumerLayout';
import ARIAAvatar from '../../components/ARIAAvatar';
import { MessageCircle } from 'lucide-react';

/**
 * Page2cMeetARIA - Consumer-style "Your AI Family Office CEO"
 * Simplified: Avatar + Title + Chat bubble Goldman line + Bridge text
 */
const Page2cMeetARIA = () => {
  return (
    <ConsumerLayout>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.2fr',
        height: '100%',
        padding: '3rem 4rem',
        gap: '3rem',
        alignItems: 'center'
      }}>
        {/* Left - ARIA Avatar with Chat Bubble */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative'
        }}>
          {/* ARIA Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative' }}
          >
            {/* Outer glow */}
            <motion.div
              animate={{
                opacity: [0.4, 0.7, 0.4],
                scale: [1, 1.08, 1]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(20, 184, 166, 0.12) 0%, rgba(139, 92, 246, 0.06) 50%, transparent 70%)',
                pointerEvents: 'none'
              }}
            />
            
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 40px rgba(20, 184, 166, 0.15)',
                  '0 0 70px rgba(20, 184, 166, 0.25)',
                  '0 0 40px rgba(20, 184, 166, 0.15)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                width: '220px',
                height: '220px',
                borderRadius: '50%',
                padding: '5px',
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
                padding: '15px'
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
          </motion.div>

          {/* Chat Bubble - Goldman Line */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              position: 'relative',
              marginTop: '1.5rem',
              background: '#FFFFFF',
              borderRadius: '20px',
              padding: '1.25rem 1.75rem',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
              border: '1px solid #F0EDE6',
              maxWidth: '320px'
            }}
          >
            {/* Chat bubble pointer */}
            <div style={{
              position: 'absolute',
              top: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              borderLeft: '12px solid transparent',
              borderRight: '12px solid transparent',
              borderBottom: '12px solid #FFFFFF'
            }} />
            
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem'
            }}>
              <MessageCircle size={20} color="#14B8A6" style={{ marginTop: '2px', flexShrink: 0 }} />
              <p style={{
                fontSize: '1.05rem',
                color: '#3A3A3A',
                fontStyle: 'italic',
                lineHeight: 1.5,
                margin: 0
              }}>
                "Like having <strong style={{ color: '#C4A052' }}>Goldman's team</strong> working for you — at a <strong style={{ color: '#14B8A6' }}>fraction of the cost</strong>."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right - Content */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '1.5rem'
        }}>
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p style={{
              fontSize: '0.85rem',
              color: '#14B8A6',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              fontWeight: 600,
              marginBottom: '0.5rem'
            }}>
              Meet ARIA
            </p>
            <h1 style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.25rem)',
              fontWeight: 400,
              fontFamily: "'Playfair Display', 'Georgia', serif",
              color: '#1A1A1A',
              margin: 0,
              letterSpacing: '-0.02em',
              lineHeight: 1.15
            }}>
              Your AI Family Office CEO
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              fontSize: '1.1rem',
              color: '#6B6B6B',
              margin: 0
            }}
          >
            <span style={{ color: '#14B8A6', fontWeight: 600 }}>ARIA</span> — Autonomous Risk & Investment Advisor
          </motion.p>

          {/* Bridge Text */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{
              background: 'linear-gradient(135deg, #1A1A1A, #2D2D2D)',
              borderRadius: '16px',
              padding: '1.5rem 2rem',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Decorative gradient */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at 0% 50%, rgba(20, 184, 166, 0.2) 0%, transparent 50%)',
              pointerEvents: 'none'
            }} />
            
            <p style={{
              fontSize: '1.15rem',
              color: '#FFFFFF',
              lineHeight: 1.7,
              margin: 0,
              position: 'relative',
              zIndex: 1
            }}>
              <strong style={{ color: '#14B8A6' }}>ARIA was built to give you that system.</strong>
            </p>
            <p style={{
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.6,
              margin: '0.75rem 0 0 0',
              position: 'relative',
              zIndex: 1
            }}>
              We unite deep tech and high finance to deliver your digital family office — 
              <span style={{ color: '#C4A052' }}> previously reserved for institutions and the ultra-wealthy.</span>
            </p>
          </motion.div>

          {/* Simple Stats Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{
              display: 'flex',
              gap: '2rem',
              marginTop: '0.5rem'
            }}
          >
            {[
              { value: '68+', label: 'AI Specialists', color: '#14B8A6' },
              { value: '0%', label: 'Tax via GIFT City', color: '#C4A052' },
              { value: '24/7', label: 'Active', color: '#8B5CF6' }
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: 'left' }}>
                <p style={{
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  color: stat.color,
                  margin: 0
                }}>
                  {stat.value}
                </p>
                <p style={{
                  fontSize: '0.75rem',
                  color: '#8B8B8B',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  margin: 0
                }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </ConsumerLayout>
  );
};

export default Page2cMeetARIA;
