export const getDishById = (id: number) => {
  const meals = categorycake.food.flatMap((category) => category.meals);
  return meals.find((meal) => meal.id === id);
};

export const customize = {
  img: require('@/assets/data/customicon.png'),
}

export const categorycake = {
  name: 'Cakes',
  rating: '4.5 Excellent',
  ratings: '(500+)',
  img: require('@/assets/data/cakes/Petit.png'),
  distance: '0.85 miles away',
  delivery: '10-20 min',
  tags: ['Birthday Cake', 'Wedding Cake', 'Anniversary Cake', 'Holiday Cake', 'Retirement Cake', 'Baby Shower'],
  about: 'Cakes are versatile desserts enjoyed worldwide, ranging from light and airy sponge cakes to rich and decadent chocolate creations. They serve as delightful treats for celebrations, gatherings, or simply as a sweet indulgence any time of the day.',
  food: [
    {
      category: 'Birthday Cake',
      meals: [
        {
          id: 1,
          name: 'Shortcake',
          price: 17,
          info: 'A delightful shortcake topped with fresh strawberries and whipped cream.',
          img: require('@/assets/data/cakes/shortcake.png'),
        },
        {
          id: 2,
          name: 'Butterfly Cake',
          price: 17,
          info: 'A whimsical butterfly-shaped cake decorated with colorful frosting and edible flowers.',
          img: require('@/assets/data/cakes/butterflycake.png'),
        },
        {
          id: 3,
          name: 'Frog Cake',
          price: 40,
          info: 'A fun and playful cake shaped like a frog, usually decorated with green frosting and candy eyes.',
          img: require('@/assets/data/cakes/frogcake.png'),
        },
        {
          id: 4,
          name: "Lemon Cake 😎",
          price: 80,
          info: 'A tangy and refreshing cake made with lemon zest and juice, often topped with lemon glaze or frosting.',
          img: require('@/assets/data/cakes/lemoncake.png'),
        },
        {
          id: 5,
          name: "Princess Cake ",
          price: 80,
          info: 'A regal and elegant cake consisting of layers of sponge cake, jam, pastry cream, and whipped cream, typically covered in marzipan.',
          img: require('@/assets/data/cakes/princesscake.png'),
        },
      ],
    },
    {
      category: 'Wedding Cake',
      meals: [
        {
          id: 6,
          name: 'Esterhazy torte',
          price: 9.35,
          info: 'A traditional Hungarian cake featuring layers of almond meringue and rich buttercream, finished with a distinctive chocolate drizzle.',
          img: require('@/assets/data/cakes/tortecake.png'),
        },
        {
          id: 2,
          name: 'Butterfly Cake',
          price: 10.75,
          info: 'A whimsical cake shaped like a butterfly, often adorned with colorful frosting and decorations.',
          img: require('@/assets/data/cakes/butterflycake.png'),
        },
        {
          id: 7,
          name: 'Charlotte Cake',
          price: 9.35,
          info: 'A delicate and beautiful cake made by lining a mold with ladyfingers or sponge cake and filling it with fruit, custard, or mousse.',
          img: require('@/assets/data/cakes/Charlottecake.png'),
        },
        {
          id: 8,
          name: 'Princess Cake',
          price: 10.75,
          info: 'A regal and elegant cake consisting of layers of sponge cake, jam, pastry cream, and whipped cream, typically covered in marzipan.',
          img: require('@/assets/data/cakes/princesscake.png'),
        },
        {
          id: 9,
          name: 'Fraisier',
          price: 10.75,
          info: 'A French dessert composed of layers of genoise sponge cake, fresh strawberries, and pastry cream, often topped with marzipan or whipped cream.',
          img: require('@/assets/data/cakes/Fraisier.png'),
        },
      ],
    },
    {
      category: 'Anniversary Cake',
      meals: [
        {
          id: 6,
          name: 'Esterhazy torte',
          price: 11.35,
          info: 'A traditional Hungarian cake featuring layers of almond meringue and rich buttercream, finished with a distinctive chocolate drizzle.',
          img: require('@/assets/data/cakes/tortecake.png'),
        },
        {
          id: 2,
          name: 'Butterfly Cake',
          price: 9.75,
          info: 'A whimsical cake shaped like a butterfly, often adorned with colorful frosting and decorations.',
          img: require('@/assets/data/cakes/butterflycake.png'),
        },
        {
          id: 9,
          name: 'Fraisier',
          price: 11.35,
          info: 'A French dessert composed of layers of genoise sponge cake, fresh strawberries, and pastry cream, often topped with marzipan or whipped cream.',
          img: require('@/assets/data/cakes/Fraisier.png'),
        },
        {
          id: 4,
          name: 'Lemon Cake',
          price: 9.75,
          info: 'A tangy and refreshing cake made with lemon zest and juice, often topped with lemon glaze or frosting.',
          img: require('@/assets/data/cakes/lemoncake.png'),
        },
        {
          id: 11,
          name: 'Cheesecakee',
          price: 9.75,
          info: 'Tomato sauce, mozzarella',
          img: require('@/assets/data/cakes/cheesecake.png'),
        },

      ],
    },
    {
      category: 'Holiday Cakes',
      meals: [
        {
          id: 14,
          name: 'Fruitcake',
          price: 5.99,
          info: 'A dense and moist cake filled with candied or dried fruits, nuts, and spices, often soaked in alcohol for added flavor.',
          img: require('@/assets/data/cakes/Fruitcake.png'),
        },
        {
          id: 15,
          name: 'Snow Skin Mooncake',
          price: 8.95,
          info: 'A modern variation of traditional Chinese mooncakes, featuring a soft and chewy snow skin made from glutinous rice flour and filled with various sweet fillings.',
          img: require('@/assets/data/cakes/Mooncake.png'),
        },
        {
          id: 16,
          name: 'Simnel cake',
          price: 5.99,
          info: 'A British fruitcake traditionally eaten during the Easter season, featuring layers of marzipan and often topped with eleven marzipan balls representing the Apostles, minus Judas.',
          img: require('@/assets/data/cakes/Simnelcake.png'),
        },
        {
          id: 17,
          name: 'Lamington',
          price: 8.95,
          info: ' An Australian dessert consisting of squares of sponge cake coated in chocolate icing and rolled in desiccated coconut.',
          img: require('@/assets/data/cakes/Lamington.png'),
        },
        {
          id: 18,
          name: 'Chiffon cake',
          price: 8.95,
          info: 'A light and airy cake made with vegetable oil, eggs, sugar, flour, and baking powder, known for its fluffy texture and high rise.',
          img: require('@/assets/data/cakes/Chiffoncake.png'),
        },


      ],
    },
    {
      category: 'Retirement Cakes',
      meals: [
        {
          id: 19,
          name: 'Buttercake',
          price: 17,
          info: 'A simple and classic cake made with butter, sugar, eggs, and flour, resulting in a rich and tender crumb.',
          img: require('@/assets/data/cakes/Buttercake.png'),
        },
        {
          id: 20,
          name: 'Tiramisu',
          price: 17,
          info: 'An Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese, flavored with cocoa powder and sometimes liqueur.',
          img: require('@/assets/data/cakes/Tiramisu.png'),
        },
        {
          id: 11,
          name: 'Cheesecake',
          price: 40,
          info: 'A rich and creamy dessert made with a base of crushed biscuits or graham crackers and a filling typically consisting of cream cheese, eggs, and sugar, often baked and served chilled.',
          img: require('@/assets/data/cakes/cheesecake.png'),
        },
        {
          id: 14,
          name: 'Fruitcake',
          price: 80,
          info: 'A dense and moist cake filled with candied or dried fruits, nuts, and spices, often soaked in alcohol for added flavor.',
          img: require('@/assets/data/cakes/Fruitcake.png'),
        },
      ],
    },
    {
      category: 'Baby Shower Cake',
      meals: [
        {
          id: 12,
          name: 'Petit Gateau',
          price: 17,
          info: 'A small, individual-sized cake often filled with molten chocolate or fruit compote, served warm with a scoop of ice cream.',
          img: require('@/assets/data/cakes/Petit.png'),
        },
        {
          id: 13,
          name: 'Carrot Cake',
          price: 17,
          info: 'A moist and spiced cake made with grated carrots, often mixed with nuts and raisins, and topped with cream cheese frosting.',
          img: require('@/assets/data/cakes/carrotcake.png'),
        },
      ],
    },

  ],
};
