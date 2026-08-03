const form = document.getElementById("signupForm");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const dob = document.getElementById("dob");
const terms = document.getElementById("terms");

const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    let isValid = true;

    // Clear previous messages
    document.querySelectorAll(".error").forEach(function (error) {
        error.textContent = "";
    });

    document.querySelectorAll("input").forEach(function (input) {
        input.classList.remove("invalid");
        input.classList.remove("valid");
    });

    successMessage.textContent = "";

    // Full Name validation
    if (fullname.value.trim() === "") {

        document.getElementById("fullnameError").textContent =
            "Full name is required.";

        fullname.classList.add("invalid");

        isValid = false;

    } else {

        fullname.classList.add("valid");
    }


    // Email validation
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {

        document.getElementById("emailError").textContent =
            "Email is required.";

        email.classList.add("invalid");

        isValid = false;

    } else if (!emailPattern.test(email.value)) {

        document.getElementById("emailError").textContent =
            "Please enter a valid email address.";

        email.classList.add("invalid");

        isValid = false;

    } else {

        email.classList.add("valid");
    }


    // Password validation
    // Minimum 8 characters
    // At least one uppercase
    // At least one lowercase
    // At least one number

    const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (password.value === "") {

        document.getElementById("passwordError").textContent =
            "Password is required.";

        password.classList.add("invalid");

        isValid = false;

    } else if (!passwordPattern.test(password.value)) {

        document.getElementById("passwordError").textContent =
            "Password must be 8+ characters with uppercase, lowercase and number.";

        password.classList.add("invalid");

        isValid = false;

    } else {

        password.classList.add("valid");
    }


    // Confirm password validation

    if (confirmPassword.value === "") {

        document.getElementById("confirmPasswordError").textContent =
            "Please confirm your password.";

        confirmPassword.classList.add("invalid");

        isValid = false;

    } else if (confirmPassword.value !== password.value) {

        document.getElementById("confirmPasswordError").textContent =
            "Passwords do not match.";

        confirmPassword.classList.add("invalid");

        isValid = false;

    } else {

        confirmPassword.classList.add("valid");
    }


    // Date of birth validation

    if (dob.value === "") {

        document.getElementById("dobError").textContent =
            "Date of birth is required.";

        dob.classList.add("invalid");

        isValid = false;

    } else {

        dob.classList.add("valid");
    }


    // Radio button validation

    const selectedRole =
        document.querySelector('input[name="role"]:checked');

    if (!selectedRole) {

        document.getElementById("roleError").textContent =
            "Please select Student or Employee.";

        isValid = false;
    }


    // Terms validation

    if (!terms.checked) {

        document.getElementById("termsError").textContent =
            "You must agree to the terms and conditions.";

        isValid = false;
    }


    // Final result

    if (isValid) {

        successMessage.textContent =
            "Signup successful! Your account has been created.";

        form.reset();

        document.querySelectorAll("input").forEach(function (input) {
            input.classList.remove("valid");
        });
    }

});