export interface Property {
  id: number;
  name: string;
  location: string;
  price: number;
  image: string;
  description: string;
  rating: number;
  reviews: number;
}

export const properties: Property[] = [
  {
    id: 1,
    name: 'Cozy Apartment in Downtown',
    location: 'New York, NY',
    price: 150,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400',
    description: 'A beautiful apartment in the heart of the city.',
    rating: 4.8,
    reviews: 120
  },
  {
    id: 2,
    name: 'Beachfront Villa',
    location: 'Miami, FL',
    price: 300,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400',
    description: 'Relax in this stunning beachfront villa.',
    rating: 4.9,
    reviews: 85
  },
  {
    id: 3,
    name: 'Mountain Cabin',
    location: 'Aspen, CO',
    price: 200,
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=400',
    description: 'Escape to the mountains in this cozy cabin.',
    rating: 4.7,
    reviews: 95
  },
  {
    id: 4,
    name: 'Urban Loft',
    location: 'Los Angeles, CA',
    price: 180,
    image: 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=400',
    description: 'Modern loft in the bustling city.',
    rating: 4.6,
    reviews: 110
  },
  {
    id: 5,
    name: 'Countryside Cottage',
    location: 'Vermont',
    price: 120,
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=400',
    description: 'Peaceful cottage surrounded by nature.',
    rating: 4.5,
    reviews: 75
  }
];
