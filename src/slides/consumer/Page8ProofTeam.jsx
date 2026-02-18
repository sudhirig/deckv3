import React from 'react';
import { motion } from 'framer-motion';
import { ConsumerLayout, BodyText, TestimonialCard, TeamCard } from './ConsumerLayout';

const Page8ProofTeam = () => {
  const testimonials = [
    {
      quote: "ARIA helped me save ₹45L in taxes during my startup exit. The GIFT City route was exactly what I needed - no other platform offered this.",
      author: "Founder",
      role: "Tech Startup ($25M Exit)"
    },
    {
      quote: "32% portfolio growth in my first year. The AI recommendations are spot-on and available 24/7 in my timezone.",
      author: "NRI Investor",
      role: "San Francisco"
    },
    {
      quote: "Finally, a platform that understands complex financial needs. The 18 AI advisors feel like having Goldman's team working for me.",
      author: "CPA",
      role: "Managing 50+ HNI Clients"
    }
  ];

  const teamMembers = [
    { name: 'CEO', role: 'Co-founder & CEO', placeholder: '👨‍💼' },
    { name: 'CTO', role: 'Co-founder & CTO', placeholder: '👨‍💻' },
    { name: 'Head of Product', role: 'Head of Product', placeholder: '👩‍💼' },
    { name: 'Head of Ops', role: 'Head of Operations', placeholder: '👨‍💼' }
  ];

  return (
    <ConsumerLayout>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}>
        {/* SECTION A: Testimonials */}
        <div style={{
          flex: 1,
          padding: '2.5rem 4rem',
          borderBottom: '1px solid #E5E5E5'
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
              marginBottom: '2rem'
            }}
          >
            What our clients<br />
            are saying.
          </motion.h2>

          {/* Testimonials grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem'
          }}>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                delay={0.2 + index * 0.15}
              />
            ))}
          </div>
        </div>

        {/* SECTION B: Team */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
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
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 400,
                fontFamily: "'Playfair Display', 'Georgia', serif",
                color: '#1A1A1A',
                lineHeight: 1.2,
                marginBottom: '1.5rem'
              }}
            >
              A team from the highest
              levels of tech and finance.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <BodyText>
                <strong>**Why We Built ARIA**:</strong> We are a team of senior tech
                professionals who experienced firsthand the challenge of
                making sophisticated wealth-building more accessible.
              </BodyText>
              
              <BodyText style={{ marginTop: '1rem' }}>
                We founded ARIA on a mission to build the platform we
                wished we had for ourselves—uniting deep tech expertise
                with institutional financial acumen to open up a new
                world of opportunity.
              </BodyText>
            </motion.div>

            {/* Backed by */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{
                marginTop: '1.5rem',
                padding: '1rem',
                background: 'linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)',
                borderRadius: '8px',
                color: '#FFFFFF'
              }}
            >
              <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>Backed by</span>
              <div style={{
                fontSize: '1.1rem',
                fontWeight: 600,
                marginTop: '0.25rem'
              }}>
                Vora Ventures
              </div>
            </motion.div>
          </div>

          {/* Right - Team photos */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2rem'
            }}>
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  style={{ textAlign: 'center' }}
                >
                  <div style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    background: '#F0EDE6',
                    margin: '0 auto 0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem'
                  }}>
                    {member.placeholder}
                  </div>
                  <div style={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: '#1A1A1A'
                  }}>
                    {member.name}
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: '#6B6B6B'
                  }}>
                    {member.role}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Companies */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              style={{
                marginTop: '2rem',
                fontSize: '0.8rem',
                color: '#A0A0A0',
                textAlign: 'center'
              }}
            >
              Professionals from global companies use ARIA.
            </motion.p>
          </div>
        </div>
      </div>
    </ConsumerLayout>
  );
};

export default Page8ProofTeam;
