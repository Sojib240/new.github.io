const mobileNav = document.querySelector(".mobile-nav-button")
const navHeader = document.querySelector(".header")

const toggleNavbar = ( ) => {
    navHeader.classList.toggle ("active")
}


mobileNav.addEventListener("click",  ( ) => toggleNavbar ( ))

 






  