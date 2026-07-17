# 🏨 StayEase - Hotel Booking System

StayEase is a full-stack Hotel Booking System developed using **React.js**, **Spring Boot**, and **MySQL**. The application provides a seamless hotel booking experience for customers while offering an advanced dashboard for administrators to manage hotels, rooms, bookings, customers, and reports.

---

# 📌 Project Overview

StayEase is designed to simplify the hotel reservation process by providing an intuitive interface for customers and a powerful management portal for administrators.

The system allows customers to browse hotels, view room details, make bookings, complete payments, and manage their reservations. Administrators can efficiently manage hotel information, rooms, bookings, customers, and generate reports.

---

# 🚀 Technologies Used

## Frontend
- React.js
- React Router DOM
- CSS3
- Axios
- Vite

## Backend
- Spring Boot
- Spring MVC
- Spring Data JPA
- Spring Security (JWT Authentication)
- Maven

## Database
- MySQL

## Tools
- VS Code
- IntelliJ IDEA / Spring Tool Suite
- Git
- GitHub
- Postman

---

# ✨ Features

## 👤 Customer Module

### Authentication
- Customer Registration
- Customer Login
- Secure Authentication
- Logout

### Home Page
- Modern Landing Page
- Responsive Hero Section
- Hotel Search
- Featured Hotels

### Hotel Management
- Browse Hotels
- Hotel Details Page
- Hotel Image Gallery
- Property Information
- Amenities
- Property Highlights
- Room Information
- House Rules
- Reviews
- Nearby Attractions

### Booking Module
- Reserve Rooms
- Booking Summary
- Check-in / Check-out Selection
- Guest Selection
- Price Calculation

### Payment Module
- Multiple Payment Options
- Booking Confirmation

### My Bookings
- View Booking History
- Booking Details
- Payment Status

### Profile
- View Customer Profile
- Update Personal Details

---

# 🛠 Admin Module

### Authentication
- Admin Registration
- Admin Login
- Secure Dashboard Access

### Dashboard
- Total Hotels
- Total Rooms
- Total Bookings
- Total Customers
- Revenue Summary
- Recent Bookings

### Hotel Management
- Add Hotel
- Edit Hotel
- Delete Hotel
- Search Hotels

### Room Management
- Add Rooms
- Edit Rooms
- Delete Rooms
- Room Availability

### Booking Management
- View All Bookings
- Booking Status
- Cancel Bookings
- Search Bookings

### Customer Management
- View Customers
- Search Customers
- Customer Details

### Reports
- Revenue Reports
- Booking Reports
- Customer Reports
- Hotel Reports

---

# 📂 Project Structure

```
StayEase-Hotel-Booking-System
│
├── HotelBookingSystem
│   ├── backend
│   ├── database
│
├── hotel-frontend
│   ├── public
│   ├── src
│   │
│   ├── assets
│   ├── components
│   ├── data
│   ├── pages
│   ├── services
│   ├── App.jsx
│   └── main.jsx
│
└── README.md
```

---

# 📱 Application Modules

## Customer Pages

- Landing Page
- Home
- Hotels
- Hotel Details
- Booking
- Payments
- My Bookings
- Profile
- Customer Login
- Customer Registration

---

## Admin Pages

- Admin Login
- Admin Registration
- Dashboard
- Manage Hotels
- Manage Rooms
- Manage Bookings
- Customers
- Reports

---

# 🔒 Authentication

The application uses JWT-based authentication.

### Customer
- Register
- Login
- Logout

### Admin
- Register
- Login
- Logout

Private routes ensure secure access based on user roles.
---

# 🗄 Database

The backend uses MySQL to manage:

- Customers
- Admins
- Hotels
- Rooms
- Bookings
- Payments

---

# 📦 Installation

## Clone Repository

```bash
git clone https://github.com/Gowthami97568/StayEase-Hotel-Booking-System.git
```

---

## Frontend

```bash
cd hotel-frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## Backend

```bash
cd HotelBookingSystem/backend
mvn spring-boot:run
```

Backend runs at:

```
http://localhost:8080
```

---

# 📡 API

Example APIs:

```
POST /auth/login
POST /customers
POST /admin/register

GET /hotels
GET /hotels/{id}

POST /bookings

GET /customers

GET /admin/dashboard
```

---

# 🔮 Future Enhancements

- Email Notifications
- Online Payment Gateway Integration
- Google Maps Integration
- Hotel Reviews
- Wishlist
- Coupons & Discounts
- Hotel Availability Calendar
- Booking Cancellation & Refund
- Admin Analytics Dashboard
- Mobile Application

---

GitHub:
https://github.com/Gowthami97568

---

# 📄 License

This project is developed for educational purposes as part of a Full Stack Web Development project.

---

# ⭐ Acknowledgements

- React.js
- Spring Boot
- MySQL
- Vite
- GitHub
- Unsplash (Hotel Images)

---
