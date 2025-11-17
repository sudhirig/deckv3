import React from 'react'
import { AspectFrame } from '../../components/StandardLayouts'
import { Check, X, Brain, Lock, Users, Crown } from 'lucide-react'

const Slide4TwoDimensionalProblemV7 = () => {
  const solutions = [
    {
      title: 'ROBO-ADVISORS',
      color: '#FBBF24',
      icon: Brain,
      hasIntelligence: true,
      hasAccess: false,
      pros: ['AI Intelligence', 'Low cost', 'Automated'],
      cons: ['US-only stocks', 'No alternatives', 'No India access', 'No tax optimization']
    },
    {
      title: 'PRIVATE BANKS',
      color: '#94A3B8',
      icon: Lock,
      hasIntelligence: false,
      hasAccess: true,
      pros: ['Global Access', 'Alternatives', 'Personal service'],
      cons: ['Human-only analysis', '$5M minimums', 'Months to execute', 'High fees']
    },
    {
      title: 'YOUR CPA',
      color: '#FB7185',
      icon: Users,
      hasIntelligence: false,
      hasAccess: false,
      pros: ['Trusted advisor', 'Tax expertise', 'Knows your situation'],
      cons: ['No investment access', 'No AI tools', 'Drowning in K-1s', 'Limited scope']
    },
    {
      title: 'GOLDMAN SACHS',
      color: '#14B8A6',
      icon: Crown,
      hasIntelligence: true,
      hasAccess: true,
      pros: ['Both Access + AI', 'India via GIFT (0% tax)', '50 AI analysts', 'Complete solution'],
      cons: ['You need $100M+', 'Not for 99%', 'Institutional only', 'No access for you'],
      elite: true
    }
  ]

  return (
    <AspectFrame>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #0A1628 0%, #0f172a 50%, #1e293b 100%)',
        display: 'flex',
        flexDirection: 'column',
        padding: '48px 64px',
        fontFamily: 'Inter, -apple-system, sans-serif'
      }}>
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h1 style={{
            fontSize: '38px',
            fontWeight: '700',
            color: '#FFFFFF',
            marginBottom: '8px',
            letterSpacing: '-0.02em'
          }}>
            WHY TODAY'S SOLUTIONS FAIL
          </h1>
          
          <p style={{
            fontSize: '20px',
            color: '#94A3B8',
            fontWeight: '500'
          }}>
            They Give You Access OR Intelligence, Never Both
          </p>
        </div>

        {/* 2x2 Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '1fr 1fr',
          gap: '24px',
          flex: 1,
          maxWidth: '1100px',
          margin: '0 auto',
          width: '100%'
        }}>
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <div key={index} style={{
                background: solution.elite 
                  ? 'linear-gradient(135deg, rgba(20, 184, 166, 0.2) 0%, rgba(20, 184, 166, 0.1) 100%)'
                  : 'linear-gradient(135deg, rgba(30, 41, 59, 0.5) 0%, rgba(30, 41, 59, 0.3) 100%)',
                borderRadius: '20px',
                border: solution.elite 
                  ? '3px solid rgba(20, 184, 166, 0.5)'
                  : '2px solid rgba(148, 163, 184, 0.2)',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                backdropFilter: 'blur(10px)',
                boxShadow: solution.elite 
                  ? '0 20px 40px rgba(20, 184, 166, 0.2)'
                  : '0 10px 30px rgba(0, 0, 0, 0.2)',
                position: 'relative'
              }}>
                {/* Elite Badge */}
                {solution.elite && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    right: '20px',
                    background: '#14B8A6',
                    color: '#0A1628',
                    padding: '4px 16px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '700',
                    boxShadow: '0 4px 12px rgba(20, 184, 166, 0.3)'
                  }}>
                    THE 1% SOLUTION
                  </div>
                )}

                {/* Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '20px'
                }}>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    color: solution.color,
                    margin: 0,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <Icon size={20} />
                    {solution.title}
                  </h3>
                </div>

                {/* Access/Intelligence Indicators */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '12px',
                  marginBottom: '20px',
                  padding: '12px',
                  background: 'rgba(0, 0, 0, 0.2)',
                  borderRadius: '12px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    {solution.hasIntelligence ? (
                      <Check size={16} color="#14B8A6" />
                    ) : (
                      <X size={16} color="#FB7185" />
                    )}
                    <span style={{
                      fontSize: '13px',
                      color: solution.hasIntelligence ? '#14B8A6' : '#FB7185',
                      fontWeight: '600'
                    }}>
                      {solution.hasIntelligence ? '✓ AI Intelligence' : '✗ No Intelligence'}
                    </span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    {solution.hasAccess ? (
                      <Check size={16} color="#14B8A6" />
                    ) : (
                      <X size={16} color="#FB7185" />
                    )}
                    <span style={{
                      fontSize: '13px',
                      color: solution.hasAccess ? '#14B8A6' : '#FB7185',
                      fontWeight: '600'
                    }}>
                      {solution.hasAccess ? '✓ Global Access' : '✗ No Access'}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div style={{ flex: 1 }}>
                  {/* Pros */}
                  {solution.pros.length > 0 && (
                    <div style={{ marginBottom: '16px' }}>
                      {solution.pros.map((pro, i) => (
                        <p key={i} style={{
                          fontSize: '13px',
                          color: solution.elite ? '#14B8A6' : '#FFFFFF',
                          margin: '0 0 6px 0',
                          paddingLeft: '20px',
                          position: 'relative'
                        }}>
                          <span style={{
                            position: 'absolute',
                            left: 0,
                            color: '#14B8A6'
                          }}>✓</span>
                          {pro}
                        </p>
                      ))}
                    </div>
                  )}
                  
                  {/* Cons */}
                  <div>
                    {solution.cons.map((con, i) => (
                      <p key={i} style={{
                        fontSize: '13px',
                        color: solution.elite ? '#FB7185' : '#94A3B8',
                        margin: '0 0 6px 0',
                        paddingLeft: '20px',
                        position: 'relative',
                        fontWeight: solution.elite && i === solution.cons.length - 1 ? '600' : '400'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: 0,
                          color: '#FB7185'
                        }}>✗</span>
                        {con}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Message */}
        <div style={{
          marginTop: '24px',
          background: 'linear-gradient(135deg, rgba(251, 113, 133, 0.1) 0%, rgba(251, 113, 133, 0.05) 100%)',
          border: '2px solid rgba(251, 113, 133, 0.3)',
          borderRadius: '16px',
          padding: '20px',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '18px',
            color: '#FFFFFF',
            margin: 0
          }}>
            <strong style={{ color: '#FB7185' }}>The Gap:</strong> Goldman has both but won't serve you. 
            Everyone else gives you <strong style={{ color: '#FB7185' }}>half a solution.</strong>
          </p>
        </div>
      </div>
    </AspectFrame>
  )
}

export default Slide4TwoDimensionalProblemV7
