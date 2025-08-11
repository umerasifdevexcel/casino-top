export default function BrandCards() {
  const brands = [
    {
      id: 1,
      name: "BitStarz",
      logo: "🎰",
      rating: 4.8,
      review: "Outstanding crypto casino with instant payouts and massive game library.",
      pros: ["Instant crypto withdrawals", "3000+ games", "24/7 live support"],
      cons: ["Limited fiat options", "High wagering requirements"],
      cta: "Play Now",
      bonus: "100% up to 1 BTC"
    },
    {
      id: 2,
      name: "FortuneJack",
      logo: "♠️",
      rating: 4.6,
      review: "Premium crypto gambling experience with exclusive Bitcoin games.",
      pros: ["Provably fair games", "Multi-crypto support", "VIP program"],
      cons: ["Complex interface", "Limited customer support hours"],
      cta: "Join Now",
      bonus: "110% up to 1.5 BTC"
    },
    {
      id: 3,
      name: "mBit Casino",
      logo: "💎",
      rating: 4.7,
      review: "Top-tier crypto casino with excellent mobile experience and bonuses.",
      pros: ["Mobile optimized", "Fast transactions", "Great bonuses"],
      cons: ["Limited live games", "Geo-restrictions"],
      cta: "Claim Bonus",
      bonus: "125% up to 1 BTC"
    },
    {
      id: 4,
      name: "Cloudbet",
      logo: "⚡",
      rating: 4.5,
      review: "Sports betting meets casino with comprehensive crypto",
      pros: ["Sports + casino combo", "Low house edge", "Anonymous play"],
      cons: ["Slow customer support", "Limited promotions"],
      cta: "Bet Now",
      bonus: "100% up to 5 BTC"
    },
    {
      id: 5,
      name: "Stake.com",
      logo: "🚀",
      rating: 4.9,
      review: "Revolutionary crypto casino with original games and huge community.",
      pros: ["Original Stake games", "Streaming integration", "Rain rewards"],
      cons: ["Can be addictive", "US restrictions"],
      cta: "Start Playing",
      bonus: "200% deposit bonus"
    },
    {
      id: 6,
      name: "BC.Game",
      logo: "🎯",
      rating: 4.4,
      review: "All-in-one crypto gaming platform with sports, casino, and esports.",
      pros: ["Multi-game platform", "Competitive odds", "Social features"],
      cons: ["Overwhelming interface", "Limited payment methods"],
      cta: "Explore Now",
      bonus: "300% welcome package"
    }
  ];

  return (
    <section className="w-full py-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-black mb-4">Top Crypto Casinos 2025</h2>
        <p className="text-gray-600 text-lg">
          Our expert team has reviewed and ranked the best cryptocurrency casinos based on security, games, and user experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {brands.map((brand, index) => (
          <div
            key={brand.id}
            className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
          >
            {/* Centered Logo and Name */}
            <div className="p-4 text-center border-b border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center text-2xl mx-auto mb-2">
                {brand.logo}
              </div>
              <h3 className="font-bold text-lg text-black">{brand.name}</h3>
            </div>

            {/* Pros and Cons */}
            <div className="p-4 space-y-3 border-b border-gray-100">
              <div>
                <h4 className="font-semibold text-green-700 mb-1 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Pros
                </h4>
                <ul className="space-y-0.5">
                  {brand.pros.map((pro, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">•</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-red-700 mb-1 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Cons
                </h4>
                <ul className="space-y-0.5">
                  {brand.cons.map((con, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">•</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Review */}
            <div className="p-4 border-b border-gray-100">
              <p className="text-gray-700 text-sm leading-relaxed italic">
                "{brand.review}"
              </p>
            </div>

            {/* CTA Button */}
            <div className="p-4">
              <button className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold py-2.5 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-sm hover:shadow-red-500/25">
                {brand.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}