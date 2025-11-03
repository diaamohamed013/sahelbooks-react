import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../i18n/en/common.json";
import ar from "../i18n/ar/common.json";

i18n.use(initReactI18next).init({
    resources: {
        en: { common: en },
        ar: { common: ar },
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
