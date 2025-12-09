import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../i18n/en/common.json";
import ar from "../i18n/ar/common.json";

/* ✅ helper بسيط */
export const getSavedLang = () => {
    return localStorage.getItem("lang") || "ar";
};

export const setLang = (lng) => {
    localStorage.setItem("lang", lng);
    i18n.changeLanguage(lng);
};

i18n.use(initReactI18next).init({
    resources: {
        en: { common: en },
        ar: { common: ar },
    },
    lng: getSavedLang(),     // ✅ هنا الإضافة المهمة
    fallbackLng: "en",
    interpolation: { escapeValue: false }
});

/* ✅ لما اللغة تتغير */
// i18n.on("languageChanged", async (lng) => {
//     document.documentElement.lang = lng;
//     document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";

//     /* ✅ خزّن اللغة */
//     localStorage.setItem("lang", lng);
// });

i18n.on("languageChanged", (lng) => {
    const isLTR = lng === "en";
    const link = document.getElementById("ltr-style");

    document.documentElement.lang = lng;
    document.documentElement.dir = isLTR ? "ltr" : "rtl";

    if (link) {
        link.disabled = !isLTR; // ✅ شبه @if
    }

    localStorage.setItem("lang", lng);
});

export default i18n;
