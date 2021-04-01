import Vue from 'vue'
import VueI18n from 'vue-i18n'
import AdminTranslations from './applications/Admin/i18n'
import PublicTranslations from './applications/Public/i18n'

Vue.use(VueI18n)

const i18ns = AdminTranslations.concat(PublicTranslations);

let i18n = {};
i18ns.forEach(function(element) {
  const keys = Object.keys(element)
  keys.forEach(function(key) {

    if (i18n[key] === undefined) {
      i18n[key] = {}
    }

    i18n[key] = Object.assign(i18n[key], element[key]);
  })
})

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: i18n
})
