# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture Overview

This is a Next.js 15 marketing website for Aeroconsultant (aviation consulting services) using the App Router with React 19 RC.

### Data Layer
- **CMS**: Strapi headless CMS accessed via REST API
- **API Configuration**: `lib/apiConfig.ts` - centralized fetch wrapper with auth token
- **Service Functions**: `lib/services.ts` - data fetching functions for each content type (getHomePage, getServices, getBlogsList, etc.)
- **Environment Variables**: `NEXT_PUBLIC_STRAPI_API_URL` and `NEXT_PUBLIC_STRAPI_TOKEN`

### Styling System
- **CSS Framework**: Tailwind CSS with shadcn/ui component patterns
- **Theme Variables**: CSS custom properties in `app/globals.css` for colors and typography
- **Font Families**:
  - `font-heading` (Proxima Nova) - headings
  - `font-body` (Helvetica Now) - body text
  - `font-button` (Montserrat) - buttons
- **Custom Colors**: `aero-primary` (#323084), `txt-body` (#020407)
- **Utility**: `lib/utils.ts` exports `cn()` for conditional class merging

### Component Organization
- `components/ui/` - shadcn/ui primitives (accordion, sheet, input, label, etc.)
- `components/Home/` - Homepage sections (Hero, Stats, AboutSection, ServicesSection, etc.)
- `components/Services/` - Service page components (Aerobox, Aeroops, CamoServices, etc.)
- `components/Product/` - Partnership/product page components
- `components/Blogs/` - Blog listing and detail components

### Route Structure
- `/` - Homepage with hero slider, stats, services overview
- `/services` - Services listing page
- `/partnerships` - Partnership information
- `/partnerships/[...rest]` - Dynamic partnership routes
- `/blogs` - Blog listing
- `/blogs/[slug]` - Individual blog posts
- `/api/contact` - Contact form API endpoint

### Type System
- `types/strapi.ts` - Strapi API response types
- `types/services.ts` - Service and team member types
- `types/blogs.ts` - Blog content types
- `types/home.ts`, `types/nav.ts`, `types/common.ts` - Component prop types

### Image Handling
Remote images served from S3 buckets configured in `next.config.ts`:
- `hmweb-dev-bucket.s3.us-west-2.amazonaws.com`
- `aero-cms.s3.ap-south-1.amazonaws.com`

### Path Aliases
`@/*` maps to the project root (configured in tsconfig.json)
