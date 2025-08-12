import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { sanityFetch } from '@/sanity/lib/sanity.fetch';
import { comparisonTableQuery } from '@/sanity/lib/queries';
import { CasinoBrand } from '@/sanity/types';
import { ChevronDownIcon } from 'lucide-react';

export default async function ComparisonTable() {
  const brands = await sanityFetch({
    query: comparisonTableQuery,
    tags: ['casinoBrand'],
  });

  return (
    <section className="w-full py-6 ">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-black mb-4 text-center md:text-left">Crypto Casino Comparison</h2>
        <p className="text-gray-600 text-lg text-center md:text-left">
          Compare features, bonuses, and specifications across top crypto casinos.
        </p>
      </div>

      {/* Table View - Always Visible */}
      <div className="bg-white rounded-xl border border-[#E5E7E8] shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            {/* Sticky Header */}
            <thead className="bg-gradient-to-r from-gray-50 to-gray-100 sticky top-0 z-10">
              <tr>
                <th className="text-left p-4 font-bold text-black border-b border-r border-[#E5E7E8]">Casino</th>
                <th className="text-left p-4 font-bold text-black border-b border-r border-[#E5E7E8]">Games</th>
                <th className="text-left p-4 font-bold text-black border-b border-r border-[#E5E7E8]">Withdrawal</th>
                <th className="text-left p-4 font-bold text-black border-b border-r border-[#E5E7E8]">Min Deposit</th>
                <th className="text-left p-4 font-bold text-black border-b border-r border-[#E5E7E8]">Cryptocurrencies</th>
                <th className="text-left p-4 font-bold text-black border-b border-[#E5E7E8]">Action</th>
              </tr>
            </thead>
            <tbody>
              {brands.map((brand: CasinoBrand, index: number) => (
                <tr
                  key={brand._id}
                  className="bg-white hover:bg-red-50 transition-colors"
                >
                  <td className="p-4 border-b border-r border-[#E5E7E8]">
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-bold text-black">{brand.name}</div>
                        <div className="text-xs text-gray-500">
                          Licensed: {brand.license || 'N/A'}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 border-b border-r border-[#E5E7E8]">
                    <div className="text-sm font-semibold text-black">
                      {brand.gamesCount || 'N/A'}
                    </div>
                  </td>
                  <td className="p-4 border-b border-r border-[#E5E7E8]">
                    <div className="text-sm font-semibold text-blue-600">
                      {brand.withdrawalTime || 'N/A'}
                    </div>
                  </td>
                  <td className="p-4 border-b border-r border-[#E5E7E8]">
                    <div className="text-sm font-semibold text-black">
                      {brand.minDeposit || 'N/A'}
                    </div>
                  </td>
                  <td className="p-4 border-b border-r border-[#E5E7E8]">
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
                  <td className="p-4 border-b border-[#E5E7E8]">
                    {brand.website ? (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="casino" size="casino" className="flex items-center gap-2">
                            Play Now
                            <ChevronDownIcon className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          align="start"
                          className="w-56 bg-white rounded-2xl border border-[#E5E7E8] shadow-lg p-2"
                          sideOffset={8}
                        >
                          <DropdownMenuItem asChild className="p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors">
                            <a href={brand.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 w-full">
                              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                                </svg>
                              </div>
                              <span className="text-black font-medium text-base">Play on iOS</span>
                            </a>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild className="p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors">
                            <a href={brand.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 w-full">
                              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503c-.8897-.3924-1.8886-.6191-2.9365-.6191s-2.0468.2267-2.9365.6191l-2.0223-3.503a.4161.4161 0 00-.5676-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.61 10.2463.8995 13.5413.8995 17.2623c0 .1202.0975.2178.2178.2178h21.7654c.1202 0 .2178-.0975.2178-.2178C23.1005 13.5413 21.39 10.2463 17.9275 9.3214z"/>
                                </svg>
                              </div>
                              <span className="text-black font-medium text-base">Play on Android</span>
                            </a>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ) : (
                      <Button variant="casino" size="casino" disabled className="flex items-center gap-2">
                        Play Now
                        <ChevronDownIcon className="w-4 h-4" />
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}