import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "../services/authService";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const isAuth = authService.isAuthenticated();
  const role = authService.getCurrentRole();

  const handleLogout = () => {
    authService.logout();
    navigate("/");
  };

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo">
          Stay<span>Ease</span>
        </Link>

        <button
          className="navbar__toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        <nav className={`navbar__links ${open ? "is-open" : ""}`}>
          <Link to="/hotels" onClick={() => setOpen(false)}>Hotels</Link>
          <Link to="/my-bookings" onClick={() => setOpen(false)}>My Bookings</Link>

          {isAuth ? (
            <>
              <Link to={role === "ADMIN" ? "/admin" : "/profile"} onClick={() => setOpen(false)}>
                {role === "ADMIN" ? "Dashboard" : "Profile"}
              </Link>
              <button className="navbar__cta navbar__cta--ghost" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
              <Link to="/register" className="navbar__cta" onClick={() => setOpen(false)}>
                Register
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;