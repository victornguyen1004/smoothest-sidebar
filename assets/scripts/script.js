let menuBtn = document.querySelector('.menu-btn');
let sideBar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".sidebar__nav-search-icon");
let bgImg = document.querySelector(".background-img");
let tran = document.querySelector(".transparent-container")

// Hamburger Menu Animation
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});


// Active Sidebar
menuBtn.onclick = function() {
    sideBar.classList.toggle("active");
    bgImg.classList.toggle("active");
    tran.classList.toggle("active");
}

searchBtn.onclick = function() {
    sideBar.classList.toggle("active");
    tran.classList.toggle("active");
    bgImg.classList.toggle("active");
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
      } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
      }
}
