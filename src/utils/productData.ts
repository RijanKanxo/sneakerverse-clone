
// Sample product data
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  hoverImage?: string;
  description?: string;
  sizes?: string[];
  colors?: string[];
  featured?: boolean;
  isNew?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Nike Air Max 90',
    category: 'Men\'s Shoes',
    price: 130,
    image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&q=80&w=900',
    hoverImage: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=900',
    description: 'The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU details. Classic colors celebrate your fresh look while Max Air cushioning adds comfort to the journey.',
    sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11', 'US 12'],
    colors: ['Black', 'White', 'Red'],
    featured: true,
    isNew: true
  },
  {
    id: '2',
    name: 'Nike Sportswear Tech Fleece',
    category: 'Men\'s Hoodie',
    price: 110,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=900',
    description: 'The Nike Sportswear Tech Fleece Hoodie combines a lightweight, low-profile design with warm fleece fabric to help keep you comfortable without adding bulk.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Gray', 'Black', 'Navy'],
    featured: true
  },
  {
    id: '3',
    name: 'Nike Blazer Mid \'77',
    category: 'Women\'s Shoes',
    price: 105,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=900',
    hoverImage: 'https://images.unsplash.com/photo-1518656306295-aa28b28b2504?auto=format&fit=crop&q=80&w=900',
    description: 'In the \'70s, Nike was the new shoe on the block. So new in fact, we were still breaking into the basketball scene and testing prototypes on the feet of our local team. Of course, the design improved over the years, but the name stuck. The Nike Blazer Mid \'77 Vintage—classic since the beginning.',
    sizes: ['US 5', 'US 6', 'US 7', 'US 8', 'US 9', 'US 10'],
    colors: ['White/Black', 'Sail/Red', 'Gray/White'],
    featured: true,
    isNew: true
  },
  {
    id: '4',
    name: 'Nike Air Force 1 \'07',
    category: 'Men\'s Shoes',
    price: 110,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=900',
    hoverImage: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=900',
    description: 'The radiance lives on in the Nike Air Force 1 \'07, the b-ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.',
    sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11', 'US 12'],
    colors: ['White', 'Black', 'Red'],
    featured: true
  },
  {
    id: '5',
    name: 'Nike Sportswear Club Fleece',
    category: 'Men\'s Joggers',
    price: 55,
    image: 'https://images.unsplash.com/photo-1577983596600-a1a19fa79e22?auto=format&fit=crop&q=80&w=900',
    description: 'The Nike Sportswear Club Fleece Joggers combine classic style with the soft comfort of fleece for an elevated, everyday look.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Gray', 'Black', 'Navy'],
    featured: true
  },
  {
    id: '6',
    name: 'Nike Air Zoom Pegasus 39',
    category: 'Running Shoes',
    price: 120,
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=900',
    description: 'A springy ride for any run, the Nike Air Zoom Pegasus 39 helps you stay on your feet as you chase your personal goals. The updated design offers a supportive sensation to help keep your foot contained, while underfoot cushioning and double Zoom Air units combine for a responsive feel.',
    sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11', 'US 12'],
    colors: ['Black/White', 'Blue/White', 'Gray/Red'],
    featured: true,
    isNew: true
  },
  {
    id: '7',
    name: 'Nike Dri-FIT ADV Run Division',
    category: 'Women\'s Running Top',
    price: 65,
    image: 'https://images.unsplash.com/photo-1519556883520-8ea9b77e2418?auto=format&fit=crop&q=80&w=900',
    description: 'Designed to help you stay dry and comfortable, the Nike Dri-FIT ADV Run Division Top optimizes cooling with innovative fabric technologies.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Pink', 'Black', 'Blue'],
    featured: true
  },
  {
    id: '8',
    name: 'Nike Dunk Low',
    category: 'Women\'s Shoes',
    price: 110,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=900',
    hoverImage: 'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80&w=900',
    description: 'Created for the hardwood but taken to the streets, the \'80s b-ball icon returns with perfectly shined overlays and classic team colors. With its iconic hoops design, the Nike Dunk Low channels \'80s vintage back onto the streets while its padded, low-cut collar lets you take your game anywhere.',
    sizes: ['US 5', 'US 6', 'US 7', 'US 8', 'US 9', 'US 10'],
    colors: ['White/Green', 'Black/White', 'Red/White'],
    featured: true,
    isNew: true
  }
];
