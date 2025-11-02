import TranslationProvider from "./TranslationProvider";
import Header from '../src/front-site/components/layouts/Header';
import Footer from '../src/front-site/components/layouts/Footer';
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <TranslationProvider>
            {({ t, i18n }) => (
                <>
                    <Header t={t} />
                    <main>
                        <Outlet context={{ t }} />
                    </main>
                    <Footer t={t} i18n={i18n} />
                </>
            )}
        </TranslationProvider>
    );
}
