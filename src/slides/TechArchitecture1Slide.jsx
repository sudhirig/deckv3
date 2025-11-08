import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import GradientText from '../components/GradientText'
import { Cloud, Database, Shield, Cpu, Globe, Lock, Zap, Server } from 'lucide-react'
import './SlideStyles.css'

export default function TechArchitecture1Slide() {
  const layers = [
    {
      name: 'Client Layer',
      color: '#c084fc',
      components: [
        { name: 'React Web App', icon: Globe, tech: 'React 18 + TypeScript' },
        { name: 'Mobile Apps', icon: Zap, tech: 'React Native' },
        { name: 'API Gateway', icon: Shield, tech: 'CloudFlare Workers' }
      ]
    },
    {
      name: 'AI Engine Layer',
      color: '#60a5fa',
      components: [
        { name: 'Orchestration Engine', icon: Cpu, tech: 'Kubernetes + Ray' },
        { name: 'Agent Swarm', icon: Server, tech: '20+ Specialized Agents' },
        { name: 'LLM Pipeline', icon: Zap, tech: 'GPT-4 + Claude + Custom' }
      ]
    },
    {
      name: 'Data & Integration Layer',
      color: '#4ade80',
      components: [
        { name: 'Vector Database', icon: Database, tech: 'Pinecone + Weaviate' },
        { name: 'Time Series DB', icon: Database, tech: 'TimescaleDB' },
        { name: 'Market Data', icon: Globe, tech: 'Bloomberg + Reuters' }
      ]
    },
    {
      name: 'Security & Compliance',
      color: '#fbbf24',
      components: [
        { name: 'Zero Trust', icon: Lock, tech: 'Cloudflare Zero Trust' },
        { name: 'Encryption', icon: Shield, tech: 'AES-256 + HSM' },
        { name: 'Compliance', icon: Shield, tech: 'SOC2 + ISO27001' }
      ]
    }
  ]

  const techStack = {
    'Frontend': ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    'Backend': ['Python', 'FastAPI', 'Node.js', 'GraphQL'],
    'AI/ML': ['PyTorch', 'LangChain', 'Ray', 'Hugging Face'],
    'Infrastructure': ['AWS', 'Kubernetes', 'Terraform', 'Docker'],
    'Data': ['PostgreSQL', 'Redis', 'Kafka', 'Snowflake'],
    'Monitoring': ['Datadog', 'Sentry', 'Grafana', 'Prometheus']
  }

  return (
    <div className="slide-content">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-card"
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <AnimatedText delay={0.2}>
          <h2 className="slide-title" style={{ marginBottom: '0.5rem' }}>
            <GradientText gradient="from-blue-400 to-cyan-400">
              Technical Architecture: System Overview
            </GradientText>
          </h2>
          <p style={{ fontSize: '1rem', color: '#94a3b8', textAlign: 'center', marginBottom: '2rem' }}>
            Enterprise-grade infrastructure built for scale
          </p>
        </AnimatedText>

        {/* Architecture Layers */}
        <div style={{ marginBottom: '2rem' }}>
          {layers.map((layer, layerIndex) => (
            <motion.div
              key={layer.name}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + layerIndex * 0.15 }}
              style={{
                marginBottom: '1rem',
                background: `linear-gradient(135deg, ${layer.color}15, transparent)`,
                borderRadius: '12px',
                padding: '1rem',
                border: `1px solid ${layer.color}33`
              }}
            >
              {/* Layer Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1rem'
              }}>
                <div style={{
                  width: '8px',
                  height: '30px',
                  background: layer.color,
                  borderRadius: '4px',
                  marginRight: '1rem'
                }} />
                <h3 style={{ color: layer.color, fontSize: '1.1rem' }}>
                  {layer.name}
                </h3>
              </div>

              {/* Components */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                {layer.components.map((component, i) => (
                  <motion.div
                    key={component.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + layerIndex * 0.15 + i * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    style={{
                      padding: '1rem',
                      background: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      textAlign: 'center'
                    }}
                  >
                    <component.icon size={24} style={{ 
                      color: layer.color, 
                      margin: '0 auto 0.5rem' 
                    }} />
                    <div style={{ fontSize: '0.9rem', color: '#e2e8f0', marginBottom: '0.25rem' }}>
                      {component.name}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                      {component.tech}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{
            background: 'rgba(20, 184, 166, 0.05)',
            borderRadius: '12px',
            padding: '1.5rem'
          }}
        >
          <h3 style={{ color: '#14b8a6', marginBottom: '1rem', fontSize: '1.1rem' }}>
            Technology Stack
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {Object.entries(techStack).map(([category, techs], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                style={{
                  padding: '0.75rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '8px'
                }}
              >
                <div style={{ 
                  fontSize: '0.85rem', 
                  color: '#14b8a6',
                  fontWeight: '600',
                  marginBottom: '0.5rem'
                }}>
                  {category}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                  {techs.join(' • ')}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem',
            marginTop: '1.5rem'
          }}
        >
          <div style={{
            textAlign: 'center',
            padding: '1rem',
            background: 'rgba(147, 51, 234, 0.1)',
            borderRadius: '8px'
          }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#c084fc' }}>99.99%</div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Uptime SLA</div>
          </div>
          <div style={{
            textAlign: 'center',
            padding: '1rem',
            background: 'rgba(59, 130, 246, 0.1)',
            borderRadius: '8px'
          }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#60a5fa' }}>&lt;100ms</div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>API Latency</div>
          </div>
          <div style={{
            textAlign: 'center',
            padding: '1rem',
            background: 'rgba(34, 197, 94, 0.1)',
            borderRadius: '8px'
          }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4ade80' }}>10PB</div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Data Processed</div>
          </div>
          <div style={{
            textAlign: 'center',
            padding: '1rem',
            background: 'rgba(251, 191, 36, 0.1)',
            borderRadius: '8px'
          }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fbbf24' }}>1M+</div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Decisions/Day</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}