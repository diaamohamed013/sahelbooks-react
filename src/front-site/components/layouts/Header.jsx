import Head from "../SEO/Head";
import NavBar from "./NavBar";
import logo from "../../assets/front/images/logo-small.webp";

export default function Header() {
    return (
        <>
            <Head
                title="Sahel Books"
                description="وصف الموقع"
                keywords="كتب, ملخصات, تعليم"
                image={logo}
            />
            <NavBar />
        </>
    )
}
