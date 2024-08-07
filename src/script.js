const emailField = document.querySelector(".email-field");
const emailError = document.querySelector(".email-error");
const passwordField = document.querySelector(".password-field");
const passwordError = document.querySelector(".password-error");
const contactField = document.querySelector(".contact-field");
const contactError = document.querySelector(".contact-error");

emailField.onkeyup = () => {
  if (
    !emailField.value.match(
      /^[a-z\d+.-]+@([a-z\d-]+\.)+[a-z]{2,8}(\.[a-z]{2,8})?$/i
    )
  ) {
    emailError.style.display = "block";
    emailError.innerHTML = "Please enter a valid email address";
    return false;
  }

  emailError.innerHTML = "";
  return true;
};

passwordField.onkeyup = () => {
  var password = passwordField.value;
  if (password.length < 8) {
    passwordError.style.display = "block";
    passwordError.innerHTML = "Password must be at least 8 characters long";
    return false;
  } else if (password.length > 20) {
    passwordError.style.display = "block";
    passwordError.innerHTML = "Password must be at most 20 characters long";
    return false;
  } else if (!password.match(/[0-9]/)) {
    passwordError.style.display = "block";
    passwordError.innerHTML = "Password must contain at least one number";
    return false;
  } else if (!password.match(/[a-z]/)) {
    passwordError.style.display = "block";
    passwordError.innerHTML =
      "Password must contain at least one lowercase letter";
    return false;
  } else if (!password.match(/[A-Z]/)) {
    passwordError.style.display = "block";
    passwordError.innerHTML =
      "Password must contain at least one uppercase letter";
    return false;
  } else if (!password.match(/[$&+,:;=?@#|'<>.^*()%!-]/)) {
    passwordError.style.display = "block";
    passwordError.innerHTML =
      "Password must contain at least one special character";
    return false;
  }

  passwordError.innerHTML = "";
  return true;
};

contactField.onkeyup = () => {
  if (contactField.value.length < 10) {
    contactError.style.display = "block";
    contactError.innerHTML = "Contact number must be at least 10 digits long";
    return false;
  } else if (
    !contactField.value.match(
      /(\+977)?[\-\s]?(98)[0-9][\-\s]?[0-9]{3}[\-\s]?[0-9]{4}/
    )
  ) {
    contactError.style.display = "block";
    contactError.innerHTML = "Please enter a valid contact number";
    return false;
  }

  contactError.innerHTML = "";
  return true;
};

// /[(+977)?[9][6-9]\d{8}]/
