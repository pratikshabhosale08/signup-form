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

    document.querySelectorAll(".error").forEach(function (error) {
        error.textContent = "";
    });

    document.querySelectorAll("input").forEach(function (input) {
        input.classList.remove("invalid");
        input.classList.remove("valid");
    });

    successMessage.textContent = "";

    if (fullname.value.trim() === "") {

        document.getElementById("fullnameError").textContent =
            "Full Name is required.";

        fullname.classList.add("invalid");

        isValid = false;

    } else {

        fullname.classList.add("valid");
    }
    const emailValue = email.value.trim();

    if (emailValue === "") {

        document.getElementById("emailError").textContent =
            "Email is required.";

        email.classList.add("invalid");

        isValid = false;

    }

    else if (
        !emailValue.includes("@") ||
        !emailValue.includes(".")
    ) {

        document.getElementById("emailError").textContent =
            "Email must contain @ and .";

        email.classList.add("invalid");

        isValid = false;

    }

    else {

        email.classList.add("valid");
    }
    const passwordValue = password.value;


    if (passwordValue === "") {

        document.getElementById("passwordError").textContent =
            "Password is required.";

        password.classList.add("invalid");

        isValid = false;

    }
    else if (passwordValue.length <= 8) {

        document.getElementById("passwordError").textContent =
            "Password must contain more than 8 characters.";

        password.classList.add("invalid");

        isValid = false;

    }

    else {

        password.classList.add("valid");
    }

    if (confirmPassword.value === "") {

        document.getElementById("confirmPasswordError").textContent =
            "Please confirm your password.";

        confirmPassword.classList.add("invalid");

        isValid = false;

    }

    else if (confirmPassword.value !== passwordValue) {

        document.getElementById("confirmPasswordError").textContent =
            "Passwords do not match.";

        confirmPassword.classList.add("invalid");

        isValid = false;

    }

    else {

        confirmPassword.classList.add("valid");
    }

    if (dob.value === "") {

        document.getElementById("dobError").textContent =
            "Date of Birth is required.";

        dob.classList.add("invalid");

        isValid = false;

    }

    else {

        dob.classList.add("valid");
    }

    const selectedRole =
        document.querySelector('input[name="role"]:checked');


    if (!selectedRole) {

        document.getElementById("roleError").textContent =
            "Please select Student or Employee.";

        isValid = false;
    }

    if (!terms.checked) {

        document.getElementById("termsError").textContent =
            "Please accept the Terms and conditions.";

        isValid = false;
    }

    if (isValid) {

        successMessage.textContent =
            "Signup successful! Your form has been submitted.";

        form.reset();

        document.querySelectorAll("input").forEach(function (input) {
            input.classList.remove("valid");
        });

    }
});