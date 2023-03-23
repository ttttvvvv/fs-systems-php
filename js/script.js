/*==================== toggle icon number==================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*==================== scroll sctions active link==================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*==================== scroll sctions active link==================*/
    let header = document.querySelector('sticky', window.scrollY > 100);

    /*==================== remove tooggle icon and navbar when clicking==================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*==================== scrollreveal==================*/

ScrollReveal({ 
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 150

 });

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });

ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form, .contact h3', { origin: 'bottom' });

ScrollReveal().reveal('.home-content h1, .about-img, .services-content p, .services-content h3', { origin: 'left' });

ScrollReveal().reveal('.home-content p, .about-content, .services-img', { origin: 'right' });


/*==================== typed js==================*/
const typed = new Typed('.multiple-text', {
    strings: ['Installaties', 'Onderhoud', 'Reparaties'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});