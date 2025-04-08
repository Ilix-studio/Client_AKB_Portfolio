// Image lazy loading implementation
document.addEventListener("DOMContentLoaded", function () {
  // Select all images to apply lazy loading
  const images = document.querySelectorAll("img");

  // Create an Intersection Observer
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      // If the image is in the viewport
      if (entry.isIntersecting) {
        const img = entry.target;
        // Replace the src placeholder with the actual image src
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
        }
        // Stop watching once loaded
        observer.unobserve(img);
      }
    });
  });

  // Apply to all images
  images.forEach((img) => {
    // Skip images that already have lazy loading native attribute
    if (!img.hasAttribute("loading")) {
      // Set native lazy loading for modern browsers
      img.setAttribute("loading", "lazy");

      // For older browsers without native support, use our observer
      // Store the original src in a data attribute
      if (img.src) {
        img.dataset.src = img.src;
        // Use a lightweight placeholder instead
        img.src =
          'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E';
        // Watch the image
        imageObserver.observe(img);
      }
    }
  });
});
