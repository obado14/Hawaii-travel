export interface BlogSection {
  heading: string;
  paragraphs: string[];
  tips?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
  };
  sections: BlogSection[];
  relatedTourName: string;
  relatedTourLink: string;
}

export const posts: BlogPost[] = [
  {
    id: "top-10-oahu",
    title: "Top 10 Things to Do in Oahu for First-Time Visitors",
    category: "Travel Guide",
    date: "September 18, 2026",
    readTime: "6 min read",
    image: "/sites/gotourshawaii/root/Banner-BG-Thumbnail.jpg",
    excerpt:
      "Planning your dream Hawaiian vacation? From the breathtaking heights of the Koʻolau mountains to snorkeling with sea turtles, here is our ultimate local checklist.",
    author: {
      name: "Koa Takahashi",
      role: "Lead Island Guide & Oahu Native",
    },
    relatedTourName: "Hidden Gems of Oahu with Waimea Botanical Garden & Waterfall",
    relatedTourLink: "/tour-packages",
    sections: [
      {
        heading: "1. Hike Diamond Head Crater (Lēʻahi)",
        paragraphs: [
          "No first-time visit to Oahu is complete without ascending to the rim of this 300,000-year-old volcanic crater. The 1.6-mile roundtrip hike rewards you with 360-degree panoramic views across Waikiki, Honolulu's skyline, and the turquoise Pacific ocean.",
          "Keep in mind that out-of-state visitors now require reservations in advance. Early morning departure slots are the best way to beat the tropical midday heat.",
        ],
        tips: [
          "Bring plenty of drinking water and wear comfortable sneakers.",
          "Check entry reservation availability at least 14 days before your visit.",
        ],
      },
      {
        heading: "2. Snorkel at Waikiki's Turtle Canyon",
        paragraphs: [
          "Just 15 minutes by catamaran off Waikiki Beach sits Turtle Canyon, a bustling underwater cleaning station where Hawaiian green sea turtles (honu) congregate. Here, colorful reef fish gently clean algae from their shells in crystal clear waters.",
          "Always remember Hawaii state laws require a respectful distance of at least 10 feet (3 meters) from sea turtles at all times.",
        ],
      },
      {
        heading: "3. Pay Tribute at Pearl Harbor & USS Arizona Memorial",
        paragraphs: [
          "A deeply moving and essential experience honoring the heroes of December 7, 1941. Take the official Navy shuttle boat across the harbor to the poignant floating memorial resting directly above the sunken battleship USS Arizona.",
          "Strict no-bag policies are enforced throughout the national historic park, so travel light with just a camera, wallet, and water bottle.",
        ],
      },
      {
        heading: "4. Swim Under Waimea Valley Waterfall",
        paragraphs: [
          "Located on Oahu's legendary North Shore, Waimea Valley encompasses 1,875 acres of sacred botanical sanctuary. Walk through over 5,000 species of tropical flora before taking a revitalizing freshwater swim at the base of the 45-foot cascade.",
        ],
      },
      {
        heading: "5. Experience an Authentic Hawaiian Luau",
        paragraphs: [
          "Immerse yourself in ancient Polynesian traditions, live ukulele and slack-key guitar melodies, traditional imu roast pig, fresh poke, and the thrilling Samoan fire-knife dance beneath the island stars.",
        ],
      },
    ],
  },
  {
    id: "turtle-canyon-guide",
    title: "The Ultimate Guide to Snorkeling at Waikiki’s Turtle Canyon",
    category: "Wildlife & Ocean",
    date: "September 12, 2026",
    readTime: "5 min read",
    image: "/sites/gotourshawaii/root/waikiki-turtle-banner.png",
    excerpt:
      "Turtle Canyon is Hawaii's famous reef cleaning station. Learn the best times of day to snorkel, respectful marine guidelines, and how to spot green sea turtles.",
    author: {
      name: "Leilani Kealoha",
      role: "Marine Biologist & Snorkel Specialist",
    },
    relatedTourName: "Waikiki Turtle Canyon Snorkeling and Swim",
    relatedTourLink: "/tour-packages",
    sections: [
      {
        heading: "What Makes Turtle Canyon So Unique?",
        paragraphs: [
          "Situated roughly half a mile off the coast of Waikiki, Turtle Canyon is a geological reef ridge known among marine biologists as a 'cleaning station'. Herbivorous reef fish, such as tangs and wrasses, nibble algae and parasites off the shells and skin of Hawaiian green sea turtles (honu).",
          "Because this symbiotic relationship happens daily, sightings of multiple turtles resting on the coral shelves or surfacing for air are practically guaranteed year-round.",
        ],
      },
      {
        heading: "Best Time of Day for Snorkeling",
        paragraphs: [
          "Morning charters (between 7:30 AM and 10:30 AM) generally offer the calmest trade winds and highest underwater visibility before the afternoon swells pick up.",
          "However, midday departures provide the brightest direct sunlight penetrating the water, creating brilliant photography conditions.",
        ],
        tips: [
          "Only use certified reef-safe sunscreen (Hawaii law bans sunscreens containing oxybenzone or octinoxate).",
          "Wear a high-visibility life vest or snorkel belt for effortless floating above the reef.",
        ],
      },
      {
        heading: "Respectful Marine Etiquette",
        paragraphs: [
          "The Hawaiian green sea turtle is protected under federal and state law. Never touch, chase, corner, or feed the turtles. Maintain at least 10 feet of distance and allow them a clear, unobstructed path to surface for breath.",
        ],
      },
    ],
  },
  {
    id: "pearl-harbor-tips",
    title: "Visiting Pearl Harbor: Secrets to a Smooth and Meaningful Trip",
    category: "History & Culture",
    date: "August 28, 2026",
    readTime: "7 min read",
    image: "/sites/gotourshawaii/root/optimized-pearl-harbor-02.jpg",
    excerpt:
      "Navigating ticket reservations, bag policies, and the emotional journey of the USS Arizona Memorial. Here is how our guided tours remove all the stress.",
    author: {
      name: "David Vance",
      role: "Military Historian & Senior Tour Narrator",
    },
    relatedTourName: "Premier Pearl Harbor & USS Arizona Memorial Tour",
    relatedTourLink: "/tour-packages",
    sections: [
      {
        heading: "Understanding the Historic Site",
        paragraphs: [
          "Pearl Harbor National Memorial is one of the most visited historical landmarks in the United States. Spanning two world-class museum galleries, outdoor remembrance circles, and the USS Arizona Memorial boat shuttle, planning ahead is paramount.",
          "Visitors can also explore the Battleship Missouri Memorial, the Pacific Fleet Submarine Museum, and the Pearl Harbor Aviation Museum on Ford Island.",
        ],
      },
      {
        heading: "The Strict No-Bag Policy",
        paragraphs: [
          "Due to strict national park security protocols, no purses, backpacks, camera bags, diaper bags, or fanny packs are allowed inside the gates. Any bag larger than a standard clutch must be stored at the baggage locker facility for a fee.",
          "You are permitted to carry cameras without bags, smartphones, wallets, and clear water bottles.",
        ],
        tips: [
          "Bring government-issued photo ID for all adult travelers.",
          "Dress respectfully: swimwear, profane attire, or excessively revealing clothing are strictly prohibited.",
        ],
      },
      {
        heading: "Why Guided Tours Remove All Hassle",
        paragraphs: [
          "Independent ticket reservations on Recreation.gov disappear within seconds of release. Our guided tours include guaranteed boat shuttle tickets, air-conditioned roundtrip hotel transfers from Waikiki, and rich historical narration from expert local guides.",
        ],
      },
    ],
  },
  {
    id: "waimea-valley-waterfall",
    title: "Waimea Valley & Waterfall: Flora, History & Swimming Guide",
    category: "Nature & Hiking",
    date: "August 15, 2026",
    readTime: "4 min read",
    image: "/sites/gotourshawaii/root/optimized-water-fall-002.jpg",
    excerpt:
      "Stroll through 5,000 species of tropical botanical plants before cooling off under a 45-foot cascading natural waterfall on Oahu's North Shore.",
    author: {
      name: "Koa Takahashi",
      role: "Lead Island Guide & Oahu Native",
    },
    relatedTourName: "Hidden Gems of Oahu with Waimea Botanical Garden & Waterfall",
    relatedTourLink: "/tour-packages",
    sections: [
      {
        heading: "The Valley of the Priests",
        paragraphs: [
          "Known in Hawaiian history as 'The Valley of the Priests' (Kāhuna Nui), Waimea was an essential spiritual and governing center of Oahu for over 700 years. The valley retains sacred religious shrines (heiau), ancient living compounds, and royal agricultural terraces.",
        ],
      },
      {
        heading: "The World-Class Botanical Gardens",
        paragraphs: [
          "The paved walking path meanders 0.75 miles through 41 distinct botanical collections representing tropical plants from Polynesia, South America, Africa, and Madagascar. You will encounter gigantic monkeypod trees, exotic ginger blossoms, and endangered endemic Hawaiian plants.",
        ],
        tips: [
          "Life vests are provided and required for all swimmers in the waterfall pool.",
          "Wear water shoes or sturdy sandals for easy entry over river pebbles.",
        ],
      },
      {
        heading: "Swimming in the Waterfall Pool",
        paragraphs: [
          "At the trail's conclusion rests the 45-foot natural waterfall cascading into a deep freshwater basin. Certified lifeguards are on duty daily to maintain swimmer safety in the pristine mountain waters.",
        ],
      },
    ],
  },
  {
    id: "diamond-head-hike-tips",
    title: "Hiking Diamond Head Crater: What to Bring, Permits & Sunrise Views",
    category: "Adventure",
    date: "July 30, 2026",
    readTime: "5 min read",
    image: "/sites/gotourshawaii/root/Header-Photo-Diamond-Head.jpeg",
    excerpt:
      "Everything you need to conquer Oahu’s most iconic trail. How the new state park reservation system works and why our Waikiki shuttle is the easiest way to go.",
    author: {
      name: "Leilani Kealoha",
      role: "Adventure & Hiking Specialist",
    },
    relatedTourName: "Exclusive Diamond Head Shuttle Tour",
    relatedTourLink: "/tour-packages",
    sections: [
      {
        heading: "Trail Overview & Difficulty",
        paragraphs: [
          "The Diamond Head State Monument trail is 0.8 miles each way with a 560-foot elevation gain from crater floor to summit bunker. The path includes paved switchbacks, unpaved volcanic gravel, a 225-foot historic military tunnel, and steep concrete staircases.",
          "Most hikers complete the roundtrip in 90 to 120 minutes, including time at the summit taking photos of Waikiki and the southeast coast.",
        ],
      },
      {
        heading: "Essential Gear & Preparation",
        paragraphs: [
          "There is virtually no shade along the volcanic crater walls. An early morning start provides cooler temperatures and glorious golden sunrise lighting.",
        ],
        tips: [
          "Sturdy running sneakers are strongly recommended; avoid flip-flops or high heels.",
          "Bring at least 1 liter of cold drinking water per person.",
          "Wear a wide-brim hat and apply reef-safe sunscreen before hiking.",
        ],
      },
      {
        heading: "Skip Parking Stress with Roundtrip Shuttles",
        paragraphs: [
          "Parking inside the crater tunnel is extremely limited and requires exact scheduled reservations. Our daily Waikiki Diamond Head shuttle drops you right at the visitor entrance and picks you up when you finish.",
        ],
      },
    ],
  },
  {
    id: "garlic-shrimp-north-shore",
    title: "Where to Find the Best Kahuku Garlic Shrimp on Oahu's North Shore",
    category: "Food & Culture",
    date: "July 14, 2026",
    readTime: "4 min read",
    image: "/sites/gotourshawaii/root/Visual-img-2-e1714631806737.jpg",
    excerpt:
      "No trip around the island is complete without stopping at the authentic shrimp trucks in Kahuku. Butter, garlic, rice, and fresh ocean delicacies.",
    author: {
      name: "David Vance",
      role: "Island Foodie & Cultural Host",
    },
    relatedTourName: "Hidden Gems of Oahu with Waimea Botanical Garden & Waterfall",
    relatedTourLink: "/tour-packages",
    sections: [
      {
        heading: "The Legendary North Shore Shrimp Legacy",
        paragraphs: [
          "In the early 1990s, local aquaculture farms in Kahuku began harvesting fresh prawns and cooking them right out of roadside food trucks. Today, Kahuku garlic shrimp is recognized worldwide as an essential culinary stop when touring Oahu's coastline.",
        ],
      },
      {
        heading: "Classic Styles to Order",
        paragraphs: [
          "The signature dish is Scampi Style: plump, shell-on prawns sautéed in copious amounts of minced garlic, butter, and lemon, served over two scoops of sticky white rice drizzled with golden garlic butter.",
          "Other beloved options include Spicy Hot Garlic, Lemon Pepper, and crispy Coconut Butterfly Shrimp with sweet chili dipping sauce.",
        ],
        tips: [
          "Keep wet wipes handy; peeling shell-on garlic shrimp is wonderfully messy!",
          "Pair your plate with fresh ice-cold Hawaiian shave ice or chilled coconut water.",
        ],
      },
      {
        heading: "How Our Circle Island Tours Include Shrimp Stops",
        paragraphs: [
          "All of our full-day circle island itineraries feature a dedicated midday stop at the iconic North Shore food truck parks, allowing you to taste authentic local flavors without feeling rushed.",
        ],
      },
    ],
  },
];
