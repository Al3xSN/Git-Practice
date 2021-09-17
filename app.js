const btn = document.querySelector("button");
btn.addEventListener("click", navToggle);

function navToggle() {
    const nav = document.querySelector(".mobile-nav");
    nav.classList.contains("disable") ? nav.classList.replace("disable", "active") : nav.classList.replace("active", "disable");
}