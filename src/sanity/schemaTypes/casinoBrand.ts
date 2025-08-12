import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'casinoBrand',
  title: 'Casino Brand',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Brand Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Brand Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(5),
    }),
    defineField({
      name: 'bonus',
      title: 'Welcome Bonus',
      type: 'string',
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'pros',
      title: 'Pros',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'list',
      },
    }),
    defineField({
      name: 'cons',
      title: 'Cons',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'list',
      },
    }),
    defineField({
      name: 'website',
      title: 'Website URL',
      type: 'url',
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
    // Comparison table specific fields
    defineField({
      name: 'gamesCount',
      title: 'Number of Games',
      type: 'string',
      description: 'e.g., "3000+", "2500+"',
    }),
    defineField({
      name: 'withdrawalTime',
      title: 'Withdrawal Time',
      type: 'string',
      description: 'e.g., "Instant", "< 1 hour", "< 30 min"',
    }),
    defineField({
      name: 'minDeposit',
      title: 'Minimum Deposit',
      type: 'string',
      description: 'e.g., "$20", "$10", "$1"',
    }),
    defineField({
      name: 'license',
      title: 'License',
      type: 'string',
      description: 'e.g., "Curacao", "Malta", "UK"',
    }),
    defineField({
      name: 'supportedCryptos',
      title: 'Supported Cryptocurrencies',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'e.g., BTC, ETH, LTC, DOGE',
    }),
    defineField({
      name: 'hasLiveChat',
      title: 'Live Chat Support',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'hasMobileApp',
      title: 'Mobile App Available',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'fairnessType',
      title: 'Fairness Type',
      type: 'string',
      options: {
        list: [
          { title: 'Provably Fair', value: 'Provably Fair' },
          { title: 'RNG Certified', value: 'RNG Certified' },
          { title: 'Third Party', value: 'Third Party' },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
      rating: 'rating',
    },
    prepare(selection) {
      const { title, media, rating } = selection
      return {
        title,
        subtitle: rating ? `${rating}/5 stars` : 'No rating',
        media,
      }
    },
  },
})
