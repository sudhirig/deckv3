import { ComparisonLayout } from '../components/StandardLayouts'
import GradientText from '../components/GradientText'
import './SlideStyles.css'

export default function AICommitteeSlide() {
  const leftDetails = (
    <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '2rem', borderRadius: '0.75rem', height: '100%' }}>
      <p style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '1rem' }}>Single Advisor Bottleneck</p>
      <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.1rem', lineHeight: '1.8' }}>
        <li>• Quarterly meetings</li>
        <li>• Limited time</li>
        <li>• Generalist approach</li>
        <li>• Human biases</li>
      </ul>
    </div>
  )

  const rightDetails = (
    <div style={{ background: 'rgba(20, 184, 166, 0.1)', padding: '2rem', borderRadius: '0.75rem', height: '100%' }}>
      <p style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '1rem' }}>AI Agent Swarm</p>
      <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.1rem', lineHeight: '1.8' }}>
        <li>• 24/7 availability</li>
        <li>• Specialized expertise</li>
        <li>• Continuous monitoring</li>
        <li>• Data-driven decisions</li>
      </ul>
    </div>
  )

  const summary = (
    <p style={{ textAlign: 'center', fontSize: '1.3rem', color: '#14b8a6', fontWeight: 'bold' }}>
      5 Specialized Agents Working Together vs 1 Generalist Working Alone
    </p>
  )

  return (
    <ComparisonLayout
      title={
        <>
          <GradientText gradient="from-teal-400 to-cyan-400">Not a Chatbot. An AI Investment Committee.</GradientText>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8', textAlign: 'center', marginTop: '0.5rem' }}>
            How Agentic AI Changes Everything
          </p>
        </>
      }
      leftOption={<span style={{ color: '#ef4444', fontSize: '1.5rem' }}>The Old Model</span>}
      rightOption={<span style={{ color: '#14b8a6', fontSize: '1.5rem' }}>Our Model</span>}
      leftDetails={leftDetails}
      rightDetails={rightDetails}
      summary={summary}
    />
  )
}
