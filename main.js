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
