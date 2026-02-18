import React from 'react';
import { motion } from 'framer-motion';
import { ConsumerLayout, BodyText, CTAButton } from './ConsumerLayout';
import { Apple, Play } from 'lucide-react';

const Page9CommunityCTA = () => {
  const experts = [
    { name: 'Expert 1', role: 'Wealth Strategist', placeholder: '👨‍💼' },
    { name: 'Expert 2', role: 'Tax Specialist', placeholder: '👩‍💼' },
    { name: 'Expert 3', role: 'Investment Analyst', placeholder: '👨‍💼' }
  ];

  const educationTopics = [
    'Five things to know about wealth management',
    'Are you over-concentrated?'
  ];

  return (
    <ConsumerLayout>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}>
        {/* SECTION A: Community */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          borderBottom: '1px solid #E5E5E5',
          padding: '2.5rem 4rem'
        }}>
          {/* Left - Text */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingRight: '2rem'
          }}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 400,
                fontFamily: "'Playfair Display', 'Georgia', serif",
                color: '#1A1A1A',
                lineHeight: 1.2,
                marginBottom: '1.5rem'
              }}
            >
              Join a community dedicated
              to building wealth.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <BodyText>
                Grow your knowledge alongside a vetted community of ARIA
                members and experts. Get direct access to insights from
                leaders in technology and finance.
              </BodyText>
            </motion.div>

            {/* Testimonial quote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                marginTop: '1.5rem',
                padding: '1rem 1.5rem',
                background: '#F8F6F1',
                borderRadius: '8px',
                borderLeft: '3px solid #C4A052'
              }}
            >
              <p style={{
                fontSize: '0.9rem',
                color: '#4A4A4A',
                fontStyle: 'italic',
                lineHeight: 1.6,
                margin: 0
              }}>
                "...unlocked diverse investments—from alternatives to
                private equity—to take control of their financial future."
              </p>
              <p style={{
                fontSize: '0.8rem',
                color: '#8B7355',
                marginTop: '0.75rem',
                margin: '0.75rem 0 0 0'
              }}>
                Chris and Natasha Find their Financial 'Fit' with ARIA
              </p>
            </motion.div>
          </div>

          {/* Right - Experts & Education */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            {/* Featured Experts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p style={{
                fontSize: '0.8rem',
                color: '#A0A0A0',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '1rem'
              }}>
                Featured Experts
              </p>
              
              <div style={{
                display: 'flex',
                gap: '1.5rem'
              }}>
                {experts.map((expert, index) => (
                  <div key={expert.name} style={{ textAlign: 'center' }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: '#F0EDE6',
                      margin: '0 auto 0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.25rem'
                    }}>
                      {expert.placeholder}
                    </div>
                    <div style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: '#1A1A1A'
                    }}>
                      {expert.name}
                    </div>
                    <div style={{
                      fontSize: '0.65rem',
                      color: '#6B6B6B'
                    }}>
                      {expert.role}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p style={{
                fontSize: '0.8rem',
                color: '#A0A0A0',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '0.75rem'
              }}>
                Education
              </p>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                {educationTopics.map((topic, index) => (
                  <div
                    key={index}
                    style={{
                      padding: '0.75rem 1rem',
                      background: '#FFFFFF',
                      borderRadius: '8px',
                      fontSize: '0.85rem',
                      color: '#1A1A1A',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                      border: '1px solid #F0EDE6',
                      cursor: 'pointer'
                    }}
                  >
                    {topic}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* SECTION B: CTA */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2.5rem 4rem',
          textAlign: 'center'
        }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 400,
              fontFamily: "'Playfair Display', 'Georgia', serif",
              color: '#1A1A1A',
              marginBottom: '1.5rem'
            }}
          >
            Your AI family office is ready.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: '#4A4A4A',
              marginBottom: '2rem',
              maxWidth: '600px'
            }}
          >
            To celebrate our launch, your first investments
            up to <span style={{ color: '#14B8A6', fontWeight: 600 }}>₹1,00,00,000</span> are
            managed <span style={{ textDecoration: 'underline' }}>free for one year</span> by ARIA.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            style={{
              display: 'flex',
              gap: '1rem',
              marginBottom: '2rem'
            }}
          >
            <CTAButton variant="primary">
              [ Create a Free Account ]
            </CTAButton>
            <CTAButton variant="secondary">
              [ Chat with an Expert ]
            </CTAButton>
          </motion.div>

          {/* App availability */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.75rem'
            }}
          >
            <span style={{
              fontSize: '0.85rem',
              color: '#6B6B6B'
            }}>
              Available now on iOS and Android
            </span>
            
            <div style={{
              display: 'flex',
              gap: '1rem'
            }}>
              <Apple size={24} color="#1A1A1A" />
              <Play size={24} color="#1A1A1A" fill="#1A1A1A" />
            </div>
          </motion.div>

          {/* Website */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            style={{
              marginTop: '1.5rem',
              fontSize: '1rem',
              fontWeight: 500,
              color: '#14B8A6',
              letterSpacing: '0.05em'
            }}
          >
            ariawealth.ai
          </motion.div>
        </div>
      </div>
    </ConsumerLayout>
  );
};

export default Page9CommunityCTA;
