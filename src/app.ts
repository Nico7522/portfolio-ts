const menuHamburger = document.querySelector(".menu-h");
const navLinks = document.querySelector(".nav-links");
const SlidingNewsLetter = document.querySelector('.slide-in');
const linkedinLogo = document.querySelector('.linkedin-logo');
const githubLogo = document.querySelector('.github-logo');

window.addEventListener('scroll', () => {
    const { scrollTop, clientHeight } = document.documentElement;
    // console.log(scrollTop, clientHeight);
console.log(scrollTop, SlidingNewsLetter?.getBoundingClientRect().top);

    const fromTopElementTotopViewport = SlidingNewsLetter?.getBoundingClientRect().top;
    if (fromTopElementTotopViewport) {
        const scrollTopAndFromTopElmentTotopViewport: number = Number((scrollTop + fromTopElementTotopViewport).toFixed());
        if (scrollTop > scrollTopAndFromTopElmentTotopViewport - (clientHeight* 0.90)) {
            SlidingNewsLetter?.classList.add('active')
        }
    }
    
})
menuHamburger?.addEventListener('click', () => {
    navLinks?.classList.toggle('mobile-menu')
});


linkedinLogo?.addEventListener('mouseover', () => {
    if (githubLogo) {
        (githubLogo as HTMLElement).style.width = '50px'; 
    }
    
})

linkedinLogo?.addEventListener('mouseleave', () => {
    if (githubLogo) {
        (githubLogo as HTMLElement).style.width = ''; 
    }
    
})