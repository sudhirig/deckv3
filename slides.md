---
theme: default
background: https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1920&q=80
class: 'text-center'
highlighter: shiki
lineNumbers: false
info: |
  ## The AI-Powered Digital Family Office
  Institutional-Grade Wealth Management for High-Net-Worth Investors
drawings:
  persist: false
css: unocss
colorSchema: 'dark'
transition: slide-left
title: AI-Powered Digital Family Office
---

<style>
@keyframes pulse-slow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.gradient-text {
  background: linear-gradient(135deg, #14b8a6 0%, #10b981 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.glassmorphism {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>

# The AI-Powered Digital Family Office

<div class="text-4xl font-light mb-10 leading-relaxed text-gray-200">
Institutional-Grade Wealth Management<br/>For the Next Generation
</div>

<div class="text-3xl font-bold gradient-text mb-6" style="animation: pulse-slow 3s infinite;">
Agentic AI • Tax Alpha • Alternative Access • GIFT City Gateway
</div>

<div class="text-lg text-gray-400 italic">
Our three "alpha" moats in one platform
</div>

<div class="abs-br m-10 text-xl font-medium text-teal-400">
November 2025
</div>

---
layout: center
class: text-center
background: https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80
---

<div class="text-8xl font-black mb-8 gradient-text" style="animation: float 3s ease-in-out infinite;">
ACT 1
</div>

<div class="text-4xl font-light text-gray-200 mb-6">
The Hook & The Problem
</div>

<div class="text-2xl text-gray-400">
Why Now? Why AI? Why Us?
</div>

---

# AI is the New Alpha

<StanfordChart />

<div class="absolute bottom-10 left-0 right-0 text-center px-8">
  <div class="glassmorphism inline-block px-8 py-4 rounded-2xl">
    <div class="text-sm text-gray-300">
      <strong class="text-teal-400">Source:</strong> Stanford University Study, 2024 | AI can outperform 93% of managers by analyzing public data
    </div>
  </div>
</div>

---

# The Wealth Management Market is Switching Now

<StatCard
  :value="46"
  suffix="%"
  label="Planning to Switch Advisors<br/>in the next 1-2 years"
  color="orange"
  :animate="true"
/>

<div class="grid grid-cols-3 gap-8 px-8 mt-8">
  <div class="glassmorphism p-6 border-l-4 border-orange-500 rounded-xl transform hover:scale-105 transition-all">
    <div class="text-5xl font-black text-orange-400 mb-3">39%</div>
    <div class="text-gray-200 text-lg">Already switched or added provider (last 3 years)</div>
  </div>
  <div class="glassmorphism p-6 border-l-4 border-amber-500 rounded-xl transform hover:scale-105 transition-all">
    <div class="text-5xl font-black text-amber-400 mb-3">2x</div>
    <div class="text-gray-200 text-lg">Under 55 switch at twice the rate</div>
  </div>
  <div class="glassmorphism p-6 border-l-4 border-teal-500 rounded-xl transform hover:scale-105 transition-all">
    <div class="text-5xl font-black text-teal-400 mb-3">NOW</div>
    <div class="text-gray-200 text-lg">Once-in-generation window to capture share</div>
  </div>
</div>

<div class="absolute bottom-6 left-0 right-0 text-center">
  <div class="text-sm text-gray-400">
    Source: PwC HNW Investor Survey, 2022 | <strong class="text-teal-400">$107T</strong> in US HNW wealth + <strong class="text-teal-400">$124T</strong> wealth transfer in motion
  </div>
</div>

---

# Why They're Switching: The Three Failures

<div class="mb-6 text-center">
  <div class="text-2xl font-semibold text-gray-200">
    The "Alpha Gap" - What HNWIs Want vs What They Get
  </div>
</div>

<AlphaGapComparison />

<div class="mt-8 px-8">
  <div class="glassmorphism p-6 rounded-2xl border-2 border-red-500/50 text-center">
    <div class="text-xl font-bold text-red-300">
      ⚠️ Traditional advisors can't scale these solutions. AI can.
    </div>
  </div>
</div>

---
layout: center
class: text-center
background: https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1920
---

<div class="text-8xl font-black mb-8 gradient-text" style="animation: float 3s ease-in-out infinite;">
ACT 2
</div>

<div class="text-4xl font-light text-gray-200 mb-6">
The Solution
</div>

<div class="text-2xl text-gray-400">
The AI-Powered Digital Family Office
</div>

---

# Not a Chatbot. An AI Investment Committee.

<div class="text-center text-xl text-gray-300 mb-8">
  How Agentic AI Changes Everything
</div>

<div class="grid grid-cols-2 gap-10 px-8">
  <div>
    <div class="text-2xl font-bold mb-6 text-red-300">❌ The Old Model</div>
    <FlowDiagram type="old" />
    <div class="mt-6 glassmorphism p-5 border-2 border-red-500/40 rounded-xl">
      <div class="font-bold text-red-300 mb-2">Single Advisor Bottleneck:</div>
      <div class="text-gray-300 text-sm">Quarterly meetings, limited time, generalist approach, human biases</div>
    </div>
  </div>
  
  <div>
    <div class="text-2xl font-bold mb-6 text-green-300">✅ Our Model</div>
    <FlowDiagram type="new" />
    <div class="mt-6 glassmorphism p-5 border-2 border-teal-500/40 rounded-xl">
      <div class="font-bold text-teal-300 mb-2">AI Agent Swarm:</div>
      <div class="text-gray-300 text-sm">24/7 availability, specialized expertise, continuous monitoring, data-driven decisions</div>
    </div>
  </div>
</div>

<div class="mt-8 text-center">
  <div class="glassmorphism inline-block px-10 py-5 rounded-2xl border-2 border-teal-500/50">
    <div class="text-2xl font-bold gradient-text">
      5 Specialized Agents Working Together vs 1 Generalist Working Alone
    </div>
  </div>
</div>

---

# Our Moat: Three "Alpha Agents" Solving The Three Failures

<div class="text-center text-lg text-gray-300 mb-6">
  Each agent directly answers one pain point from Slide 4
</div>

<div class="grid grid-cols-3 gap-6 px-4">
  <AgentCard
    icon="💰"
    title="Tax Alpha Agent"
    color="orange"
    problem="HNWIs lose millions to inefficient tax management. Advisors harvest quarterly at best."
    solution="Daily tax-loss harvesting captures 2-4x more opportunities, generating +1.8% annual alpha"
  >
    <div class="mt-4 p-3 bg-orange-900/30 rounded-lg border border-orange-500/30">
      <div class="text-sm font-semibold text-orange-300">
        <strong>Competitive Edge:</strong> Wealthfront does monthly. We do daily.
      </div>
    </div>
  </AgentCard>
  
  <AgentCard
    icon="📄"
    title="Alternative Asset Agent"
    color="green"
    problem="HNWIs demand private markets (15% allocation), but 80% of data trapped in 100-page docs."
    solution="AI reads PDFs, generates 1-page memos, tracks performance. Institutional DD without analyst team."
  >
    <div class="mt-4 p-3 bg-green-900/30 rounded-lg border border-green-500/30">
      <div class="text-sm font-semibold text-green-300">
        <strong>Unlock:</strong> 16,000+ funds analyzed. +300-500bps potential alpha.
      </div>
    </div>
  </AgentCard>
  
  <AgentCard
    icon="🌏"
    title="India Gateway Agent"
    color="teal"
    problem="Accessing India = nightmare of FPI regulations, tax drag, currency risk."
    solution="GIFT City route eliminates tax (0% CGT), eliminates currency risk (USD), unrestricted repatriation"
  >
    <div class="mt-4 p-3 bg-teal-900/30 rounded-lg border border-teal-500/30">
      <div class="text-sm font-semibold text-teal-300">
        <strong>Unique:</strong> Only AI platform with automated GIFT City access.
      </div>
    </div>
  </AgentCard>
</div>

<div class="mt-8 text-center">
  <div class="glassmorphism inline-block px-8 py-4 rounded-2xl border-2 border-purple-500/50">
    <div class="text-xl font-bold text-purple-300">
      ✨ Each agent creates measurable alpha. Together, they're unstoppable.
    </div>
  </div>
</div>

---
layout: center
class: text-center
background: https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1920
---

<div class="text-8xl font-black mb-8 gradient-text" style="animation: float 3s ease-in-out infinite;">
ACT 3
</div>

<div class="text-4xl font-light text-gray-200 mb-6">
The Deep Dive
</div>

<div class="text-2xl text-gray-400">
The Moat & The Technology
</div>

---

# India: A $5T Market, Locked by Red Tape

<div class="grid grid-cols-2 gap-8 px-8">
  <div>
    <div class="text-2xl font-bold mb-6 text-red-300">🔒 The Old FPI Route</div>
    <div class="space-y-4">
      <div class="glassmorphism p-5 border-l-4 border-red-500 rounded-xl">
        <div class="font-bold text-red-300 mb-2">Complex Red Tape</div>
        <div class="text-gray-300 text-sm">Heavy FPI compliance burdens, multi-month setup</div>
      </div>
      <div class="glassmorphism p-5 border-l-4 border-red-500 rounded-xl">
        <div class="font-bold text-red-300 mb-2">Crippling Tax</div>
        <div class="text-gray-300 text-sm">Capital Gains Tax + STT drag performance</div>
      </div>
      <div class="glassmorphism p-5 border-l-4 border-red-500 rounded-xl">
        <div class="font-bold text-red-300 mb-2">Currency Risk</div>
        <div class="text-gray-300 text-sm">INR depreciation erodes returns</div>
      </div>
      <div class="glassmorphism p-5 border-l-4 border-red-500 rounded-xl">
        <div class="font-bold text-red-300 mb-2">Repatriation Nightmare</div>
        <div class="text-gray-300 text-sm">Slow, restrictive capital movement</div>
      </div>
    </div>
  </div>
  
  <div class="flex items-center justify-center">
    <div class="text-center space-y-6">
      <div class="text-7xl mb-6" style="animation: pulse-slow 2s infinite;">🔒</div>
      <div class="text-3xl font-bold text-gray-200">
        15% of HNW portfolios want India exposure
      </div>
      <div class="text-6xl font-black text-red-400 my-6">
        Only 3% have it
      </div>
      <div class="text-lg text-gray-300 italic">
        The barriers are too high.<br/>Traditional advisors say "too complex."
      </div>
    </div>
  </div>
</div>

---

# Our Solution: The GIFT City "AI Gateway"

<div class="grid grid-cols-2 gap-8 px-8">
  <div>
    <div class="text-2xl font-bold mb-6 text-green-300">🔓 The GIFT City Solution</div>
    <div class="space-y-4">
      <div class="glassmorphism p-5 border-l-4 border-green-500 rounded-xl transform hover:scale-105 transition-all">
        <div class="font-bold text-green-300 mb-2">Direct Access via IFSC</div>
        <div class="text-gray-300 text-sm">Streamlined setup for foreign investors</div>
      </div>
      <div class="glassmorphism p-5 border-l-4 border-green-500 rounded-xl transform hover:scale-105 transition-all">
        <div class="font-bold text-green-300 mb-2">0% Capital Gains Tax</div>
        <div class="text-gray-300 text-sm">No CGT, no STT - keep all your gains</div>
      </div>
      <div class="glassmorphism p-5 border-l-4 border-green-500 rounded-xl transform hover:scale-105 transition-all">
        <div class="font-bold text-green-300 mb-2">USD-Based Trading</div>
        <div class="text-gray-300 text-sm">Eliminate currency risk entirely</div>
      </div>
      <div class="glassmorphism p-5 border-l-4 border-green-500 rounded-xl transform hover:scale-105 transition-all">
        <div class="font-bold text-green-300 mb-2">Free Capital Movement</div>
        <div class="text-gray-300 text-sm">Instant repatriation, no restrictions</div>
      </div>
    </div>
  </div>
  
  <div class="flex items-center justify-center">
    <div class="text-center space-y-6">
      <div class="text-7xl mb-6" style="animation: float 2s ease-in-out infinite;">🔓</div>
      <div class="text-4xl font-black text-green-300">
        +300bps in returns
      </div>
      <div class="text-lg text-gray-400">(JPMorgan Research)</div>
      <div class="text-3xl font-bold text-teal-400 mt-6">
        NSE IFSC Volume Up 400% YoY
      </div>
      <div class="text-sm text-gray-400">Market validation of GIFT City route</div>
    </div>
  </div>
</div>

<div class="absolute bottom-6 left-0 right-0 text-center">
  <div class="glassmorphism inline-block px-8 py-4 rounded-2xl border-2 border-yellow-500/50">
    <span class="text-xl font-bold text-yellow-300">⭐ EXCLUSIVE:</span>
    <span class="text-gray-200 ml-3 text-lg">One of only 3 platforms with this capability</span>
  </div>
</div>

---

# Our "Tax Alpha" Agent: Daily vs Annual

<div class="grid grid-cols-3 gap-6 px-8">
  <div class="glassmorphism p-6 rounded-2xl border-2 border-red-500/40">
    <div class="text-2xl font-bold text-red-300 mb-4">❌ The Problem</div>
    <div class="space-y-3 text-gray-300">
      <div>• Wealthfront/Betterment: <strong class="text-red-400">Monthly</strong> TLH</div>
      <div>• Most RIAs: <strong class="text-red-400">Yearly</strong> TLH</div>
      <div>• Miss <strong class="text-red-400">80%</strong> of opportunities</div>
    </div>
  </div>
  
  <div class="glassmorphism p-6 rounded-2xl border-2 border-teal-500/40">
    <div class="text-2xl font-bold text-teal-300 mb-4">✅ Our Daily TLH</div>
    <div class="space-y-3 text-gray-300">
      <div>• Scans <strong class="text-teal-400">every market day</strong></div>
      <div>• Wash-sale-aware trades</div>
      <div>• <strong class="text-teal-400">2-4x more savings</strong></div>
    </div>
  </div>
  
  <div class="glassmorphism p-6 rounded-2xl border-2 border-green-500/40">
    <div class="text-2xl font-bold text-green-300 mb-4">🎯 Smart Strategy</div>
    <div class="space-y-3 text-gray-300">
      <div>• Short-term gains <strong class="text-green-400">(37% tax)</strong> first</div>
      <div>• Then long-term <strong class="text-green-400">(20%)</strong></div>
      <div>• Maximizes tax alpha</div>
    </div>
  </div>
</div>

<div class="mt-10 px-8">
  <div class="glassmorphism p-8 rounded-2xl border-2 border-teal-500/50">
    <div class="text-3xl font-bold text-center text-teal-400 mb-6">The Impact on $10M Portfolio</div>
    <div class="grid grid-cols-3 gap-8 text-center">
      <div>
        <div class="text-5xl font-black text-teal-400 mb-2">+1.8%</div>
        <div class="text-gray-300">Additional Annual Return</div>
      </div>
      <div>
        <div class="text-2xl text-gray-400 mb-2">Traditional (Yearly)</div>
        <div class="text-4xl font-bold text-orange-400">+7.0%</div>
      </div>
      <div>
        <div class="text-2xl text-gray-400 mb-2">Our AI (Daily)</div>
        <div class="text-4xl font-bold text-teal-400">+8.8%</div>
      </div>
    </div>
    <div class="mt-6 text-center text-3xl font-black text-green-400">
      = $180K/year additional tax savings
    </div>
  </div>
</div>

---

# Our "Alternative Asset" Agent: AI Due Diligence

<div class="grid grid-cols-2 gap-8 px-8">
  <div>
    <div class="text-2xl font-bold mb-6 text-orange-300">The Problem</div>
    <div class="glassmorphism p-6 rounded-xl border-2 border-red-500/40 mb-6">
      <div class="text-lg text-gray-200 mb-4">
        80% of alternative investment data is trapped in 100-page PDFs.
      </div>
      <div class="text-lg text-gray-200">
        Traditional due diligence requires expensive analyst teams.
      </div>
    </div>
    
    <div class="text-2xl font-bold mb-6 text-green-300">Our AI Solution</div>
    <div class="space-y-4">
      <div class="glassmorphism p-4 rounded-xl border-l-4 border-teal-500">
        <div class="flex items-center gap-3">
          <div class="text-3xl">📄</div>
          <div>
            <div class="font-bold text-teal-300">Reads & Synthesizes</div>
            <div class="text-sm text-gray-300">Ingests 100+ page docs, extracts key data</div>
          </div>
        </div>
      </div>
      <div class="glassmorphism p-4 rounded-xl border-l-4 border-blue-500">
        <div class="flex items-center gap-3">
          <div class="text-3xl">📊</div>
          <div>
            <div class="font-bold text-blue-300">Generates 1-Page Memos</div>
            <div class="text-sm text-gray-300">Overview, terms, risks, suitability</div>
          </div>
        </div>
      </div>
      <div class="glassmorphism p-4 rounded-xl border-l-4 border-purple-500">
        <div class="flex items-center gap-3">
          <div class="text-3xl">📈</div>
          <div>
            <div class="font-bold text-purple-300">Tracks Performance</div>
            <div class="text-sm text-gray-300">Ongoing monitoring and integration</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div>
    <div class="glassmorphism p-6 rounded-2xl border-2 border-teal-500/40 h-full">
      <div class="text-xl font-bold text-teal-300 mb-4">AI Deal Memo Example</div>
      <div class="space-y-4">
        <div>
          <div class="text-2xl font-bold text-gray-200 mb-2">Acme Private Credit Fund IV</div>
          <div class="text-sm text-gray-400">Direct Lending Strategy</div>
        </div>
        
        <div class="grid grid-cols-3 gap-3 text-center">
          <div class="bg-black/40 p-3 rounded">
            <div class="text-sm text-gray-400">Target IRR</div>
            <div class="text-xl font-bold text-teal-400">12-14%</div>
          </div>
          <div class="bg-black/40 p-3 rounded">
            <div class="text-sm text-gray-400">Term</div>
            <div class="text-xl font-bold text-teal-400">7 years</div>
          </div>
          <div class="bg-black/40 p-3 rounded">
            <div class="text-sm text-gray-400">Min</div>
            <div class="text-xl font-bold text-teal-400">$250K</div>
          </div>
        </div>
        
        <div class="space-y-2">
          <div class="flex justify-between text-sm">
            <span class="text-gray-400">Credit Risk:</span>
            <span class="text-orange-400">⚠️ Medium</span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-gray-400">Market Risk:</span>
            <span class="text-green-400">✅ Low</span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-gray-400">Liquidity:</span>
            <span class="text-orange-400">⚠️ High</span>
          </div>
        </div>
        
        <div class="bg-green-900/30 border-2 border-green-500/50 rounded-lg p-4 text-center">
          <div class="text-xl font-bold text-green-300">✅ SUITABLE</div>
          <div class="text-sm text-gray-300 mt-2">Fits 15% alternative target allocation</div>
        </div>
        
        <div class="text-xs text-gray-500 italic text-center">
          Generated from 127-page offering memorandum in 5 minutes
        </div>
      </div>
    </div>
  </div>
</div>

<div class="absolute bottom-6 left-0 right-0 text-center">
  <div class="glassmorphism inline-block px-8 py-4 rounded-2xl border-2 border-green-500/50">
    <span class="text-xl font-bold text-green-300">16,000+ funds analyzed</span>
    <span class="text-gray-300 mx-3">•</span>
    <span class="text-xl font-bold text-teal-300">+300-500bps potential alpha</span>
  </div>
</div>

---

# Our "Brain": A Swarm of 20+ Specialized Agents

<div class="text-center text-xl text-gray-300 mb-8">
  The Full Agentic Architecture Powering Your Wealth Management
</div>

<div class="px-8">
  <div class="glassmorphism p-8 rounded-2xl border-2 border-teal-500/40">
    <div class="grid grid-cols-4 gap-6">
      <div class="col-span-1">
        <div class="bg-gradient-to-br from-purple-900/60 to-purple-700/40 rounded-xl p-4 mb-4">
          <div class="text-lg font-bold text-purple-300 mb-2">AI Platform</div>
          <div class="text-xs text-gray-300">LangGraph orchestration</div>
          <div class="text-xs text-gray-300">Multi-LLM ensemble</div>
        </div>
        
        <div class="text-2xl text-teal-400 text-center my-2">↓</div>
        
        <div class="bg-gradient-to-br from-blue-900/60 to-blue-700/40 rounded-xl p-4">
          <div class="text-lg font-bold text-blue-300 mb-2">API Layer</div>
          <div class="text-xs text-gray-300">Broker-agnostic</div>
        </div>
      </div>
      
      <div class="col-span-3 space-y-4">
        <div>
          <div class="text-sm font-semibold text-teal-400 mb-2">Strategist Agents</div>
          <div class="grid grid-cols-3 gap-2">
            <div class="glassmorphism p-3 rounded border border-teal-500/50 text-xs text-center">
              <div class="font-bold text-teal-300">Buffett</div>
            </div>
            <div class="glassmorphism p-3 rounded border border-teal-500/50 text-xs text-center">
              <div class="font-bold text-teal-300">Graham</div>
            </div>
            <div class="glassmorphism p-3 rounded border border-teal-500/50 text-xs text-center">
              <div class="font-bold text-teal-300">Lynch</div>
            </div>
          </div>
        </div>
        
        <div>
          <div class="text-sm font-semibold text-purple-400 mb-2">Analyst Agents</div>
          <div class="grid grid-cols-3 gap-2">
            <div class="glassmorphism p-3 rounded border border-purple-500/50 text-xs text-center">
              <div class="font-bold text-purple-300">News Analysis</div>
            </div>
            <div class="glassmorphism p-3 rounded border border-purple-500/50 text-xs text-center">
              <div class="font-bold text-purple-300">Sentiment</div>
            </div>
            <div class="glassmorphism p-3 rounded border border-purple-500/50 text-xs text-center">
              <div class="font-bold text-purple-300">Technical</div>
            </div>
          </div>
        </div>
        
        <div>
          <div class="text-sm font-semibold text-orange-400 mb-2">Specialized Agents</div>
          <div class="grid grid-cols-3 gap-2">
            <div class="glassmorphism p-3 rounded border border-orange-500/50 text-xs text-center">
              <div class="font-bold text-orange-300">💰 Tax Alpha</div>
            </div>
            <div class="glassmorphism p-3 rounded border border-green-500/50 text-xs text-center">
              <div class="font-bold text-green-300">📄 Alternatives</div>
            </div>
            <div class="glassmorphism p-3 rounded border border-teal-500/50 text-xs text-center">
              <div class="font-bold text-teal-300">🌏 India Gateway</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="mt-6 grid grid-cols-4 gap-4 text-center text-xs">
      <div class="glassmorphism p-3 rounded">
        <div class="font-bold text-blue-400">IB</div>
      </div>
      <div class="glassmorphism p-3 rounded">
        <div class="font-bold text-blue-400">Alpaca</div>
      </div>
      <div class="glassmorphism p-3 rounded">
        <div class="font-bold text-blue-400">TD</div>
      </div>
      <div class="glassmorphism p-3 rounded">
        <div class="font-bold text-blue-400">Schwab</div>
      </div>
    </div>
  </div>
  
  <div class="mt-6 text-center text-sm text-gray-400">
    <strong class="text-teal-400">Tech Stack:</strong> LangGraph orchestration • Multi-LLM (GPT-4, Claude, Gemini) • Real-time consensus building
  </div>
</div>

---
layout: center
class: text-center
background: https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1920
---

<div class="text-8xl font-black mb-8 gradient-text" style="animation: float 3s ease-in-out infinite;">
ACT 4
</div>

<div class="text-4xl font-light text-gray-200 mb-6">
The Proof
</div>

<div class="text-2xl text-gray-400">
Validation & Traction
</div>

---

# This is Not a Concept. Our Core Platform is Live.

<div class="text-2xl text-center text-gray-300 mb-8">
  Proven Technology • Real Portfolio • Production Ready
</div>

<div class="grid grid-cols-2 gap-8 px-8">
  <div class="glassmorphism p-6 rounded-2xl border-2 border-teal-500/40">
    <div class="text-2xl font-bold text-teal-300 mb-4">✅ Live Integration</div>
    <div class="space-y-3 text-gray-300">
      <div>✓ Zerodha Kite API (India's largest broker)</div>
      <div>✓ Real-money test portfolio actively managed</div>
      <div>✓ Holdings: Adani Ports, ONGC, HDFC Index Fund</div>
      <div>✓ Multi-broker architecture validated</div>
    </div>
  </div>
  
  <div class="glassmorphism p-6 rounded-2xl border-2 border-purple-500/40">
    <div class="text-2xl font-bold text-purple-300 mb-4">🛠️ Production Stack</div>
    <div class="grid grid-cols-2 gap-2 text-sm text-gray-300">
      <div>• React 18 + TypeScript</div>
      <div>• Node.js + Express</div>
      <div>• PostgreSQL (dual DBs)</div>
      <div>• FastAPI ML services</div>
      <div>• LangGraph orchestration</div>
      <div>• Multi-LLM ensemble</div>
    </div>
  </div>
</div>

<div class="mt-8 px-8">
  <div class="glassmorphism p-6 rounded-2xl border-2 border-green-500/40">
    <div class="text-2xl font-bold text-green-300 mb-4">🚀 US Market Ready</div>
    <div class="grid grid-cols-3 gap-6 text-gray-300">
      <div>
        <div class="text-teal-400 font-bold mb-1">Q1 2025</div>
        <div class="text-sm">IBKR integration (sandbox testing)</div>
      </div>
      <div>
        <div class="text-teal-400 font-bold mb-1">Q2 2025</div>
        <div class="text-sm">Alpaca launch (commission-free)</div>
      </div>
      <div>
        <div class="text-teal-400 font-bold mb-1">Proven</div>
        <div class="text-sm">Broker-agnostic architecture</div>
      </div>
    </div>
  </div>
</div>

<div class="absolute bottom-6 left-0 right-0 text-center">
  <div class="glassmorphism inline-block px-10 py-5 rounded-2xl border-2 border-teal-500/50">
    <div class="text-3xl font-black gradient-text">
      100% OPERATIONAL TODAY
    </div>
    <div class="text-lg text-gray-300 mt-2">
      Managing real money. Validated with live broker integration.
    </div>
  </div>
</div>

---
layout: center
class: text-center
background: https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1920&q=80
---

<div class="glassmorphism p-16 rounded-3xl border-2 border-teal-500/50 max-w-4xl mx-auto">
  <div class="text-6xl font-black gradient-text mb-8">
    Thank You
  </div>
  
  <div class="text-3xl text-gray-200 mb-8">
    Ready to Transform Wealth Management
  </div>
  
  <div class="text-xl text-gray-300 mb-10">
    AI-Powered • Tax-Optimized • Globally Connected
  </div>
  
  <div class="grid grid-cols-3 gap-6 text-center">
    <div>
      <div class="text-4xl mb-2">💰</div>
      <div class="text-teal-400 font-bold">+1.8%</div>
      <div class="text-sm text-gray-400">Tax Alpha</div>
    </div>
    <div>
      <div class="text-4xl mb-2">📄</div>
      <div class="text-teal-400 font-bold">16,000+</div>
      <div class="text-sm text-gray-400">Alt Funds</div>
    </div>
    <div>
      <div class="text-4xl mb-2">🌏</div>
      <div class="text-teal-400 font-bold">+300bps</div>
      <div class="text-sm text-gray-400">India Alpha</div>
    </div>
  </div>
</div>

<div class="mt-12 text-gray-400 text-lg">
  Questions?
</div>
