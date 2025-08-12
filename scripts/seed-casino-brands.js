#!/usr/bin/env node

/**
 * Seed script to add sample casino brands to Sanity
 * Run with: node scripts/seed-casino-brands.js
 */

const { createClient } = require('@sanity/client')
require('dotenv').config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2025-08-12',
  token: process.env.SANITY_API_TOKEN, // You'll need to create this token
  useCdn: false,
})

const sampleBrands = [
  {
    _type: 'casinoBrand',
    name: 'BitStarz',
    description: 'Outstanding crypto casino with instant payouts and massive game library.',
    rating: 4.8,
    bonus: '100% up to 1 BTC',
    features: ['Crypto Casino', 'Instant Withdrawals', 'Live Games'],
    pros: ['Instant crypto withdrawals', '3000+ games', '24/7 live support'],
    cons: ['Limited fiat options', 'High wagering requirements'],
    website: 'https://www.bitstarz.com',
    isActive: true,
    order: 1,
    // Comparison table data
    gamesCount: '3000+',
    withdrawalTime: 'Instant',
    minDeposit: '$20',
    license: 'Curacao',
    supportedCryptos: ['BTC', 'ETH', 'LTC', 'BCH'],
    hasLiveChat: true,
    hasMobileApp: true,
    fairnessType: 'Provably Fair',
  },
  {
    _type: 'casinoBrand',
    name: 'FortuneJack',
    description: 'Premium crypto gambling experience with exclusive Bitcoin games.',
    rating: 4.6,
    bonus: '110% up to 1.5 BTC',
    features: ['Bitcoin Casino', 'Provably Fair', 'VIP Program'],
    pros: ['Provably fair games', 'Multi-crypto support', 'VIP program'],
    cons: ['Complex interface', 'Limited customer support hours'],
    website: 'https://www.fortunejack.com',
    isActive: true,
    order: 2,
    // Comparison table data
    gamesCount: '2500+',
    withdrawalTime: '< 1 hour',
    minDeposit: '$10',
    license: 'Curacao',
    supportedCryptos: ['BTC', 'ETH', 'LTC', 'DOGE'],
    hasLiveChat: true,
    hasMobileApp: true,
    fairnessType: 'Provably Fair',
  },
  {
    _type: 'casinoBrand',
    name: 'mBit Casino',
    description: 'Top-tier crypto casino with excellent mobile experience and bonuses.',
    rating: 4.7,
    bonus: '125% up to 1 BTC',
    features: ['Mobile Optimized', 'Fast Transactions', 'Great Bonuses'],
    pros: ['Mobile optimized', 'Fast transactions', 'Great bonuses'],
    cons: ['Limited live games', 'Geo-restrictions'],
    website: 'https://www.mbitcasino.com',
    isActive: true,
    order: 3,
    // Comparison table data
    gamesCount: '2000+',
    withdrawalTime: '< 30 min',
    minDeposit: '$20',
    license: 'Curacao',
    supportedCryptos: ['BTC', 'ETH', 'LTC', 'BCH'],
    hasLiveChat: true,
    hasMobileApp: true,
    fairnessType: 'RNG Certified',
  },
  {
    _type: 'casinoBrand',
    name: 'Cloudbet',
    description: 'Sports betting meets casino with comprehensive crypto options.',
    rating: 4.5,
    bonus: '100% up to 5 BTC',
    features: ['Sports Betting', 'Casino Games', 'Low House Edge'],
    pros: ['Sports + casino combo', 'Low house edge', 'Anonymous play'],
    cons: ['Slow customer support', 'Limited promotions'],
    website: 'https://www.cloudbet.com',
    isActive: true,
    order: 4,
    // Comparison table data
    gamesCount: '1500+',
    withdrawalTime: '< 2 hours',
    minDeposit: '$10',
    license: 'Curacao',
    supportedCryptos: ['BTC', 'ETH', 'BCH', 'USDT'],
    hasLiveChat: false,
    hasMobileApp: true,
    fairnessType: 'Third Party',
  },
  {
    _type: 'casinoBrand',
    name: 'Stake.com',
    description: 'Revolutionary crypto casino with original games and huge community.',
    rating: 4.9,
    bonus: '200% deposit bonus',
    features: ['Original Games', 'Streaming Integration', 'Rain Rewards'],
    pros: ['Original Stake games', 'Streaming integration', 'Rain rewards'],
    cons: ['Can be addictive', 'US restrictions'],
    website: 'https://www.stake.com',
    isActive: true,
    order: 5,
    // Comparison table data
    gamesCount: '4000+',
    withdrawalTime: 'Instant',
    minDeposit: '$1',
    license: 'Curacao',
    supportedCryptos: ['BTC', 'ETH', 'LTC', 'DOGE', 'TRX'],
    hasLiveChat: true,
    hasMobileApp: true,
    fairnessType: 'Provably Fair',
  },
  {
    _type: 'casinoBrand',
    name: 'BC.Game',
    description: 'All-in-one crypto gaming platform with sports, casino, and esports.',
    rating: 4.4,
    bonus: '300% welcome package',
    features: ['Multi-Game Platform', 'Competitive Odds', 'Social Features'],
    pros: ['Multi-game platform', 'Competitive odds', 'Social features'],
    cons: ['Overwhelming interface', 'Limited payment methods'],
    website: 'https://www.bc.game',
    isActive: true,
    order: 6,
    // Comparison table data
    gamesCount: '3500+',
    withdrawalTime: '< 15 min',
    minDeposit: '$1',
    license: 'Curacao',
    supportedCryptos: ['BTC', 'ETH', 'BNB', 'ADA'],
    hasLiveChat: true,
    hasMobileApp: true,
    fairnessType: 'Provably Fair',
  },
]

async function seedBrands() {
  console.log('🌱 Starting to seed casino brands...')
  
  try {
    for (const brand of sampleBrands) {
      console.log(`Creating ${brand.name}...`)
      
      const result = await client.create(brand)
      console.log(`✅ Created ${brand.name} with ID: ${result._id}`)
    }
    
    console.log('🎉 All casino brands have been created successfully!')
    console.log('📝 Note: You\'ll need to add logos manually in the Sanity Studio')
    console.log('🔗 Visit /studio to manage your content')
    
  } catch (error) {
    console.error('❌ Error seeding brands:', error.message)
    
    if (error.message.includes('token')) {
      console.log('\n💡 To fix this, you need to create a Sanity API token:')
      console.log('1. Go to https://www.sanity.io/manage')
      console.log('2. Select your project')
      console.log('3. Go to API section')
      console.log('4. Create a new token with "Editor" permissions')
      console.log('5. Add it to your .env.local as SANITY_API_TOKEN')
    }
  }
}

// Only run if this file is executed directly
if (require.main === module) {
  seedBrands()
}

module.exports = { seedBrands }
