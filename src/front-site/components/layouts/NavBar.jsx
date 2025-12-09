import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { settings, settingsLang } from "../../database/settings";
import useAuth from "../../hooks/useAuth";
import { scrollToSection } from "../../lib/scroll";
import { useTranslation } from "react-i18next";
import { setLang } from "../../i18n/i18n";

export default function NavBar() {
  const { t, i18n } = useTranslation("common");
  const currentLang = i18n.language;
  const { isAdmin, isDeveloper, isUser, previewMode } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const goToFeatures = () => {
    if (location.pathname !== "/") {
      navigate("/");
      scrollToSection("features");
    } else {
      scrollToSection("features");
    }
  };

  return (
    <header id="site-header" className="header header-2">
      {previewMode && (
        <div className="alert alert-warning text-center mb-0">
          {t("preview_mode")}
        </div>
      )}
      <div className="container-fluid mt-lg-2 mt-md-2 mt-0 px-lg-4 px-md-4 px-0">
        <nav className="navbar navbar-expand-lg">
          <div>
            <button
              className="navbar-toggler px-0"
              type="button"
              data-toggle="collapse"
              data-target="#navbarContainer"
              aria-controls="navbarContainer"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon d-flex justify-content-center align-items-center">
                <i
                  className="fas fa-bars"
                  style={{ color: "#333" }}
                  aria-hidden="true"
                ></i>
              </span>
            </button>
          </div>
          <NavLink
            id="logo-white-img"
            className="navbar-brand img-center img-fluid"
            to="/"
          >
            <img src={settings.logo} alt={settingsLang.site_name} width="123" />
          </NavLink>

          <div
            className="collapse navbar-collapse order-lg-2 order-md-3 order-3"
            id="navbarContainer"
          >
            <ul className="navbar-nav newNav mx-auto">
              {/* Home */}
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  {t("nav.home")}
                </NavLink>
              </li>

              {/* Features (Section link) */}
              <li className="nav-item">
                <span
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={goToFeatures}
                >
                  {t("nav.features")}
                </span>
              </li>

              {/* eInvoice */}
              <li className="nav-item">
                <NavLink to="/e_invoice" className="nav-link">
                  {t("nav.eInvoice")}
                </NavLink>
              </li>

              {/* Pricing */}
              <li className="nav-item">
                <NavLink to="/pricing" className="nav-link">
                  {t("nav.pricing")}
                </NavLink>
              </li>

              {/* Blog */}
              {settings.enable_blog && (
                <li className="nav-item">
                  <NavLink to="/blog" className="nav-link">
                    {t("nav.blogs")}
                  </NavLink>
                </li>
              )}

              {/* Contact */}
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  {t("nav.contact")}
                </NavLink>
              </li>
              {/* ===== Auth Links ===== */}
              {isAdmin && (
                <>
                  <li className="nav-item d-none">
                    <NavLink
                      to="/admin/dashboard"
                      className="btn dashCreateBtn mb-3"
                    >
                      {t("nav.dashboard")}
                    </NavLink>
                  </li>

                  <li className="nav-item d-md-none">
                    <NavLink to="/auth/logout" className="btn signLogBtn mb-3">
                      {t("nav.logout")}
                    </NavLink>
                  </li>
                </>
              )}

              {isDeveloper && (
                <>
                  <li className="nav-item d-none">
                    <NavLink
                      to="/admin/developer/dashboard"
                      className="btn dashCreateBtn mb-3"
                    >
                      {t("nav.dashboard")}
                    </NavLink>
                  </li>

                  <li className="nav-item d-md-none">
                    <NavLink to="/auth/logout" className="btn signLogBtn mb-3">
                      {t("nav.logout")}
                    </NavLink>
                  </li>
                </>
              )}

              {isUser && (
                <>
                  <li className="nav-item d-none">
                    <NavLink
                      to="/admin/dashboard/business"
                      className="btn dashCreateBtn mb-3"
                    >
                      {t("nav.dashboard")}
                    </NavLink>
                  </li>

                  <li className="nav-item d-md-none">
                    <NavLink to="/auth/logout" className="btn signLogBtn mb-3">
                      {t("nav.logout")}
                    </NavLink>
                  </li>
                </>
              )}

              {!isAdmin && !isDeveloper && !isUser && (
                <>
                  <li className="nav-item d-md-none">
                    <NavLink to="/login" className="btn signLogBtn mb-3">
                      {t("nav.login")}
                    </NavLink>
                  </li>
                  <li className="nav-item d-none">
                    <NavLink to="/register" className="btn dashCreateBtn mb-3">
                      {t("nav.register")}
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="order-lg-3 order-md-2 order-2">
            <div className="d-flex navOption_btn">
              {/* Auth logic */}
              {isAdmin && (
                <>
                  <NavLink
                    to="/admin/dashboard"
                    className="btn btn-theme btn-sm dashCreateBtn"
                  >
                    {t("nav.dashboard")}
                  </NavLink>
                  <NavLink
                    to="/auth/logout"
                    className="btn btn-theme btn-sm signLogBtn d-md-block d-none"
                  >
                    {t("nav.logout")}
                  </NavLink>
                </>
              )}

              {isUser && (
                <>
                  <NavLink
                    to="/admin/developer/dashboard"
                    className="btn btn-theme btn-sm dashCreateBtn"
                  >
                    {t("nav.dashboard")}
                  </NavLink>
                  <NavLink
                    to="/auth/logout"
                    className="btn btn-theme btn-sm signLogBtn d-md-block d-none"
                  >
                    {t("nav.logout")}
                  </NavLink>
                </>
              )}

              {!isAdmin && !isUser && (
                <>
                  <NavLink
                    to="/register"
                    className="btn btn-theme btn-sm dashCreateBtn"
                  >
                    {t("nav.register")}
                  </NavLink>
                  <NavLink
                    to="/login"
                    className="btn btn-theme btn-sm signLogBtn d-md-block d-none"
                  >
                    {t("nav.login")}
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
