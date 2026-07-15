import { NavLink, useNavigate } from "react-router-dom";
import { authService } from "../services/authService";
import "./Sidebar.css";

const NAV_ITEMS = [
  { to: "/admin", label: "Dashboard", icon: "📊", end: true },
  { to: "/admin/hotels", label: "Hotels", icon: "🏨" },
  { to: "/admin/rooms", label: "Rooms", icon: "🛏️" },
  { to: "/admin/customers", label: "Customers", icon: "👥" },
  { to: "/admin/bookings", label: "Bookings", icon: "📅" },
  { to: "/admin/reports", label: "Reports", icon: "📈" },
];

function Sidebar() {
  const navigate = useNavigate();
  const name = localStorage.getItem("name") || "Admin";

  const handleLogout = () => {
    authService.logout();
    navigate("/");
  };

  return (
    <aside className="sidebar">
      <div className="sidebar__brand">Stay<span>Ease</span></div>

      <div className="sidebar__profile">
        <div className="sidebar__avatar">{name.charAt(0).toUpperCase()}</div>
        <div>
          <p className="sidebar__name">{name}</p>
          <p className="sidebar__role">Hotel Admin</p>
        </div>
      </div>

      <nav className="sidebar__nav">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) => `sidebar__link ${isActive ? "is-active" : ""}`}
          >
            <span>{item.icon}</span> {item.label}
          </NavLink>
        ))}
      </nav>

      <button className="sidebar__logout" onClick={handleLogout}>
        🚪 Logout
      </button>
    </aside>
  );
}

export default Sidebar;