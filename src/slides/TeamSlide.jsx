import React from 'react'
import { motion } from 'framer-motion'
import { Check, Linkedin, Building2, User, Briefcase, GraduationCap } from 'lucide-react'
import ceoImage from '@assets/stock_images/professional_indian__b5bf24ba.jpg'
import cfoImage from '@assets/stock_images/professional_indian__403e201d.jpg'
import './SlideStyles.css'

export default function TeamSlide() {
  const founders = [
    {
      name: 'Sudhir G',
      title: 'Founder & CEO',
      linkedin: 'linkedin.com/in/sudhir-g-0972298/',
      expertise: ['Wealth Management', 'Investment Strategy', 'Global Markets'],
      background: [
        '10+ years wealth management',
        'Ex-Goldman Sachs PWM',
        'MBA, CFA Charter'
      ],
      photo: ceoImage
    },
    {
      name: 'Sachin Shah',
      title: 'Co-Founder & CFO',
      linkedin: 'voraventures.com/executive-team/sachin-shah',
      expertise: ['Corporate Finance', 'Tax Strategy', 'Regulatory Compliance'],
      background: [
        'Vora Ventures Partner',
        'Financial Architecture',
        'Tax Optimization Expert'
      ],
      photo: cfoImage
    }
  ]

  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-card large"
        style={{ padding: '2rem' }}
      >
        <h2 className="slide-title">Built by Experts in AI, Finance, and Global Markets</h2>
        
        {/* Founders Section with Photos */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '3rem', marginTop: '2rem', marginBottom: '2rem' }}>
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.2 }}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(20, 184, 166, 0.3)',
                borderRadius: '16px',
                padding: '1.5rem',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Gradient Background */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #14b8a6, #22c55e)',
              }} />
              
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                {/* Professional Photo */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    boxShadow: '0 0 20px rgba(20, 184, 166, 0.3)',
                    border: '2px solid rgba(20, 184, 166, 0.5)'
                  }}
                >
                  <img 
                    src={founder.photo} 
                    alt={founder.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </motion.div>
                
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.3rem', color: '#e2e8f0', marginBottom: '0.25rem' }}>
                    {founder.name}
                  </h3>
                  <p style={{ fontSize: '1rem', color: '#14b8a6', marginBottom: '0.75rem' }}>
                    {founder.title}
                  </p>
                  
                  {/* LinkedIn Link */}
                  <motion.a
                    href={`https://${founder.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      color: '#60a5fa',
                      fontSize: '0.85rem',
                      textDecoration: 'none',
                      marginBottom: '0.75rem'
                    }}
                  >
                    <Linkedin size={14} />
                    View Profile
                  </motion.a>
                  
                  {/* Expertise Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    {founder.expertise.map(exp => (
                      <span
                        key={exp}
                        style={{
                          fontSize: '0.7rem',
                          padding: '0.25rem 0.5rem',
                          background: 'rgba(34, 197, 94, 0.2)',
                          border: '1px solid rgba(34, 197, 94, 0.5)',
                          borderRadius: '12px',
                          color: '#22c55e'
                        }}
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                  
                  {/* Background */}
                  <div style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: '1.5' }}>
                    {founder.background.map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <Check size={12} stroke="#14b8a6" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom Section with Advisors and Track Record */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginTop: '2rem' }}>
          {/* Advisors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            style={{ 
              padding: '1.5rem', 
              border: '2px solid #22c55e', 
              borderRadius: '16px', 
              background: 'rgba(34, 197, 94, 0.1)' 
            }}
          >
            <h3 style={{ fontSize: '1.2rem', color: '#22c55e', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Building2 size={20} />
              Advisors
            </h3>
            <div style={{ fontSize: '0.85rem', lineHeight: '1.8', color: '#94a3b8' }}>
              <div>• Former SEC Commissioner</div>
              <div>• Head of Tax, Big 4 firm</div>
              <div>• India market specialist</div>
              <div>• GIFT City regulatory expert</div>
              <div>• AI ethics researcher</div>
            </div>
          </motion.div>
          
          {/* Track Record */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            style={{ 
              padding: '1.5rem', 
              border: '2px solid #3b82f6', 
              borderRadius: '16px', 
              background: 'rgba(59, 130, 246, 0.1)' 
            }}
          >
            <h3 style={{ fontSize: '1.2rem', color: '#3b82f6', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Briefcase size={20} />
              Track Record
            </h3>
            <div style={{ fontSize: '0.85rem', lineHeight: '1.8', color: '#94a3b8' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Check size={14} stroke="#3b82f6" strokeWidth={2.5} />
                <span>$2B+ AUM managed</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Check size={14} stroke="#3b82f6" strokeWidth={2.5} />
                <span>3 successful exits</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Check size={14} stroke="#3b82f6" strokeWidth={2.5} />
                <span>15+ AI patents</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Check size={14} stroke="#3b82f6" strokeWidth={2.5} />
                <span>Top journal research</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Check size={14} stroke="#3b82f6" strokeWidth={2.5} />
                <span>100% compliance</span>
              </div>
            </div>
          </motion.div>
          
          {/* Company Logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            style={{ 
              padding: '1.5rem', 
              border: '2px solid #a855f7', 
              borderRadius: '16px', 
              background: 'rgba(168, 85, 247, 0.1)' 
            }}
          >
            <h3 style={{ fontSize: '1.2rem', color: '#a855f7', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <GraduationCap size={20} />
              Past Experience
            </h3>
            <div style={{ fontSize: '0.85rem', lineHeight: '1.8', color: '#94a3b8' }}>
              <div>• Goldman Sachs</div>
              <div>• Google Brain</div>
              <div>• Vora Ventures</div>
              <div>• McKinsey & Co</div>
              <div>• Stanford University</div>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.0 }}
          style={{ 
            marginTop: '2rem', 
            textAlign: 'center', 
            padding: '1.5rem', 
            background: 'rgba(147, 51, 234, 0.1)', 
            borderRadius: '12px', 
            border: '1px solid rgba(147, 51, 234, 0.3)' 
          }}
        >
          <p style={{ fontSize: '1.1rem', color: '#a78bfa', fontWeight: 'bold' }}>
            Domain expertise + Technical capability + Regulatory knowledge = Rare combination
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
