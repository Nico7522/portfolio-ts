"use strict";
// import * as AOS from 'aos';
// import 'aos/dist/aos.css'; 
// AOS.init();
const menuHamburger = document.querySelector(".menu-h");
const navLinks = document.querySelector(".nav-links");
const SlidingNewsLetter = document.querySelector('.slide-in');
const linkedinLogo = document.querySelector('.linkedin-logo');
const githubLogo = document.querySelector('.github-logo');
window.addEventListener('scroll', () => {
    const { scrollTop, clientHeight } = document.documentElement;
    // console.log(scrollTop, clientHeight);
    console.log(scrollTop, SlidingNewsLetter === null || SlidingNewsLetter === void 0 ? void 0 : SlidingNewsLetter.getBoundingClientRect().top);
    const fromTopElementTotopViewport = SlidingNewsLetter === null || SlidingNewsLetter === void 0 ? void 0 : SlidingNewsLetter.getBoundingClientRect().top;
    if (fromTopElementTotopViewport) {
        const scrollTopAndFromTopElmentTotopViewport = Number((scrollTop + fromTopElementTotopViewport).toFixed());
        if (scrollTop > scrollTopAndFromTopElmentTotopViewport - (clientHeight * 0.90)) {
            SlidingNewsLetter === null || SlidingNewsLetter === void 0 ? void 0 : SlidingNewsLetter.classList.add('active');
        }
    }
});
menuHamburger === null || menuHamburger === void 0 ? void 0 : menuHamburger.addEventListener('click', () => {
    navLinks === null || navLinks === void 0 ? void 0 : navLinks.classList.toggle('mobile-menu');
});
linkedinLogo === null || linkedinLogo === void 0 ? void 0 : linkedinLogo.addEventListener('mouseover', () => {
    if (githubLogo) {
        githubLogo.style.width = '50px';
    }
});
linkedinLogo === null || linkedinLogo === void 0 ? void 0 : linkedinLogo.addEventListener('mouseleave', () => {
    if (githubLogo) {
        githubLogo.style.width = '';
    }
});
