import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ar from "./translations/ar.json";
import en from "./translations/en.json";

i18n.use(initReactI18next).init({
    resources: {
        ar: { translation: ar },
        en: { translation: en }
    },
    lng: "ar",
    fallbackLng: "en",
    interpolation: { escapeValue: false }
});

i18n.on("languageChanged", (lng) => {
    document.documentElement.lang = lng;
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
});

export default i18n;
