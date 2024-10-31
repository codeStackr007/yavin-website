// Function to handle navbar and back-to-top button visibility on scroll
function userScroll() {
  const navbar = document.querySelector('.navbar');
  const toTopBtn = document.querySelector('#to-top');

  window.addEventListener('scroll', () => {
    // Check if the scroll position is greater than 50
    if (window.scrollY > 50) {
      // Add sticky class to navbar and show back-to-top button
      navbar.classList.add('navbar-sticky');
      toTopBtn.classList.add('show');
    } else {
      // Remove sticky class from navbar and hide back-to-top button
      navbar.classList.remove('navbar-sticky');
      toTopBtn.classList.remove('show');
    }
  });
}

// Function to scroll to the top of the page
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// Function to increment stats counters
function incrementStats() {
  const counters = document.querySelectorAll('.counter');
  
  counters.forEach((counter) => {
    counter.innerText = 0;

    const updateCounter = () => {
      const target = +counter.getAttribute('data-target'); // Get the target number
      const c = +counter.innerText; // Current number
      const increment = target / 200; // Determine increment value

      if (c < target) {
        // Increment the counter until target is reached
        counter.innerText = Math.ceil(c + increment);
        setTimeout(updateCounter, 1);
      } else {
        // Set the counter to the target value
        counter.innerText = target;
      }
    };
    updateCounter();
  });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', userScroll); // Initialize userScroll function when DOM is fully loaded
document.addEventListener('DOMContentLoaded', incrementStats); // Initialize incrementStats function when DOM is fully loaded
document.querySelector('#to-top').addEventListener('click', scrollToTop); // Scroll to the top on back-to-top button click
