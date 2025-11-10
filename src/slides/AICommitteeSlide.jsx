import DualPaneComparison from '../components/DualPaneComparison'
import GradientText from '../components/GradientText'
import './SlideStyles.css'
import { pxToRem } from '../utils/responsive'

export default function AICommitteeSlide() {
  const leftDetails = (
    <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: pxToRem(32), borderRadius: pxToRem(12), height: '100%' }}>
      <p style={{ fontSize: pxToRem(20.8), fontWeight: 'bold', marginBottom: pxToRem(16) }}>Single Advisor Bottleneck</p>
      <ul style={{ listStyle: 'none', padding: 0, fontSize: pxToRem(17.6), lineHeight: '1.8' }}>
        <li>• Quarterly meetings</li>
        <li>• Limited time</li>
        <li>• Generalist approach</li>
        <li>• Human biases</li>
      </ul>
    </div>
  )

  const rightDetails = (
    <div style={{ background: 'rgba(20, 184, 166, 0.1)', padding: pxToRem(32), borderRadius: pxToRem(12), height: '100%' }}>
      <p style={{ fontSize: pxToRem(20.8), fontWeight: 'bold', marginBottom: pxToRem(16) }}>AI Agent Swarm</p>
      <ul style={{ listStyle: 'none', padding: 0, fontSize: pxToRem(17.6), lineHeight: '1.8' }}>
        <li>• 24/7 availability</li>
        <li>• Specialized expertise</li>
        <li>• Continuous monitoring</li>
        <li>• Data-driven decisions</li>
      </ul>
    </div>
  )

  const summary = (
    <p style={{ textAlign: 'center', fontSize: pxToRem(20.8), color: '#14b8a6', fontWeight: 'bold' }}>
      5 Specialized Agents Working Together vs 1 Generalist Working Alone
    </p>
  )

  return (
    <DualPaneComparison
      title={
        <>
          <GradientText gradient="from-teal-400 to-cyan-400">Not a Chatbot. An AI Investment Committee.</GradientText>
          <p style={{ fontSize: pxToRem(17.6), color: '#94a3b8', textAlign: 'center', marginTop: pxToRem(8) }}>
            How Agentic AI Changes Everything
          </p>
        </>
      }
      leftHeader={<span style={{ color: '#ef4444', fontSize: pxToRem(24) }}>The Old Model</span>}
      rightHeader={<span style={{ color: '#14b8a6', fontSize: pxToRem(24) }}>Our Model</span>}
      leftContent={leftDetails}
      rightContent={rightDetails}
      summary={summary}
    />
  )
}
