

    AOS.init();
    let navbar = document.getElementById('navbar-custom');

    window.addEventListener('scroll', function(){
        let scroll = window.scrollY;

        if (scroll > 50) {
            navbar.classList.remove('navbar-light');
            navbar.classList.add('bg-dark');
        } else {
            navbar.classList.add('navbar-dark');
            navbar.classList.remove('bg-light');
        }
    })
