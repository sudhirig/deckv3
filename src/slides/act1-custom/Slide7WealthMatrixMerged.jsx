import React, { useState } from 'react';
import { Brain, Globe, Users, Building2, Lock, Unlock, Sparkles } from 'lucide-react';

const Slide7WealthMatrixMerged = () => {
  const [hoveredQuadrant, setHoveredQuadrant] = useState(null);
  const [showARIA, setShowARIA] = useState(false);

  React.useEffect(() => {
    setTimeout(() => setShowARIA(true), 1500);
  }, []);

  const quadrants = [
    {
      id: 'robo',
      position: 'top-left',
      title: 'ROBO-ADVISORS',
      intelligence: 'HIGH',
      access: 'LOW',
      color: 'blue',
      features: ['✓ AI Tools', '✓ Automation', '✗ No Global Access', '✗ No Alternatives'],
      description: 'Smart but limited',
      icon: Brain,
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      id: 'goldman',
      position: 'top-right',
      title: 'GOLDMAN SACHS',
      intelligence: 'HIGH',
      access: 'HIGH',
      color: 'gold',
      features: ['✓ Everything', '✓ All Markets', '✗ Won\'t serve you', '✗ $10M+ only'],
      description: 'Has it all, but not for you',
      icon: Building2,
      gradient: 'from-yellow-500 to-yellow-600'
    },
    {
      id: 'cpa',
      position: 'bottom-left',
      title: 'YOUR CPA',
      intelligence: 'LOW',
      access: 'LOW',
      color: 'gray',
      features: ['✗ Drowning', '✗ No tools', '✗ No time', '✗ No access'],
      description: 'Overwhelmed',
      icon: Users,
      gradient: 'from-gray-500 to-gray-600'
    },
    {
      id: 'banks',
      position: 'bottom-right',
      title: 'PRIVATE BANKS',
      intelligence: 'LOW',
      access: 'HIGH',
      color: 'purple',
      features: ['✓ Product Access', '✓ Global Reach', '✗ No AI', '✗ Stuck in 1990s'],
      description: 'Access without intelligence',
      icon: Building2,
      gradient: 'from-purple-500 to-purple-600'
    }
  ];

  const getQuadrantStyle = (position) => {
    switch(position) {
      case 'top-left': return 'top-0 left-0';
      case 'top-right': return 'top-0 right-0';
      case 'bottom-left': return 'bottom-0 left-0';
      case 'bottom-right': return 'bottom-0 right-0';
      default: return '';
    }
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 flex items-center justify-center overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-10 blur-3xl"
            style={{
              width: `${Math.random() * 400 + 200}px`,
              height: `${Math.random() * 400 + 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `pulse ${10 + Math.random() * 10}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Title Section */}
        <div className="text-center mb-10">
          <div className="mb-4">
            <h1 className="text-6xl font-bold mb-2">
              <span className="text-cyan-400">ARIA</span>
              <span className="text-white"> - WHERE </span>
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">ACCESS</span>
              <span className="text-white"> MEETS </span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">INTELLIGENCE</span>
            </h1>
            <p className="text-2xl text-gray-300">The New Reality of Wealth Management</p>
          </div>
        </div>

        {/* 2x2 Matrix */}
        <div className="relative w-full max-w-4xl mx-auto">
          {/* Matrix Container */}
          <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            {/* Axis Labels */}
            <div className="absolute -left-16 top-1/2 -translate-y-1/2 -rotate-90">
              <div className="flex items-center gap-4">
                <span className="text-gray-500">LOW</span>
                <Brain className="w-6 h-6 text-purple-400" />
                <span className="text-2xl font-bold text-purple-400">INTELLIGENCE</span>
                <Brain className="w-6 h-6 text-purple-400" />
                <span className="text-gray-500">HIGH</span>
              </div>
            </div>
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-4">
                <span className="text-gray-500">LOW</span>
                <Globe className="w-6 h-6 text-green-400" />
                <span className="text-2xl font-bold text-green-400">ACCESS</span>
                <Globe className="w-6 h-6 text-green-400" />
                <span className="text-gray-500">HIGH</span>
              </div>
            </div>

            {/* Matrix Grid */}
            <div className="grid grid-cols-2 gap-4 relative" style={{ height: '400px' }}>
              {quadrants.map((quadrant) => (
                <div
                  key={quadrant.id}
                  className={`relative bg-gradient-to-br ${quadrant.gradient} p-[1px] rounded-xl cursor-pointer transform transition-all duration-300 hover:scale-105`}
                  onMouseEnter={() => setHoveredQuadrant(quadrant.id)}
                  onMouseLeave={() => setHoveredQuadrant(null)}
                >
                  <div className="bg-slate-900/90 backdrop-blur-sm rounded-xl p-6 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-white">{quadrant.title}</h3>
                      <quadrant.icon className={`w-8 h-8 text-${quadrant.color}-400`} />
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      {quadrant.features.map((feature, idx) => (
                        <div key={idx} className="text-sm">
                          <span className={feature.startsWith('✓') ? 'text-green-400' : 'text-red-400'}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-slate-700">
                      <p className="text-gray-400 italic">"{quadrant.description}"</p>
                    </div>

                    {hoveredQuadrant === quadrant.id && (
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-xl pointer-events-none" />
                    )}
                  </div>
                </div>
              ))}

              {/* Center Lines */}
              <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
            </div>

            {/* ARIA Positioning - Animated Entry */}
            {showARIA && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 p-[2px] rounded-2xl animate-pulse-glow">
                  <div className="bg-slate-900 rounded-2xl px-8 py-6 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Sparkles className="w-8 h-8 text-cyan-400 animate-pulse" />
                      <h3 className="text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
                        ARIA
                      </h3>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Unlock className="w-5 h-5 text-green-400" />
                        <span className="text-green-400 font-semibold">HIGH ACCESS</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Brain className="w-5 h-5 text-purple-400" />
                        <span className="text-purple-400 font-semibold">HIGH INTELLIGENCE</span>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-700">
                      <p className="text-white text-sm font-medium">
                        Institutional access + AI brain
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-10 text-center">
          <div className="inline-block bg-gradient-to-r from-red-900/30 via-orange-900/30 to-yellow-900/30 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-2">THE PROBLEM:</h3>
            <div className="grid grid-cols-4 gap-4 text-left mb-4">
              <div className="text-gray-300">
                <span className="text-blue-400 font-bold">Robo</span> = Brain without reach
              </div>
              <div className="text-gray-300">
                <span className="text-purple-400 font-bold">Banks</span> = Reach without brain
              </div>
              <div className="text-gray-300">
                <span className="text-gray-400 font-bold">CPA</span> = Neither
              </div>
              <div className="text-gray-300">
                <span className="text-yellow-400 font-bold">Goldman</span> = Both, but exclusive
              </div>
            </div>
            <p className="text-xl text-white">
              <span className="font-bold text-cyan-400">YOU NEED:</span> Institutional access + AI intelligence at your level
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.1); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(6, 182, 212, 0.5); }
          50% { box-shadow: 0 0 40px rgba(6, 182, 212, 0.8); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
};

export default Slide7WealthMatrixMerged;
