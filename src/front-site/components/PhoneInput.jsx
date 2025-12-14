import React, { useEffect, useRef, useState } from "react";
import iti from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import { useTranslation } from "react-i18next";

import { parsePhoneNumberFromString } from "libphonenumber-js";

const intlTelInput = iti.default || iti;

const PhoneInput = ({ pageType = "Request", onChange }) => {
  const { t } = useTranslation("common");
  const inputRef = useRef(null);
  const [itiInstance, setItiInstance] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (!inputRef.current) return;

    const instance = intlTelInput(inputRef.current, {
      separateDialCode: true,
      allowDropdown: pageType === "Request",
      initialCountry: pageType === "Request" ? "auto" : "sa",
      utilsScript: "../../front-site/assets/front/js/intltelinput-utils.js",
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

    const validatePhone = () => {
      reset();

      const rawValue = inputRef.current.value.trim();
      if (!rawValue) {
        onChange && onChange(null);
        return;
      }

      // نحصل على بيانات الدولة المختارة
      const countryData = instance.getSelectedCountryData();
      const countryCode = countryData?.iso2?.toUpperCase() || "";

      // نركّب الرقم الكامل مع كود الدولة
      const fullNumber = `+${countryData?.dialCode || ""}${rawValue.replace(
        /\D/g,
        ""
      )}`;

      // نحاول نحلل الرقم باستخدام libphonenumber-js
      const phoneNumber = parsePhoneNumberFromString(fullNumber, countryCode);

      if (!phoneNumber) {
        setErrorMsg(`Invalid number (${countryCode})`);
        inputRef.current.classList.add("error");
        onChange && onChange(null);
        return;
      }

      // لو الرقم غير صالح
      if (!phoneNumber.isValid()) {
        const nationalLength = phoneNumber.nationalNumber.length;

        // طول الرقم المتوقع حسب الدولة
        const minLength = phoneNumber.getMinimumLength();
        const maxLength = phoneNumber.getMaximumLength();

        if (nationalLength < minLength) {
          setErrorMsg(`Too short (${countryCode})`);
        } else if (nationalLength > maxLength) {
          setErrorMsg(`Too long (${countryCode})`);
        } else {
          setErrorMsg(`Invalid number (${countryCode})`);
        }

        inputRef.current.classList.add("error");
        onChange && onChange(null);
        return;
      }

      // الرقم صحيح
      setValid(true);
      setErrorMsg("");
      inputRef.current.classList.remove("error");
      onChange && onChange(phoneNumber.number); // ترجع الرقم بصيغة E.164
    };

    inputRef.current.addEventListener("blur", validatePhone);
    inputRef.current.addEventListener("change", validatePhone);
    inputRef.current.addEventListener("keyup", validatePhone);

    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener("blur", validatePhone);
        inputRef.current.removeEventListener("change", validatePhone);
        inputRef.current.removeEventListener("keyup", validatePhone);
      }
      if (instance) instance.destroy();
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
      {valid && <div className="text-success">Valid</div>}
    </div>
  );
};

export default PhoneInput;
