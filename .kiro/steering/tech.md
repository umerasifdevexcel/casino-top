# Technology Stack

## Core Framework
- **Next.js 15.4.6**: React framework with App Router
- **React 19.1.0**: UI library
- **TypeScript 5**: Type safety and development experience
- **Tailwind CSS 4**: Utility-first CSS framework

## Content Management
- **Sanity.io 4.3.0**: Headless CMS with real-time updates
- **next-sanity 10.0.10**: Next.js integration for Sanity
- **@sanity/vision**: GROQ query testing in studio

## UI Components
- **shadcn/ui**: Component library built on Radix UI primitives
- **Radix UI**: Accessible, unstyled UI components
- **Lucide React**: Icon library
- **class-variance-authority**: Component variant management

## Development Tools
- **ESLint 9**: Code linting with Next.js config
- **pnpm**: Package manager (preferred)
- **Turbopack**: Fast bundler for development

## Common Commands

### Development
```bash
# Start development server with Turbopack
pnpm dev

# Start Sanity Studio
pnpm studio

# Build for production
pnpm build

# Start production server
pnpm start
```

### Content Management
```bash
# Deploy schema changes to Sanity
pnpm schema:deploy

# Build Sanity Studio
pnpm studio:build

# Deploy Sanity Studio
pnpm studio:deploy

# Seed casino brands data
pnpm seed:brands
```

### Code Quality
```bash
# Run ESLint
pnpm lint
```

## Configuration Notes
- Uses standalone output for deployment optimization
- Image optimization enabled with remote pattern support
- Turbopack rules configured for SVG handling
- Logging enabled for debugging Sanity integration