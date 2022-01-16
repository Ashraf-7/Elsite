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

let ourSkills = document.getElementById('our-skills');
let progress = document.querySelectorAll('.progress span');

window.onscroll = function() {
  if(window.scrollY >= ourSkills.offsetTop - 300) {
    progress.forEach((span) => {
      span.style.width = span.dataset.width;
    })
  }
}

// let section = document.getElementById('stats');
// let numbers = document.querySelectorAll('.card .number');
// let started = false;

// window.onscroll = function() {
//   if(window.scrollY >= section.offsetTop - 100) {
//     if(!started) {
//       numbers.forEach((number) => startCount(number));
//     }
//     started = true;
//   }
// }

// function startCount(e) {
//   let goal = e.dataset.goal;
//   let counter = setInterval(() => {
//     e.textContent++;
//     if(e.textContent == goal) {
//       clearInterval(counter);
//     }
//   }, 2000 / goal)
// }