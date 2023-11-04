"use strict";
const menuHamburger = document.querySelector(".menu-h");
const navLinks = document.querySelector(".nav-links");
const SlidingNewsLetter = document.querySelector('.slide-in');
window.addEventListener('scroll', () => {
    const { scrollTop, clientHeight } = document.documentElement;
    // console.log(scrollTop, clientHeight);
    const fromTopElmentTotopViewport = SlidingNewsLetter === null || SlidingNewsLetter === void 0 ? void 0 : SlidingNewsLetter.getBoundingClientRect().top;
    if (fromTopElmentTotopViewport) {
        const scrollTopAndFromTopElmentTotopViewport = Number((scrollTop + fromTopElmentTotopViewport).toFixed());
        if (scrollTop > scrollTopAndFromTopElmentTotopViewport - clientHeight * 0.50) {
            SlidingNewsLetter === null || SlidingNewsLetter === void 0 ? void 0 : SlidingNewsLetter.classList.add('active');
        }
    }
});
menuHamburger === null || menuHamburger === void 0 ? void 0 : menuHamburger.addEventListener('click', () => {
    navLinks === null || navLinks === void 0 ? void 0 : navLinks.classList.toggle('mobile-menu');
});
console.log("coucou");
