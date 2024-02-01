import React, {useEffect} from 'react';
import './App.css';
import {Trans, useTranslation} from "react-i18next";

function App() {
    useEffect(() => {
        console.log(process.env.REACT_APP_ENABLE_IN_CONTEXT_TRANSLATIONS)
        if( process.env.REACT_APP_ENABLE_IN_CONTEXT_TRANSLATIONS !== 'true') {
            return
        }

        const head = document.querySelector("head");
        const scriptJipt = document.createElement("script");

        const script = document.createElement("script");


        const code =  `var _jipt = [];
                             _jipt.push(['project', 'tms-next-intl-crowdin' ])`;
        scriptJipt.appendChild(document.createTextNode(code));

        script.setAttribute("src", "//cdn.crowdin.com/jipt/jipt.js");
        head?.appendChild(scriptJipt);
        head?.appendChild(script);

        return () => {
            head?.removeChild(script);
            head?.removeChild(scriptJipt);
        };
    }, []);


    const {t, i18n} = useTranslation('', {keyPrefix: 'Index'});
    return (
        <div>
            <h1>{t('title')}</h1>
            <div>ICU 0: {t('icu', {count: 0})}</div>
            <div>ICU 1: {t('icu', {count: 1})}</div>
            <div>ICU other: {t('icu', {count: 2})}</div>
            <div>Rich text:
                <Trans t={t} i18nKey="richText" defaults="You have <strong>20</strong> new messages!"/>
            </div>
            <div>DEV-Branch only key: {t('devOnly')}</div>
            <div>New EN only translation key: {t('newKey')}</div>
            <button onClick={() => i18n.changeLanguage('de')}>DE</button>
            <button onClick={() => i18n.changeLanguage('en')}>EN</button>
            <button onClick={() => i18n.changeLanguage('ach')}>ACH</button>
        </div>);
}

export default App;
