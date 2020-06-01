import Lang from "../../models/lang"

export default {
  namespaced: true,
  state: {
    lang: 'es',
    portfolio: new Lang({
      es: 'portafolio',
      en: 'portfolio'
    }),
    skill: new Lang({
      es: 'habilidades',
      en: 'skills'
    }),
    contact: new Lang({
      es: 'contacto',
      en: 'contact'
    })
  }
}