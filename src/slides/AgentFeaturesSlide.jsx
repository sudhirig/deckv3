import { motion } from 'framer-motion'
import './SlideStyles.css'

export default function AgentFeaturesSlide() {
  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-card"
      >
        <h2 className="slide-title">What Makes Our Agents Different</h2>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="content-grid">
            <div className="feature-card">
              <h3 className="feature-title">⚡ Autonomous</h3>
              <p className="feature-description">
                Agents work independently on defined tasks without constant supervision
              </p>
            </div>
            <div className="feature-card">
              <h3 className="feature-title">🔗 Collaborative</h3>
              <p className="feature-description">
                Agents communicate and coordinate to solve complex multi-step problems
              </p>
            </div>
            <div className="feature-card">
              <h3 className="feature-title">🎯 Goal-Oriented</h3>
              <p className="feature-description">
                Each agent has clear objectives aligned with your financial goals
              </p>
            </div>
            <div className="feature-card">
              <h3 className="feature-title">👁️ Transparent</h3>
              <p className="feature-description">
                Every action is logged, explainable, and subject to human approval
              </p>
            </div>
            <div className="feature-card">
              <h3 className="feature-title">📚 Learning</h3>
              <p className="feature-description">
                Agents improve over time based on outcomes and feedback
              </p>
            </div>
            <div className="feature-card">
              <h3 className="feature-title">🛡️ Secure</h3>
              <p className="feature-description">
                Bank-grade encryption and security with SOC 2 compliance
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
