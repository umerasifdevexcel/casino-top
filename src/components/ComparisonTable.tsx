import { Button } from '@/components/ui/button';
import { sanityFetch } from '@/sanity/lib/sanity.fetch';
import { comparisonTableQuery } from '@/sanity/lib/queries';
import { CasinoBrand } from '@/sanity/types';

export default async function ComparisonTable() {
  const brands = await sanityFetch({
    query: comparisonTableQuery,
    tags: ['casinoBrand'],
  });

  return (
    <section className="w-full py-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-black mb-4">Crypto Casino Comparison</h2>
        <p className="text-gray-600 text-lg">
          Compare features, bonuses, and specifications across top crypto casinos.
        </p>
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              {/* Sticky Header */}
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100 sticky top-0 z-10">
                <tr>
                  <th className="text-left p-4 font-bold text-black border-b border-gray-200">Casino</th>
                  <th className="text-left p-4 font-bold text-black border-b border-gray-200">Games</th>
                  <th className="text-left p-4 font-bold text-black border-b border-gray-200">Withdrawal</th>
                  <th className="text-left p-4 font-bold text-black border-b border-gray-200">Min Deposit</th>
                  <th className="text-left p-4 font-bold text-black border-b border-gray-200">Cryptocurrencies</th>
                  <th className="text-left p-4 font-bold text-black border-b border-gray-200">Action</th>
                </tr>
              </thead>
              <tbody>
                {brands.map((brand: CasinoBrand, index: number) => (
                  <tr
                    key={brand._id}
                    className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-red-50 transition-colors`}
                  >
                    <td className="p-4 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <div>
                          <div className="font-bold text-black">{brand.name}</div>
                          <div className="text-xs text-gray-500">
                            Licensed: {brand.license || 'N/A'}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 border-b border-gray-100">
                      <div className="text-sm font-semibold text-black">
                        {brand.gamesCount || 'N/A'}
                      </div>
                    </td>
                    <td className="p-4 border-b border-gray-100">
                      <div className="text-sm font-semibold text-blue-600">
                        {brand.withdrawalTime || 'N/A'}
                      </div>
                    </td>
                    <td className="p-4 border-b border-gray-100">
                      <div className="text-sm font-semibold text-black">
                        {brand.minDeposit || 'N/A'}
                      </div>
                    </td>
                    <td className="p-4 border-b border-gray-100">
                      <div className="flex flex-wrap gap-1">
                        {brand.supportedCryptos?.map((crypto: string) => (
                          <span
                            key={crypto}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                          >
                            {crypto}
                          </span>
                        )) || <span className="text-gray-500 text-sm">N/A</span>}
                      </div>
                    </td>
                    <td className="p-4 border-b border-gray-100">
                      {brand.website ? (
                        <Button variant="casino" size="casino" asChild>
                          <a href={brand.website} target="_blank" rel="noopener noreferrer">
                            Play Now
                          </a>
                        </Button>
                      ) : (
                        <Button variant="casino" size="casino" disabled>
                          Play Now
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Mobile Card View with Horizontal Scroll */}
      <div className="lg:hidden">
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-4" style={{ width: 'max-content' }}>
            {brands.map((brand: CasinoBrand) => (
              <div
                key={brand._id}
                className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 min-w-[280px] max-w-[280px]"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-black">{brand.name}</h3>
                    <div className="text-sm text-gray-500">
                      Licensed: {brand.license || 'N/A'}
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <div className="text-gray-600">Games</div>
                      <div className="font-semibold">{brand.gamesCount || 'N/A'}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Withdrawal</div>
                      <div className="font-semibold text-blue-600">
                        {brand.withdrawalTime || 'N/A'}
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-600">Min Deposit</div>
                      <div className="font-semibold">{brand.minDeposit || 'N/A'}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">License</div>
                      <div className="font-semibold">{brand.license || 'N/A'}</div>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-gray-600 mb-2">Supported Cryptos</div>
                    <div className="flex flex-wrap gap-1">
                      {brand.supportedCryptos?.length ? (
                        brand.supportedCryptos.map((crypto: string) => (
                          <span
                            key={crypto}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                          >
                            {crypto}
                          </span>
                        ))
                      ) : (
                        <span className="text-gray-500 text-xs">N/A</span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <svg className={`w-4 h-4 ${brand.hasLiveChat ? 'text-green-500' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        <span className="text-xs text-gray-600">Chat</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className={`w-4 h-4 ${brand.hasMobileApp ? 'text-green-500' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        <span className="text-xs text-gray-600">Mobile</span>
                      </div>
                    </div>
                  </div>

                  {brand.website ? (
                    <Button variant="casino" size="casinoFull" asChild>
                      <a href={brand.website} target="_blank" rel="noopener noreferrer">
                        Play Now
                      </a>
                    </Button>
                  ) : (
                    <Button variant="casino" size="casinoFull" disabled>
                      Play Now
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center text-gray-500 text-sm mt-2">
          ← Swipe to see more casinos →
        </div>
      </div>
    </section>
  );
}