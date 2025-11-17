import React, { useState, useEffect } from 'react';
import { Clock, Users, Globe, Brain, TrendingUp, ArrowRight, AlertCircle } from 'lucide-react';

const Slide4ConvergenceWindowMerged = () => {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [hoveredForce, setHoveredForce] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed((prev) => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const forces = [
    {
      id: 1,
      icon: Users,
      color: '#3b82f6',
      bgColor: 'rgba(59, 130, 246, 0.1)',
      title: 'The Great Advisor Exodus',
      percentage: '46%',
      mainText: 'of HNWs actively switching NOW',
      details: [
        '40% of advisors retiring',
        '0.2% new advisors entering',
        'Supply completely collapsing'
      ],
      window: 'Before supply vanishes',
      gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)'
    },
    {
      id: 2,
      icon: Globe,
      color: '#10b981',
      bgColor: 'rgba(16, 185, 129, 0.1)',
      title: 'The India Gateway Opens',
      percentage: '$5T',
      mainText: 'market now accessible via GIFT',
      details: [
        '0% tax advantage for early movers',
        'Regulations evolving favorably',
        'First-mover advantage critical'
      ],
      window: 'Before competition floods in',
      gradient: 'linear-gradient(135deg, #10b981, #059669)'
    },
    {
      id: 3,
      icon: Brain,
      color: '#a855f7',
      bgColor: 'rgba(168, 85, 247, 0.1)',
      title: 'The AI Arms Race',
      percentage: '600%',
      mainText: 'outperformance already proven',
      details: [
        'First-movers capturing alpha',
        'Network effects accelerating',
        'Gap widening daily'
      ],
      window: 'Before AI becomes table stakes',
      gradient: 'linear-gradient(135deg, #a855f7, #ec4899)'
    }
  ];

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      fontFamily: 'Inter, -apple-system, sans-serif'
    }}>
      {/* Animated Timeline Background */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <defs>
            <linearGradient id="timeline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#10b981" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <rect
            x="10%"
            y="48%"
            width="80%"
            height="4%"
            fill="url(#timeline-gradient)"
            rx="20"
          />
          <rect
            x="10%"
            y="48%"
            width={`${timeElapsed * 0.8}%`}
            height="4%"
            fill="url(#timeline-gradient)"
            opacity="0.8"
            rx="20"
          />
        </svg>
        
        {/* Timeline Labels */}
        <div style={{ position: 'absolute', top: '50%', left: '10%', transform: 'translateY(-50%)' }}>
          <div style={{ color: 'white', fontWeight: 'bold', fontSize: '20px' }}>NOW</div>
        </div>
        <div style={{ position: 'absolute', top: '50%', right: '10%', transform: 'translateY(-50%)' }}>
          <div style={{ color: '#fbbf24', fontWeight: 'bold', fontSize: '20px' }}>18 MONTHS</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Title Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Clock className="w-12 h-12 text-yellow-400 mr-4 animate-pulse" />
            <h1 className="text-6xl font-bold">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                THE 18-MONTH
              </span>
              <span className="text-white"> CONVERGENCE WINDOW</span>
            </h1>
          </div>
          <p className="text-2xl text-gray-300">Three Forces Creating Unprecedented Urgency</p>
        </div>

        {/* Three Forces Grid */}
        <div className="grid grid-cols-3 gap-6 mb-10">
          {forces.map((force) => (
            <div
              key={force.id}
              className={`relative bg-gradient-to-b ${force.gradient} p-[1px] rounded-2xl transform transition-all duration-500 hover:scale-105`}
              onMouseEnter={() => setHoveredForce(force.id)}
              onMouseLeave={() => setHoveredForce(null)}
            >
              <div className="bg-slate-900/95 backdrop-blur-sm rounded-2xl p-6 h-full">
                <div className="flex items-center mb-4">
                  <force.icon className={`w-10 h-10 text-${force.color}-400 mr-3`} />
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Force {force.id}</p>
                    <h3 className="text-xl font-bold text-white">{force.title}</h3>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className={`text-5xl font-bold bg-gradient-to-r ${force.gradient} bg-clip-text text-transparent mb-2`}>
                    {force.percentage}
                  </div>
                  <p className="text-gray-300">{force.mainText}</p>
                </div>

                {hoveredForce === force.id && (
                  <div className="space-y-2 mb-4 animate-fadeIn">
                    {force.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start">
                        <span className={`text-${force.color}-400 mr-2`}>•</span>
                        <span className="text-sm text-gray-300">{detail}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className={`border-t border-${force.color}-800 pt-3`}>
                  <div className="flex items-center">
                    <AlertCircle className={`w-4 h-4 text-${force.color}-400 mr-2`} />
                    <p className="text-sm text-yellow-300 font-semibold">
                      Window: {force.window}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CPA Distribution Math Section */}
        <div className="bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-pink-900/30 backdrop-blur-md rounded-2xl p-8 border border-white/10">
          <div className="grid grid-cols-2 gap-8">
            {/* Left: The Math */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">THE CPA DISTRIBUTION MATH</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-slate-800/50 rounded-lg p-3">
                  <span className="text-gray-300">CPAs in Network</span>
                  <span className="text-2xl font-bold text-blue-400">1,000</span>
                </div>
                <div className="flex items-center justify-center text-gray-400 text-2xl">×</div>
                <div className="flex items-center justify-between bg-slate-800/50 rounded-lg p-3">
                  <span className="text-gray-300">Clients per CPA</span>
                  <span className="text-2xl font-bold text-green-400">100</span>
                </div>
                <div className="flex items-center justify-center text-gray-400 text-2xl">=</div>
                <div className="flex items-center justify-between bg-gradient-to-r from-yellow-900/50 to-orange-900/50 rounded-lg p-3 border border-yellow-500/30">
                  <span className="text-white font-semibold">Total Families</span>
                  <span className="text-3xl font-bold text-yellow-400">100,000</span>
                </div>
              </div>
            </div>

            {/* Right: The Opportunity */}
            <div className="flex flex-col justify-center">
              <div className="bg-slate-800/50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-3">Why CPAs Are Our Superpower:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-green-400 mr-2 mt-0.5" />
                    <span className="text-gray-300">They already have the trust</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-green-400 mr-2 mt-0.5" />
                    <span className="text-gray-300">They're drowning and need our help</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-green-400 mr-2 mt-0.5" />
                    <span className="text-gray-300">They become distribution at zero CAC</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-slate-700">
                  <p className="text-2xl font-bold text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">
                    = $100B AUM in 18 months
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Urgency Banner */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center bg-red-900/30 backdrop-blur-sm rounded-full px-8 py-4 border border-red-500/30">
            <AlertCircle className="w-6 h-6 text-red-400 mr-3 animate-pulse" />
            <p className="text-xl text-white">
              This window <span className="font-bold text-red-400">won't reopen</span>. 
              The convergence is <span className="font-bold text-yellow-400">once in a generation</span>.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Slide4ConvergenceWindowMerged;
