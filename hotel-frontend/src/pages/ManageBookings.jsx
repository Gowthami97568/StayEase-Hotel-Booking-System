import { useState, useMemo } from "react";

const emptyForm = {
  customer: "",
  hotel: "",
  room: "Deluxe",
  checkIn: "",
  checkOut: "",
  amount: "",
  status: "Pending",
};

const ROOM_TYPES = ["Deluxe", "Suite", "Luxury", "Standard", "Presidential"];
const STATUSES = ["Confirmed", "Pending", "Cancelled"];

const INITIAL_BOOKINGS = [
  { id: 101, customer: "Rahul Sharma", hotel: "Grand Horizon", room: "Deluxe", checkIn: "2025-07-20", checkOut: "2025-07-22", amount: 9000, status: "Confirmed" },
  { id: 102, customer: "Priya Singh", hotel: "Royal Palace", room: "Suite", checkIn: "2025-07-25", checkOut: "2025-07-28", amount: 18000, status: "Pending" },
  { id: 103, customer: "Amit Kumar", hotel: "Sea View Resort", room: "Luxury", checkIn: "2025-08-01", checkOut: "2025-08-04", amount: 21000, status: "Cancelled" },
  { id: 104, customer: "Sneha Reddy", hotel: "Grand Horizon", room: "Standard", checkIn: "2025-08-03", checkOut: "2025-08-05", amount: 5600, status: "Confirmed" },
  { id: 105, customer: "Vikram Patel", hotel: "Coastal Inn", room: "Deluxe", checkIn: "2025-08-05", checkOut: "2025-08-07", amount: 8400, status: "Pending" },
  { id: 106, customer: "Ananya Iyer", hotel: "Royal Palace", room: "Presidential", checkIn: "2025-08-10", checkOut: "2025-08-15", amount: 75000, status: "Confirmed" },
  { id: 107, customer: "Karthik Menon", hotel: "Sea View Resort", room: "Suite", checkIn: "2025-08-12", checkOut: "2025-08-14", amount: 15800, status: "Confirmed" },
  { id: 108, customer: "Divya Nair", hotel: "Coastal Inn", room: "Standard", checkIn: "2025-08-14", checkOut: "2025-08-16", amount: 5200, status: "Pending" },
  { id: 109, customer: "Rohan Gupta", hotel: "Grand Horizon", room: "Luxury", checkIn: "2025-08-18", checkOut: "2025-08-20", amount: 13800, status: "Cancelled" },
  { id: 110, customer: "Meera Joshi", hotel: "Krishna Residency", room: "Deluxe", checkIn: "2025-08-20", checkOut: "2025-08-23", amount: 12900, status: "Confirmed" },
  { id: 111, customer: "Arjun Nayar", hotel: "Royal Palace", room: "Suite", checkIn: "2025-08-22", checkOut: "2025-08-24", amount: 16400, status: "Pending" },
  { id: 112, customer: "Kavya Rao", hotel: "Krishna Residency", room: "Standard", checkIn: "2025-08-25", checkOut: "2025-08-27", amount: 5400, status: "Confirmed" },
];

function ManageBookings() {
  const [bookings, setBookings] = useState(INITIAL_BOOKINGS);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [hotelFilter, setHotelFilter] = useState("All");
  const [sortBy, setSortBy] = useState("id");
  const [sortDir, setSortDir] = useState("asc");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  const [confirmAction, setConfirmAction] = useState(null); // { id, type: 'confirm' | 'cancel' }
  const [toast, setToast] = useState(null);

  const showToast = (message) => {
    setToast(message);
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(() => setToast(null), 2500);
  };

  const hotelOptions = useMemo(
    () => ["All", ...new Set(bookings.map((b) => b.hotel))],
    [bookings]
  );

  const stats = useMemo(() => {
    const total = bookings.length;
    const confirmed = bookings.filter((b) => b.status === "Confirmed").length;
    const pending = bookings.filter((b) => b.status === "Pending").length;
    const cancelled = bookings.filter((b) => b.status === "Cancelled").length;
    const revenue = bookings
      .filter((b) => b.status !== "Cancelled")
      .reduce((sum, b) => sum + b.amount, 0);
    return { total, confirmed, pending, cancelled, revenue };
  }, [bookings]);

  const filteredBookings = useMemo(() => {
    const q = search.trim().toLowerCase();
    const result = bookings.filter((b) => {
      const matchesSearch =
        !q ||
        String(b.id).includes(q) ||
        b.customer.toLowerCase().includes(q) ||
        b.hotel.toLowerCase().includes(q) ||
        b.room.toLowerCase().includes(q);
      const matchesStatus = statusFilter === "All" || b.status === statusFilter;
      const matchesHotel = hotelFilter === "All" || b.hotel === hotelFilter;
      return matchesSearch && matchesStatus && matchesHotel;
    });

    const dir = sortDir === "asc" ? 1 : -1;
    result.sort((a, b) => {
      if (sortBy === "amount" || sortBy === "id") {
        return (a[sortBy] - b[sortBy]) * dir;
      }
      if (sortBy === "checkIn" || sortBy === "checkOut") {
        return (new Date(a[sortBy]) - new Date(b[sortBy])) * dir;
      }
      return String(a[sortBy]).localeCompare(String(b[sortBy]), undefined, {
        numeric: true,
      }) * dir;
    });

    return result;
  }, [bookings, search, statusFilter, hotelFilter, sortBy, sortDir]);

  const toggleSort = (field) => {
    if (sortBy === field) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(field);
      setSortDir("asc");
    }
  };

  const openAddModal = () => {
    setEditingId(null);
    setForm(emptyForm);
    setErrors({});
    setIsModalOpen(true);
  };

  const openEditModal = (booking) => {
    setEditingId(booking.id);
    setForm({
      customer: booking.customer,
      hotel: booking.hotel,
      room: booking.room,
      checkIn: booking.checkIn,
      checkOut: booking.checkOut,
      amount: String(booking.amount),
      status: booking.status,
    });
    setErrors({});
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.customer.trim()) newErrors.customer = "Customer name is required";
    if (!form.hotel.trim()) newErrors.hotel = "Hotel name is required";
    if (!form.checkIn) newErrors.checkIn = "Check-in date is required";
    if (!form.checkOut) newErrors.checkOut = "Check-out date is required";
    if (form.checkIn && form.checkOut && form.checkOut <= form.checkIn)
      newErrors.checkOut = "Check-out must be after check-in";
    if (!form.amount || Number(form.amount) <= 0)
      newErrors.amount = "Enter a valid amount";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const bookingData = {
      customer: form.customer.trim(),
      hotel: form.hotel.trim(),
      room: form.room,
      checkIn: form.checkIn,
      checkOut: form.checkOut,
      amount: Number(form.amount),
      status: form.status,
    };

    if (editingId === null) {
      const newId =
        bookings.length > 0 ? Math.max(...bookings.map((b) => b.id)) + 1 : 101;
      setBookings((prev) => [...prev, { id: newId, ...bookingData }]);
      showToast(`Booking #${newId} created`);
    } else {
      setBookings((prev) =>
        prev.map((b) => (b.id === editingId ? { ...b, ...bookingData } : b))
      );
      showToast(`Booking #${editingId} updated`);
    }

    setIsModalOpen(false);
  };

  const requestStatusChange = (id, type) => setConfirmAction({ id, type });

  const applyStatusChange = () => {
    if (!confirmAction) return;
    const { id, type } = confirmAction;
    const newStatus = type === "confirm" ? "Confirmed" : "Cancelled";
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b))
    );
    showToast(`Booking #${id} marked ${newStatus.toLowerCase()}`);
    setConfirmAction(null);
  };

  const cancelActionModal = () => setConfirmAction(null);

  const clearFilters = () => {
    setSearch("");
    setStatusFilter("All");
    setHotelFilter("All");
  };

  const sortArrow = (field) => {
    if (sortBy !== field) return "";
    return sortDir === "asc" ? " \u25B2" : " \u25BC";
  };

  const statusClass = (status) => {
    if (status === "Confirmed") return "confirmed";
    if (status === "Pending") return "pending";
    return "cancelled";
  };

  return (
    <div className="manage-bookings">
      <style>{`
        .manage-bookings {
          padding: 30px;
          background: #f5f7fb;
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          box-sizing: border-box;
        }
        .manage-bookings * { box-sizing: border-box; }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          flex-wrap: wrap;
          gap: 12px;
        }
        .header h1 { color: #003580; margin: 0; }
        .header p.subtitle { margin: 4px 0 0; color: #64748b; font-size: 14px; }

        .add-btn {
          background: #0d6efd;
          color: white;
          border: none;
          padding: 12px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: background 0.2s ease, transform 0.15s ease;
        }
        .add-btn:hover { background: #0047b3; transform: translateY(-2px); }

        /* ---------- Stats ---------- */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 14px;
          margin-bottom: 22px;
        }
        .stat-card {
          background: white;
          border-radius: 10px;
          padding: 16px 18px;
          box-shadow: 0 3px 10px rgba(0,0,0,0.06);
          border-left: 4px solid #0d6efd;
        }
        .stat-card.confirmed-c { border-left-color: #198754; }
        .stat-card.pending-c { border-left-color: #ffc107; }
        .stat-card.cancelled-c { border-left-color: #dc3545; }
        .stat-card .stat-label {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #64748b;
          margin-bottom: 6px;
        }
        .stat-card .stat-value { font-size: 24px; font-weight: 700; color: #1e293b; }

        /* ---------- Toolbar ---------- */
        .toolbar {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 20px;
          align-items: center;
        }

        .search-box {
          flex: 1;
          min-width: 220px;
          max-width: 380px;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 8px;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .search-box:focus {
          border-color: #0d6efd;
          box-shadow: 0 0 0 3px rgba(13, 110, 253, 0.15);
        }

        .filter-select {
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 8px;
          background: white;
          outline: none;
          cursor: pointer;
          transition: border-color 0.2s ease;
        }
        .filter-select:focus { border-color: #0d6efd; }

        .clear-btn {
          background: none;
          border: 1px solid #ddd;
          color: #475569;
          padding: 11px 16px;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .clear-btn:hover { background: #eef2f7; }

        /* ---------- Table ---------- */
        .table-wrapper {
          background: white;
          border-radius: 10px;
          overflow-x: auto;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        table { width: 100%; border-collapse: collapse; background: white; min-width: 920px; }

        th {
          background: #003580;
          color: white;
          padding: 15px;
          text-align: center;
          white-space: nowrap;
        }
        th.sortable { cursor: pointer; user-select: none; }
        th.sortable:hover { background: #00265e; }

        td { padding: 15px; border-bottom: 1px solid #eee; text-align: center; white-space: nowrap; }

        tbody tr { transition: background 0.2s ease; }
        tbody tr:hover { background: #f0f6ff; }
        tbody tr:last-child td { border-bottom: none; }

        .empty-row { padding: 30px; color: #888; font-style: italic; }

        .confirmed, .pending, .cancelled {
          display: inline-block;
          padding: 5px 14px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 700;
        }
        .confirmed { background: #d4edda; color: #198754; }
        .pending { background: #fff3cd; color: #b8860b; }
        .cancelled { background: #f8d7da; color: #dc3545; }

        .actions-cell { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; }

        .confirm-btn {
          background: #198754;
          color: white;
          border: none;
          padding: 8px 14px;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.15s ease;
        }
        .confirm-btn:hover:not(:disabled) { background: #146c43; transform: translateY(-2px); }
        .confirm-btn:disabled { opacity: 0.45; cursor: not-allowed; }

        .cancel-action-btn {
          background: #e9ecef;
          color: #333;
          border: none;
          padding: 8px 14px;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.15s ease;
        }
        .cancel-action-btn:hover:not(:disabled) { background: #dee2e6; transform: translateY(-2px); }
        .cancel-action-btn:disabled { opacity: 0.45; cursor: not-allowed; }

        .edit-btn {
          background: #ffc107;
          border: none;
          padding: 8px 14px;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.15s ease;
        }
        .edit-btn:hover { background: #e0a800; transform: translateY(-2px); }

        .result-count { color: #64748b; font-size: 13px; margin: -8px 0 14px; }

        /* ---------- Modal ---------- */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.15s ease;
          padding: 16px;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        .modal {
          background: white;
          border-radius: 12px;
          padding: 30px;
          width: 480px;
          max-width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
          animation: slideUp 0.2s ease;
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .modal.confirm-modal { width: 380px; text-align: center; }
        .modal.confirm-modal p { color: #475569; margin: 10px 0 22px; }
        .modal.confirm-modal .modal-actions { justify-content: center; }

        .modal h2 { color: #003580; margin-bottom: 20px; }

        .form-group { margin-bottom: 16px; display: flex; flex-direction: column; flex: 1; }
        .form-row { display: flex; gap: 16px; }

        .form-group label { font-size: 14px; font-weight: 600; color: #444; margin-bottom: 6px; }

        .form-group input, .form-group select {
          padding: 10px 12px;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 15px;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .form-group input:focus, .form-group select:focus {
          border-color: #0d6efd;
          box-shadow: 0 0 0 3px rgba(13, 110, 253, 0.15);
        }

        .field-error { color: crimson; font-size: 13px; margin-top: 4px; }

        .modal-actions { display: flex; justify-content: flex-end; gap: 12px; margin-top: 20px; }

        .cancel-btn {
          background: #e9ecef;
          color: #333;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .cancel-btn:hover { background: #dee2e6; }

        .save-btn {
          background: #0d6efd;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.15s ease;
        }
        .save-btn:hover { background: #0047b3; transform: translateY(-2px); }

        .primary-confirm-btn {
          background: #198754;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.15s ease;
        }
        .primary-confirm-btn:hover { background: #146c43; transform: translateY(-2px); }

        .primary-cancel-btn {
          background: #dc3545;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.15s ease;
        }
        .primary-cancel-btn:hover { background: #bb2d3b; transform: translateY(-2px); }

        /* ---------- Toast ---------- */
        .toast {
          position: fixed;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          background: #1e293b;
          color: white;
          padding: 12px 22px;
          border-radius: 8px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.25);
          z-index: 1200;
          font-size: 14px;
          animation: fadeIn 0.2s ease;
        }

        @media (max-width: 640px) {
          .manage-bookings { padding: 16px; }
          .search-box { max-width: none; }
        }
      `}</style>

      <div className="header">
        <div>
          <h1>Manage Bookings</h1>
          <p className="subtitle">
            {stats.total} bookings · ₹{stats.revenue.toLocaleString("en-IN")} in active revenue
          </p>
        </div>
        <button className="add-btn" onClick={openAddModal}>
          + New Booking
        </button>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Total Bookings</div>
          <div className="stat-value">{stats.total}</div>
        </div>
        <div className="stat-card confirmed-c">
          <div className="stat-label">Confirmed</div>
          <div className="stat-value">{stats.confirmed}</div>
        </div>
        <div className="stat-card pending-c">
          <div className="stat-label">Pending</div>
          <div className="stat-value">{stats.pending}</div>
        </div>
        <div className="stat-card cancelled-c">
          <div className="stat-label">Cancelled</div>
          <div className="stat-value">{stats.cancelled}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Active Revenue</div>
          <div className="stat-value">₹{stats.revenue.toLocaleString("en-IN")}</div>
        </div>
      </div>

      <div className="toolbar">
        <input
          type="text"
          placeholder="Search Booking..."
          className="search-box"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="filter-select"
          value={hotelFilter}
          onChange={(e) => setHotelFilter(e.target.value)}
        >
          {hotelOptions.map((h) => (
            <option key={h} value={h}>
              {h === "All" ? "All Hotels" : h}
            </option>
          ))}
        </select>

        <select
          className="filter-select"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All Statuses</option>
          {STATUSES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <button className="clear-btn" onClick={clearFilters}>
          Clear filters
        </button>
      </div>

      <p className="result-count">
        Showing {filteredBookings.length} of {bookings.length} bookings
      </p>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th className="sortable" onClick={() => toggleSort("id")}>
                Booking ID{sortArrow("id")}
              </th>
              <th className="sortable" onClick={() => toggleSort("customer")}>
                Customer{sortArrow("customer")}
              </th>
              <th className="sortable" onClick={() => toggleSort("hotel")}>
                Hotel{sortArrow("hotel")}
              </th>
              <th className="sortable" onClick={() => toggleSort("room")}>
                Room{sortArrow("room")}
              </th>
              <th className="sortable" onClick={() => toggleSort("checkIn")}>
                Check-In{sortArrow("checkIn")}
              </th>
              <th className="sortable" onClick={() => toggleSort("checkOut")}>
                Check-Out{sortArrow("checkOut")}
              </th>
              <th className="sortable" onClick={() => toggleSort("amount")}>
                Amount{sortArrow("amount")}
              </th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredBookings.map((b) => (
              <tr key={b.id}>
                <td>#{b.id}</td>
                <td>{b.customer}</td>
                <td>{b.hotel}</td>
                <td>{b.room}</td>
                <td>{b.checkIn}</td>
                <td>{b.checkOut}</td>
                <td>₹{b.amount.toLocaleString("en-IN")}</td>
                <td>
                  <span className={statusClass(b.status)}>{b.status}</span>
                </td>
                <td>
                  <div className="actions-cell">
                    <button
                      className="confirm-btn"
                      disabled={b.status === "Confirmed"}
                      onClick={() => requestStatusChange(b.id, "confirm")}
                    >
                      Confirm
                    </button>
                    <button
                      className="cancel-action-btn"
                      disabled={b.status === "Cancelled"}
                      onClick={() => requestStatusChange(b.id, "cancel")}
                    >
                      Cancel
                    </button>
                    <button className="edit-btn" onClick={() => openEditModal(b)}>
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {filteredBookings.length === 0 && (
              <tr>
                <td colSpan="9" className="empty-row">
                  No bookings match your search or filters
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{editingId === null ? "New Booking" : "Edit Booking"}</h2>

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="customer">Customer</label>
                  <input
                    id="customer"
                    name="customer"
                    type="text"
                    value={form.customer}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                  />
                  {errors.customer && <span className="field-error">{errors.customer}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="room">Room Type</label>
                  <select id="room" name="room" value={form.room} onChange={handleChange}>
                    {ROOM_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="hotel">Hotel</label>
                <input
                  id="hotel"
                  name="hotel"
                  type="text"
                  value={form.hotel}
                  onChange={handleChange}
                  placeholder="e.g. Grand Horizon"
                />
                {errors.hotel && <span className="field-error">{errors.hotel}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="checkIn">Check-In</label>
                  <input
                    id="checkIn"
                    name="checkIn"
                    type="date"
                    value={form.checkIn}
                    onChange={handleChange}
                  />
                  {errors.checkIn && <span className="field-error">{errors.checkIn}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="checkOut">Check-Out</label>
                  <input
                    id="checkOut"
                    name="checkOut"
                    type="date"
                    value={form.checkOut}
                    onChange={handleChange}
                  />
                  {errors.checkOut && <span className="field-error">{errors.checkOut}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="amount">Amount (₹)</label>
                  <input
                    id="amount"
                    name="amount"
                    type="number"
                    min="1"
                    value={form.amount}
                    onChange={handleChange}
                    placeholder="e.g. 9000"
                  />
                  {errors.amount && <span className="field-error">{errors.amount}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="status">Status</label>
                  <select
                    id="status"
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                  >
                    {STATUSES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="modal-actions">
                <button type="button" className="cancel-btn" onClick={closeModal}>
                  Cancel
                </button>
                <button type="submit" className="save-btn">
                  {editingId === null ? "Create Booking" : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {confirmAction !== null && (
        <div className="modal-overlay" onClick={cancelActionModal}>
          <div className="modal confirm-modal" onClick={(e) => e.stopPropagation()}>
            <h2>
              {confirmAction.type === "confirm" ? "Confirm this booking?" : "Cancel this booking?"}
            </h2>
            <p>
              Booking #{confirmAction.id} for{" "}
              {bookings.find((b) => b.id === confirmAction.id)?.customer} will be marked{" "}
              {confirmAction.type === "confirm" ? "Confirmed" : "Cancelled"}.
            </p>
            <div className="modal-actions">
              <button className="cancel-btn" onClick={cancelActionModal}>
                Go back
              </button>
              <button
                className={confirmAction.type === "confirm" ? "primary-confirm-btn" : "primary-cancel-btn"}
                onClick={applyStatusChange}
              >
                {confirmAction.type === "confirm" ? "Confirm Booking" : "Cancel Booking"}
              </button>
            </div>
          </div>
        </div>
      )}

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

export default ManageBookings;