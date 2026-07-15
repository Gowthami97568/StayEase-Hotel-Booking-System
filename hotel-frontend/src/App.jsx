import { Routes, Route } from "react-router-dom";

// Authentication
import Landing from "./pages/Landing";
import LoginChoice from "./pages/LoginChoice";
import CustomerLogin from "./pages/CustomerLogin";
import AdminLogin from "./pages/AdminLogin";
import RegisterChoice from "./pages/RegisterChoice";
import CustomerRegister from "./pages/CustomerRegister";
import AdminRegister from "./pages/AdminRegister";

// Customer Pages
import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import HotelDetails from "./pages/HotelDetails";
import Booking from "./pages/Booking";
import Payments from "./pages/Payments";
import MyBookings from "./pages/MyBookings";
import Profile from "./pages/Profile";
import ManageRooms from "./pages/ManageRooms";
import ManageBookings from "./pages/ManageBookings";
import Customers from "./pages/Customers";
import Reports from "./pages/Reports";

// Admin Pages
import AdminDashboard from "./pages/AdminDashboard";
import ManageHotels from "./pages/ManageHotels";

// Security
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Routes>

      {/* ================= Landing ================= */}

      <Route path="/" element={<Landing />} />

      {/* ================= Authentication ================= */}

      <Route path="/login" element={<LoginChoice />} />
      <Route path="/login/customer" element={<CustomerLogin />} />
      <Route path="/login/admin" element={<AdminLogin />} />

      <Route path="/register" element={<RegisterChoice />} />
      <Route path="/register/customer" element={<CustomerRegister />} />
      <Route path="/register/admin" element={<AdminRegister />} />

      {/* ================= Customer ================= */}

      <Route path="/home" element={<Home />} />

      <Route path="/hotels" element={<Hotels />} />

      <Route path="/hotel/:id" element={<HotelDetails />} />

      <Route path="/booking" element={<Booking />} />

      <Route path="/payments" element={<Payments />} />

      <Route path="/my-bookings" element={<MyBookings />} />

      <Route
        path="/profile"
        element={
          <PrivateRoute role="CUSTOMER">
            <Profile />
          </PrivateRoute>
        }
      />

      {/* ================= Admin ================= */}

      <Route
        path="/admin"
        element={
          <PrivateRoute role="ADMIN">
            <AdminDashboard />
          </PrivateRoute>
        }
      />

      <Route
        path="/admin/hotels"
        element={
          <PrivateRoute role="ADMIN">
            <ManageHotels />
          </PrivateRoute>
        }
      />

      <Route
  path="/admin/reports"
  element={
    <PrivateRoute role="ADMIN">
      <Reports />
    </PrivateRoute>
  }
/>

       <Route
  path="/admin/customers"
  element={
    <PrivateRoute role="ADMIN">
      <Customers />
    </PrivateRoute>
  }
/>

      <Route
      path="/admin/rooms"
      element={
      <PrivateRoute role="ADMIN">
      <ManageRooms />
      </PrivateRoute>
      }/>

  <Route
  path="/admin/bookings"
  element={
    <PrivateRoute role="ADMIN">
      <ManageBookings />
    </PrivateRoute>
  }
/>


      {/* ================= 404 ================= */}

      <Route
        path="*"
        element={
          <h2
            style={{
              textAlign: "center",
              marginTop: "100px",
              color: "#003580",
            }}
          >
            404 - Page Not Found
          </h2>
        }
      />

    </Routes>
  );
}

export default App;