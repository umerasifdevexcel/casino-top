import Image from 'next/image';
import { Button } from '@/components/ui/button';

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
            <h1 className="text-white" style={{
              fontWeight: 700,
              fontStyle: 'normal',
              fontSize: '32px',
              lineHeight: '42px',
              letterSpacing: '0px',
              verticalAlign: 'middle'
            }}>
              {`Best Crypto Casinos in USA`}
            </h1>
            
            {/* Description */}
            <p className="text-white/90 text-justify" style={{ 
              maxWidth: '460px',
              fontWeight: 500,
              fontStyle: 'normal',
              fontSize: '18px',
              lineHeight: '28px',
              letterSpacing: '0px'
            }}>
              Crypto casinos offer fast withdrawals, privacy, and borderless access. We've tested and reviewed the top-rated platforms that accept Bitcoin and other cryptocurrencies.
            </p>
            
            {/* Review Date */}
            <p className="text-white/70" style={{
              fontWeight: 400,
              fontStyle: 'italic',
              fontSize: '14px',
              lineHeight: '20px',
              letterSpacing: '0px'
            }}>
              Reviewed July 2025 by our editorial team
            </p>
            
            {/* CTA Button */}
            <Button variant="casino" size="casino" className="text-center">
              Compare All Crypto Casinos
            </Button>
            
            {/* Bottom Logos */}
            <div className="flex items-center gap-4 ">
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
          
          {/* Right Side - Background Image */}
          <div className="relative flex justify-center items-center h-full min-h-[400px]">
            <Image
              src="/images/bg.png"
              alt="Cryptocurrency solar system background"
              width={400}
              height={400}
              className="w-full h-auto max-w-[400px] max-h-[400px] object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
