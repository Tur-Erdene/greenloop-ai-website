# TOOLS.md

# Vercel Deployment Setup

## Status: Completed ✅

### Next.js Project Setup
- [x] Initialize Next.js project
- [x] Configure Vercel CLI
- [x] Connect GitHub for auto-deployment
- [x] Deploy staging
- [x] Deploy production

### Environment Variables
- `NEXT_PUBLIC_API_URL` - Backend API endpoint
- `NEXT_PUBLIC_GOOGLE_MAPS_KEY` - Maps integration
- `VERCEL_TOKEN` - Vercel auth token
- `GITHUB_TOKEN` - GitHub auth token (ghp_...)

### Deployment Steps
1. Install Vercel CLI: `npm i -g vercel` ✅
2. Login: `vercel login` (Token required)
3. Link project: `vercel link`
4. Deploy: `vercel --prod`
