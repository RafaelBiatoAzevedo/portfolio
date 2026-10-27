import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import pt from "./locales/pt/translations.json";
import en from "./locales/en/translations.json";
import { readPreference } from "../lib/preferences";

const savedLanguage = readPreference("portfolio-language", "pt") === "en" ? "en" : "pt";

i18n.use(initReactI18next).init({
  resources: {
    pt: { translation: pt },
    en: { translation: en },
  },

  lng: savedLanguage,
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
