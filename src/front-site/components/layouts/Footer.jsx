export default function Footer({ t }) {
    return (
        <footer>
            <p className="text-center">
                {t("hello")} {t("footer_text")}
            </p>
        </footer>
    );
}
