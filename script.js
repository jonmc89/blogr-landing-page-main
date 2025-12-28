// Mobile Nav
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileArrow = document.getElementById("mobileArrow");
const mobileNavLink = document.getElementById("mobileNavLink2");
const dropMenu = document.getElementById("dropMenu");

let toggle = false;
menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("mobile-menu-unhide");
    toggle = !toggle;
    if (toggle) {
        menuBtn.src = "images/icon-close.svg";
    } else {
        menuBtn.src = "images/icon-hamburger.svg";
    }
});

mobileNavLink.addEventListener("click", () => {
    mobileArrow.classList.toggle("arrow-rotate");
    dropMenu.classList.toggle("drop-menu-unhide");
});

// Desktop Drop Down
const desktopDropLink = document.getElementById("desktopDropDownLink");
const desktopArrow = document.getElementById("desktopArrow");
const desktopDropDown = document.getElementById("desktopDropDown");

desktopDropLink.addEventListener("click", () => {
    desktopArrow.classList.toggle("arrow-rotate");
    desktopDropDown.classList.toggle("drop-menu-unhide");
});
