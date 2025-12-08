import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { settings, settingsLang } from "../../database/settings";
import { pages } from "../../database/pages";
import { languages } from "../../database/languages";
import { scrollToSection } from "../../lib/scroll";
import { setLang } from "../../i18n/i18n";

export default function Footer() {
    const dir = document.documentElement.dir;
    const { t, i18n } = useTranslation("common");
    const location = useLocation();
    const navigate = useNavigate();

    const goToSection = (id) => {
        if (location.pathname !== "/") {
            navigate("/");
            scrollToSection(id);
        } else {
            scrollToSection(id);
        }
    };

    return (
      <footer className="footer dark-gray-bg">
        <div className="primary-footer">
          <div className="container">
            <div className="row">
              {/* ===== about + logo ===== */}
              <div
                className={`col-lg-4 col-md-6 ${
                  dir === "rtl" ? "offset-lg-1" : ""
                } mb-5`}
              >
                <div className="footerSub_box">
                  <div className="footer-logo">
                    <img
                      src={settings.logo}
                      alt={settingsLang.site_name}
                      width="145"
                      height="51"
                      style={{ objectFit: "contain" }}
                    />
                  </div>

                  <p>{settingsLang.footer_about}</p>

                  {/* newsletter */}
                  <div className="newsLetter_box">
                    <p>{t("front_home.newsletter_sub")}</p>

                    <form className="group">
                      <input
                        type="email"
                        className="email newsLetter_input"
                        placeholder={t("front_home.enter_email")}
                      />
                      <button type="submit" className="newsLetter_btn">
                        <i className="fas fa-paper-plane" />
                        <span className="sr-only">
                          {t("front_home.news_letter")}
                        </span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              {/* ===== quick links ===== */}
              <div
                className={`col-lg-2 col-md-6 ${
                  dir === "ltr" ? "offset-lg-1" : ""
                } col-6 footer-list mb-5`}
              >
                <h2 className="footerHead mb-4">
                  {t("front_home.quick_links")}
                </h2>

                <ul className="list-unstyled">
                  <li>
                    <NavLink to="/">{t("nav.home")}</NavLink>
                  </li>
                  <li>
                    <button
                      className="link-btn"
                      onClick={() => goToSection("features")}
                    >
                      {t("nav.features")}
                    </button>
                  </li>
                  <li>
                    <NavLink to="/pricing">{t("nav.pricing")}</NavLink>
                  </li>

                  {settings.enable_blog && (
                    <li>
                      <NavLink to="/blog">{t("nav.blogs")}</NavLink>
                    </li>
                  )}

                  <li>
                    <NavLink to="/contact">{t("nav.contact")}</NavLink>
                  </li>
                  <li>
                    <NavLink to="/affiliate">
                      {t("front_home.affiliate")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/e_invoice">
                      {t("nav.eInvoice")}
                      <span class="home_newFeature">
                        {t("front_home.new_feature")}
                      </span>
                    </NavLink>
                  </li>
                </ul>
              </div>

              {/* ===== info pages ===== */}
              <div className="col-lg-3 col-md-6 col-6 footer-list mb-5">
                <h2 className="footerHead mb-4">{t("front_home.info")}</h2>

                <ul className="list-unstyled">
                  {pages.map((page) => (
                    <li key={page.id}>
                      <NavLink to={`/page/${page.slug}`}>
                        {t(page.title)}
                      </NavLink>
                    </li>
                  ))}

                  {settings.enable_faq && (
                    <li>
                      <NavLink to="/faqs">{t("front_home.faqs")}</NavLink>
                    </li>
                  )}

                  <li>
                    <NavLink to="/help">{t("front_home.help_center")}</NavLink>
                  </li>
                </ul>
              </div>

              {/* ===== social ===== */}
              <div className="col-lg-2 col-md-6 footer-list">
                <h2 className="footerHead mb-4">{t("front_home.follow_us")}</h2>

                <ul className="list-unstyled">
                  {settings.facebook && (
                    <li>
                      <a href={`https://${settings.facebook}`} target="_blank">
                        <i className="fab fa-facebook-f mx-1" />
                        {t("front_home.facebook")}
                      </a>
                    </li>
                  )}
                  {settings.instagram && (
                    <li>
                      <a href={`https://${settings.instagram}`} target="_blank">
                        <i className="fab fa-instagram mx-1" />
                        {t("front_home.instagram")}
                      </a>
                    </li>
                  )}
                  {settings.twitter && (
                    <li>
                      <a href={`https://${settings.twitter}`} target="_blank">
                        <i className="fab fa-twitter mx-1" />
                        {t("front_home.twitter")}
                      </a>
                    </li>
                  )}
                  {settings.linkedin && (
                    <li>
                      <a href={`https://${settings.linkedin}`} target="_blank">
                        <i className="fab fa-linkedin mx-1" />
                        {t("front_home.linkedin")}
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ===== secondary footer ===== */}
        <div className="secondary-footer">
          <div className="container">
            <div className="d-flex align-items-center">
              {/* language */}
              {settings.enable_multilingual && (
                <div className="selectCategory">
                  <div className="categories">
                    <i className="icon-globe" style={{ fontSize: "14px" }}></i>
                    <p className="mb-0" id="selectText">
                      {i18n.language}
                    </p>
                    <i
                      className="fa fa-chevron-down"
                      aria-hidden="true"
                      id="IconArrow"
                    ></i>
                    <ul id="lists">
                      {languages.map((lang) => (
                        <li key={lang.slug}>
                          <button onClick={() => setLang(lang.slug)}>
                            {lang.short_name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* copyright */}
              <div className="w-100 text-center">
                <span>
                  {settingsLang.copyright} © {new Date().getFullYear()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}
