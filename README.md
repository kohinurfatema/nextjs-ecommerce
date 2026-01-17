# ShopNext - E-Commerce Application

A modern e-commerce application built with **Next.js 15 (App Router)**, featuring public pages, authentication, and protected routes. This project demonstrates core Next.js concepts with a clean, responsive design.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **JSON File Storage** - Simple data persistence
- **Cookie-based Auth** - Session management

## Features

- Landing page with 7 content sections
- Product catalog with grid display
- Individual product detail pages
- User authentication system
- Protected admin routes
- Add new products (admin only)
- Responsive design for all devices
- Loading states and error handling
- SEO optimized with metadata

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nextjs-ecommerce
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Login Credentials

```
Email: admin@example.com
Password: password123
```

## Route Summary

| Route | Access | Description |
|-------|--------|-------------|
| `/` | Public | Landing page with 7 sections |
| `/login` | Public | User login page |
| `/items` | Public | Product catalog listing |
| `/items/[id]` | Public | Individual product details |
| `/items/add` | Protected | Add new product (requires login) |

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/items` | GET | Fetch all products |
| `/api/items` | POST | Add new product |
| `/api/items/[id]` | GET | Fetch single product |
| `/api/auth/login` | POST | User authentication |

## Project Structure

```
nextjs-ecommerce/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/login/route.js    # Login API
│   │   │   └── items/
│   │   │       ├── route.js           # Items API (GET, POST)
│   │   │       └── [id]/route.js      # Single item API
│   │   ├── items/
│   │   │   ├── page.js                # Products listing
│   │   │   ├── loading.js             # Loading state
│   │   │   ├── [id]/
│   │   │   │   ├── page.js            # Product details
│   │   │   │   ├── loading.js         # Loading state
│   │   │   │   └── not-found.js       # 404 page
│   │   │   └── add/
│   │   │       └── page.js            # Add product form
│   │   ├── login/
│   │   │   └── page.js                # Login page
│   │   ├── layout.js                  # Root layout
│   │   ├── page.js                    # Landing page
│   │   ├── loading.js                 # Global loading
│   │   └── error.js                   # Global error boundary
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── AuthButtons.jsx
│   │   └── sections/                  # Landing page sections
│   │       ├── Hero.jsx
│   │       ├── Features.jsx
│   │       ├── FeaturedProducts.jsx
│   │       ├── About.jsx
│   │       ├── Testimonials.jsx
│   │       ├── Stats.jsx
│   │       └── Newsletter.jsx
│   ├── data/
│   │   └── items.json                 # Product data
│   └── lib/
│       └── auth.js                    # Auth helper functions
├── public/                            # Static assets
├── .env.local                         # Environment variables
└── middleware.js                      # Route protection
```

## Next.js Concepts Demonstrated

| Concept | Implementation |
|---------|----------------|
| App Router | File-based routing in `/app` |
| Server Components | Landing page, Items pages |
| Client Components | Forms, Interactive elements |
| API Routes | `/api/items`, `/api/auth` |
| Dynamic Routes | `/items/[id]` |
| Layouts | Root layout with Navbar/Footer |
| Metadata | SEO titles and descriptions |
| Middleware | Route protection |
| Loading UI | Skeleton screens |
| Error Handling | Error boundaries |
| Cookies | Authentication state |

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Deployment

Deploy easily on [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import project to Vercel
3. Deploy automatically

## License

This project is for educational purposes.

---

Built with Next.js 15 and Tailwind CSS
