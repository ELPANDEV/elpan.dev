import Lang from "../../models/lang"

export default {
  namespaced: true,
  state: {
    lang: 'es',
    portfolio: new Lang({
      es: 'portafolio',
      en: 'portfolio'
    }),
    about: new Lang({
      es: 'sobre mi',
      en: 'about'
    }),
    contact: new Lang({
      es: 'contacto',
      en: 'contact'
    })
  }
}