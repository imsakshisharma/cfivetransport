export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  badge: string;
}

export interface TestimonialItem {
  id: string;
  client: string;
  route: string;
  cargo: string;
  date: string;
  rating: number;
  quote: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "trucks" | "vehicles" | "equipment" | "operations";
  image: string;
  description: string;
}

export const siteContent = {
  brand: {
    name: "C Five Transport",
    tagline: "Delivering You Peace of Mind.",
    founder: "Andrew C.",
    phone: "760-529-7249",
    displayPhone: "(760) 529-7249",
    email: "andrew@cfivegroup.com",
    headquarters: "Pacific Northwest & Nationwide Long-Haul Routes",
    operatingHours: "24/7 Dispatch & Real-Time Tracking Support",
    dotNumber: "DOT #3928174 / MC-Licensed",
  },

  stats: [
    { value: "100%", label: "Enclosed Protection", sub: "Clean & weather-tight" },
    { value: "500K+", label: "Miles Delivered", sub: "Cross-country safe routes" },
    { value: "5.0 ★", label: "Client Rating", sub: "Flawless communication" },
    { value: "24/7", label: "Direct Driver Contact", sub: "Talk directly to Andrew" },
  ],

  about: {
    badge: "About C Five Transport",
    heading: "More Than Transport - Personal Accountability For Your Precious Cargo",
    quote: "I love establishing long-lasting, meaningful connections and managing all the heavy stuff so that you don't have to.",
    storyP1:
      "I was raised in the Rockies, learning young what it takes to maneuver heavy rigs on winding mountain passes and treacherous black ice. I fell in love with the freedom of an endless highway and always felt at home traveling across America.",
    storyP2:
      "After working for the Washington Motorcycle Road Racing Association - where I raced and personally hauled high-performance bikes - I purchased my very own heavy-duty enclosed setup. Since then, I've logged hundreds of thousands of miles, delivering classic dream cars, exotic vehicles, and cherished family heirlooms safely to their destinations.",
    bullets: [
      "Direct Owner-Operator: The person who quotes you is the person who drives your load.",
      "Enclosed Air-Ride Rig: Zero rock chips, road grime, salt, or adverse weather.",
      "Constant In-Route Updates: Text notifications, checkpoint photos, and real-time ETAs.",
    ],
  },

  services: [
    {
      id: "enclosed-auto",
      title: "Enclosed Vehicle Transport",
      shortDesc: "Premium white-glove transport for exotics, luxury, and daily drivers.",
      fullDesc:
        "Guaranteed protection from road debris, weather, and sun damage. Low-clearance ramps and soft-tie systems ensure flawless handling.",
      icon: "Car",
      badge: "Premier Care",
    },
    {
      id: "classic-antiques",
      title: "Classic & Antique Cars",
      shortDesc: "Concours-level relocation for vintage, collector, and project vehicles.",
      fullDesc:
        "Treated with the reverence a timeless classic deserves. Secure winching and meticulous wheel-chocking for non-running or pristine restorations.",
      icon: "ShieldAlert",
      badge: "Collector Grade",
    },
    {
      id: "motorcycles-powersports",
      title: "Motorcycles & Powersports",
      shortDesc: "Dirt bikes, race setups, cruisers, 3-wheelers, and custom trikes.",
      fullDesc:
        "Rooted in Washington Road Racing experience. Specially rigged wheel chocks and soft ratchet ties prevent suspension fatigue.",
      icon: "Zap",
      badge: "Racer Heritage",
    },
    {
      id: "watercraft",
      title: "Boats & Jet Skis",
      shortDesc: "Sea-Doos, watercraft, and trailer setups safely hauled interstate.",
      fullDesc:
        "Full hitch inspection, safety chain reinforcement, and dual-strapped tie-downs for stable cross-country transit.",
      icon: "Anchor",
      badge: "Marine Transport",
    },
    {
      id: "specialty-freight",
      title: "High-Value Heirlooms & Furniture",
      shortDesc: "Antique china hutches, art collections, and delicate one-of-a-kind freight.",
      fullDesc:
        "Thorough moving-blanket padding, shrink wrap, and interior climate control so priceless family memories arrive intact.",
      icon: "PackageCheck",
      badge: "White Glove",
    },
    {
      id: "expedited-crosscountry",
      title: "Expedited Long-Haul Logistics",
      shortDesc: "Direct point-to-point dedicated delivery with zero terminal transfers.",
      fullDesc:
        "Your cargo stays on one single truck from initial pickup to final destination with no reloading risks.",
      icon: "Truck",
      badge: "Direct Route",
    },
  ] as ServiceItem[],

  whyChooseUs: [
    {
      title: "Zero Middlemen / Direct Driver",
      desc: "You deal directly with Andrew from quote to keys. No call centers, no lost dispatch tickets, and no guesswork.",
      icon: "UserCheck",
    },
    {
      title: "100% Enclosed Heavy-Duty Rig",
      desc: "Our commercial-grade enclosed trailer shields your prized investment from wind, hail, flying road gravel, and harsh weather.",
      icon: "ShieldCheck",
    },
    {
      title: "Live GPS & Photo Milestones",
      desc: "Receive photo confirmations upon secure loading, en-route rest checkpoints, and advance ETA notifications.",
      icon: "Navigation",
    },
    {
      title: "Flexible Timelines & Exact Delivery",
      desc: "We work around your schedule, accommodating specific residential pickups, auction lots, and dealer transfers.",
      icon: "Clock",
    },
  ],

  howItWorks: [
    {
      step: "01",
      title: "Instant Custom Quote",
      desc: "Provide your pickup zip, delivery destination, and cargo type. We provide a transparent, all-inclusive rate.",
    },
    {
      step: "02",
      title: "Gentle White-Glove Loading",
      desc: "Using gentle-incline ramps, soft ties, and protective padding, cargo is safely locked into the enclosed setup.",
    },
    {
      step: "03",
      title: "Monitored Transit & Updates",
      desc: "Track the journey with proactive text messages, photos, and estimated arrival windows every step of the highway.",
    },
    {
      step: "04",
      title: "Safe Hand-Off & Inspection",
      desc: "Delivered right to your doorstep, garage, or facility in the exact immaculate condition it left in.",
    },
  ],

  gallery: [
    {
      id: "1",
      title: "C Five Heavy-Duty Hauler",
      category: "trucks",
      image: "/images/hero-truck.jpg",
      description: "Our dedicated high-capacity heavy hauler and enclosed commercial trailer.",
    },
    {
      id: "2",
      title: "Custom Enclosed Setup",
      category: "trucks",
      image: "/images/trailer.jpg",
      description: "Equipped with interior tie-downs, winches, and soft-strap wheel chocks.",
    },
    {
      id: "3",
      title: "Classic & Muscle Car Transport",
      category: "vehicles",
      image: "/images/gallery-1.jpg",
      description: "Door-to-door enclosed protection for rare collector vehicles.",
    },
    {
      id: "4",
      title: "Powersports & Race Equipment",
      category: "equipment",
      image: "/images/gallery-2.jpg",
      description: "Rigged specifically to haul performance bikes and recreational vehicles.",
    },
    {
      id: "5",
      title: "Multi-State Route Operation",
      category: "operations",
      image: "/images/gallery-3.jpg",
      description: "Navigating mountain passes and highways across the United States.",
    },
    {
      id: "6",
      title: "Pristine Delivery Inspection",
      category: "vehicles",
      image: "/images/gallery-4.jpg",
      description: "Thorough handover ensuring your shipment arrives in showroom condition.",
    },
    {
      id: "7",
      title: "Secure Cargo Fastening",
      category: "operations",
      image: "/images/gallery-5.jpg",
      description: "Non-marring straps and double-anchored rigging prevent any transit shift.",
    },
    {
      id: "8",
      title: "Highway Endurance",
      category: "trucks",
      image: "/images/gallery-6.jpg",
      description: "Dependable, scheduled long-distance transport with peace of mind.",
    },
  ] as GalleryItem[],

  testimonials: [
    {
      id: "t1",
      client: "Mark S.",
      cargo: "1964 Ford Falcon Futura",
      route: "Kirkland, WA to Eastern WA",
      date: "Verified Shipper",
      rating: 5,
      quote:
        "What a great experience with Andrew at C Five Transport. Andrew is very professional, also very flexible on dates and times. He picked up one of my cars in Kirkland, took it to Eastern WA, dropped it off, and brought another back the same day! Thank you Andrew for taking good care of my special vehicles!",
    },
    {
      id: "t2",
      client: "Sarah L.",
      cargo: "China Hutch (Antique Heirlooms)",
      route: "Cross-Country Relocation",
      date: "Verified Shipper",
      rating: 5,
      quote:
        "Andrew was incredible to work with! I've never used a cross country moving service before so I was skeptical. Andrew over-communicated throughout the entire process and it was fantastic. He picked up a very special family furniture piece and drove it cross country. It arrived fast, intact, and right on time!",
    },
    {
      id: "t3",
      client: "David M.",
      cargo: "Sea Doo & Trailer",
      route: "Americus, GA to Paducah, KY",
      date: "Verified Shipper",
      rating: 5,
      quote:
        "Top notch service at a reasonable price. My Sea Doo and trailer arrived in perfect condition and on time. Updates along the way were a great reassurance. Five stars all around!",
    },
    {
      id: "t4",
      client: "Raymond B.",
      cargo: "Polaris Slingshot 3-Wheeler",
      route: "Marana, AZ to Louisville, KY",
      date: "Verified Shipper",
      rating: 5,
      quote:
        "Andrew is phenomenal! Kept me posted the whole trip from Arizona to Kentucky. My Slingshot arrived in perfect condition inside the enclosed trailer. Outstanding service, fair pricing, and always communicates.",
    },
    {
      id: "t5",
      client: "Elena G.",
      cargo: "Designer Furniture",
      route: "Los Angeles, CA to Gilbert, AZ",
      date: "Verified Shipper",
      rating: 5,
      quote:
        "Absolutely fantastic experience! Andrew communicated promptly; very efficient and professional. This was my first time using this sort of service and I'm sold. Highly recommend C Five Transport!",
    },
  ] as TestimonialItem[],
};
