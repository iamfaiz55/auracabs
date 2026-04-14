
import { Vehicle, Tour } from './types';

export const BUSINESS_NAME = "Aura Cabs";
export const PHONE_NUMBER = "+91 9823760555";
export const WHATSAPP_NUMBER = "917030471135"
export const EMAIL = "contact@auracabs.services";
export const LOCATION = "Chhatrapati Sambhaji Nagar (Aurangabad), Maharashtra";

export const HERO_SLIDES = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/4882665/pexels-photo-4882665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tag: 'Tours & Travels',
    title: "Best Taxi Service in Aurangabad",
    description: "Your trusted travel partner in Chhatrapati Sambhaji Nagar. Experience the timeless beauty of Ajanta & Ellora caves with our premium fleet."
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/28257150/pexels-photo-28257150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tag: 'Premium Car Rental',
    title: "Luxury Car Rental in Sambhaji Nagar",
    description: "Rent premium Innova Crysta and Kia Carens. Top-rated car rental service for corporate travels and family tours in Aurangabad."
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/6522114/pexels-photo-6522114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tag: 'Airport Specialist',
    title: "Aurangabad Airport Pickup & Drop",
    description: "Reliable airport taxi service in Chhatrapati Sambhaji Nagar. Affordable transfers to Mumbai, Pune, and Shirdi with professional drivers."
  }
];

export const VEHICLES: Vehicle[] = [
  {
    id: 'kia-carens',
    name: 'Kia Carens',
    type: 'Premium SUV',
    seats: 6,
    features: ['Sunroof', 'Air Purifier', 'Comfortable 3rd Row', 'Ventilated Seats'],
    image: '/gallery/kia-carens.png',
    description: 'Modern, stylish, and incredibly smooth. Great for city rides and luxury intercity travel.',
    pricePerKm: '₹15'
  },
  {
    id: 'innova-crysta',
    name: 'Toyota Innova Crysta',
    type: 'Luxury MUV',
    seats: 7,
    features: ['Fully Air Conditioned', 'Spacious Legroom', 'Premium Interior', 'Carrier for Luggage', 'Bluetooth Audio'],
    image: '/gallery/innova.png',
    description: 'The pinnacle of comfort for long journeys and family tours. Perfect for foreigners and premium clients visiting Ajanta.',
    pricePerKm: '₹17'
  },
  {
    id: 'maruti-ertiga',
    name: 'Maruti Suzuki Ertiga',
    type: 'Comfort MUV',
    seats: 6,
    features: ['Smart Hybrid', 'Reclining Seats', 'Rear AC', 'Economical'],
    image: '/gallery/ertiga.png',
    description: 'The smart choice for family trips. Cost-effective without compromising on comfort.',
    pricePerKm: '₹14'
  },
  {
    id: 'nexa-ciaz',
    name: 'Maruti Suzuki Ciaz',
    type: 'Premium Sedan',
    seats: 4,
    features: ['Spacious Interiors', 'Rear AC Vents', 'Large Boot Space', 'Smooth Ride'],
    image: '/gallery/ciaz.png',
    description: 'Experience luxury on a budget. Ideal for corporate travel and small families.',
    pricePerKm: '₹14'
  },
  {
    id: 'toyota-etios',
    name: 'Toyota Etios',
    type: 'Sedan',
    seats: 4,
    features: ['Reliable', 'Spacious Trunk', 'Comfortable Suspension', 'AC'],
    image: '/gallery/Etios-rental.png',
    description: 'The reliable workhorse for outstation trips. Known for its comfort and safety.',
    pricePerKm: '₹12'
  },
  {
    id: 'hyundai-aura',
    name: 'Hyundai Aura',
    type: 'Compact Sedan',
    seats: 4,
    features: ['Compact Layout', 'Modern Tech', 'AC', 'Good Mileage'],
    image: '/gallery/aura.avif',
    description: 'Perfect for city navigation and quick airport transfers.',
    pricePerKm: '₹12'
  },
  {
    id: 'swift-dzire',
    name: 'Maruti Suzuki Swift Dzire',
    type: 'Sedan',
    seats: 4,
    features: ['Compact & Quick', 'Fuel Efficient', 'Good for Small Families', 'Air Conditioned'],
    image: '/gallery/swift-dezire.png',
    description: 'Best for 1-way intercity drops to Pune or Mumbai and local sightseeing for small groups.',
    pricePerKm: '₹12'
  },
  {
    id: 'innova',
    name: 'Toyota Innova',
    type: 'Classic MUV',
    seats: 7,
    features: ['Reliable Performance', 'AC', 'Comfortable Seating', 'Ample Luggage Space'],
    image: '/gallery/innova.png',
    description: 'The most trusted vehicle for Aurangabad tours. Reliable and budget-friendly for large groups.',
    pricePerKm: '₹15'
  },
  {
    id: 'tempo-traveller',
    name: 'Tempo Traveller',
    type: 'Group Van',
    seats: 17,
    features: ['High Capacity', 'Pushback Seats', 'Separate Luggage', 'High Roof'],
    image: '/gallery/tempo-traveller.png',
    description: 'The ultimate solution for large groups and pilgrimages. Travel together, stay together.',
    pricePerKm: '₹25'
  }
];

export const TOURS: Tour[] = [
  {
    id: 'ajanta-caves-exclusive',
    title: 'Ajanta Caves Heritage Day Tour',
    duration: '1 Full Day (approx. 10 hours)',
    destinations: ['Ajanta Caves', 'Waghur River Viewpoint', 'Cave 1 (Paintings)', 'Cave 26 (Chaitya)'],
    image: '/gallery/ajanta/ajanta-main.jpg',
    gallery: [
      '/gallery/ajanta/ajanta-2.jpg',
      '/gallery/ajanta/ajanta-3.jpg',
      '/gallery/ajanta/ajanta-4.jpg',
      '/gallery/ajanta/ajanta-5.jpg'
    ],
    description: 'Immerse yourself in the ancient Buddhist art of Ajanta. This full-day tour takes you to the UNESCO World Heritage site, famous for its exquisite rock-cut caves and masterpieces of Buddhist religious art.',
    highlights: [
      'Guided visit to the UNESCO World Heritage Ajanta Caves',
      'Explore the famous "Padmapani" painting in Cave 1',
      'Spectacular view of the horseshoe-shaped gorge',
      'Comfortable AC travel with experienced driver'
    ],
    inclusions: [
      'AC Vehicle for round trip',
      'Driver allowance and parking charges',
      'Toll taxes and fuel',
      'Mineral water bottle'
    ],
    exclusions: [
      'Cave entry tickets',
      'Guide fees (optional)',
      'Lunch and meals',
      'Shuttle bus charges at Ajanta'
    ],
    itinerary: [
      { day: '08:00 AM', activity: 'Pickup from your hotel/residence in Aurangabad.' },
      { day: '10:30 AM', activity: 'Arrival at Ajanta Caves parking. Transfer to shuttle bus.' },
      { day: '11:00 AM', activity: 'Begin exploration of the caves including Cave 1, 2, 16, 17, 19, and 26.' },
      { day: '02:00 PM', activity: 'Lunch break at the MTDC restaurant (at own cost).' },
      { day: '03:00 PM', activity: 'Visit the Viewpoint for a panoramic view of the caves.' },
      { day: '06:00 PM', activity: 'Return journey to Aurangabad.' }
    ],
    price: 'Contact for pricing and info'
  },
  {
    id: 'ellora-caves-tour',
    title: 'Ellora Caves Day Tour',
    duration: '1 Full Day (approx. 6 hours)',
    destinations: ['Ellora Caves', 'Kailasa Temple', 'Cave 10', 'Cave 32'],
    image: '/gallery/ellora/ellora-main.jpg',
    gallery: [
      '/gallery/ellora/ellora-2.jpg',
      '/gallery/ellora/ellora-3.jpg',
      '/gallery/ellora/ellora-4.jpg',
      '/gallery/ellora/ellora-5.jpg'
    ],
    description: 'Explore the magnificent Ellora Caves, featuring the world-famous monolithic Kailasa Temple. A journey through Buddhist, Hindu, and Jain rock-cut architecture.',
    highlights: [
      'Visit the awe-inspiring Kailasa Temple (Cave 16)',
      'Explore Buddhist, Hindu and Jain caves',
      'See the Carpenter\'s Cave (Cave 10)',
      'Expert insights into the rock-cut architecture'
    ],
    inclusions: [
      'AC Vehicle',
      'Driver allowance',
      'Fuel charges',
      'Toll taxes'
    ],
    exclusions: [
      'Entry tickets',
      'Guide fees',
      'Meals'
    ],
    itinerary: [
      { day: '09:00 AM', activity: 'Pickup from hotel.' },
      { day: '10:00 AM', activity: 'Arrival at Ellora Caves.' },
      { day: '10:15 AM', activity: 'Explore Kailasa Temple.' },
      { day: '01:00 PM', activity: 'Lunch Break.' },
      { day: '02:00 PM', activity: 'Visit Jain and Buddhist group of caves.' },
      { day: '04:00 PM', activity: 'Return to Aurangabad.' }
    ],
    price: 'Contact for pricing and info'
  },
  {
    id: 'daulatabad-fort-tour',
    title: 'Daulatabad Fort & City Tour',
    duration: 'Half Day (approx. 5 hours)',
    destinations: ['Daulatabad Fort', 'Bibi Ka Maqbara', 'Panchakki'],
    image: '/gallery/daulatabad/daulatabad-main.jpg',
    gallery: [
      '/gallery/daulatabad/daulatabad-2.jpg',
      '/gallery/daulatabad/daulatabad-3.jpg',
      '/gallery/daulatabad/daulatabad-4.jpg',
      '/gallery/daulatabad/daulatabad-5.jpg'
    ],
    description: 'Conquer the invincible Daulatabad Fort and visit the key historic landmarks of Aurangabad city including the Mini Taj Mahal.',
    highlights: [
      'Trek to the top of Daulatabad Fort',
      'Visit the Chand Minar',
      'See Bibi Ka Maqbara',
      'Explore Panchakki'
    ],
    inclusions: [
      'AC Vehicle',
      'Driver allowance',
      'Fuel charges',
      'Parking'
    ],
    exclusions: [
      'Monument tickets',
      'Professional Guide',
      'Food and snacks'
    ],
    itinerary: [
      { day: '08:00 AM', activity: 'Pickup from hotel.' },
      { day: '08:45 AM', activity: 'Reach Daulatabad Fort.' },
      { day: '09:00 AM', activity: 'Begin the fort climb.' },
      { day: '12:00 PM', activity: 'Return to city.' },
      { day: '12:30 PM', activity: 'Visit Bibi Ka Maqbara.' }
    ],
    price: 'Contact for pricing and info'
  },
  {
    id: 'shirdi-darshan-tour',
    title: 'Shirdi Sai Baba Darshan',
    duration: '1 Full Day',
    destinations: ['Shirdi Sai Baba Temple', 'Dwarkamai', 'Gurusthan'],
    image: '/gallery/shirdi/shirdi-main.jpg',
    gallery: [
      '/gallery/shirdi/shirdi-2.jpg',
      '/gallery/shirdi/shirdi-3.jpg'
    ],
    description: 'A dedicated spiritual tour to the holy town of Shirdi. Experience peace and divinity at the Sai Baba Temple.',
    highlights: [
      'Darshan at Sai Baba Samadhi Mandir',
      'Visit Dwarkamai and Chavadi',
      'Peaceful and comfortable journey',
      'Optional stop at Shani Shingnapur'
    ],
    inclusions: ['Round trip AC transport', 'Toll and Parking', 'Driver allowance'],
    exclusions: ['Temple donations', 'VIP Pass', 'Meals'],
    itinerary: [
      { day: '06:00 AM', activity: 'Departure from Aurangabad.' },
      { day: '09:00 AM', activity: 'Arrival at Shirdi.' },
      { day: '09:30 AM', activity: 'Temple Darshan.' },
      { day: '01:00 PM', activity: 'Lunch.' },
      { day: '04:00 PM', activity: 'Return journey begins.' }
    ],
    price: 'Contact for pricing and info'
  },
  {
    id: 'shani-shingnapur-tour',
    title: 'Shani Shingnapur Pilgrimage',
    duration: 'Half Day / Full Day',
    destinations: ['Shani Shingnapur Temple'],
    image: '/gallery/shani-shingnapur/shani-shingnapur-main.jpg',
    gallery: [
      '/gallery/shani-shingnapur/shani-shingnapur-2.jpg',
      '/gallery/shani-shingnapur/shani-shingnapur-3.jpg',
      '/gallery/shani-shingnapur/shani-shingnapur-4.jpg'
    ],
    description: 'Visit the unique village of Shani Shingnapur, famous for its houses without doors and the open-air temple of Lord Shani.',
    highlights: [
      'Darshan of Swayambhu Shani Idol',
      'Witness the village with no doors',
      'Mustard oil offering ritual',
      'Safe round trip'
    ],
    inclusions: ['AC Transport', 'Driver allowance', 'Parking'],
    exclusions: ['Prasad/Oil', 'Meals'],
    itinerary: [
      { day: 'Morning/Afternoon', activity: 'Start as per convenience.' },
      { day: 'Travel', activity: 'Approx 1.5 - 2 hours drive one way.' },
      { day: 'Darshan', activity: '1 hour for Darshan and rituals.' },
      { day: 'Return', activity: 'Drive back to Aurangabad.' }
    ],
    price: 'Contact for pricing and info'
  },
  {
    id: 'aurangabad-pune-taxi',
    title: 'Aurangabad to Pune Executive Taxi',
    duration: 'One Way / Round Trip',
    destinations: ['Pune Airport', 'Hinjewadi IT Park', 'Magarpatta City', 'Viman Nagar'],
    image: '/gallery/pune/pune-main.jpg',
    gallery: [
      '/gallery/pune/pune-main.jpg'
    ],
    description: 'Specialized executive taxi service between Aurangabad and Pune. Ideal for corporate travelers, IT professionals, and airport transfers. We offer Door-to-Door pickup and drop services.',
    highlights: [
      'Professional and Punctual Drivers',
      'Door-to-Door Service',
      'Clean and Sanitized Vehicles',
      '24/7 Availability'
    ],
    inclusions: [
      'AC Vehicle',
      'Driver Allowance',
      'Fuel'
    ],
    exclusions: [
      'Toll Taxes',
      'Parking Charges',
      'GST (if applicable)'
    ],
    itinerary: [
      { day: 'Note', activity: 'Flexible timing as per client requirement.' },
      { day: 'Route', activity: 'Via Ahmednagar / Samruddhi Mahamarg as preferred.' }
    ],
    price: 'Contact for pricing and info'
  },
  {
    id: 'corporate-heritage-tour',
    title: 'Corporate Executive Heritage Tour',
    duration: '1 Full Day',
    destinations: ['Bibi Ka Maqbara', 'Panchakki', 'Aurangabad Caves', 'Himayat Bagh'],
    image: '/gallery/corporate.jpg',
    gallery: [
      '/gallery/corporate.jpg'
    ],
    description: 'A compact and efficient heritage tour designed for business travelers and corporate guests. Covers the major landmarks of Aurangabad city in a time-effective manner.',
    highlights: [
      'Flexible Scheduling',
      'Business Class Vehicles',
      'Knowledgeable Driver-Guides',
      'Express Entry Assistance'
    ],
    inclusions: [
      'Luxury AC Vehicle',
      'Mineral Water & Refreshments',
      'All Taxes & Parking'
    ],
    exclusions: [
      'Monument Fees',
      'Meals'
    ],
    itinerary: [
      { day: 'Morning', activity: 'Pickup from Hotel/Office. Visit Bibi Ka Maqbara.' },
      { day: 'Afternoon', activity: 'Visit Panchakki and Aurangabad Caves.' },
      { day: 'Evening', activity: 'Drop back to Hotel/Airport.' }
    ],
    price: 'Contact for pricing and info'
  },
  {
    id: 'one-way-intercity-drop',
    title: 'One-Way Intercity Drop (Any City)',
    duration: 'One Way',
    destinations: ['Pune', 'Mumbai', 'Nashik', 'Surat', 'Any City'],
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1200'
    ],
    description: 'Specialized one-way taxi service connecting Aurangabad with Pune, Mumbai, Nashik, or any other city. Travel comfortably and pay only for the drop without return trip charges. Reliable door-to-door service.',
    highlights: [
      'Pay only for one-way distance',
      'Door-to-door pickup and drop',
      'Well-maintained AC vehicles',
      'Experienced long-route drivers'
    ],
    inclusions: [
      'AC Transport',
      'Fuel charges',
      'Driver allowance'
    ],
    exclusions: [
      'Toll Taxes',
      'Parking fees',
      'Meals during transit'
    ],
    itinerary: [
      { day: 'Pickup', activity: 'Convenient pickup from your given address.' },
      { day: 'Journey', activity: 'Smooth highway drive to the destination city.' },
      { day: 'Drop', activity: 'Drop-off directly at your required location.' }
    ],
    price: 'Contact for pricing and info'
  },
  {
    id: 'wedding-car-service',
    title: 'Premium Wedding Car Rental',
    duration: 'Customizable',
    destinations: ['Any Venue', 'Local', 'Outstation'],
    image: '/gallery/wedding-car-service.jpg',
    gallery: [
      '/gallery/wedding-car-service.jpg'
    ],
    description: 'Make your special day seamless and memorable with our premium wedding car services. We offer a versatile fleet of luxury sedans, MUVs, and large-capacity vehicles to accommodate the couple and guests.',
    highlights: [
      'Multiple cars available for the entire family',
      'Spotless, well-maintained luxury vehicles',
      'Professional, well-dressed chauffeurs',
      'Flexible packages based on distance and time'
    ],
    inclusions: [
      'Premium Vehicle of your choice',
      'Professional Chauffeur',
      'Fuel for the agreed itinerary',
      'Flexible timings'
    ],
    exclusions: [
      'Toll & Parking fees',
      'Floral decorations',
      'Extra distance charges'
    ],
    itinerary: [
      { day: 'Pre-Wedding', activity: 'Timely arrival of clean vehicles at the pickup point.' },
      { day: 'Event', activity: 'Chauffeur on standby for seamless venue transfers.' },
      { day: 'Vidai/Drop', activity: 'Comfortable and safe drop to the designated location.' }
    ],
    price: 'Custom pricing based on cars and distance'
  }
];
