import { useTranslation } from "react-i18next";

export default function TranslationProvider({ children }) {
    const { t, i18n } = useTranslation();

    return children({ t, i18n });
}
