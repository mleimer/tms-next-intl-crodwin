# Crowdin
This project consists of two Crowdin integrations, once with `next-intl` using Next.js and once using `react-i18next` with React.
It also features a development and `main`-branch to add new translations on the go, while they are not yet on the `main`-branch.
Using `develop` and `main` branch is optional. Trunk based development is feasible as well.

## Pros
- In-context translations, also working for server components (due to pseudo-language)
- Support for screenshots
- Multi-branch support
- GitLab & GitHub integrations syncing and creating MR / PRs as required

## Cons
- Pseudo-language required to enable in-context translations
- Screenshots cannot be taken in-context, but must be taken manually. Keys must be added manually on screenshot, as auto tagging feature did not work.
- No React specific way to enable / disable in-context specific translations
- No self-hosting possible. If GitLab & GitHub integrations are used, Crowdin requires full repo access.

##  Remarks
- Multi-branch support brings complexity on how to sync translations across multiple branches. What should be re-imported? What should be copied over? Crowdin has some settings which allow a translator to translate each instance separately, or take over translations across all branches.

## Pricing
https://crowdin.com/pricing#annual
- 150$ / month with 100'000 words across all translations and 3 integrations but unlimited projects
- 450$ / month with 500'000 words across all translations and unlimited integrations & projects

# Tolgee

## Pros
- In-context translations, but they don't apply immediately for server components.
- Translation updates can be done in real-time, as translations get fetched from Tolgee upon loading the website (if configured like that)
- Support for screenshots, which can be taken in-context
- Self-hosting possible
- Most features free of charge when self-hosted, but some features cost extra
- Pricing not dependent on amount of translation keys or words

## Cons
- GitLab & GitHub integrations syncing and creating MR / PRs as required pending implementation Q2/2024
- No Multi-branch support
- UX to view screenshots for a translation within Tolgee is not that good / helpful

## Pricing
https://tolgee.io/pricing/self-hosted#pricing-toggle



