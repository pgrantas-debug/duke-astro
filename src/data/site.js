// Restaurant info + bilingual UI copy.
// Spanish (es) is the primary language; English (en) is the secondary toggle.
// Swap this file to reuse the template for another location.

export const restaurant = {
  name: 'Duke — Coffee | Food | Drinks',
  whatsappNumber: '34654631219',
  smsNumber: '+34654631219',
  phone: '654 631 219',
  instagram: 'https://instagram.com/duke.sabinillas',
  instagramHandle: '@duke.sabinillas',
  address: {
    line1: 'Calle Pandora 1',
    line2: 'Sabinillas, Manilva',
    line3: 'Costa del Sol',
    mapsQuery: 'Calle Pandora 1, Sabinillas, Manilva',
  },
  hours: [
    { es: 'Comida', en: 'Lunch', time: '12:00 - 16:00' },
    { es: 'Cena', en: 'Dinner', time: '19:00 - 00:00' },
  ],
};

export const defaultLang = 'es';

export const i18n = {
  es: {
    langToggleLabel: 'EN',
    nav: { menu: 'Carta', gallery: 'Galería', location: 'Cómo llegar' },
    hero: {
      kicker: 'San Luis de Sabinillas, Málaga',
      badge: 'Coffee | Food | Drinks',
      tagline:
        'Smash burgers, hot dogs, milanesas y empanadas argentinas en primera línea de Sabinillas.',
      ctaPrimary: 'Haz tu pedido ahora',
      ctaSecondary: 'Ver la carta completa',
      hoursLine: 'Abierto todos los días · 12:00-16:00 y 19:00-00:00',
      bestSeller: 'más pedido',
      videoCaption: 'Duke vibes',
    },
    why: {
      kicker: 'por qué duke',
      title: 'SABOR CALLEJERO, CALIDAD SERIA',
      f1t: 'Simple o doble',
      f1d: 'Hamburguesas con combinaciones potentes y opción doble para quien viene con hambre real.',
      f2t: 'Carta grande',
      f2d: 'No solo burgers: hot dogs, milanesas, tapas, empanadas y bebidas para todos.',
      f3t: 'Pedido rápido',
      f3d: 'Elige en la web y envíalo por WhatsApp para recoger o pedir delivery.',
    },
    menu: {
      kicker: 'nuestra carta',
      title: 'LA CARTA',
      hint: 'Toca',
      hint2: 'para añadir algo a tu pedido.',
      tabs: {
        all: 'Todo',
        tapas: 'Tapas',
        sandwiches: 'Bocadillos',
        empanadas: 'Empanadas',
        hotdogs: 'Hot Dogs',
        burgers: 'Hamburguesas',
        milanesas: 'Milanesas',
        drinks: 'Bebidas',
      },
      burgersNote: 'Precios mostrados en versión simple/doble según disponibilidad.',
      friesIncluded: 'Las hamburguesas incluyen patatas según la carta del local.',
      makeItDouble: 'Versión doble',
      doubleCta: 'DOBLE',
      doubleLabel: 'precio de la doble',
    },
    gallery: {
      kicker: 'duke moments',
      title: '@DUKE.SABINILLAS',
      blurb:
        'Galería del local, platos reales y ambiente de Duke en Sabinillas.',
      follow: 'Síguenos en Instagram',
      note: 'Fotos cargadas desde tu carpeta public/image.',
    },
    location: {
      kickerFind: 'ven a duke',
      titleFind: 'CÓMO LLEGAR',
      directions: 'Ver en Google Maps',
      callUs: 'Llámanos',
      kickerHours: 'horario',
      titleHours: 'ABIERTO TODOS LOS DÍAS',
      hoursNote: 'Horario sujeto a temporada. Confirma por teléfono o Instagram.',
    },
    cart: {
      title: 'TU PEDIDO',
      empty: 'Tu pedido está vacío. Añade algo rico de la carta.',
      subtotal: 'Subtotal',
      orderType: 'Tipo de pedido',
      pickup: 'Recoger',
      delivery: 'A domicilio',
      name: 'Tu nombre',
      namePlaceholder: 'ej. Laura',
      address: 'Dirección de entrega',
      addressPlaceholder: 'Calle, número, piso, ciudad...',
      doubleTag: 'doble',
      send: 'Enviar pedido por WhatsApp',
      hint: 'Añade al menos un producto para enviar tu pedido.',
    },
    whatsapp: {
      greeting: '¡Hola! Quiero hacer un pedido en Duke - Coffee | Food | Drinks.',
      orderLabel: 'Pedido:',
      total: 'Total',
      name: 'Nombre',
      orderTypeLabel: 'Tipo de pedido',
      addressLabel: 'Dirección de entrega',
    },
  },

  en: {
    langToggleLabel: 'ES',
    nav: { menu: 'Menu', gallery: 'Gallery', location: 'Find Us' },
    hero: {
      kicker: 'San Luis de Sabinillas, Málaga',
      badge: 'Coffee | Food | Drinks',
      tagline:
        'Smash burgers, hot dogs, milanesas and Argentinian empanadas right in Sabinillas.',
      ctaPrimary: 'Order now',
      ctaSecondary: 'See the full menu',
      hoursLine: 'Open daily · 12:00-16:00 and 19:00-00:00',
      bestSeller: 'best seller',
      videoCaption: 'Duke vibes',
    },
    why: {
      kicker: 'why duke',
      title: 'STREET FOOD ENERGY, SERIOUS QUALITY',
      f1t: 'Single or double',
      f1d: 'Bold combinations and double options for real appetite.',
      f2t: 'Big menu',
      f2d: 'Not only burgers: hot dogs, milanesas, tapas, empanadas and drinks for everyone.',
      f3t: 'Fast ordering',
      f3d: 'Choose your order on the site and send it via WhatsApp for pickup or delivery.',
    },
    menu: {
      kicker: 'our menu',
      title: 'THE MENU',
      hint: 'Tap',
      hint2: 'to add something to your order.',
      tabs: {
        all: 'All',
        tapas: 'Tapas',
        sandwiches: 'Sandwiches',
        empanadas: 'Empanadas',
        hotdogs: 'Hot Dogs',
        burgers: 'Burgers',
        milanesas: 'Milanesas',
        drinks: 'Drinks',
      },
      burgersNote: 'Prices are shown as single/double where available.',
      friesIncluded: 'Burgers include fries according to local menu policy.',
      makeItDouble: 'Double version',
      doubleCta: 'DOUBLE',
      doubleLabel: 'double serving price',
    },
    gallery: {
      kicker: 'duke moments',
      title: '@DUKE.SABINILLAS',
      blurb:
        'Venue moments, real dishes and Duke atmosphere in Sabinillas.',
      follow: 'Follow on Instagram',
      note: 'Photos loaded from your public/image folder.',
    },
    location: {
      kickerFind: 'come to duke',
      titleFind: 'FIND US',
      directions: 'Get directions',
      callUs: 'Call us',
      kickerHours: 'hours',
      titleHours: 'OPEN DAILY',
      hoursNote: 'Opening times may vary seasonally. Confirm by phone or Instagram.',
    },
    cart: {
      title: 'YOUR ORDER',
      empty: 'Your order is empty. Add something tasty from the menu.',
      subtotal: 'Subtotal',
      orderType: 'Order type',
      pickup: 'Pickup',
      delivery: 'Delivery',
      name: 'Your name',
      namePlaceholder: 'e.g. Laura',
      address: 'Delivery address',
      addressPlaceholder: 'Street, number, floor, city...',
      doubleTag: 'double',
      send: 'Send order to WhatsApp',
      hint: 'Add at least one item to send your order.',
    },
    whatsapp: {
      greeting: "Hello! I'd like to place an order at Duke - Coffee | Food | Drinks.",
      orderLabel: 'Order:',
      total: 'Total',
      name: 'Name',
      orderTypeLabel: 'Order type',
      addressLabel: 'Delivery address',
    },
  },
};

export function whatsappBaseLink(text) {
  return `https://wa.me/${restaurant.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function smsBaseLink(text, isIOS = false) {
  const recipient = restaurant.smsNumber || restaurant.phone.replace(/[^\d+]/g, '');
  const separator = isIOS ? '&' : '?';
  return `sms:${recipient}${separator}body=${encodeURIComponent(text)}`;
}
