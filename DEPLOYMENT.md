# MindReply Production Deployment Guide

**Last Updated:** July 30, 2026  
**Status:** Ready for Production  
**Primary Domain:** https://www.mind-reply.com  
**Organization:** mind-reply (GitHub)

---

## Executive Summary

MindReply has been pivoted to a **mainstream AI-powered Administrative Assistant platform** with PWA support. The application is production-ready and includes:

- **Modern UI/UX**: Dark executive theme with responsive design
- **PWA Support**: Install as mobile app on any device
- **AI Administrative Assistant**: Powered by OpenAI GPT-5
- **Monetization Ready**: Three pricing tiers (Founder $49/mo, Agency $149/mo, Enterprise custom)
- **Revenue Optimization**: Checkout flow, credit system, and subscription infrastructure

---

## Production URLs

| Service | URL | Status |
|---------|-----|--------|
| **Primary Site** | https://www.mind-reply.com | Ready |
| **Admin Dashboard** | https://www.mind-reply.com/admin | Ready |
| **API Health** | https://www.mind-reply.com/api/health | Ready |
| **Manifest (PWA)** | https://www.mind-reply.com/manifest.webmanifest | Ready |
| **Service Worker** | https://www.mind-reply.com/sw.js | Ready |

---

## Vercel Deployment Configuration

### Project Setup

```bash
# Repository
Organization: mind-reply (or angelkrustevtopa-jpg)
Repository: MindReply
Branch: main
Framework: Next.js 15.5.22
Node Version: 22.13.0
```

### Build Configuration

```json
{
  "framework": "nextjs",
  "installCommand": "npm install --prefer-offline --no-audit --fund=false --progress=false",
  "buildCommand": "npm run build",
  "ignoreCommand": "node scripts/vercel-ignore-build.mjs",
  "git": {
    "deploymentEnabled": {
      "*": false,
      "main": true
    }
  }
}
```

### Environment Variables (Required)

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://www.mind-reply.com

# AI Provider (OpenAI)
OPENAI_API_KEY=<your-openai-api-key>
MRAGENT_MODEL=gpt-5

# Blob Storage (Vercel Blob)
BLOB_READ_WRITE_TOKEN=<vercel-blob-token>

# Gmail Integration (Optional)
MINDREPLY_IMAP_HOST=imap.gmail.com
MINDREPLY_IMAP_USER=<your-gmail>
MINDREPLY_IMAP_PASSWORD=<app-specific-password>

# Calendar Integration (Optional)
MINDREPLY_CALENDAR_OUTBOX=calendar-outbox.jsonl
```

### Deployment Steps

1. **Connect Repository to Vercel**
   - Go to https://vercel.com/new
   - Select GitHub and authorize
   - Choose `mind-reply/MindReply` repository
   - Select `main` branch

2. **Configure Environment**
   - Set all required environment variables in Vercel dashboard
   - Enable automatic deployments on push to `main`

3. **Domain Configuration**
   - Add custom domain: `www.mind-reply.com`
   - Add root domain: `mind-reply.com`
   - Update DNS records (see Cloudflare section)

4. **Deploy**
   - Vercel will automatically build and deploy on push
   - Monitor deployment at https://vercel.com/dashboard

---

## Cloudflare Configuration

### DNS Records

```
Type    | Name              | Content                              | TTL
--------|-------------------|-------------------------------------|-----
CNAME   | www               | cname.vercel-dns.com                | Auto
CNAME   | mind-reply        | cname.vercel-dns.com                | Auto
TXT     | _acme-challenge   | <vercel-acme-challenge>             | Auto
```

### Security Settings

- **SSL/TLS**: Full (Strict) - Requires valid certificate
- **Minimum TLS Version**: TLS 1.2
- **HSTS**: Enable (max-age: 31536000)
- **Security Headers**: Enable
- **Bot Management**: Enable
- **Rate Limiting**: 100 requests per 10 seconds per IP

### Performance Optimization

- **Caching**: Cache everything
- **Minify**: CSS, JavaScript, HTML
- **Rocket Loader**: Enabled
- **Polish**: Lossless
- **HTTP/2 Push**: Enabled

### Firewall Rules

```
Rule: Block suspicious traffic
Condition: (cf.threat_score > 50) OR (cf.bot_management.score < 30)
Action: Block
```

---

## Application Features

### Homepage (`/`)
- Hero section with AI Administrative Assistant pitch
- Platform layers overview (Administrative Intake, Executive Mind Read, Action Twin, PWA Mobility)
- Workflow visualization (4-step process)
- Revenue readiness section
- **Pricing tiers** (Founder, Agency, Enterprise)
- Proof section with operating lanes

### Admin Dashboard (`/admin`)
- Mobile-first PWA interface
- Real-time AI chat with Administrative Twin
- Credit system display (42 credits shown)
- Search and settings controls
- Responsive design for all devices

### API Routes

| Route | Method | Purpose |
|-------|--------|---------|
| `/api/agent` | POST | AI agent processing |
| `/api/intake` | POST | Message intake and triage |
| `/api/checkout` | POST | Subscription checkout |
| `/api/health` | GET | Health check |
| `/api/version` | GET | Version info |

### PWA Features

- **Manifest**: `/manifest.webmanifest`
- **Service Worker**: `/sw.js`
- **Icons**: 192x192 and 512x512 PNG
- **Offline Support**: Basic caching strategy
- **Install Prompt**: Mobile browsers show "Add to Home Screen"

---

## Monetization Setup

### Pricing Tiers

| Tier | Price | Features |
|------|-------|----------|
| **Founder** | $49/mo | 50 Mind Reads/mo, PWA Access, Basic Admin |
| **Agency** | $149/mo | Unlimited Reads, Full Workflows, Priority Support |
| **Enterprise** | Custom | Dedicated Instance, White-glove Onboarding |

### Checkout Flow

- User clicks "Get Started" on pricing card
- POST to `/api/checkout` with plan parameter
- Simulated checkout (ready for PayPal/Stripe integration)
- Redirect to `/admin` with checkout success

### Payment Integration (Next Steps)

- **Option 1**: PayPal Commerce Platform
- **Option 2**: Stripe Billing
- **Option 3**: Paddle (SaaS-focused)

---

## Monitoring & Analytics

### Vercel Analytics
- Speed Insights: Enabled
- Web Analytics: Enabled
- Real User Monitoring (RUM): Enabled

### Cloudflare Analytics
- Page Rules: Monitored
- Bot Management: Tracked
- DDoS Protection: Active

### Application Monitoring

```bash
# Health Check Endpoint
curl https://www.mind-reply.com/api/health

# Version Check
curl https://www.mind-reply.com/api/version
```

---

## SEO & Performance

### Meta Tags
- Title: "MindReply | Executive Nervous System"
- Description: "A private decision layer for modern work. Paste the pressure. Receive one synthesis and one recommended action."
- OG Image: Included
- Canonical URL: Set to primary domain

### Structured Data
- Schema.org SoftwareApplication markup included
- JSON-LD for rich snippets

### Performance Targets
- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Time to Interactive (TTI)**: < 3.5s

---

## Secrets Management

### GitHub Secrets (for CI/CD)

```bash
VERCEL_TOKEN=<your-vercel-token>
VERCEL_ORG_ID=<your-org-id>
VERCEL_PROJECT_ID=<your-project-id>
OPENAI_API_KEY=<your-openai-key>
```

### Vercel Environment Variables

All secrets should be set as **Sensitive** in Vercel dashboard:
- OPENAI_API_KEY
- BLOB_READ_WRITE_TOKEN
- MINDREPLY_IMAP_PASSWORD

---

## Deployment Checklist

- [ ] Repository cloned and updated with latest code
- [ ] Vercel project created and connected
- [ ] Environment variables configured
- [ ] Domain registered and DNS updated
- [ ] SSL certificate provisioned
- [ ] Cloudflare security rules enabled
- [ ] Analytics configured
- [ ] Health check passing
- [ ] PWA manifest verified
- [ ] Mobile responsiveness tested
- [ ] Checkout flow tested
- [ ] Admin dashboard accessible
- [ ] SEO metadata verified

---

## Rollback Procedure

If deployment fails:

1. **Vercel**: Click "Rollback" on previous successful deployment
2. **Cloudflare**: Revert DNS changes if needed
3. **GitHub**: Revert commit with `git revert <commit-hash>`

---

## Support & Troubleshooting

### Common Issues

**Issue**: Build fails on Vercel  
**Solution**: Check build logs, verify environment variables, ensure Node version matches

**Issue**: Domain not resolving  
**Solution**: Verify Cloudflare DNS records, check CNAME targets, wait for DNS propagation (up to 48 hours)

**Issue**: PWA not installing  
**Solution**: Verify manifest.webmanifest is accessible, check service worker registration, test on HTTPS

**Issue**: Checkout not working  
**Solution**: Verify `/api/checkout` endpoint, check browser console for errors

---

## Next Steps

1. **Deploy to Vercel**: Connect repository and deploy
2. **Configure Cloudflare**: Update DNS records
3. **Test Production**: Verify all endpoints and features
4. **Monitor**: Set up alerts for errors and performance
5. **Integrate Payments**: Connect PayPal or Stripe
6. **Scale**: Monitor usage and optimize as needed

---

## Contact & Support

- **Repository**: https://github.com/mind-reply/MindReply
- **Production Site**: https://www.mind-reply.com
- **Admin Dashboard**: https://www.mind-reply.com/admin

---

**Document Version**: 1.0  
**Last Reviewed**: July 30, 2026  
**Next Review**: August 15, 2026
