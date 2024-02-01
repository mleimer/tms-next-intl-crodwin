import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

// Can be imported from a shared config
export const locales = ['en', 'de', ...(process.env.ENABLE_IN_CONTEXT_TRANSLATIONS === 'true' ? ['ach'] : [])];

export default getRequestConfig(async ({locale}) => {
    // Validate that the incoming `locale` parameter is valid
    if (!locales.includes(locale)) notFound();

    return {
        messages: (await import(`../messages/${locale}.json`)).default
    };
});