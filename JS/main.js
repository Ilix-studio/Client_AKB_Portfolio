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

// Initialize text-to-speech functionality for the About section
document.addEventListener("DOMContentLoaded", function () {
  // Get the about section paragraphs
  const aboutParagraphs = document.querySelectorAll("#about .about-text p");

  // Create a combined text of all paragraphs
  const aboutText = Array.from(aboutParagraphs)
    .map((p) => p.textContent)
    .join(" ");

  // Create the text-to-speech button
  const ttsButton = document.createElement("button");
  ttsButton.innerHTML = '<span class="tts-icon">🔊</span> Listen';
  ttsButton.classList.add("tts-button");
  ttsButton.title = "Listen to this text";

  // Add styles programmatically (you can move these to your CSS file)
  ttsButton.style.display = "flex";
  ttsButton.style.alignItems = "center";
  ttsButton.style.gap = "8px";
  ttsButton.style.backgroundColor = "#364E68";
  ttsButton.style.color = "var(--white)";
  ttsButton.style.border = "none";
  ttsButton.style.borderRadius = "5px";
  ttsButton.style.padding = "10px 25px";
  ttsButton.style.margin = "20px 0";
  ttsButton.style.cursor = "pointer";
  ttsButton.style.transition = "background-color 0.3s";

  // Add hover effect
  ttsButton.addEventListener("mouseover", function () {
    this.style.backgroundColor = "#132238";
  });

  ttsButton.addEventListener("mouseout", function () {
    this.style.backgroundColor = "var(--secondary)";
  });

  // Variables to control speech
  let isSpeaking = false;
  let speechSynthesis = window.speechSynthesis;
  let speechUtterance = null;

  // Add click event to button
  ttsButton.addEventListener("click", function () {
    if (isSpeaking) {
      // Stop speaking
      speechSynthesis.cancel();
      isSpeaking = false;
      ttsButton.innerHTML = '<span class="tts-icon">🔊</span> Listen';
    } else {
      // Start speaking
      speechUtterance = new SpeechSynthesisUtterance(aboutText);

      // Set voice properties
      speechUtterance.rate = 1.2; // Speaking rate (0.1 to 10)
      speechUtterance.pitch = 0; // Speaking pitch (0 to 2)
      speechUtterance.volume = 1; // Volume (0 to 1)

      // Optional: Select a voice
      const voices = speechSynthesis.getVoices();
      if (voices.length > 0) {
        // Try to find an English voice
        const englishVoice = voices.find((voice) => voice.lang.includes("en-"));
        if (englishVoice) {
          speechUtterance.voice = englishVoice;
        }
      }

      // Event handlers for speech
      speechUtterance.onstart = function () {
        isSpeaking = true;
        ttsButton.innerHTML = '<span class="tts-icon">⏹️</span> Stop';
      };

      speechUtterance.onend = function () {
        isSpeaking = false;
        ttsButton.innerHTML = '<span class="tts-icon">🔊</span> Listen';
      };

      speechUtterance.onerror = function () {
        isSpeaking = false;
        ttsButton.innerHTML = '<span class="tts-icon">🔊</span> Listen';
        console.error("Speech synthesis error occurred");
      };

      // Start speaking
      speechSynthesis.speak(speechUtterance);
    }
  });

  // Add button to the about section
  const aboutContent = document.querySelector("#about .about-text");
  aboutContent.appendChild(ttsButton);

  // Handle page unload to stop speech
  window.addEventListener("beforeunload", function () {
    if (isSpeaking) {
      speechSynthesis.cancel();
    }
  });

  // Fix for Safari/Chrome bug where voices may not be available immediately
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = function () {
      // This will run when voices are loaded
      console.log("Voices loaded");
    };
  }
});
