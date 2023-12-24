const themeButton = document.getElementById('theme-button');
/*=============== Search ===============*/
const searchButton = document.getElementById('search-button'),
      searchClose = document.getElementById('search-close'),
      searchContent = document.getElementById('search-content')

/*===== Search SHOW =====*/
/* Validate if constant exists */
if(searchButton){
    searchButton.addEventListener('click', () =>{
        searchContent.classList.add('show-search')
    })
}

/*===== Search HIDDEN =====*/
/* Validate if constant exists */
if(searchClose){
    searchClose.addEventListener('click', () =>{
        searchContent.classList.remove('show-search')
    })
}
/*=============== SEARCH ===============*/


/*=============== LOGIN ===============*/


// JavaScript time
var current_fs, next_fs, previous_fs; // fieldsets
var left, opacity, scale; // fieldset properties which we will animate
var animating; // flag to prevent quick multi-click glitches

document.querySelectorAll(".next").forEach(function(element) {
  element.addEventListener("click", function() {
    if (animating) return false;
    animating = true;

    current_fs = this.parentElement;
    next_fs = this.parentElement.nextElementSibling;

    // activate next step on progressbar using the index of next_fs
    document.querySelectorAll("fieldset").forEach(function(fieldset, index) {
      if (fieldset === next_fs) {
        document.querySelectorAll("#progressbar li")[index].classList.add("active");
      }
    });

    // show the next fieldset
    next_fs.style.display = "block";

    // hide the current fieldset with style
    var animationInterval = setInterval(function() {
      current_fs.style.opacity -= 0.01;

      // as the opacity of current_fs reduces to 0 - stored in "now"
      // 1. scale current_fs down to 80%
      scale = 1 - (1 - current_fs.style.opacity) * 0.2;
      // 2. bring next_fs from the right(50%)
      left = (current_fs.style.opacity * 50) + "%";
      // 3. increase opacity of next_fs to 1 as it moves in
      opacity = 1 - current_fs.style.opacity;
      current_fs.style.transform = 'scale(' + scale + ')';
      next_fs.style.left = left;
      next_fs.style.opacity = opacity;

      if (current_fs.style.opacity <= 0) {
        current_fs.style.display = 'none';
        animating = false;
        clearInterval(animationInterval);
      }
    }, 5);
  });
});

document.querySelectorAll(".previous").forEach(function(element) {
  element.addEventListener("click", function() {
    if (animating) return false;
    animating = true;

    current_fs = this.parentElement;
    previous_fs = this.parentElement.previousElementSibling;

    // de-activate current step on progressbar
    document.querySelectorAll("fieldset").forEach(function(fieldset, index) {
      if (fieldset === current_fs) {
        document.querySelectorAll("#progressbar li")[index].classList.remove("active");
      }
    });

    // show the previous fieldset
    previous_fs.style.display = "block";

    // hide the current fieldset with style
    var animationInterval = setInterval(function() {
      current_fs.style.opacity -= 0.01;

      // as the opacity of current_fs reduces to 0 - stored in "now"
      // 1. scale previous_fs from 80% to 100%
      scale = 0.8 + (1 - current_fs.style.opacity) * 0.2;
      // 2. take current_fs to the right(50%) - from 0%
      left = ((1 - current_fs.style.opacity) * 50) + "%";
      // 3. increase opacity of previous_fs to 1 as it moves in
      opacity = 1 - current_fs.style.opacity;
      current_fs.style.left = left;
      previous_fs.style.transform = 'scale(' + scale + ')';
      previous_fs.style.opacity = opacity;

      if (current_fs.style.opacity <= 0) {
        current_fs.style.display = 'none';
        animating = false;
        clearInterval(animationInterval);
      }
    }, 5);
  });
});

document.querySelectorAll(".submit").forEach(function(element) {
  element.addEventListener("click", function() {
    return false;
  });
});
/*=============== Search ===============*/
const loginButton = document.getElementById('login-button'),
      loginClose = document.getElementById('login-close'),
      loginContent = document.getElementById('login-content')

/*===== Search SHOW =====*/
/* Validate if constant exists */
if(loginButton){
    loginButton.addEventListener('click', () =>{
        loginContent.classList.add('show-login')
    })
}

/*===== Search HIDDEN =====*/
/* Validate if constant exists */
if(loginClose){
    loginClose.addEventListener('click', () =>{
        loginContent.classList.remove('show-login')
    })
}

/*=============== ADD SHADOW HEADER ===============*/
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== DARK LIGHT THEME ===============*/
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Previously selected theme (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

// Validate if the user previously chose a theme
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark theme
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // Save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});

/*=============== HOME SWIPER ===============*/
let swiperProjects = new Swiper(".projects__container", {
  loop: true,
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
 },
 pagination:{
  el:".swiper-pagination",
 },
 breakpoints:{
  1200:{
    slidesPerView:2,
    spaceBetween:-56,
  },
 },
});

/*=============== SWIPER POPULAR ===============*/

let swiperFavorite = new Swiper('.favorite__swiper', {
  loop: true,
  slidesPerView:"auto",
  centeredSlides:"auto",
  grabCursor:true,
  breakpoints:{
    768:{
      slidesPerView:4,
    }
  }
});

/*=============== Testimonial ===============*/
let swiperTestimonial = new Swiper('.testimonial__container', {
  loop: true,
  spaceBetween: 24,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 4000, // تحديد مدة زمنية بالميللي ثانية، هنا تم تحديدها لتكون 4 ثواني
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)






// document.addEventListener("DOMContentLoaded", function () {
//   const counterSection = document.getElementById("counter-section");
//   const happyUsers = document.getElementById("happy-users");
//   const followers = document.getElementById("followers");
//   const experience = document.getElementById("experience");

//   // Set your target numbers
//   const targetHappyUsers = 100;
//   const targetFollowers = 20;
//   const targetExperience = 5;

//   let counter = 0;

//   function updateCounter() {
//       if (counter < targetHappyUsers * 1000) {
//           counter += 100;
//           happyUsers.innerText = "+" + counter / 1000;
//       }

//       if (counter < targetFollowers * 1000) {
//           counter += 50;
//           followers.innerText = "+" + counter / 1000;
//       }

//       if (counter < targetExperience) {
//           counter += 1; 
//           experience.innerText = "+" + counter;
//       } else if (counter === targetExperience) {
//           experience.innerText = "+" + counter + "K";
//       }

//       if (counter < targetExperience || counter < targetFollowers * 1000 || counter < targetHappyUsers * 1000) {
//           requestAnimationFrame(updateCounter);
//       } else {
//           counterSection.classList.add("show");
//       }
//   }

//   updateCounter();
// });
/*=============== SWIPER HOME2 ===============*/
const swipeHome2 = new Swiper('.home__swiper', {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,
  effect: 'creative',
  creativeEffect: {
    prev: {
      translate: [-100, 0, -500],
      rotate: [0, 0, 15],
      opacity: 0
    },
    next: {
      translate: [100, 0, -500],
      rotate: [0, 0, -15],
      opacity: 0
    },
  },
  // Autoplay configuration
  autoplay: {
    delay: 2000, // 5 seconds
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
/*=============== FAQ ===============*/
const accordionItems = document.querySelectorAll('.questions__item')
accordionItems.forEach((item)=>{
    const accordionHeader = item.querySelector('.questions__header')
    accordionHeader.addEventListener('click',()=>{
        const openItem = document.querySelector('.accordion-open')
        toggleItem(item)
        if(openItem && openItem!==item){
            toggleItem(openItem)
        }
    })
})
const toggleItem =(item)=>{
    const accordionContent =item.querySelector('.questions__content')
    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
 
}
