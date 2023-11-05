// import * as AOS from 'aos';
// import 'aos/dist/aos.css'; 
// AOS.init();

const menuHamburger = document.querySelector(".menu-h");
const navLinks = document.querySelector(".nav-links");
const SlidingNewsLetter = document.querySelector('.slide-in');
const linkedinLogo = document.querySelector('.linkedin-logo');
const githubLogo = document.querySelector('.github-logo');

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;


  const fromTopElementTotopViewport =
    SlidingNewsLetter?.getBoundingClientRect().top;
  if (fromTopElementTotopViewport) {
    const scrollTopAndFromTopElmentTotopViewport: number = Number(
      (scrollTop + fromTopElementTotopViewport).toFixed()
    );
    if (
      scrollTop >
      scrollTopAndFromTopElmentTotopViewport - clientHeight * 0.9
    ) {
      SlidingNewsLetter?.classList.add("active");
    }
  }
});
menuHamburger?.addEventListener('click', () => {
    navLinks?.classList.toggle('mobile-menu')
});


linkedinLogo?.addEventListener("mouseover", () => {
  (githubLogo as HTMLElement).style.width = "50px";
});

linkedinLogo?.addEventListener("mouseleave", () => {
  (githubLogo as HTMLElement).style.width = "";
});