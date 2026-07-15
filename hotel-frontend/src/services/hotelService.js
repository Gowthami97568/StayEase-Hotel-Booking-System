const HOTELS = [
  {
    id: 1,
    name: "The Grand Horizon",
    location: "Goa",
    address: "Candolim Beach Road, Goa",
    rating: 4.8,
    pricePerNight: 5500,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1000",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1000",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1000",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1000"
    ],
    amenities: [
      "Free WiFi",
      "Swimming Pool",
      "Restaurant",
      "Spa",
      "Gym",
      "Parking"
    ],
    rooms: [
      {
        id: 101,
        type: "Deluxe Room",
        beds: "1 King Bed",
        guests: 2,
        available: 5,
        price: 5500
      },
      {
        id: 102,
        type: "Suite",
        beds: "2 Beds",
        guests: 4,
        available: 3,
        price: 8000
      }
    ]
  },

  {
    id: 2,
    name: "Ocean Paradise",
    location: "Mumbai",
    address: "Marine Drive, Mumbai",
    rating: 4.7,
    pricePerNight: 6200,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1000",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1000",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1000"
    ],
    amenities: [
      "WiFi",
      "Pool",
      "Restaurant",
      "Gym"
    ],
    rooms: [
      {
        id: 201,
        type: "Executive Room",
        beds: "1 Queen Bed",
        guests: 2,
        available: 4,
        price: 6200
      }
    ]
  },

  {
    id: 3,
    name: "Royal Palace Hotel",
    location: "Hyderabad",
    address: "Banjara Hills",
    rating: 4.9,
    pricePerNight: 7200,
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1000"
    ],
    amenities: [
      "Pool",
      "Spa",
      "Restaurant",
      "Parking"
    ],
    rooms: [
      {
        id: 301,
        type: "Luxury Suite",
        beds: "King Bed",
        guests: 3,
        available: 2,
        price: 7200
      }
    ]
  },

  {
    id: 4,
    name: "Sunrise Residency",
    location: "Bengaluru",
    address: "MG Road",
    rating: 4.5,
    pricePerNight: 4800,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1000"
    ],
    amenities: [
      "WiFi",
      "Parking"
    ],
    rooms: [
      {
        id: 401,
        type: "Standard Room",
        beds: "Queen Bed",
        guests: 2,
        available: 6,
        price: 4800
      }
    ]
  },

  {
    id: 5,
    name: "Elite Stay",
    location: "Chennai",
    address: "T Nagar",
    rating: 4.6,
    pricePerNight: 5100,
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1000"
    ],
    amenities: [
      "Restaurant",
      "WiFi",
      "Gym"
    ],
    rooms: [
      {
        id: 501,
        type: "Executive Room",
        beds: "King Bed",
        guests: 2,
        available: 5,
        price: 5100
      }
    ]
  },

  {
    id: 6,
    name: "Skyline Hotel",
    location: "Delhi",
    address: "Connaught Place",
    rating: 4.4,
    pricePerNight: 5900,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1000"
    ],
    amenities: [
      "Pool",
      "Gym",
      "Restaurant"
    ],
    rooms: [
      {
        id: 601,
        type: "Deluxe",
        beds: "King Bed",
        guests: 2,
        available: 4,
        price: 5900
      }
    ]
  },

  {
    id: 7,
    name: "Green Leaf Hotel",
    location: "Pune",
    address: "FC Road",
    rating: 4.3,
    pricePerNight: 4300,
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1000"
    ],
    amenities: [
      "WiFi",
      "Restaurant"
    ],
    rooms: [
      {
        id: 701,
        type: "Standard",
        beds: "Queen Bed",
        guests: 2,
        available: 7,
        price: 4300
      }
    ]
  },

  {
    id: 8,
    name: "Blue Moon Hotel",
    location: "Kochi",
    address: "Marine Road",
    rating: 4.8,
    pricePerNight: 6100,
    image: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=1000"
    ],
    amenities: [
      "Pool",
      "Spa",
      "Gym"
    ],
    rooms: [
      {
        id: 801,
        type: "Luxury Room",
        beds: "King Bed",
        guests: 2,
        available: 2,
        price: 6100
      }
    ]
  },

  {
    id: 9,
    name: "Mountain View",
    location: "Shimla",
    address: "Mall Road",
    rating: 4.9,
    pricePerNight: 6700,
    image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1000"
    ],
    amenities: [
      "Fireplace",
      "WiFi",
      "Restaurant"
    ],
    rooms: [
      {
        id: 901,
        type: "Suite",
        beds: "King Bed",
        guests: 4,
        available: 3,
        price: 6700
      }
    ]
  },

  {
    id: 10,
    name: "City Comfort",
    location: "Visakhapatnam",
    address: "Beach Road",
    rating: 4.5,
    pricePerNight: 4700,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1000"
    ],
    amenities: [
      "Restaurant",
      "Parking",
      "WiFi"
    ],
    rooms: [
      {
        id: 1001,
        type: "Deluxe",
        beds: "Queen Bed",
        guests: 2,
        available: 8,
        price: 4700
      }
    ]
  }
];

export const hotelService = {

  async getFeaturedHotels() {
    return HOTELS.slice(0, 4);
  },

  async getAllHotels(search = "") {
    if (!search) return HOTELS;

    return HOTELS.filter(
      hotel =>
        hotel.name.toLowerCase().includes(search.toLowerCase()) ||
        hotel.location.toLowerCase().includes(search.toLowerCase())
    );
  },

  async getHotelById(id) {
    return HOTELS.find(hotel => hotel.id === Number(id));
  }

};