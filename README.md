# Next.js + Supabase Template

A minimal template with Next.js and Supabase authentication.

## Features

- Next.js 15 App Router
- Supabase Auth (email/password)
- Tailwind CSS
- shadcn/ui components
- Dark mode support

## Setup

1. Create a Supabase project at [supabase.com](https://supabase.com)

2. Copy `.env.example` to `.env.local` and fill in your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-anon-key
```

3. Install dependencies and run:

```bash
npm install
npm run dev
```

## Project Structure

```
app/
├── protected/      # Protected routes (requires auth)
└── page.tsx        # Landing page

components/
├── ui/             # shadcn/ui components
└── *.tsx           # Auth and utility components

lib/
└── supabase/       # Supabase client configuration
```
