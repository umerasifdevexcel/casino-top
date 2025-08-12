'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { casinoBrandsQuery } from '@/sanity/lib/queries'
import { sanityFetch } from '@/sanity/lib/sanity.fetch'
import type { CasinoBrand } from '@/sanity/types'
import { Button } from '@/components/ui/button'

export default function BrandCards() {
  const [brands, setBrands] = useState<CasinoBrand[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchBrands() {
      try {
        const data = await sanityFetch({
          query: casinoBrandsQuery,
          tags: ['casinoBrand'],
        })
        setBrands(data)
      } catch (error) {
        console.error('Error fetching casino brands:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBrands()
  }, [])

  if (loading) {
    return (
      <section className="w-full py-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-black mb-4">Top Crypto Casinos 2025</h2>
          <p className="text-gray-600 text-lg">
            Our expert team has reviewed and ranked the best cryptocurrency casinos based on security, games, and user experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden animate-pulse">
              <div className="p-4 text-center border-b border-gray-100">
                <div className="w-14 h-14 bg-gray-200 rounded-lg mx-auto mb-2"></div>
                <div className="h-6 bg-gray-200 rounded w-24 mx-auto"></div>
              </div>
              <div className="p-4 space-y-3">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
              <div className="p-4">
                <div className="h-12 bg-gray-200 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }

  if (brands.length === 0) {
    return (
      <section className="w-full py-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-black mb-4">Top Crypto Casinos 2025</h2>
          <p className="text-gray-600 text-lg">
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
    <section className="w-full py-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-black mb-4">Top Crypto Casinos 2025</h2>
        <p className="text-gray-600 text-lg">
          Our expert team has reviewed and ranked the best cryptocurrency casinos based on security, games, and user experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {brands.map((brand) => (
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

            {/* Content Area - Flexible */}
            <div className="flex-1 flex flex-col">
              {/* Pros and Cons */}
              <div className="p-4 space-y-3 border-b border-gray-100 flex-1">
                {brand.pros && brand.pros.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-green-700 mb-1 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Pros
                    </h4>
                    <ul className="space-y-0.5">
                      {brand.pros.slice(0, 3).map((pro, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start gap-2" style={{
                          fontWeight: 400,
                          fontStyle: 'normal',
                          fontSize: '14px',
                          lineHeight: '24px',
                          letterSpacing: '0%',
                          verticalAlign: 'middle'
                        }}>
                          <span className="text-green-500 mt-0.5">•</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {brand.cons && brand.cons.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-red-700 mb-1 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Cons
                    </h4>
                    <ul className="space-y-0.5">
                      {brand.cons.slice(0, 2).map((con, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start gap-2" style={{
                          fontWeight: 400,
                          fontStyle: 'normal',
                          fontSize: '14px',
                          lineHeight: '24px',
                          letterSpacing: '0%',
                          verticalAlign: 'middle'
                        }}>
                          <span className="text-red-500 mt-0.5">•</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Show placeholder content if no pros/cons */}
                {(!brand.pros || brand.pros.length === 0) && (!brand.cons || brand.cons.length === 0) && (
                  <div className="text-center py-4">
                    <p className="text-gray-400 text-sm">Features and details coming soon</p>
                  </div>
                )}
              </div>

              {/* Description */}
              {brand.description && (
                <div className="p-4 border-b border-gray-100 flex-shrink-0">
                  <p className="text-gray-700 text-sm leading-relaxed italic line-clamp-3">
                    "{brand.description}"
                  </p>
                </div>
              )}
            </div>

            {/* CTA Button - Always at bottom */}
            <div className="p-4 flex-shrink-0">
              <Button
                variant="casino"
                size="casinoFull"
                onClick={() => {
                  if (brand.website) {
                    window.open(brand.website, '_blank', 'noopener,noreferrer')
                  }
                }}
              >
                {brand.website ? 'Visit Site' : 'Learn More'}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}