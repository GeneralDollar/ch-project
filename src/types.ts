

export interface Division {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
  initials: string;
}

export interface Product {
  imageUrl: string;
  name: string;
  rating: number;
  reviews: number;
  price: string;
  originalPrice: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceDivision {
  title: string;
  description: string;
  services: Service[];
}
