import React from 'react';
import { motion } from 'framer-motion';
import { ConsumerLayout, BodyText } from './ConsumerLayout';
import { FileCheck, Shield, Handshake, Award } from 'lucide-react';

const Page7Trust = () => {
  const trustPillars = [
    {
      icon: <FileCheck size={36} strokeWidth={1.5} />,
      label: 'Regulation'
    },
    {
      icon: <Shield size={36} strokeWidth={1.5} />,
      label: 'Security'
    },
    {
      icon: <Handshake size={36} strokeWidth={1.5} />,
      label: 'Partnership'
    }
  ];

  const regulations = [
    {
      logo: '📋',
      name: 'SEBI',
      subtitle: 'Registered Investment Advisor'
    },
    {
      logo: '🏛️',
      name: 'GIFT City',
      subtitle: 'IFSCA Regulated'
    },
    {
      logo: '🔒',
      name: 'Zero Custody',
      subtitle: 'Your assets, your broker'
    },
    {
      logo: '🛡️',
      name: 'Protected',
      subtitle: 'Bank-grade security'
    }
  ];

  const awards = [
    { name: 'Forbes', year: '(Target)', label: 'Fintech 50' },
    { name: 'Economic Times', year: '(Target)', label: 'Startup Awards' },
    { name: 'Vora Ventures', year: '2024', label: 'Backed' }
  ];

  return (
    <ConsumerLayout>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}>
        {/* SECTION A: Trust Foundation */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          borderBottom: '1px solid #E5E5E5'
        }}>
          {/* Left - Text */}
          <div style={{
            padding: '3rem 4rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                fontWeight: 400,
                fontFamily: "'Playfair Display', 'Georgia', serif",
                color: '#1A1A1A',
                lineHeight: 1.2,
                marginBottom: '1.5rem'
              }}
            >
              Built on a<br />
              foundation of<br />
              institutional<br />
              trust.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <BodyText>
                From app authentication and data encryption to asset
                custody and regulatory oversight, ARIA unites deep
                tech and high finance to ensure security. Your wealth,
                and your trust, are paramount.
              </BodyText>
            </motion.div>
          </div>

          {/* Right - Trust Icons */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
            padding: '2rem'
          }}>
            {trustPillars.map((pillar, index) => (
              <motion.div
                key={pillar.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: index === 2 
                    ? 'linear-gradient(135deg, #C4A052, #D4B062)' 
                    : '#F8F6F1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: index === 2 ? '#FFFFFF' : '#6B6B6B',
                  border: index === 2 ? 'none' : '1px solid #E5E5E5'
                }}>
                  {pillar.icon}
                </div>
                <span style={{
                  fontSize: '0.85rem',
                  color: '#6B6B6B',
                  fontWeight: 500
                }}>
                  {pillar.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION B: Regulation Details */}
        <div style={{
          flex: 1,
          padding: '2.5rem 4rem'
        }}>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              fontSize: '1.5rem',
              fontWeight: 400,
              fontFamily: "'Playfair Display', 'Georgia', serif",
              color: '#1A1A1A',
              textAlign: 'center',
              marginBottom: '2rem'
            }}
          >
            Regulated, Recognized, and Secure.
          </motion.h3>

          {/* Security & Regulation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ marginBottom: '2rem' }}
          >
            <p style={{
              fontSize: '0.8rem',
              color: '#A0A0A0',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '1rem'
            }}>
              Security & Regulation
            </p>
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              background: '#FFFFFF',
              borderRadius: '12px',
              padding: '1.5rem',
              boxShadow: '0 2px 20px rgba(0,0,0,0.04)',
              border: '1px solid #F0EDE6'
            }}>
              {regulations.map((reg, index) => (
                <div
                  key={reg.name}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    flex: 1,
                    borderRight: index < regulations.length - 1 ? '1px solid #F0EDE6' : 'none'
                  }}
                >
                  <span style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                    {reg.logo}
                  </span>
                  <span style={{
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: '#1A1A1A'
                  }}>
                    {reg.name}
                  </span>
                  <span style={{
                    fontSize: '0.75rem',
                    color: '#6B6B6B',
                    textAlign: 'center'
                  }}>
                    {reg.subtitle}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Industry Recognition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p style={{
              fontSize: '0.8rem',
              color: '#A0A0A0',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '1rem'
            }}>
              Industry Recognition
            </p>
            
            <div style={{
              display: 'flex',
              gap: '1rem'
            }}>
              {awards.map((award, index) => (
                <div
                  key={award.name}
                  style={{
                    flex: 1,
                    background: '#FFFFFF',
                    borderRadius: '8px',
                    padding: '1rem',
                    textAlign: 'center',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
                    border: '1px solid #F0EDE6'
                  }}
                >
                  <div style={{
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: '#1A1A1A'
                  }}>
                    {award.name}
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: '#6B6B6B'
                  }}>
                    {award.label}
                  </div>
                  <div style={{
                    fontSize: '0.7rem',
                    color: '#A0A0A0'
                  }}>
                    {award.year}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </ConsumerLayout>
  );
};

export default Page7Trust;
