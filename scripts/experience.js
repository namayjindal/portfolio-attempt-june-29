document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.custom-cursor');
    const body = document.body;

    // Add the custom-cursor-page class to the body
    body.classList.add('custom-cursor-page');

    // Add the animated class to start color changing
    cursor.classList.add('animated');

    // Update cursor position
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    const experienceItems = document.querySelectorAll('.experience-item');
    const navHeight = document.querySelector('nav').offsetHeight;

    function checkFade() {
        experienceItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < navHeight + 10) {
                item.classList.add('fade-out');
            } else {
                item.classList.remove('fade-out');
            }
        });
    }

    window.addEventListener('scroll', checkFade);
    checkFade(); // Initial check

    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

});