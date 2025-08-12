import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { casinoBrandsQuery } from '@/sanity/lib/queries'
import { sanityFetch } from '@/sanity/lib/sanity.fetch'
import type { CasinoBrand } from '@/sanity/types'
import { Button } from '@/components/ui/button'

export default async function BrandCards() {
  const brands = await sanityFetch({
    query: casinoBrandsQuery,
    tags: ['casinoBrand'],
  })

  if (brands.length === 0) {
    return (
      <section className="w-full py-6 px-4 sm:px-0">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-black mb-4 text-center md:text-left">Top Crypto Casinos 2025</h2>
          <p className="text-gray-600 text-lg text-center md:text-left">
            Our expert team has reviewed and ranked the best cryptocurrency casinos based on security, games, and user experience.
          </p>
        </div>
        <div className="text-center py-12">
          <p className="text-gray-500">No casino brands found. Please add some brands in the Sanity Studio.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="w-full py-6 px-4 sm:px-0">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-black mb-4 text-center md:text-left">Top Crypto Casinos 2025</h2>
        <p className="text-gray-600 text-lg text-center md:text-left">
          Our expert team has reviewed and ranked the best cryptocurrency casinos based on security, games, and user experience.
        </p>
      </div>

      {/* Desktop Grid View */}
      <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {brands.map((brand: CasinoBrand) => (
          <div
            key={brand._id}
            className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col h-full"
          >
            {/* Centered Logo and Name */}
            <div className="p-4 text-center border-b border-gray-100 flex-shrink-0">
              <div className="w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mx-auto mb-2 overflow-hidden">
                {brand.logo ? (
                  <Image
                    src={urlFor(brand.logo).width(56).height(56).url()}
                    alt={`${brand.name} logo`}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-2xl">🎰</span>
                )}
              </div>
              <h3 className="font-bold text-lg text-black" style={{
                fontWeight: 700,
                fontStyle: 'normal',
                fontSize: '20px',
                lineHeight: '28px',
                letterSpacing: '0px',
                verticalAlign: 'middle'
              }}>{brand.name}</h3>
              {brand.rating && (
                <div className="flex items-center justify-center gap-1 mt-1">
                  <span className="text-yellow-500">★</span>
                  <span className="text-sm font-medium">{brand.rating}/5</span>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="p-4 flex-grow">
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {brand.description}
              </p>
            </div>

            {/* CTA Button */}
            <div className="p-4">
              <Button 
                variant="casinoOutline" 
                size="default" 
                className="w-full rounded-lg"
                asChild
              >
                <a href={brand.website} target="_blank" rel="noopener noreferrer">
                  Visit Casino
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Vertical Layout */}
      <div className="lg:hidden">
        <div className="grid grid-cols-1 gap-4">
          {brands.map((brand: CasinoBrand) => (
            <div
              key={brand._id}
              className="bg-white rounded-xl border border-gray-200 shadow-sm p-4"
            >
              {/* Header */}
              <div className="text-center border-b border-gray-100 pb-3 mb-3">
                <div className="w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mx-auto mb-2 overflow-hidden">
                  {brand.logo ? (
                    <Image
                      src={urlFor(brand.logo).width(56).height(56).url()}
                      alt={`${brand.name} logo`}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-2xl">🎰</span>
                  )}
                </div>
                <h3 className="font-bold text-lg text-black">{brand.name}</h3>
                {brand.rating && (
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm font-medium">{brand.rating}/5</span>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="mb-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {brand.description}
                </p>
              </div>

              {/* CTA Button */}
              <Button
                variant="casinoOutline"
                size="default"
                className="w-full rounded-lg"
                asChild
              >
                <a href={brand.website} target="_blank" rel="noopener noreferrer">
                  Visit Casino
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}