const navEl = document.getElementById('main');
const navTop = navEl.offsetTop;

const fixNav = () => {
   if (window.scrollY >= navTop) {
       console.log(navTop, window.scrollY)
       document.body.style.paddingTop = `${navEl.offsetHeight}px`;
       console.log(navEl.offsetHeight)
       document.body.classList.add('fixed-nav')
   } else {
       document.body.style.paddingTop = '0px';
       document.body.classList.remove('fixed-nav')
   }
}

window.addEventListener('scroll', fixNav)