import { useTranslation } from "react-i18next";
import { questions } from "../../database/affiliate";
import $affiliateImg from "../../assets/front/images/affiliate_home.webp";
import $circle from "../../assets/front/images/circle.webp";
import $orangeCircle1 from "../../assets/front/images/orangeCircle1.webp";
import $orangeCircle2 from "../../assets/front/images/orangeCircle2.webp";
import $orangeCircle3 from "../../assets/front/images/orangeCircle3.webp";
import $register_screen from "../../assets/front/images/register_screen.svg";
import $announce_screen from "../../assets/front/images/announce_screen.svg";
import $money_bag from "../../assets/front/images/money_bag.svg";
import $percentage from "../../assets/front/images/percentage.svg";
import $advantag from "../../assets/front/images/advantag.svg";
import $support from "../../assets/front/images/support.svg";
import $checkHands from "../../assets/front/images/checkHands.svg";

export default function AffiliatePage() {
    const { t, i18n } = useTranslation("common");

    return (
      <>
        {/* ================= HERO SECTION ================= */}
        <section className="hero-section mt-10 position-relative">
          <div className="pageHead_img">
            <img
              alt="circle"
              loading="eager"
              src={$circle}
              className="img-fluid"
            />
          </div>

          <div
            className="circleImg"
            style={{ position: "absolute", left: "60px", bottom: "55px" }}
          >
            <img
              alt="circle"
              loading="eager"
              src={$orangeCircle1}
              className="img-fluid"
            />
          </div>

          <div
            className="circleImg"
            style={{ position: "absolute", left: "120px", bottom: "40px" }}
          >
            <img
              alt="circle"
              loading="eager"
              src={$orangeCircle2}
              className="img-fluid"
            />
          </div>

          <div
            className="circleImg"
            style={{ position: "absolute", left: "125px", bottom: "100px" }}
          >
            <img
              alt="circle"
              loading="eager"
              src={$orangeCircle3}
              className="img-fluid"
            />
          </div>

          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-6 col-md-8 mx-md-auto offset-xl-2 order-xl-1 order-lg-1 order-2 mb-4">
                <div>
                  <div className="fetName">
                    <h1 className="hero-head">
                      {t("affiliate.Earn_Lifetime")}
                    </h1>

                    <p className="my-4 hero-par">
                      {t("affiliate.hero_paragraph")}
                    </p>

                    <a
                      className="btn btn-theme btn-sm dashCreateBtn px-10 my-4"
                      href="/affiliate-request"
                    >
                      {t("affiliate.earn_now")}
                    </a>
                  </div>

                  <div className="feature-wrapper">
                    <div className="number-wrapper">
                      <div className="number-large">20%</div>
                      <div className="number-text">{t("affiliate.text1")}</div>
                    </div>

                    <div className="line-break"></div>

                    <div className="number-wrapper">
                      <div className="number-large">15%</div>
                      <div className="number-text">{t("affiliate.text2")}</div>
                    </div>
                  </div>

                  <div className="commission-wrapper d-none">
                    <div className="number-wrapper">
                      <i className="fa fa-info-circle"></i>
                      <div className="number-text primary-color mx-2">
                        {t("affiliate.commession_wrapper")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-5 col-lg-6 col-md-8 mx-md-auto order-xl-2 order-lg-2 order-1 mb-4">
                <div className="fetImg shadow" style={{ borderRadius: "15px" }}>
                  <img
                    loading="eager"
                    alt="cover"
                    src={$affiliateImg}
                    width="100%"
                    height="auto"
                    className="img-fluid roundImg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= STEPS SECTION ================= */}
        <section className="aboutInv py-5 position-relative">
          <div
            className="circleImg"
            style={{ position: "absolute", left: "60px", bottom: "55px" }}
          >
            <img
              alt="circle"
              loading="eager"
              src={$orangeCircle1}
              className="img-fluid"
            />
          </div>

          <div
            className="circleImg"
            style={{ position: "absolute", left: "120px", bottom: "40px" }}
          >
            <img
              alt="circle"
              loading="eager"
              src={$orangeCircle2}
              className="img-fluid"
            />
          </div>

          <div
            className="circleImg"
            style={{ position: "absolute", left: "125px", bottom: "100px" }}
          >
            <img
              alt="circle"
              loading="eager"
              src={$orangeCircle3}
              className="img-fluid"
            />
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-7 mx-auto text-center">
                <h2>{t("affiliate.steps_head")}</h2>
                <p className="my-4">{t("affiliate.steps_content")}</p>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-xl-4 col-lg-4 col-md-6 mt-4">
                <div className="card">
                  <div className="card-icon bg_blue">
                    <img
                      loading="lazy"
                      src={$register_screen}
                      alt="register"
                      className="img-fluid"
                      width="50px"
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">
                      {t("affiliate.steps_card1_text")}
                    </h3>
                    <p className="card-text my-3">
                      {t("affiliate.steps_card1_content")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6 mt-4">
                <div className="card">
                  <div className="card-icon bg_orange">
                    <img
                      loading="lazy"
                      src={$announce_screen}
                      alt="register"
                      className="img-fluid"
                      width="50px"
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">
                      {t("affiliate.steps_card2_text")}
                    </h3>
                    <p className="card-text my-3">
                      {t("affiliate.steps_card2_content")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6 mt-4">
                <div className="card">
                  <div className="card-icon bg_green">
                    <img
                      loading="lazy"
                      src={$money_bag}
                      alt="register"
                      className="img-fluid"
                      width="50px"
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">
                      {t("affiliate.steps_card3_text")}
                    </h3>
                    <p className="card-text my-3">
                      {t("affiliate.steps_card3_content")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-lg-12 text-center">
                <a
                  className="btn btn-theme btn-sm dashCreateBtn px-10 my-4"
                  href="/affiliate-request"
                >
                  {t("affiliate.earn_now")}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PROGRAM SECTION ================= */}
        <section className="aboutAff py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 mx-auto text-center">
                <h2>{t("affiliate.prog_head")}</h2>
                <p className="mt-4 mb-5">{t("affiliate.prog_content")}</p>
              </div>
            </div>

            <div
              className="row mt-5 justify-content-center"
              style={{ rowGap: "75px" }}
            >
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="feature-card text-center">
                  <div className="icon-wrapper mb-3 bg_mintGreen">
                    <img
                      loading="lazy"
                      src={$percentage}
                      alt="percentage"
                      className="img-fluid"
                      width="35px"
                    />
                  </div>
                  <div className="cardText">
                    <h3 className="feature-title my-3">
                      {t("affiliate.prog_card1_head")}
                    </h3>
                    <p className="feature-paragraph">
                      {t("affiliate.prog_card1_text")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="feature-card text-center">
                  <div className="icon-wrapper mb-3 bg_violet">
                    <img
                      loading="lazy"
                      src={$advantag}
                      alt="advantag"
                      className="img-fluid"
                      width="35px"
                    />
                  </div>
                  <div className="cardText">
                    <h3 className="feature-title my-3">
                      {t("affiliate.prog_card2_head")}
                    </h3>
                    <p className="feature-paragraph">
                      {t("affiliate.prog_card2_text")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="feature-card text-center">
                  <div className="icon-wrapper mb-3 bg_babyBlue">
                    <img
                      loading="lazy"
                      src={$support}
                      alt="support"
                      className="img-fluid"
                      width="35px"
                    />
                  </div>
                  <div className="cardText">
                    <h3 className="feature-title my-3">
                      {t("affiliate.prog_card3_head")}
                    </h3>
                    <p className="feature-paragraph">
                      {t("affiliate.prog_card3_text")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="feature-card text-center bg_skyBlue">
                  <div className="icon-wrapper mb-3 bg_skyBlue">
                    <img
                      loading="lazy"
                      src={$checkHands}
                      alt="checkHands"
                      className="img-fluid"
                      width="35px"
                    />
                  </div>
                  <div className="cardText">
                    <h3 className="feature-title my-3">
                      {t("affiliate.prog_card4_head")}
                    </h3>
                    <p className="feature-paragraph">
                      {t("affiliate.prog_card4_text")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-lg-12 text-center">
                <a
                  className="btn btn-theme btn-sm dashCreateBtn px-10 my-4"
                  href="/affiliate-request"
                >
                  {t("affiliate.earn_now")}
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* ===== FAQS Section ===== */}
        {questions.length > 0 && (
          <section className="homeFaqs py-5 mb-5 position-relative">
            <div className="container">
              <div className="row text-center">
                <div className="col-lg-8 col-md-12 ml-auto mr-auto">
                  <div className="section-title">
                    <h2 className="title">{t("front_home.inquiries")}</h2>
                    <p>{t("front_home.inq_desc")}</p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-10 col-lg-11 col-md-12 mx-auto">
                  <div id="accordionHome" className="accordion">
                    {questions.map((q, i) => (
                      <div className="card" key={q.id}>
                        <div className="card-header" id={`heading${i}`}>
                          <h2 className="mb-0 h6 faqsTiltle_container">
                            <a
                              role="button"
                              data-toggle="collapse"
                              data-target={`#collapse${i}`}
                              className={i !== 0 ? "collapsed" : ""}
                            >
                              <p className="mb-0 faqsTitle">
                                <strong className="faq_icon">
                                  <i
                                    className={q.faqIcon || "fas fa-users"}
                                  ></i>
                                </strong>
                                <strong className="mx-1">
                                  {q.title[i18n.language]}
                                </strong>
                              </p>

                              <span className="faqOptions">
                                <i className="fas fa-angle-down"></i>
                                <i className="fas fa-angle-up"></i>
                              </span>
                            </a>
                          </h2>
                        </div>

                        <div
                          id={`collapse${i}`}
                          className={`collapse ${i === 0 ? "show" : ""}`}
                          data-parent="#accordionHome"
                        >
                          <div
                            className="card-body"
                            dangerouslySetInnerHTML={{
                              __html: q.details[i18n.language]
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </>
    );
}
