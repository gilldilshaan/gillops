export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "GillOps",
  url: "https://gillops.dpdns.org",
  logo: "https://gillops.dpdns.org/logo.png",
  image: "https://gillops.dpdns.org/og-image.jpg",
  description:
    "AI automation agency for local businesses. GillOps designs and builds websites, AI automation, and SEO systems that drive real growth.",
  serviceArea: {
    "@type": "Place",
    name: "Global (Remote-first)",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-774-000-2634",
    email: "gill0px@gmail.com",
    contactType: "Customer Service",
    availableLanguage: "English, Hindi, Punjabi",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressRegion: "Punjab",
  },
  sameAs: [
    "https://www.linkedin.com/in/dilshaangill/",
  ],
  areaServed: {
    "@type": "Country",
    name: "Global",
  },
  priceRange: "$$$",
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI Automation & Web Development",
  provider: {
    "@type": "LocalBusiness",
    name: "GillOps",
  },
  areaServed: {
    "@type": "Place",
    name: "Global",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Automation Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Receptionist",
          description: "Human-like AI voice agent that answers calls, books appointments, and handles inquiries 24/7."
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "LinkedIn Outreach Automation",
          description: "Fully automated LinkedIn outreach system that connects with decision-makers and nurtures leads on autopilot."
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Chatbot for Websites",
          description: "Train an AI chatbot on your business data. It answers questions, captures leads, and books meetings while you sleep."
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO Websites",
          description: "Fast, modern websites engineered to rank. Built with Core Web Vitals and technical SEO in mind."
        },
      },
    ],
  },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does it take to build a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typically 2 to 4 weeks, depending on the complexity and number of pages. Rush delivery is available for urgent projects."
      },
    },
    {
      "@type": "Question",
      name: "What AI tools do you use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We use a combination of custom AI pipelines, GPT-4, and industry-leading automation tools tailored to your specific needs."
      },
    },
    {
      "@type": "Question",
      name: "Do I need technical knowledge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We handle all the technical setup and provide a simple dashboard for you to monitor and manage everything."
      },
    },
    {
      "@type": "Question",
      name: "What results can I expect from SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most clients see a 3x increase in organic traffic within 90 days, with significant improvements in keyword rankings."
      },
    },
    {
      "@type": "Question",
      name: "Is there a refund policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer a 30-day money-back guarantee if you are not satisfied with our services. Your satisfaction is our priority."
      },
    },
  ],
};

export const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GillOps",
  review: [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Dr. Kanwarpal Singh Gill",
      },
      reviewBody: "GillOps built a stunning website for my eye hospital. The results speak for themselves.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      itemReviewed: {
        "@type": "LocalBusiness",
        name: "Gill Eye Hospital",
      },
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Taj Sandhu",
      },
      reviewBody: "Professional, fast, and results-driven. The automation systems transformed our lead generation.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      itemReviewed: {
        "@type": "LocalBusiness",
        name: "Taj Sandhu Group",
      },
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "3",
    bestRating: "5",
    worstRating: "5",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "GillOps",
  url: "https://gillops.dpdns.org",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://gillops.dpdns.org/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};
