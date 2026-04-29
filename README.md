# Kriya Meet

White-label video meeting website built with Next.js, Tailwind CSS, and Framer Motion.
Prepared for JioMeet CPaaS integration.

## How to Install
```bash
npm install
```

## How to Run
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

## How to add Environment Variables
1. Copy `.env.example` to `.env`
2. Add your JioMeet credentials when available.

## How to Deploy on Vercel
1. Push this code to a GitHub repository.
2. Go to [Vercel](https://vercel.com) and click "Add New Project".
3. Import your GitHub repository.
4. Click **Deploy**. Vercel will automatically detect Next.js and build the project.
5. Add environment variables in the Vercel project settings later.

## What to ask JioMeet Support
Send this message to their support team:

> Dear JioMeet Team,
> 
> We are building a white-label video meeting website using JioMeet CPaaS.
> 
> Our planned setup:
> Frontend: Vercel
> Backend: Next.js API Routes on Vercel
> Domain: meet.ourdomain.com
> 
> Please confirm:
> 1. Can we use domain-based whitelisting?
> 2. Is fixed IP mandatory for server API calls?
> 3. Can Vercel serverless functions call JioMeet APIs?
> 4. Please provide App ID, Secret Key, API documentation, Web SDK/iframe documentation, pricing, and branding options.

## Where to replace mock API with real JioMeet API
- `app/api/meetings/create/route.ts`: Replace the mock response with a real JioMeet API call to create a meeting.
- `app/api/jiomeet/status/route.ts`: Update status logic when credentials are added.
- `app/meeting/[id]/page.tsx`: Replace the placeholder div with JioMeet Web SDK or iframe.
