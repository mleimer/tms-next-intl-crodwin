# Crowdin-Integration with React and React-i18next

This small web app is built with React and stored on GitHub.

It uses `react-i18next` for managing translations and [Crowdin](https://crowdin.com/project/tms-next-intl-crowdin) as a TMS with In-Context translation.


## In-Context translation
In-Context translation is a mechanism, which allows you to run the web app and translate the text in the browser.
For Crowdin, the web app must be started in a pseudo language. For this project, `ach` is used as the pseudo-language.


In-Context translation is enabled wherever the `REACT_APP_ENABLE_IN_CONTEXT_TRANSLATIONS=true` environment variable is set.
It has been enabled for Vercel preview deployments, but is disabled for production deployments.
Create a `.env.local` if you wish to enable In-Context translations locally.

You must also be a member of the [Crowdin-Project](https://crowdin.com/project/tms-next-intl-crowdin) and the translation key must have been synched to Crowdin.

To access the web app for environments where `ENABLE_IN_CONTEXT_TRANSLATIONS=true` is set, switch to `ach` language to start translating.

## Run web app locally

1. Run `npm i` to install dependencies
2. Run `npm run start` to start the web app in development-mode

## Deployments

* [Prod](https://tms-react-i18next-crodwin.vercel.app/)
* [Preview deployments](https://vercel.com/mleimer/tms-react-i18next-crodwin/deployments)

## Crowdin
[Crowdin-Project](https://crowdin.com/project/tms-next-intl-crowdin)

Crowdin uses a source file and multiple translation files.
The source may also be a translation at the same time.
In this setup, the `en.json` file serves as the source as well as for the EN-translation.
The sync happens [upon request](https://crowdin.com/project/tms-next-intl-crowdin/apps/system/github), or once every hour.