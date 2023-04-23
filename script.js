// Abre e fecha o menu quando o clica no icone
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for(const element of toggle){
    element.addEventListener('click',function(){
        nav.classList.toggle('show');
    })
}

// Fecha o menu quando clica no link
const links = document.querySelectorAll('nav ul li a')

for(const link of links){
    link.addEventListener('click',function(){
        nav.classList.remove('show');
    })
}

//Mudar o scroll ao rolar
const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

function changeHeaderWhenScroll(){
    if(window.scrollY >= navHeight){
        header.classList.add('scroll');
    } else{
        header.classList.remove('scroll');
    }
}


//Swiper testimonials
const swiper = new Swiper('.swiper', {
    //Qunatidades de slides
    slidePerView: 1,
    pagination:{
        el:'.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }

  });

//Scroll Reveal
const revealScroll = ScrollReveal({
    origin:'top',
    distance: '30px',
    duration: 700,
    reset: true
})

revealScroll.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services .image, #services .card,
    #testimonials header, #testimonials .testimonial,
    #contact .text, #contact .links,
    footer .brand, footer .social`, 
    
    {inteval:100}
)

//Back to top
const backToTopButton = document.querySelector('.back-to-top');

function backToTop() {
if(window.scrollY >= 560){
backToTopButton.classList.add('show');
} else{
    backToTopButton.classList.remove('show');
}
} 

/* When Scroll */
window.addEventListener('scroll', function(){
    changeHeaderWhenScroll()
    backToTop()
})


