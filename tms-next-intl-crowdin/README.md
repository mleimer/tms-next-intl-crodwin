# Crowdin-Integration with Next.js and next-intl

This small web app is built with Next.js, stored on GitHub and deployed on Vercel.

It uses `next-intl` for managing translations and [Crowdin](https://crowdin.com/project/tms-next-intl-crowdin) as a TMS with In-Context translation.

`next-intl` is made for server components, but enforces [dynamic rendering](https://nextjs.org/docs/app/building-your-application/rendering/server-components#dynamic-rendering).
[This is a limitation that next-intl aim to remove in the future, but as a stopgap solution, next-intl provides a temporary API that can be used to enable static rendering.](https://next-intl-docs.vercel.app/docs/getting-started/app-router#static-rendering)


## In-Context translation
In-Context translation is a mechanism, which allows you to run the web app and translate the text in the browser.
For Crowdin, the web app must be started in a pseudo language. For this project, `ach` is used as the pseudo-language.

In-Context translation is enabled wherever the `ENABLE_IN_CONTEXT_TRANSLATIONS=true` environment variable is set.
It has been enabled for Vercel preview deployments, but is disabled for production deployments.
Create a `.env.local` if you wish to enable In-Context translations locally.

You must also be a member of the [Crowdin-Project](https://crowdin.com/project/tms-next-intl-crowdin)

To access the web app for environments where `ENABLE_IN_CONTEXT_TRANSLATIONS=true` is set, add `/ach` behind the host of the URL.
If auto-redirection occurs to another language (two-letter-code), replace it with `ach`

## Run web app locally

1. Run `npm i` to install dependencies
2. Run `npm run dev` to start the web app in development-mode

## Deployments

* [Prod](https://tms-next-intl-crodwin.vercel.app/)
* [Preview deployments](https://vercel.com/mleimer/tms-next-intl-crodwin/deployments)

## Crowdin
[Crowdin-Project](https://crowdin.com/project/tms-next-intl-crowdin)

Crowdin uses a source file and multiple translation files.
The source may also be a translation at the same time.
In this setup, the en.json file serves as the source as well as for the EN-translation.