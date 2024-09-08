import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";
import viTranslate from "../languages/vi/vi.json";
import enTranslate from "../languages/en/en.json";
import viValidateTranslate from "../languages/vi/validate.json";
import enValidateTranslate from "../languages/en/validate.json";
const setDefaultLanguage = (lang: string) => {
  if (localStorage.getItem("i18nextLng") === null) {
    localStorage.setItem("i18nextLng", lang);
  }
};
setDefaultLanguage("en");
i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          ...enTranslate,
          ...enValidateTranslate,
        },
      },
      vi: {
        translation: { ...viTranslate, ...viValidateTranslate },
      },
    },
    // lng: "vi",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });
export default i18n;
