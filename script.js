const text = "Olá! Organizado, proativo e inovador, me chamo Bruno Antunes.";
const typewriter = document.querySelector("#typewriter");
const progressBar = document.querySelector(".progress-bar");
const reveals = document.querySelectorAll(".reveal");

let index = 0;

function typeText() {
    if (index < text.length) {
        typewriter.textContent += text.charAt(index);
        index += 1;
        setTimeout(typeText, 42);
    }
}

window.addEventListener("load", () => setTimeout(typeText, 450));

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.14,
    rootMargin: "0px 0px -40px 0px"
});

reveals.forEach((element) => observer.observe(element));

function updateProgress() {
    const scrollTop = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = `${height > 0 ? (scrollTop / height) * 100 : 0}%`;
}

window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();