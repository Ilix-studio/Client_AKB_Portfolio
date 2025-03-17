// Create a new file called scroll-reveal.js

// Select all elements to animate
const revealElements = document.querySelectorAll(
  ".section-title, .about-content, .timeline-item, .accomplishment-card, .philanthropy-item, .contact-item"
);

// Configure the Intersection Observer
const revealOptions = {
  threshold: 0.1, // Trigger when at least 10% of the element is visible
  rootMargin: "0px 0px -50px 0px", // Offset from the viewport
};

// Callback function when elements intersect with viewport
const revealCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("revealed");
      // Stop observing after the element is revealed (optional)
      // observer.unobserve(entry.target);
    } else {
      // Optional: hide elements when they leave the viewport
      // entry.target.classList.remove('revealed');
    }
  });
};

// Create the observer
const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

// Start observing each element
revealElements.forEach((element) => {
  element.classList.add("reveal-element"); // Add initial class for hidden state
  revealObserver.observe(element);
});

// Additional observers for specific animation types
// Fade-in-up animation for specific elements
const fadeUpElements = document.querySelectorAll(
  ".hero-content, .personal-info, .philanthropy-grid"
);
fadeUpElements.forEach((element) => {
  element.classList.add("fade-up");
  revealObserver.observe(element);
});

// Staggered animation for items in a container
const staggerContainers = document.querySelectorAll(
  ".accomplishments-container, .timeline-container"
);
staggerContainers.forEach((container) => {
  // Get all child elements that should be animated with delay
  const items = container.children;
  Array.from(items).forEach((item, index) => {
    item.classList.add("stagger-item");
    item.style.transitionDelay = `${index * 0.1}s`;
    revealObserver.observe(item);
  });
});

// Add special animation for specific sections
const zoomElements = document.querySelectorAll(".about-img img");
zoomElements.forEach((element) => {
  element.classList.add("zoom-in");
  revealObserver.observe(element);
});
