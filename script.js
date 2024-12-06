let typedText = document.getElementById('typed-text');
let text = 'WELCOME TO MY PORTFOLIO' ;
let index = 0;
let typingSpeed = 100;  // Speed of typing
let pauseTime = 3000;  // Wait time before starting again

// Typewriter effect
function typeWriter() {
    if (index < text.length) {
        typedText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, typingSpeed);
    } else {
        setTimeout(() => {
            typedText.innerHTML = '';  // Clear the text
            index = 0;  // Reset the index for the next cycle
            typeWriter();  // Start typing again
        }, pauseTime);
    }
}

window.addEventListener('load', typeWriter);

// Function to detect if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Function to trigger active class for sections in view
function triggerActiveNav() {
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('nav ul li a');

    sections.forEach((section, index) => {
        if (isInViewport(section)) {
            section.classList.add('visible'); // Add class to make the section visible
            // Remove active class from all links
            links.forEach(link => link.classList.remove('active'));
            // Add active class to the corresponding link
            links[index].classList.add('active');
        } else {
            section.classList.remove('visible'); // Remove class when section is out of view
        }
    });
}

// Scroll event listener to trigger active navbar item on scroll
window.addEventListener('scroll', triggerActiveNav);

// Trigger the active nav on page load in case the page is already scrolled
window.addEventListener('load', triggerActiveNav);

// Smooth scrolling on navbar link click
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });

        // Trigger active navbar item after smooth scroll
        triggerActiveNav();
    });
});
let scrollSpeed = 4; // Adjust this value for more or less sensitivity

window.addEventListener('wheel', function(e) {
  e.preventDefault();
  window.scrollBy({
    top: e.deltaY * scrollSpeed,
    behavior: 'smooth'
  });
}, { passive: false });


