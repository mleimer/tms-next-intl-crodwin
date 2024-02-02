# Tolgee with next.js 14 app router DEMO

This repo demonstrates how to use `tolgee` with new `next.js` app router.

An example based on `next14` app folder with `tolgee` and `next-intl` package.

## Setup

1. Clone this repo
2. Run `npm i`
3. Run `npm run dev`

## Setup tolgee credentials (optional)

4. Create project in Tolgee platform
5. Add `.env.development.local` file to base folder of this project with an API key to your project

```
NEXT_PUBLIC_TOLGEE_API_URL=https://app.tolgee.io
NEXT_PUBLIC_TOLGEE_API_KEY=<your project API key>
```

6. Re-run `npm run dev`

## Deployment
* https://app.tolgee.io/projects/5171
* Production: https://tms-nextjs-tolgee.vercel.app/
* Preview Deployments: https://vercel.com/mleimer/tms-nextjs-tolgee/deployments

## Chrome plugin for in-context translations
https://chromewebstore.google.com/detail/tolgee-tools/hacnbapajkkfohnonhbmegojnddagfnj?pli=1