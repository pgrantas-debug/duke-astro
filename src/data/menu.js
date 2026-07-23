// Duke menu content (es/en). Keep category IDs aligned with MenuSection tabs.

export const IMG = {
  burger: '/image/burgerfoto.jpg',
  plate: '/image/main.jpg',
  vibe: '/image/dukestyle.png',
};

export const MENU = {
  tapas: {
    noteEs: 'Salsas adicionales 0.50 €.',
    noteEn: 'Additional sauces 0.50 €.',
    items: [
      { name: { es: 'Langostinos crujiente con alioli', en: 'Crunchy prawns with alioli' }, price: 8.9, img: IMG.plate },
      {
        name: { es: 'Solomillo de pollo empanado', en: 'Fried chicken tenderloin' },
        price: 4.2,
        desc: { es: 'Elige media o completo.', en: 'Choose half or full.' },
        img: IMG.plate,
        variants: [
          { key: 'half', label: { es: 'MEDIA', en: 'HALF' }, price: 4.2 },
          { key: 'full', label: { es: 'COMPLETO', en: 'FULL' }, price: 7.9 },
        ],
      },
      { name: { es: 'Pollo Kentucky', en: 'Kentucky chicken' }, price: 5.9, img: IMG.plate },
      { name: { es: 'Rabas empanadas fritas', en: 'Fried breaded calamari' }, price: 9.5, img: IMG.plate },
      { name: { es: 'Patatas fritas', en: 'French fries' }, price: 4.9, img: IMG.plate },
      { name: { es: 'Patatas chorreadas', en: 'Loaded fries' }, price: 7.5, desc: { es: 'Con cheddar, bacon y perejil.', en: 'With cheddar, bacon and parsley.' }, img: IMG.plate },
      { name: { es: 'Nachos de cheddar', en: 'Cheddar nachos' }, price: 5, desc: { es: 'Salsa jalapeño.', en: 'Jalapeño sauce.' }, img: IMG.plate },
      { name: { es: 'Gambas al pil pil', en: 'Pil pil prawns' }, price: 10.9, img: IMG.plate },
    ],
  },
  sandwiches: {
    items: [
      { name: { es: 'Serranito', en: 'Serranito' }, price: 5.9, desc: { es: 'Jamón serrano, pollo, pimiento verde y mayonesa.', en: 'Serrano ham, chicken, green pepper and mayo.' }, img: IMG.plate },
      { name: { es: 'Africano', en: 'African' }, price: 5.9, desc: { es: 'Pollo, cebolla frita, especias y mayonesa.', en: 'Chicken, fried onion, spices and mayo.' }, img: IMG.plate },
      { name: { es: 'Chicken', en: 'Chicken' }, price: 5.9, desc: { es: 'Pollo, jamón, queso, tomate y mayonesa.', en: 'Chicken, ham, cheese, tomato and mayo.' }, img: IMG.plate },
      { name: { es: 'Tradicional', en: 'Traditional' }, price: 5.9, desc: { es: 'Pollo, jamón, queso y mayonesa.', en: 'Chicken, ham, cheese and mayo.' }, img: IMG.plate },
      { name: { es: 'Americano', en: 'American' }, price: 5.9, desc: { es: 'Bacon, huevo, queso y mayonesa.', en: 'Bacon, egg, cheese and mayo.' }, img: IMG.plate },
      { name: { es: 'Jamón y queso', en: 'Ham and cheese' }, price: 5.9, desc: { es: 'Jamón, queso y mayonesa.', en: 'Ham, cheese and mayo.' }, img: IMG.plate },
      { name: { es: 'Sabinillas', en: 'Sabinillas' }, price: 5.9, desc: { es: 'Atún, tomate y mayonesa.', en: 'Tuna, tomato and mayo.' }, img: IMG.plate },
    ],
  },
  empanadas: {
    noteEs: 'Empanadas argentinas · 3.90 € unidad.',
    noteEn: 'Argentinian empanadas · 3.90 € each.',
    items: [
      { name: { es: 'Ternera', en: 'Beef' }, price: 3.9, img: IMG.vibe },
      { name: { es: 'Ternera picante', en: 'Spicy beef' }, price: 3.9, img: IMG.vibe },
      { name: { es: 'Pollo', en: 'Chicken' }, price: 3.9, img: IMG.vibe },
      { name: { es: 'Jamón y queso', en: 'Ham and cheese' }, price: 3.9, img: IMG.vibe },
      { name: { es: 'Caprese', en: 'Caprese' }, price: 3.9, img: IMG.vibe },
      { name: { es: 'Cebolla y queso', en: 'Onion and cheese' }, price: 3.9, img: IMG.vibe },
      { name: { es: 'Gamba alioli', en: 'Prawn with alioli' }, price: 3.9, img: IMG.vibe },
      { name: { es: 'Pollo africano', en: 'African chicken' }, price: 3.9, img: IMG.vibe },
      { name: { es: 'Espinaca', en: 'Spinach' }, price: 3.9, img: IMG.vibe },
      { name: { es: 'Roquefort', en: 'Roquefort cheese' }, price: 3.9, img: IMG.vibe },
      { name: { es: 'Humita', en: 'Humita' }, price: 3.9, desc: { es: 'Salsa blanca, mozzarella, cebolla dulce y maíz.', en: 'White sauce, mozzarella, sweet onion and corn.' }, img: IMG.vibe },
      { name: { es: 'Bacon, champiñones, queso', en: 'Bacon, mushroom, cheese' }, price: 3.9, img: IMG.vibe },
      { name: { es: 'Montañesa', en: 'Mountain' }, price: 3.9, desc: { es: 'Salami, queso, pimiento rojo y orégano.', en: 'Salami, cheese, red pepper and oregano.' }, img: IMG.vibe },
      { name: { es: 'Atún', en: 'Tuna' }, price: 3.9, desc: { es: 'Tomate, pimiento, cebolla y aceitunas.', en: 'Tomato, red pepper, onion and olives.' }, img: IMG.vibe },
    ],
  },
  hotdogs: {
    items: [
      { name: { es: 'Duke Hot Dog', en: 'Duke Hot Dog' }, price: 6.9, desc: { es: 'Cheddar, bacon y lluvia de patatas.', en: 'Cheddar cheese, bacon and chips.' }, img: IMG.burger },
      { name: { es: 'Clásico', en: 'Classic' }, price: 4.9, desc: { es: 'Aderezos y lluvia de patatas.', en: 'Pick your sauce and sprinkled potato chips.' }, img: IMG.burger },
      { name: { es: 'Argentino', en: 'Argentinian' }, price: 6.5, desc: { es: 'Mayonesa de chimichurri y patatas.', en: 'Chimichurri mayo and chips.' }, img: IMG.burger },
      { name: { es: 'Hot Dog Criollo', en: 'Criollo Hot Dog' }, price: 7.9, desc: { es: 'Salsa criolla, cebolla y pimientos.', en: 'Criolla sauce, onion and peppers.' }, img: IMG.burger },
    ],
  },
  burgers: {
    noteKey: 'burgersNote',
    items: [
      { name: { es: 'Duke Burger', en: 'Duke Burger' }, price: 13.9, doublePrice: 15.9, desc: { es: 'Carne, queso, bacon, pepinillos, cebolla y huevo.', en: 'Beef, cheese, bacon, pickles, onion and egg.' }, img: IMG.burger },
      { name: { es: 'Hispana', en: 'Hispana' }, price: 12.9, doublePrice: 14.9, desc: { es: 'Carne, queso, lechuga, tomate y cebolla.', en: 'Beef, cheese, lettuce, tomatoes and onion rings.' }, img: IMG.burger },
      { name: { es: 'Mediterránea', en: 'Mediterranean' }, price: 13.9, doublePrice: 15.9, desc: { es: 'Carne, queso, salsa, bacon y pimiento rojo.', en: 'Beef, cheese, sauce, bacon and red peppers.' }, img: IMG.burger },
      { name: { es: 'Europea', en: 'European' }, price: 12.9, doublePrice: 14.9, desc: { es: 'Carne, queso, salsa, pepinos y cebolla caramelizada.', en: 'Beef, cheese, sauce, pickles and caramelized onions.' }, img: IMG.burger },
      { name: { es: 'Americana', en: 'American' }, price: 12.9, doublePrice: 14.9, desc: { es: 'Carne, cebolla asada y queso.', en: 'Beef, grilled onion and cheese.' }, img: IMG.burger },
      { name: { es: 'Roquera', en: 'Roquera' }, price: 14.9, doublePrice: 15.9, desc: { es: 'Carne, cebolla, huevo, cheddar, chili y jamón.', en: 'Beef, cheddar, onion, egg, chilli and ham.' }, img: IMG.burger },
      { name: { es: 'Chicken Burger Premium', en: 'Chicken Burger Premium' }, price: 13, doublePrice: 15.9, desc: { es: 'Pollo, cebolla, queso, huevo y pimiento rojo.', en: 'Chicken, onion, cheese, eggs and red peppers.' }, img: IMG.burger },
      { name: { es: 'Chicken Burger', en: 'Chicken Burger' }, price: 11.9, doublePrice: 13.9, desc: { es: 'Pollo, lechuga, tomate y cebolla.', en: 'Chicken, lettuce, tomatoes and onion.' }, img: IMG.burger },
      { name: { es: 'Blue', en: 'Blue' }, price: 13.9, doublePrice: 15.9, desc: { es: 'Carne, cebolla asada y roquefort.', en: 'Beef, grilled onion and Roquefort cheese.' }, img: IMG.burger },
      { name: { es: 'La Porteña', en: 'La Portena' }, price: 13.9, doublePrice: 15.9, desc: { es: 'Carne, cebolla asada, provolone y champiñón.', en: 'Beef, grilled onion, provolone and mushroom.' }, img: IMG.burger },
      { name: { es: 'Jalapeño', en: 'Jalapeno' }, price: 13.9, doublePrice: 14.9, desc: { es: 'Carne, cebolla asada, salsa de jalapeño, jamón y jalapeños.', en: 'Beef, grilled onion, jalapeño sauce, ham and jalapeños.' }, img: IMG.burger },
      { name: { es: 'Veggie Burger', en: 'Veggie Burger' }, price: 13.9, desc: { es: 'Hamburguesa de guisantes con lechuga, tomate y salsa de aguacate.', en: 'Made with peas, lettuce, tomato and avocado sauce.' }, img: IMG.burger },
    ],
  },
  milanesas: {
    noteEs: 'Incluye ración de patatas fritas.',
    noteEn: 'Comes with chips.',
    items: [
      { name: { es: 'A caballo', en: 'A caballo' }, price: 19.9, desc: { es: 'Salsa chimichurri y huevos fritos.', en: 'Chimichurri sauce with fried eggs.' }, img: IMG.plate },
      { name: { es: 'Criolla', en: 'Criolla' }, price: 19.9, desc: { es: 'Mayonesa y salsa criolla con cebolla y pimientos.', en: 'Mayo, criolla sauce, onion and peppers.' }, img: IMG.plate },
      { name: { es: 'Napolitana', en: 'Napolitana' }, price: 19.9, desc: { es: 'Salsa de tomate, jamón, queso gratinado y rodajas de tomate.', en: 'Tomato sauce, ham, grated cheese and sliced tomatoes.' }, img: IMG.plate },
      { name: { es: 'A Roquefort', en: 'Roquefort' }, price: 19.9, desc: { es: 'Salsa de tomate, roquefort, nueces y jamón.', en: 'Tomato sauce, walnuts, Roquefort and ham.' }, img: IMG.plate },
      { name: { es: 'Duke', en: 'Duke' }, price: 19.9, desc: { es: 'Cheddar, bacon, huevos rotos, ketchup y mayonesa.', en: 'Cheddar cheese, bacon, fried eggs, ketchup and mayo.' }, img: IMG.plate },
    ],
  },
  drinks: {
    items: [
      { name: { es: 'Agua de botella', en: 'Bottle water' }, price: 2.4 },
      { name: { es: 'Agua con gas', en: 'Sparkling water' }, price: 2.4 },
      { name: { es: 'Coca-Cola', en: 'Coca-Cola' }, price: 2.3 },
      { name: { es: 'Coca-Cola Zero', en: 'Coca-Cola Zero' }, price: 2.3 },
      { name: { es: '7up', en: '7up' }, price: 2.2 },
      { name: { es: 'Fanta', en: 'Fanta' }, price: 2.2, desc: { es: 'Naranja / limón.', en: 'Orange / lemon.' } },
      { name: { es: 'Schweppes', en: 'Schweppes' }, price: 2.2 },
      { name: { es: 'Schweppes 0', en: 'Schweppes 0' }, price: 2.2 },
      { name: { es: 'Fuze Tea maracuyá', en: 'Fuze Tea passionfruit' }, price: 2.5 },
      { name: { es: 'Aquarius', en: 'Aquarius' }, price: 2.5, desc: { es: 'Limón / naranja.', en: 'Lemon / orange.' } },
      { name: { es: 'Zumo', en: 'Juice' }, price: 2.2, desc: { es: 'Piña / melocotón.', en: 'Pineapple / peach.' } },
      { name: { es: 'Zumo naranja exprimido', en: 'Orange juice' }, price: 3.9 },
      { name: { es: 'Zumo Mix Duke', en: 'Duke Mix juice' }, price: 5, desc: { es: 'Frutas.', en: 'Fruits.' } },
      { name: { es: 'Batido', en: 'Milkshake' }, price: 4.9, desc: { es: 'Fresa / banana / mix.', en: 'Strawberry / banana / mix.' } },
      { name: { es: 'Red Bull', en: 'Red Bull' }, price: 3 },
    ],
  },
};

export const STORIES = [
  { img: IMG.burger, caption: { es: 'Hora de burgers', en: 'Burger time' }, video: false },
  { img: '/image/tapas.jpg', caption: { es: 'Tapas & más', en: 'Tapas and more' }, video: false },
  { img: IMG.vibe, caption: { es: 'Duke vibes', en: 'Duke vibes' }, video: true },
  { img: '/image/topsellers.jpg', caption: { es: 'Los más pedidos', en: 'Top sellers' }, video: false },
  { img: IMG.plate, caption: { es: 'Ambiente Sabinillas', en: 'Sabinillas mood' }, video: false },
  { img: '/image/seeyouatduke.jpg', caption: { es: 'Nos vemos en Duke', en: 'See you at Duke' }, video: true },
];

export const GALLERY = STORIES;
