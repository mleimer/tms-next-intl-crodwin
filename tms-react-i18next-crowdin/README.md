# Crowdin-Integration with React and React-i18next

This small web app is built with React and stored on GitHub.

It uses `react-i18next` for managing translations and [Crowdin](https://crowdin.com/project/tms-next-intl-crowdin) as a TMS with In-Context translation.


## In-Context translation
In-Context translation is a mechanism, which allows you to run the web app and translate the text in the browser.
For Crowdin, the web app must be started in a pseudo language. For this project, `ach` is used as the pseudo-language.


You must also be a member of the [Crowdin-Project](https://crowdin.com/project/tms-next-intl-crowdin) and the translation key must have been synched to Crowdin.

You must switch to `ach` to start translating in-context.

## Run web app locally

1. Run `npm i` to install dependencies
2. Run `npm run start` to start the web app in development-mode

## Deployments

--

## Crowdin
[Crowdin-Project](https://crowdin.com/project/tms-next-intl-crowdin)

Crowdin uses a source file and multiple translation files.
The source may also be a translation at the same time.
In this setup, the `en.json` file serves as the source as well as for the EN-translation.
The sync happens [upon request](https://crowdin.com/project/tms-next-intl-crowdin/apps/system/github), or once every hour.