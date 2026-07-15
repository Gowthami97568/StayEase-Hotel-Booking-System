// 🔧 Replace bodies with real axios calls once backend is connected.

const STATS = {
  totalHotels: 4,
  totalRooms: 9,
  totalCustomers: 128,
  totalBookings: 342,
  revenue: 1842500,
};

const RECENT_BOOKINGS = [
  { id: "BK1042", customer: "Sonu Kumar", hotel: "The Grand Horizon", room: "Deluxe Room", checkIn: "2026-07-18", checkOut: "2026-07-21", amount: 16500, status: "Confirmed" },
  { id: "BK1041", customer: "Priya Sharma", hotel: "Royal Palm Resort", room: "Suite", checkIn: "2026-07-20", checkOut: "2026-07-22", amount: 19600, status: "Pending" },
  { id: "BK1040", customer: "Arjun Mehta", hotel: "Urban Nest Suites", room: "Executive Room", checkIn: "2026-07-15", checkOut: "2026-07-17", amount: 8400, status: "Confirmed" },
  { id: "BK1039", customer: "Kavya Reddy", hotel: "Lakeside Retreat", room: "Family Room", checkIn: "2026-07-25", checkOut: "2026-07-28", amount: 15600, status: "Cancelled" },
  { id: "BK1038", customer: "Rohit Verma", hotel: "The Grand Horizon", room: "Suite", checkIn: "2026-07-10", checkOut: "2026-07-13", amount: 27600, status: "Confirmed" },
];

const CUSTOMERS = [
  { id: 1, name: "Sonu Kumar", email: "sonu17@gmail.com", phone: "9346709301", bookings: 3, joined: "2026-02-14" },
  { id: 2, name: "Priya Sharma", email: "priya.s@gmail.com", phone: "9876543210", bookings: 5, joined: "2025-11-02" },
  { id: 3, name: "Arjun Mehta", email: "arjun.m@gmail.com", phone: "9123456780", bookings: 1, joined: "2026-05-30" },
  { id: 4, name: "Kavya Reddy", email: "kavya.r@gmail.com", phone: "9988776655", bookings: 2, joined: "2026-01-19" },
];

const REVENUE_TREND = [
  { month: "Feb", value: 210000 },
  { month: "Mar", value: 265000 },
  { month: "Apr", value: 298000 },
  { month: "May", value: 340000 },
  { month: "Jun", value: 385000 },
  { month: "Jul", value: 344500 },
];

export const adminService = {
  async getDashboardStats() {
    return STATS;
  },
  async getRecentBookings() {
    return RECENT_BOOKINGS;
  },
  async getAllCustomers() {
    return CUSTOMERS;
  },
  async getRevenueTrend() {
    return REVENUE_TREND;
  },
  async updateBookingStatus(id, status) {
    const b = RECENT_BOOKINGS.find((x) => x.id === id);
    if (b) b.status = status;
    return b;
  },
  async deleteCustomer(id) {
    const idx = CUSTOMERS.findIndex((c) => c.id === id);
    if (idx > -1) CUSTOMERS.splice(idx, 1);
    return true;
  },
};