import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative bg-black overflow-hidden min-h-[500px] rounded-xl w-full">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 rounded-xl">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            radial-gradient(circle at 75% 45%, rgba(139, 69, 19, 0.15) 0%, transparent 50%),
            linear-gradient(90deg, transparent 0%, rgba(55, 65, 81, 0.05) 50%, transparent 100%),
            linear-gradient(0deg, transparent 0%, rgba(55, 65, 81, 0.05) 50%, transparent 100%)
          `,
          backgroundSize: '100% 100%, 60px 60px, 60px 60px',
          borderRadius: '12px'
        }} />
      </div>

      <div className="relative z-10 w-full h-full p-8 lg:p-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left Side Content */}
          <div className="space-y-6">
            {/* Main Heading */}
            <h1 className="text-white text-xl lg:text-3xl xl:text-4xl font-bold leading-tight">
              Best Crypto Casinos in USA
            </h1>
            
            {/* Description */}
            <p className="text-white/90 text-md lg:text-base text-justify" style={{ maxWidth: '460px' }}>
              Crypto casinos offer fast withdrawals, privacy, and borderless access. We've tested and reviewed the top-rated platforms that accept Bitcoin and other cryptocurrencies.
            </p>
            
            {/* Review Date */}
            <p className="text-white/70 text-sm font-light italic">
              Reviewed July 2025 by our editorial team
            </p>
            
            {/* CTA Button */}
            <button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/25">
              Compare All Crypto Casinos
            </button>
            
            {/* Bottom Logos */}
            <div className="flex items-center gap-4 pt-4">
              {/* Gambling Responsibility Block */}
              <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                <Image
                  src="/images/Gambling Responsability block.svg"
                  alt="Gambling Responsibility"
                  width={80}
                  height={30}
                  className="h-8 w-auto"
                />
              </div>
            </div>
          </div>
          
          {/* Right Side - Crypto Icons */}
          <div className="relative flex justify-center items-center h-full min-h-[400px]">
            <div className="relative w-full h-full max-w-[400px] max-h-[400px]">
              
              {/* Concentric Circles */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-32 border border-white/10 rounded-full"></div>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-48 h-48 border border-white/8 rounded-full"></div>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-64 h-64 border border-white/6 rounded-full"></div>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-80 h-80 border border-white/4 rounded-full"></div>
              </div>
              
              {/* Bitcoin - Central */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-2xl shadow-orange-500/30 ring-4 ring-orange-500/20">
                  <span className="text-white font-bold text-2xl">₿</span>
                </div>
              </div>
              
              {/* Ethereum - Top */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg shadow-blue-600/30 ring-2 ring-blue-400/20">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L5.5 12.25L12 16.5L18.5 12.25L12 0ZM12 17.5L5.5 13.25L12 24L18.5 13.25L12 17.5Z"/>
                  </svg>
                </div>
              </div>
              
              {/* Litecoin - Top Right */}
              <div className="absolute top-8 right-4 transform">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-700 to-blue-900 rounded-full flex items-center justify-center shadow-lg shadow-blue-700/30 ring-2 ring-blue-500/20">
                  <span className="text-white font-bold text-lg">Ł</span>
                </div>
              </div>
              
              {/* Tether - Bottom Left */}
              <div className="absolute bottom-8 left-4 transform">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center shadow-lg shadow-teal-500/30 ring-2 ring-teal-400/20">
                  <span className="text-white font-bold text-lg">₮</span>
                </div>
              </div>
              
              {/* Avalanche - Bottom Right */}
              <div className="absolute bottom-8 right-4 transform">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center shadow-lg shadow-red-600/30 ring-2 ring-red-400/20">
                  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 20h20L12 2zm0 4.5L18.5 18h-13L12 6.5z"/>
                  </svg>
                </div>
              </div>
              
              {/* Subtle glow effect */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-32 bg-gradient-radial from-orange-500/10 via-orange-500/5 to-transparent rounded-full blur-2xl"></div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
