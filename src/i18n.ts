import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-xhr-backend'
i18n
  .use(initReactI18next)
  .use(Backend)
  .init({
    fallbackLng: 'en',
    fallbackNS: 'translation',
    backend: {
      loadPath: '/src/locales/{{lng}}/{{ns}}.json'
    },
    interpolation: {
      escapeValue: false
    },

    react: {
      useSuspense: false
    },
    debug: false
  })
export default i18n
