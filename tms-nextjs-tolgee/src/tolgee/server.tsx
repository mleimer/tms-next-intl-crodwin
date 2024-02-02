import { useLocale } from 'next-intl';

import { TolgeeBase, ALL_LOCALES, getStaticData } from './shared';
import { createServerInstance } from '@tolgee/react/server';

export const { getTolgee, getTranslate, T } = createServerInstance({
  getLocale: useLocale,
  createTolgee: async (locale) => {
      let tolgee = TolgeeBase().init({
          staticData: await getStaticData(ALL_LOCALES),
          observerOptions: {
              fullKeyEncode: true,
          },
          language: locale,
          fetch: async (input, init) => {
              const data = await fetch(input, {...init, next: {revalidate: 0}});
              return data;
          },
      });

      if (process.env.NEXT_PUBLIC_ENABLE_IN_CONTEXT_TRANSLATIONS) {
          import('@tolgee/web/tools').then((module) => {
              tolgee.addPlugin(module.InContextTools())
          })
      }

      return tolgee;
  },
});
