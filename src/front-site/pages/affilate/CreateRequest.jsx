import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import affiliateImg from "../../assets/front/images/affiliate_register.webp";
import { settings } from "../../database/settings";
import PhoneInput from "../../components/PhoneInput";

const AffiliateRegister = () => {
    const { t, i18n } = useTranslation('common');

    /* نفس سلوك text_dir() */
    useEffect(() => {
        const dir = i18n.language === "ar" ? "rtl" : "ltr";
        document.documentElement.dir = dir;
        document.documentElement.lang = i18n.language;
    }, [i18n.language]);

    if (settings.enable_registration === false) {
        return (
            <div className="page-content">
                <div className="col-md-12 text-center">
                    <h2 className="text-danger p-200">
                        {t("affiliate.registration-system-is-disabled")}!
                    </h2>
                </div>
            </div>
        );
    }

    return (
        <div className="page-content">
            <section className="login py-0">
                <div className="section_bg py-5">
                    <div className="content_bg mt-5 py-5">
                        <div className="container">
                            <div className="spacer"></div>

                            <div className="account_area row justify-content-md-center mt-0">
                                {/* LEFT */}
                                <div
                                    className="col-xl-7 col-lg-7 col-md-12 mb-3"
                                    data-aos="fade-right"
                                >
                                    <div className="contact_box h-100">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="section-title mb-5">
                                                    <h2 style={{ fontSize: "18px" }}>
                                                        {t("affiliate.affiliate_join")}
                                                    </h2>
                                                    <p>{t("affiliate.affiliate_support")}</p>
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <form className="authorizationform authorizationform--shadow leave_con">
                                                    <div className="messages"></div>

                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>{t("affiliate.first_name")}</label>
                                                                <input
                                                                    type="text"
                                                                    name="fname"
                                                                    className="form-control"
                                                                    placeholder={t("affiliate.enter_fname")}
                                                                />
                                                                <div className="invalid-feedback-fname text-danger small"></div>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>{t("affiliate.last_name")}</label>
                                                                <input
                                                                    type="text"
                                                                    name="lname"
                                                                    className="form-control"
                                                                    placeholder={t("affiliate.enter_lname")}
                                                                />
                                                                <div className="invalid-feedback-lname text-danger small"></div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>{t("affiliate.email")}</label>
                                                                <input
                                                                    type="email"
                                                                    name="email"
                                                                    className="form-control"
                                                                    placeholder={t("affiliate.enter_email")}
                                                                />
                                                                <div className="invalid-feedback-email text-danger small"></div>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <div className="form-group contactPhone">
                                                                <label>{t("front_home.phone")} </label>
                                                                <PhoneInput
                                                                    pageType="Request" // أو "Register"
                                                                    onChange={(fullNumber) => {
                                                                        console.log(
                                                                            "Full phone number:",
                                                                            fullNumber
                                                                        );
                                                                        // هنا تقدر تحط الرقم في state أو form data
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <label>{t("affiliate.address")}</label>
                                                                <textarea
                                                                    name="address"
                                                                    className="form-control"
                                                                    rows="4"
                                                                    placeholder={t("affiliate.enter_message")}
                                                                />
                                                                <div className="invalid-feedback-address text-danger small"></div>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-12 mt-2">
                                                            <div className="btnBox">
                                                                <button
                                                                    className="password-strength__submit btn dashCreateBtn sendBtn text-white loader_btn"
                                                                    style={{ width: "100%" }}
                                                                    disabled
                                                                >
                                                                    {t("affiliate.affiliate_register")}
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* RIGHT */}
                                <div
                                    className="col-xl-5 col-lg-5 col-md-12 mb-3 d-none d-lg-block"
                                    data-aos="fade-left"
                                >
                                    <img
                                        loading="eager"
                                        width="100%"
                                        height="auto"
                                        src={affiliateImg}
                                        alt="background"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* نفس الـ CSS */}
            <style>{`
        .invalid-feedback-fname,
        .invalid-feedback-lname,
        .invalid-feedback-email,
        .invalid-feedback-phone,
        .invalid-feedback-address {
          display: block;
          margin: 10px 0;
          font-size: 12px;
          color: #dc3545;
        }
      `}</style>
        </div>
    );
};

export default AffiliateRegister;
