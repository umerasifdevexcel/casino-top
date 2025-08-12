# Project Structure

## Root Level
- **Configuration**: `next.config.ts`, `sanity.config.ts`, `tsconfig.json`
- **Package Management**: `package.json`, `pnpm-lock.yaml`
- **Environment**: `.env.local` (Sanity credentials)
- **Documentation**: `README.md`, `SANITY_INTEGRATION.md`

## Source Code (`src/`)

### App Router (`src/app/`)
- **Main Pages**: `page.tsx` (homepage), `layout.tsx` (root layout)
- **Admin Dashboard**: `admin/page.tsx` (content management overview)
- **Sanity Studio**: `studio/[[...tool]]/page.tsx` (embedded CMS)
- **API Routes**: `api/revalidate/route.ts` (webhook for content updates)
- **Styles**: `globals.css` (global styles and Tailwind imports)

### Components (`src/components/`)
- **Main Components**: `Header.tsx`, `HeroSection.tsx`, `BrandCards.tsx`, `ComparisonTable.tsx`, `Sidebar.tsx`
- **UI Library**: `ui/` (shadcn/ui components - button, card, dialog, etc.)

### Sanity Integration (`src/sanity/`)
- **Configuration**: `env.ts` (environment variables), `structure.ts` (studio structure)
- **Client Setup**: `lib/client.ts`, `lib/live.ts`, `lib/sanity.fetch.ts`
- **Data Layer**: `lib/queries.ts` (GROQ queries), `lib/image.ts` (image URL builder)
- **Schema Types**: `schemaTypes/` (content models - casinoBrand, postType, etc.)
- **TypeScript**: `types.ts` (generated types from schemas)

### Utilities (`src/lib/`, `src/hooks/`)
- **Utils**: `lib/utils.ts` (utility functions, cn helper)
- **Hooks**: `hooks/use-mobile.ts` (responsive utilities)

## Key Conventions

### File Naming
- **Components**: PascalCase (e.g., `BrandCards.tsx`)
- **Pages**: lowercase (e.g., `page.tsx`)
- **Utilities**: camelCase (e.g., `sanity.fetch.ts`)
- **Types**: camelCase with descriptive names

### Component Structure
- Use `'use client'` directive for client components
- Import UI components from `@/components/ui/`
- Use `@/` path alias for src directory imports
- Prefer named exports for utilities, default exports for components

### Sanity Integration
- **Schemas**: Define in `schemaTypes/` and export from `index.ts`
- **Queries**: Centralize in `lib/queries.ts` with descriptive names
- **Fetching**: Use `sanityFetch` wrapper with proper tags for revalidation
- **Images**: Use `urlFor` helper for optimized image URLs

### Styling
- **Tailwind**: Utility-first approach with custom CSS variables
- **Components**: Use `cn()` utility for conditional classes
- **Responsive**: Mobile-first design with responsive breakpoints
- **Theme**: CSS variables defined in `globals.css`

## Scripts and Automation
- **Seeding**: `scripts/seed-casino-brands.js` for sample data
- **Deployment**: Vercel-optimized with `vercel.json` config