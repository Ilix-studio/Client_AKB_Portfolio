document.addEventListener("DOMContentLoaded", function () {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Amrit Kumar Buragohain",
    url: "https://amritburagohain.com",
    image: "https://amritburagohain.com/images/amrit-kumar-buragohain.jpg",
    sameAs: [
      "https://www.facebook.com/amritkumarburagohain",
      "https://twitter.com/amritburagohain",
      "https://www.linkedin.com/in/amrit-kumar-buragohain",
    ],
    jobTitle: "Entrepreneur and Philanthropist",
    worksFor: {
      "@type": "Organization",
      name: "Amrit International School",
    },
    alumniOf: "Dibrugarh University",
    birthPlace: "Golaghat, Assam, India",
    birthDate: "1978-02-08",
    description:
      "Amrit Kumar Buragohain is a renowned entrepreneur, philanthropist, and social worker from Golaghat, Assam, dedicated to uplifting communities through education, healthcare, and economic empowerment.",
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.text = JSON.stringify(personSchema);
  document.head.appendChild(script);
});
