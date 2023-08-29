const signupButton = document.getElementById("signup-button");
const signupPopup = document.getElementById("signup-popup");
const closeButton = document.getElementById("close-button");
const userSignup = document.getElementById("user-signup");
const adminSignup = document.getElementById("admin-signup");

signupButton.addEventListener("click", () => {
    signupPopup.style.display = "flex";
});

closeButton.addEventListener("click", () => {
    signupPopup.style.display = "none";
});

userSignup.addEventListener("click", () => {
    // Redirect or perform user signup actions
    signupPopup.style.display = "none";
});

adminSignup.addEventListener("click", () => {
    // Redirect or perform admin signup actions
    signupPopup.style.display = "none";
});
// ... (previous code)

userSignup.addEventListener("click", () => {
    // Redirect to user signup page
    window.location.href = "user-signup.html"; // Replace with your actual user signup page URL
    signupPopup.style.display = "none";
});

adminSignup.addEventListener("click", () => {
    // Redirect to admin signup page
    window.location.href = "admin-signup.html"; // Replace with your actual admin signup page URL
    signupPopup.style.display = "none";
});
