


const menuHamburger = document.querySelector(".menu-h");
const navLinks = document.querySelector(".nav-links");
const SlidingNewsLetter = document.querySelector('.slide-in');
const linkedinLogo = document.querySelector('.linkedin-logo');
const githubLogo = document.querySelector('.github-logo');
const paratest = document.querySelectorAll('.div-test > p');



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

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;


  const fromTopElementToTopViewport =
    SlidingNewsLetter?.getBoundingClientRect().top;
  if (fromTopElementToTopViewport) {
    const scrollTopAndFromTopElmentTotopViewport: number = Number(
      (scrollTop + fromTopElementToTopViewport).toFixed()
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