import { NavLink } from "react-router-dom";
import "./AdminSidebar.css";

function AdminSidebar() {
  return (
    <div className="admin-sidebar">

      <div className="admin-logo">
        <h2>🏨 StayEase</h2>
        <p>Admin Panel</p>
      </div>

      <nav>

        <NavLink to="/admin" end>
          🏠 Dashboard
        </NavLink>

        <NavLink to="/admin/hotels">
          🏨 Manage Hotels
        </NavLink>

        <NavLink to="/admin/rooms">
          🛏 Manage Rooms
        </NavLink>

        <NavLink to="/admin/bookings">
          📅 Bookings
        </NavLink>

        <NavLink to="/admin/customers">
          👥 Customers
        </NavLink>

        <NavLink to="/admin/reports">
          📊 Reports
        </NavLink>

        <NavLink to="/">
          🚪 Logout
        </NavLink>

      </nav>

    </div>
  );
}

export default AdminSidebar;