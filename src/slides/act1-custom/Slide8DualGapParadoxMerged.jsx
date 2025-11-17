import React, { useState, useEffect } from 'react';
import { Globe, Brain, TrendingUp, Lock, Unlock, ChevronRight, AlertTriangle, DollarSign } from 'lucide-react';

const Slide8DualGapParadoxMerged = () => {
  const [accessGapWidth, setAccessGapWidth] = useState(0);
  const [intelligenceGapWidth, setIntelligenceGapWidth] = useState(0);
  const [animateComparison, setAnimateComparison] = useState(false);

  useEffect(() => {
    // Animate gaps growing
    setTimeout(() => {
      setAccessGapWidth(60);
      setIntelligenceGapWidth(64);
    }, 500);
    
    // Trigger comparison animation
    setTimeout(() => {
      setAnimateComparison(true);
    }, 1000);
  }, []);

  const institutionalAccess = [
    { item: '50 global markets', icon: '📍', highlight: true },
    { item: '10,000+ alternative funds', icon: '💼', highlight: true },
    { item: 'India 8.2% growth via GIFT', icon: '🇮🇳', highlight: true },
    { item: 'AI achieving 600% alpha', icon: '🤖', highlight: true },
    { item: '$30T in alternatives', icon: '💰', highlight: false },
    { item: 'Real-time tax harvesting', icon: '📊', highlight: false },
    { item: '87 market access', icon: '🌍', highlight: false }
  ];

  const yourAccess = [
    { item: '3 markets (US-heavy)', icon: '📍', bad: true },
    { item: '50 mutual funds', icon: '💼', bad: true },
    { item: 'Blocked by 35% tax', icon: '🇮🇳', bad: true },
    { item: 'Zero AI tools', icon: '🤖', bad: true },
    { item: "Can't access any", icon: '💰', bad: true },
    { item: 'Quarterly PDFs', icon: '📊', bad: true },
    { item: 'Your 3 markets', icon: '🌍', bad: true }
  ];

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 flex items-center justify-center overflow-hidden">
      {/* Animated Background - Growing Gap Visualization */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="gap-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gap-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Access Gap Visual */}
          <rect x="0" y="20%" width={`${accessGapWidth}%`} height="20%" fill="url(#gap-gradient-1)" 
                style={{ transition: 'width 2s ease-out' }} />
          
          {/* Intelligence Gap Visual */}
          <rect x="0" y="60%" width={`${intelligenceGapWidth}%`} height="20%" fill="url(#gap-gradient-2)" 
                style={{ transition: 'width 2s ease-out' }} />
        </svg>

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-10"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${20 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold mb-3">
            <span className="text-white">THE </span>
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">$124T</span>
            <span className="text-white"> DUAL GAP PARADOX</span>
          </h1>
          <p className="text-2xl text-gray-300">Opportunities Exploding While Your Access Shrinks</p>
        </div>

        {/* Split Screen Comparison */}
        <div className="grid grid-cols-2 gap-8 mb-10">
          {/* Left: What's Available */}
          <div className={`bg-gradient-to-b from-emerald-900/20 to-emerald-950/30 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/30 transform transition-all duration-1000 ${animateComparison ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="flex items-center mb-6">
              <Unlock className="w-10 h-10 text-emerald-400 mr-4" />
              <div>
                <h2 className="text-3xl font-bold text-emerald-400">WHAT'S AVAILABLE</h2>
                <p className="text-emerald-300">To Institutions</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {institutionalAccess.map((item, idx) => (
                <div key={idx} 
                     className={`flex items-center justify-between p-3 rounded-lg transition-all duration-500 ${item.highlight ? 'bg-emerald-900/30 border border-emerald-500/20' : 'bg-slate-800/30'}`}
                     style={{ animationDelay: `${idx * 100 + 1200}ms` }}>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{item.icon}</span>
                    <span className="text-white font-medium">{item.item}</span>
                  </div>
                  {item.highlight && (
                    <ChevronRight className="w-5 h-5 text-emerald-400 animate-pulse" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: What You Access */}
          <div className={`bg-gradient-to-b from-red-900/20 to-red-950/30 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30 transform transition-all duration-1000 ${animateComparison ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="flex items-center mb-6">
              <Lock className="w-10 h-10 text-red-400 mr-4" />
              <div>
                <h2 className="text-3xl font-bold text-red-400">WHAT YOU ACCESS</h2>
                <p className="text-red-300">Your Reality</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {yourAccess.map((item, idx) => (
                <div key={idx} 
                     className={`flex items-center justify-between p-3 rounded-lg ${item.bad ? 'bg-red-900/30 border border-red-500/20' : 'bg-slate-800/30'} transition-all duration-500`}
                     style={{ animationDelay: `${idx * 100 + 1200}ms` }}>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3 opacity-50">{item.icon}</span>
                    <span className="text-gray-300 line-through opacity-75">{item.item}</span>
                  </div>
                  {item.bad && (
                    <AlertTriangle className="w-5 h-5 text-red-400" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gap Visualization */}
        <div className="bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-orange-900/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <div className="grid grid-cols-2 gap-8">
            {/* Access Gap */}
            <div className="text-center">
              <div className="mb-4">
                <Globe className="w-12 h-12 text-emerald-400 mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-white">ACCESS GAP</h3>
              </div>
              <div className="relative h-4 bg-slate-800 rounded-full overflow-hidden mb-3">
                <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-2000 ease-out"
                     style={{ width: `${accessGapWidth}%` }} />
              </div>
              <div className="text-5xl font-bold text-emerald-400 mb-2">$60T</div>
              <p className="text-gray-300">unreachable and growing</p>
              <div className="mt-4 space-y-1 text-sm text-gray-400">
                <p>• India/GIFT locked</p>
                <p>• Alternatives blocked</p>
                <p>• Global markets closed</p>
              </div>
            </div>

            {/* Intelligence Gap */}
            <div className="text-center">
              <div className="mb-4">
                <Brain className="w-12 h-12 text-purple-400 mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-white">INTELLIGENCE GAP</h3>
              </div>
              <div className="relative h-4 bg-slate-800 rounded-full overflow-hidden mb-3">
                <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full transition-all duration-2000 ease-out"
                     style={{ width: `${intelligenceGapWidth}%` }} />
              </div>
              <div className="text-5xl font-bold text-purple-400 mb-2">$64T</div>
              <p className="text-gray-300">unoptimized and accelerating</p>
              <div className="mt-4 space-y-1 text-sm text-gray-400">
                <p>• No AI optimization</p>
                <p>• Manual processes</p>
                <p>• Quarterly reviews only</p>
              </div>
            </div>
          </div>

          {/* Total Impact */}
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <div className="flex items-center justify-center gap-4 mb-3">
              <DollarSign className="w-8 h-8 text-yellow-400" />
              <span className="text-6xl font-bold text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text">
                $124 TRILLION
              </span>
              <DollarSign className="w-8 h-8 text-yellow-400" />
            </div>
            <p className="text-xl text-white font-medium">
              "The rich get tools that make them richer. <span className="text-red-400 font-bold">You get left behind.</span>"
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(10px) translateX(-10px); }
        }
      `}</style>
    </div>
  );
};

export default Slide8DualGapParadoxMerged;
