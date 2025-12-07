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
i18n.on("languageChanged", async (lng) => {
    document.documentElement.lang = lng;
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";

    /* ✅ خزّن اللغة */
    localStorage.setItem("lang", lng);

    /* ✅ شيل أي ملف قديم */
    const oldLink = document.getElementById("custom-ltr");
    if (oldLink) oldLink.remove();

    /* ✅ لو اللغة LTR */
    if (lng !== "ar") {
        const module = await import("../assets/front/css/custom-ltr.css");

        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = module.default;
        link.id = "custom-ltr";
        document.head.appendChild(link);
    }
});

export default i18n;
