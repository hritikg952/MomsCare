window.onscroll = function () { myFunction() };

// Get the navbar
var nav_main = document.querySelector(".nav-main");
var nav_menu = document.querySelector(".nav-menu");
var mobile_nav_toggle = document.querySelector(".mobile-nav-toggle")
// Get the offset position of the nav_main
var sticky = nav_main.offsetTop;

// Add the sticky class to the nav_main when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    nav_main.classList.add("nav-main-sticky")
  } else {
    nav_main.classList.remove("nav-main-sticky");
  }
}

mobile_nav_toggle.addEventListener('click', ()=>{
  const visibility = nav_menu.getAttribute('data-visible')
  if(visibility == "false"){
    nav_menu.setAttribute('data-visible', true)
    mobile_nav_toggle.setAttribute('aria-expanded', true)
  }else{
    nav_menu.setAttribute('data-visible', false)
    mobile_nav_toggle.setAttribute('aria-expanded', false)
  }
})