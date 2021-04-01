import AdminTranslations from './../applications/Admin/i18n'
import PublicTranslations from './../applications/Public/i18n'

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

console.log(i18n);
