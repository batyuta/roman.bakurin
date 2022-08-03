// use plugins and options as needed, for options, detail see

// http://i18next.com/docs/
i18next
    .use(i18nextHttpBackend)
    .use(i18nextLocalStorageCache)
    .use(i18nextBrowserLanguageDetector)
    .use(i18nextSprintfPostProcessor)
    .init({
        fallbackLng: 'en',
        // lng: 'en',
        ns: ['translation'],
        defaultNS: 'translation',
        debug: true,
        backend: {
            // load from i18next-gitbook repo
            loadPath: 'http://localhost/roman.bakurin/locales/{{lng}}/{{ns}}.json',
            crossDomain: true
        }
    }, function (err, t) {
        // for options see
        jqueryI18next.init(i18next, $);

        // start localizing, details:
        updateContent();
    });

function updateContent() {
    $('.nav').localize();
    $('.content').localize();
}

function changeLanguage(lang) {
    i18next.changeLanguage(lang).then(updateContent);
}