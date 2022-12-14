/*===== SHOW MENU =====*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU HIDDEN =====*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu'); 
    })
}


if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== CHANGE BACKGROUND HEADER =====*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    // when the scroll is greater than 50 viewport height, add
    // the scoll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header')
                        : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*===== SCROLL SECTIONS ACTIVE LINK =====*/

/*===== SHOW SCROLL UP =====*/

/*===== SCROLL REVEAL ANIMATION =====*/

/*===== CALCULATE JS =====*/