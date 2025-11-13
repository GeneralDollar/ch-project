
import type { Division, Product, Testimonial } from './types.ts';

export const divisionsData: Division[] = [
  {
    icon: 'fa-car',
    title: 'Auto Parts Division',
    description: 'Specializing in high-quality spare parts for a wide range of vehicles. From engine components to body parts, we have you covered.',
  },
  {
    icon: 'fa-tools',
    title: 'Mining Equipment Spares',
    description: 'Providing durable and reliable spare parts for heavy-duty mining machinery to ensure minimal downtime and maximum productivity.',
  },
  {
    icon: 'fa-industry',
    title: 'Aluminium Products',
    description: 'Offering a variety of aluminium products, including extrusions and sheets, for industrial and commercial applications.',
  },
  {
    icon: 'fa-globe-asia',
    title: 'Sourcing & Logistics',
    description: 'Our expert team handles global sourcing and logistics, ensuring you get the right products delivered efficiently to your doorstep.',
  },
];

export const productsData: Product[] = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1629452816733-2c965682b42b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    name: 'Engine Timing Belt Kit',
    rating: 4.5,
    reviews: 120,
    price: '$75.99',
    originalPrice: '$99.99',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1617013835579-2a907101a16e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    name: 'Premium Brake Pads Set',
    rating: 5,
    reviews: 250,
    price: '$45.50',
    originalPrice: '$55.00',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1600003059242-70b39b56f264?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    name: 'Synthetic Motor Oil (5L)',
    rating: 4.5,
    reviews: 88,
    price: '$32.00',
    originalPrice: '$40.00',
  },
];

export const testimonialsData: Testimonial[] = [
  {
    text: "The quality of the parts is outstanding, and the customer service is top-notch. They helped me find the exact part I needed for my truck. Highly recommended!",
    initials: "CM",
    author: "Chris Mahachi",
    role: "Workshop Manager (Coolworld, ZW)",
  },
  {
    text: "CH Trading has been our go-to supplier for mining spares. Their reliability and on-time delivery have been crucial for our operations. A trustworthy partner.",
    initials: "PD",
    author: "Prince Dambaza",
    role: "Procurement Officer (SA Mining Co., ZA)",
  },
  {
    text: "I was impressed with their sourcing capabilities. They found a very specific aluminium extrusion for us that we couldn't find anywhere else. Excellent service!",
    initials: "RC",
    author: "Robert Chen",
    role: "Lead Engineer (Global Manufacturing, US)",
  },
];