import React, { useEffect, useRef, useState } from "react";
import iti from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import { useTranslation } from "react-i18next";

// دعم النسخ الحديثة: ES Modules
const intlTelInput = iti.default || iti;

const PhoneInput = ({ pageType = "Request", onChange }) => {
    const { t } = useTranslation("common");
    const inputRef = useRef(null);
    const [itiInstance, setItiInstance] = useState(null);
    const [errorMsg, setErrorMsg] = useState("");
    const [valid, setValid] = useState(false);

    const errorMap = {
        "-99": "Too short",
        0: "Invalid number",
        1: "Invalid country code",
        2: "Too short",
        3: "Too long",
        4: "Invalid number",
    };

    useEffect(() => {
        if (!inputRef.current) return;

        // تهيئة intl-tel-input
        const instance = intlTelInput(inputRef.current, {
            separateDialCode: true,
            allowDropdown: pageType === "Request",
            initialCountry: pageType === "Request" ? "auto" : "sa",
            utilsScript: "/front/js/intltelinput-utils.js",
            geoIpLookup:
                pageType === "Request"
                    ? (callback) => {
                        fetch("https://ipapi.co/json")
                            .then((res) => res.json())
                            .then((data) =>
                                callback(data?.country_code?.toLowerCase() || "sa")
                            )
                            .catch(() => callback("sa"));
                    }
                    : undefined,
        });

        setItiInstance(instance);

        const reset = () => {
            inputRef.current.classList.remove("error");
            setErrorMsg("");
            setValid(false);
        };

        const handleChange = () => {
            reset();
            if (inputRef.current.value.trim()) {
                if (instance.isValidNumber()) {
                    setValid(true);
                    setErrorMsg("");
                    if (onChange) onChange(instance.getNumber()); // ترجع الرقم الكامل للوالد
                } else {
                    inputRef.current.classList.add("error");
                    const errorCode = instance.getValidationError();
                    const msg = errorMap[errorCode] || "Invalid number";
                    setErrorMsg(msg);
                    setValid(false);
                    if (onChange) onChange(null);
                }
            } else {
                if (onChange) onChange(null);
            }
        };

        inputRef.current.addEventListener("blur", handleChange);
        inputRef.current.addEventListener("change", handleChange);
        inputRef.current.addEventListener("keyup", handleChange);

        return () => {
          if (inputRef.current) {
            inputRef.current.removeEventListener("blur", handleChange);
            inputRef.current.removeEventListener("change", handleChange);
            inputRef.current.removeEventListener("keyup", handleChange);
          }
          if (instance) {
            instance.destroy();
          }
        };

    }, [pageType, onChange]);

    return (
        <div className="phone-input-wrapper">
            <input
                ref={inputRef}
                type="tel"
                className="form-control"
                placeholder={t("front_home.phone")}
            />
            {errorMsg && <div className="text-danger">{errorMsg}</div>}
            {valid && <div className="text-success">✓ Valid</div>}
        </div>
    );
};

export default PhoneInput;
