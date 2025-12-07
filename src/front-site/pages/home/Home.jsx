export default function Home() {
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
                                                <strong>شركة</strong>
                                                <span>سهل بوكس ش.ذ.م.م</span>
                                            </div>
                                        </div>
                                        <div className="contact-media">
                                            <div className="mediaicon">
                                                <i className="fas fa-map-marker"></i>
                                            </div>
                                            <div className="mediaBody">
                                                <strong>العنوان</strong>
                                                <span>32 مصطفى النحاس، المنطقة السادسة، مدينة نصر القاهرة، جمهورية مصر العربية</span>
                                            </div>
                                        </div>
                                        <div className="contact-media">
                                            <div className="mediaicon">
                                                <i className="fas fa-envelope"></i>
                                            </div>
                                            <div className="mediaBody">
                                                <strong>البريد الإلكتروني
                                                </strong>
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
                                                <strong>الهاتف
                                                </strong>
                                                <span><a
                                                    href="tel:+20 112 8468612">+20 112 8468612</a></span>
                                            </div>
                                        </div>
                                        <div className="contact-media">
                                            <div className="mediaicon">
                                                <i className="fab fa-whatsapp"></i>
                                            </div>
                                            <div className="mediaBody">
                                                <strong>واتساب
                                                </strong>
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
                                                    <h2>اتصل بنا
                                                    </h2>
                                                    <p>للحصول على المزيد من المعلومات حول خدماتنا ومنتجاتنا أو تقديم شكاية، المرجو التواصل معنا عبر ملء الاستمارة الآتية</p>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <form id="contact-form" method="post" action="<?php echo url('home/send_message'); ?>">
                                                    <div className="messages"></div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>الاسم الأول</label>
                                                                <input id="form_name" type="text" name="fname" className="form-control"
                                                                    placeholder="<?php echo trans('front_home.enter-your-fname'); ?>" required="required"
                                                                    data-error="<?php echo trans('front_home.enter-your-fname'); ?>" />
                                                                    <div className="help-block with-errors"></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>الاسم الآخير</label>
                                                                <input id="form_name" type="text" name="lname" className="form-control"
                                                                    placeholder="<?php echo trans('front_home.enter-your-lname'); ?>" required="required"
                                                                    data-error="<?php echo trans('front_home.enter-your-lname'); ?>" />
                                                                    <div className="help-block with-errors"></div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>البريد الإلكتروني</label>
                                                                <input id="form_email" type="email" name="email"
                                                                    className="form-control" placeholder="<?php echo helper_trans('enter-your-email'); ?> "
                                                                    required="required" data-error="<?php echo helper_trans('enter-email'); ?> "
                                                                    pattern="[\-a-zA-Z0-9~!$%^&amp;*_=+\}\{'?]+(\.[\-a-zA-Z0-9~!$%^&amp;*_=+\}\{'?]+)*@[a-zA-Z0-9_][\-a-zA-Z0-9_]*(\.[\-a-zA-Z0-9_]+)*\.[cC][oO][mM](:[0-9]{1,5})?" />
                                                                    <div className="help-block with-errors"></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 ">
                                                            <div className="form-group contactPhone">
                                                                <label>الهاتف </label>
                                                                <input id="phone_intltelinput" type="tel" name="phone"
                                                                    className="form-control" placeholder="<?php echo helper_trans('phone'); ?>  "
                                                                    data-error=" <?php echo helper_trans('enter-your-phone'); ?> " required />
                                                                    <span id="valid-msg" className="text-success d-none">✓ Valid</span>
                                                                    <span id="error-msg" className="text-danger d-none"></span>
                                                                    <div className="help-block with-errors"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <label>رسالة</label>
                                                                <textarea id="form_message" name="message" className="form-control" placeholder="<?php echo helper_trans('write-your-message'); ?>  " rows="4"
                                                                    required="required" data-error="<?php echo helper_trans('write-your-message'); ?> "></textarea>
                                                                <div className="help-block with-errors"></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="d-flex flex-wrap">
                                                                <div className="checkBox">
                                                                    <input type="radio" name="contact_type"
                                                                        id="<?php echo trans('front_home.inquiry'); ?>" value="1" />
                                                                        <label for="<?php echo trans('front_home.inquiry'); ?>">استفسار</label>
                                                                </div>
                                                                <div className="checkBox">
                                                                    <input type="radio" name="contact_type"
                                                                        value="2" id="<?php echo trans('front_home.compliant'); ?>" />
                                                                        <label for="<?php echo trans('front_home.compliant'); ?>">شكوى</label>
                                                                </div>
                                                                <div className="checkBox">
                                                                    <input type="radio" name="contact_type"
                                                                        value="3" id="<?php echo trans('front_home.suggestion'); ?>" />
                                                                        <label for="<?php echo trans('front_home.suggestion'); ?>">اقتراح</label>
                                                                </div>
                                                                <div className="checkBox">
                                                                    <input type="radio" name="contact_type"
                                                                        value="4" id="<?php echo trans('front_home.contact_request'); ?>" />
                                                                        <label for="<?php echo trans('front_home.contact_request'); ?>">طلب اتصال</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 mt-2">
                                                            <div className="btnBox">
                                                                <button className="btn dashCreateBtn sendBtn text-white" type="submit"
                                                                    role="button" data-text="<?php echo helper_trans('send'); ?> "
                                                                     disabled='disabled'>
                                                                    ارسل
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
                </div >
            </section >

        </div >

    );
}
