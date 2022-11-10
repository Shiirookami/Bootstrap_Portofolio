

AOS.init();
let navbar = document.getElementById('navbar-custom');

window.addEventListener('scroll', function(){
    let scroll = window.scrollY;

    if (scroll > 50) {
        navbar.classList.add('bg-light');
        navbar.classList.remove('navbar-dark');
    } else {
        navbar.classList.remove('bg-secondary');
        navbar.classList.add('navbar-dark');
    }
});

// Get Pedeih Button
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Scroll to Back
function topedeih() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}