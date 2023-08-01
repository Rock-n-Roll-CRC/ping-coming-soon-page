// Email Validation Regex
const emailValidationRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

// Form & Submit
const emailSubscriptionInput: HTMLInputElement | null = document.querySelector(
  "#email-subscription-input"
);
const emailSubscriptionError: HTMLParagraphElement | null =
  document.querySelector(".error-message");
const emailSubscriptionSubmit: HTMLButtonElement | null =
  document.querySelector(".subscribe-button");

// Submit Handler
emailSubscriptionSubmit?.addEventListener("click", () => {
  // Checking whether the email input field is filled in an invalid format
  if (
    typeof emailSubscriptionInput?.value !== "undefined" &&
    !emailValidationRegex.test(emailSubscriptionInput.value)
  ) {
    emailSubscriptionInput.classList.add("active");
    emailSubscriptionError?.classList.add("active");
  } else {
    emailSubscriptionInput?.classList.remove("active");
    emailSubscriptionError?.classList.remove("active");
  }
});
