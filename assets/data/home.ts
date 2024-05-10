export const categories = [
  {
    text: 'Delivery',
    img: require('@/assets/data/delivery.png'),
    style: { width: 90, height: 60, marginTop: 15, marginBottom: -2}, // Example styling
  },

  {
    text: 'Offers',
    img: require('@/assets/data/offers.png'),
    style: { width: 90, height: 60, marginTop: 15, marginBottom: -2},
     // Example styling
  },

  {
    text: 'Discounted',
    img: require('@/assets/data/discount.png'),
    style: { width: 90, height: 60, marginTop: 15, marginBottom: -2},
   // Example styling
  },
];


export const restaurants = [
  {
    name: '✨Petit Cake✨',
    rating: '4.5 Excellent',
    ratings: '(85+)',
    distance: '',
    img: require('@/assets/data/cakes/Petit.png'),
    tags: ['Italian', 'Pizza', 'Pasta', 'Salads'],
    duration: '35 - 45',
  },
  {
    name: '✨Charlotte✨',
    id: '2',
    rating: '4.9 Excellent',
    ratings: '(99+)',
    distance: '',
    img: require('@/assets/data/cakes/Charlottecake.png'),
    tags: ['Salads', 'Vegan', 'Healthy', 'British'],
    duration: '15 - 30',
  },
  {
    name: '✨Mooncake✨',
    id: '3',
    rating: '4.5 Excellent',
    ratings: '(500+)',
    distance: '3 miles away',
    img: require('@/assets/data/cakes/Mooncake.png'),
    tags: ['Spanish', 'Salads', 'Tpas', 'Pasta'],
    duration: '25 - 45',
  },
];
