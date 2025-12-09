import { useTranslation } from "react-i18next";
import { setLang } from "../../i18n/i18n";
import PhoneInput from "../../components/PhoneInput";

export default function Home() {
  const { t, i18n } = useTranslation("common");
  const currentLang = i18n.language;
  return (
    <div className="page-content">
      <section className="contact-1 p-0 contactCenter">
        <div className="section_bg py-5">
          <div className="content_bg mt-5 py-5">
            <div className="container">
              <div className="row">
                <div className="col-xl-5 col-lg-5 col-md-12 order-lg-1 order-md-2 order-2 mb-3">
                  <div className="contact_box h-100">
                    <div className="contact-media">
                      <div className="mediaicon">
                        <i className="fas fa-building"></i>
                      </div>
                      <div className="mediaBody">
                        <strong>{t("front_home.company")}</strong>
                        <span>سهل بوكس ش.ذ.م.م</span>
                      </div>
                    </div>
                    <div className="contact-media">
                      <div className="mediaicon">
                        <i className="fas fa-map-marker"></i>
                      </div>
                      <div className="mediaBody">
                        <strong>{t("front_home.address")}</strong>
                        <span>
                          32 مصطفى النحاس، المنطقة السادسة، مدينة نصر القاهرة،
                          جمهورية مصر العربية
                        </span>
                      </div>
                    </div>
                    <div className="contact-media">
                      <div className="mediaicon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="mediaBody">
                        <strong>{t("front_home.email")}</strong>
                        <span>
                          <a href="mailto:info@sahelbooks.com">
                            info@sahelbooks.com
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="contact-media">
                      <div className="mediaicon">
                        <i className="fas fa-phone-volume"></i>
                      </div>
                      <div className="mediaBody">
                        <strong>{t("front_home.phone")}</strong>
                        <span>
                          <a
                            href="tel:+20 112 8468612"
                            style={{
                              direction: "ltr",
                              display: "inline-block",
                            }}
                          >
                            +20 112 8468612
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="contact-media">
                      <div className="mediaicon">
                        <i className="fab fa-whatsapp"></i>
                      </div>
                      <div className="mediaBody">
                        <strong>{t("front_home.whatsapp")}</strong>
                        <span>
                          <a href="https://wa.me/966115201525" target="_b">
                            تواصل معنا على واتس آب
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-7 col-md-12 order-lg-2 order-md-1 order-1 mb-3">
                  <div className="contact_box h-100">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="section-title mb-5">
                          <h2>{t("nav.contact")}</h2>
                          <p>{t("front_home.happy_support")}</p>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <form
                          id="contact-form"
                          method="post"
                          action="<?php echo url('home/send_message'); ?>"
                        >
                          <div className="messages"></div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>{t("front_home.first_name")}</label>
                                <input
                                  id="form_name"
                                  type="text"
                                  name="fname"
                                  className="form-control"
                                  placeholder={t("front_home.enter_fname")}
                                  required="required"
                                  data-error={t("front_home.enter_fname")}
                                />
                                <div className="help-block with-errors"></div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>{t("front_home.last_name")}</label>
                                <input
                                  id="form_name"
                                  type="text"
                                  name="lname"
                                  className="form-control"
                                  placeholder={t("front_home.enter_lname")}
                                  required="required"
                                  data-error={t("front_home.enter_lname")}
                                />
                                <div className="help-block with-errors"></div>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>{t("front_home.email")}</label>
                                <input
                                  id="form_email"
                                  type="email"
                                  name="email"
                                  className="form-control"
                                  placeholder={t("front_home.enter_email")}
                                  required="required"
                                  data-error={t("front_home.enter_email")}
                                  pattern="[\-a-zA-Z0-9~!$%^&amp;*_=+\}\{'?]+(\.[\-a-zA-Z0-9~!$%^&amp;*_=+\}\{'?]+)*@[a-zA-Z0-9_][\-a-zA-Z0-9_]*(\.[\-a-zA-Z0-9_]+)*\.[cC][oO][mM](:[0-9]{1,5})?"
                                />
                                <div className="help-block with-errors"></div>
                              </div>
                            </div>
                            {/* <div className="col-md-6 ">
                              <div className="form-group contactPhone">
                                <label>{t("front_home.phone")} </label>
                                <input
                                  id="phone_intltelinput"
                                  type="tel"
                                  name="phone"
                                  className="form-control"
                                  placeholder={t("front_home.enter_phone")}
                                  data-error={t("front_home.enter_phone")}
                                  required
                                />
                                <span
                                  id="valid-msg"
                                  className="text-success d-none"
                                >
                                  ✓ Valid
                                </span>
                                <span
                                  id="error-msg"
                                  className="text-danger d-none"
                                ></span>
                                <div className="help-block with-errors"></div>
                              </div>
                            </div> */}
                            <div className="col-md-6 ">
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
                                <label>{t("front_home.message")}</label>
                                <textarea
                                  id="form_message"
                                  name="message"
                                  className="form-control"
                                  placeholder={t("front_home.enter_message")}
                                  rows="4"
                                  required="required"
                                  data-error={t("front_home.enter_message")}
                                ></textarea>
                                <div className="help-block with-errors"></div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="d-flex flex-wrap"
                                style={{ gap: "10px" }}
                              >
                                <div className="checkBox">
                                  <input
                                    type="radio"
                                    name="contact_type"
                                    id={t("front_home.inquiry")}
                                    value="1"
                                  />
                                  <label htmlFor={t("front_home.inquiry")}>
                                    {t("front_home.inquiry")}
                                  </label>
                                </div>
                                <div className="checkBox">
                                  <input
                                    type="radio"
                                    name="contact_type"
                                    value="2"
                                    id={t("front_home.compliant")}
                                  />
                                  <label htmlFor={t("front_home.compliant")}>
                                    {t("front_home.compliant")}
                                  </label>
                                </div>
                                <div className="checkBox">
                                  <input
                                    type="radio"
                                    name="contact_type"
                                    value="3"
                                    id={t("front_home.suggestion")}
                                  />
                                  <label htmlFor={t("front_home.suggestion")}>
                                    {t("front_home.suggestion")}
                                  </label>
                                </div>
                                <div className="checkBox">
                                  <input
                                    type="radio"
                                    name="contact_type"
                                    value="4"
                                    id={t("front_home.contact_request")}
                                  />
                                  <label
                                    htmlFor={t("front_home.contact_request")}
                                  >
                                    {t("front_home.contact_request")}
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12 mt-2">
                              <div className="btnBox">
                                <button
                                  className="btn dashCreateBtn sendBtn text-white"
                                  type="submit"
                                  role="button"
                                  data-text="{t('contact.send')}"
                                  disabled="disabled"
                                  style={{ width: "100%" }}
                                >
                                  {t("contact.send")}
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
