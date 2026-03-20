# PepsiCo India Foods Sales Prompt Bank

A PepsiCo India Foods-themed prompt library designed for India sales teams across planning, distributor management, outlet execution, trade marketing, revenue growth, and leadership reviews.

Crafted by Futurelab Studios.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

## Local development

```sh
npm install
npm run dev
```

## Verification

```sh
npm run build
npm run test
npx eslint src/pages/Index.tsx src/data/prompts.ts src/data/pepsicoPrompts.ts src/data/pepsicoResources.ts src/data/techniques.ts src/data/types.ts
```

## Deployment

Netlify is configured via [`netlify.toml`](./netlify.toml) with:

- Build command: `npm run build`
- Publish directory: `dist`
