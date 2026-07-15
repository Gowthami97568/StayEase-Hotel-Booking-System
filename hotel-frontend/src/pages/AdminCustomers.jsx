import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { adminService } from "../services/adminService";
import "./AdminDashboard.css";

function AdminCustomers() {
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState("");

  const loadCustomers = () => adminService.getAllCustomers().then(setCustomers);

  useEffect(() => { loadCustomers(); }, []);

  const handleDelete = async (id) => {
    if (!confirm("Remove this customer account?")) return;
    await adminService.deleteCustomer(id);
    loadCustomers();
  };

  const filtered = customers.filter(
    (c) => c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="admin-layout">
      <Sidebar />
      <main className="admin-main">
        <header className="admin-main__header">
          <h1>Customers</h1>
          <p>View and manage registered customers.</p>
        </header>

        <section className="admin-panel">
          <input
            className="admin-search"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="table-wrap" style={{ marginTop: 16 }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Bookings</th>
                  <th>Joined</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((c) => (
                  <tr key={c.id}>
                    <td>{c.name}</td>
                    <td>{c.email}</td>
                    <td>{c.phone}</td>
                    <td>{c.bookings}</td>
                    <td>{c.joined}</td>
                    <td><button className="btn-danger btn-sm" onClick={() => handleDelete(c.id)}>Delete</button></td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr><td colSpan={6} className="muted">No customers match your search.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdminCustomers;