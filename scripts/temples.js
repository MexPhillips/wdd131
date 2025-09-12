/* Large screens - 500px and above */
// Select the menu button and menu items
const menubutton = document.querySelector('.menubutton');
const menuitems = document.querySelector('.menuitems');

// Toggle the 'open' class when the button is clicked
menubutton.addEventListener('click', () => {
    menuitems.classList.toggle('open');
});

// Optional: ensure menu resets if window is resized
window.addEventListener('resize', () => {
    if (window.innerWidth >= 500) {
        // Remove 'open' class on large screens so the menu shows normally
        menuitems.classList.remove('open');
    }
});

