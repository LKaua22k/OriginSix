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

window.addEventListener('scroll',function(){
    if(window.scrollY >= navHeight){
        header.classList.add('scroll');
    } else{
        header.classList.remove('scroll');
    }
})


//Swiper testimonials
const swiper = new Swiper('.swiper', {
    //Qunatidades de slides
    slidePerView: 1,
    pagination:{
        el:'.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,

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
    #contact .text, #contact .links`, 
    {inteval:100}
)
