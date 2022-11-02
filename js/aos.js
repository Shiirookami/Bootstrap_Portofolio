

    AOS.init();
    let navbar = document.getElementById('navbar-custom');

    window.addEventListener('scroll', function(){
        let scroll = window.scrollY;

        if (scroll > 50) {
            navbar.classList.add('bg-light');
            navbar.classList.remove('navbar-dark');
        } else {
            navbar.classList.remove('bg-light');
            navbar.classList.add('navbar-dark');
        }
    });