
export interface Vehicle {
  id: string;
  name: string;
  type: string;
  seats: number;
  features: string[];
  image: string;
  description: string;
  pricePerKm: string;
}

export interface Tour {
  id: string;
  title: string;
  duration: string;
  destinations: string[];
  image: string; // Main thumbnail
  gallery: string[]; // Additional images
  description: string;
  price: string;
  inclusions: string[];
  exclusions: string[];
  highlights: string[]; // Key selling points
  itinerary: { day: string; activity: string }[];
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  serviceType: 'local' | 'intercity' | 'tour';
  pickupLocation: string;
  dropLocation: string;
  date: string;
  vehiclePreference: string;
}
