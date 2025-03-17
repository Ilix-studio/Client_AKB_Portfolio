document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Show loading message
      formStatus.textContent = "Sending your message...";
      formStatus.className = "form-status";
      formStatus.style.display = "block";

      // Create form data with all the inputs
      const formData = new FormData(contactForm);

      // Use fetch with no-cors mode to submit the form
      fetch(contactForm.action, {
        method: "POST",
        mode: "no-cors", // This is critical for Google Forms
        body: formData,
      })
        .then((response) => {
          // Show success message
          formStatus.textContent =
            "Message sent successfully! Thank you for contacting me.";
          formStatus.className = "form-status success";

          // Reset form
          contactForm.reset();

          // Hide success message after 5 seconds
          setTimeout(() => {
            formStatus.style.display = "none";
          }, 5000);
        })
        .catch((error) => {
          console.error("Error:", error);
          formStatus.textContent =
            "There was an error sending your message. Please try again.";
          formStatus.className = "form-status error";
        });
    });
  }
});
