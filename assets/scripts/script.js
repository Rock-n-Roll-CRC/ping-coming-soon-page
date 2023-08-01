"use strict";
// Email Validation Regex
const emailValidationRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
// Form & Submit
const emailSubscriptionInput = document.querySelector("#email-subscription-input");
const emailSubscriptionError = document.querySelector(".error-message");
const emailSubscriptionSubmit = document.querySelector(".subscribe-button");
// Submit Handler
emailSubscriptionSubmit === null || emailSubscriptionSubmit === void 0 ? void 0 : emailSubscriptionSubmit.addEventListener("click", () => {
    // Checking whether the email input field is filled in an invalid format
    if (typeof (emailSubscriptionInput === null || emailSubscriptionInput === void 0 ? void 0 : emailSubscriptionInput.value) !== "undefined" &&
        !emailValidationRegex.test(emailSubscriptionInput.value)) {
        emailSubscriptionInput.classList.add("active");
        emailSubscriptionError === null || emailSubscriptionError === void 0 ? void 0 : emailSubscriptionError.classList.add("active");
    }
    else {
        emailSubscriptionInput === null || emailSubscriptionInput === void 0 ? void 0 : emailSubscriptionInput.classList.remove("active");
        emailSubscriptionError === null || emailSubscriptionError === void 0 ? void 0 : emailSubscriptionError.classList.remove("active");
    }
});
