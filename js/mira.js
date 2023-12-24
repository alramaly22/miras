const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
      /*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', () =>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle','nav-menu')

/*==================== SWIPER JS ====================*/
let galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 0,
    slidesPerView: 0,
})

let galleryTop = new Swiper('.gallery-top', {
    effect: 'fade',
    loop: true,

    thumbs: {
      swiper: galleryThumbs
    }
})


/*==================== POPUP ====================*/
// const btnOpenVideo = document.querySelectorAll('.islands__video-content')
// const islandsPopup = document.getElementById('popup')

// function poPup(){
//     islandsPopup.classList.add('show-popup')
// }
// btnOpenVideo.forEach(b => b.addEventListener('click', poPup))

// const btnCloseVideo = document.getElementById('popup-close')

// btnCloseVideo.addEventListener('click', ()=> {
//     islandsPopup.classList.remove('show-popup')
// })

/*==================== GSAP ANIMATION ====================*/
const controlImg = document.querySelectorAll('.controls__img')

// function scrollAnimation(){
//     gsap.from('.islands__subtitle', {opacity: 0, duration: .2, delay: .2, y: -20})
//     gsap.from('.islands__title', {opacity: 0, duration: .3, delay: .3, y: -20})
//     gsap.from('.islands__description', {opacity: 0, duration: .4, delay: .4, y: -20})
//     gsap.from('.islands__button', {opacity: 0, duration: .5, delay: .5, y: -20})
//     gsap.from('.islands__video-content', {opacity: 0, duration: .6, delay: .6, y: -20})

//     islandsPopup.classList.remove('show-popup')
// }

// controlImg.forEach(c => c.addEventListener('click', scrollAnimation))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)



/* choose faq */
const faqItems = document.querySelectorAll('.choose__faq-item')
// 1.select each item
faqItems.forEach( (item) =>{
    const faqHeader = item.querySelector('.choose__faq-header')

    // select each button click
    faqHeader.addEventListener('click' , () =>{
        // select the current faq-open class
        const openItem = document.querySelector('.faq-open')
        // call the  toggleitem function
        toggleItem(item)
        // remove the faq-open class from other items
        if(openItem && openItem != item){
            toggleItem(openItem)
        }
    })
})
// creat function to display the contect
const toggleItem = (item) =>{
    // select each faq contecnt
    const faqContent =item.querySelector('.choose__faq-content')
    // if the same item contains the faq-open class ,remove
    if(item.classList.contains('faq-open')){
        faqContent.removeAttribute('style')
        item.classList.remove('faq-open')

    } else{
            // add max-height to use the content and the faq-open class
    faqContent.style.height = faqContent.scrollHeight + 'px'
    item.classList.add('faq-open')
    }

}



// /*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
});
// serv
const model =document.querySelectorAll('.services__model'),
  modelButton = document.querySelectorAll('.serv__botton'),
  modelClose =  document.querySelectorAll('.services__model-close')

  let activeModel = (modelClick) =>{
    model[modelClick].classList.add('active-model')
  }
  modelButton.forEach((modelButton, i) =>{
    modelButton.addEventListener('click', ()=>{
      activeModel(i)
    })
  })
  modelClose.forEach((modelClose) =>{
    modelClose.addEventListener('click',() =>{
      model.forEach((modelRemove) =>{
        modelRemove.classList.remove('active-model')
      })
    })
  })

// 
$(document).ready(function() {
  $(".testimonial__img").click(function() {
    // Toggle the "enlarged" class on the clicked image
    $(this).toggleClass("enlarged");

    // Automatically revert to the original size after 5 seconds
    setTimeout(function() {
      $(".testimonial__img").removeClass("enlarged");
    }, 5000);
  });
});

/*==================== VIDEO ====================*/
const videoFile = document.getElementById('video-file');
const videoButton = document.getElementById('video-button');
const videoIcon = document.getElementById('video-icon');
var video = document.getElementById("video-file");
video.volume = 0.5; 
function playPause() {
    if (videoFile.paused) {
        // Play video
        videoFile.play();
        // Change the icon
        videoIcon.classList.remove('fa-play');
        videoIcon.classList.add('fa-pause');
    } else {
        // Pause video
        videoFile.pause();
        // Change the icon
        videoIcon.classList.remove('fa-pause');
        videoIcon.classList.add('fa-play');
    }
}

videoButton.addEventListener('click', playPause);

function finalVideo() {
    // Video ends, icon change
    videoIcon.classList.remove('fa-pause');
    videoIcon.classList.add('fa-play');
}

// When the video ends
videoFile.addEventListener('ended', finalVideo);



// const sections = document.querySelectorAll('section[id]')

// function scrollActive(){
//   const scrollY = window.pageYOffset

//   sections.forEach(current =>{
//       const sectionHeight = current.offsetHeight
//       const sectionTop = current.offsetTop - 50;
//       sectionId = current.getAttribute('id')

//       if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//           document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
//       }else{
//           document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
//       }
//   })
// }
// window.addEventListener('scroll', scrollActive)

var loader =document.getElementById("preloader");
window.addEventListener("load", function() {
  loader.style.display ="none";
})
