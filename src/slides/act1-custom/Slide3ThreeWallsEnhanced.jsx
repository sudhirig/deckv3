import React from 'react';
import { TrendingUp, Lock, Brain, AlertTriangle, Globe, FileText, Clock } from 'lucide-react';

const Slide3ThreeWallsEnhanced = () => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-gray-900 via-red-950 to-gray-900 flex items-center justify-center overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-red-500 opacity-5"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
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
        <div className="text-center mb-12">
          <h1 className="text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              THREE WALLS
            </span>
            <span className="text-white"> BETWEEN YOU AND </span>
            <span className="text-green-400">ALPHA</span>
          </h1>
          <p className="text-2xl text-gray-300">Each wall costs you real money. Every single year.</p>
        </div>

        {/* Three Walls Grid */}
        <div className="grid grid-cols-3 gap-8 mb-12">
          {/* Access Wall */}
          <div className="bg-gradient-to-b from-red-900/30 to-red-950/50 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-6">
              <Lock className="w-12 h-12 text-red-400 mr-4" />
              <div>
                <h2 className="text-3xl font-bold text-red-400">ACCESS WALL</h2>
                <p className="text-red-300">$60K Annual Loss</p>
              </div>
            </div>
            
            <div className="space-y-4 text-gray-200">
              <div className="border-l-4 border-red-400 pl-4">
                <p className="font-semibold text-white mb-2">🇮🇳 India's $5T opportunity blocked by:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span><strong>35% FPI tax</strong> (vs 0% in GIFT)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span><strong>47 regulatory documents</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span><strong>6-month setup process</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span><strong>$5M minimum tickets</strong></span>
                  </li>
                </ul>
              </div>
              
              <div className="pt-4 border-t border-red-800">
                <p className="mb-2">• Private Equity needs <span className="text-red-300 font-bold">$5-10M minimums</span></p>
                <p className="mb-2">• Alternative investments require <span className="text-red-300 font-bold">QIB status</span></p>
              </div>
              
              <div className="bg-red-950/50 rounded-lg p-3 mt-4">
                <p className="text-red-300 font-semibold">
                  → Missing 300-500 bps annually
                </p>
              </div>
            </div>
          </div>

          {/* Complexity Wall */}
          <div className="bg-gradient-to-b from-orange-900/30 to-orange-950/50 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/30 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-6">
              <Brain className="w-12 h-12 text-orange-400 mr-4" />
              <div>
                <h2 className="text-3xl font-bold text-orange-400">COMPLEXITY WALL</h2>
                <p className="text-orange-300">$70K Annual Loss</p>
              </div>
            </div>
            
            <div className="space-y-4 text-gray-200">
              <p className="font-semibold text-white">What You Can't Process:</p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <FileText className="w-5 h-5 text-orange-400 mr-3" />
                  <span><strong>1M+</strong> data points daily</span>
                </li>
                <li className="flex items-center">
                  <Globe className="w-5 h-5 text-orange-400 mr-3" />
                  <span><strong>50</strong> jurisdiction tax codes</span>
                </li>
                <li className="flex items-center">
                  <Clock className="w-5 h-5 text-orange-400 mr-3" />
                  <span>K-1s take <strong>40 hours each</strong></span>
                </li>
                <li className="flex items-center">
                  <TrendingUp className="w-5 h-5 text-orange-400 mr-3" />
                  <span>Real-time rebalancing <strong>impossible</strong></span>
                </li>
              </ul>
              
              <div className="bg-orange-950/50 rounded-lg p-3 mt-4">
                <p className="text-orange-300 font-semibold">
                  → Leaving 2% tax alpha on the table
                </p>
              </div>
            </div>
          </div>

          {/* Experience Wall */}
          <div className="bg-gradient-to-b from-yellow-900/30 to-yellow-950/50 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/30 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-6">
              <AlertTriangle className="w-12 h-12 text-yellow-400 mr-4" />
              <div>
                <h2 className="text-3xl font-bold text-yellow-400">EXPERIENCE WALL</h2>
                <p className="text-yellow-300">$60K Annual Loss</p>
              </div>
            </div>
            
            <div className="space-y-4 text-gray-200">
              <p className="font-semibold text-white">What You Can't See:</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-yellow-400 text-xl mr-3">7</span>
                  <span>different account logins</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 text-xl mr-3">0</span>
                  <span>unified dashboards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 text-xl mr-3">90</span>
                  <span>day old statements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 text-xl mr-3">0</span>
                  <span>AI insights available</span>
                </li>
              </ul>
              
              <div className="bg-yellow-950/50 rounded-lg p-3 mt-4">
                <p className="text-yellow-300 font-semibold">
                  → Poor decisions from fragmented data
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Total Cost Banner */}
        <div className="bg-gradient-to-r from-red-900/50 via-orange-900/50 to-yellow-900/50 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <div className="text-center">
            <p className="text-2xl text-gray-300 mb-3">Total Cost to Your $10M Portfolio:</p>
            <div className="text-7xl font-bold text-white mb-3">
              $190,000
              <span className="text-3xl text-gray-400 ml-3">/ YEAR</span>
            </div>
            <p className="text-xl text-gray-300">
              That's <span className="text-red-400 font-bold">1.9% annual drag</span> on your wealth.
              Over 10 years, you're losing <span className="text-red-400 font-bold">$2.3 million</span>.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); opacity: 0.05; }
          33% { transform: translateY(-30px) translateX(20px) scale(1.1); opacity: 0.08; }
          66% { transform: translateY(20px) translateX(-20px) scale(0.95); opacity: 0.05; }
        }
      `}</style>
    </div>
  );
};

export default Slide3ThreeWallsEnhanced;
