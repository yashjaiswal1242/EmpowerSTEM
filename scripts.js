document.addEventListener('DOMContentLoaded', function () {
    // First carousel elements
    const prevBtn1 = document.getElementById('prevBtn1');
    const nextBtn1 = document.getElementById('nextBtn1');
    const carousel1 = document.getElementById('carousel1').querySelector('.carousel');
    const images1 = carousel1.querySelectorAll('.carousel-img');

    // Second carousel elements
    const prevBtn2 = document.getElementById('prevBtn2');
    const nextBtn2 = document.getElementById('nextBtn2');
    const carousel2 = document.getElementById('carousel2').querySelector('.carousel');
    const images2 = carousel2.querySelectorAll('.carousel-img');

    // Reviews section elements
    const prevBtn4 = document.getElementById('prevBtn4');
    const nextBtn4 = document.getElementById('nextBtn4');
    const reviews4 = document.getElementById('reviews4').querySelector('.reviews');
    const reviewsItems = reviews4.querySelectorAll('.reviews-item');

    // Function to handle the left and right button clicks for any carousel or reviews section
    function handleNavigation(container, items, direction) {
        const activeIndex = Array.from(items).findIndex(item => item.classList.contains('active'));

        // Remove the active class from the current active item
        items[activeIndex].classList.remove('active');

        let newIndex;
        if (direction === 'left') {
            newIndex = (activeIndex === 0) ? items.length - 1 : activeIndex - 1;
        } else {
            newIndex = (activeIndex === items.length - 1) ? 0 : activeIndex + 1;
        }

        // Add the active class to the new item
        items[newIndex].classList.add('active');
    }

    // Event listeners for the first carousel buttons
    prevBtn1.addEventListener('click', function () {
        handleNavigation(carousel1, images1, 'left');
    });
    nextBtn1.addEventListener('click', function () {
        handleNavigation(carousel1, images1, 'right');
    });

    // Event listeners for the second carousel buttons
    prevBtn2.addEventListener('click', function () {
        handleNavigation(carousel2, images2, 'left');
    });
    nextBtn2.addEventListener('click', function () {
        handleNavigation(carousel2, images2, 'right');
    });

    // Event listeners for the reviews section buttons
    prevBtn4.addEventListener('click', function () {
        handleNavigation(reviews4, reviewsItems, 'left');
    });
    nextBtn4.addEventListener('click', function () {
        handleNavigation(reviews4, reviewsItems, 'right');
    });

    // Initialize all carousels and reviews section to show the first image/item
    images1[0].classList.add('active');
    images2[0].classList.add('active');
    reviewsItems[0].classList.add('active');
});

// Toggle Navbar on Hamburger Click
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
