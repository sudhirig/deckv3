import { motion } from 'framer-motion'
import { GridLayout } from '../components/StandardLayouts'
import { Cloud, Database, Shield, Cpu, Globe, Lock, Zap, Server } from 'lucide-react'
import { pxToRem } from '../utils/responsive'
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

  const layerCards = layers.map((layer, layerIndex) => (
    <motion.div
      key={layer.name}
      initial={{ opacity: 0, x: pxToRem(-30) }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 + layerIndex * 0.15 }}
      style={{
        background: `linear-gradient(135deg, ${layer.color}15, transparent)`,
        borderRadius: pxToRem(12),
        padding: pxToRem(16),
        border: `${pxToRem(1)} solid ${layer.color}33`
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: pxToRem(16)
      }}>
        <div style={{
          width: pxToRem(8),
          height: pxToRem(30),
          background: layer.color,
          borderRadius: pxToRem(4),
          marginRight: pxToRem(16)
        }} />
        <h3 style={{ color: layer.color, fontSize: pxToRem(17.6) }}>
          {layer.name}
        </h3>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: pxToRem(16) }}>
        {layer.components.map((component, i) => (
          <motion.div
            key={component.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + layerIndex * 0.15 + i * 0.05 }}
            whileHover={{ scale: 1.05 }}
            style={{
              padding: pxToRem(16),
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: pxToRem(8),
              border: `${pxToRem(1)} solid rgba(255, 255, 255, 0.1)`,
              textAlign: 'center'
            }}
          >
            <component.icon size={24} style={{ 
              color: layer.color, 
              margin: `0 auto ${pxToRem(8)}` 
            }} />
            <div style={{ fontSize: pxToRem(14.4), color: '#e2e8f0', marginBottom: pxToRem(4) }}>
              {component.name}
            </div>
            <div style={{ fontSize: pxToRem(12), color: '#64748b' }}>
              {component.tech}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  ))

  const techStackCard = (
    <motion.div
      key="tech-stack"
      initial={{ opacity: 0, y: pxToRem(20) }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      style={{
        background: 'rgba(20, 184, 166, 0.05)',
        borderRadius: pxToRem(12),
        padding: pxToRem(24),
        gridColumn: 'span 3'
      }}
    >
      <h3 style={{ color: '#14b8a6', marginBottom: pxToRem(16), fontSize: pxToRem(17.6) }}>
        Technology Stack
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: pxToRem(16) }}>
        {Object.entries(techStack).map(([category, techs], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 + index * 0.1 }}
            style={{
              padding: pxToRem(12),
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: pxToRem(8)
            }}
          >
            <div style={{ 
              fontSize: pxToRem(13.6), 
              color: '#14b8a6',
              fontWeight: '600',
              marginBottom: pxToRem(8)
            }}>
              {category}
            </div>
            <div style={{ fontSize: pxToRem(12), color: '#94a3b8' }}>
              {techs.join(' • ')}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )

  const metricsCard = (
    <motion.div
      key="metrics"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: pxToRem(16),
        gridColumn: 'span 3'
      }}
    >
      <div style={{
        textAlign: 'center',
        padding: pxToRem(16),
        background: 'rgba(147, 51, 234, 0.1)',
        borderRadius: pxToRem(8)
      }}>
        <div style={{ fontSize: pxToRem(24), fontWeight: 'bold', color: '#c084fc' }}>99.99%</div>
        <div style={{ fontSize: pxToRem(12), color: '#94a3b8' }}>Uptime SLA</div>
      </div>
      <div style={{
        textAlign: 'center',
        padding: pxToRem(16),
        background: 'rgba(59, 130, 246, 0.1)',
        borderRadius: pxToRem(8)
      }}>
        <div style={{ fontSize: pxToRem(24), fontWeight: 'bold', color: '#60a5fa' }}>&lt;100ms</div>
        <div style={{ fontSize: pxToRem(12), color: '#94a3b8' }}>API Latency</div>
      </div>
      <div style={{
        textAlign: 'center',
        padding: pxToRem(16),
        background: 'rgba(34, 197, 94, 0.1)',
        borderRadius: pxToRem(8)
      }}>
        <div style={{ fontSize: pxToRem(24), fontWeight: 'bold', color: '#4ade80' }}>10PB</div>
        <div style={{ fontSize: pxToRem(12), color: '#94a3b8' }}>Data Processed</div>
      </div>
      <div style={{
        textAlign: 'center',
        padding: pxToRem(16),
        background: 'rgba(251, 191, 36, 0.1)',
        borderRadius: pxToRem(8)
      }}>
        <div style={{ fontSize: pxToRem(24), fontWeight: 'bold', color: '#fbbf24' }}>1M+</div>
        <div style={{ fontSize: pxToRem(12), color: '#94a3b8' }}>Decisions/Day</div>
      </div>
    </motion.div>
  )

  const cards = [...layerCards, techStackCard, metricsCard]

  return (
    <GridLayout
      title="Technical Architecture: System Overview"
      subtitle="Enterprise-grade infrastructure built for scale"
      cards={cards}
      columns={3}
    />
  )
}
