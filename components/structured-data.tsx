export function RestaurantJsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Restaurant",
        "@id": "https://www.ministryofmasala.co/#restaurant",
        name: "MOM - Ministry Of Masala",
        alternateName: "MOM Restaurant",
        description:
          "Best North Indian restaurant in Old Rajinder Nagar, Delhi. Famous for Chicken Biryani, Roasted Wings, Paneer Tikka and affordable Veg & Non-Veg Thali. Student-friendly prices starting at ₹60.",
        url: "https://www.ministryofmasala.co",
        telephone: "+919810317722",
        image: "https://www.ministryofmasala.co/images/biryani.png",
        priceRange: "₹",
        servesCuisine: [
          "North Indian",
          "Indian",
          "Biryani",
          "Mughlai",
          "Kebab",
        ],
        acceptsReservations: "true",
        menu: "https://www.ministryofmasala.co/menu",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "Shop No. 89, Bara Bazar Marg, Behind Safal Dairy",
          addressLocality: "Old Rajinder Nagar",
          addressRegion: "Delhi",
          postalCode: "110060",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 28.6358,
          longitude: 77.1814,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday"],
            opens: "08:00",
            closes: "01:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "08:00",
            closes: "01:00",
          },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.5",
          reviewCount: "123",
        },
        areaServed: [
          "Old Rajinder Nagar",
          "Rajinder Nagar",
          "Karol Bagh",
          "Kirti Nagar",
          "Rajouri Garden",
          "Patel Nagar",
          "Naraina",
          "Shadipur",
          "Jhandewalan",
          "Inder Puri",
        ],
        hasMenu: {
          "@type": "Menu",
          name: "MOM - Ministry Of Masala Full Menu",
          url: "https://www.ministryofmasala.co/menu",
          hasMenuSection: [
            {
              "@type": "MenuSection",
              name: "Non-Veg Starters",
              hasMenuItem: [
                {
                  "@type": "MenuItem",
                  name: "Roasted Wings",
                  description: "Crispy roasted chicken wings, a house specialty",
                  offers: {
                    "@type": "Offer",
                    price: "130",
                    priceCurrency: "INR",
                  },
                },
                {
                  "@type": "MenuItem",
                  name: "Chicken Tikka",
                  description: "Tandoor-grilled chicken tikka marinated in spices",
                  offers: {
                    "@type": "Offer",
                    price: "160",
                    priceCurrency: "INR",
                  },
                },
                {
                  "@type": "MenuItem",
                  name: "Tangri Kebab",
                  description: "Juicy tandoori chicken leg kebab",
                  offers: {
                    "@type": "Offer",
                    price: "110",
                    priceCurrency: "INR",
                  },
                },
              ],
            },
            {
              "@type": "MenuSection",
              name: "Veg Starters",
              hasMenuItem: [
                {
                  "@type": "MenuItem",
                  name: "Paneer Tikka",
                  description: "Grilled cottage cheese marinated in tandoori spices",
                  offers: {
                    "@type": "Offer",
                    price: "130",
                    priceCurrency: "INR",
                  },
                },
                {
                  "@type": "MenuItem",
                  name: "Hara Bhara Kebab",
                  description: "Vegetarian kebab made with spinach, peas and potatoes",
                  offers: {
                    "@type": "Offer",
                    price: "80",
                    priceCurrency: "INR",
                  },
                },
              ],
            },
            {
              "@type": "MenuSection",
              name: "Main Course - Non-Veg",
              hasMenuItem: [
                {
                  "@type": "MenuItem",
                  name: "Chicken Biryani",
                  description:
                    "Aromatic basmati rice layered with tender chicken pieces and spices",
                  offers: {
                    "@type": "Offer",
                    price: "70",
                    priceCurrency: "INR",
                  },
                },
                {
                  "@type": "MenuItem",
                  name: "Butter Chicken",
                  description:
                    "Creamy tomato-based chicken curry, a North Indian classic",
                  offers: {
                    "@type": "Offer",
                    price: "70",
                    priceCurrency: "INR",
                  },
                },
                {
                  "@type": "MenuItem",
                  name: "Chicken Korma",
                  description: "Rich and creamy chicken curry with aromatic spices",
                  offers: {
                    "@type": "Offer",
                    price: "70",
                    priceCurrency: "INR",
                  },
                },
              ],
            },
            {
              "@type": "MenuSection",
              name: "Thali",
              hasMenuItem: [
                {
                  "@type": "MenuItem",
                  name: "Veg Thali",
                  description:
                    "Complete vegetarian meal with roti, rice, dal, sabzi and salad",
                  offers: {
                    "@type": "Offer",
                    price: "80",
                    priceCurrency: "INR",
                  },
                },
                {
                  "@type": "MenuItem",
                  name: "Chicken Thali",
                  description:
                    "Complete non-veg meal with roti, rice, chicken curry, dal and salad",
                  offers: {
                    "@type": "Offer",
                    price: "99",
                    priceCurrency: "INR",
                  },
                },
              ],
            },
          ],
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.ministryofmasala.co/#localbusiness",
        name: "MOM - Ministry Of Masala",
        image: "https://www.ministryofmasala.co/images/biryani.png",
        telephone: "+919810317722",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "Shop No. 89, Bara Bazar Marg, Behind Safal Dairy",
          addressLocality: "Old Rajinder Nagar",
          addressRegion: "Delhi",
          postalCode: "110060",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 28.6358,
          longitude: 77.1814,
        },
        url: "https://www.ministryofmasala.co",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday"],
            opens: "08:00",
            closes: "01:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "08:00",
            closes: "01:00",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.ministryofmasala.co/#website",
        url: "https://www.ministryofmasala.co",
        name: "MOM - Ministry Of Masala",
        description:
          "Best North Indian restaurant in Old Rajinder Nagar Delhi - Biryani, Roasted Wings, Paneer Tikka, Thali",
        publisher: {
          "@id": "https://www.ministryofmasala.co/#restaurant",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.ministryofmasala.co/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.ministryofmasala.co",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Menu",
            item: "https://www.ministryofmasala.co/menu",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Weekly Thali Menu",
            item: "https://www.ministryofmasala.co/weekly-menu",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "About",
            item: "https://www.ministryofmasala.co/about",
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Contact",
            item: "https://www.ministryofmasala.co/contact",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.ministryofmasala.co/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Where is Ministry Of Masala located?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "MOM - Ministry Of Masala is located at Shop No. 89, Bara Bazar Marg, Behind Safal Dairy, Old Rajinder Nagar, New Delhi - 110060.",
            },
          },
          {
            "@type": "Question",
            name: "What are the opening hours of Ministry Of Masala?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ministry Of Masala is open from 8:00 AM to 1:00 AM every day except Tuesday. The restaurant is closed on Tuesdays.",
            },
          },
          {
            "@type": "Question",
            name: "What is the price of Chicken Biryani at Ministry Of Masala?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Chicken Biryani at Ministry Of Masala starts from just ₹70 for half and ₹120 for full plate, making it one of the most affordable biryani options in Rajinder Nagar.",
            },
          },
          {
            "@type": "Question",
            name: "Does Ministry Of Masala offer a weekly thali menu?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes! Ministry Of Masala offers a daily changing weekly thali menu. Veg Thali is priced at ₹80 per meal (₹3,600/month) and Non-Veg Thali at ₹90 per meal (₹4,700/month). Both include roti/rice, dal, sabzi, and salad.",
            },
          },
          {
            "@type": "Question",
            name: "What is the best dish at Ministry Of Masala?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ministry Of Masala is famous for its Chicken Biryani, Roasted Wings, Paneer Tikka, and Veg & Non-Veg Thali. The Roasted Wings and Chicken Biryani are the most popular items among customers.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
