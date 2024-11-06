import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import eng from "../config/locales/eng/translation.json"
import rus from "../config/locales/rus/translation.json"
import qar from "../config/locales/qar/translation.json"



i18next
.use(initReactI18next)
.init(
   { resources: {
           eng: {
              translation : eng
           },

           rus: {
            translation : rus
         },
         qar: {
            translation : qar
         }
    },
    fallbackLng:"eng",
    interpolation: {
        escapeValue: false 
      }
}
)


export default i18next