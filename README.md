# TO-HOST landing page

Next.js (App Router), TypeScript, Tailwind CSS v4, Lucide icons.

## Run locally
1. `npm install`
2. `npm run dev` then open http://localhost:3000
3. `npm run build && npm start` to test the production build

## Things to replace
- Contact email and social links: `components/contact.tsx`
- Waitlist submission (currently frontend-only, stores nothing): `components/waitlist.tsx`
- Copy, listings, FAQs, nav links: `lib/data.ts`
- Privacy / Terms links: `components/footer.tsx`

## Deploy
Push to GitHub and import the repo in Vercel. No environment variables needed.
