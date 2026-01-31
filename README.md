This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Folder structure
```
AQUON-WEBSITE
├── .next/
├── node_modules/
├── public/
│   ├── images/
│   ├── videos/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   ├── app/
│   │   ├── company/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── customers/
│   │   │   └── page.tsx
│   │   ├── resources/
│   │   │   └── page.tsx
│   │   ├── technology/
│   │   │   └── page.tsx
│   │   ├── why-zeton/
│   │   │   └── page.tsx
│   │   ├── zeton/
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── core/
│   │   │   ├── AnimatedCounter.tsx
│   │   │   └── AnimatedInView.tsx
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   └── Header.tsx
│   │   ├── sections/
│   │   │   ├── company/
│   │   │   │   ├── CompanyHero.tsx
│   │   │   │   ├── Mission.tsx
│   │   │   │   ├── Recognition.tsx
│   │   │   │   ├── Story.tsx
│   │   │   │   └── Team.tsx
│   │   │   ├── contact/
│   │   │   │   ├── ContactForm.tsx
│   │   │   │   └── ContactHero.tsx
│   │   │   ├── customers/
│   │   │   │   ├── CaseStudies.tsx
│   │   │   │   └── CustomersHero.tsx
│   │   │   ├── homepage/
│   │   │   │   ├── FinalCTA.tsx
│   │   │   │   ├── Hero.tsx
│   │   │   │   ├── IntroducingZeton.tsx
│   │   │   │   ├── QuantifiedImpact.tsx
│   │   │   │   ├── SocialProof.tsx
│   │   │   │   ├── TechnologyTeaser.tsx
│   │   │   │   └── Trilemma.tsx
│   │   │   ├── resources/
│   │   │   ├── technology/
│   │   │   │       ├── FormalVerification.tsx
│   │   │   │       ├── TechnologyBenefits.tsx
│   │   │   │       ├── TechnologyHero.tsx
│   │   │   │       └── TechnologyStack.tsx
│   │   │   ├── why-zeton/
│   │   │   │   ├── ComparisonTable.tsx
│   │   │   │   ├── ROICalculator.tsx
│   │   │   │   └── WhyZetonHero.tsx
│   │   │   └── zeton/
│   │   │       ├── ModuleDeepDive.tsx
│   │   │       ├── UnifiedWorkflow.tsx
│   │   │       └── ZetonHero.tsx
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       ├── input.tsx
│   │       ├── slider.tsx
│   │       ├── tabs.tsx
│   │       └── textarea.tsx
│   ├── hooks/
│   │   └── useScrollPosition.ts
│   ├── lib/
│   │   └── utils.ts
│   └── types/
├── .gitignore
├── components.json
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```