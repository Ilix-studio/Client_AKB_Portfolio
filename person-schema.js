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
      url: "https://amritinternationalschool.com",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Dibrugarh University",
    },
    birthPlace: {
      "@type": "Place",
      name: "Golaghat, Assam, India",
    },
    birthDate: "1978-02-08",
    description:
      "Amrit Kumar Buragohain is a renowned entrepreneur, philanthropist, and community leader from Golaghat, Assam with expertise in transport, construction, education, and agriculture.",
    knowsLanguage: ["English", "Assamese", "Hindi"],
    nationality: {
      "@type": "Country",
      name: "India",
    },
    hasOccupation: [
      {
        "@type": "Occupation",
        name: "Entrepreneur",
        description:
          "Established businesses in transport, construction, real estate, and agriculture",
      },
      {
        "@type": "Occupation",
        name: "Philanthropist",
        description:
          "Supporting education, healthcare, and community development initiatives",
      },
    ],
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.text = JSON.stringify(personSchema);
  document.head.appendChild(script);
});
