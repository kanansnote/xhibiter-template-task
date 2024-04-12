const header = document.querySelector('header');

// Make headline id element disappear when scrolling down
window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const header = document.querySelector('header');
    const threshold = 50; // Adjust as needed

    if (scrollPosition > threshold) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Slider for .hotBidsCards section using swiper.js
const swiper = new Swiper('.hotBidsCards', {
    slidesPerView: '4', // Adjust this value to control how many slides are visible at a time
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

//
const selectForm = document.getElementById('topCollectionsForm');
const selectDropdown = document.getElementById('topCollectionsDropdown');
const selectArrowElement = document.querySelector('.fa-angle-down');
let isOpen = false; // Flag to track open/closed state

selectForm.addEventListener('click', function () {
  isOpen = !isOpen; // Toggle the flag on each click

  // Update the transform property based on the flag
  selectArrowElement.style.transform = `rotate(${isOpen ? 180 : 0}deg)`;
});

document.addEventListener('click', function(event) {
    if (!event.target.matches('#topCollectionsForm') && !selectDropdown.contains(event.target)) {
      isOpen = false;
      selectDropdown.classList.remove('show');
      selectArrowElement.style.transform = 'rotate(0deg)';
    }
});
