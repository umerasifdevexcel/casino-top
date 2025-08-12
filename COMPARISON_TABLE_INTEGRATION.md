# Comparison Table Sanity Integration

## Overview
The ComparisonTable component has been successfully integrated with Sanity CMS to dynamically fetch and display casino brand data.

## Changes Made

### 1. Schema Updates (`src/sanity/schemaTypes/casinoBrand.ts`)
Added new fields to the casinoBrand schema for comparison table data:
- `gamesCount`: Number of games (e.g., "3000+")
- `withdrawalTime`: Withdrawal processing time (e.g., "Instant", "< 1 hour")
- `minDeposit`: Minimum deposit amount (e.g., "$20", "$10")
- `license`: Casino license information (e.g., "Curacao")
- `supportedCryptos`: Array of supported cryptocurrencies
- `hasLiveChat`: Boolean for live chat support availability
- `hasMobileApp`: Boolean for mobile app availability
- `fairnessType`: Type of fairness system (Provably Fair, RNG Certified, Third Party)

### 2. Query Updates (`src/sanity/lib/queries.ts`)
Added new query `comparisonTableQuery` to fetch comparison-specific data:
```groq
*[_type == "casinoBrand" && isActive == true] | order(order asc, rating desc, name asc) {
  _id,
  name,
  gamesCount,
  withdrawalTime,
  minDeposit,
  license,
  supportedCryptos,
  hasLiveChat,
  hasMobileApp,
  fairnessType,
  website
}
```

### 3. Component Updates (`src/components/ComparisonTable.tsx`)
- Converted from client component to server component
- Integrated with Sanity data fetching using `sanityFetch`
- Updated both desktop table and mobile card views
- Added proper fallbacks for missing data ("N/A")
- Implemented clickable "Play Now" buttons with external links

### 4. Type Updates (`src/sanity/types.ts`)
Extended the `CasinoBrand` interface to include all new comparison table fields.

### 5. Seed Data Updates (`scripts/seed-casino-brands.js`)
Updated sample data to include comparison table fields for all casino brands.

## Usage

### Running the Seed Script
To populate your Sanity dataset with sample data including comparison table fields:

```bash
node scripts/seed-casino-brands.js
```

**Note**: You'll need a Sanity API token with Editor permissions in your `.env.local` file:
```
SANITY_API_TOKEN=your_token_here
```

### Managing Content
1. Visit `/studio` to access the Sanity Studio
2. Navigate to "Casino Brand" documents
3. Edit existing brands or create new ones
4. Fill in the comparison table fields for each brand
5. Changes will automatically appear on the frontend

## Features

### Desktop View
- Responsive table with sticky header
- Sortable columns (handled by Sanity query ordering)
- Hover effects and smooth transitions
- Cryptocurrency tags display
- Direct links to casino websites

### Mobile View
- Horizontal scrolling card layout
- Compact information display
- Visual indicators for live chat and mobile app availability
- Touch-friendly interface

### Data Validation
- All fields are optional with proper fallbacks
- Boolean fields default to `false`
- Arrays handle empty states gracefully
- External links open in new tabs with security attributes

## Next Steps

1. **Add Images**: Upload casino logos in Sanity Studio
2. **Content Management**: Populate all comparison table fields for existing brands
3. **SEO Optimization**: Add meta descriptions and structured data
4. **Performance**: Consider implementing ISR (Incremental Static Regeneration) for better performance
5. **Analytics**: Track click-through rates on "Play Now" buttons

## Troubleshooting

### Common Issues
1. **Missing Data**: Ensure all casino brands have the new comparison fields populated
2. **API Token**: Verify your Sanity API token has the correct permissions
3. **Schema Deployment**: Deploy schema changes to Sanity after modifications
4. **Cache Issues**: Clear Next.js cache if data doesn't update immediately

### Useful Commands
```bash
# Deploy schema changes
pnpm schema:deploy

# Start development server
pnpm dev

# Start Sanity Studio
pnpm studio

# Seed sample data
pnpm seed:brands
```