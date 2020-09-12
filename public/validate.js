function validateEmail(e) {
    e.preventDefault();
    let email = document.getElementById("email");
    let placeholder = document.getElementById("placeholder");
    if (!email.value) {
        placeholder.style.color = "#9B9B9B";
        placeholder.innerHTML = "EMAIL";
        email.className = "search-box"
    } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        placeholder.style.color = "#9B9B9B";
        placeholder.innerHTML = "EMAIL";
        email.className = "search-box valid"
    } else {
        placeholder.style.color = "#DC0015";
        placeholder.innerHTML = "Please add a valid email address";
        email.className = "search-box invalid";
    }
}
