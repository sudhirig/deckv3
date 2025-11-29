import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { AspectFrame } from '../../components/StandardLayouts'
import { 
  Sparkles, 
  Check, 
  Star,
  MessageSquare,
  Mic,
  Zap,
  BarChart3,
  Calculator,
  Users,
  Shield,
  Brain
} from 'lucide-react'

/**
 * SlideARIAAIPricing - ARIA AI Subscription Plans
 * Essential, Pro, Advisors tiers
 */
const SlideARIAAIPricing = () => {
  const [hoveredPlan, setHoveredPlan] = useState(null)

  const plans = [
    {
      id: 'essential',
      name: 'Essential',
      price: '$10',
      period: '/month',
      promo: '1st month free',
      tagline: 'For personal investors who check in weekly',
      color: '#14B8A6',
      features: [
        { icon: BarChart3, text: 'Multi-asset: stocks, bonds, ETFs' },
        { icon: Sparkles, text: 'Unlimited portfolios' },
        { icon: MessageSquare, text: 'Chat, Talk & WhatsApp' },
        { icon: Zap, text: 'Voice trading at 11ms' },
        { icon: Brain, text: 'Starter agent usage' }
      ],
      popular: false
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '$50',
      period: '/month',
      promo: '1st month free',
      tagline: 'Daily portfolio insights & optimization',
      color: '#8B5CF6',
      features: [
        { icon: Check, text: 'Everything in Essential' },
        { icon: Brain, text: 'More agents, tools & tasks' },
        { icon: Calculator, text: 'Tax Alpha (+1.8% daily)' },
        { icon: BarChart3, text: 'CGMF analysis (16,766 funds)' },
        { icon: Sparkles, text: 'Recurring specialized analyses' }
      ],
      popular: true
    },
    {
      id: 'advisors',
      name: 'Advisors',
      price: '$275',
      period: '/month',
      promo: '1st month free',
      tagline: 'Scale your expertise with AI',
      color: '#F59E0B',
      features: [
        { icon: Check, text: 'Everything in Pro' },
        { icon: Users, text: 'Multi-client unified servicing' },
        { icon: Users, text: 'Team plan (up to 5 advisors)' },
        { icon: Brain, text: 'Train on proprietary data' },
        { icon: Shield, text: 'Priority support' }
      ],
      popular: false
    }
  ]

  return (
    <AspectFrame>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(180deg, #0a0f1b 0%, #0f172a 100%)',
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem 3rem',
        fontFamily: 'Inter, -apple-system, sans-serif',
        overflow: 'hidden'
      }}>
        {/* Background Glow */}
        <div style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(139, 92, 246, 0.08) 0%, transparent 60%)',
          pointerEvents: 'none'
        }} />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '1.5rem', position: 'relative', zIndex: 10 }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(20, 184, 166, 0.1)',
            border: '1px solid rgba(20, 184, 166, 0.3)',
            borderRadius: '20px',
            padding: '0.4rem 1rem',
            marginBottom: '0.75rem'
          }}>
            <Brain size={16} color="#14B8A6" />
            <span style={{ fontSize: '0.8rem', color: '#14B8A6', fontWeight: '600' }}>ARIA AI</span>
          </div>
          
          <h1 style={{
            fontSize: '2.25rem',
            fontWeight: '800',
            color: '#FFFFFF',
            marginBottom: '0.5rem',
            letterSpacing: '-0.02em'
          }}>
            Choose Your Plan
          </h1>
          <p style={{ fontSize: '1rem', color: '#94A3B8', maxWidth: '500px', margin: '0 auto' }}>
            Choose the plan that matches what you want from your <span style={{ color: '#14B8A6' }}>ARIA AI Sidekick</span>
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            flex: 1,
            alignItems: 'stretch',
            position: 'relative',
            zIndex: 5
          }}
        >
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
              style={{
                background: plan.popular 
                  ? `linear-gradient(145deg, ${plan.color}20, ${plan.color}08)`
                  : 'rgba(15, 23, 42, 0.6)',
                border: plan.popular 
                  ? `2px solid ${plan.color}60`
                  : '1px solid rgba(100, 116, 139, 0.2)',
                borderRadius: '20px',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                transform: hoveredPlan === plan.id ? 'translateY(-5px)' : 'translateY(0)',
                boxShadow: plan.popular ? `0 10px 40px ${plan.color}20` : 'none',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: `linear-gradient(135deg, ${plan.color}, ${plan.color}CC)`,
                  padding: '0.25rem 1rem',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}>
                  <Star size={12} fill="#FFF" color="#FFF" />
                  <span style={{ fontSize: '0.7rem', fontWeight: '700', color: '#FFF', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div style={{ marginBottom: '1rem' }}>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: '700', 
                  color: '#FFFFFF', 
                  margin: '0 0 0.25rem 0' 
                }}>
                  {plan.name}
                </h3>
                <span style={{
                  fontSize: '0.7rem',
                  background: `${plan.color}20`,
                  color: plan.color,
                  padding: '0.2rem 0.5rem',
                  borderRadius: '6px',
                  fontWeight: '600'
                }}>
                  {plan.promo}
                </span>
              </div>

              {/* Price */}
              <div style={{ marginBottom: '1rem' }}>
                <span style={{ 
                  fontSize: '2.5rem', 
                  fontWeight: '800', 
                  color: plan.color 
                }}>
                  {plan.price}
                </span>
                <span style={{ fontSize: '1rem', color: '#64748B' }}>{plan.period}</span>
              </div>

              {/* Tagline */}
              <p style={{ 
                fontSize: '0.85rem', 
                color: '#94A3B8', 
                marginBottom: '1.25rem',
                lineHeight: '1.4'
              }}>
                {plan.tagline}
              </p>

              {/* Features */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {plan.features.map((feature, idx) => {
                  const Icon = feature.icon
                  return (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{
                        width: '20px',
                        height: '20px',
                        background: `${plan.color}15`,
                        borderRadius: '5px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <Icon size={12} color={plan.color} />
                      </div>
                      <span style={{ fontSize: '0.8rem', color: '#E2E8F0' }}>{feature.text}</span>
                    </div>
                  )
                })}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  marginTop: '1.25rem',
                  padding: '0.75rem 1.5rem',
                  background: plan.popular 
                    ? `linear-gradient(135deg, ${plan.color}, ${plan.color}CC)`
                    : 'transparent',
                  border: plan.popular ? 'none' : `1px solid ${plan.color}50`,
                  borderRadius: '10px',
                  color: plan.popular ? '#FFF' : plan.color,
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                Get started
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{
            marginTop: '1.25rem',
            textAlign: 'center'
          }}
        >
          <p style={{ fontSize: '0.75rem', color: '#64748B', margin: '0 0 0.25rem 0' }}>
            Pricing in $USD. Additional taxes may apply.
          </p>
          <p style={{ fontSize: '0.7rem', color: '#475569', margin: 0 }}>
            Cancel anytime · No setup fees · Secure payment
          </p>
        </motion.div>
      </div>
    </AspectFrame>
  )
}

export default SlideARIAAIPricing
