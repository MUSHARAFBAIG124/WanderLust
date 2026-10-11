// init/data.js
//
// - 32 listings, category stored inside each listing.
// - Prices are per night, in INR.
// - latitude / longitude are town-level approximations for the map feature.
//   Mongoose ignores them until they are added to the Listing schema.
// - Every listing has its OWN photo key. Change a photo in ONE place (PHOTOS).
// - Run `node init/checkImages.js` to find broken links, then scroll /listings
//   and compare each title with its photo. Replace any that don't match.

const photo = (id) => ({
  filename: "listingimage",
  url: `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=80`,
});

const PHOTOS = {
  // Amazing Pools
  candolim: photo("photo-1613490493576-7fde63acd811"),
  kovalam: photo("photo-1613977257363-707ba9348227"),
  fortKochi: photo("photo-1600566753086-00f18fb6b3ea"),
  lonavala: photo("photo-1600585154340-be6161a56a0c"),
  pondicherry: photo("photo-1600047509807-ba8f99d2cdde"),

  // Trending
  gokarna: photo("photo-1507525428034-b723cf961d3e"),
  havelock: photo("photo-1500375592092-40eb2168fd21"),
  varkala: photo("photo-1516483638261-f4dbaf036963"),
  alappuzha: photo("photo-1501785888041-af3ef285b470"), // CHECK: should show water / houseboat
  munnar: photo("photo-1500530855697-b586d89ba3ee"),
  diu: photo("photo-1499793983690-e29da59ef1c2"),

  // Mountains
  manali: photo("photo-1575403071235-5dcd06cbf169"),
  kufri: photo("photo-1510798831971-661eb04b3739"),
  auli: photo("photo-1469474968028-56623f02e42e"),
  nainital: photo("photo-1449844908441-8829872d2607"),
  kodaikanal: photo("photo-1449158743715-0a90ebb6d2d8"),

  // Camping
  jaisalmer: photo("photo-1478131143081-80f7f84ca84d"), // CHECK: tent, but not a desert
  kasol: photo("photo-1476514525535-07fb3b4ae5f1"),
  wayanad: photo("photo-1500382017468-9049fed747ef"),
  bandipur: photo("photo-1441974231531-c6227db76b6e"),

  // Castles
  udaipur: photo("photo-1566073771259-6a8506099945"),
  jodhpur: photo("photo-1682414181845-a725f154a14a"), // CHECK: unverified
  mysuru: photo("photo-1600566753190-17f0baa2a6c3"), // CHECK: may be a modern home
  lucknow: photo("photo-1600607687939-ce8a6c25118c"), // CHECK: may be a modern home

  // Iconic Cities
  delhi: photo("photo-1522708323590-d24dbb6b0267"),
  mumbai: photo("photo-1600607687920-4e2a09cf159d"),
  bengaluru: photo("photo-1631679706909-1844bbd07221"),
  hyderabad: photo("photo-1512918728675-ed5a9ecdebfd"),

  // Rooms
  chennai: photo("photo-1505693416388-ac5ce068fe85"),
  hampi: photo("photo-1616486338812-3dadae4b4ace"),
  pune: photo("photo-1600210492486-724fe5c67fb0"),
  banjaraHills: photo("photo-1600607687644-c7171b42498f"),
};

const listings = [
  // ---------- Amazing Pools ----------
  {
    title: "Candolim Villa with Private Pool",
    description: "Three-bedroom villa a short walk from Candolim Beach. Private pool, air-conditioned rooms, a fully equipped kitchen and a caretaker who can arrange breakfast.",
    img: "candolim", price: 9500, location: "Candolim, Goa", country: "India", category: "Amazing Pools",
    latitude: 15.518, longitude: 73.762,
  },
  {
    title: "Infinity Pool Villa near Kovalam Beach",
    description: "Hillside villa with an infinity pool overlooking the Arabian Sea. Two bedrooms, open-air dining area, Wi-Fi and daily housekeeping.",
    img: "kovalam", price: 7800, location: "Kovalam, Kerala", country: "India", category: "Amazing Pools",
    latitude: 8.4004, longitude: 76.9787,
  },
  {
    title: "Palm Grove Pool Villa in Fort Kochi",
    description: "Restored villa with a courtyard pool, surrounded by coconut palms. Ten minutes from the Chinese fishing nets and the main cafes of Fort Kochi.",
    img: "fortKochi", price: 6200, location: "Fort Kochi, Kerala", country: "India", category: "Amazing Pools",
    latitude: 9.9658, longitude: 76.2421,
  },
  {
    title: "Garden Villa with Pool, Lonavala",
    description: "Family villa with a large lawn and a heated pool, about two hours from Mumbai and Pune. Barbecue area, indoor games and parking for three cars.",
    img: "lonavala", price: 7200, location: "Lonavala, Maharashtra", country: "India", category: "Amazing Pools",
    latitude: 18.7546, longitude: 73.4062,
  },
  {
    title: "Poolside Boutique Stay in White Town",
    description: "Six-room French-quarter guesthouse with a small plunge pool and rooftop breakfast. Walk to the promenade and the cafes on Rue Suffren.",
    img: "pondicherry", price: 5400, location: "White Town, Pondicherry", country: "India", category: "Amazing Pools",
    latitude: 11.934, longitude: 79.832,
  },

  // ---------- Trending ----------
  {
    title: "Sunset Beach Cottage at Kudle",
    description: "Simple wooden cottage a few steps from Kudle Beach. Sea-facing porch, fan and mosquito nets, and a small cafe next door that serves fresh seafood.",
    img: "gokarna", price: 3200, location: "Gokarna, Karnataka", country: "India", category: "Trending",
    latitude: 14.5479, longitude: 74.3188,
  },
  {
    title: "Island Retreat Cottage, Havelock",
    description: "Garden cottage ten minutes from Radhanagar Beach. Air-conditioned, with a breakfast terrace; ferry pick-up and scooter hire can be arranged.",
    img: "havelock", price: 9800, location: "Havelock Island, Andaman", country: "India", category: "Trending",
    latitude: 11.968, longitude: 92.984,
  },
  {
    title: "Cliffside Sea View Stay, Varkala",
    description: "Room on the Varkala cliff with a balcony facing the sea. Yoga deck, Ayurvedic massage on request, and cafes along the cliff path.",
    img: "varkala", price: 4500, location: "Varkala, Kerala", country: "India", category: "Trending",
    latitude: 8.7379, longitude: 76.7163,
  },
  {
    title: "Kerala Backwater Houseboat",
    description: "One-bedroom houseboat with air conditioning at night. Includes a captain, a cook and three meals, with a slow cruise through the Alappuzha canals.",
    img: "alappuzha", price: 8500, location: "Alappuzha, Kerala", country: "India", category: "Trending",
    latitude: 9.4981, longitude: 76.3388,
  },
  {
    title: "Tea Garden Bungalow in Munnar",
    description: "Colonial-style bungalow on a working tea estate. Two bedrooms, a fireplace, a veranda facing the valley and an early-morning plantation walk.",
    img: "munnar", price: 5200, location: "Munnar, Kerala", country: "India", category: "Trending",
    latitude: 10.0889, longitude: 77.0595,
  },
  {
    title: "Beach Bungalow near Nagoa, Diu",
    description: "Private bungalow a short walk from Nagoa Beach. Two rooms, a shaded garden and a quiet setting away from the main town.",
    img: "diu", price: 3600, location: "Diu", country: "India", category: "Trending",
    latitude: 20.7141, longitude: 70.9879,
  },

  // ---------- Mountains ----------
  {
    title: "Pine Forest Cabin in Old Manali",
    description: "Wooden cabin among pine trees, 15 minutes from Old Manali. Heater, kitchenette and a deck with views of the Beas valley.",
    img: "manali", price: 3800, location: "Manali, Himachal Pradesh", country: "India", category: "Mountains",
    latitude: 32.2432, longitude: 77.1892,
  },
  {
    title: "Snow View Chalet near Kufri",
    description: "Two-bedroom chalet with floor heating and a large window facing the snow peaks. Ten minutes to Kufri, with parking and a caretaker on site.",
    img: "kufri", price: 4800, location: "Shimla, Himachal Pradesh", country: "India", category: "Mountains",
    latitude: 31.1048, longitude: 77.1734,
  },
  {
    title: "Himalayan Valley Homestay, Auli",
    description: "Family-run homestay with home-cooked Garhwali meals. Rooms have mountain views, and the Auli ski slope and ropeway are a short drive away.",
    img: "auli", price: 4200, location: "Auli, Uttarakhand", country: "India", category: "Mountains",
    latitude: 30.5287, longitude: 79.5693,
  },
  {
    title: "Lake View Cottage in Nainital",
    description: "Two-room cottage above Naini Lake, a ten-minute walk to the Mall Road. Balcony with a lake view, hot water and a fireplace in winter.",
    img: "nainital", price: 4000, location: "Nainital, Uttarakhand", country: "India", category: "Mountains",
    latitude: 29.3919, longitude: 79.4542,
  },
  {
    title: "Hillside Cabin in Kodaikanal",
    description: "Cabin on a quiet hillside near Coaker's Walk. Cool weather all year, a wood-burning stove, a kitchenette and a garden with fruit trees.",
    img: "kodaikanal", price: 3500, location: "Kodaikanal, Tamil Nadu", country: "India", category: "Mountains",
    latitude: 10.2381, longitude: 77.4892,
  },

  // ---------- Camping ----------
  {
    title: "Desert Safari Camp near Sam Dunes",
    description: "Tented camp with attached bathrooms, a campfire evening with folk music, a camel ride at sunset and dinner under the stars.",
    img: "jaisalmer", price: 6500, location: "Jaisalmer, Rajasthan", country: "India", category: "Camping",
    latitude: 26.9157, longitude: 70.9083,
  },
  {
    title: "Riverside Camp in Kasol",
    description: "Tents on the bank of the Parvati river. Shared bathrooms, bonfire in the evening and trek guides for Kheerganga and Malana.",
    img: "kasol", price: 2500, location: "Kasol, Himachal Pradesh", country: "India", category: "Camping",
    latitude: 32.01, longitude: 77.315,
  },
  {
    title: "Forest Camp in Wayanad",
    description: "Eco-friendly tents inside a coffee and spice plantation. Includes breakfast, a guided nature walk and a bird-watching trail.",
    img: "wayanad", price: 3200, location: "Wayanad, Kerala", country: "India", category: "Camping",
    latitude: 11.6854, longitude: 76.132,
  },
  {
    title: "Jungle Lodge near Bandipur National Park",
    description: "Cottages at the edge of the forest. Includes meals and a guided jeep safari, with frequent deer and elephant sightings.",
    img: "bandipur", price: 6800, location: "Bandipur, Karnataka", country: "India", category: "Camping",
    latitude: 11.67, longitude: 76.63,
  },

  // ---------- Castles ----------
  {
    title: "Lake Pichola Heritage Haveli",
    description: "Restored 18th-century haveli with a rooftop restaurant facing the lake and the City Palace. Carved-wood furniture and air-conditioned rooms.",
    img: "udaipur", price: 12500, location: "Udaipur, Rajasthan", country: "India", category: "Castles",
    latitude: 24.5854, longitude: 73.683,
  },
  {
    title: "Fort View Heritage Haveli, Jodhpur",
    description: "Haveli in the old blue city with a courtyard and a terrace that looks straight at Mehrangarh Fort. Breakfast included.",
    img: "jodhpur", price: 9500, location: "Jodhpur, Rajasthan", country: "India", category: "Castles",
    latitude: 26.2389, longitude: 73.0243,
  },
  {
    title: "Royal Heritage Residency, Mysuru",
    description: "Heritage property with high ceilings, a garden courtyard and traditional South Indian breakfast. Ten minutes from Mysore Palace.",
    img: "mysuru", price: 6800, location: "Mysuru, Karnataka", country: "India", category: "Castles",
    latitude: 12.3052, longitude: 76.6552,
  },
  {
    title: "Restored Colonial Mansion in Lucknow",
    description: "Century-old mansion with a veranda and garden, close to the Bara Imambara. Awadhi dinner can be arranged at the property.",
    img: "lucknow", price: 5400, location: "Lucknow, Uttar Pradesh", country: "India", category: "Castles",
    latitude: 26.8467, longitude: 80.9462,
  },

  // ---------- Iconic Cities ----------
  {
    title: "Skyline Apartment near Connaught Place",
    description: "High-floor one-bedroom apartment with a city view, a metro station within a five-minute walk, fast Wi-Fi and a work desk.",
    img: "delhi", price: 5800, location: "Connaught Place, Delhi", country: "India", category: "Iconic Cities",
    latitude: 28.6315, longitude: 77.2167,
  },
  {
    title: "Sea View Apartment, Marine Drive",
    description: "Compact apartment facing the Arabian Sea along Marine Drive. Air-conditioned, walkable to Churchgate station and the cafes of Fort.",
    img: "mumbai", price: 7500, location: "Marine Drive, Mumbai", country: "India", category: "Iconic Cities",
    latitude: 18.9432, longitude: 72.8235,
  },
  {
    title: "Modern Apartment in Indiranagar",
    description: "Furnished one-bedroom apartment near 100 Feet Road, with fast Wi-Fi and a workspace. Cafes, pubs and the metro are within walking distance.",
    img: "bengaluru", price: 4200, location: "Indiranagar, Bengaluru", country: "India", category: "Iconic Cities",
    latitude: 12.9784, longitude: 77.6408,
  },
  {
    title: "Heritage Stay near Charminar",
    description: "Room in a restored old-city house, a five-minute walk from Charminar and Laad Bazaar. Hyderabadi breakfast included.",
    img: "hyderabad", price: 3800, location: "Charminar, Hyderabad", country: "India", category: "Iconic Cities",
    latitude: 17.3616, longitude: 78.4747,
  },

  // ---------- Rooms ----------
  {
    title: "Cozy Studio in Anna Nagar",
    description: "Quiet studio with a kitchenette, air conditioning and Wi-Fi, ten minutes from Anna Nagar Tower Park. Good for solo travellers and couples.",
    img: "chennai", price: 2600, location: "Anna Nagar, Chennai", country: "India", category: "Rooms",
    latitude: 13.085, longitude: 80.2101,
  },
  {
    title: "Private Room near Hampi Bazaar",
    description: "Clean private room in a family-run guesthouse with a rooftop cafe. Walk to the Virupaksha Temple, with bicycles available for rent.",
    img: "hampi", price: 1800, location: "Hampi, Karnataka", country: "India", category: "Rooms",
    latitude: 15.335, longitude: 76.46,
  },
  {
    title: "Loft Apartment in Koregaon Park",
    description: "Stylish loft with a mezzanine bedroom, a balcony and Wi-Fi. Close to the cafes on North Main Road and 20 minutes from Pune railway station.",
    img: "pune", price: 3900, location: "Koregaon Park, Pune", country: "India", category: "Rooms",
    latitude: 18.5362, longitude: 73.894,
  },
  {
    title: "Luxury Penthouse in Banjara Hills",
    description: "Two-bedroom penthouse with a terrace, a gym and a pool in the building, and a concierge. Minutes from the restaurants of Road No. 1.",
    img: "banjaraHills", price: 9000, location: "Banjara Hills, Hyderabad", country: "India", category: "Rooms",
    latitude: 17.4126, longitude: 78.4482,
  },
];

// Warn about missing or duplicate photos when the file is loaded.
const seenIds = new Map();
for (const [key, value] of Object.entries(PHOTOS)) {
  const id = value.url.match(/images\.unsplash\.com\/([^?]+)/)?.[1];
  if (!id || seenIds.has(id)) {
    console.warn(`Photo problem: "${key}" is missing or duplicates "${seenIds.get(id)}"`);
  }
  seenIds.set(id, key);
}

// Convert the "img" key into the { filename, url } object your schema expects.
const sampleListings = listings.map(({ img, ...rest }) => {
  if (!PHOTOS[img]) throw new Error(`Unknown photo key "${img}" in "${rest.title}"`);
  return { ...rest, image: PHOTOS[img] };
});

module.exports = { data: sampleListings };