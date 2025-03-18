// Toggle Mobile Menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Close mobile menu when a nav item is clicked
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

// Change navbar style on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Active link based on scroll position
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active");
    }
  });
});

// Add this code to your main.js file
// Text-to-Speech functionality

document.addEventListener("DOMContentLoaded", function () {
  // Find the listen button
  const listenButton = document.querySelector("#listen-button");

  if (listenButton) {
    listenButton.addEventListener("click", function () {
      // Get the text to read from the about section
      const aboutTextElements = document.querySelectorAll(".about-text p");
      let textToRead = "";

      // Combine all paragraphs in the about section
      aboutTextElements.forEach((paragraph) => {
        textToRead += paragraph.textContent + " ";
      });

      // Create speech synthesis utterance
      const utterance = new SpeechSynthesisUtterance(textToRead);

      // Set properties for the speech
      utterance.lang = "en-US";
      utterance.rate = 1.2; // Slightly slower than default
      utterance.pitch = 0;

      // Optional: Add visual feedback when speaking starts and ends
      utterance.onstart = function () {
        listenButton.classList.add("speaking");
        listenButton.innerHTML = '<span class="tts-icon">⏸️</span> Pause';
      };

      utterance.onend = function () {
        listenButton.classList.remove("speaking");
        listenButton.innerHTML = '<span class="tts-icon">🔊</span> Listen';
      };

      // Check if already speaking and toggle
      if (window.speechSynthesis.speaking) {
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        } else {
          window.speechSynthesis.pause();
          listenButton.innerHTML = '<span class="tts-icon">▶️</span> Resume';
        }
      } else {
        // Start speaking
        window.speechSynthesis.speak(utterance);
      }
    });
  }
});
