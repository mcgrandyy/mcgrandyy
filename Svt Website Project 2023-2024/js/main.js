const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        
        nav.classList.toggle('show-menu')
 
        
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu')




 /*=====Swiper for albums=====*/

let swiperHome = new Swiper('.home__swiper',{
    loop:true,
    spaceBetween: -24,
    grabCursor:true,
    slidesPerView:'auto',
    centeredSlides:'auto',

    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },

    breakpoints:{
        1220:{
            spaceBetween:200,
        }
    },
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
 })



