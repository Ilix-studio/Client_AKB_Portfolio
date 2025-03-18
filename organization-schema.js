document.addEventListener("DOMContentLoaded", function () {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Amrit International School",
    url: "https://amritinternationalschool.com",
    logo: "https://amritinternationalschool.com/logo.png",
    foundingDate: "2010",
    founder: {
      "@type": "Person",
      name: "Amrit Kumar Buragohain",
    },
    description:
      "The first CBSE school in Sarupathar LAC, providing quality education to students with a mission to offer free education to 2,000 economically disadvantaged students.",
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.text = JSON.stringify(organizationSchema);
  document.head.appendChild(script);
});
