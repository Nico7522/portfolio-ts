"use strict";
// import * as AOS from 'aos';
// import 'aos/dist/aos.css'; 
// AOS.init();
var menuHamburger = document.querySelector(".menu-h");
var navLinks = document.querySelector(".nav-links");
var SlidingNewsLetter = document.querySelector('.slide-in');
var linkedinLogo = document.querySelector('.linkedin-logo');
var githubLogo = document.querySelector('.github-logo');
var paratest = document.querySelectorAll('.div-test > p');
// Méthode pour afficher le texte au scroll
// window.addEventListener('scroll', () => {
//   const { scrollTop, clientHeight } = document.documentElement;
//   let fromTopElementToTopViewport : number;
//     paratest?.forEach(p => {
//       fromTopElementToTopViewport = p.getBoundingClientRect().top
//       if (fromTopElementToTopViewport) {
//         const scrollTopAndFromTopElmentTotopViewport: number = Number(
//           (scrollTop + fromTopElementToTopViewport).toFixed()
//         );
//         if (
//           scrollTop >
//           scrollTopAndFromTopElmentTotopViewport - clientHeight * 0.9
//         ) {
//           (p as HTMLElement).style.opacity = "1";
//         }
//       }
//     })
// })
window.addEventListener("scroll", function () {
    var _a = document.documentElement, scrollTop = _a.scrollTop, clientHeight = _a.clientHeight;
    var fromTopElementToTopViewport = SlidingNewsLetter === null || SlidingNewsLetter === void 0 ? void 0 : SlidingNewsLetter.getBoundingClientRect().top;
    if (fromTopElementToTopViewport) {
        var scrollTopAndFromTopElmentTotopViewport = Number((scrollTop + fromTopElementToTopViewport).toFixed());
        if (scrollTop >
            scrollTopAndFromTopElmentTotopViewport - clientHeight * 0.9) {
            SlidingNewsLetter === null || SlidingNewsLetter === void 0 ? void 0 : SlidingNewsLetter.classList.add("active");
        }
    }
});
menuHamburger === null || menuHamburger === void 0 ? void 0 : menuHamburger.addEventListener('click', function () {
    navLinks === null || navLinks === void 0 ? void 0 : navLinks.classList.toggle('mobile-menu');
});
linkedinLogo === null || linkedinLogo === void 0 ? void 0 : linkedinLogo.addEventListener("mouseover", function () {
    githubLogo.style.width = "50px";
});
linkedinLogo === null || linkedinLogo === void 0 ? void 0 : linkedinLogo.addEventListener("mouseleave", function () {
    githubLogo.style.width = "";
});
