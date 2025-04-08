document.addEventListener("DOMContentLoaded", function () {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://amritburagohain.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://amritburagohain.com/#about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Journey",
        item: "https://amritburagohain.com/#journey",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Accomplishments",
        item: "https://amritburagohain.com/#accomplishments",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Philanthropy",
        item: "https://amritburagohain.com/#philanthropy",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Contact",
        item: "https://amritburagohain.com/#contact",
      },
    ],
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.text = JSON.stringify(breadcrumbSchema);
  document.head.appendChild(script);
});
