import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

// ✅ Import Assets using Vite bundling (No public folder)
import Favicon from "../../assets/front/images/favicon.png";
import PreloadVector from "../../assets/front/images/Vector.webp";

// ✅ CSS Files
import "../../assets/front/css/base.css";
import "../../assets/front/css/style.css";
import "../../assets/front/css/sahel.css";
import "../../assets/front/css/shortcodes.css";

// ✅ We'll conditionally load this
// import "../assets/front/css/custom-ltr.css";

export default function Head({ title, description, keywords, image }) {

    // ✅ Add custom-ltr.css only if language = English
    useEffect(() => {
        if (window.grecaptcha) {
            window.grecaptcha.ready(() => {
                window.grecaptcha.execute("YOUR_RECAPTCHA_SITE_KEY", { action: "submit" });
            });
        }
        if (document.documentElement.dir === "ltr") {
            import("../../assets/front/css/custom-ltr.css");
        }
        import("../../assets/front/js/device.min.js");
    }, []);

    const currentUrl = typeof window !== "undefined" ? window.location.href : "";

    return (
        <Helmet>
            <meta charSet="utf-8" />

            {/* Title & SEO */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            {/* Canonical */}
            <link rel="canonical" href={currentUrl} />

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:type" content="website" />

            {/* Favicon */}
            <link rel="icon" href={Favicon} />

            {/* Preload Image */}
            <link rel="preload" as="image" href={PreloadVector} />

            {/* ✅ Google Font */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link
                href="https://fonts.googleapis.com/css2?family=Cairo:wght@600&display=swap"
                rel="stylesheet"
            />
            <noscript>
                {`<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@600&display=swap" rel="stylesheet" />`}
            </noscript>


            {/* ✅ Google Analytics */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
            <script>
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-XXXXXXXXXX');
                `}
            </script>

            {/* ✅ Google reCAPTCHA */}
            <script
                src="https://www.google.com/recaptcha/api.js?render=YOUR_RECAPTCHA_SITE_KEY"
                async
                defer
            ></script>
            <script
                src="https://www.google.com/recaptcha/api.js?render=YOUR_RECAPTCHA_SITE_KEY"
                async
                defer
            ></script>

        </Helmet>
    );
}
