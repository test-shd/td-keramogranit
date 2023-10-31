
$('.header__btn').on('click', function(){
    $('.header__nav').addClass('header__nav_active');
});
$('.menu__close').on('click', function(){
    $('.header__nav').removeClass('header__nav_active');
})



$('.menu__item__submenu').on('mouseenter', function(){
    $('.submenu').addClass('submenu_active');
});
$('.menu__item__submenu').on('mouseleave', function(){
  $('.submenu').removeClass('submenu_active');
});

//promo slider
const swiper = new Swiper('.promo__slider', {
      effect: 'fade', 
    // Navigation arrows
    navigation: {
      nextEl: '.promo__slider_next',
      prevEl: '.promo__slider_prev',
    },
  
   
  });

//rew slider
const swiper2 = new Swiper('.main-rew__slider', {
    slidesPerView: 1,
    spaceBetween: 40,
    centeredSlides: false,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      dynamicBullets: true,
    },
    
    
    // Navigation arrows
    
    breakpoints: {
      
      1024: {
        slidesPerView: 3,
        spaceBetween: 54,
        centeredSlides: true,
        pagination: false,
        navigation: {
          nextEl: '.main-rew__slider__next',
          prevEl: '.main-rew__slider__prev',
        },
      },
     
     
    },
   
  });

//маска для телефона

let element = document.querySelectorAll('.phone');
let maskOptions = {
    mask: '+7(000)000-00-00'
};
for (let i = 0; i < element.length; i++) {
    let mask = IMask(element[i], maskOptions);
}

  function animation() {
   gsap.registerPlugin(ScrollTrigger);

    gsap.from('.main-catalog__item', {
      opacity: 0,
      yPercent: 100,
      stagger: 0.4,
      scrollTrigger: {
        trigger: '.main-catalog',
        start: '30% bottom', 
       
        toggleActions: 'play none none reverse',
      }
    });

    gsap.to('.promo__img', {
      'width': '150%',
      scrollTrigger: {
        start: 'top top',
        end: '400px',
        // markers: true,
        scrub: true,
      }
    });

    const tlImg = gsap.timeline({
      scrollTrigger: {
        trigger: '.main-about__images',
        start: 'top top',
        pin: true,
        scrub: 1,
      }
    });
    tlImg.to('.main-about__img:first-child img', {
      scale: 1
    });
    tlImg.to('.main-about__img:last-child img', {
      scale: 0
    }, '<');
   
 }
 animation();



