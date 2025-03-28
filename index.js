const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    body.classList.add(savedTheme);
    themeToggle.classList.replace("bi-cloud-moon", savedTheme === "light-theme" ? "bi-sun" : "bi-cloud-moon");
}

themeToggle.addEventListener("click", () => {
    if (body.classList.contains("light-theme")) {
        body.classList.remove("light-theme");
        localStorage.setItem("theme", "dark-theme");
        themeToggle.classList.replace("bi-sun", "bi-cloud-moon");
        themeToggle.classList.add("bi-cloud-moon-fill");
    } else {
        body.classList.add("light-theme");
        localStorage.setItem("theme", "light-theme");
        themeToggle.classList.replace("bi-cloud-moon", "bi-sun");
    }
});
