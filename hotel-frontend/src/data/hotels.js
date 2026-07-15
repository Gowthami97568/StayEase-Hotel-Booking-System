const hotels = [
  {
    "id": 1,
    "name": "Grand Horizon Resort",
    "city": "Goa",
    "state": "Goa",
    "rating": 4.8,
    "reviews": 2543,
    "price": 5500,
    "description": "Grand Horizon Resort is a luxurious five-star beachfront resort located near Baga Beach. Guests enjoy ocean views, spacious rooms, fine dining, a spa, and premium hospitality.",
    "amenities": ["Free WiFi", "Swimming Pool", "Restaurant", "Spa", "Gym", "Parking", "Breakfast", "Room Service"],
    "highlights": ["100 meters from Beach", "Breakfast Included", "Free Airport Shuttle", "Sea View Rooms"],
    "checkIn": "2:00 PM",
    "checkOut": "11:00 AM",
    "rooms": [
      { "name": "Deluxe Room", "bedrooms": 1, "bathrooms": 1, "guests": 2, "beds": "1 King Bed", "price": 5500 },
      { "name": "Family Suite", "bedrooms": 2, "bathrooms": 2, "guests": 4, "beds": "2 King Beds", "price": 8500 },
      { "name": "Luxury Villa", "bedrooms": 4, "bathrooms": 4, "guests": 8, "beds": "4 King Beds", "price": 18500 }
    ],
    "reviewList": [
      { "name": "Rahul", "rating": 5, "comment": "Amazing stay. Beach view was excellent." },
      { "name": "Priya", "rating": 5, "comment": "Food and service were outstanding." }
    ],
    "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
    "gallery": [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200",
      "https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200"
    ]
  },
  {
    "id": 2,
    "name": "Royal Residency",
    "city": "Hyderabad",
    "state": "Telangana",
    "rating": 4.7,
    "reviews": 1894,
    "price": 4200,
    "description": "Luxury hotel located in the heart of Hyderabad with premium rooms, conference halls, rooftop dining and swimming pool.",
    "amenities": ["WiFi", "Pool", "Restaurant", "Gym", "Parking", "Laundry", "Breakfast", "AC"],
    "highlights": ["Near Charminar", "Free Breakfast", "Family Friendly"],
    "checkIn": "1:00 PM",
    "checkOut": "11:00 AM",
    "rooms": [
      { "name": "Executive Room", "bedrooms": 1, "bathrooms": 1, "guests": 2, "beds": "Queen Bed", "price": 4200 },
      { "name": "Suite", "bedrooms": 2, "bathrooms": 2, "guests": 4, "beds": "King Bed", "price": 7600 }
    ],
    "reviewList": [
      { "name": "Arjun", "rating": 5, "comment": "Very clean rooms." },
      { "name": "Sneha", "rating": 4, "comment": "Excellent location." }
    ],
    "image": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200",
    "gallery": [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200",
      "https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200"
    ]
  },
  {
    "id": 3,
    "name": "Ocean Paradise",
    "city": "Mumbai",
    "state": "Maharashtra",
    "rating": 4.9,
    "reviews": 3210,
    "price": 6900,
    "description": "Luxury sea-facing property offering breathtaking sunset views, premium dining, infinity pool and spa.",
    "amenities": ["Sea View", "Infinity Pool", "Spa", "Restaurant", "WiFi", "Gym", "Breakfast", "Parking"],
    "highlights": ["Near Marine Drive", "Private Beach Access", "Luxury Spa"],
    "checkIn": "2:00 PM",
    "checkOut": "12:00 PM",
    "rooms": [
      { "name": "Premium Room", "bedrooms": 1, "bathrooms": 1, "guests": 2, "beds": "King Bed", "price": 6900 },
      { "name": "Family Suite", "bedrooms": 2, "bathrooms": 2, "guests": 5, "beds": "2 King Beds", "price": 11900 }
    ],
    "reviewList": [
      { "name": "Kiran", "rating": 5, "comment": "Best hotel in Mumbai." },
      { "name": "Meghana", "rating": 5, "comment": "Loved the infinity pool." }
    ],
    "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200",
    "gallery": [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200",
      "https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200"
    ]
  },
  {
    "id": 4,
    "name": "Skyline Luxury Hotel",
    "city": "Bengaluru",
    "state": "Karnataka",
    "rating": 4.8,
    "reviews": 2785,
    "price": 5900,
    "description": "Premium business hotel located in the heart of Bengaluru with luxury rooms, rooftop pool and conference facilities.",
    "amenities": ["Free WiFi", "Swimming Pool", "Gym", "Restaurant", "Spa", "Breakfast", "Parking", "Airport Shuttle"],
    "highlights": ["Near MG Road", "Business Center", "Luxury Rooftop Pool", "Airport Pickup"],
    "checkIn": "2:00 PM",
    "checkOut": "12:00 PM",
    "rooms": [
      { "name": "Deluxe Room", "bedrooms": 1, "bathrooms": 1, "guests": 2, "beds": "King Bed", "price": 5900 },
      { "name": "Executive Suite", "bedrooms": 2, "bathrooms": 2, "guests": 4, "beds": "2 King Beds", "price": 9800 },
      { "name": "Presidential Suite", "bedrooms": 3, "bathrooms": 3, "guests": 6, "beds": "3 King Beds", "price": 18000 }
    ],
    "reviewList": [
      { "name": "Anil", "rating": 5, "comment": "Excellent business hotel with amazing service." },
      { "name": "Pooja", "rating": 5, "comment": "Loved the rooftop swimming pool." }
    ],
    "image": "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200",
    "gallery": [
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200",
      "https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200"
    ]
  },
  {
    "id": 5,
    "name": "Chennai Grand Palace",
    "city": "Chennai",
    "state": "Tamil Nadu",
    "rating": 4.7,
    "reviews": 1845,
    "price": 4700,
    "description": "Modern luxury hotel close to Marina Beach with premium rooms, spa and family-friendly facilities.",
    "amenities": ["Free WiFi", "Restaurant", "Swimming Pool", "Breakfast", "Parking", "Laundry", "Gym", "Room Service"],
    "highlights": ["Near Marina Beach", "Family Friendly", "Free Breakfast", "City Center"],
    "checkIn": "1:00 PM",
    "checkOut": "11:00 AM",
    "rooms": [
      { "name": "Standard Room", "bedrooms": 1, "bathrooms": 1, "guests": 2, "beds": "Queen Bed", "price": 4700 },
      { "name": "Family Suite", "bedrooms": 2, "bathrooms": 2, "guests": 5, "beds": "2 King Beds", "price": 8900 }
    ],
    "reviewList": [
      { "name": "Harish", "rating": 5, "comment": "Very clean hotel with friendly staff." },
      { "name": "Deepa", "rating": 4, "comment": "Excellent breakfast and location." }
    ],
    "image": "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
    "gallery": [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200",
      "https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200"
    ]
  },
  {
    "id": 6,
    "name": "Imperial Residency",
    "city": "Delhi",
    "state": "Delhi",
    "rating": 4.9,
    "reviews": 3218,
    "price": 6800,
    "description": "Five-star luxury hotel in New Delhi offering elegant rooms, world-class dining, spa and premium hospitality.",
    "amenities": ["Free WiFi", "Spa", "Swimming Pool", "Restaurant", "Gym", "Airport Shuttle", "Breakfast", "Parking"],
    "highlights": ["Near India Gate", "Luxury Spa", "Airport Transfer", "Fine Dining"],
    "checkIn": "2:00 PM",
    "checkOut": "12:00 PM",
    "rooms": [
      { "name": "Luxury Room", "bedrooms": 1, "bathrooms": 1, "guests": 2, "beds": "King Bed", "price": 6800 },
      { "name": "Royal Suite", "bedrooms": 2, "bathrooms": 2, "guests": 4, "beds": "2 King Beds", "price": 12500 },
      { "name": "Presidential Suite", "bedrooms": 4, "bathrooms": 4, "guests": 8, "beds": "4 King Beds", "price": 25000 }
    ],
    "reviewList": [
      { "name": "Rakesh", "rating": 5, "comment": "Best luxury hotel in Delhi." },
      { "name": "Shalini", "rating": 5, "comment": "Excellent rooms and delicious food." }
    ],
    "image": "https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200",
    "gallery": [
      "https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200"
    ]
  },
  {
    "id": 7,
    "name": "Jaipur Royal Palace",
    "city": "Jaipur",
    "state": "Rajasthan",
    "rating": 4.8,
    "reviews": 2165,
    "price": 5200,
    "description": "Experience royal living in Jaipur with palace-style architecture, luxury rooms, rooftop dining and traditional hospitality.",
    "amenities": ["Free WiFi", "Swimming Pool", "Restaurant", "Spa", "Gym", "Breakfast", "Parking", "Room Service"],
    "highlights": ["Near Hawa Mahal", "Royal Heritage Design", "Luxury Spa", "Traditional Rajasthani Food"],
    "checkIn": "2:00 PM",
    "checkOut": "11:00 AM",
    "rooms": [
      { "name": "Royal Deluxe", "bedrooms": 1, "bathrooms": 1, "guests": 2, "beds": "King Bed", "price": 5200 },
      { "name": "Heritage Suite", "bedrooms": 2, "bathrooms": 2, "guests": 4, "beds": "2 King Beds", "price": 8900 },
      { "name": "Maharaja Suite", "bedrooms": 3, "bathrooms": 3, "guests": 6, "beds": "3 King Beds", "price": 15500 }
    ],
    "reviewList": [
      { "name": "Vikas", "rating": 5, "comment": "Feels like staying inside a palace." },
      { "name": "Neha", "rating": 5, "comment": "Excellent food and beautiful interiors." }
    ],
    "image": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200",
    "gallery": [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200",
      "https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200"
    ]
  },
  {
    "id": 8,
    "name": "Ooty Hill Resort",
    "city": "Ooty",
    "state": "Tamil Nadu",
    "rating": 4.7,
    "reviews": 1842,
    "price": 4300,
    "description": "Beautiful mountain resort surrounded by tea gardens offering breathtaking views, peaceful rooms and family-friendly facilities.",
    "amenities": ["Free WiFi", "Garden", "Restaurant", "Fireplace", "Breakfast", "Parking", "Room Service", "Children Play Area"],
    "highlights": ["Tea Garden View", "Mountain View", "Camp Fire", "Nature Walk"],
    "checkIn": "1:00 PM",
    "checkOut": "11:00 AM",
    "rooms": [
      { "name": "Hill View Room", "bedrooms": 1, "bathrooms": 1, "guests": 2, "beds": "Queen Bed", "price": 4300 },
      { "name": "Family Cottage", "bedrooms": 2, "bathrooms": 2, "guests": 5, "beds": "2 Queen Beds", "price": 7800 },
      { "name": "Luxury Villa", "bedrooms": 4, "bathrooms": 4, "guests": 8, "beds": "4 King Beds", "price": 16500 }
    ],
    "reviewList": [
      { "name": "Karthik", "rating": 5, "comment": "Amazing mountain views and peaceful atmosphere." },
      { "name": "Divya", "rating": 5, "comment": "Perfect resort for family vacation." }
    ],
    "image": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
    "gallery": [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200",
      "https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200"
    ]
  },
  {
    "id": 9,
    "name": "Munnar Green Valley Resort",
    "city": "Munnar",
    "state": "Kerala",
    "rating": 4.9,
    "reviews": 2964,
    "price": 6100,
    "description": "Beautiful eco-luxury resort surrounded by tea plantations offering breathtaking valley views, premium cottages and relaxing spa treatments.",
    "amenities": ["Free WiFi", "Infinity Pool", "Spa", "Restaurant", "Tea Garden View", "Breakfast", "Parking", "Camp Fire"],
    "highlights": ["Tea Plantation View", "Nature Trekking", "Camp Fire", "Mountain Sunrise"],
    "checkIn": "2:00 PM",
    "checkOut": "11:00 AM",
    "rooms": [
      { "name": "Valley View Room", "bedrooms": 1, "bathrooms": 1, "guests": 2, "beds": "King Bed", "price": 6100 },
      { "name": "Premium Cottage", "bedrooms": 2, "bathrooms": 2, "guests": 4, "beds": "2 King Beds", "price": 9800 },
      { "name": "Luxury Villa", "bedrooms": 4, "bathrooms": 4, "guests": 8, "beds": "4 King Beds", "price": 19800 }
    ],
    "reviewList": [
      { "name": "Aravind", "rating": 5, "comment": "Amazing valley views and peaceful atmosphere." },
      { "name": "Keerthi", "rating": 5, "comment": "Excellent cottages and delicious food." }
    ],
    "image": "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200",
    "gallery": [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200",
      "https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200"
    ]
  },
  {
    "id": 10,
    "name": "Mysore Heritage Palace Hotel",
    "city": "Mysore",
    "state": "Karnataka",
    "rating": 4.8,
    "reviews": 2517,
    "price": 5700,
    "description": "A royal heritage hotel inspired by the Mysore Palace with luxurious rooms, traditional architecture, cultural performances and world-class hospitality.",
    "amenities": ["Free WiFi", "Swimming Pool", "Spa", "Restaurant", "Gym", "Breakfast", "Parking", "Room Service"],
    "highlights": ["Near Mysore Palace", "Royal Heritage Rooms", "Cultural Shows", "Luxury Spa"],
    "checkIn": "2:00 PM",
    "checkOut": "12:00 PM",
    "rooms": [
      { "name": "Heritage Room", "bedrooms": 1, "bathrooms": 1, "guests": 2, "beds": "King Bed", "price": 5700 },
      { "name": "Royal Suite", "bedrooms": 2, "bathrooms": 2, "guests": 4, "beds": "2 King Beds", "price": 10400 },
      { "name": "Palace Suite", "bedrooms": 3, "bathrooms": 3, "guests": 6, "beds": "3 King Beds", "price": 17200 }
    ],
    "reviewList": [
      { "name": "Rohan", "rating": 5, "comment": "Beautiful heritage hotel with excellent service." },
      { "name": "Ananya", "rating": 5, "comment": "Felt like staying in a palace. Highly recommended!" }
    ],
    "image": "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200",
    "gallery": [
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200",
      "https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200"
    ]
  },
  {
    "id": 11,
    "name": "Kochi Backwater Retreat",
    "city": "Kochi",
    "state": "Kerala",
    "rating": 4.8,
    "reviews": 2210,
    "price": 5300,
    "description": "A serene waterfront property along the Kochi backwaters offering houseboat-style rooms, Ayurvedic spa and authentic Kerala cuisine.",
    "amenities": ["Free WiFi", "Backwater View", "Ayurvedic Spa", "Restaurant", "Breakfast", "Parking", "Boat Rides", "Gym"],
    "highlights": ["Backwater View Rooms", "Ayurvedic Treatments", "Traditional Kerala Cuisine", "Sunset Boat Rides"],
    "checkIn": "2:00 PM",
    "checkOut": "11:00 AM",
    "rooms": [
      { "name": "Backwater View Room", "bedrooms": 1, "bathrooms": 1, "guests": 2, "beds": "King Bed", "price": 5300 },
      { "name": "Houseboat Suite", "bedrooms": 2, "bathrooms": 2, "guests": 4, "beds": "2 King Beds", "price": 9200 }
    ],
    "reviewList": [
      { "name": "Manoj", "rating": 5, "comment": "Waking up to the backwaters was magical." },
      { "name": "Lakshmi", "rating": 5, "comment": "The Ayurvedic spa was so relaxing." }
    ],
    "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200",
    "gallery": [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200",
      "https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200"
    ]
  },
  {
    "id": 12,
    "name": "Varanasi Ganges View Hotel",
    "city": "Varanasi",
    "state": "Uttar Pradesh",
    "rating": 4.6,
    "reviews": 1654,
    "price": 3900,
    "description": "A heritage-style hotel overlooking the ghats of the Ganges, offering spiritual ambiance, rooftop dining and comfortable rooms.",
    "amenities": ["Free WiFi", "River View", "Restaurant", "Rooftop Cafe", "Breakfast", "Parking", "Laundry", "AC"],
    "highlights": ["Ganges River View", "Walking Distance to Ghats", "Rooftop Sunrise Views", "Cultural Tours"],
    "checkIn": "12:00 PM",
    "checkOut": "10:00 AM",
    "rooms": [
      { "name": "River View Room", "bedrooms": 1, "bathrooms": 1, "guests": 2, "beds": "Queen Bed", "price": 3900 },
      { "name": "Heritage Suite", "bedrooms": 2, "bathrooms": 2, "guests": 4, "beds": "King Bed", "price": 6800 }
    ],
    "reviewList": [
      { "name": "Suresh", "rating": 5, "comment": "Watching the sunrise over the Ganges was unforgettable." },
      { "name": "Isha", "rating": 4, "comment": "Great location, very close to the ghats." }
    ],
    "image": "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
    "gallery": [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200",
      "https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200"
    ]
  },
  {
    "id": 13,
    "name": "Udaipur Lake Palace Inn",
    "city": "Udaipur",
    "state": "Rajasthan",
    "rating": 4.9,
    "reviews": 2876,
    "price": 7200,
    "description": "An elegant lakeside hotel with stunning views of Lake Pichola, offering royal decor, fine dining and a rooftop infinity pool.",
    "amenities": ["Free WiFi", "Lake View", "Infinity Pool", "Spa", "Restaurant", "Breakfast", "Parking", "Gym"],
    "highlights": ["Lake Pichola View", "Rooftop Infinity Pool", "Royal Rajasthani Decor", "Boat Rides Nearby"],
    "checkIn": "2:00 PM",
    "checkOut": "11:00 AM",
    "rooms": [
      { "name": "Lake View Room", "bedrooms": 1, "bathrooms": 1, "guests": 2, "beds": "King Bed", "price": 7200 },
      { "name": "Royal Suite", "bedrooms": 2, "bathrooms": 2, "guests": 4, "beds": "2 King Beds", "price": 12800 },
      { "name": "Palace Villa", "bedrooms": 3, "bathrooms": 3, "guests": 6, "beds": "3 King Beds", "price": 21500 }
    ],
    "reviewList": [
      { "name": "Devansh", "rating": 5, "comment": "Absolutely stunning views of the lake." },
      { "name": "Ritika", "rating": 5, "comment": "The most romantic hotel we've stayed at." }
    ],
    "image": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200",
    "gallery": [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200",
      "https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200"
    ]
  },
  {
    "id": 14,
    "name": "Shimla Pine Ridge Resort",
    "city": "Shimla",
    "state": "Himachal Pradesh",
    "rating": 4.7,
    "reviews": 1932,
    "price": 4800,
    "description": "A cozy mountain resort nestled among pine forests, offering scenic valley views, bonfire evenings and warm hospitality.",
    "amenities": ["Free WiFi", "Mountain View", "Restaurant", "Bonfire Area", "Breakfast", "Parking", "Room Service", "Heater"],
    "highlights": ["Pine Forest Views", "Bonfire Nights", "Walking Trails", "Snow Views in Winter"],
    "checkIn": "1:00 PM",
    "checkOut": "11:00 AM",
    "rooms": [
      { "name": "Valley View Room", "bedrooms": 1, "bathrooms": 1, "guests": 2, "beds": "Queen Bed", "price": 4800 },
      { "name": "Family Cottage", "bedrooms": 2, "bathrooms": 2, "guests": 5, "beds": "2 Queen Beds", "price": 8200 }
    ],
    "reviewList": [
      { "name": "Nitin", "rating": 5, "comment": "Loved the bonfire evenings with mountain views." },
      { "name": "Simran", "rating": 4, "comment": "Peaceful stay, great for a family trip." }
    ],
    "image": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
    "gallery": [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200",
      "https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200"
    ]
  },
  {
    "id": 15,
    "name": "Manali Snow Valley Resort",
    "city": "Manali",
    "state": "Himachal Pradesh",
    "rating": 4.8,
    "reviews": 2345,
    "price": 5400,
    "description": "A picturesque resort surrounded by snow-capped mountains, offering adventure activities, cozy rooms and a riverside cafe.",
    "amenities": ["Free WiFi", "Mountain View", "Restaurant", "Riverside Cafe", "Breakfast", "Parking", "Bonfire", "Heater"],
    "highlights": ["Snow Capped Mountain Views", "River Side Location", "Adventure Sports Nearby", "Bonfire Evenings"],
    "checkIn": "1:00 PM",
    "checkOut": "11:00 AM",
    "rooms": [
      { "name": "Mountain View Room", "bedrooms": 1, "bathrooms": 1, "guests": 2, "beds": "King Bed", "price": 5400 },
      { "name": "Riverside Suite", "bedrooms": 2, "bathrooms": 2, "guests": 4, "beds": "2 King Beds", "price": 9100 },
      { "name": "Luxury Chalet", "bedrooms": 3, "bathrooms": 3, "guests": 6, "beds": "3 King Beds", "price": 15800 }
    ],
    "reviewList": [
      { "name": "Yash", "rating": 5, "comment": "The mountain views were breathtaking every morning." },
      { "name": "Komal", "rating": 5, "comment": "Perfect base for our adventure trip." }
    ],
    "image": "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200",
    "gallery": [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200",
      "https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200"
    ]
  },
  {
    "id": 16,
    "name": "Amritsar Golden Gateway Hotel",
    "city": "Amritsar",
    "state": "Punjab",
    "rating": 4.7,
    "reviews": 2088,
    "price": 4100,
    "description": "A comfortable hotel located minutes from the Golden Temple, offering spacious rooms, authentic Punjabi cuisine and warm hospitality.",
    "amenities": ["Free WiFi", "Restaurant", "Breakfast", "Parking", "Laundry", "AC", "Room Service", "Gym"],
    "highlights": ["Near Golden Temple", "Authentic Punjabi Food", "Free Airport Pickup", "Family Friendly"],
    "checkIn": "1:00 PM",
    "checkOut": "11:00 AM",
    "rooms": [
      { "name": "Standard Room", "bedrooms": 1, "bathrooms": 1, "guests": 2, "beds": "Queen Bed", "price": 4100 },
      { "name": "Family Suite", "bedrooms": 2, "bathrooms": 2, "guests": 5, "beds": "2 King Beds", "price": 7400 }
    ],
    "reviewList": [
      { "name": "Gurpreet", "rating": 5, "comment": "Walking distance to the Golden Temple, amazing food." },
      { "name": "Amandeep", "rating": 4, "comment": "Comfortable rooms and friendly staff." }
    ],
    "image": "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200",
    "gallery": [
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200",
      "https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200"
    ]
  },
  {
    "id": 17,
    "name": "Pondicherry French Quarter Hotel",
    "city": "Pondicherry",
    "state": "Puducherry",
    "rating": 4.8,
    "reviews": 1765,
    "price": 4900,
    "description": "A charming boutique hotel in the French Quarter, featuring colonial architecture, a courtyard cafe and easy beach access.",
    "amenities": ["Free WiFi", "Courtyard Cafe", "Restaurant", "Breakfast", "Parking", "Bicycle Rental", "AC", "Room Service"],
    "highlights": ["French Colonial Architecture", "Near Promenade Beach", "Bicycle Rentals", "Boutique Cafes Nearby"],
    "checkIn": "2:00 PM",
    "checkOut": "11:00 AM",
    "rooms": [
      { "name": "Courtyard Room", "bedrooms": 1, "bathrooms": 1, "guests": 2, "beds": "Queen Bed", "price": 4900 },
      { "name": "Heritage Suite", "bedrooms": 2, "bathrooms": 2, "guests": 4, "beds": "King Bed", "price": 8600 }
    ],
    "reviewList": [
      { "name": "Vignesh", "rating": 5, "comment": "The French Quarter charm is everywhere in this hotel." },
      { "name": "Farah", "rating": 5, "comment": "Loved cycling around town from the hotel." }
    ],
    "image": "https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200",
    "gallery": [
      "https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200"
    ]
  },
  {
    "id": 18,
    "name": "Rishikesh Riverside Camp Resort",
    "city": "Rishikesh",
    "state": "Uttarakhand",
    "rating": 4.7,
    "reviews": 1543,
    "price": 3800,
    "description": "An adventure-friendly riverside resort offering camping-style stays, yoga sessions and rafting packages along the Ganges.",
    "amenities": ["Free WiFi", "River View", "Yoga Deck", "Restaurant", "Breakfast", "Parking", "Rafting Desk", "Bonfire"],
    "highlights": ["Riverside Camping", "Yoga & Meditation", "White Water Rafting", "Bonfire Nights"],
    "checkIn": "12:00 PM",
    "checkOut": "10:00 AM",
    "rooms": [
      { "name": "River Camp Tent", "bedrooms": 1, "bathrooms": 1, "guests": 2, "beds": "Twin Bed", "price": 3800 },
      { "name": "Deluxe Cottage", "bedrooms": 2, "bathrooms": 2, "guests": 4, "beds": "2 Queen Beds", "price": 6900 }
    ],
    "reviewList": [
      { "name": "Aditya", "rating": 5, "comment": "The rafting package arranged by the hotel was fantastic." },
      { "name": "Bhavna", "rating": 4, "comment": "Loved the morning yoga sessions by the river." }
    ],
    "image": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200",
    "gallery": [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200",
      "https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200"
    ]
  },
  {
    "id": 19,
    "name": "Darjeeling Tea Estate Hotel",
    "city": "Darjeeling",
    "state": "West Bengal",
    "rating": 4.8,
    "reviews": 1987,
    "price": 5100,
    "description": "A charming hillside hotel set amid tea estates, offering panoramic Himalayan views, tea tasting sessions and cozy interiors.",
    "amenities": ["Free WiFi", "Mountain View", "Tea Garden Tours", "Restaurant", "Breakfast", "Parking", "Fireplace", "Room Service"],
    "highlights": ["Kanchenjunga Views", "Tea Estate Tours", "Toy Train Nearby", "Cozy Fireplace Lounge"],
    "checkIn": "1:00 PM",
    "checkOut": "11:00 AM",
    "rooms": [
      { "name": "Mountain View Room", "bedrooms": 1, "bathrooms": 1, "guests": 2, "beds": "Queen Bed", "price": 5100 },
      { "name": "Tea Estate Suite", "bedrooms": 2, "bathrooms": 2, "guests": 4, "beds": "King Bed", "price": 8700 }
    ],
    "reviewList": [
      { "name": "Sourav", "rating": 5, "comment": "Waking up to views of Kanchenjunga was unreal." },
      { "name": "Payel", "rating": 5, "comment": "The tea tasting session was a lovely touch." }
    ],
    "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
    "gallery": [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200",
      "https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200"
    ]
  },
  {
    "id": 20,
    "name": "Agra Taj Vista Hotel",
    "city": "Agra",
    "state": "Uttar Pradesh",
    "rating": 4.8,
    "reviews": 2654,
    "price": 5600,
    "description": "A premium hotel offering rooftop views of the Taj Mahal, elegant rooms, fine dining and dedicated heritage tour assistance.",
    "amenities": ["Free WiFi", "Taj Mahal View", "Rooftop Restaurant", "Spa", "Breakfast", "Parking", "Gym", "Room Service"],
    "highlights": ["Rooftop Taj Mahal View", "Heritage Tour Desk", "Fine Dining Restaurant", "Free Airport Transfer"],
    "checkIn": "2:00 PM",
    "checkOut": "12:00 PM",
    "rooms": [
      { "name": "Taj View Room", "bedrooms": 1, "bathrooms": 1, "guests": 2, "beds": "King Bed", "price": 5600 },
      { "name": "Premium Suite", "bedrooms": 2, "bathrooms": 2, "guests": 4, "beds": "2 King Beds", "price": 9600 },
      { "name": "Luxury Suite", "bedrooms": 3, "bathrooms": 3, "guests": 6, "beds": "3 King Beds", "price": 16800 }
    ],
    "reviewList": [
      { "name": "Mohit", "rating": 5, "comment": "The rooftop view of the Taj Mahal at sunrise was priceless." },
      { "name": "Alisha", "rating": 5, "comment": "Excellent service and unforgettable views." }
    ],
    "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200",
    "gallery": [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200",
      "https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200"
    ]
  },
  {
    "id": 21,
    "name": "Pune Business Suites",
    "city": "Pune",
    "state": "Maharashtra",
    "rating": 4.6,
    "reviews": 1780,
    "price": 4500,
    "description": "A modern business hotel in central Pune with spacious rooms, a rooftop lounge and easy access to the IT corridor.",
    "amenities": ["Free WiFi", "Restaurant", "Gym", "Breakfast", "Parking", "Conference Room", "Room Service", "AC"],
    "highlights": ["Near IT Park", "Rooftop Lounge", "Business Center", "Airport Nearby"],
    "checkIn": "1:00 PM",
    "checkOut": "11:00 AM",
    "rooms": [
      { "name": "Executive Room", "bedrooms": 1, "bathrooms": 1, "guests": 2, "beds": "Queen Bed", "price": 4500 },
      { "name": "Business Suite", "bedrooms": 2, "bathrooms": 2, "guests": 4, "beds": "King Bed", "price": 7900 }
    ],
    "reviewList": [
      { "name": "Nikhil", "rating": 5, "comment": "Great for a work trip, very convenient location." },
      { "name": "Swati", "rating": 4, "comment": "Comfortable rooms and quick service." }
    ],
    "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200",
    "gallery": [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200",
      "https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200"
    ]
  },
  {
    "id": 22,
    "name": "Kolkata Heritage Manor",
    "city": "Kolkata",
    "state": "West Bengal",
    "rating": 4.7,
    "reviews": 2043,
    "price": 4600,
    "description": "A colonial-era heritage hotel in central Kolkata, blending old-world charm with modern comfort and fine Bengali dining.",
    "amenities": ["Free WiFi", "Restaurant", "Breakfast", "Parking", "Gym", "Room Service", "AC", "Laundry"],
    "highlights": ["Near Victoria Memorial", "Colonial Architecture", "Bengali Fine Dining", "City Center Location"],
    "checkIn": "1:00 PM",
    "checkOut": "11:00 AM",
    "rooms": [
      { "name": "Heritage Room", "bedrooms": 1, "bathrooms": 1, "guests": 2, "beds": "Queen Bed", "price": 4600 },
      { "name": "Manor Suite", "bedrooms": 2, "bathrooms": 2, "guests": 4, "beds": "King Bed", "price": 8100 }
    ],
    "reviewList": [
      { "name": "Debjit", "rating": 5, "comment": "Loved the old colonial charm of this hotel." },
      { "name": "Riya", "rating": 4, "comment": "The Bengali food here was outstanding." }
    ],
    "image": "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
    "gallery": [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200",
      "https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200"
    ]
  },
  {
    "id": 23,
    "name": "Lucknow Nawabi Grand",
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "rating": 4.7,
    "reviews": 1698,
    "price": 4400,
    "description": "An elegant hotel inspired by Nawabi architecture, offering royal hospitality, Awadhi cuisine and spacious rooms.",
    "amenities": ["Free WiFi", "Restaurant", "Breakfast", "Parking", "Spa", "Room Service", "Gym", "AC"],
    "highlights": ["Near Bara Imambara", "Awadhi Cuisine", "Nawabi Architecture", "Cultural Tours"],
    "checkIn": "1:00 PM",
    "checkOut": "11:00 AM",
    "rooms": [
      { "name": "Nawabi Room", "bedrooms": 1, "bathrooms": 1, "guests": 2, "beds": "King Bed", "price": 4400 },
      { "name": "Royal Suite", "bedrooms": 2, "bathrooms": 2, "guests": 4, "beds": "2 King Beds", "price": 7700 }
    ],
    "reviewList": [
      { "name": "Zeeshan", "rating": 5, "comment": "The Awadhi food alone is worth the stay." },
      { "name": "Fatima", "rating": 5, "comment": "Beautiful architecture and warm hospitality." }
    ],
    "image": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200",
    "gallery": [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200",
      "https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200"
    ]
  },
  {
    "id": 24,
    "name": "Coorg Coffee Estate Resort",
    "city": "Coorg",
    "state": "Karnataka",
    "rating": 4.9,
    "reviews": 2210,
    "price": 5800,
    "description": "A tranquil resort nestled inside a working coffee estate, offering misty hill views, nature walks and organic dining.",
    "amenities": ["Free WiFi", "Coffee Estate Tours", "Restaurant", "Breakfast", "Parking", "Nature Trails", "Bonfire", "Spa"],
    "highlights": ["Coffee Plantation Views", "Guided Estate Walks", "Organic Farm-to-Table Food", "Misty Mornings"],
    "checkIn": "1:00 PM",
    "checkOut": "11:00 AM",
    "rooms": [
      { "name": "Estate View Room", "bedrooms": 1, "bathrooms": 1, "guests": 2, "beds": "Queen Bed", "price": 5800 },
      { "name": "Plantation Cottage", "bedrooms": 2, "bathrooms": 2, "guests": 4, "beds": "2 Queen Beds", "price": 9600 }
    ],
    "reviewList": [
      { "name": "Ganesh", "rating": 5, "comment": "Waking up to the smell of coffee and mist was magical." },
      { "name": "Anitha", "rating": 5, "comment": "Peaceful, green, and beautifully run." }
    ],
    "image": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
    "gallery": [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200",
      "https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200"
    ]
  },
  {
    "id": 25,
    "name": "Gangtok Mountain View Hotel",
    "city": "Gangtok",
    "state": "Sikkim",
    "rating": 4.8,
    "reviews": 1876,
    "price": 5000,
    "description": "A comfortable hillside hotel offering panoramic views of the Kanchenjunga range, warm rooms and local Sikkimese hospitality.",
    "amenities": ["Free WiFi", "Mountain View", "Restaurant", "Breakfast", "Parking", "Heater", "Room Service", "Gym"],
    "highlights": ["Kanchenjunga Views", "Near MG Marg", "Local Sikkimese Cuisine", "Monastery Tours"],
    "checkIn": "1:00 PM",
    "checkOut": "11:00 AM",
    "rooms": [
      { "name": "Mountain View Room", "bedrooms": 1, "bathrooms": 1, "guests": 2, "beds": "Queen Bed", "price": 5000 },
      { "name": "Deluxe Suite", "bedrooms": 2, "bathrooms": 2, "guests": 4, "beds": "King Bed", "price": 8400 }
    ],
    "reviewList": [
      { "name": "Tenzin", "rating": 5, "comment": "The mountain views here are unbeatable." },
      { "name": "Pema", "rating": 5, "comment": "Cozy rooms and very friendly staff." }
    ],
    "image": "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200",
    "gallery": [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200",
      "https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200"
    ]
  },
  {
    "id": 26,
    "name": "Leh Ladakh Highland Resort",
    "city": "Leh",
    "state": "Ladakh",
    "rating": 4.8,
    "reviews": 1543,
    "price": 6200,
    "description": "A rustic-luxury resort set against the dramatic Himalayan desert landscape, offering stargazing decks and warm mountain hospitality.",
    "amenities": ["Free WiFi", "Mountain View", "Restaurant", "Breakfast", "Parking", "Heater", "Stargazing Deck", "Oxygen Support"],
    "highlights": ["High Altitude Desert Views", "Stargazing Nights", "Monastery Excursions", "Bike Rental Desk"],
    "checkIn": "1:00 PM",
    "checkOut": "11:00 AM",
    "rooms": [
      { "name": "Highland Room", "bedrooms": 1, "bathrooms": 1, "guests": 2, "beds": "Queen Bed", "price": 6200 },
      { "name": "Deluxe Suite", "bedrooms": 2, "bathrooms": 2, "guests": 4, "beds": "King Bed", "price": 10200 }
    ],
    "reviewList": [
      { "name": "Stanzin", "rating": 5, "comment": "The night sky views from the deck were incredible." },
      { "name": "Namgyal", "rating": 4, "comment": "Great staff, helped us plan every excursion." }
    ],
    "image": "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200",
    "gallery": [
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200",
      "https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200"
    ]
  },
  {
    "id": 27,
    "name": "Alleppey Houseboat Lagoon Resort",
    "city": "Alleppey",
    "state": "Kerala",
    "rating": 4.8,
    "reviews": 2032,
    "price": 5500,
    "description": "A lagoon-side resort offering houseboat experiences, palm-lined canal views and traditional Kerala hospitality.",
    "amenities": ["Free WiFi", "Backwater View", "Restaurant", "Breakfast", "Parking", "Boat Rides", "Ayurvedic Spa", "Gym"],
    "highlights": ["Houseboat Cruises", "Canal Side Location", "Ayurvedic Treatments", "Traditional Kerala Cuisine"],
    "checkIn": "2:00 PM",
    "checkOut": "11:00 AM",
    "rooms": [
      { "name": "Lagoon View Room", "bedrooms": 1, "bathrooms": 1, "guests": 2, "beds": "King Bed", "price": 5500 },
      { "name": "Houseboat Suite", "bedrooms": 2, "bathrooms": 2, "guests": 4, "beds": "2 King Beds", "price": 9400 }
    ],
    "reviewList": [
      { "name": "Vinod", "rating": 5, "comment": "The houseboat cruise was the highlight of our trip." },
      { "name": "Anjali", "rating": 5, "comment": "So peaceful, loved the canal views from our room." }
    ],
    "image": "https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200",
    "gallery": [
      "https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200"
    ]
  },
  {
    "id": 28,
    "name": "Ranthambore Jungle Lodge",
    "city": "chennai",
    "state": "Tamil Nadu",
    "rating": 4.7,
    "reviews": 1432,
    "price": 6300,
    "description": "A wildlife lodge on the edge of Ranthambore National Park, offering safari packages, campfire dinners and rustic luxury tents.",
    "amenities": ["Free WiFi", "Safari Desk", "Restaurant", "Breakfast", "Parking", "Bonfire", "Nature Guide", "Gym"],
    "highlights": ["Tiger Safari Packages", "Campfire Dinners", "Naturalist Guided Walks", "Luxury Tented Rooms"],
    "checkIn": "1:00 PM",
    "checkOut": "11:00 AM",
    "rooms": [
      { "name": "Jungle View Tent", "bedrooms": 1, "bathrooms": 1, "guests": 2, "beds": "King Bed", "price": 6300 },
      { "name": "Luxury Lodge Suite", "bedrooms": 2, "bathrooms": 2, "guests": 4, "beds": "2 King Beds", "price": 10800 }
    ],
    "reviewList": [
      { "name": "Rajeev", "rating": 5, "comment": "Spotted a tiger on our first safari, unforgettable stay." },
      { "name": "Sunita", "rating": 4, "comment": "Great naturalist guides and cozy tents." }
    ],
    "image": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200",
    "gallery": [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200",
      "https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200"
    ]
  },
  {
    "id": 29,
    "name": "Kanyakumari Sunrise Beach Hotel",
    "city": "Kanyakumari",
    "state": "Tamil Nadu",
    "rating": 4.6,
    "reviews": 1298,
    "price": 3700,
    "description": "A coastal hotel at India's southern tip offering unobstructed sunrise and sunset views over three converging seas.",
    "amenities": ["Free WiFi", "Sea View", "Restaurant", "Breakfast", "Parking", "Room Service", "AC", "Gym"],
    "highlights": ["Tri-Sea Confluence Views", "Sunrise Viewing Point", "Near Vivekananda Rock", "Walking Distance to Beach"],
    "checkIn": "12:00 PM",
    "checkOut": "10:00 AM",
    "rooms": [
      { "name": "Sea View Room", "bedrooms": 1, "bathrooms": 1, "guests": 2, "beds": "Queen Bed", "price": 3700 },
      { "name": "Sunrise Suite", "bedrooms": 2, "bathrooms": 2, "guests": 4, "beds": "King Bed", "price": 6400 }
    ],
    "reviewList": [
      { "name": "Muthu", "rating": 5, "comment": "Watching the sunrise from our balcony was unreal." },
      { "name": "Kavya", "rating": 4, "comment": "Simple, clean, and right by the beach." }
    ],
    "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
    "gallery": [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200",
      "https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200"
    ]
  },
  {
    "id": 30,
    "name": "Mahabalipuram Shore Temple Resort",
    "city": "Hyderabad",
    "state": "Tamil Nadu",
    "rating": 4.7,
    "reviews": 1567,
    "price": 4800,
    "description": "A beachfront heritage resort near the ancient shore temples, offering stone-carved architecture, coastal dining and cultural tours.",
    "amenities": ["Free WiFi", "Sea View", "Restaurant", "Breakfast", "Parking", "Spa", "Room Service", "Gym"],
    "highlights": ["Near Shore Temple", "UNESCO Heritage Site Access", "Beachfront Dining", "Stone Carving Workshops"],
    "checkIn": "1:00 PM",
    "checkOut": "11:00 AM",
    "rooms": [
      { "name": "Heritage Room", "bedrooms": 1, "bathrooms": 1, "guests": 2, "beds": "King Bed", "price": 4800 },
      { "name": "Shore View Suite", "bedrooms": 2, "bathrooms": 2, "guests": 4, "beds": "2 King Beds", "price": 8300 }
    ],
    "reviewList": [
      { "name": "Dinesh", "rating": 5, "comment": "Being steps away from the Shore Temple was amazing." },
      { "name": "Aarthi", "rating": 4, "comment": "Loved the beachfront breakfast every morning." }
    ],
    "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200",
    "gallery": [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200",
      "https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200"
    ]
  }
];

export default hotels;