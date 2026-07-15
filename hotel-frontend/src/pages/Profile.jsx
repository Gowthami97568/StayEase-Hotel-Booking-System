import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { bookingService } from "../services/bookingService";
import "./Profile.css";

function Profile() {
  const [bookings, setBookings] = useState([]);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    name: localStorage.getItem("name") || "Sonu Kumar",
    email: "sonu17@gmail.com",
    phone: "9346709301",
  });
  const [passwordForm, setPasswordForm] = useState({ current: "", next: "", confirm: "" });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    bookingService.getMyBookings().then(setBookings);
  }, []);

  const stats = {
    total: bookings.length,
    upcoming: bookings.filter((b) => b.status === "Confirmed").length,
    completed: bookings.filter((b) => b.status === "Completed").length,
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setEditing(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (passwordForm.next !== passwordForm.confirm) return alert("New passwords do not match.");
    setPasswordForm({ current: "", next: "", confirm: "" });
    alert("Password updated (mock).");
  };

  return (
    <div>
      <Navbar />

      <section className="container profile-page">
        <div className="profile-header">
          <div className="profile-header__avatar">{form.name.charAt(0).toUpperCase()}</div>
          <div>
            <h1>{form.name}</h1>
            <p>{form.email}</p>
          </div>
        </div>

        <div className="profile-stats">
          <div className="profile-stat"><strong>{stats.total}</strong><span>Total Bookings</span></div>
          <div className="profile-stat"><strong>{stats.upcoming}</strong><span>Upcoming Stays</span></div>
          <div className="profile-stat"><strong>{stats.completed}</strong><span>Completed Stays</span></div>
        </div>

        <div className="profile-grid">
          <div className="profile-card">
            <div className="profile-card__head">
              <h2>Account Details</h2>
              {!editing && <button className="link-btn" onClick={() => setEditing(true)}>Edit</button>}
            </div>

            {saved && <div className="profile-success">Profile updated successfully.</div>}

            <form onSubmit={handleSaveProfile}>
              <div className="form-group">
                <label>Full Name</label>
                <input value={form.name} disabled={!editing} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" value={form.email} disabled={!editing} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input value={form.phone} disabled={!editing} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              </div>
              {editing && (
                <div className="profile-actions">
                  <button type="submit" className="btn-primary">Save Changes</button>
                  <button type="button" className="btn-secondary" onClick={() => setEditing(false)}>Cancel</button>
                </div>
              )}
            </form>
          </div>

          <div className="profile-card">
            <h2>Change Password</h2>
            <form onSubmit={handleChangePassword}>
              <div className="form-group">
                <label>Current Password</label>
                <input type="password" value={passwordForm.current} onChange={(e) => setPasswordForm({ ...passwordForm, current: e.target.value })} required />
              </div>
              <div className="form-group">
                <label>New Password</label>
                <input type="password" value={passwordForm.next} onChange={(e) => setPasswordForm({ ...passwordForm, next: e.target.value })} required minLength={6} />
              </div>
              <div className="form-group">
                <label>Confirm New Password</label>
                <input type="password" value={passwordForm.confirm} onChange={(e) => setPasswordForm({ ...passwordForm, confirm: e.target.value })} required />
              </div>
              <button type="submit" className="btn-primary">Update Password</button>
            </form>
          </div>
        </div>

        <div className="profile-card">
          <div className="profile-card__head">
            <h2>Recent Bookings</h2>
            <a href="/my-bookings" className="link-btn">View all →</a>
          </div>
          <div className="mini-bookings">
            {bookings.slice(0, 3).map((b) => (
              <div className="mini-booking" key={b.id}>
                <img src={b.image} alt={b.hotel} />
                <div>
                  <p className="mini-booking__hotel">{b.hotel}</p>
                  <p className="muted">{b.location} · {b.checkIn} → {b.checkOut}</p>
                </div>
                <span className={`status-pill status--${b.status.toLowerCase()}`}>{b.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Profile;