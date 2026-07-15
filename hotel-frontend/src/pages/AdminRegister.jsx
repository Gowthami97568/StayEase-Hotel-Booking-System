import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "../services/authService";
import "./Auth.css";

function AdminRegister() {

  const [form, setForm] = useState({
    adminName: "",
    hotelName: "",
    email: "",
    password: "",
    contactNumber: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setError("");
    setLoading(true);

    try {

      await authService.adminRegister(form);

      alert("Admin Registration Successful");

      navigate("/login/admin");

    } catch (err) {

      console.log(err);

      setError(
        err.response?.data?.message ||
        err.response?.data ||
        "Registration failed. Try again."
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="auth-page">

      <div className="auth-visual">

        <div className="auth-visual__text">

          <h2>List your hotel</h2>

          <p>Reach thousands of travelers looking for their next stay.</p>

        </div>

      </div>

      <div className="auth-form-panel">

        <div className="auth-card">

          <Link to="/" className="auth-card__brand">

            Stay<span>Ease</span>

          </Link>

          <h1>Admin Register</h1>

          <p className="auth-card__subtitle">

            Set up your hotel's account.

          </p>

          {error && <div className="form-error">{error}</div>}

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Admin Name</label>
              <input
                type="text"
                name="adminName"
                value={form.adminName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Hotel Name</label>
              <input
                type="text"
                name="hotelName"
                value={form.hotelName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                minLength={6}
              />
            </div>

            <div className="form-group">
              <label>Contact Number</label>
              <input
                type="text"
                name="contactNumber"
                value={form.contactNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>State</label>
              <input
                type="text"
                name="state"
                value={form.state}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Country</label>
              <input
                type="text"
                name="country"
                value={form.country}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Pincode</label>
              <input
                type="text"
                name="pincode"
                value={form.pincode}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn-primary"
              disabled={loading}
            >
              {loading ? "Creating account..." : "Register"}
            </button>

          </form>

          <p className="auth-card__footer">

            Already registered?{" "}

            <Link to="/login/admin">

              Login

            </Link>

          </p>

        </div>

      </div>

    </div>

  );

}

export default AdminRegister;