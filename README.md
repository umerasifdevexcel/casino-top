# CasinoTop - Cryptocurrency Casino Review Platform

A modern, responsive web application built with Next.js and Sanity.io that provides comprehensive reviews and comparisons of cryptocurrency casinos. The platform helps users make informed decisions when choosing online casinos by providing detailed information, ratings, and comparisons.

## 🚀 Features

- **Casino Brand Reviews**: Comprehensive casino listings with ratings, pros/cons, bonuses, and features
- **Real-time Content Management**: Sanity.io CMS integration with live updates
- **Responsive Design**: Modern UI built with Tailwind CSS and shadcn/ui components
- **Comparison Tables**: Side-by-side casino comparisons
- **Admin Dashboard**: Easy content management interface
- **TypeScript Support**: Full type safety throughout the application
- **Image Optimization**: Automatic image optimization and CDN delivery

## 🛠️ Technology Stack

### Core Framework
- **Next.js 15.4.6**: React framework with App Router
- **React 19.1.0**: UI library
- **TypeScript 5**: Type safety and development experience
- **Tailwind CSS 4**: Utility-first CSS framework

### Content Management
- **Sanity.io 4.3.0**: Headless CMS with real-time updates
- **next-sanity 10.0.10**: Next.js integration for Sanity
- **@sanity/vision**: GROQ query testing in studio

### UI Components
- **shadcn/ui**: Component library built on Radix UI primitives
- **Radix UI**: Accessible, unstyled UI components
- **Lucide React**: Icon library
- **class-variance-authority**: Component variant management

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm/yarn
- Sanity.io account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd casinotop
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```bash
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your-api-token
   ```

4. **Start the development server**
   ```bash
   pnpm dev
   ```

5. **Access the application**
   - **Frontend**: [http://localhost:3000](http://localhost:3000)
   - **Sanity Studio**: [http://localhost:3000/studio](http://localhost:3000/studio)
   - **Admin Dashboard**: [http://localhost:3000/admin](http://localhost:3000/admin)

## 📝 Content Management

### Sanity Studio Integration

The project includes a fully embedded Sanity Studio for content management:

- **Access Studio**: Navigate to `/studio` in your app
- **Admin Overview**: Visit `/admin` for quick access and overview
- **Real-time Updates**: Content changes reflect immediately on the frontend

### Adding Casino Brands

1. Go to Sanity Studio (`/studio`)
2. Click "Create new" → "Casino Brand"
3. Fill in the required information:
   - Name, logo, description
   - Rating (1-5 stars)
   - Welcome bonus details
   - Features, pros, and cons
   - Website URL
   - Display order

### Content Types

- **Casino Brands**: Main casino review content
- **Blog Posts**: Additional content and articles
- **Authors & Categories**: Content organization

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── admin/             # Admin dashboard
│   ├── api/               # API routes
│   ├── studio/            # Embedded Sanity Studio
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── BrandCards.tsx    # Casino brand display
│   ├── ComparisonTable.tsx # Casino comparison
│   └── HeroSection.tsx   # Landing section
├── sanity/               # Sanity configuration
│   ├── lib/              # Client setup and queries
│   ├── schemaTypes/      # Content schemas
│   └── types.ts          # TypeScript types
├── lib/                  # Utilities
└── hooks/                # Custom React hooks
```

## 🔧 Available Scripts

### Development
```bash
# Start development server with Turbopack
pnpm dev

# Start Sanity Studio (standalone)
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

## 🎨 Styling and Components

- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **shadcn/ui**: Pre-built accessible components
- **CSS Variables**: Custom theme configuration in `globals.css`
- **Responsive Design**: Mobile-first approach with breakpoints
- **Dark Mode**: Built-in theme switching support

## 📊 Performance Features

- **Image Optimization**: Automatic optimization via Sanity CDN
- **Caching**: Next.js caching with smart revalidation
- **Bundle Optimization**: Turbopack for fast development builds
- **Standalone Output**: Optimized for deployment

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Environment Variables for Production

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token
```

## 📚 Documentation

- **[Sanity Integration Guide](SANITY_INTEGRATION.md)**: Detailed CMS setup and usage
- **[Comparison Table Integration](COMPARISON_TABLE_INTEGRATION.md)**: Feature comparison setup
- **[Next.js Documentation](https://nextjs.org/docs)**: Framework documentation
- **[Sanity Documentation](https://www.sanity.io/docs)**: CMS documentation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

- Check the [Sanity Integration Guide](SANITY_INTEGRATION.md) for CMS-related issues
- Review the project structure in the steering files
- Create an issue for bugs or feature requests

---

Built with ❤️ using Next.js and Sanity.io
