# ARIA Website - Detailed Section Implementation

## 🎯 Section-by-Section Implementation Guide

---

## 1. NAVIGATION & HEADER

### Desktop Navigation
```jsx
// components/Navigation.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      label: 'Solutions',
      dropdown: [
        { label: 'ARIA AI - Investment Intelligence', href: '/ai-advisor' },
        { label: 'ARIA Wealth - Global Optimization', href: '/wealth-management' },
        { label: 'ARIA Trade - Seamless Execution', href: '/trade' }
      ]
    },
    {
      label: 'For You',
      dropdown: [
        { label: 'High Net Worth Individuals', href: '/for-you/hni' },
        { label: 'NRIs & Global Indians', href: '/for-you/nri' },
        { label: 'Founders & Entrepreneurs', href: '/for-you/founders' },
        { label: 'CPAs & Financial Advisors', href: '/for-you/advisors' }
      ]
    },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Resources', href: '/resources' },
    { label: 'Company', href: '/company' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-emerald-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-white font-bold text-xl">ARIA</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.dropdown ? (
                  <button
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors py-2"
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.label && (
                  <div
                    className="absolute top-full left-0 w-72 bg-slate-800 rounded-lg shadow-2xl py-4 mt-2"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.href}
                        className="block px-6 py-3 text-gray-300 hover:text-white hover:bg-slate-700/50 transition-all"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/login"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/demo"
              className="px-6 py-2.5 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-teal-500/30 transition-all"
            >
              Book Demo
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Add mobile menu implementation here */}
    </nav>
  );
};
```

---

## 2. HERO SECTION WITH VIDEO BACKGROUND

```jsx
// sections/HeroWithVideo.jsx
import { useState } from 'react';
import { Play, Volume2, VolumeX } from 'lucide-react';

const HeroWithVideo = () => {
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted={muted}
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/aria-hero-video.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 backdrop-blur-sm border border-teal-500/30 rounded-full mb-8">
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
            <span className="text-teal-400 text-sm font-medium">
              Platform Live • $25M+ AUM
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="text-white">Wealth Management</span>
            <br />
            <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Reimagined with AI
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            68+ AI agents working as your personal family office. 
            From portfolio construction to tax optimization.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="group px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-teal-500/30 transform hover:scale-105 transition-all">
              <span>Start Your Journey</span>
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
            
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all">
              <Play className="inline w-5 h-5 mr-2" />
              Watch 2-min Demo
            </button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '68+', label: 'AI Agents' },
              { value: '73%', label: 'Accuracy Rate' },
              { value: '11ms', label: 'Trade Execution' },
              { value: '0%', label: 'LTCG Tax' }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-teal-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Controls */}
      <div className="absolute bottom-8 right-8 flex gap-2">
        <button
          onClick={() => setMuted(!muted)}
          className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all"
        >
          {muted ? <VolumeX className="w-5 h-5 text-white" /> : <Volume2 className="w-5 h-5 text-white" />}
        </button>
      </div>
    </section>
  );
};
```

---

## 3. AI INVESTMENT COMMITTEE SHOWCASE

```jsx
// sections/AICommitteeShowcase.jsx
import { useState } from 'react';
import { Brain, TrendingUp, BarChart3, Globe2 } from 'lucide-react';

const AICommitteeShowcase = () => {
  const [selectedInvestor, setSelectedInvestor] = useState('buffett');

  const investors = {
    value: [
      { id: 'buffett', name: 'Warren Buffett', style: 'Value Investing', accuracy: '76%' },
      { id: 'munger', name: 'Charlie Munger', style: 'Quality Focus', accuracy: '74%' },
      { id: 'graham', name: 'Benjamin Graham', style: 'Deep Value', accuracy: '72%' },
      { id: 'lynch', name: 'Peter Lynch', style: 'GARP', accuracy: '75%' },
      { id: 'klarman', name: 'Seth Klarman', style: 'Margin of Safety', accuracy: '73%' },
      { id: 'marks', name: 'Howard Marks', style: 'Distressed', accuracy: '71%' }
    ],
    growth: [
      { id: 'fisher', name: 'Philip Fisher', style: 'Growth Quality', accuracy: '74%' },
      { id: 'druckenmiller', name: 'Stan Druckenmiller', style: 'Macro Growth', accuracy: '77%' },
      { id: 'wood', name: 'Cathie Wood', style: 'Disruptive Innovation', accuracy: '69%' },
      { id: 'thiel', name: 'Peter Thiel', style: 'Contrarian Growth', accuracy: '71%' }
    ],
    quant: [
      { id: 'simons', name: 'Jim Simons', style: 'Quantitative', accuracy: '82%' },
      { id: 'dalio', name: 'Ray Dalio', style: 'Risk Parity', accuracy: '75%' },
      { id: 'soros', name: 'George Soros', style: 'Reflexivity', accuracy: '73%' },
      { id: 'jones', name: 'Paul Tudor Jones', style: 'Macro Trading', accuracy: '74%' }
    ]
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-4">
            <Brain className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 font-medium">ARIA AI</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            18 Legendary Investors, One Platform
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Each AI agent is trained on decades of investment philosophy, 
            working together to optimize your portfolio
          </p>
        </div>

        {/* Investor Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Value Investors */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Value Investors</h3>
            </div>
            <div className="space-y-3">
              {investors.value.map((investor) => (
                <button
                  key={investor.id}
                  onClick={() => setSelectedInvestor(investor.id)}
                  className={`w-full p-3 rounded-lg text-left transition-all ${
                    selectedInvestor === investor.id
                      ? 'bg-teal-500/20 border border-teal-500/50'
                      : 'bg-slate-700/30 border border-slate-600/30 hover:bg-slate-700/50'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-white font-medium">{investor.name}</div>
                      <div className="text-sm text-gray-400">{investor.style}</div>
                    </div>
                    <div className="text-teal-400 font-semibold">{investor.accuracy}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Growth Investors */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Growth Investors</h3>
            </div>
            <div className="space-y-3">
              {investors.growth.map((investor) => (
                <button
                  key={investor.id}
                  onClick={() => setSelectedInvestor(investor.id)}
                  className={`w-full p-3 rounded-lg text-left transition-all ${
                    selectedInvestor === investor.id
                      ? 'bg-teal-500/20 border border-teal-500/50'
                      : 'bg-slate-700/30 border border-slate-600/30 hover:bg-slate-700/50'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-white font-medium">{investor.name}</div>
                      <div className="text-sm text-gray-400">{investor.style}</div>
                    </div>
                    <div className="text-teal-400 font-semibold">{investor.accuracy}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Quant/Macro */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <Globe2 className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Quant & Macro</h3>
            </div>
            <div className="space-y-3">
              {investors.quant.map((investor) => (
                <button
                  key={investor.id}
                  onClick={() => setSelectedInvestor(investor.id)}
                  className={`w-full p-3 rounded-lg text-left transition-all ${
                    selectedInvestor === investor.id
                      ? 'bg-teal-500/20 border border-teal-500/50'
                      : 'bg-slate-700/30 border border-slate-600/30 hover:bg-slate-700/50'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-white font-medium">{investor.name}</div>
                      <div className="text-sm text-gray-400">{investor.style}</div>
                    </div>
                    <div className="text-teal-400 font-semibold">{investor.accuracy}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-gray-400 mb-6">
            See how our AI committee analyzes your portfolio in real-time
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all">
            Experience AI Analysis
          </button>
        </div>
      </div>
    </section>
  );
};
```

---

## 4. GIFT CITY ADVANTAGE SECTION

```jsx
// sections/GIFTCityAdvantage.jsx
import { Shield, Globe, TrendingUp, DollarSign } from 'lucide-react';

const GIFTCityAdvantage = () => {
  const advantages = [
    {
      icon: Shield,
      title: '0% Capital Gains Tax',
      description: 'No LTCG or STCG on investments held through GIFT City',
      savings: 'Save ₹20L+ annually'
    },
    {
      icon: Globe,
      title: 'Global Market Access',
      description: 'Invest in 150+ global markets from a single account',
      savings: 'Access to $110T markets'
    },
    {
      icon: TrendingUp,
      title: 'Dollar Denomination',
      description: 'Hold assets in USD, hedge against rupee depreciation',
      savings: '8-12% currency hedge'
    },
    {
      icon: DollarSign,
      title: 'No LRS Limits',
      description: 'Invest beyond the $250K LRS limit through compliant structures',
      savings: 'Unlimited global investing'
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-4">
            <Globe className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 font-medium">ARIA WEALTH</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The GIFT City Advantage
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            India's first AI wealth manager regulated in GIFT City IFSC
          </p>
        </div>

        {/* Visual Comparison */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Traditional Route */}
          <div className="bg-red-900/10 border border-red-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Traditional Route ❌
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-red-400 text-xs">×</span>
                </div>
                <div>
                  <div className="text-white font-medium">20% LTCG Tax</div>
                  <div className="text-gray-400 text-sm">Pay ₹20L on ₹1Cr gains</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-red-400 text-xs">×</span>
                </div>
                <div>
                  <div className="text-white font-medium">$250K LRS Limit</div>
                  <div className="text-gray-400 text-sm">Restricted global investing</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-red-400 text-xs">×</span>
                </div>
                <div>
                  <div className="text-white font-medium">TCS on Remittance</div>
                  <div className="text-gray-400 text-sm">20% tax collected at source</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-red-400 text-xs">×</span>
                </div>
                <div>
                  <div className="text-white font-medium">Complex Compliance</div>
                  <div className="text-gray-400 text-sm">Multiple forms and reporting</div>
                </div>
              </li>
            </ul>
          </div>

          {/* GIFT City Route */}
          <div className="bg-emerald-900/10 border border-emerald-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              GIFT City Route ✓
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-emerald-400 text-xs">✓</span>
                </div>
                <div>
                  <div className="text-white font-medium">0% Capital Gains</div>
                  <div className="text-gray-400 text-sm">Keep 100% of your profits</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-emerald-400 text-xs">✓</span>
                </div>
                <div>
                  <div className="text-white font-medium">No LRS Restrictions</div>
                  <div className="text-gray-400 text-sm">Unlimited global access</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-emerald-400 text-xs">✓</span>
                </div>
                <div>
                  <div className="text-white font-medium">No TCS</div>
                  <div className="text-gray-400 text-sm">Direct investment routing</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-emerald-400 text-xs">✓</span>
                </div>
                <div>
                  <div className="text-white font-medium">Single Window</div>
                  <div className="text-gray-400 text-sm">Simplified compliance</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {advantages.map((advantage) => (
            <div key={advantage.title} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-emerald-500/50 transition-all">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                <advantage.icon className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {advantage.title}
              </h3>
              <p className="text-gray-400 text-sm mb-3">
                {advantage.description}
              </p>
              <div className="text-emerald-400 font-semibold">
                {advantage.savings}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-emerald-500/30 transition-all">
            Calculate Your Tax Savings
          </button>
        </div>
      </div>
    </section>
  );
};
```

---

## 5. SOCIAL PROOF & TESTIMONIALS

```jsx
// sections/SocialProof.jsx
import { Star, Quote } from 'lucide-react';

const SocialProof = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Tech Founder, Bangalore',
      avatar: '/avatars/rajesh.jpg',
      content: 'ARIA helped me save ₹45L in taxes during my startup exit. The GIFT City structure was a game-changer.',
      rating: 5,
      highlight: 'Saved ₹45L in taxes'
    },
    {
      name: 'Priya Sharma',
      role: 'NRI, Silicon Valley',
      avatar: '/avatars/priya.jpg',
      content: 'Finally, a platform that understands cross-border complexity. The AI recommendations are incredibly sophisticated.',
      rating: 5,
      highlight: '32% portfolio growth'
    },
    {
      name: 'Amit Patel',
      role: 'Family Business, Mumbai',
      avatar: '/avatars/amit.jpg',
      content: 'The 18 AI advisors give me insights I never had access to before. It\'s like having a Goldman Sachs team.',
      rating: 5,
      highlight: '₹25M AUM managed'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by India's Wealthy
          </h2>
          <p className="text-xl text-gray-400">
            Join 500+ HNIs who've transformed their wealth management
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-teal-500/30 transition-all">
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-teal-400/30 mb-4" />
              
              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              {/* Highlight */}
              <div className="px-4 py-2 bg-teal-500/10 border border-teal-500/30 rounded-lg inline-block mb-6">
                <span className="text-teal-400 font-semibold">
                  {testimonial.highlight}
                </span>
              </div>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-emerald-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
              
              {/* Rating */}
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-teal-500/10 to-emerald-500/10 border border-teal-500/30 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Active Clients' },
              { value: '₹250Cr+', label: 'Assets Managed' },
              { value: '4.9/5', label: 'Client Rating' },
              { value: '₹180Cr+', label: 'Taxes Saved' }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-teal-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
```

---

## 6. FOOTER WITH SITEMAP

```jsx
// components/Footer.jsx
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    solutions: [
      { label: 'ARIA AI', href: '/ai-advisor' },
      { label: 'ARIA Wealth', href: '/wealth-management' },
      { label: 'ARIA Trade', href: '/trade' },
      { label: 'Pricing', href: '/pricing' }
    ],
    forYou: [
      { label: 'High Net Worth', href: '/for-you/hni' },
      { label: 'NRIs', href: '/for-you/nri' },
      { label: 'Founders', href: '/for-you/founders' },
      { label: 'Financial Advisors', href: '/for-you/advisors' }
    ],
    company: [
      { label: 'About Us', href: '/company/about' },
      { label: 'Team', href: '/company/team' },
      { label: 'Careers', href: '/company/careers', badge: 'Hiring' },
      { label: 'Press', href: '/company/press' }
    ],
    resources: [
      { label: 'Blog', href: '/resources/blog' },
      { label: 'Case Studies', href: '/resources/case-studies' },
      { label: 'Help Center', href: '/resources/help' },
      { label: 'API Docs', href: '/resources/api' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '/legal/privacy' },
      { label: 'Terms of Service', href: '/legal/terms' },
      { label: 'SEBI Compliance', href: '/legal/compliance' },
      { label: 'Risk Disclosure', href: '/legal/risk' }
    ]
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-emerald-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-white font-bold text-xl">ARIA</span>
            </Link>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your AI-powered family office, managing wealth with the intelligence 
              of 68+ specialized agents.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                <Linkedin className="w-5 h-5 text-gray-400" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                <Twitter className="w-5 h-5 text-gray-400" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                <Youtube className="w-5 h-5 text-gray-400" />
              </a>
            </div>
          </div>
          
          {/* Links Columns */}
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">For You</h3>
            <ul className="space-y-3">
              {footerLinks.forYou.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                    {link.label}
                    {link.badge && (
                      <span className="px-2 py-0.5 bg-teal-500/20 text-teal-400 text-xs rounded-full">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-teal-400" />
              <a href="mailto:hello@ariawealth.ai" className="text-gray-400 hover:text-white transition-colors">
                hello@ariawealth.ai
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-teal-400" />
              <a href="tel:+918045687210" className="text-gray-400 hover:text-white transition-colors">
                +91 80 4568 7210
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-teal-400" />
              <span className="text-gray-400">
                GIFT City, Gujarat, India
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="bg-slate-800/50 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 ARIA Wealth Management. All rights reserved.
            </p>
            
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Regulatory Disclaimer */}
          <div className="mt-6 p-4 bg-slate-900/50 rounded-lg">
            <p className="text-xs text-gray-500 leading-relaxed">
              ARIA Wealth Management is regulated by IFSCA in GIFT City. Investment in securities market are subject to market risks. 
              Read all the related documents carefully before investing. Past performance is not indicative of future returns. 
              Please consider your specific investment requirements before choosing a service.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
```

---

## Next Steps

1. **Implement Progressive Disclosure**: Start with simple value prop, reveal complexity gradually
2. **Add Interactive Elements**: Calculators, demos, simulators for engagement
3. **Create Persona Pages**: Dedicated landing pages for each customer segment
4. **Build Trust Signals**: Security badges, compliance info, testimonials
5. **Optimize for Conversion**: A/B test CTAs, forms, and user flows

This implementation guide provides the foundation for building a world-class fintech website that aligns with your deck's narrative and Arta's successful model.