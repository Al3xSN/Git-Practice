const btn = document.querySelector("button");
btn.addEventListener("click", navToggle);

function navToggle() {
    const nav = document.querySelector(".mobile-nav");
    nav.classList.contains("disable") ? nav.classList.remove("disable") : nav.classList.toggle("disable");
}