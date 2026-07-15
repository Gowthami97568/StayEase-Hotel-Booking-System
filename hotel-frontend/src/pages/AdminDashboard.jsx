import { useMemo, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const REVENUE_TREND = [
  { month: "Feb", revenue: 175000 },
  { month: "Mar", revenue: 210000 },
  { month: "Apr", revenue: 230000 },
  { month: "May", revenue: 285000 },
  { month: "Jun", revenue: 260000 },
  { month: "Jul", revenue: 250000 },
];

const INITIAL_BOOKINGS = [
  { id: 101, customer: "Rahul Sharma", hotel: "Taj Goa", room: "Deluxe", status: "Confirmed" },
  { id: 102, customer: "Priya Singh", hotel: "Royal Palace", room: "Suite", status: "Confirmed" },
  { id: 103, customer: "Amit Kumar", hotel: "Sea View", room: "Luxury", status: "Pending" },
  { id: 104, customer: "Sneha Reddy", hotel: "Taj Goa", room: "Standard", status: "Confirmed" },
  { id: 105, customer: "Vikram Patel", hotel: "Coastal Inn", room: "Deluxe", status: "Cancelled" },
  { id: 106, customer: "Ananya Iyer", hotel: "Royal Palace", room: "Presidential", status: "Pending" },
];

const INITIAL_NOTIFICATIONS = [
  { id: 1, text: "3 new bookings awaiting confirmation", time: "10 min ago", read: false },
  { id: 2, text: "Sea View Resort added 2 new rooms", time: "1 hour ago", read: false },
  { id: 3, text: "Monthly revenue report is ready", time: "3 hours ago", read: false },
  { id: 4, text: "Customer Amit Kumar raised a support ticket", time: "Yesterday", read: true },
];

const INITIAL_TICKETS = [
  { id: 1, subject: "Refund not received", customer: "Amit Kumar", priority: "High", status: "Open" },
  { id: 2, subject: "Unable to update payment method", customer: "Divya Nair", priority: "Medium", status: "Open" },
  { id: 3, subject: "Invoice copy request", customer: "Rohan Gupta", priority: "Low", status: "Resolved" },
];

const emptyProfile = {
  name: "Admin User",
  email: "admin@stayease.com",
  phone: "9000000000",
  role: "Super Admin",
};

const emptyTicketForm = { subject: "", message: "", priority: "Medium" };

function formatINR(n) {
  return "\u20B9" + n.toLocaleString("en-IN");
}

function AdminDashboard() {
  const [bookings] = useState(INITIAL_BOOKINGS);
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
  const [tickets, setTickets] = useState(INITIAL_TICKETS);

  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  const [profile, setProfile] = useState(emptyProfile);
  const [profileForm, setProfileForm] = useState(emptyProfile);
  const [profileErrors, setProfileErrors] = useState({});

  const [ticketForm, setTicketForm] = useState(emptyTicketForm);
  const [ticketErrors, setTicketErrors] = useState({});

  const [toast, setToast] = useState(null);

  const showToast = (message) => {
    setToast(message);
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(() => setToast(null), 2500);
  };

  const unreadCount = useMemo(
    () => notifications.filter((n) => !n.read).length,
    [notifications]
  );

  const openTickets = useMemo(
    () => tickets.filter((t) => t.status === "Open").length,
    [tickets]
  );

  const statusClass = (status) => {
    if (status === "Confirmed") return "status-badge status-confirmed";
    if (status === "Pending") return "status-badge status-pending";
    return "status-badge status-cancelled";
  };

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const openProfileModal = () => {
    setProfileForm(profile);
    setProfileErrors({});
    setIsProfileOpen(true);
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileForm((prev) => ({ ...prev, [name]: value }));
  };

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const PHONE_RE = /^[6-9]\d{9}$/;

  const validateProfile = () => {
    const newErrors = {};
    if (!profileForm.name.trim()) newErrors.name = "Name is required";
    if (!EMAIL_RE.test(profileForm.email.trim())) newErrors.email = "Enter a valid email";
    if (!PHONE_RE.test(profileForm.phone.trim()))
      newErrors.phone = "Enter a valid 10-digit phone number";
    setProfileErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const saveProfile = (e) => {
    e.preventDefault();
    if (!validateProfile()) return;
    setProfile(profileForm);
    setIsProfileOpen(false);
    showToast("Profile updated");
  };

  const openSupportModal = () => {
    setTicketForm(emptyTicketForm);
    setTicketErrors({});
    setIsSupportOpen(true);
  };

  const handleTicketChange = (e) => {
    const { name, value } = e.target;
    setTicketForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateTicket = () => {
    const newErrors = {};
    if (!ticketForm.subject.trim()) newErrors.subject = "Subject is required";
    if (!ticketForm.message.trim()) newErrors.message = "Please describe the issue";
    setTicketErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitTicket = (e) => {
    e.preventDefault();
    if (!validateTicket()) return;
    const newId = tickets.length > 0 ? Math.max(...tickets.map((t) => t.id)) + 1 : 1;
    setTickets((prev) => [
      ...prev,
      {
        id: newId,
        subject: ticketForm.subject.trim(),
        customer: "Admin (internal)",
        priority: ticketForm.priority,
        status: "Open",
      },
    ]);
    setIsSupportOpen(false);
    showToast("Support ticket raised");
  };

  const resolveTicket = (id) => {
    setTickets((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: "Resolved" } : t))
    );
    showToast("Ticket marked resolved");
  };

  return (
    <div>
      <AdminSidebar />
      <AdminNavbar />

      <div className="dashboard-content">
        <style>{`
          .dashboard-content {
            margin-left: 260px;
            padding: 30px;
            background: #f4f6f9;
            min-height: 100vh;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            box-sizing: border-box;
          }
          .dashboard-content * { box-sizing: border-box; }

          .dashboard-top {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            flex-wrap: wrap;
            gap: 16px;
          }
          .dashboard-content h1 { color: #003580; margin: 0; }
          .dashboard-subtitle { color: #6c757d; font-size: 14px; margin: 4px 0 0; }

          .top-actions { display: flex; align-items: center; gap: 12px; }

          .icon-btn {
            position: relative;
            background: white;
            border: 1px solid #e5e9f0;
            border-radius: 10px;
            padding: 10px 12px;
            cursor: pointer;
            font-size: 14px;
            color: #003580;
            font-weight: 600;
            transition: background 0.2s ease, transform 0.15s ease;
          }
          .icon-btn:hover { background: #eef2f7; transform: translateY(-2px); }

          .badge-count {
            position: absolute;
            top: -6px;
            right: -6px;
            background: #dc3545;
            color: white;
            font-size: 11px;
            font-weight: 700;
            border-radius: 999px;
            padding: 2px 6px;
            min-width: 18px;
            text-align: center;
          }

          .profile-chip {
            display: flex;
            align-items: center;
            gap: 10px;
            background: white;
            border: 1px solid #e5e9f0;
            border-radius: 10px;
            padding: 8px 14px 8px 8px;
            cursor: pointer;
            transition: background 0.2s ease, transform 0.15s ease;
          }
          .profile-chip:hover { background: #eef2f7; transform: translateY(-2px); }
          .profile-avatar {
            width: 34px;
            height: 34px;
            border-radius: 50%;
            background: linear-gradient(135deg, #0d6efd, #0b5ed7);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 14px;
          }
          .profile-chip .profile-info { line-height: 1.2; text-align: left; }
          .profile-chip .profile-name { font-size: 13px; font-weight: 700; color: #1e293b; }
          .profile-chip .profile-role { font-size: 12px; color: #94a3b8; }

          .notif-panel {
            position: absolute;
            top: 64px;
            right: 30px;
            width: 320px;
            background: white;
            border-radius: 12px;
            box-shadow: 0 15px 40px rgba(0,0,0,0.2);
            z-index: 900;
            overflow: hidden;
          }
          .notif-panel-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 14px 16px;
            border-bottom: 1px solid #eef0f2;
          }
          .notif-panel-header h3 { margin: 0; font-size: 15px; color: #003580; }
          .notif-panel-header button {
            background: none;
            border: none;
            color: #0d6efd;
            font-size: 12px;
            cursor: pointer;
            font-weight: 600;
          }
          .notif-item {
            padding: 12px 16px;
            border-bottom: 1px solid #f4f6f9;
            font-size: 13px;
            color: #334155;
          }
          .notif-item:last-child { border-bottom: none; }
          .notif-item.unread { background: #f0f6ff; }
          .notif-time { display: block; margin-top: 4px; font-size: 11px; color: #94a3b8; }

          /* ---------- Stat Cards ---------- */
          .dashboard-cards {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 25px;
            margin-top: 30px;
          }

          .card {
            color: white;
            padding: 30px;
            border-radius: 15px;
            text-align: center;
            cursor: pointer;
            transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
          }
          .card:hover {
            transform: translateY(-6px);
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.18);
            filter: brightness(1.05);
          }
          .card h2 { font-weight: 500; letter-spacing: 0.3px; opacity: 0.9; margin: 0; font-size: 16px; }
          .card h1 { font-size: 42px; margin-top: 15px; color: white; }
          .card .trend { font-size: 13px; margin-top: 6px; opacity: 0.9; }

          .blue { background: linear-gradient(135deg, #0d6efd, #0b5ed7); }
          .green { background: linear-gradient(135deg, #198754, #157347); }
          .orange { background: linear-gradient(135deg, #fd7e14, #e8590c); }
          .red { background: linear-gradient(135deg, #dc3545, #bb2d3b); }

          /* ---------- Quick actions ---------- */
          .quick-actions {
            display: flex;
            gap: 14px;
            flex-wrap: wrap;
            margin-top: 30px;
          }
          .quick-action-btn {
            flex: 1;
            min-width: 160px;
            background: white;
            border: 1px solid #e5e9f0;
            border-radius: 12px;
            padding: 16px;
            text-align: left;
            cursor: pointer;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }
          .quick-action-btn:hover { transform: translateY(-3px); box-shadow: 0 8px 18px rgba(0,0,0,0.1); }
          .quick-action-btn .qa-title { font-weight: 700; color: #003580; font-size: 14px; }
          .quick-action-btn .qa-sub { font-size: 12px; color: #94a3b8; margin-top: 4px; }

          /* ---------- Two column layout ---------- */
          .dashboard-grid {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 25px;
            margin-top: 40px;
            align-items: start;
          }

          .panel {
            background: white;
            border-radius: 12px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            padding: 20px;
          }
          .panel h2 { color: #003580; margin: 0 0 16px; font-size: 18px; }

          .table-header {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 8px;
          }
          .table-header h2 { color: #003580; margin: 0; }
          .table-subtitle { color: #6c757d; font-size: 14px; }

          .table-wrapper {
            background: white;
            margin-top: 20px;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          }

          .booking-table { width: 100%; border-collapse: collapse; }
          .booking-table th, .booking-table td {
            padding: 15px; border-bottom: 1px solid #eef0f2; text-align: left;
          }
          .booking-table th { background: #003580; color: white; }
          .booking-table tbody tr { transition: background 0.2s ease; }
          .booking-table tbody tr:hover { background: #f0f6ff; }
          .booking-table tbody tr:last-child td { border-bottom: none; }

          .status-badge {
            display: inline-block;
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 13px;
            font-weight: 600;
            letter-spacing: 0.2px;
            transition: transform 0.2s ease;
          }
          .status-badge:hover { transform: scale(1.06); }
          .status-confirmed { background: #e6f7ee; color: #198754; }
          .status-pending { background: #fff4e5; color: #fd7e14; }
          .status-cancelled { background: #fdecee; color: #dc3545; }

          /* ---------- Support tickets ---------- */
          .ticket-item {
            padding: 12px 0;
            border-bottom: 1px solid #f0f2f5;
          }
          .ticket-item:last-child { border-bottom: none; }
          .ticket-top { display: flex; justify-content: space-between; align-items: center; gap: 8px; }
          .ticket-subject { font-weight: 600; color: #1e293b; font-size: 14px; }
          .ticket-meta { font-size: 12px; color: #94a3b8; margin-top: 3px; }
          .priority-tag {
            font-size: 11px;
            font-weight: 700;
            padding: 3px 8px;
            border-radius: 6px;
          }
          .priority-High { background: #fdecee; color: #dc3545; }
          .priority-Medium { background: #fff4e5; color: #fd7e14; }
          .priority-Low { background: #e6f7ee; color: #198754; }
          .resolve-btn {
            background: #0d6efd;
            color: white;
            border: none;
            padding: 6px 12px;
            border-radius: 6px;
            font-size: 12px;
            cursor: pointer;
          }
          .resolve-btn:hover { background: #0047b3; }
          .resolved-tag { font-size: 12px; color: #198754; font-weight: 600; }
          .raise-ticket-btn {
            width: 100%;
            margin-top: 14px;
            background: #003580;
            color: white;
            border: none;
            padding: 10px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
          }
          .raise-ticket-btn:hover { background: #00265e; }

          /* ---------- Modal ---------- */
          .modal-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.45);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            padding: 16px;
          }
          .modal {
            background: white;
            border-radius: 12px;
            padding: 30px;
            width: 440px;
            max-width: 100%;
            max-height: 90vh;
            overflow-y: auto;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
          }
          .modal h2 { color: #003580; margin-bottom: 20px; }
          .form-group { margin-bottom: 16px; display: flex; flex-direction: column; }
          .form-group label { font-size: 14px; font-weight: 600; color: #444; margin-bottom: 6px; }
          .form-group input, .form-group select, .form-group textarea {
            padding: 10px 12px;
            border: 1px solid #ccc;
            border-radius: 8px;
            font-size: 15px;
            outline: none;
            font-family: inherit;
          }
          .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
            border-color: #0d6efd;
            box-shadow: 0 0 0 3px rgba(13, 110, 253, 0.15);
          }
          .field-error { color: crimson; font-size: 13px; margin-top: 4px; }
          .modal-actions { display: flex; justify-content: flex-end; gap: 12px; margin-top: 20px; }
          .cancel-btn { background: #e9ecef; color: #333; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer; }
          .cancel-btn:hover { background: #dee2e6; }
          .save-btn { background: #0d6efd; color: white; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer; }
          .save-btn:hover { background: #0047b3; }

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
          }

          @media (max-width: 1100px) {
            .dashboard-grid { grid-template-columns: 1fr; }
          }
          @media (max-width: 900px) {
            .dashboard-cards { grid-template-columns: repeat(2, 1fr); }
          }
          @media (max-width: 640px) {
            .dashboard-content { margin-left: 0; padding: 16px; }
            .dashboard-cards { grid-template-columns: 1fr; }
            .notif-panel { right: 16px; width: calc(100% - 32px); }
          }
        `}</style>

        <div className="dashboard-top">
          <div>
            <h1>Dashboard Overview</h1>
            <p className="dashboard-subtitle">Welcome back, here's what's happening today</p>
          </div>

          <div className="top-actions">
            <button className="icon-btn" onClick={() => setIsNotifOpen((v) => !v)}>
              Notifications
              {unreadCount > 0 && <span className="badge-count">{unreadCount}</span>}
            </button>

            <button className="icon-btn" onClick={openSupportModal}>
              Support
              {openTickets > 0 && <span className="badge-count">{openTickets}</span>}
            </button>

            <div className="profile-chip" onClick={openProfileModal}>
              <div className="profile-avatar">
                {profile.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()}
              </div>
              <div className="profile-info">
                <div className="profile-name">{profile.name}</div>
                <div className="profile-role">{profile.role}</div>
              </div>
            </div>
          </div>
        </div>

        {isNotifOpen && (
          <div className="notif-panel">
            <div className="notif-panel-header">
              <h3>Notifications</h3>
              <button onClick={markAllRead}>Mark all read</button>
            </div>
            {notifications.map((n) => (
              <div key={n.id} className={`notif-item ${n.read ? "" : "unread"}`}>
                {n.text}
                <span className="notif-time">{n.time}</span>
              </div>
            ))}
          </div>
        )}

        <div className="dashboard-cards">
          <div className="card blue">
            <h2>Hotels</h2>
            <h1>10</h1>
            <div className="trend">+2 this quarter</div>
          </div>

          <div className="card green">
            <h2>Rooms</h2>
            <h1>120</h1>
            <div className="trend">92 occupied today</div>
          </div>

          <div className="card orange">
            <h2>Bookings</h2>
            <h1>84</h1>
            <div className="trend">+12% vs last month</div>
          </div>

          <div className="card red">
            <h2>Revenue</h2>
            <h1>₹2.5L</h1>
            <div className="trend">+8% vs last month</div>
          </div>
        </div>

        <div className="quick-actions">
          <button className="quick-action-btn" onClick={openProfileModal}>
            <div className="qa-title">Profile Settings</div>
            <div className="qa-sub">Update your admin account</div>
          </button>
        </div>

        <div className="dashboard-grid">
          <div className="panel">
            <div className="table-header">
              <h2>Recent Bookings</h2>
              <span className="table-subtitle">Last 24 hours</span>
            </div>

            <div className="table-wrapper">
              <table className="booking-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Customer</th>
                    <th>Hotel</th>
                    <th>Room</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((b) => (
                    <tr key={b.id}>
                      <td>#{b.id}</td>
                      <td>{b.customer}</td>
                      <td>{b.hotel}</td>
                      <td>{b.room}</td>
                      <td>
                        <span className={statusClass(b.status)}>{b.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 style={{ marginTop: "30px" }}>Revenue Trend</h2>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={REVENUE_TREND} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="revFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0d6efd" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#0d6efd" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#eef0f2" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} tickFormatter={(v) => `${v / 1000}k`} />
                <Tooltip formatter={(v) => formatINR(v)} />
                <Area type="monotone" dataKey="revenue" stroke="#0d6efd" strokeWidth={3} fill="url(#revFill)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="panel">
            <h2>Customer Support</h2>
            {tickets.map((t) => (
              <div key={t.id} className="ticket-item">
                <div className="ticket-top">
                  <span className="ticket-subject">{t.subject}</span>
                  {t.status === "Open" ? (
                    <button className="resolve-btn" onClick={() => resolveTicket(t.id)}>
                      Resolve
                    </button>
                  ) : (
                    <span className="resolved-tag">Resolved</span>
                  )}
                </div>
                <div className="ticket-meta">
                  {t.customer} · <span className={`priority-tag priority-${t.priority}`}>{t.priority}</span>
                </div>
              </div>
            ))}
            <button className="raise-ticket-btn" onClick={openSupportModal}>
              + Raise a Ticket
            </button>
          </div>
        </div>
      </div>

      {isProfileOpen && (
        <div className="modal-overlay" onClick={() => setIsProfileOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Profile Settings</h2>
            <form onSubmit={saveProfile} noValidate>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  name="name"
                  value={profileForm.name}
                  onChange={handleProfileChange}
                />
                {profileErrors.name && <span className="field-error">{profileErrors.name}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={profileForm.email}
                  onChange={handleProfileChange}
                />
                {profileErrors.email && <span className="field-error">{profileErrors.email}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  value={profileForm.phone}
                  onChange={handleProfileChange}
                />
                {profileErrors.phone && <span className="field-error">{profileErrors.phone}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="role">Role</label>
                <select id="role" name="role" value={profileForm.role} onChange={handleProfileChange}>
                  <option value="Super Admin">Super Admin</option>
                  <option value="Hotel Manager">Hotel Manager</option>
                  <option value="Support Staff">Support Staff</option>
                </select>
              </div>
              <div className="modal-actions">
                <button type="button" className="cancel-btn" onClick={() => setIsProfileOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="save-btn">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isSupportOpen && (
        <div className="modal-overlay" onClick={() => setIsSupportOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Raise a Support Ticket</h2>
            <form onSubmit={submitTicket} noValidate>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  value={ticketForm.subject}
                  onChange={handleTicketChange}
                  placeholder="e.g. Payment gateway issue"
                />
                {ticketErrors.subject && <span className="field-error">{ticketErrors.subject}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="priority">Priority</label>
                <select id="priority" name="priority" value={ticketForm.priority} onChange={handleTicketChange}>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={ticketForm.message}
                  onChange={handleTicketChange}
                  placeholder="Describe the issue..."
                />
                {ticketErrors.message && <span className="field-error">{ticketErrors.message}</span>}
              </div>
              <div className="modal-actions">
                <button type="button" className="cancel-btn" onClick={() => setIsSupportOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="save-btn">
                  Submit Ticket
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

export default AdminDashboard;