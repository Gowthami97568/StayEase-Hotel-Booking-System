import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Modal from "../components/Modal";
import { hotelAdminService } from "../services/hotelService";
import "./AdminDashboard.css";
import "./AdminHotels.css";

const emptyForm = { name: "", location: "", address: "", pricePerNight: "", image: "" };

function AdminHotels() {
  const [hotels, setHotels] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);

  const loadHotels = () => hotelAdminService.getAllHotelsAdmin().then(setHotels);

  useEffect(() => { loadHotels(); }, []);

  const openAdd = () => {
    setEditingId(null);
    setForm(emptyForm);
    setShowModal(true);
  };

  const openEdit = (hotel) => {
    setEditingId(hotel.id);
    setForm({
      name: hotel.name, location: hotel.location, address: hotel.address,
      pricePerNight: hotel.pricePerNight, image: hotel.image,
    });
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...form, pricePerNight: Number(form.pricePerNight) };
    if (editingId) {
      await hotelAdminService.updateHotel(editingId, payload);
    } else {
      await hotelAdminService.addHotel(payload);
    }
    setShowModal(false);
    loadHotels();
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this hotel? This cannot be undone.")) return;
    await hotelAdminService.deleteHotel(id);
    loadHotels();
  };

  return (
    <div className="admin-layout">
      <Sidebar />
      <main className="admin-main">
        <header className="admin-main__header">
          <div className="admin-main__header-row">
            <div>
              <h1>Hotels</h1>
              <p>Manage all properties listed on StayEase.</p>
            </div>
            <button className="btn-primary btn-inline" onClick={openAdd}>+ Add Hotel</button>
          </div>
        </header>

        <section className="admin-panel">
          <div className="hotel-manage-grid">
            {hotels.map((hotel) => (
              <div className="hotel-manage-card" key={hotel.id}>
                <img src={hotel.image} alt={hotel.name} />
                <div className="hotel-manage-card__body">
                  <h3>{hotel.name}</h3>
                  <p className="muted">📍 {hotel.location}</p>
                  <p className="muted">{hotel.roomCount} room types · ₹{hotel.pricePerNight}/night</p>
                  <div className="hotel-manage-card__actions">
                    <button className="btn-secondary btn-sm" onClick={() => openEdit(hotel)}>Edit</button>
                    <button className="btn-danger btn-sm" onClick={() => handleDelete(hotel.id)}>Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {showModal && (
        <Modal title={editingId ? "Edit Hotel" : "Add Hotel"} onClose={() => setShowModal(false)}>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Hotel Name</label>
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
            </div>
            <div className="form-group">
              <label>Location (City)</label>
              <input value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} required />
            </div>
            <div className="form-group">
              <label>Full Address</label>
              <input value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} required />
            </div>
            <div className="form-group">
              <label>Price per Night (₹)</label>
              <input type="number" value={form.pricePerNight} onChange={(e) => setForm({ ...form, pricePerNight: e.target.value })} required />
            </div>
            <div className="form-group">
              <label>Image URL</label>
              <input value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} required />
            </div>
            <button type="submit" className="btn-primary">{editingId ? "Save Changes" : "Add Hotel"}</button>
          </form>
        </Modal>
      )}
    </div>
  );
}

export default AdminHotels;