import { useState, useMemo } from "react";

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  city: "",
};

const INITIAL_CUSTOMERS = [
  { id: 1, name: "Rahul Sharma", email: "rahul@gmail.com", phone: "9876543210", city: "Goa", bookings: 5, status: "Active", joined: "2024-01-12" },
  { id: 2, name: "Priya Singh", email: "priya@gmail.com", phone: "9123456780", city: "Mysore", bookings: 2, status: "Active", joined: "2024-02-20" },
  { id: 3, name: "Amit Kumar", email: "amit@gmail.com", phone: "9988776655", city: "Hyderabad", bookings: 1, status: "Blocked", joined: "2024-03-05" },
  { id: 4, name: "Sneha Reddy", email: "sneha@gmail.com", phone: "9871234567", city: "Bangalore", bookings: 4, status: "Active", joined: "2024-03-18" },
  { id: 5, name: "Vikram Patel", email: "vikram@gmail.com", phone: "9812345670", city: "Goa", bookings: 3, status: "Active", joined: "2024-04-02" },
  { id: 6, name: "Ananya Iyer", email: "ananya@gmail.com", phone: "9765432180", city: "Chennai", bookings: 7, status: "Active", joined: "2024-04-25" },
  { id: 7, name: "Karthik Menon", email: "karthik@gmail.com", phone: "9654321870", city: "Hyderabad", bookings: 2, status: "Blocked", joined: "2024-05-10" },
  { id: 8, name: "Divya Nair", email: "divya@gmail.com", phone: "9543218760", city: "Mysore", bookings: 1, status: "Active", joined: "2024-05-30" },
  { id: 9, name: "Rohan Gupta", email: "rohan@gmail.com", phone: "9432187650", city: "Bangalore", bookings: 6, status: "Active", joined: "2024-06-14" },
  { id: 10, name: "Meera Joshi", email: "meera@gmail.com", phone: "9321876540", city: "Goa", bookings: 3, status: "Blocked", joined: "2024-06-28" },
  { id: 11, name: "Arjun Nayar", email: "arjun@gmail.com", phone: "9218765430", city: "Chennai", bookings: 2, status: "Active", joined: "2024-07-08" },
  { id: 12, name: "Kavya Rao", email: "kavya@gmail.com", phone: "9187654320", city: "Bangalore", bookings: 4, status: "Active", joined: "2024-07-19" },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[6-9]\d{9}$/;

function Customers() {
  const [customers, setCustomers] = useState(INITIAL_CUSTOMERS);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [cityFilter, setCityFilter] = useState("All");
  const [sortBy, setSortBy] = useState("id");
  const [sortDir, setSortDir] = useState("asc");

  const [isAddOpen, setIsAddOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  const [viewCustomer, setViewCustomer] = useState(null);
  const [blockTarget, setBlockTarget] = useState(null); // customer object
  const [toast, setToast] = useState(null);

  const showToast = (message) => {
    setToast(message);
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(() => setToast(null), 2500);
  };

  const cityOptions = useMemo(
    () => ["All", ...new Set(customers.map((c) => c.city))],
    [customers]
  );

  const stats = useMemo(() => {
    const total = customers.length;
    const active = customers.filter((c) => c.status === "Active").length;
    const blocked = customers.filter((c) => c.status === "Blocked").length;
    const totalBookings = customers.reduce((sum, c) => sum + c.bookings, 0);
    return { total, active, blocked, totalBookings };
  }, [customers]);

  const filteredCustomers = useMemo(() => {
    const q = search.trim().toLowerCase();
    const result = customers.filter((c) => {
      const matchesSearch =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.email.toLowerCase().includes(q) ||
        c.phone.includes(q) ||
        c.city.toLowerCase().includes(q);
      const matchesStatus = statusFilter === "All" || c.status === statusFilter;
      const matchesCity = cityFilter === "All" || c.city === cityFilter;
      return matchesSearch && matchesStatus && matchesCity;
    });

    const dir = sortDir === "asc" ? 1 : -1;
    result.sort((a, b) => {
      if (sortBy === "id" || sortBy === "bookings") {
        return (a[sortBy] - b[sortBy]) * dir;
      }
      return String(a[sortBy]).localeCompare(String(b[sortBy]), undefined, {
        numeric: true,
      }) * dir;
    });

    return result;
  }, [customers, search, statusFilter, cityFilter, sortBy, sortDir]);

  const toggleSort = (field) => {
    if (sortBy === field) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(field);
      setSortDir("asc");
    }
  };

  const sortArrow = (field) => {
    if (sortBy !== field) return "";
    return sortDir === "asc" ? " \u25B2" : " \u25BC";
  };

  const clearFilters = () => {
    setSearch("");
    setStatusFilter("All");
    setCityFilter("All");
  };

  const openAddModal = () => {
    setForm(emptyForm);
    setErrors({});
    setIsAddOpen(true);
  };

  const closeAddModal = () => setIsAddOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!EMAIL_RE.test(form.email.trim()))
      newErrors.email = "Enter a valid email address";
    else if (
      customers.some((c) => c.email.toLowerCase() === form.email.trim().toLowerCase())
    )
      newErrors.email = "A customer with this email already exists";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!PHONE_RE.test(form.phone.trim()))
      newErrors.phone = "Enter a valid 10-digit phone number";
    if (!form.city.trim()) newErrors.city = "City is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newId = customers.length > 0 ? Math.max(...customers.map((c) => c.id)) + 1 : 1;
    const newCustomer = {
      id: newId,
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      city: form.city.trim(),
      bookings: 0,
      status: "Active",
      joined: new Date().toISOString().slice(0, 10),
    };
    setCustomers((prev) => [...prev, newCustomer]);
    showToast(`${newCustomer.name} added`);
    setIsAddOpen(false);
  };

  const requestBlockToggle = (customer) => setBlockTarget(customer);
  const cancelBlockToggle = () => setBlockTarget(null);

  const confirmBlockToggle = () => {
    if (!blockTarget) return;
    const nextStatus = blockTarget.status === "Active" ? "Blocked" : "Active";
    setCustomers((prev) =>
      prev.map((c) => (c.id === blockTarget.id ? { ...c, status: nextStatus } : c))
    );
    showToast(`${blockTarget.name} ${nextStatus === "Blocked" ? "blocked" : "unblocked"}`);
    setBlockTarget(null);
  };

  return (
    <div className="customers-page">
      <style>{`
        .customers-page {
          padding: 30px;
          background: #f5f7fb;
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          box-sizing: border-box;
        }
        .customers-page * { box-sizing: border-box; }

        .customers-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          flex-wrap: wrap;
          gap: 12px;
        }
        .customers-header h1 { color: #003580; margin: 0; }
        .customers-header p.subtitle { margin: 4px 0 0; color: #64748b; font-size: 14px; }

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
        .stat-card.active-c { border-left-color: #198754; }
        .stat-card.blocked-c { border-left-color: #dc3545; }
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
          border: 1px solid #ccc;
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

        .result-count { color: #64748b; font-size: 13px; margin: -8px 0 14px; }

        /* ---------- Table ---------- */
        .table-wrapper {
          background: white;
          border-radius: 10px;
          overflow-x: auto;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        table { width: 100%; border-collapse: collapse; background: white; min-width: 820px; }

        th {
          background: #003580;
          color: white;
          padding: 15px;
          text-align: center;
          white-space: nowrap;
        }
        th.sortable { cursor: pointer; user-select: none; }
        th.sortable:hover { background: #00265e; }

        td { padding: 15px; text-align: center; border-bottom: 1px solid #eee; white-space: nowrap; }

        tbody tr { transition: background 0.2s ease; }
        tbody tr:hover { background: #f0f6ff; }
        tbody tr:last-child td { border-bottom: none; }

        .empty-row { padding: 30px; color: #888; font-style: italic; }

        .active, .blocked {
          background: #d4edda;
          color: #198754;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 700;
          display: inline-block;
        }
        .blocked { background: #f8d7da; color: #dc3545; }

        .actions-cell { display: flex; gap: 8px; justify-content: center; }

        .view-btn {
          background: #0d6efd;
          color: white;
          border: none;
          padding: 8px 14px;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.15s ease;
        }
        .view-btn:hover { background: #0047b3; transform: translateY(-2px); }

        .block-btn {
          background: #dc3545;
          color: white;
          border: none;
          padding: 8px 14px;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.15s ease;
        }
        .block-btn:hover { background: #b02a37; transform: translateY(-2px); }

        .block-btn.unblock { background: #198754; }
        .block-btn.unblock:hover { background: #146c43; }

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
          width: 440px;
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

        .detail-row {
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
          border-bottom: 1px solid #eee;
        }
        .detail-row:last-child { border-bottom: none; }
        .detail-row .label { color: #64748b; font-size: 14px; }
        .detail-row .value { color: #1e293b; font-weight: 600; font-size: 14px; }

        .form-group { margin-bottom: 16px; display: flex; flex-direction: column; }
        .form-group label { font-size: 14px; font-weight: 600; color: #444; margin-bottom: 6px; }
        .form-group input {
          padding: 10px 12px;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 15px;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .form-group input:focus {
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

        .danger-btn {
          background: #dc3545;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.15s ease;
        }
        .danger-btn:hover { background: #b02a37; transform: translateY(-2px); }

        .danger-btn.unblock { background: #198754; }
        .danger-btn.unblock:hover { background: #146c43; }

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
          .customers-page { padding: 16px; }
          .search-box { max-width: none; }
        }
      `}</style>

      <div className="customers-header">
        <div>
          <h1>Customers</h1>
          <p className="subtitle">
            {stats.total} customers · {stats.totalBookings} total bookings
          </p>
        </div>
        <button className="add-btn" onClick={openAddModal}>
          + Add Customer
        </button>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Total Customers</div>
          <div className="stat-value">{stats.total}</div>
        </div>
        <div className="stat-card active-c">
          <div className="stat-label">Active</div>
          <div className="stat-value">{stats.active}</div>
        </div>
        <div className="stat-card blocked-c">
          <div className="stat-label">Blocked</div>
          <div className="stat-value">{stats.blocked}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Total Bookings</div>
          <div className="stat-value">{stats.totalBookings}</div>
        </div>
      </div>

      <div className="toolbar">
        <input
          type="text"
          placeholder="Search Customer..."
          className="search-box"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="filter-select"
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
        >
          {cityOptions.map((c) => (
            <option key={c} value={c}>
              {c === "All" ? "All Cities" : c}
            </option>
          ))}
        </select>

        <select
          className="filter-select"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All Statuses</option>
          <option value="Active">Active</option>
          <option value="Blocked">Blocked</option>
        </select>

        <button className="clear-btn" onClick={clearFilters}>
          Clear filters
        </button>
      </div>

      <p className="result-count">
        Showing {filteredCustomers.length} of {customers.length} customers
      </p>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th className="sortable" onClick={() => toggleSort("id")}>
                ID{sortArrow("id")}
              </th>
              <th className="sortable" onClick={() => toggleSort("name")}>
                Name{sortArrow("name")}
              </th>
              <th className="sortable" onClick={() => toggleSort("email")}>
                Email{sortArrow("email")}
              </th>
              <th>Phone</th>
              <th className="sortable" onClick={() => toggleSort("city")}>
                City{sortArrow("city")}
              </th>
              <th className="sortable" onClick={() => toggleSort("bookings")}>
                Bookings{sortArrow("bookings")}
              </th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredCustomers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>{customer.city}</td>
                <td>{customer.bookings}</td>
                <td>
                  <span className={customer.status === "Active" ? "active" : "blocked"}>
                    {customer.status}
                  </span>
                </td>
                <td>
                  <div className="actions-cell">
                    <button className="view-btn" onClick={() => setViewCustomer(customer)}>
                      View
                    </button>
                    <button
                      className={
                        customer.status === "Active" ? "block-btn" : "block-btn unblock"
                      }
                      onClick={() => requestBlockToggle(customer)}
                    >
                      {customer.status === "Active" ? "Block" : "Unblock"}
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {filteredCustomers.length === 0 && (
              <tr>
                <td colSpan="8" className="empty-row">
                  No customers match your search or filters
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isAddOpen && (
        <div className="modal-overlay" onClick={closeAddModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Add Customer</h2>
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Neha Verma"
                />
                {errors.name && <span className="field-error">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="e.g. neha@gmail.com"
                />
                {errors.email && <span className="field-error">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="e.g. 9876543210"
                />
                {errors.phone && <span className="field-error">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="e.g. Pune"
                />
                {errors.city && <span className="field-error">{errors.city}</span>}
              </div>

              <div className="modal-actions">
                <button type="button" className="cancel-btn" onClick={closeAddModal}>
                  Cancel
                </button>
                <button type="submit" className="save-btn">
                  Add Customer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {viewCustomer && (
        <div className="modal-overlay" onClick={() => setViewCustomer(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{viewCustomer.name}</h2>
            <div className="detail-row">
              <span className="label">Customer ID</span>
              <span className="value">#{viewCustomer.id}</span>
            </div>
            <div className="detail-row">
              <span className="label">Email</span>
              <span className="value">{viewCustomer.email}</span>
            </div>
            <div className="detail-row">
              <span className="label">Phone</span>
              <span className="value">{viewCustomer.phone}</span>
            </div>
            <div className="detail-row">
              <span className="label">City</span>
              <span className="value">{viewCustomer.city}</span>
            </div>
            <div className="detail-row">
              <span className="label">Total Bookings</span>
              <span className="value">{viewCustomer.bookings}</span>
            </div>
            <div className="detail-row">
              <span className="label">Customer Since</span>
              <span className="value">{viewCustomer.joined}</span>
            </div>
            <div className="detail-row">
              <span className="label">Status</span>
              <span className="value">
                <span className={viewCustomer.status === "Active" ? "active" : "blocked"}>
                  {viewCustomer.status}
                </span>
              </span>
            </div>
            <div className="modal-actions">
              <button className="cancel-btn" onClick={() => setViewCustomer(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {blockTarget && (
        <div className="modal-overlay" onClick={cancelBlockToggle}>
          <div className="modal confirm-modal" onClick={(e) => e.stopPropagation()}>
            <h2>
              {blockTarget.status === "Active" ? "Block this customer?" : "Unblock this customer?"}
            </h2>
            <p>
              {blockTarget.status === "Active"
                ? `${blockTarget.name} will no longer be able to make new bookings.`
                : `${blockTarget.name} will regain access to make bookings.`}
            </p>
            <div className="modal-actions">
              <button className="cancel-btn" onClick={cancelBlockToggle}>
                Go back
              </button>
              <button
                className={blockTarget.status === "Active" ? "danger-btn" : "danger-btn unblock"}
                onClick={confirmBlockToggle}
              >
                {blockTarget.status === "Active" ? "Block Customer" : "Unblock Customer"}
              </button>
            </div>
          </div>
        </div>
      )}

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

export default Customers;