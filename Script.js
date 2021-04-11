var nav = document.querySelector('nav');
window.addEventListener('scroll', function () {
    if(window.pageYOffset > 200){
        nav.classList.add('bg-secondary', 'shadow');
        nav.classList.replace('navbar-light','navbar-dark');
    }
    else {
        nav.classList.remove('bg-secondary','shadow');
        nav.classList.replace('navbar-dark','navbar-light');
    }
});
