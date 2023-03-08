import i18n from "i18next";
import translations from "./lang";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    fallbackLng: localStorage.getItem("lang") || "en",
    interpolation: {
        escapeValue: false,
    },
    resources: {
        uz: {
            translation: translations.uz,
        },
        en: {
            translation: translations.en,
        },
        ru: {
            translation: translations.ru,
        },
    },
});

export default {};
