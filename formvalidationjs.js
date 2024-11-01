function validateForm() {
  const fullName = document.getElementById("fullName");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");

  let isValid = true;

  // Clear previous error messages
  nameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";
  
  // Reset border styles
  fullName.classList.remove("error", "success");
  email.classList.remove("error", "success");
  phone.classList.remove("error", "success");
  password.classList.remove("error", "success");
  confirmPassword.classList.remove("error", "success");

  // Name validation
  if (fullName.value.trim().length < 5) {
    nameError.textContent = "Name must be at least 5 characters long.";
    fullName.classList.add("error");
    isValid = false;
  } else {
    fullName.classList.add("success");
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    emailError.textContent = "Please enter a valid email address.";
    email.classList.add("error");
    isValid = false;
  } else {
    email.classList.add("success");
  }

  // Phone validation
  const phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phone.value.trim()) || phone.value.trim() === "1234567890") {
    phoneError.textContent = "Phone number must be a unique 10-digit number.";
    phone.classList.add("error");
    isValid = false;
  } else {
    phone.classList.add("success");
  }

  // Password validation
  const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  if (!passwordPattern.test(password.value.trim()) ||
      password.value.trim().toLowerCase() === fullName.value.trim().toLowerCase() ||
      password.value.trim().toLowerCase() === "password") {
    passwordError.textContent = "Password must be at least 8 characters, include a number and a special character.";
    password.classList.add("error");
    isValid = false;
  } else {
    password.classList.add("success");
  }

  // Confirm password validation
  if (password.value.trim() !== confirmPassword.value.trim()) {
    confirmPasswordError.textContent = "Passwords do not match.";
    confirmPassword.classList.add("error");
    isValid = false;
  } else {
    confirmPassword.classList.add("success");
  }

  if (isValid) alert("Form submitted successfully!");

  return isValid;
}

// Toggle password visibility for password and confirm password fields
function togglePasswordVisibility(fieldId) {
  const field = document.getElementById(fieldId);
  const eyeIcon = field.nextElementSibling;
  
  if (field.type === "password") {
    field.type = "text";
    eyeIcon.textContent = "👁️‍🗨️";
  } else {
    field.type = "password";
    eyeIcon.textContent = "👁️‍🗨️";
  }
}

