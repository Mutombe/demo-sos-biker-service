export const designTokens = {
  heroStyle: "cinematic",
  typography: {
    heading: "Barlow Condensed",
    body: "Inter",
    display: "Barlow Condensed",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: false,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "energetic",
  serviceCardStyle: "overlay",
  projectGridStyle: "grid-3",
  testimonialStyle: "cards",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: [
    "hero", "stats", "services", "projects", "whyChooseUs", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "SOS Biker Service",
    legalName: "SOS Biker Service",
    tagline: "Ride. Break Down. We Rescue.",
    description:
      "Zimbabwe's premier motorcycle rescue and repair service. 24/7 roadside assistance, towing, and expert repairs for all motorcycle makes and models.",
    phone: "+263 78 051 4097",
    phoneRaw: "+263780514097",
    whatsappNumber: "263780514097",
    email: "info@sosbikerservice.co.zw",
    address: "Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.8,
    ratingRounded: 5,
    reviewCount: 42,
    established: "2019",
    yearsExperience: "5+",
    projectsCompleted: "3,000+",
    employees: "15+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Sunday", time: "24 Hours" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ5JzQ1LjEiUyAzMcKwMDMnMDcuOSJF!5e0!3m2!1sen!2szw!4v1700000000000!5m2!1sen!2szw",
    cookieConsentKey: "sos-biker-cookie-consent",
    socialLinks: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },

  navbar: {
    logoLine1: "SOS",
    logoLine2: "Biker Service",
  },

  hero: {
    badge: "24/7 Motorcycle Rescue",
    titleParts: [
      { text: "Ride. " },
      { text: "Break Down.", highlight: true },
      { text: " We Rescue." },
    ],
    subtitle:
      "Stranded on the road? SOS Biker Service gets you moving again. 24/7 motorcycle towing, roadside repair, and emergency rescue across Harare and beyond.",
    ctaPrimary: "Call For Rescue",
    ctaSecondary: "Our Services",
    trustBadge: "24/7 Emergency Response",
    backgroundImage:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1920",
    backgroundAlt:
      "Motorcycle on an open road at dusk with dramatic sky",
  },

  stats: [
    { number: "3,000+", label: "Rescues Completed" },
    { number: "24/7", label: "Always Available" },
    { number: "30", label: "Min Avg Response" },
    { number: "5+", label: "Years on the Road" },
  ],

  servicesPreview: [
    {
      iconName: "Car",
      title: "Motorcycle Towing",
      desc: "Flatbed and wheel-lift towing for any motorcycle. We handle sport bikes, cruisers, and adventure bikes with care.",
    },
    {
      iconName: "Wrench",
      title: "Roadside Repair",
      desc: "On-the-spot mechanical fixes. Chains, cables, spark plugs, clutch adjustments, and more done right where you are.",
    },
    {
      iconName: "Target",
      title: "Tire Service",
      desc: "Flat tire? Puncture repair and tire replacement on location. We carry common sizes for quick swaps.",
    },
    {
      iconName: "Lightbulb",
      title: "Battery Jump Start",
      desc: "Dead battery? Our crew carries portable jump packs and replacement batteries for most models.",
    },
    {
      iconName: "ShieldCheck",
      title: "Accident Recovery",
      desc: "Post-accident motorcycle recovery handled with sensitivity and speed. Scene cleanup and transport to your shop of choice.",
    },
    {
      iconName: "CheckCircle",
      title: "Scheduled Maintenance",
      desc: "Oil changes, brake checks, chain tensioning, and full service packages at our workshop or at your location.",
    },
  ],

  featuredProjects: [
    {
      image:
        "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800",
      title: "Highway Emergency Rescue",
      category: "Rescue",
    },
    {
      image:
        "https://images.unsplash.com/photo-1558980394-34764db076b4?w=800",
      title: "Group Ride Support",
      category: "Event Support",
    },
    {
      image:
        "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800",
      title: "Workshop Full Service",
      category: "Maintenance",
    },
  ],

  whyChooseUs: {
    titleParts: [
      { text: "Because " },
      { text: "Every Ride", highlight: true },
      { text: " Deserves Backup" },
    ],
    image:
      "https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=800",
    imageAlt:
      "Motorcycle mechanic working on a bike engine",
    experienceYears: "5+",
    experienceLabel: "Years Rescuing Riders",
    points: [
      {
        title: "Rapid Response",
        desc: "Average 30-minute arrival time across Harare. Because when you are stranded, every minute counts.",
      },
      {
        title: "All Makes & Models",
        desc: "From 125cc commuters to 1200cc adventure bikes. Our technicians know them all.",
      },
      {
        title: "Rider-First Attitude",
        desc: "We are riders ourselves. We treat every bike like our own and every rider like a brother.",
      },
      {
        title: "Transparent Pricing",
        desc: "No hidden fees. You know the cost before we turn a wrench. Fair rates, honest work.",
      },
    ],
  },

  homeCta: {
    backgroundImage:
      "https://images.unsplash.com/photo-1558980394-34764db076b4?w=1920",
    backgroundAlt:
      "Motorcycle parked on a scenic overlook road",
    titleParts: [
      { text: "Stranded? " },
      { text: "Call SOS.", highlight: true },
    ],
    subtitle:
      "One call and we are on our way. 24 hours a day, 7 days a week, 365 days a year. Save our number now.",
    ctaPrimary: "Call Now",
    whatsappText:
      "Hi SOS Biker! I need motorcycle assistance. My location is:",
  },

  homeTestimonials: [
    {
      name: "Tatenda Moyo",
      role: "Daily Commuter",
      text: "My chain snapped on Samora Machel Ave during rush hour. SOS was there in 20 minutes. Fixed me up on the spot. Absolute legends.",
      rating: 5,
    },
    {
      name: "Brian Chikwanha",
      role: "Adventure Rider",
      text: "Got a flat 40km outside Harare on a Sunday. Called SOS, they dispatched immediately. No one else would come out that far. These guys are the real deal.",
      rating: 5,
    },
    {
      name: "Farai Nyamande",
      role: "Motorcycle Club President",
      text: "We have SOS on speed dial for every club ride. They have recovered three of our members this year alone. Professional, fast, and fair pricing.",
      rating: 5,
    },
  ],

  // ====== ABOUT PAGE ======
  about: {
    heroTitle: [
      { text: "Born to " },
      { text: "Ride", highlight: true },
      { text: ", Built to " },
      { text: "Rescue", highlight: true },
    ],
    heroSubtitle:
      "SOS Biker Service was founded by riders who were tired of being stranded with no help coming. We built the service we always wished existed.",
    storyImage:
      "https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=800",
    storyImageAlt:
      "Motorcycle mechanics at work in the SOS workshop",
    storyProjectCount: "3,000+",
    storyProjectLabel: "Rescues Completed",
    storyTitle: "From Stranded to Rescued in 30 Minutes",
    storyParagraphs: [
      "SOS Biker Service started in 2019 with one pickup truck and a passion for motorcycles. Our founder, a lifelong rider, had been stranded one too many times with no reliable rescue service to call.",
      "What began as a one-man operation helping fellow riders has grown into Harare's most trusted motorcycle rescue and repair service. Today, our fleet and crew respond to thousands of calls every year.",
      "We are more than a tow service. We are a brotherhood of riders who understand the road, the machines, and the frustration of a breakdown. That is why we ride hard to get to you fast.",
    ],
    mission:
      "To ensure no rider in Zimbabwe is ever stranded without help. We provide fast, reliable, and affordable motorcycle rescue and repair services around the clock.",
    vision:
      "To be the most trusted motorcycle support service in Southern Africa, known for speed, integrity, and an unwavering commitment to the riding community.",
    values: [
      {
        iconName: "Clock",
        title: "Speed",
        desc: "Every second counts when you are on the roadside. We move fast, always.",
      },
      {
        iconName: "Handshake",
        title: "Brotherhood",
        desc: "We are riders first. Every customer is a fellow rider who deserves respect and care.",
      },
      {
        iconName: "ShieldCheck",
        title: "Reliability",
        desc: "Rain or shine, day or night. When we say 24/7, we mean it.",
      },
      {
        iconName: "Heart",
        title: "Passion",
        desc: "We love motorcycles and the freedom they represent. It drives everything we do.",
      },
      {
        iconName: "Trophy",
        title: "Excellence",
        desc: "Every repair is done right the first time. We take pride in our craft.",
      },
      {
        iconName: "Users",
        title: "Community",
        desc: "We sponsor rides, support clubs, and give back to the riding community.",
      },
    ],
    team: [
      {
        name: "Tendai Makanaka",
        role: "Founder & Lead Mechanic",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
      },
      {
        name: "Simba Dube",
        role: "Fleet Manager",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      },
      {
        name: "Kudzai Mhizha",
        role: "Senior Technician",
        image:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
      },
      {
        name: "Blessing Ncube",
        role: "Dispatch Coordinator",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
      },
    ],
    milestones: [
      {
        year: "2019",
        title: "SOS Founded",
        desc: "Started with one truck and a mission to rescue stranded riders in Harare.",
      },
      {
        year: "2020",
        title: "1,000th Rescue",
        desc: "Hit our first major milestone despite the challenges of the pandemic.",
      },
      {
        year: "2022",
        title: "Fleet Expansion",
        desc: "Expanded to three rescue vehicles and opened our dedicated workshop.",
      },
      {
        year: "2023",
        title: "24/7 Operations",
        desc: "Launched round-the-clock service with night shift crews.",
      },
      {
        year: "2024",
        title: "3,000+ Rescues",
        desc: "Surpassed 3,000 successful motorcycle rescues across Zimbabwe.",
      },
    ],
    ctaTitle: "Need a Rescue Right Now?",
    ctaSubtitle:
      "Save our number. When the road lets you down, SOS picks you up.",
    ctaCta: "Call SOS Now",
  },

  // ====== SERVICES PAGE ======
  services: {
    heroTitle: [
      { text: "Full-Spectrum " },
      { text: "Motorcycle", highlight: true },
      { text: " Support" },
    ],
    heroSubtitle:
      "From emergency roadside rescue to scheduled workshop maintenance. Everything your bike needs under one roof.",
    items: [
      {
        iconName: "Car",
        title: "Motorcycle Towing",
        slug: "motorcycle-towing",
        image:
          "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=900",
        desc: "Professional motorcycle towing using flatbed and wheel-lift systems. We handle all bike types with care, from lightweight commuters to heavy touring machines. Straps, soft ties, and wheel chocks included.",
        features: [
          "Flatbed towing for damaged motorcycles",
          "Wheel-lift for non-running bikes",
          "Long-distance transport available",
          "Secure tie-down with soft straps",
          "Insurance documentation assistance",
          "Available 24 hours daily",
        ],
      },
      {
        iconName: "Wrench",
        title: "Roadside Repair",
        slug: "roadside-repair",
        image:
          "https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=900",
        desc: "Our mobile technicians carry tools and common parts to fix most issues right where you are. No need to tow if we can fix it on the spot. Faster, cheaper, and gets you riding again immediately.",
        features: [
          "Chain and sprocket adjustments",
          "Cable replacement and lubrication",
          "Spark plug replacement",
          "Clutch and brake adjustments",
          "Electrical fault diagnosis",
          "Fuel system quick fixes",
        ],
      },
      {
        iconName: "Target",
        title: "Tire Service",
        slug: "tire-service",
        image:
          "https://images.unsplash.com/photo-1558980394-34764db076b4?w=900",
        desc: "Flat tires are the most common reason riders call us. We carry puncture repair kits and popular tire sizes in our response vehicles for rapid on-location replacement.",
        features: [
          "Puncture repair on location",
          "Tire replacement for common sizes",
          "Tube replacement for spoke wheels",
          "Tire pressure checks and inflation",
          "Valve stem replacement",
          "Wheel bearing inspection",
        ],
      },
      {
        iconName: "Lightbulb",
        title: "Battery Jump Start",
        slug: "battery-jump-start",
        image:
          "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=900",
        desc: "Dead battery leaving you stranded? Our portable jump packs bring your bike back to life in minutes. We also carry replacement batteries for popular motorcycle models.",
        features: [
          "Portable jump pack service",
          "Battery replacement on site",
          "Charging system diagnosis",
          "Alternator and stator checks",
          "Battery terminal cleaning",
          "Voltage regulator testing",
        ],
      },
      {
        iconName: "ShieldCheck",
        title: "Accident Recovery",
        slug: "accident-recovery",
        image:
          "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=900",
        desc: "Post-accident recovery handled with professionalism and care. We work with police and insurance to document scenes, recover your motorcycle, and transport it to your preferred workshop.",
        features: [
          "Accident scene motorcycle recovery",
          "Insurance documentation support",
          "Police report coordination",
          "Secure storage if needed",
          "Transport to workshop of choice",
          "Damage assessment assistance",
        ],
      },
      {
        iconName: "CheckCircle",
        title: "Scheduled Maintenance",
        slug: "scheduled-maintenance",
        image:
          "https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=900",
        desc: "Prevention is better than a roadside breakdown. Our workshop offers full service packages to keep your motorcycle running reliably. We service all makes and models.",
        features: [
          "Oil and filter changes",
          "Brake pad replacement",
          "Chain cleaning and tensioning",
          "Full safety inspection",
          "Coolant and fluid top-ups",
          "Comprehensive tune-up service",
        ],
      },
    ],
    ctaTitle: "Not Sure What You Need?",
    ctaSubtitle:
      "Call us and describe what happened. Our team will advise you on the best course of action, free of charge.",
  },

  // ====== PROJECTS PAGE ======
  projects: {
    heroTitle: [
      { text: "Rescues " },
      { text: "That Speak", highlight: true },
      { text: " for Themselves" },
    ],
    heroSubtitle:
      "Every rescue is a story. Here are some of the calls that define what SOS Biker Service is all about.",
    categories: [
      "All",
      "Rescue",
      "Maintenance",
      "Event Support",
      "Accident Recovery",
    ],
    items: [
      {
        id: 1,
        title: "Midnight Highway Recovery",
        category: "Rescue",
        location: "Harare-Mutare Highway",
        year: "2024",
        image:
          "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800",
        desc: "Rider stranded at 2AM with a seized engine 60km from Harare. Full tow back to workshop completed by 4AM.",
        services: ["Motorcycle Towing", "Accident Recovery"],
      },
      {
        id: 2,
        title: "Rally Support Coverage",
        category: "Event Support",
        location: "Harare Rally Circuit",
        year: "2024",
        image:
          "https://images.unsplash.com/photo-1558980394-34764db076b4?w=800",
        desc: "Provided standby rescue and repair crew for a 200-rider charity rally. Handled 12 breakdowns on the day.",
        services: ["Roadside Repair", "Tire Service"],
      },
      {
        id: 3,
        title: "Fleet Maintenance Contract",
        category: "Maintenance",
        location: "Harare",
        year: "2023",
        image:
          "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800",
        desc: "Ongoing maintenance contract for a delivery company fleet of 25 motorcycles. Monthly servicing and emergency response.",
        services: ["Scheduled Maintenance", "Roadside Repair"],
      },
      {
        id: 4,
        title: "Rainy Season Chain of Rescues",
        category: "Rescue",
        location: "Various, Harare",
        year: "2024",
        image:
          "https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=800",
        desc: "During one intense rainy week, our crew completed 47 rescues in 7 days. Flooded roads, electrical faults, and skids.",
        services: ["Motorcycle Towing", "Battery Jump Start"],
      },
      {
        id: 5,
        title: "Multi-Bike Accident Recovery",
        category: "Accident Recovery",
        location: "Borrowdale Road",
        year: "2023",
        image:
          "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800",
        desc: "Recovered three motorcycles from a multi-vehicle incident. Coordinated with traffic police and insurance adjusters on scene.",
        services: ["Accident Recovery", "Motorcycle Towing"],
      },
      {
        id: 6,
        title: "Cross-Country Escort",
        category: "Event Support",
        location: "Harare to Bulawayo",
        year: "2024",
        image:
          "https://images.unsplash.com/photo-1558980394-34764db076b4?w=800",
        desc: "Support vehicle for a 440km charity ride from Harare to Bulawayo. Two mechanical assists and one tire change en route.",
        services: ["Roadside Repair", "Tire Service", "Motorcycle Towing"],
      },
    ],
  },

  // ====== REVIEWS PAGE ======
  reviews: {
    heroTitle: [
      { text: "What the " },
      { text: "Riders", highlight: true },
      { text: " Say" },
    ],
    heroSubtitle:
      "Real feedback from real riders. Our reputation is built one rescue at a time.",
    ratingBreakdown: [
      { stars: 5, count: 34 },
      { stars: 4, count: 6 },
      { stars: 3, count: 2 },
      { stars: 2, count: 0 },
      { stars: 1, count: 0 },
    ],
    items: [
      {
        name: "Tatenda Moyo",
        role: "Daily Commuter",
        text: "My chain snapped on Samora Machel Ave during rush hour. SOS was there in 20 minutes. Fixed me up on the spot. These guys are absolute legends.",
        rating: 5,
        date: "2 months ago",
        project: "Roadside Repair",
      },
      {
        name: "Brian Chikwanha",
        role: "Adventure Rider",
        text: "Got a flat 40km outside Harare on a Sunday. Called SOS, they dispatched immediately. No one else would come out that far. These guys are the real deal.",
        rating: 5,
        date: "3 months ago",
        project: "Tire Service",
      },
      {
        name: "Farai Nyamande",
        role: "Motorcycle Club President",
        text: "We have SOS on speed dial for every club ride. They have recovered three of our members this year alone. Professional, fast, and fair pricing.",
        rating: 5,
        date: "4 months ago",
        project: "Event Support",
      },
      {
        name: "Grace Mutasa",
        role: "Delivery Rider",
        text: "As someone who relies on their bike for income, downtime is money lost. SOS understands urgency. They prioritize getting you back on the road fast.",
        rating: 5,
        date: "4 months ago",
        project: "Battery Jump Start",
      },
      {
        name: "Peter Zvobgo",
        role: "Weekend Rider",
        text: "Called at 11PM on a Saturday night after my bike died on the Borrowdale roundabout. They actually came. At 11PM. On a Saturday. Incredible service.",
        rating: 5,
        date: "5 months ago",
        project: "Motorcycle Towing",
      },
      {
        name: "Nyasha Gumbo",
        role: "Sport Bike Enthusiast",
        text: "Had my CBR towed after an accident. They handled the bike with more care than I expected. Soft straps, proper securing. My bike arrived without a scratch.",
        rating: 5,
        date: "6 months ago",
        project: "Accident Recovery",
      },
      {
        name: "Simba Chidyausiku",
        role: "Touring Rider",
        text: "SOS provided support for our Nyanga trip. When one of our group had mechanical trouble, they had a team out within the hour despite the distance. Unreal.",
        rating: 4,
        date: "7 months ago",
        project: "Rescue",
      },
      {
        name: "Maxwell Chirenje",
        role: "Motorcycle Dealer",
        text: "We refer all our customers to SOS for roadside assistance. Reliable, professional, and they know their stuff. A real asset to the Harare riding community.",
        rating: 5,
        date: "8 months ago",
        project: "Multiple Services",
      },
    ],
    ctaTitle: "Ready to Ride with Confidence?",
    ctaSubtitle:
      "Save our number. Next time the road surprises you, SOS will be there.",
    ctaCta: "Save Our Number",
    ctaWhatsappText:
      "Hi SOS Biker! I would like to save your number for emergencies.",
  },

  // ====== CONTACT PAGE ======
  contact: {
    heroTitle: [
      { text: "Need " },
      { text: "Rescue", highlight: true },
      { text: "? Call Now." },
    ],
    heroSubtitle:
      "Stranded? Broken down? Or just need a service? Reach us 24/7 by phone, WhatsApp, or the form below.",
    formTitle: "Send Us a Message",
    formSubtitle:
      "Describe your situation and we will get back to you immediately.",
  },

  // ====== CAREERS PAGE ======
  careers: {
    heroTitle: [
      { text: "Join the " },
      { text: "Rescue", highlight: true },
      { text: " Crew" },
    ],
    heroSubtitle:
      "Love motorcycles? Love helping people? SOS Biker Service is looking for passionate riders to join our growing rescue team.",
    heroImage:
      "https://images.unsplash.com/photo-1558980394-34764db076b4?w=1920",
    cultureTitle: "Why Ride With Us?",
    cultureItems: [
      {
        iconName: "Users",
        title: "Rider Brotherhood",
        desc: "Work alongside fellow motorcycle enthusiasts who share your passion for two wheels.",
      },
      {
        iconName: "Rocket",
        title: "Skill Development",
        desc: "Continuous training on new motorcycle models, diagnostic tools, and rescue techniques.",
      },
      {
        iconName: "ShieldCheck",
        title: "Safety & Equipment",
        desc: "Top-quality tools, safety gear, and maintained rescue vehicles provided.",
      },
    ],
    cultureImage:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1400",
    cultureImageAlt:
      "SOS rescue crew preparing for a dispatch",
    cultureTagline: "Not Just a Job. A Calling.",
    cultureTaglineDesc:
      "Every day, our crew helps stranded riders get back on the road. It is more than work. It is what we live for.",
    benefits: [
      {
        iconName: "CurrencyDollar",
        title: "Competitive Pay",
        desc: "Base salary plus per-rescue bonuses that reward your effort.",
      },
      {
        iconName: "FirstAid",
        title: "Medical Cover",
        desc: "Health insurance for you and your family because safety starts at home.",
      },
      {
        iconName: "GraduationCap",
        title: "Mechanic Training",
        desc: "Sponsored certifications for motorcycle mechanics and diagnostics.",
      },
      {
        iconName: "Car",
        title: "Riding Gear",
        desc: "Full riding gear provided including helmet, jacket, gloves, and boots.",
      },
      {
        iconName: "Heart",
        title: "Rider Discounts",
        desc: "Discounted parts and services for your personal motorcycle.",
      },
      {
        iconName: "ShieldCheck",
        title: "Tools Provided",
        desc: "Professional-grade tool sets and diagnostic equipment issued to every tech.",
      },
    ],
    positions: [
      {
        id: 1,
        title: "Motorcycle Rescue Technician",
        department: "Field Operations",
        type: "Full-Time",
        location: "Harare",
        description:
          "Respond to emergency calls, perform roadside repairs, and tow motorcycles safely. Must be a confident rider with mechanical aptitude.",
        requirements: [
          "Valid motorcycle license (Class 2)",
          "2+ years motorcycle riding experience",
          "Basic mechanical knowledge",
          "Own reliable transport to our base",
          "Willingness to work night shifts",
        ],
      },
      {
        id: 2,
        title: "Workshop Mechanic",
        department: "Workshop",
        type: "Full-Time",
        location: "Harare",
        description:
          "Perform scheduled maintenance, engine rebuilds, and complex repairs on all motorcycle types in our workshop facility.",
        requirements: [
          "Formal mechanical training or 3+ years experience",
          "Experience with Japanese and Chinese motorcycle brands",
          "Diagnostic and electrical troubleshooting skills",
          "Attention to detail and quality workmanship",
          "Ability to work under pressure",
        ],
      },
      {
        id: 3,
        title: "Dispatch Coordinator",
        department: "Operations",
        type: "Full-Time",
        location: "Harare",
        description:
          "Manage incoming rescue calls, coordinate crew dispatch, and maintain real-time tracking of all field operations.",
        requirements: [
          "Excellent communication skills",
          "Ability to remain calm under pressure",
          "Basic knowledge of Harare geography",
          "Computer literacy",
          "Willingness to work rotating shifts including nights",
        ],
      },
    ],
    generalApplicationTitle: "Ready to Join the Crew?",
    generalApplicationSubtitle:
      "We are always looking for riders who want to make a difference. Send us your details.",
    generalApplicationCta: "Apply Now",
  },

  // ====== FOOTER ======
  footer: {
    description:
      "Zimbabwe's trusted motorcycle rescue and repair service. 24/7 roadside assistance for every rider, every road.",
    copyright: "SOS Biker Service",
  },
};

export default siteData;
