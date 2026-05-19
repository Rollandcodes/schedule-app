# Schedule

Smart booking software for modern businesses

![License: MIT](https://img.shields.io/badge/License-MIT-green) ![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-000000) ![Deployed on Railway](https://img.shields.io/badge/Deployed-Railway-8257E5) ![Payments by Dodo](https://img.shields.io/badge/Payments-Dodo-blue) ![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen)

![Schedule Dashboard](./docs/screenshot.png)

## Overview

Schedule is a professional white-label SaaS scheduling platform designed for businesses that need reliable online booking. It provides secure, branded booking pages, subscription billing, reminders, and analytics so teams can focus on service, not logistics. Schedule supports custom domains, multi-language booking pages, and integrates with standard business workflows.

## Features

- 📅 Unlimited booking pages per client
- 💳 Subscription billing via Dodo Payments (Starter / Pro / Agency)
- 🔗 Custom domain support (Pro & Agency plans)
- 📧 Email & SMS reminders
- 📊 Analytics dashboard (Pro & Agency)
- 🌍 Multilingual support
- 🔒 Secure auth with NextAuth.js
- 🎨 Fully white-labelable — your brand, your domain
- ⚡ Built on Next.js 14 with tRPC and Prisma
- 🐘 PostgreSQL database

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 |
| API | tRPC |
| Database ORM | Prisma |
| Database | PostgreSQL |
| Auth | NextAuth.js |
| Styling | Tailwind CSS |
| Payments | Dodo Payments |
| Hosting | Railway |
| Language | TypeScript |

## Getting Started

### Prerequisites

- Node.js >= 18.x
- Yarn
- PostgreSQL >= 13.x (or Supabase free tier)

### Installation

```bash
git clone https://github.com/<!-- replace with your GitHub username -->/schedule.git
cd schedule
yarn
```

### Environment Setup

```bash
cp .env.example .env
```

Fill in the required variables (see `.env.example` for full list):

```env
DATABASE_URL=
NEXTAUTH_SECRET=
SCHEDULE_ENCRYPTION_KEY=
NEXT_PUBLIC_WEBAPP_URL=
DODO_API_KEY=
DODO_WEBHOOK_SECRET=
```

Generate secret keys:

```bash
# NEXTAUTH_SECRET
openssl rand -base64 32

# SCHEDULE_ENCRYPTION_KEY
openssl rand -base64 24
```

### Database Setup

```bash
yarn workspace @calcom/prisma db-migrate
```

### Run Development Server

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deployment (Railway)

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app)

1. Push this repo to your GitHub
2. Go to [Railway](https://railway.app) → New Project → Deploy from GitHub
3. Add a PostgreSQL database service
4. Set all environment variables from `.env.example`
5. Railway auto-deploys on every `git push` to `main`

No Docker installation required on your local machine.
Railway handles containerization automatically.

## Dodo Payments Setup

1. Create an account at [Dodo Payments](https://dodopayments.com)
2. Create 3 products: Starter ($19/mo), Pro ($49/mo), Agency ($99/mo)
3. Copy the Plan IDs into your `.env`:

```env
NEXT_PUBLIC_DODO_PLAN_STARTER_ID=
NEXT_PUBLIC_DODO_PLAN_PRO_ID=
NEXT_PUBLIC_DODO_PLAN_AGENCY_ID=
```

4. Create a webhook pointing to:

```text
https://yourdomain.com/api/dodo/webhook
```

5. Subscribe to events:
`subscription.created`, `subscription.activated`, `subscription.renewed`, `subscription.cancelled`, `subscription.expired`, `payment.failed`

## Pricing Plans

| Plan | Price | Event Types | Bookings | Custom Domain | Team Members |
|---|---:|---|---:|---|---:|
| Starter | $19/mo | 5 | 100/mo | ❌ | 1 |
| Pro | $49/mo | Unlimited | Unlimited | ✅ | 5 |
| Agency | $99/mo | Unlimited | Unlimited | ✅ | Unlimited |

## Environment Variables Reference

| Variable | Required | Description |
|---|---|---|
| `DATABASE_URL` | ✅ | PostgreSQL connection string |
| `NEXTAUTH_SECRET` | ✅ | Auth encryption key |
| `SCHEDULE_ENCRYPTION_KEY` | ✅ | App encryption key |
| `NEXT_PUBLIC_WEBAPP_URL` | ✅ | Your app's public URL |
| `DODO_API_KEY` | ✅ | Dodo Payments API key |
| `DODO_WEBHOOK_SECRET` | ✅ | Dodo webhook signature secret |
| `NEXT_PUBLIC_DODO_PLAN_STARTER_ID` | ✅ | Starter plan ID from Dodo |
| `NEXT_PUBLIC_DODO_PLAN_PRO_ID` | ✅ | Pro plan ID from Dodo |
| `NEXT_PUBLIC_DODO_PLAN_AGENCY_ID` | ✅ | Agency plan ID from Dodo |
| `EMAIL_FROM` | ✅ | Sender email address |
| `EMAIL_SERVER_HOST` | ✅ | SMTP host |
| `CALCOM_TELEMETRY_DISABLED` | Optional | Set to `1` to disable telemetry |

## Project Structure

```
schedule/
├── apps/
│   └── web/                  # Next.js application
│       ├── pages/            # App pages & API routes
│       │   ├── api/
│       │   │   └── dodo/     # Dodo Payments webhooks & checkout
│       │   └── settings/
│       │       └── billing.tsx  # Billing & plan management
│       ├── components/       # UI components
│       ├── lib/
│       │   ├── dodo.ts       # Dodo Payments utility
│       │   └── subscription.ts  # Subscription helpers
│       └── styles/           # Global styles & brand tokens
├── packages/
│   ├── prisma/               # Database schema & migrations
│   └── config/               # Shared configuration
├── .env.example
├── railway.json              # Railway deployment config
└── README.md
```

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push to the branch: `git push origin feat/your-feature`
5. Open a Pull Request

## Roadmap

- [ ] Mobile app (React Native)
- [ ] WhatsApp booking reminders
- [ ] Google Calendar two-way sync
- [ ] Zapier / Make.com integration
- [ ] Multi-language booking pages (EN, TR, AR)
- [ ] Client management dashboard
- [ ] Stripe payments option

## License

```text
MIT License

Copyright (c) 2026 Muhanguzi Rolland

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.
```

> Built on [Cal.diy](https://github.com/calcom/cal.diy) — MIT Licensed.

## Author

**Muhanguzi Rolland**

- GitHub: [<!-- replace with your GitHub username -->](https://github.com/<!-- replace with your GitHub username -->)
- Product: [<!-- replace with your product domain -->](<!-- replace with your product domain -->)
- Built with ☕ in Northern Cyprus
