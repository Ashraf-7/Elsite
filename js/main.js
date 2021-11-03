let scrollToTop = document.querySelector('.scroll-to-top');

window.onscroll = () => {
  if(this.scrollY >= 1000) {
    scrollToTop.classList.add("show");
  } else {
    scrollToTop.classList.remove("show");
  }
}

scrollToTop.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}