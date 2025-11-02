(function ($) {
    "use strict";

    var loading_html =
        '<div class="container text-center" style="padding: 200px"><div class="spinner-md"></div></div>';
    var loader_md =
        '<div class="container text-center" style="padding: 100px"><div class="spinner-md"></div></div>';
    var loader_btn =
        '<div class="spinners"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>';
    var base_url = "";
    if (window.location.origin.includes("localhost")) {
        // var base_url = $('#base_url').val();
        var getUrl = window.location;
        base_url =
            getUrl.protocol +
            "//" +
            getUrl.host +
            "/" +
            getUrl.pathname.split("/")[1] +
            "/";
    } else {
        base_url = window.location.origin + "/";
    }
    // console.log(base_url);

    var msg_opps = $(".msg_opps").val();
    var msg_error = $(".msg_error").val();
    var msg_success = $(".msg_success").val();
    var msg_sorry = $(".msg_sorry").val();
    var msg_yes = $(".msg_yes").val();
    var msg_ok = $(".msg_ok").val();
    var msg_return_home = $(".msg_return_home").val();
    var msg_login = $(".msg_login").val();
    var msg_congratulations = $(".msg_congratulations").val();
    var msg_something_wrong = $(".msg_something_wrong").val();
    var msg_try_again = $(".msg_try_again").val();
    var msg_valid_user_msg = $(".msg_valid_user_msg").val();
    var msg_password_reset_msg = $(".msg_password_reset_msg").val();
    var msg_password_reset_success_msg = $(
        ".msg_password_reset_success_msg"
    ).val();
    var msg_confirm_pass_not_match_msg = $(
        ".msg_confirm_pass_not_match_msg"
    ).val();
    var msg_old_password_doesnt_match = $(
        ".msg_old_password_doesnt_match"
    ).val();
    var msg_inserted = $(".msg_inserted").val();
    var msg_made_changes_not_saved = $(".msg_made_changes_not_saved").val();
    var msg_no_data_founds = $(".msg_no_data_founds").val();
    var msg_del_success = $(".msg_del_success").val();
    var msg_account_suspend_msg = $(".msg_account_suspend_msg").val();
    var msg_are_you_sure = $(".msg_are_you_sure").val();
    var msg_get_started = $(".msg_get_started").val();
    var msg_not_recover_file = $(".msg_not_recover_file").val();
    var msg_deleted_successfully = $(".msg_deleted_successfully").val();
    var msg_data_limit_over = $(".msg_data_limit_over").val();
    var msg_email_exist = $(".msg_email_exist").val();
    var msg_phone_exist = $(".msg_phone_exist").val();
    var msg_recaptcha_is_required = $(".msg_recaptcha_is_required").val();
    var msg_create = $(".msg_create").val();
    var request_send =
        "Thank you for your request, Our technical stuff will contact you as soon ad possible";
    var request_send = $(".request_msg").val();
    var needToConfirm = false;
    var form_original_data = $(".leave_con").serialize();
    var msg_wrong_access = $(".msg_wrong_access").val();
    var msg_not_active = $(".msg_not_active").val();
    var msg_account_suspend = $(".msg_account_suspend_msg").val();
    var msg_email_not_verified = $(".msg_email_not_verified").val();

    $('[data-toggle="tooltip"]').tooltip();

    $(".checkItem").on("click", function () {
        if ($(".checkItem").is(":checked")) {
            $(".multiple_delete_btn").show();
        } else {
            $(".multiple_delete_btn").hide();
        }
    });
    //check if change telephon input
    $("#phone_intltelinput").keyup(function () {
        // Check if password exists && strong
        if ($("#password").length)
            var strength = testPassw($("#password").val());
        else var strength = "Not-exists";
        if (
            $(".agree_btn").is(":checked") &&
            strength != "none" &&
            strength != "weak" &&
            $("#phone_intltelinput").val() !== "" &&
            !$("#error-msg").text() &&
            $("#valid-msg").text() == "✓ Valid"
        ) {
            $(".submit_btn").prop("disabled", false);
        } else {
            $(".submit_btn").prop("disabled", true);
        }
    });

    
        $("#phone_intltelinput2").keyup(function () {
               
        if (
            $("#phone_intltelinput2").val() !== "" &&
            !$("#error-msg2").text() &&
            $("#valid-msg2").text() == "✓ Valid"
        ) {
            $(".submit_btn").prop("disabled", false);
        } else {
    
            $(".submit_btn").prop("disabled", true);
        }
    });
    $("#password").keyup(function () {
        // Check if password exists && strong
        if ($("#password").length)
            var strength = testPassw($("#password").val());
        else var strength = "Not-exists";

        if(strength == 'strong' || strength == 'extra'){
            $('#passwordHelp').hide();
        }else{
            $('#passwordHelp').show();
        }
        if (
            $(".agree_btn").is(":checked") &&
            strength != "none" &&
            strength != "weak" &&
            $("#phone_intltelinput").val() !== "" &&
            !$("#error-msg").text() &&
            $("#valid-msg").text() == "✓ Valid"
        ) {
            $(".submit_btn").prop("disabled", false);
        } else {
            $(".submit_btn").prop("disabled", true);
        }
    });
    $(".agree_btn").on("click", function () {
        // Check if password exists && strong
        if ($("#password").length)
            var strength = testPassw($("#password").val());
        else var strength = "Not-exists";
        if (
            $(".agree_btn").is(":checked") &&
            strength != "none" &&
            strength != "weak" &&
            $("#phone_intltelinput").val() !== "" &&
            !$("#error-msg").text() &&
            $("#valid-msg").text() == "✓ Valid"
        ) {
            $(".submit_btn").prop("disabled", false);
        } else {
            $(".submit_btn").prop("disabled", true);
        }
    });

    $(".switch_payment").on("click", function () {
        var paymentVal = $(this).val();

        if (paymentVal == "paypal") {
            $(".paypal_area").show();
            $(".stripe_area").hide();
        } else {
            $(".paypal_area").hide();
            $(".stripe_area").show();
        }
    });

    function onErrorFun(data) {
        if (data) {
            if (data.responseJSON) {
                if (data.responseJSON.st) {
                    if (data.responseJSON.st == "redirect") {
                        // window.location.href = base_url;
                    }
                }
            }
        }
    }
    // end v2 functions
    $.ajaxSetup({
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },
    });

    $(document).on("click", ".inv-item", function () {
        var Id = $(this).attr("data-id");
        var customerData = $("#customer").val();
        if (customerData == "") {
            var customerId = 0;
        } else {
            var customerId = customerData;
        }

        var url =
            base_url + "admin/invoice/add_product/" + Id + "/" + customerId;
        $.post(
            url,
            { data: "value", csrf_test_name: csrf_token },
            function (json) {
                if (json.st == 1) {
                    $("#add_item").append(json.loaded);
                    $(".currency_wrapper").html(json.currency);
                }
            },
            "json"
        );
        return false;
    });

    $(document).on("click", ".package_btn", function () {
        form_original_data = $(".leave_con").serialize();
        var billType = $(".billing_type").val();
        var url = $(this).attr("href") + "/" + billType;

        $(".pricing_area").hide();
        $(".loader").html(loading_html);
        $.post(
            url,
            { data: "value", csrf_test_name: csrf_token },
            function (json) {
                if (json.st == 1) {
                    window.location.href = json.url;
                } else {
                    $(".pricing_area").show();
                }
            },
            "json"
        );
        return false;
    });

    $(document).on("click", ".price_package_btn", function () {
        var billType = $(".billing_type").val();
        var url = $(this).attr("href") + "&billing=" + billType;
        window.location.href = url;
        return false;
    });

    $(function () {
        $("#quick_login").click(function (event) {
            event.preventDefault();
            var user_name = $("#email").val();
            var password = $(".password").val();
            //console.log(password)
            var data = {
                user_name: user_name,
                password: password,
            };
            $.ajax({
                type: "POST",
                url: "auth/log",
                data: data,
                success: function (response) {
                    var jsonResponse = JSON.parse(response);
                    if (jsonResponse.st == 1) {
                        window.location = jsonResponse.url;
                    } else if (jsonResponse.st == 0) {
                        // $(".signin_btn").prop('disabled', false);
                        // $(".signin_btn").html(msg_signin);
                        // $(".error").show().html('<i class="icon-exclamation"></i> ' + msg_wrong_access);
                        // $('#login_pass').val('');
                        swal({
                            title:
                                $("html").attr("dir") == "rtl"
                                    ? msg_opps
                                    : msg_sorry,
                            text: msg_wrong_access,
                            type: "error",
                            showConfirmButton: true,
                        });
                    } else if (jsonResponse.st == 2) {
                        // $(".signin_btn").prop('disabled', false);
                        // $(".signin_btn").html(msg_signin);
                        // $(".error").show().html('<i class="icon-exclamation"></i> ' + msg_not_active);
                        swal({
                            title:
                                $("html").attr("dir") == "rtl"
                                    ? msg_opps
                                    : msg_sorry,
                            text: msg_not_active,
                            type: "error",
                            showConfirmButton: true,
                        });
                    } else if (jsonResponse.st == 3) {
                        // $(".signin_btn").prop('disabled', false);
                        // $(".signin_btn").html(msg_signin);
                        // $(".error").show().html('<i class="icon-exclamation"></i> ' + msg_account_suspend);
                        swal({
                            title:
                                $("html").attr("dir") == "rtl"
                                    ? msg_opps
                                    : msg_sorry,
                            text: msg_account_suspend,
                            type: "error",
                            showConfirmButton: true,
                        });
                    } else if (jsonResponse.st == 4) {
                        // $(".signin_btn").prop('disabled', false);
                        // $(".signin_btn").html(msg_signin);
                        // $(".error").show().html('<i class="icon-exclamation"></i> ' + msg_email_not_verified + ' or <center><a href="#" id="resend-link">' + msg_resend_link + '</a></center>');
                        swal({
                            title:
                                $("html").attr("dir") == "rtl"
                                    ? msg_opps
                                    : msg_sorry,
                            text: msg_email_not_verified,
                            type: "error",
                            showConfirmButton: true,
                        });
                    } else if (jsonResponse.st == 7) {
                        // $(".signin_btn").prop('disabled', false);
                        // $(".signin_btn").html(msg_signin);
                        // $(".error").show().html('<i class="icon-exclamation"></i> ' + '<?php echo __("admin.expire_main_user") ?>');
                        // $('#login_pass').val('');
                        swal({
                            title:
                                $("html").attr("dir") == "rtl"
                                    ? msg_opps
                                    : msg_sorry,
                            text: '<?php echo __("admin.expire_main_user") ?>',
                            type: "error",
                            showConfirmButton: true,
                        });
                    } else if (jsonResponse.st == 5) {
                        window.location = jsonResponse.url;
                    } else if (jsonResponse.st == 6) {
                        window.location = jsonResponse.url;
                    }
                },
                error: function (xhr, status, error) {},
            });
            return false;
        });
    });

    $(function () {
        $(document).on("submit", "#register_form", function () {
            form_original_data = $(".leave_con").serialize();

            $(".loader_btn").html(loader_btn);
            $(".loader_btn").prop("disabled", true);
            $.post(
                $("#register_form").attr("action"),
                $("#register_form").serialize(),
                function (json) {
                    if (json.st == 1) {
                        $("#register_form")[0].reset();
                        $(".account_area").hide();
                        $(".step_1").removeClass("active");
                        $(".step_2").addClass("active");
                        $(".business_area").show();
                    } else if (json.st == 2) {
                        $(".loader_btn").html(msg_get_started);
                        $(".loader_btn").prop("disabled", false);
                        swal({
                            title:
                                $("html").attr("dir") == "rtl"
                                    ? msg_opps
                                    : msg_sorry,
                            text: msg_email_exist,
                            type: "error",
                            confirmButtonText: msg_ok,
                        });
                    } else if (json.st == 3) {
                        $(".loader_btn").html(msg_get_started);
                        $(".loader_btn").prop("disabled", false);
                        swal({
                            title: msg_opps,
                            text: msg_recaptcha_is_required,
                            type: "error",
                            showConfirmButton: true,
                        });
                    } else if (json.st == 4) {
                        $(".loader_btn").html(msg_get_started);
                        $(".loader_btn").prop("disabled", false);
                        // $('#register_form')[0].reset();
                        // swal({
                        //     title: msg_congratulations,
                        //     text: json.msg,
                        //     type: "success",
                        //     showConfirmButton: true
                        // });
                        var url = base_url + "register?trial=start";
                        window.location.href = url;

                        // setTimeout(function () {
                        //     var url = base_url + 'register?trial=start';
                        //     window.location.href = url;
                        // }, 2000);
                    }else if (json.st == 5) {
                        $(".loader_btn").html(msg_get_started);
                        $(".loader_btn").prop("disabled", false);
                        swal({
                            title: msg_opps,
                            text: msg_phone_exist,
                            type: "error",
                            confirmButtonText: msg_ok,
                        });
                    }else {
                        $(".loader_btn").html(msg_get_started);
                        $(".loader_btn").prop("disabled", false);
                        $("#register_form")[0].reset();
                        swal({
                            title: msg_error,
                            text: json.msg,
                            type: "error",
                            showConfirmButton: true,
                        });
                    }
                },
                "json"
            );
            return false;
        });
    });
    $(function () {
        $(document).on("submit", "#register_form_home", function () {
            form_original_data = $(".leave_con").serialize();

            $(".loader_btn").html(loader_btn);
            $(".loader_btn").prop("disabled", true);
            $.post(
                $("#register_form_home").attr("action"),
                $("#register_form_home").serialize(),
                function (json) {
                    if (json.st == 2) {
                        $(".loader_btn").prop("disabled", false);
                        swal({
                            title: msg_opps,
                            text: msg_email_exist,
                            type: "error",
                            showConfirmButton: true,
                        });
                    } else if (json.st == 4) {
                        $(".loader_btn").html(msg_get_started);
                        $(".loader_btn").prop("disabled", false);
                        var url = base_url + "register?trial=start";
                        window.location.href = url;
                    } else {
                        $(".loader_btn").prop("disabled", false);
                        $("#register_form_home")[0].reset();
                        swal({
                            title: msg_error,
                            text: json.msg,
                            type: "error",
                            showConfirmButton: true,
                        });
                    }
                },
                "json"
            );
            return false;
        });
    });

    $(function () {
        $("#business_form").validator();
        $(document).on("submit", "#business_form", function () {
            form_original_data = $(".leave_con").serialize();
            $(".messages").html("");
            $(".loader_btn2").html(loader_btn);
            $(".loader_btn2").prop("disabled", true);
            $.post(
                $("#business_form").attr("action"),
                $("#business_form").serialize(),
                function (json) {
                    if (json.st == 1) {
                        $("#business_form")[0].reset();
                        $(".account_area").hide();
                        $(".business_area").hide();
                        $(".step_3").addClass("active");
                        $(".pricing_area").show();
                    } else if (json.st == 3) {
                        if (base_url === "https://www.sahelbooks.com/") {
                            gtag("event", "conversion", {
                                send_to: "AW-11265958465/j6ZUCIeYhdQYEMHEg_wp",
                            });
                        }
                        window.location.href = base_url + "welcome";
                    } else {
                        //$('#business_form')[0].reset();
                        $(".loader_btn2").html(msg_create);
                        $(".loader_btn2").prop("disabled", false);
                        $(".messages").html(json.msg);
                        /* swal({
                       title: msg_error,
                       text: json.msg,
                       type: "error",
                       showConfirmButton: true
                     });*/
                    }
                },
                "json"
            );
            return false;
        });
    });

    $(function () {
        $(document).on("submit", "#cahage_pass_form", function () {
            $.post(
                $("#cahage_pass_form").attr("action"),
                $("#cahage_pass_form").serialize(),
                function (json) {
                    if (json.st == 1) {
                        $("#cahage_pass_form")[0].reset();
                        swal({
                            title: msg_congratulations,
                            text: msg_password_reset_success_msg,
                            type: "success",
                            showConfirmButton: true,
                        });
                    } else if (json.st == 2) {
                        $("#cahage_pass_form")[0].reset();
                        swal({
                            title: msg_opps,
                            text: msg_confirm_pass_not_match_msg,
                            type: "error",
                            showConfirmButton: true,
                        });
                    } else {
                        $("#cahage_pass_form")[0].reset();
                        swal({
                            title: msg_error,
                            text: msg_old_password_doesnt_match,
                            type: "error",
                            showConfirmButton: true,
                        });
                    }
                },
                "json"
            );
            return false;
        });
    });

    $(document).on("change", ".sort", function () {
        $(".sort_form").submit();
    });

    $(document).on("click", ".add_btn", function () {
        $(".add_area").show();
        $(".list_area").hide();
        return false;
    });

    $(document).on("click", ".send_btn", function () {
        $(".send_area").show();
        $(".list_area").hide();
        return false;
    });

    $(document).on("click", ".cancel_btn", function () {
        $(".add_area").hide();
        $(".list_area").show();
        return false;
    });

    $(document).on("click", ".delete_item", function () {
        var del_url = $(this).attr("href");
        var itemId = $(this).attr("data-id");

        swal(
            {
                title: msg_are_you_sure,
                text: msg_not_recover_file,
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: msg_yes,
                closeOnConfirm: false,
            },
            function () {
                $.post(
                    del_url,
                    { data: "value", csrf_test_name: csrf_token },
                    function (json) {
                        if (json.st == 1) {
                            swal({
                                title: msg_success,
                                text: msg_del_success,
                                type: "success",
                                showCancelButton: false,
                            }),
                                $("#row_" + itemId).slideUp();
                        }
                    },
                    "json"
                );
            }
        );

        return false;
    });

    $(document).on("click", ".change_pass", function () {
        $(".change_password_area").slideDown();
        $(".edit_account_area").hide();
        $("html, body").animate({ scrollTop: 200 }, "slow");
        return false;
    });

    $(document).on("click", ".cancel_pass", function () {
        $(".change_password_area").hide();
        $(".edit_account_area").slideDown();
        return false;
    });

    $(window).on("bind", "beforeunload", function (e) {
        if ($(".leave_con").serialize() != form_original_data) {
            var needToConfirm = true;
        }
        if (needToConfirm) return msg_made_changes_not_saved;
        else e = null; // i.e; if form state change show warning box, else don't show it.
    });

    // notifications
    function get_notifications_modal_list(only_count = false) {
        var formData = new FormData();
        formData.append("front", 1);
        $.ajax({
            type: "POST",
            url: base_url + "admin/notifications/my_notifications_list",
            data: formData,
            dataType: "json",
            cache: false,
            contentType: false,
            processData: false,
            success: function (data) {
                if (data) {
                    if (data.st == 1) {
                        if (only_count == false) {
                            $(".notifications_modal_list").html(data.content);
                        }
                        if (data.count > 0) {
                            $(".notifications_badge").show();
                            $(".notifications_badge").html(data.count);
                        } else {
                            $(".notifications_badge").hide();
                        }
                    }
                }
            },
            error: function (data) {
                onErrorFun(data);
                // console.log("error");
            },
        });
    }
    if ($(".notifications_btn button:first-of-type")[0]) {
        // fix double click
        $(".notifications_btn button:first-of-type").click();
    }
    // get_notifications_modal_list();

    // usres send invitation
    $("#admin_send_notifications_form").on("submit", function (e) {
        e.preventDefault();
        var formData = new FormData(this);
        $.ajax({
            type: "POST",
            url: base_url + "admin/notifications/add",
            data: formData,
            dataType: "json",
            cache: false,
            contentType: false,
            processData: false,
            success: function (data) {
                if (data) {
                    if (data.st == 1) {
                        swal(
                            {
                                title: msg_success,
                                text: msg_send_successfully,
                                type: "success",
                                showCancelButton: false,
                            },
                            function () {
                                window.location.reload();
                            }
                        );
                        // $('#csv_invoice_import').hide();
                        // $('.loadView').removeClass('d-none');
                        // $('.loadView .loaded_data').html(data.view_data);
                    } else {
                        swal(
                            {
                                title: msg_error,
                                text: data.msg,
                                type: "error",
                                showCancelButton: false,
                            },
                            function () {
                                // window.location.reload();
                            }
                        );
                    }
                }
            },
            error: function (data) {
                onErrorFun(data);
                // console.log("error");
            },
        });
    });

    $("#notificationsModal").on("click", ".notification_item", function (e) {
        e.preventDefault();
        var formData = new FormData();
        var message_id = $(this).attr("message_id");
        formData.append("message_id", message_id);

        var el = $(this);
        if (message_id == "all") {
            el = $(".notifications_modal_list .notification_item");
        }
        $.ajax({
            type: "POST",
            url: base_url + "admin/notifications/read",
            data: formData,
            dataType: "json",
            cache: false,
            contentType: false,
            processData: false,
            success: function (data) {
                if (data) {
                    if (data.st == 1) {
                        el.removeClass("notification_item");
                        el.css({
                            "background-color": "#F5F5F5",
                            cursor: "auto",
                        });
                        el.find(".notification_delete_items").remove();
                        get_notifications_modal_list(true);
                    }
                }
            },
            error: function (data) {
                onErrorFun(data);
                // console.log("error");
            },
        });
    });
    // end notifications

    $(document).on("submit", "#request_create_account_form", function (e) {
        e.preventDefault();
        var formData = new FormData(this);
        $(".loader_btn").html(loader_btn);
        $(".loader_btn").prop("disabled", true);
        $.ajax({
            type: "POST",
            url: base_url + "request-create-account/request-create-account-add",
            data: formData,
            dataType: "json",
            cache: false,
            contentType: false,
            processData: false,

            success: function (data) {
                if (data.st == 1) {
                    $(".loader_btn").html(msg_login);
                    $("loader_btn").prop("disabled", true);
                    swal(
                        {
                            title: msg_success,
                            text: data.msg,
                            type: "success",
                            showCancelButton: false,
                            confirmButtonText: msg_return_home,
                            confirmButtonColor: "#007bff",
                        },
                        function () {
                            window.location.href = base_url + "";
                        }
                    );
                } else if (data.st == 3) {
                    $(".loader_btn").html(msg_login);
                    $("loader_btn").prop("disabled", false);
                    swal({
                        title: msg_opps,
                        text: msg_recaptcha_is_required,
                        type: "error",
                        showConfirmButton: true,
                        confirmButtonColor: "#007bff",
                    });
                } else {
                    $(".loader_btn").html(msg_login);
                    $("loader_btn").prop("disabled", false);
                    swal({
                        title: msg_error,
                        text: data.msg,
                        type: "error",
                        showCancelButton: false,
                        confirmButtonColor: "#007bff",
                    });
                }
            },
            error: function (data) {
                // console.log("error");
            },
        });
    });
 $(function () {
    $(document).on('submit', "#register_form_accountant", function (e) {
        e.preventDefault();

        if (iti.isValidNumber() === true) {
            $(".loader_btn").html(loader_btn);
            $(".loader_btn").prop('disabled', true);


            $(".invalid-feedback-fname, .invalid-feedback-lname, .invalid-feedback-email, .invalid-feedback-phone, .invalid-feedback-address").html('');

            $.ajax({
                url: $('#register_form_accountant').attr('action'),
                type: 'POST',
                data: $('#register_form_accountant').serialize(),
                dataType: 'json',
                success: function (json) {
                    if (json.st == 1) {
                        window.location.href = base_url + 'admin/user/accountant';
                    } else if (json.st == 6) {
                        window.location.href = base_url + 'admin/dashboard/business';
                    } else if (json.st == 7) {
                        swal({
                            title: msg_success,
                            text: $('#register_form_accountant').data('text'),
                            type: "success",
                            showConfirmButton: true
                        });
                        $('#register_form_accountant')[0].reset();
                        window.location.href = base_url;
                    } else {
                        $(".loader_btn").html(msg_get_started);
                        $(".loader_btn").prop('disabled', false);
                    }
                },
                error: function (xhr) {
                    $(".loader_btn").html(msg_get_started);
                    $(".loader_btn").prop('disabled', false);

                    if (xhr.status === 422) {

                        var errors = xhr.responseJSON.errors;
                        $.each(errors, function (key, value) {
                            $('.invalid-feedback-' + key).html(value[0]).show();
                        });
                    }
                }
            });
        } else {
            $('.phone_error_area_error').show();
        }
        return false;

    });
});

})(jQuery);
