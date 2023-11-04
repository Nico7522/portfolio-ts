const menuHamburger = document.querySelector(".menu-h");
const navLinks = document.querySelector(".nav-links");
const SlidingNewsLetter = document.querySelector('.slide-in');

window.addEventListener('scroll', () => {
    const { scrollTop, clientHeight } = document.documentElement;
    // console.log(scrollTop, clientHeight);

    const fromTopElmentTotopViewport = SlidingNewsLetter?.getBoundingClientRect().top;
    if (fromTopElmentTotopViewport) {
        const scrollTopAndFromTopElmentTotopViewport: number = Number((scrollTop + fromTopElmentTotopViewport).toFixed());
        if (scrollTop > scrollTopAndFromTopElmentTotopViewport - clientHeight* 0.50) {
            SlidingNewsLetter?.classList.add('active')
        }
    }
    
})
menuHamburger?.addEventListener('click', () => {
    navLinks?.classList.toggle('mobile-menu')
});
console.log("coucou");
