// Add the "animate" class to sections for a fade-in effect
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add("animate");
        }, index * 200);
    });
});
