/* ====================================
   3. JAVASCRIPT (scripts.js)
   ==================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Mobile Navigation Toggle ---
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            mainNav.classList.toggle('open');
            // Change button text or icon for accessibility/visual feedback
            const isExpanded = mainNav.classList.contains('open');
            navToggle.setAttribute('aria-expanded', isExpanded);
            navToggle.textContent = isExpanded ? '✕' : '☰'; // '✕' or '&#x2715;' for close
        });
        
        // Close nav when a link is clicked (on mobile)
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 768) {
                    mainNav.classList.remove('open');
                    navToggle.textContent = '☰';
                    navToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    // --- 2. Dynamic Copyright Year ---
    // Note: You must add an element with id="current-year" in the footer HTML for this to work.
    // Example: <p>&copy; <span id="current-year"></span> MEX GAMING ARENA. All rights reserved.</p>
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // --- 3. Simple Form Submission Alert (for Connect Page) ---
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Message Sent! (Form submission is placeholder and requires backend integration)');
            contactForm.reset();
        });
    }

});