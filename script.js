// Abre e fecha o menu quando o clica no icone
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');
let Over = false

for(const element of toggle){
    element.addEventListener('click',function(){

        document.body.style.overflow = Over ? "hidden" : "initial"

        nav.classList.toggle('show', Over)

        Over = !Over
    })
}

// Fecha o menu quando clica no link
const links = document.querySelectorAll('nav ul li a')

for(const link of links){
    link.addEventListener('click',function(){

        document.body.style.overflow = Over =  "initial"

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

// Ativar o menu quando esiver visivel na pagina 
const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection(){

    const check = window.pageYOffset + (window.innerHeight / 8) * 4

    for(const section of sections){
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkStart = check >= sectionTop
        const checkEnd = check <= sectionTop + sectionHeight

        if(checkStart && checkEnd) {
        document
        .querySelector('nav ul li a[href*=' + sectionId +']') 
        .classList.add('active')
    } else{
        document
        .querySelector('nav ul li a[href*=' + sectionId +']') 
        .classList.remove('active')
    }
    }

}

// Fechar menu 
window.addEventListener('resize', function(event){
    if(window.innerWidth > 1199){
        nav.classList.remove('show')
    }
})



/* When Scroll */
window.addEventListener('scroll', function(){
    activateMenuAtCurrentSection()
    changeHeaderWhenScroll()
    backToTop()
})


