import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { adminService } from "../services/adminService";
import "./AdminDashboard.css";

function AdminBookings() {
  const [bookings, setBookings] = useState([]);
  const [filter, setFilter] = useState("All");

  const loadBookings = () => adminService.getRecentBookings().then(setBookings);

  useEffect(() => { loadBookings(); }, []);

  const handleStatusChange = async (id, status) => {
    await adminService.updateBookingStatus(id, status);
    loadBookings();
  };

  const filtered = filter === "All" ? bookings : bookings.filter((b) => b.status === filter);

  return (
    <div className="admin-layout">
      <Sidebar />
      <main className="admin-main">
        <header className="admin-main__header">
          <h1>Bookings</h1>
          <p>Review, approve, or cancel customer bookings.</p>
        </header>

        <section className="admin-panel">
          <div className="filter-tabs">
            {["All", "Pending", "Confirmed", "Cancelled"].map((f) => (
              <button
                key={f}
                className={`filter-tab ${filter === f ? "is-active" : ""}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="table-wrap" style={{ marginTop: 16 }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Booking ID</th>
                  <th>Customer</th>
                  <th>Hotel / Room</th>
                  <th>Dates</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((b) => (
                  <tr key={b.id}>
                    <td>{b.id}</td>
                    <td>{b.customer}</td>
                    <td>{b.hotel}<br /><span className="muted">{b.room}</span></td>
                    <td>{b.checkIn} → {b.checkOut}</td>
                    <td>₹{b.amount.toLocaleString()}</td>
                    <td><span className={`status-pill status--${b.status.toLowerCase()}`}>{b.status}</span></td>
                    <td>
                      {b.status !== "Confirmed" && (
                        <button className="btn-secondary btn-sm" onClick={() => handleStatusChange(b.id, "Confirmed")}>Approve</button>
                      )}{" "}
                      {b.status !== "Cancelled" && (
                        <button className="btn-danger btn-sm" onClick={() => handleStatusChange(b.id, "Cancelled")}>Cancel</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdminBookings;