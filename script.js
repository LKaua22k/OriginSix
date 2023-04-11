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