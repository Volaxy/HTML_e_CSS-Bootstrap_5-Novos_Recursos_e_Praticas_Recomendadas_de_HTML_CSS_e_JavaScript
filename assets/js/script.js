const $switchThemeInput = document.getElementById("night-mode");
const $body = document.querySelector("body");

$switchThemeInput.addEventListener("click", () => {
    $body.setAttribute("data-bs-theme", $switchThemeInput.checked ? "dark" : "light");
});