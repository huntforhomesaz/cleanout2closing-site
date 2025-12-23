# Cleanout2Closing Website

Estate transition and home sale services in Tucson, AZ.

## About

Cleanout2Closing is a Realtor-led estate transition concierge service. This site serves families, trustees, and out-of-state owners who need coordinated cleanout, vendor management, and home sales in the Tucson area.

## Tech Stack

- **Framework:** Astro
- **CMS:** Decap CMS (Netlify CMS)
- **Hosting:** Netlify
- **Content:** Markdown with YAML frontmatter

## Project Structure

```
cleanout2closing-site/
├── admin/              # Decap CMS configuration
├── content/            # Markdown content files
│   ├── pages/          # Core pages (home, about, services, etc.)
│   ├── service-areas/  # Service area overview and state hub
│   ├── geo/            # GEO-specific pages (Tucson, Green Valley)
│   └── guides/         # Educational guides and articles
├── docs/               # Planning and specification documents
├── public/             # Static assets
│   └── images/
│       ├── c2c/        # Brand assets (logos, etc.)
│       └── uploads/    # CMS-uploaded media
└── src/
    ├── components/     # Reusable Astro components
    ├── layouts/        # Page layout templates
    ├── lib/            # Utility functions
    └── pages/          # Astro route files
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Documentation

See the `/docs` directory for:
- `C2C_MegaSite_MasterPlan.md` - Overall project strategy and IA
- `Phase7_*.md` - Implementation task specifications
- `Content_Contract.md` - Content and frontmatter requirements
- `Brand_Guardrails.md` - Voice, tone, and visual guidelines

## URL Structure

- `/` - Home
- `/how-it-works` - Process overview
- `/services` - Services hub
- `/services/*` - Service pillar pages
- `/service-areas` - Service areas overview
- `/az` - Arizona state hub
- `/az/tucson` - Tucson city hub
- `/az/tucson/*` - Tucson GEO service pages
- `/az/green-valley` - Green Valley hub
- `/az/green-valley/*` - Green Valley GEO service pages
- `/guides/*` - Educational guides
- `/about`, `/contact`, `/faqs`, `/reviews` - Core pages
