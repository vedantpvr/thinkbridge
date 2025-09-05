
const fullnameInput = document.getElementById("fullname");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPwInput = document.getElementById("confirmpw");
const termsCheckbox = document.getElementById("terms");
const signupBtn = document.querySelector("button[type='submit']");
const heading = document.querySelector("h1");

fullnameInput.addEventListener("input", () => {
  if (fullnameInput.value.trim() !== "") {
    heading.textContent = `Welcome, ${fullnameInput.value}!`;
  } else {
    heading.textContent = "Create Your Account";
  }
});

confirmPwInput.addEventListener("input", () => {
  if (confirmPwInput.value !== passwordInput.value) {
    confirmPwInput.classList.add("error");
    confirmPwInput.setCustomValidity("Passwords do not match");
  } else {
    confirmPwInput.classList.remove("error");
    confirmPwInput.setCustomValidity("");
  }
});

termsCheckbox.addEventListener("change", () => {
  signupBtn.disabled = !termsCheckbox.checked;
});

emailInput.addEventListener("focus", () => {
  emailInput.classList.add("highlight");
});
emailInput.addEventListener("blur", () => {
  emailInput.classList.remove("highlight");
});

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Form submitted successfully!");
});
