const MY_BOOKINGS = [
  { id: "BK1042", hotel: "The Grand Horizon", room: "Deluxe Room", location: "Goa, India",
    checkIn: "2026-07-18", checkOut: "2026-07-21", amount: 16500, status: "Confirmed",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80" },
  { id: "BK0991", hotel: "Royal Palm Resort", room: "Suite", location: "Jaipur, India",
    checkIn: "2026-04-02", checkOut: "2026-04-05", amount: 29400, status: "Completed",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&q=80" },
  { id: "BK0876", hotel: "Urban Nest Suites", room: "Executive Room", location: "Bengaluru, India",
    checkIn: "2026-02-10", checkOut: "2026-02-11", amount: 4200, status: "Cancelled",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&q=80" },
];

export const bookingService = {
  async getMyBookings() {
    return MY_BOOKINGS;
  },
  async cancelBooking(id) {
    const b = MY_BOOKINGS.find((x) => x.id === id);
    if (b) b.status = "Cancelled";
    return b;
  },
};