
let names = document.querySelector(".names");
let email = document.querySelector(".emails");
let password = document.querySelector(".passwords");
let button = document.querySelector(".btn");

button.addEventListener("click", function () {

    
    if (names.value.trim() === "") {
        alert("Please enter your name");
        return;
    }

    
    if (email.value.trim() === "") {
        alert("Please enter your email");
        return;
    }

    
    if (!email.value.includes("@") || !email.value.includes(".")) {
        alert("Please enter a valid email");
        return;
    }

    
    if (password.value.trim() === "") {
        alert("Please enter your password");
        return;
    }

    
    if (password.value.length < 8) {
        alert("Password must contain at least 8 characters");
        return;
    }

     
    if (!/[A-Z]/.test(password.value)) {
        alert("Password must contain at least one uppercase letter");
        return;
    }

    
    if (!/[a-z]/.test(password.value)) {
        alert("Password must contain at least one lowercase letter");
        return;
    }


    if (!/[0-9]/.test(password.value)) {
        alert("Password must contain at least one number");
        return;
    }

    
    if (!/[^A-Za-z0-9]/.test(password.value)) {
        alert("Password must contain at least one special character");
        return;
    }


    alert("Registration successful!");
});
