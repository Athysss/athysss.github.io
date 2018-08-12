var line1 = document.querySelector(".nav__mobile--hamburger1");
var line2 = document.querySelector(".nav__mobile--hamburger2");
var line3 = document.querySelector(".nav__mobile--hamburger3");
var bg = document.querySelector(".nav__mobile--overlay");
var menu = document.querySelector(".nav__mobile--menu");

// Portfolio pages
var overlays = document.querySelectorAll(".portfolio__overlay");
var pages = document.querySelectorAll('.portfolio__page')

document.querySelector(".nav__mobile").addEventListener("click", function(e) {
  e.preventDefault();
  document.querySelector('body').classList.add('no-scroll');
  line1.classList.toggle("nav__mobile--cross1");
  line2.classList.toggle("nav__mobile--hide");
  line3.classList.toggle("nav__mobile--cross2");
  bg.classList.toggle("nav__mobile--bg-full");
  menu.classList.toggle("show");
});

// If link is clicked, retract the navbar
var links = document.querySelectorAll(".nav__mobile--menu--link");
links.forEach(function(link) {
  link.addEventListener("click", function() {
  document.querySelector('body').classList.remove('no-scroll');
    line1.classList.toggle("nav__mobile--cross1");
    line2.classList.toggle("nav__mobile--hide");
    line3.classList.toggle("nav__mobile--cross2");
    bg.classList.toggle("nav__mobile--bg-full");
    menu.classList.toggle("show");

    // If a portfolio page is open, close it

    pages.forEach(function(page){
      if(page.classList.contains('extend')){
        page.classList.toggle('extend');
        document.querySelector('body').classList.remove('no-scroll');
      }
    });

    overlays.forEach(function(overlay){
      if(overlay.classList.contains('show')){
        overlay.classList.toggle('show');
      }
    });
  });
});
