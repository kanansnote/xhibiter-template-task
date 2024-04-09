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


// Slider for #featuredCategories section using swiper.js
const swiper = new Swiper('.hotBidsCards', {
    slidesPerView: '4', // Adjust this value to control how many slides are visible at a time
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
