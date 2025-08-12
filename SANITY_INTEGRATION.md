# Sanity.io Integration Guide

This project has been successfully integrated with Sanity.io for content management. Here's everything you need to know to get started.

## 🚀 What's Been Set Up

### 1. Sanity Studio
- **Access**: Visit `/studio` in your app to access the Sanity Studio
- **Admin Dashboard**: Visit `/admin` for a quick overview and links
- **Embedded**: The studio is fully embedded in your Next.js app

### 2. Content Types
- **Casino Brands**: Manage casino reviews with logos, ratings, pros/cons
- **Blog Posts**: Standard blog functionality
- **Authors & Categories**: Blog content organization

### 3. Features
- **Real-time Updates**: Content changes reflect immediately
- **Image Management**: Optimized image handling with Sanity
- **TypeScript Support**: Full type safety for all content
- **Caching**: Next.js integration with smart revalidation

## 📝 How to Use

### Adding Casino Brands

1. **Go to Sanity Studio**: Navigate to `/studio` in your app
2. **Create New Brand**: Click "Create new" → "Casino Brand"
3. **Fill in Details**:
   - **Name**: Casino brand name (required)
   - **Logo**: Upload brand logo image (required)
   - **Description**: Brief description of the casino
   - **Rating**: 1-5 star rating
   - **Bonus**: Welcome bonus information
   - **Features**: Array of casino features
   - **Pros**: List of advantages
   - **Cons**: List of disadvantages
   - **Website**: URL to casino website
   - **Active**: Toggle to show/hide brand
   - **Order**: Display order (lower numbers appear first)

4. **Save**: Click "Publish" to make it live

### Managing Content

- **Edit**: Click on any document to edit
- **Delete**: Use the delete action in the studio
- **Preview**: See how content will look before publishing
- **Version History**: Track changes over time

## 🔧 Configuration

### Environment Variables

Make sure these are set in your `.env.local`:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token
```

### API Routes

- **Revalidation**: `/api/revalidate` - Webhook endpoint for content updates
- **Draft Mode**: `/api/draft-mode/enable` - For previewing unpublished content

## 📱 Frontend Integration

### BrandCards Component

The `BrandCards` component now automatically:
- Fetches data from Sanity
- Shows loading states
- Displays casino brands with all their information
- Handles missing data gracefully
- Updates in real-time when content changes

### Data Fetching

```typescript
import { sanityFetch } from '@/sanity/lib/sanity.fetch'
import { casinoBrandsQuery } from '@/sanity/lib/queries'

const brands = await sanityFetch({
  query: casinoBrandsQuery,
  tags: ['casinoBrand'],
})
```

### Image Handling

```typescript
import { urlFor } from '@/sanity/lib/image'

const imageUrl = urlFor(brand.logo).width(300).height(200).url()
```

## 🎯 Customization

### Adding New Content Types

1. Create a new schema file in `src/sanity/schemaTypes/`
2. Add it to `src/sanity/schemaTypes/index.ts`
3. Deploy the schema: `npx sanity schema deploy`
4. Create queries in `src/sanity/lib/queries.ts`
5. Add types to `src/sanity/types.ts`

### Modifying Existing Schemas

1. Edit the schema file
2. Deploy changes: `npx sanity schema deploy`
3. Update queries and types as needed

## 🚨 Troubleshooting

### Common Issues

1. **Schema Deployment Fails**
   - Check for syntax errors in schema files
   - Ensure all imports are correct
   - Verify TypeScript compilation

2. **Content Not Loading**
   - Check environment variables
   - Verify Sanity project ID and dataset
   - Check browser console for errors

3. **Images Not Displaying**
   - Ensure image fields are properly configured
   - Check CORS settings in Sanity
   - Verify image URL generation

### Debug Mode

Enable Next.js logging in `next.config.ts`:

```typescript
logging: {
  fetches: {
    fullUrl: true,
  },
}
```

## 🔗 Useful Links

- **Sanity Studio**: `/studio`
- **Admin Dashboard**: `/admin`
- **Sanity Documentation**: https://www.sanity.io/docs
- **Next.js Sanity**: https://github.com/sanity-io/next-sanity

## 📊 Performance

- **CDN**: Images are served through Sanity's CDN
- **Caching**: Next.js caching with smart revalidation
- **Optimization**: Automatic image optimization and responsive sizes

## 🎉 Next Steps

1. **Add Sample Content**: Create a few casino brands to test
2. **Customize Schemas**: Modify fields based on your needs
3. **Add More Content Types**: Expand beyond casino brands
4. **Implement Search**: Add search functionality using Sanity's query capabilities
5. **Add Analytics**: Track content performance and user engagement

---

**Need Help?** Check the Sanity documentation or create an issue in your project repository.
