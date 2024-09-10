import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";
// import React from "react";
import Backend from "i18next-http-backend";
// import viTranslate from "../languages/vi/vi.json";
// import enTranslate from "../languages/en/en.json";
// import viValidateTranslate from "../languages/vi/validate.json";
// import enValidateTranslate from "../languages/en/validate.json";
// export const loadTranslations = async (
//   lang: string,
//   setLoading: React.Dispatch<React.SetStateAction<boolean>>
// ) => {
//   const response = await fetch(`http://localhost:3000/translations-${lang}`);
//   const translations = await response.json();
//   i18n.addResourceBundle(lang, "translation", translations);
//   i18n.changeLanguage(lang);
//   setLoading(false);
// };
const setDefaultLanguage = (lang: string) => {
  if (localStorage.getItem("i18nextLng") === null) {
    localStorage.setItem("i18nextLng", lang);
  }
};
const options = {
  order: ["querystring"],
  lookupQuerystring: "lang",
};
setDefaultLanguage("vi");
i18n
  .use(detector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    // resources: {
    //   en: {
    //     translation: {
    //       ...enTranslate,
    //       ...enValidateTranslate,
    //     },
    //   },
    //   vi: {
    //     translation: { ...viTranslate, ...viValidateTranslate },
    //   },
    // },
    // lng: "vi",
    detection: options,
    fallbackLng: "vi",
    ns: ["auth", "common"],
    defaultNS: "common",
    backend: {
      loadPath: "http://localhost:3000/translations-{{lng}}-{{ns}}",
    },
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });
export default i18n;
