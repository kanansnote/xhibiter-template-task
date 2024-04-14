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

// Copy to Clipboard

const textToCopyArea = document.querySelector('.textToCopyArea');
const copiedText = document.createElement('span');
copiedText.classList.add('copied-text');
copiedText.textContent = 'Copied!';

textToCopyArea.addEventListener('click', () => {
  const text = textToCopyArea.innerText;
  navigator.clipboard.writeText(text)
    .then(() => {
      textToCopyArea.appendChild(copiedText); // Add "Copied!" text on success
      setTimeout(() => {
        copiedText.remove(); // Remove "Copied!" text after a short delay
      }, 1000); // Adjust delay as needed (in milliseconds)
    })
    .catch(err => {
      console.error('Failed to copy text:', err);
    });
});

// Configuring Burger Menu

const burgerMenu = document.querySelector('.burgerMenu');
const navMenu = document.querySelector('.navMenu');
const faBars = document.querySelector('.fa-bars');
const faXMark = document.querySelector('.fa-circle-xmark');

faXMark.style.display = 'none';

// Function to open the menu
function openMenu() {
    navMenu.classList.add('show');
    burgerMenu.classList.add('open');
}

// Function to close the menu
function closeMenu() {
    navMenu.classList.remove('show');
    burgerMenu.classList.remove('open');
}

// Event listener for click event
burgerMenu.addEventListener('click', function () {
    if (burgerMenu.classList.contains('open')) {
        closeMenu();
        faBars.style.display = 'block';
        faXMark.style.display = 'none';
    } else {
        openMenu();
        faBars.style.display = 'none';
        faXMark.style.display = 'block';
    }
});

// Setting Section's Dropdown

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

// Slider for .hotBidsCards section using swiper.js

const swiper = new Swiper('.hotBidsCards', {
  slidesPerView: '4', // Adjust this value to control how many slides are visible at a time
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});
