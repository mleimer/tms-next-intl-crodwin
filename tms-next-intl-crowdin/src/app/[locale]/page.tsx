import {useTranslations} from 'next-intl';

export default function Index() {
    const t = useTranslations('Index');
    return (
        <div>
            <h1>{t('title')}</h1>
            <div>ICU 0: {t('icu', {count: 0})}</div>
            <div>ICU 1: {t('icu', {count: 1})}</div>
            <div>ICU other: {t('icu', {count: 2})}</div>
            <div>Rich text: {t.rich('richText', {
                b: (chunks) => <b>{chunks}</b>,
                i: (chunks) => <i>{chunks}</i>
            })}</div>
            <div>DEV-Branch only key: {t('devOnly')}</div>
            <div>New EN only translation key: {t('newKey')}</div>
        </div>);
}