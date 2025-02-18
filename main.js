const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Openning and Closing The Menu
menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", 
        isOpen ? "ri-close-line" : "ri-menu-3-line"
    );
});

// After Selecting a Link, The Menu Must Close
navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.classList.setAttribute("class", "ri-menu-3-line");
})



// Header Reveal Animation
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header-image img", {
    duration: 1000
});
ScrollReveal().reveal(".header-content h1", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header-content .section-description", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".header-btn", {
    ...scrollRevealOption,
    delay: 1500,
});
ScrollReveal().reveal(".header-content .socials", {
    ...scrollRevealOption,
    delay: 2000,
});